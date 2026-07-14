"use client";

import React from "react";
import { MapPin, Globe2, Sparkles, Navigation } from "lucide-react";
import { storesConfig } from "@/features/stores/data/stores";

export function MobileStoreStats() {
  const { stores, regionalFootprints } = storesConfig;

  // Calculate dynamic stats
  const totalStores = stores.length;
  const totalBrands = new Set(stores.flatMap((store) => store.brands)).size;
  const totalStates = new Set(stores.map((store) => store.state)).size;

  return (
    <section className="bg-background-main py-10 px-4 border-y border-border-main font-sans md:hidden">
      {/* Optimized 2x2 Dense Layout Grid for Quick Scannability */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-8">
        {/* Stat Item 01 */}
        <div className="flex flex-col gap-2 items-start text-left group">
          <div className="p-2.5 bg-background-secondary text-button-primary-bg rounded-none shrink-0">
            <MapPin className="w-4 h-4 text-accent" />
          </div>
          <div className="space-y-0.5">
            <span className="block text-2xl font-bold text-button-primary-bg font-serif tracking-tight leading-none">
              {totalStores}+
            </span>
            <span className="block text-[9px] font-bold text-accent uppercase tracking-wider">
              Showrooms Live
            </span>
            <p className="text-[11px] text-text-secondary leading-tight pt-1">
              Curated physical storefronts.
            </p>
          </div>
        </div>

        {/* Stat Item 02 */}
        <div className="flex flex-col gap-2 items-start text-left group">
          <div className="p-2.5 bg-background-secondary text-button-primary-bg rounded-none shrink-0">
            <Globe2 className="w-4 h-4" />
          </div>
          <div className="space-y-0.5">
            <span className="block text-2xl font-bold text-button-primary-bg font-serif tracking-tight leading-none">
              {totalBrands}
            </span>
            <span className="block text-[9px] font-bold text-button-primary-bg uppercase tracking-wider">
              Global Brands
            </span>
            <p className="text-[11px] text-text-secondary leading-tight pt-1">
              International design houses.
            </p>
          </div>
        </div>

        {/* Stat Item 03 */}
        <div className="flex flex-col gap-2 items-start text-left group">
          <div className="p-2.5 bg-background-secondary text-button-primary-bg rounded-none shrink-0">
            <Sparkles className="w-4 h-4" />
          </div>
          <div className="space-y-0.5">
            <span className="block text-2xl font-bold text-button-primary-bg font-serif tracking-tight leading-none">
              50k+
            </span>
            <span className="block text-[9px] font-bold text-button-primary-bg uppercase tracking-wider">
              Clients Served
            </span>
            <p className="text-[11px] text-text-secondary leading-tight pt-1">
              Personalized design curation.
            </p>
          </div>
        </div>

        {/* Stat Item 04 */}
        <div className="flex flex-col gap-2 items-start text-left group">
          <div className="p-2.5 bg-background-secondary text-button-primary-bg rounded-none shrink-0">
            <Navigation className="w-4 h-4" />
          </div>
          <div className="space-y-0.5">
            <span className="block text-2xl font-bold text-button-primary-bg font-serif tracking-tight leading-none">
              {totalStates} States
            </span>
            <span className="block text-[9px] font-bold text-button-primary-bg uppercase tracking-wider">
              Territories Open
            </span>
            <p className="text-[11px] text-text-secondary leading-tight pt-1">
              Spanning key luxury markets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
