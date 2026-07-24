# Operational System Architecture

## Purpose and status

This document defines the real-world operational object that Management OS seeks
to understand, change, and improve.

| Property | Decision |
| --- | --- |
| Status | Approved canonical future architecture; not implemented |
| Delivery milestone | Sprint 17 |
| Canonical concepts | Operational System, Process Condition Assessment, Operational System Map, Stabilization Assessment |
| Authority | Operational-system definition and boundary, system-versus-model distinction, process participation, condition-assessment semantics, system-map projection, and stabilization relationship |
| Related documents | Operational Operating Model, Operational Matter Architecture, Operational Situation Board Architecture, Operational Impact Review Architecture, Progressive Understanding Architecture, Operational Memory Architecture |

## Operational System

An **Operational System** is a bounded network of processes, operational
capabilities, people, decision rights, information and material flows, systems,
controls, dependencies, constraints, and feedback loops that collectively
produces operational outcomes.

The Operational System is the real-world object being investigated or changed. It
is not a software aggregate, persisted master model, module, organization chart,
workflow definition, or source of authority.

Its boundary is Matter-relative. An Investigation identifies the smallest useful
system boundary that contains the condition, material relationships, relevant
outcomes, and plausible influences. Boundaries may cross departments and
organizational edges and remain explicitly incomplete or revisable.

```text
Real organization
  -> bounded Operational System
  -> governed Operational Operating Model references
  -> Matter-relative Investigation and Board projections
```

## Operational Operating Model relationship

The [Operational Operating Model](OPERATIONAL_OPERATING_MODEL.md) is the sole
governed representation of authorized operational topology and current operating
context. No parallel Operational System Model is introduced.

The model may represent:

- intended organizational outcomes;
- processes, steps, flows, dependencies, capacity points, and handoffs;
- operational capabilities and their organizational owners;
- people, roles, teams, decision rights, and escalation;
- information and material flows;
- systems, integrations, and enabling infrastructure;
- controls, policies, constraints, measures, and feedback loops;
- customers, suppliers, regulators, and other relevant external actors.

Source capabilities retain authority. Matters and Investigations reference
authorized current topology and preserve traceable snapshots only when materially
used in reasoning, Decision, impact, execution, or Outcome assessment.

## Process-centered Investigation

Processes are first-class, typed, referenceable operating elements. A process or
step may participate in an Investigation as:

- a symptom-producing flow or Evidence source;
- an operational dependency, handoff, constraint, or bottleneck;
- an uncertainty source, candidate explanatory factor, risk, or strength;
- an affected element in Operational Impact Review;
- a scope for execution, monitoring, Outcome, or learning.

Investigation follows system behavior and relationships rather than presuming
departmental fault. Process centrality is not process reductionism. Authority,
people, skills, incentives, informal coordination, technology, suppliers, demand,
resources, regulation, controls, and external conditions remain equally eligible
when Evidence makes them material.

## Process Condition Assessment

A **Process Condition Assessment** is an Investigation- or Outcome-owned,
explainable projection of the observed condition of a defined process scope. It
is not a KPI, durable property of the process, Watson opinion, performance score,
or substitute for Evidence.

Canonical qualitative condition:

- **Within expected operating range**
- **Stable with observations**
- **At risk**
- **Degraded**
- **Failed within defined scope**
- **Unknown**

Understanding confidence remains separate:

- **Insufficient Evidence**
- **Limited**
- **Supported**
- **Strongly supported**
- **Contradicted or disputed**

Every material assessment preserves the referenced process and scope, expected or
intended condition, observed condition and interval, measures and qualitative
observations, supporting and contradictory Evidence, uncertainty, alternatives,
confidence basis, Investigation or Outcome provenance, actor, approval status,
freshness, and invalidation conditions.

Watson may prepare, compare, and explain an assessment. The governing
Investigation or Outcome capability and applicable owner approval determine its
accepted status. Absence of identified failure never establishes health.

**Process Health** may be used as plain owner-facing language only when the
underlying condition and understanding confidence remain separately inspectable.

## Operational System Map

An **Operational System Map** is a Matter-relative projection of relevant
Operational Operating Model topology, current Investigation understanding, and
source-owned operational contributions.

It may show processes, capabilities, roles, systems, controls, external actors,
flows, dependencies, feedback, condition assessments, uncertainty, changes, and
current focus. It distinguishes source-confirmed, inferred, disputed, missing,
stale, and historical relationships.

The map belongs to the Living Situation Board projection contract. Under
[Progressive Understanding](PROGRESSIVE_UNDERSTANDING_ARCHITECTURE.md), it
constructs only the topology meaningful to the current Matter and grows as
governed understanding develops. It never becomes a complete enterprise atlas by
default.

Visual position or emphasis is reversible presentation judgment. It is not
organizational truth, causal proof, Evidence weight, process condition,
accountability, or priority authority.

## Decision and Operational Impact Review

Operational Investigation reasons about current system behavior. An authoritative
Decision intends to alter that behavior. Operational Impact Review compares the
Decision with the relevant current topology and evaluates expected changes,
inconsistencies, invalid assumptions, secondary risks, companion improvements,
and required adaptations.

Impact findings remain proposals until owner disposition. Expected change is not
observed Outcome, and approved adaptation is not proof of stabilization.

The [Operational Transition Architecture](OPERATIONAL_TRANSITION_ARCHITECTURE.md)
connects the authoritative executable Decision and Intended Operating Condition
to approved adaptations, source-owned execution, observed Outcome, and
stabilization without changing those capability authorities.

## Stabilization Assessment

A **Stabilization Assessment** is a proportionate contribution within Outcome
Assessment. It evaluates whether intended operational behavior and required
adaptations are sustained after execution.

It may assess:

- sustained intended behavior over an appropriate interval;
- guardrail and control performance;
- dependency and handoff adaptation;
- secondary failures, displacement, and new bottlenecks;
- temporary workarounds or hidden instability;
- monitoring coverage, residual uncertainty, and recurrence conditions.

Valid dispositions include **Stable**, **Provisionally stable**, **Unstable**,
**Outcome unknown**, **Inconclusive**, and **Further action required**.

Stabilization Assessment is not mandatory for every Investigation. It applies
proportionately to executed interventions where durability, dependency, risk, or
system reach makes stabilization material. Investigation-only, no-action, and
low-consequence Matters may not require it.

It introduces no Matter macro-state. The existing **Outcome Assessed -> In
Execution** transition remains available when further approved action is needed.
“Operational System stabilized” is an Evidence-supported Outcome disposition, not
a universal completion condition.

## Operational Memory and Knowledge

Completed episodes may expose bounded system topology, Process Condition
Assessments, interventions, adaptations, stabilization dispositions, and observed
Outcomes to Operational Memory. Memory may identify recurring system behaviors and
successful stabilization patterns without treating recurrence as current Evidence
or authority to act.

Reusable operating patterns become Knowledge only through the separately governed
Knowledge Review lifecycle. Neither a system map nor a successful intervention
silently becomes organizational Knowledge or a reusable SOP.

## Integration boundary

ERP, CRM, workflow, reporting, communications, sensor, and document integrations
may enrich authorized understanding of process behavior, outcomes, flows,
dependencies, ownership, and controls. They retain source authority, access,
provenance, freshness, and correction boundaries. Integration does not require
copying an enterprise system or elevating process behavior above accountability.

This architecture introduces no entity, graph store, process engine, BPM
capability, visualization, health score, persistence, migration, runtime, AI
behavior, integration, or interface.
