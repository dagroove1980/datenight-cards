import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-[#F0EEEB] mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Tagline */}
          <div>
            <div className="flex items-center gap-0 mb-2">
              <span className="font-heading text-lg font-bold text-[#1A1A1A]">DateNight</span>
              <span className="font-heading text-lg font-bold text-[#E63946]">Plan</span>
            </div>
            <p className="text-sm text-[#999999] max-w-md">
              Curated date ideas for people who&apos;ve run out of ideas.
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-[#999999]">
            <Link href="/about" className="hover:text-[#1A1A1A] transition-colors">
              About
            </Link>
            <a
              href="mailto:hello@date-night-plan.com"
              className="hover:text-[#1A1A1A] transition-colors"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Social placeholder */}
        <div className="mt-8 pt-6 border-t border-[#F0EEEB] flex items-center justify-between">
          <p className="text-xs text-[#CCCCCC]">
            &copy; {new Date().getFullYear()} DateNightPlan
          </p>
          <div className="flex items-center gap-4 text-xs text-[#CCCCCC]">
            <span>Instagram</span>
            <span>Pinterest</span>
            <span>X / Twitter</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
