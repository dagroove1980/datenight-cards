import type { Budget } from '@/types/date';
import { budgetColors } from '@/lib/colors';
import { budgetLabels } from '@/lib/constants';

interface BudgetBadgeProps {
  budget: Budget;
  size?: 'sm' | 'md';
}

export default function BudgetBadge({ budget, size = 'sm' }: BudgetBadgeProps) {
  const colors = budgetColors[budget];
  const sizeClasses = size === 'sm' ? 'text-[11px] px-2.5 py-0.5' : 'text-xs px-3 py-1';

  return (
    <span
      className={`inline-block rounded-full font-semibold ${sizeClasses}`}
      style={{ backgroundColor: colors.bg, color: colors.text }}
    >
      {budgetLabels[budget]}
    </span>
  );
}
