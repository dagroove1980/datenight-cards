'use client';

import { useEffect, useCallback } from 'react';
import type { DateIdea } from '@/types/date';
import { Sparkles } from 'lucide-react';
import DateCard from './DateCard';

interface SurpriseModalProps {
  date: DateIdea | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function SurpriseModal({ date, isOpen, onClose }: SurpriseModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !date) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/45 backdrop-blur-sm" />

      {/* Content */}
      <div
        className="relative w-full max-w-md animate-in fade-in zoom-in-95"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Heading */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-2 mb-1">
            <Sparkles size={20} className="text-yellow-400" />
            <h2 className="font-heading text-xl font-bold text-white">
              Tonight you should try...
            </h2>
            <Sparkles size={20} className="text-yellow-400" />
          </div>
        </div>

        {/* Date Card */}
        <DateCard date={date} />

        {/* Dismiss hint */}
        <p className="text-center text-sm text-white/50 mt-4">
          tap anywhere to close
        </p>
      </div>
    </div>
  );
}
