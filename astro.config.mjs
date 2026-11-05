// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import vercel from '@astrojs/vercel';

const SITE_URL = process.env.SITE_URL || 'https://brianflores.dev';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es-ES',
          en: 'en-US',
        },
      },
    }),
    mdx(),
  ],
  redirects: {
    '/servicios': '/#services',
    '/habilidades': '/#skills',
    '/proyectos': '/#projects',
    '/experiencia': '/#experience',
    '/contacto': '/#contact',
    '/cv': '/cv/Brian_Flores_CV.pdf',
    '/services': '/en#services',
    '/skills': '/en#skills',
    '/experience': '/en#experience',
    '/contact': '/en#contact',
  },
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'server',
  adapter: vercel({
    imageService: true,
  }),
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
});
