"use client";

import React from "react";
import { MapPin, Globe2, Sparkles, Navigation } from "lucide-react";
import { storesConfig } from "@/features/stores/data/stores";

export function DesktopStoreStats() {
  const { stores, regionalFootprints } = storesConfig;

  // Calculate dynamic stats
  const totalStores = stores.length;
  const totalBrands = new Set(stores.flatMap((store) => store.brands)).size;
  const totalStates = new Set(stores.map((store) => store.state)).size;

  return (
    <section className="hidden md:block bg-background-main py-16 lg:py-20 px-4 sm:px-6 lg:px-8 border-y border-border-main font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        {/* Stat Item 01 */}
        <div className="flex gap-4 items-start p-2 text-left group">
          <div className="p-3 bg-background-secondary text-button-primary-bg group-hover:text-accent transition-colors duration-300 rounded-none shrink-0">
            <MapPin className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <span className="block text-3xl sm:text-4xl font-bold text-button-primary-bg font-serif tracking-tight leading-none">
              {totalStores}+
            </span>
            <span className="block text-[10px] font-bold text-accent uppercase tracking-widest">
              Showrooms Live
            </span>
            <span className="text-xs text-text-secondary block leading-relaxed">
              Curated, premium physical storefronts.
            </span>
          </div>
        </div>

        {/* Stat Item 02 */}
        <div className="flex gap-4 items-start p-2 text-left group">
          <div className="p-3 bg-background-secondary text-button-primary-bg group-hover:text-accent transition-colors duration-300 rounded-none shrink-0">
            <Globe2 className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <span className="block text-3xl sm:text-4xl font-bold text-button-primary-bg font-serif tracking-tight leading-none">
              {totalBrands}
            </span>
            <span className="block text-[10px] font-bold text-button-primary-bg uppercase tracking-widest">
              Global Brands
            </span>
            <span className="text-xs text-text-secondary block leading-relaxed">
              International design houses housed under one floor.
            </span>
          </div>
        </div>

        {/* Stat Item 03 */}
        <div className="flex gap-4 items-start p-2 text-left group">
          <div className="p-3 bg-background-secondary text-button-primary-bg group-hover:text-accent transition-colors duration-300 rounded-none shrink-0">
            <Sparkles className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <span className="block text-3xl sm:text-4xl font-bold text-button-primary-bg font-serif tracking-tight leading-none">
              50k+
            </span>
            <span className="block text-[10px] font-bold text-button-primary-bg uppercase tracking-widest">
              Clients Served
            </span>
            <span className="text-xs text-text-secondary block leading-relaxed">
              Providing personalized attention and dedicated styling.
            </span>
          </div>
        </div>

        {/* Stat Item 04 */}
        <div className="flex gap-4 items-start p-2 text-left group">
          <div className="p-3 bg-background-secondary text-button-primary-bg group-hover:text-accent transition-colors duration-300 rounded-none shrink-0">
            <Navigation className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <span className="block text-3xl sm:text-4xl font-bold text-button-primary-bg font-serif tracking-tight leading-none">
              {totalStates} States
            </span>
            <span className="block text-[10px] font-bold text-button-primary-bg uppercase tracking-widest">
              Territories Open
            </span>
            <span className="text-xs text-text-secondary block leading-relaxed">
              Expansive presence spanning key regional luxury markets.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
