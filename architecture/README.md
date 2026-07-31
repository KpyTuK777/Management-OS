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
  Organizational Model, and M7.4 Development Lifecycle are Canonical; M7.5
  Autonomous Development Protocol is the sole active stage, has completed
  Canonical Review, and awaits a separate canonicalization transition.
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
