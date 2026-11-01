import Lenis from 'lenis';
import { prefersReducedMotion } from '../utils/helpers';
import { isLowTier } from '../utils/performance';

export function initSmoothScroll(): Lenis | null {
  if (prefersReducedMotion() || isLowTier()) {
    document.documentElement.classList.remove('lenis');
    return null;
  }

  const lenis = new Lenis({
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    syncTouch: false,
    touchMultiplier: 2,
  });

  document.documentElement.classList.add('lenis');

  // The rAF loop lives in animations.client.ts (gsap.ticker), so Lenis must not
  // start a second one here.
  return lenis;
}

export function destroySmoothScroll(lenis: Lenis | null) {
  if (lenis) {
    lenis.destroy();
    document.documentElement.classList.remove('lenis');
  }
}
