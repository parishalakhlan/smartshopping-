"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, Layers } from "lucide-react";
import { whyJoinData } from "@/features/careers/data/data";

interface MobileGalleryProps {
  track: (typeof whyJoinData)[number];
}

const MobileImageGallery: React.FC<MobileGalleryProps> = ({ track }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [direction, setDirection] = useState(1);

  // Safely normalize single image string or image array
  const images: string[] = Array.isArray(
    (track as { images?: string[] }).images,
  )
    ? ((track as { images?: string[] }).images as string[])
    : track.image
      ? [track.image]
      : [];

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (images.length <= 1) return;
    setDirection(1);
    setCurrentIdx((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (images.length <= 1) return;
    setDirection(-1);
    setCurrentIdx((prev) => (prev - 1 + images.length) % images.length);
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  return (
    <div className="relative aspect-[16/10] w-full bg-primary overflow-hidden border border-border-strong rounded-sm touch-pan-y">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIdx}
          custom={direction}
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
            if (swipe < -5000) {
              setDirection(1);
              setCurrentIdx((prev) => (prev + 1) % images.length);
            } else if (swipe > 5000) {
              setDirection(-1);
              setCurrentIdx(
                (prev) => (prev - 1 + images.length) % images.length,
              );
            }
          }}
          className="absolute inset-0 cursor-grab active:cursor-grabbing"
        >
          {images[currentIdx] && (
            <Image
              src={images[currentIdx]}
              alt={`${track.title} slide ${currentIdx + 1}`}
              fill
              priority={currentIdx === 0}
              className="object-cover object-center select-none"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Touch-Friendly Arrow Controls */}
      {images.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            aria-label="Previous image"
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-primary/85 text-text-inverse border border-border-strong hover:bg-accent active:scale-95 transition-all z-10 rounded-sm"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={handleNext}
            aria-label="Next image"
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-primary/85 text-text-inverse border border-border-strong hover:bg-accent active:scale-95 transition-all z-10 rounded-sm"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Indicator Pills */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center space-x-1.5 z-10 bg-primary/80 backdrop-blur-sm px-2.5 py-1 border border-border-strong rounded-full">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setDirection(idx > currentIdx ? 1 : -1);
                  setCurrentIdx(idx);
                }}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-1.5 transition-all duration-300 rounded-full ${
                  currentIdx === idx
                    ? "w-4 bg-accent"
                    : "w-1.5 bg-text-inverse/40"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export const WhyJoinSectionMobile: React.FC = () => {
  const [expandedTrackId, setExpandedTrackId] = useState<string | null>(
    whyJoinData[0]?.id || null,
  );

  return (
    <section className="w-full bg-background-main py-10 px-4 sm:px-6 border-b-2 border-border-main font-sans lg:hidden selection:bg-accent selection:text-text-inverse">
      {/* Editorial Header Section */}
      <div className="text-left space-y-2 pb-5 border-b border-border-main mb-6">
        <span className="text-xs text-accent font-extrabold tracking-widest uppercase block font-luxury-meta">
          Growth Paths
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-text-primary tracking-tight">
          Select Your Fabric Track
        </h2>
        <p className="text-text-secondary text-xs sm:text-sm font-medium leading-relaxed">
          Tap a focus track to explore its visual gallery and discover your
          specific creative trajectory.
        </p>
      </div>

      {/* Accordion Fold Stack */}
      <div className="space-y-3">
        {whyJoinData.map((track) => {
          const isOpen = expandedTrackId === track.id;
          const folderPanelId = `portfolio-fold-${track.id}`;

          return (
            <div
              key={track.id}
              className={`border-2 transition-colors duration-200 rounded-sm ${
                isOpen
                  ? "border-text-primary bg-surface shadow-md"
                  : "border-border-main bg-surface-hover active:bg-surface"
              }`}
            >
              {/* Trigger Button */}
              <button
                onClick={() => setExpandedTrackId(isOpen ? null : track.id)}
                aria-expanded={isOpen}
                aria-controls={folderPanelId}
                className="w-full p-4 flex items-center justify-between text-left focus-luxury"
                style={{ minHeight: "56px" }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 flex items-center justify-center border transition-colors shrink-0 rounded-sm ${
                      isOpen
                        ? "bg-primary text-text-inverse border-primary"
                        : "bg-background-secondary text-text-primary border-border-main"
                    }`}
                  >
                    <Layers className="w-4 h-4 shrink-0" />
                  </div>
                  <h3 className="font-serif text-base font-extrabold text-text-primary tracking-tight">
                    {track.title}
                  </h3>
                </div>
                <motion.div
                  animate={{ rotate: isOpen ? 90 : 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="text-text-primary shrink-0 ml-2"
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.div>
              </button>

              {/* Accordion Expansion Content */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={folderPanelId}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-5 pt-2 space-y-4 border-t border-border-main">
                      {/* Integrated Sliding Image Gallery */}
                      <MobileImageGallery track={track} />

                      {/* High Contrast Insight Block (Paragraph removed) */}
                      <div className="p-3.5 bg-background-secondary border-l-4 border-accent border-y border-r border-border-main space-y-1">
                        <span className="text-[10px] font-extrabold uppercase tracking-widest text-accent block font-luxury-meta">
                          Mentorship & Future Path
                        </span>
                        <p className="text-xs sm:text-sm font-semibold text-text-primary leading-relaxed">
                          {track.insight}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};
