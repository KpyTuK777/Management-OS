(function (root, factory) {
	const api = factory(
		typeof module === "object" && module.exports
			? require("./authority-policy.js")
			: root.ManagementOsAuthorityPolicy
	);
	if (typeof module === "object" && module.exports) module.exports = api;
	if (root) root.ManagementOsStorageMigrations = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function (authorityApi) {
	"use strict";

	if (!authorityApi) throw new Error("Canonical Authority Policy is required for storage migrations.");
	const MIGRATION_CONTRACT = "management-os.storage-migrations";
	const MIGRATION_CONTRACT_VERSION = 1;
	const SYSTEM_ACTOR = Object.freeze({ id: "management-os-migrations", name: "Management OS Migration", role: "system" });

	function clone(value) {
		return value === undefined ? undefined : JSON.parse(JSON.stringify(value));
	}

	function createArtifactMigrationAdapter(options = {}) {
		const adapter = options.storageAdapter;
		if (!adapter || typeof adapter.loadStore !== "function" || typeof adapter.saveStore !== "function") {
			throw new Error("Artifact migration requires a Storage Adapter.");
		}
		const authorityPolicy = options.authorityPolicy || authorityApi.DEFAULT_AUTHORITY_POLICY;
		authorityPolicy.assertAllowed(SYSTEM_ACTOR, authorityApi.ACTIONS.STORAGE_MIGRATE, { systemOperation: true });
		let diagnostics = [];

		function isNonEmptyString(value) {
			return typeof value === "string" && Boolean(value.trim());
		}

		function isStringArray(value) {
			return Array.isArray(value)
				&& value.every(isNonEmptyString)
				&& new Set(value).size === value.length;
		}

		function isExactLegacyArtifact(storeMatterId, artifactId, artifact) {
			const ownership = artifact?.ownership;
			return artifact
				&& typeof artifact === "object"
				&& artifact.id === artifactId
				&& artifact.matterId === storeMatterId
				&& isNonEmptyString(artifact.type)
				&& artifact.content
				&& isNonEmptyString(artifact.content.wording)
				&& Number.isInteger(artifact.content.revision)
				&& artifact.content.revision >= 1
				&& artifact.provenance
				&& ["owner-authored", "source-derived", "proposed"].includes(artifact.provenance.method)
				&& artifact.provenance.origin
				&& isNonEmptyString(artifact.provenance.origin.kind)
				&& isNonEmptyString(artifact.provenance.origin.label)
				&& artifact.provenance.author
				&& isNonEmptyString(artifact.provenance.author.id)
				&& isNonEmptyString(artifact.provenance.author.name)
				&& authorityApi.ROLES.includes(artifact.provenance.author.role)
				&& isNonEmptyString(artifact.provenance.introducedAt)
				&& isNonEmptyString(artifact.provenance.circumstance)
				&& artifact.lifecycle
				&& ["captured", "proposed", "admitted", "active", "evaluated", "settled", "archived"].includes(artifact.lifecycle.stage)
				&& artifact.states
				&& ["new", "reviewed"].includes(artifact.states.review)
				&& ["declared", "traceable", "verified", "disputed"].includes(artifact.states.provenance)
				&& ["unverified", "supported", "confirmed", "contradicted", "rejected"].includes(artifact.states.epistemic)
				&& ["corpus", "working-set"].includes(artifact.states.participation)
				&& ["peripheral", "supporting", "primary", "inspected"].includes(artifact.states.attention)
				&& isStringArray(artifact.relationshipRefs)
				&& artifact.lineage
				&& isStringArray(artifact.lineage.parentIds)
				&& isStringArray(artifact.lineage.derivedFromIds)
				&& (artifact.lineage.supersedesId === null || isNonEmptyString(artifact.lineage.supersedesId))
				&& Array.isArray(artifact.history)
				&& artifact.history.every(event => event
					&& isNonEmptyString(event.id)
					&& isNonEmptyString(event.type)
					&& isNonEmptyString(event.occurredAt)
					&& event.actor
					&& isNonEmptyString(event.actor.id)
					&& isNonEmptyString(event.actor.name)
					&& authorityApi.ROLES.includes(event.actor.role)
					&& isNonEmptyString(event.reason))
				&& ownership
				&& typeof ownership === "object"
				&& ownership.ownerRole === undefined
				&& isNonEmptyString(ownership.ownerId)
				&& isNonEmptyString(ownership.ownerName)
				&& isStringArray(ownership.editorIds);
		}

		function loadStore() {
			const loaded = adapter.loadStore();
			diagnostics = [];
			if (loaded === null) return null;
			const store = clone(loaded);
			if (store.schemaVersion !== 1) return store;
			if (!store.artifacts || typeof store.artifacts !== "object") return store;
			let changed = false;

			Object.entries(store.artifacts).forEach(([artifactId, artifact]) => {
				if (artifact?.ownership?.ownerRole !== undefined) {
					diagnostics.push({
						contract: MIGRATION_CONTRACT,
						contractVersion: MIGRATION_CONTRACT_VERSION,
						step: "artifact-v1-add-owner-role",
						artifactId,
						result: "skipped",
						reason: "Record already satisfies the current ownership contract."
					});
					return;
				}
				if (!isExactLegacyArtifact(store.matterId, artifactId, artifact)) {
					diagnostics.push({
						contract: MIGRATION_CONTRACT,
						contractVersion: MIGRATION_CONTRACT_VERSION,
						step: "artifact-v1-add-owner-role",
						artifactId,
						result: "rejected",
						reason: "Record does not match the narrow legacy Artifact shape."
					});
					return;
				}
				artifact.ownership.ownerRole = "owner";
				const diagnostic = {
					contract: MIGRATION_CONTRACT,
					contractVersion: MIGRATION_CONTRACT_VERSION,
					step: "artifact-v1-add-owner-role",
					artifactId,
					result: "applied"
				};
				diagnostics.push(diagnostic);
				if (!Array.isArray(store.migrationDiagnostics)) store.migrationDiagnostics = [];
				store.migrationDiagnostics.push(diagnostic);
				changed = true;
			});

			if (changed) adapter.saveStore(store);
			return clone(store);
		}

		return Object.freeze({
			loadStore,
			saveStore(store) {
				adapter.saveStore(clone(store));
			},
			getDiagnostics() {
				return clone(diagnostics);
			}
		});
	}

	return Object.freeze({
		MIGRATION_CONTRACT,
		MIGRATION_CONTRACT_VERSION,
		SYSTEM_ACTOR,
		createArtifactMigrationAdapter
	});
});
