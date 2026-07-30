const test = require("node:test");
const assert = require("node:assert/strict");
const {
	createOperationalMemoryRepository,
	createOperationalMemoryJournalAdapter,
	createOperationalMemoryProjectionAdapter,
	createOperationalMemoryCoordinator
} = require("../js/operational-memory-model.js");
const { createOperationalMemoryMigrationAdapter } = require("../js/storage-migrations.js");

function memoryAdapter(initial = null) {
	let value = initial;
	return {
		loadStore: () => value === null ? null : structuredClone(value),
		saveStore: store => { value = structuredClone(store); }
	};
}

function harness(options = {}) {
	let tick = 0;
	const storageAdapter = options.storageAdapter || memoryAdapter();
	const owner = { id: "owner", name: "Owner", role: "owner" };
	const watson = { id: "watson", name: "Watson", role: "watson" };
	const system = { id: "system", name: "System", role: "system" };
	const repository = createOperationalMemoryRepository({
		storageAdapter,
		matterId: options.matterId || "MAT-MEMORY",
		clock: () => `2026-07-28T12:00:${String(tick++).padStart(2, "0")}.000Z`,
		idGenerator: () => `generated-${tick++}`
	});
	const event = (overrides = {}) => ({
		id: "memory-1",
		type: "reasoning.hypothesis.introduced",
		occurredAt: "2026-07-28T11:00:00.000Z",
		actor: owner,
		governingAuthority: owner,
		reason: "A hypothesis became consequential.",
		meaning: "Lead transfer delay may explain the margin decline.",
		affectedEntityRefs: [{ kind: "artifact", id: "hypothesis-1" }],
		sourceEventRefs: [{
			aggregateKind: "artifact",
			aggregateId: "hypothesis-1",
			eventId: "artifact-event-1"
		}],
		evidenceBasis: [{ kind: "artifact", id: "evidence-1" }],
		unresolvedConsequences: [{ id: "question-1", meaning: "Could price explain the same change?" }],
		provenance: { method: "coordinated-domain-operation", origin: "contract-test" },
		correlationId: "operation-1",
		reasoningEpisodeId: "episode-1",
		...overrides
	});
	return { repository, storageAdapter, owner, watson, system, event };
}

test("Memory Event has stable Matter-scoped identity and survives reload", () => {
	const { repository, storageAdapter, event } = harness();
	const created = repository.record(event());
	const reloaded = createOperationalMemoryRepository({
		storageAdapter,
		matterId: "MAT-MEMORY"
	}).get(created.id);
	assert.equal(created.sequence, 1);
	assert.equal(reloaded.id, created.id);
	assert.equal(reloaded.matterId, "MAT-MEMORY");
	assert.deepEqual(reloaded.sourceEventRefs, created.sourceEventRefs);
	assert.equal(repository.validateIntegrity(), true);
});

test("ingestion is idempotent by event and source identity without copied aggregates", () => {
	const { repository, storageAdapter, event } = harness();
	const created = repository.ensure(event());
	const before = storageAdapter.loadStore();
	assert.deepEqual(repository.ensure(event()), created);
	assert.deepEqual(repository.record(event({ id: "retry-with-new-id" })), created);
	assert.deepEqual(storageAdapter.loadStore(), before);
	assert.equal(Object.hasOwn(created.affectedEntityRefs[0], "content"), false);
});

test("Matter isolation and identity conflicts fail without mutation", () => {
	const { repository, storageAdapter, event } = harness();
	repository.record(event());
	const before = storageAdapter.loadStore();
	assert.throws(
		() => createOperationalMemoryRepository({ storageAdapter, matterId: "MAT-OTHER" }),
		/another Matter/
	);
	assert.throws(() => repository.ensure(event({ meaning: "Conflicting meaning." })), /identity conflicts/);
	assert.deepEqual(storageAdapter.loadStore(), before);
});

test("authority allows Watson proposals but denies Watson judgment, source mutation, and implicit system work", () => {
	const { repository, owner, watson, system, event } = harness();
	const proposal = repository.record(event({
		actor: watson,
		proposer: watson,
		governingAuthority: owner
	}));
	assert.equal(proposal.proposer.role, "watson");
	assert.throws(() => repository.record(event({
		id: "watson-judgment",
		type: "governance.judgment.recorded",
		actor: watson,
		proposer: watson,
		sourceEventRefs: []
	})), /not authorized/);
	assert.throws(() => repository.record(event({
		id: "source-event",
		actor: { id: "source", name: "Source", role: "source" },
		sourceEventRefs: []
	})), /not authorized/);
	assert.throws(() => repository.record(event({
		id: "system-false-judgment",
		type: "governance.judgment.recorded",
		actor: system,
		governingAuthority: system,
		sourceEventRefs: []
	})), /not authorized/);
});

test("delegate actions require an explicit Matter-scoped grant", () => {
	const delegate = { id: "delegate", name: "Delegate", role: "delegate" };
	const adapter = memoryAdapter();
	const repository = createOperationalMemoryRepository({
		storageAdapter: adapter,
		matterId: "MAT-MEMORY",
		delegateGrant: (actor, action, context) => actor.id === delegate.id
			&& action === "operational-memory.govern"
			&& context.matterId === "MAT-MEMORY"
	});
	const base = harness().event({
		id: "delegated",
		type: "governance.judgment.recorded",
		actor: delegate,
		governingAuthority: delegate,
		sourceEventRefs: []
	});
	assert.equal(repository.record(base).actor.id, delegate.id);
	const denied = createOperationalMemoryRepository({
		storageAdapter: memoryAdapter(),
		matterId: "MAT-MEMORY"
	});
	assert.throws(() => denied.record({ ...base, id: "denied" }), /not authorized/);
});

test("correction is append-only and retains historical action separately from current meaning", () => {
	const { repository, owner, event } = harness();
	const original = repository.record(event());
	const correction = repository.correct(original.id, {
		id: "memory-correction",
		occurredAt: "2026-07-28T11:05:00.000Z",
		governingAuthority: owner,
		reason: "The original wording overstated causation.",
		meaning: "Lead transfer delay remains only a possible influence.",
		sourceEventRefs: [],
		evidenceBasis: [],
		unresolvedConsequences: [],
		provenance: { method: "owner-correction", origin: "contract-test" },
		correlationId: "operation-correction"
	}, owner);
	assert.equal(repository.get(original.id).meaning, original.meaning);
	assert.equal(correction.correctsEventId, original.id);
	assert.equal(repository.list().length, 2);
});

test("coordinator never finalizes memory before domain success and recovers after a partial write", () => {
	const { repository, storageAdapter, owner, event } = harness();
	const journalStorage = memoryAdapter();
	const journalAdapter = createOperationalMemoryJournalAdapter({ storageAdapter: journalStorage });
	const coordinator = createOperationalMemoryCoordinator({ repository, journalAdapter });
	const failedIntent = event();
	delete failedIntent.occurredAt;
	delete failedIntent.sourceEventRefs;
	assert.throws(() => coordinator.execute({
		operationId: "failed-domain",
		domainCommand: () => { throw new Error("Domain failed."); },
		memoryIntent: failedIntent,
		sourceDescriptor: {
			aggregateKind: "relationship",
			aggregateId: "relationship-failed",
			eventTypes: ["relationship.accepted"]
		}
	}), /Domain failed/);
	assert.equal(repository.list().length, 0);

	const partialIntent = event({
		id: "memory-partial",
		type: "governance.judgment.recorded",
		actor: owner
	});
	delete partialIntent.occurredAt;
	delete partialIntent.sourceEventRefs;
	assert.throws(() => coordinator.execute({
		operationId: "partial-operation",
		domainCommand: () => ({
			id: "relationship-1",
			history: [{
				id: "relationship-event-1",
				type: "relationship.accepted",
				occurredAt: "2026-07-28T11:10:00.000Z"
			}]
		}),
		memoryIntent: partialIntent,
		sourceDescriptor: {
			aggregateKind: "relationship",
			aggregateId: "relationship-1",
			eventTypes: ["relationship.accepted"]
		},
		afterDomainCommit: () => { throw new Error("Simulated crash."); }
	}), /Simulated crash/);
	assert.equal(repository.get("memory-partial"), null);

	const recovered = createOperationalMemoryRepository({
		storageAdapter,
		matterId: "MAT-MEMORY"
	});
	const recoveredJournal = createOperationalMemoryJournalAdapter({ storageAdapter: journalStorage });
	const recoveryCoordinator = createOperationalMemoryCoordinator({ repository: recovered, journalAdapter: recoveredJournal });
	assert.equal(recoveryCoordinator.recover(), 1);
	assert.equal(recovered.get("memory-partial").type, "governance.judgment.recorded");
	assert.equal(recoveryCoordinator.recover(), 0);
});

test("startup reconciliation closes the crash window after domain commit but before journal advancement", () => {
	const { repository, storageAdapter, owner, event } = harness();
	const journalStorage = memoryAdapter();
	const journalAdapter = createOperationalMemoryJournalAdapter({ storageAdapter: journalStorage });
	const eventIntent = event({
		id: "memory-prepared-recovery",
		type: "governance.judgment.recorded",
		sourceEventRefs: []
	});
	delete eventIntent.occurredAt;
	delete eventIntent.sourceEventRefs;
	journalAdapter.prepare({
		id: "prepared-only",
		eventIntent,
		sourceDescriptor: {
			aggregateKind: "relationship",
			aggregateId: "relationship-reconciled",
			eventTypes: ["relationship.accepted"]
		}
	});
	const relationship = {
		id: "relationship-reconciled",
		governingAuthority: owner,
		uncertainty: {
			evidenceArtifactIds: ["artifact-evidence"],
			unresolvedQuestions: ["Does the effect persist?"]
		},
		history: [{
			id: "relationship-accepted-event",
			type: "relationship.accepted",
			occurredAt: "2026-07-28T11:30:00.000Z",
			actor: owner,
			reason: "Owner accepted the interpretation."
		}]
	};
	const relationshipRepository = {
		get: id => id === relationship.id ? structuredClone(relationship) : null,
		list: () => [structuredClone(relationship)]
	};
	const recovered = createOperationalMemoryRepository({
		storageAdapter,
		matterId: "MAT-MEMORY"
	});
	const coordinator = createOperationalMemoryCoordinator({
		repository: recovered,
		journalAdapter: createOperationalMemoryJournalAdapter({ storageAdapter: journalStorage }),
		relationshipRepository
	});
	assert.equal(coordinator.recover(), 1);
	const events = recovered.list();
	assert.equal(events.length, 1);
	assert.equal(events[0].sourceEventRefs[0].eventId, "relationship-accepted-event");
	assert.equal(coordinator.recover(), 0);
});

test("deterministic sequence resolves identical timestamps", () => {
	const { repository, event } = harness();
	const first = repository.record(event({ sourceEventRefs: [] }));
	const second = repository.record(event({
		id: "memory-2",
		correlationId: "operation-2",
		sourceEventRefs: []
	}));
	assert.equal(first.occurredAt, second.occurredAt);
	assert.equal(first.sequence, 1);
	assert.equal(second.sequence, 2);
	assert.deepEqual(repository.getSince(first.id).map(item => item.id), [second.id]);
});

test("malformed events are quarantined with diagnostics while unavailable entity references remain historical", () => {
	const { repository, storageAdapter, event } = harness();
	const created = repository.record(event({
		affectedEntityRefs: [{ kind: "relationship", id: "quarantined-relationship" }]
	}));
	const stored = storageAdapter.loadStore();
	stored.events[created.id].type = "not-canonical";
	storageAdapter.saveStore(stored);
	const recovered = createOperationalMemoryRepository({
		storageAdapter,
		matterId: "MAT-MEMORY"
	});
	assert.equal(recovered.get(created.id), null);
	assert.match(storageAdapter.loadStore().quarantinedEvents[created.id].error, /not a canonical/);
});

test("queries preserve entity, episode, rejection, unresolved, system, and transition semantics", () => {
	const { repository, owner, system, event } = harness();
	const first = repository.record(event());
	const rejected = repository.record(event({
		id: "memory-rejected",
		type: "governance.proposal.rejected",
		occurredAt: "2026-07-28T11:01:00.000Z",
		affectedEntityRefs: [],
		sourceEventRefs: [],
		correlationId: "operation-2"
	}));
	repository.record(event({
		id: "memory-system",
		type: "system.recovery",
		occurredAt: "2026-07-28T11:02:00.000Z",
		actor: system,
		governingAuthority: system,
		affectedEntityRefs: [],
		sourceEventRefs: [],
		correlationId: "operation-3"
	}));
	assert.equal(repository.findByEntity("artifact", "hypothesis-1").length, 1);
	assert.equal(repository.getReasoningEpisode("episode-1").length, 3);
	assert.deepEqual(repository.listRejectedJudgments().map(item => item.id), [rejected.id]);
	assert.equal(repository.listUnresolvedConsequences()[0].id, "question-1");
	assert.equal(repository.listSystemEvents().length, 1);
	assert.equal(repository.explainTransition(first.id, "memory-system").length, 3);
});

test("Operational Memory migration boundary preserves current bytes and rejects unsupported schemas", () => {
	const { repository, storageAdapter, event } = harness();
	repository.record(event());
	const currentBytes = JSON.stringify(storageAdapter.loadStore());
	const migration = createOperationalMemoryMigrationAdapter({ storageAdapter });
	migration.loadStore();
	assert.equal(JSON.stringify(storageAdapter.loadStore()), currentBytes);
	assert.equal(migration.getDiagnostics()[0].result, "skipped");

	const unsupported = storageAdapter.loadStore();
	unsupported.schemaVersion = 99;
	storageAdapter.saveStore(unsupported);
	assert.equal(migration.loadStore().schemaVersion, 99);
	assert.equal(migration.getDiagnostics()[0].result, "rejected");
	assert.throws(
		() => createOperationalMemoryRepository({ storageAdapter: migration, matterId: "MAT-MEMORY" }),
		/Unsupported/
	);
});

test("projection replay is complete, deterministic, resumable, idempotent, and lineage-aware", () => {
	const { repository, owner, event } = harness();
	const original = repository.record(event({ sourceEventRefs: [] }));
	repository.record(event({
		id: "memory-superseding",
		occurredAt: "2026-07-28T10:55:00.000Z",
		correlationId: "operation-superseding",
		sourceEventRefs: [],
		supersedesEventId: original.id,
		meaning: "A later judgment superseded the original meaning."
	}));
	repository.correct("memory-superseding", {
		id: "memory-replay-correction",
		occurredAt: "2026-07-28T11:05:00.000Z",
		governingAuthority: owner,
		reason: "Correction for replay conformance.",
		meaning: "The superseding judgment remains qualified.",
		sourceEventRefs: [],
		evidenceBasis: [],
		unresolvedConsequences: [],
		provenance: { method: "replay-contract", origin: "test" },
		correlationId: "operation-replay-correction"
	}, owner);
	const coordinator = createOperationalMemoryCoordinator({ repository });
	const projectionAdapter = createOperationalMemoryProjectionAdapter({
		complete: true,
		eventCount: 999,
		obsolete: true
	});

	const interrupted = coordinator.replayProjection({ projectionAdapter, interruptAfter: 1 });
	assert.equal(interrupted.status, "interrupted");
	assert.equal(projectionAdapter.loadProjection().obsolete, true);
	const resumed = coordinator.replayProjection({ projectionAdapter });
	assert.equal(resumed.status, "complete");
	assert.equal(resumed.projection.eventCount, 3);
	assert.deepEqual(resumed.projection.history.map(item => item.sequence), [1, 2, 3]);
	assert.equal(resumed.projection.supersessionsByEventId[original.id], "memory-superseding");
	assert.equal(resumed.projection.correctionsByEventId["memory-superseding"], "memory-replay-correction");
	assert.equal(projectionAdapter.loadProjection().obsolete, undefined);
	assert.equal(projectionAdapter.loadCheckpoint(), null);

	const firstBytes = JSON.stringify(resumed.projection);
	const repeated = coordinator.replayProjection({ projectionAdapter });
	assert.equal(JSON.stringify(repeated.projection), firstBytes);
	assert.equal(repository.list().length, 3);
});
