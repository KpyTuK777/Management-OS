# AI Assistant Architecture

## Purpose and status

The coherent character produced by this architecture is synthesized in
[AI Assistant Identity](AI_ASSISTANT_IDENTITY.md). That identity introduces no new
responsibility, boundary, authority, or implementation scope; this document
remains authoritative for Assistant architecture.

The AI Assistant is the future operational intelligence layer of Management OS.
It is not a chatbot, a domain-data owner, or an autonomous actor. Its purpose is
to understand operational context, reduce cognitive load, organize information,
ask only necessary clarification questions, and prepare bounded actions for owner
approval.

| Property | Decision |
| --- | --- |
| Status | Approved product architecture; not implemented |
| Delivery milestone | Sprint 7 — AI Operational Layer, Feature 01 |
| Accountable owner | Product Architect & AI Strategist |
| Product approval | Product Owner |
| Scope | Product architecture only |
| Excluded | LLMs, prompts, providers, APIs, cloud architecture, speech recognition, embeddings, and vector databases |

This document extends the existing architecture without redesigning Dashboard,
Notes, Knowledge Base, SOP, Executions, Reviews, Insights, Hypotheses, Operational Cases, or
Improvement Proposals. The existing [Architecture](ARCHITECTURE.md),
[Product Vision](PRODUCT_VISION.md), [Team Governance](TEAM.md), and domain
documents remain authoritative for their subjects.

The separately approved [AI Runtime Architecture](AI_RUNTIME_ARCHITECTURE.md)
defines provider-independent execution of these product responsibilities. It does
not change the Assistant's identity, authority, confidence, learning, or approval
boundaries defined here.

The Assistant's participation across the complete operational experience is
described in the [Owner Journey](OWNER_JOURNEY.md).

## Core principle

The Assistant should never ask the owner to perform organizational work it can
reasonably perform itself. It gathers context, determines the most probable
destination, prepares the result, and asks a concise clarification only when a
material ambiguity cannot be resolved safely.

High confidence removes unnecessary clarification; it does not remove approval.
The Assistant recommends and prepares, while the owner retains authority over
persistent or meaningful change.

## Responsibilities and boundaries

The Assistant may:

- interpret natural input and identify likely intent, entity, and destination;
- gather relevant context from existing modules;
- detect ambiguity, missing information, and conflicts;
- prepare structured drafts and one bounded next action;
- explain classifications, evidence, confidence, and limitations;
- ask the smallest question needed to resolve material uncertainty;
- route an approved action to its owning feature or Workflow Layer;
- observe explicit acceptance, rejection, correction, and preference decisions.

The Assistant must not:

- own domain CRUD or replace module validation;
- mutate source records or workspace state directly;
- reinterpret immutable Execution evidence;
- convert Insights or Hypotheses into facts;
- bypass the Learning Decision Pipeline or Recommendations Center;
- infer permanent preferences from passive behavior or one event;
- become a new source of organizational truth;
- assume product, architecture, design, or implementation authority.

The Assistant is an orchestration layer:

```text
Natural input or current context
  → Assistant interpretation
  → Relevant read-only domain context
  → Classification, clarification, or recommendation
  → Bounded action preview
  → Explicit owner approval
  → Owning feature or Workflow Layer validation
  → Approved domain mutation
```

## Interaction model

All future Assistant messages follow the canonical
[AI Communication Style Guide](AI_COMMUNICATION_STYLE_GUIDE.md), which preserves
the distinction between system state, AI interpretation, recommendations,
approval requests, operational confirmations, warnings, and failures.

The standard interaction cycle is:

```text
Capture
  → Understand
  → Gather relevant context
  → Classify intent and destination
  → Assess confidence
  → Clarify only when required
  → Prepare one bounded action
  → Show preview
  → Owner accepts, edits, or rejects
  → Owning module validates and applies
  → Record the explicit outcome
```

Natural Capture accepts ordinary language. For “I need to call the supplier
tomorrow,” the Assistant may identify a Task, extract its title and date, and
prepare that destination without asking the owner to classify it. Because Tasks
is currently a placeholder, the Assistant must disclose that the destination is
unavailable and offer a safe existing destination rather than pretend a Task can
be created.

Contextual assistance begins with the current entity, then uses explicitly
referenced entities, direct relationships, current workload, recent activity, and
broader patterns only as needed. The Assistant must be able to identify the
sources that materially influenced its interpretation.

Generated summaries and drafts are not sources of truth. If they conflict with a
domain record, the domain record prevails and the Assistant may propose, but not
silently apply, a correction.

## Module relationships

| Module | Assistant use | Permitted proposal | Mutation owner |
| --- | --- | --- | --- |
| Dashboard | Read focus, workload, attention, and activity context | Focus, prioritization, or simplification suggestion | Dashboard or source feature |
| Notes | Read content, provenance, and conversion state | Note draft or Knowledge candidate | Notes |
| Knowledge Base | Read entries, categories, provenance, and SOP links | Knowledge draft, relationship, or SOP candidate | Knowledge Base or bounded workflow |
| SOP | Read definitions, provenance, steps, and checklist | Procedural candidate or evidence-linked improvement | SOP or bounded workflow |
| Executions | Read active state and immutable history | Resume guidance, evidence explanation, or Review reminder | Execution |
| Reviews | Read structured reflection | Reflection support or missing-context request | Review Center |
| Insights | Read deterministic observations | Explain an observation or supply recommendation context | No mutation by Insights |
| Hypotheses | Read Evidence, confidence, and limitations | Explain a possible interpretation or supply recommendation context | No mutation by Hypotheses |
| Operational Case | Read intent, current and target conditions, measures, cycles, relationships, decisions, Evidence, results, verification, and limitations | Prepare Case drafts, Evidence gaps, Hypotheses, Countermeasures, comparisons, verification approaches, closure synthesis, or bounded handoff | Case persistence, scope or intent change, Cause acceptance, consequential Countermeasure, outcome acceptance, standardization, closure, and promotion require owner approval and owning-domain validation |

Operational Case lifecycle, record relationships, closure, knowledge promotion,
and Operational Gym isolation remain governed by the
[Operational Case Architecture](OPERATIONAL_CASE_ARCHITECTURE.md).

Across Reality, Operational Gym, and Scenario Simulation, the Assistant follows
the [Operational Reasoning Model](OPERATIONAL_REASONING_MODEL.md). It must preserve
environment identity and must not present Gym material, assumptions, AI summaries,
or modeled outputs as real Evidence. Case Evidence follows the
[Case Evidence Architecture](CASE_EVIDENCE_ARCHITECTURE.md); scenario preparation
and comparison follow the
[Scenario Simulation Architecture](SCENARIO_SIMULATION_ARCHITECTURE.md).

For the owner-facing investigation, the Assistant may preserve a reported Symptom,
prepare an untitled Case draft, ask the smallest material framing question, and
propose a neutral working title after sufficient framing. It must not turn the
reported concern, an early Hypothesis, or a generated summary into a diagnosis;
rename Cases repeatedly without material reframing; require artifact completion;
or imply that forward lifecycle movement is progress. The canonical experience is
defined in the
[Operational Case Experience Architecture](OPERATIONAL_CASE_EXPERIENCE_ARCHITECTURE.md).

The Assistant is an active investigation partner only in the sense that it advances
decision and investigation readiness. It may identify missing Evidence, propose
authorized reports, organize sources, distinguish Facts from assumptions, surface
contradictions, ask material clarifying questions, compare Hypotheses, propose next
investigative steps, and retrieve similar historical Cases. It explains why a Case
appears similar, where it differs, whether its outcome was verified, and what may
transfer. Similarity never transfers Cause, confidence, decision, or Solution.

AI must not suppress contradictory Evidence from a synthesis, average incompatible
sources into false agreement, or treat lifecycle advancement as investigation
success. The owner retains consequential interpretation, decision, execution,
verification, closure, and promotion authority.

Throughout a Case, the Assistant safeguards investigation discipline. It checks
Evidence completeness relative to the current judgment, challenges unsupported or
one-sided Hypotheses, keeps unresolved uncertainty and contradictions visible,
recalls authorized Evidence omitted from the current reasoning, and distinguishes
real readiness from lifecycle motion. These safeguards counter premature
conclusions and confirmation bias without creating autonomous Case authority or a
requirement to fill every artifact.

The Assistant may prepare qualitative Evidence Influence explanations and a
completion-time Decision Evidence Summary under the
[Case Evidence Architecture](CASE_EVIDENCE_ARCHITECTURE.md). It must not use
percentages, artificial scores, document rank, or its own preference to determine
influence. The owner reviews material contribution, decision rationale, and
closure; the Assistant's summary is never a new Evidence source.

The Assistant facilitates the Case process rather than optimizing artifact or Case
completion. It preserves the intended outcome, distinguishes predicted from
observed effect, exposes violated guardrails and unresolved uncertainty, and may
recommend another cycle, no durable change, or justified no action. It must not
pressure the owner toward a singular Cause, accepted Recommendation, successful
result, SOP creation, or clean closure.
| Improvement Proposals | Read snapshots, proposal, status, and rationale | Refinement or next-step explanation | Improvement Proposal workflow and SOP |

## Confidence and clarification model

Confidence is separated by question rather than collapsed into one opaque score:

| Confidence type | Question |
| --- | --- |
| Intent | What is the owner trying to accomplish? |
| Entity | What kind of object is this? |
| Destination | Which module owns it? |
| Field | Which extracted details are reliable? |
| Evidence | How strongly does existing evidence support an interpretation? |
| Action | Is the proposed next step appropriate and sufficiently bounded? |

Use **High**, **Medium**, and **Low** initially. Exact percentages must not be
shown without genuine calibration evidence.

- **High:** one interpretation clearly dominates. Prepare one action preview and
  do not ask a classification question.
- **Medium:** one interpretation is most likely but a reasonable alternative
  exists. Prepare the likely result, expose the uncertainty, and provide the
  relevant alternative.
- **Low:** destinations are similarly plausible, required information is missing,
  records conflict, or guessing could create a meaningful organizational error.
  Ask one discriminating question.

Before asking, the Assistant checks whether existing context can answer the
question, whether a safe draft can proceed without it, and whether correction is
easier than interrogation. It asks only when uncertainty materially affects the
meaning, destination, or consequence.

## Approval boundaries

Read-only context gathering, temporary organization, classification, explanation,
and draft preparation require no separate action approval. The following require
explicit, bounded approval:

- persisting a new entity;
- changing an existing entity or relationship;
- creating an Improvement Proposal;
- applying an accepted recommendation;
- changing a durable personal preference;
- changing layout, visibility, or prioritization rules;
- deleting, archiving, merging, or overwriting information.

Approval binds the action type, destination, target, proposed fields, relevant
context, and expected consequence. A material change to any of them invalidates
the approval.

A direct command may authorize its exact bounded action. Natural content alone is
not implicit mutation authority. Recommendation acceptance authorizes only the
action shown, and the owning feature still validates and performs the mutation.

## Learning boundaries

The Assistant may learn only from explicit actions: acceptance, rejection,
correction, edited classification, stated preference, or approval to remember a
preference. Silence, passive behavior, postponement, and a single event are not
permanent learning signals.

Repeated consistent behavior may justify a proposal to learn. It must never create
the preference automatically. The owner must be able to inspect, correct, narrow,
revoke, and delete durable personal understanding.

Organizational learning remains grounded in authoritative domain records.
Corrections may change future guidance but must not rewrite the historical evidence
from which an earlier interpretation arose.

## Relationship with the Recommendations Center

The Assistant is the interaction and orchestration layer. The Recommendations
Center is the Learning Layer capability that owns evidence-based improvement
opportunities and their decision lifecycle.

```text
Domain evidence
  → Insights
  → Hypotheses
  → Recommendations Center
  → Assistant explanation and clarification
  → Owner approval
  → Owning feature or Workflow Layer
```

Direct assistance completes the owner's present intent, such as classifying a
capture, locating an SOP, or preparing a Note. A proposal to change how the system
or owner operates is a Recommendation and must preserve the Learning Decision
Pipeline. The Assistant must not generate system improvements directly from raw
evidence and bypass that boundary.

## Relationship with the Personal Operational Model

The Assistant is an interaction layer; it does not become the Personal Operational
Model by retaining conversation history. The canonical
[Personal Operational Model](PERSONAL_OPERATIONAL_MODEL.md) is a future,
owner-controlled source of explicitly approved, inspectable, correctable, and
revocable personal operational context.

Personal context may shape explanation depth, review format, planning approach,
clarification tolerance, or equivalent presentation choices. It cannot override
canonical terminology, domain evidence, approval requirements, module ownership,
or governance.

Durable personal modeling remains outside initial implementation scope until AI,
privacy, retention, correction, and revocation governance is approved.

## Cognitive Load Responsibility

This responsibility operationalizes the
[Product Vision principle](PRODUCT_VISION.md#core-principles) that Management OS
should leave the owner only decisions requiring human judgment.

The Assistant is an active reducer of cognitive load. It should perform
classification, context gathering, comparison, routing, and preparation itself so
the owner decides whether the prepared outcome is correct instead of manually
performing the organizational analysis.

It may propose ways to simplify the workspace, reduce unnecessary choices,
consolidate fragmented organization, expose duplicated or unused structures, and
make the next meaningful action clear. It may hide organizational mechanics that
are irrelevant to the decision, but it must not hide the proposed action, affected
records, material uncertainty, supporting evidence, consequences, limitations, or
whether a change is temporary or permanent.

The governing principle is:

> Hide organizational mechanics, not decision consequences.

The future [Adaptive Workspace](ADAPTIVE_WORKSPACE_ARCHITECTURE.md) owns application
of approved presentation and workspace emphasis.
The Assistant identifies a cognitive-load problem, explains it, and presents a
bounded simplification proposal. The Recommendations Center preserves evidence and
decision state where the proposal changes how the system or owner operates. Only
after owner approval may the Adaptive Workspace or another owning feature apply
the change.

The approved [Adaptive Owner Context Architecture](ADAPTIVE_OWNER_CONTEXT_ARCHITECTURE.md)
defines Operating Context as an owner-controlled input to workspace emphasis. The
Assistant may observe and recommend a context change but cannot select a durable
context or apply its navigation, Home, widget, or recommendation prioritization.

Repeated usage may generate a recommendation, never automatic adaptation. The
Assistant must not directly change layout, visibility, prioritization, or
navigation.

## AI Memory Model

```text
Session Memory
      ↓
Working Memory
      ↓
Personal Operational Model
      ↓
Organizational Knowledge
```

The sequence represents increasing durability and governance, not automatic
promotion.

| Layer | Purpose | Ownership | Persistence | Boundary |
| --- | --- | --- | --- | --- |
| Session Memory | Maintain continuity in the immediate interaction | Assistant under owner control | Ephemeral | Cannot become evidence, preference, or organizational knowledge automatically |
| Working Memory | Hold bounded context for an active task, draft, or unresolved workflow | Owning workflow; coordinated by the Assistant | Temporary and purpose-limited | A draft is not a saved domain record or preference |
| Personal Operational Model | Preserve approved understanding of how the owner works and receives assistance | Owner | Durable only after explicit approval | Personalization cannot override organizational truth or governance |
| Organizational Knowledge | Preserve how the organization operates in authoritative records | Existing domain owners | Durable under domain lifecycle rules | The Assistant may interpret but not silently rewrite it |

Session Memory ends with the interaction and carries no authority outside its
bounded action. Working Memory may span exchanges while an active outcome remains
unresolved, but it must be inspectable, correctable, removable, and discarded when
completed, cancelled, or expired unless the owner explicitly saves a result.

The Personal Operational Model contains only explicitly approved, inspectable,
correctable, and revocable personal context. Organizational Knowledge remains in
existing modules and canonical documents.

When layers conflict, precedence is:

```text
Canonical organizational rules
  > Authoritative domain records
  > Current explicit owner instruction
  > Approved personal preference
  > Working interpretation
  > Session inference
```

## Assistant Presence Model

The Assistant is a contextual capability distributed throughout Management OS,
not a dedicated chat destination. This is an interaction architecture: it defines
where assistance is available and which context governs it, not its visual design.

```text
Management OS
  ├── Global Capture
  ├── Dashboard
  ├── Entity pages
  ├── Recommendations Center
  └── Future Workspace optimization
```

- **Global Capture:** interpret natural input, determine the likely entity and
  destination, extract fields, find related context, and prepare a bounded action.
  The approved lifecycle and boundaries are defined in
  [Natural Capture Architecture](NATURAL_CAPTURE_ARCHITECTURE.md).
- **Dashboard:** explain current focus and workload, prepare a next action, and
  surface evidence-based simplification opportunities without silently changing
  priority or layout. Its approved future role is defined in
  [AI-first Workspace Architecture](AI_FIRST_WORKSPACE_ARCHITECTURE.md).
- **Entity pages:** use the current entity as primary context and offer assistance
  within its existing ownership and mutation rules.
- **Recommendations Center:** explain evidence, confidence, limitations, and
  consequences while supporting Accept, Reject, and Remind me later decisions.
- **Future Workspace optimization:** identify cognitive-load and organizational
  problems and route persistent adaptation through an explainable recommendation
  and owner approval.

The Assistant should be contextually available, quiet when it has no material
value, concise when clarification is necessary, explicit when proposing mutation,
and consistently absent from domain ownership.

## Architecture, AI, and Product Review

### Architecture Review

The architecture is approved provided the Assistant remains an orchestration
layer, persistent mutations remain with owning modules, confidence never removes
approval, Recommendations preserve the Learning Decision Pipeline, and unavailable
modules are disclosed rather than simulated.

### AI Review

The conceptual architecture is approved. Implementation remains blocked until AI
governance, privacy, explainability, correction, retention, revocation, and safety
controls are separately designed, approved, and verified.

### Product Review

The Assistant is approved as the intended operational intelligence architecture.
Its evolution from Tool to Assistant to Operational Partner improves preparation
and relevance without transferring the owner's authority:

```text
Tool → Assistant → Operational Partner
```

Initial implementation scope, when separately approved, must remain bounded to
natural capture interpretation, relevant read-only context, destination
classification, minimal clarification, structured action preview, explicit owner
confirmation, and handoff to an existing owning module. Durable personal learning,
autonomous recommendation application, and simulated support for unavailable
modules remain excluded.
