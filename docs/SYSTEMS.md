# Systems

Product labels in the Ukrainian interface follow the
[Product Language Guide](PRODUCT_LANGUAGE.md); internal module names remain
unchanged.

Management OS is organized as a collection of business systems. Each system has a distinct purpose and evolves independently while contributing to one operating workspace.

The [Owner Journey](OWNER_JOURNEY.md) describes how the owner experiences these
systems as one continuous operating relationship without changing their distinct
responsibilities.

## Home

- **Purpose:** Show what matters today.
- **Current status:** AI-first Home Phase 1 and the Natural Capture Phase 2
  interaction foundation are implemented in `index.html`. Home supports one
  page-memory-only text capture with unchanged review, continued editing, explicit
  discard, and read-only active SOP Execution continuity. No AI interpretation,
  classification, routing, recommendation, domain mutation, or persistent capture
  behavior is implemented.
- **Future responsibilities:** Act as an AI-first operational workspace for Natural
  Capture, decisions requiring human judgment, active-work continuity, contextual
  recommendations, and routing into specialized modules. Supporting metrics,
  history, search, and navigation remain available on demand.
- **Boundary:** Home coordinates presentation and interaction but owns no domain
  records, does not replace specialized modules, and must preserve direct module
  access and degraded non-AI operation. Approved Operating Context may affect
  prioritization only; Home remains the stable primary workspace and neutral
  presentation remains supported.

## Personal Operational Model

- **Purpose:** Preserve explicitly approved, owner-controlled personal operational context and preferences.
- **Current status:** Approved future architecture; no model, persistence, or interface is implemented.
- **Future responsibilities:** Preserve multiple approved Operating Contexts, at most one durable primary context, optional Operational Stage, inspectable preferences, effective periods, correction, and revocation.
- **Boundary:** It does not infer identity, own organizational Knowledge, apply Workspace Emphasis, change capability availability, or learn durably without explicit owner approval. See [Personal Operational Model](PERSONAL_OPERATIONAL_MODEL.md).

## Adaptive Workspace

- **Purpose:** Apply an exact owner-approved Workspace Emphasis to presentation priority.
- **Current status:** Approved future architecture; no adaptive runtime or interface behavior is implemented.
- **Future responsibilities:** Reprioritize navigation, Home presentation, widgets, and recommendation selection while preserving inspection, rollback, neutral reset, direct access, and degraded operation.
- **Boundary:** It does not select Operating Context, generate recommendations, change authorization or domain data, remove capabilities, or adapt without approval. See [Adaptive Workspace Architecture](ADAPTIVE_WORKSPACE_ARCHITECTURE.md).

## Portfolio

- **Purpose:** Maintain the full project portfolio.
- **Current status:** Implemented in `portfolio.html` with create, edit, delete, render, and browser persistence.
- **Future responsibilities:** Status and progress updates, filters, sorting, project history, and project-level task relationships.

## Knowledge Base

- **Purpose:** Act as the user's reusable second brain.
- **Current status:** CRUD, categories, search, Notes provenance, and Knowledge → SOP conversion are implemented.
- **Future responsibilities:** Keywords, richer relationships, quality review, and SOP recommendations.

## Notes

- **Purpose:** Provide a friction-free Inbox for quick capture.
- **Current status:** CRUD, search, and Notes → Knowledge conversion are implemented.
- **Future responsibilities:** Capture assistance, lifecycle states, and history.

## SOP

- **Purpose:** Define repeatable actions that operationalize structured knowledge.
- **Current status:** CRUD, search, ordered steps, checklist definition, Knowledge conversion, bidirectional navigation, execution sessions, and completion history are implemented.
- **Future responsibilities:** Approvals, versioning, and evidence-driven improvement feedback.

## SOP Execution

- **Purpose:** Guide real work step by step and preserve historical evidence without changing the procedure definition.
- **Current status:** Start/resume, progress, complete/skip decisions, notes, guarded finish, search, and immutable history are implemented.
- **Future responsibilities:** Review signals, duration forecasts, reminders, and improvement recommendations.

## Review Center

- **Purpose:** Capture operational experience after execution with minimal cognitive load.
- **Current status:** Execution Review creation, deferral, pending discovery, persistence, and search are implemented in `review.html`.
- **Future responsibilities:** Cross-execution insights, repeated-pattern detection, approved SOP improvement proposals, and broader daily, weekly, and monthly reflection.

## Insights

- **Purpose:** Make existing operational patterns visible before recommendations are introduced.
- **Current status:** Deterministic Execution, Review, Knowledge, SOP, and Notes aggregates are implemented in `insights.html` with read-only search.
- **Future responsibilities:** Additional time-based comparisons and reliable inputs for user-controlled Recommendations, Adaptive Workspace, and AI Assistant capabilities.
- **Boundary:** Insights never modify entities, recommend actions, clean data, optimize automatically, or change workspace layout.

## Hypotheses

- **Purpose:** Formulate possible explanations for deterministic Insights while preserving their Evidence.
- **Current status:** Runtime-only recurring-pattern, outcome, coverage, SOP-usage, and Information Lifecycle hypotheses are implemented in `hypotheses.html`.
- **Future responsibilities:** Provide traceable inputs to the user-controlled Recommendations Center after separate approval.
- **Boundary:** Hypotheses never persist interpretations, propose actions, modify data, optimize the workspace, or invoke AI.

## Improvement Proposals

- **Purpose:** Capture a user-authored, evidence-linked suggestion for improving an SOP without changing the procedure.
- **Current status:** Create, edit-open, search, accept, reject, traceability snapshots, and manual SOP-editor handoff are implemented in `improvement-proposals.html`.
- **Future responsibilities:** Decision history and explicit confirmation that a manually revised SOP addresses a proposal.
- **Boundary:** Proposals never edit SOPs, rewrite Evidence, modify history, update Knowledge or Notes, or act as Recommendations.

## Analytics

- **Purpose:** Explain operational change and trends.
- **Current status:** Placeholder page.
- **Future responsibilities:** Metrics, trend analysis, project performance, and decision support.

## Calendar

- **Purpose:** Provide time-based operational planning.
- **Current status:** Placeholder page.
- **Future responsibilities:** Schedule, milestones, deadlines, and planning views.

## Tasks

- **Purpose:** Manage actionable work.
- **Current status:** Placeholder page.
- **Future responsibilities:** Task capture, priorities, completion, and project association.

## Settings

- **Purpose:** Configure the workspace.
- **Current status:** Placeholder page.
- **Future responsibilities:** Preferences, terminology, visual settings, and future integrations.

See [Architecture](ARCHITECTURE.md) for implementation boundaries and [Roadmap](ROADMAP.md) for delivery direction.
