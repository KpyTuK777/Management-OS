# Product Roadmap

This roadmap describes product direction. Implementation-level progress is tracked in [Sprints](SPRINTS.md).

## Phase 1 — Portfolio

Build a dependable project workspace with lifecycle management, status, progress, filters, and sorting.

## Phase 2 — Dashboard

Turn Home into a current-day operational view for focus, tasks, KPI signals, and activity.

## Phase 3 — Knowledge Base

Create a searchable second brain for notes, methods, practice, tags, and linked knowledge.

## Phase 4 — SOP

Provide a reusable process library for standardized, repeatable work, with guided
execution and historical evidence. Review and continuous improvement follow the
Execution MVP.

## Phase 5 — Analytics

Surface trends and operational insight from project, task, and review data.

The first Insights Foundation now exposes deterministic cross-module totals,
conversion rates, distributions, repeated phrases, duration, and execution
frequency. Future Analytics may add time windows and comparisons, but observation
must remain separate from recommendations.

The Hypotheses Foundation adds deterministic, evidence-preserving possible
explanations after Insights. The first controlled Improvement Proposal workflow
now lets the user author and review an SOP change while keeping application manual.
The broader Recommendations Center remains future work.

### Controlled SOP improvement

Improvement Proposals preserve Hypothesis Evidence, confidence, limitations, and
SOP provenance. Accepting one opens the SOP editor with read-only context; it does
not apply or prefill a change. Recommendation generation, automatic drafting, and
automatic application remain outside the current roadmap milestone.

## Phase 6 — Optimization

Improve the system through AI, automation, integrations, performance work, UX improvements, and refactoring.

### Future Learning Layer — Recommendations Center

After sufficient Review and execution evidence exists, introduce an explainable
Recommendations Center. This is long-term direction and is not currently
implemented.

The Center may surface:

- Workspace optimization;
- Knowledge and SOP candidates;
- SOP improvement suggestions;
- planning and workflow recommendations;
- opportunities to reduce cognitive load.

Recommended delivery sequence:

1. establish reliable observation signals through the Insights layer;
2. explain detected patterns and evidence;
3. expose confidence without overstating certainty;
4. propose one explicit action;
5. provide **Accept**, **Reject**, and **Remind me later** controls;
6. execute an accepted action through the owning feature's approved workflow.

No phase may introduce autonomous workspace or interface changes. Recommendation
generation and recommendation application must remain separate capabilities, and
user approval is the boundary between them.

## Beyond v1.0 — AI Knowledge Model

The AI Knowledge Model is a long-term product horizon after v1.0, not an addition
to the current implementation roadmap.

Its direction is to develop three complementary forms of understanding:

1. a **Management Knowledge Model** grounded in broad management theory;
2. an **Organizational Knowledge Model** grounded in the organization's language,
   workflows, practices, and standards;
3. a **Personal Operational Model** grounded in the owner's preferences, habits,
   strengths, and recurring challenges.

Future AI guidance should combine all three layers so that it is theoretically
informed, organizationally relevant, and personally useful. The system should grow
with its owner while keeping its learning visible, explainable, correctable, and
subject to owner approval for meaningful changes.

This horizon introduces no current deliverables, implementation work, storage,
APIs, machine-learning scope, or change to the v1.0 boundary.
