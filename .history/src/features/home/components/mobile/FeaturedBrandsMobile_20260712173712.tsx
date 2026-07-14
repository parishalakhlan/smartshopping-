"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
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
    <section className="py-20 bg-background-secondary md:hidden overflow-hidden">
      {/* Editorial Header Block */}
      <div className="px-5 mb-12">
        <span className="text-accent font-sans font-medium tracking-[0.25em] text-[10px] uppercase block mb-3">
          {section.taglineMobile}
        </span>
        <h2 className="font-serif text-3xl text-text-primary font-bold tracking-tight leading-[1.2] mb-3">
          Explore Our Fashion World
        </h2>
        <p className="font-sans text-sm text-text-secondary leading-relaxed max-w-sm">
          {section.descriptionMobile}
        </p>
      </div>

      {/* Shared Layout Interactive Showroom Canvas */}
      <motion.div layout="position" className="w-full px-5 space-y-0.5">
        {brands.map((brand) => {
          const isOpen = activeBrandName === brand.name;
          const displayTags = getDynamicTags(
            brand.positioning,
            metadata.tags.maxItems,
          );

          return (
            <motion.div
              key={brand.name}
              layout
              transition={animation.railSpring}
              onClick={() => handleRailTap(brand.name)}
              whileTap={{ scale: 0.995 }}
              className={`w-full text-left transition-colors duration-500 ${
                isOpen
                  ? "bg-background-main/60 pt-4 pb-8 px-5 rounded-2xl mb-6 shadow-sm border border-border-main/5"
                  : "border-b border-border-main py-6"
              }`}
            >
              {/* The Fashion Rail Trigger */}
              <div className="flex justify-between items-center cursor-pointer">
                <motion.h3
                  layout="position"
                  className={`font-serif text-xl tracking-wide transition-colors duration-300 ${
                    isOpen
                      ? "text-text-primary font-bold"
                      : "text-text-primary/80"
                  }`}
                >
                  {brand.name}
                </motion.h3>

                {/* Micro-indicator expansion icon line element */}
                <div className="relative w-6 h-6 flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={animation.contentSpring}
                    className="absolute w-4 h-[1.5px] bg-text-primary/40"
                  />
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 90 }}
                    transition={animation.contentSpring}
                    className="absolute w-4 h-[1.5px] bg-text-primary/40"
                  />
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
                      className="h-[1.5px] bg-accent w-16 mt-4 mb-6"
                    />

                    {/* Immersive Editorial Campaign Image (Occupies ~70% visual area) */}
                    <div className="relative aspect-3/4 w-full bg-background-secondary rounded-[24px] overflow-hidden mb-6">
                      <motion.div
                        initial={{ scale: 0.96, opacity: 0.85 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.96, opacity: 0.85 }}
                        transition={animation.contentSpring}
                        className="relative w-full h-full"
                      >
                        <Image
                          src={brand.image.src}
                          alt={brand.metadata.campaignAlt}
                          fill
                          sizes={brand.image.sizes.mobile}
                          className={`${brand.image.objectFit} ${brand.image.objectPosition}`}
                          priority={brand.image.priority}
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-text-primary/20 via-transparent to-transparent pointer-events-none" />
                      </motion.div>
                    </div>

                    {/* Minimal Brand Narrative Block */}
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, ...animation.contentSpring }}
                      className="space-y-5"
                    >
                      <p className="font-sans text-sm text-text-secondary leading-relaxed whitespace-normal wrap-break-word">
                        {brand.positioning}
                      </p>

                      {/* Tactile Signature Styling Tags */}
                      {displayTags.length > 0 && (
                        <div className="flex flex-wrap gap-2 pt-1">
                          {displayTags.map((tag, i) => (
                            <span
                              key={i}
                              className="font-sans text-[10px] font-semibold tracking-wide text-text-primary bg-background-secondary px-3 py-1.5 rounded-full uppercase"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Editorial CTA Mechanics */}
                      <div className="pt-5 flex flex-col gap-3 border-t border-border-main/5">
                        <a
                          href={brand.link}
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-2 font-sans text-xs font-bold tracking-widest uppercase text-accent w-fit"
                        >
                          <span>{cta.primary.label}</span>
                          <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                        </a>

                        <div className="font-sans text-[11px] font-medium text-text-primary/50 tracking-wide">
                          {brand.metadata.availabilityText}
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Elegant Architectural Bottom Action Card */}
      <div className="mt-16 mx-5 bg-background-main border border-border-main/5 px-6 py-10 rounded-2xl text-center shadow-sm">
        <h4 className="font-serif text-2xl text-text-primary font-bold tracking-tight mb-2">
          {bottomCard.titleLines.map((line, index) => (
            <span key={index}>
              {line}
              {index < bottomCard.titleLines.length - 1 && <br />}
            </span>
          ))}
        </h4>
        <p className="font-sans text-xs sm:text-sm text-text-secondary leading-relaxed max-w-xs mx-auto mb-6">
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
          className="inline-flex items-center justify-center gap-2.5 w-full font-sans text-xs font-bold tracking-widest uppercase text-white bg-button-primary-bg py-4 px-6 rounded-xl shadow-sm transition-transform active:scale-[0.98]"
        >
          <span>{bottomCard.cta.label}</span>
          <ArrowRight className="w-4 h-4 shrink-0" />
        </a>
      </div>
    </section>
  );
}
