# Moose Marketing Site — Unpacked Source

Extracted from the Claude design "standalone" HTML export.
The original .html bundles all of this as gzipped + base64-encoded strings
plus React, ReactDOM, and Babel-standalone from CDN, then runs Babel in
the browser at page load. That's a preview format, not source you'd ship.

These are the actual JSX files you give to Claude Code:

| File | Purpose | Lines |
|---|---|---|
| 01-design-tokens.jsx | `fnTheme()`, `FN_ACCENTS` — Moose Pink + Navy palette | 160 |
| 02-shared-ui.jsx | `FN_STUDIOS`, `LiquidGlass`, `FNIcon`, `FNTopBar` etc | 257 |
| 03-app-screens-home.jsx | `ScreenHome` — phone screen used in showcase | 371 |
| 04-app-screens-schedule.jsx | `ScreenSchedule` + booking flow | 549 |
| 05-app-screens-cancel-settings.jsx | `ScreenCancelFlow` + settings | 135 |
| 06-marketing-copy-data.jsx | All headlines, stats, steps, partner list | 124 |
| 07-marketing-page.jsx | `MSitePage`, `MSNav`, `MSHero`, `MSOutcomes`, `MSAppShowcase`, etc | 785 |

Load order: 01 → 02 → (03, 04, 05 in any order) → 06 → 07.
