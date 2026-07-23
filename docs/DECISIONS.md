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
