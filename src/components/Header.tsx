'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Dices, Menu, X, Bookmark } from 'lucide-react';
import { getFavorites } from '@/lib/favorites';

interface HeaderProps {
  onSurpriseMe?: () => void;
}

export default function Header({ onSurpriseMe }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [favCount, setFavCount] = useState(0);

  useEffect(() => {
    const updateCount = () => setFavCount(getFavorites().length);
    updateCount();
    window.addEventListener('favorites-changed', updateCount);
    return () => window.removeEventListener('favorites-changed', updateCount);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-[#FAF9F7]/90 backdrop-blur-md border-b border-[#F0EEEB]">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-0 shrink-0">
          <span className="font-heading text-xl font-bold text-[#1A1A1A]">DateNight</span>
          <span className="font-heading text-xl font-bold text-[#E63946]">Plan</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className="text-sm text-[#999999] hover:text-[#1A1A1A] transition-colors"
          >
            Browse
          </Link>
          <Link
            href="/about"
            className="text-sm text-[#999999] hover:text-[#1A1A1A] transition-colors"
          >
            About
          </Link>
          <Link
            href="/favorites"
            className="text-sm text-[#999999] hover:text-[#1A1A1A] transition-colors flex items-center gap-1.5"
          >
            <Bookmark size={14} />
            Favorites
            {favCount > 0 && (
              <span className="bg-[#E63946] text-white text-[10px] font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                {favCount}
              </span>
            )}
          </Link>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <button
            onClick={onSurpriseMe}
            className="flex items-center gap-2 bg-[#E63946] text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-[#d32f3e] transition-colors"
          >
            <Dices size={16} />
            <span className="hidden sm:inline">Surprise Me</span>
          </button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-[#1A1A1A]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-[#F0EEEB] bg-[#FAF9F7] px-4 py-4 space-y-3">
          <Link
            href="/"
            className="block text-sm text-[#1A1A1A]"
            onClick={() => setMenuOpen(false)}
          >
            Browse
          </Link>
          <Link
            href="/about"
            className="block text-sm text-[#1A1A1A]"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/favorites"
            className="block text-sm text-[#1A1A1A] flex items-center gap-2"
            onClick={() => setMenuOpen(false)}
          >
            Favorites
            {favCount > 0 && (
              <span className="bg-[#E63946] text-white text-[10px] font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                {favCount}
              </span>
            )}
          </Link>
        </div>
      )}
    </header>
  );
}
