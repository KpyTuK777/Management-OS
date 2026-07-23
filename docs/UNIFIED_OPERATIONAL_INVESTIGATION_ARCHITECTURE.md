# Unified Operational Investigation Architecture

## Purpose and status

This document is the canonical product architecture for the single Operational
Investigation lifecycle, Investigation Context, and Decision Laboratory.

| Property | Decision |
| --- | --- |
| Status | Approved future architecture; prototype aligned |
| Delivery milestone | Sprint 10 |
| Canonical concepts | Operational Investigation, Investigation Context, Decision Laboratory |
| Authority | Lifecycle unity, context behavior, navigation simplification, and Laboratory placement |

It introduces no backend, AI runtime, persistence, or production capability.

## One lifecycle

```text
Symptom -> Operational Investigation -> Evidence -> Operational Inquiry
-> Operational Reasoning -> Decision Readiness -> Owner Decision
-> Outcome -> Knowledge
```

An Investigation is the owner-facing form of the bounded Operational Case. Its
records remain governed by their canonical domain authorities. Neither learning
purpose nor modeled exploration creates another Case type or lifecycle.

## Investigation Context

**Investigation Context** is a lightweight, owner-controlled behavioral setting:

- **Operational Reality** prioritizes speed, Evidence quality, operational risk,
  execution support, Decision Readiness, and minimum cognitive noise.
- **Operational Learning** prioritizes explanation, theory integration, coaching,
  reflective questions, alternative comparison, and learning capture.

Context changes AI guidance, explanation depth, recommendation emphasis, and
presentation only. It never changes capabilities, lifecycle stages, evidence
standards, decision authority, or access. Student Mode defaults new Investigations
to Operational Learning; Work Mode defaults them to Operational Reality. The owner
may override that default for every Investigation. A mode change cannot silently
change an active Investigation.

## Decision Laboratory

The **Decision Laboratory** is an optional capability inside any Investigation. It
forks an explicit, immutable origin baseline so the owner can test alternative
hypotheses, model decisions, explore strategies, compare conditional consequences,
discard experiments, and return to the source Investigation. Operational Learning
may encourage it; Operational Reality may invoke it when useful.

Laboratory outputs are modeled, never observed Evidence, predictions, decisions,
or authorization to act. Returning preserves the source state. Promotion requires
an explicit owner action and normal validation. The detailed branch contract is
governed by the [Scenario Simulation Architecture](SCENARIO_SIMULATION_ARCHITECTURE.md).

## Experience, AI, and authority

Home remains the stable primary workspace. Navigation exposes **Operational
Investigations**, not parallel Reality and Operational Gym destinations. Context is
selected during creation and visible in the workspace. The Decision Laboratory is
entered only from an Investigation.

The AI Investigation Partner uses the same capability set in both contexts. It may
recommend a context or Laboratory branch, but the owner selects, changes, accepts,
discards, decides, and acts. Current Evidence overrides historical patterns and
modeled outputs. Uncertainty, assumptions, provenance, and context remain visible.
Degraded operation retains the selected label and complete manual lifecycle; it
does not imply unavailable AI behavior occurred.

## Compatibility

Earlier references to Reality, Operational Gym, and Simulation as parallel
environments describe superseded product organization. Their valid truth-separation
rules survive as Investigation Context and Decision Laboratory branch boundaries.
Historical decision and changelog records remain unchanged as history.
