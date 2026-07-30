# M6 — Canonical Design Semantics

## Status

```text
Architecture Definition
Milestone M6
```

## Authority

This document is the single source of truth for assigning semantic roles to
Canonical Design Objects. It defines which roles exist, how they compose, how
canonical dimensions qualify them, and how conformance is judged.

Canonical Design Semantics translates existing meaning. It creates no domain
object, information space, navigation context, interaction, authority, state,
priority, or visual meaning.

# 1. Purpose

The Canonical Design Object Model defines what kinds of Design Objects may
exist. Canonical Design Semantics defines what responsibility an occurrence of
one of those objects performs in a specific professional context.

The distinction is essential:

```text
Design Object type
        +
Primary semantic role
        +
Canonical basis and information context
        +
Independent semantic qualifiers
        =
Semantically assigned Design Object
```

Without this model, the same Design Object type could mean unrelated things on
different surfaces, appearance could become the source of meaning, generic
labels such as `content`, `status`, or `utility` could hide professional
distinctions, and platform adapters could invent their own role systems.

Design Semantics solves that problem by requiring every semantic occurrence to
declare:

1. one primary role;
2. one canonical basis;
3. one information-space responsibility and representation role where
   applicable;
4. only the independent qualifiers supported by canonical sources;
5. any OI interaction and authority boundary;
6. accessible and adapter-independent equivalent meaning;
7. explicit prohibited implications.

# 2. Semantic Principles

1. **Meaning Before Appearance.** Role is established before style, form,
   position, motion, material, or token.
2. **Canonical First.** Every semantic role assignment traces to a canonical
   model, IA contract, OI interaction, navigation projection, or Visual
   Semantics dimension.
3. **One Primary Role.** One Design Object occurrence performs one primary
   semantic responsibility.
4. **Independent Qualification.** State, authority, attention, currentness,
   provenance, and other dimensions qualify a role without replacing it.
5. **Explicit Intent.** Interactive meaning comes from an OI identifier and
   stated consequence, never an input mechanic.
6. **Context Aware, Context Honest.** The same canonical subject may have
   different declared representation roles in different contexts without
   acquiring different truth.
7. **Semantic Consistency.** The same role has the same responsibility,
   obligations, and prohibitions across all surfaces and adapters.
8. **Composition over Conflation.** Several responsibilities use several
   composed Design Objects; one object does not hide multiple primary roles.
9. **Source-Owned Meaning.** A semantic assignment represents canonical inputs;
   it never authors their value.
10. **Role Is Not Type.** Matter, Decision, Collection, Operational Memory, and
    Workspace Scope are canonical bases—not Design Semantic roles.
11. **Role Is Not State.** `Current`, `historical`, `loading`, `accepted`, and
    `unauthorized` are qualifiers, not replacement roles.
12. **Role Is Not Style.** Changing appearance cannot change role; changing role
    requires an attributable semantic assignment change.
13. **Accessibility Is Equivalent Meaning.** Non-visual and alternative input
    adapters receive the same role, basis, qualification, order, and consequence.
14. **No Implicit Authority.** Role availability, prominence, repetition, or
    containment grants no authority.
15. **Deterministic Semantics.** Identical canonical input, context, and role
    assignment produce equivalent meaning across adapters.

# 3. Canonical Semantic Role Model

## 3.1 Role assignment

A conforming semantic assignment has this form:

```text
Design Object
  ├─ one Primary Semantic Role (DSR-01–DSR-14)
  ├─ canonical basis
  ├─ IA space and representation role, when applicable
  ├─ OI interaction, when applicable
  ├─ independent Visual Semantics qualifiers
  └─ accessible/adapted expression
```

The primary role answers **why this Design Object exists here**. Qualifiers
answer independent questions about the represented meaning.

## 3.2 Structural roles

| ID | Primary semantic role | Responsibility | Required basis | Must not imply |
|---|---|---|---|---|
| **DSR-01** | **Surface Context Host** | Establish an adapter-addressable boundary for one active professional or governed non-production context. | Active context, adapter capability, dominant object, continuity contract. | Workspace ownership, route identity, domain scope, or new information space. |
| **DSR-02** | **Information Responsibility** | Present one IA space responsibility or compatible subset without changing residency. | IA-01–IA-13 mapping and applicable representation roles. | Navigation layer ownership, domain containment, or local truth. |
| **DSR-03** | **Semantic Composition** | Form one meaningful whole from independently assigned Design Objects. | Declared composition purpose, members, relationships, and invariants. | Layout, domain aggregation, lifecycle sequence, or canonical Relationship. |
| **DSR-04** | **Declared Semantic Place** | Reserve a named responsibility within a Composition for eligible Design Objects. | Semantic role, accepted DO types, obligation, cardinality class, fallback. | Coordinate, empty domain object, priority, authority, or framework slot. |

## 3.3 Subject representation roles

These four roles implement the representation roles owned by Canonical
Information Architecture. They are mutually exclusive for one Subject
Representation occurrence.

| ID | Primary semantic role | Responsibility | Required basis | Must not imply |
|---|---|---|---|---|
| **DSR-05** | **Primary Subject** | Provide the complete representation appropriate to the active professional context. | Canonical/source identity, current version, owning source, IA primary residency. | Ownership by presentation, universal completeness, or a second primary occurrence in the same context. |
| **DSR-06** | **Secondary Subject** | Provide a purpose-specific summary that retains identity, currentness, provenance, and path to primary/inspection. | Same subject identity plus explicit summary purpose and IA secondary permission. | Independent editability, copied state, or lower truth. |
| **DSR-07** | **Subject Reference** | Preserve a stable pointer and its relevance to the current context. | Identity, type, source/version/currentness, reference reason. | Containment, causality, authority, or complete representation. |
| **DSR-08** | **Subject Inspection** | Provide temporary depth into the same subject with origin, neighborhood, and return. | Subject identity, inspection purpose, origin, access, return. | Acceptance, Focus adoption, new residency, or reactivation of history. |

## 3.4 Projection and operational roles

| ID | Primary semantic role | Responsibility | Required basis | Must not imply |
|---|---|---|---|---|
| **DSR-09** | **Set Projection** | Represent an explicit set, query, sequence, or repeated projection and its organizing basis. | Source/query basis, member identity, ordering authority, completeness/currentness. | Domain Collection, Working Set, corpus ownership, priority from order/count, or Relationship from grouping. |
| **DSR-10** | **Navigation Context** | Express canonical orientation, destination, origin, suspension, interruption, or return state. | Canonical navigation projection, layer/context identity, continuity, validity. | Navigation transition, Focus, priority, lifecycle, or route authority. |
| **DSR-11** | **Professional Action** | Offer one canonical OI interaction for an identified subject and context. | OI ID, subject, actor, authority requirement, consequence, feedback, recovery. | Authority, execution, commitment, acceptance, or success by availability. |
| **DSR-12** | **Semantic State Communication** | Communicate one registered semantic dimension/value or a composition of separately recoverable dimensions. | Visual Semantics dimension, value, source, scope, currentness, equivalent language. | Generic status, mutation, priority, certainty, or authority without canonical input. |
| **DSR-13** | **Interaction Feedback** | Explain the exact processing condition and next valid path of an interaction. | Attempt/operation identity and OI lifecycle condition. | Domain success, canonical event, notification priority, or Memory from feedback alone. |
| **DSR-14** | **Transient Support** | Temporarily support inspection, comparison, explanation, choice, feedback, or recovery while preserving origin. | Supporting intent, subject/context, origin, return, persistence and dismissal semantics. | New information space, primary Focus, permanent destination, hidden Context Envelope, or consequence from disappearance. |

## 3.5 Disposition of proposed roles

| Proposed role | Canonical disposition |
|---|---|
| **Navigation** | Accepted as **DSR-10 Navigation Context**; Navigation itself remains canonically owned elsewhere. |
| **Workspace** | Not a role. Workspace Scope is canonical basis represented through DSR-01/02/05–08 as applicable. |
| **Context** | Split explicitly across Surface Context Host, Information Responsibility, Navigation Context, and Transient Support; no generic context role is admitted. |
| **Collection** | Not a role. A canonical Collection may be a represented subject; its members may use Set Projection. |
| **Content** | Rejected as too generic. Primary, Secondary, Reference, Inspection, and Set Projection state the actual responsibility. |
| **Action** | Accepted as **DSR-11 Professional Action** and requires an OI identifier. |
| **Feedback** | Accepted as **DSR-13 Interaction Feedback**. |
| **Memory** | Not a role. Operational Memory is canonical basis; its read-only query may be Primary/Inspection/Set Projection with historical qualification. |
| **Status** | Rejected as a generic role. Use **DSR-12 Semantic State Communication** with one named Visual Semantics dimension. |
| **Attention** | A Visual Semantics qualifier and governance input, not a primary role. |
| **Identity** | A mandatory semantic basis for subject roles, not a primary role by itself. |
| **Utility** | Non-semantic infrastructure classification, not a canonical semantic role. Any professional utility must declare its actual role. |

# 4. Independent Semantic Qualifiers

## 4.1 Qualifier rule

Qualifiers never become primary roles. Each qualifier:

- comes from an owning canonical source;
- identifies one Visual Semantics dimension;
- remains independent of other qualifiers;
- states source, scope, currentness, and accessible equivalent;
- cannot be inferred from style, location, frequency, or interaction mechanics.

## 4.2 Qualifier families

Canonical Design Semantics consumes, without redefining, the Visual Semantics
dimension registry:

| Qualifier family | Canonical source dimension |
|---|---|
| Subject identity and type | D-01 |
| Provenance | D-02 |
| Epistemic condition | D-03 |
| Review condition | D-04 |
| Authority | D-05 |
| Ownership and responsibility | D-06 |
| Attention relation | D-07 |
| Attention Priority | D-08 |
| Consequence and materiality | D-09 |
| Temporal urgency | D-10 |
| Lifecycle posture | D-11 |
| Operational participation | D-12 |
| Activity and execution | D-13 |
| Stability and deviation | D-14 |
| Temporal validity and currentness | D-15 |
| Relationship condition | D-16 |
| System availability | D-17 |
| Interruption classification | D-18 |

The role remains unchanged when a qualifier changes. For example, a Secondary
Subject can become stale, historical, challenged, or unavailable while
remaining a Secondary Subject.

# 5. Semantic Composition

## 5.1 Composition syntax

```text
Surface Context Host
  └─ Information Responsibility
       └─ Semantic Composition
            ├─ Declared Semantic Place
            │    └─ one eligible role-bearing Design Object
            ├─ subject/set/navigation role
            ├─ optional composed Professional Action
            ├─ optional composed Semantic State Communication
            └─ optional Interaction Feedback or Transient Support
```

This syntax expresses responsibility, not layout or rendering order.

## 5.2 Permitted combinations

| Primary role | May compose with | Dependency |
|---|---|---|
| Surface Context Host | Information Responsibility, Navigation Context, Transient Support | Must expose one active context and compatible adapter boundary. |
| Information Responsibility | Semantic Composition, subject roles, Set Projection, Navigation Context | Must map to one IA responsibility. |
| Semantic Composition | Any compatible role through Declared Semantic Places | Must preserve every child's primary role. |
| Declared Semantic Place | One or more eligible role assignments under declared cardinality | Eligibility exists before occupancy. |
| Primary/Secondary/Reference/Inspection Subject | Semantic State Communication, Professional Action, subject references, Feedback | All attached roles resolve to the same identified subject/context or state their distinct target. |
| Set Projection | Subject roles, Semantic State Communication, Professional Action for the set/query | Member identity and organizing basis remain explicit. |
| Navigation Context | Semantic State Communication, Professional Action, Transient Support | Navigation source and continuity remain canonical. |
| Professional Action | Semantic State Communication for availability/authority and Interaction Feedback | Must map to exactly one OI interaction. |
| Semantic State Communication | Another State Communication only through explicit multi-indicator Composition | Each indicator retains one primary dimension. |
| Interaction Feedback | Professional Action or identified interaction lifecycle reference | Cannot exist as unscoped professional feedback. |
| Transient Support | Inspection, Set Projection, Action, State Communication, Feedback | Must preserve origin, primary Focus distinction, and return. |

## 5.3 Mutual exclusions

1. DSR-05 Primary, DSR-06 Secondary, DSR-07 Reference, and DSR-08 Inspection are
   mutually exclusive for one Subject Representation occurrence.
2. DSR-11 Professional Action and DSR-13 Interaction Feedback cannot be the same
   Design Object occurrence.
3. DSR-12 Semantic State Communication cannot simultaneously encode more than
   one primary Visual Semantics dimension.
4. DSR-01 Surface Context Host and DSR-02 Information Responsibility cannot be
   collapsed when doing so would make a Surface own an IA space.
5. DSR-10 Navigation Context cannot double as Professional Action; a composed
   Affordance invokes Navigate, Return, or another OI interaction.
6. DSR-14 Transient Support cannot also be Primary Subject or permanent
   Information Responsibility.

## 5.4 Nesting rules

1. Structural roles may contain eligible role-bearing Design Objects through
   Composition and Slots.
2. Subject roles may compose State, Action, and Feedback objects but do not own
   their canonical inputs.
3. Set Projection may contain Subject Representations; nesting another Set
   Projection requires a distinct canonical grouping basis at each level.
4. Navigation Context may reference Regions/subjects but cannot contain their
   information truth.
5. Transient Support may host a temporary Composition but cannot become an
   ancestor of the permanent Surface context.
6. Nesting depth creates no authority, importance, causality, lifecycle, or
   information ownership.

## 5.5 Dependency order

```text
Canonical basis and current context
        ↓
Primary semantic role
        ↓
IA representation role / OI mapping
        ↓
Independent qualifiers
        ↓
Composition relationships
        ↓
Adapter expression
```

No downstream step may rewrite an upstream meaning.

# 6. Semantic Invariants

1. Every semantic Design Object occurrence has exactly one primary role.
2. Every primary role is one of DSR-01–DSR-14.
3. Every role assignment has a canonical basis.
4. Role is independent from appearance, style, token, geometry, and motion.
5. Appearance changes do not change role.
6. Role changes require an explicit semantic reassignment supported by context.
7. Roles do not duplicate canonical domain concepts or IA spaces.
8. Primary, Secondary, Reference, and Inspection are mutually exclusive per
   Subject Representation occurrence.
9. Multiple occurrences of one subject retain one canonical identity and truth.
10. Qualifiers never replace primary roles.
11. Each State Communication has one primary semantic dimension.
12. Compound state uses composed indicators or independently recoverable
    qualifiers.
13. `Status`, `content`, `context`, and `utility` are not accepted catch-all
    roles.
14. Professional Action always maps to one canonical OI identifier.
15. Interaction mechanics never define semantic role.
16. Interaction availability never implies authority.
17. Feedback never proves canonical commitment without owning event evidence.
18. Navigation Context never creates navigation, Focus, priority, or lifecycle.
19. Set Projection never becomes Collection, Working Set, or corpus.
20. Grouping, proximity, nesting, sequence, and repetition create no canonical
    Relationship.
21. Surface and Region roles create no Workspace or information residency.
22. Historical, current, stale, unavailable, and simulated are explicit
    qualifiers.
23. Operational Memory remains canonical basis, never a design-owned role or
    timeline truth.
24. Transient Support preserves origin and return.
25. Disappearance changes no professional meaning by itself.
26. Semantic composition preserves child roles and canonical identity.
27. Adapter expression cannot add, weaken, or reassign role.
28. Accessible expression carries equivalent role, basis, qualification, and
    consequence.
29. AI-mediated expression preserves Watson provenance and non-authority.
30. Semantic fallback states the missing meaning; it does not substitute a
    generic role.

# 7. Mapping Rules

## 7.1 Design Object to role matrix

| Design Object | Permitted primary roles |
|---|---|
| **DO-01 Presentation Surface** | DSR-01 Surface Context Host |
| **DO-02 Semantic Region** | DSR-02 Information Responsibility |
| **DO-03 Composition** | DSR-03 Semantic Composition |
| **DO-04 Semantic Slot** | DSR-04 Declared Semantic Place |
| **DO-05 Subject Representation** | DSR-05 Primary Subject; DSR-06 Secondary Subject; DSR-07 Subject Reference; DSR-08 Subject Inspection |
| **DO-06 Set Representation** | DSR-09 Set Projection |
| **DO-07 Navigation Representation** | DSR-10 Navigation Context |
| **DO-08 Interaction Affordance** | DSR-11 Professional Action |
| **DO-09 State Indicator** | DSR-12 Semantic State Communication |
| **DO-10 Feedback Presentation** | DSR-13 Interaction Feedback |
| **DO-11 Transient Presentation Layer** | DSR-14 Transient Support |

No adapter or implementation may assign another primary role without changing
this canonical model through governance.

## 7.2 Mapping contract

Every assignment records:

| Field | Requirement |
|---|---|
| Design Object | DO ID and type. |
| Primary role | One DSR ID. |
| Canonical basis | Model, subject/projection identity, source, and version/currentness where applicable. |
| Professional context | Matter/non-production boundary, active intent, dominant object, and Context Envelope reference as applicable. |
| IA mapping | Space responsibility and Primary/Secondary/Reference/Inspection role where applicable. |
| OI mapping | OI identifier, subject, authority, consequence, persistence, cancellation, retry, and recovery where applicable. |
| Qualifiers | Independent D-01–D-18 values supported by canonical sources. |
| Composition | Parent purpose, Slot role, dependencies, and child relationships. |
| Accessible equivalent | Role, name, state, relationship, action, order, and feedback expression. |
| Prohibitions | Meanings the assignment must not imply. |

## 7.3 Canonical mapping examples

These are semantic statements, not UI designs:

- A Decision in IA-07 uses DO-05 + DSR-05, with Decision identity as canonical
  basis and independent authority/currentness qualifiers.
- The same Decision summarized in Matter Context uses DO-05 + DSR-06 and
  preserves a path to its primary/inspection context.
- A link to a historical Decision uses DO-05 + DSR-07 with historical
  qualification; entering history creates a separate DSR-08 occurrence.
- A query over Operational Memory uses DO-06 + DSR-09; each event member uses
  DO-05 with Reference or Inspection role. The set is not Memory.
- An offer to Record Decision uses DO-08 + DSR-11 mapped to OI-32, with authority
  and availability shown through separately composed DO-09 objects.
- An indeterminate Record Decision attempt uses DO-10 + DSR-13 and preserves the
  operation identity and recovery path without reporting success.
- A canonical navigation return projection uses DO-07 + DSR-10; invoking Return
  uses a composed DO-08 + DSR-11 mapped to OI-52.

# 8. Adapter Independence

## 8.1 Equivalence rule

Adapters may change expression, sequencing, simultaneity, sensory channel, and
input mechanics. They may not change:

- Design Object type;
- primary semantic role;
- canonical basis;
- IA or OI mapping;
- qualifier meaning;
- authority and consequence;
- origin and return;
- accessible equivalence.

## 8.2 Adapter interpretations

| Adapter | Equivalent semantic expression |
|---|---|
| **Web** | May express roles through document, application, canvas, or mixed rendering without making markup semantic authority. |
| **Mobile** | May serialize roles that were simultaneous while preserving dominant object, context, order, and return. |
| **Desktop** | May distribute roles across windows or work areas while preserving one canonical subject identity and Focus. |
| **Voice / conversational** | Expresses role, basis, qualification, relationship, available OI interaction, and feedback through explicit language and turn order. |
| **AI-mediated** | May organize or explain role assignments but cannot infer acceptance, truth, Focus, authority, or priority. |
| **AR/VR / spatial** | May use position, distance, persistence, and depth only as governed signals; spatial arrangement does not alter roles. |
| **Print / static** | Preserves subject roles, hierarchy, state, provenance, currentness, and references while omitting unavailable interactions explicitly. |
| **Automation** | Consumes Professional Action roles through the same OI validation, authority, consequence, idempotency, and recovery contracts. |

# 9. Conformance Criteria

A design conforms only when:

1. every semantic Design Object has one valid DSR role;
2. role-to-Design-Object mapping is allowed by §7.1;
3. canonical basis and source ownership are traceable;
4. applicable IA and OI mappings are explicit;
5. qualifiers come from independent canonical dimensions;
6. role, qualifier, and appearance remain distinct;
7. mutual exclusions and nesting rules pass;
8. composition preserves identity and child roles;
9. no generic role hides a professional distinction;
10. no role creates domain truth, information residency, navigation, authority,
    priority, Memory, or Context Envelope;
11. state and feedback do not impersonate canonical commitment;
12. historical/current and practice/production boundaries remain explicit;
13. accessible expression communicates equivalent meaning and operation;
14. degraded and unavailable semantics fail safely;
15. at least two materially different adapter expressions can preserve the same
    assignment without changing the canonical role.

## Deterministic verdict

```text
Pass
```

when every criterion is satisfied;

```text
Fail
```

when any role, qualifier, composition, or adapter expression adds, removes,
duplicates, or ambiguously reassigns canonical meaning;

```text
Not Applicable
```

only for explicitly non-semantic presentation infrastructure with no
professional meaning, interaction, state, orientation, or feedback.

# 10. Completion Criteria

Canonical Design Semantics is complete when:

1. all Design Objects have a bounded set of permitted primary roles;
2. all roles have unique responsibilities, required bases, and prohibitions;
3. ambiguous proposed roles have explicit dispositions;
4. primary role and qualifier semantics are formally separated;
5. permitted combinations, mutual exclusions, nesting, and dependency order are
   complete;
6. all semantic invariants are testable;
7. mapping rules preserve the Design Object Model, IA, OI, Navigation, Memory,
   Visual Semantics, and authority boundaries;
8. Web, Mobile, Desktop, Voice, AI, AR/VR, print, and automation adapters retain
   equivalent meaning;
9. conformance produces an unambiguous verdict;
10. Rendering Model, Design Tokens, Component Model, Layout System,
    Accessibility Model, and Design-to-Code Mapping can consume the role system
    without inventing another semantic taxonomy.

## Architecture Verdict

```text
Canonical Design Semantics Defined
```

This model authorizes downstream M6 architecture work. It defines no component,
token, layout, Figma artifact, CSS, React implementation, or concrete UI.
