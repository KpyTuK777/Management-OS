# Canonical Status Registry

## Project Status

| Field | Status |
|---|---|
| Project Phase | Phase III-B — Operational Core |
| Phase III-A — Canonical Foundation | ✅ Complete |
| Phase III-B — Operational Core | 🟡 Starting |
| Architecture | Frozen |
| Design Bible | Frozen v1.0 |
| Canonical Foundation | Established |

## Canonical Models

| Model | Status | Commit | Tag | Review Date | Notes |
|---|---|---|---|---|---|
| Artifact | ✅ Canonical | `b7c5b28` | `artifact-v1.0-canonical` | 2026-07-27 | Frozen v1.0 |
| Relationship | ✅ Canonical | `748fd29` | `relationship-v1.0-canonical` | 2026-07-28 | Implementation `a1e4edb`; stabilization `2520c66`; Frozen v1.0 |
| Operational Memory | 🟡 Under Canonical Review | `2d3b82c` | — | 2026-07-28 | Operational Design Brief 01 approved; Sprint 03 implementation applied |
| Current Situation | ⏳ Planned | — | — | — | — |
| Inspection | ⏳ Planned | — | — | — | — |
| Working Set | ⏳ Planned | — | — | — | — |
| Watson | ⏳ Planned | — | — | — | — |

## Canonical Rules

### Rule 1

A model receives Canonical status only after:

- Specification
- Proposal
- Architecture Approval
- Implementation
- Canonical Review
- Canonical Approval

### Rule 2

A Canonical commit is never rewritten.

Git history is the historical record.

### Rule 3

A Canonical Tag is created only after a positive Canonical Review.

### Rule 4

After receiving Canonical status, a model is considered Frozen.

Further changes are permitted only when they:

- correct a defect;
- are proven architecturally necessary by Canonical Review.

## Canonical Timeline

```text
Artifact
↓
Relationship
↓
Operational Memory
↓
Current Situation
↓
Inspection
↓
Working Set
↓
Watson
```

This is the construction order of the system core, not a roadmap.

## Current Milestone

| Field | Status |
|---|---|
| Current Milestone | Building the Operational Core |
| Current Sprint | Sprint 03 — Operational Memory Canonical Review Pending |
| Next Sprint | Sprint 04 — blocked pending Operational Memory Canonical Approval |

## Maintenance

After each Canonical Sprint, update only:

- model status;
- commit;
- tag;
- review date;
- current milestone.

Do not duplicate information from the Design Bible or other architecture documents.
