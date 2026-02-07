import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Heart } from 'lucide-react';

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="max-w-md mx-auto px-4 py-20 text-center">
        <div
          className="flex items-center justify-center mx-auto mb-6"
          style={{
            width: 64,
            height: 64,
            borderRadius: 16,
            backgroundColor: 'rgba(230, 57, 70, 0.08)',
          }}
        >
          <Heart size={28} style={{ color: '#E63946' }} />
        </div>
        <h1 className="font-heading text-2xl font-bold text-[#1A1A1A] mb-3">
          Page not found
        </h1>
        <p className="text-sm text-[#999999] mb-6">
          This date idea doesn&apos;t exist — but plenty of great ones do.
        </p>
        <Link
          href="/"
          className="inline-block bg-[#E63946] text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-[#d32f3e] transition-colors"
        >
          Browse date ideas
        </Link>
      </main>
      <Footer />
    </>
  );
}
