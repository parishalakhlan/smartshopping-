import Link from "next/link";
import { Store, ArrowRight } from "lucide-react";

export default function HomeCTA() {
  return (
    <section className="relative py-24 bg-[#163B65] overflow-hidden">
      {/* Decorative brand layout background parameters */}
      <div className="absolute inset-0 opacity-5 pointer-events-none mix-blend-overlay">
        <div className="absolute top-10 left-10 text-9xl font-serif text-white font-bold select-none">
          SMART
        </div>
        <div className="absolute bottom-10 right-10 text-9xl font-serif text-white font-bold select-none">
          SHOPPING
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h2 className="font-serif text-3xl sm:text-5xl font-normal mb-6 tracking-tight leading-tight">
          Discover International Fashion Near You
        </h2>
        <p className="font-sans text-slate-300 font-light text-base sm:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          Visit one of our premium retail destinations and experience
          internationally recognized fashion brands closer to home.
        </p>

        {/* Accent Orange Active Component CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/store-locator"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-[#F97316] hover:bg-[#ea580c] text-white font-sans font-medium uppercase tracking-wider text-sm transition-all shadow-md rounded-sm"
          >
            <Store className="w-4 h-4 mr-2" />
            Find Store
          </Link>
          <Link
            href="#featured-brands"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-transparent hover:bg-white/10 text-white border border-white/20 font-sans font-medium uppercase tracking-wider text-sm transition-all rounded-sm"
          >
            Explore Brands
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
