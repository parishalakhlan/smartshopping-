"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import type { CareersGalleryData } from "@/features/careers/data/types";
type WhyJoinSectionDesktopProps = {
  gallery: CareersGalleryData;
};

export const WhyJoinSectionDesktop: React.FC<WhyJoinSectionDesktopProps> = ({
  gallery,
}) => {
  const photos = gallery.images.map((image) => image.asset.url);

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [slideDirection, setSlideDirection] = useState<number>(1);

  const handleNext = () => {
    if (photos.length <= 1) return;
    setSlideDirection(1);
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const handlePrev = () => {
    if (photos.length <= 1) return;
    setSlideDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  return (
    <section className="w-full bg-background-main py-12 px-4 border-b border-border-main lg:hidden selection:bg-accent selection:text-text-inverse">
      <div className="space-y-6">
        {/* Clean Header */}
        <div className="text-left space-y-2 pb-4 border-b border-border-main">
          <span className="text-[10px] text-accent font-bold tracking-widest uppercase block font-luxury-meta">
            Life at Our Studio
          </span>
          <h2 className="font-serif text-2xl font-extrabold text-text-primary tracking-tight">
            Meet the Team
          </h2>
          <p className="text-text-secondary text-xs font-medium leading-relaxed">
            A glimpse into the people and atmosphere behind our work.
          </p>
        </div>

        {/* Swipeable Photo Stage */}
        <div className="relative aspect-[4/5] w-full bg-background-secondary border-2 border-border-main rounded-sm overflow-hidden shadow-md touch-pan-y">
          <AnimatePresence initial={false} custom={slideDirection}>
            <motion.div
              key={currentIndex}
              custom={slideDirection}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.8}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = Math.abs(offset.x) * velocity.x;
                if (swipe < -5000) handleNext();
                if (swipe > 5000) handlePrev();
              }}
              className="absolute inset-0 cursor-grab active:cursor-grabbing"
            >
              {photos[currentIndex] && (
                <Image
                  src={photos[currentIndex]}
                  alt="Team member photo"
                  fill
                  priority={currentIndex === 0}
                  className="object-cover object-center select-none"
                  sizes="100vw"
                />
              )}
            </motion.div>
          </AnimatePresence>

          {/* Minimal Controls */}
          {photos.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                aria-label="Previous photo"
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 bg-primary/80 text-text-inverse border border-border-strong active:scale-95 transition-all shadow-md rounded-sm"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={handleNext}
                aria-label="Next photo"
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 bg-primary/80 text-text-inverse border border-border-strong active:scale-95 transition-all shadow-md rounded-sm"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Minimal Dot Indicators */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center space-x-1.5 z-10 bg-primary/80 backdrop-blur-sm px-3 py-1.5 border border-border-strong rounded-full">
                {photos.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setSlideDirection(idx > currentIndex ? 1 : -1);
                      setCurrentIndex(idx);
                    }}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-1.5 transition-all duration-300 rounded-full ${
                      currentIndex === idx
                        ? "w-4 bg-accent"
                        : "w-1.5 bg-text-inverse/40"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
