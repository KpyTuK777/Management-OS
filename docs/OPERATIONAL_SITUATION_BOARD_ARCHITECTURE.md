# Operational Situation Board Architecture

## Purpose and status

This document defines the primary owner-facing mental model for an Operational
Matter.

| Property | Decision |
| --- | --- |
| Status | Approved canonical experience architecture; prototype presentation aligned |
| Delivery milestone | Sprint 11; Guided Investigation interaction approved Sprint 13 |
| Canonical concept | Operational Situation Board |
| Authority | Matter-level operational picture, stable frame, dynamic cognitive focus, natural capture integration, and progressive disclosure |
| Related documents | Operational Matter Architecture, Operational Case Experience Architecture, Natural Capture Architecture, AI Assistant Architecture, Operational Reasoning Model |

The **Operational Situation Board** is a state-sensitive, owner-inspectable
projection of the current operational understanding.

It is not a dashboard, document viewer, kanban board, module collection,
conversational transcript, reasoning authority, or new persisted aggregate.

## Owner mental model

The owner experiences an Operational Matter as:

> A continuously updated, inspectable picture of a situation requiring
> understanding, judgment, or action.

The Matter provides enduring identity and lifecycle continuity. Operational
Investigations provide repeatable episodes of inquiry. The Board provides current
orientation across those episodes.

## Projection, not authority

The Board reads the authoritative Matter state and linked source-owned
contributions. It may compose, summarize, arrange, and emphasize them, but it
never owns or silently changes:

- Matter state or lifecycle history;
- Evidence, provenance, or Evidence weight;
- Operational Reasoning or Decision Readiness;
- Decisions, Actions, commitments, or Outcomes;
- Laboratory branches, Operational Memory, or approved Knowledge.

Every displayed interpretation remains traceable to its governed source. When
sources conflict, are stale, or are unavailable, the Board shows that condition
instead of manufacturing a coherent picture.

## Stable operational picture

The primary frame continuously answers:

1. **What is happening?** Current condition, scope, materiality, and Matter state.
2. **What do we understand?** Current explanations or beliefs, with calibrated
   confidence and limitations.
3. **Why?** Material supporting and conflicting Evidence and reasoning lineage.
4. **What remains uncertain or blocked?** Dominant uncertainty, contradictions,
   dependencies, and missing Evidence.
5. **What changed?** Recent information and its effect on current understanding.
6. **What needs owner attention now?** The current cognitive center.
7. **What should happen next?** Watson's proposed next contribution, judgment, or
   action and the authority required.

These questions form a stable spatial and conceptual frame. Matter state changes
content emphasis, not the existence or meaning of the frame.

The Board visualizes current understanding rather than artifact inventory.
Documents, Evidence items, conversations, tasks, and capability records appear as
inspectable support or progressive disclosure. Counts and activity are never
substitutes for operational meaning.

## Dynamic cognitive focus

The **cognitive center** is the element that currently contributes most to owner
understanding or judgment. It may be a dominant uncertainty, contradiction,
material Evidence source, Inflection Point, leading Hypothesis, missing
dependency, Decision Readiness issue, execution risk, or outcome signal.

Watson may propose and update the cognitive center only when it can expose:

- why the element matters now;
- what changed since the prior focus;
- supporting and conflicting Evidence;
- uncertainty, limitations, and provenance;
- whether the owner selected, pinned, dismissed, or replaced the focus;
- the next judgment or action the focus informs.

Dynamic emphasis is reversible presentation judgment. It is not permanent
importance, Evidence weight, priority authority, Matter state, or a Decision.
The owner can inspect focus history, pin a focus, dismiss a proposal, or restore
the stable neutral view.

To preserve predictability, regions do not move when focus changes. Emphasis
changes within the stable frame, uses bounded visual intensity, announces material
changes, and never hides contrary or unresolved information.

## Natural capture

Natural Capture is the default contribution entry for a Matter. The owner records
what was learned without first selecting a module or artifact type.

The system preserves the original wording and may propose:

- contribution type and epistemic status;
- related Matter and Investigation episode;
- source, provenance, and freshness;
- relationships to Evidence, claims, Hypotheses, Decisions, or Actions;
- possible reasoning effect and cognitive-focus impact;
- clarification or owner review required.

Watson never turns natural input directly into authoritative fact, Evidence,
Decision, state transition, or approved Knowledge. Consequential classification,
relationship, mutation, or promotion requires the governing capability's normal
validation and applicable owner approval.

Direct structured entry remains available for expert, regulated, integration,
accessibility, and degraded-operation needs. Natural Capture is the default
interaction, not an exclusive write path.

## Reasoning change and milestones

When an approved contribution materially changes the operational picture, the
Board creates or references a governed **Reasoning Milestone**. A milestone
preserves:

- previous understanding;
- the new contribution and its original wording;
- the resulting interpretation change;
- affected Hypotheses, uncertainties, and Decisions;
- supporting and conflicting Evidence;
- remaining uncertainty;
- actor, time, provenance, and applicable Investigation episode.

A Reasoning Milestone records a material change in understanding, not routine
interface activity, focus movement, artifact creation, or Watson narration. It
belongs to versioned Operational Reasoning and is projected by the Board; the
Board does not own the milestone.

## Progressive disclosure

The primary Board should be understandable within seconds. It presents the
smallest useful operational picture first, then allows inspection of:

- complete Evidence and provenance;
- reports, interviews, and source records;
- reasoning and focus history;
- Investigation episodes and orchestration dependencies;
- Decision rationale and decision-time snapshots;
- Actions, commitments, Outcomes, and learning lineage.

Progressive disclosure must never conceal uncertainty, conflicting Evidence,
authority, source freshness, or a material consequence.
Pre-v1.0 explanatory reduction follows the
[Cognitive Cleanup Architecture](COGNITIVE_CLEANUP_ARCHITECTURE.md).

## Guided Investigation interaction

Guided Investigation is the default interaction model of an active Situation
Board. The Board preserves its stable, inspectable operational picture while one
Watson-recommended interaction receives dominant visual priority. The owner
should decide what they know, what authority to grant, or what judgment to make;
they should not have to choose which product capability to use next.

The detailed hierarchy, UX principles, AI contribution recalculation, and
validation contract are defined in
[Guided Investigation Interaction](GUIDED_INVESTIGATION_INTERACTION.md).

The dominant interaction exposes:

- the current Investigation condition;
- the next thing that is valuable to understand;
- why it matters now and the Evidence or information sought;
- what an answer may change and what will remain unresolved;
- the smallest meaningful owner action;
- options to answer, redirect, defer, reject, inspect alternatives, or proceed
  with visible uncertainty.

Guided Investigation progressively prioritizes interaction rather than hiding
the operational picture. Complete Evidence, reasoning, history, direct
capability access, and specialist controls remain inspectable without competing
for primary attention. Availability and visual priority are separate decisions.

Watson changes the dominant interaction only after a material change in
Investigation condition, Evidence, contradiction, uncertainty, owner direction,
Decision Readiness, execution, outcome, or the expected value of further
inquiry. The change is explainable, announced when material, and reversible.

Orientation, Evidence-building, explanation-testing, decision preparation,
execution, and outcome learning are non-linear dominant conditions, not mandatory
stages or completion gates. New Evidence may return the Investigation to an
earlier condition. Waiting, monitoring, branching, inconclusive closure, and
justified no action remain valid.

Existing Hypotheses are never deleted or made uninspectable, but they do not
receive primary attention until the operational condition, scope, baseline,
provenance, and available Evidence are sufficient to compare explanations
without premature causal framing. No universal score unlocks a capability.

When Watson is unavailable, the last explainable recommendation may be shown as
stale or frozen, but it cannot block direct access to the stable Board.

## Context and branching

- **Operational Reality** emphasizes current Evidence, risk, owner judgment,
  execution, and observed Outcomes.
- **Operational Learning** emphasizes explanation, comparison, reflection, and
  feedback while preserving the same frame and truth boundaries.
- **Decision Laboratory** appears as a visibly non-authoritative branch projection
  with its parent Matter version, assumptions, and modeled status always visible.
- **Multiple Investigations** contribute to one Matter-level picture. The Board
  identifies the active or relevant episode without fragmenting Matter identity.
  Conflicting interpretations, episode boundaries, lineage, and material
  Reasoning Milestones remain inspectable.

Future capabilities integrate through typed, source-owned contributions and
projection contracts. They do not become new primary workspace modules merely
because they add a record type.

## Degraded operation

When Watson or retrieval is unavailable, the stable frame remains usable from
available authoritative records. Dynamic focus is frozen or absent and labeled
accordingly. Natural input remains temporarily preserved under its approved
capture contract; the product does not simulate classification, reasoning, or
freshness.

This architecture introduces no Board store, new source of truth, Matter schema,
AI runtime, persistence, migration, or production interface.
