import type { Vibe, Budget } from '@/types/date';

export const vibeColors: Record<Vibe, { bg: string; text: string }> = {
  romantic: { bg: '#FFF0F3', text: '#C2185B' },
  adventurous: { bg: '#FFF3E0', text: '#E65100' },
  chill: { bg: '#E8F5E9', text: '#2E7D32' },
  creative: { bg: '#F3E5F5', text: '#7B1FA2' },
  funny: { bg: '#FFF8E1', text: '#F57F17' },
  intellectual: { bg: '#E8EAF6', text: '#283593' },
  spontaneous: { bg: '#FFF3E0', text: '#EF6C00' },
  nostalgic: { bg: '#FBE9E7', text: '#BF360C' },
  cozy: { bg: '#FFF8E1', text: '#8D6E63' },
  active: { bg: '#E0F2F1', text: '#00695C' },
  luxe: { bg: '#F3E5F5', text: '#6A1B9A' },
  quirky: { bg: '#FCE4EC', text: '#AD1457' },
  wholesome: { bg: '#E8F5E9', text: '#388E3C' },
  sensual: { bg: '#FCE4EC', text: '#C2185B' },
  competitive: { bg: '#E8EAF6', text: '#1565C0' },
};

export const budgetColors: Record<Budget, { bg: string; text: string }> = {
  free: { bg: '#E8F5E9', text: '#2E7D32' },
  $: { bg: '#FFF8E1', text: '#F57F17' },
  $$: { bg: '#FFF3E0', text: '#E65100' },
  $$$: { bg: '#FFEBEE', text: '#C62828' },
};

export function hexToRgba(hex: string, opacity: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}
