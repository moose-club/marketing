---
name: Moose Marketing
description: The public web surface for Moose, drawn in Lane Lines — two lanes on one flat cream floor, a navy close, one ink, and one pink live line that crosses once.
colors:
  floor: "var(--m-bg)"
  ink: "var(--m-ink)"
  ink-support: "var(--m-ink-support)"
  ink-tape: "var(--m-ink-tape)"
  ink-hairline: "var(--m-ink-hairline)"
  ink-wash: "var(--m-ink-wash)"
  surface: "var(--m-surface)"
  live-line: "var(--m-moose-pink)"
  plate-fill: "var(--m-button-primary)"
  plate-fill-press: "var(--m-button-primary-press)"
  plate-label: "var(--m-button-primary-label)"
typography:
  floor-lettering:
    fontFamily: "var(--m-font-family-sans)"
    fontSize: "var(--m-type-floor-lettering-size)"
    fontWeight: "var(--m-type-floor-lettering-weight)"
    lineHeight: "var(--m-type-floor-lettering-leading)"
    letterSpacing: "var(--ll-lettering-tracking)" # provisional: proposed to moose-design
  station-lettering:
    fontFamily: "var(--m-font-family-sans)"
    fontSize: "calc(var(--m-type-floor-lettering-size) * 0.889)" # provisional: in-app size
    fontWeight: "var(--m-type-floor-lettering-weight)"
    lineHeight: "var(--m-type-floor-lettering-leading)"
    letterSpacing: "var(--ll-lettering-tracking)"
  title:
    fontFamily: "var(--m-font-family-sans)"
    fontSize: "var(--ll-title-size)" # provisional: proposed
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  lead:
    fontFamily: "var(--m-font-family-sans)"
    fontSize: "var(--ll-lead-size)" # provisional: proposed
    fontWeight: 400
    lineHeight: "var(--ll-lead-leading)"
    letterSpacing: "var(--ll-tracking)"
  plate-label:
    fontFamily: "var(--m-font-family-sans)"
    fontSize: "var(--m-type-plate-label-size)"
    fontWeight: "var(--m-type-plate-label-weight)"
    lineHeight: "var(--m-type-plate-label-leading)"
    letterSpacing: "var(--ll-tracking)"
  body:
    fontFamily: "var(--m-font-family-sans)"
    fontSize: "var(--ll-body-size)" # provisional: proposed, differs from --m-type-body-size
    fontWeight: 400
    lineHeight: "var(--ll-body-leading)"
    letterSpacing: "var(--ll-tracking)"
  detail:
    fontFamily: "var(--m-font-family-sans)"
    fontSize: "var(--m-type-detail-size)"
    fontWeight: "var(--m-type-detail-weight)"
    lineHeight: "var(--m-type-detail-leading)"
  ordinal:
    fontFamily: "var(--m-font-family-sans)"
    fontSize: "var(--ll-ordinal-size)" # provisional: proposed
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.02em"
    fontFeature: "tnum"
  figure:
    fontFamily: "var(--m-font-family-sans)"
    fontSize: "var(--ll-stat-size)" # provisional: pinned to the figure token's floor
    fontWeight: "var(--m-type-figure-weight)"
    lineHeight: "var(--m-type-figure-leading)"
    letterSpacing: "var(--m-type-figure-tracking)"
    fontFeature: "tnum"
rounded:
  plate: "var(--m-radius-md)"
  station-plate: "10px" # provisional: not on the radius scale
  tick: "4px" # provisional: Web/Tick
  photo: "0"
spacing:
  sm: "var(--m-spacing-sm)"
  md: "var(--m-spacing-md)"
  lg: "var(--m-spacing-lg)"
  xl: "var(--m-spacing-xl)"
  xxl: "var(--m-spacing-xxl)"
  rhythm: "var(--rhythm)" # provisional: 72 compact / 96 regular, drift D7
  lane-gutter: "var(--lane-gutter)" # provisional: lane grid
  line-inset: "var(--line-inset)" # provisional: lane grid
components:
  plate-primary:
    backgroundColor: "{colors.plate-fill}"
    textColor: "{colors.plate-label}"
    rounded: "{rounded.plate}"
    typography: "{typography.plate-label}"
    height: "56px"
    width: "min(100%, 420px)"
    padding: "0 var(--m-spacing-lg)"
  plate-primary-press:
    backgroundColor: "{colors.plate-fill-press}"
  plate-outline:
    textColor: "{colors.ink}"
    rounded: "{rounded.plate}"
    typography: "{typography.plate-label}"
    height: "56px"
    padding: "0 var(--m-spacing-lg)"
  plate-outline-hover:
    backgroundColor: "{colors.ink-wash}"
  plate-station:
    textColor: "{colors.ink}"
    rounded: "{rounded.station-plate}"
    typography: "{typography.plate-label}"
    height: "44px"
    padding: "0 14px" # provisional
  switch-chosen:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.floor}"
    rounded: "{rounded.plate}"
    typography: "{typography.plate-label}"
    height: "56px"
  switch-unchosen:
    textColor: "{colors.ink}"
    rounded: "{rounded.plate}"
    typography: "{typography.plate-label}"
    height: "56px"
  tick:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.surface}"
    rounded: "{rounded.tick}"
    size: "24px"
---

# Design System: Moose Marketing

> **Values are owned by [moose-design](https://github.com/moose-club/design), not by this
> file** (RULES 18). Every colour, radius, spacing step and type role above names a
> `--m-*` token generated into `src/styles/moose-design/tokens.css`, or a local
> `--ll-*` / lane variable in `src/styles/globals.css` that is **provisional** and
> proposed upstream. This file never restates a token's value. The rules live in
> `moose-design/RULES.md`; this file records how the marketing site applies them.
>
> **Scope.** This describes `/`, the first Lane Lines surface on the web (the "Lane Lines"
> layer at the foot of `globals.css`, and `src/components/{sections,primitives}`).
> `/claim`, `/404` and the legal pages still render on the older card-world utilities
> higher up in `globals.css` (bands, white cards, pink eyebrows, pill buttons, legacy
> shadows). That is a **carve-out, not a second system**: leave it working, never extend
> it, and move those pages to the lane floor when they are next redesigned.

## Overview

**Creative North Star: "The Pairing"**

Every station on the page is two lanes: yours, and your partner studio's. Lettering and
the argument sit on your lane; the matter that belongs to the partner (the later steps,
the figures, half the roster, the one action) sits on the partner lane, level with it.
One pink line, the member's crossover, starts under the wordmark, runs down your lane,
crosses the gutter once just before The Moose model, and ends in the left edge of the
close's one plate. The operator's own crossover is the last thing the line does.

The world is Lane Lines and nothing added: one flat cream floor for the whole page, one
navy floor for the close and footer, one ink at fixed weights, plates for actions,
floor lettering in Poppins ExtraBold set tight. It is quiet and declarative, with mass
coming from the lettering rather than from boxes. `/` carries two such floors behind an
audience switch, the studio floor (default) and the member floor; both use exactly the
same grammar.

Two anti-references are confirmed: **the aggregator** (dense venue grids, discount
badges, anything that reads as a consumer search result) and **the brand-book v2 web
page this replaced** (cream and navy bands, white cards on shadows, a pink eyebrow over
every heading, a pink word in every headline).

**Key Characteristics:**

- Two lanes and a gutter from 1048px; one lane, with partner blocks stepped in, below it
- One pink element per floor: the live line, drawn by scroll
- Flat floors: no card, shadow, blur, pill or status colour
- Actions are plates; exactly one filled plate per viewport
- Floor lettering as the only display voice, sentence case with a trailing period
- A full-bleed, square-cornered photograph as the hero's counterweight

## Colors

One ink on one floor, with the floor and ink flipping together for the navy close.

### Primary
- **Plate Fill** (`--m-button-primary`, press `--m-button-primary-press`, label
  `--m-button-primary-label`): the Floor plate, the page's one filled action. Navy on
  the cream floor; inside `.dark` the same tokens turn it white with a navy label.

### Secondary
- **Live Line Pink** (`--m-moose-pink`): the 3px live line, and nothing else on the
  floor. Never text, never a fill, never a second element.

### Neutral
- **Floor** (`--m-bg`): the cream floor under the whole page. The close and footer carry
  `.dark`, so the same token becomes the navy floor and every ink below flips with it.
- **Ink** (`--m-ink`): lettering, plate labels, titles, figures, the outline plate's
  edge, the tick box, the chosen switch.
- **Ink Support** (`--m-ink-support`): leads, body copy, detail lines, nav links,
  step ordinals.
- **Ink Tape** (`--m-ink-tape`): the roster name's hover underline.
- **Ink Hairline** (`--m-ink-hairline`): the scrolled nav's bottom edge, the only rule
  drawn on the floor.
- **Ink Wash** (`--m-ink-wash`): the hover fill of an outline plate or unchosen switch.
- **Surface** (`--m-surface`): the check inside the tick box; the app lane's ground.

### Named Rules

**The One Live Line Rule.** A floor spends its one pink on the live line. No pink word,
pink eyebrow, pink stat or pink link appears anywhere on `/`.

**The One Ink Rule.** Text and marks are `ink` at its token weights (`ink`,
`inkSupport`, `inkTape`, `inkHairline`, `inkWash`), never a grey, never black, never a
status colour. The navy floor gets its white ink by `.dark`, not by local overrides.

## Typography

**Font:** Poppins via `--m-font-family-sans`, system stack as fallback (RULES 12). No
second family.

**Character:** a single geometric sans carrying two voices: floor lettering at
ExtraBold, set very tight and short-leaded so a headline is a mass; and plain Poppins at
400–600 under it for everything else.

### Hierarchy
- **Floor lettering** (`--m-type-floor-lettering-*`, tracking `--ll-lettering-tracking`
  provisional): the hero `h1` on each floor. Sentence case, a trailing period, balanced
  wrap, never hand-broken, with a small descent give-back under the last line.
- **Station lettering** (the same role at the in-app ratio, provisional): every station
  `h2`, including the close.
- **Title** (`--ll-title-size`, 700, provisional): the one sub-heading inside a station
  ("How it works" in The Moose model).
- **Lead** (`--ll-lead-size` / `--ll-lead-leading`, 400, `inkSupport`, provisional): the
  paragraph under lettering, capped at the lane measure.
- **Plate label** (`--m-type-plate-label-*`): plate and switch labels, step titles, hero
  tick lines, roster names, footer column heads, the member commercials' keys.
- **Body** (`--ll-body-size` / `--ll-body-leading`, 400, `inkSupport`, provisional):
  step bodies, commercial rows, footer links. Strong ranges inside are 600 in `ink`.
- **Detail** (`--m-type-detail-*`, `inkSupport`): figure units and captions, the line
  under the close's plate, the roster count, the footer's legal row.
- **Ordinal** (`--ll-ordinal-size`, 800, tabular, provisional): the 01–04 step numbers,
  in `inkSupport`.
- **Figure** (`--m-type-figure-*` weight/leading/tracking at `--ll-stat-size`,
  provisional): the three value figures, each travelling with its row, never boxed.

### Named Rules

**The Painted Line Rule.** Lettering is a sentence: sentence case, ends in a period,
wraps where the measure says. No line breaks written into the copy.

**The Informative Label Rule.** Nothing sits above lettering. Lane Lines has no eyebrow;
its station label (RULES 14) is allowed only when it carries a fact the reader would
otherwise lose, and `/` currently needs none.

## Layout

**The Lane Grid.** Every station is a `.lanes` grid inside the floor's maximum measure
(`--floor-max`). From 1048px it is three columns: your lane, the gutter
(`--lane-gutter`, provisional) and the partner lane, in roughly equal measure. Blocks
default to your lane; partner blocks take the third column and are row-placed so paired
blocks sit level (03 beside 01; the figures beside the Value lettering, resting on one
tread). The live line runs `--line-inset` (provisional) before whichever lane it is on.

Below 1048px there is one lane, capped to a single reading measure and left-aligned.
Partner blocks stack under yours and step in by the line inset, so the pairing still
reads without a second lane, and the line keeps lane 0 with one turn into the close's
plate.

**Rhythm.** Stations are separated by `--rhythm` (provisional: compact and regular
values, drift D7); inside a station, spacing is the token scale `sm`–`xxl`. Empty floor
is always a stated measure, never what is left over. The nav is a fixed
`--nav-h` (provisional) bar; the wordmark's first stem sits on lane 0, where the line
starts.

The footer's link columns wrap from 760px; otherwise 1048px is the only breakpoint the
lane floor uses. The card-world breakpoints in `globals.css` belong to the carve-out.

## Elevation & Depth

None. Both floors are flat; separation is position on the lane grid, the floor change at
the close, and stated empty floor. The only depth is the hero photograph under the cream
**floor scrim**: `--m-bg` at partial alpha, a head-and-foot fade on the compact band, plus
a seam fade that dissolves the photograph's left edge into the work side on the regular
floor. The scrim gradients are written inline in `HeroPhoto.astro` and are
**provisional** until a named gradient token exists (RULES 11).

### Named Rules

**The Flat Floor Rule.** No shadow, blur, glass or gradient on the floor. The floor
scrim over a photograph is the one exception, and it is always the floor colour, never
black. The scrolled nav takes the solid floor colour and an `inkHairline` edge, not a
frosted bar.

## Shapes

Square and plate-like. Plates and switch plates use `radius.md`; the tick box and the
small station plate use provisional radii; the photograph and the app capture are square
cut, no radius, bezel or notch. Edges are a 2px solid `ink` stroke on outline plates and
unchosen switches; no hairline borders define boxes because there are no boxes. The live
line has square ends and rounded turns.

## Components

### Plates
- **Floor plate (primary):** solid `plate-fill`, plate-label typography, a fixed height
  and capped width (provisional, see frontmatter), `spacing.lg` inline padding, label left and a Lucide chevron-right at the
  far end. One per viewport: the hero's and the close's. Press darkens to the press fill.
- **Outline plate:** a 2px `ink` edge, ink label, same size and chevron; hover is an
  `inkWash` fill. It only appears in a set with a filled sibling, or trailing a row of
  text.
- **Station plate:** the small outline plate trailing a line of text — "Studio login" in
  the nav, "See all / See less" after the compact roster count. 44 tall to clear the hit
  floor (RULES 17), no chevron.
- **Press:** every plate and switch scales to 0.98 over the fast duration.

### Audience switch
A set of two plates above the hero lettering on both floors: chosen is a solid `ink`
fill with a `floor` label (the selection fill, outside the plate family); unchosen is
the 2px ink edge. No chevron and no pink, because a switch does not go forward. It swaps
floors in place, keeps `#members` in the URL for the member floor, and moves focus to
the same switch on the newly shown floor.

### Hero
A split floor: the work side on your lane (switch, lettering, lead, ticks, one Floor
plate) and the photograph from lane 2 to the right edge under the floor scrim. Compact,
the photograph becomes a band under the nav and the work side starts beneath it.

### Assurance ticks
A small solid-ink box (provisional size and corner) and a `surface` Lucide check, leading a
plate-label line. Never status green, never pink.

### Steps, rows and figures
Steps are an ordinal in `inkSupport` beside a plate-label title and body copy, split
across the lanes. Member commercials are open rows (plate-label key over body), not
plates: non-actions never get plates. Value figures are open too: the figure and its
unit on one baseline, a plate-label title and a detail caption.

### Partner roster
Every partner on the floor at once: its logo, then its name in plate-label `ink`. Logos
are single-ink masks (shape only) filled with `ink`, in a fixed 80×40 box (provisional) so
the names align; a partner with no logo yet keeps the empty box. Regular: the lettering
on your lane, the roster level with it on the partner's lane (one column, two from
1280), the line running in the gutter between them. Compact: one column, capped, with a
detail count and a station plate revealing the rest in place. No chip, box or card
around a mark.

### Live line
One inline SVG per floor, `live-line` at the Lane Lines line weight, measured from the DOM and drawn with scroll
(stroke-dashoffset tied to a read line partway down the viewport). It ends at the
element marked `data-line-end`; it crosses where marked `data-line-cross`. Under
`prefers-reduced-motion` it is fully drawn.

### Member app capture
A frameless capture of the app in a phone-screen-shaped window on the partner lane,
square crop, scrubbed by a scroll-driven view timeline so the taller capture travels
through the window. Under reduced motion the timeline declarations are absent and it
sits still.

### Navigation and footer
The nav is transparent on the floor and takes the floor fill plus an `inkHairline`
edge past a short scroll; links in `inkSupport`, the outline station plate as its only
action, a Lucide menu icon below 1048px. The footer continues the navy floor from the
close with no seam and no hairline: wordmark, tagline and Instagram on your lane, link
columns on the partner lane, a detail-sized legal row.

### Icons
Lucide outline icons, inline, 2px stroke, `currentColor` (RULES 15): chevron-right,
arrow-right, check, instagram, menu.

## Do's and Don'ts

### Do:
- **Do** take every value from a `--m-*` token; a missing value goes to moose-design and
  is marked provisional here until it lands.
- **Do** put new stations on the lane grid: lettering on your lane, matter on the
  partner lane, paired blocks level.
- **Do** keep exactly one filled plate per viewport; any outline plate is in a set or
  trailing a row of text.
- **Do** set lettering in sentence case with a trailing period.
- **Do** keep the live line the floor's one pink element, and mark where it crosses and
  ends rather than drawing it by hand.
- **Do** keep hit targets at 44px or more, and measure contrast (RULES 16, 17).

### Don't:
- **Don't** put a card, chip, pill, shadow, blur or status colour on a Lane Lines floor.
- **Don't** put an eyebrow or kicker above lettering, or a pink word inside it.
- **Don't** box a figure, a partner mark or a non-action; give plates only to actions.
- **Don't** extend the card-world utilities (`.section`, `.eyebrow`, cards, pill buttons,
  legacy shadows) to new surfaces; they exist for the carve-out pages only.
- **Don't** let a layout drift toward the aggregator: dense venue grids, discount
  badges, or anything that reads as a consumer search result.
- **Don't** hand-edit `src/styles/moose-design/tokens.css` or `.moose-design.json`.
