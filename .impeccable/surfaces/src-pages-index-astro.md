---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: ["src/components/sections/MSNetwork.astro","src/components/sections/MSHero.astro","src/components/sections/MSNav.astro","src/components/sections/MSTicker.astro","src/components/sections/MSModel.astro","src/components/sections/MSValue.astro","src/components/sections/MSMembers.astro","src/components/sections/MSRegister.astro","src/components/sections/MSFooter.astro"]
---

# `/` — the pairing

**Scope:** `src/pages/index.astro` and its seven live sections (`MSNav`, `MSHero`, `MSTicker`, `MSModel`, `MSValue`, `MSMembers`, `MSRegister`, `MSFooter`). Mode: **Persuade**. Deliverable this round: **Figma frames, no code** — in the Marketing file `a5SmvlBwlHP6sf0FAZfLpP` (page "Home · / — working"), desktop 1440 and mobile 390, every value bound to the Moose Design System library (`O0aebGvz09qGBQ80gr0ykM`, mirrored from `moose-design/tokens/`) and the published `FloorPlate`. Agreed frames get their own "Agreed" page in that file; Astro after, in a separate round. The first Lane Lines surface on the web.

**Audience and job:** a boutique-studio operator who has not heard of Moose, on a laptop between classes. Understand the model, believe their members stay theirs, and fill the studio enquiry form.

**Decided by Max (24 Sep 2026):**
- Lane Lines is the world (RULES.md 2026-09-19); brand-book v2's cards, pills, eyebrows and pink words are the anti-reference.
- Floor lettering on the web is **Poppins ExtraBold set tight** — no new font (RULES 12; Poppins has no compressed width).
- Scope is `/` plus the shared Nav and Footer. `/claim`, `/404` and the legal pages only inherit.
- The Members phone shows a **Lane Lines capture Max supplies**; until then an agreed app frame stands in.
- **The pairing**, locked from the roll (seed `c9a7e989`, dealt 6 / 4 / 7 with 6 leading). Max took index 7 over the dealt lead (the centred floor), the stair, and the pick (the long floor).
- Figma first, no code this round, values from the design repo.

**Constraints.** Copy is `src/data/copy.ts` verbatim — the only edits are structural (eyebrow keys unused, `<em>` pink phrases become plain text, `.step__hl` chips become Semibold ranges) and are flagged for Max. Unverified numbers stay illustrative. `MSStory` stays out; **`MSNetwork` came back in on 24 Sep** as the Partner network station (below). Forms stay `mailto:`. RULES.md and the iOS DESIGN.md's named rules bind: One Live Line, One Ink, Legible Ink, Lane Grid, Undrawn Lanes, Flat Floor, Plate and Tape, Painted Line, Informative Label, Attached Outline, Actionable Affordance. Web icons are Lucide-style inline SVG (RULES 15). Web type sizes are not tokens (RULES 13, drift D10): the roles drawn here are **proposed** to moose-design, named in the Figma text styles as `Lane Lines/Web/…`.

**Copy structure changes (flagged, no wording changes):** `MODEL.headHtml` "The Moose model." loses its pink "Moose"; `VALUE.headHtml` loses both pink phrases; `MEMBERS.headHtml` loses pink "variety"; the four section eyebrows ("Studio operators", "At a glance", "For the studios", "For studio members", "Reach out") are not drawn (Informative Label Rule — no kicker above floor lettering); the step kickers ("Formation" …) are not drawn.

## Direction contract

THESIS: Every station is two lanes — you, and your partner studio — and the one pink line is the member's crossover: it leaves your lane once, at The Moose model where crossover is explained, runs the partner lane past the benefits ledger and the member's app, and ends in the form, where the operator makes the crossover themselves. (Drawn 24 Sep: an out-and-home line was tried first and boxes whatever sits between its two runs — it read as a card edge — so the line crosses once.) It refuses the category's stacked hero → card grid → stats band → form, and it refuses the brand-book web page this replaces: cream and navy bands, white cards on shadows, a pink eyebrow over every heading.

OWN-WORLD: Lane Lines, nothing added. One flat `Surface/bg` cream floor for the whole page and one `Brand/mooseNavyDeep` floor for the close (Register + Footer). One ink — `Label/ink` at 100 / 70 (`inkSupport`) / 66 (`inkPlaceholder`) / 24 (`inkTape`); `Brand/onBrand` and `onBrandDim` on navy. One 3px `Brand/moosePink` line with square ends and 20px turns. Floor lettering in Poppins ExtraBold, 80px cover / 64px in-app at 1440, line-height 0.95, tracking −0.04em, sentence case, trailing period, never hand-broken. Plain Poppins under it: Lead 18/400, Plate label 17/600, Body 15/400, Detail 13/400. Actions are plates on `Radius/md` (12) with a 2px ink edge or a solid ink fill, 56 tall, chevron-right forward, arrow-right on the send end; outlines only inset, trailing a row of text, or in a set with a filled sibling. No card, shadow, blur, gradient, glass, pill, eyebrow, status colour or second pink. The photograph is full-bleed with square corners under `floorScrim`.

STORY: "My studio and one nearby, complementary studio pair up. My members stay mine, they cross over a capped four times a month, the partner's cross back, Moose keeps it even. I can see the path — and the last crossing is me, filling in this form."

FIRST VIEWPORT (1440 × 900): a 72px transparent nav on the cream floor — navy wordmark with its first stem on lane 0 (x 100), three links in ink 70%, one 40px ink station-action plate "Studio login". The line starts under the wordmark at y 72 and runs down lane 0. Work side at content-leading 124, 560 wide, top-inset 80: "Elevate your memberships with variety." in cover lettering, three lines; the descent give-back; 16; two support paragraphs in Lead at ink 70%; 32; four rows, each a 24px solid-ink tick box with a white check and a Plate-label line; 32; the Floor plate (`FloorPlate` Primary, 420 wide) "Get involved or hear more" with chevron-right, its vertical centre at y ≈ 845; 8; the Secondary (outline) plate "See how it works" beneath — the second plate of a set, cut by the fold, which is the scroll cue. The photograph (`hero-strength`) fills lane 2 to the right edge (x 720 → 1440) from y 72 to the hero's foot, square-cornered, with no scrim — a split-floor counterweight (the Welcome regular-width precedent), not a cover band. Below 1048 it becomes a 300px band under the cream floorScrim. Nothing else: no eyebrow, no pink word, no pill, no card.

FORM: The pairing — **#7 on my ordered structural list** (long floor, crossover, roster, stair, cover deck, centred floor, pairing), dealt on the first roll under seed key **`c9a7e989`** (scope surface, mode persuade; dealt 6, 4, 7 with index 6 leading). Max took it over the dealt lead and the pick. Two raises kept from the hand it beat: the step-row's *cost travels with the mark* (the Value stats sit on their rows, not in boxes) and the installer's *gate* (the send end lights only when the required rows are valid).

SIGNATURE: The line draws with scroll — `stroke-dashoffset` bound to scroll progress, 20px turns, square ends — so the one crossing happens as the operator reads the model: lane 0 from under the wordmark, across the gutter 48 above The Moose model, down lane 2 past 03–04, the ledger and the app, and into the send end's vertical centre on the navy floor. On the compact floor there is no partner lane beside yours, so the line keeps lane 0 the whole way and makes one turn, into the send end (the step-in-and-back version was drawn and rejected at review: each jog bracketed a partner block). Under `prefers-reduced-motion` it is fully drawn. Plate press is 0.98 over 140ms. Nothing else moves except the modality marquee, which pauses on hover.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Open for the Figma round

- Mobile (390): the partner lane cannot exist beside the you lane, so the crossing becomes a 20px jog of the line to x 44 beside the partner-side blocks, which indent to 64. Is a jog a crossing, or does mobile stay one lane with no crossings?
- The Value headline runs six lines at 64px in a 560 measure. Rewrite candidate, or let it be the mass?
- The Register form in the empty state shows the idle send end at `onBrand` 30% — or should the marketing comp show it lit?
- Photo choice for the hero panel (`hero-strength` today).

## Drawn 24 September 2026 — round 1, for Max

Figma: `a5SmvlBwlHP6sf0FAZfLpP` (Marketing), page **Home · / — working**: `Home — Desktop 1440 · Light · full floor` (4:88, 1440×4611) and `Home — Mobile 390 · Light · full floor` (4:89, 390×7240), plus the **Web components** section (wordmark, tick, Floor plate primary/secondary, station action plate, send end, Lucide icons, the hero photo). Every paint binds a Moose Design System variable; the navy floor is `Surface/bg` with the Color collection in **Dark** mode, so ink, plates and dividers flip from one token. Web type roles are local styles `Lane Lines/Web/…` (Poppins), proposed to moose-design.

**Finish review (24 Sep, disposition fix → eight material fixes applied):** mobile line now one lane, one turn; the Members commercials are open rows, not a plate (non-actions never get plates); the send end is drawn lit, with the inert kind (60% edge, 66% label) in the States section — never a 30% label; the nav's "Studio login" is the outline station action plate, so the first viewport has one filled plate; marquee separators are middots, not tape; the footer's hairline is gone; the Value station's two masses rest on one tread; a **States & motion** section (24:94) carries the pressed plate, inert/valid send end, the danger-edged row and a three-frame strip of the line drawing. The Astro round builds from those frames, not from prose.

Not yet agreed. Open for Max, in order of consequence:
1. **The mobile line** has no crossing at all now; the pairing lives in the indent only. Accept, or find a compact crossing that does not bracket a block?
2. **The Value headline** runs eight lines at 64px in the 560 measure. It is the station's mass; a shorter rewrite is a copy call, not a design one.
3. **The mobile hero** is a long floor: the Floor plate lands at y ≈ 1018, below an 844 fold. The cut plate is the scroll cue (the Welcome intro precedent) — or the support copy shortens.
4. **The app slot** is an outlined 340×739 plate awaiting the Lane Lines capture; until it lands it reads as an empty card.
5. **Register's send end** is drawn idle (30%). Show it lit for the marketing comp?
6. Footer emails and the `@trainmoose` handle are unconfirmed (PRODUCT.md).

## Copy decided by Max, 24 Sep 2026 (drawn in both frames; apply to `src/data/copy.ts` in the Astro round)

- **Hero** `subLines[1]` → "Form reciprocal partnerships with complementary, non-competing studios nearby." (`subLines[0]` unchanged.)
- **Hero points** gain two ticks after the four: "No cost, no integration work." and "Class packs become memberships." (the two dropped Value rows, as assurances).
- **Model steps** are one paragraph each: 01 "You dictate who you partner with. Partnerships are seamlessly facilitated through Moose." · 02 "You sell it, you own it. Our only stipulation is that the upgrade fee is capped at **$11/wk (or $48/mo)** extra." · 03 "The upgrade entitles members to a notional **four crossover sessions per month** at partner venues (in aggregate, not per partner)." · 04 "Our backend systems monitor crossover both ways, ensuring a balanced exchange between partners." Bold ranges are Semibold ink, not chips.
- **Value headline** → "Variety: a reason to join, and a reason to stay." `prizeNote` unchanged.
- **Value benefits** → three figures only (no body copy): +$15k p.a. New revenue stream · +$18k p.a. Attract new members · +$18k p.a. Reduce churn, each with its existing caption. "Recurring memberships" and "Zero-friction adoption" leave the ledger (they live in the hero ticks). The five-row ledger is parked beside the desktop frame as *Superseded 24 Sep*.
- **Members** `calloutLines` → the first line only.

Frames after the cuts: desktop 1440 × 4044 (was 4611), mobile 390 × 5886 (was 6657); the mobile Floor plate now lands at y ≈ 945.
- **Ticker removed** (24 Sep, Max): `MSTicker` and `MODALITIES` leave the page; the Model station follows the hero after the 96 rhythm.
- **Members note** keeps the sentence "Your studio not on Moose yet?" and drops its station action plate (Max). Open: a question with no action reads as a dangling line — either cut the sentence too or let the member tab of the form be the answer.

## Added 24 September 2026 — the Partner network station (round 1b, for Max)

**Decided by Max:** the studios already on Moose go back on the page, **after the For studios station**, with **placeholder names until partners approve marks** and **real logo SVGs to follow**. So `MSNetwork` re-enters the surface; `MSStory` stays out.

**The problem this had to solve.** A logo wall is the shape this world points away from in four places at once: the **Attached Outline Rule** (a grid of outlined chips is its named failure case), the **Flat Floor** and **Undrawn Lanes** Rules (no box that cannot say what it measures), `DESIGN.md`'s anti-reference ("dense venue grids... anything that reads as a consumer search result"), and `moose-ios/DESIGN.md:372`, which records third-party studio logos on a Lane Lines floor as an open question owed its own round. The resolution is the wall **without the chips**: marks rest directly on the flat floor, registered to the lane grid, set in one ink at a shared optical height — which answers the open iOS question rather than dodging it, so this round carries the rule proposal below.

**Four treatments were drawn; Max took the roster.** The chip-less mark wall (two columns of marks with the modality beneath), **the run** (every brand as one middot-separated typographic mass) and **fewer, larger** (eight marks at cap 24 with air) are parked at x −1620 as *Not taken 24 Sep*. The run is recorded as a dead end for a reason worth keeping: a wrapping text run cannot hold an SVG, so it only works while the marks are words.

**Drawn — the roster.** `Station · Partner network` — desktop **35:222** (y 1969, 1440×533), mobile **36:223** (x 44, y 2749, 322×1276).

- **Lettering:** "Moose on the loose." in floor lettering (in-app 64 / compact 36) — `NETWORK.headLead` + `head`, the pink "Moose" dropped. Under it the lede in Lead at `Label/inkSupport`: "120+ partner venues · 30+ unique brands ... and counting, across Australia" (`ledeLines` joined with a middot + `ledeSoft`, wording verbatim; counts stay illustrative — PRODUCT.md open item 3). The "Partner network" eyebrow is not drawn (Informative Label Rule).
- **The roster**, 48 below the lettering: **every brand on the floor at once** — all 27, no reveal, no modality. Desktop is **four columns, 7/7/7/6**, rhythm 14: two on your lane (`43:223`, 124→684, bands 264) and two on your partner's (`43:254`, 744→1316, bands 270). Mobile is **one column, 27 rows** (`42:226`), rhythm 12, bands 322.
- **Why it is split across the lanes, not three columns across the floor.** Three even columns over 124→1316 put the middle column straight under the live line at x 721.5 — drawn, and it read as a divider cutting the roster 2+1. No three-column arrangement puts a gutter at 721.5. Splitting the roster two-and-two hands the line back its 60 gutter and restores the pairing grammar the full-width version had lost: your brands, then your partner's.
- **The mark slot:** a partner's approved SVG sits in the band (264 / 270 / 322 × 28), **single ink** (`Label/ink` on cream, `Brand/onBrand` on navy), **optically fitted** — cap height 20 where the width allows, otherwise width-fitted. Optical height, never a shared bounding box. Every band frame is named `TODO Max: partner mark · <name>`.
- **The placeholder this round:** not a dashed `[Logo]` box — that is the banned shape, and 27 empty outlines would repeat the app slot's review finding ("reads as an empty card"). Each placeholder is **the studio's name set as a mark**: Plate label 17 SemiBold, `Label/ink` 100%. Honest — many partner marks are wordmarks — and the real SVG replaces it in the same band with no reflow. Widest drawn mark is 160 of the 264 available.
- **No plate anywhere in this station.** The roster is complete, so there is no reveal and nothing to act on; a plate would be an action that does not exist (Actionable Affordance Rule).
- **The line** keeps its grammar: it is already on the partner lane here, so it simply runs longer, in the gutter, past the roster — no new turn, no second crossing. Both vectors redrawn (`30:224` 4086 tall, `30:225` 6296).
- **States & motion** (`24:94`) gains **37:224** — the mark slot: the placeholder treatment, the fitting rule with its band-bounds spec guide (a guide, never drawn on the floor), and the note that this station has no states.

**Reflow.** Desktop shifted by 629, mobile by 1348. Frames are now **1440×4609** (was 3980) and **390×7126** (was 5778). Rhythm holds: 96 desktop, 72 mobile. Every paint in the new station binds a library variable — audited: only `Label/ink` and `Label/inkSupport`, nothing local.

**Rule proposed to moose-design (Max's call, a PR on that repo — never edited from here):**

> **19. Third-party marks sit on the floor.** A partner's logo is never in a chip, card, box or pill. Marks rest directly on the floor, registered to the lane grid, set in a single ink (`Label/ink` on cream, `Brand/onBrand` on navy) at a shared optical cap height — not a shared bounding box. A partner's own colours are used only where a partner agreement requires them, and each exception is listed with its reason. Marks clear 3:1 as graphics (rule 16).
>
> Decision log: `2026-09-24 · Partner marks are set in one ink on the floor, never in chips. Closes the open third-party-logo question in the iOS DESIGN.md.`

Also flagged: `.moose-design.json` pins `moose-club/design@3595572` while that repo is at `0f7542b` (which added rule 18), so `pnpm check marketing` already reports RULES.md drift — worth a re-sync in its own commit.

**Open for Max on this station:**
1. **The names are visibly fake** (Form Pilates, Forge Strength Co., ...). The frame says so in its name, but if these frames leave Figma they read as claims. Replace before they travel?
2. **Mobile is 1276 tall** — 27 names in one column is about a viewport and a half of pure list. It is what "complete on the floor" costs on a 390. Accept, or cap mobile at 12 with a count line?
3. **The roster shows 27 while the lede says "30+ unique brands"** — the roster is now the count's own contradiction. Either the lede softens or `NETWORK.partners` grows when the real list lands.
4. **Modality is gone** — it carried the complementary/non-competing story. Worth a line of prose in the lede instead?

## Changed 24 September 2026 — the close becomes the portal, not an email

**Decided by Max:** the main action is **listing your studio** at `studio.trainmoose.com`, not sending Moose an email. The enquiry form **goes entirely**, the hero's primary plate points at the portal too, and the label everywhere is **"Register your studio"**.

**Drawn.**
- **Register station** — desktop `11:74` (y 3503, 1440×**368**, was 785), mobile `20:110` (y 5498, 390×**423**, was 960). Your lane keeps the lettering, now **"Get your studio on Moose."** over a Lead line: *"No cost, no integration work. You choose your partners."* Partner lane is one thing: the **`FloorPlate` Primary, "Register your studio"**, with a Detail line under it — *"Opens the studio portal at studio.trainmoose.com."* Removed: the "Who are you?" prompt, both option plates, the form title and sub, and the six-row form plate with its send end.
- **The line's terminus moves from the send end to the plate**, entering its left edge at the vertical centre — the same grammar, a shorter run. Desktop vector now 3555 tall, mobile 5649. The signature still reads: the operator's own crossover is the last thing the line does, it is just a click out instead of a Submit.
- **Hero CTAs** — `7:73` (desktop) and `19:104` (mobile) relabelled "Register your studio" and pointed at the portal. `ctaSecondary` "See how it works" → `#how` is unchanged, so the hero still has one filled plate and one outline (RULES 5).
- **States** — the send end (inert / valid) and the danger-edged form row are **retired**: there is no form to validate. The plate press state is now the close's only state, and a note in `24:95` records why.

**Page heights after the cut:** desktop **1440×4192** (was 4609), mobile **390×6589** (was 7126).

**Copy this invents (a copy call for Max, flagged for the Astro round):**
- `REGISTER.head`: "Get in touch with the Moose." → **"Get your studio on Moose."** (near-verbatim — `memberForm.title` already says "get your studio on Moose").
- New Register lead: **"No cost, no integration work. You choose your partners."** — both halves are existing strings, the first a hero tick, the second `HERO.points[0]`.
- New plate label **"Register your studio"**, replacing `HERO.ctaPrimary.label` "Get involved or hear more" in both places.
- New Detail: **"Opens the studio portal at studio.trainmoose.com."**
- Now unused in `copy.ts`: `REGISTER.prompt`, `.tabs`, `.studioForm`, `.memberForm`, `.successStudio`, `.successMember`, and both `mailto:` destinations. The Astro round should delete them, which also closes PRODUCT.md open item 2 (form destination) — there is no form to wire.

**Open for Max, and the first one matters:**
1. **There is no member path on the page any more.** The "I'm a member" tab was the only one, and it is gone. The Members station still asks **"Your studio not on Moose yet?"** and now nothing on the page answers it — the footer's `memberships@trainmoose.com` is the only remaining route. Cut the sentence, point it at the footer, or give members their own small action?
2. **No email capture at all.** An operator who wants to talk before listing has only the footer's `partnerships@trainmoose.com`. That is the intended trade, but worth saying out loud.
3. **Two plates now go to `studio.trainmoose.com`** — the nav's "Studio login" outline and the close's "Register your studio" fill. Login and register are different doors; if the portal doesn't have a distinct register/sign-up entry, the labels are writing a cheque the portal has to cash.
4. **`#register` still names the close** in `NAV`/anchors, but the station no longer registers anyone on this site. Rename the anchor in the Astro round?

## Added 24 September 2026 — the audience switch and the member floor (round 1c, for Max)

**Decided by Max:** `/` carries both audiences behind a switch — **"I run a studio"** / **"I'm a member"**. The studio state is the floor as drawn. The member state is a complete, member-addressed floor about finding your home studio and getting the app. Four calls settled the shape:

- **One page, no new route.** Both floors live on `/`, swapped in place. The Astro round hides one panel; nothing navigates.
- **The switch sits on the floor above the hero lettering**, not in the nav. The nav bar at 72 already carries the wordmark, the links and the Studio login plate, and at 390 there is no room without folding it into the menu sheet.
- **No search field, and no capture.** Choosing a home studio is shown happening *in the app*; the floor's one action is the App Store. Registering left the page on 24 Sep and the form row and send end are retired — this keeps it that way. It also keeps the member floor away from the one shape this world points hardest against: a member-facing studio search with a result list is a consumer search-results page, which is `DESIGN.md`'s named anti-reference and the same wall the Partner network round hit.
- **Figma only this round.** The Astro round builds from these frames.

**This closes the open item the close's round left first on the list** — *"There is no member path on the page any more … the Members station still asks 'Your studio not on Moose yet?' and now nothing on the page answers it."* The member floor is the answer, and the close carries the return path (below).

### The switch

Two new components in **Web components** (`4:34`): `Web/Switch plate · Selected` (**51:219**, solid `Label/ink` fill, `Surface/bg` label) and `Web/Switch plate · Unselected` (**51:221**, 2px `Label/ink` edge). 56 tall on `Radius/md`, label in Plate label, padding `Spacing/lg` — `Spacing/md` on the compact floor so the pair fits lane 0 at 322 without a second set of labels.

**Why this is not new grammar.** It is a **set**, so the outline is legal in the Attached Outline Rule's third position — one of a set whose sibling is filled. Chosen takes the **selection** fill the iOS `DESIGN.md` already defines ("chosen is a solid `ink` fill with a `surface` label"), not the primary plate fill, because selection sits outside the plate family. **No chevron**: a switch does not go forward, and the absent chevron is what separates it from a Floor plate at the same height. **No pink** — the live line has it.

Drawn into all four floors at content-leading 124 (desktop) / x 44 (compact), directly above the hero lettering, with `Spacing/xl` beneath.

### Reflow of the two studio floors

The switch adds **88** (56 + 32) above the lettering on both. Every station below moved; both line vectors were redrawn, not scaled, so the 20px turns and the 3px stroke are untouched.

- **Desktop `4:88`: 1440×4280** (was 4192). Hero 962, crossing now at y 1062→1082 (still 48 above The Moose model at 1130), line `30:224` 3643 tall ending in the Register plate's vertical centre at 3715.
- **Mobile `4:89`: 390×6677** (was 6589). Hero 1173, line `30:225` 5801 tall, still one lane and one turn.
- Rhythm holds exactly: **96 desktop, 72 mobile**, footer flush to the close.

### Drawn — the member floors

`Home — Desktop 1440 · Members · full floor` (**53:223**, x 2240, **1440×3082**) and `Home — Mobile 390 · Members · full floor` (**56:260**, x 3880, **390×4491**). One flat cream floor, one navy close, one pink line, same lanes — but the pairing now reads **your home studio / the partner venue**, which is what the member actually crosses between.

| Station | Desktop | Compact |
|---|---|---|
| Nav — same chrome, member link set ("How it works · What you get · The app"); Studio login stays the **outline** station action plate | `53:224` | `56:307` |
| Hero — switch, lettering, one lede, three ticks, `Get the Moose app` over `See how it works` | `53:231` | `56:261` |
| Station · How it works for you — lettering on your lane, three steps as rows on the partner lane, the figure travelling with the row | `54:247` | y 1092 |
| Station · What you get, what you pay — the two commercials as **open rows**, Plate label over Body (non-actions never get plates) | `54:263` | y 1735 |
| Station · Your home studio — the app on the partner lane; **no plate**, because choosing a studio is not an action on this floor | `54:278` | y 2262 |
| Close — navy (`Surface/bg` in Dark mode), one filled plate out to the App Store, the line ends in it | `55:247` | `57:334` |
| Footer — the navy floor continues, no seam | `55:274` | `57:362` |
| Live line | `55:302` | `57:390` |

**The return path.** The close carries one row — *"Your studio not on Moose yet?"* — with the **outline station action plate** *"Show them the studio view"* trailing it. That is the Attached Outline Rule's second legal position (an outline trailing a row of text on its own row), it takes nothing from the filled App Store plate, and it turns the member into the operator's introduction rather than leaving a question with no answer.

**States & motion** (`24:94`) gains **60:300** — the switch's five states (chosen, not chosen, hover as an ink wash, pressed at 0.98/140ms, focus), the rule note, and the alternate not taken (**60:327**: both plates outline, the tick box marking the choice).

**Audit.** Every paint on all four floors and the new States frame binds a library variable — **zero local paints**. No shadow, no blur, no card, no pill, no eyebrow over lettering, no second pink. The only gradient is the compact floorScrim, which is the documented exception. **Exactly one pink element per floor**: the live line.

### Copy this invents (a copy call for Max, flagged for the Astro round)

Verbatim from `src/data/copy.ts`: the hero lettering (`MEMBERS.headHtml`, ellipsis → trailing period per the Painted Line Rule), the hero lede (`MEMBERS.ledeLines[0]`), both commercial rows (`MEMBERS.commercials`, keys and bodies unchanged), the home-studio note (`MEMBERS.calloutLines[0]`), and the switch labels, which are `REGISTER.tabs` verbatim.

Invented, all of it recombined from existing strings:

- Hero ticks: "Four crossover sessions a month." · "Capped at $11/wk (or $48/mo)." · "Complementary, non-competing venues nearby."
- Station heads: "How it works for you." · "What you get, what you pay." · "Your home studio, in the app." · "Get the Moose app."
- Station ledes and the three step rows (second-person restatements of `MODEL.steps` 01–03 and `HERO.subLines[1]`).
- Close: "Free on the App Store. iPhone only for now." · plate "Download on the App Store" · "Opens the App Store listing for Moose. The app is iPhone only for now."
- The return row: "Your studio not on Moose yet?" (verbatim from `MEMBERS.noteHtml`) + "Show them the studio view" (new).

Note the member floor does **not** reuse `REGISTER.memberForm` — there is no form here either. The Astro round's deletion list from the close's round stands unchanged.

### Open for Max, in order of consequence

1. **`PRODUCT.md` now contradicts the design.** `:22-24` says *"Members are never the audience of `/` … members are described in the third person"*, and Principles 1 and 3 say the operator is the reader and Moose is "not a consumer brand competing for the member relationship". The member floor is a deliberate reversal of all three. That file is the product contract — it has to be rewritten in the round this is agreed, not left to drift.
2. **Can a cold member self-serve?** `/claim` and `PRODUCT.md` both describe a member whose studio has *already* upgraded them — the credits are "waiting". The Your-home-studio station says you pick your home studio when you sign in. If the app has no path for a member arriving unprompted, that station describes something that does not exist. **Confirm before the Astro round; everything else on the floor survives without it.**
3. **The app is iPhone only** (`claim.astro:123-125`), and the floor's one action is the App Store. Every Android member reaches the bottom of this floor with nothing to do. The Lead and the Detail both say so plainly, which is honest but is not an answer. A waitlist is the obvious one; it is a product call, not a drawing call.
4. **The App Store id is a placeholder** — `claim.astro:25`, `id000000000`. Both plates carry it in their instance names.
5. **Two filled shapes in the first viewport.** On the studio floor the chosen switch and the hero plate are both solid ink. Selection sits outside the plate family so this is not two primaries under RULES 5, but it is an inference, and it is the one place this round leans on one. The alternate (`60:327`) keeps the set unfilled and marks the choice with the tick box. Say which.
6. **Focus is drawn with the shipped 2px pink ring.** On a floor whose one pink element is the live line, that is a transient second pink. Either focus is an agreed exception or it moves to a 2px ink ring — a rule question for moose-design, not a drawing one.
7. **The station action plate is 40 tall and RULES 17 requires 44.** The nav's "Studio login" already ships at 40; the member close's return plate now makes a second use of it. Inherited drift, not introduced here, but this round doubled it — worth fixing in the component rather than per instance.
8. **The member hero leaves 19px of floor above the 900 fold** and does not cut its secondary plate, so it loses the scroll cue the studio hero gets from the cut. The Stated Floor Rule wants empty floor to be a measured size, not what is left over. Accept, or lengthen the lede?
9. **The member floor reuses `hero-strength`.** A member-addressed hero probably wants a different photograph; there is only one hero photo component in the file.
10. **Both app slots are the outlined placeholder** awaiting the Lane Lines capture — the member floor now needs a *second* one (Home studio · Light), and until both land they read as empty cards, which is the finding the first one already carries.
11. **`public/photos/` has one member app screenshot.** The Astro round needs a home-studio capture as well as the schedule one.
12. **Pre-existing, seen while reflowing:** on the compact studio hero the tick line "Class packs become memberships." runs to 341 and overhangs lane 0's 322. It predates this round; flagged rather than silently rewritten.

## Changed 24 September 2026 — Max's four calls on round 1c

**1. `PRODUCT.md` updated.** It now records two floors behind a switch, members addressed directly in the second person, the no-self-serve fact below, the App Store placeholder and the missing home-studio capture as unconfirmed evidence, and a rewritten principle set. Principle 1 became *"One floor, one reader"*, principle 3 gained the aggregator test, and a new principle 4 — *"The studio is the door"* — fixes the member floor's only two honest endings.

**2. Members cannot self-serve — Max, no.** There is no path by which a member signs up on their own, picks a home studio and books. Access arrives only through a studio that has joined Moose and sold them the upgrade.

The member floor was claiming otherwise in three places, all corrected:

- *Your home studio* lede was "You pick your home studio when you sign in." → **"Your studio sets you up when you take the upgrade. The app then shows the partner venues near your home studio and what you can book this month."**
- Close lead → **"Free on the App Store. Your studio sets you up when you take the upgrade."**
- Close detail → **"Opens the App Store listing for Moose. iPhone only for now."**

The hero lede needed nothing: `MEMBERS.ledeLines[0]` already opens *"We don't sell Moose to members direct — it's available through the studios"*, which is exactly this fact, verbatim, in the first paragraph a member reads.

**Still open, and it is the consequence of this answer.** The floor's one action is the App Store, but a member who has not been upgraded can download the app and do nothing in it. The floor is now honest about why — it says twice that the studio sets you up — but the primary action still points somewhere that will not work yet for the reader most likely to be standing there. Three ways out, none of them a drawing call: the plate becomes *"Ask your studio about the upgrade"* with the App Store demoted to a detail line; or the floor keeps the App Store and accepts that it serves already-upgraded members arriving cold; or the app grows a pre-upgrade state worth landing in. **Say which and I will redraw the close.**

**3. The Studio members station is off the studio floors.** `11:45` (desktop) and `20:80` (compact) are removed — the member floor carries all of that material, in the second person, and rendering it twice is the thing principle 1 now forbids.

- Desktop `4:88`: **1440×3375** (was 4280). The close moves to y 2686, the footer to 3054, and the line `30:224` is 2738 tall.
- Compact `4:89`: **390×5276** (was 6677). The close moves to 4185, the footer to 4608, line `30:225` 4400 tall.
- Rhythm re-verified: exactly 96 and 72, footer flush to the close.
- The line's thesis line in the direction contract needs one word struck: it now runs the partner lane past **the ledger and the roster**, not "the ledger and the member's app". Its node name is updated; the contract paragraph above is not, and should be when this is agreed.
- `MEMBERS` copy is now used only on the member floor. `MSMembers.astro` leaves `index.astro`'s studio panel in the Astro round.

**4. The desktop photograph gets the floorScrim.** Max asked for the compact band's blur-and-fade on desktop. What the compact floor actually has is a **cream `Surface/bg` scrim**, not a blur — so that is what desktop now has, on both the studio and member heroes, using the colour read straight off `19:69` so one cream serves both breakpoints.

Two scrims per hero, because the desktop photograph meets the floor on three sides where the compact band meets it on one:

- **Seam** (horizontal, left → right): 1.0 → 0.60 @10% → 0.10 @26% → **0 @42% and 0 to the right edge**. Dissolves the photograph's left edge into the work side. The right 58% of the photograph is unscrimmed.
- **Head and foot** (vertical, the compact band's own transform): 0.9 → 0 @11% → 0 @86% → 1.0. Kills the hard edge under the nav and at the hero's foot.

A first pass ran the seam to 0.08 across the full width and washed the whole photograph; it was narrowed to clear entirely at 42%.

**This supersedes one line of the direction contract.** FIRST VIEWPORT says the photograph sits *"square-cornered, with no scrim — a split-floor counterweight"*. It is still square-cornered and still a counterweight; it is no longer unscrimmed. Amend the contract when this round is agreed.

**Note on "blur".** A literal blur is not in this world — the Flat Floor Rule bans blur outright, and the only depth permitted is a photograph under the floor scrim. The scrim is the mechanism, and it is what the compact band's softness already is. If a real edge blur is wanted anyway it is a rule change, not a drawing change; say so and I will take it to moose-design rather than apply it locally.

**Frames after these four:** studio `1440×3375` / `390×5276`, member `1440×3082` / `390×4520`. Audit re-run: no local paints outside the scrim gradients, which are the documented photograph exception and already unbound on the compact band; one pink element per floor; no shadow, card, pill or second pink introduced.

## Changed 24 September 2026 — the compact roster reveals

**Decided by Max:** on the compact floor the roster is capped and the rest reveal. This answers open item 2 from the roster round — *"Mobile is 1276 tall … accept, or cap mobile at 12 with a count line?"* — with the cap.

**Drawn.** `Station · Partner network` compact (`36:223`) is now **322×740** (was 1276). The roster (`42:226`) shows the **first 12 of 27**; the remaining 15 are drawn and hidden, not deleted, so they reveal in place with no reflow of the rows themselves. Beneath the roster, `Spacing.lg` then a row: **"15 more"** in Detail at `Label/inkSupport`, with the **outline station action plate "See all"** trailing it.

**Desktop is untouched.** Four columns at 1440 are seven rows deep and cost nothing, so all 27 stay on the floor and **no plate appears there**. The reveal is a compact-only affordance, which is why the station's desktop and compact forms now differ in kind rather than only in arrangement.

**Why this does not reverse the round's own rule.** The roster round put no plate in the station because there was no action — *"the roster is complete, so there is no reveal and nothing to act on; a plate would be an action that does not exist."* On the compact floor the roster is **no longer complete**, so the action now exists and the Actionable Affordance Rule is satisfied rather than bent. The outline is legal in its second position — trailing a row of text on its own row — and the count carries the information, so the plate does not have to (Informative Label Rule).

**Reflow.** The station saved 536. The close moves to y 3649, the footer to 4072, the compact floor `4:89` is **390×4740** (was 5276), and line `30:225` is 3864 tall, still one lane and one turn into the plate. Rhythm holds at 72.

**States.** A new frame in `States & motion` — **66:309**, *Roster reveal* — carries collapsed (`15 more` + `See all`), hover (the outline's ink wash), and expanded (`See less`, count gone), with the rule note. The Marks frame (`37:224`) said *"The roster has no states"*; it now reads desktop-has-none / compact-reveals-from-12. Two hover samples in this section were drawn with an opaque fill by mistake and corrected — paint opacity has to ride on the paint handed to `setBoundVariableForPaint`, not be assigned to the returned one.

**For the Astro round.** `MSNetwork.astro` already ships exactly this pattern — a `View all` toggle over `NETWORK.visibleCount` (currently 9) with `[hidden]` extras at `:51-64`. The build reuses it with **`visibleCount: 12`**, the label pair **`See all` / `See less`**, a preceding count line, and the whole control **suppressed above the compact breakpoint**.

**Open, unchanged and now sharper:** the lede still says *"30+ unique brands"* while the roster holds 27. Capping the compact view hides the contradiction on a phone but not on desktop, where all 27 are still countable. Either the lede softens or `NETWORK.partners` grows when the real list lands.

## Changed 24 September 2026 — the network lede drops its counts

**Decided by Max:** there are only a handful of partner studios, and the lede should not carry a number anyone has to keep updating. They are **studios**, not "venues" or "brands".

**Drawn.** The Partner network lede on both floors (`35:227` desktop, `36:228` compact):

> ~~120+ partner venues · 30+ unique brands ... and counting, across Australia~~
> **The studios already on Moose, across Australia — and counting.**

This **closes open item 3 of the roster round** — the roster was its own count's contradiction, showing 27 against a lede claiming "30+ unique brands". With no number in the lede there is nothing for the roster to contradict, and nothing to re-edit as partners join. It also retires the first of `PRODUCT.md`'s unverified-evidence items on this surface: `NETWORK.ledeLines` is no longer drawn.

**Reflow.** The compact lede drops from three lines to two, so the compact station is **322×711** (was 740) and floor `4:89` is **390×4711** (was 4740), line `30:225` 3835 tall. Desktop was already a single line and is unchanged at **1440×3375**. Rhythm holds, 96 and 72.

**"Studios", not "venues" — done where this round wrote it.** Three lines drawn in round 1c were reworded on both member floors:

- "Complementary, non-competing **venues** nearby." → "…non-competing **studios** nearby."
- "…four crossover sessions a month at partner **venues**…" → "…at partner **studios**…"
- "…the app then shows the partner **venues** near your home studio…" → "…the partner **studios** near you…"

**Four uses of "partner venues" are left standing, deliberately.** They are `src/data/copy.ts` verbatim — `MODEL.steps[2]`, `MODEL`'s crossover lede, `MEMBERS.commercials[0]` and `MEMBERS.calloutLines[0]` — and the standing constraint on this surface is that copy is verbatim and wording changes are Max's. One of them is also the reason not to sweep blindly:

> "Four crossover sessions per month at partner **venues**, weighted for the relative membership pricing between partner **studios**."

That sentence uses both words as different things on purpose — you attend a venue, you are priced against a studio. **Open for Max:** collapse the distinction everywhere and rewrite that clause, or keep "venue" for the place and "studio" for the business? The lede no longer forces the question, but the page now says both.

**Also open, and new:** if the real list is a handful, the compact reveal never fires — 12 is above the count — and the 27 placeholder names overstate by far more than they did when the lede claimed 120+. `MSNetwork.astro` renders the control only when there are extras, so the code handles it; the *comp* still shows 27 fake names, which is open item 1 of the roster round and is now more pressing, not less.
