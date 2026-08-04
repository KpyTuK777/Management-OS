# M9 Knight Capital Published Historical Walkthrough 01 — Phase 3 Deployment Reconstruction

## Phase State

```text
Phase: 3 — Deployment reconstruction
Status: COMPLETED
Pre-phase HEAD: f7d00fa2f1094fc53ab16ed64f65ea7dd9b421ad
Replay: NOT AUTHORIZED
H3: UNVALIDATED
Root Cause: NOT ESTABLISHED
Causal proof: NOT ESTABLISHED
```

This phase reconstructs only fixed-source-supported preparation and staged
deployment. Production activation and incident behavior are excluded.

## Fixed citation resolution

- `P-R1`: SEC Order Release No. 70694, 2013-10-16; Source Manifest commit
  `5e8fd625f8c33c9359c49f4d7380a967cc39dbb5`, blob
  `18141a68af8763be19a1ed85cb55560dfecd1ba2`. This is a later official finding
  in a settled proceeding, not complete historical truth.
- Bounded Chronology Assessment: commit
  `8fe4758267eb33339fcfe084aee764532c64ff80`, blob
  `6809b99e9f6bbf4907a6b111da4f9737a82c4187`.
- Evidence-Gap Assessment: commit
  `25ea558fce177054a5513d8828db0215b00fc6c1`, blob
  `4171548e41e6c8bdaca4662279370e54b436336b`.

## Historical claim ledger

### KC-P3-C01

- **Claim text:** The SEC later found that, before July 27, 2012, Knight prepared
  system and code changes for the August 1 NYSE Retail Liquidity Program launch;
  the new SMARS code was intended to replace unused Power Peg code and reused a
  flag formerly associated with that code.
- **Claim class:** `C — Attributed official finding`
- **Walkthrough phase:** `3 — Deployment reconstruction`
- **Source identity:** `P-R1`; fixed Source Manifest identity above
- **Citation locator:** SEC Order Release No. 70694, paragraphs 12–14; Chronology
  `KC-T01`
- **Attribution:** U.S. Securities and Exchange Commission
- **Source date:** `2013-10-16`
- **Historical-knowledge status:** Later official reconstruction; participant,
  approval, rationale, and actor-knowledge fields remain unknown.
- **Hindsight status:** `LATER-OFFICIAL-FINDING`
- **Confidence boundary:** Retrospectively supported; exact development dates and
  raw preparation Evidence are absent.
- **Contradictory source:** `NONE IDENTIFIED`
- **Evidence-gap reference:** `KC-CC02`, `KC-CC03`
- **Replay eligibility:** `REPLAY-NOT-AUTHORIZED`
- **Reviewer note:** Intended Change is not treated as deployed or activated Change.

### KC-P3-C02

- **Claim text:** The SEC later found that, beginning July 27 and continuing on
  successive days before August 1, Knight placed the new RLP code on a limited
  number of SMARS servers in stages; the new code was not copied to one of eight
  servers, and no second-technician review identified that difference before
  release.
- **Claim class:** `C — Attributed official finding`
- **Walkthrough phase:** `3 — Deployment reconstruction`
- **Source identity:** `P-R1`; fixed Source Manifest identity above
- **Citation locator:** SEC Order Release No. 70694, paragraph 15; Chronology
  `KC-T02`
- **Attribution:** U.S. Securities and Exchange Commission
- **Source date:** `2013-10-16`
- **Historical-knowledge status:** Later official reconstruction; who knew of the
  server difference before release is not established.
- **Hindsight status:** `LATER-OFFICIAL-FINDING`
- **Confidence boundary:** Staged deployment and the stated omission are
  retrospectively supported; exact server-by-server times, commands, checks, and
  acceptance are not.
- **Contradictory source:** `NONE IDENTIFIED`
- **Evidence-gap reference:** `KC-CC03`, chronology conflict `KC-CT01`
- **Replay eligibility:** `REPLAY-NOT-AUTHORIZED`
- **Reviewer note:** Omitted copying does not establish human intent, negligence,
  complete production state, or Root Cause.

### KC-P3-E01

- **Claim text:** The fixed public record does not supply the change ticket,
  release plan, deployment script, console output, checklist, peer review,
  approval, rollback plan, test record, configuration verification, precise
  server-by-server timing, technician identities, or release rationale.
- **Claim class:** `E — Explicit uncertainty claim`
- **Walkthrough phase:** `3 — Deployment reconstruction`
- **Source identity:** Evidence-Gap Assessment fixed identity above
- **Citation locator:** `KC-CC03 — Deployment claims`, `Missing Evidence`;
  Chronology `KC-T02`, `Still unknown`; conflict `KC-CT01`
- **Attribution:** Management OS fixed Evidence-Gap and Chronology assessments
- **Source date:** `2026-08-03`
- **Historical-knowledge status:** Missing from the fixed public record; not proven
  absent from history.
- **Hindsight status:** `NOT-APPLICABLE`
- **Confidence boundary:** `materially absent` or `unknowable from current public record`
- **Contradictory source:** `NONE IDENTIFIED`
- **Evidence-gap reference:** `KC-CC03`, `KC-CT01`
- **Replay eligibility:** `REPLAY-NOT-AUTHORIZED`
- **Reviewer note:** The gap is not filled by plausibility.

## Phase boundary

```text
Claims: 3 (Class C: 2; Class E: 1)
Analyst synthesis: NONE
Production-state reconstruction: NOT STARTED
Incident emergence: NOT STARTED
Replay material: NONE
Authority and methodology: UNCHANGED
```

Deployment statement ≠ verified production state. Temporal sequence ≠ causal
proof. Phase 4 has not begun.
