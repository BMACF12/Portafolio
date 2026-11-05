import type { ImageMetadata } from 'astro';

/**
 * Imágenes de proyectos por convención de nombre.
 *
 * Cualquier archivo dentro de `src/assets/projects/` se asocia al proyecto cuyo
 * slug coincide con el nombre del archivo (sin extensión). No hace falta tocar
 * el frontmatter ni el código: basta con soltar `mi-proyecto.jpg`.
 */
const files = import.meta.glob<ImageMetadata>(
  '/src/assets/projects/*.{png,jpg,jpeg,webp,avif}',
  { eager: true, import: 'default' }
);

const imagesBySlug = new Map<string, ImageMetadata>();

for (const [path, image] of Object.entries(files)) {
  const filename = path.split('/').pop() ?? '';
  const slug = filename.replace(/\.[^.]+$/, '');
  if (slug) imagesBySlug.set(slug, image);
}

/** Devuelve la imagen del proyecto o `undefined` si aún no se ha añadido. */
export function getProjectImage(slug: string): ImageMetadata | undefined {
  return imagesBySlug.get(slug);
}
