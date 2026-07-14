"use client";

import React, { useState } from "react";
import { partnersConfig } from "@/features/partners/partners.data";

interface StoriesCarouselProps {
  config?: typeof partnersConfig;
}

export default function StoriesCarousel({
  config = partnersConfig,
}: StoriesCarouselProps) {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="py-20 px-6 bg-[#0D0D0E] border-b border-white/5 space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <span className="text-[10px] uppercase tracking-widest text-[#E25822] block font-semibold">
            Case Portfolios
          </span>
          <h2 className="text-2xl font-light text-white tracking-tight mt-1">
            Proven Results
          </h2>
        </div>
        <button
          onClick={() =>
            setActiveIdx((activeIdx + 1) % config.successStories.length)
          }
          className="text-[10px] uppercase tracking-widest text-stone-400 font-medium border border-white/10 px-3 py-1"
        >
          Cycle Case
        </button>
      </div>

      <div className="bg-black border border-white/5 p-5 space-y-4">
        <div>
          <h3 className="text-base text-white font-light">
            {config.successStories[activeIdx].partner}
          </h3>
          <span className="text-[10px] text-[#E25822] uppercase tracking-wider font-mono block mt-0.5">
            {config.successStories[activeIdx].role}
          </span>
        </div>
        <p className="text-xs text-stone-400 font-light leading-relaxed italic">
          {config.successStories[activeIdx].challenge}
        </p>
        <div className="pt-3 border-t border-white/10 text-xs text-stone-200 font-light bg-[#131315] p-3 border-l-2 border-[#E25822]">
          {config.successStories[activeIdx].outcome}
        </div>
      </div>
    </section>
  );
}
