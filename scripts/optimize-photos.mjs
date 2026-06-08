// One-off: convert marketing PNGs/JPGs in public/photos/ to WebP at
// reasonable quality. Run with `node scripts/optimize-photos.mjs`.
//
// Output WebPs live alongside the originals. Source files are kept (so a CDN
// or test can still serve them); update copy.ts references to `.webp` and the
// originals can be deleted in a follow-up.
import { readdir, stat } from 'node:fs/promises';
import { join, parse } from 'node:path';
import sharp from 'sharp';

const DIR = new URL('../public/photos/', import.meta.url);
const QUALITY = 78;
const MAX_WIDTH = 1800;

const files = await readdir(DIR);
let savedBytes = 0;

for (const file of files) {
  const { name, ext } = parse(file);
  if (!/^\.(png|jpe?g)$/i.test(ext)) continue;

  const inPath = join(DIR.pathname, file);
  const outPath = join(DIR.pathname, `${name}.webp`);

  const before = (await stat(inPath)).size;

  await sharp(inPath)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: QUALITY, effort: 5 })
    .toFile(outPath);

  const after = (await stat(outPath)).size;
  const pct = Math.round((1 - after / before) * 100);
  savedBytes += before - after;
  console.log(
    `${file.padEnd(28)} ${(before / 1024).toFixed(0).padStart(6)} KB → ${(after / 1024).toFixed(0).padStart(6)} KB  (-${pct}%)`,
  );
}

console.log(`\nTotal saved: ${(savedBytes / 1024 / 1024).toFixed(2)} MB`);
