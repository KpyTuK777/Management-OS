# Architecture

## Overview

Management OS is a static, client-side web application. It has no build system,
server, API, or external database. Browser `localStorage` persists domain
collections including Projects, Notes, Knowledge, Categories, and SOPs.

## Project structure

```text
Management-OS/
├── index.html              # Static Home dashboard
├── portfolio.html          # Functional Portfolio page
├── notes.html              # Notes Inbox for quick capture
├── knowledge-base.html     # Functional Knowledge Base page
├── sop.html                # SOP definitions and Knowledge workflow target
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
- `projects.html` is a legacy prototype and is not the active Portfolio page.
- `analytics.html`, `calendar.html`, `knowledge.html`, `reviews.html`, `settings.html`, and `tasks.html` are currently placeholders.

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
  Knowledge Categories, Notes, and SOPs.
- `js/portfolio.js` owns Portfolio rendering and project create, edit, and delete actions.
- `js/notes.js` owns Notes CRUD, search orchestration, and rendering.
- `js/note-knowledge-flow.js` coordinates the Notes → Knowledge workflow.
- `js/knowledge-sop-flow.js` coordinates the Knowledge → SOP workflow.
- `js/sop.js` owns SOP CRUD, search orchestration, ordered fields, and rendering.
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

## Module responsibilities

- **Home:** present today-focused, static dashboard information.
- **Portfolio:** manage the browser-stored project collection.
- **Notes:** provide a friction-free Inbox for capturing ideas before organization.
- **SOP:** turn structured knowledge into independently editable procedures.
- **Workflow:** coordinate explicit transitions and relationships between modules.
- **Storage:** keep domain storage helpers stable while shared utilities isolate
  `localStorage` reads, JSON parsing, and serialization.
- **Layout:** render reusable application-shell components from shared modules.
- **Platform utilities:** provide generic behavior shared across feature modules.
- **CSS layers:** provide reusable visual foundations and components.

The broader product module map is maintained in [Systems](SYSTEMS.md).
