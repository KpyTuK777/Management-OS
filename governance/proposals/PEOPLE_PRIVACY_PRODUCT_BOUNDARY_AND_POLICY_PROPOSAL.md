# People & Privacy Product boundary and policy proposal

## Proposal state

- Status: non-canonical Product and policy proposal for authority consideration
- Governing Living Model Decision: commit `9a8a6adad800c71f772984e6f36d6c6e345b3622`, blob `7bd25d6b2632b10cc4663e80022956285df4fc29`
- Governing Improvement Decision: commit `90847454d700891e9f65616d1876d49893e3614e`, blob `b8b9f10b6c1c8a7f86a06113eec5860909638263`
- People/privacy adoption: not authorized
- Interaction Architecture: not authorized
- Engineering Architecture: not authorized
- Implementation and Watson execution: not authorized

This artifact consolidates the minimum People Information Product Boundary, Person-as-Source / InformationContribution definition, Person and Department Workbench reconciliation, privacy/access/correction/retention policy proposal, and future Watson people-context boundary. It creates no canonical mutation or implementation authority.

## Product purpose

Management OS may represent a person only when doing so serves a specific, defensible operational purpose inside the Living Organizational Model: clarifying current responsibility and authority, understanding how work operates, preserving attributable contributions, coordinating Investigation or Improvement, or maintaining inspectable operational history.

People are participants in the organization, not objects to rank. The Product must not become employee surveillance, HR administration, a dossier system, psychological profiling, reputation scoring, automated trust, or hidden performance management.

The governing minimization test is:

> Store people information because it is necessary for a declared operational purpose, not because it might someday be useful.

Every proposed people field must have an explicit purpose, necessity, information class, source and attribution, visibility boundary, effective time, retention rule, correction path, and secondary-use rule. If those cannot be defended, the field is excluded.

## People-information classification model

Classification attaches to an information item or relationship, not permanently to a person. Display language must preserve the class.

### A. Organizational facts

Governed facts about formal organizational state, such as:

- person identity and active/inactive organizational relationship;
- current or historical role and department membership;
- formal reporting relationship;
- assigned responsibility, decision authority, process ownership, system responsibility, or SOP responsibility.

These may appear as facts only when supported by an authoritative source, scoped to an effective interval, and subject to correction. A formal assignment does not prove actual behavior, competence, workload, performance, or informal influence.

### B. Attributable statements

A person’s own words or faithful paraphrase supplied in a declared context, such as an explanation of process duration or use of an unofficial spreadsheet.

The statement preserves speaker, contribution-time role and department, wording or transformation, context, communication time, recording time, direct/indirect knowledge where known, uncertainty, and source reference. It is not automatically an organizational fact, accepted Evidence, truth, approval, responsibility, or authorship of the material that carries it.

### C. Manager observations

An identifiable manager’s time-bound observation or judgment offered for a specific operational purpose, such as observed manual rework or believed informal process knowledge.

It remains labeled as the manager’s observation; preserves author, subject where applicable, purpose, observation interval, basis, limitation, visibility, review date, and correction/withdrawal state; and never becomes an objective person property. It cannot be generalized into performance, trust, competence, motive, personality, or employee-value judgment.

### D. System-derived records

Records obtained from a permitted operational system for a declared purpose. They preserve source system, source record identity, retrieval/effective time, field meaning, known completeness and quality limitations, authorization, transformation, and correction route.

System origin does not make a record complete, neutral, current, or suitable for secondary use. Activity telemetry is excluded by default unless a separately approved operational purpose, proportionality case, visibility, retention, and anti-surveillance control exist.

### E. Investigation material and Evidence relationships

Person-related material may be linked into an Investigation, but the person profile does not absorb the material or its Evidence status. `Case Evidence Set` retains classification, provenance, authorization, influence, and decision-time snapshot authority.

Person-as-Source establishes who supplied information. It does not make the contribution Evidence. If accepted into an Evidence Set, a separate typed relationship records that use and its limitations. Later support or contradiction describes the information relationship, never the person.

### F. Sensitive people information

Information requiring additional restriction, explicit purpose, or exclusion includes:

- health, disability, mental state, biometric, genetic, identity-document, precise location, financial, family, intimate-life, political, religious, union, protected-characteristic, disciplinary, grievance, allegation, compensation, and credential/security information;
- private communications or content unrelated to the declared operational purpose;
- inferred personality, motive, loyalty, trustworthiness, mental state, future behavior, competence, performance, promotion/termination suitability, or employee value;
- satisfaction, engagement, strengths, development areas, workload/capacity, and manager observations when person-identifiable.

The first group is excluded from the core Living Organizational Model unless a separate, explicit human policy Decision establishes a necessary purpose, lawful/organizational basis, accountable owner, allowed fields, visibility, retention, correction, dispute, redaction, incident, and secondary-use rules. Credential and security secrets are never Product-profile content.

The second and third groups are prohibited. The fourth group follows the special dispositions below and is excluded from the core Person and Department Workbenches by default.

## Permitted core Product concerns

Subject to source and visibility controls, the core operational people model may include:

| Concern | Product disposition |
| --- | --- |
| Name / organizational identity | Permit when needed to identify an accountable participant; do not expose unrelated personal identity data. |
| Current role and department | Permit as effective-dated organizational facts. |
| Role and department history | Permit when needed for historical attribution and operating continuity. |
| Reporting relationship | Permit as formal, effective-dated organizational fact; do not infer informal power or performance. |
| Responsibilities and decision authority | Permit as source-governed assignments with scope and effective time. |
| Process, system, SOP, and interaction participation | Permit as typed role/responsibility/participation relationships; distinguish formal from observed. |
| Experience | Permit only as specific, attributable operational experience relevant to a current responsibility; not tenure-based competence inference. |
| Skills | Permit only when self-declared or source-confirmed for a defined operational need, with verification status and review date; no score or ranking. |
| Organizational knowledge contribution | Permit through InformationContribution history, not a person-owned knowledge rating. |
| Investigation / Improvement / Decision participation | Permit as role-typed, purpose-limited relationships; participation reveals no guilt, success, authority, or performance by itself. |
| Relevant unresolved questions | Permit as work-context links where visibility allows; never as allegations attached to a profile. |

Absence of a record means unknown or not represented, never that the person lacks the role, skill, knowledge, contribution, or value.

## Person-as-Source / InformationContribution

### Product definition

An **InformationContribution** is a typed, attributable relationship recording that an identified person supplied particular information or material in a supported operational context at a particular time and organizational capacity.

It is a relationship/projection over existing person, organizational, source-material, and work-context records. Product adoption should not automatically establish it as a new canonical aggregate. Canonical clarification is required to determine whether the existing relationship model can carry its semantics or whether a named canonical relationship type is necessary.

### Required relationship parties

```text
Person identity
  -- supplied --> Information or material
  -- while acting in --> role snapshot + department snapshot
  -- within --> Investigation, Improvement, Decision work, or other supported context
```

### Required semantics

Each contribution preserves, where applicable:

- stable person reference and identity resolution state;
- contribution-time role and department snapshots with effective intervals;
- exact information/material reference and source-owned content identity;
- original wording, faithful excerpt, summary, or transformation classification;
- communication/provision time;
- Management OS recording time and recorder identity;
- context and purpose for collection;
- direct, indirect, mixed, or unknown knowledge basis;
- declared uncertainty, limitation, or scope;
- sensitivity and visibility class;
- later support, contradiction, correction, supersession, dispute, withdrawal, redaction, or deletion disposition;
- link to any separate Evidence relationship without inheriting Evidence status.

### Distinctions

InformationContribution is distinct from:

| Adjacent relationship | Required distinction |
| --- | --- |
| Authorship | Supplying information does not mean creating the underlying document or idea. |
| Ownership | Supplying information transfers no record, process, system, or knowledge ownership. |
| Responsibility | A source is not automatically accountable for the subject or resulting work. |
| Subject | The contributor may speak about another person, process, or event; source and subject remain separate. |
| Recorder | The person entering the record may differ from the person who supplied it. |
| Approval / Decision | Contribution does not approve content or establish authority. |
| Evidence status | Contribution is not Evidence unless separately accepted and classified by the Evidence owner. |
| Credibility | Support or contradiction attaches to the contribution’s content in context, not to a permanent person quality. |

### Product interaction intent

A future supported contribution flow may allow `Organization → Department → Person` selection instead of free-text attribution. It must confirm the selected person and contribution-time capacity, allow “person not represented” or appropriately protected attribution where policy permits, disclose why identity is needed, and permit correction. Exact controls, search, accessibility, protected-source handling, and accidental-disclosure behavior require future Interaction Architecture.

## Historical and temporal integrity

Current organizational data never rewrites historical capacity. The Product distinguishes:

- identity effective interval;
- role effective interval;
- department-membership effective interval;
- information observation/effective time;
- communication/provision time;
- recording time;
- source snapshot version or retrieval time;
- correction, dispute, supersession, withdrawal, redaction, and deletion times.

If Olena contributed information while Procurement Manager and later becomes Operations Director, the contribution continues to show Procurement Manager as the contribution-time role. Her current role may be shown separately only when useful and authorized.

Historical integrity means append-only accountability where required, not permanent harmful visibility. Original and corrected values may be preserved in a restricted audit record while ordinary views show the corrected value, dispute, or redaction. Profile merges, deactivation, role correction, department correction, inaccessible identities, and lawful deletion do not silently reassign the contribution.

## Person / Role Workbench boundary

The Person Workbench is an operational context surface answering: **What is this person’s current, source-supported organizational context, and which relevant work relationships may an authorized viewer inspect?**

The core surface may show:

- minimal organizational identity;
- current role, department, reporting relationship, responsibilities, and decision boundaries;
- relevant processes, systems, SOPs, and organizational interactions;
- current assignments and source-governed operational relationships;
- role/department history where context requires it;
- purpose-filtered operational experience and declared/confirmed skills;
- authorized InformationContribution chronology linked to original material;
- role-typed participation in Investigations, Improvements, and Decisions;
- authorized unresolved operational questions without allegation framing;
- provenance, freshness, limitations, and correction controls.

It must not show by default:

- private or sensitive personal data;
- broad manager notes, subjective impressions, satisfaction, engagement, strengths, development areas, or individual workload/capacity;
- unrelated Investigation/Improvement participation or restricted materials;
- a comprehensive communications, activity, attendance, location, browsing, or system-usage timeline;
- inferred networks, influence, personality, loyalty, motive, trust, competence, performance, employee value, risk, promotion, or termination suitability;
- contribution counts, “supported versus contradicted” ratios, rankings, leaderboards, or composite scores;
- expired data without a current operational need.

The Workbench must use purpose-filtered projections rather than a universal record. More access does not justify showing more by default. No single viewer should receive a dossier merely because each component exists somewhere.

## Department Workbench reconciliation

The Department Workbench may show the department’s manager, roles, people needed for operational coordination, formal responsibilities, decision boundaries, process participation, system/SOP ownership, named knowledge holders where purpose and attribution permit, and aggregate or work-linked Investigation/Improvement context.

It must not expose restricted Person Workbench content merely because the viewer may access the department. In particular:

- restricted manager observations, subjective people data, sensitive personal data, disputes, protected-source identity, and unrelated contribution content do not roll up;
- contribution counts or contradiction labels do not become department or person rankings;
- “knowledge holder” means a source-supported operational relationship, not exclusive competence or organizational indispensability;
- unresolved organizational questions attach to the relevant work or relationship, not as person allegations;
- broad views prefer roles, responsibilities, and minimized aggregates; named people appear only when operationally necessary.

Person, Department, Investigation, Improvement, Decision, and Memory surfaces project the same authoritative relationship according to purpose and authorization. They do not duplicate records or broaden access through projection.

## Subjective-information disposition

| Information | Core Workbench? | Product disposition |
| --- | --- | --- |
| Satisfaction | No | Exclude pending a separate explicit purpose and policy Decision. If ever allowed, prefer voluntary, purpose-limited, time-bound input with inspect/correct/withdraw rights and restricted aggregate reporting; never infer it. |
| Engagement | No | Exclude as an ambiguous evaluative construct unless separately defined for a legitimate operational purpose. Never derive it from activity telemetry. |
| Strengths | No by default | Allow only as attributable self-description or purpose-bound observation for current work, time-bound and correctable; never a permanent trait or ranking. |
| Development areas | No | Exclude from the Living Model core. Any future use requires separate policy, restricted visibility, employee inspection/dispute rights, and prohibition on automated employment decisions. |
| Workload | Role/department view only where possible | Prefer work-demand and role-capacity facts from governed planning sources. Named-person workload requires necessity, a defined interval, source limitations, restricted access, and no effort/performance inference. |
| Capacity | Role/department view only where possible | Represent declared availability or approved allocation, not human potential. Named-person capacity requires the same restrictions as workload. |
| Manager observations | No by default | Permit only for a declared operational matter when necessary, attributable, time-bound, basis-labeled, restricted, reviewable, correctable/disputable, and prohibited from general profile scoring or employment inference. |

No subjective item becomes fact through repetition, seniority of its author, system display, or Watson synthesis.

## Product-level access and visibility principles

This proposal defines obligations, not authentication technology.

1. **Purpose before access.** Every view and disclosure has a declared operational purpose.
2. **Least disclosure.** Show the minimum fields and relationships needed for that purpose.
3. **Source authorization follows projections.** A projection cannot reveal more than its underlying sources permit.
4. **Class-sensitive visibility.** Organizational facts may be broad; attributable statements remain context-bound; observations and sensitive data are restricted; Evidence follows Investigation authorization.
5. **Need-to-know named identity.** Prefer roles or aggregates where named identity is unnecessary.
6. **No access inheritance by navigation.** Department, Person, Map, Search, Memory, Watson, exports, logs, and support tooling each enforce the same or narrower source boundary.
7. **Protected absence.** Unauthorized data appears absent or as a non-revealing restriction; the Product must not leak sensitive existence through counts, labels, search suggestions, or AI summaries.
8. **Inspectable use.** People can see, subject to legitimate protected-source exceptions, which classes about them are stored, their purpose, source, visibility, retention, and correction route.
9. **Accountable exceptional access.** Any future exceptional access requires separate policy, purpose, attribution, review, and expiry.
10. **Watson is a viewer, not a bypass.** AI receives only minimized, authorized context necessary for an approved capability.

Product policy still requires a human Decision on visibility roles, protected-source exceptions, employee inspection scope, export and support access, aggregation thresholds, and the accountable privacy owner before Interaction or Engineering readiness.

## Correction, dispute, withdrawal, and deletion semantics

| Action | Meaning and required behavior |
| --- | --- |
| Factual correction | Correct an objectively wrong identity, role, department, responsibility, time, or source reference; ordinary views show corrected truth while an appropriately restricted audit link preserves attribution where required. |
| Disputed statement | Preserve that content or interpretation is contested, by whom, when, and why; do not resolve automatically or display the contested content as fact. |
| Superseded statement | Preserve earlier wording and its historical applicability while making the newer attributable statement primary for later context. |
| Withdrawn observation | Stop ordinary reliance/display of an author-withdrawn observation; retain only the minimum restricted accountability record when justified. |
| Historical correction | Append a corrected historical version and reason without rewriting contribution-time context or misattributing later organizational state. |
| Source correction | Follow the authoritative source’s correction while preserving any decision-time snapshot that was materially used, clearly labeled as historical. |
| Attribution correction | Correct source, subject, recorder, role, department, or authorship independently; never transfer all relationships as one undifferentiated change. |
| Redaction | Hide protected content or identity while retaining only the minimum non-revealing structure required for authorized history. |
| Deletion | Remove content when no defensible purpose or retention basis remains, subject to narrowly defined accountability/legal holds; deletion must propagate to projections, indexes, AI context, exports, and derived caches. |

The Product must balance accountability with harm minimization. “History” is not a blanket reason to retain inaccurate, excessive, or harmful information forever. Human policy must decide retention periods by class, audit exceptions, protected-source handling, dispute adjudication, deletion limits, appeals, and who may resolve each correction type.

## Retention, minimization, and secondary use

Collection and retention are purpose-bound. The minimum proposal rules are:

- define purpose and retention at or before collection;
- do not collect speculative fields or “complete” a profile for appearance;
- expire or review time-sensitive assignments, observations, skills, workload/capacity, and visibility grants;
- retain contribution history only as long as operational accountability, Decision history, authorized Evidence, or governed Memory requires it;
- separate ordinary display retention from restricted audit retention;
- propagate correction, restriction, redaction, revocation, and deletion to projections and future Watson context;
- prohibit reuse for HR, performance, disciplinary, promotion, termination, surveillance, analytics, model training, benchmarking, or external sharing without a new explicit policy and authority Decision;
- prohibit deriving missing sensitive or subjective fields from other data.

Retention schedules, jurisdiction-specific obligations, incident response, lawful basis, data-subject procedure, and technical deletion are future policy/architecture work. This Product proposal cannot decide them silently.

## Information contribution history

An authorized person view may provide a chronological, purpose-filtered index of contributions such as supplied reports, process explanations, responsibility clarifications, exceptions, Investigation/Improvement participation, later-supported or contradicted information, and explicit corrections.

Each entry links to the original source/context and contribution-time capacity. “Supported,” “contradicted,” “corrected,” or “superseded” qualifies the information in that context. The Product must never aggregate this history into credibility, reliability, trust, competence, performance, behavioral, influence, employee-value, or other person scores. Counts and ratios must not serve as proxies. Search order, visual emphasis, badges, and Watson wording must not create an implicit score.

## Future Watson people-context boundary

After separate Product, privacy, Interaction, Engineering, AI-governance, and implementation authority, Watson may use minimized authorized people context to:

- surface conflicting attributable descriptions of a process;
- show source-linked information concentration in a role;
- locate documented informal knowledge relationships;
- identify a missing responsible role or inconsistent formal responsibility;
- show repeated dependency on a named person only when identity is operationally necessary;
- compare formal structure with attributable descriptions of actual information flow;
- ask for correction, missing context, or human judgment.

Watson must expose sources, classifications, differing accounts, uncertainty, time, and access limitations. It must describe relationships and information, not judge people.

Watson must not infer or assess dishonesty, incompetence, loyalty, motive, personality, mental state, trustworthiness, credibility as a durable trait, employee value, performance, disciplinary risk, termination suitability, promotion suitability, protected characteristics, or sensitive state. It must not infer a person’s knowledge from role alone, treat contribution frequency as influence, turn manager opinion into fact, reveal restricted identity, expand purpose, train on the data, or make employment decisions.

No Watson AI behavior or execution is authorized by this proposal.

## Canonical and responsibility reconciliation

| Existing owner | Existing support | Product-policy gap / prohibited transfer |
| --- | --- | --- |
| Operational Operating Model | Roles, units, responsibility, authority, source, sensitivity, freshness, correction | Retains sole organizational truth; no Person-workspace master model. |
| Artifact/source domains | Source content, identity, mutation, retention | People projections reference; they do not copy ownership. |
| Relationship model / Matter | Typed participation and lineage | InformationContribution may require a new named relationship type, not a new lifecycle aggregate. |
| Case Evidence Set | Testimony/material classification, provenance, influence, snapshots, access | Person-as-Source cannot grant Evidence status or evidentiary weight. |
| Investigation / Improvement | Work-context meaning and history | Participation does not become a profile judgment. |
| Working Set / Inspector | Contextual selection and inspection | Temporary selection does not broaden access or create durable person facts. |
| Decision / P4 | Human judgment and decision-time context | Contribution is not approval; Watson/workspace cannot decide. |
| Monitoring / Stabilization | Observed effect and stability | Results cannot become automatic person performance judgments. |
| Operational Memory | Permission-aware historical references and patterns | Cannot profile people, rewrite episodes, or reveal more than sources. |
| P1–P6 | Existing Product responsibility views | No seventh people/privacy responsibility view is created. |

## Required future authority paths

If the Product policy is adopted:

- **Canonical clarification** must decide whether InformationContribution is expressible through existing typed relationships or needs a new named relationship type, and reflect only adopted Product meaning without creating a second people model.
- **Interaction Architecture** must define safe person selection, contribution inspection, visibility cues, protected absence, correction/dispute flows, historical/current context, accessibility, and anti-dossier presentation.
- **Engineering Architecture** must define identity resolution, effective-time/version contracts, authorization, audit, retention/deletion propagation, redaction, encrypted storage, search/index behavior, exports, logs, backup lifecycle, incident controls, and Watson context enforcement.
- **Explicit human policy Decisions** remain required for permitted sensitive classes, subjective-data exceptions, visibility roles, inspection/correction/dispute rights, protected sources, retention schedules, deletion/audit balance, secondary use, incident ownership, and accountable privacy ownership.

## Authority effect and prohibitions

This proposal prepares Product and policy authority consideration only. It does not adopt people/privacy scope, canonicalize InformationContribution, create a Person entity or dossier, authorize named-person construction, alter P1–P6, modify Investigation or Improvement, authorize Interaction/Engineering Architecture, implement anything, authorize Watson, integrations, deployment, ROADMAP/BACKLOG changes, Replay, H3 validation, Root Cause, causal proof, surveillance, scoring, profiling, or automated employment judgment.
