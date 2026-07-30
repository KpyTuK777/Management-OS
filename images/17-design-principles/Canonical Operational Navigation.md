# Canonical Operational Navigation

## Status

```text
Architecture & Product Design
Milestone M4
Canonical
Frozen v1.0
```

## Purpose

This document defines how an operational manager moves among professional
contexts throughout the life of a Matter. It is the canonical architecture of
professional movement, not a sitemap, menu, page hierarchy, route table, or
screen specification.

Navigation in Management OS is the coordination of professional attention. It
keeps the manager oriented to the right Matter, dominant operational object,
authority boundary, unfinished intent, and reliable return while canonical
domain models continue to own truth.

This document derives from:

- [Operational Navigation Governance](Operational%20Navigation%20Governance.md);
- [Canonical Product Operating Model](Canonical%20Product%20Operating%20Model.md);
- [Canonical Matter Experience](Canonical%20Matter%20Experience.md);
- [Workbench Canonical Domain Model](Workbench%20Canonical%20Domain%20Model.md);
- [Operational Dynamics](Operational%20Dynamics.md).

It creates no domain aggregate, lifecycle, authority model, Context Envelope,
history, Evidence, or execution truth. It defines no color, typography, spacing,
icon, layout, responsive behavior, CSS, framework, or implementation.

# 1. Navigation Philosophy

## 1.1 Canonical definition

Operational Navigation is the source-neutral coordination of professional
attention across authorized contexts.

It answers five questions at every meaningful movement:

1. Which Matter or professional context is active?
2. What object or question currently dominates attention?
3. Why is the manager here now?
4. What authority and canonical conditions govern the available work?
5. What must survive for return, recovery, or reconsideration?

Navigation coordinates the answers. The owning canonical models supply them.

## 1.2 Ownership boundary

Canonical Operational Navigation is the sole owner of navigation architecture:
layers, the navigation transition graph, projection state, Dynamic Operational
Rail semantics, and the navigation context model. It consumes the laws,
constraints, readiness gates, and attention/interruption/recovery governance
owned by Operational Navigation Governance.

Operational Navigation does not own or amend navigation laws. Operational
Navigation Governance does not own navigation architecture.

## 1.3 What Navigation is not

Navigation is not:

- an application information architecture projected onto professional work;
- a lifecycle wizard or forward-only sequence;
- a collection of pages, routes, tabs, menus, or shortcuts;
- a task-completion or engagement system;
- a source of Matter, Current Situation, Evidence, Decision, action, Outcome, or
  authority;
- an alternative Operational Memory or Context Envelope;
- a visual claim that location, selection, or activity means progression.

Routes and surfaces may later represent navigation. They never define its
meaning.

## 1.4 Unit of movement

The unit of navigation is a **professional context**, defined as:

```text
authorized actor
+ Matter or governed non-production scope
+ professional intent
+ dominant operational object
+ canonical state references
+ active Focus
+ relevant neighborhood
+ entry reason
+ recovery relationship
```

A context is valid only when these references can be established or their
absence is explicitly qualified. Moving to a location without preserving this
meaning is routing, not canonical navigation.

## 1.5 Three attention bands

Every context preserves the Matter Experience attention structure:

- **Focus** — the one owner-adopted question or object receiving professional
  work;
- **Periphery** — the smallest set of material conditions that could change that
  work;
- **Available context** — authorized history, evidence, alternatives, sources,
  and adjacent capabilities that remain retrievable without competing with
  Focus.

Navigation may change which context is active and which material conditions are
peripheral. It cannot manufacture Focus, truth, or authority.

# 2. Canonical Navigation Model

## 2.1 Layer decision

The canonical model has eight navigation layers:

1. Global;
2. Matter;
3. Workbench;
4. Decision;
5. Transition Layer;
6. Monitoring;
7. Operational Memory Inspection;
8. Practice & Learning.

The proposed **Workspace** layer is not adopted. Workspace identity and controls
are authority and configuration context within the Global layer; they are not a
professional object of movement.

The proposed **Closure** layer is not adopted. Closed is a canonical Matter
lifecycle posture. Closure disposition is handled in Matter context, and its
history remains inspectable through Operational Memory.

The canonical layer name is **Transition Layer**. Its dominant object is the
**Operational Transition** defined by
the Product Operating Model to relate Decision intent to source-owned change.

Layers are contexts, not mandatory pages. They may coexist for one Matter.
Lifecycle influences justified existence and emphasis but does not dictate a
linear route.

## 2.2 Layer contracts

### Layer L1 — Global

| Contract | Definition |
|---|---|
| Responsibility | Coordinate attention across authorized Matters and governed non-Matter contexts; enable retrieval and return. |
| Dominant object | An attention claim backed by canonical Matter state, event, authority, intent, or valid return condition. |
| Available commands | Retrieve/search authorized material; select a Matter deliberately; return to a preserved context; enter Practice & Learning; inspect workspace/identity controls. |
| Contextual boundary | Cross-Matter orientation only. It does not expose itself as movement inside a Matter or merge Matter contexts. |
| Entry conditions | Product entry; deliberate exit from a Matter; recovery without a valid active Matter; cross-Matter interruption; deliberate global retrieval. |
| Exit conditions | An authorized Matter or Practice & Learning context is deliberately adopted and its envelope is valid enough to enter. |
| Context Envelope relationship | Carries the origin, selected destination, selection reason, actor, intended return, and separate suspended Matter envelopes. It never creates a global substitute envelope. |

### Layer L2 — Matter

| Contract | Definition |
|---|---|
| Responsibility | Preserve one Matter's identity, owner, canonical posture, Current Situation, consequential lineage, and available operational contexts. |
| Dominant object | The canonical Matter, with the current accepted situation or explicit pre-synthesis condition. |
| Available commands | Inspect Matter identity, Current Situation, state and history; adopt a justified subcontext; propose or execute authorized lifecycle acts; close or reopen when canonical prerequisites pass. |
| Contextual boundary | One Matter only. Cross-Matter facts remain references and cannot blend Working Sets, Focus, authority, or history. |
| Entry conditions | Authorized selection, admission of a new Matter, return or recovery, interruption disposition, delegation, or valid reopening. |
| Exit conditions | Deliberate global return, adoption of a Matter subcontext, transfer outside authority, closure with no active work, or interruption into another Matter. |
| Context Envelope relationship | Establishes the Matter identity, owner/delegate, authoritative posture, Current Situation reference, professional intent, active/suspended Focus, and return relationship. |

### Layer L3 — Workbench

| Contract | Definition |
|---|---|
| Responsibility | Reduce uncertainty and build or revisit operational understanding without owning the Matter or accepted synthesis. |
| Dominant object | Working Set and active Focus around the Current Situation. |
| Available commands | Capture or inspect Artifacts; traverse existing Relationships; develop Hypotheses; expose Contradictions; change Working Set participation; enter/leave Inspection; prepare Decision readiness; review Watson proposals. |
| Contextual boundary | Investigation and understanding inside one Matter. It does not execute change, accept judgment automatically, or replace Current Situation authority. |
| Entry conditions | Investigative work is justified; accepted understanding requires re-examination; a contradiction, adverse Outcome, recurrence, or source change returns the Matter to inquiry. |
| Exit conditions | Owner deliberately returns to Matter; a material decision question is ready; investigation is deferred or closed; a governed interruption suspends Focus. |
| Context Envelope relationship | Preserves Current Situation version, Working Set version, Focus, inspected subject, unresolved question, evidence neighborhood, pending judgment, and exact return condition. |

### Layer L4 — Decision

| Contract | Definition |
|---|---|
| Responsibility | Support and preserve accountable judgment without conflating readiness, proposal, authority, and Decision. |
| Dominant object | Decision question and readiness basis before judgment; canonical Decision after authorized judgment. |
| Available commands | Inspect basis, alternatives, consequences, uncertainty, dissent, and authority; record an authorized Decision; defer; return for investigation; inspect historical Decisions. |
| Contextual boundary | Judgment only. It does not report execution, create an Operational Transition automatically, or convert a Watson proposal into acceptance. |
| Entry conditions | A material decision question exists, sufficient readiness is claimed, reconsideration is required, or a historical Decision is deliberately inspected. |
| Exit conditions | Authorized Decision; explicit deferral; return to Workbench; no-action disposition; execution-free disposition; approved Decision-to-Operational-Transition handoff. |
| Context Envelope relationship | Carries Matter, Current Situation and evidence basis versions, decision question, alternatives, authority, accepted uncertainty, pending judgment, origin Focus, and return/reconsideration path. |

### Layer L5 — Transition Layer

| Contract | Definition |
|---|---|
| Responsibility | Relate authoritative Decision intent to coordinated, source-owned change while preserving guardrails and reconsideration. |
| Dominant object | Operational Transition grounded in an authoritative Decision and intended operating condition. |
| Available commands | Inspect Impact Review; coordinate approved adaptations, owners, dependencies, commitments, guardrails, and deviations; reference source-owned execution; pause, stop, or request reconsideration where authorized; hand off to Monitoring. |
| Contextual boundary | Coordination only. Source systems own every execution mutation; activity and completion do not establish Outcome. |
| Entry conditions | The full Decision-to-Operational-Transition handoff exists: Decision, intended condition, approved adaptations where needed, source ownership, guardrails, accepted risk, execution references or commitment boundary, and monitoring requirement or justified exception. |
| Exit conditions | Monitoring contract is valid; execution-free Decision bypasses the layer; authorized pause/stop; Decision reconsideration; return to Matter after coordination. |
| Context Envelope relationship | References Decision intent, approved adaptations, source-owned action identities, responsible actors, dependencies, guardrails, deviations, unresolved change, monitoring handoff, and return path without copying source state. |

### Layer L6 — Monitoring

| Contract | Definition |
|---|---|
| Responsibility | Compare observed operation with intended condition and support governed Outcome, stabilization, reconsideration, or closure. |
| Dominant object | Approved observation contract before evaluation; canonical Outcome Assessment after authorized interpretation. |
| Available commands | Inspect baseline, measures, sources, intervals, guardrails, observations, drift, adverse effects, and prior Outcomes; record authorized assessment; continue observation; return for investigation, Decision, or adaptation; propose stabilization or closure. |
| Contextual boundary | Observation and interpretation of effect. It does not infer success from action completion, adoption, activity, or UI state. |
| Entry conditions | Observable conditions exist and monitoring is required or justified; an execution-free Decision still requires observation; a historical Outcome is inspected. |
| Exit conditions | Continued interval; Outcome Assessment; stabilized condition; adverse or inconclusive return; authorized closure disposition; deliberate Matter return. |
| Context Envelope relationship | Carries Decision and intended condition, baseline, observation contract, source versions, guardrails, interpretation authority, uncertainty, Outcome reference, next interval, and return/reconsideration path. |

### Layer L7 — Operational Memory Inspection

| Contract | Definition |
|---|---|
| Responsibility | Retrieve and explain consequential history across all Matter contexts without owning current truth. |
| Dominant object | A query or projection over Operational Memory events from the Canonical model. |
| Available commands | Inspect event provenance, prior contexts, rejected paths, revisions, Decisions, Operational Transitions, Outcomes, interruptions, and corrections; return to the originating current context. |
| Contextual boundary | Read-only historical inspection. It cannot reactivate a state, accept a claim, mutate Memory, or replace the present canonical object. |
| Entry conditions | The manager requests history; current reasoning requires provenance; recovery requires reconstruction; a consequential change must be explained. |
| Exit conditions | The historical question is answered, source access prevents further inspection, or the manager deliberately adopts another valid context. |
| Context Envelope relationship | Preserves the current context as return target and adds query, event range, historical baseline, inspected event/object, source availability, and distinction between historical and current truth. |

### Layer L8 — Practice & Learning

| Contract | Definition |
|---|---|
| Responsibility | Support simulation, retrospective learning, and practice without production authority leakage. |
| Dominant object | Attributable practice case, retrospective question, or simulation attempt. |
| Available commands | Enter a governed learning case; inspect permitted references; run or resume an attempt; compare reasoning; record learning history; return to Global or the original production context. |
| Contextual boundary | Explicitly non-production unless a separate authorized admission act occurs. Simulated Evidence, Decisions, Outcomes, and authority never become production truth through navigation. |
| Entry conditions | Deliberate user intent, authorized learning scope, visible simulation/provenance status, and valid separation from production context. |
| Exit conditions | Attempt completion, deferral, abandonment, source degradation, or deliberate return; any production admission follows its owning canonical contract. |
| Context Envelope relationship | Uses the canonical continuity contract with practice identity, provenance, attempt history, non-production authority boundary, source references, and return target. It does not reuse a production envelope without explicit separation. |

# 3. Dynamic Operational Rail

## 3.1 Canonical definition

The Dynamic Operational Rail is the persistent representation of current
professional navigation context. It is an orientation model, not a sidebar,
route list, lifecycle tracker, or command palette.

The Rail answers:

```text
Where is professional attention?
What remains stable?
What is dominant now?
What material context is peripheral?
What can be returned to?
```

Its later visual implementation may use a sidebar or other surface. No surface
is canonical in this document.

## 3.2 Stable orientation

The Rail always preserves or makes recoverable:

- Operational Attention / Global return;
- Matters and authorized retrieval;
- active Matter identity when a Matter is active;
- owner or valid delegate and workspace context;
- canonical Matter posture;
- Current Situation or explicit pre-synthesis condition;
- active layer and dominant object;
- Operational Memory access;
- active Focus and reliable return target;
- source degradation, authority limitation, and unresolved protective condition
  when material.

“Always” means semantically persistent, not visually simultaneous.

## 3.3 Dynamic emphasis

Rail emphasis changes only when at least one of these changes materially:

- active professional context;
- explicit owner intent;
- active Focus or inspected subject;
- canonical lifecycle posture;
- valid authority or delegation;
- existence of a canonical Zone or pre-object contract;
- justified Attention Priority;
- governed interruption class;
- material source freshness, contradiction, dependency, guardrail, or Outcome;
- a preserved context is suspended, resumed, superseded, or completed.

Clicks, recency, hover, unread counts, activity volume, route changes, animation,
and task completion do not independently change emphasis.

## 3.4 Dependency dimensions

| Dimension | Rail consequence |
|---|---|
| Always present | Global return, Matter retrieval, identity/authority orientation, search, Memory access, recovery visibility. |
| Matter-dependent | Matter identity, Current Situation, Workbench, Decision, Operational Transition, Monitoring, closure/reopen, Matter Memory. |
| Lifecycle-dependent | Context existence and emphasis may change, but capability discoverability, command availability, and historical inspectability remain separate. |
| Intent-dependent | One dominant object and active Focus receive emphasis; deliberate inspection can temporarily deepen context without changing lifecycle. |
| Authority-dependent | Commands and protected information may be unavailable; absence of authority is visible and never inferred from presence. |
| Focus-dependent | Working neighborhood and return target adjust to the active question; stable Matter identity and accepted present remain recognizable. |

## 3.5 Rail change contract

Every Rail change must identify:

1. the canonical input that changed;
2. whether the change affects context, emphasis, command availability, or
   historical inspectability;
3. the responsible source and evaluation time;
4. the active and displaced Focus;
5. whether owner adoption or deterministic protective policy was required;
6. the recovery target;
7. whether the previous representation remains historically inspectable.

Rail movement never changes canonical state.

# 4. Canonical Navigation Transition Graph

## 4.1 Graph

```text
┌─────────────────────────┐
│ Practice & Learning     │
│ non-production boundary │
└───────────↕─────────────┘
            │
┌───────────┴──┐      select / return      ┌──────────────┐
│ Global       │ ⇄──────────────────────── │ Matter       │
│ Attention    │                           │ continuity   │
└──────────────┘                           └───┬──┬──┬───┘
                                                │  │  │
                         investigate / revisit  │  │  │ inspect history
                                                ↓  │  ↓
                                         ┌───────────┐   ┌──────────────────┐
                                         │ Workbench │ ⇄ │ Operational      │
                                         └─────┬─────┘   │ Memory Inspection│
                                               │         └─────────↕────────┘
                                   readiness / │                   │
                                  reconsider   ↓                   │
                                         ┌───────────┐             │
                                         │ Decision  │ ⇄───────────┘
                                         └──┬─────┬──┘
                            change required │     │ execution-free /
                                            ↓     │ observation required
                                      ┌──────────┐│
                                      │Operational Transition│
                                      └────┬─────┘
                                           │ monitoring handoff
                                           ↓
                                      ┌──────────┐
                                      │Monitoring│
                                      └─┬──┬──┬──┘
                        adverse/inconcl. │  │  │ stabilized disposition
                               ┌────────┘  │  └──────────────→ Matter / Closed
                               ↓           │ reconsider/adapt
                          Workbench ←──────┴──────→ Decision / Operational Transition

Any active Matter context ⇄ Operational Memory Inspection.
Any governed interruption may suspend one context and enter Global or another
Matter context while preserving separate envelopes and a reliable return.
Closed remains a Matter posture; reopening returns the same Matter to Assessment.
```

This graph expresses permitted professional movement, not mandatory progression.

## 4.2 Navigation transition contracts

| ID | Navigation transition | Reason | Prerequisite | Authority | Continuity and recoverability |
|---|---|---|---|---|---|
| **NT-01** | Global → Matter | Deliberate selection, valid attention claim, recovery, or interruption. | Authorized Matter identity and sufficient fresh context. | Owner/delegate selection or bounded protective policy. | Create no new envelope; restore or reconstruct the Matter envelope and preserve Global origin. |
| **NT-02** | Matter → Global | Compare attention, retrieve another Matter, or end current session. | Current intent and unfinished work can be preserved or reported missing. | Owner/delegate; system may recover globally after failure. | Suspend rather than discard Matter context; keep separate return conditions. |
| **NT-03** | Matter → Workbench | Reduce uncertainty or revisit understanding. | Investigative question, contradiction, recurrence, adverse result, or justified inspection need. | Owner/delegate adopts Focus; Watson may propose. | Carry Matter, Current Situation, Working Set, question, source state, and return. |
| **NT-04** | Workbench → Matter | Pause, defer, or finish the current investigative context. | Unfinished intent and disposition are explicit. | Owner/delegate. | Preserve Focus status, unresolved question, last meaningful act, and next justified return. |
| **NT-05** | Workbench → Decision | A material judgment is sufficiently prepared. | Decision question, readiness basis, alternatives, uncertainty, and authority condition. | Authorized human adopts Decision context. | Preserve traceable evidence basis, dissent, Current Situation version, and Workbench return. |
| **NT-06** | Decision → Workbench | Evidence, contradiction, uncertainty, or adverse result makes judgment premature or invalid. | Attributable reason for reconsideration. | Decision owner or valid delegate; Watson/system may recommend or flag. | Retain the question, prior basis, unresolved gap, and reason for return. |
| **NT-07** | Decision → Operational Transition | An authoritative Decision requires source-owned change. | Complete Decision-to-Operational-Transition handoff defined by the Product Operating Model. | Accountable decision owner. | Carry Decision intent and guardrails by reference; preserve Decision return; never report execution. |
| **NT-08** | Decision → Monitoring | Execution-free Decision or immediate observation obligation. | Intended condition and valid observation contract; explicit reason an Operational Transition is absent. | Decision owner and applicable interpretation authority. | Preserve Decision basis, baseline, sources, expected condition, and reconsideration path. |
| **NT-09** | Decision → Matter | No-action disposition, deferral, or Decision inspection ends. | Attributable disposition and any return trigger. | Authorized decision owner for judgment; viewer for historical exit. | Preserve Decision, rationale, uncertainty, and future trigger. |
| **NT-10** | Operational Transition → Monitoring | Effects can or must be observed. | Observation contract, baseline, measures/sources, interval, guardrails, interpretation authority. | Authorized handoff; source owners retain execution authority. | Carry Decision intent and source references without copying execution state. |
| **NT-11** | Operational Transition → Decision | Impact, deviation, authority, or feasibility requires reconsideration. | Material attributable condition invalidates or exceeds authorized intent. | Responsible owner or bounded protective rule may suspend; only authorized human decides. | Preserve execution facts, deviations, unfinished commitments, and prior Decision. |
| **NT-12** | Monitoring → Workbench | Outcome is adverse/inconclusive or understanding is invalidated. | Attributable observation and unresolved explanatory question. | Authorized owner adopts investigation; policy may interrupt protectively. | Carry baseline, observation, Outcome, uncertainty, and original intended condition. |
| **NT-13** | Monitoring → Decision | Observations require reconsidering intent or accepted risk. | Material Outcome or guardrail evidence and a defined decision question. | Authorized decision owner. | Preserve the full observation basis and prior Decision history. |
| **NT-14** | Monitoring → Operational Transition | Approved intent remains valid but adaptation is required. | Authorized adaptation within scope or a revised Decision where scope is exceeded. | Applicable owner/delegate and source authority. | Preserve deviation, adaptation authority, guardrails, and monitoring return. |
| **NT-15** | Monitoring → Matter / Closed | Stabilized, no-current-work, or other supported final disposition. | Outcome and closure criteria are inspectable; residuals and return triggers recorded. | Accountable owner. | Closure quiets attention but retains Matter identity, history, sources, and reopen condition. |
| **NT-16** | Closed Matter → Matter / Assessment | Material recurrence or new information justifies current work. | Valid reopen trigger, current authority, and freshness validation. | Authorized human. | Reuse Matter identity; join prior closure, residuals, trigger, current context, and new Focus. |
| **NT-17** | Matter context → Memory Inspection | Provenance, history, recovery, or explanation is needed. | Authorized historical query and available source/retention scope. | Authorized viewer; inspection grants no domain authority. | Preserve the current context as return target; distinguish historical baseline from present truth. |
| **NT-18** | Memory Inspection → originating context | Historical question is answered or inspection ends. | Origin remains valid or a qualified alternative exists. | Viewer deliberately returns. | Restore the preserved context and expose any material change discovered during inspection. |
| **NT-19** | Global → Practice & Learning | Deliberate practice, simulation, or retrospective. | Visible non-production scope, provenance, and authority separation. | Authorized learner/facilitator. | Preserve Global or production return without importing production authority. |
| **NT-20** | Practice & Learning → Global / production context | Learning ends or an authorized production follow-up is needed. | Attempt disposition; production admission uses a separate owning-model act. | Learner may exit; production owner authorizes any admission. | Retain practice history and separation; restore the original production envelope only after freshness checks. |
| **NT-21** | Any active context → interrupted context | A concern qualifies under exactly one interruption class. | Complete canonical interruption test and preserved displaced Focus. | Deterministic protective enforcement or authorized owner adoption. | Suspend the displaced envelope; preserve basis, unfinished intent, class, disposition, and reliable return. |
| **NT-22** | Interrupted context → prior context | Interrupting concern is disposed and return remains valid. | Freshness, authority, and change-since-departure checks. | Owner/delegate adopts return; system may offer restoration. | Restore meaning, not location; show what changed and revalidate affected assumptions. |

# 5. Persistent and Dynamic Navigation

| Navigation concern | Persistent contract | Dynamic projection |
|---|---|---|
| Global orientation | Authorized Matter retrieval, Global return, identity/workspace context. | Attention claims and valid return targets. |
| Matter identity | Stable identity and isolation from admission through reopening. | Owner, delegate, posture, Current Situation reference, material change. |
| Capability discoverability | Fundamental capabilities and their conditions remain learnable. | Emphasis changes with intent and justified operational need. |
| Zone existence | Derived only from canonical object or valid pre-object contract. | Workbench, Decision, Operational Transition, and Monitoring instances appear or become historical. |
| Command availability | Requires actor authority, lifecycle prerequisites, and canonical inputs. | Recomputed when authority, state, source validity, or object conditions change. |
| Historical inspectability | Consequential contexts remain inspectable subject to access and retention. | Current query, event range, and source availability. |
| Focus | At most one owner-adopted primary Focus per active Matter. | Active, suspended, transferred, abandoned, or resumed intent. |
| Authority | Owned by canonical actor/source contracts. | Current holder, delegation basis, scope, duration, effective time, limitations. |
| Lifecycle | Owned by the Matter lifecycle. | Navigation emphasis and justified context existence; never state mutation. |
| Recovery | A reliable target and qualified history are preserved. | Best valid target after freshness, source, authority, or topology changes. |

# 6. Navigation State Projection

## 6.1 Definition

Navigation state is a disposable, reconstructable projection over canonical
Matter state, actor authority, Context Envelopes, Operational Memory, source
availability, explicit intent, and navigation governance classifications.

It is not a domain aggregate, repository of professional truth, lifecycle
record, authority source, or second history. Rebuilding it cannot change
canonical meaning.

## 6.2 Projection fields

| Field | Projection meaning | Canonical basis | Invalid behavior |
|---|---|---|---|
| **Active context** | The professional context currently adopted for the actor. | Explicit intent, Matter identity, Focus, layer, dominant object, authority, valid envelope. | Treating route or selection alone as adoption. |
| **Previous context** | The context directly displaced by deliberate movement. | Preserved origin and attributable navigation transition. | Using browser history as professional history. |
| **Recovery target** | The best valid context for resumption and its return condition. | Context Envelope, interruption disposition, freshness and authority checks. | Restoring a location without meaning or after invalidation. |
| **Navigation history** | Inspectable sequence of consequential context changes. | Operational Memory and source histories; navigation events remain references/projections. | Creating a parallel authoritative timeline. |
| **Bookmarked contexts** | Owner-declared retrieval references with stated purpose. | Stable identities, explicit intent, access, source versions where needed. | Treating a bookmark as priority, acceptance, current truth, or authority. |
| **Suspended contexts** | Separate unfinished contexts awaiting safe return, transfer, or abandonment. | Context Envelopes, active/suspended Focus, interruption history, owner disposition. | Blending Matters or inferring abandonment from age. |

## 6.3 Projection validity

The projection is valid only when:

- every referenced canonical identity resolves or is visibly unavailable;
- the active actor's authority is current and attributable;
- the Context Envelope passes its freshness requirements;
- active and suspended contexts remain Matter-isolated;
- historical context is distinguishable from current truth;
- priority and interruption classifications cite their policy and inputs;
- non-derivable intent is explicit or marked missing;
- rebuilding from the same inputs produces the same navigation classification.

On invalidity, Navigation preserves the last known context as history, exposes
the limitation, and chooses the least disruptive safe posture. It never repairs
missing truth by inference.

# 7. Context Continuity Across Layers

## 7.1 Single-envelope rule

The canonical Context Envelope passes through every layer. Each navigation transition
selects and qualifies relevant fields from the one contract; no layer owns a
container, copied payload, or substitute context model.

```text
Canonical state + explicit intent + attributable history
                           │
                           ▼
                  Context Envelope
                           │
       ┌───────────┬───────┼────────┬──────────┐
       ▼           ▼       ▼        ▼          ▼
     Matter    Workbench  Decision Operational Transition Monitoring
       │           │       │        │          │
       └───────────┴───────┴────────┴──────────┘
                           │
              Memory inspection / recovery
```

Global and Practice & Learning use the same continuity contract with their
applicable scope and explicit production boundary.

## 7.2 Layer-specific emphasis

| Layer | Envelope emphasis added or foregrounded |
|---|---|
| Global | Actor/workspace, attention basis, selected Matter, suspended contexts, intended return. |
| Matter | Matter identity, owner/delegate, lifecycle posture, Current Situation, professional intent. |
| Workbench | Working Set, Focus, inspected subject, unresolved question, evidence neighborhood. |
| Decision | Decision question, readiness basis, alternatives, authority, uncertainty, pending judgment. |
| Operational Transition | Decision intent, intended condition, source-owned execution references, dependencies, guardrails, deviations. |
| Monitoring | Baseline, observation contract, sources, interval, interpretation authority, Outcome, reconsideration. |
| Memory Inspection | Historical query, event range, baseline, inspected event, current-truth distinction, return target. |
| Practice & Learning | Practice identity, non-production provenance, attempt history, authority separation, production return. |

These are views of continuity requirements, not separate schemas.

## 7.3 Movement protocol

Every consequential movement:

1. validates destination identity, existence, access, and authority;
2. records origin, destination, reason, actor, and time;
3. preserves or explicitly disposes unfinished Focus;
4. carries the minimum relevant canonical references;
5. states whether the destination is current, historical, simulated, stale, or
   degraded;
6. establishes a reliable return or explains why none is valid;
7. records the navigation transition through the owning history contracts;
8. revalidates changed assumptions before irreversible or authoritative work.

# 8. Cross-Canonical Consistency

| Canonical model | Authority retained | Navigation conformance |
|---|---|---|
| **Artifact** | Identity, provenance, Matter scope, source reference, epistemic and lifecycle conditions. | Navigation retrieves or foregrounds qualified Artifacts; it never creates or promotes Evidence. |
| **Relationship** | Semantics, endpoints, provenance, confidence, acceptance, lifecycle. | Navigation traverses existing Relationships; proximity, sequence, and movement remain non-semantic. |
| **Operational Memory (Canonical)** | Append-only consequential history, correction, attribution, reconstruction. | Navigation queries and references Memory; its projection never becomes a parallel timeline. |
| **Canonical Matter Experience** | Professional journey, attention flow, cognitive integrity, continuity, confidence. | Navigation preserves Focus/periphery/context and supports non-linear returns without owning the journey. |
| **Operational Navigation Governance** | Priority, interruption, recovery, authority, provenance, and degradation laws. | Every navigation transition, Rail change, recovery, and projection must conform to NAV-01 through NAV-33. |
| **Canonical Product Operating Model** | Matter lifecycle, Product Zones, zone-existence contracts, downstream cross-zone Context Envelope requirements, Decision-to-Operational-Transition handoff. | Layers and navigation transitions derive from canonical Zones and lifecycle prerequisites; Navigation creates neither. |
| **Workbench Canonical Domain Model / Workbench Laws** | Matter, Current Situation, Artifact, Relationship, Working Set, Focus, Inspection, Context Envelope, Operational Event, actors and authority. | Workbench navigation preserves these identities and powers; selection or activity never mutates them. |
| **Operational Dynamics** | Stable Focus, Inspection behavior, context preservation, quiet periphery, attributable motion. | Navigation keeps movement consequential and recoverable, avoiding constant rearrangement or competing centers. |

Navigation owns only navigation-level coordination of professional attention. It
does not own professional judgment, human Focus authority, domain truth,
lifecycle, Evidence, source execution, Operational Memory, or the Context
Envelope.

# 9. Canonical Experience Journeys

## J-01 — New Matter

1. Global receives an attributable signal; signal presence alone is not Matter
   admission.
2. An authorized human admits or opens the Matter under the canonical lifecycle.
3. Navigation enters Matter with identity, origin, owner, pre-synthesis
   condition, immediate consequence, and return to Global.
4. Assessment determines whether Workbench investigation, proportionate action,
   or no-current-work disposition is justified.
5. Navigation never manufactures Current Situation, priority, or progression.

## J-02 — Return after one hour

1. The Matter context is suspended with exact Focus, last meaningful act,
   unresolved question, and return condition.
2. On return, Navigation validates material changes and restores the same Matter
   context if still valid.
3. The manager sees what changed and resumes professional intent, not merely the
   prior location.

## J-03 — Return after one week

1. Navigation treats the prior envelope as historical until ownership,
   authority, sources, priority, deadlines, dependencies, and guardrails are
   revalidated.
2. It presents baseline, consequential delta, and current truth separately.
3. Stale assumptions cannot support irreversible work.
4. The owner adopts the validated recovery target or deliberately chooses
   another context.

## J-04 — Delegated Matter

1. Matter navigation exposes the current authority holder, delegation source,
   scope, duration, effective time, and historical owner.
2. The delegate enters only contexts and commands within scope.
3. Prior intent remains attributed; the receiving human explicitly adopts or
   revises current intent.
4. Presence, activity, or selection never implies authority.

## J-05 — Reopened Matter

1. A material recurrence or new information creates an attributable reopen
   proposal.
2. Authorized reopening retains Matter identity and complete history.
3. Navigation enters Matter in Assessment with prior closure, residual
   conditions, new trigger, current authority, and a new explicit Focus.
4. Prior Workbench, Decisions, Operational Transitions, and Outcomes remain historical, not
   silently current.

## J-06 — Interrupted investigation

1. A qualifying event passes the canonical interruption test and belongs to one
   class.
2. Navigation suspends Workbench with Working Set, inspected object, unfinished
   reasoning, pending change, and reliable return.
3. The interrupting Matter/context remains isolated and records its basis.
4. After disposition, Navigation validates what changed and restores meaning,
   not route position.

## J-07 — Monitoring and adverse Outcome

1. Navigation enters Monitoring only with a valid observation contract.
2. Source-owned observations remain distinct from authorized interpretation.
3. An adverse Outcome retains Decision intent, baseline, observations,
   uncertainty, and authority.
4. The owner deliberately returns to Workbench, Decision, or Operational Transition
   according to the unresolved professional question.
5. Monitoring never infers success or closure from completed activity.

## J-08 — Simultaneous Matters

1. Global projects attributable Attention Priority across Matters.
2. Equal claims remain honest; the owner resolves a genuine tie.
3. Entering one Matter suspends, rather than merges, the others.
4. Each Matter retains a separate envelope, Focus, authority, history, and return
   condition.
5. Weak-signal volume cannot capture attention.

## J-09 — Decision requiring change

1. Workbench hands a traceable readiness basis to Decision.
2. The authorized owner records Decision, rationale, uncertainty, and intended
   condition.
3. An Operational Transition exists only when the full handoff contract passes.
4. Navigation references source-owned action and execution records without
   copying them.
5. Monitoring begins from a valid observation contract and preserves a Decision
   reconsideration path.

## J-10 — Execution-free Decision

1. The owner makes an authoritative Decision that requires no Operational Transition.
2. Navigation records why execution is absent.
3. If observation is required, it enters Monitoring directly with intended
   condition and baseline.
4. Otherwise it returns to Matter with the Decision, disposition, and future
   trigger preserved.

## J-11 — Retrospective

1. The manager enters Operational Memory Inspection from a current or closed
   Matter.
2. Navigation preserves the originating context and makes the historical query
   explicit.
3. Prior Decisions, rejected paths, adaptations, Outcomes, and corrections
   remain attributed and distinct from present truth.
4. Exiting inspection returns to the originating valid context without
   reactivating history.

## J-12 — Practice case

1. Global enters Practice & Learning through a visible non-production boundary.
2. The practice case preserves its own identity, provenance, attempt history,
   and simulated authority.
3. Production references remain read-only and qualified.
4. Finishing practice returns to Global or a preserved production context.
5. No simulated Evidence, Decision, Outcome, or judgment enters production
   without a separate authorized canonical act.

# 10. Navigation Invariants

## 10.1 Navigation Laws

No new Navigation Law is required. NAV-01 through NAV-33 in Operational
Navigation Governance completely govern the model in this document.

## 10.2 Derived operational invariants

These invariants operationalize existing canonical contracts. They do not claim
new governance ownership.

1. Navigation coordinates professional attention; it does not define application
   structure.
2. A professional context is identified by meaning, object, intent, authority,
   and continuity—not by route.
3. The Matter remains the stable unit of operational management.
4. Cross-Matter movement never blends Focus, Working Set, authority, history, or
   Context Envelopes.
5. Every active Matter has at most one owner-adopted primary Focus.
6. Global, Matter, and recovery orientation remain available even when visually
   peripheral.
7. Lifecycle posture influences justified context but never dictates a
   forward-only path.
8. Navigation movement never changes lifecycle.
9. Capability discoverability, Zone existence, command availability, and
   historical inspectability remain orthogonal.
10. A visible or selected context grants no command authority.
11. Presence, activity, completion, and location imply neither acceptance nor
    progression.
12. Decision readiness is not Decision authority.
13. An Operational Transition exists only after a valid authoritative handoff.
14. Execution truth remains source-owned.
15. Monitoring compares observed operation with intent and never infers Outcome
    from activity.
16. Closure is a Matter posture, not a navigation destination that erases work.
17. Reopening preserves Matter identity and complete history.
18. Operational Memory Inspection is historical and read-only; it never
    reactivates context.
19. Navigation state is a reconstructable projection, never an aggregate or
    source of truth.
20. The single canonical Context Envelope carries continuity through every
    layer.
21. Non-derivable professional intent is preserved explicitly or reported
    missing.
22. Every consequential movement preserves an attributable origin, destination,
    reason, active or suspended Focus, and reliable return.
23. Recovery restores meaning and validates change; it never restores location
    alone.
24. Stale, disputed, inferred, degraded, and unavailable context remains
    qualified.
25. Interruption classification is exclusive, proportionate, attributable, and
    recoverable.
26. Weak-signal volume and UI prominence do not manufacture priority.
27. Rail emphasis follows canonical consequence and explicit intent, never
    transient behavior.
28. Practice & Learning remains visibly separate from production authority and
    truth.
29. Watson may recommend navigation but cannot adopt Focus, Decision, authority,
    or production truth.
30. Any implementation that cannot preserve these invariants is non-conforming
    regardless of visual quality.

# 11. Readiness for Visual Design

## 11.1 Dynamic Operational Rail

**Sufficient.** Visual design now has:

- stable orientation semantics;
- eight canonical layers;
- persistent versus dynamic dimensions;
- authoritative change triggers;
- active, peripheral, historical, suspended, and degraded conditions;
- Rail change and return contracts.

Visual design must still choose representation without treating the Rail as a
lifecycle wizard or state authority.

## 11.2 Sidebar

**Sufficient for exploration, not canonical as a form.** A sidebar may represent
some Global, Matter, retrieval, or Rail concerns, but this document neither
requires nor canonizes one. Its design must demonstrate that stable orientation,
contextual emphasis, command authority, and historical availability are not
collapsed into a single visible/enabled/active state.

## 11.3 Navigation surfaces

**Sufficient.** Designers can derive surfaces from layer responsibilities,
dominant objects, entry/exit conditions, command contracts, authority, and
continuity. A surface may represent multiple coexisting contexts and need not map
one-to-one to a layer.

## 11.4 Breadcrumbs

**Sufficient for semantic design.** Breadcrumb-like representation must express
professional origin and recoverable context, not a page hierarchy. It must
distinguish containment, prior context, historical inspection, and return;
linear ancestors cannot represent the full navigation transition graph by themselves.

## 11.5 Workbench 2.0

**Sufficient at navigation architecture level.** Workbench 2.0 can derive:

- Matter boundary and stable identity;
- Working Set, Focus, Inspection, and Current Situation relationships;
- entry from Matter and return to Decision or Matter;
- interruption and recovery behavior;
- Memory inspection and source provenance;
- authority and command constraints.

Workbench 2.0 still requires its own visual and implementation validation. It
cannot reinterpret the canonical entities or laws.

## 11.6 Visual architecture acceptance gate

A proposed visual navigation architecture receives:

- **Pass** when every represented movement maps to one canonical navigation transition,
  preserves the applicable envelope, exposes authority and degradation, and
  violates no invariant;
- **Fail** when any representation manufactures domain truth, lifecycle,
  authority, Evidence, progression, or unrecoverable context;
- **Not Applicable** only when the proposal contains no behavior in the reviewed
  navigation scope.

No subjective score or visual preference can override a failed canonical
contract.

# 12. Risks

| Risk | Architectural control | Residual review need |
|---|---|---|
| Layer-to-page collapse | Layers are professional contexts and may coexist; surfaces need not map one-to-one. | Visual architecture must show non-linear movement and historical inspection. |
| Rail-to-sidebar collapse | Rail is defined as persistent orientation semantics, not a component. | Any sidebar proposal must prove stable orientation and contextual emphasis independently. |
| Lifecycle wizard regression | Closure is not a layer; graph includes reconsideration, adverse return, bypass, and reopening. | Visual sequencing must not imply mandatory forward progression. |
| Projection becoming a domain store | Navigation state is disposable and reconstructable from canonical sources. | Implementation architecture must prove source references, freshness, and rebuild behavior. |
| Context Envelope duplication | One envelope contract passes through all layers with layer-specific emphasis only. | Data design must not introduce per-layer competing payload ownership. |
| Authority hidden by availability | Zone existence and command availability are orthogonal; authority is explicit. | Visual semantics must distinguish discoverable, existing, authorized, and historical. |
| Practice-to-production leakage | Practice & Learning has an explicit non-production boundary and separate admission act. | M5 must make simulated provenance unmistakable without relying on color or icon alone. |

# 13. Open Questions

None block Visual Navigation Architecture.

Visual form, responsive behavior, component topology, iconography, and
implementation remain intentionally unresolved for M5 and later work.

# 14. Architecture Verdict

```text
Approved as Canonical
Ready for Visual Navigation Architecture
```

The canonical layers, non-linear navigation transition graph, Rail semantics, navigation
projection, Context Envelope continuity, authority boundaries, experience
journeys, and deterministic invariants are sufficient for visual architecture
without changing an owning canonical model.

## Recommendation

```text
Open M5 — Canonical Visual Semantics (Canonical Review Candidate)
```

M5 may choose visual representations but may not redefine the navigation model,
navigation transition meaning, canonical sources, or governance laws established here.
