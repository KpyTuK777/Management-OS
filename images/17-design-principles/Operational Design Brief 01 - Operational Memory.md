# Operational Design Brief 01 — Operational Memory

## Status

| Field | Value |
|---|---|
| Project phase | Phase III-B — Operational Core |
| Document type | Research and architecture brief |
| Subject | Operational Memory |
| Implementation status | Not started |
| Scope boundary | No UI, Repository, storage schema, or Current Situation implementation |

## Executive Summary

Management OS already preserves the local history of an Artifact and the local history of a Relationship. It does not yet preserve the history of how a Matter's accepted operational understanding emerged across those aggregates.

Operational Memory is the append-only, Matter-scoped record of consequential reasoning. It preserves the turning points required to explain what changed, why it changed, who acted, who held authority, which material supported the change, what was rejected, and what remained unresolved. Its purpose is operational reconstruction, not exhaustive surveillance.

Operational Memory does not replace Artifact or Relationship history and does not become the source of their current state. Canonical domain events retain their original identity and ownership. A rebuildable Matter timeline projects those events without copying them. Operational Memory owns only consequential Matter-level events that cannot truthfully belong to one Artifact or one Relationship, such as a governed judgment, a decision, an outcome, or a change in accepted operational synthesis.

The proposed unit is a **Memory Event**. A Memory Event is a stable, append-only statement that a consequential operational transition occurred. It identifies the Matter, actor, authority, reason, affected entities, evidence basis, unresolved consequences, provenance, and causal or correlational links to prior events.

Current Situation will be a separately versioned, governed snapshot of accepted present understanding. It is not the latest Memory Event and is not obtained by blindly replaying every event. Operational Memory supplies the evidence and transition explanation that makes each Current Situation version reconstructable.

## 1. Operational Problem

Artifact and Relationship answer local questions:

- what happened to this material;
- what happened to this interpretation;
- who changed this aggregate;
- which lifecycle and state transitions it passed through.

They do not independently explain the evolution of the Matter as a whole. A material revision, an accepted relationship, a rejected hypothesis, and a reopened decision may form one chain of reasoning while belonging to different aggregates. Reading each history separately cannot reliably answer:

- what changed in the Matter;
- why it changed;
- who made or approved the governing judgment;
- which evidence supported that judgment;
- what was accepted, rejected, or reconsidered;
- which uncertainties remain open;
- how present understanding emerged from prior understanding.

The distinction is:

| History | Scope | Canonical responsibility |
|---|---|---|
| Artifact history | One durable unit of operational material | Changes to its identity-preserving content, lifecycle, states, provenance-related status, and Relationship references |
| Relationship history | One governed interpretation | Proposal, semantic revision, evidence change, governance, challenge, rejection, supersession, and archive |
| Operational Memory | The reasoning of one Matter across aggregates | Consequential connections among evidence, interpretations, judgments, decisions, outcomes, uncertainty, and versions of accepted understanding |

Operational Memory exists because the logic of a Matter is larger than the sum of independently readable aggregate histories.

## 2. Purpose

The primary function of Operational Memory is:

> Preserve enough consequential operational reasoning to reconstruct why the Matter is understood and governed as it is now.

It is not:

- an audit log created merely for compliance;
- a list of clicks;
- an activity feed;
- chat history;
- an undo stack;
- a technical log;
- a full-state archive after every action.

A change is consequential when it alters, or can reasonably alter, at least one of:

- accepted understanding;
- the authority of a claim or interpretation;
- an active decision or commitment;
- the evidence basis for a judgment;
- material uncertainty or contradiction;
- the set of viable explanations;
- the interpretation of an observed outcome;
- the next operational action;
- the ability to reconstruct any of the above.

Opening, scrolling, focusing, formatting, or repeating an idempotent command is not consequential unless it produces one of those effects.

## 3. Memory Unit

The canonical unit is a **Memory Event**.

A Memory Event means:

> A stable Matter-scoped record that a consequential operational transition occurred, with enough authority, provenance, and reasoning context to explain its place in the Matter.

Its semantic anatomy is:

| Element | Meaning |
|---|---|
| Stable identity | The event can be referenced permanently and cannot be reused for another occurrence |
| Matter | The single Matter whose reasoning contains the event |
| Event type | A controlled statement of what kind of consequential transition occurred |
| Occurred at | When the represented operational transition occurred, distinct from ingestion time |
| Actor | Who executed or recorded the action |
| Authority | Who or what authorized the operational consequence |
| Reason | The stated rationale at the time, not a later rewritten explanation |
| Affected entities | Stable Artifact, Relationship, Current Situation version, decision, or outcome identities affected |
| Before/after references | References to relevant prior and resulting canonical states or versions, not embedded full-state copies |
| Evidence basis | Canonical entity or source identities supporting the event |
| Unresolved consequences | Questions, assumptions, contradictions, or follow-up obligations left open |
| Provenance | How the event entered memory and which domain operation or source produced it |
| Correlation | Other events in the same reasoning episode or operation |
| Causation | Prior events explicitly claimed to have enabled or caused this transition |
| Human-readable meaning | A concise faithful interpretation suitable for reconstruction without replacing structured semantics |

Correlation never implies causation. Causal links require explicit operational justification and provenance.

The brief does not prescribe a JSON representation. Stable semantics precede storage shape.

## 4. Consequential Event Taxonomy

### Canonical domain events projected into Matter memory

These remain owned by their original aggregate. Operational Memory queries may project them using their original event identity; they must not be copied as new canonical events.

| Domain | Events |
|---|---|
| Artifact | created, revised, admitted, evaluated, settled, archived, consequential state changed, Relationship reference attached, Relationship reference detached during recovery |
| Relationship | proposed, accepted, challenged, revised, rejected, superseded, archived, evidence basis changed |

Not every Artifact state change is consequential. Review or attention changes enter the Matter timeline only when they change authority, reasoning, open work, or the ability to reconstruct a consequential episode.

### Events owned directly by Operational Memory

Operational Memory owns events whose meaning spans aggregates or records Matter-level reasoning:

- hypothesis introduced;
- hypothesis strengthened;
- hypothesis weakened;
- contradiction identified;
- contradiction resolved;
- uncertainty introduced;
- uncertainty reduced;
- judgment recorded;
- decision made;
- decision reopened;
- outcome observed;
- learning proposed;
- Current Situation version adopted;
- correction recorded;
- integrity recovery recorded;
- migration consequence recorded.

A directly owned Memory Event references the canonical domain events and entities that support it. It does not reproduce their complete payloads.

### No duplicate event rule

One occurrence has one canonical identity.

- A Relationship acceptance remains the canonical Relationship history event.
- The Matter timeline projects that same event.
- A separate `judgment recorded` Memory Event exists only if an additional Matter-level judgment occurred and has distinct meaning, authority, and identity.
- Grouping several events into an episode creates a grouping relationship, not duplicate child events.

## 5. Source of Truth

Operational Memory is a source of truth only for the historical fact and meaning of Matter-level consequential events that it owns.

It is not the source of truth for:

- Artifact content, lifecycle, state, ownership, or local history;
- Relationship endpoints, semantics, governance, lifecycle, or local history;
- the current accepted Current Situation version;
- UI state.

The source-of-truth rules are:

1. Artifact and Relationship repositories create their own canonical domain events.
2. A future operational coordinator records a Matter-level Memory Event when one operation spans models or creates consequential reasoning not owned by one aggregate.
3. The Matter timeline is a rebuildable projection over canonical domain events and owned Memory Events.
4. UI may request a domain command but cannot author Memory Events.
5. Watson may propose a domain action or reasoning event through the authority contract. It cannot directly record an accepted judgment.
6. Owner or explicitly authorized delegate governance determines accepted operational judgment.
7. System may create only explicitly typed migration, recovery, or integrity-repair events.
8. Sources may be provenance or evidence; they cannot create operational judgment.

A coordinator/domain service is required for cross-model operations. Its responsibility is coordination, correlation, idempotency, and honest event attribution. It does not become a new owner of Artifact or Relationship state.

## 6. Append-only and Correction

Operational Memory never silently rewrites the past.

### Historical fact

The historical fact answers what occurred and what was believed, proposed, accepted, or rejected at that time. Once recorded, it remains addressable.

### Current operational truth

Current truth answers which interpretation, decision, or Current Situation version presently has authority. It may differ from the historical record because later evidence or judgment changed it.

### Correction rules

- An incorrect Memory Event is corrected through a new correction event.
- The correction references the incorrect event, explains the defect, identifies authority, and supplies replacement meaning where possible.
- The original event remains visible as corrected and non-current.
- A superseded interpretation remains historically valid as an earlier interpretation but loses current authority.
- A rejected judgment remains present with its rejection reason.
- Recovery and migration are explicit system events, never retroactive owner actions.
- An event may be excluded from ordinary projections for privacy or invalidity only through an explicit status and reason.
- Physical deletion is forbidden in normal domain operation.
- Legally required erasure or cryptographic redaction is a future exceptional governance procedure; it must leave a non-sensitive tombstone proving that an exceptional change occurred.

## 7. Authority and Authorship

Operational Memory distinguishes execution, proposal, approval, authority, and evidence.

| Role | Permitted meaning |
|---|---|
| owner | Holds final operational authority within the owned Matter and may approve consequential judgments |
| delegate | Acts only within explicit Matter- and action-scoped grants; delegation is recorded |
| Watson | Proposes reasoning, identifies possible contradictions, and supplies analysis provenance; cannot approve or disguise a proposal as owner judgment |
| system | Records only explicit migration, recovery, integrity repair, and deterministic coordination facts |
| source | Supplies attributed evidence or raw material; cannot perform operational mutation |

Every event must make clear:

- who performed the operation;
- who proposed it, if different;
- who approved it, if approval was required;
- which actor held operational authority;
- which sources formed the evidence basis.

Actor identity and authority identity are not interchangeable. A system that persisted an owner-approved decision is the executing actor, not the approving authority. Watson-generated wording remains Watson-authored even when an owner later accepts the associated judgment.

## 8. Memory and Current Situation

The expected relationship is:

```text
Operational Memory
        ↓ evidence and transition explanation
Current Situation versioning
```

Current Situation will be:

- a governed snapshot of accepted present understanding;
- separately identified and versioned;
- supported by canonical Artifact, Relationship, and Memory Event references;
- explicit about authority, residual uncertainty, and change basis.

Current Situation is not a blind fold or automatic summary of all Memory Events. A new consequential event may:

- leave Current Situation unchanged;
- make it stale and require review;
- justify a proposed new version;
- directly create a new version only through an authorized Current Situation transition.

When a new version is adopted, Operational Memory explains:

- which prior version it follows;
- which events and evidence caused reconsideration;
- who proposed the revision;
- who approved it;
- what meaning changed;
- which uncertainty remains.

Restoring prior context does not restore prior truth. A user may inspect the context and evidence surrounding an earlier version while the currently authoritative version remains explicit.

After a consequential event, “current” means the latest authorized synthesis, not merely the most recently written record.

## 9. Memory and Context Preservation

Operational Memory supports context preservation by supplying temporal and reasoning context, not navigation history.

It enables:

- Inspection to show the consequential history of the inspected subject;
- Context Envelope to reference the last consequential change;
- return to a prior focus with awareness of changes that occurred meanwhile;
- reconstruction of unresolved work;
- explanation of the event that last changed accepted understanding;
- separation of “last inspected” from “last changed.”

The Context Envelope remains the snapshot of working context. Operational Memory supplies durable referenced events behind fields such as unresolved work and last consequential change.

Operational Memory must not become:

- a browser history;
- a stack of open panels;
- a cursor or scroll log;
- a substitute for spatial or navigation contracts.

It restores the logic of work, not the exact sequence of interface movements.

## 10. Scope and Granularity

Operational Memory has several semantic levels:

| Level | Purpose |
|---|---|
| Event | One consequential fact or transition |
| Reasoning episode | A correlated set of events pursuing one question or judgment |
| Matter timeline | Ordered and queryable consequential history of one Matter |
| Milestone | A governed boundary marking an operationally meaningful phase or conclusion |
| Decision/outcome cycle | A decision, its evidence, subsequent observations, and resulting learning or reconsideration |

### Aggregation rule

Low-level events may be grouped into a reasoning episode when they:

- belong to the same Matter;
- share an explicit correlation identity;
- pursue the same operational question or judgment;
- retain their individual identity, provenance, authority, and order.

Example:

```text
Relationship proposed
        ↓
Owner review recorded
        ↓
Relationship accepted
```

These are three facts and may form one reasoning episode. The episode is an organizing semantic structure. It does not replace, merge, or delete its events.

## 11. Query Responsibilities

Operational Memory must support factual, explainable answers to:

- What changed since the last review?
- Why is Current Situation different now?
- Which decisions were reconsidered?
- Which Relationships were rejected?
- Which assumptions remain open?
- What did Watson propose that the owner did not accept?
- Which conclusions depended on an Artifact that later became disputed?
- What occurred before a specific decision?
- Which changes resulted from recovery or migration?

Answers must preserve:

- Matter scope;
- event identity;
- temporal ordering;
- actor and authority;
- provenance;
- distinction between correlation and causation;
- distinction between historical belief and current authority.

Queries may use projections and indexes, but results must be traceable to canonical records.

## 12. Retention and Scale

| Scale | Expected behavior |
|---|---|
| 10 events | Direct reconstruction remains possible; no special aggregation required |
| 100 events | Reasoning episodes and event taxonomy become primary retrieval boundaries |
| 1,000 events | Rebuildable indexes by entity, episode, authority, type, and time are required |
| 10,000+ events | Incremental projections, bounded queries, pagination, milestones, and archival storage tiers are required |

Retained permanently:

- canonical event identity;
- Matter identity;
- event type and occurrence time;
- actor and authority;
- provenance;
- causal/correlation references;
- correction and supersession lineage;
- decision and Current Situation transition basis;
- references necessary to reconstruct reasoning.

May be aggregated:

- routine sequences into episodes;
- query summaries;
- milestone summaries;
- indexes and projections.

May not be lost:

- original canonical events;
- rejected or superseded judgments;
- correction lineage;
- authority and provenance;
- unresolved consequences;
- explicit recovery and migration facts.

Deduplication uses stable event identity and idempotent ingestion identity, not similarity of wording.

Projections and indexes are allowed and may be rebuilt. They are not canonical records. Canonical records are original aggregate events and directly owned Matter-level Memory Events.

localStorage remains accepted single-user adapter debt. It provides neither multi-writer atomicity nor an adequate long-term scale strategy. This brief does not choose a server store.

## 13. Privacy and Sensitivity

Operational Memory may retain personal judgment, rejected reasoning, source material, and authorship. Its principles are:

- **Minimization:** store consequential meaning and references, not unnecessary raw interaction.
- **Provenance:** identify the source and method of introduction.
- **Access:** future access decisions must be Matter-, role-, and sensitivity-aware.
- **Visibility:** hidden-by-default material must remain discoverable to authorized governance and integrity processes.
- **Separation:** raw input and operational meaning are distinct; operational queries need not expose full raw input.
- **Purpose limitation:** retained reasoning is used to reconstruct and govern the Matter, not silently profile actors.
- **Future redaction:** sensitive payload may be redacted through an explicit governed event and tombstone without pretending history was never changed.

This brief does not design permission UI.

## 14. Failure and Recovery

Future implementation must address:

| Failure | Required behavior |
|---|---|
| Domain mutation succeeded; Memory Event missing | Detect the gap from canonical domain history and record an idempotent recovery event or rebuild projection |
| Memory Event exists; mutation failed | Event must remain pending/non-effective or be followed by an explicit failed/correction event; it cannot claim completed consequence |
| Retry duplicates an event | Stable ingestion/correlation identity returns the existing event without new history |
| Memory store is malformed | Isolate unsafe records, retain diagnostics, and prevent them from authorizing current truth |
| Migration creates diagnostics | Record an explicitly typed system migration consequence only when operationally consequential |
| Events appear out of order | Preserve occurrence time and ingestion order separately; use causal links rather than timestamp alone |
| Timestamps are equal | Use stable identities, causal dependencies, and deterministic ingestion sequence; do not infer order from equal timestamps |
| Referenced entity is quarantined | Preserve the Memory Event, mark the reference unavailable/quarantined, and prevent unsafe reconstruction |

Required guarantees:

- append-only canonical records;
- idempotent ingestion;
- explicit operation and correlation identity;
- domain mutation and memory coordination with recoverable intent;
- deterministic projection rebuild;
- quarantine with diagnostics;
- no recovery action attributed to owner or Watson;
- no false completed event before its domain consequence exists.

Acceptable current single-user compromises:

- cross-store atomicity may be implemented through a recoverable journal rather than a distributed transaction;
- ordering may be total only within one adapter/runtime, with causal ordering authoritative across correlated events;
- integrity scanning may be linear at current scale;
- localStorage durability remains limited.

## 15. Canonical Invariants

1. **Append-only truth:** canonical Memory Events are never silently rewritten.
2. **Stable identity:** one event identity represents one occurrence permanently.
3. **Matter scope:** every event belongs to exactly one Matter.
4. **Positive authority:** actor, action, authority, and aggregate context must pass the canonical Authority Policy.
5. **Distinct authorship and approval:** proposer, executor, approver, and evidence source remain distinguishable.
6. **Independent provenance:** every event explains how it entered memory.
7. **No silent deletion:** rejection, supersession, correction, recovery, and redaction preserve historical evidence.
8. **No UI-authored truth:** UI requests operations but cannot create canonical Memory Events.
9. **No Watson-owned judgment:** Watson proposals never acquire owner authority implicitly.
10. **Idempotent ingestion:** retry cannot create a second event for the same occurrence.
11. **Correction by addition:** errors are corrected through new linked events.
12. **Reconstructable reasoning:** present judgments can be traced to prior events, entities, evidence, and authority.
13. **Explicit system action:** migration, recovery, and integrity repair are honestly typed and system-authored.
14. **No aggregate duplication:** Artifact and Relationship events retain their original canonical identity and are projected, not copied.
15. **Historical action differs from current truth:** what happened and what currently has authority remain separately answerable.
16. **Correlation differs from causation:** causal claims are explicit and justified.
17. **Projections are disposable:** timelines, indexes, and summaries can be rebuilt from canonical records.
18. **Current Situation remains independent:** Memory explains its versions but does not silently define current authority.

## 16. Rejection List

Operational Memory must not become:

- an activity feed;
- a chat transcript;
- an analytics event stream;
- a raw console log;
- a full-state snapshot after every click;
- a generic event-sourcing framework without Management OS semantics;
- an infinite timeline UI;
- hidden AI memory;
- automatic Watson truth;
- a duplicate of Artifact or Relationship history;
- a navigation stack;
- a storage-specific architecture;
- a mechanism for inferring authority from recency.

## 17. Acceptance Questions

### What is Operational Memory?

The append-only Matter-scoped record and projection of consequential reasoning required to reconstruct how present operational understanding emerged.

### How does it differ from local history?

Local history owns changes to one Artifact or Relationship. Operational Memory connects canonical events across aggregates and owns only Matter-level consequential reasoning.

### What is the memory unit?

A Memory Event: one stable, authoritative, provenance-bearing consequential transition.

### Who may create it?

Canonical repositories create their domain events. A future coordinator creates cross-model Memory Events under the positive Authority Policy. UI and sources cannot create them. Watson may propose but cannot approve judgment. System is limited to explicit recovery, migration, and integrity repair.

### Which events are consequential?

Events that change or can materially change accepted understanding, authority, decisions, evidence basis, uncertainty, viable explanations, outcomes, next action, or reconstructability.

### How is an error corrected?

Through a new correction event linked to the original. The original is retained and marked non-current or corrected.

### How does it support Current Situation?

It supplies the evidence, reasoning, authority, and transition chain explaining each separately versioned Current Situation.

### How does it scale?

Through reasoning episodes, bounded queries, rebuildable indexes/projections, milestones, and archival tiers without deleting canonical events.

### What is the canonical record?

The original aggregate event for aggregate-owned changes, or the original Memory Event for Matter-level reasoning. Timelines, summaries, and indexes are projections.

### What are the boundaries of Sprint 03?

Sprint 03 may implement only the canonical Memory Event contract, Matter-scoped append-only behavior, ingestion/coordinator boundary, correction and recovery semantics, minimal query contracts, persistence adapter, migrations, and contract/browser validation necessary to prove the model.

Sprint 03 must not implement:

- Current Situation;
- Inspection redesign;
- navigation;
- Working Set;
- Watson behavior expansion;
- Home or Workbench redesign;
- analytics or activity feeds;
- multi-user synchronization;
- a generic event-sourcing platform.

## 18. Sprint 03 Readiness

The operational problem, source-of-truth boundary, memory unit, authority rules, correction semantics, Current Situation relationship, scale expectations, recovery guarantees, and rejection boundaries are sufficiently defined for a bounded Implementation Proposal.

```text
Operational Memory Brief Approved for Implementation
```

This verdict permits preparation and Architecture Review of a Sprint 03 Implementation Proposal. It does not authorize implementation.
