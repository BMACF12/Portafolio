import { prefersReducedMotion } from '../utils/helpers';

export type Theme = 'dark' | 'light';
const STORAGE_KEY = 'bf-portfolio-theme';

export function getStoredTheme(): Theme | null {
  if (typeof localStorage === 'undefined') return null;
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'dark' || stored === 'light') return stored;
  return null;
}

export function getSystemTheme(): Theme {
  if (typeof window === 'undefined') return 'dark';
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

export function applyTheme(theme: Theme) {
  if (typeof document === 'undefined') return;
  if (theme === 'light') {
    document.documentElement.classList.add('light');
  } else {
    document.documentElement.classList.remove('light');
  }
  document.documentElement.setAttribute('data-theme', theme);
}

export function setTheme(theme: Theme) {
  applyTheme(theme);
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, theme);
  }
}

export function getCurrentTheme(): Theme {
  return document.documentElement.classList.contains('light') ? 'light' : 'dark';
}

export function toggleTheme() {
  const current = getCurrentTheme();
  const next: Theme = current === 'dark' ? 'light' : 'dark';
  setTheme(next);
  return next;
}

export function initTheme() {
  if (typeof window === 'undefined') return;
  const stored = getStoredTheme();
  const theme = stored ?? getSystemTheme();
  applyTheme(theme);

  window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (e) => {
    if (!getStoredTheme()) {
      applyTheme(e.matches ? 'light' : 'dark');
    }
  });

  if (prefersReducedMotion()) {
    document.documentElement.style.setProperty('transition-duration', '0ms');
  }
}

declare global {
  interface Window {
    toggleTheme?: () => void;
  }
}

if (typeof window !== 'undefined') {
  window.toggleTheme = toggleTheme;
}
