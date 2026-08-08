# Living Organizational Model Interaction Architecture

## Architecture state

- Status: non-canonical Interaction Architecture proposal for authority consideration
- Product authorities: Living Organizational Model, Improvement, and People & Privacy adopted
- Operational Operating Model: sole governed organizational representational authority
- Interaction Architecture adoption: not yet authorized
- Engineering Architecture and implementation: not authorized

This artifact defines technology-independent interaction contracts for the adopted upper Product composition. It does not select a framework, component library, graph engine, persistence model, API, authorization mechanism, visual style implementation, or delivery plan.

## Interaction objective

The primary experience helps an operational manager progressively build, understand, navigate, question, and deliberately evolve a living representation of the organization.

The interaction must make four things continuously legible:

1. where the manager is in the organization;
2. what is known, incomplete, disputed, or historical;
3. what object or relationship currently has focus;
4. what the next natural human action is.

The Living Organizational Model is a projection over source-governed Operating Model records. Interaction may compose, inspect, propose, and route changes; it cannot create a competing organizational truth or imply that screen position establishes hierarchy, authority, importance, or causality.

## Shared interaction grammar

All upper-composition surfaces reuse these roles:

- **Context frame** — organization identity, current location, temporal/current-state indicator, and stable route back.
- **Primary workspace** — the dominant organizational map, department, process, role, or person context.
- **Focused selection** — one selected object or relationship at a time.
- **Inspector** — progressively disclosed detail, source, history, relationships, correction, and permitted actions without losing workspace context.
- **Working Set** — an explicit, temporary collection selected for current thinking; adding an item does not create Evidence, ownership, approval, or durable organizational meaning.
- **History** — a separate current-versus-past view reached on demand; current state remains primary.
- **Watson presence** — quiet, contextual, source-linked, and absent when it has no useful intervention.

Selection and navigation are different. Selecting an object opens focused inspection within the current workspace. Opening its dedicated workbench navigates while preserving a clear return path and prior focus where practical.

Every interactive object exposes a recognizable type, human label, hover feedback where a pointer exists, visible keyboard focus, active/pressed feedback, selected state, and an accessible name. State is never communicated by color, location, or motion alone.

## Primary entry and first use

### Entry states

If no organization exists, the primary destination is a sparse organization entry surface with one dominant action:

> **Створити організацію**

Supporting access to an existing organization, import concepts, or advanced setup must not compete with that action and must not claim unavailable capabilities.

The minimum creation request is organization name. Purpose or short context may be optional. The manager is not asked for departments, people, systems, goals, or a complete structure before entering the workspace.

After creation, the manager arrives in the Living Organizational Model with:

- organization identity and editable short purpose;
- an honest “structure not yet added” state;
- one dominant next action, normally **Add first department**;
- secondary options to add a process, system, SOP, interaction, or mark an unknown area when that better matches current knowledge.

No setup percentage, checklist completion score, mandatory tour, disabled future module, or full-schema wizard appears. Dismissal of guidance leaves the organization usable.

### Returning entry

Returning opens the last meaningful organization context when safe, with current state primary. A compact recency area may expose recent departments, processes, Investigations, and Improvements without becoming a feed or activity score. The user can always return to the Organization Map or search directly.

## Organization Constructor

### Role

The Constructor is a mode of progressive in-context editing, not a separate administration application. The manager builds understanding from the Map, a Workbench, or an Inspector by adding the smallest meaningful element or relationship.

### Core construction loop

```text
orient in current context
  -> choose one meaningful element or relationship
  -> enter minimum known information
  -> review source / known-unknown status
  -> place or connect it in context
  -> inspect result
  -> continue, refine, or leave
```

Creation never requires every supported field. Unknown is a valid explicit value; omission remains distinguishable from “not applicable” and from disputed information.

### Object creation contract

The first step asks what the manager is adding in human language: department, role, person where permitted, process, system/tool, SOP, KPI/measure, recurring report, meeting, interaction, or unknown area.

The minimum create surface requests only:

- recognizable name or human description;
- current parent/context when necessary;
- known/unknown/disputed state when material;
- source class or “source to confirm” where required.

After creation, focused inspection offers progressive details and relationships. Long forms are divided by meaning and appear only when invoked. Save language states the actual consequence; leaving with unsaved input prompts proportionately and never discards silently.

### Departments and hierarchy

- Add a department from the organization, a parent department, or an unplaced-elements area.
- Editing identity is distinct from moving hierarchy.
- A hierarchy move previews old and proposed parent, affected reporting structure, and unresolved consequences before confirmation.
- Reporting relationships and operational relationships use distinct creation actions and labels.
- Removing or archiving a department reveals linked roles, people, processes, systems, SOPs, work contexts, and history; it never silently deletes or reparents them.

### Roles and named people

- Roles may exist without named occupants and are the preferred early representation.
- Adding a named person is available only where People & Privacy authority, purpose, and visibility allow it.
- The flow states why identity is needed and distinguishes role occupancy, reporting, responsibility, participation, and source relationships.
- Role or department changes are effective-dated and preview historical non-rewrite behavior.
- Restricted or subjective fields never appear as convenient default profile completion prompts.

### Operational elements

- Systems, SOPs, KPIs, processes, reports, and meetings are added from the context where they become meaningful.
- The manager may link an existing object instead of creating a duplicate.
- Search and duplicate cues precede creation where source identity matters.
- Relationships are proposed explicitly with source, destination, type, direction, status, and known limitations.
- Unknown or incomplete elements remain navigable and refinable without appearing broken.

### Arrangement

Direct manipulation may arrange a view, but layout changes cannot silently mutate authoritative hierarchy or relationships. A hierarchy or relationship change uses an explicit semantic action. Manual view arrangement is personal/presentational unless separately confirmed as organizational meaning.

## Organization Map

### Purpose and stable frame

The Organization Map provides overview, navigation, focus, and relationship inspection. It is not a decorative org chart, universal graph, causal map, dashboard, or detective board.

Always visible in the primary map state:

- organization identity and current scope;
- department-level structural anchors;
- current focus and selected layer;
- known/unknown/disputed legend in human language;
- route to search and add/refine;
- a stable way back from narrowed focus.

Not always visible:

- every role, person, process, system, SOP, KPI, report, meeting, work context, or historical relationship;
- technical identifiers, provenance locators, version metadata, access rules, or all labels;
- all relationship types simultaneously.

### Layers and density

The Map begins with organizational structure. The user may activate one supporting relationship concern at a time, such as reporting, operational dependencies, information flows, systems, processes, SOP connections, active Investigations, active Improvements, or incomplete/disputed areas.

Activating a layer changes emphasis and visible relationships; it does not hide material warnings relevant to the current focus. Layer selection is explicit, reversible, and named. The Map never combines all layers into an unreadable network by default.

Scale changes semantic density:

- organization scale: departments, major structural relationships, selected cross-department dependencies, active-work indicators, and material unknown/disputed areas;
- department scale: roles, key processes/systems, interdepartmental boundaries, and selected work contexts;
- focused object scale: immediate typed relationships and inspection entry.

Zoom or scale does not merely shrink text. Labels collapse to recognizable summaries; details move to Inspector. Keyboard and non-gesture alternatives provide equivalent scale/focus changes.

### Focus and selection

Selecting one object:

- visibly marks it without implying priority or truth;
- dims only nonessential context while preserving orientation;
- exposes immediate typed relationships;
- opens or updates Inspector;
- preserves the same Map position when Inspector closes.

Selecting a relationship exposes direction, type, endpoints, purpose, source state, uncertainty/dispute, and relevant work links. Decorative connectors are prohibited. Line style, label, and accessible description carry the relationship meaning together.

Opening a department or object workbench is an explicit action distinct from selection. Back returns to the prior Map scope, layer, scale, selection, and focus target where practical.

### Large-organization navigation

Large organizations remain navigable through hierarchical scope, semantic scale, search-to-focus, breadcrumbs, layer filtering, saved personal viewpoints where later authorized, and an unplaced/unknown area. Off-screen minimaps or overview aids may be considered only if they improve orientation and remain keyboard accessible; they are not required by this architecture.

The Map limits simultaneous labels and edges by relevance to scope and selection, not by silently discarding uncertainty or restricted existence. Restricted relationships do not leak through gaps, counts, or unexplained connectors.

## Department Workbench

### Purpose and composition

The Department Workbench answers: **How does this department operate, what does it depend on, and what remains unresolved?** It preserves organization context through a stable parent route and local relationship orientation.

The primary viewport composes:

- department identity, purpose, current known/disputed state, and accountable leadership role where permitted;
- a concise current operating picture;
- a small set of meaningful structural groups: roles/responsibilities, work/processes, systems/SOPs/measures, and interactions;
- material unresolved or conflicting items;
- current active Investigation or Improvement context when relevant;
- one natural next action based on the current focus.

Secondary detail is progressively disclosed through selection, Inspector, or dedicated detail surfaces. The Workbench is not a grid of equal cards and does not show every category merely because the schema supports it.

### Information areas

- **People and roles:** role-first summary; named people only where necessary and permitted. Opens Role or Person Workbench without exposing restricted data.
- **Responsibilities and authority:** typed scope, current holder role, unresolved ownership, and source status.
- **Processes:** key process summaries and handoffs; opens Process detail.
- **Systems/SOPs/KPIs:** concise relationship summaries, status/limitations, and linked processes.
- **Reports/meetings:** purpose, cadence, role participation, information exchanged, and linked process/interaction.
- **Interdepartmental interactions:** directional boundary relationships with expected result, friction, and uncertainty.
- **Unresolved/conflicting:** material questions and parallel attributable descriptions, never silently resolved.
- **History:** Investigation, Improvement, Decision, Monitoring, Stabilization, and Memory references on demand, current state first.

### Editing

Edit actions operate on the selected source-governed item or relationship. The Workbench cannot offer a generic “edit department” form that silently changes linked records. Consequential changes preview affected relationships and authority boundaries.

## Role and Person Workbenches

### Separate but related surfaces

Role and Person are separate operational contexts:

- **Role Workbench:** what the organization expects from a role—purpose, responsibilities, decision boundaries, processes, systems, SOPs, interactions, occupancy history, and unresolved assignment questions.
- **Person Workbench:** the minimized, permitted organizational context of a named person—current role/department, effective history, current responsibilities, permitted operational relationships, and source-linked contributions/work participation.

A combined presentation may link them closely but cannot collapse role expectations into person performance or treat current occupancy as permanent identity.

### Privacy interaction obligations

- Restricted, sensitive, and subjective information is absent by default and does not leak through counts or blank headings.
- Views are purpose-filtered; access to one surface does not broaden source access.
- Contribution and participation history uses narrow role labels and source links; no counts, ratios, rankings, or outcome attribution.
- Current and historical roles are visually and linguistically distinct.
- Correction/dispute status is inspectable without presenting disputed content as fact.
- Protected-source restrictions provide the maximum safe explanation and accountable review route defined by adopted People & Privacy policy.
- Search results show only the minimum identity/context the viewer is authorized to know.

The Person Workbench never provides a universal timeline of communications, activity, attendance, manager notes, private information, or inferred behavior.

## Person-as-Source interaction contract

### Entry and language

In a supported context, source attribution uses the primary question:

> **Хто надав цю інформацію?**

The user may search or browse:

```text
Організація -> Підрозділ -> Людина
```

Search and browse reveal only permitted identity and current organizational context. Free-text, unknown, protected, or non-person source options remain available where the owning context permits them; the UI does not force a named person merely to complete a record.

### Selection and confirmation

Selecting a person shows a concise confirmation with:

- person name;
- contribution-time role and department, defaulted from the communication date only when supported;
- communication date/time or “unknown”;
- source relationship wording such as “provided this information.”

If historical capacity is uncertain, the user chooses or records “role/department to confirm” rather than accepting current capacity silently. Changing communication time may require re-evaluating the historical role snapshot and clearly shows that effect.

### Progressive detail

Optional detail includes communication form, direct/indirect/mixed/unknown knowledge basis, uncertainty/limitation, explicit subject where necessary, and source-visible correction or dispute information. Recording time and recorder are system/context facts shown in Inspector, not primary input unless correction is needed.

### Completion and later inspection

The primary action states the actual consequence, for example **Додати джерело**. Completion creates or proposes only the source relationship allowed by the owning context. It does not mark Evidence, fact, approval, credibility, or responsibility.

The resulting human label shows person and contribution-time capacity. Inspector progressively exposes communication/recording time, material, context, knowledge basis, source/subject/recorder distinctions, uncertainty, support/contradiction/correction/supersession/withdrawal state, access limits, and technical metadata.

Internal terms such as InformationContribution ID, attribution node, relationship identity, provenance locator, or version key remain hidden from primary language.

### Correction and dispute

The user can independently correct source identity, subject, recorder, contribution-time role, department, communication time, or relationship wording. Correction previews what changes and what historical record remains. Dispute, withdrawal, redaction, and protected-review paths use plain language and preserve adopted People & Privacy boundaries.

## Process interaction model

### Human-facing structure

A process is first understood as:

```text
Input -> Process -> Output -> Result
```

This spine remains visible before deeper documentation. The Product progressively adds trigger, owner role, participants, systems, SOPs, decisions, handoffs, time expectations, exceptions, constraints, risks, and feedback only as they become known or relevant.

### Surface allocation

| Surface | Process representation |
| --- | --- |
| Organization Map | Process presence, owning/participating departments, major cross-department handoffs, and selected dependencies; no full flow documentation. |
| Department Workbench | Department-relative process summaries, role, handoff, system/SOP links, status, and unresolved points. |
| Process detail | The complete progressive spine, steps where useful, relationships, variants, exceptions, sources, history, and work contexts. |
| Inspector | Focused element/step/relationship detail, provenance, known/unknown/disputed state, effective time, and actions. |

Process creation begins from the four-part spine or a simple human description, not a large documentation form. Missing stages remain explicit unknowns. A flow arrangement cannot imply observed performance or causality.

## Systems, SOPs, and KPIs/measures

All use a shared summary-to-detail contract while retaining distinct meaning.

### System/tool

- Summary: name, operational purpose, owning role/department, linked processes, current known status, and material limitation.
- Detail: affected departments, integrations/flows, responsibilities, constraints, source/freshness, history, and Investigation/Improvement links.
- Boundary: Management OS represents operational use and dependency; it does not configure CRM, ERP, permissions, integrations, or system administration.

### SOP

- Summary: human title, purpose/scope, owner role, current version/status, linked processes, and known gap or uncertainty.
- Detail: source document, applicability, roles, steps/controls as referenced, actual-use statements/Evidence relationships, history, and Investigation/Improvement links.
- Boundary: representation does not edit or approve the source SOP unless its owning capability later provides an authorized action.

### KPI / measure

- Summary: name, purpose, owner, linked process/result, source, cadence, current availability, and known limitation/distortion.
- Detail: definition/version, unit, calculation/source reference, observation interval, target/guardrail where governed, history, and Monitoring links.
- Boundary: display does not establish causality, performance judgment, target authority, or person score.

Each summary is selectable; Inspector reveals focused detail; opening the dedicated surface is explicit. Missing information invites one useful refinement without showing a giant empty schema.

## Interdepartmental interaction model

An interdepartmental interaction is one source-governed directional relationship projected across surfaces. It may preserve:

- source and receiving department;
- purpose;
- artifact/information exchanged;
- responsible roles;
- cadence or trigger;
- supporting system and SOP;
- expected result;
- friction and uncertainty;
- effective time, source, and status.

### Projection contract

- Organization Map: directional connection and concise purpose; selection opens relationship Inspector.
- Department Workbench: inbound/outbound grouping by operating relevance.
- Process detail: exact handoff position and expected input/output relationship.
- Investigation: inherited context reference only until separately added/accepted under Investigation authority.
- Improvement: affected-context reference and dependency, not proof of benefit or failure.

Editing from any projection routes to the same relationship authority. The user sees which source record will change. Conflicting descriptions remain parallel attributable accounts until human resolution; the interface does not average them.

## Contextual entry into Investigation

### Origin

Investigation may start from organization, department, person, role, process, system, SOP, interaction, report, or observed symptom.

The contextual action uses intention-led language:

> **Дослідити** — зрозуміти, що відбувається.

The entry preview shows:

- origin object/relationship;
- concise current context references proposed for orientation;
- initial human question or symptom in the manager’s words;
- what is not being transferred automatically.

The user confirms or narrows scope. Creation produces a distinct linked Investigation and applicable Matter relationship through existing authority.

Inherited context is labeled **Context**. It is not automatically Evidence, Working Set content, Hypothesis, accepted fact, or Investigation conclusion. The user may later select material for a separate governed Evidence or Working Set action. Investigation then uses its existing internally unchanged Workbench and semantics.

Returning to the Living Model preserves the origin link and current Map/Workbench context where practical.

## Contextual entry into Improvement

Improvement may start from organization, department, process, system, SOP, interaction, role, or identified opportunity.

The contextual action uses distinct intention-led language:

> **Запланувати вдосконалення** — спланувати свідому зміну.

It is visually and linguistically distinct from **Дослідити**, while neither action is styled as universally primary. Current context determines which is emphasized; the other remains available without equal visual weight.

The entry preview preserves origin, existing value, initial opportunity/intent, current known/unknown context, and proposed scope. It explicitly permits a healthy current state and no-change outcome. Context does not become Evidence, proof of failure, proof of benefit, Decision, or implementation authority.

Creation produces a distinct linked Improvement and applicable Matter relationship under adopted Product boundaries. If material inquiry is needed, the explicit Improvement-to-Investigation contract remains available without silent conversion.

## Operational Memory interaction

Current state is primary. History appears as a progressively disclosed **History / Operational Memory** concern from organization, department, process, system, SOP, interaction, role, or permitted person context.

The default historical view is a concise chronological index of relevant prior Investigations, Improvements, Decisions, changes, Monitoring, Stabilization, and reviewed organizational-state versions. It shows event type, date/interval, scope, disposition, and why it may be relevant without exposing restricted content.

Selecting an event opens source-linked inspection with decision-time/current-time distinction, assumptions, outcome/stabilization status, unresolved uncertainty, and access limitations. Historical state can be compared with current state through explicitly labeled views; it never replaces or silently rewrites current state.

Memory relevance, recurrence, and similarity do not establish current Evidence, Cause, truth, or authority to repeat a change. Person-related history follows adopted purpose, access, anti-dossier, and anti-scoring constraints.

## Watson placement and future behavior

Watson is a contextual operational partner, not persistent chat chrome.

### Placement

- In organization/map context, Watson is a compact, quiet affordance associated with the current focus, not a permanent side column.
- In Department, Process, Role, or Person Workbench, Watson appears adjacent to the relevant context only when invoked or when a future authorized intervention can materially improve understanding.
- In Inspector, Watson may reference the selected object but does not replace source detail or actions.
- Investigation retains its existing Watson interaction placement and authority; this architecture does not redesign it.
- On narrow screens, Watson uses a temporary identified sheet/mode and returns focus/context on close.

### Behavior contract

Future Watson may ask one bounded question, identify missing or conflicting context, surface a source-linked relationship, or explain why a historical item may matter. It shows source, scope, known/assumed/disputed state, time, and limitation. Referenced Map/Workbench objects receive temporary non-authoritative emphasis and remain directly inspectable.

Watson does not dominate the viewport, create a generic conversation feed, move organizational objects as if rewriting truth, make Decisions, create relationships, infer Cause, judge people, reveal restricted information, or block non-AI work. Silence and absence are valid Watson states.

No AI execution is authorized.

## Responsive interaction model

Responsive adaptation preserves purpose, authority, current context, selection, and access; it does not force desktop geometry into a narrow viewport.

### Large desktop

- Map/Workbench owns most of the viewport.
- Context frame is compact.
- Inspector may coexist beside the primary workspace without obscuring selected content.
- Relationship layers, overview, and focused inspection can remain simultaneously oriented.
- Watson stays compact/contextual.

### Standard laptop

- Primary workspace remains dominant.
- Inspector may overlay or replace a supporting region while preserving context.
- Secondary history and Working Set remain collapsed until invoked.
- Density reduces before primary labels or material status are removed.

### Tablet / narrow viewport

- One primary context at a time with stable breadcrumb/back behavior.
- Map preserves pan/scale and search-to-focus; Inspector opens as a focused drawer/sheet.
- Construction is limited to bounded element/relationship actions rather than multi-object arrangement.
- Complex hierarchy moves or multi-relationship comparisons may become review-only with an explicit “continue on wider screen” handoff when safe completion is not possible.

### 390 px mobile

- Prioritize orientation, search, current object summary, focused inspection, history retrieval, correction/dispute initiation, and bounded contextual entry into Investigation/Improvement.
- Organization overview becomes hierarchical scope/navigation plus a focused relationship view, not a miniature universal map.
- Person-as-Source search/browse and confirmation may remain available if protected identity and historical-capacity review fit safely.
- Full organization arrangement, broad relationship editing, complex process construction, multi-layer comparison, bulk change, and sensitive administrative review may be read-only or deferred to a wider screen.
- A mobile limitation states what can be inspected or continued; it never implies completion or discards work.

All supported widths retain keyboard/accessibility equivalents where applicable, logical reading order, reflow without horizontal page scrolling, visible focus, 44px practical targets, non-color state, reduced-motion compatibility, and focus restoration after overlays.

## Empty and incomplete states

Empty states use a short state label and one useful action. They do not expose an entire future schema or verbose tutorial.

| State | Human-readable presentation | Primary invitation |
| --- | --- | --- |
| No departments | **Структуру ще не додано** | **Додати перший підрозділ** |
| Department without people | **Людей ще не додано**; roles may still carry responsibility | **Додати роль** or permitted **Додати людину** based on context |
| Department without SOP | **SOP не пов’язано** | **Пов’язати SOP**; absence does not imply noncompliance |
| Unknown process | **Як відбувається процес — ще невідомо** | **Додати відоме** or **Дослідити** |
| Incomplete relationship | **Зв’язок потребує уточнення** | **Уточнити зв’язок** |
| Unresolved responsibility | **Відповідальність не визначено** | **Вказати роль** or preserve unknown |
| Missing system information | **Система або інструмент не вказані** | **Додати систему** or mark not applicable |
| Disputed description | **Є різні описи** | **Порівняти описи** |

Unknown, missing, not applicable, restricted, stale, and disputed are distinct states. Restricted data does not masquerade as missing, but unauthorized views use a non-revealing presentation that does not leak sensitive existence.

Empty future collections remain absent. Counts, completion percentages, and red warning treatment do not shame incomplete organizational understanding.

## Viewport, action, and content hierarchy

- The primary organizational object or map occupies the useful viewport; navigation and metadata remain compact.
- Exactly one next action receives dominant emphasis within a context. Secondary actions are grouped and visually quieter.
- Explanatory prose appears only when hierarchy, label, state, or preview cannot communicate consequence.
- Technical metadata is hidden by default but reachable through Inspector/audit detail.
- Dense information is grouped by operational meaning, not uniform cards or database fields.
- Scroll is used for genuine content depth, not because persistent chrome, repeated headings, or simultaneous panels consume the viewport.
- Focused overlays never obscure irreversible consequences or lose the trigger context.
- Destructive, historical, privacy-sensitive, and authority-changing actions state consequence and require proportionate confirmation.

## Degraded and non-AI operation

All core navigation, construction proposals, inspection, search, history, contextual entry, correction, and dispute initiation remain usable without Watson. Missing source or history retrieval is labeled; the interface does not invent context or hide unavailable relationships.

## Authority and non-effects

This proposal defines Interaction Architecture only. It does not:

- amend canonical Product or organizational meaning;
- create a second organizational model or relationship source;
- alter Investigation internals or merge Investigation with Improvement;
- broaden People & Privacy access or authorize sensitive/subjective data;
- select Engineering Architecture, storage, identity, authorization, graph, search, or AI mechanisms;
- implement Organization Constructor, Map, Workbenches, Person-as-Source, entries, Memory, Watson, or responsive UI;
- authorize data collection, migration, integration, dependencies, framework changes, deployment, repository transition, ROADMAP/BACKLOG change, Replay, H3 validation, Root Cause, or causal proof.
