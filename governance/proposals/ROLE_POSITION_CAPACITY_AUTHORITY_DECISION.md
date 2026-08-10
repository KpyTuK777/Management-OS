# Role position capacity authority Decision

## Decision identity

- Decision date: 2026-08-10
- Accountable human: Serhii Horbachenko — Product Owner and accountable authority for Management OS
- Selected disposition: A — temporal planned-capacity assertion
- Decision state: RECORDED

## Fixed consideration package

- Artifact: `governance/proposals/ROLE_POSITION_CAPACITY_AUTHORITY_CONSIDERATION_PACKAGE.md`
- Commit: `654ad88a09f4f006e4203a7930e68eca392483f1`
- Blob: `3695c5ca4b8f34d7f83cc5f1ee314739ac11b6df`

## Controlling clarification supplement

- Artifact: `governance/proposals/ROLE_POSITION_CAPACITY_NAMED_OCCUPANCY_CLARIFICATION_SUPPLEMENT.md`
- Commit: `654ad88a09f4f006e4203a7930e68eca392483f1`
- Blob: `7313d9bad016a506c38f8ed491bf8fd4e5e6a07b`

## Attributable human Decision

I adopt planned Role capacity as a temporal, revision-aware assertion within the applicable Department/organizational scope.

The selected representation creates no separate Position/Slot identity. One Role may carry planned capacity greater than one without duplicating the Role.

For the current bounded local Product:

- capacity meaning is **PLANNED**;
- the authoritative source/update owner is the accountable human / Operating Model owner;
- capacity has an effective interval and revision/correction history;
- later changes do not rewrite prior applicable state;
- direct Person → Role occupancy remains the adopted occupancy semantics;
- named occupancy remains separate from planned capacity.

For example, “Online Sales Manager — planned capacity: 6” means only that the governed plan calls for six positions of that Role in scope. It does not establish six people, six Position identities, approval, funding, actual occupancy, or vacancy.

## Human rationale

The current Product needs to express multiple planned positions for one Role without duplicating Role identity. Separate governed Position/Slot identities would add lifecycle and identity complexity that current Product use has not justified.

A future need for individually identifiable Position/Slot lifecycle requires a separate governed clarification.

## Exact authority effect

This Decision adopts the minimum canonical/Product meaning of temporal planned Role capacity and authorizes preparation of the minimum successor canonical-source, Product, Interaction, Engineering, migration, persistence, privacy-safe projection, verification, and implementation-authority path.

It also authorizes separate preparation—but not activation—of a named-person runtime implementation-authority path.

## Non-effects

This Decision does not authorize:

- capacity runtime or UI implementation;
- Position/Slot identity;
- duplicate Roles or fake Persons;
- approved, funded, hired, occupied, or vacant claims;
- named Person creation/runtime or search;
- named occupancy UI;
- Person Workbench data;
- InformationContribution or Person-as-Source runtime;
- backend, database, integration, framework, dependency, deployment, Watson, ROADMAP, or BACKLOG change.

## Human attestation

I confirm this attributable Decision and select only disposition A within the fixed consideration package and controlling supplement. All stated non-effects and subsequent implementation/runtime Decision gates remain in force.
