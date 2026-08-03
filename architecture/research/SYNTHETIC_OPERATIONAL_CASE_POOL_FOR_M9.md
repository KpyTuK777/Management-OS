# Synthetic Operational Case Pool for M9

## Status

```text
Synthetic
Modeled
Training-only
Non-empirical
```

**Milestone context:** M9 — Empirical Product Value Learning

**Stage context:** M9.1 — Empirical Learning Preparation

**Artifact role:** bounded synthetic training case pool

**Evidence authority:** none

**Validation authority:** none

**Canonical authority:** none

## Purpose

This artifact provides a bounded collection of synthetic operational cases for
testing the architecture and reasoning of Management OS before work with real
operational cases. The cases are designed to exercise information separation,
relationships, human judgment, decision traceability, change fidelity, outcome
observation, attribution, uncertainty, and replay.

The collection tests the **architecture of thinking**, not product value. It is
not real operational Evidence, validation, empirical product proof, operational
observation, organizational history, or customer data. Nothing described below
asserts that an event occurred, that an organization made a Decision, that a
Change produced an Outcome, or that Management OS created value.

The six cases are deliberately varied but bounded. Together they make different
reasoning problems visible without selecting a preferred case, ranking the
cases, defining an experiment, changing M9, or modifying canonical
architecture.

## Reading Discipline

Terms such as Evidence, Decision, Change, Outcome, and Learning identify
architectural roles that the modeled material can exercise. Their use does not
promote synthetic content into historical or empirical content. Any apparent
facts, dates, quantities, roles, records, actions, and effects are fictional
scenario inputs.

For every case, the proposed Decision is a modeled human choice, the Change is
a modeled implementation of that choice, and the Outcome is a modeled
observation after the Change. Learning opportunities are questions a training
exercise could examine; they are not organizational Learning.

# 1. Repeated Order Fulfillment Breakdown

## Working title

Repeated Order Fulfillment Breakdown

## Synthetic scenario

A regional distributor repeatedly misses promised shipment dates for orders
that contain both stocked and made-to-order items. Customer service describes
the pattern as a warehouse picking problem. Warehouse supervisors point to
late production releases, while production planners cite sales changes made
after order confirmation. The same order may be represented differently in
the customer-service queue, planning board, warehouse list, and transport
booking.

For training purposes, the modeled record contains six affected orders across
three weeks, timestamped status changes, two customer escalations, a planning
note, pick-list revisions, and carrier cut-off times. Some timestamps conflict,
and no single record explains the complete breakdown.

## Operational complexity

- A repeated pattern may consist of several different local failure modes.
- Customer promise, production readiness, pick readiness, and carrier
  availability have different owners and clocks.
- The most visible failure occurs in fulfillment, but its conditions may begin
  earlier.
- Late edits, batching rules, shortages, and handoff delays may interact.
- The organization must distinguish a recurring matter from multiple related
  incidents without prematurely asserting one root cause.

## Potential preserved information

- Original customer promise and every subsequent promise revision.
- Order-line composition and stocked versus made-to-order classification.
- Source, time, author, and reason for each status or priority change.
- Production-release, picking, packing, and carrier-booking timestamps.
- Conflicting accounts from sales, planning, warehouse, and customer service.
- Missing records and unresolved discrepancies.
- Relationships among orders, interventions, owners, and observations.
- The distinction between source Evidence and later Interpretation.

## Decision

The modeled operations owner decides to introduce a daily exception review for
mixed orders and to freeze customer promise changes after the carrier cut-off
unless an accountable commercial owner explicitly approves an exception. The
Decision records rejected alternatives, assumptions, expected effects, review
date, and the human authority responsible for the choice.

## Change

The modeled Change adds an exception queue, assigns named review ownership,
records approved late promise changes, and exposes the same readiness states to
planning, warehouse, customer service, and sales. Training material preserves
the intended Change separately from what each team actually adopts.

## Outcome

The modeled post-change observation shows fewer missed promises for mixed
orders, but two expedited shipments and one increase in quoted lead time. It
also shows that one team bypassed the exception queue during a high-volume day.
The result remains mixed and does not establish causation.

## Learning opportunities

- Reconstruct a repeated operational pattern from fragmented records.
- Preserve disagreement while developing a reviewable diagnosis.
- Trace a human Decision into intended and actual Change.
- Separate fewer misses from possible displacement into expediting or longer
  promises.
- Examine whether replay reveals which assumptions were supported, weakened,
  or left unresolved.

## Why useful for Management OS

The case exercises continuity across multiple occurrences, cross-system
Evidence relationships, temporal reconstruction, competing interpretations,
decision traceability, implementation variance, and multi-factor Outcome
review. It is useful for checking whether Management OS can keep a recurring
matter coherent without flattening it into a single incident or invented root
cause.

## Explicit limitations

All organizations, orders, records, behaviors, quantities, choices, and effects
in this case are fictional. The modeled Outcome does not show that the Decision
worked, that Management OS contributed to it, or that the same pattern exists
in any real organization. Completeness of the training record is a design
choice, not evidence of operational observability.

> **This is a modeled learning scenario.**
>
> It must never be treated as:
>
> - historical Evidence;
> - validated experience;
> - empirical product learning;
> - organizational memory.

# 2. Procurement Approval Delay

## Working title

Procurement Approval Delay

## Synthetic scenario

A maintenance team requests a replacement component needed for a planned
shutdown. The purchase appears to wait for finance approval for four days.
Finance states that the request arrived without a cost-center code; procurement
states that the vendor quotation expired while technical equivalence was being
checked; the maintenance lead believed an emergency threshold permitted direct
purchase. Email, procurement workflow, and maintenance planning each show a
different version of readiness.

The modeled material includes request revisions, approval timestamps, policy
extracts, vendor quotation versions, an equipment-risk note, and ambiguous
messages about who could authorize an exception.

## Operational complexity

- Elapsed time is distributed across clarification, technical review, finance
  approval, vendor response, and requester inactivity.
- Formal authority and assumed authority do not match.
- Urgency can bias diagnosis toward the last visible approver.
- Policy compliance, equipment risk, cost, and schedule risk must be considered
  together.
- A missing field may be a local input defect or a symptom of a poor handoff.

## Potential preserved information

- Request versions and field-level changes.
- Queue entry and exit times for every approval step.
- Applicable policy version and threshold interpretation.
- Vendor quotation validity and technical-equivalence questions.
- Statements of urgency, risk, and assumed authority with their authors.
- Requests for clarification and response latency.
- Known gaps, including whether verbal approval occurred.
- Distinction among delay observation, responsibility, and causal hypothesis.

## Decision

The modeled procurement authority decides to create a bounded pre-check for
shutdown-critical requests and to require explicit routing to a named exception
authority when eligibility is disputed. The Decision does not waive policy and
does not assign blame; it records the tradeoff between earlier completeness
checking and added intake effort.

## Change

The modeled Change introduces a required readiness view covering cost center,
technical specification, quotation validity, urgency basis, and exception
authority. It also records when a request returns for clarification rather than
leaving it indistinguishable from approval waiting time.

## Outcome

The modeled observation shows shorter approval-queue time for later shutdown
requests, but longer initial preparation and one request routed unnecessarily
to the exception authority. Vendor response time remains unchanged. The
scenario does not resolve how much of the total elapsed-time difference is
attributable to the Change.

## Learning opportunities

- Decompose an apparently simple delay into owned intervals and dependencies.
- Test whether authority ambiguity is preserved rather than silently repaired.
- Distinguish policy interpretation from operational Evidence.
- Observe tradeoffs between intake completeness and total cycle time.
- Review attribution when external vendor behavior remains uncontrolled.

## Why useful for Management OS

The case tests temporal Evidence, authority boundaries, policy context,
handoffs, and the danger of attributing all delay to the most visible approval
stage. It can expose whether the system preserves both accountable human
judgment and uncertainty about where elapsed time originated.

## Explicit limitations

The procurement policy, approval path, vendor, timing, and equipment risk are
invented. The case cannot establish that a readiness check is useful in real
procurement, that any role caused delay, or that a particular authority model
is correct. It supplies no empirical basis for changing a workflow.

> **This is a modeled learning scenario.**
>
> It must never be treated as:
>
> - historical Evidence;
> - validated experience;
> - empirical product learning;
> - organizational memory.

# 3. Quality Decline After Capacity Increase

## Working title

Quality Decline After Capacity Increase

## Synthetic scenario

A small production unit increases weekly capacity by adding a second line,
using temporary operators, and raising machine speed. Two weeks later, the
reported first-pass yield declines and customer returns rise. Engineering
suspects the higher speed, supervisors point to inconsistent onboarding, and
quality staff note that a supplier batch changed at the same time. Inspection
sampling also increased, making comparison with the earlier period imperfect.

The modeled record contains line settings, staffing rosters, training
completion, material lots, inspection plans, rework logs, downtime, throughput,
and return classifications. Several variables change within the same window.

## Operational complexity

- Capacity is a bundle of simultaneous Changes rather than one intervention.
- Detection intensity changed alongside the apparent quality level.
- Product mix, supplier lot, operator experience, and equipment speed are
  plausible interacting factors.
- First-pass yield, rework, shipment volume, and customer returns have different
  denominators and time lags.
- Pressure to restore quality may encourage premature single-factor attribution.

## Potential preserved information

- Baseline and changed capacity configuration with effective dates.
- Machine settings and deviations by line and shift.
- Operator assignment, experience, and training completion.
- Supplier lot lineage and product-mix changes.
- Sampling method, sample size, inspection criteria, and criterion revisions.
- Defect, rework, scrap, throughput, and return observations with denominators.
- Competing hypotheses and evidence both for and against each.
- Known confounding factors and measurement discontinuities.

## Decision

The modeled production owner decides to keep the second line active but restore
the earlier speed for one product family, add supervised qualification for
temporary operators, and segregate the questioned material lot pending review.
The Decision records that these simultaneous actions limit causal isolation but
are accepted because of modeled customer and schedule risk.

## Change

The modeled Change records actual line speed, operator qualification coverage,
and material segregation by shift. Deviations from the intended configuration
remain visible, including one shift that uses the higher speed to recover lost
output.

## Outcome

The modeled observation shows improved first-pass yield, lower output than the
peak-capacity week, and returns that remain elevated because they lag
production. Defect concentration differs by product family and material lot.
No single intervention can be credited from the modeled information.

## Learning opportunities

- Preserve multiple plausible factors without forcing a root-cause claim.
- Compare Outcomes using appropriate denominators and observation windows.
- Trace a compound Decision into multiple Changes and implementation variance.
- Separate measurement change from operational change.
- Examine whether learning remains appropriately conditional when attribution
  is weak.

## Why useful for Management OS

The case stresses multi-factor reasoning, temporal alignment, metric semantics,
confounding, and incomplete attribution. It tests whether Management OS can
support action under uncertainty while retaining the conditions that prevent a
strong causal conclusion.

## Explicit limitations

All production data and causal candidates are modeled. The apparent quality
decline and improvement are not observed Outcomes. The scenario cannot validate
capacity practices, training, supplier controls, causal-analysis methods, or
Management OS product value.

> **This is a modeled learning scenario.**
>
> It must never be treated as:
>
> - historical Evidence;
> - validated experience;
> - empirical product learning;
> - organizational memory.

# 4. Cross-functional Sales–Operations Coordination Failure

## Working title

Cross-functional Sales–Operations Coordination Failure

## Synthetic scenario

Sales accepts a large customized order after an informal discussion with an
operations manager. The CRM records the deal as committed, while the production
plan treats it as provisional because tooling and engineering review are not
complete. Sales interprets the conversation as capacity confirmation;
operations interprets it as permission to assess feasibility. When the customer
asks for delivery confirmation, neither function can reconstruct an agreed
commitment.

The modeled record includes CRM changes, meeting notes, chat excerpts, capacity
snapshots, engineering dependencies, forecast versions, and later recollections
that disagree about the meaning of the informal discussion.

## Operational complexity

- A shared conversation carries different semantic meaning for each function.
- Forecast, opportunity, feasibility, reservation, and customer commitment are
  related but not equivalent states.
- Commercial authority and operational authority are distributed.
- Capacity information changes over time and may be treated as more certain
  than it was.
- Retrospective accounts are influenced by the later failure.

## Potential preserved information

- Original CRM state and each state transition with author and timestamp.
- Capacity snapshot available at the moment of discussion.
- Exact recorded language and provenance of notes or messages.
- Separate interpretations supplied by sales, operations, and engineering.
- Required approvals and the authority held by each participant.
- Tooling, specification, and feasibility dependencies.
- Customer-facing commitments and internal reservations.
- Unknowns where no authoritative record exists.

## Decision

The modeled commercial and operations authorities jointly decide that custom
orders may not move to committed status until a named operations owner records
feasibility and the commercial owner records acceptance of delivery risk. The
Decision preserves separate authorities rather than treating coordination as
automatic consensus.

## Change

The modeled Change adds explicit feasibility, capacity-reservation, and
customer-commitment states with attributable transitions. A short-lived
reservation can expire, and unresolved engineering dependencies remain visible
instead of being converted into implied approval.

## Outcome

The modeled observation shows fewer ambiguous commitments in the following
review window but one slower sales response and one order whose feasibility
record was completed using stale capacity information. The new states improve
traceability in the scenario without proving better commercial or operational
performance.

## Learning opportunities

- Test whether the system preserves semantic distinctions across functions.
- Reconstruct what each human could reasonably know at Decision time.
- Examine joint decisions without erasing separate authority boundaries.
- Trace how stale context can undermine a formally complete workflow.
- Replay the case from sales, operations, engineering, and customer perspectives.

## Why useful for Management OS

The case concentrates on cross-functional meaning, attributable human
judgment, authority, contextual freshness, and handoff fidelity. It checks
whether Management OS can make coordination reviewable without inventing
agreement or collapsing distinct commitments into a generic status.

## Explicit limitations

The customer, order, communications, capacity constraints, and later behavior
are fictional. The scenario neither establishes a coordination failure in a
real organization nor validates the modeled state design. It cannot demonstrate
revenue, delivery, adoption, or product-value effects.

> **This is a modeled learning scenario.**
>
> It must never be treated as:
>
> - historical Evidence;
> - validated experience;
> - empirical product learning;
> - organizational memory.

# 5. Shift Schedule Change With Unexpected Consequences

## Working title

Shift Schedule Change With Unexpected Consequences

## Synthetic scenario

A service operation changes from overlapping eight-hour shifts to two longer
shifts to improve coverage and reduce handoffs. Coverage gaps appear to fall,
but late-shift error corrections increase, sick leave rises, and experienced
staff begin swapping away from the longer evening shift. Customer demand also
changes during the same month, and one supervisor position is temporarily
vacant.

The modeled material includes rosters, swap requests, attendance, workload by
hour, handoff records, error corrections, employee comments, customer wait
times, and the original rationale for the schedule change.

## Operational complexity

- The intended reduction in handoffs may trade off against fatigue and skill
  distribution.
- Formal schedules differ from actual worked schedules because of swaps and
  absence.
- Employee impact, service performance, and managerial coverage are related but
  distinct.
- Demand mix and supervisor vacancy confound before-and-after comparison.
- Qualitative accounts may reveal effects not captured by aggregate metrics.

## Potential preserved information

- Original Decision rationale, constraints, assumptions, and expected effects.
- Planned roster and actual attendance by interval.
- Shift swaps, approvals, absences, and role or skill coverage.
- Handoff count and content rather than count alone.
- Workload, wait time, correction, and escalation observations by time of day.
- Employee statements with provenance and privacy-appropriate boundaries.
- Concurrent demand and supervisory changes.
- Uncertainty about fatigue, preference, and causal contribution.

## Decision

The modeled service owner decides to retain longer shifts temporarily while
restoring a short overlap on high-demand days, limiting consecutive evening
assignments, and opening a human review of employee concerns. The Decision
records service, workforce, and authority considerations and a bounded review
point.

## Change

The modeled Change alters overlap periods and assignment constraints, but
actual staffing continues to vary through swaps and absence. The record keeps
the schedule policy, published roster, and worked roster distinct.

## Outcome

The modeled observation shows improved peak-hour wait time and fewer late-shift
corrections, while sick leave remains above the modeled baseline and handoffs
increase slightly. Employee comments remain divided. The observation window is
too short and confounded to support strong attribution.

## Learning opportunities

- Compare intended Change with actual human adoption and operational reality.
- Preserve workforce consequences alongside service Outcomes.
- Avoid reducing qualitative human judgment to an unsupported causal claim.
- Review tradeoffs and unexpected effects without treating one metric as the
  whole Outcome.
- Revisit the original Decision using only context available at the time.

## Why useful for Management OS

The case exercises Decision-to-Change fidelity, human impact, qualitative and
quantitative information, unintended consequences, and replay. It tests whether
Management OS can maintain the distinction among policy, roster, worked
practice, and observed Outcome while keeping human authority visible.

## Explicit limitations

The workforce, schedule, statements, and Outcomes are synthetic. The scenario
cannot establish fatigue, employee sentiment, service improvement, labor
effects, or the suitability of any scheduling pattern. It is not permission to
make a real workforce Decision and is not empirical Learning.

> **This is a modeled learning scenario.**
>
> It must never be treated as:
>
> - historical Evidence;
> - validated experience;
> - empirical product learning;
> - organizational memory.

# 6. Apparent Incident Reduction That Was Actually Reporting Suppression

## Working title

Apparent Incident Reduction That Was Actually Reporting Suppression

## Synthetic scenario

A logistics operation introduces a manager review before safety incidents are
entered into the formal register. The monthly dashboard subsequently shows a
large decline. Leadership initially interprets the result as improved safety.
Anonymous comments, maintenance notes, and first-aid supply usage suggest that
minor events continue but are being reclassified as coaching conversations or
resolved locally. Supervisors report that the new review was intended to
improve data quality, while workers perceive reporting as likely to trigger
blame.

The modeled material includes dashboard counts, draft and accepted reports,
review outcomes, reporting guidance, maintenance notes, first-aid inventory,
anonymous comments, and missing detail where privacy or non-reporting prevents
reconstruction.

## Operational complexity

- A measured improvement may reflect a changed observation mechanism.
- Reported incidents, actual incidents, near misses, and proxy signals are not
  interchangeable.
- Authority over classification can create incentives and suppress voice.
- Safety, privacy, due process, and anti-retaliation considerations constrain
  investigation.
- The unobserved event population cannot be reconstructed with certainty.

## Potential preserved information

- Reporting rules and effective dates.
- Draft, rejected, reclassified, and accepted report counts without exposing
  unnecessary personal data.
- Attributable classification Decisions and stated reasons.
- Dashboard definitions and denominator changes.
- Maintenance, first-aid, absence, and anonymous signals as related information,
  not automatically as incident Evidence.
- Worker and supervisor accounts with provenance and access boundaries.
- Missingness, possible selection effects, and alternative explanations.
- Difference between absence of reports and evidence of absence of incidents.

## Decision

The modeled safety authority decides to restore direct reporting, preserve
manager review as a subsequent classification step, prohibit deletion of the
original submission, and create a protected escalation route. The Decision is
made by the modeled accountable human authority; the system does not infer or
exercise safety authority.

## Change

The modeled Change separates submission, review, classification, and dashboard
inclusion. Original reports remain traceable, access is bounded, and later
correction does not erase prior state. Training material records incomplete
adoption and one team that continues informal handling.

## Outcome

The modeled observation shows reported incidents rising after direct reporting
returns, more near-miss detail, and no reliable basis for concluding that the
underlying incident rate increased or decreased. The apparent earlier
improvement is reinterpreted as potentially affected by reporting suppression,
but the magnitude of suppression remains unknown.

## Learning opportunities

- Detect measurement-system change before interpreting a trend.
- Preserve correction history and the identity of original submissions.
- Reason with missing-not-at-random information and proxy signals.
- Maintain human safety authority, privacy, and dissent boundaries.
- Distinguish a reporting Outcome from an underlying operational Outcome.
- Replay how an initially plausible interpretation changed as modeled
  information accumulated.

## Why useful for Management OS

The case is a strong test of uncertainty preservation, Evidence provenance,
metric semantics, correction traceability, protected human input, and false
confidence. It challenges Management OS reasoning not to equate a cleaner
dashboard with a safer operation or convert proxy signals into unsupported
facts.

## Explicit limitations

No incident, report, worker statement, safety condition, or suppression event
described here is real. The scenario cannot prove misconduct, actual incident
frequency, effectiveness of direct reporting, or Management OS value. It must
not be used as safety guidance, a personnel judgment, or evidence about any
organization.

> **This is a modeled learning scenario.**
>
> It must never be treated as:
>
> - historical Evidence;
> - validated experience;
> - empirical product learning;
> - organizational memory.

# Architectural Coverage Matrix

The matrix records qualitative coverage only. A check mark means the case
provides material with which to exercise the aspect; it does not indicate
strength, success, maturity, completeness, or validation. A dash means the
aspect is not a material focus of that case. The matrix is not a score and must
not be used to rank or select cases.

| Architectural aspect | Repeated Order Fulfillment Breakdown | Procurement Approval Delay | Quality Decline After Capacity Increase | Sales–Operations Coordination Failure | Shift Schedule Change | Apparent Incident Reduction |
| --- | :---: | :---: | :---: | :---: | :---: | :---: |
| Context preservation | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Evidence relationships | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Human judgment | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Decision traceability | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Change fidelity | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Outcome observation | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Attribution | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Learning | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Operational Diagnosis | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Authority boundaries | — | ✓ | — | ✓ | ✓ | ✓ |
| Multi-factor reasoning | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Uncertainty preservation | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Case replay potential | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |

Coverage of Learning means only that a training exercise can inspect the
transition from modeled Outcome toward candidate learning. It does not mean
that the case contains or creates organizational Learning.

# Synthetic Case Pool Boundaries

## Synthetic cases can help

- train;
- test UX;
- test the information model;
- test AI reasoning;
- test workflow; and
- test replay capability.

These uses remain bounded to synthetic preparation. A successful training run
can show only how an architecture, interface, workflow, or reasoning process
behaves against designed inputs.

## Synthetic cases cannot

- confirm Product Value Hypotheses;
- confirm an Outcome;
- create organizational Learning;
- prove product utility; or
- create empirical Evidence.

No number of repetitions, variations, internally consistent records, plausible
details, or successful replays changes these limits. Synthetic completeness is
not operational truth, and modeled causality is not observed causality.

# Recommended Future Use

Any of the synthetic cases may be used as a bounded training environment before
work with real operational cases. This statement does not select, prioritize,
rank, or recommend a particular case. Use of the pool remains preparatory and
must retain the synthetic, modeled, training-only, and non-empirical labels.

Transition to a real operational case would require its own legitimate scope,
authority, Evidence, privacy and access boundaries, human participation, and
empirical discipline. Nothing in this artifact supplies that transition or
authorizes validation, experimentation, implementation, roadmap or backlog
change, modification of active M9, or change to canonical architecture.
