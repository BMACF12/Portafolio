import Lenis from 'lenis';
import { destroySmoothScroll } from './lenis.client';
import { initTheme, toggleTheme } from './theme.client';
import { initGsapAnimations, ScrollTrigger } from './animations.client';
import { initTypingEffect } from './typing.client';
import { initSectionEffects, initSpotlights, updateActiveSectionUI } from './section-effects.client';

declare global {
  interface Window {
    __lenis?: Lenis;
    toggleTheme?: () => void;
  }
}

type DeferredModules = {
  cursor: typeof import('./cursor-system.client');
  letterbox: typeof import('./letterbox-transition.client');
  constellation: typeof import('./constellation.client');
  background: typeof import('./background.client');
  generative: typeof import('./generative-bg.client');
  code: typeof import('./code-typing.client');
};

let uiBound = false;
let navbarEl: HTMLElement | null = null;
let scrollRaf = 0;
let pageToken = 0;
let deferredModules: Promise<DeferredModules> | null = null;
let mobileOpen = false;

function onScroll() {
  if (scrollRaf) return;
  scrollRaf = requestAnimationFrame(() => {
    scrollRaf = 0;
    navbarEl?.classList.toggle('scrolled', window.scrollY > 120);
    updateActiveSectionUI();
  });
}

function setMobileOpen(open: boolean) {
  mobileOpen = open;
  const menuToggle = document.querySelector<HTMLButtonElement>('.menu-toggle');
  const mobileMenu = document.querySelector<HTMLElement>('.nav-mobile');
  if (!menuToggle || !mobileMenu) return;
  menuToggle.classList.toggle('active', open);
  mobileMenu.classList.toggle('open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
  mobileMenu.setAttribute('aria-hidden', String(!open));
  mobileMenu.toggleAttribute('inert', !open);
  document.body.classList.toggle('no-scroll', open);
}

function loadDeferredModules(): Promise<DeferredModules> {
  if (!deferredModules) {
    deferredModules = Promise.all([
      import('./cursor-system.client'),
      import('./letterbox-transition.client'),
      import('./constellation.client'),
      import('./background.client'),
      import('./generative-bg.client'),
      import('./code-typing.client'),
    ]).then(([cursor, letterbox, constellation, background, generative, code]) => ({
      cursor,
      letterbox,
      constellation,
      background,
      generative,
      code,
    }));
  }
  return deferredModules;
}

async function initDeferredModules() {
  const modules = await loadDeferredModules();

  modules.cursor.initCursorSystem();
  modules.letterbox.initLetterboxTransitions();
  modules.background.initBackgroundMotion();
  modules.generative.initGenerativeBackground();
  modules.constellation.initConstellation();
  modules.code.initCodeEditor();
}

function scheduleDeferredInit(token: number) {
  const run = () => {
    if (token !== pageToken) return;
    initDeferredModules().catch(() => {});
  };

  const idleWindow = window as Window & {
    requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => number;
  };

  if (idleWindow.requestIdleCallback) {
    idleWindow.requestIdleCallback(run, { timeout: 1200 });
  } else {
    window.setTimeout(run, 300);
  }
}

/**
 * Single source of truth for page init.
 *
 * astro:page-load fires on the initial load AND on every client-side navigation,
 * so no DOMContentLoaded fallback is needed. Critical systems start immediately;
 * decorative systems are imported after the page is idle.
 */
function initPage() {
  const token = ++pageToken;

  navbarEl = document.querySelector<HTMLElement>('[data-navbar]');
  setMobileOpen(false);

  initTheme();
  initSectionEffects();
  initSpotlights();

  // Kill stale ScrollTriggers BEFORE rebuilding anything, so the background
  // tweens we create below survive the next ClientRouter navigation.
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill(true));

  initGsapAnimations();
  initTypingEffect();
  onScroll();
  scheduleDeferredInit(token);
}

document.addEventListener('astro:page-load', () => {
  initPage();
});

// === Delegated UI bindings =================================================
// Bound exactly once on `document` so they survive every view-transition swap
// (component-bundled scripts stop re-executing after navigation).
if (!uiBound) {
  uiBound = true;

  document.addEventListener('click', (event) => {
    const target = event.target as Element | null;
    if (!target) return;

    const themeBtn = target.closest<HTMLButtonElement>('.theme-toggle');
    if (themeBtn) {
      event.preventDefault();
      toggleTheme();
      return;
    }

    if (target.closest<HTMLButtonElement>('.menu-toggle')) {
      setMobileOpen(!mobileOpen);
      return;
    }

    if (target.closest<HTMLAnchorElement>('.nav-mobile a.nav-link-mobile')) {
      setMobileOpen(false);
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && mobileOpen) {
      setMobileOpen(false);
    }
  });

  window.addEventListener('scroll', onScroll, { passive: true });

  // Smooth-scroll for in-page hash links (re-binding would be wasteful).
  document.addEventListener('click', (event) => {
    const link = (event.target as Element | null)?.closest<HTMLAnchorElement>('a[href^="#"]');
    if (!link) return;
    const href = link.getAttribute('href');
    if (!href || href === '#' || href.length < 2) return;
    const target = document.getElementById(href.slice(1));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  window.toggleTheme = toggleTheme;
}

window.addEventListener('beforeunload', () => {
  destroySmoothScroll(window.__lenis ?? null);
});
