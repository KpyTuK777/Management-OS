# Living Organizational Model canonical clarification critical review

## Review identity

- Clarification proposal: commit `fe8fd515c6da1cc8024ceb1a803413d94cbcbcd1`, blob `09243a89b45aa9fcf32dc15baa301c121026f589`
- Impact/readiness assessment: commit `631feab234469d101824674e119596b33ef83944`, blob `b4183a06b13290669fd0c62ebed586d84751be25`
- Method: independent semantic-ownership, canonical-minimality, temporal-integrity, privacy, projection, and authority review
- Initial disposition: **FAIL — five bounded canonical-clarity blockers**
- Canonical adoption, Engineering, and implementation: not authorized

## Blocking findings

### F1 — Operating-Model-owned element content is not bounded tightly enough

The proposal correctly distinguishes source-backed from Operating-Model-owned elements, but “minimum organizational identity” is not defined by a hard boundary. It could expand into HR, SOP, system, report, or calendar master data merely because no integration exists.

Required correction: limit Operating-Model-owned content to identity, organization-relative label/type, purpose/scope necessary for topology, temporal status, provenance, access, freshness, and correction metadata. Domain content remains source-owned or explicitly unknown. A missing source does not grant the Operating Model broader authority.

### F2 — current-state conflict resolution lacks authority precedence

The temporal model says conflicting applicable assertions become disputed and are not resolved by recency alone. It does not state how an authoritative source correction, owner-approved Operating Model assertion, imported declaration, and observation interact. Engineering would still need to invent precedence.

Required correction: define precedence by source authority and assertion class, not time. Authoritative source state leads within its scope; approved Operating-Model-owned assertions lead only where no higher source exists; declared/observed/inferred accounts remain qualified and cannot displace governed fact. Conflicts remain visible and may block unqualified current state.

### F3 — InformationContribution context/material authority could still be copied

The allocation gives the Operating Model the contribution relationship but does not make explicit that context and material endpoints must remain external references owned by their capabilities. A relationship record could absorb text, Investigation state, or Evidence classification.

Required correction: allow only a minimal faithful excerpt/transformation reference when needed for attribution display, with the source material ID/version and transformation class. The relationship cannot own full material content, work-context state, Evidence status/influence, or corrections to source content.

### F4 — tombstone semantics can leak restricted existence or break references

“Non-reconstructive tombstone when required” is directionally correct but underdefined. A universal tombstone visible to projections could leak that a person/contribution existed; complete removal could leave historical references falsely resolved or reassigned.

Required correction: tombstones are authorization-bound integrity markers, never ordinary projection content. Authorized historical consumers receive only the minimum unresolved/deleted-reference state; unauthorized consumers receive non-revealing absence. IDs are never reused or reassigned. Decision-time snapshots remain historical but follow redaction policy.

### F5 — reviewed Operating Model update authority is not explicit enough

The proposal says an attributable governed mutation occurs after source validation and applicable human authority but does not name who owns the semantic approval versus record transition. This could let Investigation, Improvement, Memory, a source integration, or Engineering treat a proposal as an update.

Required correction: the accountable human holding Operating Model semantic/update authority approves Operating-Model-owned assertions; source-owned changes require the source owner; the Operating Model records/reconciles only after valid authority. Investigation, Improvement, Impact Review, Monitoring, Stabilization, Memory, Watson, and integrations may propose or supply references but cannot approve or apply the update.

## Required-review disposition

| Required verification | Initial disposition |
| --- | --- |
| No competing organizational model | PASS |
| Operating Model retains sole representational authority | PASS |
| Organizational identities have one governed owner | FAIL PENDING F1 |
| Organizational relationships have one governed owner | PASS WITH F2/F5 |
| InformationContribution has unambiguous allocation | FAIL PENDING F3 |
| Temporal authority explicit | FAIL PENDING F2 |
| Corrections/supersession preserve history | PASS WITH F4 |
| Projections remain projections | PASS WITH F4 |
| Investigation and Improvement unchanged | PASS |
| People & Privacy intact | FAIL PENDING F1/F3/F4 |
| No implementation concern promoted | PASS |
| No unnecessary new canonical concept | PASS — two structural forms sit under an existing owner; one required specialization is bounded. |
| Engineering Architecture has not resumed | PASS |
| Implementation has not begun | PASS |

## Existing-owner and minimality findings

- Operational System and Process Condition Assessment remain distinct: PASS.
- Matter relationships remain situation-relative and do not become topology authority: PASS.
- Account/Membership remain separate from named organizational participant: PASS.
- Evidence ownership remains with Case Evidence Set: PASS WITH F3.
- Memory remains historical reference, not current truth: PASS.
- The current Matter-scoped Relationship implementation is not canonically generalized: PASS.
- No database, graph store, API, storage schema, framework, or migration is canonized: PASS.
- P1–P6 remain unchanged: PASS.

## Required bounded correction

One correction supplement may resolve F1–F5 without editing the historical proposal. A separate repeat review must verify all fourteen required checks and ensure that the correction remains a minimal extension of the existing Operating Model authority.

## Authority effect

NONE. This review blocks neutral canonical-adoption package preparation until correction and repeat review. It does not reject the proposed ownership direction, adopt canonical meaning, resume Engineering, or authorize implementation.
