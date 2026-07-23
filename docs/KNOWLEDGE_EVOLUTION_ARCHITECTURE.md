# Knowledge Evolution Architecture

Watson applies the [Watson Professional Ethos](WATSON_PROFESSIONAL_ETHOS.md) by
showing which changed Evidence and Experience Patterns justify review while never
silently modifying, invalidating, or rewriting approved Knowledge.

## Purpose and status

This document defines how approved Organizational Knowledge remains stable while
evolving through governed review, immutable semantic versions, and explicit owner
authority.

| Attribute | Definition |
| --- | --- |
| Status | Approved future architecture; not implemented |
| Owner | Product Architect and AI Strategist |
| Primary audience | Product, architecture, knowledge governance, data, AI, and engineering |
| Canonical authority | Organizational Knowledge lifecycle, Knowledge Review Candidate, challenge conditions, semantic versioning, review explainability, and evolution authority |
| Lifecycle | Updated when approved Knowledge governance or evolution boundaries change |

This architecture defines no current entity, schema, persistence, AI behavior,
interface, migration, or automated review service. The implemented Knowledge Base
remains unchanged.

## Organizational Knowledge

**Organizational Knowledge** is an owner-approved, versioned organizational
proposition or structured understanding intended for reuse within an explicit
scope and applicability boundary.

Approval makes a Knowledge version authoritative and usable, not immutable truth.
The stable Knowledge identity relates immutable semantic versions. Each version
preserves:

- its proposition or structured understanding;
- scope, intended use, applicability, and exclusions;
- provenance and the Evidence, experience, and theory considered;
- unresolved uncertainty and known contradictions;
- approval, effective period, and review conditions;
- links to dependent SOPs and historical decisions;
- supersession relationships and review history.

Historical Cases and decisions retain the Knowledge version available at decision
time. They never silently resolve to the newest version.

## Knowledge Review Candidate

Knowledge governance is separate from the Operational Matter macro-state machine
defined by the [Operational Matter Architecture](OPERATIONAL_MATTER_ARCHITECTURE.md).
Operational closure never depends on Knowledge review or publication. Matter
learning lineage may create a candidate, but only this Knowledge lifecycle may
approve, publish, supersede, or retire Organizational Knowledge.

A **Knowledge Review Candidate** is a traceable proposal to review an approved
Knowledge version because material new Evidence, operational experience, theory,
external authority, or context may affect its accuracy, scope, currency, or use.

It is not a Knowledge version, a declaration that existing Knowledge is false, an
operational Recommendation, or authority to modify, invalidate, archive, or
replace Knowledge.

A candidate may propose that the owner:

- confirm the current version unchanged;
- clarify wording without changing meaning;
- narrow or expand scope;
- add an exception or limitation;
- revise, split, or merge a proposition;
- supersede or archive a version;
- create separate new Knowledge.

Each candidate preserves the exact Knowledge version and proposition under review,
the trigger, contributing and contradicting sources, materiality, applicability,
uncertainty, requested judgment, and candidate history.

## Lifecycle

The durable Knowledge record lifecycle is:

1. **Candidate**;
2. **Under Review**;
3. **Approved**;
4. **Superseded**;
5. **Archived**;
6. **Rejected**.

`Updated` is an event, not a durable state. A material update creates a new approved
semantic version and supersedes the prior version. Presentation-only corrections
may be recorded as non-semantic revisions only when meaning, scope, intended use,
limitations, and authority remain unchanged.

Review conditions are orthogonal to lifecycle state:

- Review suggested;
- Challenge open;
- Scheduled review due;
- Material contradiction detected;
- External authority changed;
- Applicability uncertain;
- Evidence coverage degraded.

An approved version may have an open challenge and remains authoritative until the
owner decides otherwise. A challenge records unresolved tension; it never silently
downgrades, invalidates, or supersedes Knowledge.

```text
Candidate -> Under Review -> Approved v1
                               |
                         review suggested
                               |
                    Knowledge Review Candidate
                               |
                          Owner Review
                  /            |             \
          confirm v1       reject review    approve v2
                                               |
                                      v1 becomes Superseded
```

Knowledge may also be archived by an explicit owner decision. Superseded and
archived versions remain available for historical explanation.

## Review triggers and stability

Review may be suggested by contradictory Experience Patterns, a material
counterexample, repeated applicability failure, changed Operating Context or
measurement definition, authoritative external change, persistent outcome
divergence, owner request, or scheduled governance review.

Repeated patterns are not required. One high-quality Investigation may justify
review when its Evidence is authoritative, material, and directly relevant.
Conversely, repetition alone does not justify review when episodes are dependent,
duplicated, outside scope, or based on incompatible measurements.

To protect stability, review suggestions should account for materiality, novelty,
source independence, applicability, decision impact, urgency, existing open
candidates, and interruption cost. Similar signals consolidate into one candidate
with accumulated provenance rather than repeated owner interruptions.

## Relationship to Operational Memory

[Operational Memory](OPERATIONAL_MEMORY_ARCHITECTURE.md) may detect material
tension, relate authorized Operational Episodes and Experience Patterns, prepare a
Knowledge Review Candidate, and explain why review may be valuable. It may also
show when experience continues to support the current Knowledge version or when a
candidate's basis weakens.

Experience Patterns and Knowledge remain permanently distinct:

- an Experience Pattern states what repeatedly occurred under bounded conditions;
- Organizational Knowledge states what reusable understanding the organization has
  approved within a defined scope.

Promotion never erases the Experience Pattern or its source episodes. Knowledge
retains links to the material experience considered during approval.

Operational Memory must never modify, approve, replace, invalidate, supersede, or
archive Knowledge. The Knowledge lifecycle remains the only authority for those
changes.

## AI participation and explainability

AI may prioritize, consolidate, and prepare review candidates. It may remain silent
when a signal is immaterial, outside applicability, duplicative, inadequately
explainable under source authorization, or not worth the interruption. It cannot
suppress a material contradiction inside a relevant Investigation.

Every AI-prepared review explanation includes:

- the exact Knowledge identity, version, proposition, scope, and applicability;
- what changed and why the review is surfaced now;
- contributing and contradicting Experience Patterns and source episodes;
- relevant Operational Inflection Points and Evidence differences;
- source independence, measurement compatibility, and circularity risks;
- whether the challenge concerns truth, scope, causality, usefulness, or currency;
- material contextual differences, missing Evidence, and rejected Evidence;
- consequences of leaving the version unchanged;
- uncertainty, limitations, and the owner judgment requested.

AI distinguishes contradiction from an out-of-scope exception, incompleteness,
obsolete operational use, and inability to compare. It never turns recurrence into
Cause, a confidence percentage, or an automatic Knowledge transition.

## Authority and dependencies

Authority remains separated:

- source Cases own historical findings;
- Evidence sources retain source authority;
- Experience Patterns own only their governed cross-episode synthesis;
- Knowledge Review Candidates own only the review proposal and explanation;
- the Knowledge lifecycle owns approved versions;
- the owner approves, rejects, supersedes, or archives;
- current Investigations remain governed by current Evidence and owner judgment.

When Knowledge changes, Management OS may identify affected SOPs,
Recommendations, training material, active Investigations, planning assumptions,
and Experience Pattern interpretations. Identification does not authorize mutation;
each dependent domain retains its own approval and change workflow.

## Confidence and scale

Review reasoning preserves separate qualitative dimensions: source authority,
Evidence independence, recurrence, context comparability, causal support, outcome
durability, coverage, recency, and unresolved contradiction. More experience may
strengthen recurrence while weakening scope confidence or leaving causality open.

Knowledge applicability may be bounded by organization, business unit, team,
process, market, product, Operating Context, effective period, regulation, or
contract. A local challenge never creates organization-wide supersession without
support for that scope.

Retrieval should prefer the current applicable approved version, disclose material
open challenges, then offer relevant Experience Patterns and source episodes.
Superseded versions appear when required for historical explanation.

## Degraded operation and non-goals

Without Operational Memory or AI, owners may create, review, version, and retrieve
Knowledge through its owning workflow. Pattern or review-signal failure cannot
invalidate Knowledge, block a current Investigation, or reduce capability access.

This architecture does not authorize autonomous living Knowledge, in-place rewrite
of semantic history, automatic dependency updates, Knowledge confidence scores,
silent model training, a new primary navigation module, or current implementation.
