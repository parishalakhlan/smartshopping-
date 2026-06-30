// src/features/stores/components/DesktopStateDiscovery.tsx
import React from "react";
import { ArrowUpRight } from "lucide-react";
import { REGIONAL_FOOTPRINTS } from "@/features/stores/data/stores";

export function DesktopStateDiscovery() {
  return (
    <section
      id="state-expansion-desktop"
      className="hidden md:block bg-[#F5F2EC] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-[#163B65]/10 font-sans"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Editorial Section Header */}
        <div className="max-w-3xl space-y-3 text-left">
          <span className="text-[#F97316] font-semibold tracking-[0.25em] text-xs uppercase block">
            TERRITORIAL PRESENCE // ATELIER NETWORK
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#163B65] font-bold tracking-tight">
            Our Regional Footprints
          </h2>
          <p className="text-sm sm:text-base text-[#475569] font-normal leading-relaxed max-w-xl">
            A curated distribution matrix across major territories, establishing
            fully integrated retail destinations and experiential physical
            spaces.
          </p>
        </div>

        {/* 4-Column Balanced Editorial Layout Array */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {REGIONAL_FOOTPRINTS.map((footprint) => (
            <div
              key={footprint.id}
              className="bg-[#FFFFFF] p-6 rounded-none border border-[#163B65]/10 transition-all duration-400 group flex flex-col justify-between hover:shadow-lg hover:border-[#F97316]/30 relative overflow-hidden text-left"
            >
              <div className="space-y-6">
                {/* Meta Numeric Layer */}
                <div className="text-[10px] font-bold tracking-widest text-[#F97316]">
                  REGIONAL ZONE // 0{footprint.id || footprint.name.length}
                </div>

                <div className="space-y-1.5">
                  <h3 className="font-serif text-2xl font-bold text-[#163B65] tracking-tight group-hover:text-[#F97316] transition-colors duration-300">
                    {footprint.name}
                  </h3>
                  <p className="text-xs text-[#475569]/80 font-medium tracking-tight">
                    {footprint.count} Active Flagship Showrooms
                  </p>
                </div>

                {/* City Tags Micro Array */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {footprint.cities.slice(0, 3).map((city, idx) => (
                    <span
                      key={idx}
                      className="bg-[#F5F2EC]/60 text-[#163B65] text-[10px] font-semibold px-2.5 py-1 rounded-none border border-[#163B65]/5 uppercase tracking-wider"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>

              {/* Explicit Clean Action Navigation Bridge */}
              <a
                href="#locator-workspace-desktop"
                className="mt-8 pt-4 border-t border-[#163B65]/5 flex items-center justify-between text-xs font-bold text-[#163B65] group-hover:text-[#F97316] transition-colors duration-300 uppercase tracking-wider"
              >
                <span>Explore Directory</span>
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </a>

              {/* Subtle Interactive Edge Accent */}
              <div className="absolute top-0 left-0 h-[2px] bg-[#F97316] w-0 group-hover:w-full transition-all duration-500 ease-out" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
