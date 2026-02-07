import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllDates, getDateById, getSimilarDates } from '@/lib/dates';
import { dateMetaTitle, dateMetaDescription, dateStructuredData, breadcrumbStructuredData } from '@/lib/seo';
import { vibeLabels } from '@/lib/constants';
import { hexToRgba } from '@/lib/colors';
import HeroIcon from '@/components/HeroIcon';
import VibeTags from '@/components/VibeTags';
import BudgetBadge from '@/components/BudgetBadge';
import StepTimeline from '@/components/StepTimeline';
import ShareButtons from '@/components/ShareButtons';
import ResourceLinks from '@/components/ResourceLinks';
import SimilarDates from '@/components/SimilarDates';
import Breadcrumbs from '@/components/Breadcrumbs';
import FavoriteButton from '@/components/FavoriteButton';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MessageCircleHeart, Clock } from 'lucide-react';
import { getIcon } from '@/lib/icons';
import { settingIcons, settingLabels } from '@/lib/constants';

export async function generateStaticParams() {
  return getAllDates().map((d) => ({ id: d.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const date = getDateById(id);
  if (!date) return {};

  return {
    title: dateMetaTitle(date),
    description: dateMetaDescription(date),
    openGraph: {
      title: dateMetaTitle(date),
      description: dateMetaDescription(date),
      type: 'article',
    },
    alternates: {
      canonical: `/date/${date.id}`,
    },
  };
}

export default async function DateDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const date = getDateById(id);
  if (!date) notFound();

  const similar = getSimilarDates(date, 4);
  const primaryVibe = date.vibe[0];
  const SettingIcon = getIcon(settingIcons[date.setting]);

  const breadcrumbs = [
    { label: `${vibeLabels[primaryVibe]} Date Ideas`, href: `/vibe/${primaryVibe}` },
    { label: date.name },
  ];

  const jsonLd = dateStructuredData(date);
  const breadcrumbJsonLd = breadcrumbStructuredData([
    { name: 'Home', url: '/' },
    { name: `${vibeLabels[primaryVibe]} Date Ideas`, url: `/vibe/${primaryVibe}` },
    { name: date.name, url: `/date/${date.id}` },
  ]);

  return (
    <>
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <main className="max-w-3xl mx-auto px-4 pt-8 pb-20">
        <Breadcrumbs items={breadcrumbs} />

        {/* Hero Section */}
        <section
          className="rounded-2xl p-8 mb-8"
          style={{ backgroundColor: hexToRgba(date.heroColor, 0.05) }}
        >
          <div className="flex flex-col items-center text-center">
            <HeroIcon icon={date.heroIcon} color={date.heroColor} size="detail" />
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-[#1A1A1A] mt-4 mb-3">
              {date.name}
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
              <VibeTags vibes={date.vibe} size="md" />
              <BudgetBadge budget={date.budget} size="md" />
              <span className="flex items-center gap-1 text-sm text-[#999999]">
                <SettingIcon size={14} />
                {settingLabels[date.setting]}
              </span>
              <span className="flex items-center gap-1 text-sm text-[#999999]">
                <Clock size={14} />
                {date.duration}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <ShareButtons dateId={date.id} dateName={date.name} />
              <FavoriteButton dateId={date.id} />
            </div>
          </div>
        </section>

        {/* The Full Plan */}
        <section className="mb-10">
          <h2 className="font-heading text-xl font-bold text-[#1A1A1A] mb-6">
            The Plan
          </h2>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <StepTimeline steps={date.steps} size="lg" />
          </div>
        </section>

        {/* Conversation Starter */}
        <section className="mb-10">
          <div
            className="p-6 rounded-xl border-l-[3px]"
            style={{
              backgroundColor: '#FAFAF8',
              borderLeftColor: '#E63946',
            }}
          >
            <div className="flex items-center gap-2 mb-3">
              <MessageCircleHeart size={20} style={{ color: '#E63946' }} />
              <span className="text-sm font-semibold uppercase tracking-wide text-[#AAAAAA]">
                Conversation Starter
              </span>
            </div>
            <p className="text-base italic text-[#444444] leading-relaxed">
              {date.conversation}
            </p>
          </div>
        </section>

        {/* Resources / Affiliates */}
        {date.resources && date.resources.length > 0 && (
          <section className="mb-10">
            <ResourceLinks resources={date.resources} />
          </section>
        )}

        {/* Ad Slot: Date Detail */}
        <div className="mb-10">
          {/* Ad Slot: Date Detail */}
          <div data-ad-slot="date-detail" aria-hidden="true" />
        </div>

        {/* Similar Dates */}
        <section>
          <SimilarDates dates={similar} />
        </section>
      </main>

      <Footer />
    </>
  );
}
