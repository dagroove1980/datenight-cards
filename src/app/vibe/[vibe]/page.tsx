import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { Vibe } from '@/types/date';
import { filterDates, sortDates } from '@/lib/dates';
import { ALL_VIBES, vibeLabels, vibePageTitles, vibeIntros } from '@/lib/constants';
import { collectionStructuredData } from '@/lib/seo';
import BrowsePage from '@/components/BrowsePage';

export function generateStaticParams() {
  return ALL_VIBES.map((v) => ({ vibe: v }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ vibe: string }>;
}): Promise<Metadata> {
  const { vibe } = await params;
  if (!ALL_VIBES.includes(vibe as Vibe)) return {};
  const v = vibe as Vibe;

  return {
    title: `${vibePageTitles[v]} | datenight.cards`,
    description: vibeIntros[v].slice(0, 160),
    alternates: { canonical: `/vibe/${v}` },
  };
}

export default async function VibePage({
  params,
}: {
  params: Promise<{ vibe: string }>;
}) {
  const { vibe } = await params;
  if (!ALL_VIBES.includes(vibe as Vibe)) notFound();
  const v = vibe as Vibe;

  const dates = sortDates(filterDates({ vibe: v }), 'popular');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            collectionStructuredData(vibePageTitles[v], vibeIntros[v], `/vibe/${v}`)
          ),
        }}
      />
      <BrowsePage
        title={vibePageTitles[v]}
        intro={vibeIntros[v]}
        dates={dates}
        breadcrumbs={[{ label: vibePageTitles[v] }]}
      />
    </>
  );
}
