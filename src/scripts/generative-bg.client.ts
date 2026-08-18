/**
 * Generative particle / flow-field background.
 *
 * Trails fade to TRANSPARENT (not to opaque page colour) so the canvas never
 * darkens the page when mix-blend-mode: multiply is active in light theme.
 */

import { prefersReducedMotion, isTouchDevice } from '../utils/helpers';
import { getCurrentTheme } from './theme.client';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
}

const PARTICLE_BASE_DESKTOP = 110;
const PARTICLE_BASE_MOBILE = 45;
const LINK_DISTANCE = 140;
const LINK_DISTANCE_MOBILE = 90;
const CURSOR_RADIUS = 180;
const CURSOR_FORCE = 0.35;
const TRAIL_FADE = 0.092; // alpha kept per frame via destination-in (1 - 0.092 = 0.908 decay)

let canvas: HTMLCanvasElement | null = null;
let ctx: CanvasRenderingContext2D | null = null;
let rafId = 0;
let scrollVel = 0;
let theme: 'dark' | 'light' = 'dark';
let accent = { r: 230, g: 57, b: 70 };
let width = 0;
let height = 0;
let particles: Particle[] = [];
let linkDistance = LINK_DISTANCE;
let isMobile = false;
let dpr = 1;

function parseColor(value: string) {
  const trimmed = value.trim();
  const rgbMatch = trimmed.match(/rgba?\(\s*(\d+)[,\s]+(\d+)[,\s]+(\d+)/i);
  if (rgbMatch) {
    return {
      r: Number(rgbMatch[1]),
      g: Number(rgbMatch[2]),
      b: Number(rgbMatch[3]),
    };
  }
  const hex = trimmed.replace('#', '');
  if (hex.length === 6) {
    return {
      r: parseInt(hex.slice(0, 2), 16),
      g: parseInt(hex.slice(2, 4), 16),
      b: parseInt(hex.slice(4, 6), 16),
    };
  }
  return { r: 230, g: 57, b: 70 };
}

function refreshThemeColors() {
  theme = getCurrentTheme();
  const root = getComputedStyle(document.documentElement);
  accent = parseColor(root.getPropertyValue('--color-accent') || '#e63946');
}

function alphaForTheme(baseAlpha: number) {
  // Boost contrast on light backgrounds so particles are clearly visible.
  return theme === 'light' ? Math.min(1, baseAlpha * 1.7) : baseAlpha;
}

function spawn(): Particle {
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.25,
    vy: (Math.random() - 0.5) * 0.25,
    r: Math.random() * 1.4 + 0.4,
  };
}

function resize() {
  if (!canvas || !ctx) return;
  dpr = Math.min(window.devicePixelRatio || 1, 2);
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width * dpr;
  canvas.height = height * dpr;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  isMobile = window.matchMedia('(max-width: 700px)').matches;
  const area = width * height;
  const target = isMobile ? PARTICLE_BASE_MOBILE : PARTICLE_BASE_DESKTOP;
  const density = area / (1440 * 900);
  const count = Math.round(target * Math.max(0.5, Math.min(1.4, density)));
  linkDistance = isMobile ? LINK_DISTANCE_MOBILE : LINK_DISTANCE;

  if (particles.length !== count) {
    particles = Array.from({ length: count }, spawn);
  }
}

let mouseX = -9999;
let mouseY = -9999;

function onPointerMove(event: PointerEvent) {
  mouseX = event.clientX;
  mouseY = event.clientY;
}

function onPointerLeave() {
  mouseX = -9999;
  mouseY = -9999;
}

let lastScrollY = window.scrollY;
let lastScrollTime = performance.now();

function onWheel() {
  const now = performance.now();
  const dy = window.scrollY - lastScrollY;
  const dt = Math.max(16, now - lastScrollTime);
  scrollVel = dy / dt;
  lastScrollY = window.scrollY;
  lastScrollTime = now;
}

function attachLenis() {
  const lenis = window.__lenis;
  if (lenis && typeof lenis.on === 'function') {
    lenis.on('scroll', ({ scroll, velocity }: { scroll: number; velocity: number }) => {
      scrollVel = velocity * 1.2;
      lastScrollY = scroll;
    });
  } else {
    setTimeout(attachLenis, 200);
  }
}

function step() {
  if (!ctx || !canvas) return;
  rafId = requestAnimationFrame(step);

  // 1) Fade existing pixels toward transparent (destination-in keeps alpha).
  ctx.globalCompositeOperation = 'destination-in';
  ctx.fillStyle = `rgba(0, 0, 0, ${1 - TRAIL_FADE})`;
  ctx.fillRect(0, 0, width, height);

  // 2) Draw particles + links with additive blending.
  ctx.globalCompositeOperation = 'lighter';

  const flow = Math.min(Math.abs(scrollVel) * 0.6, 2.5);
  const flowSign = Math.sign(scrollVel) || 0;

  for (let i = 0; i < particles.length; i++) {
    const p = particles[i];
    const angle =
      Math.sin(p.y * 0.0025 + performance.now() * 0.0001) * 1.6 +
      Math.cos(p.x * 0.003) * 1.6 +
      flowSign * flow * 0.4;
    p.vx += Math.cos(angle) * 0.018;
    p.vy += Math.sin(angle) * 0.018;

    const dx = p.x - mouseX;
    const dy = p.y - mouseY;
    const distSq = dx * dx + dy * dy;
    if (distSq < CURSOR_RADIUS * CURSOR_RADIUS && distSq > 1) {
      const dist = Math.sqrt(distSq);
      const force = (1 - dist / CURSOR_RADIUS) * CURSOR_FORCE;
      p.vx += (dx / dist) * force;
      p.vy += (dy / dist) * force;
    }

    p.vx *= 0.94;
    p.vy *= 0.94;
    p.vx += (Math.random() - 0.5) * 0.05;
    p.vy += (Math.random() - 0.5) * 0.05;

    p.x += p.vx;
    p.y += p.vy;

    if (p.x < -20) p.x = width + 20;
    if (p.x > width + 20) p.x = -20;
    if (p.y < -20) p.y = height + 20;
    if (p.y > height + 20) p.y = -20;
  }

  const linkAlpha = alphaForTheme(0.35);
  for (let i = 0; i < particles.length; i++) {
    const a = particles[i];
    for (let j = i + 1; j < particles.length; j++) {
      const b = particles[j];
      const dx = a.x - b.x;
      const dy = a.y - b.y;
      const d = Math.sqrt(dx * dx + dy * dy);
      if (d < linkDistance) {
        const alpha = (1 - d / linkDistance) * linkAlpha;
        ctx.strokeStyle = `rgba(${accent.r}, ${accent.g}, ${accent.b}, ${alpha})`;
        ctx.lineWidth = 0.6;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
    }
  }

  const particleAlpha = alphaForTheme(0.8);
  ctx.fillStyle = `rgba(${accent.r}, ${accent.g}, ${accent.b}, ${particleAlpha})`;
  for (let i = 0; i < particles.length; i++) {
    const p = particles[i];
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
  }

  scrollVel *= 0.9;
}

function start() {
  if (!ctx || !canvas) return;
  refreshThemeColors();
  resize();
  if (!rafId) rafId = requestAnimationFrame(step);
}

function pause() {
  if (rafId) {
    cancelAnimationFrame(rafId);
    rafId = 0;
  }
}

function onVisibilityChange() {
  if (document.hidden) {
    pause();
  } else if (!rafId && canvas && ctx) {
    rafId = requestAnimationFrame(step);
  }
}

function onThemeChange() {
  refreshThemeColors();
  if (!ctx || !canvas) return;
  ctx.clearRect(0, 0, width, height);
}

export function initGenerativeBackground() {
  const newCanvas = document.querySelector<HTMLCanvasElement>('[data-generative-bg]');
  if (!newCanvas) return;
  if (prefersReducedMotion() || isTouchDevice()) {
    newCanvas.style.display = 'none';
    return;
  }

  // Already initialised on THIS canvas → no-op.
  if (canvas === newCanvas && ctx) {
    refreshThemeColors();
    return;
  }

  // If we are switching to a fresh canvas (after ClientRouter navigation),
  // recycle the existing RAF loop and just rebind the new context.
  if (rafId) {
    cancelAnimationFrame(rafId);
    rafId = 0;
  }

  canvas = newCanvas;
  ctx = canvas.getContext('2d');
  if (!ctx) return;

  refreshThemeColors();
  resize();

  window.removeEventListener('resize', resize);
  window.addEventListener('resize', resize, { passive: true });
  window.removeEventListener('pointermove', onPointerMove);
  window.addEventListener('pointermove', onPointerMove, { passive: true });
  window.removeEventListener('pointerleave', onPointerLeave);
  window.addEventListener('pointerleave', onPointerLeave);
  document.removeEventListener('mouseleave', onPointerLeave);
  document.addEventListener('mouseleave', onPointerLeave);
  window.removeEventListener('wheel', onWheel);
  window.addEventListener('wheel', onWheel, { passive: true });

  if (!themeObserver) {
    themeObserver = new MutationObserver(() => {
      if (getCurrentTheme() !== theme) onThemeChange();
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class', 'data-theme'],
    });
  }

  document.removeEventListener('visibilitychange', onVisibilityChange);
  document.addEventListener('visibilitychange', onVisibilityChange);

  attachLenis();
  start();
}

let themeObserver: MutationObserver | null = null;

export function destroyGenerativeBackground() {
  if (rafId) cancelAnimationFrame(rafId);
  rafId = 0;
  canvas = null;
  ctx = null;
  particles = [];
}
