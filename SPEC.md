# Moose Marketing Site — Build Spec

A spec for building the public marketing site for **Moose**, a B2B platform that lets boutique fitness studios join a credit-based crossover network (members pay one subscription, can visit any partner studio, partner studios get paid per visit). Audience: studio owners and operators, not end-member consumers.

This spec is the single source of truth. If anything in the source files contradicts this spec, **the spec wins** — the source files are a design preview, not production code.

---

## 1. What we're building

A single-page, content-focused, server-rendered marketing site. One URL (`/`). Twelve scrollable sections (listed in §6). Primary CTA: **Apply to join the network**. Secondary CTA: **See how it works** (anchor scroll).

The site exists to convert studio operators from "haven't heard of Moose" to "submitted the apply form." It is not a member-facing app, not a dashboard, not a blog (yet).

---

## 2. Tech stack — decided

| Concern | Choice | Why |
|---|---|---|
| Framework | **Astro 4+** | Ships zero JS by default; perfect for marketing |
| Component model | `.astro` files for static sections, React islands only where state is needed | Avoids hydrating the whole page |
| React adapter | `@astrojs/react` | For the three app-screen islands in §6.5 |
| Styling | **Hand-rolled CSS with CSS custom properties** in a single `globals.css` + per-component `<style>` blocks | Matches `moose-design-system.html`; **do NOT add Tailwind** |
| Type system | TypeScript, strict mode | |
| Package manager | `pnpm` | |
| Deployment target | Static (`output: 'static'`) — Vercel or Cloudflare Pages | |
| Node | 20 LTS | |

**Do not introduce:** Tailwind, CSS-in-JS, shadcn, Next.js, Remix, a CMS, a state library, or any UI kit. The brand discipline is the point.

---

## 3. Source material (already in the project / handed in)

| File | What it is | How to use it |
|---|---|---|
| `moose-design-system.html` | The canonical brand bible (colors, type, spacing, glass, do/don't) | Reference, don't import. Mirror the token names. |
| `Marketing_Site__standalone_.html` | A Claude-design preview bundle. **Don't ship this.** | Ignore the outer HTML; the unpacked JSX is the real reference |
| `01-design-tokens.jsx` | `fnTheme()`, `FN_ACCENTS` — colors & semantic tokens | Port values into `globals.css` as CSS variables (see §4) |
| `02-shared-ui.jsx` | `FN_STUDIOS`, `LiquidGlass`, `FNIcon`, `FNTopBar` | Reuse: studio data and the LiquidGlass component go into shared modules |
| `03-app-screens-home.jsx` | `ScreenHome` — phone-screen mock | Wrap as a React island for the App Showcase section |
| `04-app-screens-schedule.jsx` | `ScreenSchedule` + booking flow | Wrap as a React island for the App Showcase section |
| `05-app-screens-cancel-settings.jsx` | `ScreenCancelFlow` + settings | Wrap as a React island for the App Showcase section |
| `06-marketing-copy-data.jsx` | All hero copy, stats, steps, partner list, testimonials, FAQ | Port verbatim to `src/data/copy.ts` (see §7) |
| `07-marketing-page.jsx` | `MSitePage` and 12 section components | Reference for layout intent and inline styles; rebuild as `.astro` files |
| `mooseoncreamdeep.png`, `mooseonnavyallwhite.png`, `mooseonwhiteallpink.png` | Wordmark lockups | `public/brand/wordmark-*.png` |
| `appicononnavywhite.png`, `appicononmagenta.png` | App icon variants | `public/brand/appicon-*.png` |

---

## 4. Design tokens — port to `src/styles/globals.css`

All values from `01-design-tokens.jsx`. **Hex values are exact — do not approximate.**

```css
:root {
  /* Brand */
  --pink:        #EB4E8D;
  --pink-on:     #FFFFFF;
  --pink-soft:   rgba(235, 78, 141, 0.10);
  --pink-glow:   rgba(235, 78, 141, 0.16);

  --navy:        #1A2B5F;
  --navy-deep:   #13204A;
  --navy-lift:   #2C3D78;
  --navy-on:     #FFFFFF;
  --navy-dim:    rgba(255, 255, 255, 0.65);
  --navy-rule:   rgba(255, 255, 255, 0.14);

  /* Paper / ink (light theme — the marketing site is light-only) */
  --paper:       #F0EEE9;  /* page background */
  --card:        #FFFFFF;
  --ink:         #0F0F12;
  --ink-dim:     rgba(15, 15, 18, 0.62);
  --rule:        rgba(15, 15, 18, 0.12);

  /* Type */
  --font-sans: -apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro",
               system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;

  /* Display sizes are fluid — use clamp() per element, see §6 */

  /* Radii */
  --r-pill: 999px;
  --r-card: 22px;        /* studio tiles, app phone, primary cards */
  --r-sheet: 28px;       /* bottom sheets, large slabs */
  --r-tile: 14px;
  --r-chip: 9px;

  /* Spacing scale (4pt grid) */
  --s-1: 4px; --s-2: 8px; --s-3: 12px; --s-4: 16px;
  --s-5: 20px; --s-6: 24px; --s-8: 32px; --s-10: 40px;
  --s-12: 48px; --s-16: 64px; --s-20: 80px; --s-24: 96px;
}

/* Tabular numerics for stats & counters */
.tnum { font-variant-numeric: tabular-nums; }
```

**Pink usage rule (from the design system):** pink is for action. Use it on the primary CTA, on the right loop of the wordmark, and on the *one* word per headline that should ring. Never sprinkle pink as decoration. Never put a pink CTA and a navy CTA on the same screen — pick one primary.

---

## 5. Type scale

San Francisco family (system stack above). All headings use `letter-spacing: -0.02em` to `-0.04em` depending on size. All body uses `line-height: 1.5` to `1.6`.

| Token | Use | Size (fluid) | Weight |
|---|---|---|---|
| `display-xl` | Hero headline | `clamp(48px, 8vw, 112px)` | 700, ls −0.04em |
| `display-l` | Section headlines (Pricing, etc) | `clamp(40px, 6vw, 92px)` | 700, ls −0.035em |
| `display-m` | Sub-section heads | `clamp(28px, 4vw, 56px)` | 700, ls −0.025em |
| `headline` | Card titles | 18–22px | 700, ls −0.3px |
| `body-l` | Lead paragraphs | 17–19px | 500 (med), lh 1.55 |
| `body` | Default copy | 14–15px | 500, lh 1.55 |
| `meta` | Labels, captions | 12–13px | 600 |
| `eyebrow` | Section kickers | 11px | 700, uppercase, ls 2.4px, color `--pink` or `--ink-dim`. Prefix with `━━ ` (em-dashes + space) |
| `tnum-hero` | Big stat numbers | `clamp(40px, 6vw, 76px)` | 700, ls −2px, `.tnum` |

---

## 6. Information architecture — twelve sections

Source: `07-marketing-page.jsx`. Build each as a separate `.astro` file under `src/components/sections/`. Order is fixed.

### 6.1 `MSNav.astro` — sticky top nav
- Left: Moose wordmark (two-tone — navy with pink right loop). Use `wordmark-cream.png` (the version that matches the paper background).
- Center: anchor links — `How it works`, `Pricing`, `Network`, `FAQ`. Hide on mobile, show hamburger.
- Right: **Pink pill button "Apply to join"** → scrolls to §6.11 CTA section.
- Sticky on scroll. Adds a subtle bottom rule and slight backdrop-blur once scrolled past the hero.

### 6.2 `MSHero.astro` — navy full-bleed
- Background: `--navy`.
- Eyebrow: `For studio operators`
- Headline (`display-xl`, cream/`--navy-on`):
  > Your studio,
  > plus 200 others.
- Make the words **"200 others"** pink (`--pink`). This is the one-pink-word rule.
- Sub (lead, `--navy-dim`):
  > Moose is the crossover access pass that fills your empty slots, keeps your members loyal, and pays you for the visit. One integration. Zero new admin.
- Two CTAs: pink primary "Apply to join", ghost-on-navy secondary "See how it works"
- Right side on desktop: a single hero phone, tilted slightly, showing the `ScreenHome` React island. On mobile, phone moves below the copy and centers.

### 6.3 `MSTicker.astro` — live status strip
- Thin band, `--paper` bg, `--ink-dim` text, 13px.
- Format: `● LIVE · 1,247 visits routed today · 218 partner studios · Sydney · Melbourne · Brisbane`
- Green dot, pulses (`animation: pulse 1.6s ease-in-out infinite`).
- No JS needed — these are display numbers.

### 6.4 `MSOutcomes.astro` — Apple-style stats strip
- Eyebrow: `━━ Outcomes`
- 4-column grid on desktop, 2x2 on tablet, stacked on mobile.
- Each cell: huge `tnum-hero` number, then 2-line label below in `--ink-dim`.
- Data from `MK_STATS` in §7.

### 6.5 `MSAppShowcase.astro` — three phones, real React islands
- Eyebrow: `━━ What your members see`
- Three phones side by side on desktop (gap 48px), each showing a different real app screen mounted as a React island via `client:visible`:
  1. `<ScreenHome>` — caption: "Their credits, their week."
  2. `<ScreenSchedule>` — caption: "Real-time availability across your network."
  3. `<ScreenCancelFlow>` — caption: "Cancellations that don't punish you."
- Mobile: horizontal-scroll snap carousel, 1.1 phones visible at a time.
- The phone chrome (notch, home indicator, rounded frame) lives in a shared `<PhoneFrame>` Astro component — see `moose-design-system.html` § "phone frame" for the dimensions (360×760, 44px outer radius, 38px inner, 6px bezel).
- **Performance note:** the phone islands are heavy. Use `client:visible` not `client:load`, and consider `loading="lazy"` on any images inside them.

### 6.6 `MSHowItWorks.astro` — four numbered steps
- Eyebrow: `━━ How it works`
- Headline (`display-l`): "Four steps. Nine business days."
- 4 columns desktop, 2x2 tablet, stacked mobile.
- Each step: oversized step number in `--ink-dim` at low contrast (60px), then bold step title, then 2–3 line description.
- Data from `MK_STEPS` in §7.

### 6.7 `MSPricing.astro` — confident navy slab
- Background: `--navy`, padding `120px 56px` on desktop (`64px 24px` mobile).
- Eyebrow: `━━ Pricing` (pink).
- Headline (`display-l`, cream):
  > You set the price.
  > **We just route the booking.** ← second line in `--pink`
- Right column: a navy-deep (`#13204A`) card with eyebrow "Today's rate" (pink), then `$14` huge with `AUD / credit` in dim, then small explanatory text:
  > Reviewed quarterly against partner studios' published rack rates. Reformer at 1.5x · Yoga at 1.0x · Cycle at 0.75x — typical.
- Below the headline row, a top-ruled 3-column grid:
  1. **No discounting, ever** — You publish your rack rate in credits. Members pay full price every time — we just convert credits to cash for you.
  2. **Weekly payouts** — Every Monday, prior week. No clawbacks if a member shows up. No minimums. Stripe-direct, no platform escrow.
  3. **No lock-in** — 30 days written notice and we wind down outbound bookings. No exit fee. Your members keep access through their billing cycle.

### 6.8 `MSNetwork.astro` — partner studio grid
- Eyebrow: `━━ The network`
- Headline: "218 studios. Three cities. One pass."
- 4-column grid on desktop (5x4 visible = 20 tiles), 3 cols tablet, 2 cols mobile.
- Each tile: square aspect, generative two-color gradient (per `p1`/`p2` in the partner data), a noise overlay (16% alpha SVG turbulence — see `02-shared-ui.jsx` for the data-URI), the studio's initial as a giant translucent watermark in the corner, and a small bottom strip with city/sub/modality.
- The full tile recipe is `.studio-photo` in `Marketing_Site__standalone_.html` — copy that CSS verbatim into the component.
- Data from `MK_PARTNERS` (24 entries) — show the first 20.

### 6.9 `MSQuote.astro` — single big testimonial
- Eyebrow: `━━ What partners say`
- A single pull-quote (very large, `display-m`, regular weight, `--ink`).
- Below: attribution row with the studio's mini-tile (same generative gradient as §6.8), name, and role.
- Cycle through `MK_QUOTES` (3 entries) — for v1, pick **Priya Shah / Pulse Reformer** as the hero quote, the other two go in a smaller two-column block below.

### 6.10 `MSFAQ.astro` — accordion
- Eyebrow: `━━ Questions`
- Headline: "Operator FAQ"
- 7 items from `MK_FAQ`. Use the native `<details><summary>` element — no JS framework needed for accordion behavior. Style with `[open]` selector.
- First item open by default.

### 6.11 `MSCTA.astro` — final apply block
- Navy full-bleed.
- Headline (`display-l`, cream):
  > Ready when you are.
- Sub: "9 business days from signing. No exit fee. Talk to a human before you commit."
- Two buttons: **pink "Apply to join"** (primary) and ghost "Book a 20-min call" (secondary, links to Calendly URL — placeholder `https://calendly.com/moose/intro`).

### 6.12 `MSFooter.astro`
- Three columns: brand block (wordmark + 1-line tagline + © year Moose Pty Ltd), product links, company links.
- Bottom rule, then small print row: ABN placeholder, privacy, terms.
- Address line (Sydney HQ): placeholder, leave a TODO comment.

---

## 7. Copy & data — port verbatim to `src/data/copy.ts`

Convert `06-marketing-copy-data.jsx` to a TypeScript module. Same constant names, but typed. Example shape:

```ts
export const HERO = {
  kicker: 'For studio operators',
  head: ['Your studio,', 'plus 200 others.'],  // line-break aware
  highlightWord: '200 others',                  // for pink-word rendering
  sub: 'Moose is the crossover access pass that fills your empty slots, keeps your members loyal, and pays you for the visit. One integration. Zero new admin.',
} as const;

export const STATS = [
  { n: '32%',   l: 'avg uplift in\noff-peak fill rate' },
  { n: '94%',   l: 'partner retention\nafter 12 months' },
  { n: '$2.3M', l: 'paid to partner\nstudios in 2025' },
  { n: '218',   l: 'partner studios\nacross AU' },
] as const;

// ... STEPS, PARTNERS, QUOTES, FAQ all carried over from 06-marketing-copy-data.jsx
```

Keep the partner-data structure (`{k}` for known studios vs `{name, p1, p2, initial}` for phantom ones). Resolver function `resolvePartner()` ports straight over from `mkResolvePartner`.

---

## 8. Responsive design — non-negotiable rules

The preview file uses `transform: scale()` to fit a 1280px artboard into any viewport. **Do not replicate this.** Build true responsive layouts.

**Breakpoints (mobile-first):**

```css
/* base = mobile (320px+) */
@media (min-width: 640px)  { /* tablet portrait */ }
@media (min-width: 960px)  { /* tablet landscape / small laptop */ }
@media (min-width: 1280px) { /* desktop — design baseline */ }
@media (min-width: 1600px) { /* large desktop — content stays at ~1440 max */ }
```

**Container:** every section's inner content is constrained by `max-width: 1440px; margin-inline: auto; padding-inline: clamp(20px, 5vw, 56px);`.

**Mobile-specific rules:**

- Hero phone moves *below* the copy on `<960px`, centers, scales to 60vw max.
- App Showcase becomes a horizontal-scroll snap carousel (`overflow-x: auto; scroll-snap-type: x mandatory`) with one phone per snap point.
- Outcomes: 4 cols → 2x2 grid below `960px` → stacked below `480px`.
- Pricing: stacked single column below `960px`. The "$14" card moves above the headline on mobile so it lands above the fold.
- Network grid: 4 → 3 → 2 cols. Never collapse to 1 col (a 1-col tile is too big).
- Nav: collapses to a hamburger below `760px`. Pink "Apply" CTA stays visible in the bar at all sizes.
- All touch targets: minimum 44×44px hit area.

**Type:** every heading must use `clamp()` for fluid sizing. No fixed `font-size: 92px` anywhere.

**Test viewport sizes during build:** 375 (iPhone SE), 414 (iPhone Pro Max), 768 (iPad portrait), 1024 (iPad landscape), 1280, 1440, 1920.

---

## 9. Performance & SEO requirements

Target Lighthouse scores on mobile, throttled, on the deployed build:

| Metric | Target |
|---|---|
| Performance | ≥ 95 |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |
| LCP | < 1.5s |
| CLS | 0 |
| Total page weight | < 400 KB (excluding the React islands; with them, < 700 KB) |

**Required:**
- `<title>`: "Moose — One subscription. Every studio."
- `<meta name="description">`: "Moose is the crossover access pass for boutique fitness studios. Fill empty slots, keep your members loyal, get paid weekly. 218 partner studios across Australia."
- Open Graph + Twitter card meta. OG image: a navy slab with the pink-loop wordmark, 1200×630 — generate as `public/og.png` (placeholder for now, TODO comment).
- `<link rel="canonical">`
- JSON-LD `Organization` schema with name "Moose", url, logo, sameAs links (placeholder).
- All images: `<img>` with `width`, `height`, `loading="lazy"` (except the hero phone, which is `eager`). Astro's `<Image>` component for anything in `src/`.
- Preload the system font stack hint (`font-display: swap` — actually irrelevant for system fonts, but make sure no remote fonts are loaded).
- No third-party scripts, no analytics in v1. (Add Plausible later via a single `<script defer data-domain>` line.)

---

## 10. Accessibility — WCAG 2.2 AA

- Color contrast: every text/background pair must hit ≥ 4.5:1 for body, ≥ 3:1 for large headings. The combinations in §4 are pre-checked; do not introduce new pairings without testing.
- Pink (`#EB4E8D`) on white is **only 3.4:1** — fine for headings ≥ 24px or CTAs (their background is pink, not text), but **never use pink text smaller than 24px on a light background**.
- Pink on navy (`#EB4E8D` on `#1A2B5F`) is ~5.1:1 — safe.
- Every section has a heading with semantic level (`<h2>` for section heads, `<h3>` for sub-blocks). Only the hero gets `<h1>`.
- `<details>` accordion in FAQ keeps native keyboard behavior — no custom handlers.
- Nav anchor links: `:focus-visible` with a 2px pink ring offset 2px.
- Prefers-reduced-motion: disable the pulse animation in the ticker, disable the phone tilt in the hero.
- Skip-to-content link, hidden but focus-visible.
- All interactive elements: `aria-label` if their visible text is an icon only.

---

## 11. File structure

```
moose-marketing/
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── public/
│   ├── brand/
│   │   ├── wordmark-cream.png        (mooseoncreamdeep.png renamed)
│   │   ├── wordmark-navy.png         (mooseonnavyallwhite.png renamed)
│   │   ├── wordmark-white-pink.png   (mooseonwhiteallpink.png renamed)
│   │   ├── appicon-navy.png
│   │   └── appicon-magenta.png
│   ├── og.png                        (TODO — placeholder)
│   └── favicon.svg                   (infinity-loop only, pink+navy)
├── src/
│   ├── pages/
│   │   └── index.astro               (composes the 12 sections)
│   ├── layouts/
│   │   └── Base.astro                (html, head, meta, globals.css import)
│   ├── components/
│   │   ├── sections/                 (one .astro per section, see §6)
│   │   │   ├── MSNav.astro
│   │   │   ├── MSHero.astro
│   │   │   ├── MSTicker.astro
│   │   │   ├── MSOutcomes.astro
│   │   │   ├── MSAppShowcase.astro
│   │   │   ├── MSHowItWorks.astro
│   │   │   ├── MSPricing.astro
│   │   │   ├── MSNetwork.astro
│   │   │   ├── MSQuote.astro
│   │   │   ├── MSFAQ.astro
│   │   │   ├── MSCTA.astro
│   │   │   └── MSFooter.astro
│   │   ├── primitives/
│   │   │   ├── Wordmark.astro        (renders the two-tone wordmark, accepts variant)
│   │   │   ├── Button.astro          (pink-primary, ghost-on-navy, ghost-on-paper)
│   │   │   ├── Eyebrow.astro         (the "━━ Label" treatment)
│   │   │   ├── StudioTile.astro      (the generative-gradient + initial tile)
│   │   │   └── PhoneFrame.astro      (wraps a child as an iOS phone shell)
│   │   └── islands/
│   │       ├── ScreenHome.tsx        (port of 03-app-screens-home.jsx)
│   │       ├── ScreenSchedule.tsx    (port of 04-app-screens-schedule.jsx)
│   │       └── ScreenCancelFlow.tsx  (port of 05-app-screens-cancel-settings.jsx)
│   ├── data/
│   │   ├── copy.ts                   (port of 06-marketing-copy-data.jsx)
│   │   └── studios.ts                (port of FN_STUDIOS from 02-shared-ui.jsx)
│   └── styles/
│       └── globals.css               (tokens + base + utility classes)
└── SPEC.md                           (this file)
```

---

## 12. Build order

Don't try to build it all at once. Ship in this order, verifying at each step:

1. **Scaffold:** `pnpm create astro@latest moose-marketing` → minimal template, add React integration. Set up `Base.astro`, `globals.css`, port tokens (§4). Confirm dev server renders an empty page on the paper background.
2. **Primitives:** `Wordmark`, `Button`, `Eyebrow`, `StudioTile`. Build a `/styleguide` route that shows all three and confirms the design tokens render correctly.
3. **Nav + Hero + Footer:** the static skeleton. Get the hero right at 375, 768, and 1440 before moving on.
4. **Ticker + Outcomes + How it works:** all static, all type-driven. Easy wins.
5. **Pricing + CTA:** the two navy slabs.
6. **Network + Quote + FAQ:** the partner grid, testimonial, and accordion.
7. **App Showcase + React islands:** port the three app screens. This is the heaviest step — leave it for last so the rest is already production-quality.
8. **SEO + meta + favicons + OG:** §9 checklist.
9. **Lighthouse audit + a11y pass + responsive sweep.** Iterate until §9 targets are green.

---

## 13. Acceptance criteria

The site is done when all of these are true:

- [ ] No `transform: scale()` anywhere; no fixed-width artboard.
- [ ] No Babel-in-browser. Build outputs static HTML + minimal JS (only the three React islands hydrate).
- [ ] No Tailwind. CSS is hand-written, using tokens from §4.
- [ ] Mobile-first responsive at 375/414/768/1024/1280/1440 with no horizontal scroll, no overflowing text, no broken layouts.
- [ ] Lighthouse mobile scores hit §9 targets on the deployed build.
- [ ] All copy from §7 appears verbatim — no paraphrasing.
- [ ] Brand discipline: one pink word in the hero, one pink CTA per screen, no third color introduced, wordmark used only in approved lockups.
- [ ] Keyboard-navigable end to end, visible focus rings, `prefers-reduced-motion` honored.
- [ ] All twelve sections present in the order in §6.

---

## 14. Explicit don'ts (from the design system + ported from the bundle's problems)

- ❌ Don't introduce Tailwind, CSS-in-JS, or any UI kit.
- ❌ Don't ship Babel-in-browser or run JSX compilation at runtime.
- ❌ Don't use `transform: scale()` to make a fixed-width design "fit."
- ❌ Don't combine the wordmark and the loop icon in the same lockup.
- ❌ Don't introduce a third brand color, a gradient on the pink, or any emoji.
- ❌ Don't use iOS system blue (`#007AFF`) — the brand surface is Moose Navy.
- ❌ Don't put a pink CTA and a navy CTA on the same screen.
- ❌ Don't stack two liquid-glass surfaces (they read muddy).
- ❌ Don't sprinkle pink as decoration — pink is for action only.
- ❌ Don't recolor the wordmark outside the three official lockups.
- ❌ Don't add a cookie banner unless legally required (we use no third-party tracking in v1).
- ❌ Don't load any remote fonts — the system font stack *is* the brand.

---

## 15. Open questions for the human before building

These don't block scaffolding but the human should answer before Pricing and Footer are finalised:

1. Is `$14 AUD / credit` the actual public rate to advertise, or a placeholder?
2. Is `218` partner studios the real count? (Should we make this a build-time variable so it's easy to update?)
3. What's the actual Apply form destination — email mailto, Typeform, custom form, internal CRM endpoint?
4. Calendly link for "Book a 20-min call" — placeholder URL or real?
5. Company legal entity / ABN for the footer?
6. Privacy + Terms pages — do these exist anywhere, or do we leave as TODO?
