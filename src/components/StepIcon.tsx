import { getIcon } from '@/lib/icons';
import { hexToRgba } from '@/lib/colors';

interface StepIconProps {
  icon: string;
  color: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizes = {
  sm: { container: 32, icon: 16, radius: 8 },
  md: { container: 38, icon: 18, radius: 10 },
  lg: { container: 48, icon: 22, radius: 12 },
};

export default function StepIcon({ icon, color, size = 'md' }: StepIconProps) {
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
