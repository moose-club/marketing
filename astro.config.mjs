// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import { ABOUT, CREDITS, GUIDE, NUMBERS, PATHS, PILATES, REPORTS, REVIEWED, SWAP, reportPath } from './src/data/copy.ts';

// The answer pages carry a reviewed date; the sitemap says so, so crawlers
// know when to read them again. Studio pages live under PATHS.studios.
const reviewed = Object.values(PATHS);

// https://astro.build/config
export default defineConfig({
  output: 'static',
  integrations: [
    react(),
    // Keep the studio-only legal routes out of the sitemap — they're shared by
    // direct link with studios, not surfaced publicly.
    sitemap({
      filter: (page) =>
        !page.startsWith('https://www.trainmoose.com/studio-terms') &&
        !page.startsWith('https://www.trainmoose.com/studio-conduct') &&
        // /claim is a transactional landing reached via email deep links, not
        // a public marketing page — keep it out of the sitemap.
        !page.startsWith('https://www.trainmoose.com/claim'),
      serialize(item) {
        const path = new URL(item.url).pathname;
        if (reviewed.some((p) => path.startsWith(p))) item.lastmod = REVIEWED.iso;
        const report = REPORTS.find((r) => path === reportPath(r.slug));
        if (report) item.lastmod = report.updated.iso;
        if (path === NUMBERS.path) item.lastmod = NUMBERS.updated.iso;
        if (path === GUIDE.path) item.lastmod = GUIDE.reviewed.iso;
        if (path === PILATES.path) item.lastmod = PILATES.reviewed.iso;
        if (path === ABOUT.path) item.lastmod = ABOUT.reviewed.iso;
        if (path === CREDITS.path) item.lastmod = CREDITS.reviewed.iso;
        if (path === SWAP.path) item.lastmod = SWAP.reviewed.iso;
        return item;
      },
    }),
  ],
  site: 'https://www.trainmoose.com',
});
