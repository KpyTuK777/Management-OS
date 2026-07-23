# Sprint Tracker

This tracker records the sprint history currently available in the repository.
Sprint 2 and Sprint 3 records are unavailable and must not be reconstructed without
approved source evidence.

## Documentation planning rule

Future sprints must assess documentation impact during planning. When a sprint
changes product concepts, architecture, data contracts, shared design rules, or
release readiness, it must reserve the necessary documentation work and reference
the relevant stage and item in the
[Documentation Backlog](DOCUMENTATION_BACKLOG.md).

Documentation work remains part of the feature or release sprint that creates the
need. A separate documentation sprint is appropriate only for substantial
consolidation or governance work.

Use this compact structure in future sprint entries:

```markdown
### Documentation impact

- Backlog item: Stage and exact item title, or None
- Required updates: affected canonical documents, or None
- Readiness contribution: Beta, v1.0, post-v1, or None
- Validation: links, consistency review, and `git diff --check`
- Status: Planned or Completed
```

Do not duplicate backlog rationale, dependencies, or effort estimates in this
tracker. A documentation item is complete only after link and consistency
validation and satisfaction of the
[Documentation Definition of Done](DOCUMENTATION_MAP.md#documentation-definition-of-done).
Release-gated sprint work cannot close while its required documentation remains
incomplete.

## Sprint 1 — Portfolio foundation

### Completed

- **Feature 01:** Create Project
- **Feature 02:** Edit Project
- **Feature 03:** Delete Project

### Planned

- **Feature 04:** Project Status
- **Feature 05:** Progress
- **Feature 06:** Filters
- **Feature 07:** Sorting

## Sprint 4 — Foundation 2.0

### Completed

- **Feature 01:** Shared Sidebar
- **Platform Feature PF-02:** Shared Search Component

## Sprint 5 — Knowledge Ecosystem

### Completed

- **Feature 01:** Notes Module MVP
- **Feature 02:** Notes → Knowledge Flow
- **Feature 04:** Knowledge → SOP Workflow
- **Feature 05:** SOP Execution MVP

## Sprint 6 — Learning Layer

### Completed

- **Feature 01:** Execution Review — Learning Layer Foundation
- **Feature 02:** Insights Foundation
- **Feature 03:** Hypotheses Foundation
- **Feature 04:** Improvement Proposal Workflow
- **Design:** Design System Review and UI Modernization
- **Language:** Ukrainian Localization and Terminology Audit
- **Documentation:** Product Language Guide and documentation migration
- **Governance:** Documentation Map and lifecycle rules
- **Governance:** Documentation Definition of Done and delivery gates
- **Governance:** Management OS Development Methodology and formal internal adoption
- **Governance:** Product Maturity Model and release-readiness gates
- **Governance:** Internal Project Health Dashboard and qualitative release blockers
- **Governance:** Lightweight Decision Log and ADR routing boundary
- **Governance:** Knowledge Evolution Map and permanence boundary

## Sprint 7 — AI Operational Layer

### Completed

- **Feature 01 — Architecture:** AI Assistant Architecture
- **Feature 02 — Architecture:** Natural Capture Architecture
- **Feature 02 — Interaction Architecture:** Natural Capture Interaction Foundation Phase 2
- **Communication Architecture:** AI Communication Style Guide
- **Identity Architecture:** AI Assistant Identity synthesis
- **Governance:** Implementation Planning Standard between Architecture Approval and APPLY
- **Governance:** Quality Lead responsibility within existing Reviews and Validation
- **UX Evolution — Architecture:** AI-first Workspace
- **UX Evolution — Implementation:** AI-first Home Phase 1 presentation foundation
- **Feature 02 — Implementation:** Natural Capture Interaction Foundation Phase 2
- **Planning:** Canonical AI Capability Roadmap
- **Governance:** Canonical AI Quality Framework
- **Product Experience — Architecture:** Canonical Owner Journey
- **Product Experience — Governance:** Owner Journey Validation Framework
- **Documentation:** Cognitive-load reduction promoted to a canonical Product Principle
- **Documentation:** Cognitive-load principle added as a mandatory Product Review criterion

### Implementation status

- No AI Assistant runtime behavior was implemented.
- AI-first Home Phase 1 replaces the dashboard-centric primary experience with an
  intent-first shell and a deterministic active-Execution projection.
- Natural Capture Phase 2 supports page-memory-only text entry, unchanged review,
  continued editing, explicit discard, accessible state communication, and a
  best-effort leave warning.
- Natural Capture does not analyze, classify, route, recommend, create domain
  records, persist captures, or learn from interaction.
- Implementation remains subject to a separate approved proposal and APPLY.
- AI governance, privacy, explainability, correction, retention, revocation, and
  safety controls remain prerequisites.

## Sprint 8

### Completed

- **Product Experience — Architecture:** Canonical Mobile Experience Architecture
- **Platform Architecture:** Canonical Platform Responsibility Model
- **AI Operational Layer — Architecture:** Canonical AI Runtime Architecture
- **AI Operational Layer — Policy:** Canonical AI Decision Policy with distinct observational behavior
- **AI Capability 01 — Architecture:** Canonical Intent Recognition capability contract
- **AI Capability 02 — Architecture:** Canonical conditional Context Collection capability contract
- **AI Operational Layer — Platform Architecture:** Protected AI Runtime Platform
- **Architecture Decision:** ADR-0001 selects a containerized Node.js runtime on Google Cloud Run
- **Identity Architecture:** Canonical Owner Identity Architecture
- **Architecture Decision:** ADR-0002 establishes OIDC, internal Accounts, Workspace Membership, and server-managed browser sessions
- **Authentication Architecture:** Google Sign-In v1 provider specialization
- **Architecture Decision:** ADR-0003 selects Google Sign-In behind the provider-neutral identity boundary
- **Governance:** Optimized implementation workflow with direct and extended delivery lanes
- **Product and Information Architecture:** Canonical Adaptive Owner Context, Personal Operational Model, and Adaptive Workspace architectures with owner-controlled Operating Context, optional Operational Stage, and capability-preserving Workspace Emphasis
- **Product and Information Architecture:** Canonical Operational Case Architecture with bounded centrality, domain-record independence, explicit knowledge promotion, and shared real-work and Operational Gym reasoning model
- **Strategic Product Architecture:** Operational Case refined as a bounded operational learning and change process with Case intents, current and target conditions, Countermeasure cycles, outcome verification, and standardization judgment

### Implementation status

- The approved mobile architecture defines retrieval, Capture, active-work
  continuity, bounded decisions, notifications, offline trust states, interaction
  limits, and desktop handoff.
- No mobile application, cross-device synchronization, global intelligent Search,
  voice Capture, notification delivery, offline mutation, recommendation, or AI
  runtime behavior was implemented.
- Each mobile implementation increment requires proportionate Implementation
  Planning, explicit APPROVE, and APPLY. A separate plan gate applies only when
  the increment changes a canonical or ADR-level boundary.
- The Platform Responsibility Model allocates complementary Desktop and Mobile
  responsibilities without introducing feature parity, synchronization, or
  platform implementation.
- The AI Runtime Architecture separates capability contracts, workflows, context,
  prompts, provider adapters, model execution, validation, and product-owned
  confidence without selecting or implementing a provider.
- The AI Decision Policy distinguishes evidence-based, non-actionable observations
  from recommendations and preserves silence, clarification, approval, and
  truthful deferral as separate product-owned outcomes.
- Intent Recognition defines the first production AI capability boundary: it uses
  owner wording as primary Evidence and authorized context as supporting Evidence,
  then stops at explainable interpretations without routing or mutation.
- Context Collection defines the second production AI capability boundary: the
  Runtime bypasses it when Evidence is sufficient and invokes it only for a
  declared evidence gap, with minimized, authorized, source-attributed packages.
- The Protected AI Runtime Platform selects Cloud Run as the managed host for a
  portable Node.js container while leaving identity and AI provider selection as
  explicit prerequisites.
- The Owner Identity Architecture defines provider-neutral web and native
  authentication, revocable sessions, token separation, runtime authorization, and
  future multi-device and multi-owner boundaries. Its Google Sign-In
  specialization selects the v1 verifier without implementing authentication.
- The Owner Identity and Authentication specialization selects Google Sign-In for
  v1 while preserving Management OS Account ownership, provider abstraction,
  persistent Device Sessions, runtime Auth Context, and future-provider readiness.
- Routine implementation proposals within approved architecture may now proceed
  through Proposal APPROVE directly to APPLY; canonical and ADR-level changes retain
  extended domain Review, approval, and Implementation Planning.
- The Adaptive Owner Context Architecture establishes Operating Context as the
  canonical concept, treats Operational Stage as an optional contextual attribute,
  and allows only approved reprioritization of navigation, Home, widgets,
  recommendations, and workspace emphasis. No capability, implementation, data
  model, persistence, runtime, or AI behavior was introduced.
- The Personal Operational Model now owns durable approved personal context, and
  Adaptive Workspace owns only application of exact approved Workspace Emphasis.
  Multiple contexts, one durable primary context maximum, neutral operation,
  direct access, rollback, and owner approval remain mandatory future boundaries.
- The Operational Case Architecture establishes the Case as the primary aggregate
  for bounded non-routine investigation, decision, action, outcome, and learning.
  Existing domains retain record authority; Home remains primary; routine work
  remains Case-optional; and no Case entity, persistence, UI, migration, runtime,
  Gym, or AI behavior was implemented.
- Strategic review further defines the Case as an active iterative process rather
  than a record container. Improvement remains the dominant direction while
  recovery, prevention, investigation, decision, design, and justified no-action
  outcomes remain valid. No runtime or data-model implementation was introduced.

See [Roadmap](ROADMAP.md) for product phases beyond this sprint.
