# Team Governance

This document defines the official roles, ownership boundaries, and delivery
workflow for Management OS.

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
Proposal
  ↓
Architecture Review
  ↓
Product Review
  ↓
Approval
  ↓
Implementation
  ↓
Testing
  ↓
Final Approval
  ↓
Commit
  ↓
GitHub
```

### Workflow responsibilities

1. **Idea:** A product opportunity or problem is identified.
2. **Proposal:** The intended outcome, scope, constraints, and user experience are documented.
3. **Architecture Review:** The Product Architect validates system boundaries and long-term compatibility.
4. **Product Review:** The proposal is evaluated against Product Vision, priorities, and philosophy.
5. **Approval:** The Product Owner authorizes implementation.
6. **Implementation:** The Lead Software Engineer implements the approved scope; the Design Owner governs approved UX/UI decisions.
7. **Testing:** Functionality, regressions, code quality, responsiveness, and relevant design behavior are verified.
8. **Final Approval:** The Product Owner accepts the completed product outcome after the required reviews.
9. **Commit:** Approved changes are recorded in version control.
10. **GitHub:** The commit is published to the shared repository.

Implementation must not begin before approval when a task explicitly requests a
proposal or review first. Material changes to approved product, architecture, or
design decisions must return to the appropriate owner before implementation
continues.

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
