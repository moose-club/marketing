# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Public marketing site for **Moose**, a B2B credit-based crossover network for boutique fitness studios. Audience is studio operators, not end-members. Single page (`/`), twelve scrollable sections, primary CTA "Apply to join the network". The full product brief lives in `SPEC.md` — **`SPEC.md` is the source of truth**; if the existing code drifts from it, the spec wins.

The source files in `_context/` are the original JSX preview bundle (extracted from a Claude-generated standalone HTML). Use them as a visual reference for layout and copy, but never import or ship them — they assume `React`, `ReactDOM` and `Babel-standalone` from CDN and attach everything to `window.*`.

## Stack

- **Astro 6** with `output: 'static'` — ships zero JS by default
- **React 19** islands only where state is needed (the three app-screen mocks)
- Hand-rolled CSS via CSS custom properties — **no Tailwind, no CSS-in-JS, no UI kit** (this is a brand-discipline decision, not a default — see SPEC §14)
- TypeScript strict
- pnpm
- **Node 24** required. Astro 6 needs ≥22.12; this repo standardises on 24 (`.nvmrc`)
- System font stack only — no remote fonts loaded

## Commands

```bash
nvm use                          # picks up .nvmrc → node 24
pnpm install                     # one-time setup; honours pnpm.onlyBuiltDependencies in package.json
pnpm dev                         # dev server on :4321
pnpm build                       # production build to dist/
pnpm preview                     # serve the built site for a final check
```

When sharp/esbuild ignore install scripts, run `pnpm rebuild esbuild sharp` once after install.

There are no unit tests (yet). Verification is visual: open `pnpm dev` at the breakpoints in SPEC §8 (375 / 414 / 768 / 1024 / 1280 / 1440) and confirm no horizontal scroll, no overflow, no broken layouts. Lighthouse targets are in SPEC §9.

## Architecture

### Composition

`src/pages/index.astro` composes the twelve sections in fixed order (SPEC §6). Each section is a self-contained `.astro` file under `src/components/sections/` — they're independent: a section can be reordered or removed without touching anything else. New sections go here.

`src/layouts/Base.astro` owns `<html>`, all meta tags, OG/Twitter cards, the JSON-LD Organization schema, and the skip-link. Page-level metadata flows in as props.

### Reusable primitives (`src/components/primitives/`)

`Wordmark`, `Button`, `Eyebrow`, `StudioTile`, `PhoneFrame`. These exist so the brand discipline stays consistent — if you find yourself reaching for inline brand styles in a section, promote the pattern into a primitive first. `Wordmark` has three official variants (`cream` / `navy` / `pink`) and **must not be recoloured** outside those lockups.

The `PhoneFrame` component owns all iPhone chrome (dynamic island, status bar, home indicator, 360×760 dimensions, 44px outer radius, 6px bezel). React islands render *inside* its slot — they only own the screen content.

### React islands (`src/components/islands/`)

Three components — `ScreenHome`, `ScreenSchedule`, `ScreenCancelFlow` — plus a shared `phone-ui.tsx` module (icons, `LiquidGlass`, `PeakBadge`, `StudioPhoto`, `FNTabBar`, `FN_STUDIOS` data, `fnCost`).

These are **decorative product screenshots** — not real UI. They were authored in the original JSX with inline styles to mirror iOS, and the port keeps that style on purpose. The hand-rolled-CSS rule applies to the marketing site, not to the in-phone mocks. Don't try to "convert" them to BEM or CSS modules; it would explode for no win.

Hydration directives matter: the hero phone uses `client:load` (above the fold). The three showcase phones use `client:visible` (lazy hydration as they scroll into view). Don't change this without a reason — the islands are the heaviest JS on the page.

Islands carry `role="img"` + `aria-label` so screen readers don't crawl into the fake UI.

### Content & data (`src/data/`)

- `copy.ts` — verbatim port of `06-marketing-copy-data.jsx`. Hero copy, stats, steps, partner list, testimonials, FAQ all live here. **Copy edits go in this file** — never inline in sections. SPEC §13 acceptance criteria: "all copy from §7 appears verbatim — no paraphrasing".
- `studios.ts` — the seven known partner studios + `studioCost()` helper. Phantom partners (used to pad the network grid) live inline on `PARTNERS` in `copy.ts`.
- `tokens.ts` — design tokens mirrored from `globals.css` for use inside React islands (which can't read CSS vars at render time). Keep these two files in sync if either changes.

### Styling

All design tokens live in `src/styles/globals.css` as CSS custom properties (`--pink`, `--navy`, `--paper`, `--ink`, the type scale, radii, spacing). Hex values are exact — **do not approximate** (SPEC §4).

Section-level styles go in scoped `<style>` blocks inside each `.astro` file. Every section's content is constrained by `.container` (max-width 1440px, fluid `clamp()` horizontal padding). Every display heading uses `clamp()` for fluid sizing — no fixed `font-size: 92px` anywhere.

Mobile-first responsive. Breakpoints: 640 / 760 / 960 / 1280 / 1600. Build mobile, layer up.

### Brand discipline (the hardest-to-relearn rules)

These are violations Claude will be tempted to make. They are spelled out in SPEC §4 and §14 — keep them top of mind:

- **One pink word per headline.** Pink (`#EB4E8D`) is for *action* — primary CTAs, the right loop of the wordmark, and the single word per headline that should ring. Never sprinkle pink as decoration.
- **One primary CTA per screen.** Never put a pink CTA and a navy CTA on the same screen.
- **Pink text < 24px on light background fails WCAG.** Use pink for headings ≥24px or as background fill on CTAs. Never pink body copy on cream.
- **No third brand colour.** Navy and Pink are it. Plus paper/ink for surfaces.
- **No remote fonts.** The system font stack *is* the brand.
- **No CSS-in-JS, no Tailwind, no UI kit.** Hand-rolled CSS. The brand discipline is the point — these constraints are the brand.

## Things deliberately not in this repo

- No CMS, no blog (yet)
- No analytics scripts (SPEC §9 — no third-party scripts in v1)
- No cookie banner (no third-party tracking, so legally not required)
- No `vercel.json` / `vercel.ts` yet — deploys cleanly as a static site to Vercel or Cloudflare Pages. Add platform config when the deployment target is locked in.

## Open items the spec calls out (SPEC §15)

These don't block development but need a human answer before Pricing and Footer are finalised:

1. `$14 AUD / credit` — real public rate or placeholder?
2. `218` partner studios — real count? Should this be a build-time variable?
3. Apply form destination — currently `mailto:partners@moose.app`. Real Typeform / CRM endpoint?
4. Calendly URL — currently `calendly.com/moose/intro` placeholder
5. ABN and registered address in the footer (currently placeholder)
6. Privacy / Terms / Partner-agreement / Member-agreement URLs (all `#` placeholders)

Search for `TODO` to find each location in code.
