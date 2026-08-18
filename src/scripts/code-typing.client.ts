import { prefersReducedMotion } from '../utils/helpers';

/**
 * Types the code editor character-by-character when it scrolls into view.
 * Tokens are revealed sequentially using their `data-token-index` attribute.
 * Falls back to showing everything immediately when prefers-reduced-motion is on.
 */
export function initCodeEditor() {
  const editor = document.querySelector<HTMLElement>('[data-code-editor]');
  if (!editor) return;
  if (editor.dataset.bound === 'true') return;
  editor.dataset.bound = 'true';

  const tokens = [...editor.querySelectorAll<HTMLElement>('[data-token-index]')].sort(
    (a, b) => Number(a.dataset.tokenIndex) - Number(b.dataset.tokenIndex)
  );
  if (!tokens.length) return;

  const cursor = editor.querySelector<HTMLElement>('[data-code-cursor]');
  const source = editor.querySelector<HTMLElement>('.code-source');
  if (!source) return;

  if (prefersReducedMotion()) {
    tokens.forEach((tk) => tk.style.removeProperty('visibility'));
    if (cursor) cursor.style.display = 'none';
    return;
  }

  tokens.forEach((tk) => tk.style.setProperty('visibility', 'hidden'));

  function placeCursorAt(target: HTMLElement) {
    if (!cursor || !source) return;
    const sourceRect = source.getBoundingClientRect();
    const tokenRect = target.getBoundingClientRect();
    cursor.style.position = 'absolute';
    cursor.style.left = `${tokenRect.right - sourceRect.left}px`;
    cursor.style.top = `${tokenRect.top - sourceRect.top + 2}px`;
  }

  function revealAll() {
    tokens.forEach((tk) => tk.style.removeProperty('visibility'));
    if (cursor) cursor.style.display = 'none';
  }

  let typedIndex = 0;
  function step() {
    if (typedIndex >= tokens.length) {
      revealAll();
      return;
    }
    const token = tokens[typedIndex];
    token.style.removeProperty('visibility');
    placeCursorAt(token);

    const lastChar = token.textContent?.slice(-1) || '';
    const delay = lastChar === '\n' ? 110 : lastChar === ';' ? 90 : lastChar === '{' || lastChar === '}' ? 60 : 26;

    typedIndex += 1;
    setTimeout(step, delay);
  }

  let started = false;
  function start() {
    if (started) return;
    started = true;
    step();
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          start();
          observer.disconnect();
        }
      });
    },
    { threshold: 0.35 }
  );
  observer.observe(editor);
}
