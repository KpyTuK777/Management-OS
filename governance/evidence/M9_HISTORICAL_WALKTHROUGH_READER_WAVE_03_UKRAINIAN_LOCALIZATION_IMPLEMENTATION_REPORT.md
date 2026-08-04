# Historical Walkthrough Reader Wave 3 Ukrainian Localization Implementation Report

## Identity

```text
Correction: PRIMARY USER LANGUAGE — UKRAINIAN
Starting HEAD: 7230bba2dc753e46a6cefb4ab17687876d40a2e4
Implementation commit: 68b16c7e44de4b38feabf92c6db0c255f86555b0
Historical inputs: UNCHANGED
Replay: NOT AUTHORIZED
H3: UNVALIDATED
Reflection finalization: NOT AUTHORIZED
Deployment: NOT AUTHORIZED
```

## Authority and Semantic Boundary

The correction is covered by the existing bounded implementation-execution
authority. It changes presentation language and localization layout only. Product,
Interaction Architecture, Engineering Architecture, historical, canonical, and
authority meaning remain unchanged.

Fixed parser keys continue to match the English field names in the immutable
walkthrough artifacts. They are implementation identifiers, not visible interface
language. No fixed claim, quotation, source identity, source title, commit, blob,
claim ID, or artifact path was edited.

## Fixed Implementation Outputs

| Output | Blob |
| --- | --- |
| `historical-reader.html` | `95366c116a555501753de252bc757a3e66a7cac4` |
| `css/historical-reader.css` | `3eb4db10c509a90ca759b82d5ba214d72f86dfa4` |
| `js/historical-reader.js` | `f3f3aaf0744bc293a9e9237460439c1acc1b1f9e` |
| `js/sidebar.js` | `71bfb825b4db8a86d5b64504c72b347e6abcf217` |
| `tests/historical-reader-structural.browser.html` | `fc362fbe175b0b33c249a7447e0a8e40fd6142fa` |

## User-Visible Localization

The default document language is now Ukrainian. Localized surfaces include:

- document title, product heading, case explanation, navigation, and case docket;
- authority chips, Replay boundary, H3 state, and read-only state;
- Orientation, Workbench, Current Situation, phase names, adjacent-phase actions,
  loading, available, current, and visited states;
- Claims, Evidence/source inspection, metadata labels, provenance actions,
  uncertainty, traceability, empty and degraded messages;
- Working Set title, empty state, add/remove actions, count feedback, and explicit
  non-promotion-to-Evidence explanation;
- Reflection destination, authority explanation, disabled actions, and error-versus-
  governance distinction;
- sidebar label, accessible names, phase labels, test harness, and test failures.

Fixed claim classes receive Ukrainian display labels while their stored values
remain unchanged. Fixed English claim prose and historical metadata are marked
with `lang="en"` and described as original recorded content rather than silently
translated.

## Intentionally Preserved English

| String class | Reason |
| --- | --- |
| `Management OS`, `Knight Capital`, `Serhii` | Proper product, company, and person names |
| `Shape B`, `H3` | Fixed governed identities |
| `Root Cause`, `Learning` | Fixed management terms retained beside clear Ukrainian explanations |
| Claim IDs, commit/blob IDs, artifact paths | Immutable repository identities |
| Fixed claim prose and historical metadata values | Translation would create a new historical representation; UI identifies them as original English records |
| Source titles and source identity text | Original public-source identity and citation integrity |
| Parser field names and route/state identifiers | Non-visible implementation contracts with immutable English artifacts |

## Terms for Later User-Led Refinement

These working Ukrainian choices are usable and non-blocking but may be refined
after actual traversal:

- `Evidence` → `докази` / `доказові матеріали` by sentence context;
- `Claim` → `твердження`;
- `Working Set` → `робочий набір`;
- `Reflection` → `осмислення`;
- `Replay` → `повторне проходження`;
- `Traceability` → `простежуваність`;
- `Root Cause` → `першопричина (Root Cause)`;
- `Learning` → `організаційне навчання (Learning)`.

No terminology guide or canonical terminology authority is created.

## Review Corrections

Screenshot review identified one blocking localization-layout defect: the longer
Ukrainian docket label `Повноваження` collided with its value. The docket label
column was widened, the orientation screenshot was recaptured, and the correction
was accepted. No historical or semantic content changed.

## Browser Verification

```text
data-test-result: passed
Перевірка української версії пройдена
```

The complete journey verifies 11 phases, 48 claims, Ukrainian document language,
localized primary and sidebar navigation, localized accessible phase labels,
source inspection, traceability, adjacent-phase navigation, Working Set add/remove
and boundary feedback, Replay visibility, Reflection routing, and disabled
finalization.

## Screenshot Evidence

Directory:
`governance/evidence/M9_HISTORICAL_WALKTHROUGH_READER_WAVE_03_UKRAINIAN_LOCALIZATION_SCREENSHOTS`

| File | State | SHA-256 |
| --- | --- | --- |
| `01-uk-orientation.png` | Ukrainian entry and case docket | `7f2d19ba7b26404dbcd6cc7d84010f0c99b7243efe4e55a1f443088ea681a188` |
| `02-uk-active-phase.png` | Ukrainian Current Situation and phase | `d08035fe0cef1614419dd5c3938af8ccc66708866cfe81a69bba8f585a909c2f` |
| `03-uk-claim-source.png` | Ukrainian inspection shell around fixed English record | `0adea9522703e208679d2561c0e1d06da493dc7fa9f281f1bca14dcd44a727c4` |
| `04-uk-working-set.png` | Non-empty Ukrainian Working Set | `b4087677f33599d1a2fb4524e6cd51e70f63823a4aeb8fbf0416e8b37a93d3e7` |
| `05-uk-reflection-boundary.png` | Ukrainian Reflection boundary | `a2d22e5d6c83cdaa33f1c2a819b48e3d6919b936cc54a4b660de4c765e40669e` |
| `06-uk-responsive.png` | Narrow Ukrainian workbench | `05635271b73584d49329ec84a0a9ca091ec8377366881ef385dbb501d19f0ac9` |

## Non-Effects

No fixed historical, Product, Interaction, Engineering, canonical, ROADMAP, or
BACKLOG artifact changed. Replay, H3 validation, Root Cause determination, causal
proof, attributable reflection finalization, and deployment remain outside scope.

Final readiness is subject to the separate critical review.
