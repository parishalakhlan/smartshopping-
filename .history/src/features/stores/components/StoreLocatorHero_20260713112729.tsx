"use client";

import React from "react";
import Image from "next/image";
import { Compass, MapPin, Award } from "lucide-react";
import { storesConfig } from "@/features/stores/data/stores";

export function StoreLocatorHero() {
  const { stores, regionalFootprints, metadata } = storesConfig;

  // Calculate dynamic stats
  const totalStores = stores.length;
  const totalBrands = new Set(stores.flatMap((store) => store.brands)).size;
  const totalStates = new Set(stores.map((store) => store.state)).size;

  return (
    <section className="bg-[#FFFFFF] border-b border-[#163B65]/10 py-16 lg:py-24 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column Text Block */}
        <div className="lg:col-span-6 space-y-8 text-left">
          {/* Curated Sub-badge Layer */}
          <div className="inline-flex items-center gap-2 bg-[#F5F2EC] text-[#163B65] px-3 py-1.5 rounded-none text-xs font-semibold tracking-widest uppercase">
            <Award className="w-3.5 h-3.5 text-[#F97316]" />
            {totalBrands} International Houses
          </div>

          {/* Premium Typography Stack */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#163B65] font-bold tracking-tight leading-[1.05]">
              Find Your Nearest <br />
              <span className="text-[#F97316]">Showroom Floor</span>
            </h1>
            <p className="text-sm sm:text-base text-[#475569] font-normal max-w-xl leading-relaxed">
              Bringing authentic international retail environments and
              structural experiential spaces to curated regional centers across
              North India. Experience our collections in person.
            </p>
          </div>

          {/* Geometric Action Triggers */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#locator-workspace"
              className="px-8 py-4 bg-[#163B65] hover:bg-[#F97316] text-[#FFFFFF] text-xs font-bold uppercase tracking-widest rounded-none shadow-sm transition-all duration-300"
            >
              Locate Showroom
            </a>
            <a
              href="#state-expansion"
              className="px-8 py-4 bg-[#FFFFFF] border border-[#163B65]/10 text-[#163B65] text-xs font-bold uppercase tracking-widest rounded-none hover:border-[#163B65] transition-all duration-300"
            >
              Explore Regional Network
            </a>
          </div>

          {/* Core Brand Analytics Row */}
          <div className="pt-8 border-t border-[#163B65]/10 grid grid-cols-3 gap-6">
            <div>
              <span className="block text-2xl sm:text-3xl font-bold text-[#F97316] font-serif tracking-tight">
                {totalStores}+
              </span>
              <span className="text-[10px] text-[#475569]/80 font-bold uppercase tracking-wider">
                Flagship Spaces
              </span>
            </div>
            <div>
              <span className="block text-2xl sm:text-3xl font-bold text-[#163B65] font-serif tracking-tight">
                {totalBrands}
              </span>
              <span className="text-[10px] text-[#475569]/80 font-bold uppercase tracking-wider">
                Global Houses
              </span>
            </div>
            <div>
              <span className="block text-2xl sm:text-3xl font-bold text-[#163B65] font-serif tracking-tight">
                {totalStates}
              </span>
              <span className="text-[10px] text-[#475569]/80 font-bold uppercase tracking-wider">
                Territories
              </span>
            </div>
          </div>
        </div>

        {/* Right Column Experiential Visual Card */}
        <div className="lg:col-span-6 relative rounded-none overflow-hidden shadow-lg h-[360px] sm:h-[460px] group border border-[#163B65]/10 bg-[#F5F2EC]">
          {/* Performance-Optimized Next.js Image Layer */}
          <Image
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80"
            alt="Flagship Showroom Space"
            fill
            sizes="(max-w-7xl) 50vw, 100vw"
            className="object-cover grayscale contrast-[1.03] opacity-35 mix-blend-multiply group-hover:scale-102 transition-transform duration-700 ease-out"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#163B65]/95 via-[#163B65]/80 to-[#0F172A] mix-blend-normal" />

          {/* Card Overlay Floating Content */}
          <div className="absolute inset-0 p-8 flex flex-col justify-between z-10 text-left text-[#FFFFFF]">
            <div className="flex justify-between items-start gap-4">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#F97316] font-bold">
                  TERRITORIAL ARCHITECTURE
                </p>
                <h3 className="text-xl sm:text-2xl font-serif font-bold tracking-tight mt-1 text-[#FFFFFF]">
                  The North India Network
                </h3>
              </div>
              <Compass className="w-6 h-6 text-[#F97316] shrink-0" />
            </div>

            {/* Embedded Micro Context Information Block */}
            <div className="space-y-2 max-w-sm">
              <div className="bg-[#FFFFFF]/5 backdrop-blur-md p-4 rounded-none border border-[#FFFFFF]/10 flex items-start gap-3.5">
                <MapPin className="w-4 h-4 text-[#F97316] shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#FFFFFF]">
                    Central Curation Hub
                  </p>
                  <p className="text-[11px] text-[#F5F2EC]/70 font-normal leading-relaxed">
                    Showrooms architectural layouts are designed for effortless
                    personal curation and multi-line discovery.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Structural Top Highlight Bar */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#F97316] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        </div>
      </div>
    </section>
  );
}
