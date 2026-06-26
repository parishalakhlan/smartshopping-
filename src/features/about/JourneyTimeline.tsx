"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export function JourneyTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={containerRef}
      id="the-shift"
      className="py-24 sm:py-32 bg-[#FFFFFF] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Block: Immersive Structural Narrative Frame */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, ease: [0.25, 1, 0.5, 1] }}
            className="lg:col-span-6 space-y-6 font-sans"
          >
            <span className="text-[#F97316] font-sans font-semibold tracking-[0.25em] text-xs uppercase block">
              SECTION 03 // THE SHIFT
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#163B65] font-bold tracking-tight leading-[1.12]">
              What If Great Fashion <br />
              Could Feel Local?
            </h2>

            <div className="text-[#475569] text-base sm:text-lg leading-relaxed space-y-6 font-normal pt-4 max-w-xl">
              <p>
                The foundational turning point wasn&apos;t simply opening
                logistical storefront outposts or counting square footage. It
                was a radical reconfiguration of standard retail hierarchy.
              </p>
              <p className="text-[#0F172A] font-medium">
                The objective was bringing world-class lifestyle curation,
                authentic material depth, and premium immersive environments
                directly to the communities that rightfully deserved them.
              </p>
              <p className="text-sm sm:text-base opacity-90">
                By bypassing traditional metropolitan centralizations, we
                realized that fashion accessibility alters more than style
                patterns—it completely redefines the landscape of local pride.
              </p>
            </div>
          </motion.div>

          {/* Right Block: Subtle Dual Motion Layer Imagery Depth */}
          <div className="lg:col-span-6 relative w-full aspect-square sm:aspect-[4/3] lg:aspect-[5/4]">
            {/* Background Primary Accent Layer */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={isInView ? { opacity: 0.15, scale: 1, x: 0 } : {}}
              transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
              className="absolute inset-0 bg-[#163B65] translate-x-4 translate-y-4"
            />

            {/* Main Editorial Visual Display Container */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.95,
                delay: 0.1,
                ease: [0.25, 1, 0.5, 1],
              }}
              className="relative w-full h-full overflow-hidden border border-[#163B65]/10 bg-[#F5F2EC]"
            >
              <Image
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80"
                alt="Smart Shopping spatial interior experience"
                fill
                sizes="(max-w-7xl) 100vw, 50vw"
                className="object-cover grayscale contrast-[1.03] brightness-[0.97]"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#163B65]/20 to-transparent pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
