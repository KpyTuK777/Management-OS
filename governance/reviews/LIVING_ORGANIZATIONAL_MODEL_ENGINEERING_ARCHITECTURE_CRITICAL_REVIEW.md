# Living Organizational Model Engineering Architecture critical review

## Review identity

- Review type: independent critical review of a proposed authority package
- Architecture: commit `ca202aeb9b6d7b7b4f5aea33af8c6c5f48bed173`, blob `8680c010e2c541ec84d39fd061f1bb5114d8525e`
- Readiness assessment: commit `f28de4298e7c81d2f8fefb582fce1284cdc7f5a3`, blob `3486a59da504e935beebfe80b2dae1a2c200f5ea`
- Review disposition: **CONDITIONALLY READY — bounded corrections required before authority consideration**
- Adoption and implementation authority: NONE

## Method

The review challenged ownership, temporal resolution, privacy ordering, local atomicity, cross-capability handoffs, failure behavior, scale, current-stack claims, and non-authorizations against the adopted canonical and Product boundaries. It did not treat architectural completeness as evidence of Product benefit or implementation success.

## Confirmed strengths

- The logical repository is explicitly the implementation boundary of the sole Operating Model, not a second organizational model.
- Element/reference and relationship/assertion ownership follows the adopted clarification.
- Current-plus-immutable-revision lineage is proportionate and avoids unnecessary event sourcing.
- Projection filtering precedes traversal, count, search and display.
- Investigation and Improvement preserve reference and ownership boundaries.
- Governed, workspace and ephemeral state are separated.
- The persistence adapter protects the domain from `localStorage` coupling and preserves a future backend seam.
- Readiness classifications honestly defer multi-user, sensitive, integration and Watson execution.

## Findings requiring correction

### CR-1 — atomic browser activation is underspecified

Severity: HIGH.

The architecture proposes a staging key, validated active pointer and previous generation, but browser storage offers no atomic multi-key transaction. A crash between generation write and pointer update, or during previous-generation cleanup, needs an exact recovery selection rule. Without one, “one logical transaction” is an aspiration rather than a verifiable contract.

Required correction: define immutable generation envelopes, commit markers/checksums, pointer-as-hint semantics, deterministic highest-valid-committed recovery, and retention of at least one prior validated generation. Never acknowledge before re-reading the activated generation.

### CR-2 — saved workspace references can leak after access change

Severity: HIGH.

The architecture says workspace references are reauthorized on read, but does not explicitly require purge/rewrite of saved views, Working Sets, navigation history, recent items, context envelopes and client caches after restriction, redaction or deletion. Even an opaque ID, label cached in a title, or “missing because restricted” transition can reveal existence.

Required correction: specify one projection-invalidation fan-out and privacy-safe reference sanitation contract covering all persistent and in-memory Product/workspace state; preserve only authorized non-reconstructive markers.

### CR-3 — snapshot semantics need a hard content boundary

Severity: MEDIUM.

“Optional bounded qualified snapshots” in Context Envelopes could become screen-owned organizational copies if field limits, refresh behavior and retention are not explicit.

Required correction: snapshots may contain only the minimum display/provenance fields required to interpret a Decision/work event, are immutable and purpose-owned, never participate in current-state search/traversal, and are not refreshed. Ordinary navigation uses live references.

### CR-4 — current-state conflict resolution lacks a deterministic tie rule

Severity: MEDIUM.

Authority-before-recency is preserved, but equal-authority overlapping assertions could produce a silent arbitrary winner.

Required correction: equal-rank incompatible candidates resolve to an explicit conflict/disputed state unless an adopted subtype-specific deterministic rule applies. Recording order or array order must never decide semantic current state.

### CR-5 — local export/import safety must be stricter

Severity: MEDIUM.

The assessment disables people-data export pending policy, but the architecture still names a policy-approved portable envelope without requiring a people-free default or preventing imported workspace/authority claims from becoming trusted.

Required correction: export defaults to people-free authorized fields; import is untrusted, cannot import authority/approval, receives new custody metadata, and requires explicit reviewed reconciliation for collisions or source claims.

### CR-6 — scale claims require measurable browser fallback

Severity: LOW.

Progressive rendering and budgets are appropriate, but the architecture should require the main thread to remain interruptible and prevent partial result sets from appearing complete.

Required correction: cancellable/chunked derivation, explicit completeness state, stable pagination tokens scoped to generation/policy, and invalidation when either changes.

## Non-blocking observations

- Cycle validation must remain family-specific; operational dependencies may legitimately cycle.
- “Deletion” must continue to distinguish source deletion from non-reconstructive integrity markers.
- Responsive verification should test rights-preserving mobile correction/dispute initiation, not only layout.
- No framework migration is currently justified, but implementation should measure before choosing DOM versus SVG/canvas Map rendering.

## Review disposition

No new canonical or Product semantic gap was found. The six findings are bounded Engineering clarifications. After a correction supplement addresses them, a repeat review may determine authority-package readiness.

## Authority effect

NONE. This review does not adopt the Architecture or authorize implementation.
