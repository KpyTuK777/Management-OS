# Sprint 03 — Operational Memory Architecture Review

## Review Status

| Field | Value |
|---|---|
| Review type | Final Architecture Gate |
| Reviewed subject | Approved Operational Memory Implementation Proposal |
| Scope | Architectural realizability and hidden contradictions |
| Code authorization | None |
| Canonical tags | Unchanged |

## Executive Finding

The proposal is implementable without rebuilding Artifact or Relationship and without introducing a new source of present operational truth.

The architecture is safe only under one explicit interpretation:

> The Operational Coordinator orchestrates an eventually completed unit of work. It owns neither domain state nor operational judgment.

The separate localStorage stores cannot provide an atomic transaction. Therefore the canonical consistency model is not rollback-based atomicity; it is idempotent, journaled, forward recovery. Artifact or Relationship mutation becomes canonical at its own Repository commit. A Matter-level Memory Event becomes canonical only after its own validated append. The coordinated unit of work is complete only when both facts exist and their source identity is linked.

This is not a blocker because the proposal already includes a journal, source-event identity, idempotency, and recovery. The implementation must preserve the clarified invariants in this review.

## 1. Coordinator Review

### Classification

The Operational Coordinator is an **application service with domain-aware orchestration rules**.

It is not:

- an Aggregate;
- a Repository;
- a policy owner;
- a lifecycle owner;
- a source of truth;
- a general workflow engine.

### Responsibilities

The Coordinator may:

- accept one explicit operational command;
- establish an operation identity;
- record recoverable intent;
- invoke one canonical domain command;
- capture the resulting canonical source-event identity;
- request one corresponding Matter-level Memory append;
- mark the unit of work complete;
- resume an incomplete operation idempotently.

The Coordinator must not:

- decide whether an Artifact transition is valid;
- decide whether a Relationship may be accepted or superseded;
- decide whether an actor is authorized;
- normalize or repair aggregate data;
- infer a judgment from UI state;
- own event taxonomy;
- answer historical queries;
- silently compensate a canonical domain decision.

### Policy ownership

| Concern | Owner |
|---|---|
| Artifact invariants and lifecycle | Artifact Repository and Lifecycle Policy |
| Relationship invariants and lifecycle | Relationship Repository, Lifecycle Policy, and Semantic Policy |
| Actor/action authorization | Positive Authority Policy |
| Memory Event validity and append-only rules | Operational Memory Repository |
| Cross-store operation progress | Operational Coordinator journal |
| Current operational truth | Relevant canonical aggregate, later including Current Situation |

### God Object prevention

The Coordinator must remain a narrow protocol:

```text
prepare
→ execute domain command
→ identify source event
→ append memory
→ complete
```

New product reasoning must not be added as Coordinator branches. New domain behavior belongs in the domain model that owns it. New authorization belongs in Authority Policy. New memory semantics belong in the Memory Event contract.

### Verdict

> Coordinator orchestrates; it does not own.

## 2. Transaction Boundary

### Canonical boundaries

There are three distinct boundaries:

1. **Domain transaction boundary**
   - Begins when a canonical Repository command starts.
   - Commits when that Repository validates and persists its aggregate mutation and local history event.
   - The domain mutation is canonical at this point.

2. **Memory append boundary**
   - Begins when the Memory Repository receives a fully formed candidate.
   - Commits after authority, identity, Matter, provenance, source-reference, append-only, and integrity validation, followed by persistence.
   - The Memory Event is canonical at this point.

3. **Coordinated unit-of-work boundary**
   - Begins when durable intent is journaled under a stable operation ID.
   - Completes when the domain source event and corresponding Memory Event both exist and the journal marks completion.
   - It is recoverable but not physically atomic across stores.

### Commit points

```text
Journal intent persisted
        ↓
Domain Repository commit             ← domain fact becomes canonical
        ↓
Source event identity persisted
        ↓
Memory Repository append             ← Memory Event becomes canonical
        ↓
Operation completion persisted        ← coordinated unit is complete
```

### Canonicality rules

- A prepared journal entry is not a Memory Event.
- A pending candidate is not canonical memory.
- A Memory Event must never claim a successful domain consequence before the domain commit exists.
- A committed domain mutation is not rolled back merely because memory persistence failed.
- Failure after domain commit is resolved by forward recovery.
- A completed operation may be retried but cannot produce another canonical event.

### Double commits

Two physical commits exist by necessity: domain store and Memory store.

They do not represent two competing truths:

- the domain commit proves the aggregate transition;
- the memory commit proves its Matter-level consequential meaning.

Duplicate commits are prevented by:

- stable operation ID;
- immutable source-event identity;
- unique Memory Event ID;
- idempotent domain command or identity-safe retry;
- source-event ingestion index.

### Orphans

| Condition | Status |
|---|---|
| Memory Event without domain source commit | Forbidden; candidate remains pending or is quarantined |
| Domain mutation without Memory Event | Temporarily possible; detected and repaired through journal or source-history reconciliation |
| Prepared journal without domain mutation | Safe incomplete intent; may be abandoned after verification |
| Completed Memory Event with unfinished journal marker | Both canonical facts exist; completion marker may be repaired idempotently |

### Transaction verdict

The canonical transaction is a **journaled, forward-recoverable unit of work over two independently canonical commits**.

It is not an ACID transaction and must not be described as one.

## 3. Event Identity Review

Two identities are necessary because they identify different facts.

### Memory Event identity

The Memory Event ID is primary for the Matter-level consequential statement.

It identifies:

- the cross-aggregate interpretation of what occurred;
- its authority and meaning;
- correction or supersession lineage;
- its position in the validated Operational Memory record.

### Source-event identity

`aggregate-kind:aggregate-id:event-id` identifies the canonical event that originated in Artifact, Relationship, system recovery, migration, or future Current Situation.

It is:

- provenance;
- a deduplication key;
- a recovery anchor;
- evidence that the underlying domain transition occurred.

It is not a second identity for the Memory Event.

### Retry invariant

For a given operation ID and source-event identity:

- retry must return the same Memory Event identity;
- retry may not allocate a different canonical Memory Event;
- a source event may support multiple later events only when those events have genuinely distinct Matter-level meaning and explicit causal roles;
- ingestion of the same source occurrence as the same semantic consequence is exactly-once logically, even if attempted multiple times physically.

### Identity verdict

No identity duplication exists when Memory ID identifies Matter-level meaning and source identity remains immutable provenance and idempotency evidence.

## 4. Projection Review

### Boundary

Operational Memory contains two different concepts:

1. Canonical Matter-level Memory Events.
2. Rebuildable projections of canonical Artifact and Relationship history.

A projection must never be mistaken for an owned Memory Event.

### Event-sourcing boundary

The proposal does not make Artifact or Relationship event-sourced:

- their current state remains stored and validated by their repositories;
- their local history remains aggregate-owned;
- Operational Memory cannot rebuild or overwrite their current aggregate state;
- replay is used to rebuild memory projections and explanations, not canonical domain aggregates.

### Rebuildability

A source projection is rebuildable from:

- stable aggregate identity;
- retained local history event identity;
- event type;
- occurredAt;
- actor and reason;
- original ordering within aggregate history.

Rebuild must:

- preserve the source event's identity;
- create no new canonical Memory Event;
- avoid changing Matter-level sequence;
- produce the same deterministic projection index;
- report unavailable or quarantined sources rather than fabricate them.

### Reconstruction sufficiency

Source projections are sufficient to detect:

- missing ingestion;
- duplicate ingestion;
- completed Artifact or Relationship transitions;
- recovery and migration events retained in canonical histories.

They are not sufficient to reconstruct a missing cross-model reason, approval, unresolved consequence, or human-readable Matter meaning unless those fields were durably journaled or deterministically specified.

Therefore the journal must persist the intended Matter-level semantic envelope before, or deterministically immediately after, the domain command. Recovery may derive only facts guaranteed by canonical source semantics; it must not invent lost judgment.

### Projection verdict

Projection is rebuildable and noncanonical. Rebuild may restore indexes and detect missing memory, but may not silently mint new meaning.

## 5. Sequence Review

The three temporal fields have separate meanings:

| Field | Meaning |
|---|---|
| `occurredAt` | Domain time of the represented consequence |
| `recordedAt` | Time the Memory Repository canonically appended the event |
| `sequence` | Immutable Matter-local append position assigned at the Memory commit |

### Canonical ordering

Canonical Memory order is ascending `sequence`.

`occurredAt` does not define canonical order because:

- clocks may be equal;
- recovery may append an older occurrence later;
- external observations may arrive late;
- clocks may be imprecise.

`recordedAt` also does not define order because timestamps may collide.

### Recovery and retry

- Recovery appends a missing event at a new sequence while retaining its original `occurredAt`.
- Retry of an already committed event preserves its existing sequence.
- Quarantine removal through correction does not reuse the quarantined sequence.
- Projection rebuild does not allocate canonical Memory sequences.

### Unified timeline

When a query combines owned Memory Events and source projections:

- owned Memory Events use canonical sequence;
- projections retain source order;
- a deterministic presentation key may combine occurrence time, causal dependencies, source identity, and stable tie-breakers;
- that presentation order is a projection and must not overwrite canonical Memory sequence.

### Sequence invariant

> Within one Matter, every canonical Memory Event receives exactly one strictly increasing sequence at its first successful append; that sequence never changes, retries never allocate another sequence, and recovery preserves occurredAt while appending at the next available sequence.

## 6. Reasoning Episode Review

`reasoningEpisodeId` is sufficient for Sprint 03.

It provides:

- correlation across several events;
- retrieval of one line of inquiry;
- grouping without losing event identity;
- no independent lifecycle or ownership.

An Episode is not currently an Aggregate because it has no:

- independent authority;
- mutable canonical content;
- lifecycle;
- correction rules separate from its events;
- membership governance;
- independent provenance beyond member events.

Episode responsibilities must not accumulate inside the Coordinator. Episode queries group events by ID; they do not manage an Episode object.

A separate aggregate becomes justified only if future requirements introduce governed membership, episode-level state, stable summaries with independent authority, or lifecycle transitions. Until then, creating one would add unsupported complexity.

## 7. Query Surface and CQRS Review

### Classification

| Method | Classification | State effect |
|---|---|---|
| `record()` | Command | Appends one canonical Memory Event |
| `ensure()` | Idempotent command | Appends if absent; otherwise validates identity and returns existing |
| `correct()` | Command | Appends a correction event |
| `get()` | Query | None |
| `list()` | Query | None |
| `getSince()` | Query | None |
| `getBefore()` | Query | None |
| `findByEntity()` | Query | None |
| `getReasoningEpisode()` | Query | None |
| `listRejectedJudgments()` | Query | None |
| `listUnacceptedWatsonProposals()` | Query | None |
| `listUnresolvedConsequences()` | Query | None |
| `listSystemEvents()` | Query | None |
| `explainTransition()` | Query | None |
| `reconcileSourceEvents()` | Recovery command | Rebuilds projection/index and repairs provable missing ingestion |
| `recoverPendingOperations()` | Recovery command | Advances or abandons journaled operations idempotently |
| `validateIntegrity()` | Validation query | None; reports failure rather than repairing |

### CQRS boundary

Commands and queries coexist on one Repository facade, consistent with Artifact and Relationship v1.0. They remain semantically separated by method contract.

Required rules:

- queries never append, repair, migrate, or authorize;
- validation never performs recovery implicitly;
- recovery methods are named explicitly and never masquerade as reads;
- `ensure()` is a command despite often returning an existing event;
- explanation queries return traceable records and do not create judgment.

The surface does not require separate command/query objects in Sprint 03.

## 8. Failure Matrix

| Failure | Observed state | Recovery | Canonical result |
|---|---|---|---|
| Domain command fails before commit | Prepared journal; no source event; no Memory Event | Verify absence, mark operation abandoned | No domain mutation and no Memory Event |
| Domain command commits; Memory append fails | Canonical domain event; journal prepared or domain-committed; Memory Event absent | Resume from journal or reconcile source history; append idempotently | Domain event retained; exactly one corresponding Memory Event |
| Memory candidate prepared; domain fails | Noncanonical candidate only | Discard/abandon candidate | No canonical Memory Event |
| Storage fails before domain commit | Intent may be absent or prepared | Retry with same operation ID after storage recovers | Either no effect or one completed unit |
| Storage fails after Memory append but before completion marker | Both canonical facts exist; journal incomplete | Source index finds existing event; repair completion marker | Existing Memory Event retained; no duplicate |
| Recovery fails | Pending operation and diagnostics remain | Retry recovery; do not hide startup fault if integrity is unsafe | No invented completion |
| Duplicate retry | Existing operation/source/event identity exists | Return existing result and sequence | One logical operation |
| Duplicate source event | Source index already maps identity | Return mapped event or report semantic identity conflict | No duplicate ingestion |
| Rollback requested before domain commit | No canonical domain mutation | Remove prepared intent explicitly | No Memory Event |
| Rollback requested after domain commit | Canonical domain fact exists | Forward correction/reversal through domain rules and a new Memory Event | History preserved; no destructive rollback |
| Restart with prepared operation | Intent exists; domain status unknown | Inspect canonical source history before abandoning | Complete if source exists; otherwise abandon |
| Restart with domain-committed operation | Source identity and candidate exist | Append/ensure event, then complete | One Memory Event |
| Malformed Memory Event | Unsafe record isolated | Quarantine with payload and diagnostics | Record cannot authorize queries; history of quarantine retained |
| Referenced aggregate quarantined | Memory record valid; entity unavailable | Mark reference unavailable in projection; do not delete event | Historical consequence retained without claiming current validity |
| Migration succeeds | Version changes through named step | Emit diagnostics; system event only if consequential | One valid upgraded store |
| Migration fails | Original store and diagnostics retained | Reject/quarantine; retry only after explicit correction | No partially canonical migrated store |
| Equal timestamps | Several events share time | Order owned events by sequence; projections by deterministic tie-breaker | Stable replay/query result |

## 9. Future Compatibility

### Current Situation

Ready.

Current Situation can:

- reference Memory Event IDs;
- record prior and resulting version IDs;
- query consequential events between versions;
- retain authority and unresolved consequences;
- create its own canonical history while Operational Memory records the Matter-level transition.

No Memory Event redesign is required.

### Inspection

Ready.

Inspection remains context-preserving and nonconsequential unless it produces a governed change. Context Envelope may reference the last consequential Memory Event without making navigation events canonical.

### Working Set

Ready with condition.

Working Set membership and attention must remain their own operational state. Operational Memory records only consequential membership changes, not every focus movement.

### Watson

Ready with condition.

Watson can propose reasoning under positive authority. Acceptance, correction, and Current Situation consequences remain owner/delegate governed. Queries can retrieve unaccepted proposals without granting them authority.

### Compatibility verdict

The Memory Event contract, Coordinator boundary, transaction model, and query surface can support these models without breaking changes. Additive event types and query filters may be required.

## 10. Hidden Complexity Audit

### Explicitly surfaced assumptions

1. Domain histories are append-only and retain stable event identities.
2. Domain commands expose or allow recovery of the committed source event.
3. One Matter has one sequence allocator within the current adapter.
4. localStorage is single-writer for canonical assumptions.
5. Causal links are explicit and not inferred from timestamp proximity.
6. A missing referenced entity does not invalidate the historical occurrence.
7. Queries distinguish canonical events from rebuildable projections.
8. UI actor objects are authorization inputs, not authentication credentials.

### Implicit lifecycle risk

The operation journal has phases, but this is infrastructure progress, not domain lifecycle. It must not appear as Memory Event state or gain product semantics.

Memory Events themselves are append-only and do not transition lifecycle. Correction, supersession, redaction, and invalidation are relationships expressed by later events.

### Cyclic dependency risk

Allowed direction:

```text
Application composition
→ Coordinator
→ Domain Repository
→ Operational Memory Repository
```

Forbidden:

```text
Artifact/Relationship Repository → Coordinator
Artifact/Relationship model → Operational Memory model
Operational Memory Repository → UI
Authority Policy → Coordinator
```

Operational Memory may consume source Repository contracts for reconciliation through composition. It must not cause Artifact or Relationship to depend on Memory.

### Coordination leakage

Operation IDs, journal phases, retry markers, and adapter failures belong to the Coordinator/recovery boundary. They must not leak into Artifact, Relationship, Current Situation, or UI semantics.

### Implicit ownership

The Coordinator owns only progress of a unit of work. It owns no Artifact, Relationship, Memory Event, judgment, episode, or Current Situation.

### Main hidden complexity

The highest complexity is semantic recovery: source history can prove that a domain transition occurred, but it cannot always reconstruct lost cross-model human meaning. The implementation must journal non-derivable meaning or fail visibly rather than fabricate it during reconciliation.

This is a required implementation discipline, not an architectural blocker.

## 11. Implementation Risk

| Area | Rating | Assessment |
|---|---|---|
| Overall complexity | Medium | One new aggregate plus coordination and projections; bounded by existing canonical contracts |
| Architectural risk | Medium | Safe if Coordinator remains orchestration-only and canonical/projection boundaries remain explicit |
| Authority risk | Low | Existing positive policy is reusable; tests can fail closed |
| Identity risk | Low | Stable Memory and source identities provide clear deduplication |
| Transaction risk | High | Separate localStorage stores require forward recovery rather than atomic commit |
| Orphan mutation risk | Medium | Journal and source reconciliation make it observable and recoverable |
| Orphan Memory Event risk | Low | Memory finalization occurs only after verified domain commit |
| Ordering risk | Medium | Three temporal concepts require strict invariant and equal-time tests |
| Projection risk | Medium | Rebuild must never mint new canonical meaning |
| Testability | High capability / Low risk | In-memory adapters and failure injection make every phase deterministic to test |
| Rollback safety | Medium | Pre-commit abandonment is simple; post-commit changes require forward correction |
| Recovery maintainability | Medium | Phase protocol must stay small and versioned |
| Query maintainability | Low | Queries are read-only projections over explicit semantic fields |
| Future compatibility risk | Low | Current Situation, Inspection, Working Set, and Watson consume stable references additively |
| Scale risk | Medium | Whole-store validation and projection scans are acceptable now, not at unbounded scale |
| Multi-user risk | High outside scope | Current sequence and journal assumptions are single-writer only |

## 12. Required Apply Invariants

The Apply phase must prove:

1. Coordinator orchestrates and owns only operation progress.
2. Domain and Memory commits are independently canonical.
3. Memory never commits before verified domain success.
4. Post-domain failure is repaired forward, never hidden.
5. One source occurrence maps idempotently to one corresponding Memory Event.
6. Projection rebuild creates no canonical event or sequence.
7. Sequence is immutable, Matter-local, and assigned once.
8. Recovery retains original occurredAt.
9. Queries are side-effect free.
10. Journal phases never become domain lifecycle.
11. Non-derivable reasoning is journaled or reported missing, never invented.
12. Artifact and Relationship do not depend on Operational Memory.

## Final Verdict

```text
Architecture Ready for Apply
```

No aggregate redesign, API revision, or additional architectural proposal is required. The transaction and projection clarifications in this review are binding implementation invariants.
