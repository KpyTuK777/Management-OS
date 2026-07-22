# Sprint Tracker

This tracker records the sprint history currently available in the repository.
Sprint 2 and Sprint 3 records are unavailable and must not be reconstructed without
approved source evidence.

## Documentation planning rule

Future sprints must assess documentation impact during planning. When a sprint
changes product concepts, architecture, data contracts, shared design rules, or
release readiness, it must reserve the necessary documentation work and reference
the relevant stage and item in the
[Documentation Backlog](DOCUMENTATION_BACKLOG.md).

Documentation work remains part of the feature or release sprint that creates the
need. A separate documentation sprint is appropriate only for substantial
consolidation or governance work.

Use this compact structure in future sprint entries:

```markdown
### Documentation impact

- Backlog item: Stage and exact item title, or None
- Required updates: affected canonical documents, or None
- Readiness contribution: Beta, v1.0, post-v1, or None
- Validation: links, consistency review, and `git diff --check`
- Status: Planned or Completed
```

Do not duplicate backlog rationale, dependencies, or effort estimates in this
tracker. A documentation item is complete only after link and consistency
validation and satisfaction of the
[Documentation Definition of Done](DOCUMENTATION_MAP.md#documentation-definition-of-done).
Release-gated sprint work cannot close while its required documentation remains
incomplete.

## Sprint 1 — Portfolio foundation

### Completed

- **Feature 01:** Create Project
- **Feature 02:** Edit Project
- **Feature 03:** Delete Project

### Planned

- **Feature 04:** Project Status
- **Feature 05:** Progress
- **Feature 06:** Filters
- **Feature 07:** Sorting

## Sprint 4 — Foundation 2.0

### Completed

- **Feature 01:** Shared Sidebar
- **Platform Feature PF-02:** Shared Search Component

## Sprint 5 — Knowledge Ecosystem

### Completed

- **Feature 01:** Notes Module MVP
- **Feature 02:** Notes → Knowledge Flow
- **Feature 04:** Knowledge → SOP Workflow
- **Feature 05:** SOP Execution MVP

## Sprint 6 — Learning Layer

### Completed

- **Feature 01:** Execution Review — Learning Layer Foundation
- **Feature 02:** Insights Foundation
- **Feature 03:** Hypotheses Foundation
- **Feature 04:** Improvement Proposal Workflow
- **Design:** Design System Review and UI Modernization
- **Language:** Ukrainian Localization and Terminology Audit
- **Documentation:** Product Language Guide and documentation migration
- **Governance:** Documentation Map and lifecycle rules
- **Governance:** Documentation Definition of Done and delivery gates
- **Governance:** Management OS Development Methodology and formal internal adoption
- **Governance:** Product Maturity Model and release-readiness gates
- **Governance:** Internal Project Health Dashboard and qualitative release blockers
- **Governance:** Lightweight Decision Log and ADR routing boundary
- **Governance:** Knowledge Evolution Map and permanence boundary

See [Roadmap](ROADMAP.md) for product phases beyond this sprint.
