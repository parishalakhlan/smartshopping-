// src/features/stores/components/StoreExperience.tsx
import React from "react";

const GAL_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=600&q=80",
    label: "Premium Menswear Hubs",
  },
  {
    url: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=600&q=80",
    label: "Contemporary Womenswear Atriums",
  },
  {
    url: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=600&q=80",
    label: "The Kids Experience Zones",
  },
  {
    url: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=600&q=80",
    label: "Curated Statement Accessories",
  },
];

export function StoreExperience() {
  return (
    <section className="bg-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto space-y-12">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h2 className="text-3xl font-serif font-bold text-[var(--color-text-primary)]">
            High-Volume Retail Environments
          </h2>
          <p className="text-xs text-[var(--color-text-secondary)] font-normal">
            Every showroom features fully optimized square-footage layouts
            explicitly designed for effortless multi-brand navigation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GAL_IMAGES.map((img, i) => (
            <div
              key={i}
              className="h-72 rounded-xl overflow-hidden relative border border-slate-200 group bg-slate-100"
            >
              <img
                src={img.url}
                alt={img.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 text-white font-medium text-sm font-sans tracking-wide">
                {img.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
