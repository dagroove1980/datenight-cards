import Link from 'next/link';
import type { Vibe } from '@/types/date';
import { vibeColors } from '@/lib/colors';
import { vibeLabels } from '@/lib/constants';

interface VibeTagsProps {
  vibes: Vibe[];
  linked?: boolean;
  size?: 'sm' | 'md';
}

export default function VibeTags({ vibes, linked = true, size = 'sm' }: VibeTagsProps) {
  const sizeClasses = size === 'sm' ? 'text-[11px] px-2.5 py-0.5' : 'text-xs px-3 py-1';

  return (
    <div className="flex flex-wrap gap-1.5">
      {vibes.map((vibe) => {
        const colors = vibeColors[vibe];
        const pill = (
          <span
            key={vibe}
            className={`inline-block rounded-full font-medium ${sizeClasses}`}
            style={{ backgroundColor: colors.bg, color: colors.text }}
          >
            {vibeLabels[vibe]}
          </span>
        );

        if (linked) {
          return (
            <Link key={vibe} href={`/vibe/${vibe}`} className="hover:opacity-80 transition-opacity">
              {pill}
            </Link>
          );
        }
        return pill;
      })}
    </div>
  );
}
