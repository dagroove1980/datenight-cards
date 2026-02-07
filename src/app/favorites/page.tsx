'use client';

import { useState, useEffect } from 'react';
import type { DateIdea } from '@/types/date';
import { getAllDates } from '@/lib/dates';
import { getFavorites } from '@/lib/favorites';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DateGrid from '@/components/DateGrid';

export default function FavoritesPage() {
  const [favoriteDates, setFavoriteDates] = useState<DateIdea[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const loadFavorites = () => {
      const favIds = getFavorites();
      const allDates = getAllDates();
      const matched = allDates.filter((d) => favIds.includes(d.id));
      setFavoriteDates(matched);
      setLoaded(true);
    };

    loadFavorites();
    window.addEventListener('favorites-changed', loadFavorites);
    return () => window.removeEventListener('favorites-changed', loadFavorites);
  }, []);

  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-4 pt-8 pb-20">
        <h1 className="font-heading text-3xl font-bold text-[#1A1A1A] mb-2">
          Your Favorites
        </h1>
        <p className="text-sm text-[#999999] mb-8">
          Dates you&apos;ve bookmarked for later.
        </p>

        {loaded && (
          <DateGrid
            dates={favoriteDates}
            emptyTitle="No favorites yet"
            emptyMessage="Browse and tap the bookmark icon on any date you love."
          />
        )}
      </main>
      <Footer />
    </>
  );
}
