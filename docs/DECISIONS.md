# Decision Log

This internal, append-only log preserves approved product, workflow, language,
release, and governance decisions that are too consequential to remain only in
conversation history but do not justify an Architecture Decision Record.

The log records why a decision was made. It is canonical decision history, not the
authority for current product state. Current rules remain in their authoritative
documents as defined by the [Documentation Map](DOCUMENTATION_MAP.md).

## Entry policy

Record a decision when it:

- has been explicitly approved by its domain owner;
- affects future product or development choices;
- is likely to be revisited or misunderstood;
- preserves meaningful rationale not obvious from the resulting diff;
- does not create enough architectural consequence to require an ADR.

Do not record unapproved ideas, routine task status, defects, editorial corrections,
temporary experiments, or ordinary implementation details. Git history remains
sufficient when the important question is only what lines changed.

Use these statuses:

- **Accepted**
- **Superseded**
- **Deprecated**

Entries are never deleted when a decision changes. Mark the original as
Superseded, link its successor, and preserve the history.

## ADR boundary

### DL-023 — Define the minimum Operational Matter behavioral state model

- **Status:** Accepted
- **Date:** 2026-07-23
- **Decision:** Use Reported, Under Assessment, Under Investigation, Decision
  Ready, Decided, In Execution, Outcome Assessed, and Closed as the only canonical
  Matter states. Permit governed non-linear transitions, repeatable Investigation
  and execution work, and Closed-to-Under-Assessment reopening while keeping
  detailed progress in linked capability records.
- **Rationale:** Eight stable operational postures are sufficient to guide product
  behavior across uncertainty, judgment, execution, evaluation, and closure
  without encoding a brittle workflow or duplicating capability state.
- **Authority:** Watson and contributing capabilities may recommend transitions.
  The Matter authority validates and records them; the accountable owner approves
  consequential transitions. External events cannot silently mutate Matter state.

### DL-022 — Establish Operational Matter as the canonical lifecycle artifact

- **Status:** Accepted
- **Date:** 2026-07-23
- **Decision:** Give every operational situation one authoritative Operational
  Matter identity and non-linear, reopenable macro-state history. Treat
  Investigations as repeatable work episodes and source-owned Evidence, Inquiry,
  Reasoning, Decisions, Actions, Outcomes, Memory, Knowledge, organizational
  context, and commitments as typed linked contributions. Keep learning governance
  separate and Laboratory branches non-authoritative.
- **Rationale:** Capability separation without a shared enduring identity permits
  duplicate representations, ambiguous ownership, broken lineage, and competing
  truth. A thin control-plane record preserves continuity without absorbing native
  domain authority.
- **Compatibility:** DL-019 and DL-020 remain valid for unified context,
  Investigation experience, and orchestration. Their references to a single
  Investigation lifecycle no longer assign permanent identity or lifecycle
  authority to an Investigation.

### DL-019 — Unify Operational Investigation contexts

- **Status:** Accepted
- **Date:** 2026-07-23
- **Decision:** Use one Operational Investigation lifecycle. Operational Reality
  and Operational Learning are owner-controlled Investigation Context values that
  adapt AI and workspace emphasis without changing capabilities or authority.
  Replace Operational Gym as a destination with Operational Learning context and
  place reversible Scenario Branch exploration inside each Investigation as the
  Decision Laboratory.
- **Rationale:** Real work and learning use the same evidence-first reasoning
  process. Separate top-level environments duplicated structure and exposed product
  implementation concepts instead of the owner's investigation mental model.
- **Compatibility:** This refines earlier Reality/Gym/Simulation separation. Their
  truth, consequence, provenance, and promotion safeguards remain mandatory at the
  context and Laboratory-branch boundaries.

### DL-020 — Center operational planning on Investigation progress

- **Status:** Accepted
- **Date:** 2026-07-23
- **Decision:** Treat Operational Investigation as the primary experience and
  orchestration boundary, not a universal data owner. Establish Operational
  Organization Model as governed supporting context, Investigation Orchestration
  as the bounded AI capability for explainable Evidence acquisition sequencing,
  and Evidence Acquisition Profile as qualitative planning metadata. Preserve
  separate authority for organizational sources, Evidence, tasks, calendars,
  execution, Knowledge, and routine work.
- **Rationale:** Calendar utilization and module management are implementation
  concerns. Owners need the most effective authorized path for reducing material
  Investigation uncertainty while retaining control of contact, assignment,
  scheduling, access, decisions, and action.

### DL-021 — Govern every Watson capability through one Professional Ethos

- **Status:** Accepted
- **Date:** 2026-07-23
- **Decision:** Establish Watson Professional Ethos as the provider-independent
  cross-capability policy for professional obligations, character, observable
  habits, anti-patterns, conflict resolution, and responsibility. Keep obligations
  and character distinct inside one authority. Treat the AI Quality Framework as
  a conformance overlay rather than a runtime pipeline stage.
- **Rationale:** Capability contracts determine what Watson may do but cannot alone
  ensure consistent professional conduct across providers, prompts, runtimes, and
  future capabilities. Watson is responsible for applying the standard and exposing
  limitations; the owner retains Investigation, decision, execution, and outcome
  responsibility.


Use an ADR instead when a decision materially changes system responsibilities,
architecture layers, persistence strategy, entity compatibility, integrations,
security or privacy architecture, runtime platform, data migration, or another
long-lived technical commitment that is expensive to reverse.

If a logged decision later crosses that threshold, create an ADR, mark the log
entry Superseded, and link it to the ADR without copying the full record.

## Decisions

## DL-001 — Separate APPROVE from APPLY

- Date: 2026-07-22
- Status: Accepted
- Decision owner: Product Owner
- Category: Governance
- Affected documents: `TEAM.md`, `METHODOLOGY.md`
- Supersedes: None
- Superseded by: None

### Context

Proposal approval and authorization to modify the product were being expressed in
the same conversational workflow, creating a risk that conceptual acceptance could
be interpreted as implementation permission.

### Decision

**APPROVE** accepts the documented proposal. **APPLY** separately authorizes the
approved modification.

### Rationale

The distinction preserves decision ownership, prevents premature changes, and
allows a proposal to be accepted without silently expanding authorization.

### Alternatives considered

- Treat approval as automatic implementation authorization — rejected because it
  removes an explicit control boundary.
- Infer authorization from context — rejected because it is ambiguous for both
  human and AI collaborators.

### Consequences

Material work must not begin until APPLY is explicit. Reviews and proposals never
grant standing implementation authority.

### References

- [Team Governance](TEAM.md)
- [Development Methodology](METHODOLOGY.md)

## DL-002 — Product Language is the terminology authority

- Date: 2026-07-22
- Status: Accepted
- Decision owner: Design Owner
- Category: Product Language
- Affected documents: `PRODUCT_LANGUAGE.md`, `DOCUMENTATION_MAP.md`
- Supersedes: `UI_LANGUAGE.md` as an authority
- Superseded by: None

### Context

The original UI language rules evolved into a broader standard covering official
terminology, writing style, user addressing, naming, and future AI communication.

### Decision

`PRODUCT_LANGUAGE.md` is the canonical authority for user-facing product language.
`UI_LANGUAGE.md` remains only as a temporary compatibility pointer.

### Rationale

One language authority prevents terminology drift and reflects the document's
expanded responsibility beyond interface labels.

### Alternatives considered

- Maintain both documents as authorities — rejected because their rules could
  diverge.
- Keep the former terminology filename permanently — rejected because it no longer
  described the full scope.

### Consequences

New features must use existing official terms and update Product Language when a
genuinely new user-facing concept is introduced.

### References

- [Product Language](PRODUCT_LANGUAGE.md)
- [Documentation Map](DOCUMENTATION_MAP.md)

## DL-003 — Development Methodology remains a synthesis layer

- Date: 2026-07-22
- Status: Accepted
- Decision owner: Product Architect
- Category: Governance
- Affected documents: `METHODOLOGY.md`, `DOCUMENTATION_MAP.md`
- Supersedes: None
- Superseded by: None

### Context

Management OS developed a coherent delivery methodology across several canonical
documents. A dedicated methodology was useful, but copying their rules would create
another competing authority.

### Decision

`METHODOLOGY.md` explains how canonical authorities interact. It does not replace
Team, Architecture, Development, Design System, Product Language, or Documentation
Map.

### Rationale

A synthesis makes the operating model understandable while preserving clear
ownership and a single source of truth for detailed rules.

### Alternatives considered

- Merge governance documents into Methodology — rejected because their owners and
  audiences differ.
- Leave the methodology implicit — rejected because the relationships had become a
  stable and repeatedly used practice.

### Consequences

Canonical documents prevail if a methodology summary diverges. The methodology
never grants APPLY authority.

### References

- [Development Methodology](METHODOLOGY.md)
- [Documentation Map](DOCUMENTATION_MAP.md)

## DL-004 — Product maturity is separate from feature planning

- Date: 2026-07-22
- Status: Accepted
- Decision owner: Product Owner
- Category: Release governance
- Affected documents: `PRODUCT_MATURITY.md`, `ROADMAP.md`
- Supersedes: None
- Superseded by: None

### Context

Roadmap phases describe capability direction but do not show whether the product is
reliable, tested, documented, and governed enough for a release claim.

### Decision

Product Maturity owns Prototype, Alpha, Beta, v1.0, and post-v1 readiness. Roadmap
continues to own feature direction and sequencing.

### Rationale

Separating capability planning from readiness prevents feature completion from
being mistaken for release confidence.

### Alternatives considered

- Add readiness criteria directly to every Roadmap phase — rejected because it
  mixes two independent planning dimensions and duplicates gates.

### Consequences

A Roadmap phase may span multiple maturity stages. Maturity advances only when its
evidence and exit criteria pass.

### References

- [Product Maturity](PRODUCT_MATURITY.md)
- [Roadmap](ROADMAP.md)

## DL-005 — Project Health aggregates evidence without authority

- Date: 2026-07-22
- Status: Accepted
- Decision owner: Product Architect
- Category: Release governance
- Affected documents: `PROJECT_HEALTH.md`, `DOCUMENTATION_MAP.md`
- Supersedes: None
- Superseded by: None

### Context

Release evidence was distributed across maturity, documentation, architecture,
testing, design, governance, and AI sources. The team needed one answer to what
would prevent release tomorrow.

### Decision

`PROJECT_HEALTH.md` is an internal, qualitative, non-authoritative snapshot. It
aggregates evidence and blockers for a named target release without defining new
criteria or granting release approval.

### Rationale

Aggregation improves operational clarity, while canonical evidence sources and
domain owners preserve authority.

### Alternatives considered

- Calculate a health percentage — rejected because numeric precision would conceal
  missing evidence and incomparable dimensions.
- Let the dashboard define readiness criteria — rejected because it would compete
  with Product Maturity and other canonical authorities.

### Consequences

Missing evidence becomes Not Assessed, mandatory gaps become Blocking, and only the
Product Owner may approve release after domain gates pass.

### References

- [Project Health](PROJECT_HEALTH.md)
- [Product Maturity](PRODUCT_MATURITY.md)
- [Documentation Map](DOCUMENTATION_MAP.md)

## DL-006 — Knowledge Evolution Map remains a synthesis

- Date: 2026-07-22
- Status: Accepted
- Decision owner: Product Owner
- Category: Governance
- Affected documents: `METHODOLOGY.md`, `DECISIONS.md`, `CHANGELOG.md`, `SPRINTS.md`
- Supersedes: None
- Superseded by: None

### Context

Management OS defined documentation authority, delivery workflow, decision
recording, and release history across several documents, but lacked one routing
view answering where knowledge belongs as it matures. Creating another canonical
workflow document would duplicate those authorities and create drift risk.

### Decision

The Knowledge Evolution Map is maintained in `METHODOLOGY.md` as a
non-authoritative synthesis. It distinguishes temporary discussion, approved
intent, canonical current knowledge, durable rationale, delivery evidence, and
release history while linking each state to its existing authority.

The map is branching rather than strictly linear. Decision Log entries and ADRs
are conditional rationale records, the Sprint Tracker records delivery evidence,
and the Changelog remains the single release history.

### Rationale

A compact routing view makes the documentation ecosystem easier to use without
creating a competing source of truth. Separating current truth from rationale and
history also prevents implementation, approval, or release records from being
mistaken for canonical documentation.

### Alternatives considered

- Create a standalone canonical Knowledge Evolution document — rejected because
  it would duplicate Team Governance, Methodology, and the Documentation Map.
- Use one linear lifecycle for every record — rejected because canonical documents,
  decisions, ADRs, Sprint evidence, and release history serve different purposes.
- Add a separate Release History document — rejected because the Changelog already
  owns that responsibility.

### Consequences

Knowledge becomes current organizational truth only after the reviewed outcome is
placed in its authoritative document, satisfies the Documentation Definition of
Done, and is committed to the shared repository. The map does not transfer owner
authority, grant APPLY, or introduce the ADR collection before a qualifying
architectural trigger.

### References

- [Development Methodology](METHODOLOGY.md#knowledge-evolution-map)
- [Documentation Map](DOCUMENTATION_MAP.md)
- [Team Governance](TEAM.md)
- [Changelog](CHANGELOG.md)

## DL-007 — Use direct and extended implementation lanes

- Date: 2026-07-22
- Status: Accepted
- Decision owner: Product Owner
- Category: Delivery governance
- Affected documents: `TEAM.md`, `METHODOLOGY.md`, `DEVELOPMENT.md`
- Supersedes: Mandatory separate Plan APPROVE for every implementation-bearing feature
- Superseded by: None

### Context

The architecture-first workflow required a separate Implementation Plan and Plan
APPROVE for nearly every implementation-bearing feature. As canonical architecture
matured, routine proposals often repeated decisions already made and added a gate
without improving ownership, safety, or validation.

### Decision

Implementation proposals that trace directly to approved architecture may contain
their proportionate planning and proceed through Proposal APPROVE directly to
APPLY. A separate extended decision and planning lane remains mandatory when work
changes canonical Product Principles, architecture, data or persistence semantics,
governance, security, privacy, runtime platform, integration boundaries, or another
ADR-level commitment.

APPROVE and APPLY remain distinct. Applicable post-implementation validation and
domain Reviews remain required.

### Rationale

The two-lane model keeps architecture ahead of implementation while moving process
depth to decisions that create durable risk. Routine delivery remains bounded by
canonical architecture, explicit authorization, validation, and change control.

### Alternatives considered

- Retain a separate Plan APPROVE for all features — rejected because it duplicates
  an adequate direct proposal after architecture is established.
- Remove Implementation Planning — rejected because every implementation still
  requires proportionate scope, dependency, risk, order, and validation planning.
- Allow implementation before approval — rejected because APPLY remains the
  explicit mutation boundary.

### Consequences

Routine proposals must state their canonical basis and contain enough planning to
support direct approval. Any discovery that changes a canonical or ADR-level
boundary moves work to the extended lane. Process depth follows decision
consequence rather than the label “feature.”

### References

- [Team Governance](TEAM.md#standard-delivery-workflow)
- [Development Methodology](METHODOLOGY.md#delivery-workflow)
- [Development Guide](DEVELOPMENT.md#implementation-planning)

## DL-008 — Use Operating Context for capability-preserving workspace emphasis

- Date: 2026-07-23
- Status: Accepted
- Decision owner: Product Owner
- Category: Product and information architecture
- Affected documents: `ADAPTIVE_OWNER_CONTEXT_ARCHITECTURE.md`, `PERSONAL_OPERATIONAL_MODEL.md`, `ADAPTIVE_WORKSPACE_ARCHITECTURE.md`, `PRODUCT_VISION.md`, `AI_ASSISTANT_ARCHITECTURE.md`, `AI_FIRST_WORKSPACE_ARCHITECTURE.md`, `OWNER_JOURNEY.md`, `SYSTEMS.md`, `ARCHITECTURE.md`, `ROADMAP.md`, `AI_CAPABILITY_ROADMAP.md`, `PRODUCT_LANGUAGE.md`, `DOCUMENTATION_MAP.md`, `SPRINTS.md`
- Supersedes: None
- Superseded by: None

### Context

Management OS may become more relevant by emphasizing different workspaces for an
owner who is learning, employed, operating a business, researching, or scaling.
The candidate concepts mixed operating environments, developmental stages, and
presentation configurations. Uncontrolled adaptation could also hide capability,
infer identity from activity, or allow AI to change navigation without approval.

### Decision

Use Operating Context as the canonical owner-controlled concept. Operational Stage
is an optional attribute within a context, Current Focus remains immediate, and
Workspace Emphasis is the approved presentation configuration applied by Adaptive
Workspace. The owner may hold multiple contexts with at most one durable primary
context and may select a temporary context without changing the durable one.

AI may prepare an evidence-based context or workspace recommendation but cannot
select, persist, or apply it. Durable personal context belongs to the Personal
Operational Model only after explicit, bounded approval. Adaptive Workspace applies
the exact approved emphasis. Home, navigation, widgets, and recommendations may be
reprioritized, but every capability, direct route, Search path, authority boundary,
and degraded non-AI path remains available.

### Rationale

Operating Context describes where the owner is working without treating that
situation as identity or assuming a linear progression. Separating context, stage,
focus, and presentation keeps the model explainable and allows useful adaptation
without transferring priority or capability authority to AI.

### Alternatives considered

- Owner Context — rejected as canonical because it is broad enough to mix identity,
  preferences, circumstances, and temporary work.
- Operational Stage — rejected as the umbrella because Learning, Employment,
  Business, and Research are contexts, while Scaling is a stage within a context.
- Focus Profile — rejected as the owner model because it describes a derived
  presentation configuration rather than the operational situation.
- Automatic adaptation from behavior — rejected because repeated behavior may
  support a recommendation but cannot provide durable learning or mutation
  authority.

### Consequences

Future implementation must preserve the complete capability set, stable complete
navigation, Search, direct access, neutral reset, inspection, rollback, and
deterministic degraded operation. It requires separate authorized implementation
work and must not infer durable context or reorder the workspace autonomously.

### References

- [Adaptive Owner Context Architecture](ADAPTIVE_OWNER_CONTEXT_ARCHITECTURE.md)
- [Personal Operational Model](PERSONAL_OPERATIONAL_MODEL.md)
- [Adaptive Workspace Architecture](ADAPTIVE_WORKSPACE_ARCHITECTURE.md)
- [AI-first Workspace Architecture](AI_FIRST_WORKSPACE_ARCHITECTURE.md)
- [AI Assistant Architecture](AI_ASSISTANT_ARCHITECTURE.md)
- [Owner Journey](OWNER_JOURNEY.md)
- [AI Capability Roadmap](AI_CAPABILITY_ROADMAP.md)

## DL-009 — Use Operational Case as the bounded aggregate for non-routine operational reasoning

- Date: 2026-07-23
- Status: Accepted
- Decision owner: Product Owner
- Category: Product and information architecture
- Affected documents: `OPERATIONAL_CASE_ARCHITECTURE.md`, `PRODUCT_VISION.md`, `OWNER_JOURNEY.md`, `AI_FIRST_WORKSPACE_ARCHITECTURE.md`, `AI_ASSISTANT_ARCHITECTURE.md`, `NATURAL_CAPTURE_ARCHITECTURE.md`, `ADAPTIVE_OWNER_CONTEXT_ARCHITECTURE.md`, `ADAPTIVE_WORKSPACE_ARCHITECTURE.md`, `PERSONAL_OPERATIONAL_MODEL.md`, `SYSTEMS.md`, `ARCHITECTURE.md`, `ROADMAP.md`, `AI_CAPABILITY_ROADMAP.md`, `PRODUCT_LANGUAGE.md`, `DOCUMENTATION_MAP.md`, `SPRINTS.md`
- Supersedes: None
- Superseded by: None

### Context

The owner currently encounters operational Evidence, interpretations, procedures,
actions, Reviews, and improvement decisions through separate domain concepts. That
separation preserves authority but requires reconstruction of the bounded
situation being solved. Making every record a Case child would create the opposite
problem by weakening reuse, provenance, audit, and domain ownership.

### Decision

Use Operational Case as the primary operational aggregate for bounded,
non-routine investigation, problem-solving, decision, action, outcome, and
learning. The Case owns its framing, scope, lifecycle, typed relationships,
decision context, monitoring, closure, and learning synthesis. Participating
Facts, Reports, SOPs, Executions, Reviews, Recommendations, Knowledge, projects,
and tasks remain owned by their existing domains and may exist independently.

Cases remain optional for routine execution, ordinary work, quick capture, direct
library maintenance, and simple retrieval. Home remains the stable primary
workspace; Current Focus may reference a Case; Operating Context may influence
prominence only. AI may prepare and explain Case work but cannot persist, merge,
accept a Cause, select a consequential Solution, close, or promote learning without
the applicable owner approval. Operational Gym reuses the model only in an
isolated simulation boundary.

### Rationale

The aggregate model gives the owner one coherent operational narrative while
preserving the Learning Decision Pipeline, source provenance, reusable libraries,
immutable history, recommendation authority, and explicit organizational-learning
promotion. Bounded centrality avoids turning every interaction into administrative
Case management.

### Alternatives considered

- Retain only independent top-level domains — rejected because the owner must
  repeatedly reconstruct one operational situation across modules.
- Make the Case the exclusive owner of all participating records — rejected
  because Facts, SOPs, Executions, Reviews, Recommendations, and Knowledge require
  independent authority, reuse, and audit.
- Require a Case for all work — rejected because routine execution, capture,
  retrieval, and direct library work do not justify investigative administration.

### Consequences

Future implementation must begin with additive typed relationships, preserve
direct domain access, distinguish Case closure from resolution, and prevent
automatic conversion of Hypotheses into Causes or Case learning into organizational
truth. A separate implementation proposal or plan, data architecture, migration
authority, Product Language review, and explicit APPLY remain required.

### References

- [Operational Case Architecture](OPERATIONAL_CASE_ARCHITECTURE.md)
- [Product Vision](PRODUCT_VISION.md)
- [Owner Journey](OWNER_JOURNEY.md)
- [Systems](SYSTEMS.md)
- [Architecture](ARCHITECTURE.md)
- [AI Assistant Architecture](AI_ASSISTANT_ARCHITECTURE.md)
- [Adaptive Owner Context Architecture](ADAPTIVE_OWNER_CONTEXT_ARCHITECTURE.md)

## DL-010 — Define Operational Case as a bounded operational learning and change process

- Date: 2026-07-23
- Status: Accepted
- Decision owner: Product Owner
- Category: Strategic product and information architecture
- Affected documents: `OPERATIONAL_CASE_ARCHITECTURE.md`, `PRODUCT_VISION.md`, `OWNER_JOURNEY.md`, `AI_FIRST_WORKSPACE_ARCHITECTURE.md`, `AI_ASSISTANT_ARCHITECTURE.md`, `NATURAL_CAPTURE_ARCHITECTURE.md`, `PERSONAL_OPERATIONAL_MODEL.md`, `SYSTEMS.md`, `ARCHITECTURE.md`, `ROADMAP.md`, `AI_CAPABILITY_ROADMAP.md`, `PRODUCT_LANGUAGE.md`, `DOCUMENTATION_MAP.md`, `SPRINTS.md`
- Supersedes: None; refines DL-009 without changing bounded centrality or domain ownership
- Superseded by: None

### Context

DL-009 established Operational Case as the bounded aggregate for non-routine
operational reasoning. Strategic review found that an aggregate or record-container
interpretation remained too passive and could preserve artifact-oriented product
behavior. It also found that defining every Case only as business-process
improvement would exclude recovery, prevention, investigation, consequential
decisions, design, and justified no-action outcomes.

### Decision

Define Operational Case as a bounded operational learning and change process
through which the owner understands a situation, makes and executes justified
decisions, verifies the outcome, and determines what should become durable
practice.

Every Case declares an intent: Improvement, Recovery, Prevention, Investigation,
Decision, Design, or No-action validation. Applicable Cases preserve current and
intended conditions, success and guardrail measures, Evidence and causal
understanding, Countermeasure cycles, predicted and observed effects, outcome
verification, and standardization judgment. The cycle is iterative and may end in
success, restoration, controlled risk, sufficient understanding, inconclusive
Evidence, failed intervention, another cycle, or justified no action.

Management OS optimizes for better operational capability through better human
decisions and verified action, not the number of management artifacts. Knowledge
remains compounding operational capital and an input or approved intermediate
product, not the sole terminal outcome.

### Rationale

The active process model aligns Case work with operational value and continuous
learning while preventing completed records from becoming a proxy for improvement.
Case intents preserve the breadth of operational management, and explicit
verification prevents selected Countermeasures from being presented as successful
Solutions before Evidence supports the outcome.

### Alternatives considered

- Retain the aggregate-only definition — rejected because it organizes records
  without making operational effect the governing outcome.
- Define every Case as business-process improvement — rejected because valid Cases
  may restore, prevent, investigate, decide, design, or justify no action.
- Make Knowledge or SOP creation the terminal Case result — rejected because the
  verified operational effect and standardization judgment determine whether any
  durable artifact is justified.
- Require one Root Cause and linear stages — rejected because operational causality
  may be plural, uncertain, interacting, or outside the owner's control, and
  learning cycles are iterative.

### Consequences

Future implementation must distinguish Countermeasure from verified Solution,
activity from outcome, and closure from success. It must support explicit Case
intent, measurement guardrails, inconclusive and failed outcomes, and another-cycle
decisions without forcing every artifact or Case stage. Home remains primary,
domains retain record ownership, and a separate data model, implementation plan,
approval, and APPLY remain required.

### References

- [Operational Case Architecture](OPERATIONAL_CASE_ARCHITECTURE.md)
- [Product Vision](PRODUCT_VISION.md)
- [Owner Journey](OWNER_JOURNEY.md)
- [AI-first Workspace Architecture](AI_FIRST_WORKSPACE_ARCHITECTURE.md)
- [AI Assistant Architecture](AI_ASSISTANT_ARCHITECTURE.md)
- [Systems](SYSTEMS.md)
- [Architecture](ARCHITECTURE.md)
- [Decision Log](DECISIONS.md), DL-009 — Use Operational Case as the bounded aggregate for non-routine operational reasoning

## DL-011 — Establish the Operational Intelligence Platform reasoning and environment architecture

- Date: 2026-07-23
- Status: Accepted
- Decision owner: Product Owner
- Category: Strategic product architecture
- Affected documents: `OPERATIONAL_REASONING_MODEL.md`, `CASE_EVIDENCE_ARCHITECTURE.md`, `SCENARIO_SIMULATION_ARCHITECTURE.md`, `OPERATIONAL_CASE_ARCHITECTURE.md`, `PRODUCT_VISION.md`, `OWNER_JOURNEY.md`, `AI_FIRST_WORKSPACE_ARCHITECTURE.md`, `AI_ASSISTANT_ARCHITECTURE.md`, `PERSONAL_OPERATIONAL_MODEL.md`, `SYSTEMS.md`, `ARCHITECTURE.md`, `ROADMAP.md`, `AI_CAPABILITY_ROADMAP.md`, `PRODUCT_LANGUAGE.md`, `DOCUMENTATION_MAP.md`, `SPRINTS.md`
- Supersedes: None; extends DL-009 and DL-010
- Superseded by: None

### Context

Operational Case established a coherent process for real non-routine work, but a
platform for operational intelligence must also support practice and safe future
exploration. Treating all three as one Case type would mix real Evidence, training
material, assumptions, modeled outputs, observed outcomes, and durable learning.

### Decision

Use the Operational Reasoning Model as the shared grammar across three distinct
contracts: Reality Operational Cases, Operational Gym Cases, and Scenario Branches.
Reality uses authorized Evidence and has real consequences; Gym uses isolated
training material and feedback; Simulation uses an immutable real Case baseline,
explicit assumptions, governed model logic, and plausible conditional outputs.

Case Evidence Sets and Scenario Simulation have separate canonical authority.
Every material real decision preserves a decision-time Evidence basis. Assumptions,
AI summaries, Gym material, and modeled outputs do not become source or observed
Evidence. Simulation remains owner-invoked and distinct from future proactive
Predictive Operational Insights. Home remains stable and owner approval remains
required at consequential mutation and promotion boundaries.

### Rationale

One reasoning grammar reduces cognitive translation between real work, practice,
and exploration. Separate truth and consequence contracts prevent simulation
credibility, training performance, or generated synthesis from contaminating
organizational knowledge and real decision traces.

### Alternatives considered

- One undifferentiated Case entity — rejected because it obscures different truth,
  action, outcome, and promotion rules.
- A cloned real Case for simulation — rejected because editable copies blur the
  authoritative baseline and modeled branch.
- Simulation as prediction — rejected because conditional outputs do not justify
  forecasting claims without separate longitudinal validation.
- Gym performance in the Personal Operational Model — rejected because that model
  owns approved context and preferences, not competence profiling.

### Consequences

Future delivery must establish Reality Evidence and decision traceability before
Gym or Simulation, begin simulation with qualitative branches, and require
proportionate model validation before quantitative claims. A future Owner Learning
Record architecture is required before durable training assessment. No runtime,
data model, simulation engine, Gym, or navigation implementation is authorized.

### References

- [Operational Reasoning Model](OPERATIONAL_REASONING_MODEL.md)
- [Case Evidence Architecture](CASE_EVIDENCE_ARCHITECTURE.md)
- [Scenario Simulation Architecture](SCENARIO_SIMULATION_ARCHITECTURE.md)
- [Operational Case Architecture](OPERATIONAL_CASE_ARCHITECTURE.md)
- [Product Vision](PRODUCT_VISION.md)

## DL-012 — Define the Operational Case as a symptom-first investigation experience

- Date: 2026-07-23
- Status: Accepted
- Decision owner: Product Owner
- Category: Experience architecture
- Affected documents: `OPERATIONAL_CASE_EXPERIENCE_ARCHITECTURE.md`, `OPERATIONAL_CASE_ARCHITECTURE.md`, `CASE_EVIDENCE_ARCHITECTURE.md`, `SCENARIO_SIMULATION_ARCHITECTURE.md`, `OPERATIONAL_REASONING_MODEL.md`, `OWNER_JOURNEY.md`, `AI_FIRST_WORKSPACE_ARCHITECTURE.md`, `AI_ASSISTANT_ARCHITECTURE.md`, `PRODUCT_VISION.md`, `PRODUCT_LANGUAGE.md`, `ROADMAP.md`, `DOCUMENTATION_MAP.md`, `SPRINTS.md`
- Supersedes: None; applies DL-009 through DL-011 to the owner experience
- Superseded by: None

### Context

The approved architecture defines a coherent reasoning and domain model, but its
experience could still expose record types, require premature classification, or
turn every Case stage into interface administration. An owner normally begins with
an uncertain Symptom rather than a known problem, title, or Cause.

### Decision

Define the canonical Case experience as a calm operational investigation. A Case
may begin without an owner-authored title, using a stable identifier, preserved
reported concern, and `New symptom` presentation. After initial framing, a neutral
working title may support recognition without claiming verified understanding.
The original concern remains preserved and material renaming remains visible and
owner-controlled.

The Case progressively presents what is known, missing or disputed, assumed,
expected next, and awaiting observation. Evidence feels gathered for an
investigation; material decisions remain linked to their Evidence basis; supporting
records preserve Case continuity and return paths. Simulation opens a Scenario
Branch from the real Case, and Gym uses the familiar investigation experience
within its isolated training contract.

### Rationale

Symptom-first entry matches the owner's actual knowledge state and prevents early
wording from becoming diagnosis. Progressive naming reduces recognition cost
without making title certainty a prerequisite. Persistent orientation and
progressive disclosure teach the Operational Reasoning Model through use while
avoiding both module switching and Case-stage overload.

### Alternatives considered

- Require a Case title at creation — rejected because the owner may know only a
  Symptom and would be forced to encode an assumption.
- Delay all naming until Cause verification — rejected because numbered Cases alone
  are difficult to recognize in Home, Search, links, and notifications.
- Present every domain artifact or Case stage simultaneously — rejected because it
  reproduces module overload inside the Case.
- Treat Root Cause as mandatory — rejected because Causes may be plural, bounded,
  external, or unresolved while a justified decision remains possible.

### Consequences

Future implementation must distinguish identifier, reported concern, working
title, and verified conclusion; preserve cross-record Case continuity; support
progressive disclosure and persistent reasoning orientation; and keep Simulation
and Gym environment identity visible. These are experience requirements over the
approved architecture, not authorization for a new entity, data model, runtime,
navigation, or interface implementation.

### References

- [Operational Case Experience Architecture](OPERATIONAL_CASE_EXPERIENCE_ARCHITECTURE.md)
- [Owner Journey](OWNER_JOURNEY.md)
- [Operational Case Architecture](OPERATIONAL_CASE_ARCHITECTURE.md)
- [Operational Reasoning Model](OPERATIONAL_REASONING_MODEL.md)
- [AI-first Workspace Architecture](AI_FIRST_WORKSPACE_ARCHITECTURE.md)

## DL-013 — Refine the operational investigation partnership and Evidence experience

- Date: 2026-07-23
- Status: Accepted
- Decision owner: Product Owner
- Category: Product experience and operational investigation architecture
- Affected documents: `OPERATIONAL_CASE_EXPERIENCE_ARCHITECTURE.md`, `OPERATIONAL_CASE_ARCHITECTURE.md`, `CASE_EVIDENCE_ARCHITECTURE.md`, `AI_ASSISTANT_ARCHITECTURE.md`, `OWNER_JOURNEY.md`, `AI_FIRST_WORKSPACE_ARCHITECTURE.md`, `PRODUCT_LANGUAGE.md`, `DOCUMENTATION_MAP.md`, `SPRINTS.md`
- Supersedes: None; refines DL-012
- Superseded by: None

### Context

DL-012 established symptom-first entry and a calm investigation experience. Further
review identified ambiguity between the broad Case presentation state and its
epistemic entry signal, and required clearer rules for active AI participation,
Evidence discovery, organizational structure, and historical Case retrieval.

### Decision

Use `New investigation` as the broad owner-facing entry state and `Reported
symptom` as the entry signal. A reported Symptom does not establish a measured
deviation or verified Fact. Preserve the stable identifier, original owner wording,
neutral working title, and supported conclusion as distinct concepts.

AI actively advances investigation readiness by preparing authorized Evidence,
exposing gaps and contradictions, comparing Hypotheses, proposing next steps, and
surfacing relevant historical Cases. The owner retains consequential interpretation,
lifecycle, decision, execution, verification, closure, and promotion authority.

Financial, Operational, Human, Structural, Historical, and System Evidence are
non-exclusive discovery facets over the canonical epistemic classification.
Structural Evidence is first-class, but formal organization does not prove actual
authority or behavior. Historical similarity supports retrieval and comparison;
it never transfers Cause, confidence, decision, or Solution.

### Rationale

Separating Case state from the Symptom's epistemic status avoids presenting a
tentative concern as observation. Active preparation makes AI a useful investigation
partner while preserving judgment. Evidence facets match how owners look for
material without making source type a proxy for quality, and explicit transfer
limits prevent historical anchoring.

### Alternatives considered

- Use `New symptom` as the complete Case state — rejected because it mixes Case
  progression with the type and certainty of the entry signal.
- Allow AI to advance consequential Case state — rejected because preparation and
  authority must remain separate.
- Make Evidence families exclusive or hierarchical — rejected because one source
  may serve several investigative roles and source family does not establish weight.
- Reuse prior Case Causes from similarity — rejected because context differences
  may invalidate causal transfer.

### Consequences

Future experience implementation must preserve explicit Symptom status, selective
AI proactivity, visible contradictions, multi-facet Evidence discovery, comparison
of formal and actual structure, and explainable historical similarity. No runtime,
data model, UI, navigation, retrieval, or AI behavior is implemented by this
documentation decision.

### References

- [Operational Case Experience Architecture](OPERATIONAL_CASE_EXPERIENCE_ARCHITECTURE.md)
- [Case Evidence Architecture](CASE_EVIDENCE_ARCHITECTURE.md)
- [AI Assistant Architecture](AI_ASSISTANT_ARCHITECTURE.md)
- [Operational Case Architecture](OPERATIONAL_CASE_ARCHITECTURE.md)
- [Owner Journey](OWNER_JOURNEY.md)

## DL-014 — Explain material decisions through qualitative Evidence Influence

- Date: 2026-07-23
- Status: Accepted
- Decision owner: Product Owner
- Category: Product experience and Evidence architecture
- Affected documents: `CASE_EVIDENCE_ARCHITECTURE.md`, `OPERATIONAL_CASE_EXPERIENCE_ARCHITECTURE.md`, `AI_ASSISTANT_ARCHITECTURE.md`, `OPERATIONAL_CASE_ARCHITECTURE.md`, `OPERATIONAL_REASONING_MODEL.md`, `PRODUCT_VISION.md`, `OWNER_JOURNEY.md`, `SYSTEMS.md`, `ARCHITECTURE.md`, `PRODUCT_LANGUAGE.md`, `DOCUMENTATION_MAP.md`, `ROADMAP.md`, `SPRINTS.md`
- Supersedes: None; extends DL-012 and DL-013
- Superseded by: None

### Context

Decision-time Evidence snapshots preserve what was available, but they do not by
themselves explain how particular Evidence changed the investigation or materially
shaped the final decision. Numerical scores or percentages would create false
precision and could be mistaken for source quality or truth.

### Decision

Each Case Evidence item may preserve qualitative Evidence Influence roles:
Established the Symptom, Confirmed a Hypothesis, Rejected a Hypothesis, Revealed a
contradiction, Triggered a new investigation path, Supported the final decision,
or Background context. Influence remains scoped to a named proposition, path, or
decision and may differ across them.

At completion of an Investigation with a material decision, AI may prepare a
Decision Evidence Summary from the immutable decision-time snapshot. The
owner-reviewed summary groups contributions as Primary Evidence, Major Supporting
Evidence, Supporting Evidence, and Background Context while preserving source
links, roles, contradictions, limitations, missing Evidence, and uncertainty.

These are explainability semantics, not rankings, truth scores, confidence
percentages, or new Evidence. AI safeguards completeness, contradiction visibility,
Hypothesis quality, and investigation discipline; the owner retains conclusion,
decision, closure, and learning authority.

### Rationale

Qualitative contribution makes decision reasoning inspectable without implying
mathematical certainty. Preserving both material influence and unresolved gaps
supports later review, historical comparison, and organizational learning while
preventing an AI-generated summary from becoming a competing source of truth.

### Alternatives considered

- Rank Evidence documents — rejected because document order does not express how
  Evidence affected a particular proposition or decision.
- Use percentages or weighted scores — rejected because they imply unsupported
  precision and conflate influence, quality, confidence, and truth.
- Preserve only the full snapshot — rejected because audit completeness does not
  provide a concise explanation of material contribution.
- Let AI finalize the summary — rejected because material influence participates
  in owner-approved decision and closure reasoning.

### Consequences

Future data and runtime proposals must preserve scoped influence, historical
decision-time roles, qualitative contribution levels, contradictions, missing
Evidence, and owner review. The current Sprint 9 prototype demonstrates these
semantics only; it adds no AI, ingestion, scoring, persistence, backend, or
automated authority.

### References

- [Case Evidence Architecture](CASE_EVIDENCE_ARCHITECTURE.md)
- [Operational Case Experience Architecture](OPERATIONAL_CASE_EXPERIENCE_ARCHITECTURE.md)
- [AI Assistant Architecture](AI_ASSISTANT_ARCHITECTURE.md)
- [Operational Case Architecture](OPERATIONAL_CASE_ARCHITECTURE.md)
- [Operational Reasoning Model](OPERATIONAL_REASONING_MODEL.md)

## DL-015 — Preserve supported behavioral change as Operational Inflection Points

- Date: 2026-07-23
- Status: Accepted
- Decision owner: Product Owner
- Category: Operational Case and experience architecture
- Affected documents: `OPERATIONAL_CASE_ARCHITECTURE.md`, `CASE_EVIDENCE_ARCHITECTURE.md`, `OPERATIONAL_CASE_EXPERIENCE_ARCHITECTURE.md`, `AI_ASSISTANT_ARCHITECTURE.md`, `OPERATIONAL_REASONING_MODEL.md`, `PRODUCT_VISION.md`, `OWNER_JOURNEY.md`, `SYSTEMS.md`, `ARCHITECTURE.md`, `PRODUCT_LANGUAGE.md`, `DOCUMENTATION_MAP.md`, `ROADMAP.md`, `SPRINTS.md`
- Supersedes: None; extends DL-010, DL-013, and DL-014
- Superseded by: None

### Context

A chronological event log preserves sequence but does not show where the
operational system began behaving differently. Treating every event equally hides
investigative boundaries; treating a preceding event as the Cause would overstate
what temporal order proves.

### Decision

Operational Timeline distinguishes ordinary events from Operational Inflection
Points. An Inflection Point is an owner-accepted Case finding identifying a
significant boundary after which observable operational behavior changed
meaningfully. It preserves the observed before/after change, Primary, Supporting,
and Rejected Evidence, supporting and competing Hypotheses, nearby Timeline events,
qualitative confidence, unresolved uncertainty, and acceptance history.

An Inflection Point is not an assumption, Hypothesis, or causal conclusion. AI may
prepare a candidate but cannot accept it or infer Cause from sequence. Completion
and Knowledge synthesis preserve accepted points. Historical similarity uses
behavioral-change shape, Operating Context, and Evidence patterns; keywords alone
are insufficient.

### Rationale

The distinction makes the Timeline investigative rather than administrative. It
improves causal reasoning by locating supported change boundaries while preserving
the separate burden of explaining why the change occurred.

### Alternatives considered

- Preserve only chronological events — rejected because material behavioral shifts
  remain hidden in event volume.
- Treat every detected trend change as an Inflection Point — rejected because the
  finding requires Evidence, scope, confidence, uncertainty, and owner acceptance.
- Infer Cause from the nearest preceding event — rejected because temporal sequence
  does not establish causality.
- Match historical points by keywords — rejected because terminology similarity
  does not establish similar behavior or context.

### Consequences

Future implementation must distinguish event and finding states, retain Evidence
and Hypothesis links, preserve rejection and uncertainty, and require owner
acceptance. The Sprint 9 prototype demonstrates the experience only; it implements
no event persistence, detection model, causal inference, similarity service, or
authority change.

### References

- [Operational Case Architecture](OPERATIONAL_CASE_ARCHITECTURE.md)
- [Case Evidence Architecture](CASE_EVIDENCE_ARCHITECTURE.md)
- [Operational Case Experience Architecture](OPERATIONAL_CASE_EXPERIENCE_ARCHITECTURE.md)
- [AI Assistant Architecture](AI_ASSISTANT_ARCHITECTURE.md)
- [Operational Reasoning Model](OPERATIONAL_REASONING_MODEL.md)

## DL-016 — Establish Operational Memory and governed Experience Patterns

- Date: 2026-07-23
- Status: Accepted
- Decision owner: Product Owner
- Category: Strategic product and AI architecture
- Affected documents: `OPERATIONAL_MEMORY_ARCHITECTURE.md`, `PRODUCT_VISION.md`, `OPERATIONAL_CASE_ARCHITECTURE.md`, `OPERATIONAL_CASE_EXPERIENCE_ARCHITECTURE.md`, `CASE_EVIDENCE_ARCHITECTURE.md`, `AI_ASSISTANT_ARCHITECTURE.md`, `PERSONAL_OPERATIONAL_MODEL.md`, `SYSTEMS.md`, `ARCHITECTURE.md`, `PRODUCT_LANGUAGE.md`, `DOCUMENTATION_MAP.md`, `OWNER_JOURNEY.md`, `ROADMAP.md`, `SPRINTS.md`
- Supersedes: None; extends DL-010, DL-013, DL-014, and DL-015
- Superseded by: None

### Context

Completed Cases preserve bounded operational episodes and Knowledge preserves
approved reusable understanding, but neither owns explainable recurring behavior
across comparable episodes. Expanding the Knowledge Base would conflate approved
propositions with accumulated experience, while an independent Experience module
would recreate artifact-centered navigation and duplicate source authority.

### Decision

Operational Memory is the canonical future capability connecting authoritative
Operational Episodes into explainable organizational experience. Experience
Pattern is its owner-reviewed, provenance-preserving cross-episode synthesis.
Organizational Memory remains only the broader organization-wide phenomenon.

Patterns preserve supporting, contradicting, and excluded episodes, Operating
Context, Evidence and Inflection Point patterns, interventions, outcomes,
applicability limits, decomposed qualitative confidence, uncertainty, and lifecycle
history. They are derived historical context, not current Evidence, causal proof,
organizational truth, or authority to act.

AI may retrieve authorized episodes and prepare candidates but cannot silently
train model weights, approve patterns, infer Cause from recurrence, promote
Knowledge or SOPs, apply interventions, or change current conclusions. Current
authorized Evidence and owner judgment retain precedence.

### Rationale

The model lets operational experience compound while preserving the distinction
between what happened, what is approved as reusable understanding, and what the
current situation supports. It provides durable explainability and governance
without creating a new primary product module.

### Alternatives considered

- Expand Knowledge Entries with pattern types — rejected because propositions and
  historical experience require different provenance and confidence semantics.
- Add Operational Experience as an independent module — rejected because owners
  should encounter memory inside Investigations rather than curate another library.
- Generate every pattern dynamically — rejected because unstable synthesis cannot
  support durable owner review, contestation, or supersession.
- Treat Operational Memory as an AI model — rejected because product memory,
  source authority, and owner governance must not depend on silent model training.

### Consequences

Future proposals require a pattern lifecycle, scoped applicability, permission-aware
source lineage, contradictions, temporal review, and decomposed confidence. No
Experience Pattern entity, persistence, retrieval, detection, training, interface,
migration, or navigation change is implemented by this decision.

### References

- [Operational Memory Architecture](OPERATIONAL_MEMORY_ARCHITECTURE.md)
- [Operational Case Architecture](OPERATIONAL_CASE_ARCHITECTURE.md)
- [Case Evidence Architecture](CASE_EVIDENCE_ARCHITECTURE.md)
- [AI Assistant Architecture](AI_ASSISTANT_ARCHITECTURE.md)
- [Personal Operational Model](PERSONAL_OPERATIONAL_MODEL.md)

## DL-017 — Evolve Organizational Knowledge through owner-governed review

- Date: 2026-07-23
- Status: Accepted
- Decision owner: Product Owner
- Category: Strategic product and knowledge architecture
- Affected documents: `KNOWLEDGE_EVOLUTION_ARCHITECTURE.md`, `OPERATIONAL_MEMORY_ARCHITECTURE.md`, `PRODUCT_VISION.md`, `AI_ASSISTANT_ARCHITECTURE.md`, `SYSTEMS.md`, `ARCHITECTURE.md`, `PRODUCT_LANGUAGE.md`, `OWNER_JOURNEY.md`, `DOCUMENTATION_MAP.md`, `ROADMAP.md`, `SPRINTS.md`
- Supersedes: None; extends DL-016
- Superseded by: None

### Context

Approved Organizational Knowledge must remain stable enough to support consistent
work but cannot remain frozen as material Evidence, Investigations, Experience
Patterns, theory, and operating conditions change. Editing approved Knowledge in
place would destroy decision-time explanation, while autonomous living Knowledge
would transfer organizational authority to automation.

### Decision

Organizational Knowledge uses stable identities and immutable approved semantic
versions. Durable lifecycle states are Candidate, Under Review, Approved,
Superseded, Archived, and Rejected. Review and challenge conditions remain
orthogonal: an approved version with an open challenge remains authoritative until
the owner decides otherwise. `Updated` is an event, not a state.

Knowledge Review Candidate is a separate governed proposal identifying the exact
version, review trigger, contributing and contradicting sources, applicability,
materiality, uncertainty, and requested judgment. Operational Memory and AI may
prepare or consolidate candidates but cannot modify, approve, invalidate,
supersede, archive, or replace Knowledge. Material changes require owner approval
and a new version; historical decisions retain their decision-time version links.

### Rationale

Versioned owner review preserves organizational stability, continuous learning,
and historical explainability without conflating Experience Patterns with approved
reusable understanding.

### Alternatives considered

- Keep approved Knowledge static — rejected because contradictions accumulate
  without a governed correction path.
- Edit approved entries in place — rejected because semantic history and prior
  decision context would be lost.
- Let Operational Memory update Knowledge automatically — rejected because
  recurrence is not truth and automation owns no organizational authority.
- Require repeated Experience Patterns for every review — rejected because one
  authoritative material Investigation may justify review.

### Consequences

Future proposals must preserve semantic versions, review candidates, orthogonal
challenge conditions, source provenance, applicability, dependency identification,
and owner transitions. The implemented Knowledge Base remains unchanged and
unversioned; no entity, persistence, migration, review signal, AI behavior, or
interface is introduced.

### References

- [Knowledge Evolution Architecture](KNOWLEDGE_EVOLUTION_ARCHITECTURE.md)
- [Operational Memory Architecture](OPERATIONAL_MEMORY_ARCHITECTURE.md)
- [AI Assistant Architecture](AI_ASSISTANT_ARCHITECTURE.md)
- [Product Vision](PRODUCT_VISION.md)
- [Systems](SYSTEMS.md)

## DL-018 — Govern next-question selection through Operational Inquiry

- Date: 2026-07-23
- Status: Accepted
- Decision owner: Product Owner
- Category: Strategic AI and Operational Investigation architecture
- Affected documents: `OPERATIONAL_INQUIRY_ARCHITECTURE.md`, `AI_ASSISTANT_ARCHITECTURE.md`, `OPERATIONAL_CASE_EXPERIENCE_ARCHITECTURE.md`, `OPERATIONAL_REASONING_MODEL.md`, `OPERATIONAL_MEMORY_ARCHITECTURE.md`, `AI_DECISION_POLICY.md`, `AI_COMMUNICATION_STYLE_GUIDE.md`, `AI_RUNTIME_ARCHITECTURE.md`, `AI_CAPABILITY_ROADMAP.md`, `PRODUCT_VISION.md`, `OWNER_JOURNEY.md`, `SYSTEMS.md`, `PRODUCT_LANGUAGE.md`, `DOCUMENTATION_MAP.md`, `README.md`, `ROADMAP.md`, `SPRINTS.md`
- Supersedes: None; extends DL-013 and DL-016
- Superseded by: None

### Context

The AI Investigation Partner may ask material questions, but generic clarification
rules do not govern which investigative question is most valuable, why it should be
asked now, or when questioning should stop. Treating questions as conversation or
a Case stage would obscure their operational purpose and create questionnaire or
linear-process pressure.

### Decision

Operational Inquiry is the provider-independent capability within the AI
Investigation Partner that selects and explains the smallest valuable next
question. Every substantive inquiry has an outcome-oriented Inquiry Objective and
an inspectable expected contribution. Candidate questions are compared
qualitatively for materiality, discrimination, Evidence, uncertainty, decision and
risk relevance, feasibility, cost, novelty, and bias protection; no universal score
is introduced.

One question is the default. Investigation state influences but does not dictate
strategy, and stopping depends on material reasoning value rather than question or
artifact completion. Operational Memory may influence priority only with source,
difference, alternative-explanation, and disconfirming-condition visibility. The
owner may answer, redirect, defer, reject, inspect alternatives, or change strategy.

### Rationale

The capability makes question quality governable and testable while reducing
cognitive load and preserving nonlinear reasoning, Evidence authority, provider
neutrality, and owner control.

### Alternatives considered

- Leave questions as generic Assistant behavior — rejected because selection,
  explainability, stopping, and quality boundaries remain implicit.
- Make Inquiry a Case stage — rejected because questions recur throughout the
  nonlinear Investigation lifecycle.
- Generate a question backlog — rejected as the default because it transfers
  prioritization burden to the owner.
- Let AI execute an autonomous inquiry plan — rejected because the owner owns
  Investigation strategy and consequential judgment.

### Consequences

Future implementation requires a versioned capability contract, Inquiry Objective,
candidate validation, owner disposition, material-effect persistence rules,
environment separation, and qualitative evaluation. No entity, persistence,
question-selection engine, prompt, model, provider, runtime, interface, external
communication, or AI behavior is implemented.

### References

- [Operational Inquiry Architecture](OPERATIONAL_INQUIRY_ARCHITECTURE.md)
- [AI Assistant Architecture](AI_ASSISTANT_ARCHITECTURE.md)
- [Operational Case Experience Architecture](OPERATIONAL_CASE_EXPERIENCE_ARCHITECTURE.md)
- [Operational Reasoning Model](OPERATIONAL_REASONING_MODEL.md)
- [Operational Memory Architecture](OPERATIONAL_MEMORY_ARCHITECTURE.md)
