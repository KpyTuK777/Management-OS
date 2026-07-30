(function (root, factory) {
	const api = factory(
		typeof module === "object" && module.exports
			? require("./authority-policy.js")
			: root.ManagementOsAuthorityPolicy
	);
	if (typeof module === "object" && module.exports) module.exports = api;
	if (root) root.ManagementOsOperationalMemory = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function (authorityApi) {
	"use strict";

	if (!authorityApi) throw new Error("Canonical Authority Policy is required.");

	const SCHEMA_VERSION = 1;
	const EVENT_TYPES = Object.freeze([
		"reasoning.hypothesis.introduced",
		"reasoning.hypothesis.strengthened",
		"reasoning.hypothesis.weakened",
		"reasoning.contradiction.identified",
		"reasoning.contradiction.resolved",
		"reasoning.uncertainty.introduced",
		"reasoning.uncertainty.reduced",
		"governance.judgment.recorded",
		"governance.judgment.invalidated",
		"governance.proposal.rejected",
		"governance.decision.reopened",
		"decision.made",
		"decision.reopened",
		"outcome.observed",
		"learning.proposed",
		"system.recovery",
		"system.migration",
		"system.integrity-repair",
		"memory.corrected",
		"memory.redacted"
	]);
	const ENTITY_KINDS = Object.freeze(["artifact", "relationship", "memory-event", "current-situation-version", "decision", "outcome"]);
	const SOURCE_KINDS = Object.freeze(["artifact", "relationship", "system", "current-situation"]);

	function clone(value) {
		return value === undefined ? undefined : JSON.parse(JSON.stringify(value));
	}

	function invariant(condition, message) {
		if (!condition) throw new Error(message);
	}

	function nonEmpty(value, name) {
		invariant(typeof value === "string" && value.trim(), `${name} is required.`);
		return value.trim();
	}

	function normalizeActor(actor, name = "actor") {
		invariant(actor && typeof actor === "object", `${name} is required.`);
		const normalized = {
			id: nonEmpty(actor.id, `${name}.id`),
			name: nonEmpty(actor.name, `${name}.name`),
			role: nonEmpty(actor.role, `${name}.role`)
		};
		invariant(authorityApi.ROLES.includes(normalized.role), `${name}.role is not canonical.`);
		return normalized;
	}

	function uniqueArray(value, name, normalizer) {
		invariant(Array.isArray(value), `${name} must be an array.`);
		const normalized = value.map((item, index) => normalizer(item, `${name}[${index}]`));
		const identities = normalized.map(item => JSON.stringify(item));
		invariant(new Set(identities).size === identities.length, `${name} cannot contain duplicates.`);
		return normalized;
	}

	function normalizeEntityRef(reference, name) {
		invariant(reference && typeof reference === "object", `${name} is required.`);
		const kind = nonEmpty(reference.kind, `${name}.kind`);
		invariant(ENTITY_KINDS.includes(kind), `${name}.kind is not canonical.`);
		return { kind, id: nonEmpty(reference.id, `${name}.id`) };
	}

	function normalizeSourceEventRef(reference, name) {
		invariant(reference && typeof reference === "object", `${name} is required.`);
		const aggregateKind = nonEmpty(reference.aggregateKind, `${name}.aggregateKind`);
		invariant(SOURCE_KINDS.includes(aggregateKind), `${name}.aggregateKind is not canonical.`);
		return {
			aggregateKind,
			aggregateId: nonEmpty(reference.aggregateId, `${name}.aggregateId`),
			eventId: nonEmpty(reference.eventId, `${name}.eventId`)
		};
	}

	function normalizeConsequence(consequence, name) {
		invariant(consequence && typeof consequence === "object", `${name} is required.`);
		return {
			id: nonEmpty(consequence.id, `${name}.id`),
			meaning: nonEmpty(consequence.meaning, `${name}.meaning`)
		};
	}

	function sourceKey(reference) {
		return `${reference.aggregateKind}:${reference.aggregateId}:${reference.eventId}`;
	}

	function createStorageAdapter(adapter) {
		invariant(adapter && typeof adapter.loadStore === "function" && typeof adapter.saveStore === "function", "Operational Memory requires a Storage Adapter.");
		return Object.freeze({
			loadStore() {
				const value = adapter.loadStore();
				return value === null ? null : clone(value);
			},
			saveStore(store) {
				adapter.saveStore(clone(store));
			}
		});
	}

	function createLocalStorageAdapter(storage, key) {
		invariant(storage && typeof storage.getItem === "function" && typeof storage.setItem === "function", "A compatible storage implementation is required.");
		const storageKey = nonEmpty(key, "storageKey");
		return createStorageAdapter({
			loadStore() {
				const value = storage.getItem(storageKey);
				return value === null ? null : JSON.parse(value);
			},
			saveStore(store) {
				storage.setItem(storageKey, JSON.stringify(store));
			}
		});
	}

	function createOperationalMemoryRepository(options = {}) {
		const matterId = nonEmpty(options.matterId, "matterId");
		const storageAdapter = createStorageAdapter(options.storageAdapter);
		const clock = options.clock || (() => new Date().toISOString());
		const idGenerator = options.idGenerator || (() => `memory-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`);
		const authorityPolicy = options.authorityPolicy || authorityApi.createAuthorityPolicy({
			delegateGrant: options.delegateGrant || (() => false)
		});
		invariant(typeof clock === "function", "clock must be a function.");
		invariant(typeof idGenerator === "function", "idGenerator must be a function.");

		function emptyStore() {
			return {
				schemaVersion: SCHEMA_VERSION,
				matterId,
				nextSequence: 1,
				events: {},
				order: [],
				sourceEventIndex: {},
				quarantinedEvents: {},
				migrationDiagnostics: []
			};
		}

		function actionFor(type) {
			if (type.startsWith("reasoning.") || type === "learning.proposed") return authorityApi.ACTIONS.OPERATIONAL_MEMORY_PROPOSE;
			if (type === "system.recovery" || type === "system.integrity-repair") return authorityApi.ACTIONS.OPERATIONAL_MEMORY_RECOVER;
			if (type === "system.migration") return authorityApi.ACTIONS.OPERATIONAL_MEMORY_MIGRATE;
			if (type === "memory.corrected" || type === "memory.redacted") return authorityApi.ACTIONS.OPERATIONAL_MEMORY_CORRECT;
			return authorityApi.ACTIONS.OPERATIONAL_MEMORY_GOVERN;
		}

		function normalizeEvent(input, sequence, fallbackRecordedAt) {
			invariant(input && typeof input === "object", "Memory Event input is required.");
			const type = nonEmpty(input.type, "event.type");
			invariant(EVENT_TYPES.includes(type), `${type} is not a canonical Memory Event type.`);
			const actor = normalizeActor(input.actor);
			const proposer = input.proposer === undefined || input.proposer === null ? null : normalizeActor(input.proposer, "proposer");
			const governingAuthority = normalizeActor(input.governingAuthority, "governingAuthority");
			const systemOperation = type.startsWith("system.");
			authorityPolicy.assertAllowed(actor, actionFor(type), { matterId, systemOperation, type });
			if (!systemOperation) {
				invariant(["owner", "delegate"].includes(governingAuthority.role), "A human governing authority is required.");
			}
			if (actor.role === "watson") {
				invariant(proposer?.id === actor.id, "Watson reasoning must retain Watson as proposer.");
				invariant(governingAuthority.role === "owner" || governingAuthority.role === "delegate", "Watson cannot own a judgment.");
			}
			const occurredAt = nonEmpty(input.occurredAt, "event.occurredAt");
			const recordedAt = nonEmpty(input.recordedAt || fallbackRecordedAt, "event.recordedAt");
			const correctionRef = input.correctsEventId === undefined || input.correctsEventId === null ? null : nonEmpty(input.correctsEventId, "correctsEventId");
			const supersessionRef = input.supersedesEventId === undefined || input.supersedesEventId === null ? null : nonEmpty(input.supersedesEventId, "supersedesEventId");
			return {
				id: nonEmpty(input.id || idGenerator(), "event.id"),
				matterId,
				type,
				occurredAt,
				recordedAt,
				sequence,
				actor,
				proposer,
				governingAuthority,
				reason: nonEmpty(input.reason, "event.reason"),
				meaning: nonEmpty(input.meaning, "event.meaning"),
				affectedEntityRefs: uniqueArray(input.affectedEntityRefs || [], "affectedEntityRefs", normalizeEntityRef),
				sourceEventRefs: uniqueArray(input.sourceEventRefs || [], "sourceEventRefs", normalizeSourceEventRef),
				evidenceBasis: uniqueArray(input.evidenceBasis || [], "evidenceBasis", normalizeEntityRef),
				unresolvedConsequences: uniqueArray(input.unresolvedConsequences || [], "unresolvedConsequences", normalizeConsequence),
				provenance: {
					method: nonEmpty(input.provenance?.method, "provenance.method"),
					origin: nonEmpty(input.provenance?.origin, "provenance.origin"),
					rawReference: input.provenance?.rawReference === undefined ? null : clone(input.provenance.rawReference)
				},
				correlationId: nonEmpty(input.correlationId, "correlationId"),
				reasoningEpisodeId: input.reasoningEpisodeId === undefined || input.reasoningEpisodeId === null ? null : nonEmpty(input.reasoningEpisodeId, "reasoningEpisodeId"),
				correctsEventId: correctionRef,
				supersedesEventId: supersessionRef,
				redactionMarker: input.redactionMarker === undefined ? null : clone(input.redactionMarker)
			};
		}

		function validateEvent(eventId, event) {
			invariant(event && typeof event === "object", `Memory Event ${eventId} is invalid.`);
			invariant(event.id === eventId, "Memory Event store key does not match identity.");
			invariant(event.matterId === matterId, `Memory Event ${eventId} belongs to another Matter.`);
			invariant(Number.isInteger(event.sequence) && event.sequence > 0, `Memory Event ${eventId} sequence is invalid.`);
			const normalized = normalizeEvent(event, event.sequence, event.recordedAt);
			invariant(JSON.stringify(normalized) === JSON.stringify(event), `Memory Event ${eventId} is not canonical.`);
			return event;
		}

		function recoverMalformedEvents() {
			const loaded = storageAdapter.loadStore();
			if (loaded === null) return;
			invariant(loaded.schemaVersion === SCHEMA_VERSION, "Unsupported Operational Memory store schema.");
			invariant(loaded.matterId === matterId, "Operational Memory store belongs to another Matter.");
			invariant(loaded.events && typeof loaded.events === "object", "Operational Memory store is invalid.");
			if (!loaded.quarantinedEvents || typeof loaded.quarantinedEvents !== "object") loaded.quarantinedEvents = {};
			let changed = false;
			Object.entries(loaded.events).forEach(([eventId, event]) => {
				try {
					validateEvent(eventId, event);
				} catch (error) {
					loaded.quarantinedEvents[eventId] = {
						event: clone(event),
						error: error.message,
						quarantinedAt: clock()
					};
					delete loaded.events[eventId];
					loaded.order = (loaded.order || []).filter(id => id !== eventId);
					Object.entries(loaded.sourceEventIndex || {}).forEach(([key, indexedId]) => {
						if (indexedId === eventId) delete loaded.sourceEventIndex[key];
					});
					changed = true;
				}
			});
			if (changed) storageAdapter.saveStore(loaded);
		}

		function readStore() {
			const store = storageAdapter.loadStore();
			if (store === null) return emptyStore();
			invariant(store.schemaVersion === SCHEMA_VERSION, "Unsupported Operational Memory store schema.");
			invariant(store.matterId === matterId, "Operational Memory store belongs to another Matter.");
			invariant(Number.isInteger(store.nextSequence) && store.nextSequence > 0, "Operational Memory nextSequence is invalid.");
			invariant(store.events && store.sourceEventIndex && store.quarantinedEvents, "Operational Memory store is invalid.");
			invariant(Array.isArray(store.order), "Operational Memory order is invalid.");
			Object.entries(store.events).forEach(([id, event]) => validateEvent(id, event));
			return store;
		}

		function writeStore(store) {
			Object.entries(store.events).forEach(([id, event]) => validateEvent(id, event));
			storageAdapter.saveStore(store);
		}

		function findDuplicate(store, sourceEventRefs) {
			const ids = [...new Set(sourceEventRefs.map(reference => store.sourceEventIndex[sourceKey(reference)]).filter(Boolean))];
			invariant(ids.length <= 1, "Source events resolve to conflicting Memory Events.");
			return ids.length === 1 ? store.events[ids[0]] : null;
		}

		function record(input) {
			const store = readStore();
			const now = clock();
			const candidate = normalizeEvent(input, store.nextSequence, now);
			const existing = store.events[candidate.id];
			if (existing) {
				const comparable = { ...candidate, sequence: existing.sequence, recordedAt: input.recordedAt || existing.recordedAt };
				invariant(JSON.stringify(existing) === JSON.stringify(comparable), `Memory Event ${candidate.id} identity conflicts with existing meaning.`);
				return clone(existing);
			}
			const duplicate = findDuplicate(store, candidate.sourceEventRefs);
			if (duplicate) return clone(duplicate);
			if (candidate.correctsEventId) invariant(store.events[candidate.correctsEventId], "Correction target does not exist.");
			if (candidate.supersedesEventId) invariant(store.events[candidate.supersedesEventId], "Supersession target does not exist.");
			store.events[candidate.id] = candidate;
			store.order.push(candidate.id);
			store.nextSequence += 1;
			candidate.sourceEventRefs.forEach(reference => {
				store.sourceEventIndex[sourceKey(reference)] = candidate.id;
			});
			writeStore(store);
			return clone(candidate);
		}

		function ensure(input) {
			return record(input);
		}

		function get(eventId) {
			const event = readStore().events[nonEmpty(eventId, "eventId")];
			return event ? clone(event) : null;
		}

		function getMatterId() {
			return matterId;
		}

		function list(predicate) {
			invariant(predicate === undefined || typeof predicate === "function", "Memory list predicate must be a function.");
			const store = readStore();
			const events = store.order.map(id => clone(store.events[id])).filter(Boolean);
			return predicate ? events.filter(predicate) : events;
		}

		function correct(eventId, input, actor) {
			const target = get(eventId);
			invariant(target, `Memory Event ${eventId} does not exist.`);
			return record({
				...input,
				type: "memory.corrected",
				actor,
				correctsEventId: target.id,
				affectedEntityRefs: [
					...(input.affectedEntityRefs || []),
					{ kind: "memory-event", id: target.id }
				]
			});
		}

		function findByEntity(kind, id) {
			const ref = normalizeEntityRef({ kind, id }, "entityRef");
			return list(event => [...event.affectedEntityRefs, ...event.evidenceBasis].some(candidate => candidate.kind === ref.kind && candidate.id === ref.id));
		}

		function getSince(eventId) {
			const events = list();
			const index = events.findIndex(event => event.id === eventId);
			invariant(index >= 0, `Memory Event ${eventId} does not exist.`);
			return events.slice(index + 1);
		}

		function getBefore(eventId, limit = 20) {
			invariant(Number.isInteger(limit) && limit > 0, "limit must be a positive integer.");
			const events = list();
			const index = events.findIndex(event => event.id === eventId);
			invariant(index >= 0, `Memory Event ${eventId} does not exist.`);
			return events.slice(Math.max(0, index - limit), index);
		}

		function getReasoningEpisode(reasoningEpisodeId) {
			const id = nonEmpty(reasoningEpisodeId, "reasoningEpisodeId");
			return list(event => event.reasoningEpisodeId === id);
		}

		function listRejectedJudgments() {
			return list(event => ["governance.judgment.invalidated", "governance.proposal.rejected"].includes(event.type));
		}

		function listUnacceptedWatsonProposals() {
			return list(event => event.proposer?.role === "watson" && (
				event.type === "governance.proposal.rejected"
				|| event.governingAuthority.id !== event.proposer.id && event.type.startsWith("reasoning.")
			));
		}

		function listUnresolvedConsequences() {
			return list().flatMap(event => event.unresolvedConsequences.map(consequence => ({ eventId: event.id, ...clone(consequence) })));
		}

		function listSystemEvents() {
			return list(event => event.type.startsWith("system."));
		}

		function explainTransition(fromEventId, toEventId) {
			const events = list();
			const from = events.findIndex(event => event.id === fromEventId);
			const to = events.findIndex(event => event.id === toEventId);
			invariant(from >= 0 && to >= 0 && from <= to, "Transition boundaries are invalid.");
			return events.slice(from, to + 1);
		}

		function validateIntegrity() {
			const store = readStore();
			invariant(new Set(store.order).size === store.order.length, "Operational Memory order contains duplicates.");
			invariant(store.order.every(id => store.events[id]), "Operational Memory order references a missing event.");
			Object.entries(store.sourceEventIndex).forEach(([key, eventId]) => {
				invariant(store.events[eventId], `Source index ${key} references a missing Memory Event.`);
			});
			return true;
		}

		recoverMalformedEvents();
		validateIntegrity();

		return Object.freeze({
			record,
			ensure,
			get,
			getMatterId,
			list,
			correct,
			getSince,
			getBefore,
			findByEntity,
			getReasoningEpisode,
			listRejectedJudgments,
			listUnacceptedWatsonProposals,
			listUnresolvedConsequences,
			listSystemEvents,
			explainTransition,
			validateIntegrity
		});
	}

	function createOperationalMemoryJournalAdapter(options = {}) {
		let volatileJournal = null;
		const storageAdapter = options.storageAdapter || createStorageAdapter({
			loadStore: () => volatileJournal,
			saveStore: value => { volatileJournal = clone(value); }
		});
		const clock = options.clock || (() => new Date().toISOString());
		invariant(typeof clock === "function", "clock must be a function.");

		function readJournal() {
			const value = storageAdapter.loadStore();
			if (value === null) return { operations: {} };
			invariant(value && value.operations && typeof value.operations === "object", "Operational Memory journal is invalid.");
			return value;
		}

		function writeJournal(journal) {
			storageAdapter.saveStore(journal);
		}

		function prepare(operation) {
			const journal = readJournal();
			const id = nonEmpty(operation.id, "operation.id");
			if (journal.operations[id]) return clone(journal.operations[id]);
			journal.operations[id] = {
				id,
				phase: "prepared",
				eventIntent: clone(operation.eventIntent || null),
				sourceDescriptor: clone(operation.sourceDescriptor || null),
				eventInput: null,
				domainResult: null,
				preparedAt: clock()
			};
			writeJournal(journal);
			return clone(journal.operations[id]);
		}

		function markDomainCommitted(operationId, eventInput, domainResult) {
			const journal = readJournal();
			const operation = journal.operations[nonEmpty(operationId, "operationId")];
			invariant(operation, "Pending operation does not exist.");
			operation.phase = "domain-committed";
			operation.eventInput = clone(eventInput);
			operation.domainResult = clone(domainResult);
			writeJournal(journal);
			return clone(operation);
		}

		function complete(operationId) {
			const journal = readJournal();
			delete journal.operations[nonEmpty(operationId, "operationId")];
			writeJournal(journal);
		}

		function list() {
			return Object.values(readJournal().operations).map(clone);
		}

		function importOperations(operations) {
			invariant(Array.isArray(operations), "operations must be an array.");
			const journal = readJournal();
			operations.forEach(operation => {
				const id = nonEmpty(operation.id, "operation.id");
				if (!journal.operations[id]) journal.operations[id] = clone(operation);
			});
			writeJournal(journal);
			return list();
		}

		return Object.freeze({ prepare, markDomainCommitted, complete, list, importOperations });
	}

	function createOperationalMemoryProjectionAdapter(initialProjection = null) {
		let projection = initialProjection === null ? null : clone(initialProjection);
		let checkpoint = null;
		return Object.freeze({
			loadProjection: () => projection === null ? null : clone(projection),
			replaceProjection: value => {
				projection = clone(value);
				return clone(projection);
			},
			loadCheckpoint: () => checkpoint === null ? null : clone(checkpoint),
			saveCheckpoint: value => {
				checkpoint = clone(value);
				return clone(checkpoint);
			},
			clearCheckpoint: () => {
				checkpoint = null;
			}
		});
	}

	function createOperationalMemoryCoordinator(options = {}) {
		const repository = options.repository;
		invariant(
			repository
				&& typeof repository.record === "function"
				&& typeof repository.list === "function"
				&& typeof repository.getMatterId === "function",
			"Operational Memory Repository is required."
		);
		const journalAdapter = options.journalAdapter || createOperationalMemoryJournalAdapter();
		invariant(
			journalAdapter
				&& typeof journalAdapter.prepare === "function"
				&& typeof journalAdapter.markDomainCommitted === "function"
				&& typeof journalAdapter.complete === "function"
				&& typeof journalAdapter.list === "function",
			"Operational Memory Coordinator journal adapter is required."
		);
		const relationshipRepository = options.relationshipRepository || null;
		invariant(
			relationshipRepository === null
				|| (typeof relationshipRepository.get === "function" && typeof relationshipRepository.list === "function"),
			"Coordinator relationshipRepository must expose get() and list()."
		);

		function normalizeSourceDescriptor(descriptor) {
			invariant(descriptor && typeof descriptor === "object", "sourceDescriptor is required.");
			invariant(descriptor.aggregateKind === "relationship", "Only the approved Relationship source contract is supported.");
			invariant(Array.isArray(descriptor.eventTypes) && descriptor.eventTypes.length > 0, "sourceDescriptor.eventTypes is required.");
			return {
				aggregateKind: "relationship",
				aggregateId: nonEmpty(descriptor.aggregateId, "sourceDescriptor.aggregateId"),
				eventTypes: descriptor.eventTypes.map((type, index) => nonEmpty(type, `sourceDescriptor.eventTypes[${index}]`))
			};
		}

		function findSource(descriptor, domainResult) {
			const aggregate = domainResult || relationshipRepository?.get(descriptor.aggregateId);
			if (!aggregate) return null;
			const sourceEvent = [...aggregate.history].reverse().find(event => descriptor.eventTypes.includes(event.type));
			return sourceEvent ? { aggregate, sourceEvent } : null;
		}

		function buildEventInput(intent, descriptor, source) {
			return {
				...clone(intent),
				occurredAt: source.sourceEvent.occurredAt,
				sourceEventRefs: [{
					aggregateKind: descriptor.aggregateKind,
					aggregateId: descriptor.aggregateId,
					eventId: source.sourceEvent.id
				}]
			};
		}

		function execute(input) {
			invariant(input && typeof input === "object", "Coordinated operation is required.");
			const operationId = nonEmpty(input.operationId, "operationId");
			invariant(typeof input.domainCommand === "function", "domainCommand must be a function.");
			invariant(input.memoryIntent && typeof input.memoryIntent === "object", "memoryIntent is required.");
			const sourceDescriptor = normalizeSourceDescriptor(input.sourceDescriptor);
			journalAdapter.prepare({
				id: operationId,
				eventIntent: input.memoryIntent,
				sourceDescriptor
			});
			let domainResult;
			try {
				domainResult = input.domainCommand();
			} catch (error) {
				journalAdapter.complete(operationId);
				throw error;
			}
			const source = findSource(sourceDescriptor, domainResult);
			invariant(source, "Domain command did not produce the expected canonical source event.");
			const eventInput = buildEventInput(input.memoryIntent, sourceDescriptor, source);
			journalAdapter.markDomainCommitted(operationId, eventInput, domainResult);
			if (input.afterDomainCommit) input.afterDomainCommit();
			const event = repository.record(eventInput);
			journalAdapter.complete(operationId);
			return { domainResult, event };
		}

		function recover() {
			let recovered = 0;
			journalAdapter.list()
				.filter(operation => operation.phase === "domain-committed" && operation.eventInput)
				.forEach(operation => {
					repository.record(operation.eventInput);
					journalAdapter.complete(operation.id);
					recovered += 1;
				});
			journalAdapter.list()
				.filter(operation => operation.phase === "prepared")
				.forEach(operation => {
					const descriptor = normalizeSourceDescriptor(operation.sourceDescriptor);
					const source = findSource(descriptor);
					if (source) {
						const eventInput = buildEventInput(operation.eventIntent, descriptor, source);
						journalAdapter.markDomainCommitted(operation.id, eventInput, source.aggregate);
						repository.record(eventInput);
						journalAdapter.complete(operation.id);
						recovered += 1;
						return;
					}
					const aggregate = relationshipRepository?.get(descriptor.aggregateId);
					if (aggregate) journalAdapter.complete(operation.id);
				});
			return recovered;
		}

		function assertProjectionAdapter(adapter) {
			invariant(adapter && typeof adapter === "object", "projectionAdapter is required.");
			["loadProjection", "replaceProjection", "loadCheckpoint", "saveCheckpoint", "clearCheckpoint"].forEach(method => {
				invariant(typeof adapter[method] === "function", `projectionAdapter.${method}() is required.`);
			});
			return adapter;
		}

		function replaySource() {
			const events = repository.list();
			events.forEach((event, index) => {
				invariant(event.sequence === index + 1, "Replay requires contiguous immutable Matter-local ordering.");
			});
			return events;
		}

		function sourceSignature(events) {
			return JSON.stringify(events);
		}

		function emptyReplayState(events, signature) {
			return {
				schemaVersion: 1,
				matterId: events[0]?.matterId || repository.getMatterId(),
				sourceSignature: signature,
				nextIndex: 0,
				history: [],
				correctionsByEventId: {},
				supersessionsByEventId: {},
				currentSituationBasis: null
			};
		}

		function applyReplayEvent(state, event) {
			state.history.push(clone(event));
			if (event.correctsEventId) state.correctionsByEventId[event.correctsEventId] = event.id;
			if (event.supersedesEventId) state.supersessionsByEventId[event.supersedesEventId] = event.id;
			state.currentSituationBasis = {
				eventId: event.id,
				sequence: event.sequence,
				meaning: event.meaning,
				governingAuthority: clone(event.governingAuthority),
				evidenceBasis: clone(event.evidenceBasis),
				unresolvedConsequences: clone(event.unresolvedConsequences)
			};
			state.nextIndex += 1;
		}

		function isCompatibleCheckpoint(saved, events, signature) {
			if (!saved || saved.sourceSignature !== signature) return false;
			if (!Number.isInteger(saved.nextIndex) || saved.nextIndex < 0 || saved.nextIndex > events.length) return false;
			if (!Array.isArray(saved.history) || saved.history.length !== saved.nextIndex) return false;
			return saved.history.every((event, index) => (
				event.id === events[index].id
				&& event.sequence === events[index].sequence
				&& JSON.stringify(event) === JSON.stringify(events[index])
			));
		}

		function replayProjection(input = {}) {
			const projectionAdapter = assertProjectionAdapter(input.projectionAdapter);
			const interruptAfter = input.interruptAfter === undefined ? null : input.interruptAfter;
			invariant(
				interruptAfter === null || (Number.isInteger(interruptAfter) && interruptAfter >= 0),
				"interruptAfter must be a non-negative integer."
			);
			const events = replaySource();
			const signature = sourceSignature(events);
			const saved = projectionAdapter.loadCheckpoint();
			const state = isCompatibleCheckpoint(saved, events, signature)
				? clone(saved)
				: emptyReplayState(events, signature);
			let appliedThisRun = 0;

			while (state.nextIndex < events.length) {
				if (interruptAfter !== null && appliedThisRun >= interruptAfter) {
					projectionAdapter.saveCheckpoint(state);
					return {
						status: "interrupted",
						appliedThisRun,
						nextSequence: events[state.nextIndex].sequence,
						checkpoint: clone(state)
					};
				}
				applyReplayEvent(state, events[state.nextIndex]);
				projectionAdapter.saveCheckpoint(state);
				appliedThisRun += 1;
			}

			const completed = {
				schemaVersion: state.schemaVersion,
				matterId: state.matterId,
				sourceSignature: state.sourceSignature,
				complete: true,
				eventCount: state.history.length,
				throughSequence: state.history.at(-1)?.sequence || 0,
				history: clone(state.history),
				correctionsByEventId: clone(state.correctionsByEventId),
				supersessionsByEventId: clone(state.supersessionsByEventId),
				currentSituationBasis: clone(state.currentSituationBasis)
			};
			projectionAdapter.replaceProjection(completed);
			projectionAdapter.clearCheckpoint();
			return { status: "complete", appliedThisRun, projection: clone(completed) };
		}

		return Object.freeze({ execute, recover, replayProjection });
	}

	return Object.freeze({
		SCHEMA_VERSION,
		EVENT_TYPES,
		ENTITY_KINDS,
		SOURCE_KINDS,
		createStorageAdapter,
		createLocalStorageAdapter,
		createOperationalMemoryRepository,
		createOperationalMemoryJournalAdapter,
		createOperationalMemoryProjectionAdapter,
		createOperationalMemoryCoordinator
	});
});
