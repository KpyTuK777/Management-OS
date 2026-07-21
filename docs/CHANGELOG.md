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
- Preserved early prototype experiments inside a secondary Additional Context area.

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
