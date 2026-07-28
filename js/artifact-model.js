(function (root, factory) {
	const api = factory(
		typeof module === "object" && module.exports
			? require("./authority-policy.js")
			: root.ManagementOsAuthorityPolicy
	);

	if (typeof module === "object" && module.exports) {
		module.exports = api;
	}

	if (root) {
		root.ManagementOsArtifacts = api;
	}
})(typeof globalThis !== "undefined" ? globalThis : this, function (authorityApi) {
	"use strict";

	if (!authorityApi) throw new Error("Canonical Authority Policy is required.");

	const SCHEMA_VERSION = 1;
	const LIFECYCLE = Object.freeze([
		"captured",
		"proposed",
		"admitted",
		"active",
		"evaluated",
		"settled",
		"archived"
	]);
	const STATE_VALUES = Object.freeze({
		review: Object.freeze(["new", "reviewed"]),
		provenance: Object.freeze(["declared", "traceable", "verified", "disputed"]),
		epistemic: Object.freeze(["unverified", "supported", "confirmed", "contradicted", "rejected"]),
		participation: Object.freeze(["corpus", "working-set"]),
		attention: Object.freeze(["peripheral", "supporting", "primary", "inspected"])
	});
	const BIRTH_PATHS = Object.freeze(["owner-authored", "source-derived", "proposed"]);
	const ACTOR_ROLES = Object.freeze(["owner", "delegate", "watson", "system", "source"]);
	const LIFECYCLE_TRANSITIONS = Object.freeze({
		captured: Object.freeze(["proposed", "admitted"]),
		proposed: Object.freeze(["admitted"]),
		admitted: Object.freeze(["active"]),
		active: Object.freeze(["evaluated"]),
		evaluated: Object.freeze(["settled"]),
		settled: Object.freeze(["archived"]),
		archived: Object.freeze([])
	});
	const CONTEXT_ENVELOPE_CONTRACT = "management-os.context-envelope";
	const CONTEXT_ENVELOPE_VERSION = 1;
	const LIFECYCLE_POLICY_CONTRACT = "management-os.artifact-lifecycle-policy";
	const LIFECYCLE_POLICY_VERSION = 1;
	const CONTEXT_ENVELOPE_FIELDS = Object.freeze({
		matterId: "The Matter whose operational context must remain authoritative.",
		currentSituationVersion: "The exact Current Situation version visible at entry.",
		primaryFocus: "The primary operational subject before temporary movement.",
		supportingNeighborhood: "The stable identifiers needed to reconstruct surrounding meaning.",
		spatialLocation: "The semantic location of the subject inside the shared surface.",
		activeScope: "The Working Set, Collection, or line of inquiry constraining the view.",
		entryOrigin: "The identifiable subject or action from which movement began.",
		unresolvedWork: "The open questions or judgments that must survive return.",
		lastConsequentialChange: "The latest known consequential event, or null when none exists."
	});

	function clone(value) {
		return value === undefined ? undefined : JSON.parse(JSON.stringify(value));
	}

	function sameValue(left, right) {
		return JSON.stringify(left) === JSON.stringify(right);
	}

	function deepFreeze(value) {
		if (!value || typeof value !== "object" || Object.isFrozen(value)) return value;
		Object.values(value).forEach(deepFreeze);
		return Object.freeze(value);
	}

	function invariant(condition, message) {
		if (!condition) throw new Error(message);
	}

	function identityConflict(message) {
		const error = new Error(message);
		error.name = "IdentityConflictError";
		error.code = "IDENTITY_CONFLICT";
		throw error;
	}

	function nonEmpty(value, name) {
		invariant(typeof value === "string" && value.trim(), `${name} is required.`);
		return value.trim();
	}

	function stringArray(value, name) {
		invariant(Array.isArray(value), `${name} must be an array.`);
		const normalized = value.map((item, index) => nonEmpty(item, `${name}[${index}]`));
		invariant(new Set(normalized).size === normalized.length, `${name} cannot contain duplicate identifiers.`);
		return normalized;
	}

	function normalizeActor(actor, name = "actor") {
		invariant(actor && typeof actor === "object", `${name} is required.`);
		const role = nonEmpty(actor.role, `${name}.role`);
		invariant(ACTOR_ROLES.includes(role), `${name}.role is not canonical.`);
		return {
			id: nonEmpty(actor.id, `${name}.id`),
			name: nonEmpty(actor.name, `${name}.name`),
			role
		};
	}

	function normalizeProvenance(provenance, fallbackTime) {
		invariant(provenance && typeof provenance === "object", "provenance is required.");
		invariant(BIRTH_PATHS.includes(provenance.method), "provenance.method is not canonical.");
		invariant(provenance.origin && typeof provenance.origin === "object", "provenance.origin is required.");

		return {
			method: provenance.method,
			origin: {
				kind: nonEmpty(provenance.origin.kind, "provenance.origin.kind"),
				label: nonEmpty(provenance.origin.label, "provenance.origin.label"),
				reference: provenance.origin.reference ? String(provenance.origin.reference) : null
			},
			author: normalizeActor(provenance.author, "provenance.author"),
			introducedAt: provenance.introducedAt || fallbackTime,
			circumstance: nonEmpty(provenance.circumstance, "provenance.circumstance"),
			rawInput: provenance.rawInput === undefined ? null : clone(provenance.rawInput)
		};
	}

	function validateProvenance(provenance) {
		const normalized = normalizeProvenance(provenance, null);
		nonEmpty(normalized.introducedAt, "provenance.introducedAt");
		return normalized;
	}

	function createStorageAdapter(adapter) {
		invariant(adapter && typeof adapter === "object", "Storage Adapter is required.");
		invariant(typeof adapter.loadStore === "function", "Storage Adapter requires loadStore().");
		invariant(typeof adapter.saveStore === "function", "Storage Adapter requires saveStore().");

		return Object.freeze({
			loadStore() {
				const store = adapter.loadStore();
				invariant(store === null || (store && typeof store === "object"), "Storage Adapter loadStore() must return an object or null.");
				return clone(store);
			},
			saveStore(store) {
				invariant(store && typeof store === "object", "Storage Adapter saveStore() requires a store object.");
				adapter.saveStore(clone(store));
			}
		});
	}

	function createLocalStorageAdapter(options = {}) {
		const storage = options.storage;
		invariant(storage && typeof storage.getItem === "function" && typeof storage.setItem === "function", "localStorage-compatible storage is required.");
		const storageKey = nonEmpty(options.storageKey, "storageKey");

		return createStorageAdapter({
			loadStore() {
				const serialized = storage.getItem(storageKey);
				return serialized === null ? null : JSON.parse(serialized);
			},
			saveStore(store) {
				storage.setItem(storageKey, JSON.stringify(store));
			}
		});
	}

	function createLifecyclePolicy(options = {}) {
		const stages = stringArray(options.stages, "lifecyclePolicy.stages");
		const transitions = {};
		stages.forEach(stage => {
			transitions[stage] = stringArray(options.transitions?.[stage] || [], `lifecyclePolicy.transitions.${stage}`);
			transitions[stage].forEach(target => invariant(stages.includes(target), `Lifecycle transition ${stage} -> ${target} references an unknown stage.`));
		});

		function findPath(from, to) {
			invariant(stages.includes(from), `Unknown lifecycle stage: ${from}.`);
			invariant(stages.includes(to), `Unknown lifecycle stage: ${to}.`);
			if (from === to) return [];

			const queue = [{ stage: from, path: [] }];
			const visited = new Set([from]);
			while (queue.length) {
				const current = queue.shift();
				for (const next of transitions[current.stage]) {
					const path = [...current.path, next];
					if (next === to) return path;
					if (!visited.has(next)) {
						visited.add(next);
						queue.push({ stage: next, path });
					}
				}
			}
			return null;
		}

		return Object.freeze({
			contract: LIFECYCLE_POLICY_CONTRACT,
			contractVersion: LIFECYCLE_POLICY_VERSION,
			stages: Object.freeze([...stages]),
			transitions: deepFreeze(clone(transitions)),
			hasStage(stage) {
				return stages.includes(stage);
			},
			canTransition(from, to) {
				return stages.includes(from) && stages.includes(to) && transitions[from].includes(to);
			},
			findPath
		});
	}

	const DEFAULT_LIFECYCLE_POLICY = createLifecyclePolicy({
		stages: LIFECYCLE,
		transitions: LIFECYCLE_TRANSITIONS
	});

	function normalizeContextEnvelope(input) {
		invariant(input && typeof input === "object", "Context Envelope input is required.");
		invariant(input.contract === undefined || input.contract === CONTEXT_ENVELOPE_CONTRACT, "Context Envelope contract identity is not compatible.");
		const version = input.contractVersion === undefined ? CONTEXT_ENVELOPE_VERSION : input.contractVersion;
		invariant(Number.isInteger(version) && version > 0, "Context Envelope contractVersion must be a positive integer.");
		invariant(version === CONTEXT_ENVELOPE_VERSION, `Unsupported Context Envelope version: ${version}.`);
		invariant(input.lastConsequentialChange === null || typeof input.lastConsequentialChange === "string", "Context Envelope lastConsequentialChange must be an identifier or null.");
		invariant(input.extensions === undefined || (input.extensions && typeof input.extensions === "object" && !Array.isArray(input.extensions)), "Context Envelope extensions must be an object.");

		return deepFreeze({
			contract: CONTEXT_ENVELOPE_CONTRACT,
			contractVersion: version,
			matterId: nonEmpty(input.matterId, "Context Envelope matterId"),
			currentSituationVersion: nonEmpty(input.currentSituationVersion, "Context Envelope currentSituationVersion"),
			primaryFocus: nonEmpty(input.primaryFocus, "Context Envelope primaryFocus"),
			supportingNeighborhood: stringArray(input.supportingNeighborhood, "Context Envelope supportingNeighborhood"),
			spatialLocation: nonEmpty(input.spatialLocation, "Context Envelope spatialLocation"),
			activeScope: nonEmpty(input.activeScope, "Context Envelope activeScope"),
			entryOrigin: nonEmpty(input.entryOrigin, "Context Envelope entryOrigin"),
			unresolvedWork: stringArray(input.unresolvedWork, "Context Envelope unresolvedWork"),
			lastConsequentialChange: input.lastConsequentialChange,
			extensions: input.extensions === undefined ? {} : clone(input.extensions)
		});
	}

	const ContextEnvelope = Object.freeze({
		contract: CONTEXT_ENVELOPE_CONTRACT,
		version: CONTEXT_ENVELOPE_VERSION,
		fields: CONTEXT_ENVELOPE_FIELDS,
		guarantees: Object.freeze([
			"Envelope values are validated, copied, and deeply immutable.",
			"Inspection receives a snapshot rather than a caller-owned object.",
			"Closing Inspection returns the same semantic envelope.",
			"Extensions cannot replace or weaken canonical fields."
		]),
		compatibilityRules: Object.freeze([
			"Contract identity must match Management OS Context Envelope.",
			"Contract version must be explicitly supported.",
			"Matter identity must match the consuming operational context.",
			"Unknown optional data belongs only inside extensions."
		]),
		create(input) {
			return normalizeContextEnvelope(input);
		},
		isCompatible(envelope, requirements = {}) {
			try {
				invariant(requirements && typeof requirements === "object", "Context Envelope compatibility requirements must be an object.");
				const normalized = normalizeContextEnvelope(envelope);
				const supportedVersions = requirements.supportedVersions || [CONTEXT_ENVELOPE_VERSION];
				invariant(Array.isArray(supportedVersions), "Context Envelope supportedVersions must be an array.");
				return supportedVersions.includes(normalized.contractVersion)
					&& (!requirements.matterId || normalized.matterId === requirements.matterId);
			} catch (error) {
				return false;
			}
		},
		assertCompatible(envelope, requirements = {}) {
			invariant(requirements && typeof requirements === "object", "Context Envelope compatibility requirements must be an object.");
			const normalized = normalizeContextEnvelope(envelope);
			const supportedVersions = requirements.supportedVersions || [CONTEXT_ENVELOPE_VERSION];
			invariant(Array.isArray(supportedVersions), "Context Envelope supportedVersions must be an array.");
			invariant(supportedVersions.includes(normalized.contractVersion), "Context Envelope version is not compatible.");
			if (requirements.matterId) {
				invariant(normalized.matterId === requirements.matterId, "Context Envelope belongs to another Matter.");
			}
			return normalized;
		},
		copy(envelope) {
			return normalizeContextEnvelope(envelope);
		}
	});

	function defaultId() {
		if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
			return crypto.randomUUID();
		}

		return `artifact-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
	}

	function createArtifactRepository(options = {}) {
		const matterId = nonEmpty(options.matterId, "matterId");
		const storageAdapter = createStorageAdapter(options.storageAdapter);
		const lifecyclePolicy = options.lifecyclePolicy || DEFAULT_LIFECYCLE_POLICY;
		invariant(
			lifecyclePolicy
				&& lifecyclePolicy.contract === LIFECYCLE_POLICY_CONTRACT
				&& lifecyclePolicy.contractVersion === LIFECYCLE_POLICY_VERSION
				&& typeof lifecyclePolicy.hasStage === "function"
				&& typeof lifecyclePolicy.canTransition === "function"
				&& typeof lifecyclePolicy.findPath === "function",
			"A Lifecycle Policy is required."
		);
		const clock = options.clock || (() => new Date().toISOString());
		const idGenerator = options.idGenerator || defaultId;
		const authorityPolicy = options.authorityPolicy || authorityApi.createAuthorityPolicy({
			delegateGrant(actor, action, context) {
				return action === authorityApi.ACTIONS.ARTIFACT_MUTATE
					|| action === authorityApi.ACTIONS.ARTIFACT_RELATIONSHIP_ATTACH
					? Boolean(
						context.artifact?.ownership?.ownerId === actor.id
						|| context.artifact?.ownership?.editorIds?.includes(actor.id)
					)
					: false;
			}
		});
		invariant(typeof clock === "function", "clock must be a function.");
		invariant(typeof idGenerator === "function", "idGenerator must be a function.");

		function emptyStore() {
			return {
				schemaVersion: SCHEMA_VERSION,
				matterId,
				artifacts: {}
			};
		}

		function readStore() {
			const parsed = storageAdapter.loadStore();
			if (parsed === null) return emptyStore();
			invariant(parsed.schemaVersion === SCHEMA_VERSION, "Unsupported Artifact store schema.");
			invariant(parsed.matterId === matterId, "Artifact store belongs to another Matter.");
			invariant(parsed.artifacts && typeof parsed.artifacts === "object", "Artifact store is invalid.");
			Object.entries(parsed.artifacts).forEach(([artifactId, artifact]) => validateStoredArtifact(artifactId, artifact));
			return parsed;
		}

		function writeStore(store) {
			invariant(store.schemaVersion === SCHEMA_VERSION, "Cannot save an unsupported Artifact store schema.");
			invariant(store.matterId === matterId, "Cannot save an Artifact store for another Matter.");
			Object.entries(store.artifacts).forEach(([artifactId, artifact]) => validateStoredArtifact(artifactId, artifact));
			storageAdapter.saveStore(store);
		}

		function event(type, actor, reason, details, occurredAt = clock()) {
			return {
				id: idGenerator(),
				type,
				occurredAt,
				actor: normalizeActor(actor),
				reason: nonEmpty(reason, "reason"),
				details: clone(details || {})
			};
		}

		function requireArtifact(store, artifactId) {
			const normalizedId = nonEmpty(artifactId, "artifactId");
			const artifact = store.artifacts[normalizedId];
			invariant(artifact, `Artifact ${artifactId} does not exist in Matter ${matterId}.`);
			return artifact;
		}

		function validateStoredArtifact(artifactId, artifact) {
			invariant(artifact && typeof artifact === "object", `Artifact ${artifactId} is invalid.`);
			invariant(nonEmpty(artifact.id, "artifact.id") === artifactId, `Artifact store key does not match Artifact ${artifact.id}.`);
			invariant(artifact.matterId === matterId, `Artifact ${artifactId} belongs to another Matter.`);
			nonEmpty(artifact.type, "artifact.type");
			invariant(artifact.content && typeof artifact.content === "object", `Artifact ${artifactId} content is invalid.`);
			nonEmpty(artifact.content.wording, "artifact.content.wording");
			invariant(Number.isInteger(artifact.content.revision) && artifact.content.revision >= 1, `Artifact ${artifactId} revision is invalid.`);
			validateProvenance(artifact.provenance);
			invariant(artifact.ownership && typeof artifact.ownership === "object", `Artifact ${artifactId} ownership is invalid.`);
			nonEmpty(artifact.ownership.ownerId, "artifact.ownership.ownerId");
			nonEmpty(artifact.ownership.ownerName, "artifact.ownership.ownerName");
			invariant(["owner", "delegate"].includes(artifact.ownership.ownerRole), `Artifact ${artifactId} ownerRole is invalid.`);
			stringArray(artifact.ownership.editorIds, "artifact.ownership.editorIds");
			invariant(artifact.lifecycle && lifecyclePolicy.hasStage(artifact.lifecycle.stage), `Artifact ${artifactId} lifecycle is invalid.`);
			invariant(artifact.states && typeof artifact.states === "object", `Artifact ${artifactId} states are invalid.`);
			Object.entries(STATE_VALUES).forEach(([dimension, values]) => {
				invariant(values.includes(artifact.states[dimension]), `Artifact ${artifactId} ${dimension} state is invalid.`);
			});
			invariant(Array.isArray(artifact.relationshipRefs), `Artifact ${artifactId} relationshipRefs must be an array.`);
			stringArray(artifact.relationshipRefs, "artifact.relationshipRefs");
			invariant(artifact.lineage && typeof artifact.lineage === "object", `Artifact ${artifactId} lineage is invalid.`);
			stringArray(artifact.lineage.parentIds, "artifact.lineage.parentIds");
			stringArray(artifact.lineage.derivedFromIds, "artifact.lineage.derivedFromIds");
			invariant(artifact.lineage.supersedesId === null || typeof artifact.lineage.supersedesId === "string", `Artifact ${artifactId} supersedesId is invalid.`);
			invariant(Array.isArray(artifact.history), `Artifact ${artifactId} history must be an array.`);
			const historyIds = new Set();
			artifact.history.forEach((historyEvent, index) => {
				invariant(historyEvent && typeof historyEvent === "object", `Artifact ${artifactId} history[${index}] is invalid.`);
				nonEmpty(historyEvent.id, `artifact.history[${index}].id`);
				nonEmpty(historyEvent.type, `artifact.history[${index}].type`);
				nonEmpty(historyEvent.occurredAt, `artifact.history[${index}].occurredAt`);
				normalizeActor(historyEvent.actor, `artifact.history[${index}].actor`);
				nonEmpty(historyEvent.reason, `artifact.history[${index}].reason`);
				invariant(!historyIds.has(historyEvent.id), `Artifact ${artifactId} contains duplicate history event identity.`);
				historyIds.add(historyEvent.id);
			});
			return artifact;
		}

		function requireArtifactAuthority(artifact, actor, action = authorityApi.ACTIONS.ARTIFACT_MUTATE, context = {}) {
			const normalized = normalizeActor(actor);
			authorityPolicy.assertAllowed(normalized, action, { ...context, artifact, matterId });
			invariant(
				normalized.role === "system"
					|| normalized.id === artifact.ownership.ownerId
					|| artifact.ownership.editorIds.includes(normalized.id),
				`${normalized.name} is not authorized to change this Artifact.`
			);
			return normalized;
		}

		function create(input) {
			invariant(input && typeof input === "object", "Artifact input is required.");
			const now = clock();
			const artifactId = nonEmpty(input.id || idGenerator(), "artifact.id");
			const owner = normalizeActor(input.owner || input.provenance?.author, "owner");
			invariant(["owner", "delegate"].includes(owner.role), "Only an owner or explicitly delegated actor may own an Artifact.");
			const provenance = normalizeProvenance(input.provenance, now);
			const store = readStore();
			invariant(!store.artifacts[artifactId], `Artifact ${artifactId} already exists.`);

			const editorIds = stringArray(input.editorIds || [], "artifact.editorIds");
			invariant(!editorIds.includes(owner.id), "Artifact owner must not be duplicated as an editor.");
			const artifact = {
				id: artifactId,
				matterId,
				type: nonEmpty(input.type, "artifact.type"),
				content: {
					wording: nonEmpty(input.content?.wording, "artifact.content.wording"),
					material: input.content?.material === undefined ? null : clone(input.content.material),
					revision: 1
				},
				provenance,
				lineage: {
					parentIds: clone(input.lineage?.parentIds || []),
					derivedFromIds: clone(input.lineage?.derivedFromIds || []),
					supersedesId: input.lineage?.supersedesId || null
				},
				ownership: {
					ownerId: owner.id,
					ownerName: owner.name,
					ownerRole: owner.role,
					editorIds
				},
				lifecycle: {
					stage: "captured",
					settledAs: null
				},
				states: {
					review: "new",
					provenance: input.states?.provenance || "declared",
					epistemic: input.states?.epistemic || "unverified",
					participation: input.states?.participation || "corpus",
					attention: input.states?.attention || "peripheral"
				},
				relationshipRefs: [],
				createdAt: now,
				updatedAt: now,
				history: []
			};

			Object.entries(artifact.states).forEach(([dimension, value]) => {
				invariant(STATE_VALUES[dimension].includes(value), `${dimension} state is not canonical.`);
			});

			artifact.history.push(event("artifact.created", provenance.author, "Material obtained stable identity inside the Matter.", {
				lifecycle: "captured",
				type: artifact.type,
				provenance: clone(provenance)
			}, now));
			store.artifacts[artifactId] = artifact;
			writeStore(store);
			return clone(artifact);
		}

		function ensure(input) {
			invariant(input && typeof input === "object", "Artifact input is required.");
			nonEmpty(input.id, "artifact.id");
			const existing = get(input.id);
			if (!existing) return create(input);
			if (input.matterId !== undefined && input.matterId !== matterId) {
				identityConflict(`Artifact ${input.id} identity conflicts with another Matter.`);
			}
			const owner = normalizeActor(input.owner || input.provenance?.author, "owner");
			if (
				existing.ownership.ownerId !== owner.id
				|| existing.ownership.ownerName !== owner.name
				|| existing.ownership.ownerRole !== owner.role
			) identityConflict(`Artifact ${input.id} identity conflicts with its canonical owner.`);
			const provenance = normalizeProvenance(input.provenance, existing.provenance.introducedAt);
			if (!sameValue(existing.provenance, provenance)) {
				identityConflict(`Artifact ${input.id} identity conflicts with its birth provenance.`);
			}
			if (input.lineage !== undefined) {
				const lineage = {
					parentIds: clone(input.lineage?.parentIds || []),
					derivedFromIds: clone(input.lineage?.derivedFromIds || []),
					supersedesId: input.lineage?.supersedesId || null
				};
				if (!sameValue(existing.lineage, lineage)) {
					identityConflict(`Artifact ${input.id} identity conflicts with its lineage.`);
				}
			}
			return existing;
		}

		function get(artifactId) {
			const normalizedId = nonEmpty(artifactId, "artifactId");
			const artifact = readStore().artifacts[normalizedId];
			return artifact ? clone(artifact) : null;
		}

		function list(predicate) {
			invariant(predicate === undefined || typeof predicate === "function", "Artifact list predicate must be a function.");
			const artifacts = Object.values(readStore().artifacts).map(clone);
			return predicate ? artifacts.filter(predicate) : artifacts;
		}

		function transitionLifecycle(artifactId, nextStage, actor, reason, options = {}) {
			invariant(options && typeof options === "object", "Lifecycle options must be an object.");
			invariant(lifecyclePolicy.hasStage(nextStage), "Lifecycle stage is not canonical.");
			const store = readStore();
			const artifact = requireArtifact(store, artifactId);
			const authorizedActor = requireArtifactAuthority(artifact, actor);
			invariant(lifecyclePolicy.canTransition(artifact.lifecycle.stage, nextStage), `Lifecycle cannot move from ${artifact.lifecycle.stage} to ${nextStage}.`);
			invariant(nextStage !== "settled" || options.settledAs, "Settled Artifacts require a settlement reason.");

			const previous = clone(artifact.lifecycle);
			artifact.lifecycle.stage = nextStage;
			artifact.lifecycle.settledAs = nextStage === "settled" ? nonEmpty(options.settledAs, "settledAs") : artifact.lifecycle.settledAs;
			artifact.updatedAt = clock();
			artifact.history.push(event("artifact.lifecycle.changed", authorizedActor, reason, {
				from: previous,
				to: clone(artifact.lifecycle)
			}, artifact.updatedAt));
			writeStore(store);
			return clone(artifact);
		}

		function advanceLifecycleTo(artifactId, targetStage, actor, reason, options = {}) {
			invariant(options && typeof options === "object", "Lifecycle options must be an object.");
			invariant(lifecyclePolicy.hasStage(targetStage), "Lifecycle stage is not canonical.");
			let artifact = get(artifactId);
			invariant(artifact, `Artifact ${artifactId} does not exist in Matter ${matterId}.`);
			requireArtifactAuthority(artifact, actor);
			nonEmpty(reason, "reason");
			const path = lifecyclePolicy.findPath(artifact.lifecycle.stage, targetStage);
			invariant(path !== null, `Lifecycle cannot reach ${targetStage} from ${artifact.lifecycle.stage}.`);
			path.forEach(nextStage => {
				artifact = transitionLifecycle(artifactId, nextStage, actor, reason, nextStage === "settled" ? options : {});
			});
			return artifact;
		}

		function edit(artifactId, changes, actor, reason) {
			invariant(changes && typeof changes === "object", "Artifact changes are required.");
			const store = readStore();
			const artifact = requireArtifact(store, artifactId);
			const authorizedActor = requireArtifactAuthority(artifact, actor);
			const allowedKeys = ["wording", "type", "material"];
			invariant(Object.keys(changes).length > 0, "Artifact edit requires at least one editable change.");
			invariant(Object.keys(changes).every(key => allowedKeys.includes(key)), "Editing cannot change identity, provenance, ownership, lifecycle, or state.");

			const before = {
				type: artifact.type,
				content: clone(artifact.content)
			};
			const nextWording = changes.wording === undefined ? artifact.content.wording : nonEmpty(changes.wording, "artifact.content.wording");
			const nextType = changes.type === undefined ? artifact.type : nonEmpty(changes.type, "artifact.type");
			const nextMaterial = changes.material === undefined ? artifact.content.material : clone(changes.material);
			const changed = nextWording !== artifact.content.wording
				|| nextType !== artifact.type
				|| JSON.stringify(nextMaterial) !== JSON.stringify(artifact.content.material);
			if (!changed) return clone(artifact);

			artifact.content.wording = nextWording;
			artifact.type = nextType;
			artifact.content.material = nextMaterial;
			artifact.content.revision += 1;
			artifact.updatedAt = clock();
			artifact.history.push(event("artifact.revised", authorizedActor, reason, {
				from: before,
				to: {
					type: artifact.type,
					content: clone(artifact.content)
				}
			}, artifact.updatedAt));
			writeStore(store);
			return clone(artifact);
		}

		function setState(artifactId, dimension, value, actor, reason) {
			invariant(STATE_VALUES[dimension], "Unknown Artifact state dimension.");
			invariant(STATE_VALUES[dimension].includes(value), `${value} is not valid for ${dimension}.`);
			const store = readStore();
			const artifact = requireArtifact(store, artifactId);
			const authorizedActor = requireArtifactAuthority(artifact, actor);
			const previous = artifact.states[dimension];
			if (previous === value) return clone(artifact);

			artifact.states[dimension] = value;
			artifact.updatedAt = clock();
			artifact.history.push(event("artifact.state.changed", authorizedActor, reason, {
				dimension,
				from: previous,
				to: value
			}, artifact.updatedAt));
			writeStore(store);
			return clone(artifact);
		}

		function attachRelationshipRef(artifactId, relationshipId, actor, reason) {
			const normalizedRelationshipId = nonEmpty(relationshipId, "relationshipId");
			const store = readStore();
			const artifact = requireArtifact(store, artifactId);
			const authorizedActor = requireArtifactAuthority(artifact, actor, authorityApi.ACTIONS.ARTIFACT_RELATIONSHIP_ATTACH);
			if (artifact.relationshipRefs.includes(normalizedRelationshipId)) return clone(artifact);

			artifact.relationshipRefs.push(normalizedRelationshipId);
			artifact.updatedAt = clock();
			artifact.history.push(event("artifact.relationship.attached", authorizedActor, reason, {
				relationshipId: normalizedRelationshipId
			}, artifact.updatedAt));
			writeStore(store);
			return clone(artifact);
		}

		function detachRelationshipRef(artifactId, relationshipId, actor, reason, options = {}) {
			invariant(options && options.rollback === true, "Relationship references may only be detached during rollback or recovery.");
			const normalizedRelationshipId = nonEmpty(relationshipId, "relationshipId");
			const store = readStore();
			const artifact = requireArtifact(store, artifactId);
			const recovery = options.recovery === true;
			const authorizedActor = requireArtifactAuthority(
				artifact,
				actor,
				recovery ? authorityApi.ACTIONS.ARTIFACT_RELATIONSHIP_RECOVER : authorityApi.ACTIONS.ARTIFACT_MUTATE,
				{ systemOperation: recovery }
			);
			if (!artifact.relationshipRefs.includes(normalizedRelationshipId)) return clone(artifact);

			artifact.relationshipRefs = artifact.relationshipRefs.filter(referenceId => referenceId !== normalizedRelationshipId);
			artifact.updatedAt = clock();
			artifact.history.push(event("artifact.relationship.detached", authorizedActor, reason, {
				relationshipId: normalizedRelationshipId,
				rollback: true
			}, artifact.updatedAt));
			writeStore(store);
			return clone(artifact);
		}

		function inspect(artifactId, context, actor) {
			const contextEnvelope = ContextEnvelope.assertCompatible(context, { matterId });
			const artifact = get(artifactId);
			const previousAttention = artifact.states.attention;
			setState(artifactId, "review", "reviewed", actor, "Artifact was deliberately inspected.");
			const inspected = setState(artifactId, "attention", "inspected", actor, "Artifact became the temporary object of close examination.");

			return {
				id: idGenerator(),
				artifactId,
				openedAt: clock(),
				previousAttention,
				contextEnvelope,
				artifact: inspected
			};
		}

		function closeInspection(inspection, actor, reason = "Inspection ended and prior operational context was restored.") {
			invariant(inspection && typeof inspection === "object", "A valid Inspection is required.");
			const artifactId = nonEmpty(inspection.artifactId, "inspection.artifactId");
			invariant(STATE_VALUES.attention.includes(inspection.previousAttention), "Inspection previousAttention is invalid.");
			const contextEnvelope = ContextEnvelope.assertCompatible(inspection.contextEnvelope, { matterId });
			const restored = setState(artifactId, "attention", inspection.previousAttention, actor, reason);
			return {
				artifact: restored,
				contextEnvelope,
				closedAt: clock()
			};
		}

		return Object.freeze({
			create,
			ensure,
			get,
			list,
			edit,
			setState,
			attachRelationshipRef,
			detachRelationshipRef,
			transitionLifecycle,
			advanceLifecycleTo,
			inspect,
			closeInspection
		});
	}

	return Object.freeze({
		SCHEMA_VERSION,
		LIFECYCLE,
		STATE_VALUES,
		BIRTH_PATHS,
		CONTEXT_ENVELOPE_CONTRACT,
		CONTEXT_ENVELOPE_VERSION,
		ContextEnvelope,
		createStorageAdapter,
		createLocalStorageAdapter,
		createLifecyclePolicy,
		DEFAULT_LIFECYCLE_POLICY,
		createArtifactRepository
	});
});
