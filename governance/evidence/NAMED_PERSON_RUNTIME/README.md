# Named Person and planned Role capacity — execution evidence

Authority binding: implementation follows the attributable Z1 and R365 Decisions
recorded in `governance/proposals/ROLE_PLANNED_CAPACITY_IMPLEMENTATION_AUTHORITY_DECISION.md`
and `governance/proposals/NAMED_PERSON_RUNTIME_IMPLEMENTATION_AUTHORITY_DECISION.md`.

## Real-entry journey

`tests/named-person-runtime.browser.html` enters through the real `index.html` and
creates Northstar Home, Sales, Online Sales, two Roles, planned capacities of 1
and 6, and seven named people. It verifies Department-only Structure topology,
Department team composition, separate immutable Person identity, separate
Role-occupancy and Department-membership assertions, reassignment history,
persistence, responsive layout, erasure across retained generations, and
non-resurrection after reload.

The same executable contract rejects zero, negative, fractional, and malformed
capacity values; exercises correction, dispute, end-on-Role-move, and absence in
the new Department; verifies R365 expiry suspension and purpose filtering; and
rejects recovery candidates covered by an erasure marker.

`tests/living-organizational-model.browser.html` is the broader real-entry
Organization journey. It now asserts that primary Structure renders Department
topology only while Role truth remains available in Department composition.

## Boundaries exercised

- no Person is stored inside a Role element;
- no Person is exposed through global Organization search;
- no occupancy, vacancy, headcount, approval, funding, or Position identity is
  inferred from planned capacity;
- expired, restricted, redacted, and deleted people are filtered before ordinary
  team/search projection;
- deletion removes reconstructive names from every retained local generation and
  prevents recovery from resurrecting a marked Person;
- InformationContribution, Person-as-Source, Evidence attribution, HR fields,
  scoring, sensitive traits, backend, integration, deployment, and multi-user
  security remain outside this execution.

## Environment and result

Verified locally in headless Microsoft Edge on 2026-08-10 using the real file
entry point. The integrated named-person contract completed with `RESULT PASS`.
Repository and existing Organization regression journeys were also exercised;
pre-existing unrelated failures remain separately classified rather than being
weakened by this change.
