# Milestone M1 — Canonical Foundation Review

## Gate Question

> Is the Canonical Foundation mature enough to build the next models without rebuilding Artifact or Relationship?

## Review Scope

This gate reviews the repository state identified by:

- Artifact canonical tag: `artifact-v1.0-canonical` → `b7c5b28`
- Relationship canonical tag: `relationship-v1.0-canonical` → `748fd29`
- Relationship implementation: `a1e4edb`
- Relationship stabilization: `2520c66`

No Operational Memory, Current Situation, Working Set, Watson, navigation, or UI expansion is included.

## 1. Architecture Consistency Audit

### Responsibility map

| Concern | Artifact | Relationship | UI |
|---|---|---|---|
| Stable material identity | Owns | References endpoints | Projects |
| Material content and type | Owns | Does not copy | Projects |
| Artifact provenance | Owns | Does not copy | Displays |
| Interpretation identity | Does not own | Owns | Projects |
| Relationship semantics and direction | Does not know | Owns through Semantic Policy | Displays from Repository |
| Relationship provenance and uncertainty | Does not own | Owns | Displays |
| Artifact lifecycle and states | Owns | Does not mutate | Invokes API |
| Relationship lifecycle and states | Does not govern | Owns through Lifecycle Policy | Invokes API |
| Relationship governance | Does not own | Owns | Requests explicit human action |
| Cross-model linkage | Stores IDs only | Owns endpoints and integrity | Does not author truth |
| History | Own append-only Artifact events | Own append-only Relationship events | Does not own |
| Persistence | Artifact Storage Adapter | Relationship Storage Adapter and operation journal | Selects concrete adapters |
| Recovery | Validates Artifact store | Recovers cross-store refs and quarantines Relationship records | Performs legacy adapter migration |
| Rendering | No DOM knowledge | No DOM knowledge | Renders accepted Repository state only |

### Aggregate boundaries

Artifact is the aggregate root for material identity, content, ownership, provenance, lifecycle, operational state, lineage, and its list of external Relationship IDs.

Relationship is the aggregate root for an interpretation between two Artifact identities: endpoints, semantics, uncertainty, proposal provenance, governing authority, lifecycle, revision, and history.

The only cross-aggregate mutation path is:

```text
Relationship Repository
→ ArtifactRepository.attachRelationshipRef()
→ ArtifactRepository.detachRelationshipRef({ rollback: true })
```

No full Relationship object is embedded in Artifact. Relationship reads Artifact identity and Matter membership but does not copy or own Artifact content.

### Consistency conclusion

The aggregate split is coherent and does not require redesign. Ownership, provenance, lifecycle, and history are separate per aggregate rather than duplicated. Artifact has no semantic knowledge of Relationship. Relationship depends on the narrow Artifact Repository contract for endpoint existence and reference integrity.

Four hardening gaps remain in enforcement:

1. Relationship human authority is identified by a blacklist rather than a positive canonical role set.
2. `ensure()` accepts an existing ID without checking immutable input compatibility.
3. `supersede()` accepts any existing replacement lifecycle stage.
4. Legacy Artifact migration is implemented in Workbench integration rather than a model/storage migration boundary.

## 2. Dependency Graph

### Canonical dependency map

```text
                         ┌──────────────────────┐
                         │   Storage Adapter    │
                         └──────────┬───────────┘
                                    │ runtime injection
                  ┌─────────────────┴─────────────────┐
                  ▼                                   ▼
        ┌───────────────────┐               ┌────────────────────┐
        │ Artifact Lifecycle│               │Relationship Lifecycle│
        │      Policy       │               │       Policy        │
        └─────────┬─────────┘               └──────────┬─────────┘
                  ▼                                    │
        ┌───────────────────┐                          │
        │     Artifact      │◄──────── runtime ────────┤
        │    Repository     │                          │
        └─────────┬─────────┘                          ▼
                  │                          ┌────────────────────┐
                  │ owns                    │   Relationship     │
                  ▼                          │    Repository      │
        ┌───────────────────┐               └──────────┬─────────┘
        │ Context Envelope  │◄──── runtime inspection ─┤
        └───────────────────┘                          │
                                                     │ runtime injection
                                          ┌──────────▼─────────┐
                                          │  Semantic Policy  │
                                          └────────────────────┘

        Relationship Repository ──runtime──► Artifact Repository
            endpoint/integrity use             reference API

        Artifact + Relationship Repositories ──runtime──► UI projection
```

The logical product flow is:

```text
Artifact
↓
Relationship
↓
UI projection
```

The code dependency direction is:

```text
UI → Relationship Repository → Artifact Repository
UI → Artifact Repository
Relationship Inspection → Context Envelope
Repositories → injected policies and adapters
```

### Dependency classification

| Dependency | Type | Assessment |
|---|---|---|
| Relationship module → Artifact module | No static import; runtime injected Repository contract | Allowed |
| Relationship Inspection → `ManagementOsArtifacts.ContextEnvelope` | Runtime global fallback or explicit injection | Allowed, but explicit injection is preferred outside browser composition |
| Artifact Repository → Artifact Lifecycle Policy | Runtime injection with versioned contract | Allowed |
| Relationship Repository → Relationship Lifecycle Policy | Runtime injection with versioned contract | Allowed |
| Relationship Repository → Semantic Policy | Runtime injection with versioned contract | Allowed |
| Both repositories → Storage Adapter | Runtime injection | Allowed |
| UI → both repositories | Runtime composition | Allowed |
| Repository → DOM | None | Required absence confirmed |
| Artifact → Relationship semantics or lifecycle | None | Required absence confirmed |
| Artifact Repository → Relationship Repository | None | Required absence confirmed |
| Policy → Repository, UI, or storage | None | Required absence confirmed |

### Forbidden dependencies

```text
Artifact → Relationship semantic type
Artifact → Relationship governance
Artifact → Relationship object copy
Artifact Repository → Relationship Repository
Repository → DOM
Policy → UI
Storage Adapter → domain decisions
UI DOM/session state → canonical acceptance
Relationship → direct Artifact store mutation
```

No dependency cycle exists in the current foundation.

## 3. Canonical Invariants

The test references below use the contract test names rather than line numbers so they remain stable across documentation-only edits.

### Artifact invariants

| Invariant | Guaranteed by | Tests | Potential violation |
|---|---|---|---|
| Artifact ID is stable, non-empty, and matches its store key. | `create()`, `validateStoredArtifact()` | “Artifact identity and provenance survive edits and repository reload”; malformed stored identity test | Bypassing Repository or disabling stored validation |
| Artifact belongs to exactly one Matter. | Repository `matterId`, store validation | malformed store tests | Reusing a store under another Matter |
| Content has wording and a positive revision. | `create()`, `edit()`, stored validation | identity/revision and no-op tests | Direct store mutation |
| Artifact provenance is required and immutable through public edit. | provenance normalization; edit allowlist | provenance immutability tests | Direct store mutation |
| Artifact ownership is human and mutation requires owner/editor authority. | canonical Actor roles; `requireHumanAuthority()` | Watson ownership/mutation denial | Incorrect editor provisioning outside the model |
| Artifact lifecycle follows the injected compatible graph. | Lifecycle Policy contract; transition methods | lifecycle and injectable policy tests | Incompatible policy implementation falsely claiming the contract |
| Artifact state dimensions are canonical and orthogonal. | state value maps; `setState()` | orthogonal state test | Direct store mutation |
| No-op edits and state changes create no revision/event. | equality checks before writes | provenance/revision and ref idempotency tests | Adapter with out-of-band mutation |
| History event identities are unique and retained. | event generation; stored validation; no delete API | identity/history tests | ID generator collision or direct store rewrite |
| Artifact contains Relationship IDs, never Relationship copies. | `relationshipRefs` schema | Relationship readiness test | New API that embeds edge objects |
| Relationship ref attachment is authorized and idempotent. | `attachRelationshipRef()` | Relationship ref integration test | Bypassing Artifact Repository |
| Relationship ref detachment is rollback/recovery-only. | explicit `options.rollback === true` | Relationship ref integration test | Caller falsely labelling ordinary cleanup as rollback |
| Inspection requires a compatible immutable Context Envelope and restores attention. | Context Envelope contract; Inspection methods | Inspection contract and browser tests | Unsupported envelope version or direct state mutation |

### Relationship invariants

| Invariant | Guaranteed by | Tests | Potential violation |
|---|---|---|---|
| Relationship ID is stable, non-empty, and matches its store key. | `propose()`, stored validation | stable identity/reload test | Direct store mutation |
| Relationship belongs to one Matter. | Repository and store validation | cross-Matter endpoint test | Reusing a store under another Matter |
| Both endpoint Artifacts exist in the same Matter and differ. | `requireArtifact()`, self-link check, startup quarantine | endpoint/Matter/self-link tests; missing endpoint quarantine test | Artifact deletion outside canonical API |
| Semantic type and direction are permitted by a compatible Semantic Policy. | policy validation in propose/edit/read | replaceable policy and invalid-direction tests | Policy implementation falsely claiming the contract |
| Proposal provenance is required and immutable. | provenance validation; edit allowlist | stable provenance and no-op/provenance tests | Direct store mutation |
| Evidence references resolve to same-Matter Artifacts. | proposal/edit validation and startup recovery | endpoint and quarantine tests | Artifact removal after validation |
| Uncertainty uses canonical qualitative confidence. | `validateUncertainty()` | proposal/edit policy tests | Direct store mutation |
| Lifecycle transitions follow compatible Lifecycle Policy edges. | `transition()`, `revise()` | lifecycle history test | Incompatible policy implementation |
| Rejection, challenge, supersession, and archive retain identity/history. | no delete API; append events | lifecycle history test | Direct store deletion |
| Watson cannot accept, reject, or challenge under the canonical Watson role. | `requireHumanGovernance()` | Watson governance denial | **Gap:** a noncanonical automation role is currently treated as human |
| Only designated governing authority ID may govern. | `requireHumanGovernance()` | governance tests | Actor credential spoofing outside this in-memory model |
| Watson may edit only its own unresolved proposal. | proposer identity/role check | Watson proposal edit test | **Gap:** arbitrary proposer roles are not positively canonicalized |
| Material revisions increment revision and append typed events. | change-set logic | no-op and lifecycle history tests | Direct store mutation |
| Both endpoint Artifacts contain the same Relationship ID. | pending transaction journal and integrity validation | stable refs, recovery, browser tests | Cross-store interruption; addressed by recovery |
| Dangling Artifact refs are rollback-cleaned, never promoted to truth. | startup recovery | dangling ref test | Direct Artifact ref mutation after Repository startup |
| Malformed Relationships are quarantined with payload/error/time. | startup recovery | malformed record browser/Node tests | Structurally unreadable top-level store |
| Pending operation recovery is idempotent. | operation journal cleanup and idempotent ref API | interrupted operation test | Multi-writer races in non-transactional storage |
| Only accepted Repository records render as accepted. | UI Repository filter | production Workbench journey | Future UI bypassing Repository |
| Supersession points to another existing Relationship. | `supersede()` existence/self checks | lifecycle history test | **Gap:** replacement need not currently be accepted |
| `ensure()` cannot silently redefine an identity. | Intended aggregate identity rule | No direct test | **Gap:** current method returns any existing ID without immutable compatibility checks |

### Cross-foundation invariants

| Invariant | Guaranteed by | Tests | Potential violation |
|---|---|---|---|
| Dependency direction is UI → Relationship → Artifact, never cyclic. | module boundaries and injection | browser load order and contract composition | Importing Relationship into Artifact |
| UI is not the canonical source of truth. | Repository persistence and reload rendering | production journey reload | Reintroducing DOM/session acceptance flags |
| Repositories are DOM-independent. | pure JavaScript modules | Node contract suites | Adding browser globals inside Repository operations |
| Cross-store inconsistency is detected before normal use. | recovery then `validateIntegrity()` | recovery tests | Concurrent writers after startup |
| Canonical commits/tags remain immutable historical records. | Git governance | tag/registry audit | History rewrite or tag movement |

## 4. Boundary Audit

### Artifact boundary

Confirmed:

- knows only opaque Relationship IDs;
- has no semantic type, direction, uncertainty, or Relationship lifecycle vocabulary;
- does not perform Relationship acceptance or challenge;
- contains no Relationship object copies;
- exposes only authorized attach and rollback-only detach operations.

### Relationship boundary

Confirmed:

- references Artifact identities rather than copying content;
- does not own or edit Artifact wording, provenance, lifecycle, or states;
- mutates Artifact only through the two explicit ref methods;
- owns its own provenance, uncertainty, governance, lifecycle, revision, and history.

Condition:

- the Relationship actor-role boundary must become positive and canonical rather than blacklist-based.

### UI boundary

Confirmed:

- accepted rendering is reconstructed from Relationship Repository;
- hard-coded decorative connectors were removed;
- refresh does not depend on DOM/session acceptance;
- production rendering filters lifecycle stage `accepted`;
- Repository modules have no DOM dependency.

Condition:

- legacy schema migration currently resides in `natural-capture.js`; migration is persistence responsibility and must move behind a versioned adapter/repository migration boundary before another persistent model is introduced.

## 5. Frozen API Review

### Artifact module

| API | Purpose | Stability | Simplification / breaking point |
|---|---|---|---|
| `createStorageAdapter()` | Persistence port | Stable | Appropriate minimal contract; lacks transaction/version migration capability by design |
| `createLocalStorageAdapter()` | Browser adapter | Stable for v1 | Local-only; parse/schema migration is external |
| `createLifecyclePolicy()` | Versioned lifecycle graph | Stable | Appropriate |
| `ContextEnvelope.create/isCompatible/assertCompatible/copy` | Shared context snapshot contract | Stable | Shared contract is housed under Artifact namespace; acceptable without cycle |
| `createArtifactRepository()` | Aggregate composition | Stable | Appropriate |
| `create()/ensure()/get()/list()` | Identity and retrieval | Stable | `ensure()` has the same identity-collision risk pattern as Relationship, though current seeded inputs are controlled |
| `edit()/setState()` | Controlled mutation | Stable | Broad but explicitly allowlisted |
| `transitionLifecycle()/advanceLifecycleTo()` | Lifecycle mutation/traversal | Stable | Both are useful: single-edge control and policy-driven traversal |
| `attachRelationshipRef()/detachRelationshipRef()` | Narrow cross-aggregate integration | Stable | Detach relies on caller truthfully declaring rollback; no capability token |
| `inspect()/closeInspection()` | Context-preserving temporary attention | Stable | Nonexistent Artifact produces a generic null dereference in `inspect()` rather than a canonical invariant error |

### Relationship module

| API | Purpose | Stability | Simplification / breaking point |
|---|---|---|---|
| `createStorageAdapter()/createLocalStorageAdapter()` | Persistence port and browser adapter | Stable | Same local/schema limits as Artifact |
| `createLifecyclePolicy()` | Versioned transition graph | Stable | Appropriate |
| `createSemanticPolicy()` | Versioned semantic vocabulary | Stable | Appropriate |
| `createRelationshipRepository()` | Aggregate composition | Stable after required authority hardening | Actor contract is under-specified |
| `propose()/get()/list()` | Identity and retrieval | Stable | Appropriate |
| `ensure()` | Idempotent seed creation | Not fully safe | Must verify immutable compatibility for an existing ID |
| `edit()/revise()` | Proposal edit vs lifecycle revision | Stable but subtle | Distinction must remain documented |
| `accept()/challenge()/reject()/archive()` | Explicit lifecycle judgments | Stable after actor hardening | Appropriate command surface |
| `supersede()` | Historical replacement | Not fully safe | Must require an eligible accepted replacement |
| `setState()` | Orthogonal state mutation | Stable | Broad; governance dimension is correctly blocked |
| `withdrawProposal()` | Proposer withdrawal | Stable | Records rejection without deleting history |
| `inspect()/closeInspection()` | Context-preserving inspection | Stable | Context Envelope dependency should be explicitly injected in non-browser composition |
| `recoverPendingOperations()` | Operational repair | Public but low-level | Exposing recovery permits repeated safe invocation; no immediate breaking issue |
| `validateIntegrity()` | Cross-repository assertion | Stable | O(n artifacts + relationships) per invocation |

### Operational Memory API readiness

The current APIs provide the necessary primitives:

- stable Artifact identities;
- stable Relationship identities;
- immutable provenance;
- append-only histories;
- explicit lifecycle policies;
- Context Envelope snapshots;
- adapter-based persistence;
- repository-level integrity validation.

Operational Memory must consume these models through their public APIs and stable IDs. It must not embed, rewrite, or become the owner of Artifact or Relationship records.

API readiness is **conditional** on closing the four required hardening items. No API removal or aggregate redesign is required.

## 6. Technical Debt Audit

| Severity | Debt | Evidence | Required disposition |
|---|---|---|---|
| Blocker | None requiring aggregate redesign | Artifact/Relationship boundaries and dependency direction are coherent | — |
| High | Relationship human authority uses blacklist role detection | `isHuman()` excludes only `watson`, `system`, `source` | Replace with positive canonical human roles and tests before Sprint 03 |
| High | `ensure()` does not validate immutable identity compatibility | Existing ID is returned without endpoint/semantic/authority comparison | Add collision invariants and tests before Sprint 03 |
| High | Supersession target lifecycle is under-constrained | Any existing non-self Relationship may replace another | Require accepted/eligible replacement and test before Sprint 03 |
| High | Legacy migration is coupled to Workbench UI | missing `ownerRole` migration is in `natural-capture.js` | Establish versioned migration boundary before adding Operational Memory persistence |
| Medium | Context Envelope is shared but namespaced under Artifact | Relationship uses Artifact global fallback | Prefer explicit injection in future composition; no relocation required |
| Medium | Recovery scans full Artifact and Relationship collections | startup integrity/recovery loops | Accept for current scale; measure before large Matters |
| Medium | Artifact `inspect()` lacks explicit missing-record invariant | dereferences `artifact.states` after nullable `get()` | Defect hardening; does not alter API |
| Medium | Minimal renderer always uses support-oriented CSS class | `relationship-link--supports` for all accepted semantics | Must be corrected before rendering additional semantic types |
| Low | `recoverPendingOperations()` is public infrastructure API | Repository export | Keep documented as operational API or hide only in a future major version |
| Low | JSON clone/equality strategy is representation-dependent | JSON serialization throughout models | Accepted for JSON-compatible canonical records |
| Accepted Architectural Debt | localStorage has no multi-user, concurrency, or cross-store transaction | browser adapter implementation | Accepted for current local prototype; replace adapter for shared runtime |
| Accepted Architectural Debt | Canonical tags preserve multiple commits rather than one squashed commit | immutable Git history | Intentional historical record |

No `TODO`, `FIXME`, or `HACK` markers were found in the canonical modules or tests.

## 7. Readiness Matrix

| Next model | Readiness | Conditions |
|---|---|---|
| Operational Memory | Ready with Conditions | Close all four High hardening items; Memory must reference stable IDs and consume histories without owning aggregates |
| Current Situation | Ready with Conditions | Operational Memory contract must exist first; retain Context Envelope versioning and avoid derived truth inside Artifact |
| Inspection | Ready with Conditions | Existing Inspection primitives are sound; define model-level orchestration without moving context ownership into DOM |
| Working Set | Ready with Conditions | Must reference Artifact/Relationship identities and use orthogonal participation/attention states rather than copying records |
| Watson | Not Ready | Requires positive actor/authority contract and downstream governance boundaries; Watson must remain proposer, not governing authority |

Sprint 03 is not open until required hardening is complete and this gate is updated or supplemented with evidence of closure.

## 8. Risk Assessment

| Risk area | Current posture | Risk | Boundary / mitigation |
|---|---|---|---|
| Persistence | JSON stores behind adapters | Medium | Replace adapter for durable/shared runtime without changing aggregate APIs |
| Schema evolution | Exact schema version checks; one UI-level legacy migration | High | Establish model/storage migration registry before Operational Memory |
| Migration safety | Legacy owner role migration proven on real persisted state | Medium | Move migration out of UI and preserve explicit source/target schema evidence |
| Scalability | Whole-store clone, validation, and scans | Medium | Suitable for current Matter size; not suitable for unbounded graphs |
| Multi-user | No identity service, lock, or conflict resolution | High outside current scope | Do not deploy localStorage adapter as shared authoritative persistence |
| Synchronization | No cross-tab or server synchronization | Medium | Adapter replacement must define version/conflict semantics |
| Consistency | Strong validation at Repository boundary; two separate stores | Medium | Pending journal and integrity checks reduce crash inconsistency but do not provide multi-writer serializability |
| Recovery | Pending rollback, dangling-ref cleanup, malformed quarantine | Good for single writer | Quarantine diagnostics must remain observable in future operational tooling |
| Data loss | Quarantine retains malformed Relationship payload; lost Relationship store causes dangling-ref rollback | Medium | Shared persistence must add backup/audit retention |
| Security | Actor objects are caller-supplied, not authenticated principals | High outside current local scope | Protected runtime must bind actors to authenticated authorization claims |

### localStorage conclusion

localStorage is an acceptable development adapter for a single-user, single-origin prototype. It is not a canonical persistence technology and must not define future aggregate architecture.

Its hard limits are:

- synchronous whole-value writes;
- no cross-key atomic transaction;
- no multi-writer concurrency control;
- no authenticated authorization;
- no server durability or backup;
- origin-local capacity limits;
- no schema migration service;
- no conflict resolution.

The injected Storage Adapter boundary successfully prevents these limitations from forcing an Artifact or Relationship redesign. Operational Memory may begin only after migration responsibility is moved out of UI composition and its persistence contract explicitly acknowledges versioning.

## 9. Canonical Status Review

Canonical model rows are factually correct:

- Artifact is Canonical at `b7c5b28` with tag `artifact-v1.0-canonical`.
- Relationship implementation and stabilization are present.
- `relationship-v1.0-canonical` resolves to `748fd29`.
- Operational Memory, Current Situation, Inspection, Working Set, and Watson remain Planned.

The Relationship row records stabilization commit `2520c66` while its tag points to governance HEAD `748fd29`. This is historically explainable but ambiguous in a single “Commit” column. The registry is updated by this gate to record tag target `748fd29`, with implementation and stabilization commits identified in Notes.

The Current Milestone is also updated from completed Relationship sprint to the active M1 gate outcome. Sprint 03 remains blocked pending required hardening.

## 10. Required Hardening Before Sprint 03

1. Define and enforce a positive canonical actor-role contract for Relationship governance; unknown and automation roles must fail closed.
2. Make `ensure()` reject immutable identity collisions for both canonical repositories, with explicit contract tests.
3. Require a superseding Relationship to be accepted and otherwise eligible under Lifecycle Policy.
4. Move legacy Artifact schema migration from `natural-capture.js` into an explicit versioned persistence migration boundary reusable by future canonical models.

These are bounded corrections. They do not change aggregate ownership, dependency direction, or the fundamental Artifact/Relationship data models.

## Final Recommendation

```text
Foundation Approved with Required Hardening
```

Required before Sprint 03:

- positive actor authority contract;
- identity-safe `ensure()`;
- governed supersession eligibility;
- versioned migration boundary outside UI.
