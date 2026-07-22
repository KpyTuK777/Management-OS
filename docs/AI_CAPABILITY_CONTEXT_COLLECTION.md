# AI Capability 02 — Context Collection

## Purpose and status

Context Collection determines and assembles the smallest authorized context package
required by another approved AI capability. It retrieves, validates, minimizes,
attributes, separates, and packages source material; it does not interpret,
classify, recommend, decide, or mutate.

| Property | Decision |
| --- | --- |
| Status | Approved AI capability architecture; not implemented |
| Delivery milestone | Sprint 8 |
| Accountable owner | Product Architect & AI Strategist |
| Product approval | Product Owner |
| Capability role | Conditional context retrieval and packaging |
| Authority | Read and prepare only within a declared authorized request |

[AI Runtime Architecture](AI_RUNTIME_ARCHITECTURE.md) owns runtime orchestration.
[AI Capability 01 — Intent Recognition](AI_CAPABILITY_INTENT_RECOGNITION.md) is the
first consumer defined for this capability, and [AI Decision Policy](AI_DECISION_POLICY.md)
owns behavioral choice after capability validation. This architecture authorizes
no implementation.

## Capability philosophy

Context Collection answers:

> Which permitted information was explicitly needed, and what can safely be
> supplied?

It does not determine what the owner means, which entity is correct, what follows
from the records, or what the owner should do.

### Governing principles

- **Minimum necessary context.** Include only information required for the
  consuming capability's declared purpose.
- **No context collection without declared need.** Context Collection is invoked
  only when the consuming capability declares that additional context is required
  for its approved purpose. If sufficient authorized evidence is already
  available, the AI Runtime bypasses Context Collection.
- **Authorization before relevance.** Information is never eligible merely because
  it appears useful.
- **Relevance must be evidenced.** Every included source satisfies a declared
  selector, relationship, scope, or approved relevance rule.
- **Sources remain sources.** Preserve provenance, authority, freshness,
  uncertainty, and conflict.
- **Context layers remain distinct.** Organizational records, temporary context,
  and approved personal context are not blended.
- **Absence is not Evidence.** Missing, unavailable, unauthorized, and nonexistent
  information remain different states.
- **Freshness is visible.** Stale information may remain authoritative, but its age
  and limitations are explicit.
- **More context is not better context.** Additional data increases privacy,
  latency, distraction, and inference risk.
- **Truth before completeness.** An explicitly incomplete package is safer than an
  unauthorized or misleadingly complete one.

## Capability contract

Context Collection receives a validated Context Request and returns a bounded
Context Package, a partial package with explicit limitations, or a Context
Collection Failure. It ends at package delivery; the consuming capability
interprets permitted Evidence under its own contract.

Before creating a Context Request, the consuming capability and AI Runtime evaluate
the capability's declared evidence-sufficiency rules. When the evidence already
available to the capability is sufficient and authorized, no Context Request is
created and Context Collection is bypassed. Bypass is the preferred result when
additional context is unnecessary.

Context Collection may validate requests, retrieve permitted records, apply
approved filters and limits, remove duplicate representations, redact prohibited
fields, attach provenance and freshness, preserve conflicts, and report missing or
unavailable sources. It may not determine what the material means.

### Authorized callers

A caller must be an approved capability invoked through an authenticated and
authorized runtime request, operating within one Account and Workspace, permitted
to request the declared categories, and bound to a versioned contract.

Authorization permits Context Collection when declared need exists; authorization
alone never justifies invoking it. A model, prompt, provider adapter, or owner text
cannot invoke collection directly or expand its scope.

### Context Request model

Every request is capability-owned and provider-independent.

| Request field | Purpose |
| --- | --- |
| Request identifier | Trace the collection operation |
| Consuming capability and contract version | Bind collection to approved behavior |
| Account and Workspace scope | Establish authorization boundary |
| Interaction or workflow reference | Identify applicable temporary context |
| Declared purpose | State why additional context is required |
| Evidence gap | Identify what the available Evidence cannot establish and why collection is necessary |
| Sufficiency rule | Define when the requested context will be enough |
| Required source categories | Sources without which reliable execution cannot continue |
| Optional source categories | Sources that may materially improve the result |
| Source selectors | Explicit identifiers, relationships, fields, terms, or bounded filters |
| Relevance rules | Approved criteria each item must satisfy |
| Requested fields | Minimum fields required from each source |
| Time boundary and freshness | Applicable interval and acceptable age or version state |
| Quantity and size limits | Maximum records and package budget |
| Sensitivity classification | Privacy and provider-eligibility constraints |
| Conflict requirement | Whether competing records must be collected together |
| Exclusions | Prohibited sources, fields, and categories |
| Retention boundary | Permitted package lifetime |
| Failure policy | Whether partial, stale, or missing context is acceptable |

“Collect everything relevant” is invalid. If semantic discovery is needed to find
unknown records, that belongs to a separately approved retrieval capability.

### Context Package model

| Package field | Meaning |
| --- | --- |
| Package and request identifiers | Correlate temporary runtime evidence |
| Capability and authorization scope | Identify purpose, Account, Workspace, and permissions |
| Collection timestamp and status | Record when collection occurred and whether it is complete, partial, stale, conflicted, empty, denied, or unavailable |
| Context layers | Keep organizational, temporary, and personal context distinct |
| Source entries and provenance | Preserve owner module, record identifier, version, and category |
| Freshness metadata | Preserve update time, retrieval time, and freshness state |
| Relevance evidence | Record the selector or rule justifying inclusion |
| Authority metadata | Mark canonical, temporary, personal, or derived status |
| Conflict sets | Preserve materially disagreeing sources |
| Redaction and missing-source records | Show limits without leaking inaccessible information |
| Limits and expiry | Record applied budgets and when reuse ends |

A package is temporary runtime Evidence. It is not Organizational Knowledge,
Working Memory, a Personal Operational Model update, or a domain record.

### Context layer separation

The consuming capability's primary request input remains outside collected context.
For Intent Recognition, the owner's current wording remains primary Evidence.

- **Organizational records** retain their owning module, identifier, version,
  provenance, and canonical or derived status.
- **Session and Working Memory** remain temporary, purpose-limited, and
  non-authoritative.
- **Personal Operational Model context** includes only explicitly approved,
  inspectable, non-revoked preferences. It cannot override current wording,
  organizational truth, or governance.

The layers are packaged separately and cannot be flattened into a synthetic source.

### Explicit exclusions

Context Collection must not interpret owner intent; classify intents, entities,
destinations, or relationships; extract new organizational meaning; generate
Observations, Hypotheses, Recommendations, or approval requests; decide routing or
actions; execute workflows; create, modify, delete, merge, or persist domain data;
update source freshness; establish truth or personal preferences; write to memory;
expand beyond the request; substitute source categories without permission; infer
relevance without Evidence; allow a provider to choose sources; expose inaccessible
records; collapse context layers; resolve conflicts; or retain packages past expiry.

## Context minimization

Complete bypass is the strongest possible minimization outcome. The runtime first
asks whether the consuming capability already has sufficient authorized Evidence.
Only a documented evidence gap permits collection.

```text
Evaluate declared evidence sufficiency
  ├── Sufficient → zero collection; bypass Context Collection
  └── Insufficient
      → Validate purpose and authorization
      → Restrict categories and selectors
      → Apply time and relationship bounds
      → Restrict fields and redact prohibited data
      → Remove duplicate representations
      → Enforce quantity and size budgets
      → Preserve required conflicts
      → Assemble separated layers
```

Required sources are evaluated before optional sources. Optional material is
included only when package capacity remains, a declared relevance rule is met, the
material closes the stated evidence gap, and privacy exposure remains proportionate.

### Progressive collection

Progressive collection begins with a zero-collection stage:

0. use sufficient authorized Evidence already available and bypass collection;
1. retrieve explicit references from the current interaction;
2. retrieve directly related authoritative records;
3. retrieve bounded supporting records;
4. retrieve approved Personal Operational Model context only when explicitly
   declared and necessary.

If a smaller package is insufficient, a new bounded request must state the remaining
evidence gap. The runtime never expands collection merely to improve fluency,
provider performance, or confidence marginally.

Selecting a record does not authorize every field. Reaching a package budget
produces an explicit truncation state; required or conflicting Evidence is never
silently discarded.

## Source prioritization

Priority controls collection order and treatment, not conclusions:

1. current explicit input and selected context;
2. directly referenced canonical organizational records;
3. current authoritative records connected by an approved relationship;
4. relevant temporary Session or Working Memory;
5. bounded historical organizational records;
6. explicitly approved Personal Operational Model context;
7. derived records such as Insights or Hypotheses, labeled by type.

Explicit identifiers outrank inferred associations; owning-module records outrank
copies; direct Evidence outranks derived interpretation. Freshness and authority
remain separate attributes, and lower-priority material conflicts remain visible.

An item is eligible only through an explicit identifier, selected entity, declared
domain relationship, active workflow association, bounded metadata rule,
time-window qualification, validated identifier from an approved retrieval
capability, explicit owner selection, or capability-specific deterministic rule.

Frequency, broad similarity, provider suggestion, historical behavior, or possible
general usefulness are not relevance Evidence.

## Privacy and authorization boundaries

Context Collection remains within the authenticated Workspace; enforces source,
record, and field permissions; applies sensitivity classification; excludes
credentials and unrelated identity information; respects retention, deletion, and
revocation; and verifies provider and fallback eligibility before disclosure.

Authorization is evaluated in order:

```text
Authenticated session
  → Active Account and Workspace Membership
  → Authorized calling capability
  → Declared need
  → Permitted context categories
  → Source- and record-level access
  → Field-level access
  → Provider eligibility
```

A request is an upper bound, not an access grant. A package is scoped to one request
and capability, cannot be automatically reused, grants no new permissions, and
authorizes no mutation. Authorization errors must not reveal inaccessible records.

## Freshness and conflict handling

Every source carries its version, update time, retrieval time, lifecycle state, and
freshness status: current, acceptable, stale but available, superseded, unknown, or
unavailable. Freshness is relative to the declared purpose.

Stale data remains labeled; unknown freshness reduces completeness; superseded
records are excluded unless history or conflict preservation requires them; and an
expired package is revalidated or recollected. Context Collection never modifies a
record to make it fresh or presents cached data as newly retrieved.

Material conflict is preserved, not resolved. Conflict metadata identifies the
participating sources, fields, provenance, authority, freshness, and context layer.
The capability must not merge values, select the most fluent or recent source,
allow personal context to override organizational records, or synthesize a false
resolution.

## Runtime interactions

```text
Calling capability receives primary Evidence
  → Evaluate capability-owned sufficiency rules
      ├── Sufficient
      │   → Record bypass
      │   → Continue without Context Collection
      └── Additional Evidence required
          → Declare evidence gap and bounded Context Request
          → Validate identity, authorization, purpose, and scope
          → Invoke Context Collection
          → Retrieve, minimize, attribute, separate, and package
          → Return Context Package or explicit failure state
  → Calling capability interprets under its own contract
  → AI Decision Policy evaluates permitted behavior
```

Context Collection is conditional infrastructure, not a mandatory stage in every
AI execution. Providers never receive source connectors, credentials, or authority
to request additional context independently.

### Relationship to Intent Recognition

Intent Recognition first evaluates the preserved owner wording using its declared
sufficiency rules. When that wording already provides sufficient authorized
Evidence, the runtime proceeds directly to interpretation without creating a
Context Request.

When a material evidence gap exists, Intent Recognition declares the gap and
eligible categories. Context Collection may return authorized records but does not
rank interpretations, identify what the owner meant, or decide whether
clarification is required. Current wording remains primary Evidence and cannot be
overridden by collected history or personal context.

### Relationship to AI Decision Policy

Bypass is an internal runtime execution optimization. It is not the owner-facing
**Remain silent**, **Prepare assistance**, or **Defer** outcome and does not alter
which behaviors the consuming capability permits.

The Decision Policy becomes relevant after capability validation, including when
required context is missing, stale, conflicted, unauthorized, or unavailable.
Context Collection itself prepares no Observation or Recommendation.

## Explainability

Every execution records one collection disposition:

- **Bypassed:** sufficient authorized Evidence already existed; no request was
  created and no sources were retrieved.
- **Invoked:** a declared evidence gap caused a validated request and collection.
- **Attempted:** collection began but returned a partial, denied, unavailable,
  cancelled, or failed result.

An invoked or attempted package includes a machine-verifiable Context Manifest
covering requested and included categories, relevance Evidence, provenance,
authority, freshness, redactions, missing sources, conflicts, limits, and expiry.
A bypass record contains no invented source list and stores only bounded operational
evidence under approved retention rules.

Owner-facing explanation is required only when collection materially affects an
interpretation, limitation, clarification, or decision. It must not reveal
inaccessible sources, credentials, internal prompts, or hidden reasoning.

## Failure behavior

| Failure condition | Required behavior |
| --- | --- |
| Collection was bypassed | Context Collection availability cannot affect the request; continue using existing sufficient Evidence |
| Caller unauthenticated or unauthorized | Reject without collection or source disclosure |
| Purpose or evidence gap absent | Reject the request |
| Request unbounded or unsupported | Reject or require a narrower request |
| Required source missing, stale, denied, or unavailable | Return the distinct state and follow declared partial/failure policy |
| Optional source fails | Continue only when the package remains sufficient |
| Source changes during collection | Re-read, mark inconsistent, or fail safely |
| Sources conflict | Preserve conflict without resolution |
| Package limit reached | Truncate optional material and disclose the limit |
| Required material exceeds budget | Return insufficient rather than omit silently |
| Redaction removes necessary meaning | Mark the source insufficient |
| Personal context revoked or expired | Exclude immediately |
| Provider eligibility fails | Do not disclose; use equivalent approved fallback or fail |
| Package expires before use | Revalidate or recollect |
| Cancellation or supersession occurs | Stop and discard temporary package material |
| Provenance is malformed | Reject the affected source |
| Safe minimization is impossible | Fail closed |
| Provider requests broader context | Reject the expansion attempt; providers cannot create or amend Context Requests |

Failure never authorizes broader retrieval. An unavailable collection service must
not degrade executions whose sufficiency decision already produced bypass.

## Validation requirements

Production validation covers:

- zero-context bypass when current Evidence is sufficient;
- required-context invocation with a declared evidence gap;
- invalid optional collection when it does not close a material gap;
- provider-requested context expansion attempts;
- context-service failure after bypass;
- required versus optional sources and progressive collection;
- field minimization, redaction, package limits, and truncation;
- cross-Workspace, record-level, and field-level authorization;
- revoked Membership, session expiry, and inaccessible-record non-disclosure;
- stale, superseded, deleted, conflicting, and unknown-freshness sources;
- separation of organizational, temporary, and Personal Operational Model context;
- Personal Operational Model conflict with current wording;
- cancellation, expiry, connector failure, and privacy-equivalent fallback;
- logging, retention, adversarial scope expansion, and missing relevance Evidence.

Unauthorized access, cross-Workspace leakage, lost attribution, hidden material
conflict, provider-directed expansion, unnecessary collection, or weakened privacy
is Blocking under the [AI Quality Framework](AI_QUALITY_FRAMEWORK.md).

## Product impact

Conditional Context Collection reduces unnecessary retrieval, privacy exposure,
latency, cost, and irrelevant Evidence. Clear owner input can proceed directly,
while genuine evidence gaps receive bounded, attributable support. The owner gains
context awareness without every interaction becoming a search operation.

Principal risks are overcollection, undercollection, false relevance, source
flattening, freshness confusion, authorization leakage, hidden conflict, and
latency. Declared need, zero-collection bypass, layered packages, manifests, strict
authorization, progressive collection, and bounded failure control them.

## Architecture impact

Context Collection formalizes a conditional branch of the AI Runtime's existing
context-preparation responsibility:

```text
Capability contract and primary Evidence
  → Sufficiency decision
      ├── Bypass
      └── Context Request → Context Collection → Context Package
  → Capability execution
```

The consuming capability owns purpose, evidence gaps, sufficiency, and relevance
rules. The Runtime enforces invocation and lifecycle. Source modules retain record
meaning and permissions. Context Collection packages only. The Model Gateway
receives only a validated minimized package.

Context Collection is not Intelligent Search or Contextual Retrieval. A future
retrieval capability may discover candidate identifiers; Context Collection still
applies authorization, minimization, provenance, freshness, separation, and expiry.

Production implementation depends on owner identity, Workspace and record access,
source read contracts, data classification, privacy and retention policy,
provenance and version metadata, Context Request and Context Package schemas,
provider eligibility, safe observability, and AI Quality validation. No provider,
search technology, storage engine, or retrieval algorithm is selected here.

## Recommendation

Use this architecture as the canonical contract for AI Capability 02. Context
Collection is invoked only for a declared evidence gap and is bypassed when
sufficient authorized Evidence already exists. It remains conditional,
non-interpretive, read-only infrastructure and authorizes no implementation.
