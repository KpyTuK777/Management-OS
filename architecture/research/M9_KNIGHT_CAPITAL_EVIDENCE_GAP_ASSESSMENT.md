# M9 Knight Capital Evidence-Gap Assessment

## Status

```text
Research Assessment
Non-canonical
Claim-bounded
No walkthrough authority
No Replay authority
No validation authority
No implementation authority
```

# 1. Purpose and Evidence Boundary

This artifact provides a bounded, claim-specific Evidence-gap assessment for a
possible future historical reconstruction of **Knight Capital — 2012 software
deployment and trading-loss incident**. It identifies what the fixed public record
supports, what requires qualification, what remains unknown, what would be
inference, what would be impermissible invention, and which gaps may constrain a
future walkthrough or Replay.

It is not a new historical narrative, chronology correction, Root Cause analysis,
walkthrough, Replay, validation, recommendation, architecture change, or
implementation artifact.

```text
Source presence ≠ Evidence sufficiency
Regulatory finding ≠ complete historical record
Chronological placement ≠ causal attribution
Observed action ≠ known rationale
Public disclosure ≠ information available to every actor
Missing Evidence ≠ proof that an event did not occur
Unknown ≠ permission to infer
```

## Fixed inputs

| Fixed input | Commit | Blob |
| --- | --- | --- |
| Source Manifest | `5e8fd625f8c33c9359c49f4d7380a967cc39dbb5` | `18141a68af8763be19a1ed85cb55560dfecd1ba2` |
| Bounded Chronology Assessment | `8fe4758267eb33339fcfe084aee764532c64ff80` | `6809b99e9f6bbf4907a6b111da4f9737a82c4187` |
| Published Case Selection Decision | `6786bb21fb003125c0cafecedc59f2530a7a34fc` | `eea695025b4c7ed661e302ca2087e24dc299e060` |
| Preparation Transition | `b7d52084a0471afba23e517c9f38b1938e37f74e` | `7fff75551be7bd8ab34d2cd436c7db72c2c8c262` |

Only the fixed ten-source manifest and fixed chronology assessment inform the
substantive assessment. No source has been added, and no fixed-source claim has
been silently supplemented.

# 2. Claim Classes

Evidence sufficiency is assessed separately for these 17 classes:

1. Context claims
2. Technical-state claims
3. Deployment claims
4. Activation claims
5. Alert and detection claims
6. Human-awareness claims
7. Decision-occurrence claims
8. Decision-owner claims
9. Decision-rationale claims
10. Response-action claims
11. Containment claims
12. Actual Change claims
13. Immediate Outcome claims
14. Multidimensional Outcome claims
15. Causal attribution claims
16. Remediation claims
17. Organizational Learning claims

These classes are not collapsed into a single sufficiency judgment.

# 3. Assessment Labels

The assessment uses only descriptive labels:

- **materially supported**
- **supported with qualification**
- **partially supported**
- **fragmented**
- **retrospectively supported**
- **disputed**
- **materially absent**
- **unknowable from current public record**

Labels describe the fixed record under the stated claim boundary. They are not
scores, totals, grades, rankings, validation results, or readiness Decisions.

# 4. Claim-by-Claim Assessment

## KC-CC01 — Context claims

### Claim identity

Statements about Knight, SMARS, the NYSE Retail Liquidity Program, automated market
access, and the regulatory and operational setting surrounding the release.

### Potential supporting sources

P-R1 SEC order; P-R3 SEC roundtable transcript; P-R4 proposed Regulation SCI;
P-C3 third-quarter Form 10-Q; P-C4 2012 Form 10-K; S-J1 Reuters report.

### What is materially supported

**Assessment: materially supported for high-level institutional and system context;
partially supported for internal operating context.** The fixed record identifies
the firm, system function, planned RLP participation, relevant market-access rule,
and broader automated-trading setting.

### Required qualification

Most detailed internal context comes from the October 2013 SEC order. Broader policy
sources post-date the incident and are not incident findings. Company filings use
securities-reporting scope.

### Missing Evidence

Internal architecture, operating model, staffing, release governance, workload,
contemporaneous priorities, role definitions, and complete pre-release environment.

### Prohibited inference

Do not infer schedule pressure, management intent, cultural norms, or universal
actor knowledge from the launch date or later regulatory framing.

### Walkthrough implication

High-level context may be used as historical Observation. Internal operating context
may be used only as qualified reconstruction or held unknown.

## KC-CC02 — Technical-state claims

### Claim identity

Statements about code, flags, server configuration, SMARS behavior, Power Peg,
PMON, the 33 Account, and production-system state.

### Potential supporting sources

P-R1 SEC order; P-C1 August 2 press release; P-C3 Form 10-Q; P-C4 Form 10-K.

### What is materially supported

**Assessment: retrospectively supported.** The SEC order describes the intended
code replacement, reused flag, eight-server deployment difference, activated code
path, order-routing behavior, monitoring properties, and certain control states.

### Required qualification

The detailed state is a later regulatory finding within a settled proceeding. The
company sources describe the issue at a higher level and do not independently
verify the server-level account.

### Missing Evidence

Raw source code, binaries, hashes, configuration snapshots, dependency state,
runtime traces, complete logs, database state, and independent forensic report.

### Prohibited inference

Do not claim a complete technical mechanism, exhaustive failure mode, or sole Root
Cause. Do not treat the prose description as a verified reproduction of production.

### Walkthrough implication

May be used in the historical branch with explicit retrospective and source-
authority qualification. Unsupported implementation detail must be excluded.

## KC-CC03 — Deployment claims

### Claim identity

Statements about the preparation, staged deployment, server coverage, review, and
completion of the RLP software release.

### Potential supporting sources

P-R1 SEC order; P-C1 August 2 press release; P-C3 Form 10-Q; P-C4 Form 10-K.

### What is materially supported

**Assessment: retrospectively supported.** The SEC order places staged deployment
from July 27 on successive days, states that new code was not copied to one of eight
servers, and describes absence of a required second-technician review and written
SMARS deployment procedures.

### Required qualification

Exact server-by-server timing, commands, checks, and acceptance are not in the
public record. Company statements support only that the issue related to software
installation.

### Missing Evidence

Change ticket, release plan, deployment script, console output, checklist, peer
review, approval, rollback plan, test record, and configuration verification.

### Prohibited inference

Do not identify a technician, infer negligence or intent, claim that no check of any
kind occurred, or equate a deployment statement with verified production state.

### Walkthrough implication

Staged deployment and the later-found configuration difference may be presented as
qualified historical reconstruction. Individual conduct and acceptance rationale
must remain unknown.

## KC-CC04 — Activation claims

### Claim identity

Statements that flagged RLP-eligible orders activated Power Peg behavior on the
differently configured server and generated continuing child orders.

### Potential supporting sources

P-R1 SEC order; P-C1 August 2 press release; P-C3 Form 10-Q; P-C4 Form 10-K.

### What is materially supported

**Assessment: retrospectively supported.** P-R1 describes differentiated processing
across the servers and activation of the Power Peg code by the repurposed flag.

### Required qualification

The source gives a regulatory prose account, not a complete execution trace. The
company sources do not publish comparable mechanics.

### Missing Evidence

First triggering order, precise timestamp, routing trace, call stack, runtime state,
parent/child order linkage, code-level stopping logic, and exchange acknowledgments.

### Prohibited inference

Do not turn activation into proof of complete causality, infer that all erroneous
orders had one identical path, or conflate deployed code with activated behavior.

### Walkthrough implication

May be used only as retrospectively supported historical reconstruction. Fine-
grained mechanics not stated in P-R1 must be excluded.

## KC-CC05 — Alert and detection claims

### Claim identity

Statements about pre-open BNET emails, their delivery, recognition, diagnostic use,
and later monitoring of accumulating positions.

### Potential supporting sources

P-R1 SEC order.

### What is materially supported

**Assessment: retrospectively supported for message generation and later-described
monitoring; fragmented for detection.** P-R1 reports messages beginning around 8:01
a.m., 97 before open, non-action before open, senior observation of positions at
open, and limitations of PMON.

### Required qualification

The SEC states that the emails were not designed as system alerts and were generally
not reviewed. Message generation, delivery, reading, recognition, diagnosis, and
escalation are different claims.

### Missing Evidence

Complete email stream, recipient list, read receipts, alert-routing logic, PMON
screens, precise observations, chat or call records, escalation records, and actor-
specific interpretation.

### Prohibited inference

Do not say that every recipient saw or ignored an alert, that a specific person
recognized the defect, or that detection occurred at the first generated message.

### Walkthrough implication

Message generation and later-described monitoring may be historical Observations
with qualification. Human recognition and detection timing must remain unknown.

## KC-CC06 — Human-awareness claims

### Claim identity

Statements about what any technician, recipient, senior person, manager, or other
actor knew, understood, believed, or should have known at a particular time.

### Potential supporting sources

P-R1 SEC order; limited attributed company statements in P-C1 through P-C4; S-J1
Reuters report.

### What is materially supported

**Assessment: materially absent and, for many actor-time propositions, unknowable
from current public record.** P-R1 supports that senior personnel observed positions
and that personnel undertook response activity, but it does not reconstruct each
actor's understanding.

### Required qualification

Organizational receipt or observation is not shared awareness. Later official
knowledge cannot be projected into the historical actor view.

### Missing Evidence

Interviews, testimony, internal messages, calls, meeting records, individual screens,
role-specific data access, contemporaneous notes, and explicit acknowledgments.

### Prohibited inference

Do not assign common knowledge, awareness of causation, awareness of consequence,
foreknowledge, deliberate disregard, or hindsight-derived expectations to actors.

### Walkthrough implication

Actor awareness must generally be held unknown. Only explicitly attributed
observations may enter the historical branch, with narrow wording.

## KC-CC07 — Decision-occurrence claims

### Claim identity

Statements that a bounded choice among alternatives occurred during design,
deployment, pre-open handling, live response, stabilization, financing, or regulatory
disposition.

### Potential supporting sources

P-R1 SEC order; P-C1 August 2 press release; P-C2 August 6 Form 8-K; P-C3 Form 10-Q;
P-C4 Form 10-K.

### What is materially supported

**Assessment: fragmented.** Some organizational choices are evidenced by executed
actions, particularly financing and settlement undertakings. Other windows show
activity without a record sufficient to distinguish deliberate Decision, routine
execution, omission, or emergent response.

### Required qualification

An action can show that something was done without revealing the decision boundary,
alternatives, approval, or deliberation.

### Missing Evidence

Decision records, alternatives, proposals, approval chains, incident command log,
meeting minutes, contemporaneous rationale, and explicit acceptance records.

### Prohibited inference

Do not invent a Decision merely because a future Replay needs one. Do not transform
non-action, code state, or response activity into a fixed attributable Decision.

### Walkthrough implication

Executed organizational actions may be historical Observations. Decision occurrence
must be qualified or held unknown according to each temporal window.

## KC-CC08 — Decision-owner claims

### Claim identity

Statements identifying the accountable human or organizational authority for a
specific historical Decision.

### Potential supporting sources

P-R1 SEC order; P-C2 August 6 Form 8-K; P-C3 Form 10-Q; P-C4 Form 10-K.

### What is materially supported

**Assessment: materially absent for operational windows; partially supported at
institutional level for financing and regulatory disposition.** Sources identify
teams, senior personnel, company action, respondent, and regulator, but generally
not a fixed accountable human for the operational choices.

### Required qualification

Role, participation, signature, execution, and accountability are not
interchangeable. Institutional attribution does not establish a named human owner.

### Missing Evidence

Authority matrix, delegation, release sign-off, incident-command assignment,
approval record, board or committee record, and named operational Decision record.

### Prohibited inference

Do not assign ownership based on job title, seniority, technical access, execution
of an action, or later regulatory responsibility.

### Walkthrough implication

Operational Decision owners must remain unknown. Institutional owners may be named
only for attributable corporate transactions or regulatory instruments.

## KC-CC09 — Decision-rationale claims

### Claim identity

Statements explaining why a historical actor or organization selected, omitted,
continued, reversed, contained, financed, settled, or remediated an action.

### Potential supporting sources

P-R1 SEC order; P-C1 through P-C4 company records. These sources provide limited
purpose statements, not complete rationale.

### What is materially supported

**Assessment: materially absent.** Stated purposes exist for RLP participation,
some immediate corporate actions, and regulatory undertakings. Complete
contemporaneous reasoning, alternatives, trade-offs, and actor-specific rationale do
not.

### Required qualification

Stated purpose, later explanation, legal framing, and contemporaneous rationale are
distinct. Observed sequence does not reveal why an actor acted.

### Missing Evidence

Decision memoranda, meeting records, internal communications, alternatives,
constraints, risk acceptance, contemporaneous explanations, and attributable
testimony.

### Prohibited inference

Do not write plausible motives, schedule or commercial pressure, risk appetite,
confidence, negligence, panic, or reasoning as historical fact.

### Walkthrough implication

Missing rationale must be held unknown and excluded from the historical branch.
Later alternative reasoning could appear only in a separately labelled Replay or
reflection branch if separately authorized.

## KC-CC10 — Response-action claims

### Claim identity

Statements about diagnosis, live-system work, removal of RLP code, stopping order
flow, software removal, and position management during or immediately after the
incident.

### Potential supporting sources

P-R1 SEC order; P-C1 August 2 press release; P-C3 Form 10-Q; P-C4 Form 10-K.

### What is materially supported

**Assessment: retrospectively supported but fragmented.** P-R1 describes technology-
team activity and removal of RLP code from seven servers. P-C1 reports later
software removal and trade-out. P-R1 reports cessation after approximately 45
minutes.

### Required qualification

Exact ordering, timing, command authority, intended effect, diagnosis, and
verification are not public. Company statements and regulatory findings describe
different levels and times.

### Missing Evidence

Incident log, call tree, commands, action timestamps, hypotheses, approvals,
communications, system state after each action, and containment verification.

### Prohibited inference

Do not construct a seamless response sequence, name an incident commander, or claim
that an action was knowingly correct or incorrect at event time.

### Walkthrough implication

Named response actions may be qualified historical reconstruction. Sequence,
rationale, authority, and verification must remain fragmented or unknown.

## KC-CC11 — Containment claims

### Claim identity

Statements that abnormal order flow, affected software, erroneous positions, and
immediate operational or financial exposure were contained or stabilized.

### Potential supporting sources

P-R1 SEC order; P-C1 August 2 press release; P-C2 August 6 Form 8-K; P-C3 Form 10-Q;
P-C4 Form 10-K.

### What is materially supported

**Assessment: supported with qualification.** The SEC reports that order sending
stopped after approximately 45 minutes. Knight reported software removal and full
trade-out by August 2 and completed financing on August 6.

### Required qualification

Order cessation, software removal, position liquidation, restored operations, and
capital financing are different stabilization dimensions. None alone proves
complete containment or remediation.

### Missing Evidence

Exact stop mechanism, residual-order state, validation tests, production inventory,
acceptance criteria, position-level reconciliation, counterparty closure, and
independent verification.

### Prohibited inference

Do not treat response statements as verified containment or financing as technical
recovery. Do not claim zero residual exposure.

### Walkthrough implication

Each attributable stabilization statement may be used separately with scope and
source qualification. A single “incident contained” claim should be excluded.

## KC-CC12 — Actual Change claims

### Claim identity

Statements that intended, deployed, response, containment, or remediation Changes
became actual and verified production or organizational states.

### Potential supporting sources

P-R1 SEC order; P-C1 through P-C4 company records.

### What is materially supported

**Assessment: fragmented.** The record distinguishes intended RLP functionality,
staged deployment, later-described production difference, activated behavior,
response removal, company-reported software removal, financing, internal review,
and ordered consultant work.

### Required qualification

Visibility is strongest for actions and stated states, weaker for fidelity,
acceptance, and durability. Regulatory undertakings describe required future work,
not completed Change.

### Missing Evidence

Before/after configuration, change tickets, test and acceptance Evidence, control
implementation records, consultant output, audit results, adoption measures, and
sustained performance.

### Prohibited inference

Do not equate intended with prepared, prepared with deployed, deployed with
activated, response with containment, or remediation statement with demonstrated
remediation.

### Walkthrough implication

Discrete observed or officially described Changes may enter with qualification.
Change completion, fidelity, and sustained adoption must remain unknown.

## KC-CC13 — Immediate Outcome claims

### Claim identity

Statements about the approximately 45-minute trading activity, positions, immediate
financial loss, price and volume effects, and near-term capital impact.

### Potential supporting sources

P-R1 SEC order; P-R2 SEC press release; P-C1 August 2 press release; P-C3 Form 10-Q;
P-C4 Form 10-K; S-J1 Reuters report.

### What is materially supported

**Assessment: materially supported for published aggregates.** Sources report order,
execution, stock, share, position, loss, market, and capital aggregates. The SEC
order provides the most detailed official aggregation.

### Required qualification

Loss measures differ by date and scope: approximately $440 million, $457.6 million
trading loss, broader related costs, and more than $460 million from unwanted
positions. They must remain attributed rather than silently reconciled.

### Missing Evidence

Order-level and execution-level data, exact loss realization sequence, position
ledger, venue data, counterparty impacts, and independent reconciliation.

### Prohibited inference

Do not present one number as the complete Outcome, infer granular effects from
aggregates, or convert temporal association into complete causality.

### Walkthrough implication

Attributed aggregates are historical-branch eligible. Granular or reconciled claims
not present in the sources must be qualified, held unknown, or excluded.

## KC-CC14 — Multidimensional Outcome claims

### Claim identity

Statements spanning trading, operational control, financial, market, counterparty,
organizational, legal, regulatory, and long-term dimensions.

### Potential supporting sources

P-R1 and P-R2 regulatory records; P-C1 through P-C4 company records; S-J1 Reuters
report; P-R5 FINRA disclosure index.

### What is materially supported

**Assessment: fragmented.** Immediate trading and financial consequences are most
visible. Company filings describe capital, liquidity, order-flow, confidence,
financing, litigation, and regulatory effects. The SEC records sanctions and
undertakings.

### Required qualification

Sources have different owners, purposes, time horizons, and aggregation boundaries.
The bounded episode excludes the complete later corporate history.

### Missing Evidence

Complete customer and counterparty effects, market-wide impact, employee effects,
operational-service measures, opportunity cost, durable reputation measures, and
long-term operational performance.

### Prohibited inference

Do not reduce Outcome to financial loss, claim exhaustive harm, attribute all later
company developments to the incident, or treat outcome visibility as Learning.

### Walkthrough implication

Each supported dimension may be separately presented. A unified complete Outcome
claim must be excluded.

## KC-CC15 — Causal attribution claims

### Claim identity

Statements that a particular technical state, human action, control condition,
Decision, or omission caused a specified operational or business Outcome.

### Potential supporting sources

P-R1 SEC order; qualified company association statements in P-C1, P-C3, and P-C4.

### What is materially supported

**Assessment: supported with qualification only within authoritative source
wording; otherwise materially absent.** P-R1 links stated system and control
conditions to the regulatory findings and incident consequences. Company records
associate the issue with software installation and reported losses.

### Required qualification

Regulatory causation language has a legal and supervisory scope. Chronological
sequence, technical mechanism, legal responsibility, human responsibility, and
Root Cause are not equivalent.

### Missing Evidence

Complete causal analysis, alternative hypotheses, raw technical record, actor
information, decision rationale, counterfactual tests, independent replication, and
full market data.

### Prohibited inference

Do not establish Root Cause, sole cause, individual blame, inevitability,
preventability, or product/process causality from sequence alone.

### Walkthrough implication

Exact attributable source wording may be used with its authority boundary.
Independent causal conclusions must be excluded from the historical branch.

## KC-CC16 — Remediation claims

### Claim identity

Statements about internal review, remedial acts, changed controls, independent
consultant review, implemented recommendations, and sustained effectiveness.

### Potential supporting sources

P-R1 SEC order; P-R2 SEC press release; P-C3 Form 10-Q; P-C4 Form 10-K.

### What is materially supported

**Assessment: partially supported for review and undertaking; materially absent for
verified implementation and durability.** Company filings report an internal review
and intended measures. The SEC notes remedial acts generally and mandates a defined
consultant review and recommendation process.

### Required qualification

Commencement, intention, regulatory consideration, undertaking, recommendation,
implementation, acceptance, and sustained adoption are distinct states.

### Missing Evidence

Internal review output, itemized remediation, owner, rationale, implementation
records, consultant report, acceptance decisions, testing, audit, recurrence data,
and effectiveness measures.

### Prohibited inference

Do not claim that a particular remedy was implemented, adequate, internalized, or
effective merely because review or undertaking was announced.

### Walkthrough implication

Review and undertaking may be historical Observations. Implemented remediation and
sustained effect must remain unknown or be excluded.

## KC-CC17 — Organizational Learning claims

### Claim identity

Statements that Knight generated, adopted, retained, reused, or measured Learning
from the incident.

### Potential supporting sources

P-R1 SEC order; P-R2 SEC press release; P-C3 Form 10-Q; P-C4 Form 10-K; P-R3 and
P-R4 only as later broader regulatory context.

### What is materially supported

**Assessment: materially absent.** The fixed record shows later regulatory findings,
company statements about review and intended measures, and an ordered independent
review. It does not establish attributable original or later organizational
Learning.

### Required qualification

Regulatory findings belong to the regulator's proceeding. Company remediation
statements show announced activity, not internalized Learning. Later policy sources
are broader than this exact case.

### Missing Evidence

Contemporaneous lessons, learning owner, reflection record, changed mental model,
remediation rationale, knowledge transfer, training changes, reuse in later work,
adoption Evidence, and measured sustained effect.

### Prohibited inference

Do not label the SEC's findings as Knight's Learning, treat remediation intent as
internalized Learning, or attribute later policy change to Learning from this exact
case without source support.

### Walkthrough implication

Organizational Learning must be held unknown in the historical branch. A future
reflection may examine the absence, but may not fill it.

# 5. Decision Evidence Gaps

```text
Response action ≠ attributable Decision
Attributable Decision ≠ known rationale
Known later failure ≠ Evidence of what should have been known then
```

## KC-DW01 — Release design and preparation

- **Observable trigger:** preparation for the August 1 RLP launch.
- **Action visible:** code and system changes are retrospectively described.
- **Decision occurrence:** **suggested but identity incomplete**; no discrete fixed
  Decision record is public.
- **Accountable authority:** not visible.
- **Rationale:** stated functional purpose is visible; choice rationale is absent.
- **Actor-specific information:** not reconstructable beyond later organizational
  description.
- **Future Replay suitability:** **Replay-limited**. It could frame uncertainty
  around design review, but cannot assign a historical owner, alternatives, or
  knowledge.

## KC-DW02 — Staged production deployment

- **Observable trigger:** successive production deployment beginning July 27.
- **Action visible:** staged deployment and the later-found server difference.
- **Decision occurrence:** operational activity is supported; a bounded release or
  acceptance Decision is not reconstructable.
- **Accountable authority:** not visible.
- **Rationale:** absent.
- **Actor-specific information:** technician actions and broader awareness cannot be
  reconstructed.
- **Future Replay suitability:** **Potentially usable only around observable release
  controls**, with owner, rationale, and exact production knowledge held unknown.

## KC-DW03 — Pre-open message handling

- **Observable trigger:** automated messages beginning around 8:01 a.m.
- **Action visible:** message generation and non-action before market open are later
  officially stated.
- **Decision occurrence:** **no attributable Decision reconstructable**. Non-action
  is not proof of a deliberate choice.
- **Accountable authority:** not visible.
- **Rationale:** absent.
- **Actor-specific information:** reading, recognition, interpretation, and
  escalation are not reconstructable.
- **Future Replay suitability:** **Critically Replay-limited** if the question assumes
  recognized warning or known significance. Uncertainty itself may be retained.

## KC-DW04 — Live incident diagnosis and response

- **Observable trigger:** accumulating positions and continued order flow.
- **Action visible:** monitoring, technology-team activity, and RLP-code removal are
  retrospectively described.
- **Decision occurrence:** response action is visible, but the Decision boundary is
  incomplete.
- **Accountable authority:** team-level activity is visible; fixed owner is absent.
- **Rationale:** absent.
- **Actor-specific information:** displayed data, hypotheses, communications,
  authority, and shared understanding are fragmented or absent.
- **Future Replay suitability:** **Potentially usable but materially constrained**.
  It may focus on response controls and incomplete information, not invented human
  reasoning.

## KC-DW05 — Immediate stabilization and capital response

- **Observable trigger:** positions, loss, and capital impact.
- **Action visible:** company-reported software removal, trade-out, continued
  operations, financing search, and completed financing.
- **Decision occurrence:** supported at organizational level for financing; technical
  containment Decision remains incomplete.
- **Accountable authority:** institutional action is attributable; fixed human owner
  is not fully visible.
- **Rationale:** high-level financing purpose is visible; alternatives and complete
  deliberation are absent.
- **Actor-specific information:** incomplete.
- **Future Replay suitability:** **Potentially usable for institutional response
  questions**, but unsuitable for claims about individual intent or exact technical
  containment rationale.

## KC-DW06 — Regulatory disposition and undertakings

- **Observable trigger:** examination, investigation, settlement offer, and
  administrative proceeding.
- **Action visible:** settlement, sanctions, and consultant undertaking.
- **Decision occurrence:** supported at institutional level.
- **Accountable authority:** SEC and respondent are visible; complete human authority
  chain is not.
- **Rationale:** official regulatory basis is stated; internal settlement reasoning
  is absent.
- **Actor-specific information:** incomplete and shaped by proceeding scope.
- **Future Replay suitability:** **Suitable only for a bounded institutional
  disposition question**. It cannot reconstruct private negotiation or complete
  respondent rationale.

# 6. Change Evidence Gaps

| Change distinction | Support status | What is supported | What remains unclear | Change fidelity observable? |
| --- | --- | --- | --- | --- |
| Intended Change | **Retrospectively supported** | RLP functionality was intended to replace unused Power Peg code and reuse a flag. | Requirements, alternatives, approval, and test expectations. | Partially, through later prose only. |
| Prepared Change | **Fragmented** | Code and system changes were prepared for the RLP launch. | Build identity, test state, package contents, readiness criteria. | No. |
| Deployed Change | **Retrospectively supported** | Staged deployment began July 27; new code was placed on seven of eight servers. | Exact times, commands, reviews, and acceptance. | Partially, not independently verified. |
| Actual production configuration | **Retrospectively supported** | SEC described differing server state at activation. | Raw configuration, binaries, dependencies, and complete environment. | No direct technical Evidence. |
| Activated behavior | **Retrospectively supported** | SEC described flagged orders invoking Power Peg behavior and continuing child orders. | Exact execution path, first trigger, and all order-level behavior. | Partially through regulatory description. |
| Incident-response action | **Fragmented** | Technology work and removal of RLP code from seven servers are described. | Sequence, authority, rationale, and state after each action. | No. |
| Containment | **Supported with qualification** | Order flow stopped; company reported software removal and position trade-out. | Stop mechanism, validation, residual state, and acceptance. | Fragmented across dimensions. |
| Remediation | **Partially supported** | Internal review, intended measures, remedial acts generally, and consultant undertaking. | Specific Changes, implementation, verification, and rationale. | No. |
| Sustained adoption | **Materially absent** | No fixed source establishes durable adoption or effectiveness. | Practice use, audit, recurrence, and long-term measures. | No. |

```text
Deployment statement ≠ verified production state
Response statement ≠ verified containment
Remediation announcement ≠ demonstrated remediation
```

# 7. Outcome Evidence Gaps

| Outcome dimension | Current visibility | Observable aggregates | Missing granularity and attribution boundary |
| --- | --- | --- | --- |
| Trading behavior | **Materially supported in aggregate** | Millions of orders, more than four million executions, 154 stocks, more than 397 million shares, position aggregates, approximate duration. | Order-level chronology, exact start/stop, routing paths, and full venue data. |
| Volume and order effects | **Supported with qualification** | SEC reports volume-share and price-movement associations for subsets of stocks. | Complete market dataset, counterfactual baseline, participant-specific effects. |
| Financial loss | **Materially supported with scope qualification** | Multiple attributable figures appear across company and SEC sources. | Transaction-level reconciliation, timing, cost taxonomy, and one common measurement boundary. |
| Operational control failure | **Retrospectively supported** | SEC findings describe market-access, SMARS, capital, deployment, monitoring, and response-control conditions. | Raw control configuration, test results, operational logs, and complete control environment. |
| Counterparty and market effects | **Partially supported** | SEC describes more- and less-favorable prices for participants; journalism reports market observations. | Affected-party identities, complete financial effects, venue-by-venue allocation. |
| Organizational consequences | **Fragmented** | Capital impact, financing, liquidity pressure, reduced order flow, confidence effects, investigations, and litigation are reported. | Complete workforce, customer, reputation, strategy, and later commercial effects. |
| Regulatory consequences | **Materially supported** | Examination, formal investigation, findings, penalty, sanctions, and undertaking. | Complete investigative record, settlement deliberation, consultant output, and implementation. |
| Long-term operational consequences | **Materially absent** | Fixed sources contain limited later company context. | Sustained control performance, recurrence, service measures, and durable operating Change. |

```text
Immediate financial loss ≠ complete Outcome
Known consequence ≠ product or process causality proof
Outcome visibility ≠ Learning visibility
```

# 8. Learning Evidence Gaps

## Original contemporaneous Learning

**Assessment: materially absent.** The fixed record does not show an attributable
reflection, changed understanding, or lesson generated during the bounded incident.

## Later organizational Learning

**Assessment: materially absent.** Internal review and intended remedial measures
are stated, but no fixed source establishes what Knight learned as an organization.

## Remediation rationale

**Assessment: materially absent.** Regulatory concerns and undertaking scope are
visible; internal reasons for specific remediation choices are not.

## Changed practices

**Assessment: partially supported only as intended or required activity.** The fixed
record does not itemize and verify completed practice Changes.

## Verified sustained adoption

**Assessment: materially absent.** No longitudinal implementation, audit,
effectiveness, or recurrence Evidence is present.

## Reuse of lessons in later work

**Assessment: materially absent.** The fixed record does not attribute later work to
lessons learned from this incident.

```text
Regulatory finding ≠ organizational Learning
Remediation statement ≠ internalized Learning
Later policy ≠ attributable Learning from this exact case
```

Learning remains materially absent. This assessment does not manufacture it.

# 9. Historical-versus-Replay Usability

## Historical branch eligible

- Attributable occurrence of RLP preparation and staged deployment at the level
  stated by P-R1.
- The pre-open generation of messages at the level and time bounds stated by P-R1.
- Aggregate trading activity, positions, duration, and attributable Outcome figures.
- Attributable company disclosures, financing transaction, regulatory examination,
  investigation, order, sanctions, and undertakings.

Eligibility does not remove source, time, or scope qualification.

## Historical branch with qualification

- Server-level configuration and activation mechanics described retrospectively by
  the SEC.
- Monitoring, response activity, RLP-code removal, cessation, software removal, and
  trade-out.
- Market effects and company consequences reported at aggregate level.
- Internal review, intended remediation, and regulatory consideration of remedial
  acts.

## Replay-only input

- Alternative reasoning generated later under a separately authorized Replay.
- Alternative Decision options or control responses not asserted as historical.
- Explicitly synthetic information states that preserve the historical unknowns.
- Counterfactual Outcomes clearly separated from published history.

No Replay input is created by this artifact.

## Excluded

- Invented Decision owner or rationale.
- Unsupported actor knowledge, shared awareness, or assumed authority.
- A fabricated minute-by-minute response sequence.
- Unverified Change completion or remediation effectiveness.
- Speculative counterfactual Outcome presented as likely history.
- Root Cause or individual blame not established by the fixed sources.
- Regulatory findings represented as Knight's organizational Learning.

```text
Replay may use uncertainty ≠ Replay may fill uncertainty
Missing rationale ≠ permission to create plausible rationale
Alternative Decision ≠ historical Decision
```

# 10. Critical Gaps for Walkthrough Readiness

## Walkthrough-limiting gaps

1. **Attributable operational Decision identity is absent.** Most operational
   windows expose actions or conditions, not a fixed Decision with owner and
   rationale.
2. **Actor-specific information is absent.** The record cannot establish what each
   recipient, technician, senior person, or responder knew at each time.
3. **Decision rationale is materially absent.** A historical branch cannot explain
   why most operational actions occurred without invention.
4. **Contemporaneous technical Evidence is missing.** Detailed mechanics depend
   mainly on the later SEC order rather than public raw records.
5. **Production Change fidelity is uncertain.** Intended, prepared, deployed,
   actual, activated, response, and remediated states cannot all be directly
   verified.
6. **Response chronology is incomplete.** Exact diagnosis, action, authority,
   communication, stop mechanism, and verification sequence are unavailable.
7. **Outcome is aggregate and unevenly scoped.** Immediate dimensions are visible;
   granular, complete, and long-term dimensions are not.
8. **Original organizational Learning is absent.** A historical Learning branch
   cannot be populated from the fixed record.

## Replay-limiting gaps

1. No defensible actor-specific information state exists for most Decision windows.
2. No fixed accountable human or attributable rationale exists for the main
   operational actions.
3. The pre-open messages cannot be assumed to have been seen or understood.
4. Live-response alternatives and available diagnostics are not reconstructable.
5. Exact Actual Change and containment states are uncertain.
6. Aggregate Outcome does not support granular counterfactual estimation.
7. Missing original Learning limits comparison between historical and replay-
   generated Learning.
8. Hindsight from the 2013 SEC findings could contaminate any August 2012 Replay.

A case may remain usable for bounded historical reconstruction while being
unsuitable for a particular Replay question. This assessment makes no readiness
Decision.

# 11. Tolerable Versus Intolerable Gaps

These are research observations, not canonical gates or governance rules.

## Potentially tolerable under explicit qualification

- Missing secondary details that do not change a claim's identity.
- Incomplete minute-level timestamps where the bounded period remains explicit.
- Later official reconstruction clearly labelled as retrospective.
- Uncertain non-material sequencing that is not silently ordered.
- Incomplete long-term commercial consequences outside the bounded episode.
- Differently scoped aggregate measures retained with source attribution.

## Potentially intolerable for the affected claim

- Invented Decision owner.
- Invented rationale or alternatives.
- Assumed actor awareness or shared information.
- Unverified Change completion presented as fact.
- Causal attribution derived from sequence alone.
- Simulated Outcome presented as likely history.
- Regulatory Learning treated as organizational Learning.
- Later official findings treated as information known during the event.
- Response action treated as attributable Decision without supporting Evidence.

# 12. Evidence-Gap Matrix

| Dimension | Current support | Main gap | Risk if ignored | Permissible future treatment |
| --- | --- | --- | --- | --- |
| Context | **Partially supported** | Complete internal operating and actor context. | Retrospective context may be projected onto historical actors. | Use high-level attributable context; qualify or hold internal context unknown. |
| Evidence | **Fragmented; retrospectively supported** | Raw code, logs, datasets, messages, and investigative exhibits. | Regulatory prose may be mistaken for a complete primary technical record. | Preserve source authority and identify absent raw Evidence. |
| Decision | **Materially absent** for operational windows | Owner, authority, alternatives, rationale, actor information. | Actions or omissions may be converted into invented Decisions. | Use observed action only; keep Decision identity and rationale unknown. |
| Change | **Partially and retrospectively supported** | Fidelity across intended, deployed, actual, response, remediation, and sustained states. | Announced or described Change may be treated as verified completion. | Separate every Change state and qualify verification. |
| Outcome | **Materially supported in immediate aggregate; fragmented overall** | Granular attribution, complete dimensions, consistent scope, long-term effects. | One loss figure may replace the multidimensional Outcome. | Use attributable aggregates separately; exclude unsupported reconciliation. |
| Learning | **Materially absent** | Original and later organizational Learning, adoption, reuse, effect. | Regulatory findings or remediation statements may be mislabelled as Learning. | Hold Learning unknown; examine absence without filling it. |
| Replay integrity | **Materially constrained** | Historical information states, Decisions, rationales, alternatives, granular Outcomes. | Hindsight and plausible invention may overwrite uncertainty. | Bound Replay questions to supported Observations and preserve unknowns. |

No overall score, total, grade, ranking, or readiness result follows from this
matrix.

# 13. Questions for Walkthrough-Readiness Consideration

These questions remain unanswered and are not formal Decisions:

1. Can a meaningful walkthrough proceed when Decision rationale is materially
   absent?
2. Should a future walkthrough focus on deployment and response observations rather
   than one attributable executive Decision?
3. Which of the six Decision windows is least dependent on invented internal
   knowledge?
4. Can a Replay be bounded to operational controls rather than individual intent?
5. Is aggregate Outcome sufficient for an H3 reflection, and for which exact claim?
6. Does absent original Learning prevent an Experience Amplification assessment, or
   only constrain the comparison it could make?
7. Which claims must remain unknown throughout any walkthrough?
8. What would make the reconstruction misleading despite strong regulatory sources?
9. Can the historical branch remain useful if actor-specific information states are
   not reconstructable?
10. Which response-action claims can be used without implying a Decision owner or
    rationale?
11. How should the walkthrough preserve the different loss figures without implying
    contradiction or false reconciliation?
12. Would use of the pre-open messages inevitably import hindsight about their later
    significance?
13. Can Change fidelity be examined without claiming access to raw production
    Evidence?
14. Which Replay question would fail because Outcome granularity is insufficient?
15. How would a future artifact make visibly clear that regulatory findings are not
    organizational Learning?

# 14. Research Observations

- Public records reveal aggregate consequences more clearly than human reasoning.
- Regulatory findings strengthen bounded event reconstruction while leaving actor-
  specific awareness and rationale weak.
- The strongest technical description is retrospective; source authority does not
  remove hindsight risk.
- Replay integrity depends on preserving unknowns rather than filling them with
  plausible information states.
- Decision absence may affect the shape of a future inquiry, but this assessment
  does not prescribe that shape.
- Change is publicly visible as several non-equivalent states; fidelity and
  sustained adoption are much less visible than action.
- Immediate Outcome has comparatively strong aggregate visibility, while complete
  multidimensional and long-term Outcome remains fragmented.
- Organizational Learning is the least publicly observable required dimension in
  the fixed record.
- Multiple attributable loss figures demonstrate why scope and publication time
  must travel with a claim.
- A well-documented regulatory case can still be materially incomplete for a
  Decision-centered Replay.

These observations create no new objects, canonical methods, product capabilities,
architecture recommendations, governance rules, or recommendations.

# 15. Final Boundary

This Evidence-gap assessment:

- does not repair missing Evidence;
- does not establish complete historical truth;
- does not authorize a walkthrough or Replay;
- does not validate H3;
- does not establish Root Cause;
- does not create organizational Learning;
- does not amend canonical architecture;
- does not infer missing rationale, authority, or actor knowledge;
- does not create walkthrough readiness; and
- may only inform a separate walkthrough-readiness consideration.

```text
Published walkthrough: NOT AUTHORIZED
Replay: NOT AUTHORIZED
Validation: NOT AUTHORIZED
Architecture change: NOT AUTHORIZED
Implementation: NOT AUTHORIZED
Authority effect: NONE
```

# 16. Current Repository State

```text
Active milestone: M9 — Empirical Product Value Learning
Active stage: M9.1 — Empirical Learning Preparation
Selected hypothesis: H3 — Experience Amplification
Selected published candidate: Knight Capital — 2012 software deployment and trading-loss incident
Active backlog item: Prepare Knight Capital source manifest and chronology assessment.
Source manifest: CREATED
Chronology assessment: CREATED
Evidence-gap assessment: CREATED by this artifact after commit
Walkthrough-readiness consideration: NOT CREATED
Published walkthrough: NOT AUTHORIZED
Replay: NOT AUTHORIZED
Validation: NOT AUTHORIZED
Implementation: NOT AUTHORIZED
Authority effect of this assessment: NONE
```

The source manifest, chronology assessment, selection Decision, preparation
transition, ROADMAP, BACKLOG, candidate artifacts, synthetic walkthroughs,
canonical M7/M8, Product Vision, Systems, Product Constitution, validation state,
and implementation state remain unchanged.
