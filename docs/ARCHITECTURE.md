# Architecture

## Overview

Management OS is a static, client-side web application. It has no build system, server, API, or external database. Browser `localStorage` persists Portfolio data.

## Project structure

```text
Management-OS/
├── index.html              # Static Home dashboard
├── portfolio.html          # Functional Portfolio page
├── projects.html           # Legacy portfolio-page prototype
├── css/                    # Design tokens, layout, components, utilities
├── js/                     # Storage and Portfolio behavior
└── docs/                   # Product and engineering documentation
```

## HTML pages

- `index.html` is the static Home dashboard.
- `portfolio.html` is the active Portfolio implementation.
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

- `js/storage.js` exposes `saveProjects(projects)` and `loadProjects()`.
- `js/portfolio.js` owns Portfolio rendering and project create, edit, and delete actions.
- `js/app.js` is currently empty.

## Persistence and data flow

1. `portfolio.js` loads the `projects` collection through `loadProjects()`.
2. The page renders a card for each project.
3. Create, edit, and delete actions update the in-memory array.
4. `saveProjects()` serializes the array under the `projects` key in `localStorage`.
5. `renderProjects()` refreshes the visible project list.

The Project schema is defined in [Data Model](DATA_MODEL.md).

## Module responsibilities

- **Home:** present today-focused, static dashboard information.
- **Portfolio:** manage the browser-stored project collection.
- **Storage:** isolate `localStorage` reads and writes from UI behavior.
- **CSS layers:** provide reusable visual foundations and components.

The broader product module map is maintained in [Systems](SYSTEMS.md).
