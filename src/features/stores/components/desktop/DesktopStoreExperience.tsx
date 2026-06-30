// src/features/stores/components/DesktopStoreExperience.tsx
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

export function DesktopStoreExperience() {
  return (
    <section className="hidden md:block bg-[#FFFFFF] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 font-sans border-t border-[#163B65]/5">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Editorial Section Header Framework */}
        <div className="max-w-3xl space-y-3 text-left">
          <span className="text-[#F97316] font-semibold tracking-[0.25em] text-xs uppercase block">
            VISUAL CURATION // SPATIAL INTERIORS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#163B65] font-bold tracking-tight">
            The Showroom Environments
          </h2>
          <p className="text-sm sm:text-base text-[#475569] font-normal leading-relaxed max-w-xl">
            Every physical destination hosts beautifully distinct aesthetic
            zones, thoughtfully arranged to offer fluid navigation through our
            seasonal lines.
          </p>
        </div>

        {/* 4-Column Geometric Gallery Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {GAL_IMAGES.map((img, i) => (
            <div
              key={i}
              className="h-80 rounded-none overflow-hidden relative border border-[#163B65]/10 group bg-[#F5F2EC]"
            >
              <Image
                src={img.url}
                alt={img.label}
                fill
                sizes="(max-w-7xl) 25vw, 50vw"
                className="object-cover grayscale contrast-[1.04] brightness-95 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
              />

              {/* Dynamic Gradient Mask Track */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#163B65]/80 via-[#163B65]/20 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-75" />

              {/* Floating Typography Label */}
              <div className="absolute bottom-5 left-5 right-5 text-left z-10">
                <span className="text-[9px] font-bold text-[#F97316] tracking-[0.2em] uppercase block mb-1">
                  ZONE LAYERING 0{i + 1}
                </span>
                <p className="font-serif font-bold text-base text-[#FFFFFF] tracking-tight leading-snug">
                  {img.label}
                </p>
              </div>

              {/* Decorative Linear Active Track border */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#F97316] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
