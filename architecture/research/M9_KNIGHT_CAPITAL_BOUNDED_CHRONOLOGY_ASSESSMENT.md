# M9 Knight Capital Bounded Chronology Assessment

## Repository State

```text
Active milestone: M9 — Empirical Product Value Learning
Active stage: M9.1 — Empirical Learning Preparation
Selected hypothesis: H3 — Experience Amplification
Selected published candidate: Knight Capital — 2012 software deployment and trading-loss incident
Active backlog item: Prepare Knight Capital source manifest and chronology assessment.
Source manifest: CREATED
Chronology assessment: CREATED by this artifact
Evidence-gap assessment: NOT CREATED
Walkthrough-readiness consideration: NOT CREATED
Published walkthrough: NOT AUTHORIZED
Replay: NOT AUTHORIZED
Validation: NOT AUTHORIZED
Implementation: NOT AUTHORIZED
Authority effect of this chronology: NONE
```

# 1. Purpose and Chronology Boundary

This non-canonical research artifact provides an attributable, source-grounded,
semantically bounded chronology assessment for the selected Knight Capital episode.
It is a historical reconstruction aid and is descriptive, not decisional.

The episode begins with preparation and deployment of the software change associated
with the August 1, 2012 production release. It includes activation of unintended
trading behavior and the organizational response during the incident. It ends with
stabilization of the immediate incident and the first attributable official findings
concerning deployment, controls, response, and resulting losses.

The assessment excludes the full corporate history of Knight Capital, unrelated
earlier or later business events, every later legal or commercial consequence,
retrospective interpretations unnecessary to the bounded episode, and unsupported
claims about private intent.

Public records are incomplete. Later findings can describe earlier events, but their
publication dates do not establish that the described information was known to any
particular actor at event time. Missing time precision remains explicit. The
chronology supports later Evidence-gap and walkthrough-readiness preparation but
creates no walkthrough authority.

```text
Known later ≠ Known then
Public now ≠ Available internally then
Recorded event ≠ Complete context
Temporal order ≠ causal attribution
Event time ≠ Publication time
Occurrence ≠ Later disclosure
Contemporaneous information ≠ Retrospective finding
Publicly reconstructable information ≠ Information available to every historical actor
Regulatory finding ≠ Complete historical truth
Chronology ≠ causal explanation
```

This is not a complete historical narrative, walkthrough, Replay, causal analysis,
root-cause determination, validation, architecture proposal, or implementation
artifact. It does not create a seamless omniscient account.

# 2. Source and Dating Method

## Fixed authorities

| Fixed artifact | Commit | Blob |
| --- | --- | --- |
| M9 Knight Capital Source Manifest | `5e8fd625f8c33c9359c49f4d7380a967cc39dbb5` | `18141a68af8763be19a1ed85cb55560dfecd1ba2` |
| Published Case Selection Decision | `6786bb21fb003125c0cafecedc59f2530a7a34fc` | `eea695025b4c7ed661e302ca2087e24dc299e060` |
| Preparation Transition | `b7d52084a0471afba23e517c9f38b1938e37f74e` | `7fff75551be7bd8ab34d2cd436c7db72c2c8c262` |

The ten sources catalogued in the fixed manifest are the complete source pool for
this assessment. No supplemental source is used.

## Authority classes

- **Regulatory finding:** the SEC administrative order records later official
  findings within a settled enforcement proceeding.
- **Official regulatory context:** SEC press release, roundtable transcript, and
  proposed-rule material record official publication or policy context but are not
  interchangeable with incident findings.
- **Regulatory disclosure index:** the FINRA BrokerCheck report indexes historical
  disclosure within a dynamic successor-firm report; it is not a separate incident
  investigation.
- **Company-originated primary record:** EDGAR-hosted press releases and filings
  record attributable company statements; EDGAR hosting does not turn them into SEC
  findings.
- **Independent secondary report:** Reuters reporting records attributed public
  observations and statements, not official findings.

## Dating rules

- **Event timestamp** is used only when a source supplies a clock time. Times are ET
  where the source specifies ET.
- **Event date** is used when the day is stated but clock time is absent.
- **Bounded period** is used when a source supplies a start, end, duration, or phase
  but not a fully precise timestamp.
- **Approximate period** remains visibly approximate.
- **Publication date** is recorded independently from event time.
- Source locations use numbered paragraphs or filing sections where practicable.
- Temporal-placement confidence is descriptive only: `explicitly dated`, `bounded
  by source`, `approximately dated`, `retrospectively placed`, `disputed`, or
  `unknown`.

# 3. Episode Phases

The following are document sections only. They are not a lifecycle, canonical
stages, mandatory process states, or a proposed operating model.

1. Pre-release preparation and deployment context
2. Production release and activation
3. Incident emergence
4. Detection and organizational response
5. Immediate containment or stabilization
6. Public disclosure and immediate consequence
7. First attributable official findings

# 4. Chronology Entries

## Phase 1 — Pre-release preparation and deployment context

## KC-T01

**Event time or bounded period:** Before July 27, 2012; exact development dates
unknown. Temporal placement: **retrospectively placed**.

**Historical occurrence:** Knight made system and code changes for customer
participation in the NYSE Retail Liquidity Program scheduled to commence on August
1. The SEC later described new SMARS code as intended to replace unused Power Peg
code and described reuse of a flag formerly associated with that code.

**Source attribution:** SEC, 2013-10-16, Order Release No. 70694, ¶¶12–14. Source
authority class: **regulatory finding**.

**Information-status classification:** later officially established;
regulator-reported.

**Public-information view at this point:** The fixed source pool contains no
identified pre-July 27 public disclosure of the internal design, flag reuse, or
Power Peg state. These details became public in attributable official form later.

**Still unknown:** exact design and coding dates; participants; reviews; approval
owner; contemporaneous rationale; specifications; test Evidence; internal awareness
of the unused-code state.

**Semantic cautions:** intended Change must not be treated as Actual Change;
described design intent must not be expanded into personal intention; later findings
create hindsight contamination risk.

## KC-T02

**Event time or bounded period:** Beginning July 27, 2012 and continuing on
successive days before August 1. Temporal placement: **bounded by source**.

**Historical occurrence:** The SEC later found that Knight deployed the new RLP
code to a limited number of SMARS servers in stages. The order states that the new
code was not copied to one of eight servers and that no second-technician review
identified the resulting difference before release.

**Source attribution:** SEC, 2013-10-16, Order Release No. 70694, ¶15. Source
authority class: **regulatory finding**.

**Information-status classification:** later officially established;
regulator-reported.

**Public-information view at this point:** No contemporaneous public deployment
record is present in the fixed source pool. The server-level description is a later
official finding.

**Still unknown:** precise deployment time for each server; technician identities;
deployment commands; checklist or ticket content; verification Evidence; whether
and when any other actor observed the differing production state; release authority.

**Semantic cautions:** staged deployment is not the same as verified deployment;
an omitted copy action does not by itself establish the complete technical state or
human rationale; deployment and later activation must remain separate.

## Phase 2 — Production release and activation

## KC-T03

**Event time or bounded period:** August 1, 2012, beginning approximately 8:01 a.m.
ET and before the 9:30 a.m. market open. Temporal placement: **explicitly dated**
for the approximate start and **bounded by source** for the interval.

**Historical occurrence:** The SEC later found that an internal Knight system began
generating automated emails referencing SMARS and the text “Power Peg disabled.” It
reported 97 such messages before market open and stated they were not acted upon
before the open.

**Source attribution:** SEC, 2013-10-16, Order Release No. 70694, ¶19. Source
authority class: **regulatory finding**.

**Information-status classification:** later officially established;
regulator-reported.

**Public-information view at this point:** The fixed pool does not show that these
messages were public on August 1. Their existence and count entered the attributable
public record through the later SEC order.

**Still unknown:** exact timestamps for all messages; recipients who saw them;
whether any recipient understood their significance; message-routing state;
individual responsibility; contemporaneous escalation; full message contents.

**Semantic cautions:** alert generation is not alert recognition; delivery is not
awareness; the SEC states the messages were not designed as system alerts, so later
significance must not be projected into every recipient's contemporaneous view.

## KC-T04

**Event time or bounded period:** August 1, 2012, after receipt of RLP-eligible
orders; activation associated with the market opening. Exact first triggering order
time is not supplied. Temporal placement: **bounded by source**.

**Historical occurrence:** The SEC later found that seven servers with the new code
processed flagged orders as intended, while flagged orders routed to the eighth
server invoked the Power Peg code remaining there. The order describes that server
as sending child orders without the intended completed-parent-order stopping effect.

**Source attribution:** SEC, 2013-10-16, Order Release No. 70694, ¶16. Source
authority class: **regulatory finding**.

**Information-status classification:** later officially established;
regulator-reported.

**Public-information view at this point:** The fixed pool contains no public
server-level observation from event time. The company described the matter publicly
the next day at a higher level; detailed activation mechanics were published later.

**Still unknown:** precise triggering-order timestamp; complete server state;
complete order-routing logs; source-code state; whether any actor identified the
eighth-server distinction at activation; exact knowledge distribution.

**Semantic cautions:** deployed Change is not activated behavior; activation of
code does not establish the complete causal account; regulatory wording must not be
expanded beyond the order.

## Phase 3 — Incident emergence

## KC-T05

**Event time or bounded period:** August 1, 2012, market open at 9:30 a.m. ET.
Temporal placement: **explicitly dated** for market open; precise observation times
are **unknown**.

**Historical occurrence:** The SEC later found that senior Knight personnel
observed a large volume of positions accumulating in the 33 Account at market open.
It described PMON as post-execution, dependent on human monitoring, delayed during
the high-volume event, and not automatically linked to stopping orders.

**Source attribution:** SEC, 2013-10-16, Order Release No. 70694, ¶¶24–25. Source
authority class: **regulatory finding**.

**Information-status classification:** later officially established;
regulator-reported.

**Public-information view at this point:** No real-time public record of Knight's
internal monitoring view is present in the fixed pool. Later public accounts expose
only part of the internal operational picture.

**Still unknown:** named observers; first observation time; displayed values at
each moment; whether limits were recognized; communications following observation;
Decision owner; response authority; accuracy of each PMON view.

**Semantic cautions:** observation is not comprehension; a displayed position is
not a shared organizational information state; monitoring delay complicates exact
temporal reconstruction.

## KC-T06

**Event time or bounded period:** Approximately 45 minutes after market open on
August 1, 2012. The SEC does not supply second-level start or stop times. Temporal
placement: **bounded by source**.

**Historical occurrence:** The SEC order later reported millions of child orders,
more than four million executions in 154 stocks for more than 397 million shares,
and unintended long and short positions accumulated during approximately 45
minutes.

**Source attribution:** SEC, 2013-10-16, Order Release No. 70694, ¶¶1, 17–18.
Source authority class: **regulatory finding**.

**Information-status classification:** later officially established;
regulator-reported.

**Public-information view at this point:** Market participants could observe market
activity, but the fixed pool does not establish what any participant attributed to
Knight during each minute. Detailed quantities were published later.

**Still unknown:** exact event-by-event sequence; complete exchange data; which
positions and executions were visible internally at each instant; precise stop
time; counterparty-specific information; complete market-wide effect.

**Semantic cautions:** aggregate quantities are later summaries, not a
minute-by-minute chronology; trading activity is not the full operational Outcome;
market movement must not be converted into causal attribution beyond SEC wording.

## Phase 4 — Detection and organizational response

## KC-T07

**Event time or bounded period:** During the approximately 45-minute incident on
August 1, 2012. More precise time is absent. Temporal placement: **bounded by
source**.

**Historical occurrence:** The SEC later stated that Knight relied primarily on its
technology team to identify and address the SMARS problem in the live trading
environment while orders continued.

**Source attribution:** SEC, 2013-10-16, Order Release No. 70694, ¶27. Source
authority class: **regulatory finding**.

**Information-status classification:** later officially established;
regulator-reported.

**Public-information view at this point:** No contemporaneous public response log
or internal command record is in the fixed pool.

**Still unknown:** first response-call time; participants; hypotheses considered;
incident commander or equivalent authority; escalation path; communications;
available diagnostics; sequence of attempted actions.

**Semantic cautions:** response activity is not successful containment; reliance on
a team does not reveal individual Decisions, rationale, or authority distribution.

## KC-T08

**Event time or bounded period:** During the live incident on August 1, 2012;
precise placement within the 45-minute interval is absent. Temporal placement:
**retrospectively placed**.

**Historical occurrence:** The SEC later found that Knight uninstalled the new RLP
code from the seven servers where it had been deployed. The order states that this
action caused additional incoming parent orders to activate Power Peg code present
on those servers.

**Source attribution:** SEC, 2013-10-16, Order Release No. 70694, ¶27. Source
authority class: **regulatory finding**.

**Information-status classification:** later officially established;
regulator-reported.

**Public-information view at this point:** The fixed pool does not contain a
contemporaneous public statement of this response action. It became publicly
attributable in the later order.

**Still unknown:** exact command and timestamp; who proposed, approved, or executed
it; information then available; intended effect; verification performed; number and
identity of newly affected servers at each moment.

**Semantic cautions:** an attempted response Change is not verified containment;
later-described consequence must not be used to infer contemporaneous intention or
recklessness; intended versus Actual Change must remain distinct.

## Phase 5 — Immediate containment or stabilization

## KC-T09

**Event time or bounded period:** By the end of the approximately 45-minute order
period on August 1, 2012; approximate clock placement around 10:15 a.m. ET is an
arithmetic inference, not an explicit source timestamp. Temporal placement:
**bounded by source**.

**Historical occurrence:** The SEC later stated that Knight stopped sending the
orders after the approximately 45-minute period. The fixed pool does not specify the
individual action or exact technical state that ended the flow.

**Source attribution:** SEC, 2013-10-16, Order Release No. 70694, ¶1. Source
authority class: **regulatory finding**.

**Information-status classification:** later officially established;
regulator-reported; exact stopping mechanism unknown.

**Public-information view at this point:** A cessation of the abnormal order flow
is retrospectively described. The public record does not expose a complete
containment-verification record at this point.

**Still unknown:** exact stop time; responsible actor; Decision rationale; technical
mechanism; whether all affected components were verified; residual positions and
risks at the moment order flow stopped.

**Semantic cautions:** cessation of order flow is not full stabilization;
stabilization is not remediation; inferred clock time must not be restated as an
observed timestamp.

## KC-T10

**Event time or bounded period:** After order flow stopped and no later than the
August 2 company statement. Exact trade-out interval is absent. Temporal placement:
**bounded by source**.

**Historical occurrence:** Knight stated on August 2 that it had traded out of its
entire erroneous trade position and removed the software from its systems.

**Source attribution:** Knight Capital Group, 2012-08-02, Form 8-K Exhibit 99.1.
Source authority class: **company-originated primary record**.

**Information-status classification:** company-reported; contemporaneously
recorded at publication; exact occurrence timing unknown.

**Public-information view at this point:** By publication on August 2, the company
had publicly stated both removal and trade-out. The fixed pool does not establish
when those states were achieved or independently verified.

**Still unknown:** exact removal sequence; exact trade-out times and venues;
verification criteria; residual technical state; internal acceptance owner;
counterparty-level effects.

**Semantic cautions:** software removal is not proof of complete technical
containment; position liquidation is not the complete Outcome; company-reported
stabilization is not independently verified remediation.

## Phase 6 — Public disclosure and immediate consequence

## KC-T11

**Event time or bounded period:** August 2, 2012. Temporal placement:
**explicitly dated**.

**Historical occurrence:** Knight published an update associating the issue with
installation of trading software, stating that erroneous orders had been sent,
reporting removal of the software and trade-out of the position, and reporting an
approximate $440 million realized pre-tax loss and severe impact to its capital
base.

**Source attribution:** Knight Capital Group, 2012-08-02, Form 8-K Exhibit 99.1.
Source authority class: **company-originated primary record**. Reuters, 2012-08-02,
provided separate contemporaneous secondary reporting.

**Information-status classification:** company-reported; secondary-reported;
contemporaneously recorded at publication.

**Public-information view at this point:** The company's high-level description and
reported immediate financial consequence were public. Server-level mechanics,
internal response sequence, and detailed regulatory findings were not yet public in
the fixed pool.

**Still unknown:** complete technical chronology; internal information flows;
Decision owners and rationales; precise loss reconciliation; complete effects on
market participants; verification of removal.

**Semantic cautions:** occurrence on August 1 differs from disclosure on August 2;
early company and media descriptions are not later regulatory findings; approximate
loss is not the complete operational Outcome.

## KC-T12

**Event time or bounded period:** August 6, 2012. Temporal placement:
**explicitly dated**.

**Historical occurrence:** Knight filed a Form 8-K concerning a $400 million equity
financing transaction and related corporate instruments and communications.

**Source attribution:** Knight Capital Group, 2012-08-06, Form 8-K accession
0001193125-12-338098. Source authority class: **company-originated primary record**.

**Information-status classification:** company-reported; contemporaneously
recorded at publication.

**Public-information view at this point:** The financing response and its disclosed
terms were public. The filing did not make the detailed deployment and response
chronology public.

**Still unknown:** complete deliberation; rejected financing alternatives;
decision-making sequence; actor-specific rationale; relationship between financial
stabilization and technical stabilization.

**Semantic cautions:** financing action is an organizational consequence and
response, not evidence that technical remediation was complete; transaction
execution does not reveal complete Decision rationale.

## KC-T13

**Event time or bounded period:** On or about August 9, 2012; later disclosed on
November 9, 2012. Temporal placement: **retrospectively placed**.

**Historical occurrence:** Knight's third-quarter Form 10-Q reported that the SEC
began an examination related to the technology issue and compliance with the Market
Access Rule and other requirements on or about August 9.

**Source attribution:** Knight Capital Group, 2012-11-09, Form 10-Q, Part II,
Item 1, Regulatory. Source authority class: **company-originated primary record**.

**Information-status classification:** company-reported; later disclosed.

**Public-information view at this point:** The examination start date is visible
through a later company filing. The fixed pool does not establish its complete
public visibility on August 9.

**Still unknown:** examination scope at inception; materials requested; internal
recipients; regulator and company working chronology; preliminary views.

**Semantic cautions:** examination commencement is not a finding; later disclosure
must not be projected back as public knowledge on August 9.

## KC-T14

**Event time or bounded period:** August 29, 2012; later disclosed on November 9,
2012. Temporal placement: **explicitly dated but retrospectively disclosed**.

**Historical occurrence:** Knight's Form 10-Q reported that the SEC issued a formal
order of investigation concerning the company and firm on August 29.

**Source attribution:** Knight Capital Group, 2012-11-09, Form 10-Q, Part II,
Item 1, Regulatory. Source authority class: **company-originated primary record**.

**Information-status classification:** company-reported; later disclosed.

**Public-information view at this point:** The later filing makes the formal-order
date reconstructable. It does not expose the complete order, investigation file, or
contemporaneous public awareness.

**Still unknown:** complete investigation scope; procedural communications;
Evidence gathered; preliminary assessments; which details were public on August 29.

**Semantic cautions:** investigation is not adjudication or finding; event date and
publication date remain distinct.

## KC-T15

**Event time or bounded period:** Reporting period through September 30, 2012;
published November 9, 2012. Temporal placement: **explicitly dated** for filing and
reporting period; remediation timing **unknown**.

**Historical occurrence:** Knight's Form 10-Q recorded a $457.6 million trading
loss, $3.5 million in incremental professional fees, $400 million in equity
financing, reduced volumes, an internal review, and an intention to take appropriate
remedial measures based on that review.

**Source attribution:** Knight Capital Group, 2012-11-09, Form 10-Q, Notes 3–4,
management discussion, and operational-risk disclosure. Source authority class:
**company-originated primary record**.

**Information-status classification:** company-reported; later disclosed.

**Public-information view at this point:** More detailed financial and
organizational consequences, regulatory activity, and the existence of an internal
review were public. Detailed review findings and verified remediation were not
provided.

**Still unknown:** internal review scope, owner, completion date, findings,
remediation choices, implementation Evidence, sustained effectiveness, complete
loss-reconciliation method.

**Semantic cautions:** intention to remediate is not Actual Change; filing-period
aggregation is not event-time precision; different disclosed loss measures require
scope preservation.

## KC-T16

**Event time or bounded period:** Year ended December 31, 2012; published March 1,
2013. Temporal placement: **explicitly dated** for reporting period and filing;
underlying actions variably dated.

**Historical occurrence:** Knight's Form 10-K reported the technology issue,
approximately $457.6 million trading loss, related costs, reduced order flow,
liquidity pressures, confidence effects, recapitalization, litigation and regulatory
investigation context, and the previously stated internal review and intended
remedial measures.

**Source attribution:** Knight Capital Group, 2013-03-01, 2012 Form 10-K, risk
factors, operational-risk discussion, Note 3, and related disclosures. Source
authority class: **company-originated primary record**.

**Information-status classification:** company-reported; later disclosed.

**Public-information view at this point:** The annual filing expanded the public
company account of financial, business, legal, and regulatory consequences. It did
not supply a complete technical or response chronology or verified remediation
record.

**Still unknown:** internal review output; detailed control Changes; implementation
dates; acceptance authority; sustained control performance; complete actor-specific
knowledge.

**Semantic cautions:** annual disclosure consolidates different Outcome dimensions;
company risk disclosure is not an independent finding; repeated remediation intent
is not verified adoption.

## Phase 7 — First attributable official findings

## KC-T17

**Event time or bounded period:** October 16, 2013 publication describing events
from preparation through August 1, 2012 and later regulatory process. Temporal
placement: **explicitly dated** for publication and **retrospectively placed** for
historical events.

**Historical occurrence:** The SEC issued Release No. 70694, making findings within
a settled administrative proceeding about the incident, market-access controls,
deployment practices, incident response, compliance reviews, regulatory violations,
consequences, remedial efforts, and undertakings.

**Source attribution:** SEC, 2013-10-16, Order Release No. 70694. Source authority
class: **regulatory finding**. SEC Press Release 2013-222 separately announced and
summarized the action.

**Information-status classification:** later officially established;
regulator-reported.

**Public-information view at this point:** The detailed official findings became
public. They materially expanded the public account of server deployment, messages,
monitoring, response, controls, quantities, and regulatory disposition.

**Still unknown:** complete underlying investigative file; all exhibits and
interviews; raw technical Evidence; complete internal communications; every actor's
knowledge and rationale; disagreements not exposed in the settlement record.

**Semantic cautions:** Knight consented without admitting or denying the findings;
the order is authoritative for the proceeding but not complete historical truth;
later official detail must not be inserted into the August 1 actor view.

## KC-T18

**Event time or bounded period:** October 16, 2013 and prospective deadlines stated
in the order. Temporal placement: **explicitly dated** for the undertaking;
completion timing extends beyond this bounded assessment.

**Historical occurrence:** The SEC order recorded consideration of remedial acts and
cooperation and required an independent consultant to review software-development
lifecycle processes, risk controls, deployment, order routers, capital thresholds,
and incident-response protocols and to report and recommend modifications where
needed.

**Source attribution:** SEC, 2013-10-16, Order Release No. 70694, ¶¶50–51. Source
authority class: **regulatory finding and ordered undertaking**.

**Information-status classification:** later officially established;
regulator-reported.

**Public-information view at this point:** The undertaking and its prescribed scope
were public. The consultant's later work product, implementation status, and
long-term effects are not in the fixed source pool.

**Still unknown:** complete pre-order remediation; consultant findings; final
recommendations; Actual Change; acceptance and verification; sustained adoption;
measured Learning.

**Semantic cautions:** an ordered review is not completed remediation; a required
recommendation process is not organizational Learning; this entry records the edge
of the bounded episode, not a verified long-term Outcome.

# 5. Decision-Relevant Temporal Windows

These windows identify periods where judgment may have occurred. They do not invent
Decisions or treat action as proof of a complete Decision record.

## KC-DW01 — Release design and preparation

- **Bounded window:** Before staged deployment began on July 27, 2012.
- **Observable trigger:** preparation for the August 1 NYSE RLP launch and required
  SMARS changes.
- **Information potentially available in the public record:** later SEC description
  of intended code replacement and flag reuse.
- **Missing internal information:** requirements, options, test results, risk
  review, named participants, approvals, and rationale.
- **Authority visibility:** materially absent.
- **Disposition:** **Decision activity suggested but identity incomplete**. No fixed
  attributable Decision can be reconstructed.

## KC-DW02 — Staged production deployment

- **Bounded window:** July 27 through the pre-open period of August 1, 2012.
- **Observable trigger:** staged placement of new code on production servers.
- **Information potentially available in the public record:** later SEC findings
  concerning server coverage, absence of second-technician review, and pre-open
  messages.
- **Missing internal information:** release owner, deployment acceptance, precise
  checklist, who saw each server state or message, escalation, and go-live rationale.
- **Authority visibility:** deployment action is visible retrospectively; approval
  authority is not.
- **Disposition:** **Decision activity suggested but identity incomplete**. No fixed
  attributable Decision can be reconstructed.

## KC-DW03 — Pre-open message handling

- **Bounded window:** Approximately 8:01–9:30 a.m. ET on August 1, 2012.
- **Observable trigger:** 97 automated emails later described by the SEC.
- **Information potentially available in the public record:** message generation,
  recipient-group delivery, and non-action before open are retrospectively stated.
- **Missing internal information:** actual readership, interpretation, assigned
  responsibility, escalation expectations, and response authority.
- **Authority visibility:** absent.
- **Disposition:** **No attributable Decision reconstructable**. Non-action cannot
  be converted into a Decision without an attributable record.

## KC-DW04 — Live incident diagnosis and response

- **Bounded window:** Market open through cessation of the approximately 45-minute
  order period.
- **Observable trigger:** accumulating positions and continued abnormal order flow.
- **Information potentially available in the public record:** later SEC description
  of senior observation, technology-team activity, PMON constraints, and RLP-code
  removal from seven servers.
- **Missing internal information:** precise shared information, alternatives,
  command structure, named owner, authorization, rationale, execution time, and
  verification.
- **Authority visibility:** response actors are visible only at team or senior-
  personnel level; fixed authority is not.
- **Disposition:** **Response action visible but Decision rationale unknown**. No
  fixed attributable Decision can be reconstructed.

## KC-DW05 — Immediate stabilization and capital response

- **Bounded window:** After order cessation through the August 6 financing.
- **Observable trigger:** unwanted positions, reported loss, and capital impact.
- **Information potentially available in the public record:** company-reported
  software removal, position trade-out, continued operations, strategic financing
  search, and the August 6 transaction.
- **Missing internal information:** trade-out authority and sequence, technical
  acceptance, financing alternatives, deliberation, named decision records, and
  rationale.
- **Authority visibility:** corporate actions are attributable to Knight; human
  Decision ownership remains incomplete.
- **Disposition:** **Decision occurrence supported** at organizational transaction
  level, but no fixed human Decision rationale can be reconstructed.

## KC-DW06 — Regulatory disposition and undertakings

- **Bounded window:** Investigation after August 2012 through the October 16, 2013
  order.
- **Observable trigger:** regulatory examination, investigation, settlement offer,
  and SEC proceeding.
- **Information potentially available in the public record:** company disclosures,
  the accepted offer's existence, findings, sanctions, and undertakings.
- **Missing internal information:** complete settlement deliberation, investigative
  Evidence, negotiation record, remediation detail, and consultant output.
- **Authority visibility:** the SEC and respondent are institutionally attributable;
  complete individual authority and rationale are not public.
- **Disposition:** **Decision occurrence supported** for the regulatory settlement
  and ordered undertaking; complete human Decision rationale cannot be reconstructed.

# 6. Change Chronology

| Change class | Time or period | Publicly reconstructable description | Visibility boundary |
| --- | --- | --- | --- |
| Planned software Change | Before July 27, 2012 | SEC later described new RLP functionality, replacement of unused code, and reuse of a flag. | Requirements, approval, tests, rationale, and complete intended state are absent. |
| Deployment actions | Beginning July 27, successive days | SEC later described staged deployment and differing server state. | Exact server-by-server times, commands, review, and acceptance are absent. |
| Actual production state | At August 1 activation | SEC later described seven servers with new code and one without it. | Raw configuration, binaries, hashes, logs, and independent verification are absent. |
| Activated behavior | August 1 market open | SEC later described flagged orders invoking different behavior on the server retaining Power Peg code. | Complete code path, execution trace, and order-level chronology are absent. |
| Incident-response Change | During the approximately 45-minute incident | SEC later described removal of new RLP code from seven servers. | Decision identity, time, intended effect, and contemporaneous verification are absent. |
| Containment actions | By August 2 disclosure | Company reported software removal and complete trade-out; SEC later reported cessation of order sending. | Exact containment mechanism, sequence, acceptance criteria, and residual state are absent. |
| Financial stabilization Change | August 6, 2012 | Company filed the $400 million equity financing transaction. | Deliberation and relationship to technical stabilization remain incomplete. |
| Later remediation described | November 2012 onward; official undertaking October 16, 2013 | Company reported an internal review and intended measures; SEC recorded remedial acts generally and required an independent review. | Specific implementation, verified sustained adoption, and long-term effectiveness are absent. |

```text
Planned Change ≠ deployed Change
Deployed Change ≠ activated behavior
Response action ≠ verified containment
Remediation statement ≠ verified sustained adoption
```

No implementation-adequacy judgment is made.

# 7. Outcome Chronology

| Outcome dimension | Time or bounded period | Observable published record | Boundary |
| --- | --- | --- | --- |
| Trading activity | Approximately 45 minutes on August 1 | SEC later reported order, execution, stock, share, and position aggregates. | Complete event-level dataset and actor views are absent. |
| Operational control state | Before and during August 1 | SEC later described SMARS, capital-threshold, monitoring, deployment, and response-control conditions. | The order is a later settled regulatory finding, not the complete technical record. |
| Financial consequence | August 1 onward | Company initially reported approximately $440 million; later filings reported $457.6 million trading loss and other related costs; SEC later stated more than $460 million from unwanted positions. | Measures have different dates and scopes and are not silently reconciled. |
| Market or counterparty consequence | During the incident | SEC later described trading-volume and price-movement associations and effects on other participants; Reuters reported contemporaneous market observations. | Complete participant-level Outcome and causal allocation are absent. |
| Organizational consequence | August 2 onward | Company reported capital impact, reduced order flow, liquidity pressure, confidence effects, internal review, financing, legal matters, and regulatory examinations. | The bounded episode excludes the complete later corporate and commercial history. |
| Regulatory consequence | August 2012–October 2013 | Company reported examination and formal investigation; SEC later issued findings, sanction, penalty, and undertakings. | Regulatory disposition is not complete historical truth or proof of organizational Learning. |

```text
Immediate consequence ≠ complete Outcome
Financial loss ≠ sole Outcome
Stabilization ≠ remediation
Regulatory finding ≠ organizational Learning
```

The chronology does not add causal attribution beyond the attributed source wording.

# 8. Publication-Time Overlay

This overlay is separate from event chronology. “Available publicly” does not mean
seen, understood, or accepted by every actor.

| Publication date | Fixed source | What became potentially available in the public record | Event-time distinction |
| --- | --- | --- | --- |
| 2012-08-02 | Knight August 2 press release, EDGAR exhibit | Company-attributable high-level incident description, reported removal, trade-out, immediate loss, and capital status. | Published the day after the incident; does not establish what was known during deployment or response. |
| 2012-08-02 | Reuters report | Contemporaneous external reporting and attributed market observations. | Secondary reporting after the event began; early information may be incomplete. |
| 2012-08-06 | Knight Form 8-K and exhibits | Financing transaction, instruments, and company communications. | Records later organizational response, not live-incident knowledge. |
| 2012-10-02 | SEC Technology and Trading Roundtable transcript | Broader regulatory and participant discussion referencing Knight. | Post-incident policy discussion, not an investigation finding or event-time record. |
| 2012-11-09 | Knight third-quarter Form 10-Q | Expanded company financial, operational, legal, regulatory, and internal-review disclosures. | Reporting-period and retrospective disclosure; not contemporaneous response Evidence. |
| 2013-03-01 | Knight 2012 Form 10-K | Annual company account of financial, business, risk, investigation, and response consequences. | Retrospective company reporting; not a complete technical chronology. |
| 2013-03-08 | SEC proposed Regulation SCI | Broader post-incident systems and market policy context. | Later policy context must not be projected onto August 2012 requirements or awareness. |
| 2013-10-16 | SEC Order Release No. 70694 | First detailed attributable official findings within the fixed pool. | Describes earlier events retrospectively; these details were not necessarily known then. |
| 2013-10-16 | SEC Press Release 2013-222 | Official summary of the proceeding, penalty, and undertaking. | Derivative summary of the same-day order, not independent corroboration. |
| Dynamic; accessed 2026-08-03 | FINRA BrokerCheck successor-firm report | Current disclosure index containing historical regulatory-action information. | Much later, dynamic, and derivative; no event-time information status follows from it. |

# 9. Chronology Conflicts and Unresolved Timing

## KC-CT01 — Exact deployment sequence

Deployment began July 27 and proceeded on successive days, but the fixed pool does
not give exact server-by-server dates, times, commands, or completion point. The
relative order of every deployment action cannot be established.

## KC-CT02 — Message receipt and recognition

The SEC gives an approximate 8:01 a.m. start and a count before market open. It does
not supply every timestamp, read receipt, recognition time, or recipient action.
Generation, delivery, recognition, and escalation cannot be made one event.

## KC-CT03 — First activation and first execution

The fixed pool places activation around market open but does not supply the precise
timestamp of the first triggering order, first child order, or first execution.

## KC-CT04 — Response sequence

Technology-team activity and removal of RLP code are retrospectively described, but
their exact ordering relative to observations, diagnoses, communications, and other
actions is absent. A complete response chronology cannot be established.

## KC-CT05 — Order-flow stop and containment mechanism

The SEC supplies an approximately 45-minute duration but no exact stop timestamp or
mechanism. Approximately 10:15 a.m. ET is arithmetic, not an observed source time.
Company-reported software removal does not resolve the live stop sequence.

## KC-CT06 — Position trade-out timing

The August 2 release states that the position had been traded out, but the fixed pool
does not establish the start, end, sequence, or verification time of the liquidation.

## KC-CT07 — Loss measures

The August 2 company release reported approximately $440 million. Later company
filings identified a $457.6 million trading loss and broader related costs, while the
SEC order stated a loss of more than $460 million from unwanted positions. These
figures have different publication dates and apparent scopes. This assessment does
not reconcile them by preference.

## KC-CT08 — Securities and venue scope

The August 2 company release referred to certain NYSE-listed securities and routing
to NYSE. Later company filings referred to NYSE-listed and NYSE Arca securities.
The SEC order described 154 stocks and certain trading centers. The fixed pool does
not provide a single reconciled venue-by-venue dataset.

## KC-CT09 — Public timing of regulatory activity

The Form 10-Q later dates the SEC examination to on or about August 9 and the formal
investigation order to August 29. It does not establish precisely when each fact
became public or what investigation information was available at those earlier
dates.

## KC-CT10 — Remediation timing and completion

Company filings state that an internal review commenced and measures were intended;
the SEC later referenced remedial acts generally and ordered a consultant review.
The fixed pool does not establish a complete sequence, completion date, or verified
sustained state for remediation.

# 10. Chronology Coverage Summary

| Aspect | Descriptive coverage | Basis and boundary |
| --- | --- | --- |
| Context | **Partially supported** | RLP, SMARS, market-access rule, and company context are visible, mostly retrospectively; complete internal operating context is absent. |
| Evidence | **Fragmented** and **retrospectively supported** | Official findings and company disclosures describe messages, systems, positions, and losses; raw code, logs, order data, communications, and investigative exhibits are absent. |
| Decision | **Materially absent** | Organizational actions and decision-relevant windows are visible, but most named owners, authority handoffs, alternatives, and human rationales cannot be reconstructed. |
| Change | **Partially supported** and **retrospectively supported** | Planned code, staged deployment, production difference, response removal, position trade-out, financing, and later review are described; fidelity and sustained remediation are not verified. |
| Outcome | **Materially supported** for immediate aggregates and **fragmented** across dimensions | Trading, financial, market, organizational, and regulatory consequences are reported with differing scopes; the complete Outcome is not established. |
| Learning | **Materially absent** | Regulatory framing, an internal-review statement, and ordered review exist; attributable organizational Learning, adoption, and measured effect are not established. |

No overall score or sufficiency judgment is created.

# 11. Chronology Limitations

- Raw source code, deployed binaries, configuration snapshots, deployment commands,
  and complete system logs are absent.
- Full order, execution, position, market-data, alert, email, and monitoring datasets
  are absent.
- Full internal communications, recordings, interviews, tickets, meeting records,
  and incident-response documentation are absent.
- Human rationale, named Decision ownership, authority handoffs, and actor-specific
  awareness are incomplete.
- The detailed chronology depends heavily on an SEC order entered in a settled
  proceeding without admission or denial of the findings.
- Regulatory, securities-reporting, and possible litigation framing may shape what
  each public record includes and omits.
- Company-originated filings are attributable but not independent findings.
- The SEC press release and FINRA disclosure are partly derivative of the SEC order;
  document count does not equal independent corroboration.
- The roundtable and proposed-rule sources provide later policy context, not
  incident findings.
- Contemporaneous journalism is secondary and may preserve incomplete early
  information through a third-party archive.
- The chronology cannot reconstruct every actor's information or assume a common
  organizational view.
- The completeness, order, and exact timing of incident-response activity remain
  unknown.
- Immediate cessation, software removal, position liquidation, capital response,
  and technical remediation are distinct states with incomplete verification.
- Loss amounts differ by date and reporting scope and are not silently harmonized.
- Remediation implementation, sustained adoption, control effectiveness, and
  long-term organizational Learning are incompletely visible.
- The fixed pool does not include the full SEC investigative file, independent
  consultant report, or a complete venue-level record.

# 12. Inputs for Future Evidence-Gap Assessment

The following are questions raised by chronology construction. They are not answers
and do not constitute an Evidence-gap assessment.

1. Which chronology entries depend solely on the October 2013 retrospective SEC
   findings?
2. What contemporaneous Evidence exists, if any, for intended Change, deployment,
   verification, and release acceptance?
3. Can exact server deployment times or production configuration states be
   established without unavailable internal records?
4. Who received, saw, understood, or was accountable for the pre-open messages, and
   what escalation rules applied?
5. Which information did senior personnel and the technology team actually have at
   each point after market open?
6. Which Decision windows lack attributable authority, alternatives, and rationale?
7. What was the exact sequence of diagnosis, code removal, order-flow cessation,
   position management, and verification?
8. Which response actions were intended Changes, which became Actual Changes, and
   which were verified?
9. How should differently scoped public loss measures remain attributable without
   false reconciliation?
10. Which market and counterparty Outcomes are observable but difficult to attribute
    from the fixed public record?
11. What internal review findings and remediation records would be required to
    distinguish statement, implementation, adoption, and sustained effect?
12. Which claims would require source code, logs, order data, communications,
    interviews, or consultant materials that are not public?
13. At which points would a future Replay be vulnerable to using October 2013
    findings as if they were known on August 1, 2012?
14. Can any historical Decision be fixed to a named accountable human without
    inventing rationale?
15. What public material, if any, could independently corroborate the response
    sequence while remaining inside an accepted future source boundary?

# 13. Research Observations

- Event time is materially more precise for the pre-open message start, market
  opening, and approximate incident duration than for deployment steps, response
  actions, containment, or trade-out.
- Publication time materially changes the reconstructable public view: high-level
  company information appeared on August 2, broader company consequences appeared
  in later filings, and detailed official findings appeared in October 2013.
- The fixed public record exposes organizational and team-level activity more often
  than named human Decision identity or rationale.
- Information asymmetry is unavoidable: message recipients, senior personnel,
  technology staff, management, regulators, customers, venues, and market
  participants cannot be assigned one shared information view.
- Change fidelity is visible in fragments across planned functionality, deployment,
  production state, activated behavior, response action, containment statements,
  and later undertakings.
- Distributed authority is suggested across technology, senior personnel,
  corporate financing, compliance, and regulatory activity, but the chronology does
  not convert this into a governance model.
- Hindsight risk is highest where detailed 2013 findings are used to describe what
  actors could have recognized during the compressed August 1 response window.
- Financial figures are temporally and semantically versioned; their differences
  should remain visible rather than be collapsed into one supposedly final number.

These observations create no new objects, capabilities, canonical `Knowledge
State`, architecture recommendation, governance rule, or product recommendation.

# 14. Final Boundary

This chronology assessment:

- is source-grounded but incomplete;
- does not establish complete historical truth;
- does not establish what every actor knew;
- does not authorize a walkthrough or Replay;
- does not validate H3;
- does not create organizational Learning;
- does not amend canonical architecture;
- does not perform causal analysis or establish Root Cause;
- does not create an Evidence-gap assessment or walkthrough-readiness
  consideration; and
- has no authority effect.

```text
Published walkthrough: NOT AUTHORIZED
Replay: NOT AUTHORIZED
Validation: NOT AUTHORIZED
Architecture change: NOT AUTHORIZED
Implementation: NOT AUTHORIZED
H3: UNVALIDATED
```

The source manifest, selection Decision, preparation transition, ROADMAP, BACKLOG,
M9 proposal, candidate pool, suitability assessment, synthetic walkthroughs,
canonical M7/M8, Product Vision, Systems, Product Constitution, validation state,
and implementation state remain unchanged.
