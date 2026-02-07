import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { DateType } from '@/types/date';
import { filterDates, sortDates } from '@/lib/dates';
import { ALL_TYPES, typePageTitles, typeIntros } from '@/lib/constants';
import { collectionStructuredData } from '@/lib/seo';
import BrowsePage from '@/components/BrowsePage';

export function generateStaticParams() {
  return ALL_TYPES.map((t) => ({ type: t }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ type: string }>;
}): Promise<Metadata> {
  const { type } = await params;
  if (!ALL_TYPES.includes(type as DateType)) return {};
  const t = type as DateType;

  return {
    title: `${typePageTitles[t]} | datenight.cards`,
    description: typeIntros[t].slice(0, 160),
    alternates: { canonical: `/type/${t}` },
  };
}

export default async function TypePage({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const { type } = await params;
  if (!ALL_TYPES.includes(type as DateType)) notFound();
  const t = type as DateType;

  const dates = sortDates(filterDates({ type: t }), 'popular');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            collectionStructuredData(typePageTitles[t], typeIntros[t], `/type/${t}`)
          ),
        }}
      />
      <BrowsePage
        title={typePageTitles[t]}
        intro={typeIntros[t]}
        dates={dates}
        breadcrumbs={[{ label: typePageTitles[t] }]}
      />
    </>
  );
}
