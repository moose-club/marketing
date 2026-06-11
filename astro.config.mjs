// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  integrations: [
    react(),
    // Keep the studio-only legal routes out of the sitemap — they're shared by
    // direct link with studios, not surfaced publicly.
    sitemap({
      filter: (page) =>
        !page.startsWith('https://marketing.trainmoose.com/studio-terms') &&
        !page.startsWith('https://marketing.trainmoose.com/studio-conduct'),
    }),
  ],
  site: 'https://marketing.trainmoose.com',
});
