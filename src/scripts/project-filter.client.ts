/**
 * Filters project cards on /projects (and /en/projects) by ?tech= query param
 * (or sessionStorage value set when navigating from a skill node). Shows an
 * active filter chip with a "clear" button and an empty state when no matches.
 */

interface FilterStrings {
  emptyTitle: string;
  emptyBody: string;
  clear: string;
  filteredBy: string;
}

export function initProjectFilter(strings: FilterStrings) {
  const grid = document.querySelector<HTMLElement>('.projects-grid');
  if (!grid) return;
  if (grid.dataset.bound === 'true') return;
  grid.dataset.bound = 'true';

  const cards = [...grid.querySelectorAll<HTMLAnchorElement>('.project-card')];
  if (!cards.length) return;

  const params = new URLSearchParams(window.location.search);
  let active = (params.get('tech') || '').trim();
  if (!active) {
    try {
      const stored = sessionStorage.getItem('bf-portfolio-tech-filter');
      if (stored) {
        active = stored.toLowerCase().replace(/\s+/g, '-');
        try { sessionStorage.removeItem('bf-portfolio-tech-filter'); } catch { /* ignore */ }
      }
    } catch {
      /* ignore */
    }
  }

  const chipHost = document.querySelector<HTMLElement>('[data-filter-chip-host]');
  const emptyEl = document.querySelector<HTMLElement>('[data-filter-empty]');

  function applyFilter(value: string) {
    const empty = !value;
    cards.forEach((card) => {
      const tags = (card.dataset.tags || '').toLowerCase().split('|');
      const matches = empty || tags.includes(value.toLowerCase());
      card.classList.toggle('is-hidden', !matches);
    });
    if (emptyEl) {
      const visibleCount = cards.filter((c) => !c.classList.contains('is-hidden')).length;
      emptyEl.hidden = visibleCount > 0;
    }
    if (chipHost) {
      chipHost.innerHTML = '';
      if (!empty) {
        const display = displayName(value);
        const chip = document.createElement('span');
        chip.className = 'filter-chip';
        chip.innerHTML = `${strings.filteredBy} <strong>${display}</strong><button type="button" class="filter-clear" aria-label="${strings.clear}">×</button>`;
        chip.querySelector('button')?.addEventListener('click', () => {
          const url = new URL(window.location.href);
          url.searchParams.delete('tech');
          history.replaceState(null, '', url.toString());
          applyFilter('');
        });
        chipHost.appendChild(chip);
      }
    }
  }

  applyFilter(active);
}

function displayName(slug: string) {
  const skillNodes = document.querySelectorAll<HTMLElement>('[data-skill-node]');
  for (const node of skillNodes) {
    if ((node.dataset.techSlug || '').toLowerCase() === slug.toLowerCase()) {
      return node.dataset.tech || slug;
    }
  }
  return slug;
}
