# Scenario Simulation Architecture

## Purpose and status

This document defines safe Scenario Simulation for exploring plausible future
outcomes from a real Operational Case.

| Property | Decision |
| --- | --- |
| Status | Approved product architecture; not implemented |
| Delivery milestone | Sprint 8 architecture; late post-v1 capability direction |
| Accountable owner | Product Architect & AI Strategist |
| Product approval | Product Owner |
| Canonical concept | Scenario Branch |
| Authority | Scenario baseline, assumptions, modeled outputs, validation, uncertainty, language, and promotion boundaries |
| Primary audience | Product, architecture, design, engineering, data, AI, risk, and documentation collaborators |
| Lifecycle | Updated when simulation scope, governance, or scenario semantics change |
| Related documents | Operational Reasoning Model, Operational Case Architecture, Case Evidence Architecture, AI Capability Roadmap |

This architecture defines no current simulation engine, data model, interface, or
predictive capability.

## Definition

A **Scenario Branch** is an owner-invoked, bounded exploration of plausible
conditional outcomes from an immutable decision-time baseline of a real
Operational Case.

```text
Real Operational Case
  -> Decision-time baseline snapshot
      -> Scenario A
      -> Scenario B
      -> Scenario C
```

A Scenario Branch is not an editable clone of the Case, a prediction, a plan, an
observed result, or authorization to act.

## Required scenario contract

Every Scenario Branch declares:

- intended use and decision question;
- originating Case and immutable baseline snapshot;
- owner, creation time, and applicable Operating Context;
- explicit assumptions, variables, ranges, and constraints;
- causal or model logic, source, version, and provenance;
- calibration or validation basis when one exists;
- uncertainty, sensitivity, material limitations, and unsupported inferences;
- valid operating envelope and expiry or review condition;
- plausible conditional outputs and comparison criteria.

Where calibration or validation is insufficient, the product must say so. Detail
or numerical precision must not imply credibility.

## Language and confidence

Scenario output uses **plausible**, **conditional**, **under these assumptions**,
and **modeled output**. It avoids **will**, **prediction**, **most likely**, or
numerical decision confidence unless a separately governed forecasting method
justifies those claims.

The product communicates decision readiness and calibrated uncertainty, not a
single synthetic confidence score.

## Interaction with the real Case

An owner may create, compare, archive, or discard Scenario Branches from a real
Case. A material real decision may reference the scenarios considered, but the
decision remains governed by its real Evidence snapshot, assumptions, rationale,
guardrails, and owner approval.

Scenario output may prepare a Recommendation or test plan. It cannot mutate the
Case baseline, become observed Evidence, verify a Solution, close a Case, modify
an SOP, or trigger real execution without the applicable owner decision and
owning-domain workflow.

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
