# Adaptive Owner Context Architecture

## Purpose and status

This document defines how Management OS may adapt workspace emphasis to the
owner's current operating situation while preserving access to every capability.
It governs product and information architecture only and does not authorize or
describe implementation.

| Property | Decision |
| --- | --- |
| Status | Approved product architecture; not implemented |
| Delivery milestone | Sprint 8 |
| Accountable owner | Product Architect & AI Strategist |
| Product approval | Product Owner |
| Canonical concept | Operating Context |
| Scope | Workspace emphasis, navigation, Home, widgets, and recommendation prioritization |

This architecture extends the [AI-first Workspace Architecture](AI_FIRST_WORKSPACE_ARCHITECTURE.md),
[AI Assistant Architecture](AI_ASSISTANT_ARCHITECTURE.md), and canonical
[Owner Journey](OWNER_JOURNEY.md). It preserves their approval, direct-access,
domain-ownership, and degraded-operation boundaries.

## Canonical concept

**Operating Context** is the canonical representation of the environment in which
the owner is currently trying to achieve outcomes.

The candidate terms are not interchangeable:

| Concept | Architectural role |
| --- | --- |
| Operating Context | Canonical owner-controlled context, such as Learning, Employment, Business, or Research |
| Operational Stage | Optional condition within an Operating Context, such as Scaling within Business |
| Current Focus | Immediate outcome, problem, or commitment within the active context |
| Workspace Emphasis | Approved presentation prioritization applied by Adaptive Workspace |
| Focus Profile | Non-canonical implementation language; if used internally, it may describe only a derived workspace configuration |

Owner Context is rejected as the canonical term because it is broad enough to mix
identity, personal circumstances, preferences, and temporary work. Operational
Stage is rejected as the umbrella because contexts are not necessarily linear and
the owner may occupy several simultaneously. Focus Profile describes a possible
presentation result rather than the owner's operational situation.

```text
Owner
  -> Operating Context
       -> Context type
       -> Optional Operational Stage
       -> Current Focus
       -> Effective period
       -> Approved Workspace Emphasis
```

Examples include:

```text
Operating Context: Business
Operational Stage: Scaling
Current Focus: Improve delivery capacity
```

```text
Operating Context: Learning
Operational Stage: Applied practice
Current Focus: Develop process-analysis skills
```

## Context model

An owner may have multiple Operating Contexts. At most one is the durable primary
context used for workspace emphasis. Other contexts remain available and may be
entered directly.

A temporary active context may override durable emphasis for one session, task, or
owner-defined period without changing the durable primary context. The absence of
a primary context is valid and results in the neutral workspace.

Operating Context is not identity, authorization, organizational truth, or a
prediction. It cannot determine what the owner may access or which records are
valid.

## Ownership and authority

The owner owns the current Operating Context, Operational Stage, and Current
Focus. Responsibility is divided as follows:

| Responsibility | Authority |
| --- | --- |
| Select, change, or remove a primary Operating Context | Owner |
| Select or correct an Operational Stage | Owner |
| Preserve approved durable personal context | Personal Operational Model |
| Observe a possible context change | AI Assistant using authorized Evidence |
| Own an evidence-based context or workspace recommendation | Recommendations Center |
| Apply an exactly approved presentation configuration | Adaptive Workspace |
| Present today's operational state | Home |
| Own records, validation, and operational mutations | Existing domain modules |

The Personal Operational Model stores approved understanding but acquires no
authority over the owner. Adaptive Workspace owns presentation adaptation but
acquires no authority over capabilities, data, or domain behavior. Home presents
the result but owns neither the context nor domain records.

## Change lifecycle

### Direct durable change

The owner may explicitly select a new primary Operating Context or Operational
Stage. Before confirmation, Management OS presents whether the change is durable,
the proposed workspace emphasis, what remains unchanged, and how to reverse it.
The owner's explicit confirmation is the bounded approval for that exact change.

### Temporary context switch

The owner may select a context for a current session, task, or bounded period.
Temporary context may affect current presentation but must not become durable
personal learning or replace the primary context automatically.

### Recommended change

Authorized Evidence may support an observation that the approved context appears
outdated or that another context may deserve temporary emphasis. AI may prepare a
recommendation but must never apply it.

```text
Authorized Evidence
  -> Observation or Hypothesis
  -> Workspace optimization recommendation
  -> Consequence preview
  -> Explicit owner approval
  -> Personal Operational Model update when durable
  -> Adaptive Workspace application
```

Silence, recency, passive navigation, one event, or repeated usage alone cannot
change the context. Repeated behavior may support a recommendation only.

### Expiration and review

An owner may give a context a review date or end date. Expiration does not select a
replacement. Management OS may return to the neutral workspace, preserve the
expired context in inspectable history, and ask the owner whether to renew or
replace it. A suggested successor remains a recommendation requiring approval.

## Approval boundary

Changing a durable Operating Context or persistent Workspace Emphasis changes
personal understanding or prioritization rules and therefore requires explicit,
bounded owner approval.

Approval identifies:

- temporary or durable effect;
- selected context and optional stage;
- navigation, Home, widget, and recommendation emphasis;
- effective period where applicable;
- preserved capability access;
- reversal or neutral-reset behavior.

A generic request to personalize the workspace is not sufficient approval. A
material change to the proposed scope or consequence invalidates prior approval.

## Capability-preservation invariant

Adaptation changes presentation priority, never product capability:

```text
Available capabilities before adaptation
  = Available capabilities after adaptation
```

Operating Context may change order, prominence, grouping, default emphasis,
contextual selection, and on-demand placement. It must not change authorization,
capability availability, data access rights, record ownership, validation,
approval requirements, search coverage, direct-link access, or source-of-truth
boundaries.

## Information architecture

Navigation contains two predictable layers:

```text
Contextual emphasis
  -> Context-relevant destinations
  -> Active work
  -> Current decisions

All capabilities
  -> Stable complete navigation
  -> Global Search
  -> Direct record access
```

Context-relevant destinations may be reordered or promoted. Every capability
remains available through stable complete navigation, Search, and direct access.
The owner may pin a destination against contextual reprioritization and may reset
the workspace to neutral ordering.

Navigation must not reorder continuously from transient behavior. Persistent
reordering occurs only after a direct approved context change or an approved
workspace optimization recommendation. This preserves orientation and spatial
memory.

Illustrative emphasis may include:

| Operating Context | Possible emphasis, subject to owner approval and current state |
| --- | --- |
| Learning | Practice, Operational Gym, Reviews, and Knowledge |
| Employment | Current Focus, Projects, Executions, and SOPs |
| Business | Portfolio, operational cases, decisions, and performance |
| Business at Scaling stage | Processes, delegation, constraints, Insights, and improvements |
| Research | Capture, Evidence, Hypotheses, reports, and Knowledge |

These are starting interpretations, not fixed taxonomies or capability rules.

## Relationship with Home

Home remains the stable system and primary operational workspace. Operating
Context is a ranking input; it does not replace Home or create separate Learning,
Business, Research, or Scaling Home products.

Home applies this precedence:

```text
1. Current explicit owner intent
2. Decisions requiring timely human judgment
3. Safety, integrity, conflict, or imminent consequence
4. Active-work continuity
5. Approved Operating Context relevance
6. Contextual recommendations
7. Supporting information on demand
```

Context cannot demote urgent work, hide an active Execution, override an explicit
instruction, or manufacture urgency. Home continues to own presentation and
coordination only.

## Widget prioritization

Operating Context may reorder a widget, promote it from on-demand context, collapse
it into secondary context, or select context-relevant records for it. The same
widget capability and source records remain authoritative.

Adaptive behavior must not delete widgets automatically, permanently hide them
without approval, duplicate source-of-truth data into context-specific widgets, or
promote a context-matched widget above a timely human decision.

When prominence is not obvious, the interface should make the relevant context
reason inspectable without adding explanation noise.

## Recommendation prioritization

Operating Context may affect relevance but never Evidence strength, confidence,
or recommendation authority. Recommended selection precedence is:

```text
1. Safety, integrity, or imminent consequence
2. Explicit owner request
3. Active-work relevance
4. Evidence strength and confidence
5. Expected operational value
6. Approved Operating Context relevance
7. Recency
```

Context cannot convert an observation into a recommendation, turn a weak
Hypothesis into a strong one, hide a materially important recommendation, or imply
that a method is correct because it matches a context label. The Recommendations
Center remains the complete workspace for recommendation evidence and lifecycle;
Home presents only a relevant subset.

## AI responsibility

The Assistant may ask which context applies when the distinction materially
changes assistance, use an explicitly selected temporary context, retrieve an
approved context, explain its prioritization effect, observe evidence of a possible
change, prepare a bounded recommendation, and preview the proposed Workspace
Emphasis.

The Assistant must not infer durable context from job titles, passive browsing,
isolated activity, or one event; classify the owner into a stage automatically;
silently switch context; treat context as identity; restrict capabilities; change
presentation directly; or let an old context override current explicit intent.

Context precedence is:

```text
Canonical rules
  > Authoritative operational records
  > Current explicit owner instruction
  > Active temporary context
  > Approved durable Operating Context
  > AI inference
```

## Relationship with the Personal Operational Model

The Personal Operational Model is the future durable source for explicitly
approved Operating Context. Subject to its separate privacy, retention,
inspection, correction, and revocation governance, it may preserve primary and
secondary contexts, optional stages, effective periods, explicit Workspace
Emphasis preferences, and correction or revocation state.

Operating Context is personal operational context, not organizational Knowledge or
a psychological profile. It cannot override canonical terminology, authoritative
records, governance, or approval requirements.

## Relationship with Adaptive Workspace

Adaptive Workspace is the only future capability authorized to apply an approved
persistent presentation adaptation. It receives an exact Workspace Emphasis rather
than raw AI inference.

Every applied configuration preserves a preview, scope, reason, approval reference,
inspection path, rollback, neutral reset, direct access, and the complete
capability set. Adaptive Workspace changes no domain data, authorization, workflow
rule, recommendation confidence, or owner priority judgment.

## Degraded operation

AI unavailability does not disable Operating Context or access to the workspace.
The last explicitly approved context may continue through deterministic rules. The
owner can inspect, change, pause, or reset it manually; complete navigation,
Search, direct links, Home, and active work remain available.

No new context is inferred and no AI context-change recommendation is produced
while AI is unavailable. If approved context cannot be loaded safely, Management
OS uses the neutral workspace rather than guessing from activity. Expiration also
returns to neutral emphasis unless the owner explicitly renews or replaces the
context.

## Product and architecture review

Adaptive Owner Context reduces repeated navigation and irrelevant workspace noise
without changing what the owner may do. It preserves owner authority by separating
the owner-controlled context, AI recommendation, durable personal learning, and
applied presentation configuration.

The architecture is approved with these invariants:

1. Operating Context is the canonical concept.
2. Operational Stage is an optional attribute within a context.
3. The owner owns selection and change.
4. AI recommends but never applies a change.
5. Durable change requires explicit, bounded approval.
6. Personal Operational Model preserves approved context.
7. Adaptive Workspace applies only the exact approved emphasis.
8. Home remains stable and context is subordinate to intent, judgment, urgency,
   and continuity.
9. Navigation, widgets, and recommendations may be reprioritized but no capability
   may be removed or made inaccessible.
10. Degraded operation remains deterministic, complete, inspectable, and resettable.

Implementation requires a separate proportionate proposal or plan and explicit
APPLY authorization. This document introduces no current entity, persistence,
runtime, interface, or AI behavior.
