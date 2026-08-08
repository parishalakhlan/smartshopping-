"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowRight, Info, X } from "lucide-react";
import { FeaturedBrandsConfig } from "@/features/home/data/brandsData";

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
  const { section, brands, cta, bottomCard, metadata } = config;

  const handlePhotoTap = (name: string) => {
    setActiveBrandName(activeBrandName === name ? null : name);
  };

  return (
    <section className="py-16 bg-background-secondary md:hidden overflow-hidden">
      {/* Editorial Header Block */}
      <div className="px-5 mb-8">
        <span className="text-accent font-sans font-medium tracking-[0.25em] text-[10px] uppercase block mb-2">
          {section.taglineMobile}
        </span>
        <h2 className="font-serif text-3xl text-text-primary font-bold tracking-tight leading-[1.2] mb-2">
          Explore Our Fashion World
        </h2>
        <p className="font-sans text-sm text-text-secondary leading-relaxed max-w-sm">
          {section.descriptionMobile}
        </p>
      </div>

      {/* Horizontal Carousel with Visible Photos */}
      <div className="w-full flex gap-4 overflow-x-auto px-5 pb-6 scrollbar-none snap-x snap-mandatory">
        {brands.map((brand) => {
          const isTextOverlayOpen = activeBrandName === brand.name;
          const displayTags = getDynamicTags(
            brand.positioning,
            metadata.tags.maxItems,
          );

          return (
            <div
              key={brand.name}
              onClick={() => handlePhotoTap(brand.name)}
              className="relative shrink-0 w-[82vw] aspect-[3/4] rounded-2xl overflow-hidden snap-center shadow-md cursor-pointer group"
            >
              {/* Photo displayed directly */}
              <Image
                src={brand.image.src}
                alt={brand.image.alt || brand.name}
                fill
                priority
                sizes={brand.image.sizes.mobile}
                className="object-cover object-center"
              />

              {/* Permanent Base Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              {/* Default Image Header / Title */}
              <div className="absolute bottom-0 inset-x-0 p-5 text-white flex justify-between items-end z-10">
                <div>
                  <h3 className="font-serif text-2xl font-bold tracking-wide">
                    {brand.name}
                  </h3>
                  <p className="font-sans text-[11px] opacity-80 mt-0.5">
                    Tap to view details
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                  <Info className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Inline Text Overlay inside the image container */}
              <AnimatePresence>
                {isTextOverlayOpen && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="absolute inset-0 bg-black/85 backdrop-blur-md p-6 flex flex-col justify-between text-white z-20"
                  >
                    {/* Overlay Header */}
                    <div className="flex justify-between items-center">
                      <h3 className="font-serif text-xl font-bold">
                        {brand.name}
                      </h3>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveBrandName(null);
                        }}
                        className="p-1 rounded-full bg-white/10 text-white"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Content inside image space */}
                    <div className="space-y-4 my-auto">
                      <p className="font-sans text-xs leading-relaxed text-white/90">
                        {brand.positioning}
                      </p>

                      {displayTags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5">
                          {displayTags.map((tag, i) => (
                            <span
                              key={i}
                              className="font-sans text-[9px] font-semibold tracking-wide text-white bg-white/15 px-2.5 py-1 rounded-full uppercase"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Link CTA inside image space */}
                    <div className="pt-3 border-t border-white/20 flex items-center justify-between">
                      <a
                        href={brand.link}
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 font-sans text-xs font-bold tracking-widest uppercase text-accent"
                      >
                        <span>{cta.primary.label}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                      <span className="font-sans text-[10px] text-white/60">
                        {brand.metadata.availabilityText}
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Bottom Action Card */}
      <div className="mt-12 mx-5 bg-background-main border border-border-main/5 px-6 py-8 rounded-2xl text-center shadow-sm">
        <h4 className="font-serif text-2xl text-text-primary font-bold tracking-tight mb-2">
          {bottomCard.titleLines.map((line, index) => (
            <span key={index}>
              {line}
              {index < bottomCard.titleLines.length - 1 && <br />}
            </span>
          ))}
        </h4>
        <p className="font-sans text-xs text-text-secondary leading-relaxed max-w-xs mx-auto mb-6">
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
