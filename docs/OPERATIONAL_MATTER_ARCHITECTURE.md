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

```text
Reported
Under Assessment
Under Investigation
Decision Ready
Decided
In Execution
Outcome Assessed
Closed
```

These are authoritative macro-states, not a mandatory linear wizard. A Matter may
skip inapplicable states, move backward after new Evidence, contain concurrent
work, support multiple Investigations, close without Knowledge publication, and
reopen with its identity and prior history intact. Every transition records actor,
time, reason, and source state. Consequential transitions require the applicable
owner authority; AI may propose but cannot perform them.

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

User-facing language should make clear that the Matter is the enduring situation,
an Investigation is work performed concerning it, multiple Investigation episodes
may occur, closure is reversible through governed reopening, and Laboratory
branches are exploratory. Interfaces may use natural labels such as “matter,”
“investigation,” and “reopen” without exposing control-plane terminology.

This document introduces no Matter entity, persistence, migration, backend,
runtime, AI behavior, or production interface.
