/**
 * Generative particle / flow-field background.
 *
 * Renders a constellation-like flowing field of particles across the entire
 * page. Reacts to scroll velocity (Lenis) and pointer position. Colours are
 * read from CSS variables so light/dark theme toggles work automatically.
 */

import { prefersReducedMotion, isTouchDevice } from '../utils/helpers';
import { getStoredTheme, getCurrentTheme } from './theme.client';

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

let bound = false;
let ctx: CanvasRenderingContext2D | null = null;
let canvas: HTMLCanvasElement | null = null;
let rafId = 0;
let scrollVel = 0;
let theme: 'dark' | 'light' = 'dark';
let accent = { r: 230, g: 57, b: 70 };

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
  const root = getComputedStyle(document.documentElement);
  theme = getCurrentTheme();
  accent = parseColor(root.getPropertyValue('--color-accent') || '#e63946');
}

export function initGenerativeBackground() {
  if (bound) return;
  bound = true;

  canvas = document.querySelector<HTMLCanvasElement>('[data-generative-bg]');
  if (!canvas) {
    bound = false;
    return;
  }

  if (prefersReducedMotion() || isTouchDevice()) {
    canvas.style.display = 'none';
    bound = false;
    return;
  }

  ctx = canvas.getContext('2d');
  if (!ctx) {
    bound = false;
    return;
  }

  refreshThemeColors();

  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  let width = 0;
  let height = 0;

  const isMobile = window.matchMedia('(max-width: 700px)').matches;
  let particleCount = isMobile ? PARTICLE_BASE_MOBILE : PARTICLE_BASE_DESKTOP;
  let linkDistance = isMobile ? LINK_DISTANCE_MOBILE : LINK_DISTANCE;

  const particles: Particle[] = [];

  function resize() {
    if (!canvas || !ctx) return;
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const area = width * height;
    const target = isMobile ? PARTICLE_BASE_MOBILE : PARTICLE_BASE_DESKTOP;
    const density = area / (1440 * 900);
    particleCount = Math.round(target * Math.max(0.5, Math.min(1.4, density)));
    linkDistance = isMobile ? LINK_DISTANCE_MOBILE : LINK_DISTANCE;

    particles.length = 0;
    for (let i = 0; i < particleCount; i++) {
      particles.push(spawn());
    }
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

  // Smooth scroll velocity captured from wheel + Lenis scroll events.
  let lastScrollY = window.scrollY;
  let lastScrollTime = performance.now();

  function onWheel() {
    const now = performance.now();
    const dy = window.scrollY - lastScrollY;
    const dt = Math.max(16, now - lastScrollTime);
    scrollVel = dy / dt; // px / ms
    lastScrollY = window.scrollY;
    lastScrollTime = now;
  }

  window.addEventListener('wheel', onWheel, { passive: true });

  // Listen to Lenis scroll if available (smoother velocity capture).
  function attachLenis() {
    const lenis = window.__lenis;
    if (lenis && typeof lenis.on === 'function') {
      lenis.on('scroll', ({ scroll, velocity }: { scroll: number; velocity: number }) => {
        scrollVel = velocity * 1.2; // velocity is px/frame-ish
        lastScrollY = scroll;
      });
    } else {
      setTimeout(attachLenis, 200);
    }
  }
  attachLenis();

  function step() {
    if (!ctx) return;
    rafId = requestAnimationFrame(step);

    // Background trail: leave a semi-transparent fill rather than clearing fully.
    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = theme === 'light'
      ? 'rgba(250, 250, 250, 0.22)'
      : 'rgba(10, 10, 10, 0.22)';
    ctx.fillRect(0, 0, width, height);

    ctx.globalCompositeOperation = 'lighter';

    // Slight scroll-velocity nudge.
    const flow = Math.min(Math.abs(scrollVel) * 0.6, 2.5);
    const flowSign = Math.sign(scrollVel) || 0;

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      // Flow-field from a slow sinusoid based on position.
      const angle =
        Math.sin(p.y * 0.0025 + performance.now() * 0.0001) * 1.6 +
        Math.cos(p.x * 0.003) * 1.6 +
        flowSign * flow * 0.4;
      p.vx += Math.cos(angle) * 0.018;
      p.vy += Math.sin(angle) * 0.018;

      // Cursor interaction.
      const dx = p.x - mouseX;
      const dy = p.y - mouseY;
      const distSq = dx * dx + dy * dy;
      if (distSq < CURSOR_RADIUS * CURSOR_RADIUS && distSq > 1) {
        const dist = Math.sqrt(distSq);
        const force = (1 - dist / CURSOR_RADIUS) * CURSOR_FORCE;
        p.vx += (dx / dist) * force;
        p.vy += (dy / dist) * force;
      }

      // Damp velocity.
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

    // Draw links.
    for (let i = 0; i < particles.length; i++) {
      const a = particles[i];
      for (let j = i + 1; j < particles.length; j++) {
        const b = particles[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < linkDistance) {
          const alpha = (1 - d / linkDistance) * 0.35;
          ctx.strokeStyle = `rgba(${accent.r}, ${accent.g}, ${accent.b}, ${alpha})`;
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    // Draw particles.
    ctx.fillStyle = `rgba(${accent.r}, ${accent.g}, ${accent.b}, 0.8)`;
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }

    // Decay scroll velocity.
    scrollVel *= 0.9;
  }

  function start() {
    refreshThemeColors();
    resize();
    rafId = requestAnimationFrame(step);
  }

  function pause() {
    if (rafId) {
      cancelAnimationFrame(rafId);
      rafId = 0;
    }
  }

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      pause();
    } else if (!rafId) {
      rafId = requestAnimationFrame(step);
    }
  });

  // Refresh colours when the theme toggles.
  const observer = new MutationObserver(() => {
    if (getCurrentTheme() !== theme) {
      refreshThemeColors();
    }
  });
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class', 'data-theme'],
  });

  window.addEventListener('resize', resize, { passive: true });
  window.addEventListener('pointermove', onPointerMove, { passive: true });
  window.addEventListener('pointerleave', onPointerLeave);
  document.addEventListener('mouseleave', onPointerLeave);

  void getStoredTheme; // imported for side-effect (window.toggleTheme) only

  start();
}

export function destroyGenerativeBackground() {
  if (rafId) cancelAnimationFrame(rafId);
  rafId = 0;
  bound = false;
  ctx = null;
  canvas = null;
}
