# Development

Team responsibilities, decision ownership, and the official delivery process are
defined in [Team Governance](TEAM.md).

See [Development Methodology](METHODOLOGY.md) for the integrated operating model
that connects product intent, approval, implementation, reviews, documentation,
and consistency auditing.

## Run the project

1. Open the repository folder in Visual Studio Code.
2. Install the VS Code **Live Server** extension if it is not already available.
3. Open `index.html` or `portfolio.html`.
4. Start Live Server and use the browser URL it provides.

The project can also be opened directly in a modern browser, although Live Server is recommended during development.

## Tooling

- No package manager is required.
- No build tools are used.
- No dependencies are installed.
- No backend service is required.

## Browser requirements

Use a current version of Chrome, Edge, Firefox, or Safari with JavaScript and `localStorage` enabled.

## Project conventions

- Keep application UI text in Ukrainian and follow the
  [Product Language Guide](PRODUCT_LANGUAGE.md).
- Keep CSS concerns separated by the files described in [Architecture](ARCHITECTURE.md).
- Keep browser persistence behind `js/storage.js`.
- Keep one responsibility per JavaScript module and avoid duplicating UI logic.
- Snapshot SOP definitions when execution begins; execution history must never depend on mutable SOP content.
- Use 8px-based spacing and existing CSS variables where applicable.
- Follow the approval and ownership boundaries in [Team Governance](TEAM.md).

## Implementation Planning

Implementation-bearing work requires proportionate planning before APPLY. Routine
work that extends approved architecture includes planning in its Implementation
Proposal and may proceed through Proposal APPROVE directly to APPLY. A separate
Implementation Plan and Plan APPROVE are reserved for changes to canonical product,
architecture, governance, security, privacy, or another ADR-level boundary. The
canonical requirements and approval semantics are defined in
[Team Governance](TEAM.md#implementation-planning-standard).

Before implementation, contributors must verify the current repository state and
record the approved scope, dependencies, smallest coherent increment,
implementation order, risks and edge cases, validation strategy, effort range, and
increment recommendation. Planning is read-only and must identify applicable
documentation updates.

Implementation follows approved architecture and the approved proposal or
extended-lane plan. Material discoveries return to proportionate planning;
canonical boundary changes move to the extended lane and applicable owners.
APPROVE does not authorize file changes—implementation begins only after explicit
APPLY.

## Quality validation

Material implementation plans identify the assigned Quality Lead and required
evidence. The canonical responsibility, findings, independence, and authority
boundaries are defined in
[Team Governance](TEAM.md#quality-lead-responsibility).

Implementers supply reproducible technical evidence and correct defects. The
Quality Lead verifies applicable product, architecture, regression, responsive,
accessibility, trust, and documentation evidence in a separate validation pass.
Untested applicable areas, failed checks, known limitations, role combination, and
owner dispositions remain explicit.

Corrections require retesting of the original failure and proportionate regression
coverage. Before COMMIT, temporary test pages, browser profiles, screenshots, and
other validation artifacts must be removed unless they are approved maintained
test assets. Quality findings support existing reviews and never authorize COMMIT
or release.

## Architecture Consistency Audit

The mandatory delivery workflow and Architecture Consistency Audit are defined in
[Team Governance](TEAM.md). During implementation, contributors must keep affected
canonical documents synchronized according to the
[Documentation Map](DOCUMENTATION_MAP.md) and report missing, partial, or obsolete
work through the approved ownership process.

## Documentation completion

When implementation affects canonical documentation, use the
[Documentation Definition of Done](DOCUMENTATION_MAP.md#documentation-definition-of-done)
as the operational completion checklist. Documentation validation must finish
before commit readiness; the later Architecture Consistency Audit verifies that
completion rather than replacing it.

When implementation depends on an approved decision whose rationale would not be
clear from Git history, record it in the [Decision Log](DECISIONS.md) before or
alongside the change. Material architectural commitments require a future ADR
rather than a lightweight log entry.
