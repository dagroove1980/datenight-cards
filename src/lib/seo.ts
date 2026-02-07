import type { DateIdea } from '@/types/date';
import { SITE_URL, vibeLabels, settingLabels, budgetLabels } from './constants';

export function dateMetaTitle(date: DateIdea): string {
  const vibes = date.vibe.map((v) => vibeLabels[v]).join(' & ');
  return `${date.name} — ${vibes} Date Idea`;
}

export function dateMetaDescription(date: DateIdea): string {
  const vibes = date.vibe.map((v) => vibeLabels[v]).join(', ');
  const firstStep = date.steps[0]?.text || '';
  const summary = firstStep.length > 80 ? firstStep.slice(0, 80) + '...' : firstStep;
  return `Plan your perfect ${vibes.toLowerCase()} date: ${summary} A ${date.duration} ${settingLabels[date.setting].toLowerCase()} date for ${budgetLabels[date.budget]}. Includes a conversation starter.`;
}

export function dateStructuredData(date: DateIdea) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: date.name,
    description: dateMetaDescription(date),
    totalTime: `PT${date.duration.replace('hrs', 'H').replace('-', 'H')}`,
    step: date.steps.map((step, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: step.label,
      text: step.text,
    })),
    keywords: [
      ...date.vibe,
      date.setting,
      date.budget,
      ...date.type,
      'date idea',
      'date night',
    ].join(', '),
  };
}

export function collectionStructuredData(title: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: title,
    description,
    url: `${SITE_URL}${url}`,
  };
}

export function breadcrumbStructuredData(
  items: { name: string; url: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}
