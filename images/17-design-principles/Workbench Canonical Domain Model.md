# Workbench Canonical Domain Model

## Purpose

This document defines the operational domain of the Management OS Workbench.

It names the things that exist in an investigation, explains why they exist, establishes how they change, and fixes the authority boundaries between the owner, Watson, and the system.

It is not a user-interface specification, a database schema, an object model, or a diagram of implementation classes. It describes the stable meaning that every future implementation must preserve.

The model formalizes the Design Bible rather than extending it. Its basis is:

- the Canonical Workbench Laws;
- the Canonical Rejection List;
- [Operational Dynamics](Operational%20Dynamics.md);
- [Canonical Workbench Audit](Canonical%20Workbench%20Audit.md);
- all established Design Principles in this folder.

## Domain boundary

A Workbench exists to help an owner build, test, preserve, and act upon an operational understanding of one Matter.

The domain begins when something is admitted as potentially relevant to a Matter. It includes the resulting Artifacts, interpretations, relationships, attention, judgments, and history. It ends at the boundary where an approved operational decision becomes execution in another domain.

The Workbench does not own organizational truth in the abstract. It preserves the best accountable understanding currently accepted inside a specific Matter.

## Foundational distinctions

The model depends on distinctions that must never be collapsed:

- **identity is not state** — an Artifact remains the same Artifact while its interpretation changes;
- **presence is not importance** — belonging to a Matter does not place something in the Working Set;
- **inspection is not acceptance** — looking closely does not change operational truth;
- **proposal is not judgment** — Watson may suggest a change but cannot authorize it;
- **relationship is not proximity** — spatial or temporal closeness does not establish meaning;
- **history is not the current view** — Operational Memory is larger than what the owner presently sees;
- **collection is not ownership** — Collections organize references and do not contain independent copies;
- **support is not proof** — Evidence may strengthen a Hypothesis without confirming it;
- **rejection is not erasure** — rejected reasoning remains part of accountable memory;
- **system observation is not authority** — the system may record what happened but cannot decide what it means.

## Operational actors

Three actor roles recur throughout the model:

- **Owner** — the accountable human authority for the Matter.
- **Watson** — a non-owning reasoning participant that observes, organizes, questions, and proposes.
- **System** — the custodian of identity, continuity, rules, and faithful history.

Other people may contribute, inspect, or advise when the Matter permits it. Their actions remain attributable and never inherit owner authority merely through participation.

---

# Canonical entities

## 1. Matter

### Purpose

A Matter is the durable boundary of one operational investigation.

It keeps evidence, interpretations, decisions, and memory from different investigations from being mixed. It gives every act of reasoning a subject, accountable owner, and history.

### Identity

A Matter is unique because it represents one continuing operational concern, not because of its current title or description.

Its identity survives renaming, changes to Current Situation, shifts in Focus, inactivity, reopening, and eventual closure.

### Ownership

The owner governs the Matter and remains accountable for its accepted understanding.

Watson can assist within the Matter but cannot own it. The system preserves its boundary, identity, access, and continuity.

### Lifecycle

A Matter is opened when an operational concern becomes worthy of sustained investigation.

It develops as Artifacts enter, Relationships are proposed or accepted, Hypotheses evolve, and Current Situation is revised. It may become quiet without being complete.

A Matter closes when the owner determines that active investigation is no longer required. It may later be reopened without losing its earlier history.

### Relationships

A Matter contains one Current Situation, one Operational Memory, one current Working Set, and the complete corpus of its Artifacts.

It also scopes its Relationships, Hypotheses, Collections, Contradictions, Watson Proposals, Inspections, Focus, Context Envelopes, and Operational Events.

### Visibility

The active Matter must remain continuously identifiable whenever its Workbench is in use.

Other Matters remain peripheral unless the owner deliberately changes operational context. A closed Matter is absent from active work but remains recoverable through memory.

### Authority

Only an authorized human may open, close, reopen, transfer, or redefine the accountable ownership of a Matter.

Watson may propose that a Matter be split, merged, paused, or concluded, but it cannot perform those acts. The system may enforce access and integrity rules without making the operational judgment.

## 2. Current Situation

### Purpose

Current Situation is the singular accepted synthesis of what is presently understood about a Matter.

It answers: what is happening, why it currently matters, what remains uncertain, and which operational question deserves attention now.

### Identity

There is exactly one current Current Situation per Matter.

Its identity belongs to its role within the Matter, while each consequential revision becomes a distinct version in Operational Memory.

### Ownership

The owner owns the accepted synthesis.

Watson may draft, question, compare, or propose revisions. The system preserves the active version and all superseded versions.

### Lifecycle

An initial Current Situation appears when the Matter has enough admitted context to express a working understanding.

It changes only through an attributable revision grounded in Artifacts, Relationships, Hypotheses, Contradictions, or explicit owner judgment. A revision replaces the active synthesis but never destroys the earlier version.

Current Situation ends only with the Matter. Closure records its final accepted version rather than converting it into timeless fact.

### Relationships

Current Situation summarizes the accepted understanding derived from relevant Artifacts and accepted Relationships.

It may reference active Hypotheses, unresolved Contradictions, material uncertainty, and the present Focus. Operational Events connect every version to its author and basis.

### Visibility

Current Situation remains the strongest stable operational center of the active Workbench.

Inspection may reduce its prominence but must not make its identity or relation to the inspected subject unknowable. Historical versions remain peripheral until explicitly examined.

### Authority

Only the owner, or a human with explicitly delegated equivalent authority, may accept a consequential revision.

Watson may propose exact wording and supporting rationale but may not silently update the accepted synthesis. The system may record a confirmed revision and surface conflicts; it may not author operational truth.

## 3. Artifact

### Purpose

An Artifact is a durable unit of operational material admitted to a Matter because it may affect understanding.

It externalizes something that can be inspected, interpreted, related, revisited, and cited. An Artifact is not a visual card and is not defined by its presentation.

### Identity

An Artifact has continuous identity independent of its title, location, interpretation, importance, or current state.

Its identity distinguishes the admitted operational material from both its source and any later representations or revisions. A revised document or observation may create a new version or a new Artifact according to whether the underlying occurrence remains the same; that distinction must be explicit.

### Ownership

The Matter owns the Artifact as part of its operational record.

An identifiable actor authors, contributes, or admits it. Watson can create a proposed interpretation but cannot become the human source of evidence it did not produce.

### Lifecycle

An Artifact is born when a contribution, observation, record, question, conversation, document, decision, or system signal is deliberately admitted to a Matter.

It may be reviewed, verified, disputed, related, focused, interpreted, superseded, rejected from active reasoning, or archived. These state dimensions evolve independently.

An Artifact does not disappear when it leaves the Working Set. Its active participation may end, but its identity and consequential history remain in Operational Memory.

### Relationships

An Artifact belongs to one Matter and may participate in any number of provenance-bearing Relationships within that Matter.

It may support or challenge a Hypothesis, contribute to a Contradiction, appear through references in Collections, enter the Working Set, become Focus, be inspected, and provide the basis for Current Situation or a Watson Proposal.

### Visibility

An Artifact is visible when it is operationally relevant, newly admitted, in Focus, under Inspection, implicated in a material Contradiction, or required to understand a consequential change.

It recedes when reviewed and currently non-material. Archival status removes it from ordinary active presence without removing access or history.

### Authority

The original contribution and its source record may not be rewritten to fit a later interpretation.

Authorized humans may correct metadata, accept interpretations, govern participation, and archive the Artifact. Watson may classify, summarize, relate, or question only as an explicit proposal. The system may derive mechanical facts and record events, but derived claims must remain distinguishable from source material.

## 4. Relationship

### Purpose

A Relationship states an explicit operational meaning between two or more domain subjects.

It turns observed association into accountable interpretation while preventing proximity, sequence, or decoration from impersonating causality.

### Identity

A Relationship is unique through its participants, semantic type, scope, provenance, and continuing interpretive claim.

Two Relationships between the same Artifacts may remain distinct when they express different meanings, originate from different judgments, or apply to different periods.

### Ownership

An identifiable actor authors or proposes every Relationship.

Accepted Relationships belong to the Matter's operational understanding. Watson may originate a proposal but never owns acceptance.

### Lifecycle

A Relationship begins as observed, proposed, or explicitly asserted.

It may be examined, accepted, qualified, disputed, superseded, rejected, or retired as understanding changes. Rejection ends its active interpretive force but does not erase that it was considered.

### Relationships

A Relationship primarily connects Artifacts, but it may also connect a Hypothesis to supporting or challenging Artifacts, a Contradiction to its incompatible claims, or a Current Situation revision to its basis.

Every active Relationship belongs to one Matter and produces Operational Events when its consequential state changes.

### Visibility

A Relationship is visible when it helps explain the active Focus, Current Situation, a Contradiction, or a material path of reasoning.

It remains peripheral when valid but irrelevant to the present act. Proposed or disputed Relationships must never be visually or conceptually indistinguishable from accepted ones.

### Authority

Watson may propose a Relationship and explain its basis.

Only an authorized human may accept a Relationship into operational understanding, reject it as judgment, or change its semantic meaning. The system preserves provenance and prevents an ungoverned connector from becoming authoritative.

## 5. Hypothesis

### Purpose

A Hypothesis is a testable provisional explanation of the Matter.

It gives uncertain reasoning a durable identity so that support, challenge, refinement, and rejection can accumulate without presenting speculation as fact.

### Identity

A Hypothesis remains the same while its strength, wording, and evidence base evolve, provided its core explanatory claim remains continuous.

A materially different explanation becomes a different Hypothesis. Related alternatives may be connected but must not be merged merely to simplify presentation.

### Ownership

A human actor owns the decision to admit and rely upon a Hypothesis.

Watson may originate a candidate Hypothesis, but it remains a Watson Proposal until a human admits it as operational material.

### Lifecycle

A Hypothesis begins as a candidate explanation associated with a Matter.

It develops through supporting and challenging Artifacts, tests, revisions, and comparison with alternatives. It may remain open, strengthen, weaken, split, be superseded, or be rejected.

It becomes accepted operational understanding only through explicit judgment and sufficient accountable basis. Even then, the historical Hypothesis and its path remain visible in Operational Memory; it is not retroactively relabeled as always having been fact.

### Relationships

A Hypothesis references Artifacts through typed support, challenge, scope, test, and dependency Relationships.

It may be involved in Contradictions, influence Current Situation, enter the Working Set, become Focus, be inspected, and receive Watson Proposals.

### Visibility

An active Hypothesis is visible when it materially guides the investigation or requires testing.

Weak, rejected, or superseded Hypotheses recede from the active surface but remain recoverable. Competing Hypotheses should appear together only when the comparison itself is operationally useful.

### Authority

Watson may propose, summarize, test, and challenge a Hypothesis.

Only the owner may accept it into the Matter's working explanation, reject it as an operational judgment, or treat its conclusion as part of Current Situation. The system may calculate support patterns but cannot decide explanatory truth.

## 6. Collection

### Purpose

A Collection provides a meaningful way to retrieve and consider related domain subjects without duplicating them.

It supports recognition and access while keeping the shared surface from becoming a complete artifact catalogue.

### Identity

A Collection is unique through its organizing purpose and continuing role in the Matter.

Its identity is not the sum of its current members. Membership may change without creating a new Collection.

### Ownership

A human may create and govern a Collection.

Watson may propose a Collection or propose membership. The system may maintain a rule-based Collection when its rule and authorship are explicit.

### Lifecycle

A Collection begins when an organizing distinction becomes useful.

References may enter or leave as the corpus grows. A Collection may become inactive, be renamed, be combined by human judgment, or be archived when its organizing purpose no longer helps.

Deleting or archiving a Collection never deletes its referenced subjects.

### Relationships

A Collection belongs to one Matter and contains references to Artifacts, Hypotheses, Contradictions, or other explicitly permitted operational subjects.

It may supply candidates to the Working Set but never determines active participation on its own.

### Visibility

A Collection appears when it contains material relevant enough to aid orientation or retrieval.

Empty Collections do not demand operational attention. Large Collections remain peripheral and reveal only the amount of detail needed for the present act.

### Authority

Humans govern semantic Collections and accept Watson's proposed organization.

Watson may suggest grouping, labels, and membership but may not silently reorganize the owner's accepted structure. The system may apply an accepted deterministic rule without converting categorization into operational judgment.

## 7. Contradiction

### Purpose

A Contradiction represents a material incompatibility between claims, Artifacts, Relationships, Hypotheses, authorities, or accepted understanding.

It protects the investigation from hiding unresolved conflict inside a smooth summary.

### Identity

A Contradiction is unique through the incompatible subjects, the nature of their conflict, and the scope in which both cannot presently stand together.

Additional evidence may deepen the same Contradiction or establish a distinct one.

### Ownership

A Contradiction belongs to the Matter once admitted as operationally material.

Any actor may notice one. Watson may propose one. Human authority determines whether it is accepted as a real operational conflict.

### Lifecycle

A Contradiction begins as detected or proposed tension.

It may be acknowledged, investigated, qualified, escalated, resolved, or dismissed. Resolution records how the conflict changed: a source failed, scopes differed, a claim was revised, an exception was accepted, or uncertainty remains.

A resolved Contradiction leaves the active periphery but remains in Operational Memory.

### Relationships

A Contradiction references every subject required to understand the incompatibility and may challenge Current Situation or a Hypothesis.

It may become Focus, enter the Working Set, trigger Inspection, and justify a Watson risk interruption.

### Visibility

An unresolved material Contradiction must remain perceptible without permanently displacing Current Situation.

Its prominence follows consequence and relevance, not novelty. Resolved or low-materiality Contradictions remain peripheral until needed.

### Authority

Watson may detect, explain, and propose severity.

Only an authorized human may accept its operational significance, declare it resolved, or decide how it changes Current Situation. The system may enforce that resolution includes an attributable basis.

## 8. Working Set

### Purpose

The Working Set is the deliberately limited subset of the Matter presently participating in active reasoning.

It protects the Workbench from scale while preserving access to the full corpus.

### Identity

Each Matter has one current Working Set.

Its identity is stable as an operational role, while its membership and arrangement evolve with the investigation.

### Ownership

The owner controls active participation.

Watson and the system may propose additions, removals, or substitutions based on relevance, risk, and capacity, but they do not silently redefine what the owner is working with.

### Lifecycle

The Working Set begins sparse with the earliest admitted material.

Subjects enter when they become relevant to Current Situation, Focus, an unresolved question, or material risk. They leave when they are no longer required for current reasoning, without leaving the Matter.

The Working Set ends only when the Matter closes; its final state and consequential changes remain in memory.

### Relationships

The Working Set references existing Artifacts, Hypotheses, Contradictions, and selected Relationships.

It surrounds Current Situation, supplies candidates for Focus, and determines the active neighborhood from which Inspection and Context Envelopes are formed.

### Visibility

The Working Set defines what is ordinarily visible on the active shared surface.

Its boundary must remain understandable, but it should not appear as a complete inventory or equal-weight grid. Non-members remain accessible through Collections, relationships, provenance, search, or history without demanding permanent presence.

### Authority

Humans decide what actively participates in reasoning.

Watson may make relevance proposals and warn when omission creates material risk. The system may preserve capacity rules and stable placement but cannot use automatic ranking as a substitute for owner judgment.

## 9. Operational Memory

### Purpose

Operational Memory is the faithful history of consequential reasoning within a Matter.

It allows the owner to understand not only the present conclusion, but how it emerged, what changed, what was rejected, and who exercised authority.

### Identity

Each Matter has one continuous Operational Memory.

It is identified by its complete ordered record of attributable Operational Events, not by any single transcript, timeline, or current representation.

### Ownership

The Matter owns its Operational Memory.

The system is its custodian. Humans author consequential judgments; Watson contributes attributable proposals and observations but does not control the record.

### Lifecycle

Operational Memory begins with the opening of the Matter.

It grows through append-only Operational Events covering material admission, interpretation, state change, relationship governance, Current Situation revision, consequential navigation transitions of Focus, and closure.

It does not complete through deletion. When the Matter closes, memory becomes quiet and preserved; reopening continues the same history.

### Relationships

Operational Memory stores the lineage of every consequential entity and the events that connect earlier and later states.

It preserves rejected Relationships, superseded Hypotheses, resolved Contradictions, previous Current Situation versions, accepted Watson Proposals, and material navigation transitions between professional contexts.

### Visibility

Memory remains peripheral during ordinary reasoning.

It becomes visible when the owner asks what changed, why a conclusion exists, who authorized it, what was previously considered, or how to restore context. Relevant history should accompany inspection without overwhelming the present.

### Authority

No actor may rewrite consequential history.

Humans may add corrections, explanations, or later judgments as new events. Watson may summarize history but cannot alter it. The system must preserve order, authorship, basis, and the distinction between original events and later interpretation.

## 10. Watson Proposal

### Purpose

A Watson Proposal is a bounded, attributable suggestion for changing operational understanding or organization.

It lets Watson contribute useful reasoning without impersonating owner judgment or silently changing the Matter.

### Identity

A Watson Proposal is unique through its proposed action or interpretation, affected subjects, stated basis, time, and originating Watson act.

Rewording does not create a new proposal when the intended change remains the same. A materially different claim or effect does.

### Ownership

Watson authors the proposal.

The Matter may retain it as part of memory, but Watson never owns the Artifact, Relationship, Hypothesis, Current Situation, or decision that could result from it.

### Lifecycle

A Watson Proposal begins when Watson has enough basis to offer a specific, useful, and proportionate change.

It may wait, be inspected, be corrected, receive detail, be accepted, be rejected, be deferred, be withdrawn, or be superseded. Acceptance causes a separate attributable operational act by the human authority; it does not retroactively make Watson the author of that act.

The proposal ends actively when resolved or withdrawn, while its consequential history remains.

### Relationships

A Watson Proposal references its evidence, affected entities, intended consequence, uncertainty, and reason for appearing.

It may propose an Artifact interpretation, Relationship, Hypothesis, Contradiction, Collection change, Working Set change, or Current Situation revision.

### Visibility

A proposal appears contextually when it is useful to the present act.

It waits at the periphery when non-urgent, withdraws when no longer relevant, and may interrupt only for material risk, serious contradiction, authority conflict, likely source failure, or a consequential decision conflicting with strong evidence.

### Authority

Watson may author, revise, explain, defer, or withdraw its own proposal.

Only an authorized human may accept its operational consequence. The owner must always be able to reject, correct, add detail, defer, ignore, or continue unrelated work. The system must never convert silence or inactivity into acceptance.

## 11. Inspection

### Purpose

Inspection is a temporary act of close examination of one operational subject.

It reveals depth without turning detail into a new destination or destroying the owner's spatial and reasoning context.

### Identity

An Inspection is identified by its subject, initiating actor, origin context, and continuous examination session.

Opening the same subject later creates another Inspection while retaining access to the earlier consequential events.

### Ownership

The inspecting human owns attention and decides when Inspection begins or ends.

Watson may be asked to assist within it. The system preserves orientation and records only consequential actions, not every incidental glance.

### Lifecycle

Inspection begins when a subject becomes the temporary object of close attention.

It may reveal source, provenance, content, relationships, state, history, and affected understanding. It may produce judgments or proposals, each recorded separately.

Inspection ends through return, a navigation transition to another subject, or shift of Focus. Ending it restores or deliberately updates the preserved Context Envelope.

### Relationships

Inspection reveals one primary subject and its relevant neighborhood.

It is entered from a Focus and Context Envelope, may consult Operational Memory, may produce Operational Events, and may affect the Working Set or Current Situation only through authorized separate acts.

### Visibility

The inspected subject becomes locally dominant.

The Matter, Current Situation, origin, relevant neighborhood, and means of return remain perceptible enough to prevent disorientation. Unrelated material may recede temporarily but must not be discarded.

### Authority

Inspection itself grants no authority to change truth.

The inspector may perform actions already permitted by their role. Watson may explain or propose. The system may reveal and preserve context but must not treat opening, dwelling, or closing as acceptance.

## 12. Context Envelope

### Purpose

A Context Envelope preserves orientation across Focus, Inspection, navigation, contribution, and return.

The Workbench Canonical Domain Model is the sole canonical owner of Context
Envelope identity and contract. Other models may consume the Context Envelope
and define downstream continuity requirements for their scope, but they do not
own its schema, identity, lifecycle, or authority.

It ensures the owner can immediately understand where they are, what they opened, what changed, and how to return.

### Identity

A Context Envelope is unique to a continuous navigation transition between professional contexts.

It includes the Matter, Current Situation version, origin, active Focus, relevant neighborhood, Working Set state, navigation path, pending change, and return condition needed to preserve meaning.

### Ownership

The owner owns their operational context.

The system is responsible for preserving it faithfully. Watson may use the context to make a relevant proposal but may not redirect it for conversational convenience.

### Lifecycle

A Context Envelope is formed whenever the owner moves from the stable Workbench state into a deeper or different operational view.

It evolves only when the owner deliberately changes context or an authorized consequential event changes what return must mean. It resolves when the owner returns or adopts the new context as the active one.

### Relationships

A Context Envelope belongs to one Matter and references Current Situation, Focus, Working Set, inspected subject, origin, path, and relevant Operational Events.

It governs the continuity between Inspection, navigation, Watson assistance, Inbox contribution, and restored spatial context.

### Visibility

The whole envelope does not need continuous presentation.

Its essential orientation must remain perceptible during every context-changing act. More of it becomes available whenever ambiguity arises about origin, change, or return.

### Authority

The system may capture and restore the envelope but cannot reinterpret the owner's purpose.

Watson may not block return or replace the envelope with its own conversation state. Only the owner may abandon the preserved context or choose a different active destination.

## 13. Focus

### Purpose

Focus expresses the current distribution of operational attention inside one Matter.

It distinguishes what governs the investigation from what is merely present, visible, or being inspected.

### Identity

Each active Matter has one Focus structure containing exactly one primary Focus and, when useful, a small set of secondary foci.

Primary Focus is usually Current Situation or the operational subject presently challenging it. Secondary focus exists only to support comparison or understanding of the primary subject.

### Ownership

The owner controls attention.

Watson may recommend a shift. The system may preserve and restore Focus but does not automatically redefine importance through recency or activity.

### Lifecycle

Focus begins with Current Situation when the Matter becomes active.

It shifts when the owner deliberately turns attention to another subject, when Inspection begins, or when material risk is accepted as requiring attention. Secondary foci appear and disappear as their supporting role becomes or ceases to be useful.

Focus returns to Current Situation when the temporary act ends unless the owner adopts a new primary subject.

### Relationships

Focus selects from Current Situation, the Working Set, a Contradiction, Hypothesis, Artifact, Relationship, or another inspectable operational subject.

It shapes the relevant neighborhood, Context Envelope, Inspection, and the appropriate timing of Watson Proposals.

### Visibility

Primary Focus must be unmistakable without making all other context disappear.

Secondary foci remain clearly subordinate. Subjects outside Focus may remain visible when they preserve context, but visibility alone must not imply attention.

### Authority

The owner initiates and confirms ordinary focus changes.

Watson may call attention to material risk but cannot hold Focus captive. The system may temporarily protect against accidental context loss, never against deliberate owner movement.

## 14. Operational Event

### Purpose

An Operational Event is the immutable record that a consequential act occurred.

It connects evolving entities to accountable history and makes it possible to answer what changed, why, when, by whom, and on what basis.

### Identity

An Operational Event is unique through the occurrence it records, its author, time, Matter, affected subjects, previous condition, resulting condition, and stated basis.

Repeated or reversed acts create new Events rather than modifying the original one.

### Ownership

The actor who performs the act is its author.

Operational Memory owns the preserved record. The system records and protects it but does not claim authorship for human or Watson judgments.

### Lifecycle

An Operational Event is born only when a consequential act completes or a material external occurrence is admitted.

It does not evolve. Corrections, reversals, qualifications, and consequences are later Events linked to it.

An Event never expires, though it may cease to affect the active state.

### Relationships

An Operational Event belongs to one Matter and may affect any domain entity.

It links actor, basis, prior state, resulting state, related proposal, authority, and relevant Context Envelope. Ordered Events form Operational Memory without reducing memory to a flat activity log.

### Visibility

Events remain quiet during ordinary work.

They become visible when needed to explain provenance, state, authority, revision, contradiction resolution, return context, or the evolution of understanding.

### Authority

No actor may alter a recorded Event.

Humans and Watson may author later attributable Events within their authority. The system validates integrity and ordering but may not fabricate intention, rationale, or consent.

---

# Canonical relationship model

## Containment and scope

- A **Matter** contains exactly one active **Current Situation**.
- A **Matter** contains exactly one continuous **Operational Memory**.
- A **Matter** has exactly one current **Working Set**.
- Every **Artifact**, **Relationship**, **Hypothesis**, **Collection**, **Contradiction**, **Watson Proposal**, **Inspection**, **Context Envelope**, **Focus**, and **Operational Event** is scoped to one Matter.
- Subjects from different Matters do not form direct operational Relationships. Cross-Matter relevance is represented through explicitly admitted references with preserved source Matter provenance.

## Understanding

- **Current Situation** summarizes the owner's accepted operational understanding.
- **Artifacts** provide operational material; they do not become truth merely through admission.
- **Relationships** state typed interpretations between subjects.
- **Hypotheses** organize testable provisional explanations.
- **Contradictions** preserve material incompatibilities that cannot responsibly be smoothed over.
- A Current Situation revision cites the Artifacts, Relationships, Hypotheses, Contradictions, and human judgment that justify the change.

## Organization and active participation

- A **Collection** contains references to existing subjects, never copies of them.
- The **Working Set** references the limited subjects currently participating in reasoning.
- Collection membership and Working Set participation are independent.
- Leaving the Working Set never removes a subject from the Matter.
- Entering a Collection never increases epistemic authority.

## Attention and depth

- **Focus** identifies one primary operational subject and any strictly subordinate secondary subjects.
- **Inspection** reveals one subject in depth.
- A **Context Envelope** binds Inspection and navigation to their origin, relevant neighborhood, and return condition.
- Inspection can generate a judgment or proposal, but it does not itself change accepted state.
- Closing Inspection restores the preserved context unless the owner explicitly adopts a new one.

## Assistance and authority

- A **Watson Proposal** references its basis and the exact domain change it recommends.
- A Watson Proposal never owns or directly mutates the entity it concerns.
- Human acceptance creates a new human-authored operational act linked to the proposal.
- Rejection, correction, deferral, and withdrawal remain attributable and may inform future Watson behavior without becoming operational truth.

## History and change

- Every consequential domain change produces an **Operational Event**.
- **Operational Memory** preserves Events, their order, authorship, basis, and lineage.
- Current state is derived from history but never replaces it.
- Superseded, rejected, resolved, and archived subjects remain recoverable through Operational Memory.
- A later correction qualifies an earlier Event; it never rewrites it.

## Epistemic and operational state

State is not one label. The model keeps independent:

- review state;
- provenance state;
- epistemic state;
- operational participation;
- attention state;
- lifecycle state.

An Artifact can therefore be reviewed but unverified, verified but contradicted, confirmed but outside the Working Set, active but not focused, or archived while remaining part of Operational Memory.

No change in one dimension silently causes a change in another.

---

# Authority model

## Owner authority

The owner, or a human with explicit delegated authority, alone may:

- accept or revise Current Situation;
- accept operational Relationships;
- admit a Hypothesis into the working explanation;
- declare a Contradiction operationally resolved;
- authorize consequential state changes;
- close or reopen the Matter;
- transfer accountable ownership;
- accept the operational consequence of a Watson Proposal.

## Watson authority

Watson may:

- observe admitted material;
- organize without changing accepted meaning;
- identify uncertainty or possible contradiction;
- propose Relationships, Hypotheses, Collections, Working Set changes, and Current Situation revisions;
- explain the basis and uncertainty of a proposal;
- wait, defer, withdraw, or interrupt within the limits defined by Watson Presence and Operational Dynamics;
- remember corrections to its own future assistance.

Watson may not:

- own operational truth;
- accept its own proposal;
- create human consent from silence;
- rewrite source material or history;
- make itself a required step in contribution or investigation;
- retain attention when the owner chooses to continue elsewhere.

## System authority

The system may:

- preserve identity, scope, order, provenance, and integrity;
- enforce access and explicit authority boundaries;
- record attributable Operational Events;
- restore Context Envelopes and Focus;
- apply accepted deterministic rules;
- reveal violations of canonical invariants.

The system may not:

- infer human judgment from interaction mechanics;
- convert ranking, recency, similarity, or automation into accepted meaning;
- erase inconvenient history;
- treat visual placement as a Relationship;
- decide operational truth.

---

# Canonical invariants

These rules define the irreducible integrity of the Workbench domain. An implementation that violates any of them is not a conforming Management OS Workbench.

1. **One Matter is one accountable investigation boundary.** Operational subjects never drift between Matters without explicit provenance.
2. **Every active Matter has one and only one Current Situation.** Earlier versions remain history, not competing current centers.
3. **Current Situation is accepted human understanding.** Watson and the system may propose or preserve it, never authorize it.
4. **Every Artifact has durable identity and belongs to one Matter.** Presentation, Collection membership, Working Set participation, and state changes never create hidden copies.
5. **Admission does not establish truth.** Every Artifact retains distinguishable source, interpretation, provenance, and epistemic condition.
6. **Every consequential change has an identifiable actor, time, basis, and resulting Operational Event.**
7. **Operational Memory is append-only in meaning.** Corrections and reversals extend history; they do not rewrite it.
8. **A Relationship always states explicit semantics and provenance.** Proximity, sequence, similarity, or a connector alone never creates a Relationship.
9. **Watson never owns an Artifact, accepted Relationship, accepted Hypothesis, Current Situation, Matter, or human judgment.**
10. **A Watson Proposal remains a proposal until an authorized human acts.** Silence, delay, inspection, or continued work never counts as consent.
11. **Hypotheses remain distinguishable from accepted understanding throughout their history.** Later confirmation does not erase earlier uncertainty.
12. **Contradictions remain present until an attributable resolution explains what changed.** They cannot disappear through summary, rearrangement, or inactivity.
13. **Collections contain references, not copies, and never confer epistemic authority.**
14. **The Working Set is smaller than the Matter corpus by intent once scale requires it.** Active absence never means deletion or irrelevance forever.
15. **Focus has one primary subject.** Secondary focus may support it but cannot create an equal competing operational center.
16. **Inspection never implies acceptance and never destroys its Context Envelope.**
17. **Every context-changing act preserves Matter, origin, current understanding, affected neighborhood, change, and return sufficiently for immediate orientation.**
18. **State dimensions remain orthogonal.** Review, provenance, epistemic status, participation, attention, and lifecycle never collapse into one ambiguous status.
19. **Rejected, superseded, resolved, and archived reasoning remains recoverable when it affected consequential understanding.**
20. **Owner contribution is never blocked by Watson.** Assistance adapts to the owner's work, not the reverse.
21. **The system preserves authority but does not manufacture it.** Automation cannot turn inference into judgment.
22. **Current visibility is selective; operational memory is complete.** The Workbench may quiet material but may not lose it.
23. **Detail never destroys context, and scale never requires equal-weight display of the corpus.**
24. **Every domain subject must justify its existence through operational reasoning.** If it neither contributes material, meaning, attention, continuity, authority, nor memory, it is outside the Workbench domain.

---

# Stability rule

This document closes the architectural definition phase of the Design Bible once approved.

Future Sprints implement and validate this model. They do not create substitute entities, collapse its distinctions, or weaken its authority boundaries for implementation convenience.

A future change to this model requires evidence that the operational domain itself has changed. A new screen, technical constraint, visual preference, or isolated workflow is not sufficient justification.

Every future implementation decision must be traceable to:

1. a canonical entity;
2. a permitted relationship;
3. an explicit authority boundary;
4. a valid Matter lifecycle transition;
5. an attributable Operational Event when the change is consequential;
6. the Canonical Workbench Laws and established Design Principles.

If that trace cannot be made, the decision does not belong in the Workbench.
