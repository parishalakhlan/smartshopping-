"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowRight, Plus } from "lucide-react";
import { FeaturedBrandsConfig } from "@/features/home/data/brandsData";

/**
 * Utility helper to safely extract 3 premium styling tags dynamically
 * from the positioning string if tags aren't defined in the source schema.
 */
const getDynamicTags = (positioning: string, maxItems: number): string[] => {
  const parts = positioning.split(/&|,|and|\s{2,}/);
  return parts
    .map((p) => p.trim())
    .filter((p) => p.length > 3 && p.length < 24)
    .slice(0, maxItems);
};

interface FeaturedBrandsMobileProps {
  config: FeaturedBrandsConfig;
}

export default function FeaturedBrandsMobile({
  config,
}: FeaturedBrandsMobileProps) {
  const [activeBrandName, setActiveBrandName] = useState<string | null>(null);
  const { section, brands, cta, bottomCard, animation, metadata } = config;

  const handleRailTap = (name: string) => {
    setActiveBrandName(activeBrandName === name ? null : name);
  };

  return (
    <section className="py-24 bg-background-secondary md:hidden overflow-hidden relative">
      {/* Editorial Header Block */}
      <div className="px-6 mb-10">
        <div className="flex items-center gap-2 mb-3">
          <span className="h-px w-6 bg-accent/60" />
          <span className="text-accent font-sans font-semibold tracking-[0.25em] text-[10px] uppercase">
            {section.taglineMobile}
          </span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl text-text-primary font-bold tracking-tight leading-[1.15] mb-3">
          Explore Our Fashion World
        </h2>
        <p className="font-sans text-sm text-text-secondary/80 leading-relaxed max-w-xs">
          {section.descriptionMobile}
        </p>
      </div>

      {/* Shared Layout Interactive Showroom Canvas */}
      <div className="w-full px-5 space-y-3">
        {brands.map((brand) => {
          const isOpen = activeBrandName === brand.name;
          const displayTags = getDynamicTags(
            brand.positioning,
            metadata.tags.maxItems,
          );

          return (
            <div
              key={brand.name}
              onClick={() => handleRailTap(brand.name)}
              className={`w-full text-left transition-all duration-500 ease-out cursor-pointer ${
                isOpen
                  ? "bg-background-main/90 backdrop-blur-md p-6 rounded-3xl shadow-xl shadow-black/5 border border-border-main/15 mb-4"
                  : "bg-background-main/30 border border-border-main/10 rounded-2xl py-5 px-6 active:scale-[0.99] transition-transform"
              }`}
            >
              {/* The Fashion Rail Trigger */}
              <div className="flex justify-between items-center">
                <h3
                  className={`font-serif text-xl sm:text-2xl tracking-wide transition-colors duration-300 ${
                    isOpen
                      ? "text-text-primary font-bold"
                      : "text-text-primary/70 font-medium"
                  }`}
                >
                  {brand.name}
                </h3>

                {/* Micro-indicator expansion icon line element */}
                <div className="relative w-8 h-8 rounded-full bg-background-secondary/80 flex items-center justify-center shrink-0">
                  <motion.div
                    animate={{ rotate: isOpen ? 135 : 0 }}
                    transition={animation.contentSpring}
                  >
                    <Plus className="w-4 h-4 text-text-primary/70" />
                  </motion.div>
                </div>
              </div>

              {/* Seamless Editorial Expansion Container */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={animation.railSpring}
                    className="overflow-hidden"
                  >
                    {/* Architectural Accent Line */}
                    <motion.div
                      initial={{ scaleX: 0, transformOrigin: "left" }}
                      animate={{ scaleX: 1 }}
                      transition={{
                        delay: 0.05,
                        duration: 0.5,
                        ease: "easeOut",
                      }}
                      className="h-[2px] bg-accent/80 w-12 mt-4 mb-6 rounded-full"
                    />

                    {/* Immersive Editorial Campaign Image */}
                    <div className="relative w-full bg-background-secondary rounded-2xl overflow-hidden mb-6 shadow-md">
                      <motion.div
                        initial={{ scale: 1.05, opacity: 0.8 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 1.05, opacity: 0.8 }}
                        transition={animation.contentSpring}
                        className="relative w-full"
                      >
                        <Image
                          src={brand.image.src}
                          alt={brand.image.alt || brand.name}
                          width={600}
                          height={800}
                          priority={isOpen}
                          sizes={brand.image.sizes.mobile}
                          className="w-full h-auto object-cover object-center block"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                      </motion.div>
                    </div>

                    {/* Minimal Brand Narrative Block */}
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, ...animation.contentSpring }}
                      className="space-y-5"
                    >
                      <p className="font-sans text-sm text-text-secondary leading-relaxed whitespace-normal break-words">
                        {brand.positioning}
                      </p>

                      {/* Tactile Signature Styling Tags */}
                      {displayTags.length > 0 && (
                        <div className="flex flex-wrap gap-2 pt-1">
                          {displayTags.map((tag, i) => (
                            <span
                              key={i}
                              className="font-sans text-[10px] font-semibold tracking-wider text-text-primary/90 bg-background-secondary/90 border border-border-main/10 px-3 py-1.5 rounded-full uppercase shadow-xs"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Editorial CTA Mechanics */}
                      <div className="pt-5 flex items-center justify-between border-t border-border-main/10 mt-6">
                        <a
                          href={brand.link}
                          onClick={(e) => e.stopPropagation()}
                          className="group inline-flex items-center gap-2 font-sans text-xs font-bold tracking-widest uppercase text-accent hover:opacity-80 transition-opacity"
                        >
                          <span>{cta.primary.label}</span>
                          <ArrowUpRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>

                        <div className="font-sans text-[11px] font-semibold text-text-primary/40 tracking-wider uppercase">
                          {brand.metadata.availabilityText}
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Elegant Architectural Bottom Action Card */}
      <div className="relative mt-16 mx-5 bg-background-main border border-border-main/10 px-6 py-10 rounded-3xl text-center shadow-lg shadow-black/5 overflow-hidden">
        {/* Subtle Ambient Background Highlight */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

        <h4 className="font-serif text-2xl text-text-primary font-bold tracking-tight mb-3 relative z-10">
          {bottomCard.titleLines.map((line, index) => (
            <span key={index}>
              {line}
              {index < bottomCard.titleLines.length - 1 && <br />}
            </span>
          ))}
        </h4>
        <p className="font-sans text-xs sm:text-sm text-text-secondary leading-relaxed max-w-xs mx-auto mb-8 relative z-10">
          {bottomCard.descriptionLines.map((line, index) => (
            <span key={index}>
              {line}
              {index < bottomCard.descriptionLines.length - 1 && <br />}
            </span>
          ))}
        </p>
        <a
          href={bottomCard.cta.url}
          aria-label={bottomCard.cta.ariaLabel}
          className="group relative z-10 inline-flex items-center justify-center gap-3 w-full font-sans text-xs font-bold tracking-widest uppercase text-white bg-button-primary-bg py-4 px-6 rounded-2xl shadow-md transition-all active:scale-[0.98] hover:shadow-xl"
        >
          <span>{bottomCard.cta.label}</span>
          <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
}
