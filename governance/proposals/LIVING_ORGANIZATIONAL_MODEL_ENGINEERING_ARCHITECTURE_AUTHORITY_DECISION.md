# Living Organizational Model Engineering Architecture authority Decision

## Decision identity

- Decision date: 2026-08-08
- Accountable human: Serhii Horbachenko — Product Owner and accountable authority for Management OS
- Selected disposition: A — adopt the reviewed Living Organizational Model Engineering Architecture for the adopted upper Product composition
- Decision state: RECORDED

## Fixed authority consideration package

- Artifact: `governance/proposals/LIVING_ORGANIZATIONAL_MODEL_ENGINEERING_ARCHITECTURE_AUTHORITY_CONSIDERATION_PACKAGE.md`
- Commit: `f842fd98306d3f6182a6a5fc56be287152174926`
- Blob: `7387bf1d6dee5387ae3174e3d0548bb29e0f3915`

## Controlling correction supplement

- Artifact: `governance/proposals/LIVING_ORGANIZATIONAL_MODEL_ENGINEERING_ARCHITECTURE_CORRECTION_SUPPLEMENT.md`
- Commit: `1a4cc92c698386639aaa28cfc0a1c88a01c3b736`
- Blob: `80eda2a2a49ca642c0bb1ae78909b594d6208cef`

## Attributable human Decision

I adopt the reviewed Living Organizational Model Engineering Architecture, as controlled by its reviewed correction supplement, for the adopted upper Product composition.

The adopted Engineering Architecture includes the reviewed responsibility and realization model for:

- the sole Operational Operating Model repository boundary;
- Operating Model Element References;
- Operating Model Relationship Assertions;
- command and query responsibilities;
- source and temporal resolution;
- privacy-policy enforcement;
- projection and search services;
- persistence abstraction;
- Organization Constructor and Organization Map;
- Department, Role, and privacy-safe Person Workbenches;
- process, system, SOP, and KPI projections;
- interdepartmental interactions;
- InformationContribution;
- Investigation and Improvement contextual handoffs;
- Operational Memory projections;
- future filtered Watson context.

## Source-of-truth principle

The Operational Operating Model remains the sole governed organizational representation.

Product surfaces are projections over governed state. No screen, Workbench, Map, Inspector, Investigation, Improvement, Memory surface, local cache, saved view, search index, or UI state becomes an independent source of organizational truth.

## State separation

I adopt the explicit separation among:

1. governed organizational state;
2. Product/workspace state;
3. ephemeral interaction/UI state.

Map coordinates, zoom, pan, selection, lenses, expanded state, modal state, hover, focus, and other interaction state remain non-authoritative.

## Temporal model

I adopt the reviewed current-record plus immutable-revision architecture. This Decision does not require full event sourcing.

Current state must remain derivable while historical meaning, correction lineage, authority, and applicable temporal context remain inspectable.

## Persistence and technology boundary

I adopt the reviewed versioned persistence abstraction independent of `localStorage`. A bounded local implementation may continue to use browser persistence behind that abstraction.

The adopted Engineering obligations include:

- schema versions;
- immutable generations;
- checksums and commit markers;
- read-back verification;
- deterministic recovery;
- copy-on-write and restartable migration;
- corrupted-state handling.

The existing HTML, CSS, JavaScript, and browser-persistence stack is sufficient for the next bounded local Product materialization. This Decision does not require or authorize a framework migration, build system, backend, database, or external dependency stack.

## Investigation and Improvement

Investigation remains an independently governed work capability. Living Organizational Model context enters through traceable references and does not automatically become Evidence, Working Set content, Hypothesis, or accepted fact.

Improvement may reference governed organizational state and maintain proposed-change state. Proposed state remains distinct from current governed state. A proposal or plan does not mutate the current Operating Model.

## InformationContribution

InformationContribution remains stored once as the adopted specialized Operating Model Relationship Assertion. It may be purpose-filtered into Investigation Inspector, Person Workbench, Department Workbench, and Operational Memory without duplicating externally owned content or Evidence status.

## People and Privacy

I adopt the reviewed Engineering enforcement responsibilities for purpose-filtered access, least disclosure, protected absence, restricted relationship existence, correction and dispute propagation, redaction and deletion, retention, historical integrity, and people-free operation.

Privacy filtering must occur before exposure through projections, search, traversal, counts, navigation, history, saved references, derived indexes, and future Watson context.

## Watson

Only the Engineering boundary for future Watson consumption is adopted. Watson execution remains unauthorized.

Any future Watson must consume only purpose-filtered, privacy-filtered, source-linked, and uncertainty-preserving context.

## Implementation-readiness acknowledgement

### READY TO IMPLEMENT after separate implementation authorization

- people-free organization construction;
- Organization Map;
- Department and Role Workbenches;
- process/system/SOP/KPI projections;
- interdepartmental interactions;
- shared navigation and Inspector;
- contextual Investigation and Improvement entry;
- Memory references;
- versioned local persistence, search, recovery, and associated verification.

### PARTIAL

- named-person references and occupancy;
- Person Workbench and person search;
- InformationContribution activation;
- people-data export/import;
- some Memory and Improvement lifecycle details.

### DEFERRED

- multi-user/server authorization;
- backend/database;
- integrations;
- sensitive people workflows;
- server-scale graph/search processing;
- Watson execution.

## Human rationale

The reviewed Engineering Architecture provides a coherent technical realization model for the already adopted Living Organizational Model without creating a competing organizational representation or changing adopted Product, Interaction, or canonical meaning.

The previous canonical blockers have been resolved. Independent review identified six bounded Engineering risks concerning browser commit atomicity, access-change leakage, snapshot semantics, equal-authority conflict resolution, export/import trust, and large-organization fallback behavior. The reviewed correction supplement addresses those findings, leaving no unresolved blocker to Engineering Architecture adoption.

The Architecture also demonstrates that a broad and useful local Product materialization can proceed using the existing HTML/CSS/JavaScript environment without premature framework, backend, or database migration.

## Human attestation

I confirm that this is my attributable human Decision.

I adopt the reviewed Living Organizational Model Engineering Architecture and its correction supplement.

This Decision does not authorize implementation.

## Authority states

- Engineering Architecture: **ADOPTED**
- Implementation authority: **NONE — SEPARATE HUMAN DECISION REQUIRED**
- Repository transition: **NONE**
- ROADMAP/BACKLOG effect: **NONE unless separately authorized**

## Explicit non-authorizations

This Decision does not authorize:

- implementation;
- repository transition;
- `ROADMAP.md` changes;
- `BACKLOG.md` changes;
- framework migration;
- dependency changes;
- backend;
- database;
- integrations;
- deployment;
- Watson execution;
- Replay;
- H3 validation;
- Root Cause determination;
- causal proof.

## Authority effect

This Decision adopts the reviewed Living Organizational Model Engineering Architecture as controlled by its correction supplement. It establishes Engineering responsibilities and boundaries for the adopted upper Product composition while preserving the Operational Operating Model as the sole governed organizational representation.

It authorizes no implementation or transition action.
