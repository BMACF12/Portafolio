import { prefersReducedMotion } from '../utils/helpers';

/**
 * Section effects (dots, counter, active-section tints).
 * Safe to call on every page navigation: the window scroll listener is bound
 * once and re-reads fresh element references each frame of use.
 */

let scrollBound = false;

/**
 * Re-queries UI elements each call — safe to invoke from a delegated scroll handler.
 */
export function updateActiveSectionUI() {
  const percentEl = document.querySelector<HTMLElement>('[data-scroll-percent]');
  const counterEl = document.querySelector<HTMLButtonElement>('[data-scroll-counter]');
  const indicatorEl = document.querySelector<HTMLElement>('[data-section-indicator]');
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
  const value = Math.round(progress * 100);
  if (percentEl) percentEl.textContent = String(value).padStart(2, '0');
  if (counterEl) counterEl.classList.toggle('is-visible', window.scrollY > window.innerHeight * 0.65);
  if (indicatorEl) indicatorEl.classList.toggle('is-visible', window.scrollY > window.innerHeight * 0.55);
}

export function initSectionEffects() {
  const sections = [...document.querySelectorAll<HTMLElement>('[data-section]')];
  const dots = [...document.querySelectorAll<HTMLAnchorElement>('[data-section-dot]')];

  const setActive = (id: string) => {
    document.body.dataset.activeSection = id;
    dots.forEach((dot) => dot.classList.toggle('is-active', dot.dataset.sectionTarget === id));
  };

  if (sections.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive((visible.target as HTMLElement).dataset.section || 'home');
      },
      { rootMargin: '-35% 0px -45% 0px', threshold: [0.05, 0.2, 0.5] }
    );
    sections.forEach((section) => observer.observe(section));
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

  if (!scrollBound) {
    scrollBound = true;
  }
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
