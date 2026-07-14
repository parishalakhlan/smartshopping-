"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { storesConfig } from "@/features/stores/data/stores";

export function MobileStateDiscovery() {
  const { regionalFootprints, metadata } = storesConfig;

  return (
    <section
      id="state-expansion-mobile"
      className="bg-background-secondary py-16 px-6 border-t border-border-main font-sans md:hidden overflow-hidden"
    >
      <div className="space-y-8">
        {/* Luxury Mobile Heading */}
        <div className="space-y-2 text-left">
          <span className="text-accent font-mono tracking-[0.2em] text-[10px] font-bold uppercase block">
            {metadata.sectionTitles.network}
          </span>
          <h2 className="font-serif text-3xl text-button-primary-bg font-extrabold tracking-tight leading-tight">
            Our Regional
            <br />
            Footprints
          </h2>
          <p className="text-xs text-text-secondary font-medium leading-relaxed max-w-xs">
            A curated distribution matrix across major territories, establishing
            integrated physical destinations.
          </p>
        </div>

        {/* Horizontal Progressive Carousel Track */}
        <div className="flex gap-4 overflow-x-auto pb-6 pt-2 scrollbar-none snap-x snap-mandatory -mx-6 px-6">
          {regionalFootprints.map((footprint) => (
            <div
              key={footprint.id}
              className="bg-card-bg p-6 rounded-none border border-border-main flex flex-col justify-between w-[280px] shrink-0 snap-start relative shadow-sm"
            >
              <div className="space-y-5 text-left">
                {/* Meta Numeric Strip */}
                <div className="text-[9px] font-mono font-bold tracking-widest text-accent">
                  ZONE // 0{footprint.id || footprint.name.length}
                </div>

                <div className="space-y-1">
                  <h3 className="font-serif text-xl font-bold text-button-primary-bg tracking-tight">
                    {footprint.name}
                  </h3>
                  <p className="text-[11px] text-text-secondary/90 font-semibold tracking-tight">
                    {footprint.count} Active Showrooms
                  </p>
                </div>

                {/* City Badges Wrapped Array */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {footprint.cities.slice(0, 3).map((city, idx) => (
                    <span
                      key={idx}
                      className="bg-background-secondary/70 text-button-primary-bg text-[9px] font-bold px-2 py-0.5 border border-border-main uppercase tracking-wide"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Tap Strip */}
              <a
                href="#locator-workspace-mobile"
                className="mt-8 pt-4 border-t border-border-main flex items-center justify-between text-[11px] font-bold text-button-primary-bg uppercase tracking-wider"
              >
                <span>Explore Directory</span>
                <ArrowRight className="w-3.5 h-3.5 text-accent" />
              </a>

              {/* Visual Accent Top Bar */}
              <div className="absolute top-0 left-0 h-[2px] bg-accent w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
