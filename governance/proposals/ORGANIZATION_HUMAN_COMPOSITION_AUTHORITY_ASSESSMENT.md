# Organization human-composition authority assessment

## Status

- Assessment date: 2026-08-09
- Starting repository HEAD: `c1343b3`
- Trigger: Northstar Home experiential finding that the primary Organization Map visually conflates organizational units and Roles
- Effect: analysis and authority preparation only; no runtime, schema, canonical-source, ROADMAP, or BACKLOG mutation

## Repository finding

The finding is valid. The Structure lens recursively renders both `department` and `role` elements as containment descendants in the same hierarchy. A Role therefore reads as another organizational unit even though the adopted model and current Role Workbench explicitly say that a Role is a function, not a person or department.

The repository already provides the correct second scale in partial form: Department Workbench derives a selected Department, its parent/path/children, and its related Roles; Role Workbench separately projects responsibility, reporting, participation, dependencies, and flows. The defect is therefore primarily a projection-boundary defect, not a missing second organizational model.

## Authority already adopted

The following meaning is already authoritative:

- the Living Organizational Model is a Product projection over the sole governed Operational Operating Model;
- Organization Map, Department Workbench, Role Workbench, privacy-safe Person Workbench, and Person-as-Source interaction are distinct surfaces;
- Operating Model Element Reference owns stable workspace-bounded identity;
- Operating Model Relationship Assertion owns containment, reporting, role occupancy, department membership, responsibility, participation, dependency, flow, association, interaction, work/history linkage, and InformationContribution;
- InformationContribution is a specialized relationship assertion, not Evidence, truth, credibility, responsibility, authorship, approval, or subject-of-information;
- contribution-time Role and Department context is historical snapshot meaning and cannot be rewritten by current state;
- named-person surfaces are deny-by-default, purpose-filtered, minimized, correctable/disputable, retention-bound, and prohibited from becoming dossiers, surveillance, scoring, or employment judgment;
- broad implementation authority covers people-free Organization Map, Department and Role Workbenches, responsive behavior, accessibility, tests, and ordinary projection/visual corrections.

## Authority ownership map

| Concept or boundary | Existing owning artifact |
| --- | --- |
| Living Organizational Model as a projection, not a second model | `LIVING_ORGANIZATIONAL_MODEL_AUTHORITY_DECISION.md` |
| Element identity, relationship families, temporal/correction rules, InformationContribution allocation | `LIVING_ORGANIZATIONAL_MODEL_CANONICAL_CLARIFICATION_AUTHORITY_DECISION.md` and its controlling correction supplement |
| Organization Map, Department/Role/Person scale, contribution-time selection interaction, responsive obligations | `LIVING_ORGANIZATIONAL_MODEL_INTERACTION_ARCHITECTURE_AUTHORITY_DECISION.md` and its controlling correction supplement |
| Repository, commands, revisions, projection policy, InformationContribution storage, workbench query boundaries | `LIVING_ORGANIZATIONAL_MODEL_ENGINEERING_ARCHITECTURE_AUTHORITY_DECISION.md` and its controlling correction supplement |
| Person-as-Source meaning, Person/Department Workbench privacy limits, minimization, retention, correction, anti-scoring | `PEOPLE_PRIVACY_PRODUCT_AUTHORITY_DECISION.md`, `PEOPLE_PRIVACY_PRODUCT_BOUNDARY_AND_POLICY_PROPOSAL.md`, and `PEOPLE_PRIVACY_PRODUCT_REVIEW_CORRECTION_SUPPLEMENT.md` |
| Authorized people-free runtime and explicit named-person prohibition | `LIVING_ORGANIZATIONAL_MODEL_BROAD_IMPLEMENTATION_AUTHORITY_DECISION.md`, consideration package, execution contract, scope/reconciliation, and controlling correction supplement |
| Unresolved Role position capacity | `ROLE_POSITION_CAPACITY_CANONICAL_CLARIFICATION_PROPOSAL.md` |
| Current organizational persistence and validation | `js/operating-model-repository.js` |
| Current Map/Department/Role projections | `js/organization-workspace.js` and `index.html` |

## Immediately implementable projection correction

No new Product or canonical meaning is needed to:

1. make the primary Structure lens answer “How is the organization built?” using Organization → Department → nested Department;
2. stop rendering Roles as structural siblings in that primary tree;
3. preserve current Role records and compatibility placement references rather than deleting or rewriting them;
4. expose Department human composition through Department Workbench and transition from a Department node into that scale;
5. preserve Role Workbench as the function/responsibility surface;
6. keep role-aware search and Inspector navigation, while ensuring search-to-focus does not reinsert a Role into the Department topology;
7. replace placeholder Unicode rail symbols with one consistent inline-SVG icon system without semantic change.

This bounded implementation must not claim named people, occupancy, capacity, or vacancies. It should retain honest unavailable language where those capabilities remain blocked.

## Current implementation to preserve

- one repository and one workspace identity model;
- active containment filtering and Department path/children derivation;
- separate Department and Role panels;
- Role creation under Department context;
- qualification, history, correction, persistence, migration, search, Inspector, responsive, keyboard, drag/move, Investigation context, and Improvement separation contracts;
- explicit statement that Role is not Person and occupancy is unavailable;
- no production Person fixtures, named-person index, or InformationContribution activation.

## Governed concept chain

### Already governed

The chain that can be stated without new authority is:

`Organization —containment→ Department —containment→ nested Department`

`Role —department membership→ Department` for an effective interval.

`Person —role occupancy→ Role` for an effective interval, and independently `Person —department membership→ Department` where applicable.

`Person —InformationContribution→ externally owned material/work-context reference`, with contribution-time Role and Department snapshot references and separate correction/dispute/supersession/withdrawal/redaction/deletion lineage.

The Product surfaces are projections of those same identities and assertions:

`Organization Map → Department composition → Role Workbench → privacy-filtered Person Workbench`.

### Current runtime compatibility mismatch

The current local runtime does not yet persist the adopted Role → Department meaning as the `department membership` family. Role creation uses `containment` for placement, and Department Workbench discovers Roles through those containment rows. That is a compatibility representation in the implemented people-free subset, not evidence that canonical containment and department membership are interchangeable.

The authorized Map render correction may preserve those records and interpret them only for existing compatibility projection. Converting Role placement to adopted department-membership assertions requires an explicit bounded semantic/migration path with compatibility and history tests; it is not part of the projection-only correction and must not be smuggled into it.

### Not yet governed

No adopted authority currently defines a Position/Slot identity or a planned-capacity assertion. Therefore the repository cannot yet state whether the future chain is:

- `Department → Role → planned capacity`, with Persons occupying the Role directly; or
- `Department → Position/Slot → Role`, with Persons occupying Position/Slot and role occupancy derived or projected; or
- another reviewed temporal assertion model.

Vacancy is not safely derivable until the authority defines capacity meaning, occupancy completeness, effective time, and source/update ownership. Unknown named occupancy must not be displayed as vacancy.

## Role Capacity reconciliation

The existing `ROLE_POSITION_CAPACITY_CANONICAL_CLARIFICATION_PROPOSAL.md` correctly prevents an ad hoc quantity field, duplicate Roles, and fake Persons, and correctly identifies the principal model choices. It is sufficient as the base proposal but insufficient for adoption after the new finding because it does not resolve:

- compatibility with the adopted direct `role occupancy` relationship family;
- whether a Position/Slot has stable identity and lifecycle;
- whether “occupied” is a direct Position relationship or a derived Role projection;
- how partial/restricted occupancy affects counts and vacancy language;
- how Person and Position history interact without rewriting InformationContribution snapshots.

The bounded supplement prepared with this assessment adds exactly those questions without selecting an answer.

## Person-as-Source reconciliation

No additional canonical clarification is required for Person-as-Source meaning. Canonical allocation, Product meaning, Interaction obligations, Engineering storage/projection, temporal integrity, subject separation, and correction lineage are already adopted.

What remains unavailable is runtime activation. Before real named people or InformationContribution can be created, a separate bounded implementation authority must concretely configure:

- legitimate operational purpose and allowed contribution contexts;
- actor/purpose/field/surface access policy and protected absence;
- identity source/custody and collision/correction handling;
- retention, withdrawal, redaction, deletion, and dispute operation;
- contribution-time Role/Department interval resolution and ambiguous/unknown handling;
- restricted-source behavior, export exclusion, search boundaries, and auditability;
- browser-local prototype limitations versus any future multi-user enforcement.

This is runtime authority/configuration, not a competing InformationContribution concept.

## Product implications

- Primary Map: topology first; Departments only in the structural tree.
- Department composition: Roles and relevant work as the current authorized core; named people/capacity remain unavailable until authorized.
- Role Workbench: function, purpose, responsibility, processes, systems, reporting, and future separately governed occupancy.
- Person Workbench: future operational context surface only; never an employee dossier.
- Counts: do not show people, occupied, or vacant counts until authority and visibility make each count truthful.

## Interaction implications

- Opening a Department must feel like changing scale into the team, not adding nodes to the global tree.
- Role search may navigate to Role Workbench or its Department composition context, but must not visually promote the Role into Department topology.
- Future people selection must explain why identity is needed, use purpose-filtered search, confirm contribution-time capacity only from an unambiguous authoritative interval, and preserve unknown/restricted states.
- Future capacity UI must distinguish planned positions, known occupancy, restricted occupancy, and genuinely vacant positions.
- Inline SVG rail icons may share a common viewBox, stroke, optical size, hover/focus, and active treatment; emoji and placeholder Unicode should not be used.

## Engineering implications

The authorized projection correction requires only render/query/view-state changes and regression coverage. It must not migrate governed records or change repository semantics.

Future capacity work requires the adopted model choice to be reflected in repository validation, temporal revisions, source/update authority, migration, queries, derived counts, and privacy filtering. Future named-person runtime additionally requires deny-by-default policy evaluation before indexing, projection, navigation, aggregation, export, or mutation.

## Privacy implications

- broad views prefer Role/Department facts and minimized aggregates;
- restricted relationship existence must not leak through counts, search, labels, history, or empty-state wording;
- “Person supplied information” never means the information is true or evidentiary;
- current organizational identity never rewrites contribution-time identity;
- no credibility, performance, trust, behavior, productivity, or employee-value inference is permitted.

## Required authority sequence

1. Human decides the bounded Role Position Capacity representation using the attached supplement and consideration package; meaning, authoritative owner/source, and effective-time scope are required only if A or B is selected.
2. If capacity is adopted, prepare the minimum canonical-source/Engineering/Interaction implementation path for that selected model.
3. Separately, when named-person runtime is desired, prepare a bounded runtime-activation consideration package containing the concrete policy controls listed above.
4. Only after that separate authority may Person creation/search, named occupancy, Person Workbench data, or real InformationContribution capture be implemented.

This cycle stops at step 1. It does not implement the already-authorized Map correction because the Product Owner explicitly requested analysis before implementation.
