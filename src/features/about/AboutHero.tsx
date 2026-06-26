"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function AboutHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Balanced cinematic parallax translations
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  const scrollToNext = () => {
    const nextSection = document.getElementById("the-challenge");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Content reveal sequence orchestrations
  const titleContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const textRevealVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.95 },
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-[85vh] sm:min-h-screen flex flex-col justify-between bg-[#F5F2EC] overflow-hidden pt-36 pb-12"
    >
      {/* Immersive Editorial Parallax Backdrop Canvas */}
      <motion.div
        style={{ y: imageY }}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2000&auto=format&fit=crop"
          alt="High fashion fabrics architectural display"
          fill
          priority
          className="object-cover object-center filter grayscale-[30%] brightness-[0.92] contrast-[1.02]"
        />
        {/* Editorial color overlay balancing depth and reading legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F5F2EC]/85 via-[#F5F2EC]/75 to-[#F5F2EC]/90" />
      </motion.div>

      {/* Primary Layout Engine */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10 my-auto">
        <motion.div
          style={{ y: contentY }}
          variants={titleContainerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
        >
          <div className="lg:col-span-11 xl:col-span-10">
            {/* Small Label Group */}
            <motion.span
              variants={textRevealVariants}
              className="text-[#F97316] font-sans font-semibold tracking-[0.25em] text-xs sm:text-sm uppercase block mb-6"
            >
              ABOUT SMART SHOPPING
            </motion.span>

            {/* Large Editorial Statement Block */}
            <motion.h1
              variants={textRevealVariants}
              className="font-serif text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#163B65] tracking-tight leading-[1.08] mb-10 text-balance"
            >
              Great Fashion Should <br className="hidden md:inline" />
              Never Depend On <br className="hidden sm:inline" />
              Where You Live.
            </motion.h1>
          </div>

          {/* Asymmetric Split Layout for Supporting Copy */}
          <div className="lg:col-span-8 lg:col-start-1 grid grid-cols-1 sm:grid-cols-12 gap-4">
            <motion.div
              variants={textRevealVariants}
              className="sm:col-span-10 md:col-span-9 lg:col-span-11"
            >
              <p className="font-sans text-[#475569] text-base sm:text-lg lg:text-xl leading-relaxed font-normal tracking-wide text-balance">
                For years, premium fashion experiences were concentrated in
                major cities. We believed communities beyond metros deserved the
                same access, the same confidence, and the same opportunities to
                express themselves through fashion.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Editorial Bottom Control Layout Bar */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10 border-t border-[#163B65]/10 pt-6 mt-12 flex justify-between items-center">
        <span className="font-sans text-[10px] sm:text-xs uppercase tracking-widest text-[#475569]/60 font-medium">
          The Belief Infrastructure // 2026
        </span>

        {/* Magnetic Interactive Navigation Anchor */}
        <motion.button
          onClick={scrollToNext}
          whileHover={{ y: 3 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-x-2.5 font-sans text-xs font-bold uppercase tracking-widest text-[#163B65] hover:text-[#F97316] transition-colors duration-300 group"
        >
          <span>Continue Journey</span>
          <ArrowDown className="w-4 h-4 text-[#F97316] group-hover:translate-y-0.5 transition-transform duration-300" />
        </motion.button>
      </div>
    </section>
  );
}
