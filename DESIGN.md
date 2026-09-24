---
name: Moose Marketing
description: The operator-facing web surface for Moose — a partner board where two studios pair up, drawn in court navy with one live pink line.
colors:
  court-navy: "var(--m-moose-navy)"
  court-navy-deep: "var(--m-moose-navy-deep)"
  court-navy-lift: "var(--m-moose-navy-lift)"
  court-navy-press: "var(--m-moose-navy-press)"
  live-line-pink: "var(--m-moose-pink)"
  live-line-pink-press: "var(--m-moose-pink-press)"
  live-line-pink-soft: "var(--m-moose-pink-soft)"
  chalk-cream: "var(--m-cream)"
  chalk-ground: "var(--m-bg)"
  surface-white: "var(--m-surface)"
  tape-ink: "var(--m-ink)"
  tape-support: "var(--m-ink-support)"
  tape-placeholder: "var(--m-ink-placeholder)"
  tape-line: "var(--m-ink-tape)"
  tape-hairline: "var(--m-ink-hairline)"
  tape-wash: "var(--m-ink-wash)"
  on-brand: "var(--m-on-brand)"
  on-brand-dim: "var(--m-on-brand-dim)"
typography:
  display:
    fontFamily: "var(--m-font-family-sans)"
    fontSize: "clamp(40px, 6vw, 92px)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "var(--m-font-family-sans)"
    fontSize: "clamp(28px, 4vw, 56px)"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  title:
    fontFamily: "var(--m-font-family-sans)"
    fontSize: "clamp(24px, 3vw, 40px)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  lead:
    fontFamily: "var(--m-font-family-sans)"
    fontSize: "clamp(16px, 1.4vw, 18px)"
    fontWeight: 500
    lineHeight: 1.65
    letterSpacing: "-0.01em"
  body:
    fontFamily: "var(--m-font-family-sans)"
    fontSize: "15px"
    fontWeight: 500
    lineHeight: 1.55
    letterSpacing: "-0.01em"
  label:
    fontFamily: "var(--m-font-family-sans)"
    fontSize: "12px"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.22em"
rounded:
  pill: "var(--m-radius-full)"
  sheet: "var(--m-radius-xl)"
  card: "var(--m-radius-xl)"
  tile: "var(--m-radius-lg)"
  field: "var(--m-radius-md)"
  chip: "var(--m-radius-sm)"
spacing:
  xs: "var(--m-spacing-xs)"
  sm: "var(--m-spacing-sm)"
  md: "var(--m-spacing-md)"
  lg: "var(--m-spacing-lg)"
  xl: "var(--m-spacing-xl)"
  xxl: "var(--m-spacing-xxl)"
components:
  button-primary:
    backgroundColor: "{colors.court-navy}"
    textColor: "{colors.on-brand}"
    rounded: "{rounded.pill}"
    padding: "14px 24px"
    typography: "{typography.body}"
  button-primary-hover:
    backgroundColor: "{colors.court-navy-press}"
  button-ghost:
    backgroundColor: "{colors.surface-white}"
    textColor: "{colors.court-navy}"
    rounded: "{rounded.pill}"
    padding: "14px 24px"
  card:
    backgroundColor: "{colors.surface-white}"
    textColor: "{colors.tape-ink}"
    rounded: "{rounded.card}"
    padding: "22px"
  card-navy:
    backgroundColor: "{colors.court-navy}"
    textColor: "{colors.on-brand}"
    rounded: "{rounded.card}"
    padding: "22px"
  input:
    backgroundColor: "{colors.surface-white}"
    textColor: "{colors.tape-ink}"
    rounded: "{rounded.tile}"
    padding: "12px 14px"
  eyebrow:
    textColor: "{colors.live-line-pink}"
    typography: "{typography.label}"
---

# Design System: Moose Marketing

> **Values are owned by [moose-design](https://github.com/moose-club/design), not by this
> file.** Every colour, radius, spacing step and shadow above is a reference to a `--m-*`
> token defined in `moose-design/tokens/` and generated into
> `src/styles/moose-design/tokens.css`. The rules that govern them live in
> `moose-design/RULES.md`. **Do not restate a value as a rule here, and do not hand-edit
> the generated file.** To change a value, open a PR on moose-design, then
> `pnpm sync marketing` and re-run `/impeccable document`.
>
> What *this* file owns: how those tokens are applied on the web — hierarchy, rhythm,
> component behaviour, and the guardrails specific to this surface.

## Overview

**Creative North Star: "The Partner Board"**

Two studios pairing up, drawn as a board of complementary venues. The site's whole job is
to make one operator see themselves next to another and understand that the pairing costs
them nothing they care about. So the page reads as a board rather than a brochure: paired
columns, alternating cream and navy bands that group one argument at a time, and stat
cards that sit in a row like venues on a roster.

The mood is **considered, warm and direct**. It argues carefully rather than boasting, it
sounds like a person rather than a company, and it wastes no words — the same plain
Australian register as the copy ("hard yakka", "This is the magic of collaboration").
Type does most of the work: 800-weight display headings set tight and fluid, over generous
cream space, with real photography of real training rather than stock gym imagery.

The confirmed anti-reference is **the aggregator** — ClassPass and its lookalikes. Dense
venue grids, discount badges, "browse thousands of classes", consumer-marketplace energy.
Moose sells partnership to operators; it does not sell supply to consumers. Any composition
that starts to feel like a search result page has gone wrong.

**Key Characteristics:**

- Alternating cream and navy bands as the structural rhythm; one argument per band
- Fluid 800-weight display type, tightly tracked, doing the hierarchy work
- Exactly one pink element per view — the live line marking the member's path
- Real training photography, never stock or illustration
- Flat by intent; tonal alternation conveys depth, not shadow
- One primary action per screen, always the navy pill

## Colors

Two brand colours and three surfaces. Navy leads everywhere; pink is punctuation.

### Primary
- **Court Navy** (`--m-moose-navy`): the floor of the board. Section backgrounds,
  headlines on cream, the primary button fill, stat-card fills. This is the colour the
  site is mostly made of.
- **Court Navy Deep** (`--m-moose-navy-deep`): the deepest band — the footer, the modality
  ticker, and the legal-page footers. One step below the standard navy section.
- **Court Navy Lift / Press** (`--m-moose-navy-lift`, `--m-moose-navy-press`): raised and
  pressed states of a navy surface. Press is the primary button's hover fill.

### Secondary
- **Live Line Pink** (`--m-moose-pink`): the member's path through the product. Eyebrows,
  the single highlighted word in a headline, the ticker's separators, the focus ring.
  Never a large fill and never body copy.
- **Live Line Pink Soft** (`--m-moose-pink-soft`): the only permitted pink *fill* — small
  tinted chips behind a numeral or icon, on a light surface.

### Neutral
- **Chalk Ground** (`--m-bg`): the page floor under everything.
- **Chalk Cream** (`--m-cream`): the warmer band, alternating with white and navy sections.
- **Surface White** (`--m-surface`): cards, the frosted nav, form fields.
- **Tape Ink** (`--m-ink`): all primary text. Navy, never black.
- **Tape Support** (`--m-ink-support`): body copy and ledes. Ink at 70%, 5.1:1 on cream.
- **Tape Placeholder** (`--m-ink-placeholder`): captions, meta, field placeholders. 66%.
- **Tape Line / Hairline / Wash** (`--m-ink-tape`, `--m-ink-hairline`, `--m-ink-wash`):
  dividers at 24%, card borders at 12%, and the faintest surface tint at 8%.

### On the navy floor
White ink at fixed weights. Only the 65% step has a token (`--m-on-brand-dim`); the rest
are mixed locally from `--m-on-brand` at moose-design's dark `--m-ink-*` weights and are
**proposed upstream as `on-brand-*`**. See `--on-navy-*` in `globals.css`.

### Named Rules

**The One Live Line Rule.** One pink element per view, and it marks the member's path —
an eyebrow, one word in a headline, a link, one stat. Two pink things on one screen means
one of them is decoration, and decoration is the failure mode. When a design mock arrives
with several, sanitise to one.

**The Never Black Rule.** No text, scrim, shadow or border is black. Scrims are the floor
colour at partial alpha (`--scrim` is ink at 70%). The only black left in the codebase is
inside `PhoneFrame`, which draws a physical device rather than a Moose surface.

**The Small Pink Ban.** Pink text below 24px on a light floor fails contrast (3.19:1 on
cream). Pink is for headings ≥24px, eyebrows at their tracked weight, or as a fill behind
white. Never pink body copy.

## Typography

**Display / Body Font:** Poppins, with the system stack as fallback
(`--m-font-family-sans`). Loaded from Google Fonts in `Base.astro`.
**Mono:** `--m-font-family-mono`, used only for tabular figures.

**Character:** Poppins' geometric roundness keeps a page that is mostly navy and mostly
argument from reading as cold. Set at 800 and tracked tight, it has real authority at
display sizes; at 500/15px it stays warm and readable in long legal copy.

### Hierarchy
- **Display** (800, `clamp(40px, 6vw, 92px)`, lh 1.02, ls −0.03em): the hero `h1`, once
  per page.
- **Headline** (800, `clamp(28px, 4vw, 56px)`, lh 1.08, ls −0.025em): every section `h2`.
- **Title** (700, `clamp(24px, 3vw, 40px)`, lh 1.15, ls −0.02em): sub-section heads.
- **Card title** (700, 17–22px, ls −0.3px): card and step headings.
- **Lead** (500, `clamp(16px, 1.4vw, 18px)`, lh 1.65): the paragraph under a section
  heading. Capped at 640px.
- **Body** (500, 15px, lh 1.55): default copy.
- **Meta** (600, 12–13px): captions, labels, footnotes.
- **Eyebrow** (700, 12px, uppercase, ls 0.22em): the pink kicker above a heading.
- **Stat figure** (800, `clamp(40px, 6vw, 76px)`, tabular numerals): the one big number in
  a value card.

### Named Rules

**The One Pink Word Rule.** A headline highlights at most one word in pink, and it is the
word the sentence turns on — "…with **variety**." If the eyebrow above already carries the
accent, the headline takes none.

**The Fluid Display Rule.** Every display size is a `clamp()`. There is no fixed
`font-size: 60px` anywhere on a heading. Web role→size is not yet a moose-design token
(RULES 13, drift-inventory D10), so these values are provisional and local.

## Layout

A single 1240px container (`--container-max`) with fluid horizontal padding
(`clamp(20px, 5vw, 56px)`), centred, used by every section's inner wrapper.

Vertical rhythm comes from three section utilities rather than per-section padding:
`.section` at `clamp(72px, 9vw, 104px)`, `.section--tight` at `clamp(56px, 7vw, 80px)`,
and the `.section--cream` / `.section--navy` background modifiers.

**The alternation is the structure.** Cream, white and navy bands trade off down the page
so each argument is visually bounded without a single divider line. Keep it when adding a
section; two navy bands in a row collapses two arguments into one.

Mobile-first, layering up at 640 / 760 / 960 / 1024 / 1280 / 1600. Most two-column
layouts collapse at 760px, with the photograph moving below the copy.

Spacing uses the token scale (`--m-spacing-xs` 4 through `xxl` 48). Page-level rhythm
above 48px is **not yet tokenised** — 64 and 96 are decided and proposed upstream
(drift-inventory D7); 12, 20, 40 and 80 round onto existing steps.

## Elevation & Depth

**Flat is the target; the current shadows are incumbent drift.** RULES 10 makes Lane Lines
floors shadowless, and the web should follow. Depth is meant to come from tonal
alternation — cream against white against navy — not from lifting things off the page.

Four shadow steps remain in the codebase (`--shadow-xs/sm/md/lg`, all now resolving to
`--m-shadow-sm/md/lg`, navy-tinted at `#101A3C`). Treat them as legacy: they are safe to
leave where they are, and they should not spread.

### Named Rules

**The Flat-By-Default Rule.** New surfaces get no shadow. Separation is a background
change or a `--m-ink-hairline` border. If a new element seems to need elevation to read,
the surface alternation underneath it is wrong.

## Shapes

Full-radius pills for every action, generous rounding for surfaces, and a hairline rather
than a heavy border.

- **Pill** (`--m-radius-full`): all buttons, chips and the nav CTA. No square buttons.
- **Sheet / Card** (`--m-radius-xl`, 24px): large panels, form sheets, feature cards.
- **Tile** (`--m-radius-lg`, 16px): smaller cards, logo chips, form fields.
- **Field / Chip** (`--m-radius-md` 12px, `--m-radius-sm` 8px): inputs and the smallest chips.

Borders are `1px solid var(--m-ink-hairline)` — present enough to define an edge, never to
draw attention. The brand book's old CSS radii (6/9/10/14/22/28) are superseded (RULES 3).

## Components

### Buttons
- **Shape:** full-radius pill (`--m-radius-full`), 14px × 24px padding, 600 weight.
- **Primary:** Court Navy fill, white label, with a trailing arrow that translates 3px on
  hover. Hover fill steps to `--m-moose-navy-press`.
- **Ghost:** white fill, navy label — the secondary beside a primary, never alone.
- **On navy:** a white or cream fill, never pink (RULES 5).
- **Focus:** 2px `--m-moose-pink` outline, 2px offset.
- **One primary per screen.** A pink CTA and a navy CTA never share a viewport.

### Cards
- **Corner:** `--m-radius-xl` (24px) for feature panels, `--m-radius-lg` (16px) for tiles.
- **Light:** white fill on cream, 1px `--m-ink-hairline` border, 22px internal padding.
- **Navy:** Court Navy fill, white heading, `--on-navy-support` body — the stat cards in
  the value row.
- **Shadow:** none on new cards. See Elevation.

### Inputs
- **Style:** white fill, `--m-ink-hairline` border, `--m-radius-lg`, 12–18px padding.
- **Placeholder:** `--m-ink-placeholder` (66%).
- **Focus:** the pink focus ring, as everywhere.

### Navigation
- Fixed, transparent over the hero so the headline starts at the top of the page.
- Past 16px of scroll it gains `--card-frosted` (surface at 86%) with a 14px blur and a
  `--m-ink-hairline` bottom edge.
- One CTA only — the navy "Studio login" pill to the external portal. The page's own
  "Get involved or hear more" lives in the hero and footer.
- Collapses to a hamburger below 760px.

### Eyebrow
Uppercase, 12px, 700, tracked, in pink (RULES 14). It sits above a section heading and is
that section's only pink element unless the heading takes the one pink word instead.

### Modality ticker
A thin `--m-moose-navy-deep` band under the hero carrying an infinite CSS marquee of
studio modalities separated by pink diamonds. Masked to transparent at both edges. Halts
entirely under `prefers-reduced-motion`.

## Do's and Don'ts

### Do:
- **Do** take every colour, radius, spacing step and shadow from a `--m-*` token. A value
  the tokens lack is a PR on moose-design, not a local constant.
- **Do** keep exactly one pink element per view, and make it the member's path.
- **Do** alternate cream, white and navy bands so each argument is visually bounded.
- **Do** set every display heading with `clamp()`.
- **Do** use `--m-ink` and `--m-ink-support` for text, and measure contrast rather than
  assuming it (RULES 16).
- **Do** render icons as inline Lucide-style outline SVGs using `currentColor` (RULES 15).
- **Do** keep hit targets at 44px or more (RULES 17).

### Don't:
- **Don't** write a raw hex, `rgb()` or `rgba()` into a component. The documented
  exceptions are device chrome in `PhoneFrame`, the ticker's mask, `theme-color` in
  `Base.astro`, and the vendored QR library's defaults.
- **Don't** use black for text, scrims, shadows or borders.
- **Don't** put pink text below 24px on a light floor, or pink on body copy anywhere.
- **Don't** put a pink CTA and a navy CTA on the same screen.
- **Don't** add a shadow to a new surface. Separate with a background change or a hairline.
- **Don't** introduce a third brand colour, or a gradient on the pink.
- **Don't** reach for SF Symbols or an icon library — the DS's iOS components
  (`AppButton`, `FloorPlate`, `Icon/Placeholder`) are explicitly not for the web.
- **Don't** let a layout drift toward the aggregator: dense venue grids, discount badges,
  or anything that reads as a consumer search result.
- **Don't** hand-edit `src/styles/moose-design/tokens.css` or `.moose-design.json`.
