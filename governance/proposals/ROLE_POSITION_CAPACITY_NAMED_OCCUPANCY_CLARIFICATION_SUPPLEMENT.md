# Role position capacity and named occupancy clarification supplement

## Status

- State: PREPARED FOR HUMAN CONSIDERATION
- Controls: `ROLE_POSITION_CAPACITY_CANONICAL_CLARIFICATION_PROPOSAL.md`
- Effect: clarification only; no adopted meaning, canonical mutation, implementation authority, or runtime activation

## Why this supplement is needed

The base proposal correctly identifies that one Role may require multiple planned positions and prohibits duplicate Roles, fake Persons, and an ad hoc quantity field. The Northstar Home finding adds a necessary reconciliation: planned capacity, named occupancy, and vacancy must remain distinct while preserving the already adopted `role occupancy` relationship family and contribution-time history.

## Terms requiring decision

- **Role**: the organizational function, purpose, and expected responsibility. One Role identity must not be duplicated per person.
- **Planned capacity**: the governed number or set of positions intended for a Role within an organizational scope and effective interval. “Planned” must not silently mean approved, funded, hired, or observed.
- **Named occupancy**: a permitted Person’s effective-time occupancy relationship. It is not a Person attribute embedded in Role.
- **Vacancy**: a conclusion that an authorized position exists and is unoccupied for the relevant interval. Missing, unknown, restricted, stale, or incomplete occupancy data is not automatically a vacancy.

## Compatibility questions the selected representation and follow-on path must resolve

The first Decision needs the representation. If A or B is selected, it also needs whether capacity means planned, approved, funded, or observed; its authoritative owner/source; and effective-time scope. If B is selected, it must also decide whether Position occupancy is authoritative and direct Role occupancy derived, or define another single-authority reconciliation. The remaining questions constrain separately reviewed follow-on canonical-source, privacy, Interaction, Engineering, migration, and implementation work.

1. Does Position/Slot have stable identity, provenance, lifecycle, effective interval, correction lineage, and retirement semantics?
2. If Position/Slot exists, does a Person occupy the Position/Slot while `role occupancy` becomes a derived projection, or do both assertions exist with one explicitly authoritative and the other derived?
3. If no Position identity exists, is planned capacity a temporal Role attribute or another governed assertion, and how are occupancy and vacancy represented without slot identity?
4. What organizational scope owns capacity: a Role-in-Department assignment, Role identity, Department, or an authoritative workforce source?
5. Which source/update authority may declare planned, approved, funded, filled, or retired state?
6. How do effective time, correction, supersession, merge/split, and Role or Department movement preserve history?
7. How do restricted or partial Person visibility and unknown occupancy affect Department/Organization aggregate counts?
8. How do existing Role records migrate without inventing capacity, vacancy, or Person records?
9. How does InformationContribution retain its contribution-time Role/Department snapshot if later Position or occupancy state changes?

## Representation options retained for human consideration

### Option A — temporal planned-capacity assertion on a Role-in-Department scope

Preserve direct Person → Role occupancy. Add no Position identity. Capacity is a governed temporal assertion attached to the Role’s organizational scope.

Trade-off: minimal model and migration, but it cannot identify or track individual positions and may only derive aggregate vacancy when occupancy completeness and visibility are authoritative.

### Option B — governed Position/Slot identity

Create a distinct organizational Position/Slot identity associated with one Role and Department for an effective interval. A permitted Person occupies the Position/Slot. The Decision must explicitly reconcile the existing direct role-occupancy family as authoritative, derived, or compatibility projection.

Trade-off: supports position lifecycle and truthful per-slot vacancy, but introduces new canonical identity, temporal, migration, and policy obligations.

### Option D — defer capacity representation

Keep planned capacity, Position/Slot, and derived vacancy unavailable. Preserve the already adopted Person → Role occupancy semantics and its current PARTIAL/runtime-unavailable status. Continue people-free Role modelling without numerical capacity or vacancy claims.

## Separate source/custody axis

After selecting A or B, the Decision must separately identify whether the chosen representation is:

- Operating-Model-owned under accountable-human update authority where no higher source exists;
- source-backed and reconciled from an authoritative workforce/planning source; or
- intentionally unavailable until such a source is authorized.

Source-backed is not a third representation option: a source-backed model must still reconcile to either the A or B representation.

## Non-negotiable invariants

- Role ≠ Position/Capacity ≠ Person.
- No duplicate Role per worker.
- No Person name embedded as a Role field.
- No vacancy inferred from absent, hidden, restricted, incomplete, or stale occupancy.
- No current occupancy/capacity change rewrites historical InformationContribution context.
- No named-person runtime, search, Person Workbench data, or InformationContribution activation follows from this clarification alone.
- No scoring, surveillance, dossier, or employment judgment.

## Minimum Decision requested

Select A, B, or D. For A or B, state the authoritative owner/source axis plus whether capacity means planned, approved, funded, or observed, and define its effective-time scope. This Decision does not need to settle aggregate-release UI, protected-count disclosure, migration mechanics, or successor implementation authority; those belong to separately reviewed follow-on work. Do not imply implementation authority.
