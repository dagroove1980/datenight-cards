'use client';

import { useState, useMemo, useCallback, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import type { DateIdea, Vibe, Setting, Budget, DateType, SortOption } from '@/types/date';
import { filterDates, sortDates, getRandomDate } from '@/lib/dates';
import FilterBar from './FilterBar';
import SortTabs from './SortTabs';
import DateGrid from './DateGrid';
import SurpriseModal from './SurpriseModal';
import Header from './Header';

interface HomepageContentProps {
  allDates: DateIdea[];
}

function HomepageInner({ allDates }: HomepageContentProps) {
  const searchParams = useSearchParams();
  const [surpriseDate, setSurpriseDate] = useState<DateIdea | null>(null);
  const [showSurprise, setShowSurprise] = useState(false);

  const activeVibe = searchParams.get('vibe') as Vibe | null;
  const activeSetting = searchParams.get('setting') as Setting | null;
  const activeBudget = searchParams.get('budget') as Budget | null;
  const activeType = searchParams.get('type') as DateType | null;
  const activeSort = (searchParams.get('sort') as SortOption) || 'popular';

  const filteredDates = useMemo(() => {
    const filtered = filterDates({
      vibe: activeVibe || undefined,
      setting: activeSetting || undefined,
      budget: activeBudget || undefined,
      type: activeType || undefined,
    });
    return sortDates(filtered, activeSort);
  }, [activeVibe, activeSetting, activeBudget, activeType, activeSort]);

  const handleSurpriseMe = useCallback(() => {
    const pool = filteredDates.length > 0 ? filteredDates : allDates;
    const date = getRandomDate([], pool);
    if (date) {
      setSurpriseDate(date);
      setShowSurprise(true);
    }
  }, [filteredDates, allDates]);

  return (
    <>
      <Header onSurpriseMe={handleSurpriseMe} />

      <main className="max-w-6xl mx-auto px-4">
        {/* Hero */}
        <section className="text-center pt-16 pb-12">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4 tracking-tight">
            Date nights, planned for you.
          </h1>
          <p className="text-base md:text-lg text-[#999999] max-w-xl mx-auto">
            Curated date ideas with a full plan — not just &ldquo;go to dinner.&rdquo;
            Browse by vibe, budget, or setting.
          </p>
        </section>

        {/* Ad: Homepage Leaderboard */}
        <div className="mb-8">
          {/* Ad Slot: Homepage Leaderboard */}
          <div data-ad-slot="homepage-leaderboard" aria-hidden="true" />
        </div>

        {/* Filters */}
        <section className="mb-6">
          <FilterBar />
        </section>

        {/* Sort */}
        <section className="mb-8">
          <SortTabs />
        </section>

        {/* Grid */}
        <section className="pb-20">
          <DateGrid dates={filteredDates} />
        </section>
      </main>

      <SurpriseModal
        date={surpriseDate}
        isOpen={showSurprise}
        onClose={() => setShowSurprise(false)}
      />
    </>
  );
}

export default function HomepageContent(props: HomepageContentProps) {
  return (
    <Suspense>
      <HomepageInner {...props} />
    </Suspense>
  );
}
