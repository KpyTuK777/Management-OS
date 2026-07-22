# Team Governance

This document defines the official roles, ownership boundaries, and delivery
workflow for Management OS.

The [Development Methodology](METHODOLOGY.md) explains how this governance works
with architecture, implementation, design, language, documentation, and AI
collaboration. This document remains authoritative for roles and approvals.

The [Product Maturity Model](PRODUCT_MATURITY.md) defines release-readiness gates.
The Product Owner approves a maturity transition only after all mandatory domain
evidence owners have completed their reviews.

## Team roles

### Product Owner — Serhii

The Product Owner is responsible for:

- Product Vision;
- product priorities;
- feature approval;
- final product decisions;
- long-term direction.

Product decisions belong to the Product Owner.

### Product Architect & AI Strategist — Mykola

The Product Architect & AI Strategist is responsible for:

- System Architecture;
- Platform Layer;
- Workflow Layer;
- Information Lifecycle;
- AI Strategy;
- Product Philosophy;
- Architecture Reviews;
- Product Reviews.

Architecture decisions belong to the Product Architect. Product Reviews advise
the Product Owner and do not replace the Product Owner's final product authority.

### Lead Software Engineer & Design Owner — Slavik

#### Engineering

The Lead Software Engineer is responsible for:

- implementation;
- refactoring;
- testing;
- code quality.

Implementation decisions belong to the Lead Software Engineer, within the approved
product and architecture boundaries.

#### Design

The Design Owner is responsible for:

- UX/UI;
- Design System;
- visual consistency;
- responsive design;
- Product Language consistency;
- Design Reviews;
- implementation of approved design improvements.

Design decisions belong to the Design Owner, within the approved product direction.

## Decision ownership

| Decision area | Owner |
| --- | --- |
| Product direction, priorities, scope, and final product approval | Product Owner |
| Architecture, Platform Layer, Workflow Layer, and technical boundaries | Product Architect |
| UX/UI, Design System, visual consistency, and responsive behavior | Design Owner |
| Implementation approach, refactoring, testing, and code quality | Lead Software Engineer |

Each owner makes decisions within their area while respecting approved decisions
from the other ownership domains. A decision that changes product scope returns to
the Product Owner. A decision that changes architectural boundaries returns to the
Product Architect. A decision that changes the approved experience returns to the
Design Owner.

## Standard delivery workflow

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

### Workflow responsibilities

1. **Idea:** A product opportunity or problem is identified.
2. **Architecture Proposal:** The intended outcome, scope, constraints, user experience, and architectural boundaries are documented.
3. **APPROVE:** The appropriate decision owners authorize the documented proposal.
4. **APPLY:** Explicit implementation authorization is given. Approval of architecture alone is not treated as an instruction to modify the product.
5. **Implementation:** The Lead Software Engineer implements and tests the approved scope; the Design Owner governs approved UX/UI and Product Language decisions.
6. **Architecture Review:** The Product Architect verifies that the implementation preserves the approved boundaries and long-term compatibility.
7. **Product Review:** The implementation is evaluated against Product Vision, priorities, philosophy, and the approved outcome. This review includes final product acceptance.
8. **COMMIT:** Reviewed and approved changes are recorded in version control.
9. **GitHub:** The commit is published to the shared repository.
10. **Architecture Consistency Audit:** The completed Sprint is checked for consistency between approvals, implementation, and documentation.

Testing remains mandatory during Implementation and before Product Review.
Functionality, regressions, code quality, responsiveness, and relevant design
behavior must be verified before the work can be committed.

When a change creates or modifies canonical documentation, Product Review, commit
readiness, and Sprint closure also require the
[Documentation Definition of Done](DOCUMENTATION_MAP.md#documentation-definition-of-done).
The accountable document owner reviews material changes within their domain.

Implementation must not begin before approval when a task explicitly requests a
proposal or review first. Material changes to approved product, architecture, or
design decisions must return to the appropriate owner before implementation
continues.

## Architecture Consistency Audit

The Architecture Consistency Audit is the final mandatory checkpoint for every
Sprint. A Sprint is not considered complete until its audit has been performed.

The audit verifies that:

- every approved proposal has been implemented;
- documentation and implementation remain synchronized;
- partially implemented features are identified;
- obsolete approved proposals are explicitly closed rather than forgotten.
- affected canonical documents remain synchronized according to the
  [Documentation Map](DOCUMENTATION_MAP.md).

The audit has no authority to introduce architecture, redesign approved features,
or reinterpret Product Philosophy. It verifies implementation consistency only.
When it identifies missing or partial work, the finding returns to the standard
ownership and approval process. When an approval is obsolete, the responsible
owner closes it explicitly instead of leaving it silently unresolved.

## AI collaboration policy

AI agents are collaborators operating within the same ownership and approval
model as the human team.

AI agents may:

- propose;
- review;
- analyze;
- recommend;
- implement approved work.

AI agents must not:

- silently redefine Product Philosophy;
- bypass approval;
- introduce major architectural changes without a Proposal;
- make destructive product decisions autonomously.

AI analysis and recommendations do not transfer decision ownership. Product,
architecture, design, and implementation decisions remain with the owners defined
in this document. When proposed work materially changes an approved boundary, the
AI agent must return it to the appropriate review and approval stage before
implementation.

## Decision recording

Approved decisions with durable rationale may be recorded in the
[Decision Log](DECISIONS.md). The owner of the relevant decision domain approves
the entry. The log preserves rationale and does not transfer authority or replace
the current canonical document.
