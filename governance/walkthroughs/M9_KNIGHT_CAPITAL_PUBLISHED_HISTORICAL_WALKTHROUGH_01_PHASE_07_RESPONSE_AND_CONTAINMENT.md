# M9 Knight Capital Published Historical Walkthrough 01 — Phase 7 Response and Containment

## Phase State

```text
Phase: 7 — Response and containment
Status: COMPLETED
Pre-phase HEAD: 530d5d9
Replay: NOT AUTHORIZED
H3: UNVALIDATED
Root Cause and causal proof: NOT ESTABLISHED
```

Fixed sources: `P-R1` SEC Order Release No. 70694 (2013-10-16) and `P-C1`
Knight Capital August 2, 2012 press release, resolved by Source Manifest commit
`5e8fd625f8c33c9359c49f4d7380a967cc39dbb5`, blob
`18141a68af8763be19a1ed85cb55560dfecd1ba2`; Chronology commit
`8fe4758267eb33339fcfe084aee764532c64ff80`, blob
`6809b99e9f6bbf4907a6b111da4f9737a82c4187`; Evidence-Gap commit
`25ea558fce177054a5513d8828db0215b00fc6c1`, blob
`4171548e41e6c8bdaca4662279370e54b436336b`.

## Historical claim ledger

### KC-P7-C01

- **Claim text:** The SEC later found that during the approximately 45-minute
  incident Knight relied primarily on its technology team to identify and address
  the SMARS problem in the live trading environment while orders continued.
- **Claim class:** `C — Attributed official finding`
- **Walkthrough phase:** `7 — Response and containment`
- **Source identity:** `P-R1`; fixed Source Manifest identity above
- **Citation locator:** SEC Order paragraph 27; Chronology `KC-T07`
- **Attribution:** U.S. Securities and Exchange Commission
- **Source date:** `2013-10-16`
- **Historical-knowledge status:** Response activity is later reported; participants,
  hypotheses, command structure, authority, and rationale remain unknown.
- **Hindsight status:** `LATER-OFFICIAL-FINDING`
- **Confidence boundary:** Team-level activity is retrospectively supported; exact sequence is absent.
- **Contradictory source:** `NONE IDENTIFIED`
- **Evidence-gap reference:** `KC-CC10`, `KC-DW04`, `KC-CT04`
- **Replay eligibility:** `REPLAY-NOT-AUTHORIZED`
- **Reviewer note:** Team activity is not collapsed into a single attributable Decision.

### KC-P7-C02

- **Claim text:** The SEC later found that Knight uninstalled the new RLP code from
  the seven servers where it had been deployed and stated that additional incoming
  parent orders then activated Power Peg code present on those servers.
- **Claim class:** `C — Attributed official finding`
- **Walkthrough phase:** `7 — Response and containment`
- **Source identity:** `P-R1`; fixed Source Manifest identity above
- **Citation locator:** SEC Order paragraph 27; Chronology `KC-T08`
- **Attribution:** U.S. Securities and Exchange Commission
- **Source date:** `2013-10-16`
- **Historical-knowledge status:** Action and later-described consequence are
  supported; actor, intended effect, information state, approval, and verification are not.
- **Hindsight status:** `LATER-OFFICIAL-FINDING`
- **Confidence boundary:** Retrospectively supported; exact command, timestamp, and newly affected state sequence are absent.
- **Contradictory source:** `NONE IDENTIFIED`
- **Evidence-gap reference:** `KC-CC10`, `KC-CC12`, `KC-CT04`
- **Replay eligibility:** `REPLAY-NOT-AUTHORIZED`
- **Reviewer note:** Attempted response Change is not verified containment or evidence of intent.

### KC-P7-B01

- **Claim text:** The SEC later stated that Knight stopped sending the orders after
  approximately 45 minutes on August 1; the fixed record does not provide an exact stop timestamp or stopping mechanism.
- **Claim class:** `B — Bounded chronology claim`
- **Walkthrough phase:** `7 — Response and containment`
- **Source identity:** Chronology fixed identity above; underlying source `P-R1`
- **Citation locator:** Chronology `KC-T09`; SEC Order paragraph 1; conflict `KC-CT05`
- **Attribution:** U.S. Securities and Exchange Commission; fixed chronology assessment
- **Source date:** `2013-10-16`
- **Historical-knowledge status:** Order cessation is later reported; responsible actor and rationale remain unknown.
- **Hindsight status:** `LATER-OFFICIAL-FINDING`
- **Confidence boundary:** Approximate duration is supported; 10:15 a.m. would be arithmetic inference and is not asserted.
- **Contradictory source:** `NONE IDENTIFIED`
- **Evidence-gap reference:** `KC-CC11`, `KC-CT05`
- **Replay eligibility:** `REPLAY-NOT-AUTHORIZED`
- **Reviewer note:** Order cessation is not complete stabilization, remediation, or causal proof.

### KC-P7-A01

- **Claim text:** Knight stated publicly on August 2 that it had removed the
  software from its systems and traded out of its entire erroneous trade position.
- **Claim class:** `A — Direct source claim`
- **Walkthrough phase:** `7 — Response and containment`
- **Source identity:** `P-C1`; fixed Source Manifest identity above
- **Citation locator:** Form 8-K Exhibit 99.1, paragraph beginning “Knight Capital Group, Inc. today provided an update”; Chronology `KC-T10`
- **Attribution:** Knight Capital Group, Inc.
- **Source date:** `2012-08-02`
- **Historical-knowledge status:** Contemporaneously published company statement;
  exact achievement times and internal verification are not established.
- **Hindsight status:** `CONTEMPORANEOUSLY-PUBLISHED`
- **Confidence boundary:** Company-reported status, not independent verification of technical containment or position management.
- **Contradictory source:** `NONE IDENTIFIED`
- **Evidence-gap reference:** `KC-CC11`, `KC-CC12`, `KC-CT06`
- **Replay eligibility:** `REPLAY-NOT-AUTHORIZED`
- **Reviewer note:** Software removal and trade-out remain separate containment dimensions.

### KC-P7-E01

- **Claim text:** The fixed record does not establish the complete response
  chronology, participants, Decision owner, authority, rationale, diagnostics,
  exact commands, stop mechanism, verification criteria, residual technical state,
  or whether any alternative action would have changed the Outcome.
- **Claim class:** `E — Explicit uncertainty claim`
- **Walkthrough phase:** `7 — Response and containment`
- **Source identity:** Evidence-Gap and Chronology fixed identities above
- **Citation locator:** Evidence-Gap `KC-CC10`, `KC-CC11`, `KC-CC12`; Chronology
  `KC-T07`–`KC-T10`, `Still unknown`; `KC-CT04`–`KC-CT06`
- **Attribution:** Management OS fixed assessments
- **Source date:** `2026-08-03`
- **Historical-knowledge status:** Missing from the fixed record; no non-occurrence or counterfactual conclusion follows.
- **Hindsight status:** `NOT-APPLICABLE`
- **Confidence boundary:** `fragmented`, `materially absent`, or `unknowable from current public record`
- **Contradictory source:** `NONE IDENTIFIED`
- **Evidence-gap reference:** `KC-CC10`–`KC-CC12`, `KC-CT04`–`KC-CT06`
- **Replay eligibility:** `REPLAY-NOT-AUTHORIZED`
- **Reviewer note:** No alternative action is assigned a confident historical Outcome.

## Phase boundary

```text
Claims: 5 (Class A: 1; Class B: 1; Class C: 2; Class E: 1)
Analyst synthesis: NONE
Immediate Outcome: NOT STARTED
Replay material: NONE
```

Response action ≠ Decision. Order cessation ≠ verified containment. Remediation ≠ verified Learning.
