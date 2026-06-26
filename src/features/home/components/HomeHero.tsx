"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HomeHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#163B65]">
      {/* Cinematic Ambient Showroom Imagery */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <motion.div
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.45 }}
          transition={{ duration: 2.2, ease: [0.25, 1, 0.5, 1] }}
          className="relative w-full h-full"
        >
          <Image
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2000&auto=format&fit=crop"
            alt="Smart Shopping Premium Showroom Ambience"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>
        {/* Soft immersive dark neutral gradient scrim */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#163B65]/80 to-transparent max-md:bg-[#0F172A]/90" />
      </div>

      {/* Hero Content Space */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex flex-col justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
          className="max-w-4xl"
        >
          {/* Core Philosophy Tag */}
          <span className="inline-block text-[#F97316] font-sans font-medium tracking-[0.25em] text-xs sm:text-sm uppercase mb-6">
            The Smart Shopping Statement
          </span>

          {/* Unapologetic Large Editorial Statement */}
          <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-bold leading-[1.05] text-white tracking-tight mb-8">
            Great Fashion <br />
            Should Never Depend <br />
            <span className="text-[#F5F2EC] font-normal italic">
              On Where You Live.
            </span>
          </h1>

          <p className="font-sans text-lg sm:text-2xl text-[#F5F2EC]/80 font-normal mb-12 max-w-2xl leading-relaxed">
            World-class curated destinations. Internationally recognized labels.
            Designed dynamically for your community, closer than you think.
          </p>

          {/* Magnetic-Style Responsive Premium Action Hub */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 w-full sm:w-auto">
            <motion.a
              href="#discover-store"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="inline-flex items-center justify-center gap-x-2.5 bg-[#FFFFFF] text-[#163B65] font-sans text-sm tracking-wider font-bold px-10 py-5 rounded-none shadow-sm text-center whitespace-normal break-words transition-colors hover:bg-[#F5F2EC]"
            >
              <span>Explore Selected Destinations</span>
            </motion.a>

            <motion.a
              href="#featured-brands"
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="group inline-flex items-center justify-center gap-x-3 bg-transparent text-white font-sans text-sm tracking-wider font-semibold px-8 py-5 text-center whitespace-normal break-words border border-transparent hover:border-white/20"
            >
              <span>Discover Brands</span>
              <ArrowRight className="w-4 h-4 shrink-0 text-[#F97316] transition-transform group-hover:translate-x-1" />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Elegant Bottom Visual Accent Line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-white/20 via-transparent to-transparent z-10" />
    </section>
  );
}
