# Expanded Organization Map correction evidence

Date: 2026-08-09
Baseline: `c1ce24d40727d47d411132e1ccc3c63b9abb0cff`

## Root cause

`css/modernization.css` gives the global `main` element a centered `max-width: 1440px`. Expanded Map hid surrounding chrome, but did not override that ancestor constraint, so its canvas could only grow inside the centered 1440px column.

## Measured result

Measurements come from the real `index.html`, loaded by `tests/expanded-map-geometry.browser.html` in headless Edge. A requested 1920×1080 browser window produced a 1896px content viewport.

As with the repository's other local-file iframe journeys, Chromium must be launched with `--allow-file-access-from-files`. A fresh-profile desktop proof is reproducible from the repository root with:

```powershell
& 'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe' --headless --disable-gpu --no-first-run --allow-file-access-from-files --window-size=1920,1080 --virtual-time-budget=10000 --user-data-dir='.edge-expanded-proof' --dump-dom 'file:///D:/Frontend/GitHub/Management-OS/tests/expanded-map-geometry.browser.html'
```

The resulting DOM must contain `body data-test-result="pass"`; the temporary `.edge-expanded-proof` profile is not a product artifact and must not be committed.

| Contract | Before | After |
| --- | ---: | ---: |
| content viewport | 1896px | 1896px |
| expanded `.lom-main` | 1440px | 1896px |
| Map canvas | 1300px | 1876px |
| canvas gutters | 298px / 298px | 10px / 10px |
| document horizontal overflow | none | none |

The large fixture contains 19 departments, including a deep containment branch. In expanded desktop geometry the Map owns a 2774×1343px scroll surface inside a 1876×906px canvas. At laptop geometry (requested 1366×768; 1342px content viewport), the canvas is 1322×594px with 10px gutters. Both axes remain internal to the Map, and `scrollLeft=160` / `scrollTop=120` survive mode changes.

## Visual evidence

- `expanded-map-before-1920.png` — baseline: centered 1440px ancestor leaves 298px canvas gutters.
- `expanded-map-after-1920.png` — corrected: Map reaches the viewport with 10px inset.

## Product-state checks

- Structure lens, selected node, search value, and Map scroll position survive expand/collapse/expand.
- Normal mode returns to its original constrained width.
- Search, semantic drag/drop, Escape return/focus, persistence, and 390px behavior are covered by the real-entry `living-organizational-model.browser.html` journey.
- The change does not write or reinterpret governed organizational data.
