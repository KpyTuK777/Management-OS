# Operational Reasoning Model

## Purpose and status

This document defines the shared reasoning grammar used by real Operational Cases,
Operational Gym exercises, and Scenario Simulation in Management OS.

| Property | Decision |
| --- | --- |
| Status | Approved product architecture; not implemented |
| Delivery milestone | Sprint 8 architecture; post-v1 capability direction |
| Accountable owner | Product Architect & AI Strategist |
| Product approval | Product Owner |
| Canonical concept | Operational Reasoning Model |
| Authority | Shared reasoning stages, environment contracts, truth separation, and learning-promotion boundaries |
| Primary audience | Product, architecture, design, engineering, data, documentation, and AI collaborators |
| Lifecycle | Updated when the cross-environment reasoning grammar or truth boundaries change |
| Related documents | Operational Case Architecture, Case Evidence Architecture, Scenario Simulation Architecture, Personal Operational Model |

This architecture defines no current entity, persistence contract, runtime,
interface, migration, or AI behavior.

## Product role

Management OS is an **Operational Intelligence Platform**: it helps the owner
continuously improve operational capability through evidence-based reasoning,
human judgment, safe experimentation, and verified learning.

The platform does not optimize for accumulated records. Knowledge is compounding
operational capital, while better operational decisions, verified outcomes, and
improved capability are the governing product results.

## Shared reasoning grammar

All supported environments use the same non-linear grammar:

```text
Situation and intent
  -> Current and intended condition
  -> Evidence and uncertainty
  -> Analysis and hypotheses
  -> Alternatives and decision
  -> Action, exercise response, or scenario
  -> Result or modeled output
  -> Review and learning
  -> Promotion decision
```

The grammar standardizes how the owner thinks; it does not assert that all stages
are mandatory, linear, equally detailed, or represented by one stored entity.

## Environment contracts

| Environment | Primary object | Truth basis | Consequence | Learning destination |
| --- | --- | --- | --- | --- |
| Reality | Operational Case | Authorized real Evidence and observed outcomes | Real operational action and consequence | Case learning; explicitly approved organizational Knowledge or practice |
| Operational Gym | Gym Case | Fictional, historical, or curated exercise material | Training feedback only | Training History or a future Owner Learning Record; never organizational Evidence |
| Simulation | Scenario Branch | Frozen real Case baseline plus explicit assumptions and model logic | Plausible conditional output; no direct operational consequence | Scenario History and decision context; observed Evidence only after real execution |

These contracts share terminology and reasoning structure while preserving distinct
truth, action, outcome, and promotion semantics. A Gym Case is not a real Case. A
Scenario Branch is not a clone of a real Case. A simulated outcome is never an
observed outcome.

## Canonical principles

1. Shared reasoning never means shared truth.
2. Reality, Gym, and Simulation remain visibly and technically distinguishable.
3. Real Case Evidence follows the Case Evidence Architecture.
4. Gym material never enters organizational Evidence or analytics.
5. A Scenario Branch begins from an immutable decision-time baseline snapshot.
6. Assumptions and scenario parameters are not Evidence.
7. Simulated outputs are conditional modeled results, not observations or predictions.
8. Every material real decision preserves its decision-time basis and later outcome.
9. Environment-specific learning requires explicit promotion into any durable owning domain.
10. The Personal Operational Model remains owner-approved context and preference, not a performance profile.
11. AI may prepare, compare, explain, and recommend; consequential changes require owner approval.
12. Home remains the stable primary workspace and complete capabilities remain directly available.

## Decision traceability

A material decision is one whose cost, reversibility, operational consequence,
risk, or governance significance justifies a durable trace. Each material real
decision preserves:

- the decision-time Evidence snapshot;
- assumptions, alternatives, uncertainty, and rationale;
- success measures, guardrails, approval, and responsible owner;
- review or invalidation conditions;
- the later observed outcome and learning decision.

Routine, low-consequence choices need not incur this administrative cost. Product
and implementation proposals must define a proportionate materiality threshold.

## Relationship with Personal Operational Model

Real work primarily updates operational and organizational Evidence. Gym work may
create Training History, and Simulation may create Scenario History. Neither may
silently update the Personal Operational Model.

The Personal Operational Model may receive only explicitly approved preferences,
context, or assistance settings. Competence assessment, training performance, and
longitudinal capability development require a future **Owner Learning Record** or
**Operational Capability Development Model** architecture and are intentionally
deferred.

## Information architecture

```text
Home
  -> Reality: active Cases, decisions, actions, and verification
  -> Operational Gym: isolated practice Cases
  -> Scenario Simulation: contextual branches from a real Case
```

Home may prioritize the relevant environment without replacing the stable primary
workspace. Scenario Simulation begins contextually from a real Case rather than as
a top-level destination. Persistent environment indicators, direct navigation,
Search, accessibility, neutral presentation, and non-AI degraded operation remain
required.

## Degraded operation

Reality Cases and their decision traces remain usable without AI. Gym exercises
whose materials are locally available remain navigable without generated coaching.
Existing Scenario Branches remain inspectable with their baseline, assumptions,
logic, limits, and outputs; new AI-dependent modeling is unavailable rather than
replaced by unmarked guesses.

Implementation requires a separate proportionate proposal or plan and explicit
APPLY authorization.
