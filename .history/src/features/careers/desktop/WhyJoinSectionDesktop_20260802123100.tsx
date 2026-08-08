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
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const handleLightboxNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! + 1) % photos.length);
  };

  const handleLightboxPrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! - 1 + photos.length) % photos.length);
  };

  if (!photos.length) return null;

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

        {/* Single Image View per Screen with Controls */}
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            onClick={() => setLightboxIndex(currentIndex)}
            className="relative aspect-[16/9] cursor-pointer overflow-hidden border-2 border-border-main bg-background-secondary rounded-sm shadow-md hover:border-border-strong transition-all group"
          >
            <Image
              src={photos[currentIndex]}
              alt={`Team & Culture ${currentIndex + 1}`}
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 80vw"
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
          </motion.div>

          {/* Inline Navigation Arrows for Single-Image Carousel */}
          {photos.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                aria-label="Previous Image"
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-primary/90 text-text-inverse border border-border-strong hover:bg-accent transition-colors shadow-lg focus-luxury rounded-sm"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next Image"
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-primary/90 text-text-inverse border border-border-strong hover:bg-accent transition-colors shadow-lg focus-luxury rounded-sm"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Indicator Counter */}
              <div className="text-center mt-4 text-xs font-mono text-text-secondary">
                {currentIndex + 1} / {photos.length}
              </div>
            </>
          )}
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
                    onClick={handleLightboxPrev}
                    aria-label="Previous Image"
                    className="absolute left-6 top-1/2 -translate-y-1/2 p-4 bg-primary/90 text-text-inverse border border-border-strong hover:bg-accent transition-colors shadow-lg focus-luxury rounded-sm"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={handleLightboxNext}
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
