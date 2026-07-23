# Guided Investigation Interaction

## Purpose and status

This document defines the interaction hierarchy through which the Operational
Situation Board guides owner attention without changing capability access or
authority.

| Property | Decision |
| --- | --- |
| Status | Approved interaction architecture; deterministic prototype aligned |
| Delivery milestone | Sprint 13 |
| Canonical concept | Guided Investigation |
| Authority | Attention hierarchy, dominant interaction, supporting context, inspectable workspace, and guidance recalculation |
| Related documents | Operational Situation Board Architecture, Operational Inquiry Architecture, Natural Capture Architecture, AI Assistant Architecture |

Guided Investigation makes the next meaningful investigative interaction obvious.
Watson leads attention and the owner retains judgment.

The [Perceptual Architecture](PERCEPTUAL_ARCHITECTURE.md) locates that dominant
interaction in the recognizable Watson Interaction Surface while keeping the
Operational Situation Board visibly central and Natural Capture directly
available.

## Design philosophy

The Board manages attention rather than restricting information. It preserves the
stable operational picture and gives unequal visual priority to equally available
capabilities.

The owner should think about the operational situation more than the product:

1. I understand where I am.
2. I understand why this matters.
3. I know exactly what to do next.
4. After I act, Watson presents the next justified focus.

Guidance is non-linear. Waiting, monitoring, returning to orientation, changing
strategy, and proceeding with visible uncertainty remain valid.

## Interaction hierarchy

### Level 1 — dominant interaction

Exactly one primary interaction is visually dominant. It states:

- what to understand or do next;
- why it matters now;
- what it seeks;
- what may change if completed.

Only its primary action receives dominant action styling. Answer, redirect, defer,
reject, and inspect-alternatives controls remain available without competing for
attention.

### Level 2 — supporting context

Only the minimum context required to judge the recommendation appears beside it:

- current understanding;
- current uncertainty;
- required Evidence or information;
- expected reasoning contribution.

Supporting context does not repeat architecture, general authority reminders, or
the complete reasoning record.

### Level 3 — inspectable workspace

Situation, Matter state, Evidence, uncertainty, reasoning, timeline, Hypotheses,
Decision Readiness, Decision Laboratory, Operational Memory, Investigation
history, and Knowledge remain available through stable progressive disclosure.
History supports Investigation; it does not lead it.

## UX principles

1. One cognitive center and one dominant action.
2. Stable placement with progressive changes in attention.
3. Capability availability never depends on a nominal stage.
4. Material uncertainty and contradiction never recede.
5. Hypotheses remain inspectable but gain emphasis only when comparison is
   evidentially meaningful.
6. Guidance changes are explainable, announced when material, and reversible.
7. Direct and degraded operation remain complete.
8. Artifact count, activity, and stage completion are not progress.

## AI interaction

Watson selects the smallest valuable next interaction using the governed
Operational Inquiry policy. A recommendation is temporary presentation judgment,
not Matter state, Evidence weight, Investigation strategy authority, or a
Decision.

After every owner contribution, Watson:

1. preserves the original wording;
2. proposes classification and relationships;
3. identifies provenance and applicable validation;
4. estimates possible reasoning impact;
5. determines whether the current guidance remains justified;
6. recalculates the dominant interaction only after that review.

The owner may answer, redirect, defer, reject, inspect alternatives, or continue
without the recommendation. Watson never treats silence as approval or forces
forward progression.

## Validation

The primary validation question is:

> During Investigation, does the owner think about the operational situation more
> than the product itself?

Validation fails when the owner searches for the next control, reads repeated
instructions, mistakes history for direction, or interprets visual progression as
mandatory workflow completion.

The deterministic prototype demonstrates interaction hierarchy and page-memory
attention changes only. It does not implement AI selection, persistence,
automatic capability unlocking, readiness scoring, or autonomous authority.
