# Project Health

This internal dashboard answers one question:

> If Management OS released tomorrow, what would prevent it?

The dashboard aggregates evidence from canonical documents. It introduces no new
release criteria, approval authority, or backlog. Canonical sources remain
authoritative.

## Current snapshot

| Property | Value |
| --- | --- |
| Target release | Beta |
| Snapshot date | 2026-08-14 |
| Current maturity | Usable local prototype; not release-ready |
| Overall status | **Blocked** |
| Primary blockers | Release evidence, supported-browser coverage, accessibility/security assessment, backup/sync, and deployment readiness |
| Accountable owner | Product Architect |
| Final release authority | Product Owner |

## State model

| State | Meaning |
| --- | --- |
| **Ready** | Required evidence exists and the dimension passes the target-release gate. |
| **Needs Attention** | A weakness exists but does not currently block the target release, or an approaching gate requires work. |
| **Blocking** | A mandatory target-release requirement is unmet. |
| **Not Assessed** | Evidence is missing or too stale to support a conclusion. |
| **Not Applicable** | The dimension is explicitly outside target-release scope. |

Overall status is **Blocked** when any mandatory dimension is Blocking. It is
**Unknown** when a mandatory dimension is Not Assessed and no known blocker has
already established a Blocked state. Absence of a reported problem is not evidence
of readiness.

## Health dimensions

| Dimension | State | Release blocker | Evidence | Evidence owner | Next action | Reviewed |
| --- | --- | --- | --- | --- | --- | --- |
| Product functionality | **Needs Attention** | No | [Runtime Gap Map](PRODUCT_RUNTIME_GAP_MAP.md), browser regressions | Product Owner | Continue bounded product validation; do not equate broad local functionality with Beta readiness. | 2026-08-14 |
| Documentation readiness | **Needs Attention** | Potentially | [Runtime Gap Map](PRODUCT_RUNTIME_GAP_MAP.md), [Systems](SYSTEMS.md), [Documentation Map](DOCUMENTATION_MAP.md) | Product Architect and document owners | Keep active status documents reconciled; historical architecture remains historical. | 2026-08-14 |
| Architecture health | **Ready** | No | [Architecture](ARCHITECTURE.md), [Systems](SYSTEMS.md), [Data Model](DATA_MODEL.md), [Documentation Map](DOCUMENTATION_MAP.md), [Sprint 10 consistency review](SPRINTS.md#sprint-10) | Product Architect | Reassess after a material approved architecture change or before the next release gate. | 2026-07-23 |
| Technical debt | **Not Assessed** | Potentially | [Development](DEVELOPMENT.md), Sprint and review findings | Lead Software Engineer | Establish governed debt evidence and assess release impact. | 2026-07-22 |
| Testing readiness | **Blocking** | Yes | Browser regression files, [Development](DEVELOPMENT.md), Quality Lead findings | Lead Software Engineer and assigned Quality Lead | Consolidate the existing deterministic browser journeys into a supported-browser regression matrix and repeatable release evidence. | 2026-08-14 |
| Design and accessibility | **Not Assessed** | Potentially | [Design System](DESIGN_SYSTEM.md) | Design Owner | Create and execute the accessibility verification process. | 2026-07-22 |
| Data safety and recovery | **Blocking** | Yes | [Data Model](DATA_MODEL.md), [Product Maturity](PRODUCT_MATURITY.md) | Product Architect and Lead Software Engineer | Document and verify persistence, compatibility, backup limitations, and recovery. | 2026-07-22 |
| Release readiness | **Blocking** | Yes | [Product Maturity](PRODUCT_MATURITY.md), [Changelog](CHANGELOG.md), applicable Quality Lead findings | Product Owner | Define the Beta release checklist, disposition blockers, and complete mandatory gates using verified domain evidence. | 2026-07-22 |
| Governance maturity | **Ready** | No | [Team Governance](TEAM.md), [Methodology](METHODOLOGY.md), [Documentation Map](DOCUMENTATION_MAP.md) | Product Owner and Product Architect | Continue producing review and audit evidence during delivery. | 2026-07-22 |
| Watson / AI readiness | **Needs Attention** | Potentially | [Systems](SYSTEMS.md), [Watson Professional Ethos](WATSON_PROFESSIONAL_ETHOS.md) | Product Architect and AI Strategist | Treat deterministic local behavior as implemented/partial; assess provider security, quality and release scope separately. | 2026-08-14 |

## Blocking conditions

Management OS is not ready for Beta release because:

- the repository has useful local product functionality but no complete Beta release evidence;
- deterministic browser journeys exist, but no canonical supported-browser policy
  or release regression matrix exists;
- persistence, backup limitations, and recovery evidence are incomplete;
- no Beta release checklist or complete release evidence exists.

Technical debt, security and accessibility also require current assessment before
they can support a release decision. The implemented local runtime does not resolve
testing, backup/sync, multi-user authorization, backend, deployment or release-readiness
blockers.

## Approved exceptions

None.

An exception must identify its approving owner, rationale, affected gate, expiry or
review condition, and residual risk. An exception cannot waive a P0 requirement
silently.

## Evidence and ownership rules

- Each state links to the documents or review artifacts that support it.
- Dimension owners attest evidence within their authority.
- The Product Architect maintains this aggregate and does not redefine source
  criteria.
- The Product Owner makes the final release decision after mandatory domain gates
  pass.
- Missing or stale evidence results in **Not Assessed**, never **Ready**.
- If AI enters the target-release scope, AI readiness immediately becomes
  applicable and must be reassessed against all required governance.

## Update cadence

Update this dashboard:

- at Sprint closure;
- before every Beta or v1.0 readiness review;
- after a material Architecture Review or maturity-stage change;
- after a release-blocking defect is opened or resolved;
- after release, governance, or readiness criteria change.

Do not update it daily. Update it when reviewed evidence changes.

Evidence freshness follows its domain:

- testing and release readiness: every release candidate;
- architecture and data health: every material architecture change and Sprint
  audit;
- documentation readiness: every Sprint affecting canonical documentation;
- design and accessibility: every shared UI change and release candidate;
- governance maturity: every governance change and major milestone;
- technical debt: every Sprint close and release-planning review;
- AI readiness: every AI-related proposal or scope change.

## Canonical boundary

This dashboard is internal, non-authoritative, evidence-aggregating, and
release-specific. It must remain a compact status view rather than becoming a
second Roadmap, Documentation Backlog, defect tracker, or release policy.
