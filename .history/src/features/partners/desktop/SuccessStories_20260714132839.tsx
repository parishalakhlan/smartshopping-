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
    <section className="py-24 md:py-32 px-8 md:px-16 lg:px-24 bg-background-main">
      {/* Editorial Header Section */}
      <div className="mb-16 md:mb-20 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
        <SectionHeader
          badge="Syndicate Case Briefings"
          title="Validated Outcomes"
        />
        <button
          onClick={nextStory}
          className="group flex items-center gap-3 text-xs tracking-[0.25em] uppercase font-medium text-text-secondary hover:text-text-primary transition-colors duration-300 self-end sm:self-auto"
        >
          Next Dossier{" "}
          <ChevronRight
            size={14}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>
      </div>

      {/* Structural Editorial Frame */}
      <div className="bg-card-bg min-h-[550px] relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-12 h-full min-h-[550px]"
          >
            {/* Left Column: Full-Height Immersive Photography */}
            <div className="lg:col-span-5 relative min-h-[350px] lg:min-h-[550px] overflow-hidden">
              <Image
                src={partnersConfig.successStories[currentIndex].image.src}
                alt={partnersConfig.successStories[currentIndex].image.alt}
                fill
                className="object-cover transition-transform duration-1000 ease-out"
              />
              {/* Luxury architectural photo overlay mapping to system background */}
              <div className="absolute inset-0 bg-gradient-to-t from-background-main/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 z-10">
                <span className="text-[10px] text-accent uppercase tracking-[0.3em] font-medium block">
                  Verified Case Study
                </span>
                <h3 className="text-2xl text-text-primary font-extralight mt-2 tracking-tight">
                  {partnersConfig.successStories[currentIndex].partner}
                </h3>
                <p className="text-xs text-text-muted mt-1 tracking-wide font-light">
                  {partnersConfig.successStories[currentIndex].role}
                </p>
              </div>
            </div>

            {/* Right Column: Balanced Asymmetrical Text Columns */}
            <div className="lg:col-span-7 p-8 md:p-14 lg:p-16 flex flex-col justify-between space-y-16 bg-surface">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                <div className="space-y-3">
                  <span className="text-[10px] text-text-muted uppercase tracking-[0.25em] font-medium block">
                    Inherent Impediment
                  </span>
                  <p className="text-sm text-text-secondary font-light leading-relaxed">
                    {partnersConfig.successStories[currentIndex].challenge}
                  </p>
                </div>

                <div className="space-y-3">
                  <span className="text-[10px] text-text-muted uppercase tracking-[0.25em] font-medium block">
                    The Strategic Vector
                  </span>
                  <p className="text-sm text-text-secondary font-light leading-relaxed">
                    {partnersConfig.successStories[currentIndex].journey}
                  </p>
                </div>
              </div>

              {/* Minimal Luxury Quote/Outcome Box */}
              <div className="pt-8 border-t border-text-primary/5 flex flex-col space-y-2">
                <span className="text-[10px] text-accent uppercase tracking-[0.3em] font-medium">
                  Quantified Asset Optimization
                </span>
                <p className="text-xl md:text-2xl text-text-primary font-extralight tracking-tight leading-snug">
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
