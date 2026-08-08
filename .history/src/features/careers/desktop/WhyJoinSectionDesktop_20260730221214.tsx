"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { whyJoinData } from "@/features/careers/data/data";

export const WhyJoinSectionDesktop: React.FC = () => {
  const [activeWhyBlock, setActiveWhyBlock] = useState<string>("join-1");
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [slideDirection, setSlideDirection] = useState<number>(1);

  // Active block reference
  const activeBlock =
    whyJoinData.find((block) => block.id === activeWhyBlock) || whyJoinData[0];

  // Normalizing images to ensure array format (handles string or array data)
  const images: string[] = Array.isArray(activeBlock?.images)
    ? activeBlock.images
    : activeBlock?.image
      ? [activeBlock.image]
      : [];

  const handleSelectBlock = (id: string) => {
    setActiveWhyBlock(id);
    setCurrentImageIndex(0);
    setSlideDirection(1);
  };

  const handleNextImage = () => {
    if (images.length <= 1) return;
    setSlideDirection(1);
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrevImage = () => {
    if (images.length <= 1) return;
    setSlideDirection(-1);
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
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
    <section className="py-20 bg-background-main border-b border-border-main hidden lg:block selection:bg-accent selection:text-text-inverse">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-border-main pb-8 mb-12">
          <div className="space-y-3 text-left">
            <span className="text-xs text-accent font-bold tracking-widest uppercase block font-luxury-meta">
              Why Join Us
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
              Why Ambitious People Flourish Here
            </h2>
          </div>
          <p className="text-text-secondary text-sm font-medium max-w-sm lg:text-right leading-relaxed">
            We build continuous professional loops where taste, operational
            independence, and brand understanding guide execution.
          </p>
        </div>

        {/* Main Interactive Grid */}
        <div className="grid grid-cols-12 gap-8 items-stretch">
          {/* Left Navigation Buttons */}
          <div className="col-span-5 flex flex-col justify-center space-y-3">
            {whyJoinData.map((block) => {
              const isActive = activeWhyBlock === block.id;
              return (
                <button
                  key={block.id}
                  onClick={() => handleSelectBlock(block.id)}
                  className={`w-full text-left p-5 border-2 transition-all duration-300 relative focus-luxury flex items-center justify-between group ${
                    isActive
                      ? "bg-primary text-text-inverse border-primary shadow-md translate-x-2"
                      : "bg-surface border-border-main text-text-primary hover:border-border-strong hover:bg-surface-hover"
                  }`}
                >
                  <div className="space-y-1 pr-4">
                    <h3
                      className={`font-serif text-lg font-bold transition-colors ${
                        isActive ? "text-text-inverse" : "text-text-primary"
                      }`}
                    >
                      {block.title}
                    </h3>
                  </div>

                  <div
                    className={`p-2 rounded-full transition-colors shrink-0 ${
                      isActive
                        ? "bg-accent text-text-inverse"
                        : "bg-background-tertiary text-text-muted group-hover:text-text-primary"
                    }`}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Interactive Sliding Gallery Card */}
          <div className="col-span-7 bg-surface border-2 border-border-main p-6 flex flex-col justify-between space-y-6 shadow-lg relative rounded-sm">
            {/* Gallery Section */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-primary border border-border-strong group">
              <AnimatePresence initial={false} custom={slideDirection}>
                <motion.div
                  key={`${activeWhyBlock}-${currentImageIndex}`}
                  custom={slideDirection}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 350, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = Math.abs(offset.x) * velocity.x;
                    if (swipe < -10000) handleNextImage();
                    if (swipe > 10000) handlePrevImage();
                  }}
                  className="absolute inset-0 cursor-grab active:cursor-grabbing"
                >
                  {images[currentImageIndex] && (
                    <Image
                      src={images[currentImageIndex]}
                      alt={`${activeBlock.title} visual ${currentImageIndex + 1}`}
                      fill
                      priority
                      className="object-cover select-none"
                      sizes="(max-width: 1200px) 50vw, 40vw"
                    />
                  )}
                </motion.div>
              </AnimatePresence>

              {/* High-Contrast Navigation Arrows */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    aria-label="Previous Slide"
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-primary/90 text-text-inverse border border-border-strong hover:bg-accent transition-all duration-200 shadow-md focus-luxury z-10"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <button
                    onClick={handleNextImage}
                    aria-label="Next Slide"
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-primary/90 text-text-inverse border border-border-strong hover:bg-accent transition-all duration-200 shadow-md focus-luxury z-10"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  {/* Dot Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center space-x-2 z-10 bg-primary/80 backdrop-blur-md px-3 py-1.5 border border-border-strong rounded-full">
                    {images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setSlideDirection(idx > currentImageIndex ? 1 : -1);
                          setCurrentImageIndex(idx);
                        }}
                        aria-label={`Go to slide ${idx + 1}`}
                        className={`h-2 transition-all duration-300 rounded-full ${
                          currentImageIndex === idx
                            ? "w-6 bg-accent"
                            : "w-2 bg-text-inverse/40 hover:bg-text-inverse"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Insight High-Contrast Box */}
            <div className="pt-2">
              <div className="bg-background-secondary p-5 border-l-4 border-accent border-y border-r border-border-main flex items-start gap-4">
                <span className="text-xs font-bold text-accent uppercase tracking-widest block shrink-0 pt-0.5 font-luxury-meta">
                  Insight:
                </span>
                <p className="text-sm text-text-primary font-medium leading-relaxed">
                  {activeBlock.insight}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
