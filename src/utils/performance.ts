export type PerformanceTier = 'high' | 'medium' | 'low';

export function getPerformanceTier(): PerformanceTier {
  if (typeof document === 'undefined') return 'high';
  const tier = document.documentElement.dataset.perfTier;
  return tier === 'low' || tier === 'medium' ? tier : 'high';
}

export function isLowTier(): boolean {
  return getPerformanceTier() === 'low';
}

export function frameIntervalForTier(tier = getPerformanceTier()): number {
  if (tier === 'low') return 1000 / 30;
  if (tier === 'medium') return 1000 / 40;
  return 0;
}
