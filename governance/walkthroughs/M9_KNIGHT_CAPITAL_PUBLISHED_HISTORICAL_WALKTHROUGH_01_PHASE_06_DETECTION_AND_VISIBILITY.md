# M9 Knight Capital Published Historical Walkthrough 01 — Phase 6 Detection and Visibility

## Phase State

```text
Phase: 6 — Detection and visibility
Status: COMPLETED
Pre-phase HEAD: 601e803
Replay: NOT AUTHORIZED
H3: UNVALIDATED
Root Cause and causal proof: NOT ESTABLISHED
```

Fixed sources: `P-R1` SEC Order Release No. 70694 (2013-10-16), resolved by
Source Manifest commit `5e8fd625f8c33c9359c49f4d7380a967cc39dbb5`, blob
`18141a68af8763be19a1ed85cb55560dfecd1ba2`; Chronology commit
`8fe4758267eb33339fcfe084aee764532c64ff80`, blob
`6809b99e9f6bbf4907a6b111da4f9737a82c4187`; Evidence-Gap commit
`25ea558fce177054a5513d8828db0215b00fc6c1`, blob
`4171548e41e6c8bdaca4662279370e54b436336b`.

## Historical claim ledger

### KC-P6-B01

- **Claim text:** Beginning approximately 8:01 a.m. ET on August 1, 2012, and
  before the 9:30 a.m. market open, an internal Knight system generated 97
  automated emails referencing SMARS and “Power Peg disabled,” according to the later SEC order.
- **Claim class:** `B — Bounded chronology claim`
- **Walkthrough phase:** `6 — Detection and visibility`
- **Source identity:** Chronology fixed identity above; underlying source `P-R1`
- **Citation locator:** Chronology `KC-T03`; SEC Order paragraph 19
- **Attribution:** U.S. Securities and Exchange Commission; fixed chronology assessment
- **Source date:** `2013-10-16`
- **Historical-knowledge status:** Signal generation is supported; viewing,
  recognition, interpretation, and escalation by any recipient are not.
- **Hindsight status:** `LATER-OFFICIAL-FINDING`
- **Confidence boundary:** Approximate start and bounded interval are supported;
  individual message times and routing state are absent.
- **Contradictory source:** `NONE IDENTIFIED`
- **Evidence-gap reference:** `KC-CC05`, `KC-CC06`, `KC-CT02`
- **Replay eligibility:** `REPLAY-NOT-AUTHORIZED`
- **Reviewer note:** Alert existence ≠ alert recognition.

### KC-P6-C01

- **Claim text:** The SEC later found that the automated emails were not designed
  as system alerts, that personnel generally did not review them when received,
  and that the notifications were not acted upon before market open or used to diagnose the problem after open.
- **Claim class:** `C — Attributed official finding`
- **Walkthrough phase:** `6 — Detection and visibility`
- **Source identity:** `P-R1`; fixed Source Manifest identity above
- **Citation locator:** SEC Order paragraph 19; Chronology `KC-T03`
- **Attribution:** U.S. Securities and Exchange Commission
- **Source date:** `2013-10-16`
- **Historical-knowledge status:** Later aggregate official finding; it does not
  identify which recipients saw, understood, or could act on any message.
- **Hindsight status:** `LATER-OFFICIAL-FINDING`
- **Confidence boundary:** Supported at the order's aggregate wording; no recipient-level inference follows.
- **Contradictory source:** `NONE IDENTIFIED`
- **Evidence-gap reference:** `KC-CC05`, `KC-CC06`, `KC-CT02`
- **Replay eligibility:** `REPLAY-NOT-AUTHORIZED`
- **Reviewer note:** Source wording is not strengthened into universal non-awareness.

### KC-P6-C02

- **Claim text:** The SEC later described PMON as post-execution and dependent on
  human monitoring; it did not automatically stop order entry, generate automated
  financial-exposure alerts, or display account or trading-group limits, and it experienced delays during the high-volume event.
- **Claim class:** `C — Attributed official finding`
- **Walkthrough phase:** `6 — Detection and visibility`
- **Source identity:** `P-R1`; fixed Source Manifest identity above
- **Citation locator:** SEC Order paragraph 25; Chronology `KC-T05`
- **Attribution:** U.S. Securities and Exchange Commission
- **Source date:** `2013-10-16`
- **Historical-knowledge status:** Monitoring properties and reported delays are
  later findings; exact displays and user interpretations at each moment remain unknown.
- **Hindsight status:** `LATER-OFFICIAL-FINDING`
- **Confidence boundary:** Retrospective system description, not a raw monitoring log or complete user-information record.
- **Contradictory source:** `NONE IDENTIFIED`
- **Evidence-gap reference:** `KC-CC05`, `KC-CC06`
- **Replay eligibility:** `REPLAY-NOT-AUTHORIZED`
- **Reviewer note:** Visibility ≠ actor knowledge or authority to intervene.

### KC-P6-E01

- **Claim text:** The fixed record does not establish exact recipients, who viewed
  each email, recognition or interpretation of its significance, contemporaneous
  escalation, displayed PMON values at each moment, applicable-limit knowledge,
  shared awareness, authority, or ability to act.
- **Claim class:** `E — Explicit uncertainty claim`
- **Walkthrough phase:** `6 — Detection and visibility`
- **Source identity:** Evidence-Gap and Chronology fixed identities above
- **Citation locator:** Evidence-Gap `KC-CC05`, `KC-CC06`, `Missing Evidence`;
  Chronology `KC-T03`, `KC-T05`, `Still unknown`; `KC-CT02`
- **Attribution:** Management OS fixed assessments
- **Source date:** `2026-08-03`
- **Historical-knowledge status:** Missing from the fixed record, not evidence of non-occurrence.
- **Hindsight status:** `NOT-APPLICABLE`
- **Confidence boundary:** `materially absent` and actor-specific state `unknowable from current public record`
- **Contradictory source:** `NONE IDENTIFIED`
- **Evidence-gap reference:** `KC-CC05`, `KC-CC06`, `KC-CT02`
- **Replay eligibility:** `REPLAY-NOT-AUTHORIZED`
- **Reviewer note:** No “should have known” or fictional shared information state is created.

## Phase boundary

```text
Claims: 4 (Class B: 1; Class C: 2; Class E: 1)
Analyst synthesis: NONE
Response and containment: NOT STARTED
Replay material: NONE
```

Signal generation ≠ delivery ≠ viewing ≠ recognition ≠ interpretation ≠ authority ≠ action.
