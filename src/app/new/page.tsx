import type { Metadata } from 'next';
import { getAllDates, sortDates } from '@/lib/dates';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DateGrid from '@/components/DateGrid';

export const metadata: Metadata = {
  title: 'New Date Ideas',
  description: 'The newest curated date ideas on DateNightPlan — freshly added plans for your next evening together.',
  alternates: { canonical: '/new' },
};

export default function NewPage() {
  const dates = sortDates(getAllDates(), 'new');

  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-4 pt-8 pb-20">
        <h1 className="font-heading text-3xl font-bold text-[#1A1A1A] mb-2">
          Newest Date Ideas
        </h1>
        <p className="text-sm text-[#999999] mb-8">
          Freshly added to the collection.
        </p>
        <DateGrid dates={dates} />
      </main>
      <Footer />
    </>
  );
}
