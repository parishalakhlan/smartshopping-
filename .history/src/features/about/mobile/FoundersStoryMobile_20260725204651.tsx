// components/FoundersStoryMobile.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";
import {
  FOUNDERS_DATA,
  FoundersStoryProps,
} from "@/features/about/data/founders-shared";

export function FoundersStoryMobile({
  imageSrc = FOUNDERS_DATA.defaultImage,
}: FoundersStoryProps) {
  return (
    <section
      id="the-visionaries"
      className="py-12 px-5 bg-surface border-t border-border-main transition-colors duration-300"
    >
      <div className="w-full max-w-md mx-auto space-y-6">
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-sans flex flex-col gap-2"
        >
          <h2 className="font-serif text-3xl font-bold text-text-primary tracking-tight leading-[1.16]">
            {FOUNDERS_DATA.headline}
          </h2>
        </motion.div>

        {/* Hero Visual Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative w-full overflow-hidden border border-border-main bg-background-secondary shadow-md"
        >
          {/* Top Gold Accent Bar */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-accent z-10" />

          <div className="relative aspect-[4/3] w-full">
            <Image
              src={imageSrc}
              alt="Vikram Singh and Vinod Kumar portrait"
              fill
              sizes="(max-width: 480px) 100vw, 480px"
              className="object-cover object-center"
            />
          </div>

          {/* Floating Tag */}
          <div className="absolute bottom-3 left-3 bg-surface/95 backdrop-blur-sm border border-border-main px-2.5 py-1 z-10 shadow-sm">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-text-secondary">
              Leadership & Vision
            </span>
          </div>
        </motion.div>

        {/* Key Quote Highlight */}
        <motion.blockquote
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative bg-background-secondary p-4 border-l-4 border-accent border-y border-r border-border-main shadow-sm"
        >
          <Quote className="w-5 h-5 text-accent/40 mb-1" />
          <p className="font-serif italic text-sm text-text-primary font-bold leading-snug">
            {FOUNDERS_DATA.quote}
          </p>
        </motion.blockquote>

        {/* Narrative Content Block */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-3 text-xs leading-relaxed font-sans text-text-secondary font-medium"
        >
          <p>{FOUNDERS_DATA.p1}</p>
          <p>{FOUNDERS_DATA.expandedP1}</p>
        </motion.div>
      </div>
    </section>
  );
}
