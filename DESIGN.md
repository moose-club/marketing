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
> **Sources.** Figma first, then code (Max, 26 Oct 2026, reversing the brief's "no
> Figma"). The source is the Marketing file `a5SmvlBwlHP6sf0FAZfLpP`, three pages
> (split 26 Oct 2026): **"Member Card · Components"** (`117:282`, the shared objects as
> components, section `118:271`), **"Home · Studio floor — working"** (`165:1206`) and
> **"Home · Member floor — working"** (`165:1207`), one labelled section per page
> section, desktop on the left and phone beside it. No section is coded until Max has agreed
> its frame. The objects follow `moose-design/docs/reference/member-card/` and
> `moose-ios/DESIGN.md`. The file's old page, "Home · / — working", is the retired Lane
> Lines design and is history only.
>
> **Figma values.** Frames bind the Moose Design System library variables. What the
> library doesn't have yet (`inkHint`, `inkRule`, the card colours, the component radii,
> the card shadows, the Member Card type roles) is a local collection, **"Member Card ·
> provisional"**, plus local styles under `Member Card/…`. These alias the library where
> they can. They're provisional until moose-design's Figma library gains them.

## Status

**26 Oct 2026: the member floor is coded, so all of `/` is on the Member Card.** How it
works for you (with the card earning its marks), What you get and what you pay, The app
(with a class booking itself) and the member Close are built from their frames
(`MSMemberHow`, `MSMemberGet`, `MSMemberApp`, `MSMemberClose`), and Max's copy answers are
in `copy.ts`. `MSMembers`, `MSClose`, the app capture and the whole Lane Lines layer
(`.lanes`, its type roles and the `--ll-*` values) are deleted. The plates and the floor
rules stay in `globals.css`.

**26 Oct 2026: the studio floor is coded.** Nav, Hero, Model, Value, Network (the deck)
and the studio Close (with the Register press) are built from their agreed frames, on
top of the footer.

**26 Oct 2026: the design moves to Figma.** Max wants to design in Figma first, then
code. The working page (since split into Components, Studio floor and Member floor pages) holds the shared objects (card front,
printed front, back, sleeve, card in sleeve, sticker, punch, plate, switch) and the first
frames for review: member hero (1440 light and dark, 390), studio hero (1440, 390) and
the arrival in three steps. The coded member hero and objects stay on the branch but are
**unagreed**. Code changes resume section by section once a frame is agreed, and
anything built that differs from the agreed frame is changed to match.

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

**26 Oct 2026: foundations built (brief Phase 2).** Dark mode follows the system on `/`
(an inline `<head>` script sets `.dark` on `<html>` before first paint). The carve-out
pages opt out with `followSystemDark={false}` until each is redrawn, because their
shipped CSS uses colours that don't flip. Poppins is self-hosted from
`@fontsource/poppins`. The retired ink weights (`inkTape`, `inkHairline`, `inkWash`,
`inkPlaceholder`) are gone from the site's CSS, and the pink line is dropped (retired), so `/`
has no pink until the card objects arrive. The nav wordmark is an `ink` mask.

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
crossover class is punched. The commercials (what you get, what you pay) and the App
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
are named tokens only (RULES 11).

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
in `src/components/primitives/` (HTML and CSS, SVG where it helps): `MemberCard`,
`CardSleeve`, `Sticker`, `Punch`, `ClassCard`, `Plate`, `PrintedField`, `PaperColumn` and
`MooseLoop`. All of them render in light and dark on the dev gallery (`/dev/gallery`,
`src/pages/dev/[page].astro`, which has no path in a build, so it never ships or reaches
the sitemap).

The card objects (card, sleeve, class card) are drawn in **object units**: every measure
is a fraction of the object's width (`--u`, 1/354 of the card), through a container
query, so an object scales as one picture at any width and never reflows. Their own ink
weights are the card lettering mixed at 70 / 45 / 22% (provisional: card ink weights,
proposed upstream).

### The member card

An illustration at a fixed proportion, read by assistive tech as one image whose
accessible name repeats every fact on it.
- **Front, in use:** the pink edge; "ISSUED BY" and the studio; the Moose loop top right
  (`moose-loop.svg`, the only emblem); the sticker slot tilted +4°; "MEMBER" and the name,
  embossed (`--m-card-emboss`); "CREDITS" with the balance to two decimals in
  `cardFigure`; a printed rule; then the punch row and a footnote. A slot left empty
  draws its dashed "not yet" state.
- **Front, printed:** issued by, the loop, the embossed number ("MOOSE  0000  0001"),
  member and a small credits line. This is the face in the sleeve.
- **Punches:** booked is the pink ring; attended is a real hole (the face's mask), with
  the card's thickness drawn over it outside the mask.
- **Back:** "VALID AT" with "Added by" the studio, then one partner per line on printed
  rules. On the studio floor this is the network section: partner names (and their
  single-ink logos) as lines on the card's back, never a logo wall.
- **Sleeve:** `--m-card-sleeve`, the thumb notch (a half-ellipse mask), a pink rule,
  "MOOSE CLUB", "Partner access card" (the app's shipped sleeve copy) and the loop. The
  card's number shows through the notch. It holds the card in the member hero.
- No chip, hologram or security print: it would read as a bank card or a wallet pass.
- **Always a sample** (RULES 19): the member is "Alex Sample", which is what makes the
  card read as illustrative. Neither hero has a caption (Max, 26 Oct 2026). Never a "Valid" sticker on a real studio that doesn't offer Moose.

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
Booked with a pink edge and booked ring, Free with a sticker). "Booked" stays `ink`, not
the app's pink caps: small pink text fails contrast (RULES 16), and the ring already says
whose it is. Use it only where the
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

### The issued card (studio floor hero)

The studio hero's words are the switch, the headline, the supporting line and the
primary plate, nothing else. The four points ("You choose your partners." …) are off the
page (Max, 26 Oct 2026). They stay in `copy.ts` because `/llms.txt` reads them.

No photograph (Max, 26 Oct 2026: it competed with the card and the page wants one
object, RULES 0). The hero's second column is the studio's card on the floor: the
**back** (+4°, `shadow.cardBehind`) with "Valid at" and every studio on Moose, and the
**front** (−3°, smaller, "Issued by Your studio") overlapping only the back's lower-left
corner. The issuer stays "Your studio" (Max, 26 Oct 2026): this card is the operator's
own, so it doesn't cycle.
No caption (Max, 26 Oct 2026); the member name "Alex Sample" keeps the card reading
as a sample (RULES 19). Phone: switch, then the pair and the words,
the same order as the member floor.

**The card is issued (Max, 26 Oct 2026; Figma "Hero · the card is issued" `179:820`).**
On load, once: the back rises in and turns to +4° (~520 ms), the front slides up over
its corner and tips to −3° (~560 ms, both ease-out-quint), "Your studio" presses in
from the hint weight (the Close's press, `mc-press`) and the "Valid" sticker lands
(1.15 → 1, 260 ms). About 1.4 s in all, CSS only. **Then the pair follows the pointer**
(Figma `179:1420`): on desktop with a fine pointer, each card leans toward it in 3D
(front up to 6° and 14 scene units, the back half that, so it reads deeper) and eases
back on leave (400 ms). No lean while the arrival plays. Under
`prefers-reduced-motion` the pair is at rest and still; on touch there's no lean.

### The Moose model (studio floor)

Type-led, with no card: the heroes carry the object. The headline sits on the left with
the lede beside it. Under "How it works." are four printed columns (stacked on phone),
each with a printed rule (`inkRule`) on top, the ordinal in `pageLetteringCompact` at its
phone size, the step title in `plateLabel` and the body in `body`. Each step's bold range
is `ink` SemiBold, and prices never break at the slash (word joiners in the copy). There
is no card-world detail: the section is type only (Max removed the step 04 rings, 26 Oct
2026).

**Step copy (26 Oct 2026, in the Figma frames; goes into `copy.ts` when the section is
coded, because `MODEL` feeds the live page until then):** 01 Register and connect your
booking system · 02 Choose your partners · 03 Select your eligible memberships (Max:
members upgrade in the app and Moose handles the payments; no price cap in this step) ·
04 Members book, Moose keeps it balanced (credits each month). Confirmed by Max: it's
credits, not "four sessions"; every studio connects a booking system. Step bodies were
trimmed by Max to one sentence each for 01 and 02.

### Value (studio floor)

The headline (`pageLetteringCompact`) and the prize note (`body`), then the three figures
as a **printed read-back ledger**, the way the app prints "Cost / Free cancel until".
Each cell has a `printedLabel` title above the figure (`pageLetteringCompact`, `ink`), the
unit in `detail`, and the caption in `detail` (`inkSupport`). Printed rules (`inkRule`)
run above and below the ledger and between cells; on phone the cells stack with a rule
between each. Figures travel open, never boxed. No footnote under the
ledger (Max, 26 Oct 2026, dropping the proposed "Illustrative figures, AUD.").

### Network (studio floor): the deck

Chosen by Max, 26 Oct 2026. "The studios already on Moose." and "Across Australia — and
counting." centred, then **a deck of cards, one issued by each studio on Moose**
(`MC/Partner card`: the card face, its pink edge, "ISSUED BY", the studio's mark in card
lettering and its name). No other names or logos on the page.
- **Desktop:** the deck rests fanned in an arc across the page (cards at 240 wide, ±17°,
  the right-most on top so every mark shows). It arrives as a neat stack and fans out
  when the section scrolls into view (~900 ms, ease-out). Then it slowly shuffles: every
  3 s the front card slides out, tucks to the back, and the fan closes the gap. Hover
  lifts a card.
- **Phone:** a swipeable row of full-size cards (250 wide, alternating ±2°, the next one
  peeking) that also auto-advances one card every few seconds. Swiping takes over.
- **Reduced motion:** the fan (desktop) or the row (phone), still.
- These studios offer Moose, so showing their cards is true (RULES 19). No sticker, no
  member: these are the studios' own cards.

### Close (studio floor)

The navy cover band (`.dark` scoped, RULES 8): "Get your studio on Moose.", the lede
("No cost to join. You choose your partners.": Max, 26 Oct 2026, since "no integration
work" no longer fits step 01),
the floor's last primary plate ("Register your studio", white with a navy label) and
the `detail` line under it. Beside the words (below them on phone), a fresh card in its
sleeve, "Issued by Your studio": the operator's own card, waiting to be issued. It
mirrors the member hero's sleeve. In the band the card turns cream and the sleeve
raised navy, as in dark mode.

**On "Register your studio" (Max, 26 Oct 2026):** the card is issued. Before the press,
"Your studio" under "Issued by" is ghosted (`cardHint`), because it isn't issued yet.
On press (~450 ms, ease-out) the plate scales to 0.98, the studio name *presses in*
(a brief pink impression and the name rising to card lettering, the app's "press"), and
the card slides up out of its sleeve and tips to −3° as the sleeve drops away. After
~400 ms it settles, issued. The studio portal opens in its new tab **straight away**, as a
link does (Max, 26 Oct 2026), so the card issues on the page behind it and is waiting,
issued, when the operator comes back; no delayed tab for a popup blocker to catch. Under
`prefers-reduced-motion` it goes straight to the issued card. Figma: `158:918` → `158:971`
→ `158:1024` (click the plate in Present).

### How it works for you (member floor)

Short and basic (Max, 26 Oct 2026). The headline, then three steps (stacked on phone).
Each step shows **the same sample card at that moment**: 01 the back, its "Valid at"
lines (your studio partners up); 02 the front with the "Valid" sticker (you add Moose);
03 the front with credits spent and the punch row marked, one hole and one booked ring
(you book with credits). Under each card is a printed rule, the ordinal, the title
(`plateLabel`) and one line (`body`). The cards tilt ±2°.

**The card earns its marks** (Max, 26 Oct 2026; Figma motion `173:855`). At ≥1048 with
motion, the three cards become one sample card (480 wide) held at the middle of the
viewport on the left, with the steps on the right (the ordinal beside the title and
line). Each step takes over as it crosses the middle; the others fall to `inkSupport` and
`inkHint`. 01: the back. 02: the card turns to its front (~640 ms) and the "Valid"
sticker lands (1.15 → 1, 260 ms). 03: the credits count down 4.00 → 1.46 (~700 ms, two
decimals all the way), then the first slot is punched (the hole opens and its disc
drops) and the booked ring turns pink. Until then each mark is drawn "not yet": the
slot's faint ring, the booked ring in the hint ink. Scrolling back resets the card. On
phone with motion, each step's card plays its moment once as it comes into view (the
partner lines print in; the sticker lands; the count and the punch). Under reduced
motion, or without script, the three still cards.

**Copy (coded):** "How it works for you." 01 Your studio partners up. It teams up with
studios nearby. · 02 You add Moose. Upgrade through your home studio. · 03 You book with
credits. Credits each month for partner classes, in the Moose app. The old lede is
dropped.

### What you get, what you pay (member floor)

The words on the left (the headline and one short line), and on the right **a floating
paper panel of rows**, the app's own membership panel (`paper`, `radius.lg`,
`shadow.paper`). Each row has a `plateLabel` key in `ink` on the left and the value in
`body` `inkSupport` on the right, wrapping right-aligned on phone, with printed rules
(`inkRule`) between the rows. No pink: nothing in it is the reader's yet.

**Copy (coded):** "What you get, what you pay." / "A little more variety, through your
home studio." Rows: You get: Credits every month · Valid at: Your studio's partners · You
pay: Your studio's upgrade price. No figure in "You get": the amount varies by studio
(Max, 26 Oct 2026, replacing the frame's "4.00 credits a month"; the sample cards still
show 4.00). No billing row (Max, 26 Oct 2026).

### The app (member floor)

No phone screenshot (it's dropped): the app is shown by its own objects. The words sit
on the left; on the right are **three class cards** (`MC/Class card` in Figma,
`ClassCard.astro` in code) as a glimpse of Browse, one per state: Book (7:30 AM
Reformer 45), Booked (the pink edge and press-out ring; the word in `ink`) and Free (the
sticker). Class names and times are illustrative ("Sample instructor"), so each card
reads **"A partner studio"**, with no badge, rather than a real studio (Max, 26 Oct 2026,
replacing the frame's partner names). They stack on phone. No primary plate here: the
App Store plate is the member Close's.

**A class books itself** (Max, 26 Oct 2026; Figma motion `174:1064`). The first time the
cards come into view, the top one is booked, once, about 1.2 s in all: the stub presses
(0.98), a thin pink arc draws round a faint ring and settles into the press-out ring,
the pink edge runs down the card and "Booked" prints. Only one state's label is visible
at a time, to assistive tech as on screen. Under reduced motion it stays on Book, as
drawn.

**Copy (coded):** "Book in the Moose app." / "Pick a class at a partner studio and book it
with your credits." This replaces "Book and manage crossover sessions at partner venues"
and its lede.

### Close (member floor)

The navy cover band, as on the studio floor (`.dark` scoped): "Get the Moose app.", the
lede, the floor's last primary plate ("Download on the App Store") and the `detail` line
("…iPhone only for now.", kept together on one line). Beside the words (below them on
phone), the sample card in use, "Issued by Your home studio", "Alex Sample", 4.00, the
"Valid" sticker, cream in the band, at −3°. The card lives in the app. It is still. The
footer follows (shared).

### Audience switch

Two plates above the hero headline on both floors. Chosen: a 2px `ink` edge and an
`ink` label. Unchosen: a 2px `inkRule` edge and an `inkSupport` label. Never a fill:
the view's one filled plate is its primary action (RULES 5). No chevron and no pink, because a switch
doesn't go forward. It swaps floors in place, keeps `#members` in the URL for the member
floor, and moves focus to the same switch on the newly shown floor.

### Navigation and footer

The nav is transparent on the floor; past a short scroll it takes the floor fill and an
`inkRule` edge. Links are `inkSupport` (`ink` and underlined on hover and focus), the
outline "Studio login" is its only action, and a Lucide menu icon stands in on phone. The
wordmark is an `ink` mask, so it flips with dark mode.

The footer continues the close's navy band with no seam (`.dark` scoped). On the left
are the wordmark, "More ways to move." (`body`, `inkSupport`) and Instagram (Lucide,
`ink`). On the right are three columns, Explore, More and Contact, each a `printedLabel`
head over `body` links in `ink`. Then a printed rule (`inkRule`) and the legal row in
`detail`: © line, Privacy and Terms on the left, Register your studio and Back to top on
the right. On phone everything stacks, and the legal row becomes three lines.

### Icons

Lucide outline icons, inline SVG, 2px stroke, `currentColor` (RULES 15). The Moose loop
is the only emblem.

## Motion

One authored moment on the whole site (RULES 17b): **the card arrives** on the member
hero. On load the card slides up out of its sleeve, the sleeve drops away, and the card
lands at −3° (about 900ms). CSS only if it can be, with no animation library. Under
`prefers-reduced-motion` the card is already out and still. The scroll-drawn live line and
the app capture's scroll scrub are retired with their sections. Press feedback on plates (scale 0.98, fast duration) is not an authored
moment and stays.

**The member floor's further moments (Max, 26 Oct 2026; a deliberate stretch of RULES
17b's one-per-flow, decided by the rule owner).** Both use the app's own motions, play
once, and are still under `prefers-reduced-motion`:
- **How it works: one card earns its marks.** On desktop the three static cards become
  one sample card held in view while the steps scroll past (scroll-driven: a step
  activates as it crosses the middle of the viewport; the inactive steps sit in
  `inkHint`). 01: the back, "Valid at". 02: the card turns to its front and the "Valid"
  sticker lands (1.15 → 1, ~250 ms). 03: the credits count down 4.00 → 1.46, one class
  is punched (the hole appears and the disc drops) and the next gets its booked ring. On
  phone each step's card plays its moment once as it enters. Figma: Member floor page,
  "Motion · How it works" (`173:856` → `173:1147`).
- **The app: a class books itself.** When the section enters, the top class card's
  "Book" stub is tapped (0.98, a faint press), a thin pink arc draws round a faint ring
  and settles into the press-out ring, the pink edge runs down the card and "BOOKED"
  prints (~1.2 s). Figma: "Motion · The app" (`174:1065` → `174:1203`).

**The studio hero: the card is issued, then follows the pointer** (Max, 26 Oct 2026,
a deliberate stretch of RULES 17b's one-per-flow like the member floor's; details under
the issued card above). It plays once on load and uses the app's own motions (the
press, the sticker); the lean is a response to the pointer, not an ambient loop.

**The studio floor's authored moment: the deck** (Network, above). The Register press
(Close) is feedback on the floor's one action rather than a second ambient moment: it
plays only when pressed, and only once. The member floor's is
the card arriving; the studio floor's is the deck fanning out and shuffling. One each
(RULES 17b).

**The cycling issuer** (Max, 26 Oct 2026), on the member hero's card only (the studio hero's card reads "Your studio"). Once the card is shown, its "Issued by"
line cycles through the studios already on Moose (`NETWORK.partners`), one every 1.5s
with a 200ms fade. It's a quiet text change, not a second authored moment. It pauses
while the card is hidden or the tab is in the background, and under
`prefers-reduced-motion` it stays on the first studio. The member stays a sample
("Alex Sample"), and these studios do offer Moose, so the "Valid" sticker is true of
them (RULES 19). The issuer line is sized so the longest name holds one line.

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

Decided 26 Oct 2026 (Max delegated these to the redesign):

1. ~~The hero photograph.~~ **No photograph on either floor** (Max, 26 Oct 2026,
   revising the first call to keep it on the studio floor). The card is each hero's one
   object. People may come back lower on the page, ideally real partner-studio photos.
2. ~~The studio floor's hero object.~~ **The card's front and back, fanned**: the front
   issued by "Your studio", the back listing the studios on Moose. The Network section
   then must not repeat the back. What it shows instead is open until it's drawn.
3. ~~Sections per floor.~~ **Studio:** Hero → Model (how it works) → Value (the figures,
   open rows) → Network (the card's back) → Close. **Member:** Hero (the card in its
   sleeve) → How it works (the card's marks) → Get and pay (open rows) → Close. The
   member app capture is dropped: the card replaces it as the floor's object.
4. ~~Sticker radius and section rhythm.~~ Both stay local and `provisional` (6px; 72
   compact / 96 regular) and are listed as proposed tokens in the PR
   (`radius.component.sticker`, `spacing.section`).

Still open: none.

## Screens

| Page | Source (Figma `a5SmvlBwlHP6sf0FAZfLpP`) | State |
| --- | --- | --- |
| `/`, studio floor: Hero | `127:570` (1440), `127:653` (390) | agreed and coded 26 Oct 2026 (`MSHero.astro`) |
| `/`, studio floor: Hero motion | issued `179:820` (prototype), pointer `179:1420` | coded 26 Oct 2026 (`MSHero.astro`) |
| `/`, studio floor: Model | `135:570` (1440), `135:662` (390) | agreed and coded 26 Oct 2026 (`MSModel.astro`) |
| `/`, studio floor: Value | `143:570` (1440), `143:594` (390) | agreed and coded 26 Oct 2026 (`MSValue.astro`), without the footnote |
| `/`, studio floor: Network | `151:879` fanned + `151:799` stacked (1440, prototype), `154:1314` + `154:1235` (390 row, prototype) | agreed and coded 26 Oct 2026 (`MSNetwork.astro`; the partner card is `MemberCard layout="partner"`) |
| `/`, studio floor: Close | `156:870` (1440), `156:902` (390); press animation `158:918`–`158:1024` (prototype) | agreed and coded 26 Oct 2026 (`MSStudioClose.astro`); the portal opens on press, not after the animation |
| `/`, member floor: MemberHero | `120:331` (1440 light), `120:418` (1440 dark), `120:601` (390), `120:759` (arrival) | agreed and coded 26 Oct 2026 (`MSMemberHero.astro`); lede shortened by Max |
| `/`, member floor: How it works for you | `162:992` (1440), `162:1178` (390); motion `173:855` (prototype) | agreed and coded 26 Oct 2026 (`MSMemberHow.astro`) |
| `/`, member floor: What you get, what you pay | `168:683` (1440), `168:700` (390) | agreed and coded 26 Oct 2026 (`MSMemberGet.astro`), "Credits every month" |
| `/`, member floor: the app | `171:1248` (1440), `171:1314` (390); motion `174:1064` (prototype) | agreed and coded 26 Oct 2026 (`MSMemberApp.astro`), at "A partner studio" |
| `/`, member floor: Close | `172:817` (1440), `172:882` (390) | agreed and coded 26 Oct 2026 (`MSMemberClose.astro`) |
| Nav and audience switch | in every hero frame | coded 26 Oct 2026: the nav on the page measure, "Studio login" with its chevron; switch chosen = ink edge, never a fill |
| Footer | `159:984` (1440), `159:1018` (390) | agreed and coded 26 Oct 2026 (`MSFooter.astro`) |
| Answer pages: `/compare/classpass`, `/faq` | page "AEO · Compare + FAQ — working": `184:270` (1440), `186:462` (390, top), `185:390` (FAQ 1440); components `AEO/Ledger row` `183:271`, `… · phone` `186:454`, `AEO/Question` `183:278` | agreed and coded 26 Oct 2026 (`Answer.astro`, `components/answer/`), facts updated per Max |
| Answer pages: `/compare/second-membership`, `/reciprocal-memberships`, `/studios`, `/studios/<slug>` | none: built from the agreed answer-page frames and blocks | coded 26 Oct 2026 at Max's request; draw them back to Figma when they next change |
| Social images (`og:image`) for the answer and studio pages | page "AEO · Compare + FAQ — working", section "Social images" `191:483` (1200 × 630, navy band) | agreed and exported 27 Oct 2026 to `public/og/`, one per page path (`Answer.astro`) |
| Home: links to the answer pages | Model `135:570` / `135:662` ("How is Moose different from ClassPass?"), member Get `168:683` / `168:700` ("Weighing up a second membership?") | drawn and coded 27 Oct 2026 (`AnswerLink.astro`) |
| Partnership reports: `/partnerships/<slug>/` | page "AEO · Compare + FAQ — working": `196:790` (1440); social image `197:838` | agreed and coded 27 Oct 2026 (`partnerships/[slug].astro`, `Figures.astro`); figures from the PostHog warehouse, real members only |
| Moose in numbers: `/numbers/` | page "AEO · Compare + FAQ — working": `199:858` (1440); social image `200:906` | agreed and coded 27 Oct 2026 (`numbers.astro`; `Figures` takes four cells, `Ledger tone="data"`); updated monthly |
| Setup guide: `/guides/reciprocal-partnership/` | page "AEO · Compare + FAQ — working": `201:951` (1440); `AEO/Step` `201:945`; social image `201:3020` | agreed and coded 27 Oct 2026 (`Steps.astro`, HowTo JSON-LD) |
| Pilates in-house or partner: `/compare/pilates-in-house-or-partner/` | page "AEO · Compare + FAQ — working": `203:1063` (1440); social image `203:3160` | agreed and coded 27 Oct 2026 (the ClassPass page's blocks) |
| About Moose: `/about/` | page "AEO · Compare + FAQ — working": `205:1185` (1440); social image `205:3243` | agreed and coded 27 Oct 2026 (`about.astro`); founders also in the Organization JSON-LD |
| Footer "Learn" column | none: the footer frame has three columns | coded 26 Oct 2026; two by two from 760, one row from 1280 |
| `/claim` | before/after in `.impeccable/review/` | not redrawn: retired card world shipped |
| `/404` | before/after in `.impeccable/review/` | not redrawn: retired card world shipped |
| Legal pages (privacy, terms, studio-terms, studio-privacy, studio-conduct, liability-waiver) | before/after in `.impeccable/review/` | not redrawn: retired card world shipped |
| All other pages | none | not yet redrawn; shipped implementation stays |
