"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import type { CareersGalleryData } from "@/features/careers/data/types";
type WhyJoinSectionDesktopProps = {
  gallery: CareersGalleryData;
};

export const WhyJoinSectionDesktop: React.FC<WhyJoinSectionDesktopProps> = ({
  gallery,
}) => {
  // Extract all photos from data
  const photos = gallery.images.map((image) => image.asset.url);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! + 1) % photos.length);
  };

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! - 1 + photos.length) % photos.length);
  };
  return (
    <section className="w-full bg-background-main py-20 px-8 border-b border-border-main hidden lg:block selection:bg-accent selection:text-text-inverse">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Clean Editorial Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs text-accent font-bold tracking-widest uppercase block font-luxury-meta">
            Life at Our Studio
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-extrabold text-text-primary tracking-tight">
            Meet the Team
          </h2>
          <p className="text-text-secondary text-sm font-medium leading-relaxed max-w-xl mx-auto">
            A behind-the-scenes glimpse into the ambitious people, creative
            energy, and daily atmosphere that drive our work forward.
          </p>
        </div>

        {/* Responsive Photo Grid - 1 item per row by default */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={() => setLightboxIndex(idx)}
              className="relative aspect-[4/3] cursor-pointer overflow-hidden border-2 border-border-main bg-background-secondary rounded-sm shadow-sm hover:border-border-strong hover:shadow-md transition-all group"
            >
              <Image
                src={photo}
                alt="Team & Culture"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-overlay backdrop-blur-md flex items-center justify-center p-8"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              aria-label="Close lightbox"
              className="absolute top-6 right-6 p-3 bg-primary text-text-inverse border border-border-strong hover:bg-accent transition-colors z-20 focus-luxury rounded-sm"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Lightbox Image Container */}
            <div
              className="relative w-full max-w-5xl h-[80vh] border-2 border-border-strong bg-primary overflow-hidden shadow-2xl rounded-sm"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={photos[lightboxIndex]}
                alt="Enlarged view"
                fill
                priority
                className="object-contain"
                sizes="100vw"
              />

              {/* Navigation Arrows */}
              {photos.length > 1 && (
                <>
                  <button
                    onClick={handlePrev}
                    aria-label="Previous Image"
                    className="absolute left-6 top-1/2 -translate-y-1/2 p-4 bg-primary/90 text-text-inverse border border-border-strong hover:bg-accent transition-colors shadow-lg focus-luxury rounded-sm"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next Image"
                    className="absolute right-6 top-1/2 -translate-y-1/2 p-4 bg-primary/90 text-text-inverse border border-border-strong hover:bg-accent transition-colors shadow-lg focus-luxury rounded-sm"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
