# M9 Opening Authority Record Structure

## Status

**Artifact type:** Supporting authority structure

**Decision:** No Decision

**Authority effect:** No authority effect

This document defines a reusable structure for a possible future attributable
human Decision. It is not the Decision, does not approve the proposal, does not
authorize a transition, and does not open M9.

## 1. Decision Identity

The only Decision identity supported by this structure is:

> Whether to approve the fixed reviewed M9 proposal and authorize a separate
> bounded repository transition that opens M9 — Empirical Product Value
> Learning.

The Decision remains separate from:

- proposal-preparation authorization;
- proposal review;
- the authority transition that would mutate repository control surfaces;
- initial stage definition;
- initial backlog-task definition;
- Product Value Hypothesis selection;
- scenario, case, candidate-class, or validation-subject selection;
- operational Evidence access;
- validation preparation or execution authorization;
- Engineering Architecture;
- prototype, implementation, deployment, or delivery authorization; and
- milestone completion, closure, or successor transition.

No Decision on this identity can silently decide another identity.

## 2. Fixed Inputs

| Input | Commit | Blob |
| --- | --- | --- |
| M9 Opening Authority Decision Package | `b5e5f1bf7e38787158f20a5a0d913fe5bdc8d812` | `92958a0db20ee38e82408715d0fb6010efe11ae3` |
| M9 Empirical Product Value Learning Proposal | `ef28d0f46cb77d108586cd4c910465e2e4c384e9` | `78740c6665c6d5457059cee92181615253a113f4` |
| M9 Proposal Critical Review | `00b9eaf4b30889e71ac0a8765bd1e7b78c58b931` | `cd09ae21dc9d1087bafd24593082fc8b94f70463` |
| M9 Proposal Preparation Authority Decision | `fa92e37d8cf93b9948f0504c1c68c459cb4ca295` | `c56878cad9780186d45b400c9c903e16b984e5c7` |

```text
Proposal review disposition: M9 Proposal Boundary Preserved
Blocking findings: 0
Advisory observations: 3
```

Any modified proposal is a new Decision object requiring a new independent
review and opening consideration. Paths, filenames, `HEAD`, similarity, or
correction intent cannot replace the fixed commit/blob identities.

## 3. Permissible Dispositions

Exactly one disposition may be selected by an accountable human:

### A — Approve proposal and authorize bounded opening of M9

Approve only the fixed reviewed proposal and authorize preparation and
execution of a separate bounded repository transition.

### B — Require bounded correction or clarification before opening

Do not approve or open M9; record finite correction, clarification, or missing
transition inputs required for another consideration.

### C — Defer M9 opening

Record no current approval or refusal and preserve the question for possible
later reconsideration without automatic effect.

### D — Decline M9 under the reviewed identity

Decline M9 opening under the fixed reviewed proposal and current evidence basis.

The dispositions are unranked and carry no recommendation, preference, default,
or progression path. This structure selects none.

## 4. Required Human-Owned Inputs

A future attributable record must contain:

- accountable authority identity;
- legitimate authority basis;
- exactly one selected disposition;
- human-owned rationale and retained uncertainty;
- Decision date; and
- attributable human attestation.

AI must not infer, populate, choose, simulate, paraphrase into existence, or
attest these fields. Repository authorship, prior Decisions, proposal or review
completeness, apparent intent, and conversation context cannot substitute for
direct human input.

## 5. Disposition-Specific Minimum Content

Every disposition record must preserve the exact Decision identity, fixed
inputs, all mandatory human fields, explicit non-effects, and current-state
truth.

### A — Minimum content

The record must:

- approve only proposal blob
  `78740c6665c6d5457059cee92181615253a113f4`;
- authorize only preparation and execution of a separate bounded authority
  transition;
- permit M9 to become the sole active milestone through that transition;
- require exactly one bounded initial stage;
- require exactly one active backlog task corresponding to that stage;
- identify the exact initial stage and backlog-task identities before
  transition, because the fixed proposal selects neither;
- identify exact control surfaces permitted to change; and
- preserve every explicit non-effect in Section 7.

### B — Minimum content

The record must identify each finite correction, clarification, or missing input,
its material relevance, and the fixed object requiring later review. It must
state that no approval, opening, or correction work is automatically authorized.

### C — Minimum content

The record must state why opening is deferred and identify any reconsideration
condition, or explicitly state that none is set. Time or condition occurrence
cannot automatically approve or open M9.

### D — Minimum content

The record must state why M9 is declined under the reviewed identity and whether
any reconsideration boundary is set. Decline does not erase the proposal or
review and does not decide a materially different future identity.

## 6. Disposition A Maximum Decision Effect

If A is validly selected, its maximum Decision effect is:

- approve only the fixed proposal blob;
- authorize preparation and execution of a separate bounded authority
  transition;
- permit that transition to make M9 the sole active milestone;
- require that transition to establish exactly one bounded initial stage;
- require that transition to establish exactly one active backlog task; and
- preserve all explicit non-effects.

Decision A itself must not mutate repository control surfaces. The exact
initial stage and task remain transition-design requirements until directly
specified under legitimate human authority.

```text
Decision
  ≠ authority transition
  ≠ substantive empirical authorization
```

## 7. Explicit Non-Effects

This structure, and even a future valid disposition A, does not by itself:

- mutate roadmap, backlog, milestone, stage, order, or other control surfaces;
- open M9 without the separate bounded authority transition;
- independently define the initial stage or backlog task;
- select, rank, prioritize, prove, validate, or reject H1–H5;
- select a scenario, case, candidate class, or validation subject;
- grant access to operational Evidence;
- authorize validation preparation, design, or execution;
- authorize an operational Decision or Change;
- create or authorize Engineering Architecture;
- authorize prototype development, implementation, deployment, or delivery;
- define KPIs, metrics, experiments, thresholds, or acceptance criteria;
- claim empirical value, product success, or causality;
- amend canonical M7/M8, Product Vision, Systems, Owner Journey, source-owned
  architecture, or Product Constitution role; or
- authorize milestone completion, closure, or successor work.

## 8. Preservation Boundaries

- Product Vision retains product-purpose authority.
- Systems retains system-responsibility authority.
- Canonical M8 retains architectural authority for its scope.
- Canonical M7 retains governance authority.
- Source systems retain Evidence, access, correction, and mutation authority.
- Product Constitution remains a non-canonical auxiliary reference.
- H1–H5 remain unvalidated and unselected research hypotheses.
- Proposal review remains review, not approval.
- Proposal presence remains distinct from milestone existence.
- M9 opening remains distinct from validation authorization.
- Repository presence creates no authority.

This structure introduces no governance beyond the bounded Decision record
shape described here.

## 9. Future Record Validity Checks

Before reporting a future record as a valid Decision, verify:

1. the Decision identity is materially unchanged;
2. all fixed input commit/blob pairs resolve exactly;
3. exactly one of A–D is directly selected by the accountable human;
4. all human-owned fields are directly completed and mutually consistent;
5. disposition-specific minimum content is satisfied;
6. no compound or hidden Decision identity is introduced;
7. for A, exact initial stage, task, and permitted control surfaces are fixed
   before transition;
8. Decision and authority transition remain separate records/actions;
9. every explicit non-effect and preservation boundary remains intact; and
10. no repository state change is reported before its separately attributable
    transition evidence exists.

Failure of a check prevents authority reporting and cannot be cured by AI
inference or repository mechanics.

## 10. Current State

```text
Disposition: NONE
Authority effect: NONE
```

No human-owned Decision inputs have been supplied through this structure. M9
remains not created and not opened.
