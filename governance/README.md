# M7.1 — Governance Structure

## Status

```text
Canonical
M7.1 — Closed
Milestone M7 — Active
```

## Authority

This document is the canonical structure design and root index for the
Management OS Governance Layer. It defines where future M7 governance artifacts
belong, which artifact class owns each concern, how artifacts are named and
indexed, and how authority and evidence flow between them. It acquired canonical
authority after positive Architecture Review, positive Canonical Review, and a
separate canonicalization transition under the existing Chief Architect
Operating Model.

The repository-native source opening M7 and authorizing this bounded candidate
is the [M7.1 Governance Structure Order](orders/M7.1%20-%20Governance%20Structure%20Order.md).

It does not define the future Constitution, Organizational Model, Development
Lifecycle, Autonomous Development Protocol, or Retrospective findings. Those
subjects remain reserved for M7.2–M7.6 and cannot acquire authority from this
structure alone.

# 1. Purpose

The Governance Layer gives architectural governance a dedicated,
repository-native home. Its structure must exist before substantive governance
documents so that future definitions, orders, evidence, reviews, and historical
learning cannot become mixed or silently substitute for one another.

The structure:

- separates normative authority from work instructions, evidence, review
  dispositions, and retrospectives;
- assigns one owner and one permitted responsibility to every directory;
- makes dependency direction explicit;
- requires repository-visible status, provenance, and indexing;
- prevents prompts, chat memory, or recollection from becoming governance
  authority;
- preserves the existing Architecture control plane and approved architecture.

# 2. Canonical Directory Tree

```text
governance/
├── README.md
├── normative/
│   └── README.md
├── orders/
│   └── README.md
├── evidence/
│   └── README.md
├── reviews/
│   └── README.md
└── retrospectives/
    └── README.md
```

`governance/README.md` is the canonical M7 Governance Layer structure contract
and its root index. Each child `README.md` is a narrowly scoped boundary index
for its artifact class. Placeholder indexes create no future substantive
contract.

No additional top-level Governance Layer directory may be introduced without a
reviewed change to this structure contract.

## 2.1 Current M7.1 Artifact Index

The root identifies itself through its title, status, and Authority section and
therefore has no circular self-entry. Every other substantive Governance Layer
artifact is indexed here and in its artifact-class index.

| Milestone | Title | Class | Status | Artifact |
| --- | --- | --- | --- | --- |
| M7.1 | Governance Structure Order | Order | Completed / Scope fulfilled | [Order](orders/M7.1%20-%20Governance%20Structure%20Order.md) |
| M7.1 | Governance Structure Correction Evidence | Evidence | Accepted review evidence | [Evidence](evidence/M7.1%20-%20Governance%20Structure%20Correction%20Evidence.md) |
| M7.1 | Governance Structure Architecture Review | Review | Completed — Approved | [Review](reviews/M7.1%20-%20Governance%20Structure%20Architecture%20Review.md) |
| M7.1 | Governance Structure Canonical Review | Review | Completed — Approved | [Review](reviews/M7.1%20-%20Governance%20Structure%20Canonical%20Review.md) |
| M7.2 | Constitution Order | Order | Completed / Scope fulfilled | [Order](orders/M7.2%20-%20Constitution%20Order.md) |
| M7.2 | Constitution | Normative definition | Canonical / M7.2 Closed | [Definition](normative/M7.2%20-%20Constitution.md) |
| M7.2 | Constitution Definition Evidence | Evidence | Accepted review evidence | [Evidence](evidence/M7.2%20-%20Constitution%20Definition%20Evidence.md) |
| M7.2 | Constitution Correction Evidence | Evidence | Accepted review evidence | [Evidence](evidence/M7.2%20-%20Constitution%20Correction%20Evidence.md) |
| M7.2 | Constitution Architecture Review | Review | Completed — Approved | [Review](reviews/M7.2%20-%20Constitution%20Architecture%20Review.md) |
| M7.2 | Constitution Canonical Review | Review | Completed — Canonical | [Review](reviews/M7.2%20-%20Constitution%20Canonical%20Review.md) |
| M7.3 | Organizational Model Order | Order | Completed / Scope fulfilled | [Order](orders/M7.3%20-%20Organizational%20Model%20Order.md) |
| M7.3 | Organizational Model | Normative definition | Canonical / M7.3 Closed | [Definition](normative/M7.3%20-%20Organizational%20Model.md) |
| M7.3 | Organizational Model Definition Evidence | Evidence | Accepted review evidence | [Evidence](evidence/M7.3%20-%20Organizational%20Model%20Definition%20Evidence.md) |
| M7.3 | Organizational Model Architecture Review | Review | Completed — Approved | [Review](reviews/M7.3%20-%20Organizational%20Model%20Architecture%20Review.md) |
| M7.3 | Organizational Model Canonical Review | Review | Completed — Canonical | [Review](reviews/M7.3%20-%20Organizational%20Model%20Canonical%20Review.md) |
| M7.4 | Development Lifecycle Order | Order | Completed / Scope fulfilled | [Order](orders/M7.4%20-%20Development%20Lifecycle%20Order.md) |
| M7.4 | Development Lifecycle | Normative definition | Canonical / M7.4 Closed | [Definition](normative/M7.4%20-%20Development%20Lifecycle.md) |
| M7.4 | Development Lifecycle Definition Evidence | Evidence | Accepted Architecture and Canonical Review evidence | [Evidence](evidence/M7.4%20-%20Development%20Lifecycle%20Definition%20Evidence.md) |
| M7.4 | Development Lifecycle Architecture Review | Review | Completed — Approved | [Review](reviews/M7.4%20-%20Development%20Lifecycle%20Architecture%20Review.md) |
| M7.4 | Development Lifecycle Canonical Review | Review | Completed — Canonical | [Review](reviews/M7.4%20-%20Development%20Lifecycle%20Canonical%20Review.md) |
| M7.5 | Autonomous Development Protocol Order | Order | Completed / Scope fulfilled | [Order](orders/M7.5%20-%20Autonomous%20Development%20Protocol%20Order.md) |
| M7.5 | Autonomous Development Protocol | Normative definition | Canonical / M7.5 Closed | [Definition](normative/M7.5%20-%20Autonomous%20Development%20Protocol.md) |
| M7.5 | Autonomous Development Protocol Definition Evidence | Evidence | Accepted Architecture and Canonical Review evidence | [Evidence](evidence/M7.5%20-%20Autonomous%20Development%20Protocol%20Definition%20Evidence.md) |
| M7.5 | Autonomous Development Protocol Architecture Review | Review | Completed — Approved | [Review](reviews/M7.5%20-%20Autonomous%20Development%20Protocol%20Architecture%20Review.md) |
| M7.5 | Autonomous Development Protocol Canonical Review | Review | Completed — Canonical | [Review](reviews/M7.5%20-%20Autonomous%20Development%20Protocol%20Canonical%20Review.md) |
| M7.6 | Retrospective Order | Order | Effective / Scope bounded | [Order](orders/M7.6%20-%20Retrospective%20Order.md) |

# 3. Directory Ownership

The table uses **semantic owner** to mean the sole artifact class responsible for
a concern. Semantic ownership does not grant permission to author, approve,
review, or transition an artifact.

| Path | Semantic owner and responsibility | Accountable authorship | Review authority | Maintenance responsibility | Must not own |
| --- | --- | --- | --- | --- | --- |
| `governance/` | M7 Governance Structure: layer structure, artifact classes, dependency direction, indexing, and structural conformance. | Lead Engineer under the active backlog task. | Chief Architect through independent Architecture Review and required Canonical Review. | Lead Engineer only through an authorized task; authority-changing maintenance requires review. | Substantive constitutional rules, role authority, lifecycle, protocol, review verdicts, or retrospective conclusions. |
| `governance/normative/` | Each future approved normative document: governance rules and contracts within its reviewed scope. | Lead Engineer under the single active task unless the current approved model is later changed by approved governance. | Chief Architect under the current approved model; authors cannot self-approve. | Lead Engineer through an authorized task; normative change requires the applicable review lifecycle. | Orders, execution evidence, self-approval, or historical interpretation. |
| `governance/orders/` | Each authorized order: one bounded instruction under cited authority. | Product Owner for product or milestone direction; Chief Architect for architecture-stage definition under the current model. | Orders do not approve their outputs; architectural validity remains subject to the Chief Architect process. | The issuing authority owns meaning; repository maintenance cannot broaden the order. | Durable governance law, evidence, or review disposition. |
| `governance/evidence/` | Each evidence record: attributable, immutable or append-preserved observations supporting a named claim or review. | Lead Engineer or other evidence producer named by the applicable order under the current model. | The independent Chief Architect review evaluates evidence; evidence cannot approve itself. | The evidence producer preserves attribution; correction is append-preserved and cannot rewrite observations silently. | Normative authority, task priority, or verdict. |
| `governance/reviews/` | Each independent review: scope, evidence-backed findings, corrections, and disposition. | Chief Architect as current review authority. | Chief Architect under the current approved model, independent from candidate authorship. | Review authority preserves the disposition; clerical maintenance cannot alter findings or verdict. | Silent amendment of normative sources or production of its own implementation evidence. |
| `governance/retrospectives/` | Each future retrospective: historical learning and improvement proposals after governing events. | Lead Engineer under a future active task until approved governance changes the current model. | Chief Architect where the active task requires architectural review. | Lead Engineer through an authorized task; later edits cannot rewrite source history. | Retroactive authority, rewritten evidence, or automatic normative change. |

The repository control plane under `architecture/` continues to own the
architectural roadmap, single active backlog task, architecture history, and
architecture process. M7 does not silently transfer those responsibilities.

# 4. Reserved Future Sections

The structure reserves these stages without defining their substance:

| Stage | Reserved artifact class | Required location |
| --- | --- | --- |
| M7.2 | Constitution | `governance/normative/` |
| M7.3 | Organizational Model | `governance/normative/` |
| M7.4 | Development Lifecycle | `governance/normative/` |
| M7.5 | Autonomous Development Protocol | `governance/normative/` |
| M7.6 | Retrospective | `governance/retrospectives/` |
| M7.7 | Governance Review | `governance/reviews/` |

M7.2–M7.6 documents may be created only when their stage is the single active
task and dependencies have acquired the authority required by that task. M7.2
cannot begin until M7.1 is canonicalized. M7.7 may review M7 only after every
required prior stage has an explicit disposition.

# 5. Artifact-Class Separation

## 5.1 Normative artifacts

Normative artifacts state durable governance obligations within their approved
scope. Draft or review-ready normative artifacts are not approved authority.
Only an explicit independent review disposition can authorize dependency use.

## 5.2 Orders

An order scopes one active unit of work. It cites its authority and dependencies
but cannot create permanent governance meaning merely by instructing work.
Completion of an order does not approve its output.

## 5.3 Evidence

Evidence records what was inspected, executed, observed, or compared. It must be
attributable to exact repository artifacts or revisions. Evidence can support a
claim; it cannot grant authority or issue a verdict.

## 5.4 Reviews

A review evaluates a bounded artifact against named dependencies and evidence.
It records an explicit disposition and any finite corrections. A definition
author cannot approve the same definition through its creation commit.

## 5.5 Retrospectives

A retrospective records lessons from completed governance activity. It is
historical and advisory unless a later, separately ordered normative change
adopts a proposal through review.

Mixing two artifact classes in one file is prohibited unless a future approved
normative contract explicitly defines a composite artifact and preserves
independent ownership, status, and reviewability.

# 6. Naming Rules

1. Every substantive M7 artifact begins with its milestone identifier.
2. A normative definition uses `M7.n - <Canonical Title>.md`.
3. An order uses `M7.n - <Title> Order.md`.
4. An Architecture Review uses `M7.n - <Title> Architecture Review.md`; a
   Canonical Review uses `M7.n - <Title> Canonical Review.md`.
5. Evidence uses `M7.n - <Subject> Evidence.md`.
6. A retrospective uses `M7.n - <Subject> Retrospective.md`.
7. Names describe responsibility, not tools, people, chat threads, or temporary
   locations.
8. Renaming does not change artifact identity, authority, status, or history.
9. A filename cannot imply approval not present in the artifact status and
   review record.
10. Placeholder indexes may not use the name of a future substantive artifact.

# 7. Authority and Status Lifecycle

Every substantive artifact declares one explicit status appropriate to its
class.

For normative definitions and structure contracts, these terms have distinct
meanings:

- **Candidate** describes an artifact that has been authored but has not
  completed its required review lifecycle. Candidate is an authority condition,
  not a substitute for the explicit statuses below.
- **Architecture Approved** is a review disposition. It confirms satisfaction
  of the architectural task but is not itself an artifact status and does not
  grant canonical authority.
- **Approved for dependency use** is an artifact status granted only when an
  independent Architecture Review explicitly permits dependent use and the task
  does not require canonical authority first.
- **Canonical** is an artifact status acquired only after a positive Canonical
  Review and a separate repository canonicalization transition. Canonical status
  includes dependency use within the artifact's approved scope.

The permitted definition statuses are:

```text
Ready for Architecture Definition
    ↓
Ready for Architecture Review
    ├── Requires Corrections ──→ Ready for Architecture Review
    ↓ positive Architecture Review
Approved for dependency use
    or
Ready for Canonical Review
    ├── Requires Corrections ──→ Ready for Canonical Review
    ↓ positive Canonical Review plus separate canonicalization
Canonical
```

`Requires Corrections` is the sole correction status for a definition under the
current Chief Architect process. The review record must identify whether the
corrected artifact returns to Architecture Review or Canonical Review. The
backlog, candidate, and indexes must report that status consistently without
implying approval.

For M7.1, the completed sequence was:

```text
Ready for Architecture Review
    ↓ positive Architecture Review
Ready for Canonical Review
    ↓ positive Canonical Review
Separate canonicalization repository change
    ↓
Canonical and eligible as the M7.2 dependency
```

Architecture Review and Canonical Review records for M7 reside in
`governance/reviews/`. Review evidence resides in `governance/evidence/`. The
Chief Architect retains both review gates and transition authority under the
current approved model. Orders, evidence, reviews, and retrospectives declare
class-appropriate states rather than borrowing normative approval.

Rules:

- status changes require repository evidence;
- a commit alone does not grant approval;
- an index reports status but does not create it;
- no artifact may report a later state than its review and transition evidence;
- superseded and historical artifacts remain discoverable;
- only one active M7 stage may appear in `architecture/BACKLOG.md`;
- M7 remains Active until M7.7 records its authorized final disposition and the
  roadmap is reconciled.

# 8. Index Rules

1. `governance/README.md` is self-identifying through its title, status, and
   authority block; it does not require a circular self-entry. It indexes every
   other substantive Governance Layer artifact.
2. Each child directory index lists only artifacts belonging to its class.
3. An index entry includes milestone, title, class, status, and relative link.
4. Draft placeholders are not listed as substantive artifacts.
5. Review entries link both the review and reviewed artifact.
6. Evidence entries identify the review or claim they support.
7. Superseded entries remain indexed with their disposition.
8. Missing, broken, ambiguous, or cross-class links are non-conformant.
9. Index text cannot broaden the linked artifact's authority.

The completed M7.1 artifact set consists of this structure design, its opening
order, correction evidence, Architecture Review, and Canonical Review. M7.2 is
Closed with one Canonical Constitution, its completed order, accepted definition
and correction evidence, and completed Architecture and Canonical Reviews. M7.3
is Closed with one Canonical Organizational Model, its completed order, accepted
definition evidence, and completed Architecture and Canonical Reviews. M7.4 is
Closed with one Canonical Development Lifecycle, its completed order, accepted
definition evidence, and completed Architecture and Canonical Reviews. M7.5 is
Closed with one Canonical Autonomous Development Protocol, its completed order,
accepted definition evidence, and completed Architecture and Canonical Reviews.
M7.6 is Active with one bounded opening order and no substantive retrospective
artifact. Child indexes list each artifact only in its applicable class; M7.7
remains without substantive artifacts.

# 9. Dependency Direction

The permitted authority and evidence flow is:

```text
Approved architecture and governance with the required reviewed authority
    ↓ constrain
Active order
    ↓ scopes
Definition or governed work
    ↓ produces
Evidence
    ↓ supports
Independent review
    ↓ records disposition
Architecture control plane and Governance indexes
    ↓ report transition
Later dependent work
```

Retrospectives consume completed records and may propose later orders. They do
not flow backward to alter evidence, reviews, or normative sources.

Dependency rules:

1. lower artifact classes cannot redefine an upstream source;
2. an order cannot depend on an unapproved normative definition except to
   review or correct that definition;
3. evidence cannot depend on a desired verdict;
4. a review cannot cite itself as implementation evidence;
5. indexes depend on artifacts, dispositions, and transition evidence, never
   the reverse;
6. future M7 stages depend on positive review of their required predecessors;
7. M7 governance may constrain future work but cannot reinterpret approved M6
   professional or presentation meaning.

# 10. Repository-Truth Rule

Repository records are the only authoritative source of governance state.

Prompts, chat messages, model memory, meeting recollection, summaries, and
uncommitted local descriptions have no governance authority. They become
effective only when an authorized order, definition, evidence record, review,
status transition, or journal entry is recorded in its proper repository
location.

When chat memory conflicts with repository evidence:

1. stop deriving state from chat;
2. inspect the canonical document, review record, roadmap, backlog, journal, and
   Git history;
3. record any real inconsistency as an explicit correction task;
4. never silently edit history to match recollection.

# 11. Structural Invariants

1. The Governance Layer has one designated root; that root becomes canonical
   only through the defined review and canonicalization lifecycle.
2. The root index is self-identifying and the sole semantic owner of M7
   directory structure.
3. Every artifact belongs to exactly one primary artifact class.
4. Normative definitions, orders, evidence, reviews, and retrospectives remain
   structurally separate.
5. Child indexes create no future substantive governance contract.
6. Every directory has one declared ownership boundary.
7. Every substantive artifact except the self-identifying root index is indexed.
8. Every index entry resolves to a repository artifact.
9. Every artifact status is explicit and evidence-consistent.
10. Exactly one M7 stage may be active.
11. Definitions cannot approve themselves.
12. Evidence cannot issue verdicts.
13. Reviews cannot silently amend normative sources.
14. Orders cannot become durable law by repetition.
15. Retrospectives cannot rewrite history.
16. Dependency direction cannot be reversed.
17. Chat memory has no governance authority.
18. Git history remains attributable and append-preserved.
19. M7 does not alter approved M6 ownership.
20. M7.1 defines structure only and no M7.2–M7.6 substance.

# 12. Validation and Completion Criteria

M7.1 satisfied its completion gate when:

1. the canonical Governance Layer root and tree exist;
2. every required artifact class has an explicit ownership boundary;
3. normative, order, evidence, review, and retrospective artifacts are
   separated;
4. naming, status, and indexing rules are deterministic;
5. dependency direction and repository-truth authority are explicit;
6. M7.2–M7.7 locations are reserved without defining their substance;
7. before transition, the Architecture control plane reported M7 Active and
   M7.1 as the only active stage;
8. links and status declarations are consistent;
9. no implementation code or platform decision is introduced;
10. an independent Architecture Review and subsequent Canonical Review remain
    required before canonicalization.

## Final Architecture Disposition

```text
Canonical — M7.1 Closed
```

The independent Architecture Review and Canonical Review approved exact revision
`2435a437a99f921d9994288930b4aa8177612f02`. This separate reconciliation records
canonicalization and closes M7.1. M7.2 may now depend on this structure within
its approved scope.
