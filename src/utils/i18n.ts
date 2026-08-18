import es from '../i18n/es.json';
import en from '../i18n/en.json';

export const languages = {
  es,
  en,
} as const;

export type Locale = keyof typeof languages;
export type Translations = typeof es;

/**
 * Detecta el locale desde la URL, el navegador, o retorna el default
 */
export function getLocaleFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split('/');
  if (lang === 'en' || lang === 'es') return lang;
  return 'es';
}

export function useTranslations(locale: Locale): Translations {
  return languages[locale];
}

export function getOppositeLocale(locale: Locale): Locale {
  return locale === 'es' ? 'en' : 'es';
}

export const defaultLocale: Locale = 'es';
export const supportedLocales: Locale[] = ['es', 'en'];

export function getLocaleLabel(locale: Locale): string {
  return locale.toUpperCase();
}

export function formatDate(date: Date, locale: Locale): string {
  return new Intl.DateTimeFormat(locale === 'es' ? 'es-ES' : 'en-US', {
    year: 'numeric',
    month: 'long',
  }).format(date);
}
