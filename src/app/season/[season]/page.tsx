import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { Season } from '@/types/date';
import { filterDates, sortDates } from '@/lib/dates';
import { ALL_SEASONS, seasonPageTitles, seasonIntros } from '@/lib/constants';
import { collectionStructuredData } from '@/lib/seo';
import BrowsePage from '@/components/BrowsePage';

export function generateStaticParams() {
  return ALL_SEASONS.map((s) => ({ season: s }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ season: string }>;
}): Promise<Metadata> {
  const { season } = await params;
  if (!ALL_SEASONS.includes(season as Season)) return {};
  const s = season as Season;

  return {
    title: `${seasonPageTitles[s]} | DateNightPlan`,
    description: seasonIntros[s].slice(0, 160),
    alternates: { canonical: `/season/${s}` },
  };
}

export default async function SeasonPage({
  params,
}: {
  params: Promise<{ season: string }>;
}) {
  const { season } = await params;
  if (!ALL_SEASONS.includes(season as Season)) notFound();
  const s = season as Season;

  const dates = sortDates(filterDates({ season: s }), 'popular');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            collectionStructuredData(seasonPageTitles[s], seasonIntros[s], `/season/${s}`)
          ),
        }}
      />
      <BrowsePage
        title={seasonPageTitles[s]}
        intro={seasonIntros[s]}
        dates={dates}
        breadcrumbs={[{ label: seasonPageTitles[s] }]}
      />
    </>
  );
}
