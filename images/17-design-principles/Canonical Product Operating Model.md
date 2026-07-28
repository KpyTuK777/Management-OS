# Canonical Product Operating Model

## Status

```text
Canonical Product Operating Model v1.0
Approved as Canonical
```

## Purpose

This document defines Management OS as one continuous product experience across
the complete life of an Operational Matter. It is the product-level source of
truth for Product 2.0.

The product mission is defined once in
[Product Vision](../../docs/PRODUCT_VISION.md#canonical-mission). This operating
model translates that mission into a complete operational lifecycle without
duplicating it.

It does not define a screen, layout, component, visual style, implementation,
storage schema, or new domain aggregate. Existing canonical model authority
remains unchanged.

Management OS is designed around the complete operational cycle:

```text
Observe
  ↓
Investigate
  ↓
Understand
  ↓
Decide
  ↓
Intervene
  ↓
Change
  ↓
Monitor
  ↓
Stabilize
  ↓
Continue
```

Investigation is one capability inside this cycle. The Matter is the continuous
unit of management.

### Practice / Learning Context

Practice and Learning are future product contexts, not separate or simplified
product models:

- learning, simulation, real, and retrospective cases use the same Matter
  lifecycle and preserve the same identity, provenance, history, and Context
  Envelope requirements;
- context changes Evidence qualification, consequence, and applicable authority,
  not the base operational lifecycle;
- simulated material never becomes organizational Evidence or real execution
  truth without an explicit governed admission;
- completed cases preserve experience that may support professional development
  and later reasoning without overriding current Evidence;
- Practice Mode is neither a demo nor a reduced-capability version of Management
  OS;
- reusable learning remains separately governed before it becomes Knowledge,
  procedure, recommendation, or authority.

This direction introduces no new aggregate, repository, lifecycle, storage, or
implementation in Milestone M2.

## 1. Complete Operational Lifecycle

The canonical Matter macro-states remain:

```text
Reported
  ↓
Under Assessment
  ↓
Under Investigation
  ↓
Decision Ready
  ↓
Decided
  ↓
In Execution
  ↓
Outcome Assessed
  ↓
Closed
```

This is an ordinary forward path, not a mandatory wizard. A Matter may return to
an earlier state, repeat work, close after assessment, require no execution, or
reopen without changing identity.

### Canonical Matter Transition Matrix

This matrix is exhaustive. A transition not listed here is forbidden until a
separate architecture review adds it. Every transition appends source state,
destination state, actor, time, reason, authority basis, supporting references,
and proposal/approval status to Matter history and Operational Memory.

| Source state | Allowed destination | Authority | Required criteria | Historical consequence |
|---|---|---|---|---|
| `Reported` | `Under Assessment` | Accountable owner or authorized intake policy assigning accountable review | Report has stable identity and sufficient source context for assessment | Opening report remains immutable; assessment start and owner are appended |
| `Under Assessment` | `Under Investigation` | Owner or explicitly authorized delegate | Material uncertainty requires sustained investigation | Scope, materiality, and investigation basis are appended |
| `Under Assessment` | `Closed` | Owner | No current investigation, Decision, or action is justified; disposition and recurrence conditions are recorded | No-action assessment remains inspectable; closure never deletes the report |
| `Under Investigation` | `Under Assessment` | Owner or explicitly authorized delegate | Scope, ownership, urgency, or materiality must be reconsidered | Investigation work remains; reassessment reason is appended |
| `Under Investigation` | `Decision Ready` | Owner | Decision question, basis, alternatives, authority, risks, contradictions, and residual uncertainty are inspectable | Readiness basis and referenced evidence snapshot are appended |
| `Decision Ready` | `Under Investigation` | Owner | New evidence, contradiction, or material uncertainty makes the basis insufficient | Earlier readiness remains historical and is explicitly revoked |
| `Decision Ready` | `Decided` | Accountable decision owner | An attributable Decision, rationale, intended condition, accepted uncertainty, and authority basis exist | Decision-time snapshot and authoritative Decision reference are appended |
| `Decided` | `Decision Ready` | Accountable decision owner | Decision requires reconsideration but the existing basis remains sufficient for renewed judgment | Decision remains historical; reconsideration reason is appended |
| `Decided` | `Under Investigation` | Accountable decision owner | A material premise is invalidated or new uncertainty requires investigation | Decision remains historical and is marked under reconsideration, never erased |
| `Decided` | `In Execution` | Accountable decision owner plus valid source-owned execution commitments | Decision requires change; impact, guardrails, ownership, and proportionate execution boundary are approved | Transition start and source references are appended; source records are not copied |
| `Decided` | `Outcome Assessed` | Accountable owner | Decision required no execution but has an observable effect or disposition that justifies assessment | Execution-free path and assessment basis are appended |
| `Decided` | `Closed` | Accountable owner | Decision is terminal, requires neither execution nor Outcome Assessment, and no current work remains | Execution-free/no-observation disposition, residual risk, and closure basis are appended |
| `In Execution` | `Decided` | Accountable decision owner | Execution is paused/stopped or requires a materially revised Decision | Source execution history remains; stop/reconsideration reason is appended |
| `In Execution` | `Outcome Assessed` | Accountable owner; observations remain source-owned | Proportionate observed evidence permits comparison with intended condition; incomplete execution is explicitly represented | Outcome assessment is appended without converting activity into success |
| `Outcome Assessed` | `In Execution` | Accountable owner plus valid source-owned action authority | Further approved action is required under the current Decision | Prior Outcome remains; follow-up execution intent and basis are appended |
| `Outcome Assessed` | `Under Investigation` | Accountable owner | Outcome invalidates a material premise or exposes uncertainty that cannot be resolved through execution alone | Prior Decision and Outcome remain; new Investigation episode and reason are appended |
| `Outcome Assessed` | `Decision Ready` | Accountable owner | Outcome requires renewed judgment and the available basis is already sufficient | Outcome remains; renewed decision question and readiness basis are appended |
| `Outcome Assessed` | `Closed` | Accountable owner | No current work remains; achieved, partial, adverse, unknown, or inconclusive disposition and residual conditions are explicit | Final disposition, accepted risk, monitoring/recurrence conditions, and closure are appended |
| `Closed` | `Under Assessment` | Accountable owner | Material recurrence or new information justifies current operational work | Same Matter identity continues; reopening reason links prior closure to reassessment |

No other state may transition directly to `Closed`. Investigation that concludes
that no action is justified returns to `Under Assessment`, where the owner makes
the no-action closure judgment. A decision-relevant no-action judgment becomes an
authoritative Decision before closure.

### Reported

| Concern | Contract |
|---|---|
| Operational goal | Preserve the reported situation faithfully and establish that it exists as a Matter candidate |
| Owner | Reporting actor until accountable ownership is established |
| Dominant object | Original report and nascent Matter identity |
| Required evidence | Original wording, source, time, affected context, and any immediately material signal |
| Authority | Creation establishes existence only; it does not validate cause, materiality, or response |
| Transition criteria | An accountable owner and proportionate assessment are warranted |
| Expected outcome | A preserved report with no premature diagnosis |
| Focus | What was observed, why it may matter, immediate safety or continuity risk |
| Periphery | Hypotheses, solutions, broad evidence collection, execution tools |

### Under Assessment

| Concern | Contract |
|---|---|
| Operational goal | Establish ownership, scope, materiality, urgency, and the proportionate response |
| Owner | Accountable Matter owner; explicitly authorized delegate where permitted |
| Dominant object | Matter boundary and pre-synthesis Current Situation condition; initial accepted version when authorized |
| Required evidence | Scope, affected system, impact signal, ownership, urgency, known constraints |
| Authority | Owner governs scope and whether active investigation or other response is justified |
| Transition criteria | Investigation is justified, or no current work is justified |
| Expected outcome | A bounded Matter with an attributable operational posture |
| Focus | Scope, materiality, owner, immediate uncertainty, next justified act |
| Periphery | Detailed solution design, long histories, unrelated Matters |

### Under Investigation

| Concern | Contract |
|---|---|
| Operational goal | Reduce material uncertainty sufficiently for responsible judgment |
| Owner | Matter owner governs direction; contributors and Watson remain attributable |
| Dominant object | Current Situation supported by the active Working Set |
| Required evidence | Provenance-bearing Artifacts, accepted or proposed Relationships, competing Hypotheses, Contradictions, unresolved questions |
| Authority | Sources own evidence; owner accepts operational interpretation and readiness |
| Transition criteria | Decision basis is sufficient and inspectable, or reassessment is justified |
| Expected outcome | Traceable understanding with explicit residual uncertainty |
| Focus | Current Situation, most valuable uncertainty, relevant evidence neighborhood |
| Periphery | Execution controls, broad corpus, settled low-relevance material |

### Decision Ready

| Concern | Contract |
|---|---|
| Operational goal | Make the basis for owner judgment complete, inspectable, and challengeable |
| Owner | Accountable decision owner |
| Dominant object | Decision Readiness basis, not a proposed answer |
| Required evidence | Alternatives, expected effects, risks, authority, constraints, contradictions, uncertainty, consequences of delay |
| Authority | Only authorized human judgment can create an authoritative Decision |
| Transition criteria | Owner decides, defers, or returns to Investigation; a decision-relevant no-action judgment is recorded as a Decision |
| Expected outcome | A deliberate judgment without pressure created by interface progression |
| Focus | Decision question, basis, alternatives, residual risk, required authority |
| Periphery | Raw evidence already represented by the basis, execution detail not needed for judgment |

### Decided

| Concern | Contract |
|---|---|
| Operational goal | Preserve the authoritative Decision, rationale, intended operating condition, and decision-time context |
| Owner | Accountable decision owner |
| Dominant object | Authoritative Decision |
| Required evidence | Decision-time snapshot, rationale, expected effect, guardrails, assumptions, accepted risk |
| Authority | Owner approves Decision and any consequential reconsideration |
| Transition criteria | No execution is required, or approved impact review and proportionate change preparation are sufficient |
| Expected outcome | A stable boundary between accepted understanding and intended change |
| Focus | Decision intent, intended condition, affected system, guardrails |
| Periphery | Rejected alternatives except when inspected; unrelated investigative material |

### In Execution

| Concern | Contract |
|---|---|
| Operational goal | Coordinate the intended change without taking authority from source-owned execution systems |
| Owner | Matter owner remains accountable; action owners govern their source records |
| Dominant object | Operational Transition relating Decision intent to source-owned Actions |
| Required evidence | Approved adaptations, owners, dependencies, commitments, checkpoints, guardrails, source status, deviations |
| Authority | Source capabilities validate execution state; Matter owner governs Decision and transition disposition |
| Transition criteria | Effects are observable enough for outcome assessment, execution is stopped, or Decision reconsideration is required |
| Expected outcome | Traceable change with no manufactured progress |
| Focus | Current transition focus, dependency, deviation, owner, guardrail |
| Periphery | Settled investigation detail, inactive actions, decorative progress summaries |

### Outcome Assessed

| Concern | Contract |
|---|---|
| Operational goal | Compare observed operation with Decision intent and expected effect |
| Owner | Accountable Matter owner; evidence remains source-owned |
| Dominant object | Outcome Assessment |
| Required evidence | Baseline, intended condition, observed measures and behavior, adverse effects, adoption, residual uncertainty |
| Authority | Owner accepts Outcome and stabilization disposition; completed work is not proof of success |
| Transition criteria | Stable enough to close, further action is required, or Decision must be reconsidered |
| Expected outcome | An honest disposition: achieved, partial, adverse, unknown, or inconclusive |
| Focus | Intended versus observed condition, guardrails, recurrence and residual risk |
| Periphery | Activity counts, obsolete plans, evidence unrelated to the expected effect |

### Closed

| Concern | Contract |
|---|---|
| Operational goal | End current operational work while preserving continuity, memory, and explicit reopening |
| Owner | Accountable owner closes and may later reopen |
| Dominant object | Closure disposition and final Current Situation version |
| Required evidence | Outcome or justified no-action disposition, residual risk, uncertainty, monitoring/recurrence conditions |
| Authority | Closure is an owner judgment; the system may enforce completeness but cannot declare resolution |
| Transition criteria | Reopening occurs only when recurrence or new material information justifies reassessment |
| Expected outcome | A quiet, retrievable Matter whose history remains authoritative |
| Focus | Final disposition, residual conditions, memory, explicit reopen basis |
| Periphery | Active prompts, routine capture, execution controls |

### Non-forward movement

The experience must support without disorientation:

- reassessment when scope or ownership changes;
- return from Decision Ready to Investigation;
- Decision reconsideration before or during execution;
- further execution after Outcome Assessment;
- closure without unnecessary Investigation or execution;
- reopening into Under Assessment with the same Matter identity.

Movement never deletes history or creates a duplicate Matter.

### Formal lifecycle paths

#### No-action closure

Two paths are valid:

```text
Under Assessment → Closed
```

when assessment establishes that no current action or Decision is justified; or:

```text
Under Investigation → Under Assessment → Closed
```

when investigation changes the assessment basis but no decision question remains.
The owner authorizes closure. The report, investigation, assessment basis, reason,
residual uncertainty, and recurrence conditions remain historical.

If choosing no action is itself a consequential judgment, the path is:

```text
Decision Ready → Decided → Closed
```

and the no-action Decision remains authoritative and inspectable.

#### Execution-free Decision

An owner-authorized Decision that requires no source-owned implementation follows:

```text
Decision Ready → Decided → Closed
```

when no observation is justified, or:

```text
Decision Ready → Decided → Outcome Assessed → Closed
```

when its effect or disposition is observable. History explicitly records why
execution was unnecessary and whether Outcome Assessment was required.

#### Decision reconsideration

Reconsideration follows one of:

```text
Decided → Decision Ready
Decided → Under Investigation
In Execution → Decided → Decision Ready
In Execution → Decided → Under Investigation
```

The accountable decision owner authorizes the return. Existing Decision and
source execution history remain canonical; a new Decision, if made, supersedes
rather than rewrites the earlier judgment.

#### Adverse Outcome

An adverse Outcome is accepted by the accountable owner from source-owned
observations. It results in:

```text
Outcome Assessed → In Execution
```

when further action under the current Decision is valid;

```text
Outcome Assessed → Decision Ready
```

when renewed judgment is required but the basis is sufficient; or:

```text
Outcome Assessed → Under Investigation
```

when the adverse result invalidates understanding. The adverse Outcome remains
historical regardless of the next state.

#### Inconclusive Outcome

An inconclusive Outcome records missing evidence, observation limits, and
remaining uncertainty. The owner may authorize:

- `Outcome Assessed → In Execution` for further observable action;
- `Outcome Assessed → Under Investigation` for renewed inquiry;
- `Outcome Assessed → Decision Ready` for judgment on the existing basis;
- `Outcome Assessed → Closed` when no further work is justified and uncertainty,
  accepted risk, and recurrence/review conditions are explicit.

Inconclusive never silently becomes successful, stable, or resolved.

#### Return from Outcome to Investigation

This transition requires an accepted Outcome showing that a material premise is
invalid, causal understanding is insufficient, or new uncertainty changes the
Decision basis. The owner authorizes `Outcome Assessed → Under Investigation`.
A new Investigation episode is appended under the same Matter; the earlier
Decision, execution, and Outcome remain intact.

#### Return from Outcome to Execution

This transition requires an accepted Outcome showing that further approved action
under the current Decision is justified. The owner authorizes
`Outcome Assessed → In Execution`, while each action owner retains authority for
source records. The earlier Outcome remains as the baseline for follow-up work.

## 2. Matter Experience

The user does not experience a Matter as a sequence of pages. The user experiences
one enduring operational concern whose posture, focus, and available evidence
change over time.

### Opening

A Matter opens when a reported situation deserves accountable continuity beyond
an isolated note or notification. Opening:

- preserves the original wording;
- creates stable Matter identity;
- identifies or requests accountable ownership;
- establishes `Reported`;
- begins Operational Memory;
- does not manufacture a diagnosis or plan.

### Pre-synthesis Current Situation

Before an authorized initial synthesis exists, the Matter has a visible
`Current Situation pending` condition, not an empty or system-authored Current
Situation version. It preserves the original report, known scope, and explicit
unknowns without claiming accepted understanding.

The first canonical Current Situation version exists only after an authorized
human accepts an attributable synthesis grounded in admitted material. From that
point the one-current-version invariant applies; every replacement preserves the
earlier version in Operational Memory.

### Entering Investigation

A Matter enters Investigation when assessment establishes a material uncertainty
whose reduction is necessary for responsible action. Investigation is not entered
because a user opened the Workbench or selected a navigation item.

### Becoming Decision Ready

A Matter becomes Decision Ready when:

- the decision question is explicit;
- material evidence and provenance are inspectable;
- competing explanations and alternatives are represented;
- material contradictions are resolved or acknowledged;
- authority is known;
- uncertainty and risks are explicit;
- further investigation has lower expected value than judgment.

Readiness may be revoked by new evidence. It is not a completion score.

### Beginning Change

Change begins only after an authoritative Decision establishes:

- intended operating condition;
- expected effect;
- approved adaptations where required;
- guardrails and accepted risk;
- accountable ownership;
- proportionate execution and monitoring requirements.

An accepted explanation does not begin change automatically.

### Beginning Monitoring

Monitoring begins when an intended or implemented change has observable
conditions that can be compared with Decision intent. It may overlap execution.
It is not triggered merely because tasks are marked complete.

### Becoming Stabilized

Stabilization is an Outcome disposition, not a new Matter macro-state. A Matter
is stabilized when proportionate evidence shows:

- intended behavior is sustained for the required interval;
- guardrails remain within accepted bounds;
- material dependencies and adoption conditions hold;
- no unresolved adverse effect requires current work;
- residual uncertainty and recurrence conditions are explicit.

### Closing

Closure is justified when no current operational work is required. It does not
claim perfect knowledge or timeless resolution. Closure records:

- final accepted situation;
- Decision and Outcome disposition where applicable;
- residual uncertainty and accepted risk;
- recurrence or review conditions;
- owner, reason, and supporting references.

### Reopening

The same Matter reopens when the situation materially recurs or new information
justifies current operational work. Reopening:

- retains identity and complete memory;
- records an attributable reason;
- enters Under Assessment;
- distinguishes recurrence from continuation;
- never clones the old Matter.

## 3. Operational Navigation Architecture

Navigation follows operational context and preserves orientation. It is not a
site map projected onto the Matter.

### Global Layer

Always available:

- Operational Attention / Home;
- Matter selection and retrieval;
- global search across authorized material;
- Knowledge as a separately governed context;
- owner identity and workspace controls;
- return to the last meaningful Matter context.

Global navigation never impersonates movement inside a Matter.

### Matter Layer

Available only when a Matter is active:

- Matter identity, owner, macro-state, and last consequential change;
- Current Situation;
- Matter history and Operational Memory;
- state transition proposals and authority;
- full corpus access;
- closure/reopening where authorized.

### Workbench Layer

Emphasized during Investigation and available when investigative understanding
must be revisited:

- Current Situation and Working Set;
- Inquiry, Evidence, Artifacts, and sources;
- Relationships, Hypotheses, and Contradictions;
- Focus and Inspection;
- natural capture and Watson proposals;
- Decision Readiness.

Workbench is an environment within the Matter, not the Matter itself.

### Change Layer

Appears after an authoritative Decision requires change:

- Decision intent and intended operating condition;
- Impact Review and approved adaptations;
- source-owned Actions, owners, dependencies, and commitments;
- transition guardrails and deviations;
- reconsideration path;
- handoff to Monitoring.

This layer coordinates; it does not become a project-management database.

### Monitoring Layer

Available when observed operation must be compared with intent:

- baseline and expected effects;
- observation and measurement sources;
- guardrails, drift, and adverse effects;
- Outcome Assessment;
- stabilization and closure disposition.

Monitoring does not infer success from execution activity.

Before an Outcome Assessment exists, the dominant monitoring object is the
approved observation contract:

```text
expected condition
+ baseline
+ measures and sources
+ interval
+ guardrails
+ interpretation authority
```

Outcome Assessment becomes dominant only when observations are evaluated.

### Navigation invariant

Every context-changing act must preserve:

```text
Matter
+ origin
+ destination
+ reason
+ active Focus
+ relevant neighborhood
+ pending change
+ means of return
```

This Context Envelope applies between all Product Zones, not only within the
Workbench. Movement into Decision, Transition, Monitoring, Memory, or Inspection
must retain the originating Matter, relevant Current Situation version, active
object, pending change, and return condition.

### Four separate navigation contracts

These concepts are orthogonal and must never be represented by one flag such as
`visible`, `enabled`, or `active`.

#### Capability Discoverability

Definition: whether an authorized user can learn that a capability exists and
under what conditions it may be used.

Rules:

- fundamental capabilities remain discoverable through stable orientation or
  contextual explanation;
- discoverability does not instantiate a Zone or authorize a command;
- undiscoverable by authority policy is different from unavailable by lifecycle;
- the Rail may quiet discoverability but cannot erase the reconsideration path.

Example: Monitoring remains discoverable during Investigation as a later
capability, but no Monitoring Zone exists and no Outcome command is available.

#### Operational Zone Existence

Definition: whether a Matter currently has the canonical object and context that
justify an operational Zone instance.

Rules:

- a Zone exists only when its dominant object or valid pre-object contract exists;
- Zone existence is derived from canonical Matter references, never a selected tab;
- a Zone may coexist with other Zones;
- absence does not deny future capability or erase historical instances.

Example: Transition does not exist for an execution-free Decision. It exists
only after an approved Decision-to-Transition handoff.

#### Command Availability

Definition: whether a specific actor may execute a specific command against the
current aggregate context now.

Rules:

- availability requires positive authority, valid lifecycle preconditions, and
  required canonical inputs;
- a visible or existing Zone never grants command authority;
- unavailable commands explain the unmet condition without implying progression;
- Watson proposals never become owner commands.

Example: a Decision Zone may exist and remain inspectable while `decide` is
unavailable to Watson and available only to the accountable decision owner.

#### Historical Inspectability

Definition: whether a previously existing object, Zone instance, state, Decision,
Outcome, or context can be examined after it ceases to be current.

Rules:

- consequential history remains inspectable subject to access and retention;
- inspection never reactivates a Zone, changes Matter state, or implies acceptance;
- superseded, rejected, adverse, and inconclusive records remain distinguishable;
- historical unavailability of a source is reported, not repaired by invention.

Example: after closure, an earlier Transition and adverse Outcome remain
inspectable even though execution commands are unavailable.

### Decision-to-Transition handoff

Transition exists only after an authoritative Decision requiring change is
accompanied by:

- intended operating condition;
- approved adaptations where proportionate;
- action/source ownership;
- guardrails and accepted risk;
- execution references or valid commitment boundary;
- monitoring requirement or explicit reason observation is unnecessary.

The accountable decision owner authorizes the handoff. Source capabilities
retain every execution mutation. The handoff appends a consequential event and
never changes a planned action into reported execution.

## 4. Dynamic Operational Rail

The Operational Rail is the persistent orientation system for the product. It is
not a Sidebar, stage navigator, or lifecycle wizard.

### Stable anchors

The following never change position because of Matter state:

- Operational Attention;
- Matters;
- active Matter identity;
- Current Situation;
- Operational Memory;
- search/retrieval;
- owner/workspace control.

### Changing emphasis

The Rail changes visual and ordering emphasis according to authoritative Matter
state and active Focus:

| Operational posture | Primary emphasis |
|---|---|
| Reported / Assessment | report, scope, ownership, urgency |
| Investigating | Inquiry, Evidence, Contradictions, Working Set |
| Understanding / Decision Ready | Current Situation, basis, alternatives, Decision |
| Decided / Planning | Decision intent, Impact, intended condition |
| Changing | Actions, dependencies, owners, guardrails, deviations |
| Monitoring | expected effect, observations, Outcome, stabilization |
| Closed | disposition, memory, recurrence, reopen |

### Never hidden

When permitted by authority, these remain reachable even when peripheral:

- Current Situation;
- Matter state and history;
- source evidence;
- Decision and rationale;
- Operational Memory;
- return/reconsideration paths;
- unresolved material contradiction or risk.

### Contextual capabilities

Contextual tools may appear only when they have a real operational object:

- evidence acquisition during Investigation;
- Decision readiness and judgment when a decision question exists;
- impact and transition tools after Decision;
- monitoring and Outcome when observable conditions exist;
- closure when disposition criteria can be inspected.

“Appear” means increased discoverability or an instantiated Zone. It never means
that the underlying capability ceased to exist or that its commands became
authorized automatically.

### Rail laws

1. Rail emphasis never changes canonical state.
2. Rail does not infer progression from clicks, tasks, or visual completion.
3. Rail does not hide a capability merely because the ordinary path moved on.
4. Rail order does not continuously react to transient behavior.
5. Proposed transitions remain visually distinct from approved state.
6. The active Matter and return path remain continuously identifiable.

## 5. Product Zones

Zones are operational contexts, not mandatory pages.

| Zone | Purpose | Dominant object | Responsibility | Exists when | Absent when |
|---|---|---|---|---|---|
| Operational Attention | Direct attention across Matters | Attention item backed by real Matter state/event | Prioritize return, risk, change, and pending judgment | At product entry and global return | Never globally absent; may be empty |
| Matter | Preserve one concern across its life | Operational Matter | Identity, owner, state, continuity, lineage | From report through closure and reopening | Before admission as a Matter |
| Current Situation | Express accepted present understanding | Accepted Current Situation version; pre-synthesis condition before one exists | Synthesis, basis, uncertainty, authority | Accepted version after authorized synthesis; explicit pending condition beforehand | Canonical version is absent before initial authorized synthesis |
| Workbench | Reduce uncertainty and build understanding | Working Set around Current Situation | Investigation, reasoning, Inspection, capture | When investigative work is active or revisited | When no investigative interaction is justified |
| Decision | Support and preserve accountable judgment without collapsing readiness into authority | Readiness basis before judgment; authoritative Decision after owner action | Alternatives, authority, rationale, intended condition | When a material decision question or historical Decision exists | When no judgment exists or is required |
| Transition | Relate Decision intent to source-owned change | Operational Transition | Impact, coordination, guardrails, deviation | When a Decision requires implementation/change | For no-action or execution-free Decisions |
| Monitoring | Compare observed operation with intent | Observation contract before evaluation; Outcome Assessment after evaluation | Observation, drift, effect, stabilization | When effects can or must be observed | When no outcome verification is justified |
| Operational Memory | Provide a zone for inspecting the separate canonical Memory model | Query/projection over Memory Event history | Retrieval, explanation, rejected paths, and historical continuity without owning present truth | Inspectable throughout the Matter life; emphasized when history is requested | The Memory model is never absent after Matter opening; the inspection Zone may be closed |

Zones may coexist. Their visual prominence follows current operational need,
while their authority boundaries remain stable.

The Operational Memory model and Operational Memory Zone are distinct. The model
is the append-only Matter-scoped source of consequential history. The Zone is a
read-only product context for querying and explaining that history. Closing,
hiding, or leaving the Zone never changes Memory; rebuilding a projection never
creates new canonical meaning.

## 6. Product Experience Principles

1. **The Matter is the unit of management.**
2. **Investigation is never the end of the product.**
3. **Understanding remains provisional until governed; governance never erases uncertainty.**
4. **Every accepted understanding must clarify whether judgment or action is required.**
5. **A Decision is the authority boundary between understanding and intended change.**
6. **Change remains source-owned; Management OS coordinates without manufacturing execution truth.**
7. **Every intended change must become observable or be explicitly declared unverifiable.**
8. **Monitoring tests both the Decision and the understanding behind it.**
9. **Activity, completion, adoption, Outcome, and stabilization are distinct facts.**
10. **Closure is earned through an inspectable disposition, not declared by interface progression.**
11. **Reopening preserves identity and history.**
12. **Navigation follows operational state and Focus, not application structure.**
13. **The current operational object dominates; the complete history remains reachable.**
14. **Capabilities change discoverability emphasis; Zone existence, command availability, and historical inspectability remain separate contracts.**
15. **Unknown remains unknown; the product never fills operational gaps with visual confidence.**

These principles operate above Workbench Laws. They govern the complete product
cycle rather than the internal behavior of one working environment.

## 7. Canonical Product Map

```text
Management OS
│
├─ Operational Attention
│  ├─ active Matters
│  ├─ material changes
│  ├─ pending judgments
│  └─ return to last context
│
└─ Matter
   ├─ identity / owner / macro-state
   ├─ Current Situation
   │  ├─ accepted understanding
   │  ├─ basis
   │  └─ uncertainty
   │
   ├─ Workbench
   │  ├─ Working Set / Focus
   │  ├─ Artifact / Evidence
   │  ├─ Relationship
   │  ├─ Hypothesis / Contradiction
   │  └─ Inspection
   │
   ├─ Decision
   │  ├─ readiness basis
   │  ├─ alternatives / risk
   │  └─ intended operating condition
   │
   ├─ Transition
   │  ├─ Impact Review
   │  ├─ approved adaptations
   │  ├─ references to source-owned Actions
   │  └─ guardrails / deviations
   │
   ├─ Monitoring
   │  ├─ expected effect
   │  ├─ observed condition
   │  ├─ Outcome Assessment
   │  └─ stabilization disposition
   │
   ├─ Closure / Reopening
   │
   └─ Operational Memory
      └─ consequential history across every zone
```

Cross-cutting contracts:

```text
Authority
Provenance
Context Envelope
Operational Memory
Source ownership
```

Operational Memory preserves how the Matter evolved. It does not replace the
current authoritative object in any zone.

External authoritative context:

```text
Operational System / Operating Model
  → supplies governed current topology and constraints
  → remains source-owned
  → is referenced by Investigation, Decision, Transition, and Monitoring
  → is never absorbed into Matter or rewritten by a Product Zone
```

Every connection between Product Zones carries a Context Envelope. The map
expresses operational relationships and containment, not a mandatory page tree
or linear navigation sequence.

## 8. Product Readiness Rebaseline

This constitution contains no readiness percentage. Readiness is evaluated in a
separate dated milestone review using evidence linked to the exact commit and
test environment under review.

Architecture readiness and implementation readiness are independent gates.

### Architecture readiness rubric

| Gate | Required evidence | Passing condition |
|---|---|---|
| Lifecycle completeness | Exhaustive transition matrix and exceptional paths | Every intended path is allowed explicitly; every unlisted transition is forbidden |
| Authority integrity | Actor/action/context contracts for every consequential transition | No UI, Watson, Coordinator, or source event can impersonate owner authority |
| Model boundaries | Responsibility and dependency map | Matter, zones, source systems, Memory, and navigation have no competing ownership |
| Recovery semantics | Failure and reconstruction specification | No recovery invents state, meaning, execution, Outcome, or consent |
| Experience continuity | Canonical Product Map and Context Envelope | Every cross-zone movement preserves identity, origin, change, and return |
| Future compatibility | Reviewed extension points | New product milestones require additive contracts rather than rebuilding canonical foundations |

Architecture status values are:

```text
Not Reviewed
Requires Correction
Approved
Canonical
```

A gate passes only with cited review evidence. A mean, percentage, or subjective
score cannot compensate for a failed gate.

### Implementation readiness rubric

| Gate | Required evidence | Passing condition |
|---|---|---|
| Domain conformance | Contract suites for identity, authority, lifecycle, provenance, history, recovery, and Matter isolation | All required contracts pass |
| Journey completeness | Production journeys covering forward, return, no-action, execution-free, adverse, inconclusive, closure, and reopening paths | Every required journey reaches the expected canonical state |
| Source integrity | Integration tests with success, unavailable, stale, duplicate, and conflicting source states | Product never copies or manufactures source authority |
| Operational continuity | Reload, interruption, retry, migration, quarantine, and recovery tests | Same Matter and canonical history survive every supported recovery |
| Interaction integrity | Keyboard, focus, Context Envelope, disabled-command explanation, and state distinction tests | Navigation never changes authority or destroys context |
| Visual semantics | Canonical token inventory, accessibility, forced-colors, and regression evidence | Meaning never depends on emoji, decoration, color alone, or mixed families |
| Production quality | Performance, responsive, security, privacy, observability, and zero blocking-error evidence | Defined production thresholds pass |

Implementation status values are:

```text
Not Implemented
Partial — Evidence Incomplete
Ready for Canonical Review
Canonical
Production Ready
```

`Canonical` confirms architecture/model conformance. `Production Ready` also
requires operational quality evidence. Neither status is derived from the other.

### Current M2 baseline

```text
Architecture readiness:
Requires Correction until this document passes Final Canonical Review.

Implementation readiness:
Not evaluated by M2. M2 authorizes no implementation claim.
```

## 9. Transformation Plan

```text
Canonical Product Operating Model
        ↓
Matter Experience
        ↓
Operational Navigation
        ↓
Decision & Change Experience
        ↓
Monitoring Experience
        ↓
Canonical Visual Language
        ↓
Workbench 2.0
        ↓
Production Cohesion
```

### 1. Canonical Product Operating Model

Freeze the complete product cycle and authority boundaries before designing
surfaces. This document supplies that contract.

### 2. Matter Experience

Make one Matter continuous from report through closure. Home, selection,
restoration, state, Current Situation, and reopening must share one identity
model before navigation can represent them honestly.

### 3. Operational Navigation

Define global, Matter, Workbench, Change, and Monitoring layers plus the Dynamic
Operational Rail. Navigation precedes layout because it determines orientation,
context, and capability emphasis.

### 4. Decision & Change Experience

Create the missing authority boundary and the transition from accepted
understanding to intended change. Do this before redesigning Investigation so
the product no longer terminates at explanation.

### 5. Monitoring Experience

Make change observable through intended condition, measures, Outcome, residual
risk, stabilization, closure, and return loops.

### 6. Canonical Visual Language

Apply canonical iconography, state tokens, typography, color semantics, and
material roles only after the complete operational vocabulary is known.

### 7. Workbench 2.0

Rebuild Workbench around Current Situation, Working Set, Focus, and Context
Envelope as one zone within the full Matter experience. It must support returns
from Decision, Change, and Monitoring without becoming the whole product.

### 8. Production Cohesion

Validate responsive behavior, accessibility, recovery, degraded operation,
performance, empty states, source unavailability, and removal of all legacy or
simulated product paths.

This order prevents a visually improved Investigation tool from being mistaken
for Product 2.0.

## 10. Success Criteria

It is honest to say:

> Management OS stopped being an Investigation Tool and became an Operational
> Management System.

only when all of the following are demonstrably true:

1. A single Matter identity survives report, investigation, Decision, execution,
   Outcome, closure, and reopening.
2. The user can state the active Matter, owner, macro-state, Current Situation,
   current Focus, and next justified judgment from any primary operational zone.
3. Investigation produces an inspectable readiness basis rather than a visual
   sense of completion.
4. An authoritative Decision preserves rationale, alternatives, uncertainty,
   intended condition, guardrails, and owner.
5. A Decision that requires change enters a traceable Transition without copying
   source-owned execution records.
6. Source status, unknown status, planned work, completed activity, observed
   effect, and stable operation are visually and semantically distinct.
7. Monitoring compares observed conditions with Decision intent and identifies
   adverse or unintended effects.
8. Stabilization has explicit evidence, interval, guardrails, residual risk, and
   accountable disposition.
9. Closure records why no current work is required and reopening preserves the
   same Matter and history.
10. Operational Memory explains consequential evolution across the entire cycle,
    including rejected and reconsidered paths.
11. Navigation preserves Matter, origin, reason, Focus, neighborhood, pending
    change, and return.
12. The Operational Rail changes emphasis without hiding capability or inferring
    lifecycle progress.
13. Home directs attention using real Matter state and consequential events, not
    static cards or feature navigation.
14. Workbench is recognizably one operational zone, not the container for every
    capability.
15. No screen, progress display, AI output, task completion, or integration can
    silently create authority belonging to an owner or source system.
16. The complete journey works under reload, recovery, unavailable integrations,
    and AI absence without manufacturing continuity.
17. Visual language distinguishes objects and states without emoji, decorative
    causality, color-only meaning, or mixed icon families.
18. Production testing covers at least one forward cycle, one return to
    Investigation, one no-action closure, one execution-free Decision, one
    adverse Outcome, and one reopening.

## Final Charter Verdict

```text
Approved as Canonical
```

Product Transformation may proceed only through separately reviewed milestones.
This document authorizes no Apply, redesign, UI change, or implementation.
