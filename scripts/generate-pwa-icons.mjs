// Generates PWA icons (PNG) and the OG image (JPG) from the SVG sources.
// Runs automatically before every build via the "prebuild" npm script.
import sharp from 'sharp';
import { readFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const publicDir = join(root, 'public');
const iconsDir = join(publicDir, 'icons');

await mkdir(iconsDir, { recursive: true });

const favicon = await readFile(join(publicDir, 'favicon.svg'));
const ogSvg = await readFile(join(publicDir, 'og-image.svg'));

const tasks = [
  sharp(favicon).resize(192, 192).png().toFile(join(iconsDir, 'icon-192.png')),
  sharp(favicon).resize(512, 512).png().toFile(join(iconsDir, 'icon-512.png')),
  sharp(favicon).resize(180, 180).png().toFile(join(iconsDir, 'apple-touch-icon.png')),
  sharp(ogSvg)
    .flatten({ background: '#0a0a0a' })
    .resize(1200, 630)
    .jpeg({ quality: 90, mozjpeg: true })
    .toFile(join(publicDir, 'og-image.jpg')),
];

const results = await Promise.all(tasks);
results.forEach((info, i) => {
  const names = ['icon-192.png', 'icon-512.png', 'apple-touch-icon.png', 'og-image.jpg'];
  console.log(`✓ ${names[i]} — ${info.width}x${info.height} (${Math.round(info.size / 1024)} KB)`);
});
