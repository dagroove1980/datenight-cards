'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { DateIdea } from '@/types/date';
import { getIcon } from '@/lib/icons';
import { settingIcons, settingLabels } from '@/lib/constants';
import HeroIcon from './HeroIcon';
import VibeTags from './VibeTags';
import BudgetBadge from './BudgetBadge';
import StepTimeline from './StepTimeline';
import FavoriteButton from './FavoriteButton';
import { MessageCircleHeart, Clock, ChevronDown, ChevronUp } from 'lucide-react';

interface DateCardProps {
  date: DateIdea;
}

export default function DateCard({ date }: DateCardProps) {
  const [expanded, setExpanded] = useState(false);
  const SettingIcon = getIcon(settingIcons[date.setting]);

  return (
    <article
      className="bg-white rounded-[20px] p-6 cursor-pointer transition-all duration-300 ease-out"
      style={{
        boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 8px 30px rgba(0,0,0,0.03)',
      }}
      onClick={() => setExpanded(!expanded)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setExpanded(!expanded);
        }
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow =
          '0 4px 12px rgba(0,0,0,0.06), 0 20px 50px rgba(0,0,0,0.06)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow =
          '0 1px 3px rgba(0,0,0,0.04), 0 8px 30px rgba(0,0,0,0.03)';
      }}
      tabIndex={0}
      role="button"
      aria-expanded={expanded}
      aria-label={`${date.name} — click to ${expanded ? 'collapse' : 'expand'}`}
    >
      {/* A. Header Section */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-start gap-3 min-w-0">
          <HeroIcon icon={date.heroIcon} color={date.heroColor} />
          <div className="min-w-0">
            <h3 className="font-heading text-lg font-bold text-[#1A1A1A] leading-tight truncate">
              <Link
                href={`/date/${date.id}`}
                className="hover:underline"
                onClick={(e) => e.stopPropagation()}
              >
                {date.name}
              </Link>
            </h3>
            <div className="flex items-center gap-1.5 mt-1 text-[12px] text-[#AAAAAA]">
              <SettingIcon size={12} />
              <span>{settingLabels[date.setting]}</span>
              <span>·</span>
              <Clock size={12} />
              <span>{date.duration}</span>
            </div>
          </div>
        </div>
        <BudgetBadge budget={date.budget} />
      </div>

      {/* B. Vibe Tags */}
      <div className="mb-4">
        <VibeTags vibes={date.vibe} />
      </div>

      {/* C. Step Timeline */}
      <div className="border-t border-[#f5f5f5] pt-4 mb-3">
        <StepTimeline steps={date.steps} />
      </div>

      {/* D. Conversation Starter (expandable) */}
      {expanded && (
        <div
          className="mb-3 p-4 rounded-xl border-l-[3px] transition-all duration-300"
          style={{
            backgroundColor: '#FAFAF8',
            borderLeftColor: '#E63946',
          }}
        >
          <div className="flex items-center gap-2 mb-2">
            <MessageCircleHeart size={16} style={{ color: '#E63946' }} />
            <span className="text-xs font-semibold uppercase tracking-wide text-[#AAAAAA]">
              Conversation Starter
            </span>
          </div>
          <p className="text-sm italic text-[#444444] leading-relaxed">
            {date.conversation}
          </p>
        </div>
      )}

      {/* E. Footer */}
      <div className="flex items-center justify-between pt-2">
        <div className="flex items-center gap-3">
          <FavoriteButton dateId={date.id} />
          <span className="text-xs text-[#DDDDDD]">
            {date.likes.toLocaleString()}
          </span>
        </div>
        <button
          className="flex items-center gap-1 text-xs text-[#CCCCCC] hover:text-[#999999] transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            setExpanded(!expanded);
          }}
          aria-label={expanded ? 'Collapse card' : 'Expand card'}
        >
          {expanded ? (
            <>
              collapse <ChevronUp size={14} />
            </>
          ) : (
            <>
              expand <ChevronDown size={14} />
            </>
          )}
        </button>
      </div>
    </article>
  );
}
