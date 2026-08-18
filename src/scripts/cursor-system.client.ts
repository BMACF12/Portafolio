import { prefersReducedMotion } from '../utils/helpers';

/**
 * Singleton cursor system that survives Astro ClientRouter page swaps.
 * Element references are re-queried on every navigation; listeners and the
 * RAF loop are bound exactly once on `window`.
 */

interface CursorElements {
  dot: HTMLElement | null;
  ring: HTMLElement | null;
  aurora: HTMLElement | null;
}

let els: CursorElements = { dot: null, ring: null, aurora: null };
let rafId = 0;
let targetX = 0;
let targetY = 0;
let currentX = 0;
let currentY = 0;
let ringX = 0;
let ringY = 0;
let listenersBound = false;

function refreshElements() {
  els = {
    dot: document.querySelector<HTMLElement>('[data-cursor-dot]'),
    ring: document.querySelector<HTMLElement>('[data-cursor-ring]'),
    aurora: document.querySelector<HTMLElement>('[data-aurora]'),
  };
}

function render() {
  currentX += (targetX - currentX) * 0.22;
  currentY += (targetY - currentY) * 0.22;
  ringX += (targetX - ringX) * 0.11;
  ringY += (targetY - ringY) * 0.11;

  if (els.dot) els.dot.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
  if (els.ring) els.ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
  if (els.aurora) {
    els.aurora.style.left = `${currentX}px`;
    els.aurora.style.top = `${currentY}px`;
  }
  rafId = requestAnimationFrame(render);
}

function onMove(event: PointerEvent) {
  targetX = event.clientX;
  targetY = event.clientY;
  if (els.dot) els.dot.style.opacity = '1';
  if (els.ring) els.ring.style.opacity = '1';
  if (els.aurora) els.aurora.style.opacity = '0.8';
}

function onLeaveDocument() {
  if (els.dot) els.dot.style.opacity = '0';
  if (els.ring) els.ring.style.opacity = '0';
  if (els.aurora) els.aurora.style.opacity = '0';
  document.body.classList.remove('cursor-hover', 'cursor-view');
}

function updateHoverState(target: EventTarget | null) {
  const el = target instanceof Element ? target : null;
  const interactive = el?.closest('a, button, [role="button"], [data-cursor-hover]');
  const view = el?.closest('[data-cursor-view], img');
  document.body.classList.toggle('cursor-hover', Boolean(interactive));
  document.body.classList.toggle('cursor-view', Boolean(view));
}

function onPointerOver(event: PointerEvent) {
  updateHoverState(event.target);
}

function onPointerOut(event: PointerEvent) {
  updateHoverState(event.relatedTarget);
}

export function initCursorSystem() {
  if (prefersReducedMotion() || !window.matchMedia('(pointer: fine)').matches) return;

  refreshElements();

  targetX = targetX || window.innerWidth / 2;
  targetY = targetY || window.innerHeight / 2;
  currentX = targetX;
  currentY = targetY;
  ringX = targetX;
  ringY = targetY;

  document.body.classList.add('cursor-ready');

  if (listenersBound) return;
  listenersBound = true;

  window.addEventListener('pointermove', onMove, { passive: true });
  document.addEventListener('pointerover', onPointerOver, { passive: true });
  document.addEventListener('pointerout', onPointerOut, { passive: true });
  document.documentElement.addEventListener('mouseleave', onLeaveDocument);
  window.addEventListener('pagehide', () => cancelAnimationFrame(rafId), { once: true });

  rafId = requestAnimationFrame(render);
}
