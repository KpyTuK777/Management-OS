# Living Organizational Model Engineering Architecture

## Status and scope

- Status: PROPOSED FOR REVIEW
- Basis: adopted Living Organizational Model, Investigation, Improvement, People & Privacy, Interaction Architecture, and bounded canonical clarification
- Blocker reconciliation: `governance/proposals/LIVING_ORGANIZATIONAL_MODEL_ENGINEERING_BLOCKER_RECONCILIATION.md`
- Scope: one coherent Engineering Architecture for the upper Product composition
- Implementation and adoption authority: NONE

This architecture materializes adopted meaning. It does not change canonical or Product semantics, select a backend, or authorize code.

## 1. Responsibility model

The governing flow is:

`authoritative sources / authorized Operating-Model-owned assertions`
→ `Operational Operating Model repository contract`
→ `authorization and privacy policy gate`
→ `temporal resolution`
→ `purpose-bounded projections`
→ `Living Organizational Model surfaces and contextual references`

The **Operating Model Repository** is a logical implementation boundary for the sole Operational Operating Model, not another organizational store. It owns persistence and retrieval of permitted Element References, Relationship Assertions, their revision lineage, and integrity metadata. It never owns external source content.

The repository is reached only through:

- a command service for validated, authorized writes;
- a query service for workspace-scoped retrieval;
- a source resolver for source-backed identity, status, freshness, and versions;
- a temporal resolver that derives qualified current and historical views;
- a policy gate that filters before traversal, aggregation, indexing, or projection;
- projection services that produce read-only surface models;
- a persistence adapter that isolates logical semantics from browser storage or a future backend.

Each element and assertion has one mutation owner. Projections, work capabilities, indexes, layouts, and future AI never mutate governed state directly.

## 2. Logical state model

### Operating Model Element Reference

Minimum logical fields are:

- `id`, a stable opaque identifier never silently reused;
- `workspaceId`;
- `kind`;
- `ownershipMode`: `source-backed` or `operating-model-owned`;
- human label and bounded topology purpose/scope;
- optional authoritative `sourceRef` with source identity, object identity, version and retrieval metadata;
- temporal status and qualification;
- provenance, authority and freshness;
- visibility/purpose policy reference;
- lifecycle and correction lineage;
- logical record version.

Kinds cover organization, department/unit, role, permitted person reference, process, system, SOP reference, measure/KPI, recurring report, recurring meeting, operational artifact reference, and interaction reference. A kind does not transfer ownership of source content.

### Operating Model Relationship Assertion

Minimum logical fields are:

- `id`, `workspaceId`, family and bounded subtype;
- typed endpoint references, with endpoint roles where direction matters;
- effective interval;
- recording time and recorder/custody metadata where permitted;
- source/authority and provenance;
- qualification: approved, declared, observed, derived or inferred as applicable;
- lifecycle: active, disputed, superseded, withdrawn, redacted, deleted or retired as semantically applicable;
- correction/supersession lineage and logical version;
- visibility/purpose policy reference;
- optional external references, never copied external content.

Families are exactly the adopted families: containment; reporting; role occupancy; department membership; responsibility/decision authority; operational participation; dependency; information/material flow; process/system/SOP/measure association; interdepartmental interaction; work/history linkage; InformationContribution.

### Composition examples

- An organization or department is an Element Reference; hierarchy is containment.
- A role is an Element Reference; occupancy connects a permitted person reference to the role for an effective interval.
- Membership, reporting, responsibility, participation, dependencies and flows are assertions, not fields copied onto screens.
- Processes, systems, SOPs, measures, reports and meetings are references; association assertions express organization-relative use.
- An interdepartmental interaction is an interaction reference plus typed participant, flow, process/system/SOP/measure, and responsibility assertions as needed.
- Unknown is an explicit qualification or bounded placeholder reference when identity is necessary; it is never fabricated content.

## 3. Command architecture and Organization Constructor

Constructor commands include creating or revising permitted Operating-Model-owned element references; linking source-backed references; recording or revising containment, occupancy, membership, reporting, responsibility, participation, association, dependency, flow and interaction assertions; marking unknown or disputed; and correcting, superseding, withdrawing, redacting, deleting or retiring state under the applicable authority.

Every command carries workspace, actor/authority context, expected logical version, intent, effective time, provenance, and an idempotency identifier. Processing must:

1. resolve workspace and actor authority;
2. validate element kind, ownership mode, content ceiling and source authority;
3. validate endpoint existence, endpoint kinds, workspace equality, relationship family and temporal interval;
4. prohibit cycles where the bounded relationship semantics forbid them, without treating every directed graph as a hierarchy;
5. enforce privacy and protected-existence policy;
6. compare expected versions and reject stale writes;
7. write the new current record, immutable prior revision, lineage, and integrity metadata as one logical transaction;
8. invalidate or rebuild affected derived projections and indexes;
9. return a qualified result or an honest typed failure.

Source-backed mutations are requests or reconciliation commands only; they cannot impersonate the native source owner. Drafts remain Product/workspace state until an authorized command succeeds. Failure leaves the last validated generation current and never partially applies topology.

## 4. Temporal and history pattern

Use a **current record plus immutable revisions and assertion lineage** pattern, not full event sourcing. Each successful mutation produces a new logical version and retains the prior version. Assertions use effective intervals; correction replaces erroneous recorded meaning through explicit lineage, while supersession changes governed meaning from an effective point. Dispute, withdrawal, redaction, deletion, retirement, merge and split remain distinct dispositions.

Temporal resolution keeps effective, recording, observation/communication, source version/retrieval, decision snapshot, correction, dispute, supersession, withdrawal, redaction and deletion times distinct. Current state is selected by authority before recency. Historical queries use an explicit `asOf` and purpose, preserve contribution-time role/department context, and show uncertainty or unresolved source state honestly.

Decision or work-context snapshots are external capability-owned reference envelopes with source version and snapshot time; they are not duplicate organizational truth. Ordinary historical inspection resolves governed revisions under current access policy.

## 5. Projection pipeline

Every projection follows:

`workspace scope` → `purpose authorization` → `existence/content privacy filtering` → `source and temporal resolution` → `bounded derivation` → `surface model`.

Filtering precedes adjacency traversal, counts, search indexing, history assembly and empty-state selection. Restricted absence must be indistinguishable from ordinary nonexistence unless policy explicitly permits disclosure. Derived fields carry derivation and freshness qualifications.

| Projection | Inputs and allowed derivation | History/degraded state | Mutation boundary |
|---|---|---|---|
| Organization Map | filtered current elements/assertions; selected relationship lens and bounded aggregates | explicit unknown, stale, disputed and incomplete markers; historical lens by explicit `asOf` | commands opened in Constructor; map never writes truth |
| Department Workbench | department ref, authorized neighbors, responsibilities, people-free operations, process/system/SOP/measure/report/meeting and work links | qualified current state plus inspectable revisions | command service only |
| Role Workbench | role ref, authorized responsibility/reporting/occupancy/participation links | effective occupancy and responsibility history | command service only |
| Person Workbench | purpose-permitted person ref and filtered relationships | contribution-time context; no hidden counts or inferred profile | command service only; sensitive functions policy-gated |
| Process/System/SOP detail | source-backed refs and authorized organization-relative associations | source missing/stale and association history remain distinct | source owner or command service according to ownership |
| Investigation | Context Envelope of refs and qualified snapshots | source version/time visible; unresolved refs preserved | Investigation owns work state; explicit Operating Model command for updates |
| Improvement | Context Envelope plus Improvement-owned proposed-change state | current, proposed, decided, executed and stabilized-update states distinct | Improvement cannot mutate current state silently |
| Operational Memory | permission-aware links to historical work and governed refs | contribution-time and decision-time context; current truth resolved separately | Memory never becomes organizational mutation owner |

Correction, redaction, deletion and access changes invalidate every projection and derived cache. Deleted/restricted identifiers are represented only by non-reconstructive markers when the viewer is authorized to know that a marker exists.

## 6. Organization Map

The Map uses a stable structural base and selectable bounded lenses for containment, reporting, operational dependencies, information/material flows, process/system/SOP/measure associations, interdepartmental interactions, and authorized active Investigation/Improvement links. Lens combinations must remain semantically labeled; visual proximity never implies a relationship.

Coordinates, zoom, pan, expanded nodes, lens, selected node, visual grouping, viewport and focus path are Product/workspace or ephemeral state. They never change topology. Large graphs use progressive expansion, adjacency paging, bounded traversal and summarized groups whose counts are calculated only after privacy filtering.

## 7. InformationContribution

InformationContribution uses one specialized assertion whose endpoints identify the permitted person source and an externally owned material/work-context reference. It may include communication/observation time, knowledge-basis and uncertainty qualification, contribution-time role/department snapshot references, explicit zero/one/multiple subject references where authorized, and correction/dispute/supersession/withdrawal/redaction/deletion lineage.

It stores no material body, Evidence classification, Investigation/Improvement state, credibility score or trust judgment. Investigation Inspector, Person and Department Workbenches, and Operational Memory query the same assertion through different purposes and policy filters. Evidence promotion is a separate explicit Investigation action and does not change the contribution assertion.

## 8. Investigation and Improvement handoffs

The shared **Organizational Context Envelope** contains envelope version, workspace, purpose, originating surface, referenced element/assertion IDs, optional bounded qualified snapshots, source versions, retrieval/snapshot time, and access qualifications. It contains no Evidence or accepted-fact flag.

Investigation may inherit the envelope but must explicitly add an item to its Working Set, classify Evidence, create a Hypothesis, or make another Investigation-owned transition. Existing Investigation identity and persistence remain; an adapter can reconcile its present Context Envelope rather than rewriting the MVP.

Improvement uses the same reference contract. Proposed future organization state is Improvement-owned change intent/delta referencing current governed identities. Proposal, Decision, execution, Monitoring and Stabilization do not mutate current governed state. Only a separately authorized reviewed update, applied by the correct source or Operating Model mutation owner, creates new governed current state.

## 9. People and privacy enforcement

Policy is deny-by-default for named-person and restricted relationships. Every access carries workspace, actor, purpose, requested fields and surface. The policy result separately controls existence, label, attributes, relationship visibility, history, navigation, aggregation, export and mutation.

The architecture supports people-free operation. Named people, role occupancy, membership and InformationContribution are enabled only where an adopted purpose, role, retention and correction path permit them. Subjective profiling and unauthorized sensitive attributes are outside this model.

No leakage is permitted through map topology, department counts, person search, autocomplete, URLs, relationship traversal, breadcrumbs, history, Inspector, Investigation/Improvement envelopes, Memory, exports, logs, error text, caches, indexes or future Watson context. Access reduction, correction, redaction, deletion and retention expiry synchronously invalidate visible derived state; persistent derived data must be rebuildable and purged.

## 10. State separation

- **Governed organizational state:** Element References, Relationship Assertions, authority/provenance, temporal qualification, revisions and lineage.
- **Product/workspace state:** saved views, user navigation context, Working Sets, Context Envelopes, Improvement proposals, view preferences and permitted drafts. References remain subject to reauthorization on read.
- **Ephemeral UI state:** hover, focus, open sheet/modal, transient selection, zoom/pan during a session, validation messages and unsaved input.

No UI or workspace record is accepted as governed input without an explicit authorized command and validation.

## 11. Persistence and representation boundary

Logical services depend on a versioned `OperatingModelPersistenceAdapter`, not on `localStorage`. Its minimum operations cover load validated generation, compare-and-commit generation, retrieve revision, enumerate/query by authorized scope, rebuild derived indexes, export a policy-approved portable envelope, import/validate without activation, and recover the last known good generation.

The browser implementation may use a schema-versioned workspace envelope with checksum, monotonically increasing generation, staging key, validated active pointer and previous validated generation. Activation occurs only after full validation. Migrations are deterministic, restartable and copy-on-write; failure preserves the old generation. Unknown future schema versions open read-only or fail safely. Export/import is optional and disabled for people data until its disclosure and retention policy is authorized.

A future backend implements the same repository contracts while moving workspace enforcement, authorization, concurrency and transactions server-side. IDs and external reference semantics remain stable; browser storage layout is not a public domain contract.

## 12. Search and scale

Search is a derived, rebuildable, workspace- and policy-partitioned index over authorized labels and kinds. Person indexing is separately enabled by purpose. Results return IDs and qualified highlights, then reauthorize on selection. No restricted result count, token, facet or timing-dependent detail may disclose protected existence.

Adjacency indexes support relationship traversal; kind/source/temporal indexes support filtering. Projections use pagination, incremental rendering, bounded-depth traversal, cancellation, cached people-free public subsets where permitted, and lazy history. Indexes are invalidated by every relevant mutation or policy change and never become mutation authority. These seams support large organizations without imposing a database now.

## 13. Failure and degraded behavior

- Corrupted store/generation: quarantine it, restore the last validated generation, disclose data-loss risk, never merge blindly.
- Broken reference: show authorized unresolved state; do not invent a label or endpoint.
- Missing external source: retain the reference and last qualified metadata only where policy permits; mark unavailable/stale.
- Stale or disputed state: show the qualification and applicable time; do not silently exclude or accept it.
- Unresolved historical role: preserve the unresolved contribution-time reference.
- Incomplete migration: keep the prior generation active and provide retry/read-only recovery.
- Restricted source: return protected absence, not a revealing authorization error.
- Deleted/redacted element: purge projections/indexes and use only authorized non-reconstructive integrity markers.
- Invalid relationship: reject the command or quarantine invalid stored data; never traverse it.
- Failed persistence: do not acknowledge success; retain the last committed generation and the recoverable draft separately.

## 14. Future Watson boundary

No Watson runtime is selected or authorized. A future Context Broker may expose only purpose-authorized, privacy-filtered, source-linked, temporally qualified and uncertainty-preserving projection DTOs. It must enforce field and traversal budgets, cite references, exclude restricted existence, log policy decisions without sensitive payloads, and provide no mutation or approval capability. Raw repository access, unrestricted graph export, model/provider selection and autonomous action are excluded.

## 15. Verification contracts

Future implementation must verify:

- stable identity, workspace isolation, source ownership and non-reuse;
- endpoint, family, direction, interval, version and cross-record integrity;
- identical governed identity and qualification across projections;
- authority-before-recency current-state resolution and historical role preservation;
- correction, supersession, dispute, withdrawal, redaction and deletion distinctions;
- privacy filtering before count, search, traversal, history, navigation, cache and context creation;
- protected absence and non-revealing failures;
- one InformationContribution projected consistently without copied content;
- Investigation context non-promotion and Improvement current/proposed separation;
- atomic persistence, migration restart, corruption recovery and import validation;
- responsive interaction obligations on desktop, laptop, tablet and narrow mobile;
- large-organization search-to-focus, bounded traversal and progressive rendering;
- honest unknown, stale, broken, missing, restricted and deleted states;
- Watson boundary rejection of unauthorized fields and actions.

Verification uses contract tests for services/adapters, invariant/property tests for temporal and relationship rules, policy matrix and non-leakage tests, migration fixtures, fault injection, cross-projection golden scenarios, responsive browser tests, and large synthetic people-free organizations. Passing tests would not itself authorize implementation or adoption.

## Authority effect

NONE. This proposed Engineering Architecture is a consideration artifact. Implementation, canonical mutation, repository transition, ROADMAP/BACKLOG changes, Watson execution, integrations, dependency or framework changes, backend, database and deployment remain unauthorized.
