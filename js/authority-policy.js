(function (root, factory) {
	const api = factory();
	if (typeof module === "object" && module.exports) module.exports = api;
	if (root) root.ManagementOsAuthorityPolicy = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
	"use strict";

	const ROLES = Object.freeze(["owner", "delegate", "watson", "system", "source"]);
	const ACTIONS = Object.freeze({
		ARTIFACT_MUTATE: "artifact.mutate",
		ARTIFACT_RELATIONSHIP_ATTACH: "artifact.relationship.attach",
		ARTIFACT_RELATIONSHIP_RECOVER: "artifact.relationship.recover",
		RELATIONSHIP_PROPOSE: "relationship.propose",
		RELATIONSHIP_PROPOSAL_EDIT: "relationship.proposal.edit",
		RELATIONSHIP_PROPOSAL_WITHDRAW: "relationship.proposal.withdraw",
		RELATIONSHIP_GOVERN: "relationship.govern",
		STORAGE_MIGRATE: "storage.migrate"
	});

	const ROLE_ACTIONS = Object.freeze({
		owner: Object.freeze([
			ACTIONS.ARTIFACT_MUTATE,
			ACTIONS.ARTIFACT_RELATIONSHIP_ATTACH,
			ACTIONS.RELATIONSHIP_PROPOSE,
			ACTIONS.RELATIONSHIP_PROPOSAL_EDIT,
			ACTIONS.RELATIONSHIP_PROPOSAL_WITHDRAW,
			ACTIONS.RELATIONSHIP_GOVERN
		]),
		delegate: Object.freeze([]),
		watson: Object.freeze([
			ACTIONS.RELATIONSHIP_PROPOSE,
			ACTIONS.RELATIONSHIP_PROPOSAL_EDIT,
			ACTIONS.RELATIONSHIP_PROPOSAL_WITHDRAW
		]),
		system: Object.freeze([
			ACTIONS.ARTIFACT_RELATIONSHIP_RECOVER,
			ACTIONS.STORAGE_MIGRATE
		]),
		source: Object.freeze([])
	});

	function normalizeActor(actor) {
		if (!actor || typeof actor !== "object") throw new Error("actor is required.");
		if (typeof actor.id !== "string" || !actor.id.trim()) throw new Error("actor.id is required.");
		if (typeof actor.name !== "string" || !actor.name.trim()) throw new Error("actor.name is required.");
		if (!ROLES.includes(actor.role)) throw new Error(`Unknown actor role ${actor.role || "(missing)"} is denied.`);
		return { id: actor.id.trim(), name: actor.name.trim(), role: actor.role };
	}

	function createAuthorityPolicy(options = {}) {
		const delegateGrant = options.delegateGrant || (() => false);
		if (typeof delegateGrant !== "function") throw new Error("delegateGrant must be a function.");

		function allows(actor, action, context = {}) {
			let normalized;
			try {
				normalized = normalizeActor(actor);
			} catch (error) {
				return false;
			}
			if (!Object.values(ACTIONS).includes(action)) return false;
			if (normalized.role === "delegate") {
				return delegateGrant(normalized, action, context) === true;
			}
			if (!ROLE_ACTIONS[normalized.role].includes(action)) return false;
			if (normalized.role === "system") return context.systemOperation === true;
			return true;
		}

		function assertAllowed(actor, action, context = {}) {
			const normalized = normalizeActor(actor);
			if (!allows(normalized, action, context)) {
				throw new Error(`${normalized.name} (${normalized.role}) is not authorized for ${action}.`);
			}
			return normalized;
		}

		return Object.freeze({ allows, assertAllowed });
	}

	return Object.freeze({
		ROLES,
		ACTIONS,
		ROLE_ACTIONS,
		createAuthorityPolicy,
		DEFAULT_AUTHORITY_POLICY: createAuthorityPolicy()
	});
});
