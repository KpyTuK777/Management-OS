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
Architecture APPROVE
  ↓
Implementation Planning
  ↓
Plan APPROVE
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
3. **Architecture APPROVE:** The appropriate decision owners authorize the documented outcome and boundaries. This does not authorize mutation.
4. **Implementation Planning:** The Implementation Lead inspects the current product and defines the smallest coherent delivery strategy, dependencies, order, risks, validation, effort, and increment structure without changing files.
5. **Plan APPROVE:** The applicable owners accept the implementation strategy as faithful, coherent, and ready for explicit authorization. This does not authorize mutation.
6. **APPLY:** Explicit implementation authorization is given for the approved architecture and plan. Neither prior approval alone is an instruction to modify the product.
7. **Implementation:** The Lead Software Engineer implements and tests the approved scope; the Design Owner governs approved UX/UI and Product Language decisions.
8. **Architecture Review:** The Product Architect verifies that the implementation preserves the approved boundaries and long-term compatibility.
9. **Product Review:** The implementation is evaluated against Product Vision, priorities, philosophy, the approved outcome, and the coherent increment. This review includes final product acceptance.
10. **COMMIT:** Reviewed and approved changes are recorded in version control.
11. **GitHub:** The commit is published to the shared repository.
12. **Architecture Consistency Audit:** The completed Sprint is checked for consistency between approvals, planning, implementation, and documentation.

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

## Implementation Planning Standard

Implementation Planning is the read-only delivery-readiness stage between approved
architecture and APPLY. Architecture defines what must be true; the plan determines
how to deliver it safely; APPLY authorizes the planned modifications. Planning must
not redefine architecture, implement code, or assume authorization.

### When a plan is required

An Implementation Plan is required before APPLY for new features, workflows,
persisted-data changes, AI behavior, material UX interactions, destructive or
difficult-to-reverse operations, shared infrastructure, security or recovery work,
substantial refactoring, multi-increment delivery, and work with material
regression risk. It is also required whenever an approved proposal was explicitly
architecture-only.

A compact plan is sufficient for small presentation changes, isolated defects,
low-risk refactoring, accessibility corrections, and similarly bounded work.
Documentation-only changes, spelling or formatting corrections, non-mutating
analysis, and routine status maintenance do not require a separate plan.

Emergency restoration of clearly broken behavior may use a compact scope, risk,
validation, and follow-up record. Urgency does not authorize architecture or scope
expansion.

### Minimum plan content

Every applicable plan identifies:

1. approved scope, canonical sources, assumptions, and exclusions;
2. current implementation state and affected systems;
3. architectural, data, design, language, and governance dependencies;
4. the smallest coherent increment and its stopping boundary;
5. implementation order and validation points;
6. material risks, edge cases, and controls;
7. functional, regression, architecture, responsive, accessibility, persistence,
   failure, and documentation validation as applicable;
8. an effort range, including validation, documentation, and uncertainty;
9. a recommendation to deliver in one increment or several;
10. readiness: ready for Plan APPROVE or requiring a named owner decision.

Estimates are planning ranges with assumptions, not delivery promises.

### Ownership

- The **Lead Software Engineer / Implementation Lead** prepares the plan, selects
  implementation strategy within approved boundaries, estimates effort, and owns
  technical readiness.
- The **Product Architect** verifies architectural fidelity and determines when a
  discovery requires renewed architecture approval.
- The **Product Owner** confirms product-scope fidelity, resolves product tradeoffs,
  and issues or withholds APPLY.
- The **Design Owner** reviews applicable interaction, responsive, accessibility,
  Design System, and Product Language impact.
- Applicable **document owners** identify canonical updates and completion
  evidence.

AI collaborators may inspect, plan, analyze dependencies and risks, estimate, and
recommend increment boundaries. They may not approve their own plan, issue APPLY,
change files while planning, or redefine approved boundaries.

### Plan Review and approval

Plan Review determines whether the plan traces to approved architecture, preserves
exclusions and ownership, proposes a coherent increment, controls material risk,
defines proportionate validation, identifies documentation impact, and contains no
unresolved decision disguised as implementation detail.

Review participation is proportional: the Lead Software Engineer owns technical
feasibility; the Product Architect reviews architecture; the Product Owner reviews
scope; and the Design Owner reviews applicable experience and language. Data,
privacy, AI authority, or other affected domains require their existing owners.
This is implementation-readiness review, not a new Product or Architecture Review.

Use explicit state names in records:

- **Architecture approved** — intended outcome and boundaries accepted;
- **Implementation Plan approved** — delivery strategy accepted;
- **APPLY authorized** — workspace mutation permitted within both approvals;
- **Implementation accepted** — required post-implementation reviews passed.

### Change control

Planning discoveries that materially change product scope, architecture, system
responsibility, data model, approved experience, approval boundaries, governance,
or official Product Language return to the relevant Proposal and Architecture
APPROVE stage.

During implementation, a materially changed dependency, risk, increment, affected
system, or validation strategy returns to planning. Replanning within approved
boundaries requires proportionate Plan Review; boundary changes require renewed
architecture approval.

### Validation expectations

The plan defines evidence before implementation begins. Applicable validation
covers approved and excluded product behavior, authority, failure and cancellation,
module and data ownership, persistence, responsive and accessible interaction,
Product Language, regression, browser and viewport coverage, documentation links,
temporary-artifact cleanup, and `git diff --check`.

Implementation may adapt validation technique to repository constraints but may
not silently omit a material objective. Required evidence must be available before
post-implementation review and COMMIT.

### Plan lifecycle

An Implementation Plan is delivery knowledge, not canonical product truth. It may
live in an approved conversation, feature record, issue, or temporary dedicated
plan for substantial work. After reviewed implementation, canonical documents,
Sprint history, Changelog, and Git describe the effective result. Only qualifying
rationale enters the Decision Log or an ADR.

```text
Working plan
  → Plan Review
  → Plan APPROVE
  → Active delivery constraint
  → Implementation evidence
  → Superseded by reviewed implementation and canonical documentation
```

The governing distinction is:

> Architecture approval authorizes the intended outcome. Plan approval accepts the
> delivery strategy. Only APPLY authorizes implementation.

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
