# Operational Memory Architecture

## Purpose and status

This document defines the future Operational Memory capability: how Management OS
preserves operational episodes and derives explainable, contextual, revisable
experience for future Investigations.

| Attribute | Definition |
| --- | --- |
| Status | Approved future architecture; not implemented |
| Owner | Product Architect and AI Strategist |
| Primary audience | Product, architecture, design, data, AI, governance, and engineering |
| Canonical authority | Operational Memory, Experience Pattern, historical relevance, confidence, and cross-episode authority boundaries |
| Lifecycle | Updated when approved organizational-experience or cross-Case learning boundaries change |

Operational Memory is a governed capability, not a database, navigation module,
AI model, or independent source of truth. No persistence contract, detection
service, retrieval engine, model training, interface, or migration is implemented.

## Canonical model

**Operational Memory** preserves operational episodes and connects them into
explainable organizational experience for future work.

It relates, without taking authority from:

- completed Operational Cases and their decision-time Evidence snapshots;
- accepted Operational Inflection Points;
- decisions, Countermeasures, Executions, Reviews, and observed outcomes;
- approved organizational Knowledge and SOP evolution;
- governed Experience Patterns.

The surrounding concepts answer distinct questions:

| Concept | Question | Authority |
| --- | --- | --- |
| Management Theory | What is broadly believed to work? | Management Knowledge Model |
| Operational Episode | What happened in this bounded situation? | Source Case, Execution, or Review |
| Organizational Knowledge | What reusable understanding has been approved? | Knowledge lifecycle |
| Experience Pattern | What has repeatedly occurred across comparable episodes? | Operational Memory lifecycle |
| Personal Operational Model | How should assistance adapt to this owner? | Owner-approved personal context |
| Current Investigation | What does current Evidence support now? | Current Case and owner judgment |

**Organizational Memory** is the broader organization-wide phenomenon and is not a
Management OS capability boundary. Operational Memory is the canonical, bounded
product concept.

## Operational episodes

An **Operational Episode** is a bounded historical occurrence represented by an
authoritative source such as a completed Case, Execution, or Review. Operational
Memory references an episode; it does not copy or rewrite its narrative, Evidence,
decision, or outcome.

A completed Case may produce Knowledge, an Experience Pattern candidate, both, or
neither. No lifecycle artifact is required merely to demonstrate completion.

```text
Management Theory
  -> informs Current Investigation
Current Investigation
  -> Completed Case
  -> Knowledge candidate through the Knowledge lifecycle
  -> Experience Pattern candidate through the Operational Memory lifecycle
Accepted Knowledge and Experience Patterns
  -> support future Investigations
```

This is a relationship model, not a mandatory linear pipeline.

## Experience Pattern

An **Experience Pattern** is an owner-reviewed, provenance-preserving synthesis of
recurring operational behavior across sufficiently comparable Operational
Episodes. It is derived historical context, not Evidence about the current Case,
organizational truth, causal proof, or authority to act.

Each Experience Pattern preserves:

- the recurring observed behavior and pattern family;
- contributing, contradicting, and excluded episodes;
- relevant Operating Context, process, organizational scope, and time range;
- repeated Inflection Point shapes and Evidence patterns;
- decisions or interventions attempted and their observed outcomes;
- applicability and exclusion conditions;
- observed association separately from causal interpretation;
- decomposed qualitative confidence and its basis;
- unresolved uncertainty, limitations, coverage gaps, and review history;
- provenance links rather than duplicated source records.

Pattern families are facets of one model, not mandatory separate modules:

- Behavior Pattern;
- Failure Mode;
- Inflection Pattern;
- Evidence Pattern;
- Decision Trap;
- Intervention Pattern.

## Lifecycle and authority

Experience Pattern lifecycle states are **Candidate**, **Under review**,
**Accepted**, **Contested**, **Superseded**, **Dormant**, and **Rejected**.
Equivalent candidates should be related or consolidated with provenance rather
than silently duplicated.

AI may retrieve authorized episodes, compare contexts, prepare or revise a
candidate, and explain why it may be relevant. The owner accepts, contests,
supersedes, rejects, promotes, or applies it. AI must never silently:

- train or update model weights from organizational episodes;
- convert recurrence or temporal order into Cause;
- approve an Experience Pattern;
- promote it into Knowledge or an SOP;
- apply a historical intervention;
- change a current Investigation conclusion.

The authority precedence is:

1. current authorized Evidence and current Case reasoning;
2. current owner judgment and approved decisions;
3. applicable authoritative organizational records;
4. historical Experience Patterns as supporting context;
5. general theory when organizational evidence is incomplete.

Historical experience may challenge, contextualize, or prioritize investigation
work. It never overrides current Evidence.

## Historical relevance and explainability

Historical relevance uses behavioral-change shape, Operating Context, Evidence
patterns, interventions, and outcomes. Keywords may assist retrieval but are never
sufficient alone.

Whenever AI surfaces a pattern, it explains:

- which current observation triggered retrieval;
- which behavior, context, and Evidence structures match;
- which episodes support, contradict, or limit the pattern;
- which material conditions differ;
- what is observed and what is inferred;
- why the pattern may not apply;
- which current Evidence could validate or reject relevance.

Authorization is evaluated across source episodes. A synthesis must not reveal
more than the owner is authorized to retrieve from its sources.

## Confidence

Confidence is qualitative and decomposed into:

- recurrence confidence;
- Evidence confidence and independence;
- context comparability;
- causal confidence;
- outcome confidence and duration;
- current applicability.

Additional episodes may strengthen recurrence confidence without strengthening
causal confidence. Raw Case count, repetition inside one team, keyword similarity,
or agreement with an existing belief never creates certainty. Material context or
measurement changes may reduce applicability and trigger review without rewriting
history.

## Relationship to other architectures

- [Operational Case Architecture](OPERATIONAL_CASE_ARCHITECTURE.md) owns each Case,
  its learning synthesis, and Inflection Point findings.
- [Case Evidence Architecture](CASE_EVIDENCE_ARCHITECTURE.md) owns source authority,
  provenance, snapshots, and Evidence interpretation boundaries.
- [AI Assistant Architecture](AI_ASSISTANT_ARCHITECTURE.md) owns Assistant behavior,
  retrieval, communication, and approval boundaries.
- [Personal Operational Model](PERSONAL_OPERATIONAL_MODEL.md) owns approved personal
  assistance context and never organizational experience.
- Knowledge and SOP lifecycles remain authoritative for reusable understanding and
  procedure. Operational Memory cannot silently promote either.

Operational Memory should emerge within Investigations through similar episodes,
relevant patterns, recurring Inflection Points, prior interventions, and contextual
warnings. A future secondary governance view may support inspection, correction,
and lifecycle review; Operational Memory does not become primary navigation, and
Home remains the stable primary workspace.

## Degraded operation and scalability

Without AI or pattern services, owners retain direct access to Cases, Knowledge,
SOPs, Executions, and Reviews. Operational Memory failure cannot block a current
Investigation or reduce capability availability.

Future implementations should support versioned patterns, temporal and scoped
applicability, source lineage, contradiction sets, permission-aware retrieval,
metric-definition lineage, and supersession without deletion. Team or process
experience does not become organization-wide without additional support and owner
review.

## Non-goals

This architecture does not define autonomous organizational learning, a generic
Knowledge Base replacement, psychological profiling, universal best practices,
causal inference from recurrence, a new top-level module, or current runtime and
data-model implementation.
