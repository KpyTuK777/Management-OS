# Canonical Status Registry

## Project Status

| Field | Status |
|---|---|
| Project Phase | Phase III — Canonical Implementation |
| Architecture | Frozen |
| Design Bible | Frozen v1.0 |
| Canonical Foundation | Established |

## Canonical Models

| Model | Status | Commit | Tag | Review Date | Notes |
|---|---|---|---|---|---|
| Artifact | ✅ Canonical | `b7c5b28` | `artifact-v1.0-canonical` | 2026-07-27 | Frozen v1.0 |
| Relationship | ✅ Canonical | `2520c66` | `relationship-v1.0-canonical` | 2026-07-28 | Frozen v1.0 |
| Operational Memory | ⏳ Planned | — | — | — | — |
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
| Current Milestone | Canonical Relationship complete |
| Current Sprint | Relationship — complete |
| Next Sprint | Sprint 03 — Operational Memory |

## Maintenance

After each Canonical Sprint, update only:

- model status;
- commit;
- tag;
- review date;
- current milestone.

Do not duplicate information from the Design Bible or other architecture documents.
