# Documentation Map

This document defines the architectural role, ownership, audience, maintenance
cadence, and authority of the Management OS documentation set.

## Authority by domain

When documents overlap, the canonical authority for the relevant domain prevails:

| Domain | Canonical document |
| --- | --- |
| Product purpose and principles | [Product Vision](PRODUCT_VISION.md) |
| Product maturity and release readiness | [Product Maturity Model](PRODUCT_MATURITY.md) |
| Ownership and approval | [Team Governance](TEAM.md) |
| Product-system responsibilities | [Systems](SYSTEMS.md) |
| Technical structure and boundaries | [Architecture](ARCHITECTURE.md) |
| Data contracts | [Data Model](DATA_MODEL.md) |
| Engineering practice | [Development](DEVELOPMENT.md) |
| Visual conventions | [Design System](DESIGN_SYSTEM.md) |
| User-facing language | [Product Language](PRODUCT_LANGUAGE.md) |
| Future sequencing | [Roadmap](ROADMAP.md) |
| Sprint completion | [Sprint Tracker](SPRINTS.md) |
| Release history | [Changelog](CHANGELOG.md) |
| Decision rationale history | [Decision Log](DECISIONS.md) |

The [Development Methodology](METHODOLOGY.md) explains how these authorities work
together. It is a synthesis and does not replace them.

The repository README is an entry point and summary, not a source of authority for
product status or scope.

## Documentation catalog

| Document | Category | Purpose | Owner | Primary audience | Update frequency | Status | Related documents |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `README.md` | Entry point | Introduce the repository, setup, and documentation index. | Lead Software Engineer | New contributors and reviewers | When setup or documentation structure changes | Informational | All canonical documents |
| `docs/TEAM.md` | Governance | Define decision ownership, delivery workflow, and AI collaboration rules. | Product Owner | Entire team and AI collaborators | When governance changes | Canonical | Development, Product Vision |
| `docs/PRODUCT_VISION.md` | Product | Define purpose, principles, and long-term direction. | Product Owner | Product, architecture, design, engineering | When product direction changes | Canonical | Roadmap, Systems, Product Language |
| `docs/PRODUCT_MATURITY.md` | Product governance | Define maturity stages, readiness gates, and entry and exit criteria. | Product Owner; maintained by Product Architect | Product and release decision owners | At maturity or release-gate changes | Canonical | Roadmap, Methodology, Documentation Backlog, Team |
| `docs/ROADMAP.md` | Product | Sequence future product horizons and milestones. | Product Owner | Product and delivery planning | At milestone changes | Canonical | Product Vision, Sprints, Systems |
| `docs/SYSTEMS.md` | Product architecture | Catalog systems, responsibilities, current state, and boundaries. | Product Architect | Product, architecture, engineering | After system-level changes | Canonical | Architecture, Roadmap, Data Model |
| `docs/ARCHITECTURE.md` | Engineering architecture | Define technical structure, layers, workflows, and boundaries. | Product Architect | Architects and engineers | With architectural changes | Canonical | Systems, Data Model, Development |
| `docs/DATA_MODEL.md` | Data | Define entities, fields, relationships, and persistence semantics. | Product Architect | Engineers and reviewers | With model or persistence changes | Canonical | Architecture, Systems |
| `docs/DEVELOPMENT.md` | Development | Define setup, tooling, and engineering conventions. | Lead Software Engineer | Contributors and AI implementers | With tooling or practice changes | Canonical | Team, Architecture, Product Language |
| `docs/DESIGN_SYSTEM.md` | Design | Define visual tokens, shared components, interaction states, and accessibility conventions. | Design Owner | Designers and frontend engineers | With shared presentation changes | Canonical | Product Language, Architecture |
| `docs/PRODUCT_LANGUAGE.md` | Language | Define terminology, voice, naming, and AI communication. | Design Owner | Product, design, engineering, documentation, AI | With user-facing concepts or language rules | Canonical | Product Vision, Design System, Team |
| `docs/SPRINTS.md` | Delivery | Record approved sprint scope and completion. | Product Owner; maintained by Lead Software Engineer | Product and delivery team | At sprint opening and closure | Canonical | Roadmap, Changelog |
| `docs/CHANGELOG.md` | Delivery history | Record delivered changes by release. | Lead Software Engineer | Users, maintainers, reviewers | At release | Canonical history | Sprints, Git history |
| `docs/DOCUMENTATION_BACKLOG.md` | Governance planning | Stage documentation improvements by product maturity. | Product Architect | Document owners and delivery planning | At documentation milestones | Canonical plan | Documentation Map, Roadmap, Team |
| `docs/METHODOLOGY.md` | Methodology | Explain how product, architecture, delivery, design, language, documentation, and AI governance operate together. | Product Architect | Entire team and AI collaborators | After material workflow or governance changes | Internal synthesis; source authorities prevail | Team, Development, Architecture, Documentation Map |
| `docs/PROJECT_HEALTH.md` | Governance status | Aggregate current release-readiness evidence and blockers for a named target. | Product Architect | Development team and release decision owners | At Sprint closure, release review, or material evidence change | Internal, non-authoritative snapshot | Product Maturity, Documentation Backlog, Methodology, Team |
| `docs/DECISIONS.md` | Decision history | Preserve approved consequential rationale below the ADR threshold. | Product Architect; entries approved by domain owner | Entire team and future maintainers | At decision time or when a decision is superseded | Canonical decision history; current domain documents prevail | Team, Methodology, Changelog, future ADRs |
| `docs/UI_LANGUAGE.md` | Compatibility | Preserve the former language-document path. | Design Owner | Readers following old references | Temporary | Non-authoritative | Product Language |

## Responsibility matrix

| Area | Accountable | Responsible for maintenance | Consulted |
| --- | --- | --- | --- |
| Repository entry point | Lead Software Engineer | Lead Software Engineer | Product Architect, Design Owner |
| Product Vision and Roadmap | Product Owner | Product Owner | Product Architect, Design Owner, Lead Software Engineer |
| Systems, Architecture, and Data Model | Product Architect | Product Architect and Lead Software Engineer | Product Owner, Design Owner |
| Development guide and Changelog | Lead Software Engineer | Lead Software Engineer | Product Architect |
| Design System and Product Language | Design Owner | Design Owner and Lead Software Engineer | Product Owner, Product Architect |
| Team Governance | Product Owner | Product Owner | All decision owners |
| Sprint Tracker | Product Owner | Lead Software Engineer | Product Architect, Design Owner |
| Documentation Map | Product Architect | Product Architect | All decision owners |

## Documentation lifecycle

```text
Proposed
  → Owner review
  → Approved
  → Canonical
  → Maintained
  → Superseded
  → Compatibility period, when required
  → Archived or removed
```

- Documentation changes follow the approval workflow in Team Governance.
- A feature is incomplete when its affected canonical documentation is stale.
- Compatibility documents must identify their canonical successor.
- Historical Sprint and Changelog records are preserved rather than rewritten.
- Archived documents must state why and when they were superseded.

## Maintenance rules

- Product decisions update Product Vision only when principles or scope change.
- Architecture and data changes update Architecture and Data Model together where
  applicable.
- System-level capability changes update Systems.
- Shared presentation changes update Design System.
- New user-facing concepts update Product Language before or with first use.
- Sprint scope and completion update Sprint Tracker.
- Released changes update Changelog.
- README summarizes and links; it does not duplicate detailed status.

## Documentation Definition of Done

The Documentation Definition of Done applies whenever a feature creates or
modifies canonical documentation. Documentation is complete only when every
applicable criterion below is satisfied.

### Scope and authority

- All affected canonical documents have been identified through this map.
- Each change is made in the document authoritative for that subject.
- Summary documents link to canonical sources rather than duplicating authority.
- The accountable document owner has reviewed material changes in their domain.
- Documentation maintenance introduces no unapproved product, architecture,
  design, language, or governance decision.

### Content completeness

- Documentation accurately describes the approved and implemented outcome.
- Current functionality, future direction, and historical records remain distinct.
- Relevant boundaries, limitations, and unsupported behavior are explicit.
- Examples and status descriptions reflect the actual product.
- Obsolete statements are corrected, superseded, or identified as historical.
- No unintended placeholder language remains.

### Product consistency

- Terminology and user-facing language follow
  [Product Language](PRODUCT_LANGUAGE.md).
- Product principles remain consistent with
  [Product Vision](PRODUCT_VISION.md).
- System responsibilities remain consistent with [Systems](SYSTEMS.md).
- Future work is not described as implemented.
- A new user-facing concept is added to Product Language when required.

### Architecture and data consistency

When applicable:

- architectural boundaries remain consistent with
  [Architecture](ARCHITECTURE.md);
- entities, relationships, derived values, and persistence rules remain consistent
  with [Data Model](DATA_MODEL.md);
- system responsibility and implementation structure are not conflated;
- architectural rationale is recorded at the appropriate level.

### Design and accessibility consistency

When applicable:

- shared visual conventions remain consistent with
  [Design System](DESIGN_SYSTEM.md);
- changed tokens, components, responsive behavior, interaction states, and
  accessibility rules are documented;
- Design System and Product Language guidance do not conflict;
- presentation documentation reflects effective current styles.

### Governance consistency

- Ownership and approval language remains consistent with
  [Team Governance](TEAM.md).
- Documentation does not silently transfer decision authority.
- New documents declare purpose, owner, audience, authority, lifecycle, and
  related documents.
- Superseded documents follow the compatibility or archive process.
- This map is updated when documentation structure or authority changes.

### Planning and delivery records

- [Sprint Tracker](SPRINTS.md) records documentation impact and completion.
- The relevant [Documentation Backlog](DOCUMENTATION_BACKLOG.md) item is updated
  when authorized backlog work is completed.
- [Roadmap](ROADMAP.md) changes only when sequencing or readiness gates change.
- [Changelog](CHANGELOG.md) is updated when documentation accompanies a
  user-visible change, changes an official standard or governance expectation, or
  forms part of a release.
- Historical records are preserved rather than rewritten as current planning.

### Links and structure

- New and changed inbound and outbound links resolve.
- Renamed documents have all repository references updated.
- Relative paths and filename capitalization work in case-sensitive environments.
- Heading hierarchy, tables, and lists render coherently.
- Compatibility documents point to their canonical successor.
- No stale reference to a replaced filename remains.

### Technical validation

- `git diff --check` passes.
- The changed-file list contains only authorized paths.
- Filenames, identifiers, commands, and examples have been verified.
- Temporary review artifacts are excluded.
- Available Markdown and link checks pass.

### Final consistency review

- The diff has been reviewed as one coherent documentation change.
- Duplicate responsibility has not been introduced.
- Canonical documents agree on status, terminology, boundaries, and planning.
- The result is understandable without conversation history or an external
  proposal.
- Intentionally deferred work is recorded rather than silently omitted.

Documentation is considered done only after this sequence completes:

```text
Content updated
  → Authority verified
  → Product and architecture consistency reviewed
  → Links and structure validated
  → Sprint and release records updated
  → Owner review complete
  → git diff --check passed
```

“Documentation written” is not equivalent to “documentation complete.”

## Known consolidation work

- Reduce duplicated delivery-workflow detail in Development; Team remains canonical.
- Keep current status in Systems rather than Roadmap or README.
- Keep product principles in Product Vision, architectural boundaries in
  Architecture, and delivery sequencing in Roadmap.
- Retire `UI_LANGUAGE.md` after its compatibility period.
- Consider a separate Learning Architecture document after v1.0 if Architecture
  continues to grow.
