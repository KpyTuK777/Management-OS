# Management OS Development Methodology

## Purpose

The Management OS Development Methodology describes how product intent moves into
an approved, implemented, reviewed, documented, and audited change. It connects the
project's existing governance practices into one operating model.

This document is a synthesis. It does not replace the canonical authorities listed
below. If a summary here diverges from a canonical document, the canonical document
prevails.

| Governance property | Decision |
| --- | --- |
| Status | Internal operating standard |
| Adoption milestone | Before Beta |
| Accountable owner | Product Architect |
| Approval authority | Product Owner |
| Consulted owners | Design Owner and Lead Software Engineer |
| Public status | Internal through v1.0; reconsider after multiple release cycles |

This methodology explains how authorities interact. Canonical documents define
their rules, Team owners make decisions, and explicit **APPLY** authorizes change.
Nothing in this document grants standing implementation authority.

The methodology aims to preserve:

- product coherence;
- architectural consistency;
- explicit decision ownership;
- implementation quality;
- design and language consistency;
- documentation traceability;
- responsible AI collaboration.

## Core principles

### Architecture First

Material work begins by identifying responsibilities, boundaries, constraints,
affected systems, and long-term compatibility before implementation. The depth of
architecture work remains proportional to the consequence of the change.

### Product before implementation

Define the problem, intended outcome, user value, scope, and exclusions before
selecting an implementation approach. Implementation serves approved product
direction and does not silently create it.

### Approval is separate from application

**APPROVE** accepts a proposal. **APPLY** authorizes the approved change. Discussion,
review, or conceptual approval is not permission to modify the product.

### One decision, one owner

Product, architecture, design, language, implementation, and documentation
decisions retain the owners defined in [Team Governance](TEAM.md). Collaboration
does not dissolve accountability.

### Canonical documents govern

Decisions belong in the document authoritative for their domain. Summaries link to
canonical sources rather than becoming competing authorities.

### Documentation evolves with the product

Documentation is part of delivery, not cleanup after implementation. Affected
documentation must satisfy the
[Documentation Definition of Done](DOCUMENTATION_MAP.md#documentation-definition-of-done).

### Review before completion

Architecture Review verifies boundaries, responsibilities, compatibility, and
technical coherence. Product Review verifies the intended outcome, usability,
philosophy, terminology, and approved scope. Passing one does not imply passing the
other.

### Final consistency audit

The Architecture Consistency Audit verifies that approved intent, implementation,
and documentation agree after publication. It cannot introduce new scope or repair
missing approval retroactively.

### AI collaborates without owning decisions

AI may analyze, propose, review, and implement authorized work. It may not infer
approval, redefine Product Philosophy, transfer ownership, or silently expand
scope.

## Change classification

| Change type | Description | Primary authority |
| --- | --- | --- |
| Editorial | Wording or formatting without semantic change. | Product Language and document owner |
| Presentation | Visual or layout change without product-behavior change. | Design Owner |
| Implementation | Behavior within approved product and architecture boundaries. | Lead Software Engineer |
| Architecture | Responsibility, data, workflow, or platform-boundary change. | Product Architect |
| Product | Scope, concept, workflow, or user-value change. | Product Owner |
| Governance | Ownership, approval, completion, or documentation-authority change. | Product Owner and relevant governance owner |

The classification determines the required proposal depth, decision owners,
reviews, and documentation. When a change spans categories, satisfy the strongest
applicable review and approval requirements.

## Decision recording

Use the [Decision Log](DECISIONS.md) for approved, consequential rationale that is
too small for an ADR but too important to remain only in conversation history. Git
history remains sufficient for routine implementation and editorial detail. Use an
ADR when a decision creates a material, long-lived architectural commitment.

The relevant domain owner approves each decision entry. The Decision Log preserves
rationale but does not replace current canonical documents.

## Delivery workflow

The formal workflow, approval meaning, and role responsibilities remain defined in
[Team Governance](TEAM.md). The summary below explains how its stages connect; it
does not redefine them.

```text
Idea
  → Architecture Proposal
  → APPROVE
  → APPLY
  → Implementation
  → Architecture Review
  → Product Review
  → Documentation Definition of Done
  → COMMIT
  → GitHub
  → Architecture Consistency Audit
```

| Stage | Purpose | Completion condition |
| --- | --- | --- |
| Idea | Identify an opportunity or problem. | The intended outcome is clear enough to assess. |
| Architecture Proposal | Define scope, constraints, experience, boundaries, and affected documents. | Relevant owners can evaluate the proposed change. |
| APPROVE | Accept the documented proposal. | The appropriate decision owners approve it. |
| APPLY | Authorize modification of the product or documentation. | Explicit implementation authorization is given. |
| Implementation | Produce and validate the approved outcome. | Approved scope is implemented and relevant tests pass. |
| Architecture Review | Verify architectural consistency and boundaries. | Product Architect accepts the result or reports findings. |
| Product Review | Verify value, experience, philosophy, terminology, and scope. | Product Owner accepts the result or reports findings. |
| Documentation DoD | Complete affected canonical documentation and validation. | Every applicable DoD criterion passes. |
| COMMIT | Record the reviewed change in version control. | Commit scope is coherent and ready. |
| GitHub | Publish the accepted commit. | Shared repository contains the reviewed change. |
| Architecture Consistency Audit | Compare approval, implementation, and documentation. | Missing, partial, or obsolete work is reported or the Sprint is closed. |

No later stage silently substitutes for an earlier approval or review.

## Review model

| Review | Primary question | Owner |
| --- | --- | --- |
| Code review | Is the implementation correct, maintainable, and tested? | Lead Software Engineer |
| Architecture Review | Does the result preserve approved boundaries and long-term compatibility? | Product Architect |
| Design Review | Does the experience follow the Design System and reduce cognitive load? | Design Owner |
| Language Review | Does user-facing communication follow Product Language? | Design Owner |
| Product Review | Does the result deliver the approved product outcome? | Product Owner |
| Documentation Review | Are canonical documents complete, accurate, and internally consistent? | Accountable document owner |
| Consistency Audit | Do approval, implementation, and documentation agree? | Product Architect |

## Design and Product Language integration

Interface work follows both [Design System](DESIGN_SYSTEM.md) and
[Product Language](PRODUCT_LANGUAGE.md). Visual hierarchy and product communication
are part of the experience, not optional polish applied after implementation.

New shared presentation rules update Design System. New or changed user-facing
concepts update Product Language before or alongside first use.

## Documentation integration

- [Documentation Map](DOCUMENTATION_MAP.md) owns authority, ownership, lifecycle,
  and the Documentation Definition of Done.
- [Documentation Backlog](DOCUMENTATION_BACKLOG.md) stages documentation maturity
  work without authorizing it.
- [Roadmap](ROADMAP.md) owns Beta, v1.0, and post-v1 documentation gates.
- [Sprint Tracker](SPRINTS.md) records scheduled work and completion evidence.
- [Changelog](CHANGELOG.md) records released product and governance changes.
- [Project Health](PROJECT_HEALTH.md) aggregates current readiness evidence and
  blockers without changing canonical criteria or approval authority.

## Knowledge Evolution Map

This map answers where knowledge belongs as it matures. It is a navigation aid,
not a new source of authority. Team Governance owns approval and delivery rules,
the Documentation Map owns document authority and lifecycle, and current rules
remain in the canonical document for their domain.

```text
Conversation or observation
  → Idea or identified problem
  → Change classification
  → Documented proposal
  → Relevant owner review
  → APPROVE
  → APPLY
  → Implementation or documentation change
  → Required domain reviews and validation
  → Affected canonical documents updated
  → Documentation Definition of Done
  → COMMIT
  → Shared repository
  → Architecture Consistency Audit
```

The lifecycle is not fully linear. Several records branch from the reviewed
change according to their purpose:

| Knowledge state | Destination |
| --- | --- |
| Unapproved exploration, question, or abandoned alternative | Conversation or working proposal |
| Defined change awaiting a decision | Documented proposal |
| Approved current rule or product truth | Canonical document for the affected domain |
| Approved rationale likely to be revisited or misunderstood | [Decision Log](DECISIONS.md) |
| Long-lived structural commitment that is expensive to reverse | Architecture Decision Record |
| Approved scope and completion evidence | [Sprint Tracker](SPRINTS.md) and Git history |
| Delivered change awaiting release | [Changelog](CHANGELOG.md) under `Unreleased` |
| Released change | Versioned Changelog entry |
| Superseded rule | Updated canonical document and preserved historical decision record |

### Transition rules

- Promote conversation into a proposal when the problem, intended outcome, scope,
  exclusions, or decision are clear enough to evaluate. Conversation is not
  approval or durable product truth.
- Classify the proposal using the methodology's change classification and identify
  every materially affected owner and canonical document.
- **APPROVE** accepts documented intent. **APPLY** separately authorizes the
  modification. Neither discussion nor approval alone authorizes a change.
- Return to proposal and approval when implementation discoveries materially
  change approved product, architecture, design, language, or governance scope.
- Update only the documents authoritative for affected subjects. Canonical
  documentation describes the reviewed effective outcome, not merely the proposal.
- Record rationale in the Decision Log only when its entry policy is satisfied.
  Use an ADR instead when the decision crosses the architectural threshold defined
  there. Neither record replaces current canonical documentation.
- Record scope and completion in the Sprint Tracker. Record releasable changes
  under `Unreleased`, then preserve them in a versioned Changelog entry at release.
  The Changelog is the release history; no separate competing history is needed.

### Permanence boundary

Approval creates an official commitment, but not implemented truth. Knowledge
becomes current organizational truth when the reviewed outcome is recorded in its
authoritative canonical document, passes the Documentation Definition of Done,
and is committed to the shared repository.

Durable rationale is preserved separately in the Decision Log or an ADR. Delivery
evidence is preserved in the Sprint Tracker and Git history, and released outcomes
are preserved in the Changelog. Implementation by itself does not make knowledge
canonical.

## Product maturity integration

This methodology governs how an individual approved change moves from idea to
audited completion. The [Product Maturity Model](PRODUCT_MATURITY.md) governs the
cumulative evidence required for Management OS to advance from Prototype through
Alpha, Beta, v1.0, and post-v1 evolution. Completing one workflow or Roadmap phase
does not automatically advance product maturity.

## AI collaboration model

| Stage | Permitted AI contribution |
| --- | --- |
| Idea | Explore problems, evidence, and alternatives. |
| Proposal | Structure outcomes, constraints, options, and risks. |
| Approval | Provide analysis; never self-approve. |
| APPLY | Act only after explicit authorization. |
| Implementation | Make scoped changes and validate them. |
| Reviews | Identify inconsistencies, risks, and missing evidence. |
| Documentation | Update authorized canonical documents. |
| Audit | Compare approved intent, implementation, and records. |

The methodology defines process but never grants standing APPLY authority.

## Proportionality

Process depth scales with consequence:

- small editorial corrections use lightweight document-owner review;
- presentation changes require Design and Language review where relevant;
- implementation changes require proportionate testing and architecture review;
- material architecture, product, or governance changes require formal proposals;
- release-gated work requires complete verification evidence.

Proportionality reduces ceremony without weakening ownership or approval.

## Canonical ownership

| Subject | Canonical document | Accountable owner |
| --- | --- | --- |
| Roles, approvals, AI policy, and delivery governance | [Team Governance](TEAM.md) | Product Owner |
| Product principles and direction | [Product Vision](PRODUCT_VISION.md) | Product Owner |
| Architecture and technical boundaries | [Architecture](ARCHITECTURE.md) | Product Architect |
| Engineering practice | [Development](DEVELOPMENT.md) | Lead Software Engineer |
| Documentation authority, lifecycle, and DoD | [Documentation Map](DOCUMENTATION_MAP.md) | Product Architect |
| Documentation maturity planning | [Documentation Backlog](DOCUMENTATION_BACKLOG.md) | Product Architect |
| Product communication | [Product Language](PRODUCT_LANGUAGE.md) | Design Owner |
| Visual and interaction conventions | [Design System](DESIGN_SYSTEM.md) | Design Owner |
| Sprint execution evidence | [Sprint Tracker](SPRINTS.md) | Product Owner |
| Release history | [Changelog](CHANGELOG.md) | Lead Software Engineer |

The Product Architect owns this synthesis. The Product Owner approves methodology
changes. The Design Owner and Lead Software Engineer are consulted for changes in
their domains.

Detailed role responsibilities, architecture definitions, engineering conventions,
Design System specifications, Product Language rules, and the Documentation DoD
must remain in their canonical documents rather than being copied here.

## Methodology evolution

Methodology changes are governance changes. They require Product Architect and
Product Owner review, updates to affected canonical documents, and the
Documentation Definition of Done.

The methodology should be reviewed after major product milestones. Initially it
remains an internal operating standard. A public, role-neutral playbook may be
considered after v1.0 only if the process has proved useful across multiple release
cycles and can be separated safely from internal ownership details.
