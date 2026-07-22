# Platform Responsibility Model

## Purpose and status

Management OS is one product expressed through complementary Desktop and Mobile
experiences. Platform responsibilities are allocated by operating context,
cognitive complexity, and consequence rather than by feature parity.

| Property | Decision |
| --- | --- |
| Status | Approved product and interaction architecture; not implemented |
| Delivery milestone | Sprint 8 |
| Accountable owner | Product Architect & AI Strategist |
| Product approval | Product Owner |
| Architectural role | Cross-platform responsibility and capability-allocation authority |
| Scope | Product and interaction architecture only |

This document is canonical for the long-term responsibility boundary between
Desktop and Mobile. The [Mobile Experience Architecture](MOBILE_EXPERIENCE_ARCHITECTURE.md)
remains authoritative for the detailed mobile experience. Existing product,
Assistant, domain, data, and technical architectures remain authoritative for
their subjects.

## Current implementation boundary

Management OS is currently a static browser prototype using device-local browser
storage. Responsive presentation does not establish the complementary platform
model described here.

This architecture introduces no Desktop or Mobile application, synchronization,
identity, authentication, permissions, offline mutation, cross-device handoff,
notification delivery, global intelligent Search, or AI runtime behavior. Each
requires approved architecture and proportionate Implementation Planning through
the applicable direct or extended governance lane.

## Product philosophy

The canonical principle is:

> Desktop builds and manages the operational system. Mobile provides fast access,
> capture, retrieval, and lightweight interaction.

Desktop supports sustained attention, broad context, detailed manipulation, and
structural judgment. Mobile supports short attention windows, immediate intent,
one-handed access, and bounded action.

Both platforms use the same organizational truth, authority model, Product
Language, and product principles. Neither platform should become a reduced copy of
the other. A capability may be shared while its depth and interaction model differ
by platform.

The owner should experience continuity without expecting identical screens,
navigation, information density, or workflows.

## Platform responsibility model

### Desktop role

Desktop is the **operational system workspace**. It is responsible for
constructing, understanding, governing, and substantially changing the owner's
operational environment.

Desktop optimizes for:

- sustained work sessions;
- multi-entity context and comparison;
- detailed creation and editing;
- process and workspace design;
- organizational review and evidence synthesis;
- structural, administrative, and governance decisions;
- complex error, exception, and conflict resolution.

Desktop is where the owner works **on the operational system** as well as where
deeper operational work is performed.

### Mobile role

Mobile is the **operational companion**. It makes Management OS immediately
available during brief and contextual moments without exposing unnecessary
organizational structure.

Mobile optimizes for:

- immediate Natural Capture;
- fast cross-system retrieval;
- current-work continuity;
- concise status inspection;
- bounded progress updates;
- lightweight, well-understood decisions;
- contextual Assistant support;
- calm, selective interruption;
- explicit continuation on Desktop.

Mobile is where the owner stays connected **to the operational system** without
having to manage its structure.

### Allocation boundary

```text
Intent or immediate need
          |
  Can Mobile resolve it safely?
      |-- Yes -> Retrieve, capture, continue, or decide
      `-- No  -> Preserve context and hand off
                          |
                       Desktop
                          |
             Author, compare, govern, or restructure
```

A complete workflow belongs on Mobile only when:

- the owner's intention is clear;
- the necessary context can be presented concisely;
- the consequence can be fully understood;
- correction remains straightforward;
- the interaction does not require sustained comparison;
- authority and provenance remain visible.

Otherwise, Mobile prepares continuity and Desktop completes the work.

### Platform authority

Platform choice never changes authority:

- the owner retains consequential decision authority;
- domain modules retain record ownership, validation, and mutation;
- the Assistant may prepare, explain, clarify, and recommend on either platform;
- Mobile cannot bypass validation because its interaction is shorter;
- Desktop gains no autonomous authority from presenting more context;
- equivalent approvals have the same semantic meaning across platforms.

## Capability allocation

Capabilities are allocated as shared foundations, shared experiences with different
depth, Desktop-oriented workflows, or Mobile-oriented workflows. A platform-
oriented workflow may remain visible or readable elsewhere without reproducing its
complete interaction.

### Shared foundations

The following meanings remain consistent across platforms:

- identity and permissions;
- organizational records and entity identity;
- source and provenance;
- approval semantics and history;
- Natural Capture lifecycle;
- Assistant authority and learning boundaries;
- Search scope and result meaning;
- recommendation and active-work status;
- Product Language;
- privacy, retention, and freshness rules;
- failure and degraded-state semantics.

Presentation may differ, but underlying state and authority must not.

### Shared capabilities with platform-specific depth

| Capability | Desktop responsibility | Mobile responsibility |
| --- | --- | --- |
| Home | Broad orientation and entry to deeper work | Immediate intent, continuity, and selective attention |
| Search | Exploration, filtering, comparison, and source inspection | Fast retrieval and concise sourced answers |
| Natural Capture | Detailed review, correction, routing, and follow-up | Immediate input, temporary preservation, concise clarification, and approval |
| Active work | Full context, planning, editing, and exception handling | Resume the current step and record bounded progress |
| Recommendations | Evidence comparison, detailed review, and structural action | Triage, concise evidence, defer, or approve bounded outcomes |
| Knowledge | Author, organize, connect, and maintain | Retrieve, read, and capture a candidate contribution |
| SOP | Author, restructure, compare, and govern | Retrieve, follow, and report a bounded observation |
| Reviews | Complete structured or evidence-rich evaluation | Record a short observation or inspect concise status |
| Personal Operational Model | Inspect, correct, revoke, and govern learning | Benefit from approved preferences and provide explicit corrections |
| Settings | Full configuration and governance | Immediate personal, privacy, accessibility, and notification controls |

### Desktop-oriented workflows

Desktop is the primary completion surface for:

- detailed Knowledge authoring;
- SOP creation and restructuring;
- large-scale operational Reviews;
- multi-record comparison and editing;
- portfolio and workload restructuring;
- workspace configuration and Adaptive Workspace approval;
- Personal Operational Model inspection and revocation;
- conflict resolution;
- bulk or destructive operations;
- architecture, governance, and administrative work;
- complex evidence evaluation.

Mobile may provide summaries, read access, urgent exceptions, or continuation
without reproducing these workflows.

### Mobile-oriented workflows

Mobile is the preferred surface for:

- immediate Natural Capture;
- one-handed Global Search;
- quick operational reference;
- resuming the current bounded step;
- recording short progress or an observation;
- owner-requested reminders;
- time-sensitive operational exceptions;
- contextual retrieval at the point of work;
- preserving an idea for later development;
- initiating Desktop continuation.

Desktop may also support these capabilities, but Mobile optimizes their speed and
contextual availability.

### Allocation test

Every platform proposal should ask:

1. Is the need primarily immediate or does it require sustained attention?
2. How much context must remain visible simultaneously?
3. Can the full consequence be understood in the proposed interaction?
4. Does the action affect one bounded object or organizational structure?
5. Is an error easy to correct?
6. Would handoff reduce risk without adding avoidable owner work?

These answers determine responsibility more reliably than screen size.

## Synchronization philosophy

Synchronization creates continuity; it does not force visual or workflow parity.
Both platforms participate in one canonical organizational state and preserve:

- stable entity identity;
- provenance and approval history;
- active-work position;
- recommendation disposition;
- domain ownership and validation;
- explicit learning actions;
- timestamps and freshness;
- unresolved conflicts.

Platform-local state never silently becomes an independent authority.

### Synchronization principles

1. **State before presentation.** Synchronize meaningful organizational state, not
   every transient layout preference.
2. **Intent before mutation.** An offline or uncertain action remains pending until
   it can be validated safely.
3. **No false completion.** Local acceptance is not applied until the owning module
   confirms it.
4. **No silent conflict resolution.** Consequential conflicts remain visible for
   reconciliation.
5. **Explicit freshness.** Current, cached, stale, local-only, pending, failed, and
   synchronized states remain distinct.
6. **Context-preserving handoff.** Continuation retains the entity, relevant
   position, temporary input, and intended next action.
7. **Bounded temporary state.** Drafts, queries, and interaction context synchronize
   only under explicit privacy and retention rules.

Synchronization requires separate approved architecture. This model defines its
product obligations, not its technology.

## AI behavior across platforms

The AI Assistant has one identity, authority model, communication standard, and
learning boundary across Desktop and Mobile. Platform context changes assistance
depth, not truthfulness or authority.

On both platforms, the Assistant:

- uses available organizational context;
- performs reasonable organizational preparation;
- distinguishes evidence, interpretation, recommendation, approval, and applied
  change;
- communicates uncertainty and missing context honestly;
- asks concise clarification only when necessary;
- proposes rather than autonomously mutates;
- learns permanently only through explicit owner action;
- preserves correction, direct access, and degraded operation.

### Desktop Assistant behavior

Desktop may provide deeper evidence synthesis, multi-entity comparison, detailed
proposal preparation, extended clarification when genuinely required, complete
recommendation review, complex draft preparation, and inspection or correction of
Assistant reasoning and approved learning.

### Mobile Assistant behavior

Mobile assistance is shorter, contextual, action-bounded, interruption-sensitive,
easy to defer, explicit about omitted context, and prepared for Desktop
continuation.

Mobile must not compress a complex recommendation until material evidence or
consequences disappear. When safe judgment does not fit the interaction, the
Assistant summarizes the issue and prepares handoff.

### Cross-platform learning boundary

Routine platform behavior is not permanent preference evidence. Opening an entity,
dismissing a notification, choosing Desktop, or abandoning a Mobile workflow does
not establish a permanent preference or organizational decision. Repeated behavior
may support a recommendation, but the owner must explicitly approve learning.

## UX implications

Consistency applies to meaning rather than identical layout. Platforms share
terminology, entity identity, status, approval language, recommendation state,
confidence communication, failure behavior, source, and provenance.

They may differ in navigation, information density, progressive disclosure,
editing depth, simultaneous context, handoff use, and interruption behavior.

### Desktop implications

Desktop provides broad context, efficient comparison and editing, persistent
orientation, visible entity relationships, complete evidence before structural
decisions, safe administrative operations, and strong keyboard and accessibility
support. Its larger surface does not justify passive information overload.

### Mobile implications

Mobile provides immediate Search and Capture, one dominant purpose per state,
minimal navigation depth, one-handed common actions, concise source and freshness,
interruption recovery, calm exit, explicit temporary and pending state, and clear
Desktop continuation. Gesture-only interaction is never required.

### Handoff implications

Handoff is a normal platform transition, not a failure. It explains:

- why Desktop is appropriate;
- what context will be preserved;
- what has already been saved;
- what remains temporary;
- what the owner will encounter next.

When approved synchronization supports it, the owner should not repeat Search,
re-enter Capture, relocate an entity, or reconstruct the reason for transition.

### Interruption implications

Notifications are a Mobile strength and an organizational risk. They are reserved
for owner-requested timing, material time-sensitive exceptions, blocked work
requiring judgment, or failure of an approved action. Ordinary recommendations and
passive Insights remain inside Management OS.

## Architecture impact

This model adds a responsibility layer above platform-specific feature
architectures without changing domain ownership:

```text
Product Vision and Owner Journey
                |
Platform Responsibility Model
       |-----------------|
    Desktop            Mobile
       |                  |
Specialized work     Retrieval, Capture,
and governance       continuity, bounded action
       |------------------|
                |
 Shared domain modules and organizational truth
```

Future implementation must preserve one canonical domain model, one approval and
authority model, stable entity identity, owning-module validation, shared
provenance, explicit freshness states, equivalent action semantics, a platform-
independent Assistant identity, bounded temporary-state retention, visible
conflicts, and direct access without mandatory AI mediation.

Complete cross-platform continuity depends on separately approved identity,
authentication, permissions, synchronization, conflict handling, offline
retention, device privacy and revocation, handoff, notification delivery, Global
Search, and shared temporary-state semantics.

### Architecture risks and controls

| Risk | Control |
| --- | --- |
| Feature-parity pressure | Allocate by context, complexity, and consequence |
| Separate platform truth | Shared domain ownership and stable entity identity |
| False synchronization | Explicit local, pending, stale, failed, and applied states |
| Mobile approval without evidence | Consequence test and Desktop handoff |
| Desktop complexity growth | Intent-first hierarchy and progressive disclosure |
| Inconsistent AI authority | One Assistant identity and approval model |
| Notification-driven anxiety | Material-value interruption standard |
| Lost handoff context | Preserve entity, position, input, and intended next action |
| Implicit behavioral learning | Require explicit owner adoption |

## Product Review implications

The canonical Product Review question applies:

> Does this change reduce the owner's cognitive noise while preserving every
> decision that genuinely requires human judgment?

Every platform-specific proposal must also establish:

- why the capability belongs on the selected platform;
- the complementary behavior on the other platform;
- context and authority preserved across handoff;
- whether specialization removes rather than relocates cognitive work;
- whether the design preserves one source of truth;
- whether failure, offline, and synchronization states remain honest;
- whether interruption is necessary and valuable;
- whether accessibility is preserved on each supported platform.

Feature parity is not evidence of completeness. A platform is complete when it
fulfills its canonical responsibility reliably.

## Recommendation

Adopt the canonical model:

> Desktop builds, manages, reviews, and governs the operational system. Mobile
> provides immediate retrieval, effortless capture, active-work continuity, and
> lightweight interaction. Both platforms share one organizational truth, one
> authority model, and one Assistant identity.

This model governs future capability allocation above individual Desktop and
Mobile feature architectures. Future proposals should identify the owner's
context, assign a primary platform, define complementary behavior, state handoff
and synchronization expectations, preserve identical organizational semantics,
and reject parity that adds complexity without owner value.

This architecture introduces no implementation, synchronization system, entity,
or change to existing module ownership.
