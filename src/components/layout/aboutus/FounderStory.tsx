"use client";

import React from "react";
import { motion } from "framer-motion";
import { QuoteIcon } from "lucide-react";

interface FoundersStoryProps {
  imageSrc?: string;
}

export function FoundersStory({
  imageSrc = "image_agent_tag_10074991913707316770",
}: FoundersStoryProps) {
  return (
    <section className="py-24 lg:py-32 bg-[#F8F8F8] px-4 sm:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        {/* Asymmetrical Visual Column */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6 relative group"
        >
          <div className="absolute -inset-4 border border-[#EAEAEA] translate-x-8 translate-y-8 pointer-events-none group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-700 ease-out z-0" />
          <div className="relative z-10 aspect-[3/4] w-full bg-[#EAEAEA] overflow-hidden">
            {/* Contextual verification: Rendering image_agent tag cleanly */}
            <img
              src={imageSrc}
              alt="Founders of Smart Shopping in a minimalist editorial setting"
              className="w-full h-full object-cover grayscale brightness-95 contrast-105 transition-transform duration-1000 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Narrative Copy Column */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="lg:col-span-6 space-y-8 sm:space-y-10"
        >
          <div className="space-y-3">
            <span className="text-xs font-luxury-meta tracking-[0.25em] text-[#666666] block">
              FIRST-GENERATION ENTREPRENEURS
            </span>
            <h2 className="text-3xl sm:text-4xl font-luxury-heading tracking-wide text-[#111111]">
              The Leadership Architecture
            </h2>
          </div>

          <div className="space-y-6 text-[#555555] font-light leading-relaxed tracking-wide text-sm sm:text-base">
            <p>
              Mr. Vikram Singh and Mr. Vinod Kumar, both from Hisar, Haryana,
              started their entrepreneurial journey soon after graduating in
              2009 as first-generation visionaries.
            </p>
            <p>
              Motivated by a vision to become key players in northern India's
              fast-growing retail market, they have built Smart Shopping into a
              retail powerhouse that brings premium international fashion
              matrices into Tier 2 and Tier 3 ecosystems.
            </p>
          </div>

          {/* Premium Magazine Pull Quote */}
          <div className="relative pt-8 border-t border-[#EAEAEA]">
            <QuoteIcon className="absolute top-4 left-0 w-8 h-8 text-[#E65100]/10 stroke-[1]" />
            <blockquote className="text-lg sm:text-xl italic text-[#1F4D45] font-serif leading-relaxed font-medium pl-6">
              "At Smart Shopping, we believe that great fashion should be for
              everyone, everywhere."
            </blockquote>
            <div className="mt-4 pl-6">
              <p className="text-xs font-luxury-meta tracking-widest text-[#111111] font-semibold">
                Vikram Singh & Vinod Kumar
              </p>
              <p className="text-[11px] uppercase tracking-wider text-[#999999] mt-0.5">
                Founding Directors
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
