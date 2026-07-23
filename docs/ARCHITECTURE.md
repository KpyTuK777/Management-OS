# Architecture

Architecture and source identifiers may remain in English, while user-facing copy
follows the [Product Language Guide](PRODUCT_LANGUAGE.md).

## Overview

Management OS is a static, client-side web application. It has no build system,
server, API, or external database. Browser `localStorage` persists domain
collections including Projects, Notes, Knowledge, Categories, SOPs, SOP Executions,
Execution Reviews, and Improvement Proposals.

The approved future [AI Runtime Architecture](AI_RUNTIME_ARCHITECTURE.md) defines
provider-independent AI execution boundaries. No AI runtime, provider integration,
Model Gateway, or related infrastructure is currently implemented.

The [Protected AI Runtime Platform](PROTECTED_AI_RUNTIME_PLATFORM.md) selects a
containerized Node.js service on Google Cloud Run as the future v1 host. No
container, cloud resource, authenticated runtime, or deployment pipeline is
currently implemented.

The approved future [Owner Identity Architecture](OWNER_IDENTITY_ARCHITECTURE.md)
defines OIDC authentication, server-managed browser sessions, stable Accounts,
Workspace Membership, and bounded runtime Auth Context. None is currently
implemented.

The [Owner Identity and Authentication](OWNER_AUTHENTICATION_ARCHITECTURE.md)
specialization selects Google Sign-In behind that provider-neutral boundary for
v1. Google authentication is not currently implemented.

## Project structure

```text
Management-OS/
├── index.html              # AI-first Home with Phase 2 temporary capture interaction
├── portfolio.html          # Functional Portfolio page
├── notes.html              # Notes Inbox for quick capture
├── knowledge-base.html     # Functional Knowledge Base page
├── sop.html                # SOP definitions and Knowledge workflow target
├── sop-executions.html     # Active SOP sessions and immutable execution history
├── review.html             # Pending and completed Execution Reviews
├── insights.html           # Read-only deterministic operational patterns
├── hypotheses.html         # Explainable possible interpretations of Insights
├── improvement-proposals.html # User-authored, evidence-linked SOP improvement proposals
├── projects.html           # Legacy portfolio-page prototype
├── css/                    # Design tokens, layout, components, utilities
├── js/                     # Layout, platform utilities, storage, and page behavior
└── docs/                   # Product and engineering documentation
```

## HTML pages

- `index.html` is the AI-first Home. It exposes the Phase 2 page-memory-only
  Natural Capture interaction and a read-only projection of active SOP Executions
  without implementing AI, routing, domain mutation, or persistent capture.
- `portfolio.html` is the active Portfolio implementation.
- `notes.html` is the Notes Inbox for quick capture and later organization.
- `knowledge-base.html` is the active Knowledge Base implementation.
- `sop.html` manages repeatable procedure definitions.
- `sop-executions.html` guides active SOP sessions and presents execution history.
- `review.html` captures lightweight reflection after completed Executions.
- `insights.html` presents deterministic aggregates across existing domains.
- `hypotheses.html` presents evidence-based explanations without proposed actions.
- `improvement-proposals.html` manages controlled SOP improvement proposals and decisions.
- `projects.html` is a legacy prototype and is not the active Portfolio page.
- `analytics.html`, `calendar.html`, `knowledge.html`, `reviews.html`, `settings.html`, and `tasks.html` are currently placeholders. `reviews.html` is legacy; the active Review Layer is `review.html`.

## CSS architecture

`css/style.css` is the stylesheet entry point. It imports:

- `base.css` for design tokens, reset, and base typography;
- `layout.css` for the app shell, sidebar, and page layout;
- `components.css` for shared controls and project cards;
- `pages.css` for page-specific spacing;
- `utilities.css` for utility classes such as `.hidden`.

See [Design System](DESIGN_SYSTEM.md) for UI conventions.

## JavaScript modules

- `js/sidebar.js` owns the shared Layout layer and renders the Sidebar component.
- `js/search.js` exposes generic, non-destructive collection search.
- `js/render-utils.js` exposes small, safe DOM creation and text-assignment helpers.
- `js/storage-utils.js` owns generic JSON reads and writes for browser storage.
- `js/storage.js` exposes domain-specific helpers for Projects, Knowledge Entries,
  Knowledge Categories, Notes, SOPs, SOP Executions, and Execution Reviews.
- `js/portfolio.js` owns Portfolio rendering and project create, edit, and delete actions.
- `js/notes.js` owns Notes CRUD, search orchestration, and rendering.
- `js/note-knowledge-flow.js` coordinates the Notes → Knowledge workflow.
- `js/knowledge-sop-flow.js` coordinates the Knowledge → SOP workflow.
- `js/sop.js` owns SOP CRUD, search orchestration, ordered fields, and rendering.
- `js/sop-execution.js` owns SOP execution state, transitions, progress, and history rendering.
- `js/review.js` owns Review creation, pending Review discovery, search, and rendering.
- `js/insights.js` owns read-only aggregation, calculations, search orchestration, and Insights rendering.
- `js/learning-analysis.js` owns pure deterministic Learning Layer aggregation without storage or DOM access.
- `js/hypotheses.js` owns deterministic hypothesis rules, confidence, limitations, search, and rendering.
- `js/hypothesis-analysis.js` owns pure deterministic Hypothesis generation without page or storage access.
- `js/improvement-proposal-flow.js` coordinates Hypothesis context and accepted-proposal SOP handoff.
- `js/improvement-proposals.js` owns Improvement Proposal CRUD, decisions, search, and rendering.
- `js/app.js` owns Home's deterministic active-Execution projection. It reads
  existing SOP Executions, renders up to three unfinished records, and never
  mutates domain state.
- `js/natural-capture.js` owns Home's Phase 2 temporary interaction state. It
  accepts one text value, renders unchanged review and editing transitions,
  coordinates explicit discard and leave safeguards, and has no storage or domain
  dependency.

## Platform utilities

Platform utilities provide reusable, domain-independent behavior without owning
feature-specific UI, page state, or rendering orchestration. `js/search.js` is the
first Platform Utility. It exposes
`filterCollection(collection, fields, query)`, which performs case-insensitive
matching across named object properties and returns a new filtered array.

`js/storage-utils.js` provides the shared persistence primitives
`getStorageItem(key, defaultValue)` and `setStorageItem(key, value)`. It owns JSON
parsing and serialization but contains no domain keys, migration rules, validation,
or UI behavior. `js/storage.js` remains the public domain boundary and delegates to
these primitives.

`loadInsightsSourceCollections()` composes existing read helpers into a read-only
source snapshot for Learning Layer consumers. It introduces no storage key, cached
metric, or write path. Pure calculations are owned by `js/learning-analysis.js`.

`js/render-utils.js` provides `createElement(tag, className)`,
`createTextElement(tag, text, className)`, and `setText(element, text)`. These
helpers create DOM elements and assign dynamic text through `textContent`. They do
not contain feature logic, styling decisions, event binding, templates, or render
orchestration; those responsibilities remain in feature modules.

Portfolio, Knowledge Base, Notes, and SOP provide their own collections, searchable
fields, and queries. Their page modules continue to own input events, additional
filters, empty states, and rendering. Future shared CRUD and Categories utilities
should follow the same separation: generic behavior belongs in a Platform Utility,
while domain rules remain in page modules.

## Workflow layer

The Workflow layer coordinates domain transitions that span feature modules without
moving domain CRUD or rendering into Platform Utilities. `js/note-knowledge-flow.js`
is the first workflow coordinator.

The Notes → Knowledge coordinator:

- stores a source Note ID temporarily in `sessionStorage`;
- consumes and clears that context when Knowledge Base initializes;
- validates that the Note exists and has no `knowledgeEntryId`;
- maps Note title and content into the Knowledge Entry form;
- links the saved records through `sourceNoteId` and `knowledgeEntryId`;
- leaves the Note visible and does not alter its content timestamps.

`notes.js` initiates the workflow and continues to own Notes UI. `knowledge-base.js`
owns the Knowledge form, persistence, and result rendering. The coordinator is
domain-specific and must not become a generic workflow engine until additional
cross-module workflows establish a stable shared contract.

`js/knowledge-sop-flow.js` follows the same explicit coordinator boundary for the
Knowledge → SOP transition. It consumes temporary `sessionStorage` context,
validates and maps the source Knowledge Entry, creates the provenance relationship,
and resolves linked records for navigation. SOP CRUD, ordered-field controls,
search, rendering, and fragment presentation remain in `js/sop.js`.

The two coordinators intentionally remain separate. Their lifecycle shape is
similar, but their domain mappings and approval requirements differ. No generic
workflow or relationship engine is introduced.

## Layout layer

The Layout layer owns interface elements shared by multiple pages. `js/sidebar.js`
is its first component and provides a structure that can later include Top
Navigation, Breadcrumbs, User Profile, and Notifications without changing how
pages initialize the layer.

### Sidebar responsibilities

- maintain the shared navigation configuration;
- generate the Sidebar DOM from a single source;
- resolve the current page from `window.location.pathname`;
- apply the active navigation state and `aria-current` attribute;
- leave page-specific behavior in the appropriate page module.

### Sidebar mount point

Pages mount the Sidebar with an empty `<aside class="sidebar" id="sidebar"></aside>`
element and load `js/sidebar.js`.

### Active page detection

Active-page detection is fully contained in the Layout module. It resolves the
current filename from `window.location.pathname`; pages do not provide active-state
configuration.

## Persistence and data flow

1. `portfolio.js` loads the `projects` collection through `loadProjects()`.
2. The page renders a card for each project.
3. Create, edit, and delete actions update the in-memory array.
4. `saveProjects()` delegates serialization under the `projects` key to
   `setStorageItem()`.
5. `renderProjects()` refreshes the visible project list.

The Project schema is defined in [Data Model](DATA_MODEL.md).

Notes load through `loadNotes()` and persist through `saveNotes()` under the
`notes` key. `notes.js` owns the in-memory collection, CRUD workflow, search state,
and rendering while delegating shared search, storage, and safe DOM operations to
Platform Utilities.

SOP definitions load through `loadSops()` and persist through `saveSops()` under
the `sops` key. `sop.js` owns the collection and UI behavior, while
`knowledge-sop-flow.js` links `KnowledgeEntry.sopId` with
`SOP.sourceKnowledgeEntryId`. Fragment navigation presents related cards without a
router or global state.

SOP Executions load through `loadSopExecutions()` and persist through
`saveSopExecutions()` under `sopExecutions`. Each execution snapshots the SOP title,
steps, and checklist at start. `sop-execution.js` owns the active-session state
machine and history UI; it never edits the source SOP. A temporary
`sessionStorage` value carries the selected SOP to the execution page, while
fragment identifiers present active or historical records without a router.

## Execution layer

The Execution layer records what happened when a procedure was used. It is a child
domain of SOP rather than a cross-module conversion, so it does not use a workflow
coordinator. `js/sop-execution.js` owns:

- creating one active execution per SOP;
- snapshotting the SOP definition at execution start;
- completing, skipping, and restoring execution items before finish;
- deriving progress and duration from stored state;
- finalizing sessions into read-only history;
- search, fragment presentation, and missing-SOP messaging.

Execution history is evidence, not a live projection of the SOP definition. Later
SOP edits and deletion cannot rewrite stored runs. This boundary also allows future
AI recommendations to inspect outcomes without coupling them to SOP CRUD.

## Learning layer

The Learning layer captures structured interpretation of immutable Execution
evidence. `js/review.js` is its first feature module and owns:

- validating that the referenced Execution is finished;
- allowing at most one Review per Execution;
- collecting rating, outcome, blockers, improvements, and lessons learned;
- deriving pending Reviews from finished Executions without mutating them;
- rendering Review history and real-time search through Platform Utilities.

### Learning Decision Pipeline

The long-term Learning Layer architecture must preserve this ordered pipeline:

```text
Observed Facts
      ↓
Evidence
      ↓
Insights
      ↓
Hypotheses
      ↓
Recommendations
      ↓
User Approval
      ↓
System Improvement
```

No stage may silently bypass another. Each transition has a distinct ownership
boundary:

- Observed Facts remain owned by their source domains;
- Evidence preserves traceable facts used in analysis;
- Insights expose deterministic patterns in that Evidence;
- Hypotheses preserve their supporting Evidence and express possible explanations;
- Recommendations preserve their supporting Hypothesis and propose a bounded action;
- User Approval authorizes only the action that was presented;
- System Improvement is performed by the owning feature or Workflow Layer.

Traceability must remain intact across the full pipeline. A downstream object or
view must not detach a conclusion from its supporting stage, silently increase
confidence, or convert interpretation into fact. Explainability is an architectural
quality and core product value, not a presentation concern that can be added later.

After an Execution finishes, `sop-execution.js` offers Review immediately but does
not require it. A short-lived `sessionStorage` value under `reviewExecutionId`
carries the selected Execution to `review.html`. Deferral creates no stored state;
the missing Review remains discoverable later from the finished Execution and the
Review page.

Review is observation only. It never updates Execution, SOP, Knowledge, or Notes.
Future Insights may interpret Review signals, but AI interpretation and automatic
SOP recommendations are outside the current Learning Layer.

### Insights foundation

`js/insights.js` provides the first observational Insights layer. It reads current
domain collections, delegates deterministic aggregation to `js/learning-analysis.js`,
and renders results through `render-utils.js`. It does not own CRUD, workflow
behavior, or source-data mutation.

Initial Insights cover:

- Execution totals, completion, duration, Review rating, and Review completion;
- rating and outcome distributions;
- repeated blocker and improvement phrases;
- Notes → Knowledge and Knowledge → SOP conversion;
- unused and frequently executed SOPs.

Repeated themes currently mean case-insensitive, whitespace-normalized exact
phrases appearing at least twice. Frequently executed SOPs have at least two
completed Executions. These explicit rules prevent semantic inference from being
presented as observed fact.

Insights are recalculated from source data when the page loads and are never
persisted. Search filters rendered Insight cards without modifying metrics or
source collections. The layer performs no recommendations, automatic cleanup,
interface changes, or optimization.

The calculated metrics may later become read-only inputs for the Recommendations
Center, Adaptive Workspace, or AI Assistant. Those future consumers must preserve
their own approval and mutation boundaries and are not implemented here.

### Hypotheses foundation

`js/hypothesis-analysis.js` consumes the same deterministic analysis as Insights
and applies an explicit, feature-owned rule set. `js/hypotheses.js` renders and
searches those results. A possible explanation is formulated only when documented
evidence thresholds are met.

Each runtime Hypothesis preserves:

- its type, subject, and cautious statement;
- structured supporting Evidence;
- deterministic confidence level and confidence basis;
- evidence limitations;
- originating source modules.

Hypotheses are recalculated on page load and are not persisted. The module has no
storage write path, entity CRUD, workflow behavior, Recommendation actions, or AI
dependency. An empty result is valid when the available evidence does not meet a
rule threshold.

`js/learning-analysis.js` is a Learning Layer domain service, not a Platform
Utility. It is shared by Insights and Hypotheses because both require identical
facts, but it contains no hypothesis language or rule evaluation. This prevents
page-DOM coupling and duplicated metric logic.

The Hypotheses layer preserves the Learning Decision Pipeline: Recommendations may
later reference a Hypothesis, but Hypotheses cannot create proposed actions or
bypass User Approval.

### Improvement Proposal workflow

`js/improvement-proposal-flow.js` is a bounded Workflow Layer coordinator between
runtime Hypotheses, persisted Improvement Proposals, and the existing SOP editor.
It validates source records, creates traceability snapshots, carries short-lived
context through `sessionStorage`, and opens an accepted proposal beside its source
SOP. It does not render cards, own CRUD, edit an SOP, or act as a generic workflow
engine.

`js/improvement-proposals.js` owns the persisted review artifact. Source Hypothesis
Evidence, confidence, limitations, and SOP identity are snapshotted when the user
creates a proposal. Only user-authored proposal text is editable while its status
is `open`. Accept and Reject are explicit, terminal review decisions.

Acceptance does not mean application. It saves the decision and launches the
existing SOP editor with read-only proposal context. The SOP remains unchanged
until the user manually edits its owned fields and saves. Missing source SOPs are
reported without repairing, deleting, or rewriting traceability.

This is the first controlled improvement workflow. It does not introduce a
Recommendation entity, AI interpretation, autonomous changes, or a general
relationship engine.

### Future Recommendations Center boundary

The Recommendations Center is a future Learning Layer capability, not part of the
current implementation. No module, storage collection, inference service, or
automatic interface behavior is introduced by this architectural direction.

Its conceptual responsibilities are:

- observe patterns across domain-owned evidence;
- identify an opportunity without modifying its source records;
- explain what was observed and why it matters;
- expose an evidence-based confidence level;
- propose one bounded action;
- wait for **Accept**, **Reject**, or **Remind me later**.

A recommendation must contain:

| Element | Architectural purpose |
| --- | --- |
| What was observed | Traceable evidence from existing domain records. |
| Why this conclusion was reached | Explainable reasoning rather than an opaque result. |
| Confidence level | A calibrated indication of evidence strength, not a guarantee. |
| Proposed action | The exact bounded mutation that could be authorized. |
| Accept / Reject / Remind me later | An explicit decision boundary controlled by the user. |

Possible recommendation categories include Workspace optimization, Knowledge
candidates, SOP candidates, SOP improvement suggestions, Planning recommendations,
Workflow improvements, and cognitive-load reduction opportunities.

#### Ownership and mutation boundary

Observation and proposal generation must be read-only. The Recommendations Center
must not own domain CRUD and must never mutate Notes, Knowledge, SOPs, Executions,
Reviews, plans, or Layout state directly.

If the user accepts a recommendation, the owning feature or Workflow Layer remains
responsible for validation, preview where appropriate, and the approved mutation.
Reject performs no product mutation. Remind me later postpones the decision and is
not implicit approval. Major architectural or product changes still follow the
governance Proposal and approval process.

This separation preserves explainability and prevents AI interpretation from
becoming autonomous product authority. Automatic interface changes are explicitly
outside the permitted architecture.

### Long-term AI Knowledge Model

Beyond v1.0, the Learning Layer may evolve into a three-layer AI Knowledge Model.
This is a conceptual architecture for future product reasoning, not a description
of current components or an implementation commitment.

| Knowledge layer | Conceptual responsibility |
| --- | --- |
| Management Knowledge Model | Understand broadly accepted management theory, methods, and principles. |
| Organizational Knowledge Model | Understand how this organization works, including its vocabulary, workflows, practices, and internal standards. |
| Personal Operational Model | Understand the owner's working, learning, planning, decision-making, and explanation preferences. |

The layers are complementary rather than interchangeable. Management knowledge
offers general principles; organizational knowledge grounds them in actual
practice; personal operational knowledge shapes how guidance is made useful to the
owner. Future recommendations should combine all three rather than relying on one
layer in isolation.

The Personal Operational Model exists for personalization, not profiling. Across
all three layers, the owner must be able to understand why the system reached a
conclusion, correct its understanding, and approve meaningful changes. Knowledge
growth does not weaken the existing Learning Decision Pipeline: facts,
interpretations, proposals, and authorized changes remain distinct.

The architectural direction is therefore **“Grow with the owner”**: improve the
quality and relevance of understanding over time while preserving transparency,
explainability, and user control.

No storage, API, model, training approach, service, module, or new runtime behavior
is defined by this vision. The current architecture and v1.0 implementation scope
remain unchanged.

The approved product architecture for the future operational intelligence layer is
defined separately in [AI Assistant Architecture](AI_ASSISTANT_ARCHITECTURE.md).
It extends these boundaries without introducing current runtime behavior or
redesigning existing modules.

The Assistant's primary intake model is defined in
[Natural Capture Architecture](NATURAL_CAPTURE_ARCHITECTURE.md). It preserves the
same module ownership, approval, learning, and non-implementation boundaries.

Home's approved future interaction role is defined in
[AI-first Workspace Architecture](AI_FIRST_WORKSPACE_ARCHITECTURE.md). Home remains
a presentation and coordination surface rather than a domain-data owner, and the
current Dashboard implementation is unchanged.

The approved [Adaptive Owner Context Architecture](ADAPTIVE_OWNER_CONTEXT_ARCHITECTURE.md)
defines Operating Context, optional Operational Stage, Current Focus relationship,
and capability-preserving Workspace Emphasis. The
[Personal Operational Model](PERSONAL_OPERATIONAL_MODEL.md) owns only durable
approved personal context, while
[Adaptive Workspace Architecture](ADAPTIVE_WORKSPACE_ARCHITECTURE.md) owns only
application of exact approved presentation emphasis. Home remains stable; no
capability, domain record, authorization rule, or current runtime behavior changes.

### Future Operational Case boundary

The approved [Operational Case Architecture](OPERATIONAL_CASE_ARCHITECTURE.md)
defines the Case as a future bounded operational learning and change process, not
only a record aggregate. It may own Case intent, current and intended conditions,
success and guardrail measures, iterative Countermeasure cycles, typed
relationships, decision context, outcome verification, monitoring, closure, and
learning synthesis, but participating records remain owned by their existing
domains.

Case membership is a relationship rather than record migration. Facts retain
source provenance; SOPs and Executions remain independently auditable; Reviews
retain their Execution relationship; Recommendations remain owned by the
Recommendations Center; and Knowledge or SOP changes require explicit promotion
through the owning workflow. This direction defines no current schema, storage,
service, route, UI, or migration behavior.

The dependency and maturity order of approved and future intelligence capabilities
is maintained in the [AI Capability Roadmap](AI_CAPABILITY_ROADMAP.md). Capability
placement does not define runtime implementation architecture.

Product-oriented evaluation of implemented AI behavior is governed by the
[AI Quality Framework](AI_QUALITY_FRAMEWORK.md). The framework evaluates behavior
without redefining capability architecture or release authority.

## Module responsibilities

- **Home:** present today-focused, static dashboard information.
- **Portfolio:** manage the browser-stored project collection.
- **Notes:** provide a friction-free Inbox for capturing ideas before organization.
- **SOP:** turn structured knowledge into independently editable procedures.
- **Execution:** run SOP snapshots and preserve historical evidence without modifying definitions.
- **Review:** capture structured operational learning without modifying source domains.
- **Insights:** expose deterministic patterns across existing operational evidence.
- **Hypotheses:** formulate explainable possible interpretations while preserving Evidence.
- **Improvement Proposals:** preserve a user-authored, reviewable suggestion without changing its source SOP.
- **Operational Case:** guide bounded operational learning and change from current condition through verified outcome and standardization judgment without taking domain-record ownership.
- **Workflow:** coordinate explicit transitions and relationships between modules.
- **Storage:** keep domain storage helpers stable while shared utilities isolate
  `localStorage` reads, JSON parsing, and serialization.
- **Layout:** render reusable application-shell components from shared modules.
- **Platform utilities:** provide generic behavior shared across feature modules.
- **CSS layers:** provide reusable visual foundations and components.

The broader product module map is maintained in [Systems](SYSTEMS.md).
