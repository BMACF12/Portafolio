import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { prefersReducedMotion } from '../utils/helpers';

gsap.registerPlugin(ScrollTrigger);

/**
 * Scroll-driven background motion.
 *  - Cinematic zoom: the global grid scales 1 → 1.14 as the page scrolls down.
 *  - Aurora drift: the radial aurora translates in counter-direction to the scroll,
 *    plus a soft breathing pulse on opacity.
 *  - Per-section accent: each <section data-section> can opt into a different
 *    glow colour via `data-bg-accent` (rgba string), applied to the aurora.
 *  - All motion is rAF-friendly and respects prefers-reduced-motion + mobile.
 */

const ACCENT_DEFAULTS: Record<string, string> = {
  home: 'rgba(230, 57, 70, 0.16)',
  services: 'rgba(96, 165, 250, 0.14)',
  skills: 'rgba(245, 158, 11, 0.13)',
  projects: 'rgba(230, 57, 70, 0.17)',
  philosophy: 'rgba(168, 85, 247, 0.14)',
  experience: 'rgba(34, 197, 94, 0.13)',
  contact: 'rgba(230, 57, 70, 0.16)',
};

let bound = false;

export function initBackgroundMotion() {
  const atmosphere = document.querySelector<HTMLElement>('.global-atmosphere');
  const grid = document.querySelector<HTMLElement>('.global-grid');
  const aurora = document.querySelector<HTMLElement>('.global-aurora');
  if (!atmosphere || !grid || !aurora) return;
  if (bound) return;
  bound = true;

  const reduced = prefersReducedMotion();
  const root = document.documentElement;

  if (reduced) {
    root.style.setProperty('--bg-zoom', '1');
    root.style.setProperty('--bg-drift', '0px');
    root.style.setProperty('--bg-pulse', '.8');
    return;
  }

  // 1) Cinematic zoom + drift tied to page scroll progress.
  gsap.to(root, {
    '--bg-zoom': 1.14,
    '--bg-drift': '-120px',
    ease: 'none',
    scrollTrigger: {
      trigger: document.body,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.6,
    },
  });

  // 2) Aurora breathing pulse (independent of scroll, slow loop).
  gsap.to(root, {
    '--bg-pulse': 1,
    duration: 4.5,
    yoyo: true,
    repeat: -1,
    ease: 'sine.inOut',
  });

  // 3) Per-section accent colour.
  document.querySelectorAll<HTMLElement>('[data-section]').forEach((section) => {
    const key = section.dataset.section || '';
    const accent = section.dataset.bgAccent || ACCENT_DEFAULTS[key] || ACCENT_DEFAULTS.home;
    ScrollTrigger.create({
      trigger: section,
      start: 'top 60%',
      end: 'bottom 40%',
      onEnter: () => root.style.setProperty('--aurora-color', accent),
      onEnterBack: () => root.style.setProperty('--aurora-color', accent),
    });
  });
}
