# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Public marketing site for **Moose**, a B2B network for boutique fitness studios. Members of a Moose-partner studio can pay a small upgrade ($11/wk extra) for the right to attend 4 sessions/month at complementary, non-competing partner venues nearby. Studios get a new premium tier, members get variety, and Moose keeps the flow balanced across partners.

Audience: studio operators, not end-members. Single page (`/`), nine scrollable sections, primary CTA "Get involved or hear more" (anchors to the Register form).

`SPEC.md` is the canonical product brief — kept in sync with the code; if they diverge, the code wins (it's what's live).

## Stack

- **Astro 6** with `output: 'static'` — ships zero JS by default
- **No React islands at present.** The phone mock in the Members section is pure CSS. If a section ever needs state, add a React island then; don't add hydration overhead speculatively.
- Hand-rolled CSS via CSS custom properties — **no Tailwind, no CSS-in-JS, no UI kit**
- TypeScript strict
- pnpm
- **Node 24** required. Astro 6 needs ≥22.12; this repo standardises on 24 (`.nvmrc`)
- System font stack only — no remote fonts loaded
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

`src/pages/index.astro` composes the nine sections in fixed order (SPEC §6):

```
Nav → Hero → Ticker (marquee) → Model → Network → Value → Story → Members → Register → Footer
```

Each section is a self-contained `.astro` file under `src/components/sections/` — they're independent: a section can be reordered or removed without touching anything else. Three sections own a small inline `<script>` for client behaviour: Nav (scroll state + mobile toggle), Network (View all toggle), Register (tab swap).

`src/layouts/Base.astro` owns `<html>`, all meta tags, OG/Twitter cards, the JSON-LD Organization schema, and the skip-link. Page-level metadata flows in as props.

### Reusable primitives (`src/components/primitives/`)

`Wordmark`, `Button`, `Eyebrow`, `PhoneFrame`. These exist so the brand discipline stays consistent — if you find yourself reaching for inline brand styles in a section, consider promoting the pattern into a primitive first. **Note:** the 2026-06 redesign builds most call-to-action buttons and eyebrows directly in the section CSS (the primitives aren't yet wired into the new sections). Treat them as a "library you can reach for" rather than a strict contract.

`Wordmark` has three official variants (`cream` / `navy` / `pink`) and **must not be recoloured** outside those lockups.

`PhoneFrame` owns iPhone chrome and is unused by the current sections (MSMembers builds its own scoped phone mock). Keep it around — it's the right home if we add another phone elsewhere.

### Content & data (`src/data/`)

- `copy.ts` — single source of truth for all on-page text and section data (nav links, hero, modality marquee, model steps, network partners, value cards, case study, members copy + phone mock, register form labels, footer columns). **Copy edits go in this file** — never inline in sections.

There's no `studios.ts` / `tokens.ts` any more — both were tied to the removed React islands.

### Styling

All design tokens live in `src/styles/globals.css` as CSS custom properties (`--pink`, `--navy`, `--paper`, `--cream`, `--ink`, the type scale, radii, spacing, shadows, navy/pink scales). Hex values are exact — **do not approximate** (SPEC §4).

Section-level styles go in scoped `<style>` blocks inside each `.astro` file. Every section's content is constrained by `.container` (max-width 1240px, fluid `clamp()` horizontal padding). Every display heading uses `clamp()` for fluid sizing — no fixed `font-size: 60px` anywhere.

Section padding uses the shared `.section` / `.section--cream` / `.section--navy` utilities defined in `globals.css`. The cream-vs-navy alternation between sections is intentional rhythm — keep it when adding a new section.

Mobile-first responsive. Breakpoints: 640 / 760 / 960 / 1024 / 1280 / 1600. Build mobile, layer up.

### Photos

Marketing photos live under `public/photos/` (referenced via `url('/photos/…')` from inline `background-image` styles). They came from the design bundle and are unoptimised — `hero-pilates.png` is ~2.8MB. Worth running through a compressor before any production push.

### Brand discipline (the hardest-to-relearn rules)

These are violations Claude will be tempted to make. Keep them top of mind:

- **One pink word per headline.** Pink (`#EB4E8D`) is for *action* — primary CTAs and the single word per headline that should ring. Don't sprinkle pink as decoration. If a new design mock has multiple pink words, sanitise to one.
- **One primary CTA per screen.** Never put a pink CTA and a navy CTA on the same screen. The navy `.btn--primary` pill is the standard primary across the new design.
- **Pink text < 24px on light background fails WCAG.** Use pink for headings ≥24px or as background fill on CTAs / chips. Never pink body copy on cream.
- **No third brand colour.** Navy and Pink are it. Plus paper / cream / ink for surfaces.
- **No remote fonts.** The system font stack *is* the brand.
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

1. **Photo optimisation** — `public/photos/hero-pilates.png` is 2.8MB. Run through squoosh / sharp before production push.
2. **Form destination** — both forms in `MSRegister.astro` currently `action="mailto:…@trainmoose.com"`. Wire to a real Typeform / CRM endpoint when one exists. Reference: `REGISTER.studioForm.mailto` / `REGISTER.memberForm.mailto` in `src/data/copy.ts`.
3. **Partner network counts** — `NETWORK.ledeLines` says "120+ partner venues / 30+ unique brands". Confirm the real numbers, or make them build-time variables.
4. **Featured case study** (VRTUS × Body by Berner, Bondi) — confirm real partnership + the metrics (128 / 143 crossovers, 22% / 31% upgraded) are accurate to share publicly.
5. **Real partner logos** — `MSNetwork.astro` shows `[Logo]` dashed placeholder boxes. Replace with actual SVG logos when partners approve them.
6. **Legal pages** — no privacy / terms / partner agreement pages yet. Footer doesn't link to them; ABN / registered address also absent.
7. **Instagram handle / contact emails** — `partnerships@trainmoose.com`, `memberships@trainmoose.com`, `@trainmoose` are in `NAV` / `FOOTER`. Confirm these inboxes exist.

Search for `TODO` to find each location in code.
