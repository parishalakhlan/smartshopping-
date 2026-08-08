"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { whyJoinData } from "@/features/careers/data/data";

export const WhyJoinSectionMobile: React.FC = () => {
  // Flatten all images across data tracks into one unified gallery list
  const allGalleryItems = whyJoinData.flatMap((item) => {
    const itemImages = Array.isArray((item as { images?: string[] }).images)
      ? ((item as { images?: string[] }).images as string[])
      : item.image
        ? [item.image]
        : [];

    return itemImages.map((img) => ({
      src: img,
      title: item.title,
    }));
  });

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [slideDirection, setSlideDirection] = useState<number>(1);

  const handleNext = () => {
    if (allGalleryItems.length <= 1) return;
    setSlideDirection(1);
    setCurrentIndex((prev) => (prev + 1) % allGalleryItems.length);
  };

  const handlePrev = () => {
    if (allGalleryItems.length <= 1) return;
    setSlideDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + allGalleryItems.length) % allGalleryItems.length,
    );
  };

  const currentItem = allGalleryItems[currentIndex] || {
    src: "",
    title: "Team Showcase",
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
    <section className="w-full min-h-[90vh] bg-primary text-text-inverse flex flex-col justify-between py-8 px-4 border-b-2 border-border-strong lg:hidden selection:bg-accent selection:text-text-inverse overflow-hidden">
      {/* Editorial Mobile Header */}
      <div className="space-y-1 text-left pb-4 border-b border-border-strong/40">
        <span className="text-[10px] text-accent font-bold tracking-widest uppercase block font-luxury-meta">
          Life & Culture
        </span>
        <div className="flex items-baseline justify-between gap-2">
          <h2 className="font-serif text-2xl font-extrabold text-text-inverse tracking-tight">
            Our People & Atmosphere
          </h2>
          <span className="text-[10px] text-text-muted font-luxury-meta shrink-0">
            {currentIndex + 1} / {allGalleryItems.length}
          </span>
        </div>
      </div>

      {/* Main Viewport Gallery View */}
      <div className="relative aspect-[3/4] w-full my-4 rounded-sm border-2 border-border-strong bg-primary overflow-hidden shadow-lg">
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
            {currentItem.src && (
              <Image
                src={currentItem.src}
                alt={currentItem.title}
                fill
                priority
                className="object-cover object-center select-none"
                sizes="100vw"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent pointer-events-none" />
          </motion.div>
        </AnimatePresence>

        {/* Floating Title Label */}
        <div className="absolute bottom-4 left-4 z-10 bg-primary/90 backdrop-blur-sm px-3.5 py-2 border border-border-strong rounded-sm">
          <p className="font-serif text-sm font-bold text-text-inverse">
            {currentItem.title}
          </p>
        </div>

        {/* Arrow Controls */}
        {allGalleryItems.length > 1 && (
          <div className="absolute inset-y-0 inset-x-3 flex items-center justify-between pointer-events-none z-10">
            <button
              onClick={handlePrev}
              aria-label="Previous photo"
              className="pointer-events-auto p-2.5 bg-primary/85 text-text-inverse border border-border-strong hover:bg-accent active:scale-95 transition-all shadow-md rounded-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next photo"
              className="pointer-events-auto p-2.5 bg-primary/85 text-text-inverse border border-border-strong hover:bg-accent active:scale-95 transition-all shadow-md rounded-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>

      {/* Horizontal Strip Thumbnail Selector */}
      <div className="w-full overflow-x-auto pb-1 scrollbar-none">
        <div className="flex items-center gap-2">
          {allGalleryItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => {
                setSlideDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              className={`relative shrink-0 h-14 w-20 overflow-hidden border-2 transition-all duration-200 rounded-sm ${
                currentIndex === idx
                  ? "border-accent scale-105"
                  : "border-border-strong/50 opacity-50"
              }`}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover"
                sizes="80px"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
