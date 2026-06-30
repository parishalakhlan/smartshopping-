// src/features/stores/components/MobileStoreStats.tsx
"use client";

import React from "react";
import { MapPin, Globe2, Sparkles, Navigation } from "lucide-react";

export function MobileStoreStats() {
  return (
    <section className="bg-[#FFFFFF] py-10 px-4 border-y border-[#163B65]/10 font-sans md:hidden">
      {/* Optimized 2x2 Dense Layout Grid for Quick Scannability */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-8">
        {/* Stat Item 01 */}
        <div className="flex flex-col gap-2 items-start text-left group">
          <div className="p-2.5 bg-[#F5F2EC] text-[#163B65] rounded-none shrink-0">
            <MapPin className="w-4 h-4 text-[#F97316]" />
          </div>
          <div className="space-y-0.5">
            <span className="block text-2xl font-bold text-[#163B65] font-serif tracking-tight leading-none">
              25+
            </span>
            <span className="block text-[9px] font-bold text-[#F97316] uppercase tracking-wider">
              Showrooms Live
            </span>
            <p className="text-[11px] text-[#475569] leading-tight pt-1">
              Curated physical storefronts.
            </p>
          </div>
        </div>

        {/* Stat Item 02 */}
        <div className="flex flex-col gap-2 items-start text-left group">
          <div className="p-2.5 bg-[#F5F2EC] text-[#163B65] rounded-none shrink-0">
            <Globe2 className="w-4 h-4" />
          </div>
          <div className="space-y-0.5">
            <span className="block text-2xl font-bold text-[#163B65] font-serif tracking-tight leading-none">
              8
            </span>
            <span className="block text-[9px] font-bold text-[#163B65] uppercase tracking-wider">
              Global Brands
            </span>
            <p className="text-[11px] text-[#475569] leading-tight pt-1">
              International design houses.
            </p>
          </div>
        </div>

        {/* Stat Item 03 */}
        <div className="flex flex-col gap-2 items-start text-left group">
          <div className="p-2.5 bg-[#F5F2EC] text-[#163B65] rounded-none shrink-0">
            <Sparkles className="w-4 h-4" />
          </div>
          <div className="space-y-0.5">
            <span className="block text-2xl font-bold text-[#163B65] font-serif tracking-tight leading-none">
              50k+
            </span>
            <span className="block text-[9px] font-bold text-[#163B65] uppercase tracking-wider">
              Clients Served
            </span>
            <p className="text-[11px] text-[#475569] leading-tight pt-1">
              Personalized design curation.
            </p>
          </div>
        </div>

        {/* Stat Item 04 */}
        <div className="flex flex-col gap-2 items-start text-left group">
          <div className="p-2.5 bg-[#F5F2EC] text-[#163B65] rounded-none shrink-0">
            <Navigation className="w-4 h-4" />
          </div>
          <div className="space-y-0.5">
            <span className="block text-2xl font-bold text-[#163B65] font-serif tracking-tight leading-none">
              5 States
            </span>
            <span className="block text-[9px] font-bold text-[#163B65] uppercase tracking-wider">
              Territories Open
            </span>
            <p className="text-[11px] text-[#475569] leading-tight pt-1">
              Spanning key luxury markets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
