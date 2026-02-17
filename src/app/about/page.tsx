import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'About',
  description:
    'DateNightPlan is a curated collection of date plans — not just ideas. Each card is a complete evening with a flow.',
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="max-w-2xl mx-auto px-4 pt-12 pb-20">
        <h1 className="font-heading text-3xl font-bold text-[#1A1A1A] mb-6">
          About DateNightPlan
        </h1>

        <div className="space-y-6 text-[#444444] leading-relaxed">
          <p>
            This isn&apos;t another listicle of vague date ideas. Every card on this site is a
            <strong> complete mini-plan</strong> — curated date plans, not just ideas. Each card
            is a complete evening with a flow.
          </p>

          <p>
            <strong>Who it&apos;s for:</strong> Couples who want to stop defaulting to
            &ldquo;dinner and a movie.&rdquo; Whether it&apos;s a first date, a 10-year
            anniversary, or a random Tuesday — you&apos;ll find something here that excites you.
          </p>

          <p>
            <strong>How to use it:</strong> Browse by vibe, budget, or setting. Find one that
            excites you. Do it this weekend. Each card has 3-4 steps that flow as a narrative —
            a beginning, a middle, and an end. Plus a conversation starter to keep the connection
            going.
          </p>

          <div
            className="p-6 rounded-xl border-l-[3px] my-8"
            style={{
              backgroundColor: '#FAFAF8',
              borderLeftColor: '#E63946',
            }}
          >
            <p className="italic text-[#444444]">
              &ldquo;A great date isn&apos;t one activity — it&apos;s a flow. Start somewhere,
              build momentum, end on a high note.&rdquo;
            </p>
          </div>

          <p className="text-sm text-[#999999]">
            Made with care by [placeholder].
            <br />
            Contact: hello@date-night-plan.com
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
