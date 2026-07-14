"use client";

import React, { useState } from "react";
import { partnersConfig } from "@/features/partners/partners.data";

interface OpportunityWheelProps {
  config?: typeof partnersConfig;
}

export default function OpportunityWheel({
  config = partnersConfig,
}: OpportunityWheelProps) {
  const [selectedSeg, setSelectedSeg] = useState(0);
  const activeData = config.pillars[selectedSeg];

  return (
    <section className="py-20 px-6 bg-[#0D0D0E] border-b border-white/5 space-y-8">
      <div>
        <span className="text-[10px] uppercase tracking-widest text-[#E25822] block font-semibold">
          Discovery Vectors
        </span>
        <h2 className="text-2xl font-light text-white tracking-tight mt-1">
          Foundational Vectors
        </h2>
      </div>

      {/* Selector Line Elements */}
      <div className="flex space-x-2 overflow-x-auto pb-4 scrollbar-none border-b border-white/5">
        {config.pillars.map((p, idx) => (
          <button
            key={p.id}
            onClick={() => setSelectedSeg(idx)}
            className={`text-xs uppercase tracking-widest px-4 py-2 flex-shrink-0 border transition-all ${
              selectedSeg === idx
                ? "border-[#E25822] bg-[#E25822]/10 text-white"
                : "border-white/5 text-stone-500"
            }`}
          >
            {p.title.split(" ")[0]}
          </button>
        ))}
      </div>

      {/* Interactive Reveal Area */}
      <div className="bg-black p-6 border border-white/5 space-y-4">
        <p className="text-sm text-stone-300 font-light leading-relaxed">
          {activeData.description}
        </p>

        <div className="pt-4 border-t border-white/10 flex justify-between items-baseline">
          <span className="text-[10px] uppercase text-stone-500">
            Metric Target
          </span>
          <span className="text-sm font-semibold text-[#E25822]">
            {activeData.impact}
          </span>
        </div>
      </div>
    </section>
  );
}
