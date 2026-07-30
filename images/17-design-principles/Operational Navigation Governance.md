# Operational Navigation Governance

## Status

```text
Architecture Governance
Milestone M4.0
Canonical
Frozen v1.0
```

## Purpose

This document defines the canonical operational laws that govern how Management
OS coordinates professional attention. It answers:

1. Which Matter may claim the operational manager's attention now?
2. When may the current Focus be interrupted?
3. What context must survive so work can resume without reconstruction?

These laws govern every future navigation implementation regardless of visual
form. They define no sidebar, rail, menu, screen, route, layout, color, icon, or
interaction pattern.

Navigation is a coordination capability. It does not own Matter identity,
Current Situation, lifecycle, authority, evidence, Relationships, Operational
Memory, professional judgment, or source truth. This document creates no new
aggregate, lifecycle, repository, event authority, or parallel history.

## Terms

- **Attention Priority** is the justified claim a Matter has on professional
  attention relative to other Matters at a stated time.
- **Focus** is the one primary question, object, or condition currently receiving
  professional work within the active Matter.
- **Interruption** is a governed displacement of primary Focus by a more important
  concern. Owner-directed movement, retrieval, and inspection are not
  interruptions.
- **Safe point** is the earliest point at which deferral no longer risks losing an
  irreversible act, unrecorded judgment, or essential reasoning context. It is
  not inferred from inactivity.
- **Context Envelope** is the single canonical continuity contract owned by the
  Workbench Canonical Domain Model. Product, experience, navigation, interaction,
  visual, and information models consume it and define downstream requirements
  only.
- **Owner** includes a human holding explicit, valid delegated authority for the
  applicable Matter and act. Delegation never rewrites prior ownership.

# 1. Matter Attention Priority

## 1.1 Governing question

A Matter has a justified claim on attention now only when canonical facts show
that attending later would create a greater operational consequence than
continuing the manager's present professional intent.

Priority is a source-neutral operational judgment. It is not a rank derived from
where a Matter appears, how recently it was opened, how much activity it
contains, or how often the system mentions it.

## 1.2 Admissible priority factors

Only these factors may contribute to Attention Priority:

1. **Operational significance** — material scale, severity, reach,
   irreversibility, or strategic importance.
2. **Authority** — a valid duty, decision right, approval obligation, escalation
   responsibility, or explicit owner commitment.
3. **Temporal urgency** — time before a consequence becomes unavoidable, an
   authority window closes, evidence decays, or a commitment is breached.
4. **Unresolved consequence** — magnitude and likelihood of harm, loss, invalid
   judgment, or missed opportunity that remains open.
5. **Dependency chains** — criticality of governed decisions, actions, controls,
   or Matters blocked or exposed by this Matter.
6. **Stabilization risk** — material deviation, guardrail breach, recurrence,
   adverse effect, or uncertainty that could invalidate an intended condition.
7. **Explicit professional intent** — the owner's attributable decision to work
   on, defer, monitor, or return to a Matter, including purpose and time boundary.

No factor is an automatic proxy for the whole priority. Significance without
urgency may remain planned; urgency without consequence may remain low; a large
dependency count without criticality does not dominate; owner intent cannot
waive a non-delegable safety, legal, privacy, or authority obligation.

## 1.3 Priority classes

Priority classes express a required attention posture, not a visual order or
lifecycle state.

| Class | Canonical meaning | Required posture |
|---|---|---|
| **P0 — Protective** | Delay creates an immediate material threat to safety, continuity, privacy, legal duty, authority integrity, or a binding guardrail | Assess now; displace current Focus only under the interruption contract |
| **P1 — Time-Critical** | A material consequence, decision window, expiring authority, irreversible dependency, or stabilization failure will occur before the next safe planned review | Attend at the earliest safe point, or immediately when the interruption threshold is met |
| **P2 — Committed** | A consequential owner judgment, commitment, dependency, or unresolved condition requires work within an explicit horizon | Plan and preserve attention; do not displace a more important valid Focus |
| **P3 — Watchful** | A valid observation obligation, emerging consequence, or future return condition exists, but no current act is justified | Maintain governed awareness and reassess on a defined trigger |
| **P4 — Dormant** | No current professional work is justified; history, closure, deferral, or a future trigger remains authoritative | Do not solicit attention; preserve identity, history, and return conditions |

There is no canonical numeric score inside a class. Ties are resolved
lexicographically by:

1. non-deferrable authority or protection obligation;
2. earliest time to material consequence;
3. greatest unresolved and irreversible consequence;
4. most critical blocked dependency chain;
5. greatest stabilization exposure;
6. explicit owner commitment and intended return time;
7. if still equivalent, the owner chooses.

Recency is not a tie-breaker. The system preserves an honest tie rather than
manufacturing precision.

## 1.4 Priority invariants

1. Priority belongs to a Matter-in-context, not a navigation item.
2. Priority derives from attributable canonical facts and valid intent.
3. Priority never changes Matter state, Focus, authority, or accepted truth.
4. Priority and interruption are separate decisions. P0 permits interruption
   assessment; it does not make displacement automatic.
5. Priority and lifecycle are orthogonal. Any lifecycle state may contain a
   material condition, including Closed when a valid reopen trigger appears.
6. Priority is actor-relative only where authority or commitment genuinely
   differs; operational facts are not rewritten per viewer.
7. Unknown, stale, disputed, inferred, and unavailable inputs remain qualified.
8. A priority claim exposes factors, sources, applicable time, authority basis,
   uncertainty, policy version, and last evaluation.
9. Lower priority never means hidden, deleted, resolved, or unimportant.
10. Equal priority remains equal until evidence or an authorized human decision
    resolves it.
11. Current Focus receives continuity protection against churn.
12. Evaluation is deterministic for identical canonical inputs and policy
    versions; human resolution of an honest tie remains attributable.

## 1.5 Permitted changes and re-evaluation

A class may rise or fall only because:

- a canonical operational fact changed;
- a time boundary approached, passed, or was validly revised;
- consequence, dependency, guardrail, recurrence, or stabilization changed;
- authority or accountable ownership validly changed;
- explicit intent was created, revised, fulfilled, or withdrawn;
- stale or disputed information was revalidated, invalidated, or qualified;
- authorized judgment resolved policy ambiguity.

A reduction requires evidence that the former claim was resolved, transferred,
accepted, superseded, invalidated, or moved outside the current horizon. Silence,
age, lack of interaction, dismissal of a message, or navigation never lowers it.

Priority may be re-evaluated on a consequential canonical event; a declared time,
review, expiry, or guardrail boundary; a governed source change or degradation;
a dependency change; an ownership or delegation change; an explicit review of
intent; recovery after absence following freshness checks; or a policy/input
validity change whose reason is preserved. Continuous reordering from transient
activity is forbidden.

## 1.6 Forbidden influences

The following have no independent right to affect priority:

- clicks, dwell time, hover, scrolling, or route history;
- visual position, pinning, expansion, color, badge, animation, or screen space;
- unread state, notification count, message volume, or alert repetition;
- raw recency, creation time, alphabetical order, popularity, or similarity;
- counts of Artifacts, Relationships, tasks, comments, people, or events;
- Watson confidence, model salience, conversational convenience, or availability
  without admissible operational facts;
- engagement goals, gamification, or pressure to complete a flow;
- source urgency labels not mapped to this contract with provenance and authority;
- actor seniority, preference, or proximity without valid authority;
- inferred consent, inactivity, or absence;
- loading, cache, data arrival, or implementation order.

## 1.7 Priority distinctions

These distinctions are normative:

| Distinction | Why the concepts differ | Canonical risk if conflated | Controlling law |
|---|---|---|---|
| **Priority ≠ severity** | Severity describes magnitude; priority also depends on authority, time, unresolved consequence, dependencies, stabilization, and explicit intent. | A severe but stable condition may displace time-critical work, or a small non-deferrable duty may be hidden. | NAV-01, NAV-03 |
| **Priority ≠ lifecycle** | Lifecycle describes the Matter's canonical operational posture; priority describes its present claim on attention. | Navigation would manufacture lifecycle progression or suppress consequential Closed/reopened Matters. | NAV-02, NAV-26 |
| **Priority ≠ notification level** | Notification delivery is a representation and transport choice; priority is an attributable governance judgment. | Source labels, volume, or delivery mechanics could capture professional attention. | NAV-04, NAV-07 |
| **Priority ≠ user preference** | Preference may express intent but cannot replace facts, valid authority, or non-delegable duties. | Personal convenience could waive protective obligations or fabricate authority. | NAV-03, NAV-15 |

## 1.8 Aggregation escalation prohibition

A large number of weak signals does not create a high-priority interruption
unless their aggregation produces a new material operational consequence.
Volume alone is not consequence, and repetition alone is not urgency.
Escalation requires a new evidence-based interpretation with its own provenance,
inputs, time, uncertainty, and accountable policy or human basis. Aggregation
preserves the provenance of every contributing signal. Watson may recommend
reconsideration and explain the possible new consequence, but it cannot silently
raise priority or interruption class.

# 2. Focus Interruption Governance

## 2.1 Interruption test

The system may interrupt current Focus only when all conditions hold:

1. an admissible and attributable concern exists;
2. its consequence exceeds the cost and risk of interruption;
3. waiting until the next safe point creates a non-acceptable consequence;
4. the concern applies to the actor's authority or protective duty;
5. freshness, provenance, and uncertainty support the claimed class;
6. displaced Focus and a reliable return condition can be preserved;
7. the interruption and disposition can be explained and audited.

Otherwise the event is queued, made passively available, or ignored. Incomplete
evidence uses the least disruptive class consistent with a genuine protective
duty.

## 2.2 Event classes

At the moment of classification, each event belongs to exactly one interruption
class: **Interrupt Immediately**, **Queue Until Safe**, **Passive Awareness**, or
**Never Interrupt**. The classes are mutually exclusive. Classification may be
revisited only after a material change to canonical inputs, freshness, authority,
time boundary, or policy validity, and the change must be attributable.

An event cannot occupy multiple classes at once. UI representation does not
determine its class, and notification delivery, repetition, acknowledgment, or
dismissal does not change its governance classification.

### Interrupt immediately

Immediate interruption is permitted only when delay until the next safe point
would expose a material and time-critical:

- safety or operational continuity threat;
- privacy, security, legal, or non-delegable compliance breach;
- loss, expiry, conflict, or misuse of authority;
- invalidation of a source or premise supporting an irreversible act;
- guardrail breach, severe adverse effect, or stabilization failure;
- consequential contradiction making the act in progress unsafe or invalid;
- owner-required approval whose window closes before a safe point;
- dependency failure propagating irreversible material consequence.

Interruption suspends; it does not cancel, resolve, or replace displaced work.

### Queue until safe

Queue a consequential, time-bounded event that can wait without crossing its
material consequence boundary, including:

- a material approval or decision with sufficient response time;
- a newly unblocked dependency or significant change in another Matter;
- a strong Watson proposal lacking immediate risk;
- a contradiction, source degradation, or monitoring deviation requiring prompt
  assessment but not invalidating the current act;
- a commitment becoming due after the next safe point.

Queue order follows Attention Priority, not arrival order. Each claim retains its
deadline and is promoted when its waiting assumption ceases to hold.

### Passive awareness

Passive awareness applies when information may affect later reasoning but
currently requires no judgment or changed intent:

- non-material observation or variation inside guardrails;
- progress or completion creating no new consequence;
- a relevant but non-urgent contribution;
- a low-confidence pattern, similarity, or Watson suggestion;
- a future review or return condition not yet reached.

It remains retrievable and attributable without demanding acknowledgment or
implying acceptance.

### Never interrupt

These never justify interruption on their own:

- activity, recency, unread status, volume, popularity, or presence;
- routine completion, status chatter, duplicates, or successful sync;
- navigation, search, inspection, or conversation mechanics;
- a rejected, withdrawn, superseded, or out-of-authority proposal;
- Watson requests for engagement or conversational continuity;
- speculative urgency without material consequence or provenance;
- events irrelevant to the actor or outside authorized scope;
- stale events whose current applicability is unknown;
- commercial, gamified, aesthetic, or implementation-driven prompts.

## 2.3 Interruption authority

- The owner controls ordinary Focus and may deliberately change or decline it.
- The system may apply deterministic policy to verified canonical inputs and
  temporarily suspend Focus for a qualifying protective concern.
- Watson may recommend an interruption with basis and uncertainty but cannot
  authorize its claim, accept judgment, or hold Focus captive.
- A source supplies authoritative facts or external obligations; emitting an
  alert does not give it control of Management OS Focus.
- A delegate acts only within explicit scope and duration.
- A previous mute, deferral, or rejection cannot suppress a new non-delegable
  protective obligation.

Except for deterministic protective enforcement, the owner decides whether a
queued or recommended concern becomes new Focus.

## 2.4 Provenance, history, and accountability

Every interruption claim preserves:

- stable interruption identity;
- affected and displaced Matters;
- originating actor/system and source reference;
- observed, event, received, and evaluation times;
- claimed consequence and time-to-consequence;
- priority factors and policy version;
- authority or protective-duty basis;
- uncertainty, freshness, and source condition;
- why queueing was insufficient;
- the displaced Focus Context Envelope.

Unverified provenance cannot impersonate a verified interruption. Exceptional
protective treatment under uncertainty must state that uncertainty and require
bounded revalidation.

Interruption history is append-only in meaning and records classification,
justification, displaced Focus and unfinished intent, system/Watson/source/human
origin, acknowledgment, acceptance, rejection, deferral, expiry, supersession,
invalidation, explicit Matter or Focus choice, and eventual return, abandonment,
transfer, or adoption. Corrections extend history. Navigation references
Operational Memory and source histories; it does not create a competing account
of consequential domain change.

For every interruption the system must answer:

1. What displaced Focus?
2. Which Matter and consequence were involved?
3. Why could it not wait?
4. Which facts, policy, and authority supported it?
5. What uncertainty or staleness existed?
6. Who disposed of it, and how?
7. What work remained unfinished?
8. How and when can it resume?

Rejection never deletes the proposal or basis. Any resulting change to domain
truth, lifecycle, Current Situation, authority, or Decision requires its own
source-owned, authorized act.

# 3. Context Recovery Contract

## 3.1 Single Context Envelope

This section specifies mandatory information for the existing canonical Context
Envelope. It creates no second container and requires no copied domain facts.
References suffice when identity, version, authority, and availability survive.
The envelope must be reconstructable from canonical state and attributable
history. Non-derivable intent must be explicitly preserved, not inferred.

## 3.2 Mandatory minimum

| Category | Mandatory information |
|---|---|
| Identity | Matter identity and recognizable designation; active, closed, or reopened posture; owner and applicable delegate |
| Origin and destination | Context begun from; context entered; reason; intended return, transfer, or adoption |
| Authoritative present | Accepted Current Situation reference/version; last consequential change; source availability and freshness |
| Professional intent | Explicit purpose, question, judgment, or act in progress; why it mattered; completion or safe-point condition |
| Focus | Primary Focus; required supporting foci; inspected subject; active, suspended, transferred, or abandoned condition |
| Working context | Working Set reference/version; material neighborhood; dependencies, contradictions, guardrails, and required sources |
| Unfinished work | Last meaningful completed act; pending change/judgment; unresolved question; next justified act; unvalidated assumptions |
| Authority | Responsible actor; required authority; current authority condition; delegation scope/duration; missing authority |
| Change since departure | Consequential delta; what remained unchanged; event/source/observation times; conflicts and supersession |
| Interruption | Identity, origin, reason, class, disposition, displaced Focus, and reliable return target |
| Return condition | Professional condition for resumption/completion; valid target; alternatives if the original no longer exists |
| Integrity | Baseline time; policy version; freshness; stale, partial, unavailable, disputed, or inferred fields; last validation |

“Next justified act” is a professional continuation statement, not a generated
command. It may state that no act is justified pending authority, evidence, time,
or source recovery.

## 3.3 Recovery by circumstance

The mandatory minimum always applies. Additionally:

- **Reload, crash, or restart:** restore the last durable safe context; identify
  uncommitted or indeterminate acts; reconcile source history before continuation;
  never infer success from a request.
- **Matter change:** preserve separate envelopes; record switch reason and return
  intent; never blend Working Sets, Focus, or authority.
- **Short interruption:** preserve exact unfinished intent and interruption
  disposition; resume from the return condition, not merely a destination.
- **Next day or week:** add freshness validation and an attributable delta;
  distinguish new facts, unchanged context, and stale assumptions.
- **Extended absence:** validate ownership, authority, priority, sources,
  deadlines, dependencies, Decisions, guardrails, and interruptions; provide a
  consequence-ordered delta rather than an activity replay.
- **Transfer:** preserve prior intent as attributed history; identify transfer
  authority, effective time, scope, responsibilities, unresolved conditions, and
  explicit adoption or revision by the new owner. Silence is not adoption.
- **Reopening:** bind prior closure, residual conditions, return trigger, new
  evidence or recurrence, and current authority to the same Matter identity.
- **Degraded source:** identify stale/unavailable references and resulting limits;
  never substitute cached or inferred information as current truth.

## 3.4 Validity and recovery test

An envelope is stale when a mandatory fact materially bearing on intent,
authority, priority, or continuation exceeds its freshness boundary or conflicts
with a newer canonical event. A stale envelope remains prior-context history,
cannot silently reclaim current status, identifies fields for revalidation,
cannot support an irreversible or authoritative act until relevant conditions
are revalidated, and is superseded rather than overwritten.

Recovery fails safely when identity, authority, or source integrity cannot be
established. The system preserves the last known context and states the
limitation rather than fabricating continuity.

Recovery is sufficient only when the responsible human can answer:

- What Matter is this, and who has authority now?
- Why was I working here?
- What was accepted then, and what is authoritative now?
- What changed while attention was elsewhere?
- What remains unresolved or unfinished?
- What consequence or dependency makes it matter?
- What may I decide or do, and what may I not?
- What is the next justified act or return condition?

# 4. Navigation Authority

## 4.1 System automation

The system may:

- preserve and restore Focus and Context Envelopes;
- evaluate deterministic priority/interruption rules against qualified inputs;
- verify freshness, authority preconditions, deadlines, dependencies, and policy;
- classify into the least disruptive justified event class;
- queue, deduplicate, expire, or re-evaluate claims under policy;
- suspend and offer restoration of Focus for protective interruption;
- record attributable navigation/interruption history;
- detect invariant violations, stale context, source conflict, and incomplete
  recovery;
- reconstruct derived orientation without inventing non-derivable meaning.

Automation is custodial and coordinative, not domain judgment.

## 4.2 Human decision

An authorized human must:

- choose between genuinely tied or policy-indeterminate Matters;
- establish or revise ordinary intent;
- adopt new primary Focus after a temporary act;
- accept, reject, or defer Watson interruption recommendations;
- abandon preserved context or select a different return;
- interpret disputed consequence, materiality, or acceptable risk not decided by
  deterministic protective policy;
- accept responsibility on ownership transfer;
- authorize every consequential domain act.

## 4.3 Watson recommendations

Watson may identify a possible priority change, interruption condition,
dependency risk, contradiction, invalid source, or stale envelope; recommend a
Matter, Focus shift, safe point, deferral, revalidation, or recovery path; explain
basis, alternatives, uncertainty, and consequence; summarize traceable recovery
delta; and withdraw or supersede a proposal when evidence changes.

Watson recommendations remain proposals. Repetition, confidence, silence, or
continued work never converts them into authority.

## 4.4 Owner-only boundaries

Without an authorized owner or explicitly scoped delegate, Navigation never:

- changes the active Matter as adopted professional context;
- redefines Focus after temporary protective suspension;
- creates, revises, accepts, or resolves Current Situation;
- creates or accepts Judgment, Decision, Relationship, Hypothesis, contradiction
  resolution, Outcome, stabilization, closure, reopening, or ownership transfer;
- changes Matter lifecycle or authority;
- accepts Watson proposals or infers consent;
- waives material unresolved consequence;
- declares unfinished work complete or abandoned;
- overwrites intent or history.

The system may technically restore or temporarily present context. Only the
human adopts it as professional intent.

# 5. Canonical Navigation Laws

Law IDs are permanent review references. Reordering sections must not renumber
them. An **Independent Navigation Law** governs attention coordination in this
document. A **Derived Navigation Constraint** applies an identified owning
canonical contract to Navigation without claiming ownership of its domain truth.

## 5.1 Attention Priority

| ID and canonical name | Classification | Normative statement | Canonical source for derived constraint | Conformance consequence |
|---|---|---|---|---|
| **NAV-01 — Admissible Priority Basis** | Independent Navigation Law | Priority derives only from the factors in §1.2 and never from UI, notification, engagement, or raw activity semantics. | — | **Fail** if any forbidden proxy independently changes priority. |
| **NAV-02 — Priority Is Lifecycle-Neutral** | Derived Navigation Constraint | Priority and lifecycle remain orthogonal; Navigation cannot infer or change lifecycle from attention. | Canonical Product Operating Model — §1 “Complete Operational Lifecycle” and §3 “Navigation invariant”. Navigation consequence: lifecycle state neither grants nor removes attention by itself. | **Fail** if priority causes, implies, or suppresses a Matter lifecycle transition. |
| **NAV-03 — Honest Priority Determination** | Independent Navigation Law | Equal or uncertain claims remain qualified and deterministic; no score, hidden weight, or fabricated precision may resolve them. | — | **Fail** if identical inputs yield different results or an opaque rank resolves an honest tie. |
| **NAV-04 — Priority Is Not Notification** | Independent Navigation Law | Notification level, delivery, repetition, acknowledgment, and dismissal do not determine priority. | — | **Fail** if delivery semantics alter a governance class without material canonical change. |
| **NAV-05 — Lower Priority Preserves Access** | Independent Navigation Law | Lower priority never erases identity, access, history, or return conditions. | — | **Fail** if de-prioritization hides or destroys recoverable professional context. |

## 5.2 Interruption

| ID and canonical name | Classification | Normative statement | Canonical source for derived constraint | Conformance consequence |
|---|---|---|---|---|
| **NAV-06 — Interruption Class Exclusivity** | Independent Navigation Law | At classification time an event belongs to exactly one of the four classes in §2.2; reclassification requires attributable material change. | — | **Fail** if an event occupies multiple classes or changes class through representation or delivery. |
| **NAV-07 — Material Interruption Threshold** | Independent Navigation Law | Interruption is permitted only when the complete test in §2.1 passes and waiting creates a non-acceptable material consequence. | — | **Fail** if a non-qualifying event displaces Focus. |
| **NAV-08 — Aggregation Does Not Manufacture Urgency** | Independent Navigation Law | Weak-signal volume or repetition cannot escalate priority unless aggregation establishes a new, evidenced, attributable material consequence. | — | **Fail** if count alone escalates a signal or aggregation loses provenance. |
| **NAV-09 — Interruption Preserves Return** | Derived Navigation Constraint | Interruption suspends Focus and must preserve its unfinished intent and reliable return; it never means cancellation, resolution, consent, or abandonment. | Canonical Matter Experience — §3 “Attention Flow” and §5 “Context Continuity”. Navigation consequence: displacement remains reversible to preserved professional intent. | **Fail** if interrupted work is silently replaced, completed, or abandoned. |

## 5.3 Context Recovery

| ID and canonical name | Classification | Normative statement | Canonical source for derived constraint | Conformance consequence |
|---|---|---|---|---|
| **NAV-10 — Navigation Preserves Matter Identity** | Derived Navigation Constraint | Movement, recovery, transfer, closure, and reopening retain the same Matter identity and keep Matters isolated. | Canonical Product Operating Model — §1 “Complete Operational Lifecycle”, §2 “Matter Experience”, and “Reopening”; Workbench Canonical Domain Model — “1. Matter / Identity”. Navigation consequence: reopening or recovery is never presented as a new Matter. | **Fail** if continuity duplicates, blends, or replaces a Matter. |
| **NAV-11 — Single Canonical Context Envelope** | Derived Navigation Constraint | Navigation preserves and reconstructs the existing Context Envelope; it creates no parallel context container or copied source of truth. | Workbench Canonical Domain Model — “12. Context Envelope”; Canonical Product Operating Model — §3 “Operational Navigation Architecture”. Navigation consequence: recovery references canonical state and history. | **Fail** if Navigation owns a duplicate envelope or competing facts. |
| **NAV-12 — Non-Derivable Intent Is Explicit** | Derived Navigation Constraint | Professional intent is explicitly preserved or reported missing; it is never inferred from activity, destination, or presence. | Canonical Matter Experience — §5 “Context Continuity”. Navigation consequence: recovery states the prior purpose and unfinished judgment or admits that it cannot. | **Fail** if mechanics are presented as professional intent. |
| **NAV-13 — Recovery Does Not Invent Truth** | Derived Navigation Constraint | Recovery never invents state, execution, Outcome, intent, acceptance, or consent; unknown and stale fields remain qualified. | Workbench Canonical Domain Model — “Canonical invariants”; Canonical Matter Experience — §5 “Context Continuity” and §6 “Operational Confidence”. Navigation consequence: failed continuity is visible and bounded. | **Fail** if stale, unavailable, or indeterminate information impersonates current truth. |
| **NAV-14 — Baseline, Delta, and Present Stay Distinct** | Derived Navigation Constraint | Recovery distinguishes the prior baseline, attributable subsequent change, and current canonical truth. | Operational Dynamics — §4 “Context Preservation” and §7 “Operational Memory”. Navigation consequence: return after absence is a consequential delta, not an activity replay. | **Fail** if history and current state are merged or change cannot be attributed. |

## 5.4 Authority

| ID and canonical name | Classification | Normative statement | Canonical source for derived constraint | Conformance consequence |
|---|---|---|---|---|
| **NAV-15 — Navigation Never Creates Authority** | Derived Navigation Constraint | Navigation never creates, transfers, expands, diminishes, or infers authority. | Workbench Canonical Domain Model — “Authority model”; Canonical Product Operating Model — §3 “Navigation invariant”. Navigation consequence: navigation acts require and expose authority but do not confer it. | **Fail** if selection, visibility, activity, automation, or presence changes authority. |
| **NAV-16 — Owner Controls Ordinary Focus** | Derived Navigation Constraint | The owner controls ordinary Focus; the system may only enforce bounded protective interruption and Watson may only recommend. | Workbench Canonical Domain Model — “13. Focus / Authority” and “Authority model”; Canonical Matter Experience — §6 “Operational Confidence”. Navigation consequence: system and Watson cannot adopt professional Focus. | **Fail** if automation or Watson adopts ordinary Focus for the owner. |
| **NAV-17 — Delegation Is Explicit and Bounded** | Derived Navigation Constraint | Delegation preserves source, scope, duration, effective time, attribution, historical owner context, and explicit adoption by the receiving human. | Canonical Matter Experience — §6 “Delegation and substitute authority”; Workbench Canonical Domain Model — “Owner authority”. Navigation consequence: presence and activity never prove delegation. | **Fail** if authority is inferred or historical ownership is overwritten. |
| **NAV-18 — Navigation Never Accepts Judgment** | Derived Navigation Constraint | Visibility, availability, selection, arrival, silence, and navigation mechanics never imply acceptance or professional judgment. | Workbench Canonical Domain Model — “Foundational distinctions”, “Owner authority”, and “Watson authority”. Navigation consequence: a separate source-owned authorized act is required. | **Fail** if a navigation action accepts a proposal or domain claim. |

## 5.5 History and Provenance

| ID and canonical name | Classification | Normative statement | Canonical source for derived constraint | Conformance consequence |
|---|---|---|---|---|
| **NAV-19 — Interruption Is Attributable** | Independent Navigation Law | Every interruption preserves the basis, sources, times, authority, uncertainty, classification, disposition, displaced Focus, and return. | — | **Fail** if a reviewer cannot reconstruct why displacement occurred. |
| **NAV-20 — Consequential History Is Append-Only** | Derived Navigation Constraint | Consequential history is append-only in meaning; correction extends rather than rewrites it. | Workbench Canonical Domain Model — “9. Operational Memory” and “History and change”; Operational Dynamics — §7 “Operational Memory”. Navigation consequence: navigation changes remain attributable and inspectable. | **Fail** if correction or recovery erases prior consequential context. |
| **NAV-21 — Navigation History Is Not Domain History** | Derived Navigation Constraint | Navigation references Operational Memory and source histories and never creates a competing consequential record. | Workbench Canonical Domain Model — “9. Operational Memory”; Canonical Product Operating Model — “Historical Inspectability”. Navigation consequence: domain outcomes remain owned by their canonical source. | **Fail** if telemetry or navigation state becomes the only account of a domain consequence. |
| **NAV-22 — Source Emission Does Not Capture Focus** | Derived Navigation Constraint | A source supplies facts only within its authority; emitting an event or urgency label does not control Focus. | Workbench Canonical Domain Model — “14. Operational Event” and “System authority”. Navigation consequence: source facts pass the interruption test rather than command attention. | **Fail** if source emission automatically displaces Focus. |

## 5.6 Lifecycle Neutrality

| ID and canonical name | Classification | Normative statement | Canonical source for derived constraint | Conformance consequence |
|---|---|---|---|---|
| **NAV-23 — Mechanics Do Not Mean Progression** | Derived Navigation Constraint | Activity, completion, location, selection, and route mechanics never imply lifecycle progression. | Canonical Product Operating Model — §1 “Complete Operational Lifecycle” and “Navigation invariant”. Navigation consequence: movement cannot advance, close, or reopen a Matter. | **Fail** if navigation mechanics mutate or represent an unsupported Matter lifecycle transition. |
| **NAV-24 — Closure Quiets but Preserves** | Derived Navigation Constraint | Closure quiets attention while preserving identity, history, and valid return conditions. | Canonical Product Operating Model — “Closed”, “Closing”, and “Reopening”. Navigation consequence: Closed is not deletion and a valid reopen trigger remains recoverable. | **Fail** if closure erases context or permanently suppresses a valid trigger. |
| **NAV-25 — Reopening Preserves Identity** | Derived Navigation Constraint | Reopening binds prior closure, residual conditions, new trigger, current authority, and new Focus to the existing Matter. | Canonical Product Operating Model — “Reopening”; Canonical Matter Experience — “Negative Conformance Scenarios / Reopening”. Navigation consequence: the earlier professional history remains inspectable. | **Fail** if reopening creates a replacement Matter or hides closure context. |
| **NAV-26 — Priority Cannot Change Lifecycle** | Derived Navigation Constraint | No priority or interruption class creates, resolves, transfers, closes, or reopens a Matter. | Canonical Product Operating Model — §1 “Complete Operational Lifecycle” and §3 “Navigation invariant”. Navigation consequence: attention posture is not a Matter lifecycle transition command. | **Fail** if classification changes canonical lifecycle. |

## 5.7 Domain Ownership

| ID and canonical name | Classification | Normative statement | Canonical source for derived constraint | Conformance consequence |
|---|---|---|---|---|
| **NAV-27 — Navigation Coordinates Attention Only** | Derived Navigation Constraint | Navigation coordinates attention and never owns Matter, Current Situation, Evidence, Relationship, Decision, Outcome, or other domain truth. | Workbench Canonical Domain Model — “Domain boundary” and “Canonical entities”; Canonical Product Operating Model — §3 “Navigation invariant”. Navigation consequence: navigation uses references and qualified facts only. | **Fail** if Navigation becomes a domain source of truth. |
| **NAV-28 — Proximity Creates No Relationship** | Derived Navigation Constraint | Sequence, proximity, similarity, movement, or shared visibility never creates a Relationship. | Workbench Canonical Domain Model — “4. Relationship” and “Canonical relationship model”. Navigation consequence: traversal cites an existing Relationship or remains non-semantic. | **Fail** if navigation topology manufactures a domain Relationship. |
| **NAV-29 — Evidence Authority Is Preserved** | Derived Navigation Constraint | Navigation never creates Evidence, promotes an Artifact to Evidence, or changes source authority. | Workbench Canonical Domain Model — “3. Artifact” and “Foundational distinctions”. Navigation consequence: presentation never changes epistemic authority. | **Fail** if attention or placement changes evidentiary status. |

## 5.8 Watson Boundaries

| ID and canonical name | Classification | Normative statement | Canonical source for derived constraint | Conformance consequence |
|---|---|---|---|---|
| **NAV-30 — Watson Cannot Capture Attention** | Derived Navigation Constraint | Watson may recommend and explain but cannot interrupt, retain attention, accept judgment, or raise priority covertly for conversational convenience. | Workbench Canonical Domain Model — “10. Watson Proposal” and “Watson authority”; Operational Dynamics — §8 “Watson in Operational Dynamics”. Navigation consequence: every proposal remains attributable, rejectable, and non-authoritative. | **Fail** if confidence, repetition, or conversation mechanics become authority. |
| **NAV-31 — Navigation Is Watson-Independent** | Independent Navigation Law | Priority, interruption, recovery, and failure handling remain operable without Watson. | — | **Fail** if Watson unavailability removes core navigation governance. |

## 5.9 Failure and Degradation

| ID and canonical name | Classification | Normative statement | Canonical source for derived constraint | Conformance consequence |
|---|---|---|---|---|
| **NAV-32 — Degradation Fails Visibly** | Independent Navigation Law | Missing, stale, conflicting, or unavailable inputs remain qualified; the least disruptive safe behavior applies and limitations are visible. | — | **Fail** if degradation fabricates certainty, silently escalates, or permits unsupported irreversible action. |
| **NAV-33 — Implementation Cannot Weaken Governance** | Independent Navigation Law | UI form, icon, route, animation, automation, caching, or implementation order cannot weaken any law in this document. | — | **Fail** if representation changes semantics, authority, classification, or deterministic verdict. |

# 6. Failure Scenario Conformance

Each scenario below deliberately begins with a violating condition. Therefore
each verdict is **Fail**. A conforming implementation must produce the stated
system behavior; the table does not relabel correct behavior as failure.

| Scenario ID | Scenario name | Starting condition | Governance violation | Expected professional consequence | Expected system behavior | Applicable navigation laws | Verdict |
|---|---|---|---|---|---|---|---|
| **FS-01** | Browser refresh | Refresh occurs during an unresolved act and only the destination is restored. | Intent, indeterminate execution, and return context are lost. | The owner may repeat an act or make a judgment from false continuity. | Restore the last durable Context Envelope; reconcile canonical history; expose indeterminate acts and required revalidation. | NAV-11, NAV-12, NAV-13, NAV-14, NAV-32 | **Fail** |
| **FS-02** | Crash or forced restart | A crash occurs during consequential work and restart assumes the last request succeeded. | Recovery invents execution and current state. | Duplicate or contradictory action may occur. | Preserve operation and Matter identities; reconcile source history; qualify unknown outcomes; resume only from a valid return condition. | NAV-10, NAV-13, NAV-14, NAV-20, NAV-32 | **Fail** |
| **FS-03** | Multiple interrupted Matters | Several interrupted Matters are blended into one recovery queue or Focus. | Matter isolation and single primary Focus are broken. | Intent, authority, and evidence cross-contaminate Matters. | Keep separate envelopes and histories; classify each event once; order by justified priority; require explicit owner choice for honest ties. | NAV-03, NAV-06, NAV-09, NAV-10, NAV-11 | **Fail** |
| **FS-04** | Return after long absence | Old context is restored as current without freshness or authority checks. | Historical context impersonates present truth. | The owner acts on expired authority, deadlines, sources, or assumptions. | Validate ownership, delegation, priority, dependencies, sources, guardrails, and deadlines; show baseline, delta, and current truth separately. | NAV-13, NAV-14, NAV-17, NAV-32 | **Fail** |
| **FS-05** | Delegated Matter | Presence or activity is treated as acceptance of ownership. | Navigation manufactures authority and erases transfer context. | Work may be performed outside scope with unclear accountability. | Expose current holder, delegation source, scope, duration, effective time, historical owner, unresolved work, and explicit adoption. | NAV-15, NAV-17, NAV-18, NAV-20 | **Fail** |
| **FS-06** | Reopened Matter | A reopen trigger creates a new Matter or discards closure history. | Stable identity and lifecycle ownership are violated. | Prior reasoning, residual risk, and accountability are fragmented. | Reuse Matter identity; join closure, residuals, trigger, current authority, and new Focus; preserve complete history. | NAV-10, NAV-24, NAV-25, NAV-26 | **Fail** |
| **FS-07** | Monitoring interruption | Any monitoring deviation interrupts immediately regardless of consequence or safe point. | Severity/notification is conflated with priority and interruption. | Focus churn obscures genuine protective events. | Apply the complete interruption test; classify into exactly one class; retain baseline and provenance; queue when waiting is safe. | NAV-01, NAV-04, NAV-06, NAV-07, NAV-19 | **Fail** |
| **FS-08** | Rejected proposal during interruption | Rejecting Watson's proposal erases its basis or resolves source facts. | Proposal disposition is treated as domain judgment. | Unresolved consequence may disappear without authorized resolution. | Record rejection; preserve proposal and source facts separately; return deliberately; reconsider only after material change. | NAV-09, NAV-18, NAV-20, NAV-21, NAV-30 | **Fail** |
| **FS-09** | Stale or degraded Context Envelope | A stale envelope supports an irreversible or authoritative act without qualification. | Degraded context impersonates current truth. | Invalid judgment or execution occurs under false confidence. | Mark affected fields; block unsupported consequential action; obtain attributable delta; supersede rather than overwrite prior context. | NAV-11, NAV-13, NAV-14, NAV-20, NAV-32 | **Fail** |
| **FS-10** | Weak-signal aggregation escalation | Repeated weak signals automatically become P0 or Interrupt Immediately. | Volume is treated as consequence and Watson/system escalation is hidden. | Professional attention is captured by noise and provenance is obscured. | Preserve individual provenance; require a new evidenced material consequence; let Watson recommend transparent reconsideration only; otherwise retain the justified class. | NAV-01, NAV-03, NAV-06, NAV-08, NAV-19, NAV-30 | **Fail** |

# 7. Risk Control Disposition

| Risk | Disposition | Controlling laws and control | Residual risk / required correction |
|---|---|---|---|
| Opaque priority scoring | **Controlled by canonical law** | NAV-01 and NAV-03 restrict inputs and require deterministic, explainable ties without hidden weights. | Policy mappings still require review when canonical inputs change. |
| Governance reduced to notification semantics | **Controlled by canonical law** | NAV-04 and NAV-33 separate governance classification from delivery and representation. | Delivery implementations must retain the classification record. |
| Duplication of domain truth | **Controlled by canonical law** | NAV-11, NAV-21, NAV-27, NAV-28, and NAV-29 require references to owning models and histories. | Cached references require freshness and availability controls under NAV-32. |
| Interruption inflation | **Controlled by canonical law** | NAV-06, NAV-07, NAV-08, and NAV-09 impose exclusivity, materiality, aggregation, and return controls. | Threshold policies require scenario-based architecture review. |
| Authority leakage into automation or Watson | **Controlled by canonical law** | NAV-15, NAV-16, NAV-18, NAV-30, and NAV-31 preserve human and source authority boundaries. | Protective enforcement must remain narrowly deterministic and auditable. |
| Fragmented consequential history | **Controlled by canonical law** | NAV-19, NAV-20, and NAV-21 require inspectable provenance and source-owned append-only meaning. | Storage design must demonstrate cross-source reconstruction. |
| Delegation-by-presence | **Controlled by canonical law** | NAV-15 and NAV-17 prohibit inferred authority and require visible delegation contracts. | None at governance level; implementation must prove all required fields. |

No Critical risk remains without a canonical control disposition. No listed risk
requires correction before final canonical review.

# 8. Cross-Canonical Responsibility Matrix

| Model | Authority retained by the model | Navigation's permitted relationship and non-appropriation check |
|---|---|---|
| **Artifact** | Identity, Matter scope, provenance, source reference, epistemic and lifecycle conditions | Use qualified references as context; never create, copy, reclassify, or promote Evidence through attention. |
| **Relationship** | Semantics, endpoints, provenance, confidence, acceptance, and lifecycle | Traverse or cite connections; never manufacture one from sequence, proximity, similarity, or movement. |
| **Operational Memory (Canonical)** | Append-only consequential history, ordering, attribution, correction, and reconstruction | Retrieve history explaining priority, interruption, change, and return; never create a parallel timeline. |
| **Canonical Matter Experience** | Professional journey, dominant concern, cognitive integrity, confidence, and human continuity test | Coordinate attention without creating a second journey or lifecycle. |
| **Canonical Product Operating Model** | Matter lifecycle, Product Zones, authority, source ownership, Product Map, and downstream cross-zone Context Envelope requirements | Govern movement among contexts; never turn Navigation into lifecycle progression, Zone ownership, or Context Envelope ownership. |
| **Workbench Laws and Canonical Domain Model** | Matter, Current Situation, Focus, Working Set, Inspection, Context Envelope, Watson Proposal, Operational Event, and actor authority | Preserve and restore subjects; never redefine identity, ownership, authority, or lifecycle. |
| **Operational Dynamics** | Stable Focus, consequential movement, quiet periphery, non-rearranging work, and attributable navigation transitions | Navigation preserves stable Focus, changes emphasis only for governed consequence, keeps the periphery quiet, avoids constant rearrangement, and attributes navigation transitions. It does not own behavioral state or motion semantics. |
| **Canonical Iconography Research** | Advisory symbol research, construction concerns, and accessibility observations | Research is not semantic authority. Navigation semantics precedes representation; decorative causality is prohibited. Canonical Visual Semantics (Canonical Review Candidate) is the intended semantic owner and must be approved before a future icon library implements it. |

Operational Navigation is downstream of these models. On conflict, the owning
canonical model governs domain truth and this document governs only attention
coordination. A navigation need requiring an owning-model change returns to
canonical architecture review.

# 9. Architecture Readiness Gates

M4 may begin only when every applicable gate has a **Pass** verdict. Reviewers
use the evidence question directly: **Pass** when all stated conditions are
demonstrated, **Fail** when any is contradicted or missing, and **Not Applicable**
only when the reviewed design contains no behavior in the gate's stated scope.

| Gate | Deterministic evidence required |
|---|---|
| **Attention Priority Contract** | Every priority input is admissible under §1.2; distinctions in §1.7 and aggregation rule in §1.8 are preserved; ties expose the same verdict for identical inputs. |
| **Interruption Contract** | Every event has exactly one class; immediate interruption passes all §2.1 conditions; reclassification cites a material change. |
| **Context Recovery Contract** | The single Context Envelope contains or qualifies every mandatory field and passes §3.4. |
| **Authority Boundary** | System, owner, delegate, Watson, and source powers map to §4 without implied authority. |
| **Explainability Contract** | Every priority and interruption claim exposes inputs, provenance, policy, time, uncertainty, authority, disposition, and return. |
| **History Boundary** | Consequential changes are reconstructable through Operational Memory/source history and Navigation creates no competing truth. |
| **Recovery Safety** | Failure, absence, reopening, transfer, source degradation, and indeterminate acts cannot invent continuity. |
| **Matter Isolation** | Each interrupted Matter retains separate Focus, Working Set, authority, and Context Envelope. |
| **Staleness Contract** | Freshness boundaries and revalidation prevent prior context from impersonating the present. |
| **Watson Independence** | Priority, interruption, recovery, and visible degradation work with Watson unavailable. |
| **Negative Authority Proof** | No navigation act changes Matter, Current Situation, Judgment, lifecycle, Evidence, Relationship, Outcome, authority, or source history. |
| **Canonical Model Conformance** | Responsibility-matrix checks pass and no substitute aggregate, lifecycle, semantics, or source of truth exists. |
| **Delegation Visibility Gate** | Future Navigation shows current authority holder, delegation source, scope, duration, effective time, and historical owner context. Presence or activity never denotes authority. |
| **Historical Inspectability Gate** | Consequential navigation changes and interruption bases are inspectable; priority reconsideration has attributable history; recovery preserves prior professional intent; current state remains distinct from historical navigation context. |

These are architecture gates, not UI acceptance criteria. No percentages,
subjective quality scores, hidden weighting, or opaque ranking formulas are
permitted. Two reviewers given the same canonical inputs and applicability must
reach the same verdict.

# 10. Internal Validation

| Check | Result |
|---|---|
| Navigation laws have stable IDs and classifications | **Pass — 33** |
| Every Derived Navigation Constraint names an owning source and navigation consequence | **Pass — 22** |
| Interruption classes are mutually exclusive | **Pass** |
| Priority distinctions are explicit | **Pass** |
| Weak-signal aggregation escalation is prohibited | **Pass** |
| Failure scenarios use the complete conformance structure | **Pass — 10** |
| Risks have formal control dispositions | **Pass — 7** |
| Operational Dynamics and Canonical Iconography Research are in the responsibility matrix with advisory status | **Pass** |
| Delegation visibility and historical inspectability are separate gates | **Pass** |
| Conformance verdicts are deterministic | **Pass** |

# 11. Architecture Verdict

```text
Approved as Canonical
Ready for Canonicalization
M4 not started
```

All required M4.0 hardening corrections are resolved at the governance level.
Operational Navigation Governance is the single canonical source of navigation
laws, constraints, readiness gates, attention governance, interruption
governance, and recovery governance. It does not own navigation architecture,
layers, the navigation transition graph, projection state, Dynamic Operational
Rail semantics, or the navigation context model. Those belong exclusively to
Canonical Operational Navigation.

Governance controls conformance without owning domain truth, lifecycle,
authority, or the Workbench-owned Context Envelope. Canonicalization does not
start M4.
