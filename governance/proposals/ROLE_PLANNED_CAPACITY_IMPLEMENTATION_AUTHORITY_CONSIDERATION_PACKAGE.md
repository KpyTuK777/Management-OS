# Role planned capacity implementation authority consideration package

## Purpose

This neutral package presents one bounded canonical-source and local implementation execution for temporal planned Role capacity. It does not select an option or authorize execution by repository presence.

## Fixed consideration set

| Artifact | Commit | Blob |
| --- | --- | --- |
| `governance/proposals/ROLE_POSITION_CAPACITY_AUTHORITY_DECISION.md` | `d1ad48beb5ea7e5aea28d9f9fa79594205bc26e3` | `fc89027d287914459f5e4dc0183a3e33de9c4be1` |
| `governance/proposals/ROLE_PLANNED_CAPACITY_SUCCESSOR_READINESS.md` | `38c53f68afcf4e3cdf39ed548b7993badd1e7b14` | `096abb591dd4d44945fa6dde97e9c2eeba4c3478` |
| `governance/reviews/ROLE_CAPACITY_AND_NAMED_PERSON_PREPARATION_CRITICAL_REVIEW.md` | `eda718396b208571bc394b9027c306a1febae0f0` | `ed3a72d8b00a75ebeec96911a645355176f974b2` |
| `governance/reviews/ROLE_CAPACITY_AND_NAMED_PERSON_AUTHORITY_PACKAGES_CRITICAL_REVIEW.md` | `1ec4632d24c17f4d4dc1cadd149b82d9abce6baa` | `e3ded9ed78894ee8fc23c2e00055056dc73b4e26` |

The readiness contract controls implementation detail. The adopted Decision controls meaning and non-effects.

## Proposed authority effect

If authorized, one bounded cycle may:

1. amend `docs/OPERATIONAL_OPERATING_MODEL.md` only as needed to establish Role Planned Capacity Assertion under existing Operating Model assertion authority;
2. align only directly dependent Product/Interaction/Engineering documentation where the fixed readiness contract requires an explicit cross-reference;
3. implement schema-versioned temporal planned-capacity assertions in the browser-local Operating Model repository;
4. implement Department and Role Workbench presentation, creation, supersession, correction, dispute, and history interaction;
5. implement Role-move preview/end-or-cancel/new-scope behavior;
6. migrate existing workspaces without inventing capacity;
7. verify persistence, recovery, privacy-safe wording, responsive behavior, accessibility, and regressions;
8. produce evidence, independent implementation review, bounded corrections, repeat review, and a clean commit.

This is faithful source establishment and implementation of the adopted PLANNED meaning. It does not authorize new Position, Person, occupancy, vacancy, staffing, funding, or approval semantics.

## Required zero-rule sub-decision

Authorization must select exactly one rule:

- **Z1 — positive current assertion:** `plannedCapacity` must be a positive whole number. A plan of none is represented by ending/withdrawing the assertion; absence remains “not represented”, not zero.
- **Z2 — explicit zero plan:** `plannedCapacity` may be zero as an explicit qualified plan for no positions in that Role/scope/interval. Zero remains distinct from absence, vacancy, occupancy, Role deletion, and withdrawal.

The implementation and tests must follow the selected rule. Neither rule permits negative or fractional values.

## Product and interaction ceiling

- Primary Structure Map remains Organization → Department → nested Department.
- Department composition may show Role plus honest planned-capacity wording.
- Role Workbench may show current/historical plan and bounded mutation/history controls.
- No “employees”, “occupied”, “vacant”, “approved”, or “funded” wording is derived.
- No aggregate organization headcount is introduced.
- Responsive and accessible behavior follows the fixed readiness contract.
- The already-authorized Department-only Map projection and semantic inline-SVG rail refinement remain separate ordinary corrections; this package neither revokes nor silently executes them.

## Engineering and persistence ceiling

- existing semantic HTML/CSS/plain JavaScript/browser APIs only;
- dedicated `roleCapacityAssertions` collection with stable assertion identity;
- schema version advance, copy-on-write/restartable migration, checksums, commit markers, read-back verification, retained safe generation, deterministic recovery, and rollback;
- explicit Role/Department-or-Organization scope, PLANNED meaning, value, qualification, effective interval, recording time, ownership, lifecycle, and lineage;
- no Role `details.quantity`, Position element, Person element, occupancy assertion, or vacancy field;
- no conversion of Role compatibility `containment` rows into department membership;
- no change to Investigation v1 storage;
- no export/import expansion.

## Permitted files

Purpose-bounded changes may touch:

- `docs/OPERATIONAL_OPERATING_MODEL.md` for the exact adopted canonical-source clarification;
- directly dependent capacity-specific governance cross-references created by this authority path;
- `index.html`, `css/organization-workspace.css`, `js/operating-model-repository.js`, `js/organization-workspace.js`;
- capacity-specific tests and `governance/evidence/`;
- implementation critical-review/correction records.

ROADMAP, BACKLOG, unrelated canonical sources, Investigation semantics, dependencies, framework/build configuration, backend, database, integration, and deployment remain protected.

## Required gates

All verification gates in `ROLE_PLANNED_CAPACITY_SUCCESSOR_READINESS.md` are mandatory, including real `index.html` desktop/laptop/390px journeys, temporal history, Role movement, migration, corruption/recovery, keyboard/accessibility, and proof that no Person/Position/occupancy/vacancy state or wording is introduced.

Implementation review must be logically independent and followed by repeat review after corrections. Evidence must classify every changed file and record browser/version, viewport, storage precondition, journey, result, console/runtime errors, and screenshots where layout meaning matters.

## Decision options

### A — authorize with Z1

Authorize the bounded execution with positive current assertions and end/withdraw for no active plan.

### B — authorize with Z2

Authorize the bounded execution with explicit qualified zero plans distinct from absence and withdrawal.

### C — revise

Return the package for a specified bounded correction. No execution begins.

### D — defer

Keep planned capacity unimplemented. Existing Roles and people-free Product remain unchanged.

## Exact indispensable human Decision

> Should Management OS authorize the fixed reviewed Role Planned Capacity implementation execution, including the bounded canonical-source amendment and local schema/Product/Interaction/Engineering work, using zero rule Z1 or Z2?

The accountable human must select A, B, C, or D and provide attributable rationale.

## Explicit stops and non-effects

Execution stops before any need for Position/Slot identity, Person runtime, named occupancy, vacancy/completeness rules, InformationContribution, backend, database, integration, dependency, framework migration, deployment, Watson, ROADMAP/BACKLOG change, or broader canonical/Product/Interaction/Engineering meaning.

This package does not authorize any named-person capability.
