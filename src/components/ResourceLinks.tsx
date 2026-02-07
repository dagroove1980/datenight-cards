import type { Resource } from '@/types/date';
import { getIcon } from '@/lib/icons';
import { ExternalLink } from 'lucide-react';

interface ResourceLinksProps {
  resources: Resource[];
}

export default function ResourceLinks({ resources }: ResourceLinksProps) {
  if (resources.length === 0) return null;

  return (
    <section>
      <h2 className="font-heading text-xl font-bold text-[#1A1A1A] mb-4">
        Make It Happen
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {resources.map((resource, i) => {
          const Icon = getIcon(resource.icon);
          return (
            <a
              key={i}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-white rounded-xl border border-[#f5f5f5] hover:border-[#e0e0e0] hover:shadow-sm transition-all group"
            >
              <div
                className="flex items-center justify-center shrink-0"
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  backgroundColor: '#f5f5f5',
                }}
              >
                <Icon size={18} className="text-[#666666]" />
              </div>
              <span className="text-sm text-[#444444] font-medium flex-1">
                {resource.label}
              </span>
              <ExternalLink
                size={14}
                className="text-[#CCCCCC] group-hover:text-[#999999] transition-colors shrink-0"
              />
            </a>
          );
        })}
      </div>
    </section>
  );
}
