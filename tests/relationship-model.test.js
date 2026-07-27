const test = require("node:test");
const assert = require("node:assert/strict");
const { createArtifactRepository } = require("../js/artifact-model.js");
const {
	createRelationshipRepository,
	createLifecyclePolicy,
	createSemanticPolicy
} = require("../js/relationship-model.js");

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

test("Repository rejects dangling Artifact relationship references", () => {
	const { owner, artifacts } = setup();
	artifacts.attachRelationshipRef("artifact-a", "missing-relationship", owner, "Injected corruption for contract validation.");
	assert.throws(() => createRelationshipRepository({
		storageAdapter: memoryAdapter(),
		matterId: "MAT-REL",
		artifactRepository: artifacts
	}), /dangling Relationship reference/);
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
	assert.throws(() => relationships.accept(created.id, watson, "Watson attempted acceptance."), /cannot make/);
	const edited = relationships.edit(created.id, { uncertainty: { ...created.uncertainty, confidence: "supported" } }, watson, "Watson added evidence context.");
	assert.equal(edited.revision, 2);
	assert.equal(relationships.accept(created.id, owner, "Owner accepted.").states.governance, "accepted");
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
	const superseded = relationships.supersede(first.id, replacement.id, owner, "A stronger interpretation replaced it.");
	assert.equal(superseded.supersededByRelationshipId, replacement.id);
	assert.ok(superseded.history.some(event => event.type === "relationship.challenged"));
	assert.ok(superseded.history.some(event => event.type === "relationship.revised"));

	const rejected = relationships.propose(proposal({ id: "relationship-3" }));
	const retained = relationships.reject(rejected.id, owner, "Owner rejected it.");
	assert.equal(relationships.get(rejected.id).lifecycle.stage, "rejected");
	assert.equal(retained.history.at(-1).type, "relationship.rejected");
});
