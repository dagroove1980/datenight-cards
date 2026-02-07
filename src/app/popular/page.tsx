import type { Metadata } from 'next';
import { getAllDates, sortDates } from '@/lib/dates';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DateGrid from '@/components/DateGrid';

export const metadata: Metadata = {
  title: 'Popular Date Ideas',
  description: 'The most popular curated date ideas on datenight.cards — browse by likes and find the community favorites.',
  alternates: { canonical: '/popular' },
};

export default function PopularPage() {
  const dates = sortDates(getAllDates(), 'popular');

  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-4 pt-8 pb-20">
        <h1 className="font-heading text-3xl font-bold text-[#1A1A1A] mb-2">
          Popular Date Ideas
        </h1>
        <p className="text-sm text-[#999999] mb-8">
          The most-loved date plans on the site.
        </p>
        <DateGrid dates={dates} />
      </main>
      <Footer />
    </>
  );
}
