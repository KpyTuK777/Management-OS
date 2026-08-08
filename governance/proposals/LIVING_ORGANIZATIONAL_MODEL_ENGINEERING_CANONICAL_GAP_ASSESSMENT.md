# Living Organizational Model Engineering canonical-gap assessment

## Assessment state

- Starting HEAD: `d3b9b1ecfe8d5ba9b88d06648d9bd71bf62e1586`
- Fixed Interaction Architecture Decision: commit `d3b9b1ecfe8d5ba9b88d06648d9bd71bf62e1586`, blob `2e76c66a4a25ebbc4c2bb52a91bf71d92a342d87`
- Purpose: precheck for complete bounded Engineering Architecture preparation
- Disposition: **STOP — indispensable canonical clarification required before Engineering Architecture can be completed**
- Engineering Architecture adoption: not authorized
- Implementation: not authorized

This assessment records the mission’s explicit stop condition. It does not define missing canonical meaning, propose a physical schema, or authorize implementation.

## Repository evidence examined

- `docs/OPERATIONAL_OPERATING_MODEL.md`
- `docs/OPERATIONAL_SYSTEM_ARCHITECTURE.md`
- `docs/OPERATIONAL_MATTER_ARCHITECTURE.md`
- `docs/DATA_MODEL.md`
- `docs/CASE_EVIDENCE_ARCHITECTURE.md`
- `docs/OPERATIONAL_MEMORY_ARCHITECTURE.md`
- `docs/OWNER_IDENTITY_ARCHITECTURE.md`
- `docs/ARCHITECTURE.md`
- `js/artifact-model.js`
- `js/relationship-model.js`
- `js/authority-policy.js`
- `js/storage-migrations.js`
- `js/storage-utils.js`
- current Investigation browser persistence in `js/investigation-workbench.js`
- adopted Living Organizational Model, Improvement, People & Privacy, and Interaction Architecture Decisions and their reviewed supporting chains.

## Canonical support that already exists

The repository canonically establishes:

- the Operational Operating Model as the sole governed representation of how the organization operates;
- eligible organizational context including units, teams, roles, responsibilities, decision rights, reporting/escalation relationships, processes, systems, SOPs, measures, handoffs, information/material flows, controls, constraints, and external actors;
- source ownership, provenance, authorization, sensitivity, freshness, and correction boundaries;
- Investigation-owned epistemic projections over Operating Model references;
- Matter-owned identity, macro-state, lifecycle, lineage, and typed references to organizational context;
- Case Evidence Set ownership of Evidence classification, provenance, influence, and snapshots;
- Operational Memory as permission-aware historical reference rather than copied current truth;
- Workspace isolation as a required future runtime boundary;
- Product-level InformationContribution meaning and People & Privacy obligations;
- adopted Interaction behavior for projections over one governed organizational model.

These sources are sufficient to forbid a competing model and to bound projection authority. They are not sufficient to define the complete logical write model requested by the Engineering mission.

## Gap G1 — organizational element identity and ownership contract

`OPERATIONAL_OPERATING_MODEL.md` lists organizational units, teams, roles, responsibilities, processes, systems, SOPs, measures, and relationships as eligible context. It does not define whether each is:

- an independently identified Operating Model element;
- a reference to an existing source-domain record;
- a typed relationship over other records;
- an effective-dated assertion;
- a projection-only value;
- or some controlled combination.

It also does not define stable identity, identity collision rules, correction ownership, version ownership, deletion/retirement meaning, or temporal validity for department, role, role occupancy, department membership, reporting relationship, responsibility assignment, recurring report, recurring meeting, or interdepartmental interaction.

Engineering cannot safely choose those meanings because the choice would determine canonical ownership and could create a parallel enterprise model—the exact outcome prohibited by the Operating Model and adopted Living Model Decision.

## Gap G2 — existing Relationship implementation is not the required organizational relationship authority

The current `js/relationship-model.js` is not a general organization-wide relationship store:

- every repository is scoped to one `matterId`;
- endpoints must be existing Artifact IDs;
- both endpoints must belong to the same Matter;
- relationship references are attached to Artifact records;
- the fixed semantic registry contains reasoning/general types such as `supports`, `contradicts`, `depends-on`, `part-of`, and `evidence-for`;
- it does not own department hierarchy, reporting, role occupancy, department membership, operational responsibility, Person-as-Source, subject-of-information, recorder, authorship, or organizational participation;
- its lifecycle and authority rules are designed for governed Matter-relative interpretations.

Reusing it directly would incorrectly make organizational topology Matter-owned and Artifact-to-Artifact. Generalizing it silently would change canonical scope and semantic ownership. Creating a separate organizational relationship store without clarification would risk a second organizational model.

## Gap G3 — InformationContribution canonical relationship sufficiency remains intentionally unresolved

The adopted People & Privacy Decision establishes InformationContribution as a bounded **Product relationship**, but states:

> Canonical effect: NONE unless a future reviewed clarification determines that existing canonical Relationship semantics are insufficient.

The repository precheck determines that existing implemented Relationship semantics are insufficient for InformationContribution because they cannot represent, without new meaning:

- a person source distinct from subject, recorder, author, owner, approver, and responsible party;
- contribution-time role and department snapshots;
- communication time distinct from recording time;
- zero, one, or multiple explicit subjects;
- knowledge basis and uncertainty;
- correction, dispute, support, contradiction, supersession, withdrawal, redaction, and deletion dispositions;
- one source relationship projected into Investigation Inspector, Person Workbench, Department Workbench, and Operational Memory under different access boundaries.

Engineering cannot invent a `supplied-by` type or InformationContribution aggregate under the current authority. A reviewed canonical clarification must decide whether this is:

1. a named specialization of an existing canonical typed-reference/relationship concept;
2. a new canonical relationship type within the Operational Operating Model;
3. a source-owned record referenced by the Operating Model;
4. or a different non-duplicating allocation.

## Gap G4 — temporal authority cannot be assigned without G1/G3

The Product and Interaction Decisions require effective time, recording time, role/department intervals, correction, supersession, and historical inspection. Engineering can later select event/version/envelope patterns, but first needs canonical answers to:

- which owner records each interval;
- whether current state is a governed assertion, referenced source state, or derived projection;
- which correction supersedes an assertion versus corrects source identity;
- which history belongs to the Operating Model versus a source domain;
- what constitutes an authoritative reviewed Operating Model update after Stabilization.

Choosing an append-only assertion model, entity version model, or source-reference model before that allocation would silently create semantic authority.

## Product-policy dependencies that remain separate

The People & Privacy authority chain also leaves exact permitted sensitive/subjective exceptions, visibility roles, protected-source reviewer and appeal, retention periods, deletion/audit exceptions, export/support/log/backup policy, incident ownership, and accountable privacy ownership for later explicit human Decisions.

These do not prevent a bounded people-free Engineering Architecture after canonical element/relationship clarification. They do prevent a complete implementation-ready named-person and InformationContribution architecture.

## Current runtime finding

The current static HTML/CSS/JavaScript runtime is technically capable of a bounded local single-owner implementation without a framework migration, build system, backend, database, or new dependency stack.

Existing code already demonstrates:

- storage adapters over browser persistence;
- schema versions and bounded migrations for some stores;
- stable string identifiers in Artifact/Relationship models;
- transactional relationship attachment and recovery;
- quarantine of malformed relationships and rollback of dangling references;
- Context Envelope versioning;
- Investigation local persistence and restoration.

However, current domain storage is fragmented and much of `docs/DATA_MODEL.md` remains unversioned local arrays. `localStorage` is not identity, authorization, multi-user isolation, secure people-data storage, or a substitute for a canonical organizational write contract. Runtime capability does not resolve G1–G4.

## Safe work that could proceed after clarification

Once canonical ownership is fixed, a coherent Engineering Architecture can define:

- one workspace-bounded organizational repository contract with source adapters;
- stable element and relationship references;
- effective-dated assertions/version lineage;
- projection services for Map and Workbenches;
- context-reference envelopes for Investigation and Improvement;
- purpose-filtered privacy projections and protected absence;
- separation of governed, workspace, and ephemeral client state;
- local-storage adapter and migration boundary for a bounded single-owner slice;
- failure recovery, large-organization derivation limits, security obligations, future Watson context interface, and verification contracts.

No such contract is selected by this assessment.

## Minimum canonical clarification required

The accountable authority must authorize preparation of one bounded canonical clarification covering:

1. **Operating Model element identity:** source-owned versus Operating-Model-owned identity for organization, department/unit, role, person reference, process, system, SOP reference, measure, report, meeting, artifact reference, and interaction.
2. **Organizational relationship ownership:** hierarchy, reporting, membership/occupancy, responsibility, operational dependency, information flow, process/system/SOP/measure linkage, and interdepartmental interaction.
3. **InformationContribution allocation:** the exact canonical relationship/record owner and its distinction from Evidence and all adjacent person roles.
4. **Temporal/correction allocation:** authority for effective intervals, recording time, versions, corrections, supersession, dispute, retirement/deletion/redaction, and reviewed current-state derivation.
5. **Projection invariants:** one identity across Map, Workbenches, Investigation, Improvement, and Memory; no screen-owned truth.

The clarification should prefer existing concepts and make the smallest amendment needed. It must undergo independent review before Engineering Architecture resumes.

## Exact indispensable human Decision

> Should a bounded canonical clarification be prepared to define Operational Operating Model element identity, organizational relationship ownership, InformationContribution allocation, and temporal/correction authority so that the adopted Living Organizational Model can receive a non-duplicating Engineering Architecture?

This is a preparation Decision, not approval of any canonical result. If authorized, the resulting clarification would still require review and a separate attributable canonical authority Decision before Engineering Architecture completion.

## Required authority record

Record the human authorization to prepare that clarification in a new separate artifact:

`governance/proposals/LIVING_ORGANIZATIONAL_MODEL_CANONICAL_CLARIFICATION_PREPARATION_DECISION.md`

The record must reference this gap assessment by commit and blob, identify the accountable human and date, define the exact clarification scope, preserve the sole-authority Operating Model boundary, and state that canonical adoption, Engineering Architecture, implementation, repository transition, ROADMAP/BACKLOG changes, Watson, deployment, Replay, H3, Root Cause, and causal proof remain unauthorized.

## Authority effect

NONE. This assessment identifies a blocking authority gap and stops Engineering Architecture preparation. It does not create canonical meaning, adopt Engineering Architecture, authorize implementation, modify active work, enable Watson, or change ROADMAP/BACKLOG.
