import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { Setting } from '@/types/date';
import { filterDates, sortDates } from '@/lib/dates';
import { ALL_SETTINGS, settingPageTitles, settingIntros } from '@/lib/constants';
import { collectionStructuredData } from '@/lib/seo';
import BrowsePage from '@/components/BrowsePage';

export function generateStaticParams() {
  return ALL_SETTINGS.map((s) => ({ setting: s }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ setting: string }>;
}): Promise<Metadata> {
  const { setting } = await params;
  if (!ALL_SETTINGS.includes(setting as Setting)) return {};
  const s = setting as Setting;

  return {
    title: `${settingPageTitles[s]} | datenight.cards`,
    description: settingIntros[s].slice(0, 160),
    alternates: { canonical: `/setting/${s}` },
  };
}

export default async function SettingPage({
  params,
}: {
  params: Promise<{ setting: string }>;
}) {
  const { setting } = await params;
  if (!ALL_SETTINGS.includes(setting as Setting)) notFound();
  const s = setting as Setting;

  const dates = sortDates(filterDates({ setting: s }), 'popular');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            collectionStructuredData(settingPageTitles[s], settingIntros[s], `/setting/${s}`)
          ),
        }}
      />
      <BrowsePage
        title={settingPageTitles[s]}
        intro={settingIntros[s]}
        dates={dates}
        breadcrumbs={[{ label: settingPageTitles[s] }]}
      />
    </>
  );
}
