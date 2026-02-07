'use client';

import { useState } from 'react';
import type { DateIdea } from '@/types/date';
import { DATES_PER_PAGE } from '@/lib/constants';
import DateCard from './DateCard';
import AdSlot from './AdSlot';
import EmptyState from './EmptyState';

interface DateGridProps {
  dates: DateIdea[];
  emptyTitle?: string;
  emptyMessage?: string;
}

export default function DateGrid({ dates, emptyTitle, emptyMessage }: DateGridProps) {
  const [visibleCount, setVisibleCount] = useState(DATES_PER_PAGE);

  if (dates.length === 0) {
    return <EmptyState title={emptyTitle} message={emptyMessage} />;
  }

  const visible = dates.slice(0, visibleCount);
  const hasMore = visibleCount < dates.length;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visible.map((date, i) => (
          <div key={date.id}>
            <DateCard date={date} />
            {/* In-grid ad slot after every 12 cards */}
            {(i + 1) % 12 === 0 && i + 1 < visible.length && (
              <div className="col-span-full mt-6 mb-6">
                <AdSlot position="in-grid" />
              </div>
            )}
          </div>
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setVisibleCount((prev) => prev + DATES_PER_PAGE)}
            className="text-sm text-[#999999] hover:text-[#1A1A1A] transition-colors"
          >
            Show more dates &darr;
          </button>
        </div>
      )}
    </div>
  );
}
