# Decision Laboratory and Scenario Simulation Architecture

Watson applies the [Watson Professional Ethos](WATSON_PROFESSIONAL_ETHOS.md) by
keeping assumptions and modeled consequences distinct from current Evidence,
explaining limitations, and preserving the owner's source Operational Matter and
decision authority.

## Purpose and status

This document defines the Scenario Branch contract used by the Decision Laboratory,
an optional capability branching from a specific version of an
[Operational Matter](OPERATIONAL_MATTER_ARCHITECTURE.md).

| Property | Decision |
| --- | --- |
| Status | Approved product architecture; not implemented |
| Delivery milestone | Sprint 8 architecture; late post-v1 capability direction |
| Accountable owner | Product Architect & AI Strategist |
| Product approval | Product Owner |
| Canonical concept | Decision Laboratory Scenario Branch |
| Authority | Scenario baseline, assumptions, modeled outputs, validation, uncertainty, language, and promotion boundaries |
| Primary audience | Product, architecture, design, engineering, data, AI, risk, and documentation collaborators |
| Lifecycle | Updated when simulation scope, governance, or scenario semantics change |
| Related documents | Operational Reasoning Model, Operational Case Architecture, Case Evidence Architecture, AI Capability Roadmap |

This architecture defines no current simulation engine, data model, interface, or
predictive capability.

## Definition

A **Scenario Branch** is an owner-invoked, bounded exploration of plausible
conditional outcomes from an immutable Matter-version baseline.

```text
Operational Matter at named version
  -> Decision-time baseline snapshot
      -> Scenario A
      -> Scenario B
      -> Scenario C
```

A Scenario Branch is not an editable clone of the Case, a prediction, a plan, an
observed result, or authorization to act.

Matter state affects presentation, not Laboratory authority. Branching may be
useful during assessment, investigation, readiness, reconsideration, or outcome
follow-up. Creating, comparing, promoting, rejecting, or discarding a branch never
changes Matter state. A branch may support a transition proposal, but only the
governed Matter transition authority records an approved transition.

The owner enters it through the Decision Laboratory from current decision work.
The transition and return preserve parent Matter identity, source Matter version,
baseline time,
changed assumptions, modeled status, and decision being explored. It is not a
destination or disconnected library and works in either Investigation Context.

## Required scenario contract

Every Scenario Branch declares:

- intended use and decision question;
- parent Matter identity, source Matter version, and immutable baseline snapshot;
- creator, creation time, branch status, and applicable Operating Context;
- model identity, version, and provenance where AI or simulation contributes;
- explicit assumptions, variables, ranges, and constraints;
- causal or model logic, source, version, and provenance;
- calibration or validation basis when one exists;
- uncertainty, sensitivity, material limitations, and unsupported inferences;
- valid operating envelope and expiry or review condition;
- plausible conditional outputs and comparison criteria.

Branch comparison should also expose operational risks, unintended consequences,
second-order effects, resource displacement, delayed effects, reversibility, and
monitoring needs when material to the intended use.

Where calibration or validation is insufficient, the product must say so. Detail
or numerical precision must not imply credibility.

## Language and confidence

Scenario output uses **plausible**, **conditional**, **under these assumptions**,
and **modeled output**. It avoids **will**, **prediction**, **most likely**, or
numerical decision confidence unless a separately governed forecasting method
justifies those claims.

The product communicates decision readiness and calibrated uncertainty, not a
single synthetic confidence score.

## Interaction with the real Matter

An owner may create, compare, archive, or discard Scenario Branches from a real
Matter. A material real Decision may reference the scenarios considered, but the
decision remains governed by its real Evidence snapshot, assumptions, rationale,
guardrails, and owner approval.

Scenario output may prepare an explicit proposal or test plan against the Matter.
Only owner approval may create an authoritative Decision. A branch cannot mutate
the Matter baseline, become observed Evidence, verify a Solution, close a Matter, modify
an SOP, or trigger real execution without the applicable owner decision and
owning-domain workflow.

Promotion, rejection, archive, or discard never erases branch history. The
branch remains traceable to its parent Matter and source version.

## AI participation

AI may help frame the decision question, propose clearly labeled assumptions,
identify variables and missing Evidence, prepare alternative branches, run an
authorized model, compare sensitivity, explain limitations, and summarize tradeoffs.

AI must not silently choose the baseline, conceal assumptions, present generated
causal logic as validated, optimize toward one preferred outcome, describe a
modeled result as observed, or autonomously apply a scenario. Material scenario
creation, model choice, decision use, and operational action require owner review
at the appropriate boundary.

## Relationship with Predictive Operational Insights

Scenario Simulation is owner-invoked exploration of explicit alternatives.
Predictive Operational Insights are a future proactive forecasting capability
grounded in longitudinal Evidence. They are distinct capabilities that may reuse
scenario governance, provenance, uncertainty, validation, and presentation
foundations. A scenario does not become a forecast merely because it uses numbers.

## Relationship with Operational Gym

Operational Gym uses isolated exercises to develop judgment. Scenario Simulation
uses a real Case baseline to support a real owner decision without causing direct
operational consequences. Both use the Operational Reasoning Model, but Gym
material and scoring never enter a real Case or Scenario Branch as organizational
Evidence.

## Information architecture and degraded operation

Scenario Simulation is initially a contextual Case workspace, not a top-level
navigation module. The interface persistently identifies the originating Case,
baseline time, assumptions, environment, and modeled status.

When AI or simulation services are unavailable, existing Scenario Branches remain
inspectable and comparable. Their contract and provenance remain available; new
generated outputs are unavailable rather than approximated without disclosure.

Implementation requires a staged proposal beginning with qualitative branches,
followed only by governed models whose intended use, validation, and limitations
are proportionate to decision risk, plus explicit APPLY authorization.
