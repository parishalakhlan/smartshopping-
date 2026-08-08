"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { whyJoinData } from "@/features/careers/data/data";

export const WhyJoinSectionDesktop: React.FC = () => {
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
    <section className="w-full min-h-screen bg-primary text-text-inverse hidden lg:flex flex-col justify-between py-12 px-8 border-b-2 border-border-strong relative selection:bg-accent selection:text-text-inverse overflow-hidden">
      {/* Editorial Header Section */}
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border-strong/40 pb-6 z-10">
        <div className="space-y-2">
          <span className="text-xs text-accent font-bold tracking-widest uppercase block font-luxury-meta">
            Life & Culture
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-extrabold text-text-inverse tracking-tight">
            Our People & Atmosphere
          </h2>
        </div>
        <div className="text-right">
          <p className="text-text-muted text-xs font-luxury-meta tracking-wider uppercase">
            Showcase — {String(currentIndex + 1).padStart(2, "0")} /{" "}
            {String(allGalleryItems.length).padStart(2, "0")}
          </p>
        </div>
      </div>

      {/* Main Viewport Visual Showcase Frame */}
      <div className="max-w-7xl mx-auto w-full my-6 flex-1 min-h-[500px] relative rounded-sm border-2 border-border-strong bg-primary overflow-hidden shadow-2xl group">
        <AnimatePresence initial={false} custom={slideDirection}>
          <motion.div
            key={currentIndex}
            custom={slideDirection}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 32 },
              opacity: { duration: 0.25 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.8}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = Math.abs(offset.x) * velocity.x;
              if (swipe < -10000) handleNext();
              if (swipe > 10000) handlePrev();
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

        {/* Floating Image Label */}
        <div className="absolute bottom-6 left-6 z-10 bg-primary/90 backdrop-blur-md px-5 py-3 border border-border-strong rounded-sm shadow-lg">
          <p className="font-serif text-lg font-bold text-text-inverse">
            {currentItem.title}
          </p>
        </div>

        {/* Large Arrow Control Overlay */}
        {allGalleryItems.length > 1 && (
          <div className="absolute inset-y-0 inset-x-6 flex items-center justify-between pointer-events-none z-10">
            <button
              onClick={handlePrev}
              aria-label="Previous Photo"
              className="pointer-events-auto p-4 bg-primary/90 text-text-inverse border border-border-strong hover:bg-accent hover:border-accent transition-all duration-200 shadow-xl focus-luxury rounded-sm"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Photo"
              className="pointer-events-auto p-4 bg-primary/90 text-text-inverse border border-border-strong hover:bg-accent hover:border-accent transition-all duration-200 shadow-xl focus-luxury rounded-sm"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}
      </div>

      {/* Horizontal Strip Thumbnail Selector */}
      <div className="max-w-7xl mx-auto w-full z-10">
        <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none pt-2">
          {allGalleryItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => {
                setSlideDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              className={`relative shrink-0 h-16 w-24 overflow-hidden border-2 transition-all duration-200 focus-luxury rounded-sm ${
                currentIndex === idx
                  ? "border-accent scale-105 shadow-md"
                  : "border-border-strong/60 opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover"
                sizes="96px"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
