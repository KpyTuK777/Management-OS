# Product Maturity Model

## Purpose

This model defines how Management OS progresses from an exploratory prototype to a
stable and governable product. It describes release readiness rather than feature
planning.

A maturity stage answers:

> Can Management OS be trusted by its intended audience under the conditions
> promised for this stage?

Feature quantity does not determine maturity. A smaller verified product may be
more mature than a larger unstable one.

```text
Prototype
  → Alpha
  → Beta
  → v1.0 Stable
  → Post-v1 Evolution
```

## Current assessment

Management OS is a late Prototype moving toward Alpha. Multiple connected workflows
and mature governance foundations exist, but formal testing strategy, browser
support, accessibility verification, release policy, and user guidance are not yet
complete. The product must not claim Beta readiness until the applicable Alpha exit
criteria and Stage 1 Documentation Backlog gate are satisfied.

## Prototype

### Purpose

Prove product concepts, information boundaries, and essential workflows with
limited operational risk.

### Expectations

- **Engineering:** Core concepts can be demonstrated; incomplete behavior,
  refactoring, and isolated experiments are expected. Compatibility is not promised
  unless documented.
- **Documentation:** Product Vision, major architectural boundaries, systems,
  persisted data, placeholders, and known limitations are documented.
- **Testing:** Critical workflows receive exploratory and manual smoke checks.
- **Governance:** Decision owners are known; material implementation work follows
  proposal, Architecture APPROVE, proportionate Implementation Planning, Plan
  APPROVE, and **APPLY** under [Team Governance](TEAM.md#implementation-planning-standard).
- **AI readiness:** AI remains documented vision or isolated experimentation. It
  cannot present unverified conclusions as facts or change the workspace
  autonomously.
- **Release:** Internal prototype only, with no stability or compatibility promise.

### Exit criteria — Prototype to Alpha

- Core domain boundaries are documented.
- At least one meaningful end-to-end workflow works reliably.
- Normal use does not silently corrupt persisted data.
- Primary workflows and placeholders are distinguishable.
- Product, architecture, systems, and data documentation match implementation.
- Ownership and approval workflow are operational.
- Known critical defects are recorded.
- Alpha scope is explicitly approved.

## Alpha

### Purpose

Integrate intended systems into a coherent internal product and find structural
defects before wider use.

### Expectations

- **Engineering:** Selected Alpha workflows are functionally complete; shared
  architecture is stable enough for continued development; primary error and empty
  states exist; data relationships preserve integrity.
- **Documentation:** README and canonical product, architecture, data, design,
  language, sprint, and governance documents are synchronized.
- **Testing:** Primary workflows have repeatable manual tests across representative
  empty, populated, related-record, responsive, and browser states.
- **Governance:** The internal Development Methodology, reviews, Documentation DoD,
  sprint evidence, and Architecture Consistency Audit are operational.
- **AI readiness:** AI remains optional and non-essential. Experiments preserve the
  Learning Decision Pipeline and cannot bypass evidence or approval.
- **Release:** Internal or tightly controlled evaluation with communicated
  limitations and no stable compatibility promise.

### Exit criteria — Alpha to Beta

- Beta scope is approved and frozen for stabilization.
- No unresolved P0 defects remain; P1 defects have an explicit disposition.
- Stage 1 of the Documentation Backlog is complete.
- `TESTING.md`, a regression matrix, and supported-browser policy exist.
- Accessibility verification is repeatable.
- Critical workflows pass the agreed browser and viewport matrix.
- Canonical documents agree on current product status.
- Persistence and recovery limitations are documented.
- Product, Architecture, Design, Language, and Documentation Reviews pass.
- Beta criteria and known limitations are published.

## Beta

### Purpose

Validate realistic everyday use while prioritizing reliability, data safety,
accessibility, performance, and workflow clarity.

### Expectations

- **Engineering:** Scope is stable; feature additions require strong justification;
  persistence changes receive compatibility analysis; critical failures have clear
  recovery guidance.
- **Documentation:** Getting Started, testing, accessibility, supported-environment,
  data-handling, limitation, and v1.0 planning documentation is current.
- **Testing:** Critical workflows, supported browsers, responsive layouts,
  accessibility, and data-integrity failures receive repeatable regression checks.
- **Governance:** Scope and architecture exceptions require explicit approval;
  Documentation DoD and consistency audit are release gates.
- **AI readiness:** AI is not required. Any included AI must explain evidence,
  uncertainty, limitations, privacy boundaries, and approval requirements without
  autonomous mutation.
- **Release:** Approved scope, no unresolved P0 defect, no unknown critical
  data-integrity defect, passing regression and documentation gates, and published
  limitations.

### Exit criteria — Beta to v1.0

- Stage 2 of the Documentation Backlog is complete.
- The v1.0 release checklist passes.
- No P0 defects remain; P1 exceptions are explicitly approved.
- Supported browsers pass the full regression matrix.
- Accessibility conformance and test-coverage reviews are published.
- User guide, Getting Started, data handling, backup, recovery, and limitations are
  documented.
- Versioning and release policy exist.
- Changelog contains a defined v1.0 release.
- Canonical documents agree on implemented scope and future direction.
- Product, Architecture, Design, Language, Documentation, and final consistency
  reviews pass.
- Product Owner approves the stable release after all domain gates pass.

## v1.0 Stable

### Purpose

Provide a dependable documented product with explicit compatibility and support
expectations.

### Expectations

- **Engineering:** Supported workflows are reliable; data compatibility is
  protected; breaking changes are planned and versioned; technical debt is tracked.
- **Documentation:** User, engineering, architecture, data, design, and language
  documentation correspond to the release; compatibility and limitations are
  explicit.
- **Testing:** Regression, compatibility, and accessibility checks accompany every
  release and defect fixes receive proportionate regression coverage.
- **Governance:** Stable changes follow the Development Methodology; breaking
  changes require Product and Architecture approval; qualifying decisions use ADRs
  when that governance is introduced.
- **AI readiness:** Stable AI is permitted only with defined ownership,
  explainability, evidence traceability, uncertainty, user approval, privacy, and
  safety testing.
- **Release:** Versioning rules, regression gates, documentation gates, and explicit
  risk ownership apply to every stable release.

### Entry to Post-v1 Evolution

Post-v1 is activated by a material evolution trigger rather than the passage of
time, such as:

- a major new product capability or architecture decision;
- external contribution;
- multiple maintained versions;
- Recommendations Center or AI implementation;
- a second-language release;
- a new persistence or integration boundary.

The relevant Stage 3 or Stage 4 documentation governance must be active before the
triggering capability is released.

## Post-v1 Evolution

### Purpose

Evolve a stable product without weakening compatibility, trust, governance, or
accumulated knowledge.

### Expectations

- **Engineering:** Architectural decisions, compatibility and migration strategy,
  deprecation lifecycle, and integration boundaries are explicit.
- **Documentation:** ADRs, archive policy, contribution guidance, versioned
  documentation, and capability-specific AI, privacy, and localization governance
  are introduced when triggered.
- **Testing:** Stable regression coverage expands to migrations, integrations,
  platforms, and AI safety and approval boundaries.
- **Governance:** Methodology is reviewed after major releases; compatibility and
  deprecation decisions have owners; public governance claims reflect practice.
- **AI readiness:** AI governance, privacy, three-layer knowledge boundaries,
  recommendation explainability, correction, approval, and Product Language rules
  exist before mature AI capability.
- **Release:** Every capability satisfies approved product outcomes, compatibility,
  applicable testing and documentation gates, reviews, Documentation DoD, and
  release audit.

Post-v1 has no terminal exit. It is a governed evolution state.

## Transition summary

| Transition | Required proof |
| --- | --- |
| Prototype → Alpha | Core workflows, documented boundaries, data integrity, ownership, and approved Alpha scope |
| Alpha → Beta | Frozen Beta scope, no P0 defects, Stage 1 documentation, testing strategy, accessibility verification, and browser matrix |
| Beta → v1.0 | Stable release gates, Stage 2 documentation, published verification, user guidance, and release policy |
| v1.0 → Post-v1 | A material evolution trigger and its applicable governance prerequisites |

## Gate ownership

| Gate area | Evidence owner | Approval authority |
| --- | --- | --- |
| Product scope | Product Owner | Product Owner |
| Architecture | Product Architect | Product Architect |
| Engineering and testing | Lead Software Engineer and assigned Quality Lead | Lead Software Engineer; Quality Lead provides evidence findings, not approval |
| Design and accessibility | Design Owner | Design Owner |
| Product Language | Design Owner | Design Owner |
| Documentation readiness | Relevant document owners | Product Architect verifies through the Documentation DoD |
| Final release | All evidence owners | Product Owner after mandatory domain gates pass |

A stage cannot be entered through declaration alone when mandatory evidence is
missing.

## Relationship to product planning

- [Roadmap](ROADMAP.md) owns feature direction and sequencing. A Roadmap phase may
  span multiple maturity stages, and future phases may remain open at v1.0.
- [Development Methodology](METHODOLOGY.md) owns how an individual approved change
  moves from idea to audited completion. This model owns cumulative product-level
  readiness.
- [Documentation Backlog](DOCUMENTATION_BACKLOG.md) supplies documentation-specific
  gate work.
- [Sprint Tracker](SPRINTS.md) supplies execution evidence.
- [Changelog](CHANGELOG.md) supplies release history.
- [Team Governance](TEAM.md) supplies authority.
- [Development](DEVELOPMENT.md) and future testing documentation supply engineering
  practice and verification evidence.
- [Project Health](PROJECT_HEALTH.md) aggregates the current evidence and blockers
  for a named target release without redefining these maturity gates.

## Canonical ownership

This document is authoritative only for maturity stages, release-readiness gates,
entry and exit criteria, and required evidence categories.

- **Accountable owner:** Product Owner
- **Responsible for maintenance:** Product Architect
- **Engineering evidence:** Lead Software Engineer
- **Quality validation evidence:** Assigned Quality Lead
- **Design and accessibility evidence:** Design Owner
- **Final stage approval:** Product Owner after all mandatory domain gates pass

This model does not replace Roadmap, Development Methodology, Team Governance,
Development, Documentation Backlog, or Product Vision.

The model remains internal during Alpha. Public maturity claims begin only when the
corresponding criteria are demonstrably satisfied.
