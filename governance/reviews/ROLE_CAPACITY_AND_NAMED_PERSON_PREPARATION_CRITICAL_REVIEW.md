# Role capacity and named-person preparation critical review

## Review scope

Independent read-only review examined:

- the attributable Role Position Capacity Decision and immutable package bindings;
- Role planned-capacity canonical/Product/Interaction/Engineering readiness;
- named-person local-runtime readiness;
- adopted Living Organizational Model, People & Privacy, Interaction, Engineering, and broad implementation boundaries;
- current local repository persistence and Role-placement compatibility behavior.

No runtime or adopted authority file was changed by the reviewer.

## Initial findings and corrections

### CR-1 — deletion versus retained generations — HIGH

The first named-person draft promised deletion propagation without reconciling names retained in immutable recovery generations.

Correction: activation now requires an erasure-aware protocol covering a non-sensitive deletion ledger, recovery-candidate rejection/sanitization, physical purge/replacement of reconstructive generations, index/cache rebuild, non-reconstructive historical endpoints, crash-point tests, and a hard stop if localStorage cannot guarantee non-resurrection.

### CR-2 — Role movement and scoped capacity — MEDIUM

The first capacity draft did not define what happens when a Role moves between Departments.

Correction: Department-scoped capacity never follows silently. Move preview must identify applicable assertions; the user must explicitly end/supersede at the effective time or cancel; new-scope capacity requires a new/reconfirmed assertion; old scope remains historical; compatibility containment is command context only.

### CR-3 — retention review — MEDIUM

The first named-person draft required purpose at creation but allowed indefinite retention without review.

Correction: runtime now requires an accountable `reviewAt` period. Expired records enter non-revealing suspension before search/projection/navigation/counts until purpose re-attestation or disposal. Activation is deferred if no period is selected.

### CR-4 — zero-capacity meaning — LOW

The first capacity draft silently made capacity a positive integer although the human Decision did not settle whether zero is invalid or an explicit zero plan.

Correction: zero handling is a visible successor implementation Decision. Tests are conditional on that choice; negative and fractional values remain invalid.

## Repeat-review findings and corrections

### RR-1 — residual unconditional zero rejection — MEDIUM

One validation gate still rejected zero regardless of the selected rule.

Correction: unconditional rejection now covers only genuinely invalid negative, fractional, malformed, cross-Workspace, missing Role, and missing scope cases.

### RR-2 — contribution-time “capacity” ambiguity — LOW

Named-person future compatibility used “contribution-time capacity”, which could now be misread as planned Role capacity.

Correction: it now names contribution-time Role/Department context and applicable occupancy/membership assertion versions, and explicitly excludes planned Role capacity as a Person attribute/context.

## Verified conclusions

- fixed consideration commit/blob bindings are exact;
- the Decision records only temporal PLANNED capacity and preparation authority;
- a dedicated scalar assertion is the minimum coherent model and creates no Position identity;
- direct Person → Role occupancy remains separate;
- runtime Role-via-containment compatibility is not silently canonicalized;
- named-person purpose, minimal fields, search, Workbench ceiling, single-custodian limitation, retention, erasure, and InformationContribution exclusion are explicit;
- implementation remains unauthorized;
- no bounded defect remains in the corrected preparation.

## Disposition

READY FOR NEUTRAL HUMAN IMPLEMENTATION-AUTHORITY CONSIDERATION PACKAGES.
