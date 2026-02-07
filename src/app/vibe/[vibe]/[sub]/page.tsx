import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { Vibe, Setting, Budget } from '@/types/date';
import { filterDates, sortDates, getValidCombinedFilters } from '@/lib/dates';
import {
  ALL_VIBES, ALL_SETTINGS, ALL_BUDGETS,
  vibeLabels, settingLabels, budgetLabels,
} from '@/lib/constants';
import BrowsePage from '@/components/BrowsePage';

export function generateStaticParams() {
  const combos = getValidCombinedFilters();
  return combos.map((c) => ({ vibe: c.vibe, sub: c.sub }));
}

function parseCombo(vibe: string, sub: string) {
  if (!ALL_VIBES.includes(vibe as Vibe)) return null;
  const v = vibe as Vibe;

  if (ALL_SETTINGS.includes(sub as Setting)) {
    return { vibe: v, setting: sub as Setting, budget: undefined };
  }
  if (ALL_BUDGETS.includes(sub as Budget)) {
    return { vibe: v, setting: undefined, budget: sub as Budget };
  }
  return null;
}

function getComboTitle(vibe: Vibe, setting?: Setting, budget?: Budget): string {
  if (setting) {
    return `${vibeLabels[vibe]} ${settingLabels[setting]} Date Ideas`;
  }
  if (budget) {
    return `${budgetLabels[budget]} ${vibeLabels[vibe]} Date Ideas`;
  }
  return `${vibeLabels[vibe]} Date Ideas`;
}

function getComboIntro(vibe: Vibe, setting?: Setting, budget?: Budget): string {
  if (setting) {
    return `Looking for ${vibeLabels[vibe].toLowerCase()} date ideas you can do ${setting === 'home' ? 'at home' : `in a ${settingLabels[setting].toLowerCase()} setting`}? These curated plans combine the best of both — browse and find your next perfect evening.`;
  }
  if (budget) {
    return `${vibeLabels[vibe]} date ideas that fit a ${budgetLabels[budget].toLowerCase()} budget. No compromises on quality — just clever planning and a little creativity.`;
  }
  return `Browse ${vibeLabels[vibe].toLowerCase()} date ideas curated just for you.`;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ vibe: string; sub: string }>;
}): Promise<Metadata> {
  const { vibe, sub } = await params;
  const combo = parseCombo(vibe, sub);
  if (!combo) return {};

  const title = getComboTitle(combo.vibe, combo.setting, combo.budget);
  const description = getComboIntro(combo.vibe, combo.setting, combo.budget);

  return {
    title: `${title} | datenight.cards`,
    description: description.slice(0, 160),
    alternates: { canonical: `/vibe/${vibe}/${sub}` },
  };
}

export default async function CombinedFilterPage({
  params,
}: {
  params: Promise<{ vibe: string; sub: string }>;
}) {
  const { vibe, sub } = await params;
  const combo = parseCombo(vibe, sub);
  if (!combo) notFound();

  const dates = sortDates(
    filterDates({
      vibe: combo.vibe,
      setting: combo.setting,
      budget: combo.budget,
    }),
    'popular'
  );

  if (dates.length < 4) notFound();

  const title = getComboTitle(combo.vibe, combo.setting, combo.budget);
  const intro = getComboIntro(combo.vibe, combo.setting, combo.budget);

  return (
    <BrowsePage
      title={title}
      intro={intro}
      dates={dates}
      breadcrumbs={[
        { label: `${vibeLabels[combo.vibe]} Date Ideas`, href: `/vibe/${combo.vibe}` },
        { label: title },
      ]}
    />
  );
}
