'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import type { SortOption } from '@/types/date';

const tabs: { value: SortOption; label: string }[] = [
  { value: 'popular', label: 'Popular' },
  { value: 'new', label: 'New' },
  { value: 'random', label: 'Random' },
];

export default function SortTabs() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeSort = (searchParams.get('sort') as SortOption) || 'popular';

  const handleSort = (sort: SortOption) => {
    const params = new URLSearchParams(searchParams.toString());
    if (sort === 'popular') {
      params.delete('sort');
    } else {
      params.set('sort', sort);
    }
    const qs = params.toString();
    router.push(qs ? `/?${qs}` : '/', { scroll: false });
  };

  return (
    <div className="flex gap-4">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => handleSort(tab.value)}
          className={`text-sm font-medium pb-1 transition-colors ${
            activeSort === tab.value
              ? 'text-[#1A1A1A] border-b-2 border-[#1A1A1A]'
              : 'text-[#CCCCCC] hover:text-[#999999]'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
