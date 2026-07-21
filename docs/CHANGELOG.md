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
