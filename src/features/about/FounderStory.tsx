"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface FoundersStoryProps {
  imageSrc?: string;
}

export function FoundersStory({
  imageSrc = "image_agent_tag_10074991913707316770",
}: FoundersStoryProps) {
  return (
    <section className="py-24 lg:py-32 bg-background-main px-4 sm:px-8 lg:px-16 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Asymmetric Framed Imagery Asset */}
        <div className="lg:col-span-5 relative">
          {/* Subtle background framing shapes for depth */}
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/5 pointer-events-none" />
          <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-accent/5 pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, scale: 0.98, x: -25 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 overflow-hidden shadow-lg bg-background-secondary aspect-[4/5] border border-border-main"
          >
            <img
              src={imageSrc}
              alt="Vikram Singh and Vinod Kumar portrait"
              className="w-full h-full object-cover grayscale brightness-95 contrast-105 transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
            {/* Elegant Minimal Editorial Overlay Panel */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-text-primary via-text-primary/40 to-transparent p-6 text-white pt-20">
              <p className="text-[10px] uppercase font-luxury-meta tracking-widest text-accent">
                FOUNDING PHOTOGRAPHY
              </p>
              <p className="text-xs font-light tracking-wide text-white/80">
                HQ Executive Gallery, 2026
              </p>
            </div>
          </motion.div>

          {/* Floating Metric Badge Component */}
          <div className="absolute -right-4 top-8 bg-accent text-white px-5 py-3 shadow-md hidden sm:block z-20">
            <div className="text-2xl font-serif font-bold leading-none mb-1">
              17+
            </div>
            <div className="text-[9px] uppercase font-luxury-meta tracking-widest opacity-90 leading-none">
              Years Co-Leadership
            </div>
          </div>
        </div>

        {/* Narrative & High-Fashion Pull-Quote Block */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 space-y-8"
        >
          <div className="space-y-3">
            <span className="text-xs font-luxury-meta tracking-[0.2em] text-accent font-semibold block">
              FIRST-GENERATION VISIONARIES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-luxury-heading tracking-tight text-text-primary leading-tight">
              The Architecture of Scale
            </h2>
          </div>

          <div className="space-y-4 text-text-secondary font-light leading-relaxed tracking-wide text-sm sm:text-base">
            <p>
              Alumni roots from Hisar, Haryana,{" "}
              <strong className="text-text-primary font-medium">
                Mr. Vikram Singh
              </strong>{" "}
              and{" "}
              <strong className="text-text-primary font-medium">
                Mr. Vinod Kumar
              </strong>{" "}
              launched their collaborative vision directly following graduation
              in 2009 as determined retail disrupters.
            </p>
            <p>
              Eschewing standard corporate career arcs, they engineered a
              tactical expansion blueprint aimed straight at capturing Northern
              India's high-velocity micro-metro corridors—transforming Smart
              Shopping into an expansive regional fashion authority.
            </p>
          </div>

          {/* Re-designed High Fashion Minimalist Pull-Quote */}
          <div className="relative bg-background-secondary p-8 border-l-4 border-accent shadow-sm">
            <Quote className="w-10 h-10 text-accent opacity-15 absolute top-4 right-4 stroke-[1]" />
            <blockquote className="text-lg sm:text-xl italic font-serif leading-relaxed text-text-primary relative z-10 pr-6">
              "At Smart Shopping, we believe that great fashion should be for
              everyone, everywhere."
            </blockquote>

            <div className="mt-6 border-t border-border-main pt-4 flex items-center justify-between">
              <div>
                <span className="text-xs font-luxury-meta tracking-widest text-primary block font-bold">
                  VIKRAM SINGH & VINOD KUMAR
                </span>
                <span className="text-[10px] uppercase tracking-wider text-text-muted">
                  Executive Directorate Founders
                </span>
              </div>
              <div className="w-12 h-[1px] bg-accent/60" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
