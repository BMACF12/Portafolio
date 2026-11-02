import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { prefersReducedMotion } from '../utils/helpers';
import { frameIntervalForTier } from '../utils/performance';

gsap.registerPlugin(ScrollTrigger);

interface Node {
  el: SVGGElement;
  index: number;
  name: string;
  slug: string;
  baseX: number;
  baseY: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  phase: number;
  floatAmpX: number;
  floatAmpY: number;
  dragging: boolean;
  pointerOffsetX: number;
  pointerOffsetY: number;
  pointerId: number | null;
  pressStartX: number;
  pressStartY: number;
  pressMoved: number;
}

const CLICK_THRESHOLD_PX = 6;
const SPRING_K = 0.085;
const DAMPING = 0.78;
const REPULSE_DIST = 95;
const REPULSE_STRENGTH = 0.55;

let root: HTMLElement | null = null;
let svg: SVGSVGElement | null = null;
let edges: SVGLineElement[] = [];
let nodes: Node[] = [];
let edgesLayer: SVGGElement | null = null;
let revealed = false;
let tickerId: number | null = null;
let activeIndex = -1;
let sectionVisible = true;
let visibilityObserver: IntersectionObserver | null = null;
let visibilityBound = false;
let mobileBound = false;
let lastFrame = 0;
const frameInterval = frameIntervalForTier();
const mobileQuery = typeof window !== 'undefined' ? window.matchMedia('(max-width: 700px)') : null;

function stopTicker() {
  if (tickerId !== null) {
    cancelAnimationFrame(tickerId);
    tickerId = null;
  }
}

function startTicker() {
  if (
    tickerId !== null ||
    !revealed ||
    !sectionVisible ||
    document.hidden ||
    prefersReducedMotion() ||
    mobileQuery?.matches
  ) {
    return;
  }
  lastFrame = 0;
  tickerId = requestAnimationFrame(step);
}

function getSvgPoint(clientX: number, clientY: number) {
  if (!svg) return { x: 0, y: 0 };
  const ctm = svg.getScreenCTM();
  if (!ctm) return { x: 0, y: 0 };
  const inv = ctm.inverse();
  return {
    x: clientX * inv.a + clientY * inv.c + inv.e,
    y: clientX * inv.b + clientY * inv.d + inv.f,
  };
}

function updateEdge(edge: SVGLineElement, from: Node, to: Node) {
  edge.setAttribute('x1', String(from.x));
  edge.setAttribute('y1', String(from.y));
  edge.setAttribute('x2', String(to.x));
  edge.setAttribute('y2', String(to.y));
}

function refreshAllEdges() {
  for (const edge of edges) {
    const from = nodes[Number(edge.dataset.edgeFrom)];
    const to = nodes[Number(edge.dataset.edgeTo)];
    if (from && to) updateEdge(edge, from, to);
  }
}

function setNodeTransform(node: Node) {
  node.el.setAttribute('transform', `translate(${node.x} ${node.y})`);
}

function navigateToSkill(slug: string, name: string) {
  const locale = document.documentElement.lang.startsWith('en') ? 'en' : 'es';
  const base = locale === 'en' ? '/en' : '';
  const url = `${base}/projects?tech=${encodeURIComponent(slug)}`;
  try {
    sessionStorage.setItem('bf-portfolio-tech-filter', name);
  } catch {
    /* ignore */
  }
  window.location.href = url;
}

function step(time: number) {
  tickerId = null;
  if (!revealed || !sectionVisible || document.hidden) return;

  if (frameInterval && lastFrame && time - lastFrame < frameInterval) {
    tickerId = requestAnimationFrame(step);
    return;
  }
  lastFrame = time;

  if (!nodes.length) {
    tickerId = requestAnimationFrame(step);
    return;
  }
  const t = time / 1000;

  // Float targets + spring forces
  for (const node of nodes) {
    const targetX = node.baseX + Math.sin(t * 0.6 + node.phase) * node.floatAmpX;
    const targetY = node.baseY + Math.cos(t * 0.5 + node.phase) * node.floatAmpY;

    if (node.dragging) continue;

    node.vx += (targetX - node.x) * SPRING_K;
    node.vy += (targetY - node.y) * SPRING_K;
  }

  // Pairwise repulsion (12 nodes -> 66 pairs)
  for (let i = 0; i < nodes.length; i++) {
    const a = nodes[i];
    for (let j = i + 1; j < nodes.length; j++) {
      const b = nodes[j];
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const distSq = dx * dx + dy * dy;
      if (distSq < REPULSE_DIST * REPULSE_DIST && distSq > 0.01) {
        const dist = Math.sqrt(distSq);
        const overlap = (REPULSE_DIST - dist) / REPULSE_DIST;
        const force = overlap * REPULSE_STRENGTH;
        const nx = dx / dist;
        const ny = dy / dist;

        // The dragged node anchors strongly; the other pushes back.
        if (a.dragging && !b.dragging) {
          b.vx += nx * force * 1.4;
          b.vy += ny * force * 1.4;
        } else if (b.dragging && !a.dragging) {
          a.vx -= nx * force * 1.4;
          a.vy -= ny * force * 1.4;
        } else if (!a.dragging && !b.dragging) {
          a.vx -= nx * force * 0.5;
          a.vy -= ny * force * 0.5;
          b.vx += nx * force * 0.5;
          b.vy += ny * force * 0.5;
        }
      }
    }
  }

  // Integrate + damp + commit
  for (const node of nodes) {
    if (node.dragging) continue;
    node.vx *= DAMPING;
    node.vy *= DAMPING;
    node.x += node.vx;
    node.y += node.vy;
    setNodeTransform(node);
  }

  refreshAllEdges();
  tickerId = requestAnimationFrame(step);
}

function bindNodeInteractions(node: Node) {
  if (node.el.dataset.accBound === 'true') return;
  node.el.dataset.accBound = 'true';

  const activate = () => {
    activeIndex = node.index;
    edges.forEach((edge) => {
      const from = Number(edge.dataset.edgeFrom);
      const to = Number(edge.dataset.edgeTo);
      edge.classList.toggle('is-related', from === activeIndex || to === activeIndex);
    });
    node.el.classList.add('is-focused');
  };
  const deactivate = () => {
    edges.forEach((edge) => edge.classList.remove('is-related'));
    node.el.classList.remove('is-focused');
    activeIndex = -1;
  };

  node.el.addEventListener('pointerenter', activate);
  node.el.addEventListener('pointerleave', deactivate);
  node.el.addEventListener('focus', activate);
  node.el.addEventListener('blur', deactivate);

  // Pointer-based drag
  node.el.addEventListener('pointerdown', (event: PointerEvent) => {
    if (prefersReducedMotion() || mobileQuery?.matches) return;
    if (event.button !== 0) return;
    event.preventDefault();
    node.pointerId = event.pointerId;
    node.dragging = true;
    node.pressStartX = event.clientX;
    node.pressStartY = event.clientY;
    node.pressMoved = 0;

    const pt = getSvgPoint(event.clientX, event.clientY);
    node.pointerOffsetX = node.x - pt.x;
    node.pointerOffsetY = node.y - pt.y;
    node.vx = 0;
    node.vy = 0;
    node.el.classList.add('is-dragging');
    edgesLayer?.classList.add('is-dragging');
    node.el.setPointerCapture?.(event.pointerId);
  });

  node.el.addEventListener('pointermove', (event: PointerEvent) => {
    if (!node.dragging || event.pointerId !== node.pointerId) return;
    event.preventDefault();
    const dx = event.clientX - node.pressStartX;
    const dy = event.clientY - node.pressStartY;
    node.pressMoved = Math.max(node.pressMoved, Math.abs(dx) + Math.abs(dy));

    const pt = getSvgPoint(event.clientX, event.clientY);
    const targetX = pt.x + node.pointerOffsetX;
    const targetY = pt.y + node.pointerOffsetY;

    // Elastic lag: ease toward pointer
    node.vx = (targetX - node.x) * 0.55;
    node.vy = (targetY - node.y) * 0.55;
    node.x += node.vx;
    node.y += node.vy;
    setNodeTransform(node);
    refreshAllEdges();
  });

  function release(event: PointerEvent) {
    if (!node.dragging || event.pointerId !== node.pointerId) return;
    node.dragging = false;
    node.el.classList.remove('is-dragging');
    edgesLayer?.classList.remove('is-dragging');
    node.el.releasePointerCapture?.(event.pointerId);
    node.pointerId = null;

    if (node.pressMoved < CLICK_THRESHOLD_PX && node.slug) {
      navigateToSkill(node.slug, node.name);
    } else {
      // Transfer some velocity so the node flies back with momentum.
      node.vx *= 0.6;
      node.vy *= 0.6;
    }
  }

  node.el.addEventListener('pointerup', release);
  node.el.addEventListener('pointercancel', release);
  node.el.addEventListener('lostpointercapture', () => {
    node.dragging = false;
    node.el.classList.remove('is-dragging');
    edgesLayer?.classList.remove('is-dragging');
  });

  node.el.addEventListener('keydown', (event: KeyboardEvent) => {
    if ((event.key === 'Enter' || event.key === ' ') && node.slug) {
      event.preventDefault();
      navigateToSkill(node.slug, node.name);
    }
  });
}

function reveal() {
  if (revealed) return;
  revealed = true;

  if (prefersReducedMotion() || mobileQuery?.matches) {
    gsap.set(nodes.map((node) => node.el), { opacity: 1, scale: 1 });
    edges.forEach((edge) => edge.setAttribute('opacity', '0.55'));
    root?.classList.add('is-visible');
    if (!mobileQuery?.matches) nodes.forEach(bindNodeInteractions);
    return;
  }

  const timeline = gsap.timeline();
  timeline.to(
    nodes.map((n) => n.el),
    {
      opacity: 1,
      scale: 1,
      duration: 0.65,
      stagger: 0.055,
      ease: 'back.out(1.7)',
      onStart() {
        nodes.forEach((n) => n.el.style.transformOrigin && n.el.style.removeProperty('transform-origin'));
        nodes.forEach((n) => (n.el.style.transformBox = 'fill-box'));
      },
    }
  );
  timeline.to(
    edges,
    { opacity: 0.55, strokeDashoffset: 0, duration: 1.1, stagger: 0.045, ease: 'power2.out' },
    '-=0.8'
  );
  timeline.add(() => {
    root?.classList.add('is-visible');
    nodes.forEach(bindNodeInteractions);
    startTicker();
  });
}

export function initConstellation() {
  const newRoot = document.querySelector<HTMLElement>('[data-constellation]');
  if (!newRoot) return;

  // If this is a fresh root after ClientRouter navigation, the old ticker
  // would otherwise keep running against detached nodes. Cancel it and
  // reset module-level flags so reveal() runs against the new DOM.
  if (root !== newRoot) {
    stopTicker();
    visibilityObserver?.disconnect();
    visibilityObserver = null;
    nodes = [];
    edges = [];
    revealed = false;
    activeIndex = -1;
    sectionVisible = true;
  }

  if (newRoot.dataset.ready === 'true') return;
  newRoot.dataset.ready = 'true';
  root = newRoot;

  svg = root.querySelector<SVGSVGElement>('.constellation-svg');
  const edgeEls = root.querySelectorAll<SVGLineElement>('[data-edge-from]');
  const nodeEls = [...root.querySelectorAll<SVGGElement>('[data-skill-node]')];
  edges = [...edgeEls];
  edgesLayer = root.querySelector<SVGGElement>('.constellation-edges');

  nodes = nodeEls.map((el, i) => {
    const transform = el.getAttribute('transform') || '';
    const match = transform.match(/translate\(([-\d.]+)[ ,]+([-\d.]+)\)/);
    const baseX = match ? parseFloat(match[1]) : 0;
    const baseY = match ? parseFloat(match[2]) : 0;
    return {
      el,
      index: Number(el.dataset.nodeIndex || i),
      name: el.dataset.tech || '',
      slug: el.dataset.techSlug || '',
      baseX,
      baseY,
      x: baseX,
      y: baseY,
      vx: 0,
      vy: 0,
      phase: i * 0.7,
      floatAmpX: 6 + (i % 3) * 3,
      floatAmpY: 8 + ((i + 1) % 3) * 3,
      dragging: false,
      pointerOffsetX: 0,
      pointerOffsetY: 0,
      pointerId: null,
      pressStartX: 0,
      pressStartY: 0,
      pressMoved: 0,
    };
  });

  if (!prefersReducedMotion()) {
    gsap.set(edges, { opacity: 0, strokeDashoffset: 90 });
    gsap.set(nodeEls, {
      opacity: 0,
      scale: 0.4,
      transformOrigin: 'center center',
      transformBox: 'fill-box',
    });
  }

  visibilityObserver = new IntersectionObserver(
    (entries) => {
      sectionVisible = entries[0]?.isIntersecting ?? true;
      if (sectionVisible) startTicker();
      else stopTicker();
    },
    { rootMargin: '200px 0px' }
  );
  visibilityObserver.observe(root);

  if (!visibilityBound) {
    visibilityBound = true;
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) stopTicker();
      else startTicker();
    });
  }

  if (!mobileBound && mobileQuery) {
    mobileBound = true;
    mobileQuery.addEventListener('change', () => {
      if (mobileQuery.matches) {
        stopTicker();
      } else if (revealed) {
        nodes.forEach(bindNodeInteractions);
        startTicker();
      }
    });
  }

  ScrollTrigger.create({
    trigger: root,
    start: 'top 78%',
    once: true,
    onEnter: () => reveal(),
  });

  const rect = root.getBoundingClientRect();
  if (rect.top < window.innerHeight * 0.78) {
    reveal();
  }
}
