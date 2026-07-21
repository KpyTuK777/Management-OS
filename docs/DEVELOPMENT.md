# Development

Team responsibilities, decision ownership, and the official delivery process are
defined in [Team Governance](TEAM.md).

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

- Keep application UI text in Ukrainian; see [UI Language](UI_LANGUAGE.md).
- Keep CSS concerns separated by the files described in [Architecture](ARCHITECTURE.md).
- Keep browser persistence behind `js/storage.js`.
- Keep one responsibility per JavaScript module and avoid duplicating UI logic.
- Snapshot SOP definitions when execution begins; execution history must never depend on mutable SOP content.
- Use 8px-based spacing and existing CSS variables where applicable.
- Follow the approval and ownership boundaries in [Team Governance](TEAM.md).

## Architecture Consistency Audit

Every Sprint must end with an Architecture Consistency Audit after the approved
work has been committed and published to GitHub. A Sprint is not considered
complete until this audit has been performed.

The mandatory delivery sequence is:

```text
Idea
  ↓
Architecture Proposal
  ↓
APPROVE
  ↓
APPLY
  ↓
Implementation
  ↓
Architecture Review
  ↓
Product Review
  ↓
COMMIT
  ↓
GitHub
  ↓
Architecture Consistency Audit
```

The audit verifies that:

- every approved proposal has been implemented;
- documentation and implementation remain synchronized;
- partially implemented features are identified;
- obsolete approved proposals are explicitly closed rather than forgotten.

The Architecture Consistency Audit is a verification activity. It introduces no
new architecture, does not redesign approved features, and does not reinterpret
product decisions. Any missing, partial, or obsolete work is reported through the
existing ownership and approval process before further action is taken.
