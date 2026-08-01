# Architecture

This directory is the repository control plane for product architecture. It
contains the engineering process, authoritative roadmap, current architectural
task, governance status, and links to architectural decisions and canonical
product models.

GitHub is the source of truth for collaboration between the Product Owner,
Chief Architect, and Lead Engineer. A prompt, conversation, or meeting becomes
effective architectural work only after its decision, task, status, or evidence
is recorded in the repository.

## Control documents

- [CHIEF_ARCHITECT.md](CHIEF_ARCHITECT.md) defines roles, handoffs, reviews, and
  stage-transition authority.
- [ROADMAP.md](ROADMAP.md) is the single authoritative architectural roadmap.
- [BACKLOG.md](BACKLOG.md) contains exactly one active architectural task.
- [JOURNAL.md](JOURNAL.md) is the evidence-backed chronological record of
  architecture definitions, reviews, dispositions, and transitions.
- [M7 Governance Layer](../governance/README.md) is the canonical M7 structure
  and index for normative governance, orders, evidence, reviews, and
  retrospectives. M7.1 Governance Structure, M7.2 Constitution, and M7.3
  Organizational Model, M7.4 Development Lifecycle, and M7.5 Autonomous
  Development Protocol are Canonical; M7.6 Retrospective is Closed and
  Canonical as an institutional historical record; M7.7 Governance Review is
  Canonical and Closed; and Milestone M7 is Completed / Closed. No successor
  authority is implied by M7 completion.
- [M8 Architecture Vision](M8_ARCHITECTURE_VISION.md) is the independently
  Architecture Approved basis for the open M8 milestone.
- [M8.1 Architectural Identity and Baseline Mapping](M8.1_ARCHITECTURAL_IDENTITY_AND_BASELINE_MAPPING.md)
  is the Canonical / Closed system-first architectural identity and baseline for
  M8.
- [M8.1 Architecture Review Correction Evidence](M8.1_ARCHITECTURE_REVIEW_CORRECTION_EVIDENCE.md)
  preserves the attributable resolution of all five prior findings.
- [M8.1 Architectural Identity and Baseline Mapping Architecture Review](../governance/reviews/M8.1%20-%20Architectural%20Identity%20and%20Baseline%20Mapping%20Architecture%20Review.md)
  records the Architect Council's independent approval and the Canonical Review
  gate without canonicalization, closure, or M8.2 opening.
- [M8.1 Architectural Identity and Baseline Mapping Canonical Review](../governance/reviews/M8.1%20-%20Architectural%20Identity%20and%20Baseline%20Mapping%20Canonical%20Review.md)
  records the `Canonical` disposition and approval for a separate
  canonicalization transition; it remains preserved as review evidence distinct
  from the later transition.
- [M8.2 Capability and Ownership Coherence Order](../governance/orders/M8.2%20-%20Capability%20and%20Ownership%20Coherence%20Order.md)
  is scope fulfilled and grants no continuing or M8.3 authority.
- [M8.2 Capability and Ownership Coherence](M8.2_CAPABILITY_AND_OWNERSHIP_COHERENCE.md)
  is the Canonical / Closed implementation-independent capability and ownership
  model.
- [M8.2 Capability and Ownership Coherence Architecture Review](../governance/reviews/M8.2%20-%20Capability%20and%20Ownership%20Coherence%20Architecture%20Review.md)
  records the Architect Council's independent approval of the fixed candidate
  and its return to the Canonical Review gate.
- [M8.2 Capability and Ownership Coherence Canonical Review](../governance/reviews/M8.2%20-%20Capability%20and%20Ownership%20Coherence%20Canonical%20Review.md)
  records the `Canonical` disposition and approval for a separate authority
  transition; it remains preserved as review evidence distinct from the later
  transition.
- [M8.3 Information, Evidence, and Handoff Architecture Order](../governance/orders/M8.3%20-%20Information%2C%20Evidence%2C%20and%20Handoff%20Architecture%20Order.md)
  is scope fulfilled and grants no continuing or M8.4 authority.
- [M8.3 Information, Evidence, and Handoff Architecture](M8.3_INFORMATION_EVIDENCE_AND_HANDOFF_ARCHITECTURE.md)
  defines the implementation-independent product-wide semantic flow, evidence,
  context, authority-preserving handoff, provenance, uncertainty, traceability,
  trust, and interruption model and is Canonical / Closed.
- [M8.3 Information, Evidence, and Handoff Architecture Review](../governance/reviews/M8.3%20-%20Information%2C%20Evidence%2C%20and%20Handoff%20Architecture%20Review.md)
  records the Architect Council's independent approval of the fixed candidate
  and its return to the Canonical Review gate.
- [M8.3 Information, Evidence, and Handoff Architecture Canonical Review](../governance/reviews/M8.3%20-%20Information%2C%20Evidence%2C%20and%20Handoff%20Architecture%20Canonical%20Review.md)
  records the `Canonical` disposition and approval for a separate authority
  transition; it remains preserved as review evidence distinct from the later
  transition.
- [M8.4 Gap and Risk Assessment Order](../governance/orders/M8.4%20-%20Gap%20and%20Risk%20Assessment%20Order.md)
  opens M8.4 as the sole active stage and establishes only its objective,
  dependencies, exclusions, and completion boundary.
- [M8.4 Gap and Risk Assessment](M8.4_GAP_AND_RISK_ASSESSMENT.md)
  defines the implementation-independent product-wide architectural assessment,
  gap and risk registers, blocking and residual-risk models, findings, and
  advisory recommendations and is Architecture Approved at `Ready for Canonical
  Review`, without canonical authority or closure.
- [M8.4 Architecture Review Correction Evidence](M8.4_ARCHITECTURE_REVIEW_CORRECTION_EVIDENCE.md)
  records the bounded resolution of `AR-M8.4-01` without changing any register,
  recommendation, classification, evidence reference, severity, or authority.
- [M8.4 Gap and Risk Assessment Architecture Review](../governance/reviews/M8.4%20-%20Gap%20and%20Risk%20Assessment%20Architecture%20Review.md)
  records the Architect Council's repeat independent review, resolution of
  `AR-M8.4-01`, absence of regression, Architecture Approval, and return to the
  Canonical Review gate.
- [M8 Architecture Vision Architecture Review](../governance/reviews/M8%20-%20Architecture%20Vision%20Architecture%20Review.md)
  preserves the exact reviewed revision, findings, advisories, and opening
  authorization.
- [M8 Milestone Opening Order](../governance/orders/M8%20-%20Milestone%20Opening%20Order.md)
  records the bounded opening direction without defining future architecture.
- [M8.1 Architectural Identity and Baseline Mapping Order](../governance/orders/M8.1%20-%20Architectural%20Identity%20and%20Baseline%20Mapping%20Order.md)
  records the completed, scope-fulfilled M8.1 definition direction.
- [Canonical Management Model](../images/17-design-principles/README.md) contains
  the canonical professional and experience models consumed by M6.
- [Architecture Decision Records](../docs/adr/README.md) preserve durable
  technical decisions and their rationale.

## Authority order

When artifacts appear to conflict, apply this order:

1. Canonical product and management models own professional meaning.
2. Approved architecture documents own their declared architectural scope.
3. `CHIEF_ARCHITECT.md` owns the architecture process.
4. `ROADMAP.md` owns milestone sequence and phase status.
5. `BACKLOG.md` owns the current task but cannot broaden its roadmap milestone.
6. Delivery trackers and historical plans report execution; they do not replace
   architectural authority.

## Update discipline

- Record architectural decisions and review outcomes in the repository.
- Update the roadmap after every closed architectural milestone.
- Replace the single backlog task only when it is completed, rejected, or
  explicitly reprioritized by the Chief Architect.
- Preserve history through Git and ADRs; do not silently rewrite an approved
  decision.
- Keep status, dependencies, ownership, and Definition of Done explicit.
