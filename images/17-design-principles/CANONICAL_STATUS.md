# Canonical Status Registry

## Project Status

| Field | Status |
|---|---|
| Project Phase | Phase III-B — Operational Core |
| Phase III-A — Canonical Foundation | ✅ Complete |
| Phase III-B — Operational Core | 🟡 Starting |
| Architecture | Frozen |
| Design Bible | Frozen v1.0 |
| Canonical Foundation | ✅ Complete |
| Canonical Management Model | ✅ Integrated |

## Canonical Models

| Model | Status | Commit | Tag | Review Date | Notes |
|---|---|---|---|---|---|
| Artifact | ✅ Canonical | `b7c5b28` | `artifact-v1.0-canonical` | 2026-07-27 | Frozen v1.0 |
| Relationship | ✅ Canonical | `748fd29` | `relationship-v1.0-canonical` | 2026-07-28 | Implementation `a1e4edb`; stabilization `2520c66`; Frozen v1.0 |
| Workbench Canonical Domain Model | ✅ Canonical | `8aad903` | — | 2026-07-27 | Canonical owner of Matter, Current Situation, Focus, Working Set, Inspection, and Context Envelope; Frozen. |
| Operational Memory | ✅ Canonical | This commit | — | 2026-07-30 | Operational Memory Canonical Status: Approved. Final Canonical Review completed successfully; replay and recovery contracts and standalone browser conformance passed. |
| Product Operating Model | ✅ Canonical | `cc934f3` | `product-operating-model-v1.0-canonical` | 2026-07-28 | Milestone M2 — Product Operating Model complete; Frozen v1.0 |
| Matter Experience | ✅ Canonical | `13be427` | `matter-experience-v1.0-canonical` | 2026-07-29 | Milestone M3 — Canonical Matter Experience complete; Frozen v1.0 |
| Operational Navigation Governance | ✅ Canonical | `325bb9e` | — | 2026-07-30 | M4.0 governance approved; Frozen v1.0 |
| Canonical Operational Navigation | ✅ Canonical | `7dbbabd` | — | 2026-07-30 | Milestone M4 — Canonical Operational Navigation complete; Frozen v1.0 |
| Canonical Visual Semantics | ✅ Canonical | This commit | — | 2026-07-30 | Visual Semantics Canonical Status: Approved. Final Canonical Review completed successfully; Frozen. |
| Canonical Operational Interaction Language | ✅ Canonical | This commit | — | 2026-07-30 | Operational Interaction Language Canonical Status: Approved. Final Canonical Review completed successfully; interaction lifecycle and cancellation, retry, rollback, and Operational Memory alignment passed. |
| Canonical Information Architecture | ✅ Canonical | This commit | — | 2026-07-30 | Information Architecture Canonical Status: Approved. Final Canonical Review completed successfully; Frozen. |
| Canonical Iconography | 🔵 Research Only — Advisory | `cc934f3` | — | 2026-07-30 | Informs representation strategy; creates no semantic authority. |
| Current Situation | 🟡 Concept Canonical / Implementation Planned | — | — | 2026-07-30 | Identity and contract are owned by Workbench Canonical Domain Model; standalone implementation review remains planned. |
| Inspection | 🟡 Concept Canonical / Implementation Planned | — | — | 2026-07-30 | Identity and contract are owned by Workbench Canonical Domain Model; standalone implementation review remains planned. |
| Working Set | 🟡 Concept Canonical / Implementation Planned | — | — | 2026-07-30 | Identity and contract are owned by Workbench Canonical Domain Model; standalone implementation review remains planned. |
| Watson | 🟡 Authority Constraints Canonical / Interaction Candidate / Implementation Planned | — | — | 2026-07-30 | Authority constraints are canonical in Workbench and Navigation Governance; interaction semantics are candidate; implementation remains planned. |

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
| Current Milestone | Canonical Management Model Integration: Complete |
| Current Sprint | — |
| Next Milestone | Final Canonical Registry Confirmation |

## Maintenance

After each Canonical Sprint, update only:

- model status;
- commit;
- tag;
- review date;
- current milestone.

Do not duplicate information from the Design Bible or other architecture documents.
