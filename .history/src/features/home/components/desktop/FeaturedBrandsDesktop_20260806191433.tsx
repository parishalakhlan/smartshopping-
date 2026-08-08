"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { FeaturedBrandsConfig } from "@/features/home/data/brandsData";

interface FeaturedBrandsDesktopProps {
  config: FeaturedBrandsConfig;
}

const BRAND_NAME_COLORS: Record<string, string> = {
  "JACK & JONES": "#1F5CB8",
  Only: "#000000",
  "Selected Homme": "#4A4A4A",
  "Vero Moda": "#000000",
  "The Souled Store": "#E72F30",
  "Jack & Jones Junior": "#1F5CB8",
  "Vero Moda Kids": "#000000",
  Celio: "#000000",
};

// Helper function to get color with proper matching
const getBrandColor = (brandName: string): string => {
  // Trim the brand name to remove extra spaces
  const trimmedName = brandName.trim();

  // Try exact match first
  if (BRAND_NAME_COLORS[trimmedName]) {
    return BRAND_NAME_COLORS[trimmedName];
  }

  // Try case-insensitive match
  const lowerCaseName = trimmedName.toLowerCase();
  for (const [key, value] of Object.entries(BRAND_NAME_COLORS)) {
    if (key.toLowerCase() === lowerCaseName) {
      return value;
    }
  }

  // Fallback to primary color
  return "var(--color-text-primary)";
};

export default function FeaturedBrandsDesktop({
  config,
}: FeaturedBrandsDesktopProps) {
  const { section, brands } = config;

  return (
    <section className="py-32 bg-background-secondary overflow-hidden hidden md:block">
      <div className="max-w-7xl mx-auto px-8 lg:px-12 mb-20">
        <span className="text-accent font-sans font-medium tracking-[0.3em] text-sm uppercase block mb-6">
          {section.tagline}
        </span>
        <h2 className="font-serif text-6xl text-text-primary font-bold tracking-tight leading-[1.1] mb-8">
          {section.headingLines.map((line, index) => (
            <span key={index}>
              {line}
              {index < section.headingLines.length - 1 && <br />}
            </span>
          ))}
        </h2>
      </div>

      <div className="pl-[max(2rem,calc((100vw-80rem)/2))] pr-8">
        <div className="flex flex-nowrap gap-8 overflow-x-auto scrollbar-none snap-x snap-mandatory scroll-smooth pb-4">
          {brands.map((brand, idx) => {
            const brandColor = getBrandColor(brand.name);

            return (
              <motion.div
                key={idx}
                className="flex-shrink-0 w-[380px] group cursor-pointer snap-start"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-white mb-8">
                  <Image
                    src={brand.image.src}
                    alt={brand.image.alt || brand.name}
                    fill
                    sizes={brand.image.sizes.desktop}
                    className={`${brand.image.objectFit} transform group-hover:scale-105 transition-transform duration-[1200ms] ease-out`}
                  />
                  <div className="absolute top-6 right-6 bg-white/90 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-5 h-5 text-text-primary" />
                  </div>
                </div>
                <h3
                  className="font-serif text-2xl font-bold mb-2"
                  style={{
                    color: brandColor,
                  }}
                >
                  {brand.name}
                </h3>
                <p className="font-sans text-text-secondary text-sm leading-relaxed">
                  {brand.positioning}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
