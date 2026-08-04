# Historical Walkthrough Reader — Execution Wave 4 Report

## Status

COMPLETE

## Objective achieved

The Historical Walkthrough Reader now behaves as a viewport-first operational
workspace rather than a document site or presentation page. The primary reading
layer, case context, phase state, attention state, and Working Set are visible in
the initial desktop viewport at both target sizes.

## Implementation identity

- Commit: `82a2f1db40db4940c1a21583b1aed54fb197ecfa`
- Scope: Historical Walkthrough Reader implementation and its browser contract
- Deployment: not performed

## Material changes

### Viewport-first workspace

- The oriented Reader header, situation band, repository status, and phase rail
  were compacted.
- The operational workbench begins inside the first 1440×900 viewport.
- At 1920×1080, the primary Ukrainian claim, Working Set action, original-language
  control, and source-verification control are all visible without page scrolling.
- Long claim collections retain one bounded scroll region; source text itself may
  extend vertically only when genuinely long.

### Ukrainian-first reading

- All 48 fixed claim identities have an implementation-owned Ukrainian
  translation.
- Ukrainian is the default list and inspection language.
- `Показати мовою оригіналу` reveals the unchanged fixed English wording.
- Working Set excerpts also use the Ukrainian reading layer.

The translations are non-authoritative reading aids. They do not replace, amend,
or reinterpret the fixed historical claim ledger. Claim IDs and original English
text remain the verification basis.

### Progressive disclosure

The following are collapsed by default:

- original English wording;
- source identity, commit, blob, citation locator, attribution, and source date;
- source links;
- confidence boundary;
- hindsight and historical-knowledge status;
- contradictory source, evidence-gap, Replay eligibility, and reviewer note;
- global Reader authority boundaries in the header.

### Operational sidebar

The Reader sidebar is now organized around the open case rather than the global
site map. It shows:

- the open Knight Capital case;
- Orientation, Historical Reading, and Reflection Boundary;
- current phase;
- visited-phase count;
- remaining phases requiring attention;
- current claim focus;
- read-only historical authority state.

Other Management OS spaces remain reachable through secondary disclosure, but
were not modified in this wave.

### Information hierarchy

The first scan now answers:

1. Where am I? — Historical Walkthrough Reader.
2. Which case is open? — Knight Capital, Walkthrough 01, Shape B.
3. What matters now? — the current phase and selected Ukrainian claim.
4. What was inspected? — claim and phase visited states.
5. What still needs attention? — remaining phase and claim status.

## Verification

The complete browser contract confirms:

- 11 fixed phases;
- 48 fixed claim blocks;
- 48 Ukrainian presentation translations;
- Ukrainian primary reading layer;
- English original closed by default and available on request;
- source metadata and traceability closed by default and available on request;
- phase navigation and visible visited state;
- claim inspection state;
- Working Set add and remove behavior;
- source navigation;
- Replay boundary;
- Reflection actions remain disabled;
- Ukrainian document language.

## Screenshot evidence

1. `M9_HISTORICAL_WALKTHROUGH_READER_EXECUTION_WAVE_04/01-workspace-1440x900.png`
2. `M9_HISTORICAL_WALKTHROUGH_READER_EXECUTION_WAVE_04/02-workspace-1920x1080.png`
3. `M9_HISTORICAL_WALKTHROUGH_READER_EXECUTION_WAVE_04/03-orientation-1440x900.png`
4. `M9_HISTORICAL_WALKTHROUGH_READER_EXECUTION_WAVE_04/04-reflection-1440x900.png`
5. `M9_HISTORICAL_WALKTHROUGH_READER_EXECUTION_WAVE_04/05-browser-journey.png`

## Authority preservation

- Canonical meaning: unchanged.
- Product Realization: unchanged.
- Interaction Architecture: unchanged.
- Engineering Architecture: unchanged.
- Fixed historical artifacts and sources: unchanged.
- Evidence identities: unchanged.
- Replay: not authorized and not introduced.
- H3: unvalidated.
- Root Cause and causal proof: not established.
- ROADMAP and BACKLOG: unchanged.
- Deployment: not authorized and not performed.

## Explicit scope resolution

The request to begin bringing other operational spaces toward the same quality
level conflicts with the final instruction prohibiting implementation outside
the fixed Historical Walkthrough Reader execution scope. Therefore Головна,
Операційні справи, Порядок денний, and Знання were not modified.
