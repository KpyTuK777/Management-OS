# Changelog

This file records released product changes. Sprint scope and completion are tracked
separately in [Sprint Tracker](SPRINTS.md).

## Unreleased

### Foundation 2.0

- Introduced the first shared layout component.
- Sidebar is now generated from a single source.
- Removed duplicated sidebar markup across pages.
- Added a shared collection-search helper.
- Portfolio and Knowledge Base now use a single search implementation.
- Added shared browser-storage utilities for JSON reads and writes.
- Existing domain storage helpers now delegate to the shared utility.
- Added shared DOM creation and safe text-rendering utilities.
- Portfolio no longer interpolates stored project text into HTML templates.
- Replaced the dashboard-centric Home with the AI-first Home Phase 1 presentation
  foundation.
- Added an honest unavailable Natural Capture surface and future Assistant-response
  placeholder without AI, classification, storage, or workflow behavior.
- Activated the Natural Capture Phase 2 interaction foundation with page-memory
  text entry, unchanged review, continued editing, explicit discard confirmation,
  accessible status announcements, and best-effort navigation-loss protection.
- Natural Capture Phase 2 performs no AI interpretation, classification, routing,
  recommendation, domain mutation, persistent storage, analytics, or learning.
- Added a read-only Home projection for up to three active SOP Executions with
  direct resume links.
- Removed project statistics, static focus, KPI, timeline, activity, and quick-action
  panels from the primary Home hierarchy while preserving sidebar access to all
  existing modules.

### Knowledge Ecosystem

- Added the Notes Inbox for quick capture.
- Added Notes create, edit, delete, and real-time search.
- Added Notes persistence under the `notes` storage key.
- Added the Notes → Knowledge Base workflow using temporary session context.
- Notes and Knowledge Entries now retain links to their source and result records.
- Converted Notes remain visible with a `Додано до бази знань` indicator.
- Added the SOP module with create, edit, delete, ordered steps, checklist definition, and real-time search.
- Added the Knowledge → SOP workflow with bidirectional provenance and fragment navigation.
- Related Knowledge and SOP cards now handle missing records without modifying stored relationships.
- Added SOP execution sessions with step and checklist progress, skip decisions, and notes.
- Added immutable execution history stored under the `sopExecutions` key.
- Added SOP execution search, resume behavior, and bidirectional SOP navigation.

### Design Improvements

- Refined the Dashboard into a clearer operational command center.
- Prioritized attention, current focus, project position, and supporting context.
- Preserved early prototype experiments inside a secondary **Додатковий контекст** area.
- Modernized shared navigation, cards, forms, empty states, responsive layouts, and
  accessibility feedback.

### Product Language and documentation

- Standardized Ukrainian user-facing terminology across active and prototype pages.
- Added the canonical Product Language Guide for terminology, voice, naming, and
  future AI communication.
- Added documentation ownership, authority, and lifecycle governance.
- Added a staged Documentation Backlog aligned with beta, v1.0, post-v1.0, and
  long-term maturity.
- Added a canonical Documentation Definition of Done and connected it to Team,
  Development, Sprint, and backlog completion rules.
- Added the internal Management OS Development Methodology as a synthesis of
  product, architecture, delivery, design, language, documentation, and AI
  governance.
- Formally adopted the methodology as an internal operating standard before Beta,
  with explicit canonical precedence and no standing implementation authority.
- Added the Product Maturity Model with evidence-based Prototype, Alpha, Beta,
  v1.0, and post-v1 readiness gates.
- Added an internal Project Health Dashboard that aggregates canonical evidence
  into qualitative release-readiness states without introducing new authority.
- Added a lightweight, append-only Decision Log for consequential approved rationale
  below the ADR threshold.
- Added a non-authoritative Knowledge Evolution Map that routes temporary ideas,
  canonical truth, durable rationale, delivery evidence, and release history to
  their existing documentation authorities.
- Added the approved AI Assistant product architecture for contextual operational
  intelligence, confidence and clarification, bounded approval, explicit learning,
  cognitive-load reduction, layered memory, and distributed Assistant presence.
- Added the approved Natural Capture architecture for intent recognition,
  context-aware routing, concise clarification, safe Inbox fallback, bounded
  approval, failure handling, and explicit learning.
- Added the approved Natural Capture Interaction Foundation Phase 2 architecture
  for honest text entry, session-scoped temporary review, editing, discard, and
  validation before any AI interpretation or permanent storage.
- Added the canonical AI Communication Style Guide for truthful capability and
  limitation claims, calm tone, distinct message roles, uncertainty, temporary
  state, recommendations, approvals, confirmations, failures, learning, and
  interruption restraint.
- Added the canonical, technology-independent AI Assistant Identity synthesis for
  consistent character, trust, authority, owner relationship, and behavior under
  uncertainty without redefining its source architectures or principles.
- Added the Implementation Planning Standard between Architecture Approval and
  APPLY, with proportionate plan requirements, ownership, readiness review,
  validation expectations, and explicit separation of plan approval from mutation
  authority.
- Added the Quality Lead responsibility for validation coverage, reproducible
  evidence, defect and limitation visibility, and release-readiness support within
  existing reviews, without introducing a new approval stage.
- Added the approved AI-first Workspace architecture, evolving future Home from a
  traditional information dashboard into an intent-first operational surface while
  preserving specialized modules, direct navigation, and degraded non-AI access.
- Added the canonical AI Capability Roadmap for capability hierarchy, dependencies,
  Beta, v1.0, and post-v1 evolution, and risk-aware sequencing toward an
  operational partner.
- Added the canonical AI Quality Framework for product-oriented evaluation of
  owner value, cognitive load, usefulness, approval, correction, explainability,
  confidence, context, authority, privacy, degraded operation, and long-term trust.
- Added the canonical Owner Journey describing the intended experience from first
  launch through intent, focused work, completion, learning, recommendations,
  personalization, and calm session closure.
- Added the Owner Journey Validation Framework as standard feature-impact evidence
  within existing Product and Design Reviews, without creating a new approval
  process.
- Added the canonical Mobile Experience Architecture, defining mobile as the
  retrieval, Capture, continuity, and bounded-decision companion to desktop, with
  Search-first navigation, interruption restraint, offline trust states, explicit
  handoff, and no implementation claim.
- Added the canonical Product Principle that Management OS should quietly remove
  cognitive noise while preserving decisions that require human judgment.
- Extended the standard Product Review guidance with a mandatory evaluation of
  cognitive-noise reduction and preservation of human judgment.
- Kept AI Assistant implementation, model technology, providers, APIs, and
  infrastructure outside the documented architecture change.
- Retained `UI_LANGUAGE.md` as a temporary compatibility path.

### Learning Layer

- Added optional lightweight Reviews after completed SOP Executions.
- Added pending Review discovery so reflection can be completed later.
- Added structured rating, outcome, blocker, improvement, and lesson signals.
- Added Review persistence under the `executionReviews` storage key and real-time search.
- Kept Review observations independent from immutable Execution and SOP definitions.
- Added a read-only Insights page with deterministic cross-module aggregation.
- Added Execution and Review statistics, distributions, and repeated-pattern visibility.
- Added Notes and Knowledge conversion metrics plus SOP usage statistics.
- Added real-time Insight-card search without introducing stored Insights or recommendations.
- Extracted deterministic Learning Layer calculations into a shared domain analysis module.
- Added runtime-only, evidence-preserving Hypotheses with confidence and limitations.
- Added deterministic hypothesis rules for Review, execution, SOP usage, and Information Lifecycle patterns.
- Kept Hypotheses read-only and separate from Recommendations, AI, and workspace changes.
- Added evidence-linked SOP Improvement Proposals with open, accepted, and rejected decisions.
- Added immutable Hypothesis and SOP traceability snapshots for every proposal.
- Accepted proposals now open the existing SOP editor with read-only context and no automatic changes.
- Separated deterministic Hypothesis analysis from page rendering for Workflow Layer reuse.
