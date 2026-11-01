import { prefersReducedMotion } from '../utils/helpers';

/**
 * Section effects (dots, counter, active-section tints).
 * Safe to call on every page navigation: element references are refreshed on
 * init and the scroll path only reads cached values.
 */

let scrollBound = false;
let sectionObserver: IntersectionObserver | null = null;
let resizeObserver: ResizeObserver | null = null;
let measureRaf = 0;
let maxScroll = 0;

let percentEl: HTMLElement | null = null;
let counterEl: HTMLButtonElement | null = null;
let indicatorEl: HTMLElement | null = null;

function measureScrollRange() {
  maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
}

function scheduleMeasure() {
  if (measureRaf) return;
  measureRaf = requestAnimationFrame(() => {
    measureRaf = 0;
    measureScrollRange();
    updateActiveSectionUI();
  });
}

/**
 * Reads cached element refs — safe to invoke from a delegated scroll handler.
 */
export function updateActiveSectionUI() {
  const scrollY = window.scrollY;
  const viewport = window.innerHeight;
  const progress = maxScroll > 0 ? Math.min(1, Math.max(0, scrollY / maxScroll)) : 0;
  const value = Math.round(progress * 100);

  if (percentEl) percentEl.textContent = String(value).padStart(2, '0');
  if (counterEl) counterEl.classList.toggle('is-visible', scrollY > viewport * 0.65);
  if (indicatorEl) indicatorEl.classList.toggle('is-visible', scrollY > viewport * 0.55);
}

export function initSectionEffects() {
  percentEl = document.querySelector<HTMLElement>('[data-scroll-percent]');
  counterEl = document.querySelector<HTMLButtonElement>('[data-scroll-counter]');
  indicatorEl = document.querySelector<HTMLElement>('[data-section-indicator]');

  const sections = [...document.querySelectorAll<HTMLElement>('[data-section]')];
  const dots = [...document.querySelectorAll<HTMLAnchorElement>('[data-section-dot]')];

  const setActive = (id: string) => {
    document.body.dataset.activeSection = id;
    dots.forEach((dot) => dot.classList.toggle('is-active', dot.dataset.sectionTarget === id));
  };

  sectionObserver?.disconnect();
  if (sections.length) {
    sectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive((visible.target as HTMLElement).dataset.section || 'home');
      },
      { rootMargin: '-35% 0px -45% 0px', threshold: [0.05, 0.2, 0.5] }
    );
    sections.forEach((section) => sectionObserver?.observe(section));
  }

  dots.forEach((dot) => {
    if (dot.dataset.bound) return;
    dot.dataset.bound = 'true';
    dot.addEventListener('click', (event) => {
      const target = document.getElementById(dot.dataset.sectionTarget || '');
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' });
    });
  });

  measureScrollRange();

  if (!scrollBound) {
    scrollBound = true;
    window.addEventListener('resize', scheduleMeasure, { passive: true });
    window.addEventListener('load', scheduleMeasure, { once: true });
  }

  resizeObserver?.disconnect();
  resizeObserver = new ResizeObserver(scheduleMeasure);
  resizeObserver.observe(document.body);

  updateActiveSectionUI();
}

export function initSpotlights() {
  document.querySelectorAll<HTMLElement>('[data-spotlight]').forEach((card) => {
    if (card.dataset.spotlightReady) return;
    card.dataset.spotlightReady = 'true';
    card.addEventListener('pointermove', (event) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--spot-x', `${event.clientX - rect.left}px`);
      card.style.setProperty('--spot-y', `${event.clientY - rect.top}px`);
    });
  });
}
