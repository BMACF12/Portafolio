import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { prefersReducedMotion } from '../utils/helpers';

gsap.registerPlugin(ScrollTrigger, Draggable);

interface NodeData {
  el: SVGGElement;
  index: number;
  name: string;
  slug: string;
  baseX: number;
  baseY: number;
  floatTween?: gsap.core.Tween;
  draggable?: Draggable;
}

const CLICK_THRESHOLD_PX = 6;
let root: HTMLElement | null = null;
let edges: SVGLineElement[] = [];
let nodes: NodeData[] = [];
let triggered = false;
let edgesLayer: SVGGElement | null = null;

function readPosition(el: SVGGElement) {
  const t = el.transform.baseVal.consolidate();
  if (t) return { x: t.matrix.e, y: t.matrix.f };
  const attr = el.getAttribute('transform') || '';
  const match = attr.match(/translate\(([-\d.]+)[ ,]+([-\d.]+)\)/);
  return {
    x: match ? parseFloat(match[1]) : 0,
    y: match ? parseFloat(match[2]) : 0,
  };
}

function updateEdge(edge: SVGLineElement, from: NodeData, to: NodeData) {
  const fromPos = readPosition(from.el);
  const toPos = readPosition(to.el);
  edge.setAttribute('x1', String(fromPos.x));
  edge.setAttribute('y1', String(fromPos.y));
  edge.setAttribute('x2', String(toPos.x));
  edge.setAttribute('y2', String(toPos.y));
}

function refreshAllEdges() {
  edges.forEach((edge) => {
    const fromIdx = Number(edge.dataset.edgeFrom);
    const toIdx = Number(edge.dataset.edgeTo);
    const from = nodes[fromIdx];
    const to = nodes[toIdx];
    if (from && to) updateEdge(edge, from, to);
  });
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

export function initConstellation() {
  root = document.querySelector<HTMLElement>('[data-constellation]');
  if (!root || root.dataset.ready === 'true') return;
  root.dataset.ready = 'true';

  const edgeEls = root.querySelectorAll<SVGLineElement>('[data-edge-from]');
  const nodeEls = [...root.querySelectorAll<SVGGElement>('[data-skill-node]')];
  edges = [...edgeEls];
  edgesLayer = root.querySelector<SVGGElement>('.constellation-edges');

  nodes = nodeEls.map((el) => {
    const pos = readPosition(el);
    return {
      el,
      index: Number(el.dataset.nodeIndex || 0),
      name: el.dataset.tech || '',
      slug: el.dataset.techSlug || '',
      baseX: pos.x,
      baseY: pos.y,
    };
  });

  if (prefersReducedMotion()) {
    root.classList.add('is-visible');
    nodes.forEach((n) => n.el.style.opacity = '1');
    edges.forEach((e) => e.setAttribute('opacity', '0.55'));
    bindAccessibility();
    return;
  }

  gsap.set(edges, { opacity: 0, strokeDashoffset: 90 });
  gsap.set(nodeEls, { opacity: 0, scale: 0.4, transformOrigin: 'center center' });

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

  function reveal() {
    if (triggered) return;
    triggered = true;

    const timeline = gsap.timeline();
    timeline.to(nodeEls, {
      opacity: 1,
      scale: 1,
      duration: 0.65,
      stagger: 0.055,
      ease: 'back.out(1.7)',
      onComplete: () => enableDraggables(),
    });
    timeline.to(
      edges,
      { opacity: 0.55, strokeDashoffset: 0, duration: 1.1, stagger: 0.045, ease: 'power2.out' },
      '-=0.8'
    );
    timeline.add(() => {
      root?.classList.add('is-visible');
      startFloating();
    });
  }

  function enableDraggables() {
    const svg = root!.querySelector<SVGElement>('.constellation-svg');
    nodes.forEach((node) => {
      if (node.draggable) return;
      let clickMoved = 0;

      node.draggable = Draggable.create(node.el, {
        type: 'x,y',
        bounds: svg as Element,
        inertia: false,
        minimumMovement: 4,
        onPressInit() {
          clickMoved = 0;
          node.floatTween?.pause();
          node.el.classList.add('is-dragging');
          edgesLayer?.classList.add('is-dragging');
        },
        onDrag() {
          clickMoved += Math.abs(this.deltaX) + Math.abs(this.deltaY);
          refreshAllEdges();
        },
        onRelease() {
          node.el.classList.remove('is-dragging');
          edgesLayer?.classList.remove('is-dragging');
          if (clickMoved < CLICK_THRESHOLD_PX && node.slug) {
            navigateToSkill(node.slug, node.name);
          } else {
            // After drag: snap to new base position so float continues from there.
            const pos = readPosition(node.el);
            node.baseX = pos.x;
            node.baseY = pos.y;
            node.floatTween?.resume();
          }
        },
      })[0];
    });
  }

  function startFloating() {
    nodes.forEach((node, i) => {
      if (node.floatTween) return;
      const phase = i * 0.7;
      const xRange = 7 + (i % 3) * 4;
      const yRange = 9 + ((i + 1) % 3) * 4;
      const duration = 5 + (i % 2);

      node.floatTween = gsap.to(node.el, {
        attr: {},
        duration,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        modifiers: {
          transform: gsap.utils.unitize((_val) => {
            const t = (performance.now() / 1000) + phase;
            const dx = Math.sin(t * 0.6) * xRange;
            const dy = Math.cos(t * 0.5) * yRange;
            return `translate(${node.baseX + dx} ${node.baseY + dy})`;
          }),
        },
        onUpdate: () => refreshAllEdges(),
      });
    });
  }

  function bindAccessibility() {
    nodes.forEach((node) => {
      if (node.el.dataset.accBound === 'true') return;
      node.el.dataset.accBound = 'true';

      const activate = () => {
        const index = node.index;
        edges.forEach((edge) => {
          const from = Number(edge.dataset.edgeFrom);
          const to = Number(edge.dataset.edgeTo);
          edge.classList.toggle('is-related', from === index || to === index);
        });
        node.el.classList.add('is-focused');
      };
      const deactivate = () => {
        edges.forEach((edge) => edge.classList.remove('is-related'));
        node.el.classList.remove('is-focused');
      };

      node.el.addEventListener('pointerenter', activate);
      node.el.addEventListener('pointerleave', deactivate);
      node.el.addEventListener('focus', activate);
      node.el.addEventListener('blur', deactivate);

      node.el.addEventListener('keydown', (event: KeyboardEvent) => {
        if ((event.key === 'Enter' || event.key === ' ') && node.slug) {
          event.preventDefault();
          navigateToSkill(node.slug, node.name);
        }
      });
    });
  }
}
