# Design Principles

This folder contains the canonical visual philosophy of Management OS. It contains Markdown only: no reference images, production assets, or implementation instructions.

Principles are durable tests for design judgment. A proposed interface should be explainable through these documents before it is evaluated as attractive.

- [Canonical Status Registry](CANONICAL_STATUS.md)
- [M6 — Canonical Operational Design System Charter](M6%20-%20Canonical%20Operational%20Design%20System%20Charter.md) — **Architecture Definition**. Defines the purpose, scope, canonical inputs, output artifact classes, principles, boundaries, deliverable documents, and completion criteria for M6 without designing UI or components.
- [M6 — Canonical Design Object Model](M6%20-%20Canonical%20Design%20Object%20Model.md) — **Architecture Definition**. Defines the platform-independent Design System subject model, its eleven semantic object types, permitted relationships, responsibilities, mapping constraints, and conformance invariants without defining components or layout.
- [M6 — Canonical Design Semantics](M6%20-%20Canonical%20Design%20Semantics.md) — **Approved for dependency use**. Defines fourteen platform-independent semantic roles, independent qualifiers, composition rules, object mappings, adapter equivalence, and conformance criteria without defining appearance or implementation.
- [M6.3 — Canonical Rendering Model](M6.3%20-%20Canonical%20Rendering%20Model.md) — **Approved for dependency use**. Defines the platform-independent Rendering Tree, ownership and projection lifecycle, eleven Design Object-to-Rendering Node mappings, deterministic transformation, composition, replacement, degradation, the Platform Adapter boundary, invariants, and conformance without defining implementation technology.
- [M6.4 — Semantic Token Architecture](M6.4%20-%20Semantic%20Token%20Architecture.md) — **Approved for dependency use**. Defines six categories of canonical symbolic meaning, token ownership and lifecycle, deterministic Rendering Node resolution, the Platform Theme / Design System Adapter boundary, 36 invariants, and conformance without assigning concrete values.
- [M6.5 — Presentation State Model](M6.5%20-%20Presentation%20State%20Model.md) — **Approved for dependency use**. Defines nine independent presentation-state dimensions, Rendering Node applicability, guarded deterministic presentation state transitions, cross-dimension consistency, the Platform Runtime boundary, 40 invariants, and conformance without defining state mechanics.
- [M6.6 — Canonical Component Model](M6.6%20-%20Canonical%20Component%20Model.md) — **Approved for dependency use**. Defines nine platform-independent component categories, admissible Rendering Node subgraphs, deterministic composition, containment, reuse and replacement, the Platform Component Library boundary, 42 invariants, and conformance without defining platform components.
- [M6.7 — Composition and Layout System](M6.7%20-%20Composition%20and%20Layout%20System.md) — **Approved for dependency use**. Defines eight typed component relationships, seven non-geometric Structural Regions, eight Layout Intent obligations, deterministic composition and replacement, the Platform Layout Engine boundary, 44 invariants, and conformance without defining physical arrangement.
- [M6.8 — Canonical Interaction Patterns](M6.8%20-%20Canonical%20Interaction%20Patterns.md) — **Approved for dependency use**. Defines twelve pattern categories covering OI-01–OI-61, participant roles, guarded occurrence progression, cancellation, retry, interruption, recovery, composition, the Platform Interaction Runtime boundary, 46 invariants, and conformance without defining input mechanics.
- [M6.9 — Navigation Representation Model](M6.9%20-%20Navigation%20Representation%20Model.md) — **Approved for dependency use**. Defines eight projection-only navigation representation categories, deterministic destination and exposure rules, continuity, atomic replacement, degradation, recovery, the Platform Navigation Framework boundary, 45 invariants, and conformance without owning navigation or defining platform mechanics.
- [M6.10 — Rendering Contracts and Platform Adapters](M6.10%20-%20Rendering%20Contracts%20and%20Platform%20Adapters.md) — **Approved for dependency use**. Defines AC-01–AC-11, the aggregate Adapter Contract Set, deterministic capability matching, fallback and degradation, conformance evidence, and the three-layer Canonical Presentation Architecture, Platform Adapter, and Platform UI Framework boundary.
- [M6.11 — Accessibility Model](M6.11%20-%20Accessibility%20Model.md) — **Approved for dependency use**. Defines the Accessibility Contract, AO-01–AO-08 accessibility taxonomy, deterministic preservation, degradation and recovery, conformance, and the three-layer Canonical Accessibility Model, Platform Accessibility Adapter, and Platform Accessibility APIs boundary.
- [M6.12 — Motion Semantics](M6.12%20-%20Motion%20Semantics.md) — **Approved for dependency use**. Defines the Motion Contract, MT-01–MT-09 semantic taxonomy, deterministic motion and no-motion preservation, accessibility equivalence, degradation and recovery, conformance, and the Canonical Motion Semantics, Platform Motion Adapter, and Platform Animation / Rendering APIs boundary.
- [M6.13 — AI and Conversational Adapters](M6.13%20-%20AI%20and%20Conversational%20Adapters.md) — **Approved for dependency use**. Defines the Conversational Contract, CA-01–CA-08 adapter taxonomy, dialogue continuity, interaction and navigation preservation, accessibility and multimodal equivalence, deterministic degradation and recovery, and the canonical-to-AI adapter boundary.
- [M6.13 — AI and Conversational Adapters Architecture Review](M6.13%20-%20AI%20and%20Conversational%20Adapters%20Architecture%20Review.md) — Records the evidence-based review of all dependencies, contracts, preservation rules, 86 invariants, adapter boundary, degradation, recovery, and implementation independence, with the disposition **Approved for M6 dependency use**.
- [M6.14 — Design-to-Code Mapping](M6.14%20-%20Design-to-Code%20Mapping.md) — **Approved for M6 dependency use**. Defines the implementation-independent Design-to-Code Mapping Contract, DCM-01–DCM-12 taxonomy, stable source and mapping revision traceability, alias and artifact non-authority, compatibility, migration, degradation, recovery, conformance, and the canonical-to-implementation artifact boundary.
- [M6.14 — Design-to-Code Mapping Architecture Review](M6.14%20-%20Design-to-Code%20Mapping%20Architecture%20Review.md) — Records the independent evidence-based review of DCM-01–DCM-12, all 60 invariants, change, migration, degradation, recovery, the adapter boundary, implementation independence, and repository consistency, with the disposition **Approved for M6 dependency use**.
- [M6.15 — Conformance and Governance Framework](M6.15%20-%20Conformance%20and%20Governance%20Framework.md) — **Ready for Architecture Review**. Defines the independently reviewable Conformance and Governance Contracts, CF-01–CF-16 taxonomy, exact-revision evidence and deterministic qualification, authority-preserving change governance, final M6 gates, and the canonical-to-qualified-realization boundary without implementation mechanics.
- [Milestone M1 — Canonical Foundation Review](Milestone%20M1%20-%20Canonical%20Foundation%20Review.md)
- [Canonical Management Model Integrated](Canonical%20Management%20Model%20Integrated.md) — **Integration Milestone**. Records the completed architecture integration and canonical maturity closure before M6.
- [Operational Design Brief 01 — Operational Memory](Operational%20Design%20Brief%2001%20-%20Operational%20Memory.md) — **Canonical**. Defines append-only Matter-scoped consequential history without owning current truth.
- [Sprint 03 — Operational Memory Architecture Review](Sprint%2003%20-%20Operational%20Memory%20Architecture%20Review.md) — Records the approved repository, replay, projection, and recovery contracts and their executable conformance evidence.
- [Canonical Iconography](Canonical%20Iconography.md) — **Research Only — Advisory**. Informs representation strategy; Canonical Visual Semantics is the Canonical upstream semantic owner, and a future icon library must implement it.
- [Canonical Matter Experience](Canonical%20Matter%20Experience.md) — **Canonical**. Defines the shared professional experience contract for working with a Matter without owning lifecycle, authority, Context Envelope or domain truth.
- [Canonical Product Operating Model](Canonical%20Product%20Operating%20Model.md)
- [Canonical Operational Navigation](Canonical%20Operational%20Navigation.md) — **Canonical**. Defines the professional navigation layers, transition graph, Dynamic Operational Rail, projected navigation state, context continuity, and non-UI experience journeys.
- [Canonical Visual Semantics](Canonical%20Visual%20Semantics.md) — **Canonical**. Defines the semantic inventory, independent meaning dimensions, visual grammar, professional priority, persistence, and forbidden ambiguity without prescribing style or components.
- [Canonical Operational Interaction Language](Canonical%20Operational%20Interaction%20Language.md) — **Canonical**. Defines professional interaction intent, vocabulary, authority, consequences, persistence, feedback, recovery, and cross-input equivalence without prescribing controls or implementation.
- [Canonical Information Architecture](Canonical%20Information%20Architecture.md) — **Canonical**. Defines canonical information spaces, object residency, persistence, ownership, cross-surface representation roles, and Context Envelope continuity without prescribing layout or components.
- [Canonical Management Model Integration Review](Canonical%20Management%20Model%20Integration%20Review.md) — **Integration Hardening Review**. Records the completed dependency graph, sole ownership, controlled terminology, source boundary, canonicalization sequence, and closed architecture gates without creating a domain model.
- [Operational Navigation Governance](Operational%20Navigation%20Governance.md) — **Canonical**. Defines Matter attention priority, Focus interruption, Context recovery, and Navigation authority laws without prescribing UI or owning domain truth.
- [Canonical Workbench Audit](Canonical%20Workbench%20Audit.md)
- [Workbench Canonical Domain Model](Workbench%20Canonical%20Domain%20Model.md)
- [Artifact First](Artifact%20First.md)
- [Visual Gravity](Visual%20Gravity.md)
- [Visual Hierarchy](Visual%20Hierarchy.md)
- [Operational Atmosphere](Operational%20Atmosphere.md)
- [Operational Dynamics](Operational%20Dynamics.md)
- [Workbench Philosophy](Workbench%20Philosophy.md)
- [Thinking Before Clicking](Thinking%20Before%20Clicking.md)
- [Thinking Table](Thinking%20Table.md)
- [Negative Space](Negative%20Space.md)
- [Spatial Logic](Spatial%20Logic.md)
- [Spatial Hierarchy](Spatial%20Hierarchy.md)
- [Shared Thinking Surface](Shared%20Thinking%20Surface.md)
- [Watson Presence](Watson%20Presence.md)
- [Color Philosophy](Color%20Philosophy.md)
- [Investigation Mindset](Investigation%20Mindset.md)
- [Material Honesty](Material%20Honesty.md)
- [Night Thinking](Night%20Thinking.md)

Change a principle only through an explicit design decision. Do not weaken a principle to justify an isolated screen.

## Principle extraction

Design Principles are discovered through repeated evidence, not invented to justify a design preference.

1. Review a reference in its proper category.
2. Record its rationale in that category’s README.
3. Compare its lessons with independent accepted references.
4. Extract a principle only when the same durable idea appears consistently across multiple references.
5. Link the resulting principle back into future reference reviews and design decisions.

A single compelling image may be an accepted reference or canonical candidate. It is not, by itself, sufficient evidence for a permanent principle.
