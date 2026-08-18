import Lenis from 'lenis';
import { destroySmoothScroll } from './lenis.client';
import { initTheme, toggleTheme } from './theme.client';
import { initGsapAnimations, ScrollTrigger } from './animations.client';
import { initTypingEffect } from './typing.client';
import { initCursorSystem } from './cursor-system.client';
import { initSectionEffects, initSpotlights, updateActiveSectionUI } from './section-effects.client';
import { initLetterboxTransitions } from './letterbox-transition.client';
import { initConstellation } from './constellation.client';
import { initBackgroundMotion } from './background.client';
import { initGenerativeBackground } from './generative-bg.client';
import { initCodeEditor } from './code-typing.client';

declare global {
  interface Window {
    __lenis?: Lenis;
    toggleTheme?: () => void;
  }
}

let uiBound = false;

/**
 * Single source of truth for page init.
 *
 * astro:page-load fires on the initial load AND on every client-side navigation,
 * so no DOMContentLoaded fallback is needed (a fallback used to cause a double-init
 * that left orphaned ScrollTrigger pin-spacers pushing the hero content down).
 *
 * Init order: GSAP first (it kills stale triggers and is the only thing that does),
 * then systems that own their own ScrollTriggers (constellation, typing).
 */
function initPage() {
  initTheme();
  initCursorSystem();
  initSectionEffects();
  initSpotlights();
  initLetterboxTransitions();
  initCodeEditor();

  // Kill stale ScrollTriggers BEFORE rebuilding anything, so the background
  // tweens we create below survive the next ClientRouter navigation.
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill(true));

  initBackgroundMotion();
  initGenerativeBackground();
  initGsapAnimations();
  initConstellation();
  initTypingEffect();
}

document.addEventListener('astro:page-load', () => {
  initPage();
});

// === Delegated UI bindings =================================================
// Bound exactly once on `document` so they survive every view-transition swap
// (component-bundled scripts stop re-executing after navigation).
if (!uiBound) {
  uiBound = true;

  let mobileOpen = false;

  const setMobileOpen = (open: boolean) => {
    mobileOpen = open;
    const menuToggle = document.querySelector<HTMLButtonElement>('.menu-toggle');
    const mobileMenu = document.querySelector<HTMLElement>('.nav-mobile');
    if (!menuToggle || !mobileMenu) return;
    menuToggle.classList.toggle('active', open);
    mobileMenu.classList.toggle('open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
    mobileMenu.setAttribute('aria-hidden', String(!open));
    document.body.classList.toggle('no-scroll', open);
  };

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

  // Navbar scrolled-state + scroll-driven UI: rAF-throttled, re-reads elements.
  let rafPending = false;
  const onScroll = () => {
    if (rafPending) return;
    rafPending = true;
    requestAnimationFrame(() => {
      rafPending = false;
      const navbar = document.querySelector<HTMLElement>('[data-navbar]');
      navbar?.classList.toggle('scrolled', window.scrollY > 60);
      updateActiveSectionUI();
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

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
