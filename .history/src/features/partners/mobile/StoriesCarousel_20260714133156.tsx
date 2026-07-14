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
  const currentStory = config.successStories[activeIdx];

  if (!currentStory) return null;

  return (
    <section className="py-20 px-8 bg-background-main flex flex-col space-y-10">
      {/* Editorial Header Block with Asymmetric Action Trigger */}
      <div className="flex justify-between items-end gap-4 w-full">
        <div className="space-y-2">
          <span className="text-[10px] uppercase tracking-[0.3em] text-accent block font-medium">
            Case Portfolios
          </span>
          <h2 className="text-3xl font-extralight text-text-primary tracking-tight leading-tight">
            Proven Results
          </h2>
        </div>

        <button
          onClick={() =>
            setActiveIdx((activeIdx + 1) % config.successStories.length)
          }
          className="text-[10px] uppercase tracking-[0.2em] text-text-muted hover:text-text-primary font-medium border-b border-text-primary/10 hover:border-text-primary pb-1 transition-all duration-300 select-none"
        >
          Cycle Case
        </button>
      </div>

      {/* Luxury Typographic Portfolio Card */}
      <div className="bg-surface/30 border-t border-b border-text-primary/5 py-8 space-y-6 transition-all duration-500 ease-out">
        <div className="space-y-1">
          <h3 className="text-lg text-text-primary font-light tracking-tight">
            {currentStory.partner}
          </h3>
          <span className="text-[10px] text-accent uppercase tracking-[0.2em] font-medium block">
            {currentStory.role}
          </span>
        </div>

        {/* Sophisticated Editorial Context Narrative */}
        <p className="text-sm text-text-secondary font-light leading-relaxed italic max-w-2xl pr-4">
          &ldquo;{currentStory.challenge}&rdquo;
        </p>

        {/* Premium Structural Outcome Callout */}
        <div className="pt-6 border-t border-text-primary/5 flex gap-4 items-start">
          <div className="w-[1px] h-12 bg-accent/60 shrink-0 mt-0.5" />
          <div className="text-sm text-text-primary font-light leading-relaxed max-w-xl">
            <span className="text-[9px] uppercase text-text-muted tracking-[0.15em] font-medium block mb-1">
              Architecture Realization
            </span>
            {currentStory.outcome}
          </div>
        </div>
      </div>
    </section>
  );
}
