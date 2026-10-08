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

The homepage is drawn in moose-design's **Lane Lines** world. The source of truth is the Figma file `a5SmvlBwlHP6sf0FAZfLpP` (page "Home · / — working"); the direction and every decision log live in `.impeccable/surfaces/src-pages-index-astro.md`. Build from the frames, not from prose.

`src/pages/index.astro` composes two floors; `html[data-audience]` (set before first paint from the URL hash, and by the switch) shows one:

```
Nav
  studio floor: Hero → Model → Value → Network → Close (navy)
  member floor: MemberHero → Members (how · get/pay · app) → Close (navy)
Footer (navy, continues the close)
```

Any link to an anchor on the other floor (`#members`, `#member-how`, `#model`, …) switches floors first. Each floor owns a `LiveLine`: the one pink element, measured from the DOM (`data-line-cross` marks the station it crosses above, `data-line-end` the plate it ends in) and drawn with scroll.

`src/layouts/Base.astro` owns `<html>`, all meta tags, OG/Twitter cards, the JSON-LD Organization schema, and the skip-link. Page-level metadata flows in as props.

### Primitives (`src/components/primitives/`)

- `Plate` — the Lane Lines action: `primary` (the Floor plate, one per screen), `outline`, `station` (small inset action).
- `AudienceSwitch`, `HeroPhoto` (photo + cream floorScrims), `LiveLine`, `Icon` (inline Lucide).
- `Wordmark`, `Button`, `Eyebrow`, `PhoneFrame` are the older card-world library, unused on `/`. The nav and footer use the wordmark SVGs in `public/brand/logo/` directly.

### Content & data (`src/data/`)

- `copy.ts` — single source of truth for all on-page text and section data, grouped by floor, plus `LINKS` (studio portal, App Store — shared with `/claim`). **Copy edits go in this file** — never inline in sections. Wording is Max's: take it from the frames verbatim.

### Styling

Values come from moose-design's `--m-*` tokens (`src/styles/moose-design/tokens.css`, generated). The navy floor is the token set's own `.dark` class, so ink, plates and support text flip from one class. `globals.css` holds the Lane Lines layer (lanes grid, type roles, plates, hero) plus the older card-world utilities that `/claim` and the legal pages still use. Values with no token yet are marked `/* no token yet: proposed */`.

The floor is two lanes — yours (`.lanes > *`) and your partner's (`.lane--partner`) — side by side from **1048px**; below that the partner blocks stack and step in (`.lane--indent`) and the line keeps lane 0. No card, shadow, blur, pill, gradient (except the photo scrims) or eyebrow on `/`.

### Photos

Marketing photos live under `public/photos/` as compressed `.webp` (largest ~180KB), referenced from `<img>` elements (`HeroPhoto`, the member app capture) — no `background-image` photos remain. The homepage hero is `hero-strength.webp`, preloaded via `Base.astro`'s `preloadImage` prop.

### Brand discipline (the hardest-to-relearn rules)

These are violations Claude will be tempted to make. Keep them top of mind:

- **One pink element per floor: the live line.** No pink words in headlines, no pink chips, no pink eyebrows on `/` (RULES 6).
- **One Floor plate per screen.** Secondary actions are outline plates (RULES 5).
- **Pink text < 24px on light background fails WCAG.** Use pink for headings ≥24px or as background fill on CTAs / chips. Never pink body copy on cream.
- **No third brand colour.** Navy and Pink are it. Plus paper / cream / ink for surfaces.
- **Poppins is the typeface** (RULES 12), loaded from Google Fonts in `Base.astro`.
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
  override it here. To change a rule, open a PR on moose-design.
- **Values:** use only the design tokens. On the web these are the `--m-*` custom properties
  from the generated `tokens.css`; on iOS the MooseUI accessors; in Figma the Moose Design
  System library variables. No raw hex, no one-off sizes.
- **`DESIGN.md`** describes how this surface uses the system. It names tokens and never
  restates their values. A new value goes to moose-design first; until it lands, mark
  the line `provisional` here. `check` warns on any other colour that isn't a token.
- **Generated files** are listed in `.moose-design.json`. Never hand-edit them. Change the
  token in moose-design, then `pnpm --dir ../moose-design sync marketing`, then commit
  the result here.
- **Drift:** `pnpm --dir ../moose-design check marketing` reports hand-edited or
  out-of-date files and an out-of-date version of this block.
<!-- /moose-design:rules -->
