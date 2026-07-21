# Systems

Management OS is organized as a collection of business systems. Each system has a distinct purpose and evolves independently while contributing to one operating workspace.

## Home

- **Purpose:** Show what matters today.
- **Current status:** Static dashboard content in `index.html`.
- **Future responsibilities:** Daily focus, prioritized tasks, KPI signals, inbox, timeline, and recent activity.

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
