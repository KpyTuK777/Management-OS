# Living Organizational Model Engineering Architecture correction supplement

## Control

- Corrects: `governance/proposals/LIVING_ORGANIZATIONAL_MODEL_ENGINEERING_ARCHITECTURE.md` at commit `ca202aeb9b6d7b7b4f5aea33af8c6c5f48bed173`, blob `8680c010e2c541ec84d39fd061f1bb5114d8525e`
- Responds to: `governance/reviews/LIVING_ORGANIZATIONAL_MODEL_ENGINEERING_ARCHITECTURE_CRITICAL_REVIEW.md` at commit `c49ad9808d87ab36fd67c7e74ad14de44e7c27f2`, blob `46ce24e7776a26753df9582e4f24627ca2861cc7`
- Effect: the following bounded rules control where the proposal is silent or less specific
- Adoption and implementation authority: NONE

## C-1 — deterministic local commit and recovery

Each persisted generation is immutable and contains schema version, workspace identifier, generation number, parent generation, complete governed payload, derived-index manifest, record count, checksum and a commit marker written last inside that generation envelope. The active pointer is a hint, not proof of validity.

A browser commit writes a new generation without modifying the current generation, reads it back, validates checksum/schema/workspace/references and capacity, writes its commit marker, updates the pointer, then reads through the pointer and validates again before acknowledging success. At least one prior validated generation is retained until a later generation is fully acknowledged.

On startup or failure, recovery enumerates candidate generations within the bounded store and selects the highest generation that has a valid commit marker, checksum and intact parent lineage compatible with the current workspace/schema. An invalid pointer is ignored. Ambiguous divergent generations stop in read-only recovery; generation number, wall-clock time or key order alone cannot merge them. Cleanup never removes the active and immediately prior validated generations in one operation.

## C-2 — privacy-safe invalidation and reference sanitation

Every governed mutation or policy/access change publishes an internal invalidation set containing affected governed IDs and policy generation, without sensitive payload. One sanitation coordinator applies it to all projections, persistent and in-memory indexes, saved views, Working Sets, navigation/recent history, breadcrumbs, Inspector state, Context Envelopes, Map layouts, caches and queued future context.

Each consumer must reauthorize existence and fields before read. Cached labels, counts, relationship hints and search tokens are removed when no longer authorized. A reference is deleted or replaced only with an authorized non-reconstructive marker; the transition must not reveal that restriction rather than ordinary absence caused it. Failed sanitation blocks the affected projection and forces rebuild rather than serving stale data.

## C-3 — snapshot hard boundary

Live navigation and current-state projections use references. A qualified snapshot is allowed only when an external Decision, Investigation, Improvement or Memory event must preserve contemporaneous interpretation. It is immutable, purpose-owned and limited to referenced governed ID, kind, minimum display label if authorized at capture, qualification, relevant effective time, source version/reference, snapshot time and required provenance.

A snapshot is never refreshed, indexed as current state, traversed as topology, used to authorize access, or submitted as an Operating Model mutation. Retention and later display remain subject to the owning capability and current privacy policy; unauthorized fields are suppressed even if captured historically.

## C-4 — deterministic conflict qualification

Temporal resolution groups candidates by semantic slot, interval and authority rank. A single compatible highest-rank candidate may be current. Multiple compatible candidates may coexist only where the adopted relationship family permits multiplicity. Equal-rank incompatible candidates yield an explicit `conflicted`/`disputed` qualified state with source references for authorized reviewers. Array order, recording order, lexical ID, UI choice and last-write-wins never decide semantic truth. A subtype-specific tie rule may apply only when separately defined within adopted semantics and recorded in the resolver registry.

## C-5 — export/import trust boundary

Export is disabled by default and, when authorized, defaults to a people-free field allowlist. Named-person, restricted relationship, contribution, historical snapshot and deleted-integrity data require specific export purpose and policy. Exported envelopes identify schema and provenance but confer no receiving authority.

Import is always untrusted. It validates offline without activation, receives new custody/import metadata, cannot import actor authority, approval, access grants or current-state precedence, and cannot overwrite by matching IDs. Workspace/source claims and collisions require explicit reviewed reconciliation through ordinary commands. Unsupported, over-capacity or policy-incompatible imports fail without changing the active generation.

## C-6 — measurable large-projection behavior

Search, traversal, layout and history derivation must be cancellable and chunked so the main interaction thread remains responsive. Every result reports `complete`, `partial`, `cancelled` or `stale` status; partial results never use a complete-state visual. Pagination/cursor tokens bind to workspace, committed generation, policy generation, purpose, query and lens. Any bound value change invalidates the token and requires restart.

Implementation verification must define and test budgets for first useful result, interaction responsiveness, page size, traversal depth, storage headroom and recovery time using large synthetic people-free organizations. Budget exceedance narrows, pages or stops honestly; it never silently omits governed state.

## Additional controlling clarifications

- Cycle checks remain relationship-family-specific; general dependency and flow cycles are not rejected merely for being cycles.
- Source deletion, Operating Model deletion disposition, redaction and integrity markers remain distinct.
- Narrow-mobile verification must preserve orientation, history inspection and safe correction/dispute initiation, not merely responsive layout.
- Map rendering technology remains an implementation choice based on measurement; no DOM, SVG, canvas or framework selection is adopted here.

## Correction disposition

CR-1 through CR-6 are fully addressed without canonical or Product expansion. The corrected Architecture is the original proposal as controlled by this supplement and remains ready only for repeat review and subsequent human consideration.

## Authority effect

NONE. This supplement corrects a proposal. It does not adopt Engineering Architecture or authorize implementation, migration, dependencies, backend, database, integration, Watson or deployment.
