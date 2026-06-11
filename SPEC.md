# Moose Marketing Site — Build Spec

A spec for the public marketing site for **Moose**, a network for boutique fitness studios. Members of a partner studio can pay a small upgrade ($11/wk extra) for the right to attend 4 sessions/month at complementary, non-competing partner venues nearby. Audience: studio owners and operators — not end-member consumers.

This document tracks the _2026-06 redesign_ (the only design in production). It supersedes the original 12-section v1 spec. If anything in the source files contradicts this spec, the running code is the tiebreaker.

---

## 1. What we're building

A single-page, server-rendered, static marketing site. One URL (`/`). Nine scrollable sections (listed in §6). Primary CTA: **Get involved or hear more** (anchors to the Register form section).

The site converts studio operators from "haven't heard of Moose" to "filled in the studio enquiry form." It is not a member-facing app, not a dashboard, not a blog.

---

## 2. Tech stack — decided

| Concern           | Choice                                                                                           | Why                                                                                                                                             |
| ----------------- | ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Framework         | **Astro 6**                                                                                      | Ships zero JS by default; perfect for marketing                                                                                                 |
| Component model   | `.astro` files for every section. **No React islands currently.**                                | The redesign's only interactive bits (nav scroll, view-all toggle, tab swap) are 5–15 lines of vanilla JS scoped to the section that owns them. |
| Styling           | **Hand-rolled CSS with CSS custom properties** in `globals.css` + per-component `<style>` blocks | Brand discipline, not default                                                                                                                   |
| Icons             | **Inline SVGs** in each section                                                                  | No icon library, no runtime cost                                                                                                                |
| Type system       | TypeScript, strict mode                                                                          |                                                                                                                                                 |
| Package manager   | `pnpm`                                                                                           |                                                                                                                                                 |
| Deployment target | Static (`output: 'static'`) — Vercel or Cloudflare Pages                                         |                                                                                                                                                 |
| Node              | 24 (`.nvmrc`)                                                                                    | Astro 6 needs ≥22.12                                                                                                                            |

**Do not introduce:** Tailwind, CSS-in-JS, shadcn, Next.js, Remix, a CMS, a state library, a UI kit, or an icon library. The brand discipline is the point.

---

## 3. Source material

| File                      | What it is                                                                                      | How to use it                                                                                                           |
| ------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `src/data/copy.ts`        | Single source of truth for all on-page copy + section data                                      | Edit copy here, never inline in sections                                                                                |
| `public/photos/*`         | 9 marketing photos extracted from the 2026-06 design bundle (hero kettlebell, VRTUS, BBB, etc.) | Reference via inline `background-image: url('/photos/…')`. Optimise before production push (hero-pilates.png is 2.8MB). |
| `public/brand/logo/*.svg` | Wordmark lockups (twotone / white / navy)                                                       | Use the SVG that matches the surface                                                                                    |
| `public/brand/icon/*.png` | Favicon / app-icon variants                                                                     | Wired into `Base.astro`                                                                                                 |

The original `_context/` JSX bundle was the v1 source material; it is no longer load-bearing. Treat it as historical reference only.

---

## 4. Design tokens — live in `src/styles/globals.css`

Hex values are exact — **do not approximate**.

```css
/* Brand */
--pink: #eb4e8d;
--navy: #1a2b5f;

/* Brand — extended scales (used sparingly; pink at the strong end is still
   the only accent — see the 'one pink word' rule in §14) */
--pink-50: #fef2f7;
--pink-100: #fde4ee;
--pink-300: #f59bc0;
--navy-50: #f3f5fa;
--navy-100: #e6e9f2;
--navy-200: #c2c9dd;
--navy-300: #8b97bf;
--navy-400: #5567a4;
--navy-800: #14224c;
--navy-900: #0f1a3c;

/* Surfaces */
--paper: #f0eee9; /* page bg */
--cream: #f7f4ef; /* warmer alt — used for .section--cream */
--card: #ffffff;
--ink: #0f0f12;
```

Plus the full set of radii (`--r-pill / -sheet / -card / -md / -sm / -xs`), spacing tokens (`--s-1` through `--s-24`, 4pt grid), and shadow scale (`--shadow-xs/sm/md/lg`).

**Type:** system stack only (`-apple-system`, etc). No remote fonts.

---

## 5. Type scale

| Token        | Use                                                          | Size (fluid)              | Weight                                                                                                                |
| ------------ | ------------------------------------------------------------ | ------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `display-xl` | Reserved / unused in current sections                        | `clamp(48px, 8vw, 112px)` | 800, ls −0.03em                                                                                                       |
| `display-l`  | Hero h1                                                      | `clamp(40px, 6vw, 92px)`  | 800, ls −0.03em                                                                                                       |
| `display-m`  | Section h2 (Model, Network, Value, Story, Members, Register) | `clamp(28px, 4vw, 56px)`  | 800, ls −0.025em                                                                                                      |
| `display-s`  | Sub-section heads (Story title card, Voices header)          | `clamp(24px, 3vw, 40px)`  | 700, ls −0.02em                                                                                                       |
| `headline`   | Card titles                                                  | 18–22px                   | 700, ls −0.3px                                                                                                        |
| `body-l`     | Lead paragraphs                                              | 17–19px                   | 500, lh 1.55                                                                                                          |
| `body`       | Default copy                                                 | 14–15px                   | 500, lh 1.55                                                                                                          |
| `meta`       | Labels, captions                                             | 12–13px                   | 600                                                                                                                   |
| `eyebrow`    | Section kickers                                              | 12px                      | 700, uppercase, ls 0.22em. Default colour: `--pink`. No em-dash prefix (use `.eyebrow--rule` for the dashed variant). |

---

## 6. Information architecture — nine sections

Source: `src/pages/index.astro`. Each is a self-contained `.astro` file under `src/components/sections/`. Order is fixed.

### 6.1 `MSNav.astro` — fixed top nav

- Left: navy/pink Moose wordmark SVG.
- Centre: anchor links — `The Moose model`, `Network`, `For studios`, `Studio members`.
- Right: Instagram link (`@trainmoose`), pink-text on light bg; **navy pill CTA** "Get involved or hear more" → `#register`.
- Hamburger below 760px.
- Fixed (`position: fixed`). Transparent over the cream hero, gains white/blur background once `scrollY > 16` via a 6-line vanilla JS handler. No backdrop over the hero so the headline starts at the top of the page.

### 6.2 `MSHero.astro` — cream split layout

- Left column: eyebrow "Studio operators", h1 "Elevate your memberships with **variety.**" (single pink word), 2-paragraph lede, 3 ticked support points, two CTAs (navy primary "Get involved or hear more", white-ghost "See how it works").
- Right column: full-bleed photo (hero-strength.png — kettlebell training) with a soft cream gradient mask blending into the left.
- Mobile (<760px): single column, photo below the copy.

### 6.3 `MSTicker.astro` — modality marquee

- Thin navy-900 band beneath the hero.
- Infinite-scroll list of modality types (Pilates, Functional fitness, HIIT, Cycle & Spin, Yoga, etc.) joined by pink ◆ separators. Pure CSS animation (`@keyframes ticker-scroll`).
- `prefers-reduced-motion: reduce` halts the animation.

### 6.4 `MSModel.astro` — "The Moose model" + 4-step how-it-works

- `.section--cream`. Eyebrow "At a glance", h2 "The Moose model.", lede.
- Inner white card (`.model__steps`) titled "How it works.", containing 4 columns:
  1. **Formation** — Identify partners and form partnerships
  2. **Offering** — Add a premium tier ($11/wk)
  3. **Usage** — Controlled crossover (4 sessions/month)
  4. **Balance** — Even flow between partners
- Each step has an oversized navy ordinal (`01`–`04`), a thin pink rule, an uppercase navy-400 eyebrow, title, and 1–2 paragraphs.

### 6.5 `MSNetwork.astro` — partner logo grid on navy

- `.section--navy`. Eyebrow "Partner network", h2 "**Moose** on the loose." (Moose in pink, single accent word).
- Lede: "120+ partner venues / 30+ unique brands … and counting".
- Logo grid: 9 visible white chips by default; **View all** pill reveals an additional 18 (hidden via `[hidden]` attribute, toggled by vanilla JS).
- Each chip shows a dashed `[Logo]` placeholder (TODO: real partner logos) + studio name + modality.
- Grid: 2 → 3 → 4 → 5 columns across breakpoints.

### 6.6 `MSValue.astro` — "For the studios" benefit cards + quantification

- `.section--cream`. Eyebrow "For the studios". H2 (`.value__prize`): "Variety gives new members a compelling **reason to join**, and existing members another reason to stay." (one pink emphasis).
- Two card grids:
  1. **The benefits** — 5 numbered white cards (New revenue stream / Attract new members / Reduce churn / Recurring memberships / Zero-friction adoption).
  2. **Quantification** — 3 stat cards: `+$15k p.a.`, `+$18k p.a.`, `+$18k p.a.` with explanatory captions.
- On ≥1024px, 3 down-arrows visually link the benefit cards to the quantification row.

### 6.7 `MSStory.astro` — featured partnership + voices

- White background. Eyebrow "On the ground", h2 "Featured partnership."
- Case card: VRTUS × Body by Berner (Bondi, NSW). Two photos (VRTUS kickboxing, BBB reformer pilates) on the left; metrics + quotes + credit-balance explanation on the right.
- Metrics row: per-studio quote, per-studio % of members upgraded (22% / 31%), and a centre block showing 128 ↔ 143 crossovers/month with explanatory bullets about credit weighting.
- Below: "From some other studios who get it." with 3 quote cards (Sarah Reid / Marcus Tran / Priya Nair).

### 6.8 `MSMembers.astro` — for studio members + phone mock

- `.section--cream`. Eyebrow "For studio members", h2 "Finally, some (affordable) _variety…_" (one pink word).
- Left: 2-paragraph lede, two commercial cards ("What you get: 4 / month" + "What you pay: +$11 / week"), and a note linking back to the Register form with `data-register="member"` (which auto-selects the Member tab).
- Right: a **pure-CSS** phone mock with notch, status bar, greet block, member-at-studio chip, credits card (navy, "3 of 4 left"), filter chips, and 3 booking slots. Plus a callout reminding readers the Moose app is only for booking crossover sessions.

### 6.9 `MSRegister.astro` — contact form (studio / member tabs)

- `.section--navy`. Eyebrow "Get on board", h2 "Get in touch with the Moose."
- White card with two-tab toggle (I run a studio / I'm a member). Tabs swap which `<form>` is visible (vanilla JS).
- Studio form fields: studio name*, your name*, email\*, phone, suburb, message.
- Member form fields: your name*, email*, phone, your home studio\*, suburb, message.
- Both forms `action="mailto:…@trainmoose.com"` — placeholder until a real CRM/Typeform endpoint is wired (see §15).

### 6.10 `MSFooter.astro`

- Navy-900 background.
- Brand block (white wordmark + tagline) + 3 link columns: Explore, More, Contact.
- Bottom rule, then small print: `© {year} Moose Club. Made in Australia.` + "Get involved or hear more" / "Back to top" links.

---

## 7. Copy & data — `src/data/copy.ts`

Single source of truth. Exports: `NAV`, `HERO`, `MODALITIES`, `MODEL`, `NETWORK`, `VALUE`, `STORY`, `MEMBERS`, `REGISTER`, `FOOTER`. All values typed `as const`.

Copy edits go here, never inline in section files. Sections destructure their data and render — they hold styling, never copy.

---

## 8. Responsive design — non-negotiable rules

**Breakpoints (mobile-first):**

```css
/* base = mobile (320px+) */
@media (min-width: 640px) {
  /* tablet portrait */
}
@media (min-width: 760px) {
  /* large mobile / tablet */
}
@media (min-width: 960px) {
  /* tablet landscape / small laptop */
}
@media (min-width: 1024px) {
  /* small desktop */
}
@media (min-width: 1280px) {
  /* desktop */
}
@media (min-width: 1600px) {
  /* large desktop — content stays at ~1240 max */
}
```

**Container:** every section's inner content is constrained by `max-width: 1240px; margin-inline: auto; padding-inline: clamp(20px, 5vw, 56px);`.

**Mobile-specific rules:**

- Hero photo moves _below_ the copy on `<760px`.
- Nav collapses to a hamburger below `760px`. Navy pill CTA stays visible inside the mobile menu.
- Model: 1 col → 2 cols (≥760) → 4 cols (≥1024).
- Network logos: 2 → 3 → 4 → 5 cols across 640/960/1280.
- Value benefits: 2 cols → 3 cols (≥760) → 5 cols (≥1024). Quantification: 1 col → 3 cols (≥760).
- Story case card: stacked → side-by-side (≥760). Voices: 1 col → 3 cols.
- Members: copy + phone stack → side-by-side (≥960).
- Register: stacked → side-by-side (≥960). Form field-row goes 1 → 2 cols at 760.
- All touch targets: minimum 44×44px hit area.

**Type:** every heading uses `clamp()` for fluid sizing. No fixed pixel display sizes.

**Test viewport sizes during build:** 375 (iPhone SE), 414 (iPhone Pro Max), 768 (iPad portrait), 1024 (iPad landscape), 1280, 1440, 1920.

---

## 9. Performance & SEO requirements

Target Lighthouse scores on mobile, throttled, on the deployed build:

| Metric            | Target                                                                        |
| ----------------- | ----------------------------------------------------------------------------- |
| Performance       | ≥ 95                                                                          |
| Accessibility     | 100                                                                           |
| Best Practices    | 100                                                                           |
| SEO               | 100                                                                           |
| LCP               | < 1.8s                                                                        |
| CLS               | 0                                                                             |
| Total page weight | < 1.5 MB (driven mostly by photos; goal is < 600 KB after photo optimisation) |

**Required:**

- `<title>`: "Moose - Elevate your memberships with variety."
- `<meta name="description">`: see `src/pages/index.astro`.
- Open Graph + Twitter card meta. OG image: `public/og.png` (regenerate when brand assets change).
- `<link rel="canonical">`
- JSON-LD `Organization` schema with name, url, logo, sameAs links (placeholder).
- All photos referenced via `background-image: url('/photos/…')`. **TODO:** optimise — `hero-pilates.png` is 2.8MB and dominates page weight.
- No remote fonts (system stack).
- No third-party scripts in v1. (Add Plausible later via a single `<script defer data-domain>` line if desired.)

---

## 10. Accessibility — WCAG 2.2 AA

- Colour contrast: every text/background pair must hit ≥ 4.5:1 for body, ≥ 3:1 for large headings. Combinations in §4 are pre-checked; do not introduce new pairings without testing.
- Pink (`#EB4E8D`) on white is **3.4:1** — fine for headings ≥ 24px or pink-filled CTAs, but **never use pink text smaller than 24px on a light background**.
- Pink on navy (`#EB4E8D` on `#1A2B5F`) is ~5.1:1 — safe.
- Semantic heading hierarchy: `<h1>` only in the hero; section headings are `<h2>`; sub-blocks `<h3>`/`<h4>`.
- Photos rendered as `<div role="img" aria-label="…">` carry alt text via the aria-label.
- Nav anchor links: `:focus-visible` with a 2px pink ring offset 2px.
- Prefers-reduced-motion: disables the ticker scroll, all transitions.
- Skip-to-content link, hidden but focus-visible.
- All icon-only interactive elements carry `aria-label`.

---

## 11. File structure

```
moose-marketing/
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── public/
│   ├── brand/
│   │   ├── logo/                     (moose-wordmark-twotone.svg, -white.svg, -navy.svg, …)
│   │   └── icon/                     (favicon + app-icon variants)
│   ├── photos/                       (9 hero photos — see §3)
│   ├── og.png
│   └── favicon.svg
├── src/
│   ├── pages/
│   │   └── index.astro               (composes the 9 sections)
│   ├── layouts/
│   │   └── Base.astro                (html, head, meta, globals.css import)
│   ├── components/
│   │   ├── sections/                 (one .astro per section, see §6)
│   │   │   ├── MSNav.astro
│   │   │   ├── MSHero.astro
│   │   │   ├── MSTicker.astro
│   │   │   ├── MSModel.astro
│   │   │   ├── MSNetwork.astro
│   │   │   ├── MSValue.astro
│   │   │   ├── MSStory.astro
│   │   │   ├── MSMembers.astro
│   │   │   ├── MSRegister.astro
│   │   │   └── MSFooter.astro
│   │   └── primitives/
│   │       ├── Wordmark.astro
│   │       ├── Button.astro
│   │       ├── Eyebrow.astro
│   │       └── PhoneFrame.astro      (unused by current sections; see CLAUDE.md)
│   ├── data/
│   │   └── copy.ts                   (NAV/HERO/MODALITIES/MODEL/NETWORK/VALUE/STORY/MEMBERS/REGISTER/FOOTER)
│   └── styles/
│       └── globals.css               (tokens + base + utility classes)
└── SPEC.md
```

---

## 12. Build order (historical)

The current site was rebuilt in a single pass during the 2026-06 redesign:

1. Extract images from the design bundle → `public/photos/`.
2. Expand `globals.css` tokens (navy + pink scales, shadows, cream surface, section utilities).
3. Rewrite `src/data/copy.ts` to match the new IA.
4. Rebuild each section file under `src/components/sections/`.
5. Rewrite `src/pages/index.astro` to compose the 9 sections.
6. Delete the v1 sections, React islands, and styleguide page that the new design no longer used.
7. `pnpm build` to verify; visual check at the §8 breakpoints.

---

## 13. Acceptance criteria

The site is "good" when all of these are true:

- [ ] All 9 sections from §6 render in order without horizontal scroll at 375/414/768/1024/1280/1440.
- [ ] No remote fonts loaded; system stack throughout.
- [ ] No third-party JS (no analytics, no icon libraries, no UI kits).
- [ ] Build output is static HTML + per-section inline scripts only. No hydrated React.
- [ ] All copy from `src/data/copy.ts` appears verbatim — no paraphrasing.
- [ ] Brand discipline: at most one pink word per headline, one primary CTA per visible viewport, no third colour introduced beyond navy / pink / paper / cream / ink.
- [ ] Keyboard-navigable end to end, visible focus rings, `prefers-reduced-motion` honoured.
- [ ] Lighthouse mobile scores hit §9 targets on the deployed build.

---

## 14. Explicit don'ts

- ❌ Don't introduce Tailwind, CSS-in-JS, or any UI kit.
- ❌ Don't add an icon library (`lucide-react`, `astro-icon`, etc). Inline SVGs only.
- ❌ Don't load remote fonts — the system font stack _is_ the brand.
- ❌ Don't combine the wordmark and the loop icon in the same lockup.
- ❌ Don't introduce a third brand colour or a gradient on the pink.
- ❌ Don't put a pink CTA and a navy CTA on the same screen.
- ❌ Don't sprinkle pink as decoration. Pink is for action and the single pink word per headline.
- ❌ Don't recolour the wordmark outside the three official lockups.
- ❌ Don't paraphrase copy in section files — edit `src/data/copy.ts` instead.
- ❌ Don't add a React island unless a section genuinely needs reactive state. Vanilla JS scoped to a section is the default.
- ❌ Don't add a cookie banner unless legally required (no third-party tracking in v1).

---

## 15. Open questions / TODOs before launch

1. **Photo optimisation** — `public/photos/hero-pilates.png` is 2.8MB. Compress before production push (target < 200KB at delivered resolution).
2. **Form destination** — both forms in `MSRegister.astro` `action="mailto:partnerships@trainmoose.com"` / `…@trainmoose.com`. Replace with a real Typeform / CRM endpoint.
3. **Partner counts** — `NETWORK.ledeLines` claims "120+ partner venues / 30+ unique brands". Confirm.
4. **Featured case study** (VRTUS × Body by Berner, Bondi) — confirm partnership and metrics are accurate to publish.
5. **Real partner logos** — currently dashed `[Logo]` placeholders. Replace with SVG logos.
6. **Contact inboxes** — `partnerships@trainmoose.com`, `memberships@trainmoose.com`, `@trainmoose` IG handle. Confirm all exist.
7. **Legal pages** — no privacy / terms / partner agreement pages exist. ABN / registered address absent from footer.
