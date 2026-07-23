# Unified Operational Investigation Architecture

## Purpose and status

This document is the canonical capability architecture for Operational
Investigation, Investigation Context, and the placement of Decision Laboratory.
The enduring operational identity and lifecycle are governed by the
[Operational Matter Architecture](OPERATIONAL_MATTER_ARCHITECTURE.md).

| Property | Decision |
| --- | --- |
| Status | Approved future architecture; prototype aligned |
| Delivery milestone | Sprint 10 |
| Canonical concepts | Operational Investigation, Investigation Context |
| Authority | Investigation episodes, investigation-centered experience, context behavior, navigation simplification, and Laboratory placement |

It introduces no backend, AI runtime, persistence, or production capability.

## One Matter, repeatable Investigations

```text
Reported Operational Matter
  -> one or more Operational Investigations
      -> Inquiry, Evidence, and Reasoning contributions
  -> Decision Readiness -> Owner Decision -> Execution -> Outcome
```

An Investigation is a bounded, repeatable work episode concerning an Operational
Matter. It establishes and evaluates facts; it does not own the Matter's identity,
macro-state, complete lifecycle, or records belonging to other capabilities. A
Matter may exist before Investigation, contain multiple Investigations, close,
and later reopen without receiving a new canonical identity.

The Investigation remains a primary owner-facing work experience, not a universal
data owner. It operates on the Matter identity and authorized references to
organizational context, Evidence, actions, calendar commitments, executions,
outcomes, and Knowledge. Those capabilities retain independent authority.
At Matter level, these contributions are oriented through the
[Operational Situation Board](OPERATIONAL_SITUATION_BOARD_ARCHITECTURE.md).
Multiple Investigation episodes may contribute to that picture without losing
episode boundaries, conflicting interpretations, lineage, or reasoning history.

## Investigation-centered action

When uncertainty requires work, the Investigation may connect Operational Inquiry,
an Evidence Need, an owner-reviewed Operational Action, an approved scheduling
handoff, Evidence collection, and updated reasoning. The
[Investigation Orchestration Architecture](INVESTIGATION_ORCHESTRATION_ARCHITECTURE.md)
governs sequencing and approval. The
[Operational Organization Model](OPERATIONAL_ORGANIZATION_MODEL.md) may supply
authorized constraints and availability without becoming Case-owned data.

## Investigation Context

**Investigation Context** is a lightweight, owner-controlled behavioral setting:

- **Operational Reality** prioritizes speed, Evidence quality, operational risk,
  execution support, Decision Readiness, and minimum cognitive noise.
- **Operational Learning** prioritizes explanation, theory integration, coaching,
  reflective questions, alternative comparison, and learning capture.

Context changes AI guidance, explanation depth, recommendation emphasis, and
presentation only. It never changes Matter identity or macro-state, capabilities,
Evidence standards, decision authority, or access. Student Mode may default a new
Matter or Investigation episode to Operational Learning; Work Mode may default it
to Operational Reality. The owner may override that default. A mode change cannot
silently change an active Matter or Investigation.

## Decision Laboratory

The **Decision Laboratory** is an optional capability reached from a Matter's
decision work. It branches from an explicit Matter version and immutable baseline
so the owner can test alternative
hypotheses, model decisions, explore strategies, compare conditional consequences,
discard experiments, and return to the source Matter. Operational Learning
may encourage it; Operational Reality may invoke it when useful.

Laboratory outputs are modeled, never observed Evidence, authoritative Decisions,
or authorization to act. Returning preserves canonical Matter state. Promotion
creates a proposal; only owner approval creates an authoritative Decision. The detailed branch contract is
governed by the [Scenario Simulation Architecture](SCENARIO_SIMULATION_ARCHITECTURE.md).

## Experience, AI, and authority

Home remains the stable primary workspace. Navigation should expose active
operational work in natural language rather than parallel Reality and Operational
Gym destinations. The experience preserves the Matter as the enduring situation
while presenting its current Investigation episode where useful.

The AI Investigation Partner uses the same capability set in both contexts. It may
recommend a context, Matter transition, or Laboratory branch, but cannot make an
authoritative transition or Decision. The owner selects, changes, accepts,
discards, decides, and acts. Current Evidence overrides historical patterns and
modeled outputs. Uncertainty, assumptions, provenance, and context remain visible.
Degraded operation retains the selected label and complete manual lifecycle; it
does not imply unavailable AI behavior occurred.

## Compatibility

Earlier references to Reality, Operational Gym, and Simulation as parallel
environments describe superseded product organization. Their valid truth-separation
rules survive as Investigation Context and Decision Laboratory branch boundaries.
Historical decision and changelog records remain unchanged as history.
