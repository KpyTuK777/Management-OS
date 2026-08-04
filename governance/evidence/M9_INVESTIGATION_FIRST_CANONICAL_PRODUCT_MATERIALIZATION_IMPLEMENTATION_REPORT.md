# M9 Investigation-first Canonical Product Materialization Implementation Report

## Report identity

- Implementation commit: `8fd2a05d03840a686d4d87308efa71fba3330d7e`
- Execution transition: `e7f2fc4f1908acbaaf64ac8c2c3a97fba7a16a2a`
- Authority Decision: `f92f35958f2f334b13f59cb58cfaaec3bccdfa1e`
- Implementation date: 2026-08-04
- Deployment: NOT AUTHORIZED / NOT PERFORMED

## Implemented product outcome

`index.html` is now a coherent Investigation-first Management OS environment rather than a mixed repository-era demonstration. An accountable manager can remain inside one operational Investigation and move among Current Situation, material inspection, provisional reasoning, and bounded temporal context without understanding repository files.

The Historical Walkthrough Reader remains available as a supporting learning module and was not modified.

## Fixed implementation identities

| File | Blob |
| --- | --- |
| `index.html` | `eba055b9ee47d8a08feaf8620986838aa8dfc0ef` |
| `css/investigation-workbench.css` | `bc1b67c4bc2869cce44f5806cb0afd2cf1800c78` |
| `js/investigation-workbench.js` | `970874328ee3201dea12032c9d18cd796621c3a6` |
| `tests/investigation-workbench.browser.html` | `af1806ab5bfccbec0fb60acaefb6066c8c1e4920` |

## Capability realization

| Capability | Realized behavior | State |
| --- | --- | --- |
| Application shell | One Management OS shell with primary Investigation and supporting Reader/Knowledge routes | WORKING |
| Global navigation | Clear location, current module, open Matter, and local-prototype boundary | WORKING |
| Investigation identity/status | MAT-0247, bounded question, owner, status, update context | WORKING |
| Current Situation | Plain-language summary, metrics, explicit absence of established cause | WORKING |
| Current Situation revision | Local new version with previous text retained in visible history | PARTIAL — local prototype |
| Known material | Source-linked supported statements separated from open questions | WORKING |
| Unknowns | Visible unanswered questions plus local owner addition | WORKING — bounded representation |
| Contradictions/gaps | Four explicit unresolved attention items with inspection | WORKING |
| Material representation | Six representative local reports/notes/conversations/schemes | WORKING — local sample only |
| Material addition | Owner may add a local item; it enters as unverified | WORKING — no external ingestion |
| Evidence status | Verified, unverified, and contradictory states remain explicit | WORKING |
| Provenance/attribution | Source, attribution, dates, locator, event and record times inspectable | WORKING |
| Working Set | Add/remove with browser-local persistence; Evidence status unchanged | WORKING |
| Inspector | Focus material, question, contradiction, hypothesis, or event without losing context | WORKING |
| Progressive disclosure | Understanding first; verification and technical identity in Inspector | WORKING |
| Hypotheses | Four provisional hypotheses plus bounded local human creation | WORKING — provisional only |
| Evidence links | Supporting and contradicting materials remain explicit | WORKING |
| Relationships | Read-only source-to-hypothesis relationship list with fixed relation meanings | WORKING — bounded types |
| Timeline | Three source-linked events with event/record time and uncertainty | READ-ONLY / PARTIAL |
| Human judgment boundary | Decision action disabled; explanation states that the product does not establish cause or decide | WORKING |
| AI boundary | AI analysis labeled as requiring separate permission; no AI runtime simulated | NOT AVAILABLE |
| External integrations | Explicitly unavailable; local addition does not pretend to retrieve sources | NOT AVAILABLE |
| Responsive behavior | Desktop, compact rail, mobile drawer, scroll-safe tabs and single-column context | WORKING |
| Accessibility baseline | Ukrainian document language, semantic headings, labels, focus-visible styles, live announcements, keyboard-native controls | WORKING — baseline |
| Empty/degraded boundaries | Empty Working Set, empty filter results, unavailable capabilities, read-only timeline | WORKING |

## Semantic preservation

- Adding material to Working Set does not change Evidence status.
- Adding a local material creates an unverified item.
- Hypotheses remain provisional and cannot become facts through presentation.
- A Relationship states support or contradiction; it does not establish causation.
- Timeline ordering is read-only and qualified; no date is inferred.
- Current Situation is a revisable representation; previous meaning is retained.
- The product does not record an authoritative Decision.
- No source, canonical artifact, historical artifact, or Reader content is mutated.

## Human experience realization

- Primary language is accessible Ukrainian.
- Operational question and Current Situation dominate the first viewport.
- Metadata is available in the Inspector rather than repeated across the canvas.
- Dark wood, warm paper, restrained brass, editorial hierarchy, and calm office composition implement the fixed Design Bible constraint without new visual canon.
- Desktop uses a persistent contextual column; narrow viewports use a hidden rail and one-column flow.

## Verification

### Browser journey

`tests/investigation-workbench.browser.html` passed in headless Microsoft Edge with local file access enabled.

The journey verifies:

- Ukrainian primary language;
- no horizontal document overflow in a 390 px test frame;
- Current Situation default route;
- known and unknown material rendering;
- Evidence navigation and filtering surface;
- Working Set addition and local persistence;
- unchanged Evidence status after selection;
- Inspector event-time and record-time visibility;
- hypothesis and bounded Relationship rendering;
- read-only timeline boundary;
- future-authority visibility;
- Replay absence.

Node contract tests could not be executed in this session because Node.js is not installed in the environment. Existing model modules were not modified, and the new runtime has no Node dependency.

### Screenshot evidence

- `governance/evidence/M9_INVESTIGATION_FIRST_MATERIALIZATION/01-situation.png`
- `governance/evidence/M9_INVESTIGATION_FIRST_MATERIALIZATION/02-evidence.png`
- `governance/evidence/M9_INVESTIGATION_FIRST_MATERIALIZATION/03-reasoning.png`
- `governance/evidence/M9_INVESTIGATION_FIRST_MATERIALIZATION/04-mobile.png`

## Corrections during implementation review

1. Legacy global hypothesis-card styles initially overrode the workbench visual language; Investigation-specific semantic scoping removed the conflict.
2. The mobile shell initially inherited a global `main` width/padding contract and clipped content; the workbench now resets that legacy page contract and passes a 390 px overflow assertion.
3. Remaining user-facing `READ-ONLY`, `PARTIAL`, `Deployment`, and `authority` labels were replaced with understandable Ukrainian.
4. Timeline and Relationship status labels were retained but moved into subordinate boundary chips.

## Explicit non-effects

No implementation changed canonical, Product, Interaction, or Engineering meaning. No framework, dependency, API, persistence technology, external integration, AI runtime, production topology, deployment, Replay, H3 validation, Root Cause, causal proof, metric, KPI, or experiment was introduced.

## Remaining bounded limitations

- one representative local Investigation only;
- localStorage rather than durable identity-bound persistence;
- local sample material rather than actual external sources;
- read-only partial timeline;
- fixed Relationship meanings;
- baseline accessibility verification rather than formal certification;
- no authoritative Decision recording, post-Decision lifecycle, AI runtime, or deployment.

These limitations are visible in the product and match the reviewed inventory. They are not silently simulated as complete behavior.

