# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Public marketing site for **Moose**, a B2B network for boutique fitness studios. Members of a Moose-partner studio can pay a small upgrade ($11/wk extra) for the right to attend 4 sessions/month at complementary, non-competing partner venues nearby. Studios get a new premium tier, members get variety, and Moose keeps the flow balanced across partners.

Audience: studio operators first, members second. Single page (`/`) with two floors behind an audience switch ("I run a studio" / "I'm a member"). The studio floor's primary action is "Register your studio" (out to the studio portal, studio.trainmoose.com); the member floor's is the App Store. There is no form on the site.

`SPEC.md` is the canonical product brief — kept in sync with the code; if they diverge, the code wins (it's what's live).

## Stack

- **Astro 6** with `output: 'static'` — ships zero JS by default
- **No React islands at present.** The member app capture is pure CSS (a scroll-driven scrub); the switch, live line, nav and roster reveal are small inline scripts. If a section ever needs state, add a React island then; don't add hydration overhead speculatively.
- Hand-rolled CSS via CSS custom properties — **no Tailwind, no CSS-in-JS, no UI kit**
- TypeScript strict
- pnpm
- **Node 24** required. Astro 6 needs ≥22.12; this repo standardises on 24 (`.nvmrc`)
- Poppins (RULES 12), loaded from Google Fonts in `Base.astro`
- Lucide-style icons rendered as **inline SVGs** in each section. No icon library.

## Commands

```bash
nvm use                          # picks up .nvmrc → node 24
pnpm install                     # one-time setup; honours pnpm.onlyBuiltDependencies in package.json
pnpm dev                         # dev server on :4321
pnpm build                       # production build to dist/
pnpm preview                     # serve the built site for a final check
```

When sharp/esbuild ignore install scripts, run `pnpm rebuild esbuild sharp` once after install.

There are no unit tests. Verification is visual: open `pnpm dev` at the breakpoints in SPEC §8 (375 / 414 / 768 / 1024 / 1280 / 1440) and confirm no horizontal scroll, no overflow, no broken layouts. Lighthouse targets are in SPEC §9.

## Architecture

### Composition

The target world is the **Member Card** (RULES 0): the site sells the card to two readers. The studio floor shows a studio that it issues the card, and the member floor shows a member what their studio's card would do. There is no Figma for this site. The source is `DESIGN.md` plus `../moose-design/docs/reference/member-card/` (PNGs of the iOS app's objects), and the redesign follows `../moose-design/docs/handoffs/marketing-site.md` page by page. A page not yet redrawn keeps what it ships: today `/` is still the retired Lane Lines build (its old Figma file `a5SmvlBwlHP6sf0FAZfLpP` and `.impeccable/surfaces/src-pages-index-astro.md` are history, not a source), and `/claim`, `/404` and the legal pages are the older card world. `DESIGN.md`'s Screens table says which page is in which state.

`src/pages/index.astro` composes two floors; `html[data-audience]` (set before first paint from the URL hash, and by the switch) shows one:

```
Nav
  studio floor: Hero → Model → Value → Network → Close (navy)
  member floor: MemberHero → Members (how · get/pay · app) → Close (navy)
Footer (navy, continues the close)
```

Any link to an anchor on the other floor (`#members`, `#member-how`, `#model`, …) switches floors first. In the shipped (retired) build each floor owns a `LiveLine`, a pink line measured from the DOM (`data-line-cross` marks the station it crosses above, `data-line-end` the plate it ends in) and drawn with scroll.

`src/layouts/Base.astro` owns `<html>`, all meta tags, OG/Twitter cards, the JSON-LD and the skip-link. Page-level metadata flows in as props; a page adds JSON-LD nodes through `jsonLd`. The structured data (`src/data/schema.ts`) and `/llms.txt` (`src/pages/llms.txt.ts`) are both built from `copy.ts`, so a copy edit updates what answer engines read too (SPEC §9).

### Primitives (`src/components/primitives/`)

Shipped today (the retired Lane Lines set, replaced as each section is redrawn):

- `Plate`: `primary`, `outline`, `station` (small inset action).
- `AudienceSwitch`, `HeroPhoto` (photo + cream floorScrims), `LiveLine`, `Icon` (inline Lucide).

The Member Card objects (member card front/back/sleeve, sticker, punch marks, class card with stub, plates, printed field, paper column) are built here once, each matching its reference PNG in light and dark, and shown on a dev-only gallery page (see `DESIGN.md` Components).
- `Wordmark`, `Button`, `Eyebrow`, `PhoneFrame` are the older card-world library, unused on `/`. The nav and footer use the wordmark SVGs in `public/brand/logo/` directly.

### Content & data (`src/data/`)

- `copy.ts` — single source of truth for all on-page text and section data, grouped by floor, plus `SITE` (title, description, the company line) and `LINKS` (studio portal, App Store — shared with `/claim`). **Copy edits go in this file** — never inline in sections. Wording is Max's: take it from the frames verbatim.
- `schema.ts` — the JSON-LD graph: site-wide nodes and the homepage-only ones.

### Styling

Values come from moose-design's `--m-*` tokens (`src/styles/moose-design/tokens.css`, generated). The navy floor is the token set's own `.dark` class, so ink, plates and support text flip from one class. Dark mode on every page (RULES 8) isn't built yet. The redesign's first step adds it: `.dark` on `<html>` from `prefers-color-scheme`, set before first paint. `globals.css` still holds the retired Lane Lines layer (`--ll-*`, lanes grid, type roles, plates, hero) and the older card-world utilities that `/claim` and the legal pages use. Delete each part when the last page using it is redrawn; never extend either. Values with no token yet are marked `/* no token yet: proposed */`.

The Flat Page Rule (RULES 10): the page never takes a shadow, tint, gradient or glass. Depth belongs only to the objects on it: the member card and its sleeve (`--m-shadow-card`, `--m-shadow-card-behind`), the sticker (`--m-shadow-card-mini`) and floating paper (`--m-shadow-paper`). No eyebrows (RULES 14), no pills.

### Photos

Marketing photos live under `public/photos/` as compressed `.webp` (largest ~180KB), referenced from `<img>` elements (`HeroPhoto`, the member app capture) — no `background-image` photos remain. The homepage hero is `hero-strength.webp`, preloaded via `Base.astro`'s `preloadImage` prop.

### Brand discipline (the hardest-to-relearn rules)

These are violations Claude will be tempted to make. Keep them top of mind:

- **The Yours Rule (RULES 6).** Pink marks only what belongs to the person looking. On this site that means the card objects drawn on the page (the card's edge, its sticker, punches and ticks), plus the caret and the 2px `:focus-visible` ring. Never pink words in headlines, pink chips, eyebrows, links, fills or plates.
- **One primary plate per view (RULES 5).** Navy (white in dark), label left, chevron right. The alternative is an outline plate.
- **The card shown is a sample (RULES 19).** A sample member at a sample studio, never a "Valid" sticker on a real studio's card.
- **Copy (RULES 20).** Never "Passport" or "Pass", never network-wide or travel-anywhere access, no design words ("punch", "sticker", "mark"), credits to two decimals. "Reciprocal" is the studio-side word.
- **No third brand colour.** Navy and Pink are it. Plus paper / cream / ink for surfaces.
- **Poppins on the web, SF on iOS, by design** (RULES 12). Display lettering is `--m-font-family-display` at 800. Poppins is loaded from Google Fonts in `Base.astro` for now; the redesign self-hosts it (400–800).
- **No CSS-in-JS, no Tailwind, no UI kit.** Hand-rolled CSS. The brand discipline is the point.
- **Icons are inline SVGs.** Don't reach for `lucide-react`, `astro-icon`, or a runtime icon library — the new design already paid the cost of inlining them.

## Things deliberately not in this repo

- No CMS, no blog (yet)
- No analytics scripts (SPEC §9 — no third-party scripts in v1)
- No cookie banner (no third-party tracking, so legally not required)
- No `vercel.json` / `vercel.ts` yet — deploys cleanly as a static site to Vercel or Cloudflare Pages. Add platform config when the deployment target is locked in.
- No `/styleguide` route any more — the rebuild deleted it. Add one back if the primitives library grows enough to warrant it.

## Open items the spec calls out (SPEC §15)

These don't block development but need a human answer before launch:

1. **Partner logos** — every partner has a logo beside their name (`public/partners/`, rendered as a single-ink mask in `--m-ink`). For a new partner, add the file and a `logo` path in `NETWORK.partners`.
2. **Legal gaps** — privacy and terms pages exist and the footer links them, but there's no partner agreement page; ABN / registered address also absent.
3. **Instagram handle / contact emails** — `partnerships@trainmoose.com`, `memberships@trainmoose.com`, `@trainmoose` are in `NAV` / `FOOTER`. Confirm these inboxes exist.

Search for `TODO` to find each location in code.

<!-- moose-design:rules -->
## Design system (managed by moose-design — do not edit this block)

This repo takes its design values and rules from **moose-design**
(`../moose-design`, github.com/moose-club/design). `pnpm sync` there rewrites this block.

- **Rules:** `../moose-design/RULES.md`. Read it before any UI change. Don't restate or
  override it here; cite a rule by number and name. To change a rule, open a PR on
  moose-design.
- **World:** the Member Card on every surface (RULES 0). Lane Lines, the Passport and the
  old card world are retired. A page not yet redrawn keeps what it ships until it is.
  What the shared objects look like: `../moose-design/docs/reference/member-card/`.
- **Typeface:** Poppins on the web, SF on iOS, by design (RULES 12). Never add a third
  face.
- **Dark mode:** every surface follows the system setting (RULES 8).
- **Values:** use only the design tokens. On the web these are the `--m-*` custom properties
  from the generated `tokens.css`; on iOS the MooseUI accessors; in Figma the Moose Design
  System library variables. No raw hex, no one-off sizes.
- **`DESIGN.md`** describes how this surface uses the system, in the shared shape (RULES
  18; `../moose-design/docs/handoffs/design-md-member-card.md` §3). It names tokens and
  never restates their values. A new value goes to moose-design first; until it lands,
  mark the line `provisional` here. `check` warns on any other colour that isn't a token,
  on a retired world, and on missing frontmatter keys.
- **Generated files** are listed in `.moose-design.json`. Never hand-edit them. Change the
  token in moose-design, then `pnpm --dir ../moose-design sync marketing`, then commit
  the result here.
- **Drift:** `pnpm --dir ../moose-design check marketing` reports hand-edited or
  out-of-date files and an out-of-date version of this block.
<!-- /moose-design:rules -->
