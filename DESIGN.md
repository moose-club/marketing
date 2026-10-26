---
name: Moose marketing site
description: The public web surface for Moose, drawn around the member card. It sells the card to two readers. A studio is shown that it issues the card and chooses who accepts it. A member is shown what their studio's card would do. Flat cream pages, navy ink, one card at a time, and pink only on the card.
platform: web
mode: marketing
world: member-card
tokens: moose-design@2332573
colors:
  # Floor: every page. Cream in light, the navy floor in dark (RULES 8)
  floor: "#F7F4EF"                # --m-floor, light
  floor-dark: "#13204A"           # --m-floor, dark
  # Paper: what sits on the floor (the legal column, /claim's form, class cards). Never a page
  paper: "#FFFFFF"                # --m-paper, light
  paper-dark: "#1A2A57"           # --m-paper, dark
  # Ink: navy in light, white in dark (RULES 7)
  ink: "#1A2B5F"                  # --m-ink
  ink-dark: "#FFFFFF"
  inkSupport: "#1A2B5FB3"         # --m-ink-support, 70%: supporting lines, printed labels
  inkHint: "#1A2B5F73"            # --m-ink-hint, 45%: placeholders, dashed "not yet" slots
  inkRule: "#1A2B5F29"            # --m-ink-rule, 16%: printed rules
  # The member card, an object and never a surface
  card: "#1A2B5F"                 # --m-card-face, light
  card-dark: "#F7F4EF"            # --m-card-face, dark: cream, so it never sinks into the floor
  cardLettering: "#F7F4EF"        # --m-card-lettering, light (navy on the dark card)
  cardBack-dark: "#EFE9E0"        # --m-card-back, dark
  sleeve: "#EFE9E0"               # --m-card-sleeve, light
  sleeve-dark: "#25356A"          # --m-card-sleeve, dark
  # Actions
  plate: "#1A2B5F"                # --m-button-primary, light
  plate-dark: "#FFFFFF"           # --m-button-primary, dark
  platePress: "#14224C"           # --m-button-primary-press
  # What is yours: on this site, only the card objects, the caret and focus (RULES 6)
  moosePink: "#EB4E8D"            # --m-moose-pink
  # Status: /claim's field edge and error symbol only
  danger: "#D6453F"               # --m-danger, light
  danger-dark: "#FF7A70"          # --m-danger, dark
typography:
  pageLettering:
    fontFamily: "var(--m-font-family-display)"
    fontSize: "var(--m-type-page-lettering-size)"
    fontWeight: "var(--m-type-page-lettering-weight)"
    lineHeight: "var(--m-type-page-lettering-leading)"
    letterSpacing: "var(--m-type-page-lettering-tracking)"
  pageLetteringCompact:
    fontFamily: "var(--m-font-family-display)"
    fontSize: "var(--m-type-page-lettering-compact-size)"
    fontWeight: "var(--m-type-page-lettering-compact-weight)"
    lineHeight: "var(--m-type-page-lettering-compact-leading)"
    letterSpacing: "var(--m-type-page-lettering-compact-tracking)"
  printedLabel:
    fontFamily: "var(--m-font-family-sans)"
    fontSize: "var(--m-type-printed-label-size)"
    fontWeight: "var(--m-type-printed-label-weight)"
    lineHeight: "var(--m-type-printed-label-leading)"
    letterSpacing: "var(--m-type-printed-label-tracking)"
    textTransform: "var(--m-type-printed-label-transform)"
  body:
    fontFamily: "var(--m-font-family-sans)"
    fontSize: "var(--m-type-body-size)"
    fontWeight: "var(--m-type-body-weight)"
    lineHeight: "var(--m-type-body-leading)"
  fieldValue:
    fontFamily: "var(--m-font-family-sans)"
    fontSize: "var(--m-type-field-value-size)"
    fontWeight: "var(--m-type-field-value-weight)"
    lineHeight: "var(--m-type-field-value-leading)"
  plateLabel:
    fontFamily: "var(--m-font-family-sans)"
    fontSize: "var(--m-type-plate-label-size)"
    fontWeight: "var(--m-type-plate-label-weight)"
    lineHeight: "var(--m-type-plate-label-leading)"
  detail:
    fontFamily: "var(--m-font-family-sans)"
    fontSize: "var(--m-type-detail-size)"
    fontWeight: "var(--m-type-detail-weight)"
    lineHeight: "var(--m-type-detail-leading)"
  cardLabel:
    fontFamily: "var(--m-font-family-sans)"
    fontSize: "var(--m-type-card-label-size)" # scaled with the card
    fontWeight: "var(--m-type-card-label-weight)"
    lineHeight: "var(--m-type-card-label-leading)"
    letterSpacing: "var(--m-type-card-label-tracking)"
    textTransform: "var(--m-type-card-label-transform)"
  cardFigure:
    fontFamily: "var(--m-font-family-display)"
    fontSize: "var(--m-type-card-figure-size)" # scaled with the card
    fontWeight: "var(--m-type-card-figure-weight)"
    lineHeight: "var(--m-type-card-figure-leading)"
    letterSpacing: "var(--m-type-card-figure-tracking)"
    fontFeature: "var(--m-type-card-figure-numeric)"
  stickerLettering:
    fontFamily: "var(--m-font-family-sans)"
    fontSize: "var(--m-type-sticker-lettering-size)"
    fontWeight: "var(--m-type-sticker-lettering-weight)"
    lineHeight: "var(--m-type-sticker-lettering-leading)"
    letterSpacing: "var(--m-type-sticker-lettering-tracking)"
    textTransform: "var(--m-type-sticker-lettering-transform)"
rounded:
  field: "var(--m-radius-component-field)"
  plate: "var(--m-radius-component-plate)"
  classCard: "var(--m-radius-component-class-card)"
  sleeve: "var(--m-radius-component-sleeve)"
  card: "var(--m-radius-component-card)"
  paperColumn: "var(--m-radius-lg)"
  sticker: "6px" # provisional: iOS draws 5–6, no token yet
spacing:
  xs: "var(--m-spacing-xs)"
  sm: "var(--m-spacing-sm)"
  md: "var(--m-spacing-md)"
  lg: "var(--m-spacing-lg)"
  xl: "var(--m-spacing-xl)"
  xxl: "var(--m-spacing-xxl)"
  rhythm: "var(--rhythm)" # provisional: section spacing, re-measured in the redesign
components:
  plate-primary:
    backgroundColor: "{colors.plate}"
    textColor: "{colors.paper}"
    typography: "{typography.plateLabel}"
    rounded: "{rounded.plate}"
    height: "56px"
    width: "min(100%, 420px)" # provisional
  plate-primary-press:
    backgroundColor: "{colors.platePress}"
  plate-outline:
    textColor: "{colors.ink}"
    typography: "{typography.plateLabel}"
    rounded: "{rounded.plate}"
    border: "2px {colors.ink}"
    height: "56px"
  member-card:
    backgroundColor: "{colors.card}"
    textColor: "{colors.cardLettering}"
    rounded: "{rounded.card}"
    shadow: "var(--m-shadow-card)"
    edge: "6px {colors.moosePink}, leading side"
    aspectRatio: "354 / 224"
  member-card-back:
    shadow: "var(--m-shadow-card-behind)"
  sleeve:
    backgroundColor: "{colors.sleeve}"
    rounded: "{rounded.sleeve}"
  sticker:
    backgroundColor: "{colors.moosePink}"
    typography: "{typography.stickerLettering}"
    rounded: "{rounded.sticker}"
    shadow: "var(--m-shadow-card-mini)"
    rotate: "4deg"
  punch-booked:
    border: "ring of {colors.moosePink} dots"
    rounded: "9999px"
  class-card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.classCard}"
    shadow: "var(--m-shadow-paper)"
  printed-field:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.fieldValue}"
    rounded: "{rounded.field}"
    border: "1.5px {colors.ink}"
    height: "56px"
  paper-column:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.paperColumn}"
    shadow: "var(--m-shadow-paper)"
---

# Design System: Moose marketing site

> **Values are owned by [moose-design](https://github.com/moose-club/design), not by this
> file** (RULES 18). Every colour, radius, spacing step, shadow and type role above names
> a `--m-*` token generated into `src/styles/moose-design/tokens.css`. A value with no
> token yet is marked `provisional` and goes to moose-design first. The rules are in
> `moose-design/RULES.md`. This file says how the marketing site applies them and cites
> each rule by number, without restating it.
>
> **Sources.** There is no Figma for this site (decided 2026-10-26). Design in code from
> this file, `moose-design/docs/reference/member-card/` (PNGs of the iOS app's real
> objects, light and dark, plus `moose-loop.svg`) and the reference description,
> `moose-ios/DESIGN.md`. The Lane Lines Figma file (`a5SmvlBwlHP6sf0FAZfLpP`) is retired
> as a source.

## Status

**26 Oct 2026: the Member Card is adopted, and nothing is redrawn yet.** moose-design #4
moved every surface onto the Member Card (RULES 0), and this file now describes that
target. The tokens are synced at `moose-design@2332573`. The site still ships what it
shipped before: `/` is the retired Lane Lines two-floor homepage (the `--ll-*` layer at
the foot of `globals.css`, `src/components/{sections,primitives}`), and `/claim`, `/404`
and the legal pages are the older card world (also retired). Each page keeps its shipped
implementation until it is redrawn as one piece and reviewed (the page-by-page rule). The
order is set by `moose-design/docs/handoffs/marketing-site.md`: dark mode and
self-hosted Poppins first, then the shared objects in a dev gallery, then the sections
one at a time. **Screens** shows each page's state.

## Overview

**Creative North Star: "The Member Card"**

Every Moose member carries one card. Their **home studio issues it**, and its name is
pressed into the card. The **partner studios accept it**: the places the home studio
added, listed on its back, and only those. Every real step earns a **mark** on it. In the
app the card is the member's own. On this site it's an illustration, drawn to explain
the product, and every card shown is a **sample** member at a sample studio
(The Earned Mark Rule, RULES 19). The site keeps its two floors behind the audience
switch and tells the same card to each reader.

**The member floor** shows a member what their studio's card would do. The hero is the
card in its sleeve, the web echo of the app's arrival: on load it slides out and lands
at −3°. Below it, "how it works" is told as the card's marks, in order: your name
prints, the code ticks it, your studio is pressed in, Moose puts the sticker on, and each
crossover class is punched. The commercials ($11 a week, 4 classes a month) and the App
Store plate follow.

**The studio floor** sells being the issuer. The studio hands out the card, its back
lists the partners the studio chooses, and the relationship between studios is
"reciprocal". The network section is the card's back ("Valid at" over partner lines),
not a logo wall. The studio portal ("Register your studio") is the floor's one primary
plate.

The register is a well-made studio card, not a bank card or a wallet pass: calm cream
pages, printed rules, small-caps labels and navy ink, with pink only on the card. Two
anti-references stand: **the aggregator** (dense venue grids, discount badges, anything
that reads as a consumer search result) and **the brand-book v2 page** (cream and navy
bands, white cards on shadows, a pink eyebrow over every heading, a pink word in every
headline).

**Key characteristics:**

- **Flat pages, one object.** The page never takes depth. The card (or, on the legal
  pages, the paper column) is the one thing on it that does.
- **The card carries the argument.** The issuer is home, the back lists who accepts it,
  and marks come from use. The site never implies network-wide access.
- **Pink belongs to the card.** Its edge, sticker, punches and ticks, plus the caret and
  the focus ring. The site has no pink of its own.
- **One ink at four weights**, navy in light and white in dark. Links are ink,
  underlined.
- **Poppins 800 display lettering** over plain Poppins. Sentence case, no eyebrows.
- **Light and dark**, following the system.

## Colors

The palette is the floor, paper, one ink, the card and pink. Dark mode is the brand's
navy floor (RULES 8): `floor` and `paper` turn navy, ink turns white, pink stays, and the
card turns cream so it never sinks into the floor. It follows `prefers-color-scheme` by
setting `.dark` on `<html>` before first paint. There is no theme picker.

- **Floor** (`--m-floor`): every page.
- **Paper** (`--m-paper`): only what sits on the floor: the legal pages' column, `/claim`'s
  form, a class card. Never a page.
- **Ink** (`--m-ink`, `--m-ink-support`, `--m-ink-hint`, `--m-ink-rule`): The One Ink Rule
  (RULES 7). `ink` for lettering, titles, plate labels and links (underlined). `inkSupport`
  for supporting lines and printed labels. `inkHint` for placeholders and the dashed slot
  of a mark not yet earned. `inkRule` for printed rules, including the scrolled nav's
  edge. `inkTape`, `inkHairline` and `inkWash` are retired: rules become `inkRule`, and a
  hover wash becomes nothing or a token proposed upstream.
- **Plate** (`--m-button-primary`, `-press`, `-label`): the primary plate. Navy with a white
  label in light, white with a navy label in dark (RULES 5).
- **Card** (`--m-card-face`, `--m-card-lettering`, `--m-card-back`, `--m-card-sleeve`,
  `--m-card-emboss`): the member card and its sleeve. The sleeve is always the opposite
  of the card it holds.
- **Pink** (`--m-moose-pink`): The Yours Rule (RULES 6). Nothing on a marketing page
  belongs to the reader, so pink appears **only on the card objects drawn here**: the
  card's leading edge, its sticker, its punches and booked outlines, and its ticks. The
  other uses are the caret, a focused field's edge on `/claim`, and the 2px
  `:focus-visible` ring everywhere. Pink is never a word in a headline, a chip, an eyebrow,
  a link, a fill or a decorative accent.
- **Danger** (`--m-danger`): `/claim` only, on a field's edge and its error symbol. The
  message itself is `ink` (RULES 9). The site has no irreversible commit, so it has no
  danger plate (RULES 9b).

**The navy close.** In light mode the close and footer may keep a scoped `.dark` as a
cover band (like a photo cover, RULES 8). In dark mode they are simply the floor.

## Typography

**Poppins**, self-hosted at 400–800 (RULES 12). Display lettering uses
`--m-font-family-display` at 800, line-height 1, tracked −0.02em. Everything else uses
`--m-font-family-sans`. No second family. The Google Fonts link goes when the self-hosted
files land, and SPEC §4/§9 get reconciled at the same time.

Roles (RULES 13) and where this site uses them:

- **`pageLettering`**: the hero headline on each floor when no card shares the
  measure, and the 404 headline.
- **`pageLetteringCompact`**: a headline that shares the screen with the card (the
  member hero, the studio hero's card beside it) and each section headline.
- **`body`** (`inkSupport`): the supporting line under a headline, step bodies, footer
  links.
- **`plateLabel`**: plate and switch labels, step titles, roster names, footer column
  heads.
- **`printedLabel`** (`inkSupport`): small caps above a field on `/claim`, above a list or
  a panel ("Valid at"). Never above a headline.
- **`fieldValue`**: a typed value on `/claim`.
- **`detail`**: captions, the line under a plate, the footer's legal row.
- **`cardLabel`, `cardFigure`, `stickerLettering`**: type on the card only. It scales with
  the card as part of the illustration. Credits always show two decimals.

Headlines are sentence case, wrap where the measure says, and are never broken by hand.
Rewrite a headline that wraps badly. The Printed Label Rule (RULES 14): no eyebrow or
kicker above a headline.

The retired roles (`floorLettering`, `stationLabel`, `sectionHead`, `figure`, `rowLabel`)
and the `--ll-*` sizes stay in the shipped CSS only until each section is redrawn.

## Layout

Three review canvases: **phone 375**, **tablet 768**, **desktop 1440** (SPEC §8's full
set, 375 / 414 / 768 / 1024 / 1280 / 1440, still has to hold without horizontal scroll).

- One reading column on phone, capped to a single measure and left-aligned. From tablet
  up, a section may pair its words with its object (the card, the card's back, the
  steps) in two columns. The retired lane grid is not carried over: columns are set per
  section in the redesign.
- The audience switch and the two floors stay (`html[data-audience]`, set from the hash
  before first paint). Any link to the other floor's anchor switches floors first.
- Sections are separated by `--rhythm` (provisional). Inside a section, spacing comes
  from the token scale. Empty floor is a stated measure, never what's left over.
- The card keeps its proportions (354 : 224) at every width and scales as one
  illustration. It never reflows its lettering.

## Elevation & Depth

The Flat Page Rule (RULES 10): the floor never takes a shadow, tint, gradient or glass.
Depth belongs only to objects on it:

| Object | Shadow |
| --- | --- |
| Member card, front (and in its sleeve) | `--m-shadow-card` |
| Member card, back fanned behind the front | `--m-shadow-card-behind` |
| Sticker | `--m-shadow-card-mini` |
| Class card, paper column on legal pages | `--m-shadow-paper` |

Separation on the floor comes from printed rules (`inkRule`), space and type weight. The
scrolled nav takes the solid floor and an `inkRule` edge, never a frosted bar. Gradients
are named tokens only (RULES 11). If the hero photograph survives (Open decision 1),
its floor scrim needs a gradient token first.

## Shapes

- **Plates:** `radius.component.plate`, 56 tall. Never capsules.
- **Fields:** `radius.component.field`, a 1.5px edge.
- **Member card:** `radius.component.card`, proportion 354 : 224, with a 6px pink edge
  down the leading side. **Sleeve:** `radius.component.sleeve`, with a half-ellipse thumb
  notch in its mouth.
- **Sticker:** 6px radius (provisional), hugging its lettering, tilted +4° on the card.
  Empty, it's the same shape dashed in `inkHint`.
- **Punch:** booked is a ring of pink dots (sixteen on small marks). Attended is a real
  hole through the card: a CSS mask that shows what's behind, never a cream circle, with
  an inner shadow on the top edge.
- **Class card:** `radius.component.classCard`, a stub behind a dashed perforation with
  two notches cut in the floor colour.
- **Paper column:** `radius.lg`.
- **Rules:** 1px `inkRule`. No hairline box borders: the page has no boxes.

## Components

The shared objects match the iOS app's (see its `DESIGN.md` and the reference PNGs),
drawn in Poppins and adapted to the web, not reinvented. Each is a static Astro component
in `src/components/primitives/` (HTML and CSS, SVG where it helps). All of them render in
light and dark on the dev gallery (`src/pages/dev/gallery.astro`, which answers 404
outside dev).

### The member card

An illustration at a fixed proportion, read by assistive tech as one image whose
accessible name repeats every fact on it.
- **Front:** the pink edge; "ISSUED BY" and the studio; the Moose loop top right
  (`moose-loop.svg`, the only emblem); the number, embossed (`--m-card-emboss`);
  "MEMBER" and the name; "CREDITS" with the balance to two decimals in `cardFigure`; the
  sticker slot tilted +4° top right.
- **Back:** "VALID AT" with "Added by" the studio, then one partner per line on printed
  rules. On the studio floor this is the network section: partner names (and their
  single-ink logos) as lines on the card's back, never a logo wall.
- **Sleeve:** `--m-card-sleeve`, a pink rule, "Member card", "From your home studio" and
  the loop. It holds the card in the member hero.
- No chip, hologram or security print: it would read as a bank card or a wallet pass.
- **Always a sample** (RULES 19): a sample member at a sample studio, reading as
  illustrative. Never a "Valid" sticker on a real studio that doesn't offer Moose.

### The card's marks

The member floor's "how it works", each step one mark (copy names the step, never the
mark):

| Step | Mark | Before it's real |
| --- | --- | --- |
| Sign up | the name prints, embossed | an `inkHint` hint on a dashed rule |
| Code accepted | a pink tick and "Verified" beside the number | a dashed circle |
| Studio linked | the studio name presses in, embossed | "Your home studio" on a dashed rule |
| Moose on | the pink sticker, "Valid to …" | a dashed "Not yet valid" slot |
| A class booked | a ring of pink dots | none |
| A class attended | the punch: a hole through the card | a faint dotted slot |

### Class card (with a stub)

Paper, `radius.component.classCard`, `shadow.paper`. Studio and class, the time in
display lettering, and a stub behind the perforation that carries the state ("Book",
Booked with a pink edge and booked ring, Free with a sticker). Use it only where the
member floor shows a crossover class.

### Plates

- **Primary:** navy (white in dark), label left and a Lucide chevron-right at the far end.
  One per view (RULES 5): "Register your studio" on the studio floor, the App Store on
  the member floor, one at the close. Press darkens to the press fill and scales to 0.98.
- **Outline:** a 2px `ink` edge, ink label, for the alternative beside a primary, or a
  small action trailing a row of text ("Studio login" in the nav). 44px minimum height
  (RULES 17).
- No pink plate, no capsule, no danger plate.

### Printed field (`/claim`)

A `printedLabel` above a `radius.component.field` box with a 1.5px `ink` edge (`inkHint`
while empty). **Focused:** a pink edge and caret. **Error:** a `danger` edge, the error
symbol, and the message below in `ink`.

### Paper column (legal pages)

The legal text on one floating `paper` column (`radius.lg`, `shadow.paper`) centred on
the floor. `printedLabel` section labels and `inkRule` between sections. No bands,
cards or eyebrows.

### Audience switch

Two plates above the hero headline on both floors. Chosen: a solid `ink` fill with a
`floor` label. Unchosen: the 2px ink outline. No chevron and no pink, because a switch
doesn't go forward. It swaps floors in place, keeps `#members` in the URL for the member
floor, and moves focus to the same switch on the newly shown floor.

### Navigation and footer

The nav is transparent on the floor. Past a short scroll it takes the floor fill and an
`inkRule` edge. Links are `ink` (underlined on hover and focus), with the outline
"Studio login" as its only action and a Lucide menu icon on phone. The footer continues
the close: wordmark, tagline and Instagram, link columns, and a `detail` legal row.

### Icons

Lucide outline icons, inline SVG, 2px stroke, `currentColor` (RULES 15). The Moose loop
is the only emblem.

## Motion

One authored moment on the whole site (RULES 17b): **the card arrives** on the member
hero. On load the card slides up out of its sleeve, the sleeve drops away, and the card
lands at −3° (about 900ms). CSS only if it can be, with no animation library. Under
`prefers-reduced-motion` the card is already out and still. Everything else is still:
the scroll-drawn live line and the app capture's scroll scrub are retired with their
sections. Press feedback on plates (scale 0.98, fast duration) is not an authored
moment and stays.

## Copy

RULES 20, plus this site's words. Copy lives in `src/data/copy.ts` and is Max's: change it
only where it breaks RULES 6 or 20, and list each change old → new in the PR.

- **"Reciprocal"** is the studio-side word for the partnership. Studios "issue" the card,
  and partners "accept" it ("Valid at").
- **"Free class"**, never "Day pass". Never "Passport" or "Pass".
- Never imply travel, open access or network-wide access. Partners accept the card
  because the home studio added them.
- Design words ("the press", "punch", "mark", "stub", "sticker") never appear in page
  copy.
- Credits always show two decimals ("3.00 to spend").
- The JSON-LD, `/llms.txt`, robots rules and meta tags are built from `copy.ts`. A copy
  edit updates them too, so keep them in step (SPEC §9).

## Do's and Don'ts

### Do:
- **Do** take every value from a `--m-*` token. A missing value goes to moose-design and
  is marked `provisional` here until it lands.
- **Do** keep pages flat and quiet so the card is the one object on them.
- **Do** show a sample member's card, and keep each mark dashed until the step that earns
  it.
- **Do** keep exactly one primary plate per view. An outline plate sits beside it or
  trails a row of text.
- **Do** check every page in light and dark at 375, 768 and 1440, with before/after
  screenshots in `.impeccable/review/`.
- **Do** keep hit targets at 44px or more and measure contrast (RULES 16, 17).
- **Do** move a page as one piece. Delete the CSS it no longer uses (`--ll-*`, card-world
  utilities) in the same change.

### Don't:
- **Don't** put pink anywhere except the card objects, the caret and focus. No pink words
  in headlines, chips, eyebrows or links.
- **Don't** put a shadow, tint, gradient or blur on the page. Only the card, sleeve,
  sticker and paper take `shadow.*`.
- **Don't** turn the network into a logo wall or a venue grid. Partners are lines on the
  card's back.
- **Don't** draw the card like a bank card or wallet pass, and don't put a "Valid" sticker
  on a real studio's card.
- **Don't** put an eyebrow or kicker above a headline, or break a headline by hand.
- **Don't** extend the card-world utilities (`.section`, `.eyebrow`, white cards, pill
  buttons, legacy shadows) or the retired `--ll-*` layer to anything new.
- **Don't** hand-edit `src/styles/moose-design/tokens.css` or `.moose-design.json`.

## Open decisions

1. **The hero photograph.** Does `hero-strength.webp` survive on the studio floor beside
   the card, or does the card replace it? If it stays, its scrim needs a gradient token
   (RULES 11). Max decides at the studio hero's review.
2. **The studio floor's hero object.** The issued card's front, or its back with the
   partner lines. Max decides at the studio hero's review.
3. **Sections per floor.** Whether Model, Value and the member commercials keep their
   current split once "how it works" is told as marks. Max decides at the member hero's
   review.
4. **Sticker radius.** iOS draws 5–6px. Propose a `radius.component.sticker` token to
   moose-design (owner: whoever builds the gallery).
5. **Section rhythm.** Re-measure `--rhythm` for the new sections and propose it as a
   token (owner: whoever builds the first section).

## Screens

| Page | Source | State |
| --- | --- | --- |
| `/`, studio floor (Hero, Model, Value, Network, Close) | before/after in `.impeccable/review/` | not redrawn: retired Lane Lines shipped |
| `/`, member floor (MemberHero, Members, Close) | before/after in `.impeccable/review/` | not redrawn: retired Lane Lines shipped |
| Nav, audience switch and footer | before/after in `.impeccable/review/` | not redrawn: retired Lane Lines shipped |
| `/claim` | before/after in `.impeccable/review/` | not redrawn: retired card world shipped |
| `/404` | before/after in `.impeccable/review/` | not redrawn: retired card world shipped |
| Legal pages (privacy, terms, studio-terms, studio-privacy, studio-conduct, liability-waiver) | before/after in `.impeccable/review/` | not redrawn: retired card world shipped |
| All other pages | none | not yet redrawn; shipped implementation stays |
