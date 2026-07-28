(function (globalScope) {
	"use strict";

	const SCHEMA_VERSION = 1;
	const LIFECYCLE_POLICY_CONTRACT = "management-os.relationship-lifecycle-policy";
	const LIFECYCLE_POLICY_VERSION = 1;
	const SEMANTIC_POLICY_CONTRACT = "management-os.relationship-semantic-policy";
	const SEMANTIC_POLICY_VERSION = 1;

	const LIFECYCLE = Object.freeze([
		"proposed",
		"accepted",
		"challenged",
		"revised",
		"rejected",
		"superseded",
		"archived"
	]);

	const DEFAULT_TRANSITIONS = Object.freeze({
		proposed: Object.freeze(["accepted", "rejected", "archived"]),
		accepted: Object.freeze(["challenged", "superseded", "archived"]),
		challenged: Object.freeze(["revised", "rejected", "archived"]),
		revised: Object.freeze(["accepted", "challenged", "rejected", "superseded"]),
		rejected: Object.freeze(["archived"]),
		superseded: Object.freeze(["archived"]),
		archived: Object.freeze([])
	});

	const SEMANTIC_TYPES = Object.freeze({
		supports: Object.freeze(["directed"]),
		contradicts: Object.freeze(["directed", "bidirectional"]),
		influences: Object.freeze(["directed"]),
		"may-influence": Object.freeze(["directed"]),
		"depends-on": Object.freeze(["directed"]),
		"mutually-depends-on": Object.freeze(["bidirectional"]),
		"derives-from": Object.freeze(["directed"]),
		precedes: Object.freeze(["directed"]),
		follows: Object.freeze(["directed"]),
		"part-of": Object.freeze(["directed"]),
		supersedes: Object.freeze(["directed"]),
		explains: Object.freeze(["directed"]),
		"evidence-for": Object.freeze(["directed"])
	});

	const STATE_VALUES = Object.freeze({
		governance: Object.freeze(["proposed", "accepted", "rejected", "superseded"]),
		epistemic: Object.freeze(["unexamined", "plausible", "supported", "challenged", "contradicted", "unresolved"]),
		participation: Object.freeze(["active", "peripheral", "archived"]),
		attention: Object.freeze(["peripheral", "supporting", "focused", "inspected"])
	});

	function invariant(condition, message) {
		if (!condition) throw new Error(message);
	}

	function clone(value) {
		return value === undefined ? undefined : JSON.parse(JSON.stringify(value));
	}

	function nonEmpty(value, label) {
		invariant(typeof value === "string" && value.trim(), `${label} must be a non-empty string.`);
		return value.trim();
	}

	function stringArray(value, label) {
		invariant(Array.isArray(value), `${label} must be an array.`);
		const normalized = value.map((item, index) => nonEmpty(item, `${label}[${index}]`));
		invariant(new Set(normalized).size === normalized.length, `${label} must not contain duplicates.`);
		return normalized;
	}

	function normalizeActor(actor, label = "actor") {
		invariant(actor && typeof actor === "object", `${label} is required.`);
		return {
			id: nonEmpty(actor.id, `${label}.id`),
			name: nonEmpty(actor.name, `${label}.name`),
			role: nonEmpty(actor.role, `${label}.role`)
		};
	}

	function isHuman(actor) {
		return !["watson", "system", "source"].includes(actor.role);
	}

	function defaultId(prefix = "relationship") {
		if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") return crypto.randomUUID();
		return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
	}

	function createStorageAdapter(adapter) {
		invariant(adapter && typeof adapter.loadStore === "function" && typeof adapter.saveStore === "function", "A Storage Adapter with loadStore() and saveStore() is required.");
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
		const storageKey = nonEmpty(key, "storage key");
		return createStorageAdapter({
			loadStore() {
				const serialized = storage.getItem(storageKey);
				return serialized ? JSON.parse(serialized) : null;
			},
			saveStore(store) {
				storage.setItem(storageKey, JSON.stringify(store));
			}
		});
	}

	function createLifecyclePolicy(transitions = DEFAULT_TRANSITIONS) {
		const graph = {};
		LIFECYCLE.forEach(stage => {
			const targets = transitions[stage] || [];
			invariant(Array.isArray(targets), `Lifecycle transitions for ${stage} must be an array.`);
			targets.forEach(target => invariant(LIFECYCLE.includes(target), `Unknown lifecycle target ${target}.`));
			graph[stage] = Object.freeze([...new Set(targets)]);
		});
		return Object.freeze({
			contract: LIFECYCLE_POLICY_CONTRACT,
			contractVersion: LIFECYCLE_POLICY_VERSION,
			hasStage: stage => LIFECYCLE.includes(stage),
			canTransition: (from, to) => Boolean(graph[from]?.includes(to)),
			transitionsFrom: stage => clone(graph[stage] || [])
		});
	}

	function createSemanticPolicy(types = SEMANTIC_TYPES) {
		const definitions = {};
		Object.entries(types).forEach(([type, directions]) => {
			nonEmpty(type, "semantic type");
			invariant(Array.isArray(directions) && directions.length > 0, `${type} requires at least one direction.`);
			directions.forEach(direction => invariant(["directed", "bidirectional"].includes(direction), `${direction} is not a canonical direction.`));
			definitions[type] = Object.freeze([...new Set(directions)]);
		});
		return Object.freeze({
			contract: SEMANTIC_POLICY_CONTRACT,
			contractVersion: SEMANTIC_POLICY_VERSION,
			hasType: type => Boolean(definitions[type]),
			supportsDirection: (type, direction) => Boolean(definitions[type]?.includes(direction)),
			directionsFor: type => clone(definitions[type] || [])
		});
	}

	const DEFAULT_LIFECYCLE_POLICY = createLifecyclePolicy();
	const DEFAULT_SEMANTIC_POLICY = createSemanticPolicy();

	function createRelationshipRepository(options = {}) {
		const matterId = nonEmpty(options.matterId, "matterId");
		const storageAdapter = createStorageAdapter(options.storageAdapter);
		const artifactRepository = options.artifactRepository;
		invariant(
			artifactRepository
				&& typeof artifactRepository.get === "function"
				&& typeof artifactRepository.list === "function"
				&& typeof artifactRepository.attachRelationshipRef === "function"
				&& typeof artifactRepository.detachRelationshipRef === "function",
			"A canonical Artifact Repository is required."
		);
		const lifecyclePolicy = options.lifecyclePolicy || DEFAULT_LIFECYCLE_POLICY;
		invariant(
			lifecyclePolicy.contract === LIFECYCLE_POLICY_CONTRACT
				&& lifecyclePolicy.contractVersion === LIFECYCLE_POLICY_VERSION
				&& typeof lifecyclePolicy.hasStage === "function"
				&& typeof lifecyclePolicy.canTransition === "function",
			"A compatible Relationship Lifecycle Policy is required."
		);
		const semanticPolicy = options.semanticPolicy || DEFAULT_SEMANTIC_POLICY;
		invariant(
			semanticPolicy.contract === SEMANTIC_POLICY_CONTRACT
				&& semanticPolicy.contractVersion === SEMANTIC_POLICY_VERSION
				&& typeof semanticPolicy.hasType === "function"
				&& typeof semanticPolicy.supportsDirection === "function",
			"A compatible Relationship Semantic Policy is required."
		);
		const clock = options.clock || (() => new Date().toISOString());
		const idGenerator = options.idGenerator || (() => defaultId());
		const contextEnvelopeContract = options.contextEnvelopeContract || globalScope.ManagementOsArtifacts?.ContextEnvelope || null;

		function emptyStore() {
			return {
				schemaVersion: SCHEMA_VERSION,
				matterId,
				relationships: {},
				pendingOperations: {},
				quarantinedRelationships: {}
			};
		}

		function validateAuthority(authority) {
			const normalized = normalizeActor(authority, "governingAuthority");
			invariant(isHuman(normalized), "Watson, the system, and sources cannot govern a Relationship.");
			return normalized;
		}

		function validateProvenance(provenance) {
			invariant(provenance && typeof provenance === "object", "Relationship provenance is required.");
			const proposer = normalizeActor(provenance.proposer, "provenance.proposer");
			const origin = provenance.origin;
			invariant(origin && typeof origin === "object", "provenance.origin is required.");
			return {
				method: nonEmpty(provenance.method, "provenance.method"),
				origin: {
					kind: nonEmpty(origin.kind, "provenance.origin.kind"),
					label: nonEmpty(origin.label, "provenance.origin.label"),
					reference: origin.reference === undefined ? null : clone(origin.reference)
				},
				proposer,
				proposedAt: nonEmpty(provenance.proposedAt, "provenance.proposedAt"),
				circumstance: nonEmpty(provenance.circumstance, "provenance.circumstance"),
				evidenceBasis: stringArray(provenance.evidenceBasis || [], "provenance.evidenceBasis"),
				rawProposal: provenance.rawProposal === undefined ? null : clone(provenance.rawProposal)
			};
		}

		function validateUncertainty(uncertainty = {}) {
			const confidence = uncertainty.confidence || "unexamined";
			invariant(STATE_VALUES.epistemic.includes(confidence), "Uncertainty confidence must be qualitative and canonical.");
			return {
				confidence,
				evidenceArtifactIds: stringArray(uncertainty.evidenceArtifactIds || [], "uncertainty.evidenceArtifactIds"),
				unresolvedQuestions: stringArray(uncertainty.unresolvedQuestions || [], "uncertainty.unresolvedQuestions"),
				scope: uncertainty.scope === undefined || uncertainty.scope === null ? null : nonEmpty(uncertainty.scope, "uncertainty.scope"),
				assumptions: stringArray(uncertainty.assumptions || [], "uncertainty.assumptions")
			};
		}

		function requireArtifact(artifactId, label) {
			const artifact = artifactRepository.get(nonEmpty(artifactId, label));
			invariant(artifact, `${label} does not identify an existing Artifact.`);
			invariant(artifact.matterId === matterId, `${label} belongs to another Matter.`);
			return artifact;
		}

		function validateEvidenceReferences(referenceIds) {
			referenceIds.forEach((artifactId, index) => requireArtifact(artifactId, `evidenceArtifactIds[${index}]`));
		}

		function validateStoredRelationship(relationshipId, relationship) {
			invariant(relationship && typeof relationship === "object", `Relationship ${relationshipId} is invalid.`);
			invariant(nonEmpty(relationship.id, "relationship.id") === relationshipId, "Relationship store key does not match identity.");
			invariant(relationship.matterId === matterId, `Relationship ${relationshipId} belongs to another Matter.`);
			nonEmpty(relationship.endpoints.sourceArtifactId, "relationship.endpoints.sourceArtifactId");
			nonEmpty(relationship.endpoints.targetArtifactId, "relationship.endpoints.targetArtifactId");
			invariant(relationship.endpoints.sourceArtifactId !== relationship.endpoints.targetArtifactId, "A Relationship cannot connect an Artifact to itself.");
			invariant(semanticPolicy.hasType(relationship.semantic.type), `Relationship ${relationshipId} semantic type is invalid.`);
			invariant(semanticPolicy.supportsDirection(relationship.semantic.type, relationship.semantic.direction), `Relationship ${relationshipId} direction is invalid for its semantic type.`);
			validateProvenance(relationship.provenance);
			validateAuthority(relationship.governingAuthority);
			invariant(lifecyclePolicy.hasStage(relationship.lifecycle.stage), `Relationship ${relationshipId} lifecycle is invalid.`);
			Object.entries(STATE_VALUES).forEach(([dimension, values]) => invariant(values.includes(relationship.states[dimension]), `Relationship ${relationshipId} ${dimension} state is invalid.`));
			validateUncertainty(relationship.uncertainty);
			invariant(Number.isInteger(relationship.revision) && relationship.revision >= 1, `Relationship ${relationshipId} revision is invalid.`);
			invariant(Array.isArray(relationship.history), `Relationship ${relationshipId} history must be an array.`);
			const eventIds = new Set();
			relationship.history.forEach(historyEvent => {
				nonEmpty(historyEvent.id, "history event id");
				nonEmpty(historyEvent.type, "history event type");
				nonEmpty(historyEvent.occurredAt, "history event occurredAt");
				normalizeActor(historyEvent.actor, "history event actor");
				nonEmpty(historyEvent.reason, "history event reason");
				invariant(!eventIds.has(historyEvent.id), `Relationship ${relationshipId} contains duplicate history identity.`);
				eventIds.add(historyEvent.id);
			});
			return relationship;
		}

		function readStore() {
			const loaded = storageAdapter.loadStore();
			if (loaded === null) return emptyStore();
			invariant(loaded.schemaVersion === SCHEMA_VERSION, "Unsupported Relationship store schema.");
			invariant(loaded.matterId === matterId, "Relationship store belongs to another Matter.");
			invariant(loaded.relationships && typeof loaded.relationships === "object", "Relationship store is invalid.");
			invariant(loaded.pendingOperations && typeof loaded.pendingOperations === "object", "Relationship operation journal is invalid.");
			if (!loaded.quarantinedRelationships || typeof loaded.quarantinedRelationships !== "object") {
				loaded.quarantinedRelationships = {};
			}
			Object.entries(loaded.relationships).forEach(([id, relationship]) => validateStoredRelationship(id, relationship));
			return loaded;
		}

		function writeStore(store) {
			Object.entries(store.relationships).forEach(([id, relationship]) => validateStoredRelationship(id, relationship));
			storageAdapter.saveStore(store);
		}

		function makeEvent(type, actor, reason, details, occurredAt = clock()) {
			return {
				id: idGenerator(),
				type,
				occurredAt,
				actor: normalizeActor(actor),
				reason: nonEmpty(reason, "reason"),
				details: clone(details || {})
			};
		}

		function requireRelationship(store, relationshipId) {
			const id = nonEmpty(relationshipId, "relationshipId");
			const relationship = store.relationships[id];
			invariant(relationship, `Relationship ${id} does not exist in Matter ${matterId}.`);
			return relationship;
		}

		function requireHumanGovernance(relationship, actor) {
			const normalized = normalizeActor(actor);
			invariant(isHuman(normalized), "Watson cannot make a governing judgment about a Relationship.");
			invariant(normalized.id === relationship.governingAuthority.id, `${normalized.name} is not the governing authority for this Relationship.`);
			return normalized;
		}

		function transition(relationshipId, nextStage, actor, reason, mutate) {
			const store = readStore();
			const relationship = requireRelationship(store, relationshipId);
			const authorized = requireHumanGovernance(relationship, actor);
			invariant(lifecyclePolicy.canTransition(relationship.lifecycle.stage, nextStage), `Relationship lifecycle cannot move from ${relationship.lifecycle.stage} to ${nextStage}.`);
			const previous = relationship.lifecycle.stage;
			if (mutate) mutate(relationship, authorized);
			relationship.lifecycle.stage = nextStage;
			relationship.updatedAt = clock();
			relationship.history.push(makeEvent(`relationship.${nextStage}`, authorized, reason, {
				from: previous,
				to: nextStage,
				relationshipId: relationship.id,
				endpoints: clone(relationship.endpoints)
			}, relationship.updatedAt));
			writeStore(store);
			return clone(relationship);
		}

		function recoverPendingOperations() {
			const store = readStore();
			let changed = false;
			Object.values(store.pendingOperations).forEach(operation => {
				const relationship = store.relationships[operation.relationshipId];
				if (relationship) {
					delete store.pendingOperations[operation.id];
					changed = true;
					return;
				}
				const authority = operation.governingAuthority;
				[operation.sourceArtifactId, operation.targetArtifactId].forEach(artifactId => {
					const artifact = artifactRepository.get(artifactId);
					if (artifact?.relationshipRefs.includes(operation.relationshipId)) {
						artifactRepository.detachRelationshipRef(artifactId, operation.relationshipId, authority, "Recovered an interrupted Relationship transaction.", { rollback: true });
					}
				});
				delete store.pendingOperations[operation.id];
				changed = true;
			});
			if (changed) writeStore(store);
		}

		function recoveryActorFor(artifact) {
			return {
				id: artifact.ownership.ownerId,
				name: artifact.ownership.ownerName,
				role: artifact.ownership.ownerRole
			};
		}

		function detachDanglingReference(artifact, relationshipId, reason) {
			artifactRepository.detachRelationshipRef(
				artifact.id,
				relationshipId,
				recoveryActorFor(artifact),
				reason,
				{ rollback: true }
			);
		}

		function recoverMalformedRelationships() {
			const loaded = storageAdapter.loadStore();
			if (loaded === null) return;
			invariant(loaded.schemaVersion === SCHEMA_VERSION, "Unsupported Relationship store schema.");
			invariant(loaded.matterId === matterId, "Relationship store belongs to another Matter.");
			invariant(loaded.relationships && typeof loaded.relationships === "object", "Relationship store is invalid.");
			invariant(loaded.pendingOperations && typeof loaded.pendingOperations === "object", "Relationship operation journal is invalid.");
			const quarantineAdded = !loaded.quarantinedRelationships || typeof loaded.quarantinedRelationships !== "object";
			if (!loaded.quarantinedRelationships || typeof loaded.quarantinedRelationships !== "object") {
				loaded.quarantinedRelationships = {};
			}
			let changed = false;
			Object.entries(loaded.relationships).forEach(([relationshipId, relationship]) => {
				try {
					validateStoredRelationship(relationshipId, relationship);
					requireArtifact(relationship.endpoints.sourceArtifactId, "sourceArtifactId");
					requireArtifact(relationship.endpoints.targetArtifactId, "targetArtifactId");
					validateEvidenceReferences([
						...new Set([
							...relationship.provenance.evidenceBasis,
							...relationship.uncertainty.evidenceArtifactIds
						])
					]);
				} catch (error) {
					loaded.quarantinedRelationships[relationshipId] = {
						relationship: clone(relationship),
						error: error.message,
						quarantinedAt: clock()
					};
					delete loaded.relationships[relationshipId];
					artifactRepository.list().forEach(artifact => {
						if (artifact.relationshipRefs.includes(relationshipId)) {
							detachDanglingReference(
								artifact,
								relationshipId,
								"Malformed Relationship was quarantined during startup recovery."
							);
						}
					});
					changed = true;
				}
			});
			if (changed || quarantineAdded) storageAdapter.saveStore(loaded);
		}

		function recoverDanglingArtifactReferences() {
			const store = readStore();
			artifactRepository.list().forEach(artifact => {
				artifact.relationshipRefs.forEach(relationshipId => {
					if (!store.relationships[relationshipId]) {
						detachDanglingReference(
							artifact,
							relationshipId,
							"Dangling Relationship reference was rolled back during startup recovery."
						);
					}
				});
			});
		}

		function propose(input) {
			invariant(input && typeof input === "object", "Relationship input is required.");
			const now = clock();
			const relationshipId = nonEmpty(input.id || idGenerator(), "relationship.id");
			const source = requireArtifact(input.sourceArtifactId, "sourceArtifactId");
			const target = requireArtifact(input.targetArtifactId, "targetArtifactId");
			invariant(source.id !== target.id, "A Relationship cannot connect an Artifact to itself.");
			const semanticType = nonEmpty(input.semanticType, "semanticType");
			const direction = nonEmpty(input.direction, "direction");
			invariant(semanticPolicy.hasType(semanticType), `${semanticType} is not a canonical Relationship semantic type.`);
			invariant(semanticPolicy.supportsDirection(semanticType, direction), `${direction} is invalid for ${semanticType}.`);
			const governingAuthority = validateAuthority(input.governingAuthority);
			const provenance = validateProvenance({ ...input.provenance, proposedAt: input.provenance?.proposedAt || now });
			const uncertainty = validateUncertainty(input.uncertainty);
			validateEvidenceReferences([...new Set([...provenance.evidenceBasis, ...uncertainty.evidenceArtifactIds])]);
			const store = readStore();
			invariant(!store.relationships[relationshipId], `Relationship ${relationshipId} already exists.`);
			invariant(!store.pendingOperations[relationshipId], `Relationship ${relationshipId} has a pending transaction.`);

			const relationship = {
				id: relationshipId,
				matterId,
				endpoints: { sourceArtifactId: source.id, targetArtifactId: target.id },
				semantic: { type: semanticType, direction },
				provenance,
				governingAuthority,
				lifecycle: { stage: "proposed" },
				states: {
					governance: "proposed",
					epistemic: uncertainty.confidence,
					participation: "active",
					attention: "peripheral"
				},
				uncertainty,
				supersededByRelationshipId: null,
				revision: 1,
				createdAt: now,
				updatedAt: now,
				history: [
					makeEvent("relationship.created", provenance.proposer, "Interpretation received stable identity inside the Matter.", {
						endpoints: { sourceArtifactId: source.id, targetArtifactId: target.id },
						semantic: { type: semanticType, direction }
					}, now),
					makeEvent("relationship.proposed", provenance.proposer, "Interpretation awaits human governance.", {
						uncertainty: clone(uncertainty)
					}, now)
				]
			};

			const operation = {
				id: relationshipId,
				relationshipId,
				sourceArtifactId: source.id,
				targetArtifactId: target.id,
				governingAuthority,
				phase: "prepared"
			};
			store.pendingOperations[operation.id] = operation;
			writeStore(store);
			let sourceAttached = false;
			let targetAttached = false;
			try {
				artifactRepository.attachRelationshipRef(source.id, relationshipId, governingAuthority, "Relationship transaction attached its source reference.");
				sourceAttached = true;
				operation.phase = "source-attached";
				writeStore(store);
				artifactRepository.attachRelationshipRef(target.id, relationshipId, governingAuthority, "Relationship transaction attached its target reference.");
				targetAttached = true;
				operation.phase = "references-attached";
				writeStore(store);
				store.relationships[relationshipId] = relationship;
				delete store.pendingOperations[operation.id];
				writeStore(store);
				return clone(relationship);
			} catch (error) {
				if (targetAttached) artifactRepository.detachRelationshipRef(target.id, relationshipId, governingAuthority, "Relationship transaction rolled back.", { rollback: true });
				if (sourceAttached) artifactRepository.detachRelationshipRef(source.id, relationshipId, governingAuthority, "Relationship transaction rolled back.", { rollback: true });
				const recoveryStore = readStore();
				delete recoveryStore.pendingOperations[operation.id];
				writeStore(recoveryStore);
				throw error;
			}
		}

		function ensure(input) {
			nonEmpty(input?.id, "relationship.id");
			return get(input.id) || propose(input);
		}

		function get(relationshipId) {
			const relationship = readStore().relationships[nonEmpty(relationshipId, "relationshipId")];
			return relationship ? clone(relationship) : null;
		}

		function list(predicate) {
			invariant(predicate === undefined || typeof predicate === "function", "Relationship list predicate must be a function.");
			const relationships = Object.values(readStore().relationships).map(clone);
			return predicate ? relationships.filter(predicate) : relationships;
		}

		function accept(relationshipId, actor, reason) {
			return transition(relationshipId, "accepted", actor, reason, relationship => {
				relationship.states.governance = "accepted";
			});
		}

		function challenge(relationshipId, actor, reason) {
			return transition(relationshipId, "challenged", actor, reason, relationship => {
				relationship.states.epistemic = "challenged";
			});
		}

		function reject(relationshipId, actor, reason) {
			return transition(relationshipId, "rejected", actor, reason, relationship => {
				relationship.states.governance = "rejected";
				relationship.states.participation = "peripheral";
			});
		}

		function archive(relationshipId, actor, reason) {
			return transition(relationshipId, "archived", actor, reason, relationship => {
				relationship.states.participation = "archived";
				relationship.states.attention = "peripheral";
			});
		}

		function supersede(relationshipId, replacementRelationshipId, actor, reason) {
			const replacement = get(replacementRelationshipId);
			invariant(replacement, "A superseding Relationship must already exist.");
			invariant(replacement.id !== relationshipId, "A Relationship cannot supersede itself.");
			return transition(relationshipId, "superseded", actor, reason, relationship => {
				relationship.states.governance = "superseded";
				relationship.states.participation = "peripheral";
				relationship.supersededByRelationshipId = replacement.id;
			});
		}

		function appendChangeEvents(relationship, authorized, reason, changeSet, occurredAt) {
			if (changeSet.typeChanged) {
				relationship.history.push(makeEvent("relationship.type.changed", authorized, reason, changeSet.typeChanged, occurredAt));
			}
			if (changeSet.directionChanged) {
				relationship.history.push(makeEvent("relationship.direction.changed", authorized, reason, changeSet.directionChanged, occurredAt));
			}
			if (changeSet.evidenceChanged) {
				relationship.history.push(makeEvent("relationship.evidence.changed", authorized, reason, changeSet.evidenceChanged, occurredAt));
			}
		}

		function revise(relationshipId, changes, actor, reason) {
			const store = readStore();
			const relationship = requireRelationship(store, relationshipId);
			const authorized = requireHumanGovernance(relationship, actor);
			invariant(lifecyclePolicy.canTransition(relationship.lifecycle.stage, "revised"), `Relationship lifecycle cannot move from ${relationship.lifecycle.stage} to revised.`);
			const changeSet = applyEditableChanges(relationship, changes);
			invariant(changeSet.changed, "A lifecycle revision must change the interpretation.");
			const previous = relationship.lifecycle.stage;
			relationship.lifecycle.stage = "revised";
			relationship.revision += 1;
			relationship.updatedAt = clock();
			appendChangeEvents(relationship, authorized, reason, changeSet, relationship.updatedAt);
			relationship.history.push(makeEvent("relationship.revised", authorized, reason, { from: previous, to: "revised" }, relationship.updatedAt));
			writeStore(store);
			return clone(relationship);
		}

		function applyEditableChanges(relationship, changes) {
			invariant(changes && typeof changes === "object", "Relationship changes are required.");
			const allowed = ["semanticType", "direction", "uncertainty"];
			invariant(Object.keys(changes).length > 0 && Object.keys(changes).every(key => allowed.includes(key)), "Editing cannot change Relationship identity, endpoints, provenance, or authority.");
			const nextType = changes.semanticType === undefined ? relationship.semantic.type : nonEmpty(changes.semanticType, "semanticType");
			const nextDirection = changes.direction === undefined ? relationship.semantic.direction : nonEmpty(changes.direction, "direction");
			invariant(semanticPolicy.hasType(nextType), `${nextType} is not a canonical Relationship semantic type.`);
			invariant(semanticPolicy.supportsDirection(nextType, nextDirection), `${nextDirection} is invalid for ${nextType}.`);
			const nextUncertainty = changes.uncertainty === undefined ? relationship.uncertainty : validateUncertainty(changes.uncertainty);
			validateEvidenceReferences(nextUncertainty.evidenceArtifactIds);
			const previousType = relationship.semantic.type;
			const previousDirection = relationship.semantic.direction;
			const previousUncertainty = clone(relationship.uncertainty);
			const typeChanged = nextType !== previousType;
			const directionChanged = nextDirection !== previousDirection;
			const evidenceChanged = JSON.stringify(nextUncertainty) !== JSON.stringify(previousUncertainty);
			if (!typeChanged && !directionChanged && !evidenceChanged) return { changed: false };
			relationship.semantic = { type: nextType, direction: nextDirection };
			relationship.uncertainty = nextUncertainty;
			relationship.states.epistemic = nextUncertainty.confidence;
			return {
				changed: true,
				typeChanged: typeChanged ? { from: previousType, to: nextType } : null,
				directionChanged: directionChanged ? { from: previousDirection, to: nextDirection } : null,
				evidenceChanged: evidenceChanged ? { from: previousUncertainty, to: clone(nextUncertainty) } : null
			};
		}

		function edit(relationshipId, changes, actor, reason) {
			const store = readStore();
			const relationship = requireRelationship(store, relationshipId);
			const normalizedActor = normalizeActor(actor);
			const mayEditProposal = relationship.lifecycle.stage === "proposed"
				&& normalizedActor.id === relationship.provenance.proposer.id
				&& normalizedActor.role === relationship.provenance.proposer.role;
			if (!mayEditProposal) requireHumanGovernance(relationship, normalizedActor);
			const changeSet = applyEditableChanges(relationship, changes);
			if (!changeSet.changed) return clone(relationship);
			relationship.revision += 1;
			relationship.updatedAt = clock();
			appendChangeEvents(relationship, normalizedActor, reason, changeSet, relationship.updatedAt);
			relationship.history.push(makeEvent("relationship.revised", normalizedActor, reason, { lifecycleUnchanged: true }, relationship.updatedAt));
			writeStore(store);
			return clone(relationship);
		}

		function setState(relationshipId, dimension, value, actor, reason) {
			invariant(STATE_VALUES[dimension]?.includes(value), `${value} is not valid for Relationship ${dimension}.`);
			invariant(!["governance"].includes(dimension), "Governance state changes only through lifecycle judgments.");
			const store = readStore();
			const relationship = requireRelationship(store, relationshipId);
			const authorized = requireHumanGovernance(relationship, actor);
			const previous = relationship.states[dimension];
			if (previous === value) return clone(relationship);
			relationship.states[dimension] = value;
			relationship.updatedAt = clock();
			relationship.history.push(makeEvent("relationship.state.changed", authorized, reason, { dimension, from: previous, to: value }, relationship.updatedAt));
			writeStore(store);
			return clone(relationship);
		}

		function withdrawProposal(relationshipId, actor, reason) {
			const store = readStore();
			const relationship = requireRelationship(store, relationshipId);
			const proposer = normalizeActor(actor);
			invariant(relationship.lifecycle.stage === "proposed", "Only an unresolved proposal may be withdrawn.");
			invariant(proposer.id === relationship.provenance.proposer.id && proposer.role === relationship.provenance.proposer.role, "Only the original proposer may withdraw this proposal.");
			relationship.lifecycle.stage = "rejected";
			relationship.states.governance = "rejected";
			relationship.states.participation = "peripheral";
			relationship.updatedAt = clock();
			relationship.history.push(makeEvent("relationship.rejected", proposer, reason, { withdrawnByProposer: true }, relationship.updatedAt));
			writeStore(store);
			return clone(relationship);
		}

		function inspect(relationshipId, context, actor) {
			invariant(contextEnvelopeContract && typeof contextEnvelopeContract.assertCompatible === "function", "A compatible Context Envelope contract is required for Relationship Inspection.");
			const contextEnvelope = contextEnvelopeContract.assertCompatible(context, { matterId });
			const relationship = get(relationshipId);
			invariant(relationship, `Relationship ${relationshipId} does not exist in Matter ${matterId}.`);
			const previousAttention = relationship.states.attention;
			const inspected = setState(relationshipId, "attention", "inspected", actor, "Relationship became the temporary object of close examination.");
			return {
				id: idGenerator(),
				relationshipId,
				openedAt: clock(),
				previousAttention,
				contextEnvelope,
				relationship: inspected
			};
		}

		function closeInspection(inspection, actor, reason = "Relationship Inspection ended and prior operational context was restored.") {
			invariant(inspection && typeof inspection === "object", "A valid Relationship Inspection is required.");
			const relationshipId = nonEmpty(inspection.relationshipId, "inspection.relationshipId");
			invariant(STATE_VALUES.attention.includes(inspection.previousAttention), "Inspection previousAttention is invalid.");
			const contextEnvelope = contextEnvelopeContract.assertCompatible(inspection.contextEnvelope, { matterId });
			const relationship = setState(relationshipId, "attention", inspection.previousAttention, actor, reason);
			return { relationship, contextEnvelope, closedAt: clock() };
		}

		function validateIntegrity() {
			const store = readStore();
			Object.values(store.relationships).forEach(relationship => {
				const source = requireArtifact(relationship.endpoints.sourceArtifactId, "sourceArtifactId");
				const target = requireArtifact(relationship.endpoints.targetArtifactId, "targetArtifactId");
				invariant(source.relationshipRefs.includes(relationship.id), `Source Artifact is missing Relationship ${relationship.id}.`);
				invariant(target.relationshipRefs.includes(relationship.id), `Target Artifact is missing Relationship ${relationship.id}.`);
			});
			artifactRepository.list().forEach(artifact => {
				artifact.relationshipRefs.forEach(relationshipId => {
					invariant(store.relationships[relationshipId], `Artifact ${artifact.id} contains dangling Relationship reference ${relationshipId}.`);
				});
			});
			return true;
		}

		recoverMalformedRelationships();
		recoverPendingOperations();
		recoverDanglingArtifactReferences();
		validateIntegrity();

		return Object.freeze({
			propose,
			ensure,
			get,
			list,
			edit,
			accept,
			challenge,
			revise,
			reject,
			archive,
			supersede,
			setState,
			withdrawProposal,
			inspect,
			closeInspection,
			recoverPendingOperations,
			validateIntegrity
		});
	}

	const api = Object.freeze({
		SCHEMA_VERSION,
		LIFECYCLE,
		STATE_VALUES,
		SEMANTIC_TYPES,
		LIFECYCLE_POLICY_CONTRACT,
		LIFECYCLE_POLICY_VERSION,
		SEMANTIC_POLICY_CONTRACT,
		SEMANTIC_POLICY_VERSION,
		createStorageAdapter,
		createLocalStorageAdapter,
		createLifecyclePolicy,
		createSemanticPolicy,
		createRelationshipRepository,
		DEFAULT_LIFECYCLE_POLICY,
		DEFAULT_SEMANTIC_POLICY
	});

	if (typeof module !== "undefined" && module.exports) module.exports = api;
	globalScope.ManagementOsRelationships = api;
})(typeof globalThis !== "undefined" ? globalThis : window);
