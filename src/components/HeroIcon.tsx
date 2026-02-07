import { getIcon } from '@/lib/icons';
import { hexToRgba } from '@/lib/colors';

interface HeroIconProps {
  icon: string;
  color: string;
  size?: 'card' | 'detail';
}

const sizes = {
  card: { container: 52, icon: 26, radius: 14 },
  detail: { container: 72, icon: 34, radius: 18 },
};

export default function HeroIcon({ icon, color, size = 'card' }: HeroIconProps) {
  const Icon = getIcon(icon);
  const s = sizes[size];

  return (
    <div
      className="flex items-center justify-center shrink-0"
      style={{
        width: s.container,
        height: s.container,
        borderRadius: s.radius,
        backgroundColor: hexToRgba(color, 0.12),
      }}
    >
      <Icon size={s.icon} style={{ color }} />
    </div>
  );
}
