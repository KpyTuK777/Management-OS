# Documentation Map

This document defines the architectural role, ownership, audience, maintenance
cadence, and authority of the Management OS documentation set.

## Authority by domain

When documents overlap, the canonical authority for the relevant domain prevails:

| Domain | Canonical document |
| --- | --- |
| Product purpose and principles | [Product Vision](PRODUCT_VISION.md) |
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

The repository README is an entry point and summary, not a source of authority for
product status or scope.

## Documentation catalog

| Document | Category | Purpose | Owner | Primary audience | Update frequency | Status | Related documents |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `README.md` | Entry point | Introduce the repository, setup, and documentation index. | Lead Software Engineer | New contributors and reviewers | When setup or documentation structure changes | Informational | All canonical documents |
| `docs/TEAM.md` | Governance | Define decision ownership, delivery workflow, and AI collaboration rules. | Product Owner | Entire team and AI collaborators | When governance changes | Canonical | Development, Product Vision |
| `docs/PRODUCT_VISION.md` | Product | Define purpose, principles, and long-term direction. | Product Owner | Product, architecture, design, engineering | When product direction changes | Canonical | Roadmap, Systems, Product Language |
| `docs/ROADMAP.md` | Product | Sequence future product horizons and milestones. | Product Owner | Product and delivery planning | At milestone changes | Canonical | Product Vision, Sprints, Systems |
| `docs/SYSTEMS.md` | Product architecture | Catalog systems, responsibilities, current state, and boundaries. | Product Architect | Product, architecture, engineering | After system-level changes | Canonical | Architecture, Roadmap, Data Model |
| `docs/ARCHITECTURE.md` | Engineering architecture | Define technical structure, layers, workflows, and boundaries. | Product Architect | Architects and engineers | With architectural changes | Canonical | Systems, Data Model, Development |
| `docs/DATA_MODEL.md` | Data | Define entities, fields, relationships, and persistence semantics. | Product Architect | Engineers and reviewers | With model or persistence changes | Canonical | Architecture, Systems |
| `docs/DEVELOPMENT.md` | Development | Define setup, tooling, and engineering conventions. | Lead Software Engineer | Contributors and AI implementers | With tooling or practice changes | Canonical | Team, Architecture, Product Language |
| `docs/DESIGN_SYSTEM.md` | Design | Define visual tokens, shared components, interaction states, and accessibility conventions. | Design Owner | Designers and frontend engineers | With shared presentation changes | Canonical | Product Language, Architecture |
| `docs/PRODUCT_LANGUAGE.md` | Language | Define terminology, voice, naming, and AI communication. | Design Owner | Product, design, engineering, documentation, AI | With user-facing concepts or language rules | Canonical | Product Vision, Design System, Team |
| `docs/SPRINTS.md` | Delivery | Record approved sprint scope and completion. | Product Owner; maintained by Lead Software Engineer | Product and delivery team | At sprint opening and closure | Canonical | Roadmap, Changelog |
| `docs/CHANGELOG.md` | Delivery history | Record delivered changes by release. | Lead Software Engineer | Users, maintainers, reviewers | At release | Canonical history | Sprints, Git history |
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

## Known consolidation work

- Reduce duplicated delivery-workflow detail in Development; Team remains canonical.
- Keep current status in Systems rather than Roadmap or README.
- Keep product principles in Product Vision, architectural boundaries in
  Architecture, and delivery sequencing in Roadmap.
- Retire `UI_LANGUAGE.md` after its compatibility period.
- Consider a separate Learning Architecture document after v1.0 if Architecture
  continues to grow.
