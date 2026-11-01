import { gsap } from './animations.client';
import { prefersReducedMotion } from '../utils/helpers';

const WORDS_ES = [
  'Desarrollador Full-Stack',
  'Angular & TypeScript',
  'Flutter & Dart',
  'Apasionado por el código',
];

const WORDS_EN = [
  'Full-Stack Developer',
  'Angular & TypeScript',
  'Flutter & Dart',
  'Passionate about code',
];

let masterTl: ReturnType<typeof gsap.timeline> | null = null;
let typingObserver: IntersectionObserver | null = null;

export function initTypingEffect() {
  const el = document.querySelector<HTMLElement>('[data-typing-text]');
  if (!el) return;

  masterTl?.kill();
  masterTl = null;
  typingObserver?.disconnect();
  typingObserver = null;

  const lang = document.documentElement.lang.startsWith('en') ? 'en' : 'es';
  const words = lang === 'en' ? WORDS_EN : WORDS_ES;

  if (prefersReducedMotion()) {
    el.textContent = words[0];
    return;
  }

  const timeline = gsap.timeline({ repeat: -1, paused: true });
  masterTl = timeline;

  words.forEach((word) => {
    const tl = gsap.timeline();
    tl.to(el, {
      duration: 0.05,
      onComplete: () => {
        el.textContent = '';
      },
    });
    word.split('').forEach((_, i) => {
      tl.to(el, {
        duration: 0.05,
        onComplete: () => {
          el.textContent = word.substring(0, i + 1);
        },
      });
    });
    tl.to({}, { duration: 1.5 });
    tl.to(el, {
      duration: 0.3,
      opacity: 0,
      ease: 'power2.in',
      onComplete: () => {
        el.textContent = '';
        el.style.opacity = '1';
      },
    });
    timeline.add(tl);
  });

  const trigger = el.closest<HTMLElement>('[data-section]') || el;
  typingObserver = new IntersectionObserver(
    (entries) => {
      if (entries[0]?.isIntersecting) timeline.play();
      else timeline.pause();
    },
    { threshold: 0 }
  );
  typingObserver.observe(trigger);
}
