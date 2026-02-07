'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';
import type { Vibe, Setting, Budget, DateType } from '@/types/date';
import {
  ALL_VIBES, ALL_SETTINGS, ALL_BUDGETS, ALL_TYPES,
  vibeLabels, settingLabels, budgetLabels, typeLabels,
} from '@/lib/constants';

export default function FilterBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const activeVibe = searchParams.get('vibe') as Vibe | null;
  const activeSetting = searchParams.get('setting') as Setting | null;
  const activeBudget = searchParams.get('budget') as Budget | null;
  const activeType = searchParams.get('type') as DateType | null;

  const updateFilter = useCallback(
    (key: string, value: string | null) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value === null || params.get(key) === value) {
        params.delete(key);
      } else {
        params.set(key, value);
      }
      const qs = params.toString();
      router.push(qs ? `/?${qs}` : '/', { scroll: false });
    },
    [router, searchParams]
  );

  return (
    <div className="space-y-4">
      {/* Row 1: Vibe pills */}
      <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-1">
        <Pill
          label="All vibes"
          active={!activeVibe}
          onClick={() => updateFilter('vibe', null)}
        />
        {ALL_VIBES.map((v) => (
          <Pill
            key={v}
            label={vibeLabels[v]}
            active={activeVibe === v}
            onClick={() => updateFilter('vibe', v)}
          />
        ))}
      </div>

      {/* Row 2: Secondary filters */}
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
        {/* Setting */}
        <FilterGroup label="Setting:">
          <SmallPill
            label="Any"
            active={!activeSetting}
            onClick={() => updateFilter('setting', null)}
          />
          {ALL_SETTINGS.map((s) => (
            <SmallPill
              key={s}
              label={settingLabels[s]}
              active={activeSetting === s}
              onClick={() => updateFilter('setting', s)}
            />
          ))}
        </FilterGroup>

        {/* Budget */}
        <FilterGroup label="Budget:">
          <SmallPill
            label="Any"
            active={!activeBudget}
            onClick={() => updateFilter('budget', null)}
          />
          {ALL_BUDGETS.map((b) => (
            <SmallPill
              key={b}
              label={budgetLabels[b]}
              active={activeBudget === b}
              onClick={() => updateFilter('budget', b)}
            />
          ))}
        </FilterGroup>

        {/* Type */}
        <FilterGroup label="Type:">
          <SmallPill
            label="Any"
            active={!activeType}
            onClick={() => updateFilter('type', null)}
          />
          {ALL_TYPES.map((t) => (
            <SmallPill
              key={t}
              label={typeLabels[t]}
              active={activeType === t}
              onClick={() => updateFilter('type', t)}
            />
          ))}
        </FilterGroup>
      </div>
    </div>
  );
}

function Pill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
        active
          ? 'bg-[#1a1a1a] text-white'
          : 'bg-white text-[#666666] hover:bg-[#f0f0f0]'
      }`}
    >
      {label}
    </button>
  );
}

function SmallPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
        active
          ? 'bg-[#1a1a1a] text-white'
          : 'bg-white text-[#888888] hover:bg-[#f0f0f0]'
      }`}
    >
      {label}
    </button>
  );
}

function FilterGroup({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-[#AAAAAA] font-medium shrink-0">{label}</span>
      <div className="flex gap-1.5">{children}</div>
    </div>
  );
}
