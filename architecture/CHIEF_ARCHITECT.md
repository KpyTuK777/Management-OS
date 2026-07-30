# Chief Architect Operating Model

## Purpose

This document defines the repository-based engineering process for collaboration
between the Product Owner, Chief Architect, and Lead Engineer. It separates
business authority, architectural authority, and implementation responsibility
while keeping every handoff inspectable in GitHub.

## Roles

### Product Owner

The Product Owner is accountable for:

- product vision;
- business decisions;
- priorities;
- final approval.

The Product Owner does not participate in daily architectural work. The Product
Owner enters the process when product direction, business priority, scope, or
final approval requires a decision.

### Chief Architect

The Chief Architect is accountable for:

- the architectural roadmap;
- defining the next stage;
- architectural decisions;
- Architecture Review;
- Canonical Review;
- consistency across the whole system;
- defining Definition of Done;
- approving transitions between stages.

The Chief Architect does not use review authority to replace Product Owner
business authority or Lead Engineer implementation responsibility.

### Lead Engineer

The Lead Engineer is accountable for:

- implementing architectural tasks;
- creating and maintaining documents;
- maintaining repository structure;
- technical decisions inside approved architecture;
- preparing implementation, validation evidence, and review material for
  Architecture Review.

The Lead Engineer may propose architectural changes but may not silently expand
approved scope or declare an architecture milestone complete.

## Repository artifacts

| Artifact | Responsibility |
| --- | --- |
| `architecture/ROADMAP.md` | Chief Architect-owned milestone sequence and status |
| `architecture/BACKLOG.md` | The single active architectural task and its Definition of Done |
| Architecture documents | Normative definition of an approved architectural scope |
| Review records and document status | Evidence and disposition of Architecture or Canonical Review |
| ADRs | Durable technical decisions, alternatives, consequences, and supersession |
| Commits and pull requests | Traceable implementation and review units |

No prompt-only decision changes architecture, priority, ownership, maturity, or
stage status.

## Operating flow

1. The Product Owner records an objective or approved priority.
2. The Chief Architect places the corresponding milestone on the roadmap and
   defines one active backlog task with dependencies, owner, expected output,
   status, and Definition of Done.
3. The Lead Engineer implements only that task and records technical decisions
   and validation evidence in the repository.
4. The Chief Architect performs Architecture Review against the task's
   Definition of Done and all canonical dependencies.
5. Required corrections return as the single active backlog task. An approved
   result advances to Canonical Review only when canonical status is required.
6. The Chief Architect records the review verdict and approves the stage
   transition. The Product Owner provides final approval where product or
   business authority requires it.
7. The roadmap is updated and the backlog is replaced with exactly one task for
   the next approved stage.

## Review gates

### Architecture Review

Architecture Review confirms that the artifact:

- satisfies its approved objective and boundaries;
- is consistent with canonical dependencies;
- assigns no unauthorized ownership or authority;
- has explicit, testable completion criteria;
- is independent of implementation where its scope requires that independence;
- contains sufficient evidence for its claims.

The verdict is either approved for the next defined stage or approved with
required corrections. Required corrections must be finite and recorded.

### Canonical Review

Canonical Review is required before a candidate becomes a source of truth. It
confirms completeness, uniqueness of ownership, terminology consistency,
dependency integrity, implementation independence, and absence of unresolved
critical risk. Canonicalization is a separate repository change performed only
after approval.

## Stage-transition rules

- Only the Chief Architect approves an architectural stage transition.
- Only the Product Owner changes product priority or grants required final
  business approval.
- A commit records work; it does not by itself grant architectural or canonical
  status.
- A milestone closes only when its Definition of Done, validation, review
  disposition, repository status, and roadmap update agree.
- Work outside the active backlog task requires explicit reprioritization before
  implementation.

## Definition of Done

An architectural task is complete when its expected output exists in the
repository, all dependencies and constraints are satisfied, validation evidence
is recorded, the relevant review has an explicit disposition, no required
correction remains open, and both roadmap and backlog reflect the resulting
state.
