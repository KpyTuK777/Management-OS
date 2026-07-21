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
| `sopExecutions` | Array of SOP Execution objects |
| `executionReviews` | Array of Execution Review objects |

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

## SOP Execution

SOP Executions are stored as objects in the `sopExecutions` collection.

| Field | Type | Description |
| --- | --- | --- |
| `id` | number | Unique identifier generated when execution starts. |
| `sopId` | number | Source SOP identifier. |
| `sopTitle` | string | Snapshot of the SOP title at execution start. |
| `startedAt` | string | ISO execution start timestamp. |
| `finishedAt` | string, null | ISO finish timestamp; `null` identifies an active session. |
| `steps` | Array of Execution Item objects | Snapshot and outcome of the ordered SOP steps. |
| `checklist` | Array of Execution Item objects | Snapshot and outcome of the SOP checklist. |
| `notes` | string | Notes about the execution as a whole. |

### Execution Item

| Field | Type | Description |
| --- | --- | --- |
| `order` | number | Original position in the SOP snapshot. |
| `text` | string | Instruction or check captured at execution start. |
| `status` | string | `pending`, `completed`, or `skipped`. |
| `resolvedAt` | string, null | ISO timestamp of the latest completion or skip decision. |
| `note` | string | Optional observation for this item. |

Completed/skipped counts, progress, and duration are derived rather than stored.
Execution data is independent from the SOP definition: later SOP edits do not alter
history, and execution never updates the source SOP.

The SOP → Execution launch temporarily stores the selected SOP ID in
`sessionStorage` under `sopExecutionSourceId`. It is consumed and removed when the
Execution page initializes.

## Execution Review

Execution Reviews are stored as objects in the `executionReviews` collection.

| Field | Type | Description |
| --- | --- | --- |
| `id` | number | Unique identifier generated when the Review is saved. |
| `executionId` | number | Finished SOP Execution being reviewed. |
| `rating` | number | Simple execution-quality rating from 1 to 5. |
| `outcome` | string | Structured result: `successful`, `partial`, or `failed`. |
| `blockers` | string | Optional obstacles observed during execution. |
| `improvements` | string | Optional idea for improving future work. |
| `lessonsLearned` | string | Optional reusable operational lesson. |
| `createdAt` | string | ISO timestamp when the Review was saved. |

An Execution Review references immutable evidence but does not modify it. A missing
Review for a finished Execution represents pending reflection; no status or skipped
record is persisted. The Execution → Review handoff temporarily stores an Execution
ID in `sessionStorage` under `reviewExecutionId`.

Rating, outcome, blockers, improvements, and lessons provide structured signals for
future analysis. AI interpretation is not part of the current data flow.

## Insights

Insights are derived values and are not stored entities. No `insights` storage key
exists. `js/insights.js` calculates a read-only snapshot from Notes, Knowledge
Entries, SOPs, SOP Executions, and Execution Reviews whenever the page loads.

Current deterministic definitions include:

- a completed Execution has a non-null `finishedAt`;
- Review completion counts unique reviewed finished Executions;
- average duration uses valid start and finish timestamps from completed Executions;
- conversion uses the existing `knowledgeEntryId` or `sopId` relationship field;
- a never-executed SOP has no active or completed Execution;
- a frequently executed SOP has at least two completed Executions;
- a repeated blocker or improvement is the same normalized phrase in at least two Reviews.

Derived metrics never update their source records and are not a new source of truth.

## Hypothesis

Hypotheses are derived runtime models and are not stored. No `hypotheses` storage
key exists.

| Field | Type | Description |
| --- | --- | --- |
| `id` | string | Deterministic identity based on the rule and subject. |
| `type` | string | Stable deterministic rule category. |
| `group` | string | Presentation group within the Hypotheses page. |
| `subject` | string | Optional phrase, SOP, or lifecycle stage being interpreted. |
| `statement` | string | Cautious possible explanation, never a proposed action. |
| `explanation` | string | Why the Evidence may support the statement. |
| `evidence` | Array of Evidence Items | Traceable deterministic facts supporting the Hypothesis. |
| `confidence` | string | `low`, `medium`, or `high`; evidence strength rather than probability. |
| `confidenceBasis` | string | Explanation of the deterministic confidence assignment. |
| `limitations` | Array of strings | Missing context, coverage, or ambiguity. |
| `sourceModules` | Array of strings | Domains that supplied the Evidence. |

### Hypothesis Evidence Item

| Field | Type | Description |
| --- | --- | --- |
| `metric` | string | Deterministic measurement being cited. |
| `observedValue` | number or string | Value observed in current source data. |
| `comparisonValue` | number, string, or null | Documented rule threshold or baseline. |
| `sampleSize` | number | Amount of source evidence considered. |
| `source` | string | Insight or domain source of the measurement. |

Confidence never claims truth or statistical probability. Each Hypothesis type owns
explicit thresholds, and the rendered model preserves both its Evidence and known
limitations. Hypotheses do not contain Recommendation actions or approval state.
