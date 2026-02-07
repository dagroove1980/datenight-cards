import type { DateIdea } from '@/types/date';
import Header from './Header';
import Footer from './Footer';
import Breadcrumbs from './Breadcrumbs';
import DateGrid from './DateGrid';

interface BrowsePageProps {
  title: string;
  intro: string;
  dates: DateIdea[];
  breadcrumbs: { label: string; href?: string }[];
}

export default function BrowsePage({ title, intro, dates, breadcrumbs }: BrowsePageProps) {
  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-4 pt-8 pb-20">
        <Breadcrumbs items={breadcrumbs} />

        <h1 className="font-heading text-3xl font-bold text-[#1A1A1A] mb-3">
          {title}
        </h1>
        <p className="text-base text-[#666666] leading-relaxed max-w-2xl mb-6">
          {intro}
        </p>

        {/* Ad Slot: Filter Page */}
        <div className="mb-8">
          <div data-ad-slot="filter-page" aria-hidden="true" />
        </div>

        <DateGrid dates={dates} />
      </main>
      <Footer />
    </>
  );
}
