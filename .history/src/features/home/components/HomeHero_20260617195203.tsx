import Image from "next/image";
import Link from "next/link";
import {
  Store,
  ArrowRight,
  ShieldCheck,
  Globe,
  Milestone,
  Award,
} from "lucide-react";

export default function HomeHero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-between overflow-hidden bg-[#163B65]">
      {/* Background Showroom Imagery */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2000&auto=format&fit=crop"
          alt="Smart Shopping Premium Showroom Ambience"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center transform scale-105 animate-[pulse_8s_ease-in-out_infinite]"
        />
        {/* Subtle deep blue gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#163B65]/95 via-[#163B65]/80 to-transparent max-md:bg-[#163B65]/90" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 flex flex-col justify-center h-full">
        <div className="max-w-2xl text-white">
          <span className="inline-block text-[#F97316] font-sans font-semibold tracking-[0.2em] text-xs sm:text-sm uppercase mb-4">
            NORTH INDIA'S LEADING MULTI-BRAND FASHION RETAIL GROUP
          </span>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-normal leading-[1.1] mb-6 tracking-tight">
            International Fashion. <br />
            <span className="italic font-light text-slate-200">
              Closer To Home.
            </span>
          </h1>

          <p className="font-sans text-base sm:text-xl text-slate-300 font-light mb-10 max-w-xl leading-relaxed">
            Bringing globally recognized fashion brands to Tier 2 & Tier 3
            cities through a trusted network of premium retail destinations.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-14">
            <Link
              href="/store-locator"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#F97316] hover:bg-[#ea580c] text-white font-sans font-medium rounded-sm transition-all duration-300 group shadow-md"
            >
              <Store className="w-5 h-5 mr-2" />
              Find Store
            </Link>
            <Link
              href="#featured-brands"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent hover:bg-white/10 text-white border border-white/30 font-sans font-medium rounded-sm transition-all duration-300"
            >
              Explore Brands
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Trust Indicators displayed as Premium Chips */}
          <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-white/10">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-sm font-sans text-white font-medium">
              <Store className="w-4 h-4 mr-2 text-[#F97316]" />
              27+ Stores
            </div>
            <div className="inline-flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-sm font-sans text-white font-medium">
              <Globe className="w-4 h-4 mr-2 text-[#F97316]" />7 States
            </div>
            <div className="inline-flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-sm font-sans text-white font-medium">
              <Milestone className="w-4 h-4 mr-2 text-[#F97316]" />
              15+ Years
            </div>
            <div className="inline-flex items-center bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-sm font-sans text-white font-medium">
              <Award className="w-4 h-4 mr-2 text-[#F97316]" />7 International
              Brands
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
