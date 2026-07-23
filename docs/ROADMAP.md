# Product Roadmap

This roadmap describes product direction. Implementation-level progress is tracked in [Sprints](SPRINTS.md).

Release-stage readiness is governed by the
[Product Maturity Model](PRODUCT_MATURITY.md). Roadmap phases describe capability
direction and do not by themselves confer Prototype, Alpha, Beta, or stable status.

## Documentation readiness

Documentation evolves with the product and is a release-readiness condition rather
than a separate product phase. Detailed documentation work, priorities, and
dependencies are maintained in the
[Documentation Backlog](DOCUMENTATION_BACKLOG.md).

- **Beta:** requires the Stage 1 documentation exit criteria. No P0 Stage 1 item
  may remain open at Beta readiness review.
- **v1.0:** requires the Stage 2 documentation exit criteria, including release,
  verification, user-guidance, and canonical-consistency requirements.
- **Post-v1 evolution:** activates the relevant Stage 3 or Stage 4 work when its
  product trigger occurs, such as a major architecture decision, external
  contribution, multiple supported releases, or future AI implementation.

The Roadmap owns these maturity gates. The Documentation Backlog owns their
detailed work, and the Sprint Tracker records scheduled execution and completion.

## Phase 1 — Portfolio

Build a dependable project workspace with lifecycle management, status, progress, filters, and sorting.

## Phase 2 — Dashboard

Evolve Home into an AI-first operational workspace where the owner begins by
expressing intent. Natural Capture, decisions requiring human judgment, active-work
continuity, and a small number of contextual recommendations form the primary
hierarchy. Metrics, history, search, navigation, and deeper editing remain
available through on-demand context and specialized workspaces.

Home remains directly usable when AI capability is unavailable. Persistent
workspace adaptation, automatic prioritization, and autonomous domain mutation are
outside this phase unless separately proposed and approved.

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

AI capability dependencies and maturity sequencing are maintained separately in
the [AI Capability Roadmap](AI_CAPABILITY_ROADMAP.md). That roadmap does not replace
this product sequencing or authorize implementation.

### Future Operational Case

Introduce the Operational Case as the primary bounded operational learning and
change process only after reliable source records and relationship governance are
available. Begin with additive Case relationships, then add Case intent, current
and intended conditions, measures, Countermeasure cycles, outcome verification,
and standardization decisions before any Case-centered navigation consolidation.

The Case remains optional for routine work, owns no participating domain record,
and promotes learning only through explicit Knowledge or SOP workflows.
Operational Gym should reuse the same model later within an isolated simulation
boundary. This is future direction under the
[Operational Case Architecture](OPERATIONAL_CASE_ARCHITECTURE.md), not a current
implementation commitment.

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

### Future Adaptive Workspace

After the Recommendations Center and Personal Operational Model governance are
available, Adaptive Workspace may apply an exact owner-approved Workspace Emphasis
derived from the canonical Operating Context. It may reprioritize navigation,
Home, widgets, and recommendation selection but cannot remove capabilities.
Multiple contexts, at most one durable primary context, neutral operation, direct
access, rollback, and degraded non-AI use remain mandatory.

This is post-v1 direction under the
[Adaptive Owner Context Architecture](ADAPTIVE_OWNER_CONTEXT_ARCHITECTURE.md),
[Personal Operational Model](PERSONAL_OPERATIONAL_MODEL.md), and
[Adaptive Workspace Architecture](ADAPTIVE_WORKSPACE_ARCHITECTURE.md). It adds no
current implementation deliverable.

## Beyond v1.0 — AI Knowledge Model

The AI Knowledge Model is a long-term product horizon after v1.0, not an addition
to the current implementation roadmap.

Its direction is to develop three complementary forms of understanding:

1. a **Management Knowledge Model** grounded in broad management theory;
2. an **Organizational Knowledge Model** grounded in the organization's language,
   workflows, practices, and standards;
3. a **Personal Operational Model** grounded only in explicitly approved,
   inspectable, correctable, and revocable personal operational context and
   preferences.

Future AI guidance should combine all three layers so that it is theoretically
informed, organizationally relevant, and personally useful. The system should grow
with its owner while keeping its learning visible, explainable, correctable, and
subject to owner approval for meaningful changes.

This horizon introduces no current deliverables, implementation work, storage,
APIs, machine-learning scope, or change to the v1.0 boundary.
