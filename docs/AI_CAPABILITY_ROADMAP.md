# AI Capability Roadmap

## Purpose and authority

This roadmap defines how Management OS intelligence should evolve: capability
hierarchy, architectural dependencies, maturity order, and recommended milestone
placement. It is not the Product Roadmap, an implementation plan, Sprint scope, or
release authorization.

| Property | Decision |
| --- | --- |
| Status | Canonical AI capability plan |
| Delivery milestone | Sprint 7 — AI Operational Layer |
| Accountable owner | Product Architect & AI Strategist |
| Approval authority | Product Owner |
| Primary question | How should intelligence evolve while owner authority remains unchanged? |

[Product Vision](PRODUCT_VISION.md) owns product principles,
[Product Maturity](PRODUCT_MATURITY.md) owns release gates, and the
[Product Roadmap](ROADMAP.md) owns overall product sequencing. Approved capability
architecture does not mean implemented behavior or implementation authorization.

Capability states remain distinct:

```text
Conceptual direction
  → Approved architecture
  → Governance ready
  → Implementation eligible
  → Implemented
  → Validated
  → Release eligible
```

The milestone labels in this roadmap express capability evolution:

- **Beta:** architecture, governance, context, safety, and evaluation readiness;
- **v1.0:** bounded, owner-controlled assistance may become release eligible after
  all applicable gates pass;
- **post-v1:** recommendation, durable knowledge, personalization, adaptation,
  coaching, and prediction.

No AI runtime capability is required for Beta.

## Evolution principle

```text
Understand intent
  → Find relevant context
  → Prepare bounded outcomes
  → Explain operational evidence
  → Recommend improvement
  → Personalize with approval
  → Adapt the workspace with approval
  → Support operational judgment
```

Intelligence expands before authority. More context does not grant more permission,
higher confidence does not authorize automatic action, repeated behavior does not
create a permanent preference, and prediction is not fact.

## AI capability hierarchy

```text
AI Operational Layer
│
├── Interaction and orchestration
│   ├── AI Assistant
│   ├── Natural Capture
│   └── AI-first Home Workspace
│
├── Context and retrieval
│   ├── Contextual Retrieval
│   ├── Organizational Knowledge Model
│   ├── Management Knowledge Model
│   └── Personal Operational Model
│
├── Reflection and explanation
│   ├── AI Review composition assistance
│   └── Cross-review interpretation
│
├── Recommendation and drafting
│   ├── Recommendations Center
│   ├── Learning Recommendations
│   ├── Intent-led SOP drafts
│   └── Evidence-led SOP drafts
│
├── Adaptation
│   ├── Workspace optimization recommendations
│   └── Adaptive Workspace
│
└── Advanced operational intelligence
    ├── Operational Coaching
    └── Predictive Operational Insights
```

## Capability consolidation

### Contextual Retrieval

Use **Contextual Retrieval** as the architectural name for Intelligent Search. It
includes deliberate search but also retrieves relevant records from current intent
and context, explains their relevance, and preserves source authority.

### Learning Recommendations

Learning Recommendations are a category within the Recommendations Center, not a
separate system. They share its evidence, confidence, decision, and approval
lifecycle.

### Workspace optimization

Workspace optimization is split across two responsibilities:

- the Recommendations Center identifies and explains an optimization opportunity;
- the Adaptive Workspace applies the exact approved workspace change.

No separate AI Workspace Optimization module is introduced.

### AI Review assistance

AI Review assistance is split by consequence:

- **Review composition assistance** helps structure the current Review without
  interpreting broader history;
- **cross-review interpretation** evaluates patterns through Insights, Hypotheses,
  and Recommendations.

### AI-generated SOP drafts

SOP drafting is split by source:

- **intent-led drafting** responds to explicit owner intent and selected Knowledge;
- **evidence-led drafting** proposes a change from Executions, Reviews, Insights,
  or Hypotheses and therefore depends on the Recommendations Center.

### Three knowledge models

The Management, Organizational, and Personal Operational Models remain distinct
and complementary. General management context, organization-specific practice, and
approved personal preference must not silently substitute for one another.

## Dependency map

### Interaction foundation

```text
AI governance and privacy
  → AI Assistant
  → Natural Capture
  → Contextual Retrieval
  → AI-first Home Workspace
  → Review composition assistance
  → Intent-led SOP drafting
```

### Learning and recommendation

```text
Reliable domain data
  → Executions and Reviews
  → Deterministic Insights
  → Explainable Hypotheses
  → Recommendations Center
      ├── Learning Recommendations
      ├── SOP improvement recommendations
      └── Workspace optimization recommendations
```

### Knowledge models and coaching

```text
Organizational data governance
  → Organizational Knowledge Model ┐
Management Knowledge Model ────────┼→ Combined operational context
Personal Operational Model ────────┘
  → Operational Coaching
```

### Adaptation

```text
Workspace-use evidence
  → Insight or Hypothesis
  → Workspace optimization recommendation
  → Owner approval
  → Adaptive Workspace
```

### Prediction

```text
Reliable longitudinal evidence
  → Data-quality and coverage evidence
  → Stable organizational context
  → Forecast or scenario
  → Confidence and limitations
  → Owner judgment
```

## Capability roadmap

| Capability | Purpose | Primary owner benefit | Dependencies | Priority | Suggested milestone |
| --- | --- | --- | --- | --- | --- |
| AI Assistant | Provide contextual interpretation and orchestration | One consistent operational assistant | AI governance, privacy, approval, explainability, degraded operation | P0 | Beta architecture; v1.0 bounded capability |
| Natural Capture | Convert natural input into prepared organizational outcomes | Removes module selection and classification | Assistant, context access, handoff, approval | P0 | Beta architecture; v1.0 bounded capability |
| AI-first Home Workspace | Make intent the primary entry point | Reduces navigation and passive scanning | Assistant, Natural Capture, attention policy, degraded mode | P0 | Beta information architecture; v1.0 operational surface |
| Contextual Retrieval | Retrieve relevant records from intent and current context | Reduces search and context reconstruction | Search foundation, source authority, access boundaries, explainability | P0 | v1.0 |
| Operational Inquiry | Select and explain the smallest valuable next Investigation question | Advances Evidence and reasoning without questionnaire burden | Operational Case, Evidence, Operational Reasoning, AI Assistant, Contextual Retrieval, Decision Readiness | P1 | Post-v1 Investigation capability |
| Review composition assistance | Structure blockers, outcomes, improvements, and lessons | Makes reflection easier | Review domain, Assistant, source preservation, approval | P1 | v1.0 |
| Intent-led SOP drafts | Prepare a procedure from explicit intent and selected Knowledge | Reduces procedural writing effort | Knowledge provenance, SOP validation, preview, approval | P1 | v1.0 candidate |
| Recommendations Center | Turn Evidence and Hypotheses into bounded opportunities | Surfaces meaningful improvements | Insights, Hypotheses, explainability, decision lifecycle | P0 | Post-v1 |
| Learning Recommendations | Recommend reflection, Knowledge, SOP, or improvement actions | Converts experience into reusable learning | Recommendations Center, Reviews, Insights, Hypotheses | P1 | Post-v1 category |
| Organizational Knowledge Model | Represent how the organization operates | Makes guidance organization-specific | Data quality, privacy, provenance, correction, knowledge governance | P0 | Post-v1 |
| Management Knowledge Model | Supply general management concepts and methods | Grounds guidance in established thinking | Knowledge-layer and uncertainty governance | P1 | Post-v1 |
| Personal Operational Model | Preserve approved owner preferences and Operating Context | Makes assistance relevant and less repetitive | Personal-data governance, inspection, correction, revocation, retention | P0 | Post-v1 |
| Evidence-led SOP drafts | Prepare a change from operational evidence | Reduces improvement-writing effort | Recommendations Center, Improvement Proposals, SOP workflow | P1 | Post-v1 |
| Cross-review interpretation | Explain patterns across Reviews | Reduces manual comparison | Insights, Hypotheses, Recommendations Center | P1 | Post-v1 |
| Workspace optimization recommendations | Propose a lower-noise workspace | Reduces recurring organization friction | Usage evidence, Recommendations Center | P1 | Post-v1 |
| Adaptive Workspace | Apply exact approved Workspace Emphasis without removing capabilities | Reduces persistent navigation and visibility friction | Recommendations Center, Personal Operational Model, Adaptive Owner Context, rollback, neutral workspace, direct access | P1 | Post-v1 |
| Operational Coaching | Provide contextual ongoing decision support | Improves operating judgment over time | Three knowledge models, Recommendations Center, Personal Model | P2 | Mature post-v1 |
| Scenario Simulation | Compare owner-invoked plausible alternatives from a frozen real Case baseline | Supports safe decision exploration | Operational Case, Case Evidence snapshots, explicit assumptions, model governance | P2 | Late post-v1 |
| Predictive Operational Insights | Offer proactive forecasts with uncertainty | Helps anticipate workload and operational risk | Longitudinal evidence, calibrated confidence, shared scenario governance | P2 | Late post-v1 |

## Evolution timeline

### Stage 0 — Governance foundation

Before AI runtime behavior, define AI authority, approval, privacy, personal-data,
explainability, context access, correction, revocation, retention, deletion,
degraded behavior, safety review, and evaluation evidence.

### Stage 1 — Beta: architecture and interaction readiness

- approved AI Assistant, Natural Capture, and AI-first Home architectures;
- Contextual Retrieval architecture;
- AI governance and privacy proposals;
- attention, interruption, handoff, and degraded-operation architecture;
- a validation plan for cognitive-load reduction.

Deterministic Insights and Hypotheses remain important non-AI evidence foundations.

### Stage 2 — v1.0: bounded assistance

Recommended capability target, only after all gates pass:

1. bounded AI Assistant orchestration;
2. text-based Natural Capture;
3. AI-first Home operational surface;
4. Contextual Retrieval;
5. Review composition assistance;
6. optional intent-led SOP drafting.

The v1.0 boundary remains owner-initiated, preview-first, explainable,
non-adaptive, non-predictive, without permanent personal learning, and dependent on
owning modules for every mutation.

### Stage 3 — Early post-v1: recommendation intelligence

1. Recommendations Center;
2. Learning Recommendations;
3. evidence-led SOP drafts;
4. cross-review interpretation;
5. workspace optimization recommendations.

### Stage 4 — Post-v1: governed knowledge models

1. Organizational Knowledge Model;
2. Management Knowledge Model;
3. Personal Operational Model;
4. combined-context guidance.

Organizational context precedes personal adaptation. Personal modeling begins only
after privacy, inspection, correction, and revocation controls are mature.

### Stage 5 — Mature post-v1: adaptation and partnership

1. Adaptive Workspace;
2. Operational Coaching;
3. Predictive Operational Insights.

Adaptive Workspace follows approved recommendations, coaching follows the
three-layer knowledge model, and prediction follows reliable longitudinal evidence
and mature uncertainty governance.

## Milestone summary

| Milestone | Capability outcome |
| --- | --- |
| Beta | Architecture, governance, context, attention, handoff, degraded-mode, and evaluation readiness |
| v1.0 | Bounded Assistant, Natural Capture, AI-first Home, Contextual Retrieval, Review composition, optional intent-led SOP drafts |
| Early post-v1 | Recommendations Center, Learning Recommendations, evidence-led SOP drafting, cross-review interpretation |
| Post-v1 | Organizational, Management, and Personal models; workspace optimization recommendations |
| Mature post-v1 | Adaptive Workspace, Operational Coaching, Predictive Operational Insights |

## Product Review

The sequence addresses frequent owner friction first: expressing intent, finding
context, preparing outcomes, reducing reflection and drafting effort, identifying
improvements, personalizing with approval, and finally supporting broader judgment.

The approved criterion applies:

> Does this reduce the owner's cognitive noise while preserving every decision
> that genuinely requires human judgment?

The roadmap is approved as a coherent capability-evolution direction. It improves
preparation before expanding recommendation, adaptation, or prediction.

## Architecture Review

The roadmap preserves the approved Assistant, Natural Capture, Home, module
ownership, Learning Decision Pipeline, recommendation-versus-adaptation boundary,
knowledge-layer separation, and degraded operation. Capability consolidation
prevents overlapping recommendation, learning, optimization, and coaching systems.

The future Operational Case may supply bounded working context and preserve
relationships across these capabilities, but it does not become a new AI
capability or take mutation authority from domain owners. Its sequencing and
boundaries remain governed by the
[Operational Case Architecture](OPERATIONAL_CASE_ARCHITECTURE.md) and Product
Roadmap.

Case-aware AI must optimize for decision quality, verified operational effect, and
reusable learning rather than artifact count, Recommendation acceptance, SOP
creation, or Case closure. It must preserve inconclusive, failed, no-action, and
another-cycle outcomes.

Every capability retains separate architecture, governance, implementation,
validation, and release states. Owning modules and bounded Workflow Layer
coordinators retain mutations. Predictive output remains a scenario with sources,
confidence, and limitations rather than a deterministic Insight or fact.

Scenario Simulation and Predictive Operational Insights remain distinct. The
former is owner-invoked comparison of explicit alternatives from a frozen Case
baseline; the latter is future proactive forecasting from longitudinal Evidence.
Both follow the [Scenario Simulation Architecture](SCENARIO_SIMULATION_ARCHITECTURE.md)
for provenance, uncertainty, validation, and presentation foundations.

## AI Review

Each stage adds intelligence without silently adding authority. Runtime eligibility
requires traceable context, confidence and limitations, explicit preview, bounded
approval, correction, revocation, privacy, retention, source precedence, degraded
behavior, failure transparency, and safety evaluation.

Durable personalization, adaptation, coaching, and prediction remain delayed until
Management OS has reliable evidence and mature governance.

## Final sequencing

```text
0. AI governance and privacy
1. AI Assistant
2. Natural Capture
3. AI-first Home Workspace
4. Contextual Retrieval
5. Review composition assistance
6. Intent-led SOP drafting
7. Recommendations Center
8. Learning Recommendations
9. Evidence-led SOP drafting
10. Cross-review interpretation
11. Organizational Knowledge Model
12. Management Knowledge Model
13. Personal Operational Model
14. Workspace optimization recommendations
15. Adaptive Workspace
16. Operational Coaching
17. Predictive Operational Insights
```

The governing strategy is: first understand and prepare; then recommend; then
personalize; then adapt; predict only after the evidence is mature.

Implemented capability behavior is evaluated through the
[AI Quality Framework](AI_QUALITY_FRAMEWORK.md). Quality evidence does not change
the capability order or authorize implementation.
