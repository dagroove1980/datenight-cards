'use client';

import { useState, useMemo, useCallback, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import type { DateIdea, Vibe, Setting, Budget, DateType, SortOption } from '@/types/date';
import { filterDates, sortDates, getRandomDate } from '@/lib/dates';
import { ALL_VIBES, ALL_SETTINGS, ALL_TYPES, ALL_BUDGETS, vibeLabels, settingLabels, typeLabels, budgetLabels, vibeIcons, settingIcons } from '@/lib/constants';
import { vibeColors, budgetColors, settingColors } from '@/lib/colors';
import { getIcon } from '@/lib/icons';
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

        {/* Browse by Vibe */}
        <section className="mb-14">
          <h2 className="font-heading text-xl font-bold text-[#1A1A1A] mb-5">Browse by Vibe</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {ALL_VIBES.map((vibe) => {
              const colors = vibeColors[vibe];
              const Icon = getIcon(vibeIcons[vibe]);
              return (
                <Link
                  key={vibe}
                  href={`/vibe/${vibe}`}
                  className="flex items-center gap-3 p-4 rounded-2xl border border-[#F0F0F0] bg-white hover:shadow-md transition-shadow"
                >
                  <div
                    className="flex items-center justify-center shrink-0"
                    style={{ width: 40, height: 40, borderRadius: 10, backgroundColor: colors.bg }}
                  >
                    <Icon size={20} style={{ color: colors.text }} />
                  </div>
                  <span className="font-heading text-sm font-semibold text-[#1A1A1A]">
                    {vibeLabels[vibe]}
                  </span>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Browse by Setting */}
        <section className="mb-14">
          <h2 className="font-heading text-xl font-bold text-[#1A1A1A] mb-5">Browse by Setting</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {ALL_SETTINGS.map((setting) => {
              const colors = settingColors[setting];
              const Icon = getIcon(settingIcons[setting]);
              return (
                <Link
                  key={setting}
                  href={`/setting/${setting}`}
                  className="flex items-center gap-3 p-4 rounded-2xl border border-[#F0F0F0] bg-white hover:shadow-md transition-shadow"
                >
                  <div
                    className="flex items-center justify-center shrink-0"
                    style={{ width: 40, height: 40, borderRadius: 10, backgroundColor: colors.bg }}
                  >
                    <Icon size={20} style={{ color: colors.text }} />
                  </div>
                  <span className="font-heading text-sm font-semibold text-[#1A1A1A]">
                    {settingLabels[setting]}
                  </span>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Browse by Type */}
        <section className="mb-14">
          <h2 className="font-heading text-xl font-bold text-[#1A1A1A] mb-5">Browse by Type</h2>
          <div className="flex flex-wrap gap-2">
            {ALL_TYPES.map((type) => (
              <Link
                key={type}
                href={`/type/${type}`}
                className="px-4 py-2 rounded-full text-sm font-medium border border-[#F0F0F0] bg-white hover:shadow-md transition-shadow text-[#1A1A1A]"
              >
                {typeLabels[type]}
              </Link>
            ))}
          </div>
        </section>

        {/* Browse by Budget */}
        <section className="mb-14">
          <h2 className="font-heading text-xl font-bold text-[#1A1A1A] mb-5">Browse by Budget</h2>
          <div className="flex flex-wrap gap-2">
            {ALL_BUDGETS.map((budget) => {
              const colors = budgetColors[budget];
              return (
                <Link
                  key={budget}
                  href={`/budget/${budget}`}
                  className="px-4 py-2 rounded-full text-sm font-medium border border-[#F0F0F0] hover:shadow-md transition-shadow"
                  style={{ backgroundColor: colors.bg, color: colors.text }}
                >
                  {budgetLabels[budget]}
                </Link>
              );
            })}
          </div>
        </section>

        {/* Ad: Homepage Leaderboard */}
        <div className="mb-8">
          {/* Ad Slot: Homepage Leaderboard */}
          <div data-ad-slot="homepage-leaderboard" aria-hidden="true" />
        </div>

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
