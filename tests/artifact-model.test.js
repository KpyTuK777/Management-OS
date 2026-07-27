const test = require("node:test");
const assert = require("node:assert/strict");
const { createArtifactRepository, LIFECYCLE } = require("../js/artifact-model.js");

function memoryStorage() {
	const values = new Map();
	return {
		getItem(key) {
			return values.has(key) ? values.get(key) : null;
		},
		setItem(key, value) {
			values.set(key, String(value));
		}
	};
}

function harness() {
	let tick = 0;
	const storage = memoryStorage();
	const owner = { id: "owner-1", name: "Owner", role: "owner" };
	const watson = { id: "watson", name: "Watson", role: "watson" };
	const repository = createArtifactRepository({
		storage,
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

	return { repository, storage, owner, watson, input };
}

test("Artifact identity and provenance survive edits and repository reload", () => {
	const { repository, storage, owner, input } = harness();
	const created = repository.create(input);
	const edited = repository.edit(created.id, { wording: "B2B margin declined.", type: "Symptom" }, owner, "Owner clarified the observation.");
	const reloaded = createArtifactRepository({ storage, matterId: "MAT-TEST" }).get(created.id);

	assert.equal(edited.id, created.id);
	assert.equal(reloaded.id, created.id);
	assert.equal(reloaded.content.wording, "B2B margin declined.");
	assert.equal(reloaded.content.revision, 2);
	assert.deepEqual(reloaded.provenance, created.provenance);
	assert.equal(reloaded.provenance.rawInput, "Margin declined.");
	assert.equal(reloaded.history.at(-1).type, "artifact.revised");
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
	assert.deepEqual(inspection.contextEnvelope, contextEnvelope);

	const closed = repository.closeInspection(inspection, owner);
	assert.equal(closed.artifact.states.attention, "supporting");
	assert.deepEqual(closed.contextEnvelope, contextEnvelope);
	assert.throws(
		() => repository.inspect(input.id, { matterId: "MAT-TEST" }, owner),
		/Context Envelope requires/
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
		() => repository.edit(input.id, { wording: "Watson changed it." }, watson, "Watson edit."),
		/authorized human/
	);
	assert.equal(repository.get(input.id).ownership.ownerId, owner.id);
});

test("Relationship readiness is identity-based and contains no simulated links", () => {
	const { repository, input } = harness();
	const artifact = repository.create(input);

	assert.deepEqual(artifact.relationshipRefs, []);
	assert.equal(Object.hasOwn(artifact, "relationships"), false);
	assert.equal(artifact.matterId, "MAT-TEST");
});
