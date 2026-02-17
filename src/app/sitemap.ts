import type { MetadataRoute } from 'next';
import { getAllDates, getValidCombinedFilters } from '@/lib/dates';
import { ALL_VIBES, ALL_SETTINGS, ALL_BUDGETS, ALL_TYPES, ALL_SEASONS } from '@/lib/constants';

const BASE_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : 'https://date-night-plan.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE_URL}/popular`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/new`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
  ];

  // Individual date pages
  const datePages: MetadataRoute.Sitemap = getAllDates().map((d) => ({
    url: `${BASE_URL}/date/${d.id}`,
    lastModified: d.createdAt,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  // Vibe pages
  const vibePages: MetadataRoute.Sitemap = ALL_VIBES.map((v) => ({
    url: `${BASE_URL}/vibe/${v}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Setting pages
  const settingPages: MetadataRoute.Sitemap = ALL_SETTINGS.map((s) => ({
    url: `${BASE_URL}/setting/${s}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Budget pages
  const budgetPages: MetadataRoute.Sitemap = ALL_BUDGETS.map((b) => ({
    url: `${BASE_URL}/budget/${encodeURIComponent(b)}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Type pages
  const typePages: MetadataRoute.Sitemap = ALL_TYPES.map((t) => ({
    url: `${BASE_URL}/type/${t}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Season pages
  const seasonPages: MetadataRoute.Sitemap = ALL_SEASONS.map((s) => ({
    url: `${BASE_URL}/season/${s}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Combined filter pages
  const comboPages: MetadataRoute.Sitemap = getValidCombinedFilters().map((c) => ({
    url: `${BASE_URL}/vibe/${c.vibe}/${encodeURIComponent(c.sub)}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...datePages,
    ...vibePages,
    ...settingPages,
    ...budgetPages,
    ...typePages,
    ...seasonPages,
    ...comboPages,
  ];
}
