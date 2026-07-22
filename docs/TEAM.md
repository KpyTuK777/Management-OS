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

Management OS uses two architecture-first delivery lanes. Classification occurs
before approval, and the strongest applicable lane governs the change.

### Established-architecture implementation lane

```text
Implementation Proposal
  -> Proposal APPROVE
  -> APPLY
  -> Implementation
  -> Validation and applicable Reviews
  -> COMMIT
  -> GitHub
  -> Architecture Consistency Audit
```

This direct lane applies when the proposal extends approved product and
architecture, introduces no new canonical decision, and includes proportionate
scope, dependencies, order, risks, and validation. A separate Implementation Plan
and Plan APPROVE are not required.

### Extended decision lane

The workflow below is the extended lane. It is required when a change modifies
canonical Product Principles, product or system responsibilities, architecture
layers or boundaries, data or persistence semantics, governance, approval
authority, security or privacy models, runtime platform, integration boundaries,
migration strategy, or another ADR-level commitment.

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

### Extended-lane responsibilities

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

### Direct-lane responsibilities

1. **Classification:** Confirm that the work follows established architecture and
   contains no canonical or ADR-level decision. Uncertainty uses the extended lane.
2. **Implementation Proposal:** Document the intended outcome, canonical basis,
   scope, exclusions, affected systems, coherent increment, dependencies, order,
   material risks, and validation at proportionate depth.
3. **Proposal APPROVE:** Applicable owners accept both the bounded outcome and its
   contained implementation strategy. Approval does not authorize mutation.
4. **APPLY:** The Product Owner or explicitly authorized decision owner permits
   workspace mutation within the approved proposal.
5. **Implementation and validation:** The Lead Software Engineer implements and
   tests the scope; the Quality Lead verifies applicable evidence; domain owners
   retain their existing authority.
6. **Applicable Reviews:** Product Review remains required for user-visible
   features. Architecture, Design, Security, Privacy, AI, Language, and other
   Reviews apply when their domains are affected. Routine work does not create a
   separate review solely to repeat an unchanged boundary.
7. **COMMIT, GitHub, and Audit:** Accepted work follows the same completion,
   publication, and consistency requirements as the extended lane.

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

Implementation must not begin before APPROVE and APPLY when a task requests a
proposal or review first. A direct-lane proposal may receive APPROVE and APPLY
without a separate planning gate. Material discoveries that change canonical
product, architecture, governance, design, data, language, security, privacy, or an
ADR-level decision move the work to the extended lane before implementation
continues.

## Implementation Planning Standard

Implementation Planning is required in every implementation proposal but is
proportionate to novelty and consequence. Architecture defines what must be true;
planning defines how to deliver it safely; APPLY authorizes modification.

For work within established architecture, planning is contained in the
Implementation Proposal and accepted by Proposal APPROVE. In the extended lane, a
separate read-only Implementation Plan follows approval of the new canonical
decision and receives Plan APPROVE before APPLY. Planning never redefines
architecture, implements code, or assumes authorization.

### When a plan is required

A separate Implementation Plan and Plan APPROVE are required after an approved
proposal changes canonical Product Principles, product or system architecture,
data or persistence contracts, governance or approval authority, security or
privacy architecture, runtime platform, integration boundaries, migration
strategy, or another ADR-level commitment.

Routine features, defects, presentation changes, accessibility corrections,
refactoring, and other implementation work may use the direct lane when they trace
to approved architecture and their proposal contains the applicable minimum plan
content. Complexity may require a deeper proposal or internal working plan, but it
does not create a second approval gate while canonical boundaries remain unchanged.

Documentation-only changes, spelling or formatting corrections, non-mutating
analysis, and routine status maintenance use proportionate proposal and owner
approval and do not require a separate Implementation Plan.

Emergency restoration of clearly broken behavior may use a compact scope, risk,
validation, and follow-up record. Urgency does not authorize architecture or scope
expansion.

### Minimum plan content

Every implementation-bearing proposal or separate plan identifies, proportionate
to risk:

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
10. readiness: eligible for direct APPROVE and APPLY, ready for Plan APPROVE in the
    extended lane, or requiring a named owner decision.

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

### Proposal and Plan Review

Review determines whether the proposal or plan traces to approved architecture,
preserves exclusions and ownership, proposes a coherent increment, controls
material risk, defines proportionate validation, identifies documentation impact,
and contains no unresolved canonical decision disguised as implementation detail.

Review participation is proportional: the Lead Software Engineer owns technical
feasibility; the Product Architect reviews architecture; the Product Owner reviews
scope; and the Design Owner reviews applicable experience and language. Data,
privacy, AI authority, or other affected domains require their existing owners.
For the direct lane, this assessment is part of Proposal APPROVE rather than a new
Plan Review. For the extended lane, Plan Review remains implementation-readiness
review after the canonical decision is approved; it is not a second Architecture
or Product Review.

Use explicit state names in records. **Implementation Proposal approved** means
established-architecture scope and its delivery strategy were accepted through the
direct lane. **Architecture / Governance approved** means a new canonical decision
was accepted through the extended lane. Existing extended-lane states remain:

- **Architecture approved** — intended outcome and boundaries accepted;
- **Implementation Plan approved** — delivery strategy accepted;
- **APPLY authorized** — workspace mutation permitted within both approvals;
- **Implementation accepted** — required post-implementation reviews passed.

### Change control

Planning discoveries that materially change Product Principles, product scope,
architecture, system responsibility, data model, approved experience, approval
boundaries, governance, security, privacy, or official Product Language move to the
extended Proposal and applicable APPROVE stage.

During implementation, a materially changed dependency, risk, increment, affected
system, or validation strategy returns to proportionate proposal or planning
review. Changes within approved boundaries do not automatically create a separate
gate; canonical boundary changes require the extended lane and renewed approval.

### Validation expectations

The plan defines evidence before implementation begins. Applicable validation
covers approved and excluded product behavior, authority, failure and cancellation,
module and data ownership, persistence, responsive and accessible interaction,
Product Language, regression, browser and viewport coverage, documentation links,
temporary-artifact cleanup, and `git diff --check`.

Implementation may adapt validation technique to repository constraints but may
not silently omit a material objective. Required evidence must be available before
post-implementation review and COMMIT.

### Planning lifecycle

Implementation planning is delivery knowledge, not canonical product truth. It may
live inside an approved Implementation Proposal, feature record, issue, or a
temporary dedicated extended-lane plan. After reviewed implementation, canonical
documents, Sprint history, Changelog, and Git describe the effective result. Only
qualifying rationale enters the Decision Log or an ADR.

The diagram below describes a separate extended-lane plan. Direct-lane planning is
approved inside the Implementation Proposal and becomes an active delivery
constraint at Proposal APPROVE.

```text
Working plan
  → Plan Review
  → Plan APPROVE
  → Active delivery constraint
  → Implementation evidence
  → Superseded by reviewed implementation and canonical documentation
```

The governing distinction is:

> APPROVE accepts the documented scope and applicable delivery strategy. Extended
> decisions retain separate architecture and plan approvals. Only APPLY authorizes
> implementation.

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
