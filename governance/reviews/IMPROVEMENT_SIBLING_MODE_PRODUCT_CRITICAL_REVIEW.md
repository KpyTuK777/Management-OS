# Improvement sibling-mode Product critical review

## Review identity

- Reviewed definition commit: `1d6f8a0692d9a5d79bc4127bd3bac75b2c8e865c`
- Reviewed definition blob: `7f061452250906d34832651ab16c86ab9fbda96f`
- Reviewed readiness commit: `7b0efb0ae91178bda9f368e269e8b94794f34c61`
- Reviewed readiness blob: `10daddb2cf6d9091bb1fb17dce5204ec8501d923`
- Method: repository-grounded semantic and authority review against the fixed human direction and current canonical owners
- Initial disposition: **FAIL — three bounded Product-clarity blockers; no canonical or implementation effect**

## Blocking findings

### F1 — pre-Decision planning could collide with canonical Execution Planning

The Product sequence names `Implementation Plan` before the accountable human Decision, while the responsibility text later assigns detailed Execution Planning after Decision. The distinction is inferable but not explicit enough. A reader could treat a pre-Decision plan as source-approved execution scope, or treat the workspace as the owner of canonical Execution Planning.

Required correction: name the pre-Decision concern as a **candidate implementation approach** or equivalent decision-support projection. State that it can estimate feasibility, sequencing, owners, dependencies, safeguards, recovery, and monitoring, but creates no task, assignment, commitment, approved adaptation, source mutation, or canonical Execution Plan. Preserve post-Decision Operational Impact Review and source-owned Execution Planning.

### F2 — relationship to Matter identity is under-specified

The definition says Matter retains identity and the readiness assessment says Improvement may be composed around a Matter “where one exists.” Canonical `OPERATIONAL_MATTER_ARCHITECTURE.md` defines Matter as the thin persistent control-plane record for every operational situation. The conditional wording could permit a parallel Improvement identity to become a substitute lifecycle envelope.

Required correction: state that Improvement is a Product-mode work context linked to the applicable canonical Matter for a bounded operational situation. Its mode/workspace identity supports distinct history and transitions but does not replace Matter identity, macro-state, lineage, Decision, or Outcome references. Starting from an opportunity may create or link a Matter only through the existing Matter authority.

### F3 — the Improvement-to-Investigation trigger is too narrow

The transition contract says to use Investigation when an unknown “blocks responsible change consideration.” The fixed human direction also requires transition when deliberate-change work exposes insufficient understanding, contradiction, unknown dependency, or unexplained behavior. Such uncertainty may be material without fully blocking all Improvement work.

Required correction: allow a linked Investigation whenever uncertainty materially requires inquiry, whether the Improvement pauses, continues in unaffected areas, narrows, or stops. Explicitly prevent concurrent work from laundering assumptions into facts or Investigation Evidence.

## Review-question disposition

| Review question | Disposition | Review basis |
| --- | --- | --- |
| 1. Improvement genuinely distinct from Investigation | PASS WITH F3 CORRECTION | Deliberate-change design is distinct, but the transition trigger needs full coverage. |
| 2. Investigation semantics unchanged | PASS | No Investigation owner, state, Evidence rule, or internal sequence is amended. |
| 3. Improvement does not imply failure | PASS | Failure, incident, defect, bad performance, and correction necessity are excluded. |
| 4. Current system may be healthy | PASS | Healthy operation and existing value are explicit. |
| 5. Change may remain optional | PASS | No-action, reject, defer, narrow, experiment, preserve, and stop remain valid. |
| 6. Benefit uncertain before monitoring | PASS | Expected value and causality remain uncertain; Monitoring may be mixed or indeterminate. |
| 7. Decision authority human-owned | PASS | P4/accountable human retains approval and rejection authority. |
| 8. Implementation responsibility source-owned | FAIL PENDING F1 | Ownership is stated, but pre-Decision `Implementation Plan` terminology is ambiguous. |
| 9. Monitoring/Stabilization return into Living Model | PASS | Memory then governed model review returns to continued control. |
| 10. Operational Memory preserves history | PASS | Intent, Decision, assumptions, implementation, results, side effects, uncertainty, and lessons persist without rewriting. |
| 11. No Root Cause or causal proof inferred | PASS | Both are expressly prohibited. |
| 12. No new canonical organizational model | PASS | Operating Model remains sole representational authority. |
| 13. No duplicate P1–P6 responsibility | PASS WITH F1/F2 CORRECTION | No seventh view is claimed, but plan and lifecycle-envelope ambiguity must be removed. |
| 14. No implementation occurred | PASS | Only proposal and review markdown artifacts changed. |

## Additional authority checks

- Operational Impact Review remains post-Decision and does not reconsider the Decision: PASS.
- Decision Laboratory remains modeled and non-authoritative: PASS.
- Stabilization remains an Outcome contribution: PASS.
- Operating Model update remains separately reviewed and source-governed: PASS.
- Watson cannot choose, approve, infer Cause, execute, or declare success: PASS.
- People/privacy scope remains outside the proposal: PASS.
- ROADMAP/BACKLOG and active implementation remain untouched: PASS.

## Required bounded correction

One proposal-stage supplement may resolve all three findings without editing the reviewed historical artifact. The supplement must be read with the definition and readiness assessment, preserve their non-authoritative status, and add no Interaction, Engineering, implementation, or transition meaning.

After that supplement is committed, a separate repeat review must verify every required correction and all fourteen review questions before neutral authority-package preparation.

## Authority effect

NONE. This independent review rejects current package readiness only because of the three correctable clarity blockers. It does not reject the Product direction, adopt Improvement, amend canonical artifacts, or authorize implementation.
