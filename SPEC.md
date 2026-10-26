# Moose Marketing Site — Build Spec

A spec for the public marketing site for **Moose**, a network for boutique fitness studios. Members of a partner studio can add a small upgrade (priced by their studio, paid through Moose) for credits each month to book classes at complementary, non-competing partner venues nearby. Audience: studio owners and operators — not end-member consumers.

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

**Type:** Poppins 400–800, self-hosted from `@fontsource/poppins` (RULES 12: Poppins on the web, SF on iOS). No font is loaded from a third party.

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

- Left: the Moose wordmark (an `ink` mask, so it flips with dark mode), on the page measure.
- Right: each floor's own anchor links, then the outline plate "Studio login" (with a chevron) → `https://studio.trainmoose.com` (new tab). It is the bar's only action, so the first view keeps one filled plate.
- Hamburger below 1048px.
- Fixed. Transparent on the floor; past `scrollY > 16` it takes the floor fill and an `inkRule` bottom edge (no blur, no shadow).

### 6.2 `MSHero.astro` — the studio's card

- Left: the audience switch, h1 "Level up your memberships.", one supporting paragraph, the primary plate "Register your studio". No eyebrow, points or photo.
- Right: the studio's own card, its back (+4°, "Valid at" every studio on Moose) with its front (−3°, "Issued by Your studio", the sample member "Alex Sample") over the back's lower-left corner. One `role="img"` with a full accessible name.
- Below 1048px: switch, the card pair, then the words.

### 6.3 `MSTicker.astro` — modality marquee

- Thin navy-900 band beneath the hero.
- Infinite-scroll list of modality types (Pilates, Functional fitness, HIIT, Cycle & Spin, Yoga, etc.) joined by pink ◆ separators. Pure CSS animation (`@keyframes ticker-scroll`).
- `prefers-reduced-motion: reduce` halts the animation.

### 6.4 `MSModel.astro` — "The Moose model" + 4-step how-it-works

- h2 "The Moose model." with the lede beside it (stacked on phone), then "How it works." over four printed columns, each under an `inkRule`: the ordinal in display lettering, the step title, one short body (`MODEL.steps`).
  1. Register and connect your booking system
  2. Choose your partners
  3. Select your eligible memberships
  4. Members book, Moose keeps it balanced (credits each month)
- 1 col → 2 cols (≥760) → 4 cols (≥1048). Type only: no card here.

### 6.5 `MSNetwork.astro` — the deck

- h2 "The studios already on Moose.", lede "Across Australia — and counting.", centred.
- A deck of cards, one issued by each studio in `NETWORK.partners` (`MemberCard layout="partner"`: "Issued by", the studio's logo as a card-lettering mask from `public/partners/`, its name). Logos are balanced by area at build time.
- ≥1048px: the deck rests fanned in an arc. With motion it arrives stacked, fans out on scroll into view, then every 3 s the front card tucks behind the fan to the back. Hover lifts a card and holds the shuffle.
- Below 1048px: a swipeable, snapping row (250px cards, the next one peeking) that moves on one card every ~3 s until the reader swipes.
- Pauses off-screen, on the other floor and in a background tab. Under reduced motion: the fan or the row, still. This is the studio floor's one authored moment (RULES 17b).

### 6.6 `MSValue.astro` — the figures as a printed ledger

- h2 "Variety: a reason to join, and a reason to stay." and the prize note.
- Three printed read-backs (`VALUE.benefits`): a printed label, the figure in display lettering with its unit, and a caption. Printed rules above, below and between the cells; 1 col (rules between) → 3 cols (≥760). No boxes, no arrows.

### 6.7 `MSStory.astro` — featured partnership + voices

- White background. Eyebrow "On the ground", h2 "Featured partnership."
- Case card: VRTUS × Body by Berner (Bondi, NSW). Two photos (VRTUS kickboxing, BBB reformer pilates) on the left; metrics + quotes + credit-balance explanation on the right.
- Metrics row: per-studio quote, per-studio % of members upgraded (22% / 31%), and a centre block showing 128 ↔ 143 crossovers/month with explanatory bullets about credit weighting.
- Below: "From some other studios who get it." with 3 quote cards (Sarah Reid / Marcus Tran / Priya Nair).

### 6.8 The member floor (`MSMemberHero` → `MSMemberHow` → `MSMemberGet` → `MSMemberApp` → `MSMemberClose`)

- **Hero:** the switch, h1 "Finally, some variety.", one line, the primary plate "Get the Moose app". The sample card in its sleeve arrives on load (the floor's first authored moment); its issuer cycles through the studios on Moose.
- **How it works for you:** three short steps, each with the same sample card at that moment (its back; the front made valid; credits spent, one class punched and one booked). ≥1048 with motion: one card held in view while the steps scroll past (it turns, the sticker lands, the credits count down and a class is punched). Phone with motion: each card plays its moment once in view. Reduced motion: the three cards, still.
- **What you get, what you pay:** the words, and a floating paper panel of rows (You get · Valid at · You pay). No figures: the credit amount varies by studio.
- **The app:** "Book in the Moose app." and three class cards (Book, Booked, Free) at "A partner studio". No screenshot. The first time they come into view the top one books itself (once; still under reduced motion).
- **Close:** the navy cover band, "Get the Moose app.", the App Store plate and the sample card in use, still.

### 6.9 `MSStudioClose.astro` — the studio close

- The navy cover band (a scoped `.dark`). "Get your studio on Moose.", "No cost to join. You choose your partners.", the primary plate "Register your studio" (new tab to the studio portal) and the line naming the portal. There is no form on the site.
- Beside the words (below on phone): a fresh card in its sleeve, "Issued by Your studio" ghosted.
- On press the portal opens straight away and the card issues on the page behind it (the name presses in, the card rises out of the sleeve and settles at −3°). Reduced motion shows the issued card.

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

- Hero: switch, the card pair, then the words, below 1048px.
- Nav collapses to a hamburger below `760px`. Navy pill CTA stays visible inside the mobile menu.
- Model: 1 col → 2 cols (≥760) → 4 cols (≥1048).
- Network: the swipeable row below 1048px, the fanned deck from 1048px.
- Value: 1 col → 3 cols (≥760).
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

- `<title>` and `<meta name="description">`: `SITE` in `src/data/copy.ts`.
- Open Graph + Twitter card meta. OG image: `public/og.png` (regenerate when brand assets change).
- `<link rel="canonical">`
- Photos are compressed `.webp` under `public/photos/`, served as `<img>`. Neither hero has a photo, so none is preloaded.
- Poppins self-hosted (RULES 12); the Latin 400 and 800 files are preloaded.
- No third-party scripts in v1. (Add Plausible later via a single `<script defer data-domain>` line if desired.)

**Answer engines (AEO):** the goal is for ChatGPT, Perplexity, Gemini, Claude and AI Overviews to find Moose and describe it correctly.

- JSON-LD is one `@graph` built in `src/data/schema.ts` from `copy.ts`. Every page carries `Organization` (fixed description, legal name, contact points, `sameAs`) and `WebSite`; `/` adds `Service` (upgrade priced by the studio, credits each month), `MobileApplication` (iOS) and an `ItemList` of partner studios.
- `/llms.txt` (`src/pages/llms.txt.ts`) is a markdown brief generated from `copy.ts`.
- `robots.txt` names the AI crawlers explicitly as allowed. The host must not block them at the edge (Cloudflare blocks AI bots by default on new zones).
- The site is registered with Google Search Console and Bing Webmaster Tools (ChatGPT search draws on Bing).
- Off-site, the same one-line description of Moose is used on the App Store listing, LinkedIn, Google Business Profile and partner sites.

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
│   │   │   ├── MSMemberHero / How / Get / App / Close.astro
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
- [ ] No third-party font requests; Poppins is served from the site.
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
- ❌ Don't load fonts from a third party (Google Fonts included) — Poppins is self-hosted.
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
3. **Partner counts** — resolved: the lede no longer claims counts ("Across Australia — and counting").
4. **Featured case study** (VRTUS × Body by Berner, Bondi) — confirm partnership and metrics are accurate to publish.
5. **Real partner logos** — done: all eight partners have one.
6. **Contact inboxes** — `partnerships@trainmoose.com`, `memberships@trainmoose.com`, `@trainmoose` IG handle. Confirm all exist.
7. **Legal pages** — no privacy / terms / partner agreement pages exist. ABN / registered address absent from footer.
