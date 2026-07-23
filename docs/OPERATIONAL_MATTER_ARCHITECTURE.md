# Operational Matter Architecture

## Purpose and status

This document defines the canonical lifecycle artifact for every operational
situation in Management OS.

| Property | Decision |
| --- | --- |
| Status | Approved canonical product architecture; not implemented |
| Delivery milestone | Sprint 10 |
| Canonical concept | Operational Matter |
| Authority | Matter identity, macro-state, lifecycle continuity, lineage, relationships, reopening, and capability write boundaries |
| Related documents | Unified Operational Investigation Architecture, Data Model, Operational Reasoning Model, Decision Laboratory, Operational Memory, Knowledge Evolution |

An **Operational Matter** is the thin, persistent control-plane record that
preserves one operational situation across reporting, assessment, investigation,
decision preparation, owner decision, execution, outcome assessment, closure,
reopening, and governed learning.

```text
One Operational Matter
  -> one canonical identity
  -> one lifecycle history
  -> many authoritative linked contributions
```

No capability creates a parallel representation of the Matter. An Operational
Investigation is a repeatable work episode concerning a Matter, not the Matter's
permanent identity.

## Owned authority

The Operational Matter owns:

- canonical identity and accountable owner;
- current authoritative macro-state;
- purpose, scope, and materiality;
- lifecycle history and reopening history;
- lineage and typed relationships;
- authoritative Decision and Outcome references.

It does not own copies of Evidence content, organizational records, calendar
commitments, execution-system state, approved Knowledge, Laboratory branch
content, or external-system records. Source capabilities retain authority.

## Canonical macro-states

| State | Authoritative meaning |
| --- | --- |
| **Reported** | The situation is recorded; validity, materiality, scope, and response are not yet established. |
| **Under Assessment** | Ownership, scope, materiality, urgency, and the proportionate response are being established. |
| **Under Investigation** | One or more Investigation episodes are actively reducing material uncertainty. |
| **Decision Ready** | An inspectable basis is sufficient for owner judgment; readiness remains revocable. |
| **Decided** | An authoritative owner Decision exists and its rationale is preserved. |
| **In Execution** | One or more approved Operational Actions are underway. |
| **Outcome Assessed** | Observed effects have been evaluated against Decision intent and expected effect. |
| **Closed** | No current operational work is required; history remains authoritative and reopenable. |

These states describe the Matter's authoritative operational posture. They are not
Investigation progress, task status, completeness scores, capability states, or a
mandatory linear wizard. Detailed progress remains in linked contributions.

## Canonical transitions

The ordinary forward path is permitted but not mandatory:

```text
Reported -> Under Assessment -> Under Investigation
         -> Decision Ready -> Decided -> In Execution
         -> Outcome Assessed -> Closed
```

Canonical non-forward transitions are:

| Transition | Meaning |
| --- | --- |
| Under Assessment -> Closed | Assessment established that no current action is justified. |
| Under Investigation -> Under Assessment | Scope, ownership, or materiality requires reassessment. |
| Decision Ready -> Under Investigation | Material uncertainty or contradictory Evidence emerged. |
| Decided -> Decision Ready | The Decision requires reconsideration before execution. |
| Decided -> Under Investigation | New Evidence invalidated a material premise. |
| In Execution -> Decided | Execution paused or requires a materially revised owner Decision. |
| Outcome Assessed -> In Execution | Further approved action is required after evaluation. |
| Closed -> Under Assessment | The same situation has materially recurred or new information justifies reopening. |

Creation in **Reported** is mandatory. No later state is universally mandatory:
proportionate Matters may close after assessment, Decisions may require no
execution, and execution may not justify a separate outcome study. A Matter may
repeat Investigation, readiness, Decision, execution, and assessment work without
changing identity. Multiple Investigations do not require parallel Matter states.

Reopening always preserves identity and prior history and enters **Under
Assessment**. The product reassesses scope, ownership, materiality, and whether a
new Investigation episode is required. It never creates a duplicate Matter merely
to represent recurrence.

Every transition appends source state, destination state, actor, time, reason,
supporting references, authority basis, and whether the transition was proposed
or approved. State history is never rewritten.

## Transition ownership

The Operational Matter authority validates and records transitions; capabilities
may supply governed supporting records but do not own Matter state.

- Matter creation may automatically establish **Reported**.
- The accountable owner approves consequential transitions to or from
  **Decision Ready**, **Decided**, **In Execution**, **Outcome Assessed**,
  **Closed**, and reopening.
- Assessment and Investigation transitions may be delegated only through explicit
  workspace policy and must remain attributable and reversible.
- Watson may recommend a transition, explain its basis, identify unmet conditions,
  or warn that state appears stale. It cannot perform or imply an authoritative
  transition.
- External integrations may report source events. They cannot silently change
  Matter state; an explicitly governed synchronization policy must validate,
  attribute, and record any resulting transition.

## State-sensitive behavior

| Matter state | Primary product behavior |
| --- | --- |
| Reported | Preserve owner wording; avoid diagnosis; clarify urgency without expanding scope prematurely. |
| Under Assessment | Establish ownership, materiality, scope, urgency, and proportionate next work. |
| Under Investigation | Prioritize Inquiry, Evidence, orchestration, competing explanations, and visible uncertainty. |
| Decision Ready | Present the readiness basis, alternatives, risks, authority, guardrails, and unresolved uncertainty without pressuring a Decision. |
| Decided | Preserve the authoritative rationale and decision-time snapshot; distinguish reconsideration from silent reinterpretation. |
| In Execution | Emphasize linked Actions, commitments, guardrails, source-system status, and monitoring. |
| Outcome Assessed | Compare intended and observed effects and identify bounded follow-up or a learning candidate. |
| Closed | Suppress active-work prompting by default; support retrieval, Memory use, retention, and explicit reopening. |

State influences capability emphasis; it does not enable or remove capabilities.
Operational Inquiry may continue after readiness or Decision when material
uncertainty appears. Investigation Orchestration coordinates active Investigation
episodes but never infers Matter state from task completion. Decision Laboratory
may be used in any decision-relevant state and remains non-authoritative.
Operational Memory may reference active or closed Matters but never determines
their current state. UX must show the current state and proposed transitions
without presenting the state model as a fixed sequence.

## Separate learning lifecycle

Learning is related by lineage but governed by a separate state machine:

```text
Learning Candidate
Under Knowledge Review
Approved or Rejected
Published as Knowledge
Superseded or Retired
```

Operational closure never depends on learning approval or publication. Reality
and Learning contexts may share identity and lineage conventions, but context
does not change Evidence standards, authority, or lifecycle ownership.

## Canonical relationships

| Contribution | Relationship and authority |
| --- | --- |
| Evidence | Immutable source reference with provenance; snapshot only when materially used in reasoning or decision history |
| Operational Inquiry | Versioned linked child contribution describing uncertainty and its resolution |
| Operational Investigation | Linked, repeatable work episode; a Matter may have many |
| Operational Reasoning | Versioned interpretation with input lineage |
| Decision | Authoritative linked record with rationale and decision-time snapshot |
| Decision Laboratory | Non-authoritative branch from a named Matter version |
| Organizational Context | Live source reference; traceable decision-time snapshot only when material |
| Calendar Commitment | External authoritative reference; scheduling status is never copied as Matter truth |
| Operational Action | Linked execution record owned by its execution capability |
| Outcome | Linked assessment against decision intent and expected effect |
| Operational Memory | Indexed historical reference to Matters, Decisions, and Outcomes |
| Knowledge | Separately governed publication derived from learning lineage |

A live reference must never be presented as a historical snapshot. Every snapshot
identifies its source, source version or retrieval time, reason, and creating
actor. Snapshots preserve historical interpretation; they do not transfer native
authority to the Matter.

## Capability write boundaries

- **Operational Investigation** establishes and evaluates facts concerning the
  Matter.
- **Operational Inquiry** identifies, prioritizes, and resolves uncertainty.
- **Investigation Orchestration** coordinates inquiries, Evidence requests,
  participants, dependencies, and progress.
- **Operational Reasoning** creates versioned interpretations from traceable
  inputs.
- **Decision Readiness** evaluates whether Evidence, uncertainty, authority, and
  alternatives are sufficient for owner judgment.
- **Decision Laboratory** explores non-authoritative alternatives.
- **Operational Memory** retrieves relevant historical Matters, Decisions, and
  Outcomes; it is not approved Knowledge.
- **Operational Organization Model** supplies roles, ownership, escalation,
  authority, and operating context.
- **Watson Professional Ethos** governs behavior, transparency, epistemic
  discipline, and authority boundaries across all capabilities.

Each capability may write only its governed contribution. No capability may
silently modify another capability's authoritative record.

## Decision Laboratory branches

A Laboratory branch records its parent Matter identity, source Matter version,
assumptions, selected Evidence snapshots, modeled reasoning, alternative
Decisions, expected Outcomes, creator, model provenance, timestamp, and branch
status. It is exploratory and non-authoritative. Laboratory output is not
Evidence.

Promotion creates an explicit proposal against the canonical Matter. Only owner
approval creates an authoritative Decision. Promotion or rejection never erases
branch history.

## Integration and scalability

ERP, CRM, scheduling, communications, reporting, external Evidence, AI models,
and organizational Knowledge integrate through stable typed references and
source-owned records. The Matter coordinates identity and traceability without
becoming a replicated enterprise database. When a source changes or is
unavailable, Management OS distinguishes current references, historical
snapshots, and unresolved freshness rather than manufacturing continuity.

## Experience contract

The [Operational Situation Board Architecture](OPERATIONAL_SITUATION_BOARD_ARCHITECTURE.md)
governs the primary Matter workspace. The Board is a state-sensitive projection
of current operational understanding, never a parallel record or authority.

User-facing language should make clear that the Matter is the enduring situation,
an Investigation is work performed concerning it, multiple Investigation episodes
may occur, closure is reversible through governed reopening, and Laboratory
branches are exploratory. Interfaces may use natural labels such as “matter,”
“investigation,” and “reopen” without exposing control-plane terminology.

This document introduces no Matter entity, persistence, migration, backend,
runtime, AI behavior, or production interface.
