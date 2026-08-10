# Role planned capacity successor readiness

## Status

- State: PREPARED / NOT IMPLEMENTATION AUTHORITY
- Governing Decision: `ROLE_POSITION_CAPACITY_AUTHORITY_DECISION.md`
- Scope: minimum canonical-source, Product, Interaction, Engineering, migration, projection, and verification contract for temporal planned Role capacity

## Adopted meaning

Planned capacity is a governed, temporal assertion that a Role within one Department/organizational scope is planned for a whole-number capacity during an effective interval. Whether zero is invalid and represented by ending/withdrawing the assertion, or is a meaningful explicit zero-capacity plan, remains a visible choice for the successor implementation authority Decision.

It is not:

- Role identity;
- Position/Slot identity;
- Person identity;
- named or anonymous occupancy;
- approved, funded, hired, or observed headcount;
- vacancy;
- a performance, workload, productivity, or staffing-quality judgment.

## Minimum canonical-source clarification

The successor canonical-source amendment should add **Role Planned Capacity Assertion** under the existing Operational Operating Model assertion authority. It should define:

- stable assertion identity and Workspace scope;
- one referenced Role and one referenced Department or Organization scope;
- `meaning = planned`;
- whole-number `plannedCapacity`, with zero handling fixed by the successor implementation authority Decision;
- effective-from and optional effective-to;
- recording time;
- qualification (`known`, `unknown`, `incomplete`, `stale`, or `disputed`) where applicable;
- Operating-Model ownership and accountable-human source/update authority;
- correction/supersession/dispute/withdrawal/deletion lineage;
- projection filtering and history invariants.

This is an assertion with a scalar planned value and scoped references, not a fabricated relationship endpoint or Position element. It must not be stored as an unqualified `quantity` field inside Role details.

At most one unqualified current assertion may govern the same Role/Department scope at an evaluation time. Overlapping applicable assertions produce explicit disputed state; recency alone cannot choose a winner.

### Role movement between Department scopes

A Department-scoped capacity assertion never follows a Role silently when its organizational placement changes.

- the prior Role/Department assertion and interval remain historical;
- a move command must preview any current or future capacity assertions scoped to the old Department;
- completing the move requires an explicit choice to end/supersede those assertions at the move effective time or cancel the move;
- capacity in the new Department requires a new or explicitly reconfirmed assertion scoped to that Department;
- a future-effective move cannot rewrite current capacity before its effective time;
- the current compatibility `containment` row may supply command context only and does not become canonical department membership or rewrite capacity history.

## Product presentation

### Department composition

For each Role related to the Department, the Product may show:

- Role label;
- “Планова місткість: 6 позицій” when a current qualified assertion exists;
- “Планову місткість ще не визначено” when absent/unknown;
- explicit stale, incomplete, or disputed wording when applicable.

It must not show “6 працівників”, “зайнято”, or “вакантно” from capacity alone.

### Role Workbench

Role Workbench may provide a focused capacity section with current planned capacity, effective date/interval, qualification, source/update owner, and progressively disclosed history/correction information.

Role responsibility, processes, systems, reporting, and other work relationships remain separate.

### Organization Map

The primary Structure Map remains Organization → Department → nested Department. Capacity does not add Role nodes, Position nodes, badges, or aggregate headcount to the primary topology by default.

## Interaction contract

- Capacity creation/editing begins from a selected Role within Department or Role Workbench context.
- The form asks for planned positions, effective-from, optional effective-to, and qualification; “planned” is fixed and visible.
- The confirmation states that this does not represent people, occupancy, approval, funding, or vacancy.
- Replacing a later plan creates supersession with a new effective interval; correcting erroneous history creates correction lineage.
- Conflicting intervals are rejected or explicitly routed to disputed state; they are never silently overwritten.
- Current and historical values are visually distinct.
- Empty, unknown, stale, incomplete, and disputed states remain honest and keyboard/screen-reader understandable.
- Narrow screens retain inspection, safe editing/correction initiation, and meaning; they may stack rather than compress labels.

## Engineering contract

The proposed local implementation should:

1. advance the Operating Model schema version through copy-on-write/restartable migration;
2. add a dedicated `roleCapacityAssertions` collection rather than Position elements or Role `details.quantity`;
3. validate Workspace, Role, Department/Organization scope, whole-number value under the selected zero rule, meaning, interval, qualification, lifecycle, lineage, and owner metadata;
4. expose explicit commands for create, supersede, correct, dispute, and end/withdraw as authorized;
5. derive current capacity by evaluation time and authority before recency;
6. keep revisions immutable and preserve prior applicable assertions;
7. project through Department and Role queries without changing governed containment, department membership, or role occupancy;
8. exclude capacity from people counts and vacancy derivation;
9. preserve deterministic recovery, checksums, prior generation, and existing Investigation data;
10. keep indexes disposable and derived from the committed generation.

The implementation must also explicitly preserve the current Role-placement compatibility issue: runtime `containment` rows used for Role placement are not silently migrated into canonical department-membership assertions during this capacity cycle.

## Migration and compatibility

- Existing Role records migrate with no capacity assertion; absence means “not represented”, not zero.
- No default `1` is inferred.
- No Role duplication or Person/Position creation occurs.
- Existing `details.quantity`, if encountered in untrusted/corrupt input, is not promoted automatically.
- Schema migration is copy-on-write, read-back verified, restartable, and falls back to the last valid generation.
- Existing v1 Investigation storage remains untouched.

## Privacy-safe projection

Planned capacity is people-free organizational planning information. It may be projected without named identities, but authorization still precedes inclusion.

- no occupancy, vacancy, person count, or staffing sufficiency inference;
- no named-person linkage, search, export, or Person Workbench projection;
- no productivity, workload, performance, hiring, or workforce-quality judgment;
- no restricted relationship existence leakage through aggregate comparison.

## Verification gates

- create Role with no capacity and verify honest absence;
- create planned capacity 6 and verify one Role plus one capacity assertion;
- verify the separately selected zero rule: either reject zero and end/withdraw the assertion, or preserve an explicit zero plan without calling it vacancy;
- reload and recover the same current/history state;
- supersede 6 with 8 at a later effective time without rewriting 6;
- correct an erroneous assertion with attributable lineage;
- reject negative, fractional, malformed, cross-Workspace, missing Role, and missing scope values;
- prevent overlapping unqualified current intervals or surface dispute explicitly;
- move a Role before, during, and after capacity effective intervals; verify preview, explicit end/supersession or cancellation, new-scope reconfirmation, and unchanged historical scope;
- migrate existing Role records without inventing capacity;
- verify no Position/Person/occupancy/vacancy record or claim appears;
- verify Department and Role projections on desktop, laptop, and 390px;
- verify keyboard, focus, dialog, validation, screen-reader names, and live feedback;
- preserve Organization Map topology, search, drag/move, Investigation, Improvement, Historical Reader, persistence, and recovery journeys.

## Readiness disposition

Canonical/Product meaning is adopted. The successor canonical-source and implementation shape above is bounded and implementable in the current HTML/CSS/JavaScript and browser-local persistence architecture after a separate human implementation authority Decision.

No backend, database, integration, dependency, or named-person capability is required.
