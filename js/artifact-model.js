(function (root, factory) {
	const api = factory();

	if (typeof module === "object" && module.exports) {
		module.exports = api;
	}

	if (root) {
		root.ManagementOsArtifacts = api;
	}
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
	"use strict";

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

	function defaultId() {
		if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
			return crypto.randomUUID();
		}

		return `artifact-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
	}

	function createArtifactRepository(options = {}) {
		const storage = options.storage;
		invariant(storage && typeof storage.getItem === "function" && typeof storage.setItem === "function", "A storage adapter is required.");

		const matterId = nonEmpty(options.matterId, "matterId");
		const clock = options.clock || (() => new Date().toISOString());
		const idGenerator = options.idGenerator || defaultId;
		const storageKey = options.storageKey || `managementOs.artifacts.v${SCHEMA_VERSION}.${matterId}`;

		function emptyStore() {
			return {
				schemaVersion: SCHEMA_VERSION,
				matterId,
				artifacts: {}
			};
		}

		function readStore() {
			const serialized = storage.getItem(storageKey);
			if (!serialized) return emptyStore();

			const parsed = JSON.parse(serialized);
			invariant(parsed.schemaVersion === SCHEMA_VERSION, "Unsupported Artifact store schema.");
			invariant(parsed.matterId === matterId, "Artifact store belongs to another Matter.");
			invariant(parsed.artifacts && typeof parsed.artifacts === "object", "Artifact store is invalid.");
			return parsed;
		}

		function writeStore(store) {
			storage.setItem(storageKey, JSON.stringify(store));
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
			const artifact = store.artifacts[artifactId];
			invariant(artifact, `Artifact ${artifactId} does not exist in Matter ${matterId}.`);
			return artifact;
		}

		function requireHumanAuthority(artifact, actor) {
			const normalized = normalizeActor(actor);
			invariant(normalized.role !== "watson" && normalized.role !== "system" && normalized.role !== "source", "Only an authorized human may change an Artifact.");
			invariant(
				normalized.id === artifact.ownership.ownerId || artifact.ownership.editorIds.includes(normalized.id),
				`${normalized.name} is not authorized to change this Artifact.`
			);
			return normalized;
		}

		function create(input) {
			invariant(input && typeof input === "object", "Artifact input is required.");
			const now = clock();
			const artifactId = nonEmpty(input.id || idGenerator(), "artifact.id");
			const owner = normalizeActor(input.owner || input.provenance?.author, "owner");
			invariant(owner.role !== "watson" && owner.role !== "system" && owner.role !== "source", "Watson, sources, and the system cannot own Artifacts.");
			const provenance = normalizeProvenance(input.provenance, now);
			const store = readStore();
			invariant(!store.artifacts[artifactId], `Artifact ${artifactId} already exists.`);

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
					editorIds: clone(input.editorIds || [])
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
			const existing = get(input.id);
			return existing || create(input);
		}

		function get(artifactId) {
			const artifact = readStore().artifacts[artifactId];
			return artifact ? clone(artifact) : null;
		}

		function list(predicate) {
			const artifacts = Object.values(readStore().artifacts).map(clone);
			return typeof predicate === "function" ? artifacts.filter(predicate) : artifacts;
		}

		function transitionLifecycle(artifactId, nextStage, actor, reason, options = {}) {
			invariant(LIFECYCLE.includes(nextStage), "Lifecycle stage is not canonical.");
			const store = readStore();
			const artifact = requireArtifact(store, artifactId);
			const authorizedActor = requireHumanAuthority(artifact, actor);
			invariant(LIFECYCLE_TRANSITIONS[artifact.lifecycle.stage].includes(nextStage), `Lifecycle cannot move from ${artifact.lifecycle.stage} to ${nextStage}.`);
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
			invariant(LIFECYCLE.includes(targetStage), "Lifecycle stage is not canonical.");
			let artifact = get(artifactId);
			invariant(artifact, `Artifact ${artifactId} does not exist in Matter ${matterId}.`);
			invariant(LIFECYCLE.indexOf(targetStage) >= LIFECYCLE.indexOf(artifact.lifecycle.stage), "Lifecycle cannot move backward.");

			while (artifact.lifecycle.stage !== targetStage) {
				const nextStage = artifact.lifecycle.stage === "captured" && targetStage !== "proposed"
					? "admitted"
					: LIFECYCLE_TRANSITIONS[artifact.lifecycle.stage][0];
				artifact = transitionLifecycle(artifactId, nextStage, actor, reason, nextStage === "settled" ? options : {});
			}
			return artifact;
		}

		function edit(artifactId, changes, actor, reason) {
			invariant(changes && typeof changes === "object", "Artifact changes are required.");
			const store = readStore();
			const artifact = requireArtifact(store, artifactId);
			const authorizedActor = requireHumanAuthority(artifact, actor);
			const allowedKeys = ["wording", "type", "material"];
			invariant(Object.keys(changes).every(key => allowedKeys.includes(key)), "Editing cannot change identity, provenance, ownership, lifecycle, or state.");

			const before = {
				type: artifact.type,
				content: clone(artifact.content)
			};
			if (changes.wording !== undefined) artifact.content.wording = nonEmpty(changes.wording, "artifact.content.wording");
			if (changes.type !== undefined) artifact.type = nonEmpty(changes.type, "artifact.type");
			if (changes.material !== undefined) artifact.content.material = clone(changes.material);
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
			const authorizedActor = requireHumanAuthority(artifact, actor);
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

		function inspect(artifactId, context, actor) {
			invariant(context && typeof context === "object", "A Context Envelope is required for Inspection.");
			[
				"matterId",
				"currentSituationVersion",
				"primaryFocus",
				"supportingNeighborhood",
				"spatialLocation",
				"activeScope",
				"entryOrigin",
				"unresolvedWork",
				"lastConsequentialChange"
			].forEach(field => invariant(context[field] !== undefined && context[field] !== null, `Context Envelope requires ${field}.`));
			invariant(context.matterId === matterId, "Context Envelope belongs to another Matter.");

			const artifact = get(artifactId);
			invariant(artifact, `Artifact ${artifactId} does not exist in Matter ${matterId}.`);
			const previousAttention = artifact.states.attention;
			setState(artifactId, "review", "reviewed", actor, "Artifact was deliberately inspected.");
			const inspected = setState(artifactId, "attention", "inspected", actor, "Artifact became the temporary object of close examination.");

			return {
				id: idGenerator(),
				artifactId,
				openedAt: clock(),
				previousAttention,
				contextEnvelope: clone(context),
				artifact: inspected
			};
		}

		function closeInspection(inspection, actor, reason = "Inspection ended and prior operational context was restored.") {
			invariant(inspection && inspection.artifactId && inspection.contextEnvelope, "A valid Inspection is required.");
			const restored = setState(inspection.artifactId, "attention", inspection.previousAttention, actor, reason);
			return {
				artifact: restored,
				contextEnvelope: clone(inspection.contextEnvelope),
				closedAt: clock()
			};
		}

		return Object.freeze({
			storageKey,
			create,
			ensure,
			get,
			list,
			edit,
			setState,
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
		createArtifactRepository
	});
});
