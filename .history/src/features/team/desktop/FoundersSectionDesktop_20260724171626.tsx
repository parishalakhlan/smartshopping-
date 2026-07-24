// @/components/team/FoundersSectionDesktop.tsx
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Founder } from "@/features/team/data/foundersData";

interface DesktopProps {
  founders: Founder[];
}

export default function FoundersSectionDesktop({ founders }: DesktopProps) {
  console.log(founders);

  return (
    <div className="space-y-12 font-sans hidden lg:block">
      {/* Header Bar */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-border-main pb-8">
        <div className="space-y-3 text-left">
          <span className="text-xs text-accent font-bold tracking-widest uppercase block">
            OUR FOUNDERS
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
            Two Visionaries. One Shared Purpose.
          </h2>
        </div>

        <p className="text-text-secondary text-sm font-normal max-w-md md:text-right leading-relaxed">
          Smart Shopping was built on the belief that premium shopping should
          never be limited by geography. Meet the founders who transformed that
          vision into a growing retail network connecting global brands with
          communities across India.
        </p>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-2 gap-12 lg:gap-16 items-start">
        {founders.map((founder, index) => (
          <motion.div
            key={founder.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="flex flex-col space-y-6 text-left group"
          >
            {/* Founder Image */}
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-background-secondary rounded-none border-2 border-border-main shadow-md">
              <Image
                src={founder.image}
                alt={founder.name}
                fill
                sizes="50vw"
                className="object-cover transition-transform duration-700 ease-out scale-100 group-hover:scale-[1.02]"
              />

              {/* High-Contrast Bottom Shadow for Image Depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-80" />
            </div>

            {/* Content Details */}
            <div className="space-y-5">
              {/* Name & Role */}
              <div className="border-b-2 border-border-main pb-3">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-text-primary">
                  {founder.name}
                </h3>

                <p className="text-xs font-bold text-accent tracking-widest uppercase mt-1">
                  {founder.role}
                </p>
              </div>

              {/* Quote Block - Strong Solid Accent Border & High Text Contrast */}
              <div className="relative bg-background-secondary p-5 border-l-4 border-accent shadow-sm">
                <Quote className="w-8 h-8 text-primary/15 absolute -top-2 -right-1 pointer-events-none" />

                <p className="font-serif text-sm sm:text-base italic font-medium text-text-primary leading-relaxed">
                  &ldquo;{founder.signatureQuote}&rdquo;
                </p>
              </div>

              {/* Biography & Directives */}
              <div className="space-y-4">
                <p className="text-sm text-text-secondary font-normal leading-relaxed">
                  {founder.narrativeBiography}
                </p>

                <div className="pt-2 flex items-center gap-2 border-t border-border-main">
                  <span className="text-xs font-bold tracking-wider text-text-primary uppercase">
                    Core Directive:
                  </span>

                  <span className="text-xs font-semibold text-text-muted">
                    {founder.focusArea}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
