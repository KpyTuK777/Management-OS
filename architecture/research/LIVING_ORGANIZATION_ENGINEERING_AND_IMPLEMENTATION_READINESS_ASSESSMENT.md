# Living Organization Engineering and implementation-readiness assessment

## State and authority

Preparation-only assessment. It selects no stack, schema, integration or deployment and authorizes no implementation.

## Interaction Architecture impact

The proposal fits the existing P1-led Interaction Architecture discipline and depends on P2–P6; it does not justify a seventh layer. Required future contracts are:

1. persistent organization context and return path across work modes;
2. progressive constructor creation, correction, unknown and history behavior;
3. Organization Map layer/filter/focus/inspection behavior;
4. Department and Person Workbench projection and privacy behavior;
5. context-aware Investigation and Improvement entry;
6. explicit cross-mode transition and back-reference behavior;
7. Person-as-Source search/browse/confirm/progressive-detail behavior;
8. accessible keyboard, focus, mobile and reduced-density behavior;
9. failure states for stale, inaccessible, conflicting, incomplete and historical data.

## Engineering responsibility model

Future Engineering Architecture must allocate, without merging semantic owners:

- stable identities for organization, department, role, person, system, process, SOP, KPI, artifact and work mode;
- bounded typed relationships rather than a universal node/edge ontology;
- bitemporal or equivalent effective-time/history handling for role and department membership;
- immutable contribution-time organizational-capacity snapshot plus links to current identities;
- source provenance, recorder identity and contribution identity as separate fields/relationships;
- projection services/read models for Map and Workbenches without duplicated truth;
- privacy classification, purpose limitation, access control, redaction and audit for people data;
- source adapters only after separate integration authority;
- event/Operational Memory handoff that preserves original facts and later interpretation separately;
- migration/version contracts for model evolution and historical inspection.

## Candidate responsibility boundaries

`InformationContribution` would link contributor identity, historical role/department context, contributed Artifact/statement, Investigation or Improvement context, contribution time, recording time, communication form, directness and limitations. Support/contradiction/supersession is a separate governed relationship. Department and Person histories query this same relationship; they do not copy its payload.

The Living Organizational Model Product surface should be an organization-scoped projection of the canonical Operational Operating Model plus governed references and explicitly classified manager observations, not a new aggregate authority or replacement master database. Each constituent retains its semantic owner and source authority. Updates after Stabilization must pass through the Operational Operating Model's governed mutation boundary; Operational Memory cannot automatically mutate current organizational truth.

## Privacy and human-safety requirements

- classify factual employment/role data, direct statements, manager observations, subjective impressions, confirmed events, unresolved claims and sensitive data distinctly;
- preserve source and interpretation identity;
- restrict sensitive fields by purpose and role;
- make correction and access history inspectable where policy permits;
- prohibit employee, credibility, trust, performance, motive and reputation scoring;
- prohibit Watson inference across protected or inaccessible data;
- retain contribution-time context without exposing unnecessary personal data in broad department/map views.

## Feasibility and sequencing

The composition is architecturally feasible with existing Artifact, Relationship, Matter, Investigation, Decision/Change, Monitoring and Operational Memory responsibilities. However, implementation is **NOT READY** because canonical adoption, authoritative Product scope, privacy policy, exact relationship semantics, source-of-truth allocation, Interaction contracts and Engineering Architecture remain undecided.

Minimum later sequence after positive canonical/Product Decisions:

1. canonical concept/reconciliation package;
2. reviewed Product slice selection (recommended first slice: minimal organization + one department + explicit unknowns; no integrations);
3. Interaction Architecture contract and accessibility review;
4. Engineering Architecture/data/privacy contract;
5. implementation-authority readiness assessment;
6. attributable implementation Decision and separate repository transition if required;
7. bounded implementation, evidence and independent review.

## Current MVP disposition

The current Investigation MVP remains valid and unchanged. It is an implemented Investigation slice that may later become one mode within a broader shell. No current route, workflow, data, canonical meaning or implementation authority is changed by this assessment.

ROADMAP.md and BACKLOG.md remain unchanged. Existing Investigation-first authority cannot be expanded into Organization Constructor, Improvement, Person-as-Source, persistence, privacy, integration or AI authority.

## Readiness disposition

- Canonical definition readiness: PREPARED FOR HUMAN CONSIDERATION, not adoption.
- Product definition readiness: DIRECTIONALLY PREPARED; first slice and privacy scope require human Decisions.
- Interaction readiness: NOT READY for implementation.
- Engineering readiness: NOT READY for implementation.
- Implementation authority: NONE.
