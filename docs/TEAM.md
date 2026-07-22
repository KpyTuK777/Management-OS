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

### Quality Lead — assigned per material feature

The Quality Lead is responsible for coordinating and verifying the evidence that
an implemented change satisfies its approved product outcome, architectural
boundaries, UX, accessibility, trust, regression, and documentation expectations
before COMMIT.

The role owns validation coverage, evidence completeness, reproducibility, defect
and limitation visibility, and traceability from approved outcomes to executed
checks. It does not own Product Review, Architecture Review, design decisions,
implementation strategy, risk exceptions, APPLY, COMMIT authorization, maturity
transition, or release approval.

The Quality Lead answers whether sufficient credible evidence exists for current
decision owners to review the work. Existing owners continue to accept, reject, or
resolve tradeoffs in their domains.

## Decision ownership

| Decision area | Owner |
| --- | --- |
| Product direction, priorities, scope, and final product approval | Product Owner |
| Architecture, Platform Layer, Workflow Layer, and technical boundaries | Product Architect |
| UX/UI, Design System, visual consistency, and responsive behavior | Design Owner |
| Implementation approach, refactoring, testing, and code quality | Lead Software Engineer |
| Validation coordination, coverage, reproducibility, and readiness evidence | Assigned Quality Lead |

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
7. **Implementation:** The Lead Software Engineer implements and tests the approved scope; the Design Owner governs approved UX/UI and Product Language decisions; the assigned Quality Lead verifies applicable validation evidence.
8. **Architecture Review:** The Product Architect verifies that the implementation preserves the approved boundaries and long-term compatibility.
9. **Product Review:** The implementation is evaluated against Product Vision, priorities, philosophy, the approved outcome, and the coherent increment. This review includes final product acceptance.
10. **COMMIT:** Reviewed and approved changes are recorded in version control.
11. **GitHub:** The commit is published to the shared repository.
12. **Architecture Consistency Audit:** The completed Sprint is checked for consistency between approvals, planning, implementation, and documentation.

Testing remains mandatory during Implementation and before Product Review.
Functionality, regressions, code quality, responsiveness, and relevant design
behavior must be verified before the work can be committed.

Quality validation supports these existing reviews and does not add a delivery
stage. A Quality Lead finding informs review and commit readiness but never grants
approval.

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

The plan also identifies who will perform the Quality Lead responsibility for the
increment and which evidence they must verify.

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

## Quality Lead responsibility

### Relationship with existing owners

- The **Product Owner** retains Product Review, final product acceptance, maturity,
  and release authority. The Quality Lead supplies product-behavior evidence.
- The **Product Architect** retains Architecture Review and decides whether
  boundaries are satisfied. The Quality Lead supplies architecture and prohibited-
  dependency evidence.
- The **Implementation Lead** produces the change, technical tests, and defect
  corrections. The Quality Lead independently verifies applicable behavior,
  coverage, and evidence; the Implementation Lead chooses correction technique
  within approved boundaries.
- The **Design Owner** retains UX, responsive, accessibility, Design System, and
  Product Language authority. The Quality Lead verifies observable conformance and
  reports ambiguity to the Design Owner.
- **Document owners** retain canonical-document authority. The Quality Lead verifies
  that required documentation evidence exists and temporary artifacts are removed.

### Responsibilities

Before implementation, the Quality Lead reviews the planned validation strategy,
acceptance scenarios, environments, edge cases, accessibility needs, and trust or
authority boundaries. During implementation, the role maintains traceability,
tests stable slices, reports reproducible defects, and verifies corrections. Before
COMMIT, the role verifies that applicable objectives were executed, failures have
a disposition, reviews received their evidence, documentation checks passed, and
temporary validation artifacts were removed.

The Quality Lead orchestrates validation rather than personally executing every
check. Evidence may be produced by engineering, design, architecture,
documentation, accessibility, or other contributors. Verification of evidence
does not transfer their decision authority.

### Quality Validation Record

Material implementations produce a compact record containing:

- approved feature and coherent increment;
- environments, scenarios, and checks executed;
- passed, failed, untested, and not-applicable checks;
- regression, responsive, accessibility, architecture, and trust evidence as
  applicable;
- known defects and limitations with owner disposition;
- confirmation that temporary artifacts were removed;
- a final evidence finding.

The record may live in the implementation conversation, issue, pull request, or
Sprint evidence. A permanent standalone file is not required for every feature.

### Evidence findings

| Finding | Meaning |
| --- | --- |
| **Ready for existing reviews** | Applicable validation passed and evidence is sufficient. |
| **Ready with approved limitations** | Evidence is sufficient and remaining limitations have explicit owner disposition. |
| **Not ready** | A material defect, missing control, or failed applicable check remains unresolved. |
| **Not assessed** | Applicable evidence is incomplete or unavailable. |
| **Not applicable** | The dimension does not apply, with rationale when not obvious. |

These are evidence findings, not approvals. No composite score may average away a
material authority, accessibility, data-integrity, or trust failure.

### Release-readiness evidence

Quality evidence traces:

```text
Approved requirement
  → Planned validation
  → Executed check
  → Result
  → Defect or limitation
  → Owner disposition
  → Review outcome
```

Applicable evidence covers scope fidelity, product behavior, architecture, UX,
accessibility, Product Language, trust, technical integrity, regression,
documentation, and known limitations. It may feed Product, Architecture, Design,
Language, and Documentation Reviews, Project Health, Product Maturity, Sprint
closure, and release readiness. The Quality Lead aggregates this evidence but does
not approve a release or maturity transition.

### Independence and role combination

Independent verification is preferred. In the current small team, one person may
hold Implementation Lead and Quality Lead responsibilities when the passes remain
explicitly separate, the role combination is disclosed, reproducible evidence is
preferred, and material findings return to independent domain owners. Combining
roles does not combine authority.

AI may execute available checks, inspect boundaries, generate edge cases, compare
implementation with approvals, and report evidence or limitations. It may not
approve its own work, invent test results, claim manual or assistive-technology
testing it did not perform, resolve owner exceptions, or declare release approval.

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
