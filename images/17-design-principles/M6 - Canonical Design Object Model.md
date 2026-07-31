# M6 — Canonical Design Object Model

## Status

```text
Approved for M6 dependency use
Milestone M6
```

## Authority

This document is the canonical subject model for the Operational Design System.
It defines the fundamental design objects through which canonical professional
meaning may be represented, composed, acted upon, and adapted.

Design objects are presentation-semantic contracts. They are not domain
entities, information spaces, visual styles, implementation objects, or
professional concepts. They consume the Canonical Management Model and the M6
Charter; they change neither.

# 1. Purpose

The Design Object Model exists to give every future design and engineering
realization the same answer to three questions:

1. What kind of presentation-semantic object is this?
2. Which canonical meaning, information role, or interaction may it represent?
3. What is it prohibited from owning or implying?

Without this model, a surface, repeated subject, interaction offer, state signal,
or feedback message could be interpreted differently by each platform or
implementation. Component names would become accidental architecture, visual
containment could become domain containment, and repeated representations could
become copied truth.

The model establishes a stable translation layer:

```text
Canonical Management Model
            ↓
Canonical Design Object Model
            ↓
Rendering, tokens, components, layout, accessibility, and adapters
```

It defines semantic structure before concrete form. It does not determine how
any object looks, where it is placed, or which technology renders it.

# 2. Design Object Principles

1. **Canonical before Component.** A component may implement a Design Object;
   it cannot define the object's canonical meaning.
2. **Semantic First.** Every object exists for an explicit presentation,
   interaction, orientation, or feedback responsibility.
3. **Source Owned.** Design Objects project canonical sources and never acquire
   independent domain truth.
4. **One Identity, Many Representations.** Multiple Design Objects may represent
   one canonical subject only through declared primary, secondary, reference, or
   inspection roles.
5. **Composition over Duplication.** Larger structures compose Design Objects;
   they do not copy canonical subjects, state, authority, or context.
6. **One Responsibility per Object.** An object may compose capabilities, but
   its primary semantic responsibility remains singular and inspectable.
7. **One Meaning per Signal.** No Design Object may overload one signal with
   multiple professional dimensions.
8. **Interaction Is Intent.** An interactive Design Object offers a canonical OI
   interaction, not a click, gesture, command string, or device event.
9. **Residency Is Inherited.** Information residency comes from Canonical
   Information Architecture; Design Objects cannot create a new information
   space.
10. **Continuity Is Preserved.** Composition and adaptation retain Matter,
    Focus, origin, return, currentness, and Context Envelope continuity.
11. **Platform Independent.** Object meaning is stable across visual,
    conversational, spatial, printed, AI-mediated, and future adapters.
12. **Rendering Agnostic.** Geometry, material, styling, animation, and rendering
    technology do not define object identity.
13. **Accessibility Is Structural.** Every object exposes equivalent semantic
    identity, order, state, relationship, action, and feedback where applicable.
14. **Degradation Is Explicit.** Unavailable, loading, stale, unauthorized,
    indeterminate, and failed conditions cannot collapse into absence.
15. **No Hidden Authority.** Presence, prominence, containment, repetition, or
    availability never grants professional authority.

# 3. Canonical Design Object Inventory

## 3.1 Admission rule

A fundamental Design Object is admitted only when it has:

- a distinct platform-independent semantic responsibility;
- a stable boundary that survives different rendering forms;
- a required relationship to canonical meaning, information, interaction, or
  feedback;
- composition rules not reducible to visual styling;
- a clear prohibition against domain, navigation, Memory, or authority
  ownership.

The canonical inventory contains eleven Design Objects.

## 3.2 Structural objects

| ID | Design Object | Exists to | Canonical boundary |
|---|---|---|---|
| **DO-01** | **Presentation Surface** | Establish one adapter-addressable presentation boundary in which compatible Design Objects can be rendered or expressed. | A Surface is not an information space, route, page, window, screen, device, or Workspace. |
| **DO-02** | **Semantic Region** | Assign a bounded presentation responsibility to one canonical information space or compatible subset of its content. | A Region does not create residency, navigation, domain containment, or a local Context Envelope. |
| **DO-03** | **Composition** | Declare how Design Objects form one meaningful whole while retaining their identities and responsibilities. | Composition is not layout geometry, a component tree, domain aggregation, lifecycle order, or Relationship. |
| **DO-04** | **Semantic Slot** | Declare the semantic role, accepted object kinds, and obligations of one position within a Composition. | A Slot is not a coordinate, grid cell, DOM slot, Figma placeholder, ownership boundary, or empty domain object. |

## 3.3 Representation objects

| ID | Design Object | Exists to | Canonical boundary |
|---|---|---|---|
| **DO-05** | **Subject Representation** | Represent one canonical subject, source-owned subject, or governed projection in a declared IA role. | It is not the subject, a copy, a cache-as-truth, or an independently editable state holder. |
| **DO-06** | **Set Representation** | Represent an attributable set, sequence, query result, or repeated projection of Subject Representations under an explicit organizing basis. | It is not a domain Collection, Working Set, corpus, ownership container, or proof of Relationship. |
| **DO-07** | **Navigation Representation** | Represent canonical navigation context, layer, destination, origin, interruption, suspended context, or return state. | It does not create a navigation transition, Focus, priority, route authority, or lifecycle progression. |

## 3.4 Action and state objects

| ID | Design Object | Exists to | Canonical boundary |
|---|---|---|---|
| **DO-08** | **Interaction Affordance** | Offer one canonical professional interaction for an identified subject and context with visible preconditions and consequence. | It is not the interaction itself, a button, menu item, gesture, voice phrase, shortcut, command, or authority grant. |
| **DO-09** | **State Indicator** | Expose one registered semantic dimension or one explicitly composed state explanation. | It does not create state, status, priority, authority, certainty, or a generic badge vocabulary. |
| **DO-10** | **Feedback Presentation** | Explain an interaction's receipt, validation, cancellation, commitment, failure, indeterminate state, recovery, correction, or reversal. | It is not proof of success, a canonical event, domain truth, notification priority, or Operational Memory. |

## 3.5 Transient object

| ID | Design Object | Exists to | Canonical boundary |
|---|---|---|---|
| **DO-11** | **Transient Presentation Layer** | Temporarily compose inspection, explanation, comparison, interaction choice, feedback, or recovery material while preserving origin and return. | It is not a new information space, overlay component, modal, portal, route, primary Focus, or independent context container. |

## 3.6 Corrections to proposed categories

The example categories are classified as follows:

| Proposed term | Disposition | Reason |
|---|---|---|
| **Surface** | Accepted as **Presentation Surface**. | Requires a platform-neutral presentation boundary. |
| **Region** | Accepted as **Semantic Region**. | Requires an explicit information-space responsibility rather than geometry. |
| **Workspace** | Rejected as a Design Object. | Workspace Scope is canonical information and authorization context owned outside M6. A Surface may represent it. |
| **Container** | Rejected as a fundamental object. | Generic containment is ambiguous; **Composition**, **Semantic Region**, and **Semantic Slot** express distinct responsibilities. |
| **Collection** | Rejected as a Design Object name. | Collection is a canonical domain concept. **Set Representation** may represent a Collection or another governed set without owning it. |
| **Item** | Rejected as a fundamental object. | “Item” has no stable semantics; **Subject Representation** declares subject identity and representation role. |
| **Slot** | Accepted as **Semantic Slot**. | Only the semantic contract is canonical; geometry and framework slots are not. |
| **Control** | Replaced by **Interaction Affordance**. | Professional intent, authority, consequence, and recovery define the object—not control form. |
| **Indicator** | Accepted as **State Indicator**. | Its dimension and non-authoring boundary can be canonical. |
| **Overlay** | Replaced by **Transient Presentation Layer**. | “Overlay” prescribes geometry; transience, context preservation, and return are the durable semantics. |
| **Feedback** | Accepted as **Feedback Presentation**. | Interaction feedback has canonical distinctions independent of visual or audio form. |
| **Portal** | Rejected as a fundamental object. | A portal is an implementation or adapter transport mechanism; it creates no presentation semantics. |

# 4. Design Object Relationships

## 4.1 Relationship rule

Design Object relationships describe presentation semantics only. They cannot
create a canonical Relationship, domain ownership, information residency,
authority, Focus, lifecycle, navigation transition, or causality.

## 4.2 Permitted relationships

| Relationship | Permitted source → target | Meaning | Prohibited interpretation |
|---|---|---|---|
| **represents** | Subject/Set/Navigation Representation → canonical subject, source reference, or governed projection | Declares what canonical meaning is being expressed. | Copy, ownership, or independent truth. |
| **composes** | Composition → any compatible Design Objects | Forms one semantic whole under declared roles. | Domain aggregation, lifecycle sequence, or automatic Relationship. |
| **occupies** | Design Object → Semantic Slot | Fulfills the Slot's declared responsibility. | Spatial position granting priority, authority, or state. |
| **scopes presentation of** | Semantic Region → Design Objects | Binds presented objects to one information-space responsibility. | New information residency or local truth. |
| **groups representations of** | Set Representation → Subject Representations | Expresses an explicit set/query/sequence basis. | Collection membership, Working Set participation, causality, or shared ownership unless supplied canonically. |
| **offers interaction for** | Interaction Affordance → represented subject/context | Makes one OI interaction available under stated conditions. | Execution, authorization, acceptance, or success. |
| **indicates dimension of** | State Indicator → represented subject/projection | Exposes a registered semantic dimension and value. | Mutation or derivation of the value from presentation. |
| **reports feedback for** | Feedback Presentation → interaction attempt/commit/recovery reference | Explains the interaction processing condition. | Canonical consequence without owning event evidence. |
| **projects navigation for** | Navigation Representation → canonical navigation projection/context | Expresses orientation, movement availability, suspension, or return. | Route creation, Focus adoption, or navigation transition. |
| **preserves origin for** | Transient Presentation Layer → originating context/representation | Maintains continuity and deterministic return. | A second Context Envelope or hidden context truth. |
| **references** | Any eligible representation → another canonical identity/version | Keeps a traceable semantic dependency without copying it. | Causality, containment, or authority from the reference alone. |

## 4.3 Composition invariants

1. Every child in a Composition retains its Design Object type and declared
   responsibility.
2. Every Semantic Slot declares accepted Design Object types and one semantic
   role before it is occupied.
3. A Composition may nest, but nesting cannot manufacture information
   hierarchy, domain containment, or professional importance.
4. A Semantic Region maps to one information-space responsibility; compatible
   Regions may coexist on one Surface without merging spaces.
5. A Surface may carry several Regions, but one active professional context
   retains one dominant object and one canonical Focus.
6. A Transient Presentation Layer preserves its origin and cannot silently
   replace the primary representation.
7. A Set Representation retains identity, currentness, provenance, and
   representation role for every member.
8. Interaction Affordances, Indicators, and Feedback attach to identified
   subjects or contexts; they cannot float as unscoped professional claims.

# 5. Responsibilities and Prohibitions

| Design Object | Required responsibility | Must preserve | Must not do |
|---|---|---|---|
| **Presentation Surface** | Declare adapter boundary, active professional context, supported modalities, and compatible Regions. | Matter/non-production boundary, dominant object, continuity, accessible order. | Own Workspace, information, navigation, or application truth. |
| **Semantic Region** | State its mapped IA space/responsibility and representation purpose. | Residency, ownership, primary/secondary/reference/inspection role. | Become a page, route, domain container, or new information space. |
| **Composition** | Define semantic whole, member roles, order dependencies, and adaptation invariants. | Child identity, reading/interaction order, Focus hierarchy, relationships. | Define pixels, copy truth, infer relationships, or impose lifecycle progression. |
| **Semantic Slot** | State accepted object kinds, cardinality class, semantic role, fallback duty, and accessibility obligation. | Meaning when empty, occupied, adapted, or unavailable. | Become a coordinate, source of truth, or generic untyped extension point. |
| **Subject Representation** | Resolve to one subject identity/version/source and one IA representation role. | Type, provenance, currentness, authority boundary, relevant semantic dimensions. | Fork state, own mutations, or impersonate primary/current truth. |
| **Set Representation** | Declare set basis, ordering authority, member role, completeness, and update source. | Member identity, provenance, empty/degraded meaning, deterministic order where canonical. | Become a domain Collection/Working Set or derive priority from count/order. |
| **Navigation Representation** | Express canonical navigation projection, valid destination/return, and degradation. | Context, Focus, origin, destination, interruption class, suspended state. | Create navigation, priority, interruption, lifecycle, or route truth. |
| **Interaction Affordance** | Map to one OI identifier, subject, authority requirement, consequence class, feedback, cancellation, and recovery. | Availability/authority distinction, input equivalence, current validation. | Infer intent from mechanics, commit automatically, or report success. |
| **State Indicator** | Map its primary signal to one registered Visual Semantics dimension/value. | Textual/non-visual equivalent, source, scope, currentness, degradation. | Use one mark for unrelated states or manufacture semantic strength. |
| **Feedback Presentation** | State exact interaction processing condition and next valid path. | Attempt/operation identity, consequence boundary, indeterminate state, recovery. | Collapse receipt/commit/success, rewrite history, or hide failure. |
| **Transient Presentation Layer** | Declare reason, subject, origin, dismissal/cancellation semantics, and return. | Context Envelope continuity, primary Focus distinction, currentness, accessibility. | Create a permanent destination, trap context, or imply domain consequence on disappearance. |

# 6. Canonical Design Object Descriptor

Every Design Object definition and every conforming realization must expose the
applicable fields below. These fields are semantic metadata, not a file format,
schema, API, or implementation interface.

| Field | Requirement |
|---|---|
| **Design Object ID and type** | Stable identity of the Design System contract and one DO-01–DO-11 type. |
| **Primary responsibility** | One concise statement explaining why the object exists. |
| **Canonical basis** | Canonical model, object, projection, OI identifier, IA space/role, or Visual Semantics dimension being translated. |
| **Information role** | Primary, secondary, reference, inspection, or not applicable. |
| **Semantic inputs** | Source-owned states and dimensions the object may represent. |
| **Permitted relationships** | Allowed Design Object relationships and cardinality class without layout geometry. |
| **Interaction contract** | OI mapping, authority, consequence, persistence, cancellation, retry, and recovery where interactive. |
| **Persistence posture** | Canonical-backed, projection-backed, context-persistent, interaction-transient, or recovery-transient. |
| **Degradation contract** | Loading, stale, unavailable, unauthorized, indeterminate, failed, and fallback behavior where applicable. |
| **Accessibility contract** | Equivalent name, role, state, relationship, order, action, feedback, and modality requirements. |
| **Adaptation invariants** | Meaning that must survive platform, modality, scale, simultaneity, and presentation changes. |
| **Prohibited meanings** | Explicit claims the object or its presentation may never make. |

No descriptor field grants domain authority. Missing canonical basis makes a
Design Object non-conforming unless it is explicitly classified as
non-semantic presentation infrastructure outside this model.

# 7. Mapping Constraints

## 7.1 Design Objects are not implementation objects

Canonical Design Objects are not:

- React, Vue, or other framework components;
- HTML or native platform elements;
- CSS classes, selectors, pseudo-states, or style rules;
- Figma components, variants, frames, layers, or instances;
- routes, pages, screens, windows, dialogs, sheets, or views;
- database records, API resources, event handlers, or application stores;
- token names, visual primitives, or layout utilities.

A single Design Object may have multiple platform implementations. One
implementation object may realize several Design Object responsibilities only
when each contract remains separately traceable and testable.

## 7.2 Design Objects are not canonical professional objects

Design Objects must not be confused with:

- Matter, Artifact, Relationship, Collection, Working Set, Focus, Inspection,
  Current Situation, Decision, Operational Transition, Outcome, or Operational
  Memory;
- Workspace Scope or any canonical information space;
- Context Envelope, navigation context, navigation layer, or Attention Priority;
- interaction intent, authority, Evidence, or source truth.

A Subject Representation of a Decision is not the Decision. A Set
Representation of a Collection is not the Collection. A Semantic Region mapped
to Workbench Inquiry is not the Workbench or its information space.

## 7.3 Rendering and layout boundary

This model permits semantic composition and order dependencies only. It does not
define:

- coordinates, grids, flow direction, breakpoints, dimensions, spacing, or
  alignment;
- color, typography, elevation, material, icon, imagery, or motion values;
- simultaneous versus sequential presentation choices;
- concrete responsive behavior;
- platform control form or input binding.

Those decisions must implement this model without changing it.

# 8. Future Compatibility

## 8.1 Adapter equivalence

| Adapter family | Conformance interpretation |
|---|---|
| **Web** | May map Design Objects to document, application, canvas, or mixed rendering while preserving semantic contracts. |
| **Mobile** | May change disclosure and simultaneity while retaining identity, responsibility, interaction, state, and return. |
| **Desktop** | May use multiple windows or persistent work areas without creating multiple canonical truths or Focus identities. |
| **Voice / conversational** | Expresses Surfaces and Regions as bounded conversational contexts; renders Representations, Affordances, Indicators, and Feedback through language and turn structure. |
| **AI-mediated** | May organize, explain, or propose Design Object realizations while Watson provenance and non-authority remain explicit. |
| **AR/VR / spatial** | May distribute Design Objects spatially while proximity, depth, scale, and persistence create no unowned Relationship, authority, or priority. |
| **Print / static** | May omit interaction mechanics while preserving identity, hierarchy, state, provenance, currentness, and references. |
| **Automation / scripting** | May invoke Interaction Affordance contracts through non-visual adapters with the same validation, authority, consequence, and recovery. |
| **Future adapters** | Must map to existing Design Objects or pass canonical extension governance; novelty alone creates no new object type. |

## 8.2 Extension rule

A new platform or presentation technique does not justify a new canonical
Design Object. A proposed object type must prove:

1. a new semantic responsibility not expressible through DO-01–DO-11;
2. canonical basis and non-ownership boundaries;
3. platform independence across at least two materially different adapters;
4. required relationships, accessibility, degradation, and adaptation
   invariants;
5. no collision with domain objects, IA spaces, Visual Semantics, OI
   interactions, or implementation primitives;
6. approval through Design System governance.

# 9. Conformance Invariants

1. Every semantic realization maps to at least one Design Object type.
2. Every Design Object has one primary responsibility.
3. Every Subject Representation resolves to one canonical/source identity or
   explicitly governed projection.
4. Every representation declares its IA role.
5. No Design Object owns domain truth, authority, lifecycle, navigation, Memory,
   or Context Envelope.
6. No Surface is automatically a page, route, screen, device, or Workspace.
7. No Region creates information residency.
8. No Composition creates a domain Relationship or lifecycle sequence.
9. No Slot gains semantics from position alone.
10. No Set Representation becomes a Collection, Working Set, or corpus.
11. No Navigation Representation creates navigation state or Attention
    Priority.
12. Every Interaction Affordance maps to one canonical OI interaction.
13. Input mechanics never define the Interaction Affordance's meaning.
14. Every State Indicator maps to one primary semantic dimension.
15. Feedback distinguishes attempt, validation, cancellation, commitment,
    canonical event, indeterminate state, failure, recovery, correction, and
    reversal where applicable.
16. Transient Presentation preserves origin and deterministic return.
17. Disappearance never means cancellation, rejection, completion, or domain
    change.
18. Repetition never creates priority, certainty, or authority.
19. Visual containment never creates domain containment.
20. Adaptation never changes canonical identity, residency, authority,
    currentness, Focus, or recoverability.
21. Accessibility equivalents preserve the same professional meaning and
    interaction consequence.
22. Degraded conditions remain explicit and fail safe.
23. Historical representation cannot impersonate Current Situation.
24. Practice representation cannot impersonate production truth or authority.
25. A platform implementation cannot add or remove Design Object semantics.

# 10. Completion Criteria

The Canonical Design Object Model is complete when:

1. the fundamental inventory covers structural, representation, action, state,
   feedback, navigation, and transient presentation responsibilities;
2. every admitted object has a unique responsibility and explicit prohibition;
3. proposed ambiguous categories have an approved disposition;
4. permitted relationships are complete and cannot be mistaken for domain
   Relationships or ownership;
5. every object has a normative responsibility contract;
6. the descriptor supports canonical traceability, information role,
   interaction, persistence, degradation, accessibility, and adaptation;
7. mapping constraints prevent framework, HTML, CSS, Figma, component, token,
   and layout semantics from becoming canonical;
8. Web, Mobile, Desktop, Voice, AI, AR/VR, print, automation, and future adapters
   can preserve the same object meanings;
9. all conformance invariants pass against the Canonical Management Model and M6
   Charter;
10. downstream Design Semantics, Rendering Model, Tokens, Components, Layout,
    Accessibility, and Design-to-Code Mapping can consume this model without
    inventing another Design Object taxonomy.

## Architecture Verdict

```text
Approved for M6 dependency use
```

Independent Architecture Review approved the model for M6 dependency use on
2026-07-31. It authorizes no UI, component, token, layout, Figma, or
implementation production.
