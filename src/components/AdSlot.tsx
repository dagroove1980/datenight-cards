interface AdSlotProps {
  position: 'homepage-leaderboard' | 'in-grid' | 'date-detail' | 'filter-page';
}

const adSizes: Record<string, string> = {
  'homepage-leaderboard': 'min-h-[90px] max-w-[728px]',
  'in-grid': 'min-h-[250px]',
  'date-detail': 'min-h-[90px] max-w-[728px]',
  'filter-page': 'min-h-[90px] max-w-[728px]',
};

export default function AdSlot({ position }: AdSlotProps) {
  return (
    <div className={`mx-auto w-full ${adSizes[position]}`}>
      {/* Ad Slot: ${position} */}
      <div
        className="w-full h-full"
        data-ad-slot={position}
        aria-hidden="true"
      />
    </div>
  );
}
