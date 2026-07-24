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
    <section className="py-20 px-6 sm:px-8 bg-surface flex flex-col space-y-10 border-t-2 border-border-main transition-colors duration-300">
      {/* Editorial Header Block with High-Contrast Action Trigger */}
      <div className="flex justify-between items-end gap-4 w-full">
        <div className="space-y-2">
          <span className="text-xs uppercase tracking-[0.3em] text-accent block font-extrabold">
            Case Portfolios
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight leading-tight">
            Proven Results
          </h2>
        </div>

        <button
          onClick={() =>
            setActiveIdx((activeIdx + 1) % config.successStories.length)
          }
          className="px-4 py-2.5 bg-card-bg border-2 border-border-main text-[11px] uppercase tracking-[0.2em] text-text-primary font-extrabold hover:border-accent hover:text-accent transition-all duration-300 select-none shadow-sm active:scale-95"
        >
          Cycle Case
        </button>
      </div>

      {/* High-Contrast Portfolio Card */}
      <div className="bg-card-bg border-2 border-border-main p-6 sm:p-8 space-y-6 transition-all duration-300 ease-out shadow-sm">
        <div className="space-y-1">
          <h3 className="text-xl text-text-primary font-bold tracking-tight">
            {currentStory.partner}
          </h3>
          <span className="text-xs text-accent uppercase tracking-[0.2em] font-extrabold block">
            {currentStory.role}
          </span>
        </div>

        {/* High-Legibility Context Narrative */}
        <p className="text-sm sm:text-base text-text-primary font-medium leading-relaxed italic max-w-2xl pr-2">
          &ldquo;{currentStory.challenge}&rdquo;
        </p>

        {/* High-Visibility Outcome Callout */}
        <div className="pt-5 border-t-2 border-border-main flex flex-col space-y-2 bg-surface p-4 border-2 border-border-main border-l-4 border-l-accent shadow-sm">
          <span className="text-[10px] uppercase text-accent tracking-[0.2em] font-extrabold block">
            Architecture Realization
          </span>
          <div className="text-sm sm:text-base text-text-primary font-bold leading-relaxed">
            {currentStory.outcome}
          </div>
        </div>
      </div>
    </section>
  );
}
