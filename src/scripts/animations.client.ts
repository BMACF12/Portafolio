import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { prefersReducedMotion, isTouchDevice } from '../utils/helpers';
import { initSmoothScroll } from './lenis.client';
import type Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

let lenisInstance: Lenis | null = null;
let motionMedia: ReturnType<typeof gsap.matchMedia> | null = null;

const DESKTOP_MOTION = '(min-width: 1024px) and (pointer: fine) and (prefers-reduced-motion: no-preference)';
const MOTION_CLASSES = ['has-sticky-intro', 'has-horizontal-projects'];

function clearMotionClasses() {
  MOTION_CLASSES.forEach((className) => document.documentElement.classList.remove(className));
}

function resetProjectsIntro() {
  const intro = document.querySelector<HTMLElement>('[data-projects-intro]');
  if (!intro) return;
  intro.style.removeProperty('opacity');
  intro.style.removeProperty('transform');
}

/**
 * Re-runnable GSAP init. The caller (main.client.ts) has already killed stale
 * ScrollTriggers — we just rebuild against fresh DOM nodes. Lenis + the gsap
 * ticker are created only once on the very first call.
 *
 * After fonts load we refresh ScrollTrigger so pinned sections pick up the
 * final metrics (otherwise the hero name appears pushed down by leftover
 * pin-spacers).
 */
export function initGsapAnimations() {
  if (prefersReducedMotion()) {
    motionMedia?.revert();
    motionMedia = null;
    clearMotionClasses();
    resetProjectsIntro();
    document.documentElement.classList.remove('lenis');
    document.querySelectorAll<HTMLElement>('.reveal, .reveal-stagger, .mask-reveal').forEach((el) => {
      el.classList.add('is-visible');
    });
    return;
  }

  if (!lenisInstance) {
    lenisInstance = initSmoothScroll();
    if (lenisInstance) {
      window.__lenis = lenisInstance;
      lenisInstance.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time) => {
        lenisInstance?.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);
    }
  }

  initRevealOnScroll();
  initSplitText();
  initMagneticButtons();
  initScrollProgress();

  motionMedia?.revert();
  clearMotionClasses();
  resetProjectsIntro();
  motionMedia = gsap.matchMedia();
  motionMedia.add(DESKTOP_MOTION, () => {
    document.documentElement.classList.add('has-sticky-intro', 'has-horizontal-projects');
    initParallax();
    initStickySections();
    initProjectsSlider();

    return () => {
      clearMotionClasses();
      resetProjectsIntro();
    };
  });

  ScrollTrigger.refresh();

  // Refresh once webfonts settle — fonts swap can shift pin heights.
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => ScrollTrigger.refresh()).catch(() => {});
  }
}

function initRevealOnScroll() {
  const reveals = document.querySelectorAll<HTMLElement>('.reveal, .reveal-stagger, .mask-reveal');
  if (!reveals.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
  );

  reveals.forEach((el) => observer.observe(el));
}

function initParallax() {
  const elements = document.querySelectorAll<HTMLElement>('[data-parallax]');
  elements.forEach((el) => {
    const speed = parseFloat(el.dataset.parallax || '0.2');
    gsap.fromTo(
      el,
      { y: 0 },
      {
        y: () => -window.innerHeight * speed,
        ease: 'none',
        scrollTrigger: {
          trigger: el.closest('[data-parallax-trigger]') || el,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      }
    );
  });
}

function initStickySections() {
  const stickySections = document.querySelectorAll<HTMLElement>('[data-sticky-section]');
  stickySections.forEach((section) => {
    const inner = section.querySelector<HTMLElement>('[data-sticky-inner]');
    if (!inner) return;

    ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: '+=200%',
      pin: inner,
      pinSpacing: true,
    });
  });
}

function initProjectsSlider() {
  const slider = document.querySelector<HTMLElement>('[data-projects-slider]');
  if (!slider) return;

  const track = slider.querySelector<HTMLElement>('[data-projects-track]');
  const intro = slider.querySelector<HTMLElement>('[data-projects-intro]');
  if (!track) return;

  // Tween the whole track so the intro panel travels with the slides — fixes
  // the overlap bug where the intro text stayed put while slides slid over it.
  const scrollDistance = () => track.scrollWidth - window.innerWidth;

  gsap.to(track, {
    x: () => -scrollDistance(),
    ease: 'none',
    scrollTrigger: {
      trigger: slider,
      pin: true,
      scrub: 1,
      end: () => `+=${scrollDistance()}`,
      invalidateOnRefresh: true,
      anticipatePin: 1,
      onUpdate: (self) => {
        // Fade the intro out during the first ~18% of horizontal travel so the
        // heading no longer sits under the first project slide.
        if (intro) {
          const fade = gsap.utils.clamp(0, 1, 1 - self.progress / 0.18);
          intro.style.opacity = String(fade);
          intro.style.transform = `translateX(${gsap.utils.interpolate(fade, 0, -80)}px)`;
        }
      },
    },
  });
}

function initSplitText() {
  const splitElements = document.querySelectorAll<HTMLElement>('[data-split-text]');
  splitElements.forEach((el) => {
    if (el.dataset.splitDone) return;
    el.dataset.splitDone = 'true';
    const text = el.textContent || '';
    el.innerHTML = text
      .split(/(\s+)/)
      .filter(Boolean)
      .map((part) => {
        if (/^\s+$/.test(part)) {
          return '<span class="char" style="display:inline-block;width:0.3em;">&nbsp;</span>';
        }
        const chars = part
          .split('')
          .map(
            (char) =>
              `<span class="char" style="display:inline-block;will-change:transform;">${char}</span>`
          )
          .join('');
        return `<span style="display:inline-block;white-space:nowrap;">${chars}</span>`;
      })
      .join('');

    const chars = el.querySelectorAll<HTMLElement>('.char');
    if (!chars.length) return;

    // The GSAP character tween owns this element's entrance. The `.reveal`
    // class would translate it 60px down first, outside the clipped h1, making
    // it never intersect and stay invisible on mobile.
    el.classList.add('is-visible');

    gsap.from(chars, {
      yPercent: 120,
      opacity: 0,
      stagger: 0.02,
      duration: 1,
      ease: 'expo.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        toggleActions: 'play none none reverse',
      },
    });
  });
}

function initMagneticButtons() {
  if (isTouchDevice()) return;
  const buttons = document.querySelectorAll<HTMLElement>('.magnetic');
  buttons.forEach((btn) => {
    if (btn.dataset.magneticBound) return;
    btn.dataset.magneticBound = 'true';
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(btn, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.4,
        ease: 'power2.out',
      });
    });
    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' });
    });
  });
}

function initScrollProgress() {
  const progress = document.querySelector<HTMLElement>('[data-scroll-progress]');
  if (!progress) return;

  ScrollTrigger.create({
    trigger: document.body,
    start: 'top top',
    end: 'bottom bottom',
    onUpdate: (self) => {
      progress.style.transform = `scaleX(${self.progress})`;
    },
  });
}

export { gsap, ScrollTrigger };
