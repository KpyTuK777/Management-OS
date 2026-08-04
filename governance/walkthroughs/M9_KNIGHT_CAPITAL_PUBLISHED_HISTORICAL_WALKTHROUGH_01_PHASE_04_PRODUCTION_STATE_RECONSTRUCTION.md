# M9 Knight Capital Published Historical Walkthrough 01 — Phase 4 Production-State Reconstruction

## Phase State

```text
Phase: 4 — Production-state reconstruction
Status: COMPLETED
Pre-phase HEAD: cbcf6fc
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
`4171548e41e6c8bdaca4662279370e54b436336b`. P-R1 is a later finding in a
settled proceeding, not a complete forensic record.

## Historical claim ledger

### KC-P4-C01

- **Claim text:** The SEC later found that seven SMARS servers contained the new
  RLP code while an eighth retained callable Power Peg code and lacked the new RLP
  code at the production-release boundary.
- **Claim class:** `C — Attributed official finding`
- **Walkthrough phase:** `4 — Production-state reconstruction`
- **Source identity:** `P-R1`; fixed Source Manifest identity above
- **Citation locator:** SEC Order Release No. 70694, paragraphs 15–16; Chronology `KC-T04`
- **Attribution:** U.S. Securities and Exchange Commission
- **Source date:** `2013-10-16`
- **Historical-knowledge status:** Later official reconstruction; no actor-specific
  awareness of the server distinction is established.
- **Hindsight status:** `LATER-OFFICIAL-FINDING`
- **Confidence boundary:** Retrospectively supported in regulatory prose; raw
  binaries, hashes, configurations, and independent forensic verification are absent.
- **Contradictory source:** `NONE IDENTIFIED`
- **Evidence-gap reference:** `KC-CC02`, `KC-CC04`
- **Replay eligibility:** `REPLAY-NOT-AUTHORIZED`
- **Reviewer note:** Deployment statement and production configuration remain distinct.

### KC-P4-C02

- **Claim text:** The SEC later found that flagged RLP-eligible orders were
  processed by the seven servers with new code, while flagged orders routed to the
  eighth server invoked Power Peg and produced child orders without the intended
  completed-parent-order stopping effect.
- **Claim class:** `C — Attributed official finding`
- **Walkthrough phase:** `4 — Production-state reconstruction`
- **Source identity:** `P-R1`; fixed Source Manifest identity above
- **Citation locator:** SEC Order Release No. 70694, paragraph 16; Chronology `KC-T04`
- **Attribution:** U.S. Securities and Exchange Commission
- **Source date:** `2013-10-16`
- **Historical-knowledge status:** Later official finding; exact first trigger and
  contemporaneous actor knowledge remain unknown.
- **Hindsight status:** `LATER-OFFICIAL-FINDING`
- **Confidence boundary:** Activated behavior is retrospectively described, not
  reproduced or independently verified from raw runtime Evidence.
- **Contradictory source:** `NONE IDENTIFIED`
- **Evidence-gap reference:** `KC-CC02`, `KC-CC04`, chronology conflict `KC-CT03`
- **Replay eligibility:** `REPLAY-NOT-AUTHORIZED`
- **Reviewer note:** This is the activation boundary, not incident-emergence analysis or causal proof.

### KC-P4-E01

- **Claim text:** The fixed record does not establish the complete server state,
  source-code or binary identity, dependencies, runtime trace, order-routing logs,
  exact first triggering order, or who identified the server distinction at activation.
- **Claim class:** `E — Explicit uncertainty claim`
- **Walkthrough phase:** `4 — Production-state reconstruction`
- **Source identity:** Evidence-Gap and Chronology fixed identities above
- **Citation locator:** Evidence-Gap `KC-CC02`, `KC-CC04`, `Missing Evidence`;
  Chronology `KC-T04`, `Still unknown`; `KC-CT03`
- **Attribution:** Management OS fixed assessments
- **Source date:** `2026-08-03`
- **Historical-knowledge status:** Missing from the fixed public record, not proven absent from history.
- **Hindsight status:** `NOT-APPLICABLE`
- **Confidence boundary:** `materially absent` or `unknowable from current public record`
- **Contradictory source:** `NONE IDENTIFIED`
- **Evidence-gap reference:** `KC-CC02`, `KC-CC04`, `KC-CT03`
- **Replay eligibility:** `REPLAY-NOT-AUTHORIZED`
- **Reviewer note:** No complete mechanism, Root Cause, or actor knowledge is inferred.

## Phase boundary

```text
Claims: 3 (Class C: 2; Class E: 1)
Analyst synthesis: NONE
Incident emergence: NOT STARTED
Response analysis: NOT STARTED
Replay material: NONE
Authority and methodology: UNCHANGED
```

Activated behavior ≠ complete causal account. Later knowledge ≠ historical actor knowledge.
