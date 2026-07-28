const test = require("node:test");
const assert = require("node:assert/strict");
const {
	createArtifactRepository,
	createLocalStorageAdapter,
	createLifecyclePolicy,
	ContextEnvelope,
	LIFECYCLE
} = require("../js/artifact-model.js");

function memoryStorageAdapter() {
	let value = null;
	return {
		loadStore() {
			return value === null ? null : JSON.parse(JSON.stringify(value));
		},
		saveStore(store) {
			value = JSON.parse(JSON.stringify(store));
		}
	};
}

function harness() {
	let tick = 0;
	const storageAdapter = memoryStorageAdapter();
	const owner = { id: "owner-1", name: "Owner", role: "owner" };
	const watson = { id: "watson", name: "Watson", role: "watson" };
	const repository = createArtifactRepository({
		storageAdapter,
		matterId: "MAT-TEST",
		clock: () => `2026-07-27T10:00:${String(tick++).padStart(2, "0")}.000Z`,
		idGenerator: () => `id-${tick++}`
	});
	const input = {
		id: "artifact-1",
		type: "Observation",
		content: { wording: "Margin declined." },
		owner,
		provenance: {
			method: "owner-authored",
			origin: { kind: "operational-inbox", label: "Operational Inbox" },
			author: owner,
			circumstance: "Owner added an observation during the investigation.",
			rawInput: "Margin declined."
		},
		states: {
			provenance: "declared",
			epistemic: "unverified",
			participation: "working-set",
			attention: "supporting"
		}
	};

	return { repository, storageAdapter, owner, watson, input };
}

test("Artifact identity and provenance survive edits and repository reload", () => {
	const { repository, storageAdapter, owner, input } = harness();
	const created = repository.create(input);
	const edited = repository.edit(created.id, { wording: "B2B margin declined.", type: "Symptom" }, owner, "Owner clarified the observation.");
	const reloaded = createArtifactRepository({ storageAdapter, matterId: "MAT-TEST" }).get(created.id);

	assert.equal(edited.id, created.id);
	assert.equal(reloaded.id, created.id);
	assert.equal(reloaded.content.wording, "B2B margin declined.");
	assert.equal(reloaded.content.revision, 2);
	assert.deepEqual(reloaded.provenance, created.provenance);
	assert.equal(reloaded.provenance.rawInput, "Margin declined.");
	assert.equal(reloaded.history.at(-1).type, "artifact.revised");
});

test("Repository depends only on replaceable loadStore/saveStore contract", () => {
	const adapter = memoryStorageAdapter();
	const owner = { id: "owner", name: "Owner", role: "owner" };
	const repository = createArtifactRepository({ storageAdapter: adapter, matterId: "MAT-ADAPTER" });
	const artifact = repository.create({
		id: "adapter-artifact",
		type: "Observation",
		content: { wording: "Stored without localStorage." },
		owner,
		provenance: {
			method: "owner-authored",
			origin: { kind: "in-memory-test", label: "Replaceable adapter" },
			author: owner,
			circumstance: "Storage inversion contract test.",
			rawInput: "Stored without localStorage."
		}
	});

	assert.equal(repository.get(artifact.id).content.wording, "Stored without localStorage.");
	assert.equal(Object.hasOwn(adapter, "getItem"), false);
	assert.equal(Object.hasOwn(adapter, "setItem"), false);

	const serialized = new Map();
	const localStorageCompatible = {
		getItem: key => serialized.has(key) ? serialized.get(key) : null,
		setItem: (key, value) => serialized.set(key, value)
	};
	const localAdapter = createLocalStorageAdapter({ storage: localStorageCompatible, storageKey: "artifacts" });
	const localRepository = createArtifactRepository({ storageAdapter: localAdapter, matterId: "MAT-LOCAL" });
	localRepository.create({ ...artifact, id: "local-artifact", matterId: undefined, owner, history: undefined });
	assert.equal(localRepository.get("local-artifact").id, "local-artifact");
});

test("Lifecycle follows canonical transitions and never deletes settled meaning", () => {
	const { repository, owner, input } = harness();
	repository.create(input);
	repository.transitionLifecycle(input.id, "admitted", owner, "Owner admitted the material.");
	repository.transitionLifecycle(input.id, "active", owner, "Material entered the open inquiry.");
	repository.transitionLifecycle(input.id, "evaluated", owner, "Owner evaluated relevance and reliability.");
	repository.transitionLifecycle(input.id, "settled", owner, "The question was resolved.", { settledAs: "resolved" });
	const archived = repository.transitionLifecycle(input.id, "archived", owner, "Material left the Working Set.");

	assert.equal(archived.lifecycle.stage, "archived");
	assert.equal(archived.lifecycle.settledAs, "resolved");
	assert.deepEqual(
		archived.history.filter(item => item.type === "artifact.lifecycle.changed").map(item => item.details.to.stage),
		["admitted", "active", "evaluated", "settled", "archived"]
	);
	assert.deepEqual(LIFECYCLE, ["captured", "proposed", "admitted", "active", "evaluated", "settled", "archived"]);
	assert.throws(() => repository.transitionLifecycle(input.id, "active", owner, "Invalid reversal."), /cannot move/);
});

test("Lifecycle traversal is delegated to an injectable graph policy without changing Repository API", () => {
	const { storageAdapter, owner, input } = harness();
	const canonicalPolicy = createLifecyclePolicy({
		stages: LIFECYCLE,
		transitions: {
			captured: ["proposed", "admitted"],
			proposed: ["admitted"],
			admitted: ["active"],
			active: ["evaluated"],
			evaluated: ["settled"],
			settled: ["archived"],
			archived: []
		}
	});
	const repository = createArtifactRepository({
		storageAdapter,
		matterId: "MAT-TEST",
		lifecyclePolicy: canonicalPolicy
	});
	repository.create(input);
	const active = repository.advanceLifecycleTo(input.id, "active", owner, "Owner admitted the material.");

	assert.equal(active.lifecycle.stage, "active");
	assert.deepEqual(canonicalPolicy.findPath("captured", "active"), ["admitted", "active"]);
	assert.equal(typeof repository.advanceLifecycleTo, "function");
});

test("Orthogonal state dimensions change independently", () => {
	const { repository, owner, input } = harness();
	repository.create(input);
	repository.setState(input.id, "review", "reviewed", owner, "Owner reviewed the Artifact.");
	repository.setState(input.id, "epistemic", "supported", owner, "A source supports the claim.");
	const artifact = repository.setState(input.id, "participation", "corpus", owner, "Artifact left the Working Set.");

	assert.deepEqual(artifact.states, {
		review: "reviewed",
		provenance: "declared",
		epistemic: "supported",
		participation: "corpus",
		attention: "supporting"
	});
	assert.equal(artifact.lifecycle.stage, "captured");
});

test("Inspection requires and restores a complete Context Envelope", () => {
	const { repository, owner, input } = harness();
	repository.create(input);
	const contextEnvelope = {
		matterId: "MAT-TEST",
		currentSituationVersion: "situation-v3",
		primaryFocus: "current-situation",
		supportingNeighborhood: ["artifact-1", "artifact-2"],
		spatialLocation: "workbench",
		activeScope: "working-set",
		entryOrigin: "artifact-1",
		unresolvedWork: ["question-1"],
		lastConsequentialChange: "event-8"
	};
	const inspection = repository.inspect(input.id, contextEnvelope, owner);

	assert.equal(inspection.artifact.states.attention, "inspected");
	assert.equal(inspection.artifact.states.review, "reviewed");
	assert.equal(inspection.contextEnvelope.contract, "management-os.context-envelope");
	assert.equal(inspection.contextEnvelope.contractVersion, 1);
	assert(Object.isFrozen(inspection.contextEnvelope));
	assert(Object.isFrozen(inspection.contextEnvelope.supportingNeighborhood));
	const preservedEnvelope = JSON.stringify(inspection.contextEnvelope);

	const closed = repository.closeInspection(inspection, owner);
	assert.equal(closed.artifact.states.attention, "supporting");
	assert.equal(JSON.stringify(closed.contextEnvelope), preservedEnvelope);
	assert(ContextEnvelope.isCompatible(closed.contextEnvelope, { matterId: "MAT-TEST" }));
	assert.equal(ContextEnvelope.isCompatible(closed.contextEnvelope, { matterId: "OTHER" }), false);
	assert.throws(
		() => repository.inspect(input.id, { matterId: "MAT-TEST" }, owner),
		/Context Envelope/
	);
});

test("Watson cannot own or mutate an Artifact", () => {
	const { repository, owner, watson, input } = harness();
	repository.create(input);

	assert.throws(
		() => repository.create({ ...input, id: "watson-owned", owner: watson }),
		/cannot own/
	);
	assert.throws(
		() => repository.ensure({ ...input, id: "watson-ensured", owner: watson }),
		/cannot own/
	);
	assert.throws(
		() => repository.edit(input.id, { wording: "Watson changed it." }, watson, "Watson edit."),
		/authorized human/
	);
	assert.throws(
		() => repository.setState(input.id, "review", "reviewed", watson, "Watson state change."),
		/authorized human/
	);
	assert.throws(
		() => repository.transitionLifecycle(input.id, "admitted", watson, "Watson lifecycle change."),
		/authorized human/
	);
	assert.throws(
		() => repository.inspect(input.id, {
			matterId: "MAT-TEST",
			currentSituationVersion: "situation-v1",
			primaryFocus: "current-situation",
			supportingNeighborhood: [input.id],
			spatialLocation: "workbench",
			activeScope: "working-set",
			entryOrigin: input.id,
			unresolvedWork: [],
			lastConsequentialChange: null
		}, watson),
		/authorized human/
	);
	assert.equal(repository.get(input.id).ownership.ownerId, owner.id);
});

test("Repository rejects malformed adapters, stored identity, provenance, and state", () => {
	assert.throws(
		() => createArtifactRepository({ storageAdapter: {}, matterId: "MAT-TEST" }),
		/loadStore/
	);
	const malformedAdapter = {
		loadStore() {
			return {
				schemaVersion: 1,
				matterId: "MAT-TEST",
				artifacts: {
					"artifact-1": {
						id: "different-id"
					}
				}
			};
		},
		saveStore() {}
	};
	const repository = createArtifactRepository({ storageAdapter: malformedAdapter, matterId: "MAT-TEST" });
	assert.throws(() => repository.get("artifact-1"), /store key does not match/);
});

test("Provenance is immutable through edit and revision advances only after a real successful change", () => {
	const { repository, owner, input } = harness();
	const created = repository.create(input);
	const initialHistoryLength = created.history.length;

	const unchanged = repository.edit(input.id, { wording: input.content.wording }, owner, "No semantic change.");
	assert.equal(unchanged.content.revision, 1);
	assert.equal(unchanged.history.length, initialHistoryLength);

	assert.throws(
		() => repository.edit(input.id, { provenance: { circumstance: "Rewritten" } }, owner, "Invalid provenance rewrite."),
		/cannot change identity, provenance/
	);
	assert.throws(
		() => repository.edit(input.id, { wording: "   " }, owner, "Invalid empty revision."),
		/wording is required/
	);
	const afterFailures = repository.get(input.id);
	assert.equal(afterFailures.content.revision, 1);
	assert.deepEqual(afterFailures.provenance, created.provenance);

	const revised = repository.edit(input.id, { wording: "Materially revised." }, owner, "Owner changed the wording.");
	assert.equal(revised.content.revision, 2);
	assert.deepEqual(revised.provenance, created.provenance);
});

test("Relationship readiness is identity-based and contains no simulated links", () => {
	const { repository, input } = harness();
	const artifact = repository.create(input);

	assert.deepEqual(artifact.relationshipRefs, []);
	assert.equal(Object.hasOwn(artifact, "relationships"), false);
	assert.equal(artifact.matterId, "MAT-TEST");
});

test("Relationship reference integration is protected, idempotent, historical, and rollback-only", () => {
	const { repository, owner, watson, input } = harness();
	const artifact = repository.create(input);
	const baseline = {
		content: structuredClone(artifact.content),
		provenance: structuredClone(artifact.provenance),
		lifecycle: structuredClone(artifact.lifecycle),
		states: structuredClone(artifact.states)
	};

	const attached = repository.attachRelationshipRef(artifact.id, "relationship-1", owner, "Relationship transaction attached a reference.");
	assert.deepEqual(attached.relationshipRefs, ["relationship-1"]);
	assert.equal(attached.history.at(-1).type, "artifact.relationship.attached");
	const unchanged = repository.attachRelationshipRef(artifact.id, "relationship-1", owner, "Idempotent retry.");
	assert.equal(unchanged.history.length, attached.history.length);
	assert.throws(
		() => repository.attachRelationshipRef(artifact.id, "relationship-2", watson, "Unauthorized attachment."),
		/authorized human/
	);
	assert.throws(
		() => repository.detachRelationshipRef(artifact.id, "relationship-1", owner, "Ordinary cleanup."),
		/rollback or recovery/
	);

	const detached = repository.detachRelationshipRef(
		artifact.id,
		"relationship-1",
		owner,
		"Relationship transaction rolled back.",
		{ rollback: true }
	);
	assert.deepEqual(detached.relationshipRefs, []);
	assert.equal(detached.history.at(-1).type, "artifact.relationship.detached");
	assert.deepEqual(detached.content, baseline.content);
	assert.deepEqual(detached.provenance, baseline.provenance);
	assert.deepEqual(detached.lifecycle, baseline.lifecycle);
	assert.deepEqual(detached.states, baseline.states);
});
