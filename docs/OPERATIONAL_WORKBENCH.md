# Operational Workbench

## Purpose and status

This document defines the stable owner-facing workspace metaphor for an
Operational Matter.

| Property | Decision |
| --- | --- |
| Status | Approved canonical product-experience architecture; deterministic prototype aligned |
| Delivery milestone | Sprint 25.1 |
| Authority | Workspace composition, visual emphasis, Operational Inbox presentation, progressive Working Collections, and Decision-relative emphasis |
| Related documents | [Human-first Investigation Experience](HUMAN_FIRST_INVESTIGATION_EXPERIENCE.md), [Operational Situation Board](OPERATIONAL_SITUATION_BOARD_ARCHITECTURE.md), [Natural Capture](NATURAL_CAPTURE_ARCHITECTURE.md), [Operational Transition](OPERATIONAL_TRANSITION_ARCHITECTURE.md) |

## Canonical model

> The Operational Workbench is the stable Matter-relative professional
> environment through which the owner contributes information, develops shared
> understanding, makes authoritative Decisions, coordinates any required
> Operational Transition, and evaluates Outcomes.

The Workbench is an interaction metaphor and projection environment. It is not a
capability, Matter state, workflow, lifecycle, record, data store, or authority.

Three surfaces remain persistent:

1. **Current Situation** — the visual center projected through the Operational
   Situation Board.
2. **Operational Inbox** — the owner-facing notebook over governed Natural
   Capture and source records.
3. **Watson** — one professional conversational focus with unchanged authority.

## Current Situation

Current Situation is one composed operational picture rather than a dashboard or
set of equal cards. It begins with preserved owner wording and the current
revisable position. Observations, sourced Evidence, uncertainty, contradictions,
material changes, and leading explanations appear contextually only when they
exist.

Supporting material strengthens the picture and remains traceable to source
records. Current Situation never becomes a second source of truth.

Sprint 23 makes Current Situation the perceptual anchor through scale, whitespace,
a continuous canvas, and connected semantic threads. It must be identifiable
before its labels are read. Visual richness comes from operational meaning rather
than decorative panels.

## Operational Inbox

The Inbox accepts natural text, multiple observations, files, images, links,
recordings, and ideas without prior artifact or classification selection. Watson
may propose organization afterward. Consequential classification, promotion, or
mutation follows the governing capability's authority.

The Inbox preserves original contribution, provenance, capture context,
authorization, sensitivity, and any proposed interpretation. It is not a parallel
document store.

Its visual character is an inviting professional notebook: generous writing
space, quiet attachment actions, and minimal instruction. It receives third-level
visual gravity after Current Situation and Watson.

## Progressive Working Collections

Working Collections emerge only when referenced material exists. They show counts,
use content-specific visual semantics, and open focused inspection. Collections
are overlapping Matter-relative projections, not records or authorities.

Removing a collection never deletes its governed records. A collection never
assigns Evidence weight, establishes a Hypothesis, or changes source status.

Collections use differentiated visual semantics: data resembles a compact
quantitative preview, conversations resemble speech, Hypotheses show relationships,
and contradictions use warning treatment. Empty collections remain absent.

## Art direction hierarchy

The first scan follows:

1. Current Situation;
2. Watson's current focus;
3. Operational Inbox;
4. emerged Working Collections;
5. specialist inspection.

Spacing, scale, grouping, shape, color, and iconography communicate this hierarchy
before explanatory text. Progressive material uses restrained emergence motion
with a reduced-motion equivalent.

## Progressive Cognitive Map

As understanding grows, Current Situation may present explicit governed
relationships among source-bearing Evidence, current understanding, proposed
Hypotheses, contradictions, and other meaningful material. The map is a
presentation within Current Situation—not a new capability, topology authority,
persisted aggregate, or source of truth.

Sprint 24 demonstrates `⇢` Evidence support, `⋯→` tentative influence, and `⚠`
contradiction with accessible text, proposal status, provenance language, a
legend, and an explicit non-causality safeguard. Relationship appearance follows
meaningful understanding rather than artifact count.

## Operational Situation Map

Sprint 25 presents Current Situation as an **Operational Situation Map**: a
composed, Matter-relative visual story with one central working understanding and
supporting artifacts positioned according to current relevance. It replaces the
vertical summary composition, not the Operational Situation Board architecture.

The Map is not a free-form canvas, dashboard, graph authority, topology model,
record, or new capability. It is the Workbench presentation of the Board's
governed projection. Early Matters show only the central working understanding.
Observations, assumptions, Evidence, Hypotheses, contradictions, relationships,
and collections appear spatially only when meaningful.

Watson is a contextual intervention adjacent to the Map rather than a permanent
third of the operational picture. Its visual presence is justified only when its
question, recommendation, warning, or requested judgment can change owner
understanding or action.

## Decision and emphasis

The existing authoritative Decision confirmation represents the owner's chosen
direction, accepted uncertainty, material risk, and safeguards. It introduces no
new entity or state.

Only an executable Decision requiring material change shifts Workbench emphasis
toward:

```text
Intended Operating Condition
→ affected Operational Systems
→ required adaptations
→ source-owned execution
→ observed behaviour
→ Outcome Assessment
→ proportionate stabilization
```

Investigation, contrary Evidence, uncertainty, history, and Decision basis remain
inspectable. Monitoring, waiting, no-action, and non-executable Decisions do not
trigger transition emphasis.

## Continuity and safeguards

Reopening should restore the Current Situation state, Watson context, previous
inspection context, and recently opened collection where available. This is
continuity of presentation, not new canonical state.

Urgent risk, material contradiction, authorization, privacy, source failure,
Evidence invalidation, and consequential approval may interrupt normal emphasis.
Direct specialist access and degraded operation without Watson remain available.

## Prototype alignment

### Sprint 25.1 interaction contract

The early Workbench begins sparse. Current Situation is dominant; the
Operational Inbox remains independently reachable; Watson may collapse to a
corner presence; and compact Working Collections appear only when governed
material exists. Collection controls show an icon, short label, and count.
Focused inspection opens over the Workbench, closes to the same spatial context,
and returns keyboard focus to its collection control.

Consequential Watson interpretations offer **Yes**, **No**, **Correct**, **Add
detail**, and **Later**. No rejects rather than edits the interpretation. Watson
acknowledges the misunderstanding and asks one short question. The owner may
instead submit unrelated material through the Inbox; capture is never blocked.

Desktop surrounds the central Situation with compact landmarks and corner
surfaces. Tablet preserves hierarchy with focused overlays. Mobile presents the
Situation first, horizontal icon-based collection navigation, an independent
Inbox, and temporary Watson expansion—not a feed of equal cards.

### Sprint 26 thinking environment

The Workbench is composed as a professional thinking place rather than a page or
administration interface. The Operational Situation Map occupies the field;
material has recognizable visual character and spatial weight; and compact
collections remain the retrieval layer. Scale, distance, grouping, interruption,
and quiet space communicate priority before labels are read.

Operational Inbox and Watson now share one thinking dock. The owner can record
material or explicitly ask Watson to review, find contradictions, or challenge
an explanation. Watson remains absent from the composition until invited or
until a materially important intervention justifies interruption. This changes
presentation and interaction emphasis only: the owner remains authoritative and
all governed records, provenance, lifecycle, and capability boundaries remain
unchanged.

### Sprint 27 atmosphere and spatial refinement

The Workbench owns the viewport. Primary navigation contracts to an icon-first
Dock with accessible names and labels on hover or keyboard focus. Profile and
operating mode move to the Dock edge rather than competing with investigation
navigation.

Operational Inbox is an in-flow notebook beneath the Situation Map. It is not
fixed, modal, or overlaid and therefore never covers investigation material.
Submitting material preserves the contribution without opening Watson, moving
focus, or requiring confirmation. Watson may retain an optional thought quietly;
the owner invokes it when useful and can always continue contributing.

Dark-theme typography uses one accessible hierarchy: warm high-contrast primary
text, readable neutral supporting text, restrained brass interaction text, and
explicit focus outlines. Atmospheric stationery and instrument references remain
subtle, non-interactive, and semantically neutral.

Sprint 22 implements deterministic, session-local presentation for the first
human-centered Workbench journey. It demonstrates progressive collections,
Decision confirmation, and conditional transition emphasis without production
AI, persistence, source integration, recording, attachment processing, or new
authority.
