"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { partnersConfig } from "@/features/partners/partners.data";

interface StoriesCarouselProps {
  config?: typeof partnersConfig;
}

export default function StoriesCarousel({
  config = partnersConfig,
}: StoriesCarouselProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [direction, setDirection] = useState(1);

  const stories = config.successStories || [];
  const currentStory = stories[activeIdx];

  if (!stories.length || !currentStory) return null;

  const handleNext = () => {
    setDirection(1);
    setActiveIdx((prev) => (prev + 1) % stories.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIdx((prev) => (prev - 1 + stories.length) % stories.length);
  };

  return (
    <section className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 bg-surface border-t-2 border-border-main transition-colors duration-300 w-full max-w-full box-border overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
        {/* Header Block with Clear Arrow Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 w-full border-b-2 border-border-main/40 pb-4 sm:pb-6">
          <div className="space-y-1.5">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-accent block font-extrabold">
              Case Portfolios ({activeIdx + 1}/{stories.length})
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-extrabold text-text-primary tracking-tight leading-tight">
              Proven Success Stories
            </h2>
          </div>

          {/* Explicit Navigation Control Buttons */}
          <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto pt-2 sm:pt-0">
            {/* Pagination Indicators */}
            <div className="flex items-center gap-1.5">
              {stories.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > activeIdx ? 1 : -1);
                    setActiveIdx(idx);
                  }}
                  className={`h-2 rounded-none transition-all duration-300 ${
                    activeIdx === idx
                      ? "w-6 bg-accent"
                      : "w-2 bg-border-main/50 hover:bg-text-secondary"
                  }`}
                  aria-label={`Go to case story ${idx + 1}`}
                />
              ))}
            </div>

            {/* Previous & Next Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="p-2.5 sm:p-3 bg-card-bg border-2 border-border-main text-text-primary hover:border-accent hover:text-accent active:scale-95 transition-all shadow-xs"
                aria-label="Previous story"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-2.5 sm:p-3 bg-card-bg border-2 border-border-main text-text-primary hover:border-accent hover:text-accent active:scale-95 transition-all shadow-xs"
                aria-label="Next story"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Animated Carousel Card Grid */}
        <div className="relative w-full max-w-full box-border">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -40 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="bg-card-bg border-2 border-border-main grid grid-cols-1 lg:grid-cols-12 overflow-hidden shadow-sm w-full"
            >
              {/* Partner Image Showcase (Mobile & Desktop Visible) */}
              <div className="lg:col-span-5 relative min-h-[220px] sm:min-h-[300px] lg:min-h-[420px] bg-background-main border-b-2 lg:border-b-0 lg:border-r-2 border-border-main">
                <Image
                  src={
                    currentStory.image?.src || "/showrooms/showroom1.webp" // Fallback to available asset
                  }
                  alt={currentStory.image?.alt || currentStory.partner}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent lg:hidden" />

                {/* Mobile Floating Overlay Tag */}
                <div className="absolute bottom-3 left-3 right-3 lg:hidden text-white space-y-0.5">
                  <span className="text-[9px] uppercase tracking-widest text-accent font-extrabold bg-black/80 px-2 py-0.5 border border-accent/40 inline-block">
                    {currentStory.role}
                  </span>
                  <h3 className="text-lg font-bold font-serif truncate">
                    {currentStory.partner}
                  </h3>
                </div>
              </div>

              {/* Story Content Details */}
              <div className="lg:col-span-7 p-5 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  {/* Desktop Partner Info */}
                  <div className="hidden lg:flex items-center justify-between gap-4 border-b-2 border-border-main/30 pb-3">
                    <div>
                      <span className="text-xs text-accent uppercase tracking-[0.2em] font-extrabold block">
                        {currentStory.role}
                      </span>
                      <h3 className="text-2xl font-bold font-serif text-text-primary tracking-tight mt-0.5">
                        {currentStory.partner}
                      </h3>
                    </div>
                    <Quote className="w-8 h-8 text-accent/40 shrink-0" />
                  </div>

                  {/* Challenge Narrative */}
                  <div className="space-y-1.5">
                    <span className="text-[10px] uppercase text-text-secondary tracking-widest font-extrabold block">
                      The Challenge
                    </span>
                    <p className="text-xs sm:text-base text-text-primary font-medium leading-relaxed italic pr-2">
                      &ldquo;{currentStory.challenge}&rdquo;
                    </p>
                  </div>
                </div>

                {/* Outcome & Results Highlight */}
                <div className="bg-surface p-3.5 sm:p-5 border-2 border-border-main border-l-4 border-l-accent shadow-xs space-y-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] uppercase text-accent tracking-[0.2em] font-extrabold block">
                      Architecture Realization
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-accent shrink-0" />
                  </div>
                  <p className="text-xs sm:text-sm text-text-primary font-bold leading-relaxed">
                    {currentStory.outcome}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
