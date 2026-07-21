# Architecture

## Overview

Management OS is a static, client-side web application. It has no build system, server, API, or external database. Browser `localStorage` persists Portfolio data.

## Project structure

```text
Management-OS/
├── index.html              # Static Home dashboard
├── portfolio.html          # Functional Portfolio page
├── notes.html              # Notes Inbox for quick capture
├── projects.html           # Legacy portfolio-page prototype
├── css/                    # Design tokens, layout, components, utilities
├── js/                     # Layout, platform utilities, storage, and page behavior
└── docs/                   # Product and engineering documentation
```

## HTML pages

- `index.html` is the static Home dashboard.
- `portfolio.html` is the active Portfolio implementation.
- `notes.html` is the Notes Inbox for quick capture and later organization.
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
  Knowledge Entries, Knowledge Categories, and Notes.
- `js/portfolio.js` owns Portfolio rendering and project create, edit, and delete actions.
- `js/notes.js` owns Notes CRUD, search orchestration, and rendering.
- `js/app.js` is currently empty.

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

Portfolio, Knowledge Base, and Notes provide their own collections, searchable
fields, and queries. Their page modules continue to own input events, additional
filters, empty states, and rendering. Future shared CRUD and Categories utilities
should follow the same separation: generic behavior belongs in a Platform Utility,
while domain rules remain in page modules.

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

## Module responsibilities

- **Home:** present today-focused, static dashboard information.
- **Portfolio:** manage the browser-stored project collection.
- **Notes:** provide a friction-free Inbox for capturing ideas before organization.
- **Storage:** keep domain storage helpers stable while shared utilities isolate
  `localStorage` reads, JSON parsing, and serialization.
- **Layout:** render reusable application-shell components from shared modules.
- **Platform utilities:** provide generic behavior shared across feature modules.
- **CSS layers:** provide reusable visual foundations and components.

The broader product module map is maintained in [Systems](SYSTEMS.md).
