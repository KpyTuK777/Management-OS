# Canonical Information Architecture

## Status

```text
Architecture & Information Space
Milestone M5.8
Canonical Review Candidate
```

## Purpose

This document defines where professional information lives in Management OS,
why it lives there, and how canonical objects coexist without duplication. It is
the canonical organization of the operational manager's information space.

It is not a sitemap, file structure, URL hierarchy, page catalogue, component
tree, layout, or responsive specification. It defines no color, SVG, typography,
spacing, CSS, framework, implementation, component, panel, card, canvas,
inspector, timeline, sidebar, or other visual form.

Information Architecture is downstream of canonical domain, product,
experience, navigation, visual semantics, and interaction models. It organizes
references and representations of their objects; it cannot create Authority,
Domain truth, lifecycle, Evidence, Focus, Relationship, Decision, Outcome,
Operational Memory, or a new Context Envelope.

# 1. Information Philosophy

## 1.1 Canonical definition

Information Architecture in Management OS is:

> the professional organization of canonical information around Matter,
> intent, authority, current understanding, work, judgment, change, observation,
> history, and recovery.

It answers:

1. What is the governing scope?
2. Which canonical object dominates this professional context?
3. Where is the object's primary representation?
4. Which other contexts may summarize, reference, or inspect it?
5. Who owns its truth, identity, authority, and history?
6. What persists when context changes?
7. How does the manager return without reconstructing meaning?

## 1.2 Space is professional, not geometric

An information space is a governed semantic boundary with:

```text
professional responsibility
+ dominant canonical content
+ ownership/source boundary
+ persistence contract
+ lifecycle applicability
+ navigation relationship
+ Context Envelope contribution
```

A space may later have many visual forms or share a visual surface with another
space. Geometry does not define it. A route does not instantiate it. A visible
container does not own its information.

## 1.3 Residency before representation

Every canonical object has one owning source and one primary information
residency. It may appear elsewhere only through a controlled role:

- **Primary representation** — the complete current representation appropriate
  to the active professional context, backed by the owning source;
- **Secondary representation** — a purpose-specific summary preserving identity,
  state, provenance, and link to primary context;
- **Reference** — a stable pointer carrying enough identity, type, source, and
  version/currentness to avoid copying truth;
- **Inspection** — temporary depth into the same object with preserved origin,
  surrounding context, and return.

These are representation roles, not copies or new objects.

## 1.4 One investigation, one information center

Within an active Matter, Current Situation and current professional Focus create
one center of operational orientation. Workbench, Decision, Operational Transition,
Monitoring, Memory, sources, and historical contexts deepen or extend that
center. They do not become competing Matters or parallel current truths.

# 2. Canonical Information Inventory

## 2.1 Inventory decision

The canonical model contains thirteen information spaces:

1. Workspace Scope;
2. Global Attention Space;
3. Matter Context Space;
4. Current Understanding Space;
5. Matter Corpus Space;
6. Workbench Inquiry Space;
7. Decision Space;
8. Operational Transition Coordination Space;
9. Monitoring & Outcome Space;
10. Operational Memory Inspection Space;
11. Source Inspection Space;
12. Practice & Learning Space;
13. Context Recovery Space.

The following proposed terms are not canonical information spaces:

- **Surface, Panel, Card, Canvas, Inspector** — possible representation forms;
- **Persistent Region, Transient Region, Context Region** — presentation or
  temporal roles governed by §5, not standalone spaces;
- **Navigation Region** — Navigation coordinates entry, exit, and return but does
  not own an information region;
- **Evidence Region, Decision Region, Monitoring Region, Learning Region** —
  “region” is replaced by the owning canonical space;
- **Timeline Region** — a temporal projection inside Operational Memory
  Inspection, never the Memory model itself;
- **Memory Region** — replaced by the read-only Operational Memory Inspection
  Space so Navigation or presentation cannot own Memory.

# 3. Spatial Hierarchy and Space Contracts

## 3.1 Hierarchy

```text
Workspace Scope
│
├─ Global Attention Space
│  ├─ authorized Matter references
│  ├─ attributable attention claims
│  ├─ suspended/recovery references
│  └─ Practice & Learning entry
│
├─ Matter Context Space
│  ├─ Current Understanding Space
│  ├─ Matter Corpus Space
│  ├─ Workbench Inquiry Space
│  ├─ Decision Space
│  ├─ Operational Transition Coordination Space
│  ├─ Monitoring & Outcome Space
│  ├─ Operational Memory Inspection Space
│  └─ Source Inspection Space
│
├─ Practice & Learning Space
│
└─ Context Recovery Space
   └─ projects the best valid destination into an existing space
```

The tree expresses scope and residency, not pages, routes, lifecycle order, or
mandatory containment in a visual composition. Operational spaces may coexist
inside one Matter.

## 3.2 Space contracts

| ID and space | Responsibility | Dominant content | Ownership | Persistence | Lifecycle applicability | Navigation relationship | Context Envelope responsibility |
|---|---|---|---|---|---|---|---|
| **IA-01 — Workspace Scope** | Bound the actor's authorized organizational/product context and available sources. | Actor identity, workspace identity, access policies, source capabilities, governed configuration references. | Identity/access/organizational sources; IA owns no authority. | Persists across Matters and sessions while valid. | Outside Matter lifecycle. | Context for Global entry and authority validation; not a navigation layer. | Supplies actor/workspace/access references and limitations; owns no envelope. |
| **IA-02 — Global Attention Space** | Coordinate retrieval and attention across authorized Matters. | Matter references, justified attention claims, material changes, pending judgments, suspended contexts, valid returns. | Navigation projection over canonical Matter/events/intent. | Semantically available at product entry and cross-Matter return; projection rebuildable. | Cross-lifecycle; Closed Matters remain retrievable without active solicitation. | Corresponds to Global navigation layer; adoption of a Matter enters IA-03. | Preserves origin, selected destination, reason, actor, suspended envelopes, and intended return. |
| **IA-03 — Matter Context Space** | Preserve one Matter's identity, owner, posture, current condition, available operational spaces, and lineage. | Matter, owner/delegate, lifecycle posture, Current Situation reference, last consequential change, current intent. | Matter model and owning canonical sources. | Exists from admission through closure and reopening. | All Matter lifecycle states. | Corresponds to Matter layer; parent scope for Matter-specific spaces. | Establishes Matter identity, authority, posture, active/suspended Focus, source state, and return. |
| **IA-04 — Current Understanding Space** | Provide the one primary representation of accepted present understanding. | Current Situation version, basis, uncertainty, contradictions, responsible authority, material implications. | Current Situation owning model and authorized human judgment. | One current version per active Matter; prior versions persist in Memory. | Pre-synthesis condition through closure/reopening; content changes by authorized revision. | Stable Matter anchor reachable from every Matter operational space. | Supplies the current accepted version, basis, unresolved conditions, and change since prior context. |
| **IA-05 — Matter Corpus Space** | Preserve the complete authorized Matter-scoped body of Artifacts and semantic references. | Artifacts, source references, Relationships, Hypotheses, Contradictions, Collections, rejected/settled/archived subjects. | Workbench canonical entities and source systems. | Persists with durable identities across navigation and lifecycle; visibility is selective. | From admission onward; remains historically recoverable after closure. | Retrieval/inspection source for Workbench, Decision, Monitoring, and Memory. | Supplies identities, versions, provenance, epistemic condition, availability, and relevant neighborhood. |
| **IA-06 — Workbench Inquiry Space** | Organize active investigation and understanding around one Focus. | Working Set, Focus, inspected subject, relevant Artifacts/Evidence, Relationships, Hypotheses, Contradictions, Watson proposals. | Workbench model; owner controls accepted understanding and ordinary Focus. | Exists while investigative interaction is justified or revisited; Working Set and Focus are dynamic. | Emphasized during investigation; may be revisited from later states. | Corresponds to Workbench navigation layer; enters Decision when readiness is adopted. | Foregrounds Current Situation/Working Set versions, Focus, inspection, unresolved question, pending judgment, and exact return. |
| **IA-07 — Decision Space** | Support and preserve accountable judgment without merging readiness, proposal, authority, and Decision. | Decision question, readiness basis, alternatives, consequences, risk, uncertainty, authority, canonical Decision. | Decision owner and Product Operating Model. | Exists when a material decision question or historical Decision exists. | Decision Ready onward; historical Decisions remain inspectable in any later posture. | Corresponds to Decision layer; may return to Workbench, Matter, Operational Transition, or Monitoring. | Carries basis versions, question, alternatives, authority, accepted uncertainty, intent, origin, and reconsideration path. |
| **IA-08 — Operational Transition Coordination Space** | Relate Decision intent to source-owned change and guardrails. | Intended condition, Impact Review, approved adaptations, source-owned action references, commitments, dependencies, guardrails, deviations. | Product Operating Model coordinates; execution sources own mutations. | Exists only after valid handoff and remains historical after completion/pause/stop. | Decided/In Execution and valid reconsideration contexts; absent for no-action/execution-free Decisions. | Corresponds to Transition Layer; hands observation context to IA-09. | Carries Decision intent, source refs, actors, dependencies, deviations, unfinished change, monitoring, and return. |
| **IA-09 — Monitoring & Outcome Space** | Compare observed operation with intent and support Outcome, stabilization, reconsideration, or closure. | Observation contract, baseline, sources, intervals, guardrails, observations, Outcome Assessment, stabilization basis. | Observation sources own observations; authorized human owns interpretation; Product model owns posture. | Exists when observation is justified; historical contracts/Outcomes remain inspectable. | Monitoring, Outcome Assessed, stabilization, closure, and later retrospective. | Corresponds to Monitoring layer; may branch to Workbench, Decision, Operational Transition, or Matter/Closed. | Carries Decision/intended condition, baseline, source versions, interpretation authority, Outcome, uncertainty, next interval, and return. |
| **IA-10 — Operational Memory Inspection Space** | Query and explain consequential history without becoming current truth or owning Memory. | Event query/projection, lineage, prior Current Situations, Decisions, Operational Transitions, Outcomes, interruptions, rejections, corrections. | Operational Memory model (Ready for Final Canonical Review); space is read-only projection. | Memory persists append-only; inspection context is temporary and reconstructable. | Inspectable throughout and after the Matter lifecycle subject to access/retention. | Corresponds to Memory Inspection layer; entered from any Matter context with preserved return. | Adds query, range, historical baseline, inspected event/object, source availability, current-truth distinction, and return. |
| **IA-11 — Source Inspection Space** | Inspect source-owned material, integrity, versions, and execution/observation records without absorbing source authority. | Source identity, original content/record, provenance, version, integrity, availability, authorization, relevant source history. | External/internal owning source; Management OS holds references and qualifications. | Source records follow their source retention; inspection is transient; relevant references persist. | Applicable wherever a source supports Matter understanding, change, or monitoring. | Temporary inspection reachable from Corpus, Workbench, Decision, Operational Transition, Monitoring, and Memory. | Preserves source reference/version, origin professional context, inspection purpose, limitations, and return. |
| **IA-12 — Practice & Learning Space** | Support simulation, practice, and learning with explicit non-production separation. | Practice case, simulated subjects, attempt context/history, learning question, qualified production references. | Practice/Learning model and facilitator/learner roles; no production authority. | Practice identities and attempt history persist separately; active attempt is resumable. | Outside production Matter lifecycle unless a separate admission occurs. | Corresponds to Practice & Learning layer; entered from/returns to Global or preserved production context. | Carries practice identity, provenance, simulated authority, attempt state, production boundary, source refs, and return. |
| **IA-13 — Context Recovery Space** | Reconstruct and validate the best professional return after failure, interruption, restart, or absence. | Last valid envelope, canonical delta, stale/unavailable fields, indeterminate acts, authority/source checks, candidate return targets. | System may reconstruct; canonical sources own facts; human adopts ordinary intent. | Recovery projection is transient; resulting context and recovery history persist as governed. | Cross-lifecycle and cross-space; cannot revive invalid state. | Mediates return into an existing canonical space; never becomes a permanent destination. | Reads and validates the single canonical envelope; creates no container; records chosen target/limitations when consequential. |

# 4. Information Residency Rules

## 4.1 Residency principles

1. The canonical source owns identity and truth.
2. The primary space owns neither object nor authority; it is the object's
   complete contextual representation.
3. Secondary representations and references resolve to the same stable identity.
4. Inspection deepens the same object and preserves return.
5. No copy may diverge, acquire independent state, or become a second command
   authority.
6. Historical versions live in Operational Memory/source history, not beside the
   current object as competing current truth.

## 4.2 Canonical object residency matrix

| Canonical object / information | Primary residency | Permitted secondary/reference residency | Inspection residency | Prohibited residency behavior |
|---|---|---|---|---|
| **Workspace identity and access context** | IA-01 Workspace Scope | IA-02 and all spaces may reference current actor/workspace limitations. | Governing identity/access source. | IA cannot create or infer Authority from visibility or location. |
| **Attention claim / priority classification** | IA-02 Global Attention for cross-Matter coordination; active Matter context may show its own claim. | IA-03 and relevant operational spaces may summarize basis. | Navigation governance history through IA-10. | Counts, position, or repetition cannot become priority. |
| **Matter** | IA-03 Matter Context. | IA-02 reference; every Matter-specific space carries stable Matter identity. | IA-10 history; source references where applicable. | No second Matter identity, blended Matter, or local lifecycle copy. |
| **Current Situation** | IA-04 Current Understanding. | IA-03/06/07/08/09 may show versioned secondary summaries or references. | IA-06 for evidence context; IA-10 for prior versions. | No duplicated editable Current Situation or competing current synthesis. |
| **Artifact** | IA-05 Matter Corpus. | IA-06 Working Set/Focus, IA-07 basis, IA-09 observation basis, IA-10 historical references. | IA-11 source inspection or IA-06 Inspection. | No copied Artifact identity or promotion to Evidence through location. |
| **Source record** | IA-11 references the owning source; source remains authoritative residency. | IA-05/06/07/08/09/10 hold versioned source references. | IA-11. | No absorption into Matter truth, silent cache-as-current, or rewritten source history. |
| **Evidence role** | IA-06 in relation to a precise claim, backed by IA-05 identity/source. | IA-07 Decision basis and IA-09 Outcome basis may reference the same scoped Evidence role. | IA-11 source and IA-10 historical use. | No detached Evidence copy or universal proof status. |
| **Relationship** | IA-05 Matter Corpus with canonical endpoints/semantics. | IA-06 reasoning, IA-07 basis, IA-08 dependency where semantics apply, IA-10 history. | Endpoint/source/provenance inspection. | No presentation connector or proximity creates another Relationship identity. |
| **Hypothesis** | IA-05 canonical identity; IA-06 is primary active reasoning representation. | IA-04 may reference accepted implications; IA-07 may cite alternatives. | IA-10 evolution history. | No visual/secondary copy with independent epistemic state. |
| **Contradiction** | IA-05 canonical identity; IA-06 primary active resolution context. | IA-04/07/09 may expose material effect. | IA-10 history and source inspection. | Cannot disappear because a surface quiets it. |
| **Collection** | IA-05 Matter Corpus. | IA-06 may use references for inquiry organization. | IA-10 membership history where consequential. | Membership creates no ownership, copies, Evidence, or Working Set participation. |
| **Working Set** | IA-06 Workbench Inquiry. | IA-03 may summarize active inquiry; Context Envelope references version. | IA-10 historical participation where consequential. | No independent Working Set per surface or implicit membership from visibility. |
| **Focus** | IA-06 for investigative Focus or the active owning operational space for its dominant object; one canonical active reference in the envelope. | IA-02/03 and Rail may represent the same Focus as orientation. | IA-10 Focus history; IA-13 recovery. | No duplicate primary Focus, technical-focus copy, or selection-as-Focus. |
| **Inspection** | Temporary depth inside IA-06/07/08/09/10/11 as appropriate. | Origin space retains context and return. | The inspection itself is the controlled role. | Inspection cannot become another permanent object residency or imply acceptance. |
| **Watson Proposal** | IA-05 canonical proposal identity; active professional context appropriate to its subject. | IA-06/07/08/09 may show same proposal/reference. | IA-10 proposal/disposition history. | No proposal duplicated as accepted truth or promoted by prominence. |
| **Decision question/readiness basis** | IA-07 Decision Space. | IA-04/06 may summarize implication/readiness; IA-03 may show pending judgment. | IA-10 history. | Readiness cannot become Decision or lifecycle state through placement. |
| **Decision** | IA-07 primary representation. | IA-03 summary; IA-08 intent reference; IA-09 comparison basis; IA-10 history. | IA-07 historical inspection or IA-10 lineage. | No copied Decision with separate rationale, state, or authority. |
| **Intended condition** | IA-07 with Decision; foregrounded in IA-08/09 by reference. | IA-03 current implication and IA-10 history. | Decision/source inspection. | Cannot appear as achieved Outcome. |
| **Operational Transition** | IA-08 Operational Transition Coordination. | IA-03 status summary; IA-07 handoff reference; IA-09 source/history reference. | IA-10 historical Operational Transition. | IA does not own execution records or infer progress from representation. |
| **Action/commitment/dependency reference** | Owning source for action truth; IA-08 for coordination reference. | IA-03/07/09 may summarize material consequence. | IA-11 source inspection; IA-10 history. | No source-owned record copied into independent Management OS execution truth. |
| **Observation contract** | IA-09 Monitoring & Outcome. | IA-07/08 handoff references; IA-03 summary. | IA-10 prior contracts. | No Monitoring space without valid contract/pre-object. |
| **Observation** | Owning source; IA-09 primary contextual representation. | IA-06/07 may reference for reconsideration; IA-10 history. | IA-11 source inspection. | Observation cannot become interpretation or Outcome by residency. |
| **Outcome Assessment** | IA-09 primary representation. | IA-03 summary; IA-07/08 reconsideration reference; IA-10 history. | IA-09/10 historical inspection. | No action completion or monitoring summary duplicated as Outcome. |
| **Stabilization/closure disposition** | IA-09 judgment basis; IA-03 canonical Matter posture/disposition. | IA-07/08/10 references. | IA-10 historical lineage. | No secondary representation may close the Matter. |
| **Operational Event** | Operational Memory model (Ready for Final Canonical Review) or source history. | IA-10 primary inspection projection; active spaces may cite relevant events. | IA-10 and IA-11. | No event copy becomes current state or editable timeline item. |
| **Operational Memory** | Operational Memory model (Ready for Final Canonical Review); IA-10 is its only information-space inspection projection. | All spaces may reference Memory queries/events. | IA-10. | Memory never becomes Navigation, a local log, duplicated timeline, or current truth. |
| **Context Envelope** | Canonical continuity contract, not an information object with its own surface. | Every space consumes relevant fields; IA-13 validates recovery. | Inspectable only as continuity/provenance where professionally required. | No per-space envelope, copied context container, or hidden local truth. |
| **Practice case/attempt** | IA-12 Practice & Learning. | IA-02 entry/reference; production spaces may hold qualified reference only after authorization. | IA-12 history; permitted source inspection. | No production residency or authority by visual similarity or navigation. |

# 5. Persistent and Transient Information

## 5.1 Persistence is not visibility

Persistent means identity and professional meaning survive movement, reload,
restart, closure, or recovery according to the owning model. It does not mean
simultaneously visible.

Transient means a projection exists for a bounded interaction and may disappear
without changing canonical truth. It does not mean inconsequential if the
interaction produces a separate recorded judgment or event.

## 5.2 Persistence classes

| Class | Information | Persistence contract |
|---|---|---|
| **IP-1 — Canonical persistent** | Matter, canonical entities, Current Situation versions, Decisions, Outcomes, Relationships, Operational Events, Memory, source records. | Durable identity/history under owning model; navigation and presentation cannot delete or duplicate it. |
| **IP-2 — Context persistent** | Focus, Working Set version, explicit intent, suspended context, return condition, delegation context, relevant neighborhood. | Preserved through the canonical Context Envelope and attributable history when consequential; revalidated on return. |
| **IP-3 — Projection persistent** | Global attention projection, current summaries, Rail orientation, bookmarks/retrieval references, authorized preferences. | Reconstructable from canonical inputs and explicit intent; may be cached but never become truth. |
| **IT-1 — Interaction transient** | Search results, filters, comparison arrangement, disclosure depth, ordinary Inspection, source preview, local ordering. | May disappear safely; creates no domain truth, authority, priority, lifecycle, or Memory event by itself. |
| **IT-2 — Recovery transient** | Candidate recovery target, validation state, stale-field list, indeterminate-act reconciliation. | Exists only while recovery is unresolved; chosen outcome updates the existing envelope/history, not a new container. |

## 5.3 Change boundary

Transient information must become persistent only through an explicit owning
interaction:

- a search result becomes Matter context only through deliberate Navigate;
- an inspected item changes Focus only through Adopt Focus;
- a comparison creates no Relationship or judgment without a separate act;
- a draft proposal becomes a canonical proposal through attributable admission;
- a candidate recovery target becomes active only through valid return/adoption;
- a practice insight enters production only through governed admission.

# 6. Information Ownership

## 6.1 Ownership dimensions

“Owner” has four distinct meanings:

| Ownership kind | Meaning |
|---|---|
| **Domain ownership** | Canonical model/source defines identity, state, governed state changes, and truth. |
| **Professional authority** | Human may perform a specific consequential act in scope and time. |
| **Information-space stewardship** | Space organizes representations and references without owning their truth. |
| **Technical custody** | System preserves, retrieves, validates, and projects without professional judgment. |

Information Architecture has only stewardship. It never confers the other three.

## 6.2 Space stewardship matrix

| Space | Domain/source owner | Professional authority | IA stewardship boundary |
|---|---|---|---|
| Workspace Scope | Identity/access/organization sources. | Valid organizational authority. | Expose scope and limitations; infer nothing. |
| Global Attention | Matter/event/intent sources plus Navigation Governance. | Owner resolves ties and ordinary intent. | Coordinate references; do not rank opaquely or own Matters. |
| Matter Context | Matter model and source histories. | Owner/delegate under Matter contract. | Maintain one boundary and orientation. |
| Current Understanding | Current Situation model. | Owner/explicit equivalent delegate. | Provide one primary representation and versioned references. |
| Matter Corpus / Workbench | Workbench canonical entities and sources. | Owner governs accepted meaning; contributors act in scope. | Organize complete corpus and active neighborhood without copies. |
| Decision | Product/domain Decision contract. | Authorized decision owner. | Preserve basis and Decision context; do not infer judgment. |
| Operational Transition | Product Operating Model plus source execution systems. | Decision/change/source authorities. | Coordinate references; never own execution. |
| Monitoring | Observation sources and interpretation/Outcome contracts. | Authorized interpreter/owner. | Compare references and intent; never infer Outcome. |
| Memory Inspection | Operational Memory. | Authorized historical viewer. | Read-only query/projection; no rewrite or reactivation. |
| Source Inspection | Owning source. | Source-specific access/act authority. | Preserve reference, version, limitation, and return. |
| Practice & Learning | Practice model/history. | Learner/facilitator in non-production scope. | Maintain explicit isolation from production. |
| Context Recovery | Canonical sources plus Context Envelope. | System reconstructs; human adopts ordinary intent. | Validate and offer; never fabricate continuity. |

# 7. Cross-Surface Consistency

## 7.1 Role allocation

A canonical object may appear simultaneously in several future surfaces only
when each occurrence declares one role:

| Role | Permitted content | Mutation boundary |
|---|---|---|
| **Primary** | Complete context required for current professional work, backed by owning source. | Consequential commands invoke the owning model with explicit authority. |
| **Secondary** | Purpose-specific summary retaining identity, type, state, currentness, provenance, and route to primary/inspection. | No independent state; any act resolves against the owning object. |
| **Reference** | Stable identity, semantic type, source/version/currentness, and relationship to current context. | Read-only pointer; cannot be edited into a copy. |
| **Inspection** | Temporary depth into the same object with provenance, history, neighborhood, origin, and return. | Grants no authority; separate acts create consequence. |

## 7.2 Simultaneous representation rules

1. One active professional context assigns one primary representation per
   canonical object.
2. Different actors may have different primary contexts but not different
   canonical truth from the same version/source.
3. Secondary representations state when they are summarized, stale, historical,
   simulated, or source-degraded.
4. Every occurrence resolves to the same stable identity.
5. A mutation through any occurrence revalidates authority and current version
   against the owning source.
6. Successful mutation updates projections from the recorded canonical event;
   it does not patch copies independently.
7. Concurrent or unavailable state produces conflict/degradation, never silent
   last-write ownership.
8. Inspection closes back to the preserved origin unless the user deliberately
   adopts a new context.

## 7.3 Canonical examples

- Current Situation is primary in IA-04, secondary in Matter/Workbench/Decision,
  and historical in IA-10.
- A Decision is primary in IA-07, referenced by Operational Transition and Monitoring, and
  inspected historically in IA-10.
- An Artifact resides in IA-05, participates in IA-06, supports Decision/Outcome
  by reference, and exposes its source in IA-11.
- Operational Memory remains the model; IA-10 may render many queries without
  becoming multiple Memories.
- Focus may be represented by Workbench, Rail, and Matter orientation, but all
  occurrences resolve to the one active Focus reference.

# 8. Context Continuity

## 8.1 Single-envelope rule

The existing canonical Context Envelope passes through all information spaces.
There is no information-space envelope, surface state container, panel context,
or local recovery object.

```text
Canonical sources + explicit professional intent + attributable history
                                  │
                                  ▼
                         Context Envelope
                                  │
     Workspace / Global / Matter / Workbench / Decision / Operational Transition
        / Monitoring / Memory / Source / Practice / Recovery
```

Each space reads and foregrounds applicable fields. No space owns or duplicates
them.

## 8.2 Space contribution

| Space family | Envelope fields foregrounded |
|---|---|
| Workspace / Global | Actor, workspace, access, selected Matter, attention basis, suspended contexts, intended return. |
| Matter / Current Understanding | Matter identity, owner/delegate, lifecycle posture, Current Situation version, material change, intent. |
| Corpus / Workbench | Working Set, Focus, inspected subject, evidence neighborhood, unresolved question, source conditions. |
| Decision | Decision question, basis versions, alternatives, authority, uncertainty, pending judgment, reconsideration. |
| Operational Transition | Decision intent, source-owned references, actors, dependencies, commitments, guardrails, deviations, monitoring handoff. |
| Monitoring | Baseline, observation contract, source versions, interval, authority, Outcome, residual uncertainty, next path. |
| Memory / Source Inspection | Historical query/source reference, versions, provenance, current-truth distinction, origin, return. |
| Practice | Practice identity, non-production provenance, attempt history, simulated authority, production boundary, return. |
| Recovery | Last valid context, delta, stale/unavailable fields, indeterminate acts, candidate target, validation result. |

## 8.3 Continuity test

Movement between spaces succeeds only when the manager can answer:

- What Matter or governed non-production context is this?
- Why am I in this information space?
- Which object is primary and who owns its truth?
- What is current, historical, proposed, simulated, or degraded?
- What changed since the origin context?
- What remains unfinished?
- What authority applies?
- Where can I return, and under what condition?

# 9. Information Boundaries

The architecture prohibits:

1. duplicated Current Situation identity or editable current synthesis;
2. duplicated Decision identity, rationale, or authority;
3. duplicated Authority or locally inferred permission;
4. duplicated primary Focus or competing Focus ownership;
5. duplicated Relationship identity or presentation-created semantics;
6. duplicated Operational Memory identity or independent timeline truth;
7. duplicated Context Envelope or per-space continuity containers;
8. duplicated Matter identity on reopening or recovery;
9. duplicated Artifact/source record through Collection, Working Set, comparison,
   or inspection;
10. copied source execution or observation records becoming local truth;
11. historical information impersonating current state;
12. secondary summary becoming independently editable canonical state;
13. reference becoming a detached object without source/version;
14. inspection becoming acceptance, Focus, or new residency;
15. navigation position becoming information ownership;
16. visual containment becoming domain containment;
17. proximity becoming Relationship;
18. lifecycle determining page-like mandatory residency;
19. absent/quiet information becoming deleted, resolved, rejected, or
   unimportant;
20. practice information crossing into production without governed admission.

# 10. Canonical Spatial Invariants

1. Information Architecture organizes canonical meaning; it owns no domain
   truth.
2. Every canonical object has one stable identity and one owning source.
3. Every canonical object has one defined primary information residency.
4. Multiple representations remain roles over one object, never copies.
5. Every occurrence resolves to stable identity, type, source, version, and
   currentness.
6. One Matter is one isolated professional information boundary.
7. Cross-Matter references never blend Working Sets, Focus, authority, or
   history.
8. Every active Matter has one Current Situation and one primary
   representation of it.
9. Earlier Current Situations are historical, not competing current centers.
10. Every active Matter has at most one owner-adopted primary Focus.
11. Focus representation may repeat for orientation but cannot fork.
12. Matter Corpus is complete in identity; active visibility remains selective.
13. Working Set references corpus objects and creates no copies.
14. Collection membership creates no ownership, truth, or active participation.
15. Evidence is a scoped role over canonical material, not a separate copied
    object.
16. Relationship semantics come only from the Relationship model, never spatial
    arrangement.
17. Decision has one identity and remains distinct from readiness, Operational Transition,
    execution, and Outcome.
18. Operational Transition coordinates references to source-owned change and never absorbs
    execution truth.
19. Monitoring preserves observation, interpretation, Outcome, and
    stabilization as separate information.
20. Operational Memory remains one append-only model, currently Ready for Final
    Canonical Review.
21. Memory Inspection is read-only and never reactivates historical state.
22. A timeline is a projection over Memory, not a second history.
23. Source Inspection preserves source authority, version, limitation, and
    return.
24. Workspace Scope supplies context but creates no navigation layer or
    authority.
25. Global Attention coordinates Matter references and creates no Matter truth.
26. Information-space existence derives from canonical objects or valid
    pre-object contracts, never from route or visibility.
27. Capability discoverability, space existence, command availability, and
    historical inspectability remain independent.
28. Persistent information may become visually quiet but never semantically
    absent.
29. Transient projections create no domain truth, lifecycle, authority,
    Evidence, Relationship, or priority.
30. Inspection preserves origin, neighborhood, and return.
31. Secondary representation cannot mutate independently of its owning source.
32. Updates propagate from canonical events, not copy-to-copy synchronization.
33. Stale, historical, simulated, disputed, and unavailable information remains
    explicitly qualified in every space.
34. Practice & Learning remains separate from production identity, authority,
    and history.
35. Context Recovery offers an existing valid space; it never becomes a new
    permanent destination.
36. The single canonical Context Envelope carries continuity through every
    information space.
37. No information space owns the Workbench-owned Context Envelope or duplicates
    its facts.
38. Authority is shown where consequential work occurs but is owned elsewhere.
39. Navigation coordinates movement among spaces and creates none of their
    canonical objects.
40. Any implementation that requires copied canonical truth to preserve layout
    is non-conforming.

# 11. Experience Validation

## IS-01 — Open a Matter

The manager begins in IA-02 Global Attention and adopts a Matter. IA-03 becomes
the professional boundary; IA-04 exposes the one current understanding or
pre-synthesis condition. No presentation transition creates Matter state.

## IS-02 — Investigate

The manager works in IA-06 Workbench Inquiry. IA-05 supplies stable Artifact and
Relationship identities; the Working Set references a relevant subset. IA-04
anchors accepted understanding and remains one object.

## IS-03 — Inspect source Evidence

From IA-06, the manager enters IA-11 Source Inspection. The source record remains
source-owned, the Artifact remains in IA-05, and its scoped Evidence role remains
attached to the claim. Return restores Workbench context.

## IS-04 — Compare Artifacts

Comparison is transient inside IA-06. Both Artifacts retain IA-05 identity and
provenance. Arrangement creates no Relationship, Collection, Evidence, or new
residency.

## IS-05 — Build a Hypothesis

The Hypothesis has canonical identity in IA-05 and active reasoning
representation in IA-06. Supporting and challenging material remain references
to the same corpus objects. Current Situation changes only through authorized
revision in IA-04.

## IS-06 — Prepare a Decision

The manager enters IA-07. The readiness basis references IA-04 and IA-05/06
versions. Decision question, alternatives, authority, and uncertainty become
primary; no copy of Evidence or Current Situation is created.

## IS-07 — Record a Decision

The canonical Decision's primary representation is IA-07. Matter context may
summarize it; IA-08 and IA-09 reference its intent; IA-10 later exposes its
history. All resolve to one Decision identity.

## IS-08 — Execution-free Decision

IA-08 does not exist when no Operational Transition is justified. IA-07 retains the Decision.
If observation is required, IA-09 exists from a valid observation contract;
otherwise the manager returns to IA-03.

## IS-09 — Coordinate change

IA-08 organizes Decision intent, dependencies, guardrails, and source-owned
action references. Execution remains in source systems and is inspected through
IA-11. IA-08 never becomes a project execution database.

## IS-10 — Monitor

IA-09 foregrounds observation contract, baseline, sources, guardrails, and
observations. Decision and Operational Transition remain references. Outcome Assessment
appears only after authorized interpretation.

## IS-11 — Adverse Outcome

IA-09 preserves the Outcome and basis. Navigation may enter IA-06, IA-07, or
IA-08 depending on the unresolved professional question. Each space references
the same Decision, sources, and Matter identity.

## IS-12 — Close a Matter

IA-03 records the Closed posture and disposition under the owning lifecycle.
Active spaces may quiet or cease current existence; their Decisions, Outcomes,
sources, and events remain inspectable through IA-10.

## IS-13 — Reopen a Matter

The same IA-03 Matter identity returns to Assessment. IA-10 supplies closure
history; IA-04 distinguishes prior understanding from current truth; a new
Focus/Working Set may be established without cloning earlier information.

## IS-14 — Delegate

IA-01 supplies validated actor/workspace context. IA-03 exposes current holder,
delegation source, scope, duration, and historical owner. Every operational space
references the same authority contract; none owns a local permission copy.

## IS-15 — Cross-Matter interruption

The displaced Matter's Context Envelope is suspended. IA-02 coordinates the new
attention claim; the interrupting IA-03 remains isolated. No corpus, Focus,
authority, or history crosses Matter boundaries.

## IS-16 — Return after interruption

IA-13 validates the prior envelope and change since departure, then returns the
manager to IA-06/07/08/09 as applicable. IA-13 disappears after resolution; it
does not retain a competing context.

## IS-17 — Recover after restart

IA-13 reconciles current sources, authority, history, stale fields, and
indeterminate acts. Stable identities persist; transient comparison/filter state
may disappear. The manager adopts an existing valid space, not a recreated page.

## IS-18 — Return after a week

IA-13 treats prior context as historical until validation. IA-10 supplies the
consequential delta; IA-04 supplies current truth. The selected destination uses
the single envelope with qualified assumptions.

## IS-19 — Retrospective

The manager enters IA-10. Decisions, Operational Transitions, Outcomes, rejections, and
corrections are historical projections. IA-10 cannot edit Memory or replace the
current Matter context.

## IS-20 — Timeline view

A temporal sequence is one projection inside IA-10. Events remain canonical
Memory identities. Another ordering or query does not create another timeline
truth or information space.

## IS-21 — Practice case

The manager enters IA-12 from Global. Practice objects and attempt history remain
non-production. Qualified production references retain source identities but
cannot import Authority, Evidence, Decision, or Outcome.

## IS-22 — Admit learning

A learning insight remains in IA-12 until an authorized production interaction
admits it. The result enters the appropriate production residency as a new
attributable reference/proposal, never as a copied accepted truth.

## IS-23 — Simultaneous representations

A Decision appears primary in IA-07, summarized in IA-03, referenced in IA-08/09,
and historical in IA-10. Every representation carries the same identity/version
and role; only owning commands can change it.

## IS-24 — Degraded source

IA-11 reports source unavailability. Every secondary representation qualifies
freshness/currentness. IA-13 may block recovery into consequential work, but no
space substitutes cached material as current truth.

## IS-25 — Quiet peripheral information

An Artifact leaves the Working Set and disappears from active Workbench
attention. It remains in IA-05 with identity, provenance, state, and retrieval.
Absence creates no archival, rejection, or deletion event.

## IS-26 — Inspect rejected proposal

The proposal remains in IA-05/10 with rejection and basis. Temporary inspection
does not reactivate it or create a current proposal. Source facts and current
understanding remain distinct.

# 12. Cross-Canonical Consistency

| Canonical model | Authority retained | Information Architecture conformance |
|---|---|---|
| **Artifact** | Durable identity, Matter scope, provenance, source reference, epistemic and lifecycle conditions. | IA-05 is primary residency; all active, Decision, Outcome, source, and historical uses remain roles over one Artifact. |
| **Relationship** | Identity, endpoints, semantics, provenance, confidence, acceptance, lifecycle. | IA-05 owns primary residency; every connector/traversal/reference resolves to it and spatial proximity creates nothing. |
| **Operational Memory (Ready for Final Canonical Review)** | Append-only events, ordering, attribution, correction, reconstruction. | IA-10 is read-only inspection only; timelines and histories never duplicate Memory. |
| **Canonical Matter Experience** | Professional journey, attention flow, continuity, confidence, authority, cognitive integrity. | Spaces preserve one Matter center, Focus/periphery/context, non-linear return, and proportional information. |
| **Canonical Product Operating Model** | Matter lifecycle, Product Zones, downstream Context Envelope requirements, and Decision/Operational Transition/Monitoring contracts. | IA spaces derive from canonical objects and pre-object contracts; residency creates no lifecycle, Zone, or Context Envelope. |
| **Canonical Operational Navigation** | Layers, navigation transitions, Rail, projected navigation state, recovery. | Navigation adopts and moves among spaces; IA defines their information responsibility but no routes. |
| **Operational Navigation Governance** | Priority, interruption, authority, provenance, history, degradation, recovery. | Global/Recovery spaces consume governance classifications and cannot create or obscure them. |
| **Canonical Visual Semantics (Candidate)** | Semantic inventory, dimensions, visual grammar, priority, persistence, ambiguity. | Primary/secondary/reference/inspection roles preserve semantic type, state, currentness, and ownership across representations. Candidate status grants no canonical authority. |
| **Canonical Operational Interaction Language (Candidate)** | Professional intents, authority, consequence, persistence, feedback, recovery. | Interactions act on owning objects through space roles; transient interactions cannot create residency or truth. Candidate status grants no canonical authority. |
| **Workbench Canonical Domain Model / Workbench Laws** | Matter, Current Situation, Artifact, Relationship, Hypothesis, Contradiction, Collection, Working Set, Memory, Proposal, Inspection, Context Envelope, Focus, Event, authority. | Residency rules map every entity to one primary space and preserve canonical containment, relationship, state, and authority boundaries. |

Information Architecture uses these models and changes none of them.

# 13. Readiness for Visual and Spatial Design

## 13.1 Canonical Visual System

**Ready.** The Visual System can assign semantic representation to thirteen
spaces and four cross-surface roles without inventing object ownership.

## 13.2 Dynamic Operational Rail

**Ready.** Rail may represent current space, Matter, Focus, authority, suspended
contexts, history access, and return. It remains Navigation representation, not
an information owner.

## 13.3 Sidebar

**Ready for design as an optional form.** A sidebar may represent Global,
Matter, retrieval, or secondary references. It cannot become the canonical
hierarchy, create residency, or collapse discoverability, existence, authority,
and history.

## 13.4 Workbench 2.0

**Ready.** IA-04/05/06 establish Current Situation, Corpus, Working Set, Focus,
Inspection, Evidence, reasoning, and source boundaries without prescribing a
surface arrangement.

## 13.5 Inspector

**Ready as a temporary representation role.** Inspection may deepen any eligible
object, preserves origin and return, and creates no second residency or
authority.

## 13.6 Panels

**Ready as optional composition forms.** A panel must declare which information
space and representation role it serves. Panel existence cannot imply object
existence, priority, ownership, or lifecycle.

## 13.7 Cards

**Ready as repeated representations.** Each card-like unit must resolve to a
canonical object and role. Repetition creates no priority, Collection, Working
Set, or duplicate state.

## 13.8 Timeline

**Ready as an IA-10 projection.** Temporal ordering preserves event identity,
source time, correction, current/historical distinction, and query context.

## 13.9 Context surfaces

**Ready.** A surface may compose multiple compatible spaces around one dominant
professional object. It must preserve space boundaries, role declarations,
Focus, authority, and return.

## 13.10 Responsive adaptation

**Ready at semantic level.** Adaptation may change simultaneity, disclosure,
ordering, or representation form. It cannot change residency, object identity,
primary/secondary/reference/inspection role, authority, currentness, or
recoverability. Information that cannot remain simultaneous becomes quiet or
sequential, never semantically lost.

## 13.11 Deterministic readiness gate

A proposed information architecture receives:

- **Pass** when every represented object maps to one primary residency and one
  role per occurrence, all references resolve to the owning source, the single
  Context Envelope preserves continuity, and every invariant passes;
- **Fail** when any arrangement duplicates Current Situation, Decision,
  Authority, Focus, Relationship, Memory, Context Envelope, or other canonical
  truth, or derives meaning from layout;
- **Not Applicable** only when the proposal contains no information in the
  reviewed canonical scope.

# 14. Risks

| Risk | Canonical control | Residual review need |
|---|---|---|
| Space-to-page collapse | Spaces are semantic boundaries and may coexist across forms. | M6 must avoid one-route/one-space assumptions. |
| Surface becoming information owner | Primary/secondary/reference/inspection are roles over canonical sources. | Component/data architecture must resolve every occurrence to stable identity/version. |
| Current Situation duplication | IA-04 is the one primary current representation; all others are summaries/references/history. | Editing flows must invoke one owning command and update from canonical event. |
| Local state becoming domain truth | Persistence classes isolate transient projection and context from canonical objects. | Client state must remain disposable and reconstructable. |
| Operational Memory becoming a timeline object | IA-10 is read-only; timeline is one query projection. | M6 must preserve correction, attribution, and current/history distinction across temporal views. |
| Source truth absorbed into Matter | IA-11 and source-reference rules preserve external ownership. | Integration failures/caches must expose version and availability. |
| Responsive adaptation deleting context | Semantic persistence is independent from simultaneous visibility. | Adaptation tests must prove retrieval, return, authority, and state survive reduced space. |
| Inspector becoming a second workspace | Inspection is a role with one subject, origin, context, and return. | Deep-detail designs must prevent competing primary centers. |
| Practice-to-production leakage | IA-12 has isolated identity/authority/history and governed admission. | Every production reference must preserve practice provenance. |
| Cross-surface synchronization drift | Projections update from canonical events, not one another. | Implementation must handle concurrency, staleness, and failure explicitly. |

# 15. Open Questions

None block the Canonical Visual System.

Concrete routes, layouts, responsive breakpoints, component composition, data
loading strategy, caches, view-state persistence, and implementation belong to
M6 and later work.

# 16. Architecture Verdict

```text
Ready for Canonical Visual System
```

The thirteen information spaces, primary residency matrix, persistence classes,
ownership boundaries, cross-surface roles, single-envelope continuity, forty
spatial invariants, and experience validations are sufficient to answer where
every professional object naturally lives without changing any canonical model.

## Recommendation

```text
Open M6 — Canonical Visual System
after final canonical review of this M5.8 document.
```

M6 may define concrete visual and responsive forms only by mapping them to the
spaces, residencies, roles, and invariants in this document.
