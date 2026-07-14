import React, { useState } from "react";
import { Globe } from "lucide-react";
import { regionalRegions } from "@/features/partners/partners.data";
import SectionHeader from "../shared/SectionHeader";

export default function GrowthNetwork() {
  const [selectedRegion, setSelectedRegion] = useState<string>(
    regionalRegions[0].id,
  );
  const activeRegionData = regionalRegions.find(
    (r) => r.id === selectedRegion,
  )!;

  return (
    <section className="py-32 px-24 bg-[#0D0D0E] border-b border-white/5 grid grid-cols-12 gap-16 items-center">
      {/* Editorial Overview Data */}
      <div className="col-span-5 space-y-8">
        <SectionHeader
          badge="Territorial Presence"
          title="The Growth Matrix"
          description="We actively track, map, and secure prime retail nodes across emerging high-income luxury sectors globally. Select a corridor to audit current footprints and dynamic pipeline allocations."
        />

        <div className="p-8 bg-[#131315] border border-white/5 space-y-6">
          <h3 className="text-xl text-white font-light border-b border-white/10 pb-3 flex items-center gap-2">
            <Globe size={18} className="text-[#E25822]" />{" "}
            {activeRegionData.name}
          </h3>

          <div>
            <span className="text-xs text-stone-500 uppercase tracking-wider block">
              Established Footprint
            </span>
            <p className="text-sm text-stone-200 mt-1">
              {activeRegionData.presence}
            </p>
          </div>

          <div>
            <span className="text-xs text-stone-500 uppercase tracking-wider block">
              Targeted Pipeline Opportunities
            </span>
            <p className="text-sm text-[#E25822] font-light mt-1">
              {activeRegionData.opportunities}
            </p>
          </div>

          <div className="pt-4 border-t border-white/10">
            <span className="text-xs text-stone-500 uppercase tracking-wider block">
              Macro Strategic Vision
            </span>
            <p className="text-xs text-stone-400 italic mt-1 leading-relaxed">
              {activeRegionData.vision}
            </p>
          </div>
        </div>
      </div>

      {/* Abstract Map Canvas */}
      <div className="col-span-7 relative h-[500px] bg-black border border-white/5 rounded-none overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(#1e1e21_1px,transparent_1px)] [background-size:24px_24px] opacity-60" />

        {/* Decorative Constellation Vectors */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
          <line
            x1="45%"
            y1="30%"
            x2="30%"
            y2="55%"
            stroke="white"
            strokeWidth="1"
            strokeDasharray="4"
          />
          <line
            x1="30%"
            y1="55%"
            x2="50%"
            y2="80%"
            stroke="white"
            strokeWidth="1"
            strokeDasharray="4"
          />
          <line
            x1="50%"
            y1="80%"
            x2="75%"
            y2="45%"
            stroke="white"
            strokeWidth="1"
            strokeDasharray="4"
          />
          <line
            x1="75%"
            y1="45%"
            x2="45%"
            y2="30%"
            stroke="white"
            strokeWidth="1"
            strokeDasharray="4"
          />
        </svg>

        {regionalRegions.map((region) => {
          const isSelected = selectedRegion === region.id;
          return (
            <button
              key={region.id}
              onClick={() => setSelectedRegion(region.id)}
              className="absolute transform -translate-x-1/12 -translate-y-1/12 group focus:outline-none"
              style={{
                left: `${region.coordinates.x}%`,
                top: `${region.coordinates.y}%`,
              }}
            >
              <span className="relative flex h-5 w-5 items-center justify-center">
                {isSelected && (
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E25822] opacity-40" />
                )}
                <span
                  className={`relative inline-flex rounded-full h-3 w-3 transition-transform duration-300 group-hover:scale-125 ${
                    isSelected ? "bg-[#E25822]" : "bg-stone-600"
                  }`}
                />
              </span>
              <span
                className={`absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] tracking-widest uppercase px-2 py-1 bg-[#131315] border transition-colors duration-300 ${
                  isSelected
                    ? "border-[#E25822] text-white"
                    : "border-white/10 text-stone-400"
                }`}
              >
                {region.name}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
