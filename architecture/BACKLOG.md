# Architecture Backlog

This file contains exactly one active architectural task.

## Current Phase

```text
Phase III-B — Operational Core / M6 Product Realization
```

## Current Milestone

```text
M6 — Canonical Operational Design System
```

## Current Task

```text
Architecture Review — M6.5 Presentation State Model
```

## Dependencies

- Canonical Management Model — Confirmed.
- M6 Canonical Operational Design System Charter — Architecture Definition
  complete.
- M6 Canonical Design Object Model — Architecture Definition complete.
- M6 Canonical Design Semantics — Approved.
- M6.3 Canonical Rendering Model — Approved.
- M6.4 Semantic Token Architecture — Approved.
- M6.5 Presentation State Model — Architecture Definition prepared for review.

## Expected Output

An evidence-based Architecture Review disposition recorded in the repository:

```text
Approved for M6 dependency use
```

or:

```text
Approved with Required Corrections
```

The disposition must establish whether state purpose, ownership, lifecycle,
taxonomy, Rendering Node applicability, permitted and invalid presentation state
transitions, cross-dimension consistency, Platform Runtime boundary, invariants,
and conformance criteria are complete.

## Owner

```text
Chief Architect
```

The Lead Engineer prepares the review evidence and applies only corrections
explicitly returned by the review.

## Status

```text
Ready for Architecture Review
```

## Definition of Done

- The document is reviewed against the M6 Charter, Canonical Design Object Model,
  Canonical Design Semantics, Canonical Rendering Model, and Semantic Token
  Architecture.
- PSD-01–PSD-09 taxonomy, state descriptor, lifecycle, applicability,
  presentation state transition, invalidity, and consistency rules are complete.
- Every RN-01–RN-11 kind has deterministic state-dimension applicability.
- Presentation State Model and Platform Runtime ownership remain mutually
  exclusive.
- State changes modify no Design Object, Semantic Role, Rendering Node, Semantic
  Token, canonical meaning, information residency, Navigation, authority,
  lifecycle, Operational Memory, Current Situation, or Context Envelope.
- The Architecture Review verdict and evidence are recorded in the repository.
- All required corrections are absent or resolved.
- `ROADMAP.md` is advanced to the approved next stage.
- This file is replaced with exactly one task for that stage.
