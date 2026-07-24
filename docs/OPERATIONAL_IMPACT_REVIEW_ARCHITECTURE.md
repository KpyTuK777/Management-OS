# Operational Impact Review Architecture

## Purpose and status

This document defines the governed bridge between an authoritative owner Decision
and detailed Execution Planning.

| Property | Decision |
| --- | --- |
| Status | Approved canonical future architecture; not implemented |
| Delivery milestone | Sprint 15 |
| Canonical concept | Operational Impact Review |
| Authority | Decision-impact analysis, proposed operational adaptations, owner disposition, planning handoff, and proportional skip record |
| Related documents | Operational Matter Architecture, Unified Operational Investigation Architecture, Operational Operating Model, Operational Memory Architecture, Knowledge Evolution Architecture |

An **Operational Impact Review** evaluates how an approved Decision should be
absorbed by the operating system of the organization before execution begins. It
does not reconsider the Decision or create an execution plan.

```text
Authoritative owner Decision
  -> proportionate Operational Impact Review
  -> owner-approved operational adaptations
  -> Execution Planning
  -> Execution
  -> Outcome Assessment
```

## Scope

The review may evaluate affected:

- processes, process steps, handoffs, dependencies, and capacity points;
- organizational functions, departments, roles, and responsibilities;
- systems, integrations, information flows, and access;
- SOPs, controls, measures, and monitoring;
- communication, instruction, and training needs;
- secondary operational risks, possible new bottlenecks, and companion
  improvements required for safe absorption.

Each finding records the Decision version reviewed, affected operating element,
basis and source context, assumptions, uncertainty, proposed adaptation, expected
effect, secondary risk, validation need, and owner disposition. Findings distinguish
**Confirmed impact**, **Probable impact**, **Possible impact requiring validation**,
**Not affected**, and **Not yet assessed**.

## Proportionality

Operational Impact Review applies when Decision cost, reversibility, operational
reach, dependency, risk, or governance consequence makes the reasoning valuable.
For a local, reversible, low-risk Decision, the same reasoning may be completed
inside proportionate Execution Planning.

Before a Matter enters **In Execution**, the Decision records one of:

- impact review completed and applicable adaptations approved or rejected;
- proportionate skip with reason;
- no execution required.

The review is time-bounded. Uncertainty that does not block safe planning remains
visible as a validation or monitoring requirement rather than extending analysis
indefinitely.

## Authority and contribution boundaries

Operational Impact Review owns:

- the reviewed Decision reference and decision-time context;
- impact findings, assumptions, uncertainty, and secondary risks;
- proposed operational adaptations;
- owner approval, rejection, deferral, or validation disposition;
- the approved adaptation package and unresolved planning conditions;
- review reopening and proportional skip history.

It does not own or modify the authoritative Decision, Operating Model source
records, Evidence, SOPs, controls, tasks, plans, Executions, Outcomes, Operational
Memory, or Knowledge.

Watson may prepare, compare, challenge, and explain findings. Only the accountable
owner may approve a consequential adaptation or skip. Approval authorizes only the
identified adaptation as input to planning; each owning capability still validates
and performs its own mutation. Unapproved findings never become tasks.

## Relationship to Investigation and Decision

Operational Investigation reasons backward from a reported condition through
Evidence, process understanding, competing explanations, and Cause toward Decision
Readiness. Operational Impact Review reasons forward from the approved Decision
through operating topology toward organizational adaptation.

The review may use a completed Investigation's process understanding map,
decision-time Evidence, and authorized Operating Model snapshots. It is not
another Investigation phase. If review discovers Evidence that invalidates a
material Decision premise, the Matter returns through its existing **Decided ->
Decision Ready** or **Decided -> Under Investigation** transition. Ordinary
adaptation discovery does not reopen the Decision.

## Relationship to Operational Matter

Operational Impact Review is a linked, versioned contribution to the Matter. It is
not a Matter macro-state. **Decided** remains the authoritative posture while
impact reasoning and planning preparation occur.

A Decision may have more than one review version when scope, operating context, or
execution learning changes materially. Reopening preserves earlier findings,
dispositions, and planning handoffs.

## Execution Planning handoff

The canonical planning input is:

```text
Authoritative Decision
+ approved operational adaptations
+ unresolved impact assumptions
+ required guardrails and monitoring
-> Execution Planning
```

Operational Impact Review determines **what else must change** so the organization
can absorb the Decision. Execution Planning determines **how approved changes are
delivered**, including scope, sequence, dependencies, ownership, tasks, timing,
risk control, and validation. Planning may return a newly discovered material
impact for review without silently expanding approved scope.

## Operational Memory and Knowledge

Completed Matters may expose impact findings, approved adaptations, observed
secondary effects, stabilization strategies, and Outcomes to Operational Memory.
Operational Memory may later identify recurring impact patterns, commonly missed
adaptations, or reusable stabilization approaches. Historical recurrence is
context, not current Evidence or authority to act.

Operational Impact Review never publishes Knowledge. It or Operational Memory may
prepare a Knowledge Review Candidate when completed Evidence materially challenges
or extends approved Knowledge. The Knowledge lifecycle alone may approve, version,
publish, supersede, or retire Knowledge.

## Degraded operation

The owner can complete, skip, reopen, approve, reject, and hand off an Impact
Review without AI. Missing Operating Model context remains explicit; the product
never fills topology or predicts impact with unmarked guesses.

This architecture introduces no entity, persistence, runtime, AI behavior,
interface, migration, task, plan, SOP change, or Knowledge publication.
