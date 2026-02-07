import { Heart } from 'lucide-react';

interface EmptyStateProps {
  title?: string;
  message?: string;
}

export default function EmptyState({
  title = 'No dates found',
  message = "Try adjusting your filters to discover more date ideas.",
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div
        className="flex items-center justify-center mb-4"
        style={{
          width: 64,
          height: 64,
          borderRadius: 16,
          backgroundColor: 'rgba(230, 57, 70, 0.08)',
        }}
      >
        <Heart size={28} style={{ color: '#E63946' }} />
      </div>
      <h3 className="font-heading text-lg font-semibold text-[#1A1A1A] mb-2">
        {title}
      </h3>
      <p className="text-sm text-[#999999] max-w-sm">{message}</p>
    </div>
  );
}
