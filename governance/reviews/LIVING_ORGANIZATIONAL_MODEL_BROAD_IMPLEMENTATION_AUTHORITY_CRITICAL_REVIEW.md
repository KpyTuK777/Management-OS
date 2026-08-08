# Living Organizational Model broad Implementation Authority critical review

## Review identity

- Scope/reconciliation: commit `83f46a02a52f4e8f5d6996814c581d40d341b147`, blob `a7e0669ae3acf817078832842114076398467f8a`
- Execution contract: commit `fb45b4205306ac48e095dc13d2ed175c9ce66fbe`, blob `53a0b3aca50e0bc73d563ff84d5b7d80629dba91`
- Review disposition: **CONDITIONALLY READY — bounded corrections required**
- Implementation authority: NONE

## Review method

The review challenged the proposed package against the adopted authority base and inspected implementation reality. It tested whether the future executor could misread broad autonomy as authority to invent meaning, expose people data, overwrite Investigation state, mutate arbitrary files, claim success without direct-browser evidence, or turn local persistence into false identity/security.

## Confirmed strengths

- The scope is broad and coherent rather than divided into screen-level approvals.
- The organization-first outcome preserves Investigation rather than replacing its valid epistemic work.
- READY, PARTIAL, DEFERRED, and NOT AUTHORIZED capabilities are separated.
- The current static stack and no-dependency default are proportionate.
- Persistence, migration, privacy, responsive, accessibility, failure, and review obligations are materially testable.
- Stop conditions preserve every upstream authority boundary.

## Findings requiring correction

### IR-1 — local Workspace identity could be mistaken for authenticated authority

Severity: HIGH.

The contract requires workspace separation and command authority but does not explicitly say how a browser-only first organization receives Workspace identity when the current product has no authenticated Account/Membership enforcement. An executor could invent a user/role system or, conversely, treat a client-supplied ID as authorization.

Required correction: authorize only a locally generated opaque workspace/container ID for single-browser partitioning. It must be labeled non-authenticating in code contracts, confer no human authority, and never unlock named/restricted people functions. Authentication, Membership, multi-user authorization, sharing, and workspace transfer remain stop conditions.

### IR-2 — PARTIAL people scaffolding is too permissive

Severity: HIGH.

“Repository type contracts” and synthetic person references could accidentally create active named-person endpoints, searchable fields, or shipped demo people. Disabled UI alone does not make a capability privacy-safe.

Required correction: implementation may define enums/interfaces and policy-denial tests necessary for future compatibility, but runtime creation, persistence, fixtures, indexing, navigation, counts, or projection of person/contribution records must remain disabled. Test identities must be non-human opaque sentinels confined to tests and never shipped as Product data.

### IR-3 — Investigation migration needs a non-destructive acceptance gate

Severity: HIGH.

The contract preserves v1 stores but does not define the acceptance comparison between source and migrated records. A syntactically successful migration could lose revisions, Evidence links, Working Set membership, Hypothesis relationships, or active Investigation selection.

Required correction: before activation, compare counts, stable IDs, Situation revisions, materials/statuses, Hypotheses/support/contradiction, Working Set membership, timeline, title/context, and saved-record timestamps. Preserve original keys for the full cycle. Any mismatch blocks activation and opens the original through compatibility mode.

### IR-4 — legacy Improvement reuse remains ambiguous

Severity: MEDIUM.

The current `improvement-proposals.html` and related scripts predate the adopted Improvement mode. “Supersede where conflicting” is correct but could still permit semantic reuse without a field-by-field mapping.

Required correction: treat legacy Improvement records/UI as non-authoritative compatibility input. Reuse styling or generic interaction code only. Do not migrate records into adopted Improvement unless a reviewed mapping proves each field and state compatible; otherwise preserve them read-only and visibly separate or leave the route untouched.

### IR-5 — bounded file rule needs execution traceability

Severity: MEDIUM.

Purpose-bounded areas are preferable to a brittle allowlist, but root entry points and broad `js/`/`css/` could conceal unrelated cleanup.

Required correction: require the execution evidence to list every changed file grouped as new product, compatibility/refactor, tests, evidence, or review, with a one-line necessity. Files outside permitted areas or unrelated changes trigger review failure. Existing user changes must be preserved.

### IR-6 — completion evidence needs an explicit browser truth source

Severity: MEDIUM.

The contract allows direct-browser fallback, but a future executor might use static inspection alone or a synthetic smoke page that does not exercise the actual entry point.

Required correction: require direct execution of the real `index.html` application in a browser for empty start, persistence reload, migration compatibility, organization journeys, Investigation/Improvement handoffs, modal stress, desktop and 390 px checks. A smoke harness may supplement but cannot replace real-entry verification. Record browser/version and console/runtime errors.

### IR-7 — people-free export/import is unnecessary scope by default

Severity: LOW.

The optional export/import clause could consume execution effort and widen the trust surface although deterministic retained generations already provide bounded recovery.

Required correction: exclude export/import from the authorized default scope. It may be added only if execution proves local recovery cannot satisfy the adopted completion condition and stops for a bounded authority revision.

## Non-blocking observations

- DOM/SVG/canvas Map selection is correctly delegated after measurement; it must not introduce a dependency.
- An unavailable Watson surface should not occupy prime viewport space or impersonate an active Inspector.
- Existing demo Investigation content may remain only behind an explicit demonstration entry, not startup or migrated user state.
- A broad execution can use multiple commits, but evidence should map commits to coherent outcomes rather than components requiring approval.

## Review conclusion

No new canonical, Product, Interaction, privacy, or Engineering gap was found. IR-1 through IR-7 are bounded execution-contract corrections. After correction and repeat review, the package may be suitable for neutral human Implementation Authority consideration.

## Authority effect

NONE. This review authorizes no implementation or repository transition.
