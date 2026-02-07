import type { DateIdea, Vibe, Budget, Setting, DateType, Season, SortOption } from '@/types/date';
import datesData from '../../data/dates.json';

const dates: DateIdea[] = datesData as DateIdea[];

export function getAllDates(): DateIdea[] {
  return dates;
}

export function getDateById(id: string): DateIdea | undefined {
  return dates.find((d) => d.id === id);
}

export interface FilterOptions {
  vibe?: Vibe;
  setting?: Setting;
  budget?: Budget;
  type?: DateType;
  season?: Season;
}

export function filterDates(options: FilterOptions): DateIdea[] {
  let result = [...dates];

  if (options.vibe) {
    result = result.filter((d) => d.vibe.includes(options.vibe!));
  }
  if (options.setting) {
    result = result.filter((d) => d.setting === options.setting);
  }
  if (options.budget) {
    result = result.filter((d) => d.budget === options.budget);
  }
  if (options.type) {
    result = result.filter((d) => d.type.includes(options.type!));
  }
  if (options.season) {
    result = result.filter(
      (d) => d.season.includes(options.season!) || d.season.includes('any')
    );
  }

  return result;
}

export function sortDates(list: DateIdea[], sort: SortOption): DateIdea[] {
  const sorted = [...list];
  switch (sort) {
    case 'popular':
      return sorted.sort((a, b) => b.likes - a.likes);
    case 'new':
      return sorted.sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    case 'random':
      return sorted.sort(() => Math.random() - 0.5);
    default:
      return sorted;
  }
}

export function getSimilarDates(date: DateIdea, count = 4): DateIdea[] {
  const others = dates.filter((d) => d.id !== date.id);

  const scored = others.map((d) => {
    let score = 0;
    // Shared vibes (most important)
    const sharedVibes = d.vibe.filter((v) => date.vibe.includes(v)).length;
    score += sharedVibes * 3;
    // Same setting
    if (d.setting === date.setting) score += 2;
    // Same budget
    if (d.budget === date.budget) score += 1;
    // Shared types
    const sharedTypes = d.type.filter((t) => date.type.includes(t)).length;
    score += sharedTypes;
    return { date: d, score };
  });

  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, count)
    .map((s) => s.date);
}

export function getRandomDate(exclude?: string[], fromDates?: DateIdea[]): DateIdea {
  const pool = (fromDates || dates).filter((d) => !exclude?.includes(d.id));
  return pool[Math.floor(Math.random() * pool.length)];
}

interface CombinedFilter {
  vibe: Vibe;
  sub: string;
  subType: 'setting' | 'budget';
  count: number;
}

export function getValidCombinedFilters(): CombinedFilter[] {
  const combos: CombinedFilter[] = [];
  const vibes: Vibe[] = [
    'romantic', 'adventurous', 'chill', 'creative', 'funny',
    'intellectual', 'spontaneous', 'nostalgic', 'cozy', 'active',
    'luxe', 'quirky', 'wholesome', 'sensual', 'competitive',
  ];
  const settings: Setting[] = ['city', 'home', 'outdoor', 'nature'];
  const budgets: Budget[] = ['free', '$', '$$', '$$$'];

  for (const vibe of vibes) {
    for (const setting of settings) {
      const matched = dates.filter(
        (d) => d.vibe.includes(vibe) && d.setting === setting
      );
      if (matched.length >= 4) {
        combos.push({ vibe, sub: setting, subType: 'setting', count: matched.length });
      }
    }
    for (const budget of budgets) {
      const matched = dates.filter(
        (d) => d.vibe.includes(vibe) && d.budget === budget
      );
      if (matched.length >= 4) {
        combos.push({ vibe, sub: budget, subType: 'budget', count: matched.length });
      }
    }
  }

  return combos;
}
