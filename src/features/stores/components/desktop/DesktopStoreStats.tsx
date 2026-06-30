// src/features/stores/components/DesktopStoreStats.tsx
import React from "react";
import { MapPin, Globe2, Sparkles, Navigation } from "lucide-react";

export function DesktopStoreStats() {
  return (
    <section className="hidden md:block bg-[#FFFFFF] py-16 lg:py-20 px-4 sm:px-6 lg:px-8 border-y border-[#163B65]/10 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        {/* Stat Item 01 */}
        <div className="flex gap-4 items-start p-2 text-left group">
          <div className="p-3 bg-[#F5F2EC] text-[#163B65] group-hover:text-[#F97316] transition-colors duration-300 rounded-none shrink-0">
            <MapPin className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <span className="block text-3xl sm:text-4xl font-bold text-[#163B65] font-serif tracking-tight leading-none">
              25+
            </span>
            <span className="block text-[10px] font-bold text-[#F97316] uppercase tracking-widest">
              Showrooms Live
            </span>
            <span className="text-xs text-[#475569] block leading-relaxed">
              Curated, premium physical storefronts.
            </span>
          </div>
        </div>

        {/* Stat Item 02 */}
        <div className="flex gap-4 items-start p-2 text-left group">
          <div className="p-3 bg-[#F5F2EC] text-[#163B65] group-hover:text-[#F97316] transition-colors duration-300 rounded-none shrink-0">
            <Globe2 className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <span className="block text-3xl sm:text-4xl font-bold text-[#163B65] font-serif tracking-tight leading-none">
              8
            </span>
            <span className="block text-[10px] font-bold text-[#163B65] uppercase tracking-widest">
              Global Brands
            </span>
            <span className="text-xs text-[#475569] block leading-relaxed">
              International design houses housed under one floor.
            </span>
          </div>
        </div>

        {/* Stat Item 03 */}
        <div className="flex gap-4 items-start p-2 text-left group">
          <div className="p-3 bg-[#F5F2EC] text-[#163B65] group-hover:text-[#F97316] transition-colors duration-300 rounded-none shrink-0">
            <Sparkles className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <span className="block text-3xl sm:text-4xl font-bold text-[#163B65] font-serif tracking-tight leading-none">
              50k+
            </span>
            <span className="block text-[10px] font-bold text-[#163B65] uppercase tracking-widest">
              Clients Served
            </span>
            <span className="text-xs text-[#475569] block leading-relaxed">
              Providing personalized attention and dedicated styling.
            </span>
          </div>
        </div>

        {/* Stat Item 04 */}
        <div className="flex gap-4 items-start p-2 text-left group">
          <div className="p-3 bg-[#F5F2EC] text-[#163B65] group-hover:text-[#F97316] transition-colors duration-300 rounded-none shrink-0">
            <Navigation className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <span className="block text-3xl sm:text-4xl font-bold text-[#163B65] font-serif tracking-tight leading-none">
              5 States
            </span>
            <span className="block text-[10px] font-bold text-[#163B65] uppercase tracking-widest">
              Territories Open
            </span>
            <span className="text-xs text-[#475569] block leading-relaxed">
              Expansive presence spanning key regional luxury markets.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
