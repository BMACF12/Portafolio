import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { prefersReducedMotion } from '../utils/helpers';

gsap.registerPlugin(ScrollTrigger);

export function initConstellation() {
  const root = document.querySelector<HTMLElement>('[data-constellation]');
  if (!root || root.dataset.ready) return;
  root.dataset.ready = 'true';

  const edges = root.querySelectorAll<SVGLineElement>('[data-edge-from]');
  const nodes = [...root.querySelectorAll<SVGGElement>('[data-skill-node]')];
  if (prefersReducedMotion()) {
    root.classList.add('is-visible');
    return;
  }

  gsap.set(edges, { opacity: 0, strokeDashoffset: 90 });
  gsap.set(nodes, { opacity: 0, scale: 0.4, transformOrigin: 'center center' });

  ScrollTrigger.create({
    trigger: root,
    start: 'top 78%',
    once: true,
    onEnter: () => {
      const timeline = gsap.timeline();
      timeline.to(nodes, { opacity: 1, scale: 1, duration: 0.65, stagger: 0.055, ease: 'back.out(1.7)' });
      timeline.to(edges, { opacity: 0.55, strokeDashoffset: 0, duration: 1.1, stagger: 0.045, ease: 'power2.out' }, '-=0.8');
      timeline.add(() => root.classList.add('is-visible'));
    },
  });

  nodes.forEach((node) => {
    const index = node.dataset.nodeIndex || '';
    const related = [...edges].filter((edge) => edge.dataset.edgeFrom === index || edge.dataset.edgeTo === index);
    const activate = () => {
      related.forEach((edge) => edge.classList.add('is-related'));
      node.classList.add('is-focused');
    };
    const deactivate = () => {
      related.forEach((edge) => edge.classList.remove('is-related'));
      node.classList.remove('is-focused');
    };
    node.addEventListener('pointerenter', activate);
    node.addEventListener('pointerleave', deactivate);
    node.addEventListener('focus', activate);
    node.addEventListener('blur', deactivate);
  });
}
