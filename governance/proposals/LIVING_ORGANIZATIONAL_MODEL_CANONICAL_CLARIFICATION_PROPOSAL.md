# Living Organizational Model bounded canonical clarification proposal

## Proposal state

- Status: non-canonical clarification proposal for review and human adoption consideration
- Preparation authority: commit `44340e49817e2b09ceb1640b7a7df16b6c363236`, blob `4206644c7f7fd0f0a447ac38867b2e3c04e40ec8`
- Fixed gap assessment: commit `26e6579ec45291d0ca2bfccda4775d7ab82b7fb6`, blob `e8b2200371eddef69ae6e8da3d0c48945cae2206`
- Canonical adoption: not authorized
- Canonical source mutation: not authorized
- Engineering Architecture and implementation: not authorized

This proposal supplies the minimum semantic clarification needed to resolve the identified Engineering blocker. It prefers clarification and bounded extension of the existing Operational Operating Model authority. It creates no second organizational model, parallel enterprise graph, duplicate relationship authority, or implementation-specific canonical concept.

## Resolution summary

The gaps can be resolved through:

- **A — clarification of existing ownership** for organizational element identity, source references, temporal assertions, and projection boundaries;
- **B — bounded relationship semantics under the existing Operational Operating Model owner** for organization-wide topology and InformationContribution;
- **C — no new top-level canonical capability or aggregate.**

The only newly named canonical semantics are two structural record forms within the existing Operational Operating Model:

1. **Operating Model Element Reference** — the stable organization-relative identity/reference through which the Operating Model represents an eligible organizational element.
2. **Operating Model Relationship Assertion** — the governed, typed, temporal assertion connecting represented elements or authorized external source records.

These are not new Product modules, databases, aggregates, graph authorities, or P1–P6 responsibilities. They are the minimum canonical forms needed to make the Operating Model’s already-established stable identity, topology, provenance, sensitivity, freshness, and correction authority explicit.

**InformationContribution** is allocated as a narrowly specialized Operating Model Relationship Assertion, not a separate aggregate or Evidence record.

## Sole-authority invariant

The Operational Operating Model remains the sole governed organizational representational authority for the bounded organization.

```text
authoritative source record, where one exists
  -> Operating Model Element Reference
  -> Operating Model Relationship Assertion(s)
  -> Living Organizational Model projections
```

No Map, Workbench, Investigation, Improvement, Matter, Memory view, client cache, search index, layout store, integration, or AI context may create another organizational identity or relationship authority.

Source domains retain their native records and mutation authority. The Operating Model owns only the organization-relative representation, reference, assertion, and correction state necessary to connect those sources into governed operational topology.

## Operating Model Element Reference

### Definition

An **Operating Model Element Reference** is the stable, Workspace-bounded identity through which the Operational Operating Model represents one eligible organizational element.

It has one of two ownership modes:

- **source-backed reference** — points to a record owned by another authoritative capability or external source;
- **Operating-Model-owned element** — owns the minimum organizational identity when no more authoritative source exists.

The ownership mode is explicit and cannot change silently. Import, later source connection, source replacement, merge, split, retirement, or correction preserves identity/lineage and requires governed reconciliation rather than duplicate creation.

### Minimum canonical semantics

Each Element Reference preserves:

- stable identifier unique within one Workspace;
- element kind;
- source owner and source record/version reference where applicable;
- organization-relative human label and scope only where the Operating Model owns it;
- effective interval or source-effective reference where temporally relevant;
- recorded-at time and attributable recorder/governing actor;
- authorization/sensitivity class and purpose boundary;
- freshness/current/unknown/disputed/stale/incomplete/retired state as governed metadata;
- correction, merge/split, supersession, redaction, and permitted deletion lineage;
- no projection or layout fields.

The Element Reference is not Evidence, Knowledge, Memory, a Person dossier, an Account, a Matter, or a copy of the full source record.

## Organizational element ownership clarification

| Adopted Product element | Canonical representation and owner | Source authority retained / exclusion |
| --- | --- | --- |
| Organization | Operating-Model-owned root Element Reference for the bounded organization inside one Workspace | Workspace is the security boundary, not the organization’s operational meaning. |
| Department / organizational unit | Operating-Model-owned Element Reference unless an authorized organizational source owns the unit | No Map/Workbench-owned department identity. |
| Role | Operating-Model-owned role Element Reference unless a governed role source exists | Role is distinct from person, Account, Membership, and current occupant. |
| Named person | Minimal organizational-participant Element Reference linked to an authorized person/identity source where one exists | Does not create Account identity, authentication, HR master record, or personal profile authority. |
| Process / process step | First-class referenceable operating element under existing Operational System/Operating Model authority | Process behavior, condition assessment, execution, and source workflow remain separately owned. |
| Operational system/tool | Element Reference to an authorized source record or minimum Operating-Model-owned operational reference | Does not configure or become the source system. |
| SOP | Source-backed Element Reference to the SOP authority | Operating Model cannot edit, approve, version, or retire the SOP. |
| KPI / measure | Source-backed reference when a measure owner exists; otherwise minimum Operating-Model-owned measure identity/definition reference | Observations, targets, calculations, and performance conclusions retain their owners. |
| Recurring report | Source-backed Artifact/Report reference where available; otherwise minimum Operating-Model-owned recurring-report element | Report content and source records are not duplicated. |
| Recurring meeting | Source-backed calendar/meeting reference where available; otherwise minimum Operating-Model-owned recurring-interaction element | Calendar commitments, attendance, content, and recordings retain their source owners. |
| Organizational artifact | Source-backed Artifact reference with provenance, authorization, freshness, and correction path | Operating Model never becomes a generic file store. |
| External actor | Minimum scoped Element Reference or source-backed reference | Does not create a full external-party master record. |
| Investigation / Improvement / Decision / Outcome / Memory episode | Typed reference to its canonical owner, not an Operating-Model-owned element copy | Work identity, state, evidence, decisions, outcomes, and history remain outside the Operating Model. |

## Organizational state clarification

Known, unknown, disputed, stale, and incomplete are not standalone organizational entities.

They are governed state dimensions attached to an Element Reference, Relationship Assertion, or bounded attribute/assertion:

- **known** — an authorized represented assertion exists within stated scope and limits;
- **unknown** — the information is explicitly not established;
- **disputed** — incompatible attributable claims or an active challenge exist;
- **stale** — freshness/review conditions are exceeded or source validity is uncertain;
- **incomplete** — the represented element lacks material context identified by its declared purpose.

These states do not establish Evidence weight, performance, Cause, importance, failure, or completion score. “Restricted” is an access result, not an epistemic state; unauthorized users may not learn that restricted information exists.

## Operating Model Relationship Assertion

### Definition

An **Operating Model Relationship Assertion** is the sole governed organization-relative record that asserts a typed relationship between two or more represented endpoints for a stated scope and effective interval.

It preserves:

- stable relationship identifier within one Workspace;
- relationship family and direction/role structure;
- endpoint Element References or authorized external source references;
- source/provenance and owning authority;
- scope and operational purpose;
- effective interval and recording time;
- known/unknown/disputed/stale/incomplete status where applicable;
- confidence/limitation only as attributable epistemic metadata, never a person score;
- visibility/sensitivity/purpose boundary;
- correction, supersession, dispute, withdrawal, redaction, permitted deletion, and retirement lineage;
- references to supporting/contradictory material without becoming Evidence.

It is not a generic graph edge whose existence is justified by technical convenience. Each family has explicit semantics, endpoint constraints, direction, source owner, and permitted projections.

### Relationship authority families

| Family | Canonical meaning | Endpoint / ownership constraints |
| --- | --- | --- |
| Structural containment | Department/unit is part of organization or another unit | Operating Model owns organization-relative assertion; hierarchy is not Map position. |
| Reporting | One role reports to another role or authorized organizational authority within scope | Role-first; named-person reporting derives only from separate occupancy/membership assertions. |
| Role occupancy | Named organizational participant occupies a role during an effective interval | Distinct from responsibility, reporting, membership, skill, performance, and Account membership. |
| Department membership | Role or named participant belongs to/operates within a department during an interval | Distinct from reporting and role occupancy. |
| Responsibility / decision authority | Role or department is accountable/responsible/authorized for a bounded element or decision class | Human authority source and scope remain explicit; no authority by UI assignment alone. |
| Operational participation | Role/department participates in a process, system, SOP, report, meeting, or interaction | Participation does not imply ownership, approval, attendance, competence, or outcome. |
| Operational dependency | One represented operating element depends on another under stated conditions | Does not imply Cause, importance, or failure. |
| Information/material flow | Typed information/artifact moves from source role/department/process to recipient | Content and Artifact authority remain source-owned. |
| Process/system/SOP/measure association | A process uses/is governed by/is observed through a system, SOP, or measure | Exact subtype required; generic “related” is insufficient for authoritative topology. |
| Interdepartmental interaction | Directional operational exchange between departments with purpose, roles, cadence/trigger, artifact/information, supporting system/SOP, expected result, and uncertainty | One assertion projects across Map, departments, process, Investigation, and Improvement. |
| Historical/work linkage | Operating element is context for Investigation, Improvement, Decision, Outcome, Monitoring, Stabilization, or Memory episode | Linked capability owns work/history; relationship grants no state or access transfer. |
| InformationContribution | Identified person supplied specific information/material in a supported context at a contribution-time organizational capacity | Specialized semantics below; never Evidence or a credibility relationship. |

The canonical clarification does not require every family to be implemented at once. It establishes unique semantic ownership so later Engineering can define one coherent logical model.

## InformationContribution canonical allocation

### Allocation

**InformationContribution is a specialized Operating Model Relationship Assertion owned within the Operational Operating Model’s organizational relationship authority.**

This is the minimum bounded extension (method B). It does not extend the existing Matter-scoped Artifact Relationship implementation, create a Person-owned record, or create a new aggregate.

The Operating Model owns the attributable organizational source relationship. The source material owner retains content. The work context retains its own state. Case Evidence Set alone decides whether the material is included/classified as Evidence.

### Role structure

An InformationContribution connects:

- one exact source-person Element Reference;
- one source material/information reference;
- one supported context reference;
- contribution-time role and department references/snapshots where established;
- zero, one, or multiple explicit subject references;
- one recorder identity/reference where applicable.

Source, subject, recorder, author, owner, approver, Decision maker, responsible party, and Evidence relationship are separate roles. None is inferred from another.

### Required semantics

It preserves:

- communication time or bounded uncertainty/range;
- recording time;
- contribution-time role and department effective references;
- direct/indirect/mixed/unknown knowledge basis;
- attributable uncertainty and limitations;
- original material reference and transformation class;
- purpose, authorization, sensitivity, and visibility;
- correction, attribution correction, dispute, support, contradiction, supersession, withdrawal, redaction, and permitted deletion state;
- source-linked projections without copied content.

Support or contradiction qualifies the information in context, never the person. No count, ratio, graph centrality, or derived attribute may become credibility, trust, competence, performance, influence, or employee value.

## Temporal authority

### Time dimensions

The Operating Model distinguishes:

- **effective time/interval** — when an organizational element, relationship, or assertion applies in the organization;
- **recording time** — when Management OS recorded the representation;
- **source observation/provision time** — when the source observed or communicated information;
- **source version/retrieval time** — which authoritative source state was referenced;
- **decision-time snapshot time** — when another capability froze a justified historical view;
- **correction/dispute/supersession/redaction/deletion time** — when lifecycle action occurred.

One timestamp cannot substitute for another.

### Current-state derivation

For Operating-Model-owned state, current representation is derived from the applicable, authorized, non-superseded assertion whose effective interval contains the evaluation time, subject to dispute/stale/restriction status. Conflicting applicable assertions produce disputed state; they are not resolved by recency alone.

For source-backed state, current representation resolves the authorized source reference and freshness conditions. The Operating Model may cache/display a qualified projection but cannot overwrite source truth. When unavailable, it shows stale, unavailable, unknown, or restricted behavior honestly.

### Interval integrity

- Role occupancy, department membership, reporting, responsibility, and other temporal assertions use explicit start and optional end.
- Overlap is allowed only where the relationship family permits multiplicity; otherwise it produces a validation conflict requiring human resolution.
- Approximate, ranged, or unknown time remains explicit and cannot silently select current capacity.
- Ending an interval is not deletion.
- Future-effective assertions remain distinguishable from current state.

## Correction, supersession, dispute, redaction, and deletion authority

| Action | Canonical effect |
| --- | --- |
| Correction | Appends an attributable corrected version/assertion and links the incorrect representation; ordinary current views use corrected state while justified history remains inspectable. |
| Supersession | Replaces an assertion for later applicability without declaring the earlier assertion erroneous; prior effective history remains. |
| Dispute | Records an attributable challenge and prevents disputed content from appearing as unqualified fact; does not automatically choose a winner. |
| Withdrawal | Ends ordinary reliance on an attributable contribution/observation while retaining only justified accountability history. |
| Redaction | Restricts content/identity projection under policy while retaining the minimum non-revealing lineage needed for authorized accountability. |
| Permitted deletion | Removes data when no valid purpose/retention basis remains, propagates to projections/indexes/caches, and leaves only a policy-authorized non-reconstructive tombstone when required. |
| Retirement | Ends active use of an element/reference without reusing its identity or rewriting history. |
| Merge/split | Reconciles duplicate or changed identities with explicit lineage; never silently moves all relationships or erases contested attribution. |

The native source owner governs correction of source content. The Operating Model governs correction of its reference, organizational assertion, classification, and projection state. Decision-time snapshots in other capabilities remain immutable historical records labeled with later correction context.

## Reviewed Operating Model update

A reviewed Operating Model update is an attributable governed mutation to Element References or Relationship Assertions after source validation and applicable human authority. Operational Memory, Monitoring, Stabilization, Investigation, or Improvement may propose/reference the basis; none writes the update automatically.

The update preserves:

- prior and resulting version/assertion;
- effective time;
- recording time and actor;
- source basis and authorization;
- related Decision/change/Monitoring/Stabilization references where applicable;
- unresolved uncertainty and non-causal boundary.

Chronology does not establish causal proof.

## Projection invariants

The same underlying meaning may appear in Organization Map, Department Workbench, Role Workbench, Person Workbench, Process/System/SOP detail, Investigation, Improvement, and Operational Memory only under these invariants:

1. **Stable identity:** every projection carries the same Element Reference or Relationship Assertion ID/reference.
2. **Single owner:** mutation routes to the canonical/source owner; projection stores cannot write organizational truth.
3. **No access expansion:** purpose and authorization filtering occur before inclusion; restricted existence cannot leak through counts, gaps, edges, search, suggestions, history, or AI context.
4. **Qualified currentness:** current, historical, stale, disputed, unknown, incomplete, and restricted behavior remain explicit and source-consistent.
5. **No semantic promotion:** context does not become Evidence, Working Set, Hypothesis, fact, failure, benefit, Decision, Cause, or authority merely by projection.
6. **No content duplication:** projections use references and bounded display derivation; justified snapshots are explicitly historical and owned by the consuming capability.
7. **Correction propagation:** corrected/superseded/redacted/deleted state propagates to projections and derived indexes according to policy without rewriting preserved decision-time history.
8. **Layout separation:** coordinates, zoom, lens, selection, expanded nodes, tabs, saved views, and ephemeral drafts are not Element or Relationship meaning.
9. **Work semantics remain owned:** Investigation, Improvement, Decision, Outcome, Monitoring, Stabilization, and Memory retain their own states and histories.
10. **AI is a filtered consumer:** future Watson receives only a purpose-filtered projection with source/time/uncertainty and no mutation or hidden scoring authority.

## Investigation and Improvement preservation

Investigation references live authorized Element References/Relationship Assertions through an organizational-context envelope. A justified decision-time snapshot records exact source versions/time and remains Investigation/Matter history. No reference is copied or promoted automatically into Evidence, Working Set, Hypothesis, or accepted fact.

Improvement uses the same reference contract for opportunity, current state, affected elements, dependencies, risk, planning context, Monitoring, and Stabilization. It cannot create a parallel organizational state; proposed/intended change remains distinct from current Operating Model state until source validation and reviewed update.

## Operational Memory preservation

Operational Memory indexes source-owned completed episodes and their authorized references. It may project historical Operating Model versions/assertions relevant to an episode. It cannot own organizational current state, restore a historical assertion as current, rewrite contribution history, infer Cause, or broaden access.

## Workspace and person identity boundary

- Every Element Reference and Relationship Assertion belongs to exactly one Workspace.
- Account and Membership remain owned by Owner Identity Architecture.
- A named organizational participant reference is not an Account and does not imply login, membership, authentication, consent, employment status, or system access.
- Linking an Account/Membership to an organizational participant requires a separate governed identity relationship and cannot be inferred from name/email.
- Cross-Workspace references are prohibited unless separately authorized; projections and indexes reject mixed Workspace identities.

## Relationship to existing implemented Relationship model

The current `js/relationship-model.js` remains a Matter-scoped Artifact Relationship implementation. This clarification does not broaden it canonically.

Future Engineering may reuse its general implementation lessons—stable IDs, explicit semantic registry, human governance, uncertainty, history, transaction recovery, quarantine—but must not reuse its Matter/Artifact ownership assumptions for Operating Model relationships. Any shared technical primitive must sit below both semantic owners and cannot become canonical authority itself.

## Canonical impact

If adopted, the minimum canonical source effect would be a bounded clarification to `docs/OPERATIONAL_OPERATING_MODEL.md` and only necessary cross-reference alignment in directly dependent canonical architecture. It would:

- name Element Reference and Relationship Assertion structural forms under existing Operating Model authority;
- allocate the relationship families and InformationContribution;
- define temporal/correction ownership and projection invariants;
- preserve all adjacent owners and non-effects.

It would not require a new top-level document, Product module, P1–P6 view, database model, implementation type, API, graph store, backend, or migration.

## Explicit non-effects

This proposal does not adopt or mutate canonical sources, resume Engineering Architecture, implement records or relationships, authorize named-person data collection, define visibility roles/retention periods, enable Watson, select persistence/graph/database technology, change Investigation or Improvement, modify ROADMAP/BACKLOG, create a repository transition, deploy, validate H3, authorize Replay, determine Root Cause, or establish causal proof.
