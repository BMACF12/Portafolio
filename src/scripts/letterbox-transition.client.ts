export function initLetterboxTransitions() {
  if (document.documentElement.dataset.letterboxReady) return;
  document.documentElement.dataset.letterboxReady = 'true';

  document.addEventListener('astro:before-preparation', () => {
    document.documentElement.classList.add('is-transitioning');
  });

  document.addEventListener('astro:page-load', () => {
    window.setTimeout(() => document.documentElement.classList.remove('is-transitioning'), 120);
  });
}
