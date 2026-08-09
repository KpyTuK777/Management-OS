# Role position capacity canonical clarification proposal

## Status

- State: BOUNDED CLARIFICATION REQUIRED
- Prepared from Product Owner experiential review of Northstar Home
- Repository baseline: `3ae51719063cdb1effa4052af89ed5ea2b0ef525`
- Effect: no canonical mutation, implementation authority, repository transition, or ROADMAP/BACKLOG change

## Observed Product need

A real organization may define one Role with more than one planned position, for example:

- Online Sales Manager — six positions.

The current people-free runtime can represent the Role but cannot represent the planned number of positions without either losing the number or duplicating the Role identity.

## Existing authority boundary

The adopted Living Organizational Model distinguishes Role from named-person occupancy and keeps named-person references and occupancy partial/unavailable. It authorizes people-free Role construction, but the reviewed canonical and Engineering decisions do not define planned position capacity, its identity, lifecycle, temporal meaning, correction authority, or relationship to occupancy.

Therefore this cycle must not add an ad hoc `quantity`, `headcount`, or `capacity` field to Role details and must not create fake Person or duplicate Role records.

## Bounded clarification requested

The accountable Product/canonical authority should decide whether planned position capacity is:

1. an attribute of a Role within an organizational scope;
2. a distinct governed Position/Slot identity related to a Role;
3. a temporal organizational assertion; or
4. intentionally deferred until an authoritative people/workforce source is available.

The decision should also define:

- whether capacity is planned, approved, funded, or merely observed;
- effective time and history;
- correction/update authority and source ownership;
- whether capacity may exist without named occupancy;
- how unknown occupancy is represented without implying vacancies or employees;
- how aggregate Department and Organization projections avoid double counting;
- persistence and migration expectations for existing Role records.

## Safe Product language after future authorization

If authorized, a people-free projection may say “6 позицій” or “6 позицій · працівники ще не описані”. It must not say “6 працівників” unless named occupancy is both authorized and known.

## Explicit non-actions in this cycle

- no Role schema change;
- no capacity input;
- no Position or Person records;
- no occupancy activation;
- no duplicated Roles to simulate headcount;
- no ROADMAP/BACKLOG mutation.
