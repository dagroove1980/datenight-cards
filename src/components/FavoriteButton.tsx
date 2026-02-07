'use client';

import { useState, useEffect } from 'react';
import { Bookmark } from 'lucide-react';
import { isFavorite, toggleFavorite } from '@/lib/favorites';

interface FavoriteButtonProps {
  dateId: string;
}

export default function FavoriteButton({ dateId }: FavoriteButtonProps) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setSaved(isFavorite(dateId));
  }, [dateId]);

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    toggleFavorite(dateId);
    setSaved(!saved);
    // Dispatch custom event so other components (like header badge) can update
    window.dispatchEvent(new CustomEvent('favorites-changed'));
  };

  return (
    <button
      onClick={handleToggle}
      className="transition-colors"
      aria-label={saved ? 'Remove from favorites' : 'Save to favorites'}
    >
      <Bookmark
        size={18}
        fill={saved ? '#E63946' : 'none'}
        style={{ color: saved ? '#E63946' : '#DDDDDD' }}
      />
    </button>
  );
}
