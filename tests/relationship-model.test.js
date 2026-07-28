const test = require("node:test");
const assert = require("node:assert/strict");
const { createArtifactRepository } = require("../js/artifact-model.js");
const {
	createRelationshipRepository,
	createLifecyclePolicy,
	createSemanticPolicy
} = require("../js/relationship-model.js");
const { ACTIONS, createAuthorityPolicy } = require("../js/authority-policy.js");

function memoryAdapter() {
	let value = null;
	return {
		loadStore: () => value === null ? null : structuredClone(value),
		saveStore: store => { value = structuredClone(store); }
	};
}

function setup() {
	let sequence = 0;
	const owner = { id: "owner", name: "Owner", role: "owner" };
	const watson = { id: "watson", name: "Watson", role: "watson" };
	const artifactStorage = memoryAdapter();
	const relationshipStorage = memoryAdapter();
	const artifacts = createArtifactRepository({
		storageAdapter: artifactStorage,
		matterId: "MAT-REL",
		clock: () => `2026-07-27T10:00:${String(sequence++).padStart(2, "0")}.000Z`,
		idGenerator: () => `artifact-event-${sequence++}`
	});
	const createArtifact = id => artifacts.create({
		id,
		type: "Evidence",
		content: { wording: id },
		owner,
		provenance: {
			method: "owner-authored",
			origin: { kind: "test", label: "Contract test" },
			author: owner,
			circumstance: "Relationship contract test.",
			rawInput: id
		}
	});
	createArtifact("artifact-a");
	createArtifact("artifact-b");
	createArtifact("artifact-c");
	const relationships = createRelationshipRepository({
		storageAdapter: relationshipStorage,
		matterId: "MAT-REL",
		artifactRepository: artifacts,
		clock: () => `2026-07-27T11:00:${String(sequence++).padStart(2, "0")}.000Z`,
		idGenerator: () => `relationship-event-${sequence++}`
	});
	const proposal = (overrides = {}) => ({
		id: "relationship-1",
		sourceArtifactId: "artifact-a",
		targetArtifactId: "artifact-b",
		semanticType: "evidence-for",
		direction: "directed",
		governingAuthority: owner,
		provenance: {
			method: "watson-proposal",
			origin: { kind: "analysis", label: "Watson review" },
			proposer: watson,
			circumstance: "Watson interpreted two artifacts.",
			evidenceBasis: ["artifact-a"],
			rawProposal: "A may support B."
		},
		uncertainty: {
			confidence: "plausible",
			evidenceArtifactIds: ["artifact-a"],
			unresolvedQuestions: ["Is there another explanation?"],
			scope: "Contract test",
			assumptions: ["Definitions are stable."]
		},
		...overrides
	});
	return { owner, watson, artifacts, relationships, relationshipStorage, proposal };
}

test("Relationship has stable identity, immutable provenance, history, and consistent Artifact references", () => {
	const { owner, artifacts, relationships, relationshipStorage, proposal } = setup();
	const created = relationships.propose(proposal());
	const accepted = relationships.accept(created.id, owner, "Owner accepted the interpretation.");
	const reloaded = createRelationshipRepository({
		storageAdapter: relationshipStorage,
		matterId: "MAT-REL",
		artifactRepository: artifacts
	}).get(created.id);

	assert.equal(reloaded.id, created.id);
	assert.equal(reloaded.lifecycle.stage, "accepted");
	assert.deepEqual(reloaded.provenance, created.provenance);
	assert.ok(artifacts.get("artifact-a").relationshipRefs.includes(created.id));
	assert.ok(artifacts.get("artifact-b").relationshipRefs.includes(created.id));
	assert.equal(accepted.history.at(-1).type, "relationship.accepted");
	assert.equal(relationships.validateIntegrity(), true);
});

test("Relationship ensure is idempotent and rejects identity conflicts without mutation", () => {
	const { relationships, relationshipStorage, proposal } = setup();
	const created = relationships.ensure(proposal());
	const before = relationshipStorage.loadStore();
	assert.deepEqual(relationships.ensure(proposal()), created);
	let matterConflict;
	try {
		relationships.ensure(proposal({ matterId: "MAT-OTHER" }));
	} catch (error) {
		matterConflict = error;
	}
	assert.match(matterConflict.message, /another Matter/);
	assert.equal(matterConflict.name, "IdentityConflictError");
	assert.equal(matterConflict.code, "IDENTITY_CONFLICT");
	assert.throws(() => relationships.ensure(proposal({ targetArtifactId: "artifact-c" })), /endpoints/);
	assert.throws(() => relationships.ensure(proposal({
		provenance: { ...proposal().provenance, circumstance: "Conflicting origin." }
	})), /initial provenance/);
	assert.deepEqual(relationshipStorage.loadStore(), before);
});

test("Positive authority contract denies unknown and source roles and requires explicit delegate grants", () => {
	const policy = createAuthorityPolicy({
		delegateGrant: (actor, action, context) => actor.id === "delegate-1"
			&& action === ACTIONS.RELATIONSHIP_GOVERN
			&& context.relationshipId === "relationship-1"
	});
	assert.equal(policy.allows({ id: "unknown", name: "Unknown", role: "other" }, ACTIONS.RELATIONSHIP_PROPOSE), false);
	assert.equal(policy.allows({ id: "source", name: "Source", role: "source" }, ACTIONS.RELATIONSHIP_GOVERN), false);
	assert.equal(policy.allows({ id: "watson", name: "Watson", role: "watson" }, ACTIONS.RELATIONSHIP_PROPOSE), true);
	assert.equal(policy.allows({ id: "watson", name: "Watson", role: "watson" }, ACTIONS.RELATIONSHIP_GOVERN), false);
	assert.equal(policy.allows({ id: "system", name: "System", role: "system" }, ACTIONS.ARTIFACT_RELATIONSHIP_RECOVER), false);
	assert.equal(policy.allows(
		{ id: "system", name: "System", role: "system" },
		ACTIONS.ARTIFACT_RELATIONSHIP_RECOVER,
		{ systemOperation: true }
	), true);
	assert.equal(policy.allows(
		{ id: "delegate-1", name: "Delegate", role: "delegate" },
		ACTIONS.RELATIONSHIP_GOVERN,
		{ relationshipId: "relationship-1" }
	), true);
	assert.equal(policy.allows(
		{ id: "delegate-2", name: "Delegate", role: "delegate" },
		ACTIONS.RELATIONSHIP_GOVERN,
		{ relationshipId: "relationship-1" }
	), false);
});

test("endpoints must exist in one Matter and cannot form a self-link", () => {
	const { relationships, proposal } = setup();
	assert.throws(() => relationships.propose(proposal({ id: "missing", targetArtifactId: "missing" })), /existing Artifact/);
	assert.throws(() => relationships.propose(proposal({ id: "self", targetArtifactId: "artifact-a" })), /itself/);

	const foreignArtifacts = {
		get: id => ({ id, matterId: id === "foreign" ? "MAT-OTHER" : "MAT-REL", relationshipRefs: [] }),
		list: () => [],
		attachRelationshipRef() {},
		detachRelationshipRef() {}
	};
	const foreignRepository = createRelationshipRepository({
		storageAdapter: memoryAdapter(),
		matterId: "MAT-REL",
		artifactRepository: foreignArtifacts
	});
	assert.throws(() => foreignRepository.propose(proposal({ id: "cross", targetArtifactId: "foreign" })), /another Matter/);
});

test("Repository recovers dangling Artifact relationship references without blocking startup", () => {
	const { owner, artifacts } = setup();
	artifacts.attachRelationshipRef("artifact-a", "missing-relationship", owner, "Injected corruption for contract validation.");
	const recovered = createRelationshipRepository({
		storageAdapter: memoryAdapter(),
		matterId: "MAT-REL",
		artifactRepository: artifacts
	});
	assert.equal(recovered.validateIntegrity(), true);
	assert.equal(artifacts.get("artifact-a").relationshipRefs.includes("missing-relationship"), false);
	assert.equal(artifacts.get("artifact-a").history.at(-1).type, "artifact.relationship.detached");
	assert.equal(artifacts.get("artifact-a").history.at(-1).actor.role, "system");
	recovered.recoverPendingOperations();
	assert.equal(artifacts.get("artifact-a").history.filter(event => event.type === "artifact.relationship.detached").length, 1);
});

test("Repository quarantines a malformed Relationship and removes its endpoint references", () => {
	const { owner, artifacts, relationshipStorage, proposal } = setup();
	const repository = createRelationshipRepository({
		storageAdapter: relationshipStorage,
		matterId: "MAT-REL",
		artifactRepository: artifacts
	});
	const created = repository.propose(proposal());
	const stored = relationshipStorage.loadStore();
	stored.relationships[created.id].semantic.type = "not-canonical";
	relationshipStorage.saveStore(stored);

	const recovered = createRelationshipRepository({
		storageAdapter: relationshipStorage,
		matterId: "MAT-REL",
		artifactRepository: artifacts
	});
	assert.equal(recovered.get(created.id), null);
	assert.equal(artifacts.get("artifact-a").relationshipRefs.includes(created.id), false);
	assert.equal(artifacts.get("artifact-b").relationshipRefs.includes(created.id), false);
	assert.match(relationshipStorage.loadStore().quarantinedRelationships[created.id].error, /semantic type is invalid/);
	assert.equal(recovered.validateIntegrity(), true);
});

test("Repository rolls back an interrupted pending Relationship transaction", () => {
	const { owner, artifacts, relationshipStorage } = setup();
	artifacts.attachRelationshipRef("artifact-a", "interrupted", owner, "Simulated source attachment.");
	relationshipStorage.saveStore({
		schemaVersion: 1,
		matterId: "MAT-REL",
		relationships: {},
		pendingOperations: {
			interrupted: {
				id: "interrupted",
				relationshipId: "interrupted",
				sourceArtifactId: "artifact-a",
				targetArtifactId: "artifact-b",
				governingAuthority: owner,
				phase: "source-attached"
			}
		}
	});

	const recovered = createRelationshipRepository({
		storageAdapter: relationshipStorage,
		matterId: "MAT-REL",
		artifactRepository: artifacts
	});
	assert.equal(artifacts.get("artifact-a").relationshipRefs.includes("interrupted"), false);
	assert.deepEqual(relationshipStorage.loadStore().pendingOperations, {});
	assert.equal(recovered.validateIntegrity(), true);
});

test("Repository quarantines a persisted Relationship when its endpoint Artifacts are absent", () => {
	const { artifacts, relationshipStorage, proposal } = setup();
	const repository = createRelationshipRepository({
		storageAdapter: relationshipStorage,
		matterId: "MAT-REL",
		artifactRepository: artifacts
	});
	const created = repository.propose(proposal());
	const emptyArtifacts = createArtifactRepository({
		storageAdapter: memoryAdapter(),
		matterId: "MAT-REL"
	});

	const recovered = createRelationshipRepository({
		storageAdapter: relationshipStorage,
		matterId: "MAT-REL",
		artifactRepository: emptyArtifacts
	});
	assert.equal(recovered.get(created.id), null);
	assert.match(relationshipStorage.loadStore().quarantinedRelationships[created.id].error, /existing Artifact/);
	assert.equal(recovered.validateIntegrity(), true);
});

test("semantic and lifecycle policies are replaceable contracts, not hard-coded roads", () => {
	const lifecycle = createLifecyclePolicy({
		proposed: ["accepted"],
		accepted: ["archived"],
		archived: []
	});
	assert.equal(lifecycle.canTransition("proposed", "accepted"), true);
	assert.equal(lifecycle.canTransition("proposed", "rejected"), false);
	const semantic = createSemanticPolicy({ custom: ["bidirectional"] });
	assert.equal(semantic.supportsDirection("custom", "bidirectional"), true);
	assert.equal(semantic.supportsDirection("custom", "directed"), false);

	const { relationships, proposal } = setup();
	assert.throws(() => relationships.propose(proposal({ id: "bad-direction", semanticType: "mutually-depends-on", direction: "directed" })), /invalid/);
	assert.equal(relationships.propose(proposal({ id: "mutual", semanticType: "mutually-depends-on", direction: "bidirectional" })).semantic.direction, "bidirectional");
});

test("Watson may propose and edit its unresolved proposal but never govern it", () => {
	const { owner, watson, relationships, proposal } = setup();
	const created = relationships.propose(proposal());
	assert.throws(() => relationships.accept(created.id, watson, "Watson attempted acceptance."), /not authorized/);
	const edited = relationships.edit(created.id, { uncertainty: { ...created.uncertainty, confidence: "supported" } }, watson, "Watson added evidence context.");
	assert.equal(edited.revision, 2);
	assert.equal(relationships.accept(created.id, owner, "Owner accepted.").states.governance, "accepted");
});

test("Repository applies the positive authority contract to proposals and governance", () => {
	const { owner, watson, relationships, proposal } = setup();
	const source = { id: "source", name: "Imported Source", role: "source" };
	const system = { id: "system", name: "System", role: "system" };
	assert.throws(() => relationships.propose(proposal({
		id: "source-proposal",
		provenance: { ...proposal().provenance, proposer: source }
	})), /not authorized/);
	const created = relationships.propose(proposal());
	assert.throws(() => relationships.accept(created.id, system, "System attempted governance."), /not authorized/);
	assert.equal(relationships.accept(created.id, owner, "Owner accepted.").lifecycle.stage, "accepted");
	assert.equal(created.provenance.proposer.id, watson.id);
});

test("Supersession requires an accepted eligible target and rejects missing, rejected, archived, superseded, quarantined, self, cross-Matter, and cycles", () => {
	const { owner, relationships, relationshipStorage, proposal } = setup();
	const current = relationships.propose(proposal());
	relationships.accept(current.id, owner, "Current accepted.");
	const replacement = relationships.propose(proposal({ id: "relationship-2" }));
	assert.throws(() => relationships.supersede(current.id, "missing", owner, "Missing."), /already exist/);
	assert.throws(() => relationships.supersede(current.id, current.id, owner, "Self."), /itself/);
	assert.throws(() => relationships.supersede(current.id, replacement.id, owner, "Not accepted."), /accepted and operationally active/);
	relationships.accept(replacement.id, owner, "Replacement accepted.");
	relationships.archive(replacement.id, owner, "Replacement archived.");
	assert.throws(() => relationships.supersede(current.id, replacement.id, owner, "Archived."), /accepted and operationally active/);

	const rejected = relationships.propose(proposal({ id: "relationship-rejected" }));
	relationships.reject(rejected.id, owner, "Rejected candidate.");
	assert.throws(() => relationships.supersede(current.id, rejected.id, owner, "Rejected."), /accepted and operationally active/);

	const alreadySuperseded = relationships.propose(proposal({ id: "relationship-already-superseded" }));
	relationships.accept(alreadySuperseded.id, owner, "Candidate accepted.");
	const supersededStore = relationshipStorage.loadStore();
	supersededStore.relationships[alreadySuperseded.id].supersededByRelationshipId = "historical-successor";
	relationshipStorage.saveStore(supersededStore);
	assert.throws(() => relationships.supersede(current.id, alreadySuperseded.id, owner, "Already superseded."), /already be superseded/);

	const quarantinedStore = relationshipStorage.loadStore();
	quarantinedStore.quarantinedRelationships["relationship-quarantined"] = {
		relationship: { id: "relationship-quarantined" },
		error: "Malformed fixture.",
		quarantinedAt: "2026-07-28T00:00:00.000Z"
	};
	relationshipStorage.saveStore(quarantinedStore);
	assert.throws(() => relationships.supersede(current.id, "relationship-quarantined", owner, "Quarantined."), /already exist/);

	const foreignSetup = setup();
	const foreignTarget = foreignSetup.relationships.propose(foreignSetup.proposal({ id: "foreign-replacement" }));
	foreignSetup.relationships.accept(foreignTarget.id, foreignSetup.owner, "Foreign accepted.");
	assert.throws(() => relationships.supersede(current.id, foreignTarget.id, owner, "Cross-Matter."), /already exist/);

	const cyclic = relationships.propose(proposal({ id: "relationship-3" }));
	relationships.accept(cyclic.id, owner, "Cyclic candidate accepted.");
	const stored = relationshipStorage.loadStore();
	stored.relationships[cyclic.id].supersededByRelationshipId = current.id;
	relationshipStorage.saveStore(stored);
	assert.throws(() => relationships.supersede(current.id, cyclic.id, owner, "Cycle."), /cycle/);
});

test("no-op edits create neither revisions nor history and provenance cannot be edited", () => {
	const { owner, relationships, proposal } = setup();
	const created = relationships.propose(proposal());
	const unchanged = relationships.edit(created.id, {
		semanticType: created.semantic.type,
		direction: created.semantic.direction,
		uncertainty: created.uncertainty
	}, owner, "No material change.");
	assert.equal(unchanged.revision, 1);
	assert.equal(unchanged.history.length, created.history.length);
	assert.throws(() => relationships.edit(created.id, { provenance: {} }, owner, "Attempted rewrite."), /cannot change/);
});

test("challenge, revision, rejection, and supersession preserve operational history", () => {
	const { owner, relationships, proposal } = setup();
	const first = relationships.propose(proposal());
	relationships.accept(first.id, owner, "Accepted.");
	relationships.challenge(first.id, owner, "New evidence challenged it.");
	const revised = relationships.revise(first.id, {
		semanticType: "may-influence",
		direction: "directed",
		uncertainty: { ...first.uncertainty, confidence: "unresolved" }
	}, owner, "Interpretation revised.");
	assert.equal(revised.lifecycle.stage, "revised");

	const replacement = relationships.propose(proposal({
		id: "relationship-2",
		sourceArtifactId: "artifact-c",
		semanticType: "explains"
	}));
	relationships.accept(replacement.id, owner, "Replacement accepted.");
	assert.throws(
		() => relationships.supersede(first.id, replacement.id, owner, "Endpoints differ."),
		/endpoints are not compatible/
	);
	const superseded = relationships.supersede(
		first.id,
		replacement.id,
		owner,
		"A stronger interpretation replaced it.",
		{
			allowEndpointChange: true,
			endpointChangeJustification: "The stronger evidence changes the source while retaining the governed target."
		}
	);
	assert.equal(superseded.supersededByRelationshipId, replacement.id);
	assert.equal(relationships.get(replacement.id).lifecycle.stage, "accepted");
	assert.ok(superseded.history.some(event => event.type === "relationship.supersession.linked"));
	assert.ok(superseded.history.some(event => event.type === "relationship.challenged"));
	assert.ok(superseded.history.some(event => event.type === "relationship.revised"));

	const rejected = relationships.propose(proposal({ id: "relationship-3" }));
	const retained = relationships.reject(rejected.id, owner, "Owner rejected it.");
	assert.equal(relationships.get(rejected.id).lifecycle.stage, "rejected");
	assert.equal(retained.history.at(-1).type, "relationship.rejected");
});
