import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex items-center gap-1 text-xs text-[#999999]">
        <li>
          <Link href="/" className="hover:text-[#1A1A1A] transition-colors">
            Home
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            <ChevronRight size={12} className="text-[#CCCCCC]" />
            {item.href ? (
              <Link href={item.href} className="hover:text-[#1A1A1A] transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-[#1A1A1A]">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
