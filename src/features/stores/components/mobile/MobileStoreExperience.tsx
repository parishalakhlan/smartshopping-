// src/features/stores/components/MobileStoreExperience.tsx
"use client";

import React from "react";
import Image from "next/image";

const GAL_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=600&q=80",
    label: "Couture Menswear Hubs",
  },
  {
    url: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=600&q=80",
    label: "Contemporary Womenswear Atriums",
  },
  {
    url: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=600&q=80",
    label: "The Junior Experience Zones",
  },
  {
    url: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=600&q=80",
    label: "Curated Statement Accessories",
  },
];

export function MobileStoreExperience() {
  return (
    <section className="bg-[#FFFFFF] py-16 px-6 font-sans border-t border-[#163B65]/5 md:hidden overflow-hidden">
      <div className="space-y-8">
        {/* Mobile-First Header */}
        <div className="space-y-2 text-left">
          <span className="text-[#F97316] font-mono tracking-[0.2em] text-[10px] font-bold uppercase block">
            VISUAL CURATION // SPATIAL
          </span>
          <h2 className="font-serif text-3xl text-[#163B65] font-extrabold tracking-tight leading-tight">
            The Showroom
            <br />
            Environments
          </h2>
          <p className="text-xs text-[#475569] font-medium leading-relaxed max-w-xs">
            Beautifully distinct aesthetic zones arranged to offer fluid
            navigation through our seasonal lines.
          </p>
        </div>

        {/* Swipeable Horizontal Strip (Eliminates Scroll Fatigue) */}
        <div className="flex gap-4 overflow-x-auto pb-4 pt-2 scrollbar-none snap-x snap-mandatory -mx-6 px-6">
          {GAL_IMAGES.map((img, i) => (
            <div
              key={i}
              className="w-[260px] h-80 rounded-none overflow-hidden relative border border-[#163B65]/10 bg-[#F5F2EC] shrink-0 snap-start shadow-sm"
            >
              <Image
                src={img.url}
                alt={img.label}
                fill
                sizes="260px"
                className="object-cover grayscale contrast-[1.04] brightness-95"
              />

              {/* High-Contrast Gradient Mask to make text perfectly readable */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#163B65]/90 via-[#163B65]/30 to-transparent opacity-95" />

              {/* Text Meta Layer */}
              <div className="absolute bottom-5 left-5 right-5 text-left z-10">
                <span className="text-[9px] font-mono font-bold text-[#F97316] tracking-[0.2em] uppercase block mb-1">
                  ZONE LAYERING 0{i + 1}
                </span>
                <p className="font-serif font-bold text-sm text-[#FFFFFF] tracking-tight leading-snug">
                  {img.label}
                </p>
              </div>

              {/* Fixed Accent Top Bar for Mobile Uniformity */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#F97316]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
