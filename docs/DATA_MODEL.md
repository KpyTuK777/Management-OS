# Data Model

## Project

Projects are stored as objects in an array.

| Field | Type | Description |
| --- | --- | --- |
| `id` | number | Unique identifier generated with `Date.now()`. |
| `name` | string | Required project name. |
| `description` | string | Project description. |
| `status` | string | Current project state; new projects default to `Активний`. |
| `progress` | number | Progress percentage; new projects default to `0`. |
| `createdAt` | string | Creation date formatted with the Ukrainian locale. |

## Browser storage

Domain collections are serialized as JSON in browser `localStorage`.

| Key | Value |
| --- | --- |
| `projects` | Array of Project objects |
| `notes` | Array of Note objects |
| `knowledgeEntries` | Array of Knowledge Entry objects |
| `knowledgeCategories` | Array of category-name strings |
| `sops` | Array of SOP objects |

Storage access is implemented in `js/storage.js`.

## Knowledge Entry

Knowledge Entries are stored as objects in the `knowledgeEntries` collection.

| Field | Type | Description |
| --- | --- | --- |
| `id` | number | Unique identifier generated when the entry is created. |
| `title` | string | Entry title. |
| `category` | string | Category selected from `knowledgeCategories`. |
| `summary` | string | Short summary. |
| `content` | string | Full entry content. |
| `createdAt` | string | ISO creation timestamp. |
| `updatedAt` | string | ISO timestamp of the latest entry edit. |
| `sourceNoteId` | number, optional | Source Note when created through the Notes → Knowledge workflow. |
| `sopId` | number, optional | SOP created from this Knowledge Entry. |

## Note

Notes are stored as objects in the `notes` collection.

| Field | Type | Description |
| --- | --- | --- |
| `id` | number | Unique identifier generated when the Note is created. |
| `title` | string | Note title. |
| `content` | string | Captured Note content. |
| `createdAt` | string | ISO creation timestamp. |
| `updatedAt` | string | ISO timestamp of the latest Note content edit. |
| `knowledgeEntryId` | number, optional | Knowledge Entry created from this Note. |

A Note without `knowledgeEntryId` is new. A Note with `knowledgeEntryId` has been
added to the Knowledge Base and remains visible in the Notes Inbox. Linking a
Knowledge Entry does not change the Note's `updatedAt` because it is a separate
domain event.

## Workflow context

The Notes → Knowledge workflow temporarily stores the source Note ID in browser
`sessionStorage` under `noteKnowledgeSourceId`. The context is consumed and removed
when Knowledge Base initializes; it is not part of either persisted entity.

## SOP

SOPs are stored as objects in the `sops` collection.

| Field | Type | Description |
| --- | --- | --- |
| `id` | number | Unique identifier generated when the SOP is created. |
| `title` | string | Procedure name. |
| `purpose` | string | Outcome the procedure is intended to achieve. |
| `trigger` | string | Condition or event that starts the procedure. |
| `steps` | Array of strings | Ordered procedure instructions. |
| `checklist` | Array of strings | Reusable checks defined with the procedure. |
| `createdAt` | string | ISO creation timestamp. |
| `updatedAt` | string | ISO timestamp of the latest SOP edit. |
| `sourceKnowledgeEntryId` | number, optional | Knowledge Entry used to create the SOP. |

The SOP definition does not store per-execution completion. Future SOP runs should
store checklist state independently so editing a definition cannot rewrite
execution history.

Knowledge and SOP remain independently editable after conversion. Their relationship
records provenance and does not synchronize later changes.

The Knowledge → SOP workflow temporarily stores the source Knowledge Entry ID in
`sessionStorage` under `knowledgeSopSourceId`. The context is consumed and removed
when the SOP page initializes.
