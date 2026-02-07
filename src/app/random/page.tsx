'use client';

import { useMemo } from 'react';
import { getAllDates, sortDates } from '@/lib/dates';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DateGrid from '@/components/DateGrid';

export default function RandomPage() {
  const dates = useMemo(() => sortDates(getAllDates(), 'random'), []);

  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-4 pt-8 pb-20">
        <h1 className="font-heading text-3xl font-bold text-[#1A1A1A] mb-2">
          Random Date Ideas
        </h1>
        <p className="text-sm text-[#999999] mb-8">
          Shuffled just for you — refresh for a new order.
        </p>
        <DateGrid dates={dates} />
      </main>
      <Footer />
    </>
  );
}
