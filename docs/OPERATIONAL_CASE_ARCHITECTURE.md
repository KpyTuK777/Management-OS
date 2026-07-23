# Operational Case Architecture

## Purpose and status

This document defines the Operational Case as the primary operational aggregate
for bounded, non-routine problem-solving, investigation, decision, and improvement
in Management OS.

| Property | Decision |
| --- | --- |
| Status | Approved product architecture; not implemented |
| Delivery milestone | Sprint 8 |
| Accountable owner | Product Architect & AI Strategist |
| Product approval | Product Owner |
| Canonical concept | Operational Case |
| Authority | Case purpose, lifecycle, membership, relationships, closure, and owner-facing reasoning model |
| Scope | Operational situations, domain-record relationships, AI participation, knowledge promotion, Home, Current Focus, Operating Context, and Operational Gym |
| Primary audience | Product, architecture, design, engineering, data, documentation, and AI collaborators |
| Lifecycle | Updated with approved Operational Case or case-centered information-architecture changes |
| Related documents | Product Vision, Owner Journey, Architecture, Systems, AI Assistant Architecture, AI-first Workspace, Adaptive Owner Context |

The existing domain documents remain authoritative for their records, validation,
mutation, and retention. A Case composes those records without taking their source
authority. This architecture defines no current entity, persistence contract,
runtime, interface, migration, or AI behavior.

## Definition

An **Operational Case** is the bounded context in which the owner investigates,
decides, acts, and learns about a specific operational situation.

It answers:

> What situation are we trying to understand or change, what do we know about it,
> what have we decided, and what happened?

A Case owns its situation framing, scope, lifecycle, relationships, decision
context, timeline, monitoring conditions, closure, and learning synthesis. It does
not own the authoritative Facts, SOPs, Executions, Reviews, Recommendations,
Knowledge, projects, or tasks that participate in it.

## Bounded centrality

Operational Case is the primary operational object for deviations, recurring
problems, incidents, risks, investigations, material operational questions,
improvement opportunities, experiments, and evidence-based decisions.

It is not mandatory for routine SOP execution, ordinary task completion, quick
capture, direct Knowledge or SOP maintenance, simple retrieval, or work without a
meaningful investigative or decision lifecycle.

Therefore the Case is the central mental model for resolving operational
situations, not the universal parent of every Management OS record.

## What begins a Case

A Case may originate from:

- a Symptom or deviation from expected conditions;
- an incident, risk, recurring blocker, or unresolved question;
- an improvement opportunity or owner decision;
- an Execution or Review that exposes a material issue;
- an Insight, Hypothesis, or Recommendation requiring investigation;
- direct owner intent expressed through Home or Natural Capture.

The minimum opening condition is a bounded situation or question, recognizable
reason for investigation, origin and provenance, initial scope, and explicit owner
decision to track it as a Case. A known Cause, Solution, priority, or complete
Evidence set is not required.

Natural Capture or the Assistant may prepare a Case draft. Persisting it requires
explicit owner approval. AI detection alone cannot create a Case.

## Lifecycle

The lifecycle is non-linear:

```text
Captured
  -> Framed
  -> Active
  -> Monitoring
  -> Closed
```

New Evidence may return a Case to an earlier state. Closure records one disposition:

- Resolved;
- Stabilized;
- No action required;
- Unresolved;
- Abandoned;
- Duplicate or merged;
- Superseded.

Case state and epistemic conclusion remain distinct. Closed does not mean resolved,
and resolution does not prove that every accepted explanation is universally true.
A closed Case remains historical context and may be reopened by explicit owner
action.

## Closure

A Case may close when the intended outcome is verified, a stable response is
accepted, monitoring no longer justifies investigation, the owner decides not to
act, Evidence cannot justify continued work, or the Case is abandoned, merged, or
superseded.

Closure preserves:

- disposition and reason;
- decision and observed outcome;
- unresolved uncertainty;
- adopted and rejected explanations;
- related operational changes;
- monitoring or recurrence conditions;
- Knowledge and SOP candidates.

Closing a Case does not silently close or modify linked tasks, projects,
Recommendations, Executions, Reviews, proposals, or SOPs.

## Domain participation and independence

Case membership is a typed relationship, not an ownership transfer.

| Record | Primary Case role | Independent existence |
| --- | --- | --- |
| Symptom | Entry signal or observed deviation | May remain untriaged before Case creation |
| Fact | Source-attributed input used as Evidence | Remains owned by its authoritative source |
| Report | Reproducible view or governed point-in-time artifact | May support many Cases or no Case |
| Insight | Deterministic pattern relevant to the situation | May span Cases and source domains |
| Hypothesis | Possible Case explanation with Evidence and limitations | May represent a broader cross-Case pattern |
| Cause | Owner-accepted Case conclusion after evaluated Evidence | Normally Case-bound and scoped |
| Solution | Candidate, selected, tested, adopted, rejected, or inconclusive response | Adopted output may become reusable work or practice |
| SOP | Durable reusable procedure | Remains an independent library record |
| Execution | Immutable operational history | Remains independently auditable |
| Review | Authentic reflection owned by its Execution relationship | Remains independently discoverable |
| Recommendation | Evidence-based decision object | Remains owned by Recommendations Center |
| Knowledge | Approved reusable organizational understanding | Remains owned by Knowledge lifecycle |
| Project or task | Work that delivers or monitors a response | Remains owned by its work domain |

An untriaged Symptom may exist outside a Case. Facts, Reports, Insights, SOPs,
Executions, Reviews, Recommendations, Knowledge, projects, and tasks may always
exist independently. Hypotheses may be Case-specific or cross-Case. Causes are
normally scoped conclusions within a Case rather than independent universal facts.

## Epistemic boundaries

### Symptoms

A Symptom indicates a difference between actual and expected or desired
conditions. It is not automatically a Cause, complete Fact, Case, or proof that
action is required.

### Facts and Evidence

Facts remain in authoritative source domains. The Case preserves the source,
observation time, freshness, scope, conflict state, and whether the decision used a
live reference or point-in-time Evidence snapshot. It never creates an editable
local copy presented as a separate truth.

### Reports

A Report is normally a presentation over Evidence, not a required Case child. A
persisted Report is justified only when point-in-time decision context, formal
review, external governance, or historical reproducibility requires it.

### Hypotheses and Causes

A Hypothesis expresses what might explain the situation. A Cause is an
owner-accepted, Case-scoped conclusion that preserves supporting Evidence,
evaluated alternatives, confidence, limitations, validation method, and scope.
Accepting a Cause never rewrites a Hypothesis into a universal Fact.

### Solutions

Solution state remains explicit:

```text
Candidate
  -> Selected
  -> In progress
  -> Tested
  -> Adopted / Rejected / Inconclusive
```

Selected does not mean successful. Successful in one Case does not automatically
mean standard organizational practice.

## Owner-facing reasoning model

The Case presents one coherent, non-mandatory flow:

```text
Situation
  -> Evidence
  -> Explanations
  -> Decision
  -> Action
  -> Outcome
  -> Learning
```

The interface must continue distinguishing observation from interpretation,
Hypothesis from Cause, Recommendation from decision, selected Solution from
verified outcome, closure from resolution, and learning candidate from approved
organizational Knowledge.

## Relationship with Home

Home remains the stable primary workspace. It may surface Cases requiring timely
judgment, directly supporting Current Focus, blocked or active, newly changed in
monitoring, or associated with a material Recommendation. It does not become a
complete Case dashboard.

The Case is the primary operational aggregate after a bounded situation is
established; Home remains the primary entry, continuity, and attention surface.

## Relationship with Current Focus

Current Focus identifies what deserves attention now. It may reference a Case, a
specific Case decision, an Execution or Solution action, or work unrelated to any
Case. A Case may remain active without being Current Focus.

## Relationship with Operating Context

Operating Context identifies the broader environment in which the owner works. A
Case identifies a bounded situation being resolved within or across that
environment.

A Case may link to one primary Operating Context, several relevant contexts, or no
durable context. Operating Context may affect Case prominence only. It cannot
change Case Evidence, confidence, Cause, Solution approval, membership, lifecycle,
or capability availability.

Adaptive Workspace may prioritize relevant Cases only through an approved
Workspace Emphasis and never owns or mutates them.

## AI participation

The Case provides bounded Working Context for authorized AI assistance:

```text
Owner intent
  -> Identify or prepare Case context
  -> Collect minimized authorized Evidence
  -> Preserve Facts and conflicts
  -> Prepare Insights or Hypotheses
  -> Explain uncertainty
  -> Prepare a bounded decision or Recommendation
  -> Owner approval
  -> Owning domain action
```

The Assistant may suggest an existing Case, prepare a Case draft, identify possible
duplicates, retrieve relevant Evidence, summarize state, identify evidence gaps or
conflicts, formulate explainable Hypotheses, compare alternatives, prepare a
Solution experiment, explain Recommendations, prepare closure synthesis, and
identify Knowledge or SOP candidates.

The Assistant must not create or merge Cases silently; rewrite source Facts;
convert correlation into Cause; raise confidence merely because records agree;
mark a Solution successful without outcome Evidence; close a Case autonomously;
promote Case content into organizational truth; change SOPs or Workspace Emphasis;
or use simulated Gym Evidence as organizational Evidence.

Explicit owner approval is required to persist a Case; merge or split Cases;
materially change scope; accept a Cause; select a consequential Solution; mutate a
domain record; close or reopen where consequential; promote learning; apply a
Recommendation; or create or revise an SOP.

## Learning Decision Pipeline

The Case exposes continuity across the existing pipeline without replacing it:

```text
Observed Facts
  -> Evidence
  -> Insights
  -> Hypotheses
  -> Recommendation
  -> Owner approval
  -> Action
  -> Outcome
  -> Learning candidate
  -> Approved organizational change
```

Every stage retains its authority, provenance, confidence, and approval boundary.

## Organizational knowledge

Case closure may prepare a learning synthesis containing situation, context,
Evidence, adopted and rejected explanations, decision rationale, intervention,
outcome, limitations, recurrence conditions, reusable lesson, and possible SOP
implications.

```text
Closed Case
  -> Learning synthesis
  -> Knowledge candidate or SOP proposal
  -> Owner review
  -> Explicit approval
  -> Owning Knowledge or SOP workflow
```

The Case remains historical context and Evidence. It does not itself become the
Knowledge Base or silently redefine organizational practice.

## Operational Gym

Operational Gym reuses the same Case lifecycle, reasoning model, terminology, and
epistemic distinctions in a visibly isolated simulation boundary. Coaching,
management theory, compressed time, hints, and revealed consequences may be added
without changing the Case grammar.

Simulated Facts, Evidence, Causes, Solutions, Executions, Reviews, outcomes, and
Recommendations never enter organizational truth or operational analytics. Any
lesson proposed for durable Personal Operational Model, Knowledge, or SOP use
requires an explicit, reviewed promotion into the owning domain.

## Information architecture

Case-centered operational navigation may provide intake, active, monitoring, and
closed Case views. Hypotheses, Causes, and Solutions are primarily Case
perspectives rather than mandatory top-level destinations.

Complete domain access remains available for reusable libraries, cross-Case
analysis, audit, correction, specialist work, Search, direct links, accessibility,
and degraded operation. Case-centered navigation cannot remove a capability or
make AI a mandatory intermediary.

## Degraded operation

Cases remain directly viewable and manageable when AI is unavailable. Source
records, relationships, lifecycle, Search, direct access, manual reasoning, and
owner decisions remain available. AI summaries, suggested membership, Hypotheses,
and recommendations are unavailable or clearly stale rather than silently
substituted with guesses.

## Architecture recommendation

Operational Case is approved with bounded centrality:

1. It is the primary aggregate for non-routine operational reasoning.
2. It is not required for all work or all records.
3. It owns context and relationships, not participating domain records.
4. Home remains the stable primary workspace.
5. Current Focus may reference but does not belong to a Case.
6. Operating Context may influence prominence only.
7. The Learning Decision Pipeline and owner approval remain intact.
8. Organizational Knowledge changes only through explicit promotion.
9. Operational Gym reuses the model in an isolated simulation boundary.
10. Direct domain access and degraded non-AI operation remain supported.

Implementation requires a separate proportionate proposal or plan and explicit
APPLY authorization.
