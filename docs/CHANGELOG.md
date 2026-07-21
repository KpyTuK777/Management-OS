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
