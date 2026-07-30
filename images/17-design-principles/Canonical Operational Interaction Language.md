# Canonical Operational Interaction Language

## Status

```text
Architecture & Interaction Language
Milestone M5.5
Canonical Review Candidate
```

## Purpose

This document defines the canonical professional meaning of user interaction in
Management OS. It is not a UI Kit, Design System, component library, event map,
input-device specification, or implementation contract.

Interaction is professional intent expressed through the system. A physical or
technical input may later invoke an interaction, but it does not define its
meaning. Click, hover, tap, gesture, key sequence, route, focus event, and pointer
movement are delivery mechanics. The same canonical interaction must retain its
professional meaning across input methods and accessible alternatives.

This document defines no HTML, CSS, JavaScript, framework, component, control,
menu, icon, color, typography, layout, shortcut, gesture, or implementation.

# 1. Interaction Philosophy

## 1.1 Canonical definition

A canonical interaction is:

```text
attributable actor
+ explicit professional intent
+ canonical subject and context
+ authority requirement
+ bounded expected consequence
+ continuity and recovery contract
```

An interaction is valid only when the system can explain what the actor intends,
which canonical object or projection is affected, what may change, who has
authority, what must be remembered, and how the actor can recover.

## 1.2 Interaction is not an event

A technical event answers “what input occurred?” A canonical interaction answers
“what professional act is being attempted?”

The same input can express different interactions in different contexts.
Different inputs can express the same interaction. Therefore:

- input mechanics never imply acceptance, authority, priority, lifecycle, or
  professional intent;
- repeated input never escalates consequence;
- hover or visibility never means acknowledgment;
- selection never means Focus, acceptance, or judgment;
- navigation never means lifecycle progression;
- disappearance never means rejection, completion, or abandonment.

## 1.3 Interaction contract

Every interaction has:

1. a canonical name and category;
2. one professional intent;
3. an identified subject and Matter or non-production boundary;
4. preconditions and authority;
5. a bounded expected consequence;
6. an explicit effect on the Context Envelope;
7. an explicit Operational Memory disposition;
8. a navigation consequence or statement that none exists;
9. a recovery or reversal path;
10. a fail-safe result when authority, freshness, identity, or source integrity
    cannot be established.

## 1.4 Professional action before system response

The system may reveal, preserve, validate, route, record, and explain. It cannot
infer the professional act from mechanics alone. A consequential interaction
becomes effective only after its owning canonical contract validates identity,
authority, inputs, and prerequisites for each canonical movement type.

# 2. Interaction Categories

| Category | Professional responsibility | Does not own |
|---|---|---|
| **C1 — Orientation & Retrieval** | Find, retrieve, trace, and orient without changing accepted meaning. | Priority, truth, lifecycle, Focus. |
| **C2 — Attention & Context** | Establish, deepen, suspend, resume, and recover professional intent and context. | Matter identity, authority, Context Envelope schema. |
| **C3 — Inquiry & Evidence** | Admit, inspect, compare, verify, and challenge material while preserving provenance. | Evidence authority, accepted synthesis, source truth. |
| **C4 — Reasoning & Synthesis** | Develop hypotheses, Relationships, contradictions, explanations, and proposed understanding. | Human acceptance, Current Situation authority, Decision. |
| **C5 — Judgment & Disposition** | Make or dispose of consequential proposals and professional judgments. | Authority itself, source facts, execution truth. |
| **C6 — Authority & Coordination** | Delegate, transfer, acknowledge commitments, coordinate dependencies, and expose boundaries. | Authority creation, ownership by presence, source execution. |
| **C7 — Operational Transition & Change** | Authorize and coordinate the handoff from Decision intent to source-owned change. | Execution mutations, completion truth, Outcome. |
| **C8 — Monitoring & Outcome** | Observe, assess effect, judge stabilization, and support closure or reconsideration. | Observation sources, automatic success, lifecycle without authorized act. |
| **C9 — Navigation & Recovery** | Move among professional contexts and restore meaning after interruption or absence. | Lifecycle, domain truth, a second Context Envelope or history. |
| **C10 — Learning & Reflection** | Practice, simulate, review history, and derive learning under explicit production boundaries. | Production authority, Evidence, Decision, or Outcome admission. |

Categories group intent. They are not lifecycle stages, navigation layers, or
mandatory sequences.

# 3. Canonical Interaction Vocabulary

## 3.1 Vocabulary rules

Canonical names use professional verbs. Synonyms in implementation must map to
one canonical interaction before they can produce consequence. A term is
admitted only when it has distinct intent, authority, persistence, navigation,
and recovery semantics.

Terms such as **Expand**, **Collapse**, **Reveal**, and **Follow** are not
independent professional interactions:

- Expand and Collapse are possible presentation mechanics for **Deepen Context**
  and **Quiet Context**.
- Reveal is a system response used by **Inspect**, **Trace**, or **Explain**.
- Follow maps to **Trace Lineage**, **Traverse Relationship**, or **Navigate**,
  depending on explicit intent.
- Confirm is not admitted as a generic verb because it ambiguously means source
  verification, claim confirmation, acknowledgment, acceptance, Decision, or
  completion. The precise canonical interaction must be used.
- Escalate is not admitted as an unqualified act. The actor may **Request
  Reclassification**; priority or interruption changes only under Navigation
  Governance.

## 3.2 Vocabulary inventory

| ID | Interaction | Category | Canonical intent |
|---|---|---|---|
| **OI-01** | Search | C1 | Form a source-neutral retrieval query over authorized scope. |
| **OI-02** | Filter View | C1 | Narrow a projection by explicit criteria without changing canonical participation or truth. |
| **OI-03** | Retrieve Context | C1 | Bring an identified Matter, object, or preserved professional context into available attention. |
| **OI-04** | Trace Lineage | C1 | Follow provenance, revisions, events, or source references to explain how present meaning arose. |
| **OI-05** | Traverse Relationship | C1 | Move along an existing named Relationship without creating a new semantic connection. |
| **OI-06** | Review | C1 | Deliberately examine material sufficiently to understand its current meaning and disposition needs. |
| **OI-07** | Adopt Focus | C2 | Establish one owner-adopted primary question or subject for current professional work. |
| **OI-08** | Inspect | C2 | Temporarily deepen attention into one subject while preserving the primary context and return. |
| **OI-09** | Compare | C2 | Hold two or more identified subjects in a bounded comparative context without merging them. |
| **OI-10** | Deepen Context | C2 | Request more relevant detail around the same professional object and intent. |
| **OI-11** | Quiet Context | C2 | Reduce non-primary context while preserving retrieval, state, and meaning. |
| **OI-12** | Suspend Context | C2 | Preserve unfinished intent and release current attention without resolving or abandoning it. |
| **OI-13** | Resume Context | C2 | Re-adopt a valid suspended context after freshness, authority, and change checks. |
| **OI-14** | Admit Material | C3 | Introduce an attributable Artifact or source reference into one Matter without asserting truth. |
| **OI-15** | Verify Source | C3 | Check source identity, integrity, authorization, or calculation within explicit scope. |
| **OI-16** | Qualify as Evidence | C3 | Establish that admitted material supports a precise claim within stated scope and limits. |
| **OI-17** | Challenge Claim | C3 | Record a material reason that weakens, disputes, or limits a claim without erasing it. |
| **OI-18** | Record Observation | C3 | Preserve an attributable observation or measurement separately from interpretation. |
| **OI-19** | Propose Relationship | C4 | Suggest explicit semantics between identified endpoints for authorized review. |
| **OI-20** | Accept Relationship | C4 | Authoritatively admit proposed Relationship semantics into the Matter. |
| **OI-21** | Develop Hypothesis | C4 | Create or revise a testable explanatory proposition with basis and uncertainty. |
| **OI-22** | Test Hypothesis | C4 | Compare a Hypothesis with relevant Evidence, contradictions, alternatives, and limits. |
| **OI-23** | Identify Contradiction | C4 | Record a material incompatibility between identifiable claims, observations, or accepted understanding. |
| **OI-24** | Resolve Contradiction | C4 | Authoritatively state how a contradiction was resolved, superseded, bounded, or left unresolved. |
| **OI-25** | Propose Synthesis | C4 | Form an attributable candidate revision to Current Situation without accepting it. |
| **OI-26** | Explain | C4 | Produce a traceable account of basis, alternatives, uncertainty, consequence, or change without changing truth. |
| **OI-27** | Acknowledge | C5 | Record that an actor has seen and understood a specified item sufficiently for its acknowledgment contract. |
| **OI-28** | Accept Proposal | C5 | Authoritatively adopt the professional consequence of a specified proposal under the owning model. |
| **OI-29** | Reject Proposal | C5 | Authoritatively decline a specified proposal while preserving proposal, basis, and reason. |
| **OI-30** | Defer Judgment | C5 | Preserve a pending judgment with reason, responsible actor, boundary, and return trigger. |
| **OI-31** | Revise Current Situation | C5 | Authoritatively supersede the accepted synthesis with a traceable new version. |
| **OI-32** | Record Decision | C5 | Preserve an authorized Decision, rationale, alternatives, uncertainty, risk, and intended condition. |
| **OI-33** | Reconsider Decision | C5 | Reopen professional judgment because attributable evidence, Outcome, authority, or conditions changed. |
| **OI-34** | Delegate Authority | C6 | Establish explicit bounded authority for another human with source, scope, duration, and effective time. |
| **OI-35** | Accept Delegation | C6 | Explicitly adopt delegated responsibility and current intent within the granted scope. |
| **OI-36** | Transfer Ownership | C6 | Authoritatively change accountable ownership while preserving prior ownership and unresolved context. |
| **OI-37** | Record Commitment | C6 | Preserve an attributable promise or obligation with owner, scope, due condition, and consequence. |
| **OI-38** | Coordinate Dependency | C6 | Establish or revise an explicit dependency reference, responsibility, and consequence boundary. |
| **OI-39** | Request Reclassification | C6 | Ask for attributable priority or interruption reconsideration based on new material consequence. |
| **OI-40** | Authorize Operational Transition | C7 | Approve a complete Decision-to-Operational-Transition handoff without manufacturing execution truth. |
| **OI-41** | Record Adaptation | C7 | Preserve an authorized change to the coordination plan, scope, dependency, or guardrail. |
| **OI-42** | Report Deviation | C7 | Record an attributable departure from intended condition or approved Operational Transition boundary. |
| **OI-43** | Pause Operational Transition | C7 | Authoritatively suspend coordinated change while preserving unfinished commitments and restart conditions. |
| **OI-44** | Stop Operational Transition | C7 | Authoritatively end coordinated change with reason, resulting exposure, and required reconsideration. |
| **OI-45** | Establish Observation Contract | C8 | Define expected condition, baseline, measures/sources, interval, guardrails, and interpretation authority. |
| **OI-46** | Review Monitoring | C8 | Examine observations against the approved contract without inferring Outcome. |
| **OI-47** | Assess Outcome | C8 | Authoritatively interpret observed operation against Decision intent and stated limits. |
| **OI-48** | Judge Stabilization | C8 | Authoritatively determine sustainability within evidence window, guardrails, and residual risk. |
| **OI-49** | Close Matter | C8 | Record a supported final disposition, residuals, continuing obligations, and return triggers. |
| **OI-50** | Reopen Matter | C8 | Authoritatively return the same Matter to Assessment under a valid trigger and current authority. |
| **OI-51** | Navigate | C9 | Deliberately adopt another valid professional context while preserving origin, intent, and return. |
| **OI-52** | Return | C9 | Re-adopt a preserved origin or recovery target after validity checks. |
| **OI-53** | Interrupt | C9 | Governedly suspend Focus for a qualifying concern under one exclusive interruption class. |
| **OI-54** | Dispose Interruption | C9 | Accept, reject, defer, transfer, or complete the interrupting concern without erasing its basis. |
| **OI-55** | Recover Context | C9 | Reconstruct and offer the best valid professional context after failure, absence, or degradation. |
| **OI-56** | Abandon Context | C9 | Deliberately end preserved professional intent without asserting that underlying work is resolved. |
| **OI-57** | Inspect Memory | C10 | Query consequential history while keeping historical and current truth distinct. |
| **OI-58** | Reflect | C10 | Form an attributable learning account from history, basis, consequences, and alternatives. |
| **OI-59** | Begin Practice | C10 | Enter an explicitly non-production case or simulation with isolated authority and provenance. |
| **OI-60** | Complete Practice Attempt | C10 | Preserve an attempt disposition and learning history without production effect. |
| **OI-61** | Admit Learning to Production | C10 | Request a separate authorized owning-model act to introduce qualified learning into production scope. |

# 4. Interaction Grammar

## 4.1 Grammar fields

Every vocabulary item is governed by seven required fields:

- **Professional intent**
- **Expected consequence**
- **Authority requirement**
- **Context Envelope effect**
- **Operational Memory effect**
- **Navigation consequence**
- **Recoverability**

“No domain change” is a valid expected consequence. “No Memory event” is a valid
Memory disposition. Neither may be inferred from implementation convenience.

## 4.2 Orientation and attention grammar

| Interaction IDs | Professional intent | Expected consequence | Authority requirement | Context Envelope effect | Operational Memory effect | Navigation consequence | Recoverability |
|---|---|---|---|---|---|---|---|
| **OI-01 Search** | Express retrieval question. | Derived result projection only. | Authorized search scope. | May preserve query and origin when consequential to return. | None unless search becomes attributable professional intent or supports a later act. | None until a result context is deliberately adopted. | Clear query or return to origin. |
| **OI-02 Filter View** | Narrow current projection. | Visibility changes only. | Access to current projection. | No canonical change; optional local view preference. | None. | None. | Remove criteria without altering subjects. |
| **OI-03 Retrieve Context** | Make known context available. | Context is reconstructed or qualified. | Access plus valid identity. | Loads the existing envelope or reports limits. | Retrieval event only when consequential to recovery/audit. | Destination remains available, not adopted. | Return to origin or discard retrieval. |
| **OI-04 Trace Lineage** | Explain origin/evolution. | Historical projection appears. | Historical access. | Preserves current context as return. | None; reads canonical Memory/source history. | Enters Memory Inspection only if adopted. | Return with any discovered material delta exposed. |
| **OI-05 Traverse Relationship** | Follow named semantics. | Related subject becomes available/active context. | Endpoint access. | Adds relationship, origin, destination, and return. | Consequential navigation only when context is adopted. | Maps to a valid navigation transition, not causality creation. | Return along preserved origin. |
| **OI-06 Review** | Deliberately understand an item. | Review state may change only through explicit acknowledgment contract. | Viewer/contributor as applicable. | Preserves subject, purpose, and origin. | Record only if acknowledgment or consequential judgment occurs. | Inspection or no navigation. | End review and restore origin. |
| **OI-07 Adopt Focus** | Establish primary professional subject. | Focus projection changes; domain truth does not. | Owner or valid delegate; bounded protective rules may suspend, not adopt ordinary Focus. | Rewrites active Focus reference and preserves displaced intent. | Consequential Focus change is attributable. | May change active context under canonical Navigation. | Restore displaced Focus if valid. |
| **OI-08 Inspect** | Deepen attention temporarily. | Inspection context begins. | Any authorized inspector; no new domain authority. | Adds inspected subject, origin, neighborhood, and return. | Only consequential acts inside Inspection are recorded. | Enters Inspection without replacing Matter/Focus. | End Inspection and restore or deliberately revise context. |
| **OI-09 Compare** | Evaluate identified subjects together. | Comparative projection only unless separate judgment follows. | Access to all subjects. | Preserves identities, versions, scope, comparison question, origin. | None by default. | Context may deepen; subjects do not merge. | Exit comparison to origin or adopt one subject explicitly. |
| **OI-10 Deepen Context / OI-11 Quiet Context** | Change relevant detail around same intent. | Presentation/projection changes only. | Access to detail. | Envelope meaning remains stable. | None. | No canonical navigation transition. | Reverse disclosure without state loss. |
| **OI-12 Suspend Context** | Preserve unfinished work and release attention. | Context becomes suspended, not resolved. | Owner/delegate or governed interruption. | Records unfinished intent, last act, next condition, reason, return. | Consequential suspension is attributable. | Moves to another valid context or Global. | Resume after validation or abandon explicitly. |
| **OI-13 Resume Context** | Re-adopt suspended intent. | Context becomes active after validation. | Current authority and valid sources. | Applies change-since-departure and restores qualified Focus. | Consequential resumption is attributable. | Returns through NT-22 or an applicable navigation transition. | Suspend again or select another context. |

## 4.3 Inquiry and reasoning grammar

| Interaction IDs | Professional intent | Expected consequence | Authority requirement | Context Envelope effect | Operational Memory effect | Navigation consequence | Recoverability |
|---|---|---|---|---|---|---|---|
| **OI-14 Admit Material** | Add attributable material to a Matter. | New Artifact/reference; truth unchanged. | Contributor within Matter/source scope. | Adds identity, provenance, admission reason, current participation. | Canonical admission event. | May remain in current context; no Focus change implied. | Correct attribution or remove participation; admission history remains. |
| **OI-15 Verify Source** | Validate source identity/integrity. | Provenance state changes in stated scope. | Authorized verifier or accepted deterministic rule. | Updates relevant freshness/integrity qualification. | Consequential verification/challenge event. | No navigation required. | Later correction qualifies prior result. |
| **OI-16 Qualify as Evidence** | Use material to support a claim. | Evidentiary role recorded in scope. | Applicable human authority; system may calculate but not accept meaning. | Adds claim, basis, scope, limitations. | Consequential epistemic event. | May deepen Workbench; no lifecycle change. | Withdraw/supersede role with reason; history remains. |
| **OI-17 Challenge Claim** | Record material weakness/limit. | Epistemic condition becomes challenged or qualified. | Contributor may propose; authorized human governs accepted consequence. | Adds challenge, basis, affected context, unresolved question. | Proposal or accepted challenge event. | May justify Focus/reconsideration separately. | Resolve, reject, or supersede challenge without erasure. |
| **OI-18 Record Observation** | Preserve what was perceived/measured. | Observation exists; interpretation unchanged. | Authorized source/contributor. | Adds source/time/scope and related intent. | Canonical observation event/source record. | None automatically. | Correct or invalidate through attributable extension. |
| **OI-19 Propose Relationship** | Suggest named connection. | Watson/human proposal exists. | Contributor or Watson proposal authority. | Adds endpoints, semantics, basis, uncertainty. | Proposal event. | Traversal remains provisional and cannot imply acceptance. | Accept, reject, withdraw, supersede. |
| **OI-20 Accept Relationship** | Govern semantics between endpoints. | Relationship becomes accepted under owning model. | Owner or explicit delegate. | Adds accepted Relationship/version to active neighborhood. | Canonical acceptance event. | No navigation required; future traversal may use it. | Reject/supersede through new attributable event. |
| **OI-21 Develop Hypothesis** | Form/revise testable explanation. | Hypothesis version/proposal changes. | Contributor; owner controls accepted working role. | Adds question, basis, alternatives, uncertainty. | Consequential hypothesis event. | May adopt Hypothesis as Focus separately. | Revise, reject, or archive with lineage. |
| **OI-22 Test Hypothesis** | Evaluate support/challenge. | Comparative reasoning; epistemic state changes only through separate judgment. | Authorized investigator. | Adds test question, selected Evidence, contradiction, limits. | Test outcome recorded only when consequential. | No automatic movement. | Return to prior reasoning context. |
| **OI-23 Identify Contradiction** | Make incompatibility explicit. | Contradiction proposal/record exists. | Contributor/Watson may propose; owner governs accepted impact. | Adds both sides, basis, materiality, affected understanding. | Consequential contradiction event. | May justify Workbench Focus/interruption separately. | Resolve, bound, reject, or leave unresolved. |
| **OI-24 Resolve Contradiction** | Record authoritative resolution. | Status and affected understanding change. | Owner or explicit delegate. | Adds resolution, basis, affected versions, residual uncertainty. | Append-only resolution event. | May enable Decision/readiness but does not cause it. | Reopen through later contradictory evidence. |
| **OI-25 Propose Synthesis** | Offer candidate Current Situation revision. | Proposal exists; accepted synthesis unchanged. | Contributor/Watson may propose. | Preserves current version, candidate, basis, uncertainty. | Proposal event. | No lifecycle or navigation change. | Accept, reject, revise, withdraw. |
| **OI-26 Explain** | Make meaning/basis traceable. | Derived explanation only. | Access to cited material; no added truth authority. | May preserve explanation question and origin. | None unless explanation itself becomes an attributable proposal or judgment. | May enter Memory Inspection; no domain-state change. | Return to origin; regenerate from same sources. |

## 4.4 Judgment, authority, and coordination grammar

| Interaction IDs | Professional intent | Expected consequence | Authority requirement | Context Envelope effect | Operational Memory effect | Navigation consequence | Recoverability |
|---|---|---|---|---|---|---|---|
| **OI-27 Acknowledge** | Record understood receipt within a named contract. | Review/receipt state changes only. | Intended recipient or explicit proxy. | May clear pending acknowledgment while preserving unresolved meaning. | Record only when acknowledgment is consequential. | No Focus, acceptance, or priority change implied. | Correct acknowledgment; underlying facts remain. |
| **OI-28 Accept Proposal** | Adopt specified professional consequence. | Owning object/state changes through its canonical command. | Authority required by owning model. | Updates accepted object/version and preserves proposal origin. | Canonical acceptance event. | Navigation changes only through a separate valid navigation transition. | Supersede/reverse through owning model, never erase. |
| **OI-29 Reject Proposal** | Decline specified proposal. | Proposal rejected; domain facts unresolved unless separately judged. | Applicable owner/delegate. | Preserves proposal, reason, prior Focus, return. | Canonical rejection event. | Return or continued Focus is deliberate. | Reconsider only on material change or explicit review. |
| **OI-30 Defer Judgment** | Postpone judgment responsibly. | Pending state, reason, owner, horizon/trigger recorded. | Applicable decision authority. | Preserves full judgment context and return condition. | Consequential deferral event. | May return to Matter/Workbench/Global. | Resume at trigger after validation. |
| **OI-31 Revise Current Situation** | Supersede accepted synthesis. | New accepted Current Situation version. | Owner or explicit equivalent delegate. | Updates current reference; preserves prior version, basis, changed assumptions. | Canonical revision event. | May affect Focus/readiness, not automatically. | Later revision/correction; prior versions remain. |
| **OI-32 Record Decision** | Make accountable judgment. | Canonical Decision exists. | Authorized decision owner. | Adds Decision, rationale, alternatives, uncertainty, intended condition, return. | Canonical Decision event. | Operational Transition/Monitoring context requires separate valid handoff. | Reconsider through OI-33; never rewrite. |
| **OI-33 Reconsider Decision** | Reopen judgment on material change. | Decision question becomes active; prior Decision remains history. | Authorized decision owner. | Adds trigger, evidence/Outcome, affected intent, return paths. | Reconsideration event. | Enters Decision context through a canonical navigation transition. | Record revised/no-change Decision or return for inquiry. |
| **OI-34 Delegate Authority** | Grant bounded authority. | Delegation contract becomes effective when accepted if required. | Current authority holder with power to delegate. | Updates holder/source/scope/duration/effective time/historical owner. | Canonical delegation event. | Access/commands may change; context does not auto-adopt. | Expire, revoke, revise, transfer with history. |
| **OI-35 Accept Delegation** | Adopt responsibility in scope. | Delegate becomes current effective holder for named acts. | Named delegate and valid grant. | Adds adopted/revised intent and unresolved work. | Acceptance event. | Delegate may deliberately enter Matter context. | Relinquish/expire/transfer through governed act. |
| **OI-36 Transfer Ownership** | Change accountable owner. | Ownership changes under canonical contract. | Current transfer authority and receiving acceptance. | Preserves prior owner, effective time, scope, unresolved conditions, adoption. | Canonical transfer event. | Existing contexts revalidate authority. | New transfer/correction; prior ownership remains history. |
| **OI-37 Record Commitment** | Make attributable obligation explicit. | Commitment exists with owner, scope, condition, horizon. | Actor authorized to commit applicable scope. | Adds dependency/return relevance where material. | Consequential commitment event. | No automatic Focus/priority change. | Fulfill, revise, transfer, cancel with reason/history. |
| **OI-38 Coordinate Dependency** | Govern relation between dependent work. | Dependency reference/responsibility changes. | Applicable owners/source authority. | Adds direction, criticality, condition, affected contexts. | Consequential dependency event/reference. | May affect context/priority after separate evaluation. | Revise/remove with attributable basis. |
| **OI-39 Request Reclassification** | Present new basis for priority/interruption review. | Review request/proposal only. | Any authorized contributor/Watson may recommend; policy/owner decides. | Preserves old class, new evidence, consequence, uncertainty. | Proposal and later classification history. | No escalation until governance test passes. | Reject, defer, or reclassify on material evidence. |

## 4.5 Operational Transition, monitoring, navigation, and learning grammar

| Interaction IDs | Professional intent | Expected consequence | Authority requirement | Context Envelope effect | Operational Memory effect | Navigation consequence | Recoverability |
|---|---|---|---|---|---|---|---|
| **OI-40 Authorize Operational Transition** | Approve change handoff. | Operational Transition exists; execution remains source-owned. | Accountable Decision owner. | Adds intended condition, adaptations, source refs, guardrails, monitoring, return. | Canonical handoff event. | Decision → Operational Transition only after full prerequisites. | Pause/stop/reconsider; preserve Decision. |
| **OI-41 Record Adaptation** | Change authorized coordination within scope. | Operational Transition plan/reference changes. | Applicable owner and source authority. | Adds reason, scope, dependencies, guardrail effects. | Consequential adaptation event. | Remains in the Operational Transition or returns to Decision if scope is exceeded. | Supersede/reverse with source truth intact. |
| **OI-42 Report Deviation** | Expose departure from intent/boundary. | Deviation record exists; Outcome not inferred. | Source/contributor authorized to report. | Adds observed condition, threshold, time, source, consequence. | Canonical/source event. | May prompt monitoring/reconsideration after governance. | Correct/invalidate with attributable extension. |
| **OI-43 Pause Operational Transition / OI-44 Stop Operational Transition** | Suspend or end coordinated change. | Operational Transition posture changes under owning contract. | Authorized owner/source powers. | Preserves unfinished commitments, exposure, reason, restart/reconsideration. | Consequential event. | May return to Matter/Decision; no Outcome implied. | Resume only when pause conditions pass; stopped work requires new authority. |
| **OI-45 Establish Observation Contract** | Define how intent will be observed. | Monitoring pre-object contract becomes valid. | Decision owner and interpretation/source authority. | Adds baseline, measures/sources, interval, guardrails, authority. | Canonical contract event. | Enables Monitoring context. | Revise with rationale and preserve prior contract. |
| **OI-46 Review Monitoring** | Examine observations without judging Outcome. | Monitoring projection/acknowledgment only. | Authorized viewer/interpreter. | Preserves observation interval, source state, question, return. | None unless acknowledgment or issue is consequential. | Remains Monitoring/Inspection. | Return to Monitoring origin. |
| **OI-47 Assess Outcome** | Interpret observed effect. | Canonical Outcome Assessment. | Authorized interpretation owner. | Adds basis, interval, uncertainty, Decision relation, next path. | Canonical Outcome event. | May continue, reconsider, adapt, investigate, stabilize. | Later assessment qualifies/supersedes; history remains. |
| **OI-48 Judge Stabilization** | Determine sustainable intended operation. | Stabilization judgment exists. | Accountable owner/authorized judge. | Adds evidence window, guardrails, residual risk, recurrence. | Canonical stabilization event. | May support closure, never cause it automatically. | Reopen/reconsider on recurrence or new evidence. |
| **OI-49 Close Matter** | End current professional work responsibly. | Matter enters Closed via owning lifecycle. | Accountable owner. | Preserves disposition, residuals, obligations, return trigger, history. | Canonical closure event. | Active prompts quiet; Memory remains inspectable. | OI-50 reopens same Matter on valid trigger. |
| **OI-50 Reopen Matter** | Resume current work on recurrence/new evidence. | Same Matter enters Assessment. | Authorized human. | Joins prior closure, trigger, current authority, new Focus. | Canonical reopen event. | Closed → Matter/Assessment through NT-16. | May close again through supported disposition. |
| **OI-51 Navigate / OI-52 Return** | Adopt destination or preserved origin. | Navigation projection changes; domain truth does not. | Actor access/authority; protective policy only within bounds. | Carries origin, destination, reason, Focus, neighborhood, return. | Consequential navigation only. | Must map to an NT navigation transition. | Return or choose another valid context. |
| **OI-53 Interrupt** | Displace Focus for qualifying concern. | Context suspended and one interruption class applies. | Deterministic protective policy or owner adoption. | Preserves displaced Focus, basis, class, uncertainty, return. | Canonical navigation/interruption history. | NT-21. | Dispose and return through validity checks. |
| **OI-54 Dispose Interruption** | Resolve interaction demand without erasing facts. | Disposition recorded; domain consequence only through separate act. | Applicable owner/delegate. | Updates disposition and return/recovery target. | Append-only disposition event. | Return, defer, transfer, or adopt new context deliberately. | Reconsider on material change. |
| **OI-55 Recover Context** | Reconstruct meaning after failure/absence. | Best valid context offered with limitations. | System may reconstruct; human adopts ordinary intent. | Revalidates full envelope and change-since-departure. | Recovery history when consequential. | Returns meaning, not route. | Choose alternative, remain Global, or abandon explicitly. |
| **OI-56 Abandon Context** | End preserved intent deliberately. | Context no longer a return target; underlying domain work unchanged unless separately disposed. | Owner/delegate. | Records abandonment reason and remaining unresolved conditions. | Consequential abandonment event. | Returns to valid context/Global. | New intent may retrieve history; abandonment is not erased. |
| **OI-57 Inspect Memory** | Examine consequential history. | Historical projection only. | Authorized historical access. | Adds query, range, inspected event, current-truth distinction, return. | Read-only. | Enters Memory Inspection. | Return without reactivating history. |
| **OI-58 Reflect** | Derive accountable learning. | Learning account/proposal; production truth unchanged. | Authorized learner/reviewer. | Preserves source history, question, alternatives, limits. | Learning history where canonical; no production event by default. | May remain Memory/Practice. | Revise reflection; source history unchanged. |
| **OI-59 Begin Practice / OI-60 Complete Practice Attempt** | Enter/dispose non-production attempt. | Practice context/attempt history changes only. | Authorized learner/facilitator. | Carries simulation identity, provenance, authority boundary, return. | Practice history, never production Memory. | Global ↔ Practice through NT-19/20. | Resume attempt or return; no production effect. |
| **OI-61 Admit Learning to Production** | Request governed use of learning. | Proposal only until owning-model admission. | Production owner/source authority. | Separates practice origin from proposed production subject. | Practice proposal plus production event only if accepted. | No automatic cross-boundary navigation transition. | Reject/defer/revise without contaminating production. |

# 5. State, Interaction, and Consequence

| Concept | Canonical meaning | What it is not |
|---|---|---|
| **State** | Current value of an owning model's independent dimension, derived from canonical history and sources. | An input event, visual treatment, location, or intention. |
| **Interaction** | Attributable professional intent attempted through the system under a bounded contract. | State, technical event, guaranteed success, or authority. |
| **Matter lifecycle transition** | Valid change between Matter lifecycle states after prerequisites and authority pass. | Navigation movement, Operational Transition, presentation transition, or any interaction automatically. |
| **Operational Transition** | Canonical coordination object relating Decision intent to source-owned implementation. | Matter lifecycle transition, navigation transition, or execution itself. |
| **Navigation transition** | Valid movement between professional navigation contexts with continuity and return. | Matter lifecycle transition, Operational Transition, or route mechanics alone. |
| **Presentation transition** | Future visual/motion representation of change. | Domain state, professional intent, navigation transition, or authority. |
| **Decision** | Authorized professional judgment with rationale, alternatives, uncertainty, risk, and intended condition. | Selection, proposal, acknowledgment, Operational Transition, or action completion. |
| **Navigation** | Coordination and adoption of professional context with continuity and return. | Lifecycle progression, Matter lifecycle transition, or location alone. |
| **Visualization** | Representation of canonical meaning using Canonical Visual Semantics (Canonical Review Candidate). | State creation, authority, interaction, or evidence. |
| **History** | Append-only attributable record of consequential events and corrections owned by Operational Memory/source histories. | Current view, activity log, browser history, or telemetry. |
| **Feedback** | System explanation of receipt, validation, pending state, success, failure, or consequence. | The professional interaction itself or proof of domain change. |

An interaction may request one of the four canonical movements. It does not become a Matter
lifecycle transition, Operational Transition, navigation transition, or
presentation transition until
the owning model validates and records it. Visualization may expose both; it may
not collapse attempted, pending, accepted, failed, and completed meanings.

# 6. Interaction Persistence

## 6.1 Persistence classes

| Class | Meaning | Examples | Operational Memory disposition | Audit requirement |
|---|---|---|---|---|
| **P0 — Incidental mechanics** | Input activity with no professional intent established. | Pointer movement, transient disclosure mechanics, focus traversal, abandoned query text. | Never canonical Memory. | Technical telemetry only if separately governed; never professional history. |
| **P1 — Local exploration** | Reversible inspection of existing meaning without consequential adoption. | Search, filter, retrieve, compare, deepen/quiet context, ordinary Inspection, explanation. | No Memory event by default. | Preserve privacy/access controls; no audit trail unless legally or operationally required. |
| **P2 — Context consequence** | Professional intent or navigation changes while domain truth remains unchanged. | Adopt Focus, suspend/resume, Navigate, Return, Interrupt, Recover, Abandon. | Attributable navigation/context event when consequential. | Actor, time, origin, destination, reason, displaced intent, return, policy where applicable. |
| **P3 — Proposal or coordination consequence** | Candidate meaning, challenge, plan, delegation request, or coordination record affects accountable work but is not accepted domain truth. | Propose Relationship/Synthesis, challenge claim, develop Hypothesis, request reclassification, report deviation. | Append-only proposal/coordination event. | Actor/source, time, basis, scope, uncertainty, requested authority, disposition. |
| **P4 — Canonical domain consequence** | Authorized owning-model act changes accepted state or creates a canonical subject. | Accept Relationship, revise Current Situation, Decision, transfer, Operational Transition, Outcome, stabilization, closure, reopening. | Mandatory canonical Operational Event/source history. | Full actor, authority, time, basis, before/after references, consequence, correction/reversal path. |

## 6.2 Recording rules

1. Do not record every input as professional history.
2. Record every consequential domain change.
3. Record every proposal or rejection that affected accountable reasoning.
4. Record consequential Focus, interruption, delegation, recovery, and context
   disposition.
5. Read-only inspection does not mutate Memory.
6. Audit trail and Operational Memory are not synonyms: audit may record access
   or security facts; Memory preserves consequential professional meaning.
7. Telemetry cannot become evidence of intent, acceptance, authority, or
   progression.
8. A failed consequential attempt records failure only when the failure itself
   affects responsibility, safety, execution uncertainty, or recovery.
9. Corrections extend history; they never rewrite the original interaction.
10. Practice history remains isolated from production Memory until a separate
    governed admission.

# 7. Interaction Chains

Chains are common professional sequences, not mandatory workflows. Each step
retains its own authority and may stop, return, defer, or branch.

## IC-01 — Investigate toward judgment

```text
Retrieve Context
→ Adopt Focus
→ Inspect
→ Compare
→ Trace Lineage
→ Test Hypothesis
→ Propose Synthesis
→ Review
→ Revise Current Situation (authorized)
→ Record Decision or Defer Judgment
```

Inspection and reasoning do not automatically produce acceptance or Decision.

## IC-02 — Decision requiring change

```text
Record Decision
→ Establish Observation Contract
→ Authorize Operational Transition
→ Coordinate Dependency
→ Record Adaptation / Report Deviation
→ Review Monitoring
→ Assess Outcome
→ Judge Stabilization
→ Close Matter or Reconsider Decision
```

Source-owned execution occurs outside the interaction language and is referenced,
not manufactured.

## IC-03 — Execution-free Decision

```text
Record Decision
→ establish no-Operational-Transition disposition
→ Establish Observation Contract (if required)
→ Assess Outcome
or
→ Return to Matter with explicit trigger
```

## IC-04 — Contradiction-driven return

```text
Identify Contradiction
→ Challenge Claim
→ Adopt Focus
→ Compare
→ Trace Lineage
→ Resolve Contradiction
→ Propose Synthesis
→ Revise Current Situation
→ Reconsider Decision (if affected)
```

## IC-05 — Governed interruption and recovery

```text
Request Reclassification or qualifying event
→ Interrupt
→ Suspend Context
→ Inspect / Decide / Defer interrupting concern
→ Dispose Interruption
→ Recover Context
→ Resume Context or Abandon Context
```

No step erases the displaced Matter or implies completion.

## IC-06 — Delegation

```text
Delegate Authority
→ Accept Delegation
→ Retrieve Context
→ Review unresolved intent and changes
→ Adopt Focus
→ perform scoped work
→ Return / Transfer Ownership / allow delegation to expire
```

## IC-07 — Reopening

```text
Retrieve historical Matter
→ Trace Lineage
→ Inspect closure and trigger
→ Reopen Matter (authorized)
→ Recover Context
→ Adopt new Focus
→ Assess / Investigate
```

## IC-08 — Monitoring adverse effect

```text
Review Monitoring
→ Report Deviation
→ Assess Outcome
→ Interrupt if governance threshold passes
→ Reconsider Decision
→ return to Workbench or authorize adaptation
```

## IC-09 — Retrospective

```text
Inspect Memory
→ Trace Lineage
→ Compare Decision intent, Operational Transition, and Outcome
→ Explain
→ Reflect
→ Return
```

Reflection does not rewrite production history.

## IC-10 — Practice to proposed production learning

```text
Begin Practice
→ Inspect / Compare / Decide within simulation
→ Complete Practice Attempt
→ Reflect
→ Admit Learning to Production (proposal)
→ production owner accepts, rejects, or defers through owning model
```

# 8. Interaction Boundaries

## 8.1 Negative authority

Interaction Language cannot:

- create, transfer, expand, or diminish Authority;
- create Evidence through viewing, selection, comparison, or placement;
- rewrite Operational Memory or source history;
- change lifecycle through navigation, visualization, completion, or activity;
- create domain truth through repetition, automation, confidence, or system
  response;
- convert proposal into acceptance;
- convert acknowledgment into agreement;
- convert source verification into claim confirmation;
- convert action completion into Outcome or stabilization;
- create Relationship from traversal, grouping, sequence, or proximity;
- create Attention Priority from frequency, recency, count, or prominence;
- create Focus from technical focus or selection;
- create professional intent from inactivity, silence, dwell time, or continued
  use;
- use Watson as a substitute for human judgment;
- use recovery to fabricate currentness, success, or consent.

## 8.2 Command boundary

An interaction may invoke an owning-model command only when:

1. subject identity and Matter scope are valid;
2. actor identity and explicit authority are current;
3. canonical prerequisites and required inputs pass;
4. the intended consequence is stated before commitment;
5. uncertainty, source degradation, and irreversible effects are exposed;
6. concurrent change is reconciled;
7. the resulting event can be attributed and recovered;
8. failure cannot impersonate success.

## 8.3 Feedback boundary

System feedback must distinguish:

```text
intent expressed
request received
validation pending
authority missing
source unavailable
conflict detected
command accepted
domain event recorded
operation indeterminate
operation failed
recovery required
```

These conditions are not interchangeable and cannot share an ambiguous generic
“done” response.

# 9. Cross-Canonical Consistency

| Canonical model | Authority retained | Interaction Language conformance |
|---|---|---|
| **Artifact** | Identity, admission, provenance, source reference, epistemic and lifecycle conditions. | Admit, inspect, verify, qualify, challenge, and compare preserve Artifact identity and never create Evidence from mechanics. |
| **Relationship** | Semantics, endpoints, provenance, confidence, acceptance, and lifecycle. | Propose, accept, traverse, and trace are separate interactions; traversal/proximity never creates semantics. |
| **Operational Memory (Ready for Final Canonical Review)** | Append-only consequential history, correction, attribution, and reconstruction. | Persistence classes decide what is recorded; interactions extend rather than rewrite history. |
| **Canonical Matter Experience** | Professional journey, attention flow, authority, continuity, confidence, and proportionality. | Interaction chains support non-linear professional work with one Focus and explicit return. |
| **Canonical Operational Navigation** | Layers, navigation transitions, Rail, navigation projection, Context Envelope movement, recovery. | Navigate, Return, Interrupt, Suspend, Resume, and Recover map to canonical NT navigation transitions and create no lifecycle. |
| **Operational Navigation Governance** | Attention Priority, exclusive interruption, authority, provenance, degradation, and recovery laws. | Request Reclassification cannot escalate; interruption and recovery obey NAV-01 through NAV-33. |
| **Canonical Visual Semantics (Candidate)** | Semantic inventory, independent dimensions, grammar, priority, ambiguity, and persistence. | Interaction state, intent, authority, pending consequence, feedback, and history remain visually distinct. Candidate status grants no canonical authority. |
| **Canonical Product Operating Model** | Matter lifecycle, Product Zones, Decision-to-Operational-Transition handoff, Monitoring, Outcome, closure/reopening. | Consequential interactions invoke owning-model Matter lifecycle transitions only after prerequisites and authority pass. |
| **Workbench Canonical Domain Model / Workbench Laws** | Canonical entities, relationships, state dimensions, Focus, Inspection, Context Envelope, actors, authority. | Vocabulary maps to existing entities and acts; it creates no parallel object, status, authority, or event model. |

Interaction Language uses these models as inputs. It does not amend them.

# 10. Experience Validation

## IV-01 — Inspection without acceptance

The manager Inspects an Artifact. Inspection becomes locally dominant, preserves
origin and return, creates no authority, and records no Memory event unless a
separate consequential act follows.

## IV-02 — Compare Evidence

The manager Compares qualified Evidence from different sources. Identities,
versions, provenance, scopes, and limitations stay separate. Comparison creates
no Relationship, synthesis, or truth.

## IV-03 — Verify source, not claim

The manager Verifies Source identity and integrity. Provenance changes in stated
scope; the contained claim remains unconfirmed until a separate epistemic
judgment.

## IV-04 — Challenge accepted understanding

The manager Challenges a claim inside Current Situation. The challenge preserves
basis and affected version, but Current Situation remains accepted until the
owner separately Revises it.

## IV-05 — Review rejected proposal

The manager Reviews a rejected Watson proposal. Review does not reactivate or
accept it. Proposal, rejection reason, source facts, and current truth remain
distinct; return restores the originating context.

## IV-06 — Accept a proposed Relationship

The owner reviews endpoints, semantics, provenance, uncertainty, and consequence,
then uses Accept Relationship. The acceptance event—not selection, traversal, or
placement—changes Relationship status.

## IV-07 — Reject a proposal

The owner Rejects Proposal with reason. The proposal and basis remain in Memory;
rejection does not erase source facts or resolve unrelated domain conditions.

## IV-08 — Defer judgment

The decision owner Defers Judgment. Reason, responsible actor, time/trigger,
pending question, evidence basis, and return condition persist. Deferral is not
rejection, inactivity, or low priority.

## IV-09 — Record Decision

The authorized owner Records Decision with rationale, alternatives, uncertainty,
risk, and intended condition. Decision does not imply an Operational Transition, execution,
Outcome, or closure.

## IV-10 — Delegate a Matter

The owner Delegates Authority; the named human explicitly Accepts Delegation.
Scope, duration, effective time, historical owner, current holder, and unresolved
intent remain visible. Presence alone changes nothing.

## IV-11 — Return after interruption

The system offers Recover Context after the interrupting concern is disposed.
Authority, freshness, source condition, and change since departure are checked.
The owner Resumes Context or chooses another valid target; route restoration
alone is insufficient.

## IV-12 — Multiple interrupted Matters

Each Suspend Context interaction preserves a separate Matter envelope and Focus.
Global attention may order justified claims, but equal claims remain honest and
weak-signal volume cannot manufacture escalation.

## IV-13 — Recover after restart

Recover Context reconciles history and indeterminate acts. The system offers the
last valid professional meaning with limitations. It does not infer that a prior
request succeeded or that stale intent remains current.

## IV-14 — Reopen a Matter

The owner Traces Lineage, Inspects closure and trigger, then Reopens Matter under
current authority. The same Matter identity returns to Assessment; prior closure,
residuals, Decisions, and Outcomes remain history.

## IV-15 — Report deviation

An authorized source or contributor Reports Deviation with threshold, time,
source, and consequence. The report creates no Outcome, priority, interruption,
or Decision until their separate contracts evaluate it.

## IV-16 — Review monitoring

The manager Reviews Monitoring observations against the contract. Review does
not infer effect. Only an authorized Assess Outcome interaction creates Outcome
Assessment.

## IV-17 — Adverse Outcome

The interpretation owner Assesses Outcome as adverse. The manager may
Reconsider Decision, Adopt Focus in Workbench, or Record Adaptation according to
the unresolved question. Navigation never chooses the judgment automatically.

## IV-18 — Judge stabilization

The accountable judge evaluates evidence window, guardrails, recurrence, and
residual risk. Judge Stabilization records a separate professional judgment; a
favorable Outcome or completed action cannot substitute.

## IV-19 — Close Matter

The owner Closes Matter only after inspecting final disposition, residuals,
obligations, and return triggers. Closure creates lifecycle history and quiets
active prompts; it does not delete the Matter.

## IV-20 — Retrospective

The manager Inspects Memory, Traces Lineage, Compares Decision intent with
Outcome, and Reflects. All inspection is historical and read-only. Reflection
may create learning but cannot rewrite production events.

## IV-21 — Practice mode

Begin Practice creates an explicit non-production context. Inspect, Compare,
Decide, and Assess Outcome operate within simulated authority. Completing the
attempt affects only practice history.

## IV-22 — Admit practice learning

Admit Learning to Production creates a proposal with practice provenance. A
production owner must separately admit material, qualify Evidence, revise
understanding, or reject it through owning contracts.

## IV-23 — Search and filter

Search and Filter View alter retrieval projections only. Neither creates
Working Set membership, Focus, priority, acknowledgment, or history by default.

## IV-24 — Abandon context

The owner Abandons a preserved context with reason. The return target is removed,
but unresolved domain work, history, and Matter state remain unchanged unless
separately disposed.

## IV-25 — Request escalation

A contributor Requests Reclassification with new evidence and consequence.
Navigation Governance reassesses inputs. Repetition, confidence, and request
volume cannot raise priority or interruption class.

## IV-26 — Source unavailable during action

A consequential command encounters source unavailability. Feedback states that
the operation is unavailable or indeterminate, preserves the attempted intent,
and initiates recovery. It never reports completion or retries invisibly.

# 11. Readiness

## 11.1 Canonical Visual System

**Ready.** Canonical Visual Semantics (Canonical Review Candidate) can represent interaction intent, availability,
pending validation, authority, expected consequence, success/failure,
indeterminate state, history, and recovery without confusing them with domain
state.

## 11.2 Component semantics

**Ready at semantic level.** Any future component can map its affordances to
canonical OI identifiers, preconditions, consequence class, feedback states, and
accessible professional name. A component is never itself the interaction.

## 11.3 Interaction feedback

**Ready.** The feedback boundary distinguishes receipt, validation, missing
authority, source failure, conflict, acceptance, recorded consequence,
indeterminate operation, failure, and recovery.

## 11.4 Motion semantics

**Ready at semantic level.** Motion may represent receipt, a presentation transition, temporal
change, suspension, return, loading, or recovery only when it preserves the
interaction's meaning. It cannot imply urgency, authority, intelligence,
acceptance, or success.

## 11.5 Keyboard model

**Ready for design.** A keyboard mapping may invoke canonical interactions,
preserve reading/focus order, expose context, and provide equivalent authority
and confirmation boundaries. Keystrokes do not define meaning.

## 11.6 Mouse model

**Ready for design.** Pointer actions may invoke the same canonical interactions.
Hover, location, click count, or drag mechanics cannot imply review, acceptance,
Relationship, authority, or priority.

## 11.7 Touch model

**Ready for design.** Touch gestures may invoke canonical interactions only with
equivalent intent, consequence, feedback, cancellation, and recovery. Gesture
convenience cannot weaken consequential confirmation or context preservation.

## 11.8 Accessibility interaction

**Ready for design.** Every interaction has a professional name, subject,
state-independent intent, feedback sequence, consequence, and recovery path that
can be expressed without a specific input or visual signal. Accessible operation
is the canonical interaction, not a secondary translation.

## 11.9 Workbench 2.0 interaction

**Ready.** Workbench 2.0 can map inspection, comparison, focus, evidence,
reasoning, proposal, judgment, authority, navigation, recovery, monitoring, and
history to stable professional semantics without changing canonical models.

## 11.10 Deterministic readiness gate

A proposed interaction design receives:

- **Pass** when every affordance maps to one OI identifier or explicitly
  non-professional mechanic, authority and preconditions are visible,
  consequence/feedback/persistence are correct, and recovery is available;
- **Fail** when mechanics silently create intent, truth, authority, Evidence,
  lifecycle, priority, acceptance, navigation, or history;
- **Not Applicable** only when the proposal contains no interaction in the
  reviewed canonical scope.

# 12. Risks

| Risk | Canonical control | Residual review need |
|---|---|---|
| Input-event vocabulary replacing professional intent | OI identifiers and the interaction contract separate intent from mechanics. | Device-specific designs must map every action back to one OI contract. |
| Generic “confirm” collapsing authority acts | Confirm is rejected; precise verify, acknowledge, accept, decide, assess, and stabilize interactions are separate. | Future labels and commands must not reintroduce ambiguous synonyms. |
| Incidental telemetry becoming professional history | Persistence classes separate mechanics, local exploration, context, proposals, and domain consequence. | Data architecture must prevent analytics logs from becoming Memory evidence. |
| Optimistic feedback manufacturing truth | Feedback boundary separates receipt, pending validation, accepted command, recorded event, indeterminate, and failure. | Source integrations must reconcile before reporting domain success. |
| Interaction chains becoming lifecycle wizards | Chains are explicitly optional, branching, recoverable, and authority-gated. | Visual/interaction design must keep reconsideration, bypass, deferral, and return available. |
| Hidden authority through availability | Every consequential interaction states authority and owning command. | Component semantics must distinguish visible, discoverable, available, authorized, and executable. |
| Navigation gesture mutating domain state | Navigate/Return are projection changes; domain-state changes require separate authorized interactions. | Routing and state-management architecture must keep these stores separate. |
| Watson interaction capture | Watson may explain/propose but cannot accept, adopt Focus, retain attention, or decide. | Assistance patterns must remain dismissible and non-blocking. |
| Practice interaction leakage | Practice actions use isolated authority/history; production admission is separate OI-61. | M6 must preserve the boundary across all representations and feedback. |
| Vocabulary sprawl and synonym drift | New terms require distinct intent, consequence, authority, persistence, and recovery. | Maintain a governed interaction registry and reject unregistered consequential verbs. |

# 13. Open Questions

None block the Canonical Visual System.

Concrete mappings to components, keyboard sequences, pointer behavior, gestures,
feedback timing, motion parameters, accessibility platform APIs, and
implementation belong to M6 and later work.

# 14. Architecture Verdict

```text
Ready for Canonical Visual System
```

The vocabulary, category model, seven-field grammar, persistence classes,
interaction chains, boundaries, cross-canonical mapping, and experience
validation define what every professional action means independently of input
method or visual style.

## Recommendation

```text
Open M6 — Canonical Visual System
after final canonical review of this M5.5 document.
```

M6 may define concrete visual and interaction systems only by mapping them to
Canonical Visual Semantics (Canonical Review Candidate) and OI candidate contracts. It may not reinterpret professional
intent, authority, consequence, history, or recovery.
