import { ImageResponse } from 'next/og';
import { getAllDates, getDateById } from '@/lib/dates';
import { vibeLabels } from '@/lib/constants';

export const runtime = 'nodejs';
export const contentType = 'image/png';
export const size = { width: 1200, height: 630 };

export function generateStaticParams() {
  return getAllDates().map((d) => ({ id: d.id }));
}

export default async function OgImage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const date = getDateById(id);

  if (!date) {
    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            backgroundColor: '#FAF9F7',
            fontSize: 40,
            fontFamily: 'sans-serif',
          }}
        >
          DateNightPlan
        </div>
      ),
      size
    );
  }

  const vibes = date.vibe.map((v) => vibeLabels[v]).join(' · ');
  const steps = date.steps.map((s) => s.label).join(' → ');

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          backgroundColor: '#FAF9F7',
          padding: 60,
          fontFamily: 'sans-serif',
        }}
      >
        {/* Top: brand */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 40 }}>
          <span style={{ fontSize: 24, fontWeight: 700, color: '#1A1A1A' }}>
            DateNight
          </span>
          <span style={{ fontSize: 24, fontWeight: 700, color: '#E63946' }}>
            Plan
          </span>
        </div>

        {/* Icon placeholder + Title */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 24 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 80,
              height: 80,
              borderRadius: 20,
              backgroundColor: date.heroColor + '1F',
              fontSize: 36,
            }}
          >
            <span style={{ color: date.heroColor }}>♥</span>
          </div>
          <span
            style={{
              fontSize: 48,
              fontWeight: 700,
              color: '#1A1A1A',
              letterSpacing: -1,
              lineHeight: 1.1,
              maxWidth: 900,
            }}
          >
            {date.name}
          </span>
        </div>

        {/* Vibes */}
        <div
          style={{
            display: 'flex',
            fontSize: 22,
            color: '#999999',
            marginBottom: 20,
          }}
        >
          {vibes}
        </div>

        {/* Steps flow */}
        <div
          style={{
            display: 'flex',
            fontSize: 20,
            color: '#CCCCCC',
            marginBottom: 40,
          }}
        >
          {steps}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            marginTop: 'auto',
            fontSize: 18,
            color: '#AAAAAA',
          }}
        >
          <span>{date.duration}</span>
          <span>·</span>
          <span>{date.setting}</span>
          <span>·</span>
          <span>{date.budget === 'free' ? 'Free' : date.budget}</span>
        </div>
      </div>
    ),
    size
  );
}
