# Design System

## Product identity and operational atmosphere

Management OS uses a custom geometric Workbench mark and a consistent 24-pixel outline icon family. Dock icons use restrained warm accents only for state and orientation; labels appear on demand. Motion is short and spatial, never attention-seeking.

The dark environment uses localized warm light, material depth, editorial scale, and generous negative space. Paper references belong only to working surfaces such as the Inbox. These treatments must improve orientation and cognitive calm, not simulate a themed room.

The design system begins with CSS custom properties in `CSS/base.css`. Shared
Sprint 6 presentation refinements and effective token overrides live in
`CSS/modernization.css`, which is imported last through `CSS/style.css`.

## Purpose and status

| Property | Decision |
| --- | --- |
| Version | Management OS Design System 1.0 |
| Status | Approved canonical visual language; normative for current and future interfaces |
| Delivery milestone | Sprint 24 |
| Authority | Recognition, visual gravity and direction, operational composition, visual vocabulary, relationship language, motion, atmosphere, cognitive comfort, and responsive identity |

Design System 1.0 is not a UI library or component catalogue. It defines how
Management OS communicates governed operational understanding. Product
architecture, source authority, lifecycle, and workflow remain governed by their
canonical documents.

## Canonical design principles

1. The owner perceives the operational situation before the interface.
2. Recognition precedes reading; text supplies precision.
3. Visual gravity follows operational relevance, never implementation structure.
4. Visual direction makes the next useful focus apparent.
5. Composition precedes components.
6. White space separates reasoning and supports spatial memory.
7. Progressive density reflects increased understanding, not component count.
8. Calm may be interrupted by material risk, contradiction, or required authority.
9. Motion communicates change and never decoration.
10. No meaning depends on color, icon, motion, or position alone.
11. Operational composition is spatial rather than a vertical stack when
    relationships among material are more useful than reading order.
12. Watson consumes visual attention only when its intervention can materially
    change understanding, judgment, safety, or action.

## Typography

The interface uses the `Inter` font family when available. The base scale is:

| Token | Size | Typical use |
| --- | --- | --- |
| `--font-xl` | `clamp(2rem, 3vw, 2.5rem)` | Page title (`h1`) |
| `--font-lg` | `clamp(1.5rem, 2vw, 1.75rem)` | Section title (`h2`) |
| `--font-md` | 1.125rem | Card title (`h3`) |
| `--font-base` | 16px | Body text and buttons |
| `--font-small` | 14px | Supporting text |

## Spacing

Spacing follows an 8px rhythm with 4px and 12px intermediate values. Available
tokens are `--space-4`, `--space-8`, `--space-12`, `--space-16`, `--space-24`,
`--space-32`, `--space-40`, `--space-48`, and `--space-64`.

## Colors

| Purpose | Token |
| --- | --- |
| Primary action | `--primary` / `--primary-hover` |
| Application background | `--background` |
| Surface | `--surface` |
| Primary text | `--text` |
| Secondary text | `--text-secondary` |
| Border | `--border` |
| Strong control border | `--border-strong` |
| Subtle selected surface | `--primary-soft` |
| Subtle neutral surface | `--surface-subtle` |
| Keyboard focus | `--focus-ring` |
| Semantic states | `--success`, `--warning`, `--danger` |

## Layout

The `.app` shell is a two-column grid with a 248px sidebar
(`--sidebar-width`) and a fluid content area. Main content is limited to 1440px and
uses responsive horizontal padding.

At 900px and below, the sidebar becomes a sticky horizontal navigation bar. At
650px and below, page headers, filters, operational grids, and dense controls
collapse into single-column layouts where appropriate.

Dashboard sections use the same 1440px content limit and a 40px vertical rhythm.
Operational content is ordered by importance, while prototype experiments remain
available in the visually secondary **Додатковий контекст** disclosure.

### Operational Situation Board

The Situation Board uses a stable interaction hierarchy rather than a fully
adaptive canvas. [Guided Investigation](GUIDED_INVESTIGATION_INTERACTION.md)
defines three visual levels: one dominant interaction, concise supporting
context, and the complete inspectable workspace. Situation, Current
Understanding, Evidence and Reasoning Basis, Uncertainty and Blockers, Recent
Change, Current Focus, Next Judgment or Action, and Natural Capture retain
predictable meaning and remain accessible.

Dynamic cognitive emphasis changes visual weight within those regions; it does
not move regions, hide conflicting information, or use theatrical investigation
metaphors. Every Watson-proposed focus identifies its source and proposed status.
Progressive disclosure may reduce density but must not conceal uncertainty,
authority, freshness, or material consequence.

Reasoning-change presentation distinguishes previous understanding, the new
contribution, resulting change, affected Hypotheses, and remaining uncertainty.
Routine activity must not receive milestone styling.

Only the next meaningful interaction uses primary action emphasis. Redirect,
defer, reject, and inspection controls remain visible but visually subordinate.
Timeline, navigation, cards, and specialist actions must not compete with the
cognitive center. Material current understanding and uncertainty may remain
visible as supporting context; repeated guidance and authority explanations do
not.

### Three-surface perceptual language

The [Perceptual Architecture](PERCEPTUAL_ARCHITECTURE.md) differentiates three
roles without introducing separate products:

- the Board uses an atmospheric, low-elevation operational canvas with selective
  relationship and change emphasis;
- Natural Capture uses a neutral, inset, tool-like surface optimized for direct
  owner input;
- Watson uses a stable, raised, recognizably AI-owned interaction surface with
  one dominant action.

All three retain shared type, spacing, control, contrast, focus, and responsive
tokens. Position, composition, borders, elevation, labels, and affordances carry
role identity together; color is never the only signal. Motion is reserved for
material Board change, Capture submission feedback, and restrained Watson
intervention transitions.

The pre-v1.0 [Cognitive Cleanup](COGNITIVE_CLEANUP_ARCHITECTURE.md) review treats
visible explanatory copy as temporary unless it affects current interpretation,
risk, authority, consequence, or action. Normal-operation explanation moves to
contextual disclosure; material warnings never recede.

## Buttons

`.btn-primary` and `.btn-secondary` provide the shared action hierarchy. Controls
use a minimum 44px target height, 10px radius, concise labels, visible keyboard
focus, and restrained hover feedback. Destructive actions continue to use the
semantic danger treatment owned by their feature component.

## Cards

Operational cards share a surface background, border, effective 14px radius,
feature-appropriate spacing, and a small shadow. Hoverable cards strengthen their
border and shadow without introducing decorative movement.

Dashboard surfaces reuse the same background, border, `--radius-md`, 24px padding,
and `--shadow-sm`. Primary attention uses the existing warning color as a restrained
left-border accent; supporting cards do not introduce another visual language.

## Forms

Forms use `.form-group` with native inputs, selects, and textareas. Controls have a
minimum 44px height, a stronger default border, and a visible focus ring. Longer
forms are constrained to a readable width. Hidden form state uses the `.hidden`
utility class.

## Empty states

Empty states use a standard surface, dashed border, restrained minimum height, and
centered content. They state the current condition and, where useful, provide one
calm next action. Empty collections and empty search results must remain distinct.

Empty architectural regions must not be used to preview future reasoning concepts
on a Living Situation Board. Progressive Board items are added when meaningful;
they are not rendered as placeholders. Material-risk and authority notices may
interrupt the normal visual sequence and must remain identifiable without relying
on color alone.

For the human-first Investigation opening, visual priority is owner wording,
Watson's current question, the response field, and one primary action. The
substantial Board remains absent until useful. Reported symptoms, observations,
sourced Evidence, assumptions, and Hypotheses use distinct labels and treatment;
they must not appear as interchangeable cards.

## Operational Workbench composition

Sprint 25.1 collection controls default to icon, short label, and count. They are
compact spatial landmarks, not equal cards. Icon and color are supplementary:
visible text, count text, focus treatment, and accessible names carry the same
meaning. Focused inspection overlays or draws over the Workbench and returns
focus on close. Watson defaults to a compact corner presence and expands for one
useful intervention.

Sprint 26 replaces enterprise-panel styling in the active Matter with an
atmospheric thinking field. A deep neutral desk, warm source material, editorial
type, restrained brass accents, irregular placement, and deliberate empty space
differentiate the Situation Map from navigation chrome. This visual metaphor is
not evidence status or authority. Material types retain text equivalents and
focused inspection; contrast, keyboard focus, and reduced-motion behavior remain
required.

The shared thinking dock is the only persistent contribution surface. It combines
Natural Capture with owner-invoked Watson actions without making Watson the
center. Expanded Watson appears adjacent to the dock and disappears when quiet.

Sprint 27 makes the thinking dock an in-flow operational notebook. It cannot
obscure the Situation Map. The legacy sidebar becomes a 72-pixel icon Dock on
desktop and a compact bottom Dock on mobile. Every navigation icon has an
accessible name; its visible label appears on pointer hover or keyboard focus.

Dark Workbench text uses these roles:

- primary content `#F2EDE4` or equivalent warm white;
- supporting content at least `#B6BDC0`;
- interactive brass text at least `#D9BD8D`;
- focus indication `#F0C984` with a two-pixel outline;
- paper content remains dark ink on warm paper.

Texture, tape, pencil, paper clip, and magnifier-like forms may establish
professional atmosphere, but must not carry state, meaning, or instructions.

Sprint 28 establishes the recognizable Management OS composition: deep
blue-charcoal field, large warm editorial Situation title, taped working paper,
compact folder-like collections, brass rules, and a ruled notebook. The identity
comes from hierarchy and material behavior rather than branding or theatrical
props.

The notebook owns a stable desk position beside the Map on wide screens and below
it at narrower widths. Semantic review extends the notebook within layout flow.
Folder colors distinguish material families only when paired with icon, label,
count, and accessible name.

The Workbench uses one large composed Current Situation canvas and a restrained
supporting rail for Watson and Operational Inbox. Uniform card grids are not used
for the primary operational picture. Contextual material uses semantic forms:
continuous threads for observations, source-oriented treatment for Evidence,
warning treatment for contradictions, relationship treatment for Hypotheses, and
compact counted chips for non-empty Working Collections.

At responsive widths the reading order is Current Situation, Watson, Operational
Inbox, then specialist inspection. Visual adaptation never changes source
authority or hides material safeguards.

### Visual gravity

Workbench visual gravity is deliberately unequal:

| Priority | Surface | Treatment |
| --- | --- | --- |
| 1 | Current Situation | Largest continuous light canvas, strongest whitespace and editorial headline |
| 2 | Watson | Distinct indigo colleague surface with one conversational focus |
| 3 | Operational Inbox | Warm notebook surface with generous writing area |
| 4 | Working Collections | Smaller content-specific artifacts that appear only when populated |
| 5 | Specialist inspection | Quiet direct access outside the first scan |

### Operational iconography

Icons communicate material type and professional purpose before labels:

| Meaning | Icon |
| --- | --- |
| Investigation / Current Situation | `🔍` |
| Operational data | `📊` |
| Document | `📄` |
| Image or media | `📷` |
| Conversation | `🎙` |
| Attachment / Inbox | `📎` |
| Idea | `💡` |
| Hypothesis | `🧠` |
| Contradiction or material warning | `⚠` |
| Decision | `🎯` |
| Operational adaptation | `🛠` |
| Outcome | `📈` |

Icons supplement accessible text and never carry state alone. Decorative instances
are hidden from assistive technology. Material warning meaning must also be
expressed in text and shape.

### Motion

Newly meaningful threads and collections may use a short opacity-and-position
transition to communicate progressive emergence. Motion must not imply authority,
Evidence weight, or completion. `prefers-reduced-motion` removes it.

### Relationship language

Relationships are visible only when they express explicit operational meaning:

| Mark | Meaning | Required qualification |
| --- | --- | --- |
| `→` | Directional influence | Identify observed, asserted, proposed, or accepted status |
| `↔` | Mutual dependency | Expose the governed basis |
| `⋯→` | Tentative relationship | Never imply established causality |
| `⚠` | Contradiction | State what does not agree |
| `⟳` | Feedback loop | Identify the bounded system and observation basis |
| `⇢` | Evidence supports | Link to source and provenance |

Decorative connectors are prohibited. Watson-proposed relationships remain
visibly proposed and owner-reviewable. Temporal order never implies causality.

### Responsive identity

- **Desktop:** composed operational desk with Current Situation as the anchor.
- **Tablet:** focused workspace retaining Situation and Watson context together
  where space permits.
- **Mobile:** Current Situation first, followed by Watson, Operational Inbox,
  emerged collections, and specialist inspection.

Viewport adaptation changes composition, not meaning, authority, or availability.

### Operational Situation Map composition

On wide Workbench surfaces, one central working understanding anchors the
composition. Supporting observations, assumptions, Evidence, and Hypotheses
surround it with unequal distance, scale, shape, and quietness. Explicit
relationships occupy a separate governed layer. Empty future material is absent.

Watson may appear as a restrained contextual intervention beside the Map. It must
not cover meaningful artifacts, cause horizontal overflow, or become the
workspace itself. Mobile linearizes the composition in operational priority order
without changing meaning.

## Accessibility

- All interactive controls require a visible `:focus-visible` state.
- Important state must not depend on color alone.
- Interactive targets use a minimum height of 44px where practical.
- Layouts must remain usable from a 320px viewport width.
- `prefers-reduced-motion` removes non-essential transition duration.
- Text and control contrast must be reviewed when semantic colors change.

## Execution states

Execution items use the existing semantic colors: success for completed items and
warning for skipped items. Progress combines a text count with a bar so state does
not depend on color alone. Finished execution cards use the standard surface,
border, radius, and shadow tokens.

## Naming conventions

- Use lowercase, hyphenated CSS class names.
- Use BEM-style element names where a component has internal parts: `.project-card__header`.
- Use state or utility classes for simple toggles: `.hidden`, `.active`.
- Prefer CSS custom properties for shared visual values instead of repeated literal values.
