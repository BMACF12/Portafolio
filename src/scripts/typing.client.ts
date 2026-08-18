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

export function initTypingEffect() {
  const el = document.querySelector<HTMLElement>('[data-typing-text]');
  if (!el || el.dataset.typingBound) return;
  el.dataset.typingBound = 'true';

  const lang = (document.documentElement.lang === 'en' ? 'en' : 'es') as 'es' | 'en';
  const words = lang === 'en' ? WORDS_EN : WORDS_ES;

  if (prefersReducedMotion()) {
    el.textContent = words[0];
    return;
  }

  let masterTl = gsap.timeline({ repeat: -1 });
  words.forEach((word) => {
    let tl = gsap.timeline();
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
    masterTl.add(tl);
  });
}
