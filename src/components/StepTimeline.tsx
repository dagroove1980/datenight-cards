import type { Step } from '@/types/date';
import StepIcon from './StepIcon';

interface StepTimelineProps {
  steps: Step[];
  size?: 'sm' | 'md' | 'lg';
}

export default function StepTimeline({ steps, size = 'md' }: StepTimelineProps) {
  const textSize = size === 'lg' ? 'text-base' : 'text-sm';
  const labelSize = size === 'lg' ? 'text-[11px]' : 'text-[10px]';
  const gap = size === 'lg' ? 'gap-0' : 'gap-0';

  return (
    <div className={`flex flex-col ${gap}`}>
      {steps.map((step, i) => {
        const isLast = i === steps.length - 1;
        return (
          <div key={i} className="flex gap-3">
            {/* Icon column with connector */}
            <div className="flex flex-col items-center">
              <StepIcon icon={step.icon} color={step.color} size={size === 'lg' ? 'lg' : 'md'} />
              {!isLast && (
                <div
                  className="w-[2px] flex-1 min-h-[16px] my-1"
                  style={{ backgroundColor: '#f0f0f0' }}
                />
              )}
            </div>
            {/* Text column */}
            <div className={`pb-${isLast ? '0' : '4'} pt-1 flex-1 min-w-0`}>
              <span
                className={`${labelSize} font-semibold uppercase tracking-[0.08em] block mb-0.5`}
                style={{ color: '#CCCCCC' }}
              >
                {step.label}
              </span>
              <p className={`${textSize} leading-relaxed`} style={{ color: '#444444' }}>
                {step.text}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
