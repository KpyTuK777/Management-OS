# Architecture

## Overview

Management OS is a static, client-side web application. It has no build system,
server, API, or external database. Browser `localStorage` persists domain
collections including Projects, Notes, Knowledge, Categories, SOPs, SOP Executions,
and Execution Reviews.

## Project structure

```text
Management-OS/
├── index.html              # Static Home dashboard
├── portfolio.html          # Functional Portfolio page
├── notes.html              # Notes Inbox for quick capture
├── knowledge-base.html     # Functional Knowledge Base page
├── sop.html                # SOP definitions and Knowledge workflow target
├── sop-executions.html     # Active SOP sessions and immutable execution history
├── review.html             # Pending and completed Execution Reviews
├── insights.html           # Read-only deterministic operational patterns
├── projects.html           # Legacy portfolio-page prototype
├── css/                    # Design tokens, layout, components, utilities
├── js/                     # Layout, platform utilities, storage, and page behavior
└── docs/                   # Product and engineering documentation
```

## HTML pages

- `index.html` is the static Home dashboard.
- `portfolio.html` is the active Portfolio implementation.
- `notes.html` is the Notes Inbox for quick capture and later organization.
- `knowledge-base.html` is the active Knowledge Base implementation.
- `sop.html` manages repeatable procedure definitions.
- `sop-executions.html` guides active SOP sessions and presents execution history.
- `review.html` captures lightweight reflection after completed Executions.
- `insights.html` presents deterministic aggregates across existing domains.
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
- `js/app.js` owns Dashboard statistics and attention rendering.

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
source snapshot for the Insights module. It introduces no storage key, cached
metric, or write path; all calculations remain owned by `js/insights.js`.

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
domain collections, calculates deterministic aggregates, and renders them through
`render-utils.js`. It does not own CRUD, workflow behavior, or source-data
mutation.

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

## Module responsibilities

- **Home:** present today-focused, static dashboard information.
- **Portfolio:** manage the browser-stored project collection.
- **Notes:** provide a friction-free Inbox for capturing ideas before organization.
- **SOP:** turn structured knowledge into independently editable procedures.
- **Execution:** run SOP snapshots and preserve historical evidence without modifying definitions.
- **Review:** capture structured operational learning without modifying source domains.
- **Insights:** expose deterministic patterns across existing operational evidence.
- **Workflow:** coordinate explicit transitions and relationships between modules.
- **Storage:** keep domain storage helpers stable while shared utilities isolate
  `localStorage` reads, JSON parsing, and serialization.
- **Layout:** render reusable application-shell components from shared modules.
- **Platform utilities:** provide generic behavior shared across feature modules.
- **CSS layers:** provide reusable visual foundations and components.

The broader product module map is maintained in [Systems](SYSTEMS.md).
