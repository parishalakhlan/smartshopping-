"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { partnersConfig } from "@/features/partners/partners.data";
import SectionHeader from "@/features/partners/desktop/SectionHeader";

export default function SuccessStories() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextStory = () => {
    setCurrentIndex(
      (prev) => (prev + 1) % partnersConfig.successStories.length,
    );
  };

  return (
    <section className="py-24 md:py-32 px-8 md:px-16 lg:px-24 bg-surface border-t-2 border-border-main transition-colors duration-300">
      {/* Editorial Header Section */}
      <div className="mb-12 md:mb-16 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
        <SectionHeader
          badge="Syndicate Case Briefings"
          title="Validated Outcomes"
        />
        <button
          onClick={nextStory}
          className="group flex items-center gap-2.5 px-5 py-3 bg-card-bg border-2 border-border-main text-xs tracking-[0.2em] uppercase font-extrabold text-text-primary hover:border-accent transition-all duration-300 self-end sm:self-auto shadow-sm active:scale-95"
        >
          Next Dossier{" "}
          <ChevronRight
            size={16}
            className="text-accent transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>
      </div>

      {/* Structural Editorial Frame */}
      <div className="bg-surface border-2 border-border-main min-h-[550px] relative overflow-hidden shadow-sm">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 h-full min-h-[550px]"
          >
            {/* Left Column: Full-Height Photography with High-Contrast Overlay Card */}
            <div className="lg:col-span-5 relative min-h-[360px] lg:min-h-[550px] overflow-hidden border-b-2 lg:border-b-0 lg:border-r-2 border-border-main">
              <Image
                src={partnersConfig.successStories[currentIndex].image.src}
                alt={partnersConfig.successStories[currentIndex].image.alt}
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface/90 via-transparent to-transparent" />

              {/* High-Contrast Info Badge Overlay */}
              <div className="absolute bottom-6 left-6 right-6 z-10 p-5 bg-card-bg/95 backdrop-blur-md border-2 border-border-main shadow-md">
                <span className="text-[11px] text-accent uppercase tracking-[0.25em] font-extrabold block">
                  Verified Case Study
                </span>
                <h3 className="text-2xl text-text-primary font-bold mt-1 tracking-tight">
                  {partnersConfig.successStories[currentIndex].partner}
                </h3>
                <p className="text-xs text-text-primary font-medium mt-1 tracking-wide">
                  {partnersConfig.successStories[currentIndex].role}
                </p>
              </div>
            </div>

            {/* Right Column: High-Contrast Editorial Content Area */}
            <div className="lg:col-span-7 p-8 md:p-12 lg:p-14 flex flex-col justify-between space-y-10 bg-surface">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                <div className="space-y-3">
                  <span className="text-xs text-accent uppercase tracking-[0.2em] font-extrabold block">
                    Inherent Impediment
                  </span>
                  <p className="text-sm md:text-base text-text-primary font-medium leading-relaxed">
                    {partnersConfig.successStories[currentIndex].challenge}
                  </p>
                </div>

                <div className="space-y-3">
                  <span className="text-xs text-accent uppercase tracking-[0.2em] font-extrabold block">
                    The Strategic Vector
                  </span>
                  <p className="text-sm md:text-base text-text-primary font-medium leading-relaxed">
                    {partnersConfig.successStories[currentIndex].journey}
                  </p>
                </div>
              </div>

              {/* Quantified Outcome Highlight Box */}
              <div className="p-6 bg-card-bg border-2 border-border-main border-l-4 border-l-accent flex flex-col space-y-2 shadow-sm">
                <span className="text-[11px] text-accent uppercase tracking-[0.25em] font-extrabold">
                  Quantified Asset Optimization
                </span>
                <p className="text-lg md:text-xl text-text-primary font-bold tracking-tight leading-snug">
                  {partnersConfig.successStories[currentIndex].outcome}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
