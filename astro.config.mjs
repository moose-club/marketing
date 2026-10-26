// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import { PATHS, REVIEWED } from './src/data/copy.ts';

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
        return item;
      },
    }),
  ],
  site: 'https://www.trainmoose.com',
});
