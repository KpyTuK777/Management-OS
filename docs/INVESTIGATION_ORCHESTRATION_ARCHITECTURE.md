# Investigation Orchestration Architecture

Investigation Orchestration applies the
[Watson Professional Ethos](WATSON_PROFESSIONAL_ETHOS.md) by exposing objectives,
constraints, acquisition costs, assumptions, alternatives, uncertainty, and owner
approval boundaries without claiming global optimality.

## Purpose and status

This document defines how Management OS prepares an effective, explainable
sequence for acquiring Evidence and advancing an Operational Investigation
concerning an [Operational Matter](OPERATIONAL_MATTER_ARCHITECTURE.md).

Orchestration owns coordination state only. It may coordinate multiple
Investigation episodes for one Matter, but it cannot replace Matter identity,
silently change its authoritative macro-state, or copy Evidence, scheduling,
execution, organizational, Decision, Outcome, or Knowledge authority.

| Property | Decision |
| --- | --- |
| Status | Approved future AI capability architecture; not implemented |
| Delivery milestone | Sprint 10 architecture; post-v1 capability direction |
| Canonical concepts | Investigation Orchestration, Evidence Need, Operational Action, Evidence Acquisition Profile |
| Authority | Investigation action proposals, sequencing, optimization objective, explainability, scheduling handoff, and owner approval |
| Related documents | Operational Inquiry Architecture, Case Evidence Architecture, Operational Operating Model, AI Assistant Architecture |

## Capability boundary

**Investigation Orchestration** recommends how to address an approved uncertainty
or Evidence Need efficiently. It is a capability inside an Investigation, not a
module, autonomous plan, task generator, or calendar optimizer.

```text
Operational Inquiry
  -> Evidence Need
  -> proposed Operational Action
  -> owner review
  -> owner-approved scheduling handoff
  -> Evidence collection
  -> updated Investigation
```

Operational Inquiry asks what uncertainty is valuable to address. Investigation
Orchestration asks how the owner could address it. Evidence Need, Operational
Action, Task, Calendar Commitment, collected Evidence, and conclusion remain
separate records or states; none silently creates the next.

## Sequencing policy

The capability may compare logical dependencies, Evidence readiness, expected
duration and waiting time, travel, organizational constraints and availability,
report preparation, communication preferences, bottlenecks, authorization, risk,
and expected investigative value.

The objective is Investigation quality and friction reduction, not maximum calendar
utilization. The AI must explain:

- the uncertainty and Evidence Need being served;
- the factors and constraints considered;
- important assumptions, missing context, and uncertainty;
- why the proposed order is preferable and what alternatives remain;
- what requires authorization, assignment, contact, or scheduling approval.

It must not claim a globally optimal sequence. Safety, irreversible consequence,
Evidence expiry, and delay cost may justify a higher-cost action.

## Evidence Acquisition Profile

An **Evidence Acquisition Profile** is Investigation-specific planning metadata,
not evidentiary weight or a property of truth. Where known, it describes qualitative
or ranged expected effort, waiting time, accessibility, owner time, organizational
disruption, authorization and privacy constraints, freshness risk, dependencies,
expiry, expected investigative value, and expected uncertainty reduction.

Lower acquisition cost is preferred only when reasoning value, reliability, risk
reduction, and delay consequences are materially comparable. The profile preserves
source or basis, confidence, scope, and observed-versus-estimated status. Actual
acquisition outcomes may improve future estimates only through governed,
explainable learning; they never increase the acquired item's truth authority.

## Owner authority and degraded operation

The AI may prepare, compare, re-plan, and recommend. The owner controls
Investigation direction and approves consequential actions, contact, assignment,
scheduling, access, and operational decisions. Calendar and task systems remain
execution authorities. If optimization, organizational context, or integrations
are unavailable, the Investigation retains manual actions, visible dependencies,
and explicit uncertainty without losing capabilities.

Matter state influences orchestration emphasis but is never derived from checklist
completion. Under Assessment emphasizes ownership and scope; Under Investigation
emphasizes Evidence dependencies and uncertainty reduction; Decision Ready
emphasizes unresolved prerequisites; In Execution emphasizes linked source-system
work and guardrails. Orchestration may recommend a Matter transition and attach
its coordination evidence, but it cannot approve or record the authoritative
transition.
