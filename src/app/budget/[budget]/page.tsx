import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { Budget } from '@/types/date';
import { filterDates, sortDates } from '@/lib/dates';
import { ALL_BUDGETS, budgetPageTitles, budgetIntros } from '@/lib/constants';
import { collectionStructuredData } from '@/lib/seo';
import BrowsePage from '@/components/BrowsePage';

export function generateStaticParams() {
  return ALL_BUDGETS.map((b) => ({ budget: b }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ budget: string }>;
}): Promise<Metadata> {
  const { budget } = await params;
  if (!ALL_BUDGETS.includes(budget as Budget)) return {};
  const b = budget as Budget;

  return {
    title: `${budgetPageTitles[b]} | DateNightPlan`,
    description: budgetIntros[b].slice(0, 160),
    alternates: { canonical: `/budget/${b}` },
  };
}

export default async function BudgetPage({
  params,
}: {
  params: Promise<{ budget: string }>;
}) {
  const { budget } = await params;
  if (!ALL_BUDGETS.includes(budget as Budget)) notFound();
  const b = budget as Budget;

  const dates = sortDates(filterDates({ budget: b }), 'popular');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            collectionStructuredData(budgetPageTitles[b], budgetIntros[b], `/budget/${b}`)
          ),
        }}
      />
      <BrowsePage
        title={budgetPageTitles[b]}
        intro={budgetIntros[b]}
        dates={dates}
        breadcrumbs={[{ label: budgetPageTitles[b] }]}
      />
    </>
  );
}
