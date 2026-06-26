"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function WhyWeExist() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-24 sm:py-32 bg-[#FFFFFF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column: Asymmetric High-Contrast Fashion Portraiture */}
          <div className="lg:col-span-5 relative aspect-[3/4] w-full bg-[#F5F2EC] overflow-hidden">
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
              className="relative w-full h-full"
            >
              <Image
                src="https://images.unsplash.com/photo-1479064555552-3ef4979f8908?q=80&w=800&auto=format&fit=crop"
                alt="Smart Shopping Premium Lifestyle Presentation"
                fill
                sizes="(max-w-1024px) 100vw, 40vw"
                className="object-cover object-center brightness-[0.95]"
              />
            </motion.div>

            {/* Soft Ambient Shadow Block */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/20 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Right Column: Premium Editorial Content Disclosure Canvas */}
          <div className="lg:col-span-7 flex flex-col justify-start pt-2">
            <span className="text-[#F97316] font-sans font-medium tracking-[0.2em] text-xs uppercase block mb-4">
              Why We Exist
            </span>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#163B65] font-bold tracking-tight leading-[1.1] mb-8 break-words whitespace-normal">
              Premium Style Belongs Right Here.
            </h2>

            <div className="font-sans text-[#475569] text-base sm:text-lg leading-relaxed max-w-2xl space-y-6">
              <p className="font-medium text-[#0F172A]">
                {` Why should exploring world-class design demand a flight or a
                long weekend excursion? We believe true style shouldn't be
                governed by an address.`}
              </p>

              <p>
                Our purpose is completely centered on removing geographic
                divides from the retail map. We design beautiful local spaces
                where high-end global curations live directly in your community.
              </p>

              {/* Layer 2: Progressive Interaction Control */}
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pt-4 border-t border-[#F5F2EC] text-sm sm:text-base text-[#475569] font-normal space-y-4">
                      {`By working closely alongside legendary international brand
                      houses, we curate exclusive collections configured
                      specifically for your lifestyle. Every texture, layout,
                      and environment is calibrated to ensure that you don't
                      simply shop—you experience.`}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Minimalist Editorial Expansion Mechanism */}
              <div className="pt-6">
                <motion.button
                  onClick={() => setIsExpanded(!isExpanded)}
                  whileHover={{ gap: "16px" }}
                  className="inline-flex items-center gap-3 font-sans text-xs sm:text-sm font-bold tracking-widest uppercase text-[#163B65] group transition-all"
                >
                  <span>{isExpanded ? "Read Less" : "Expand Narrative"}</span>
                  <div className="w-8 h-8 rounded-full bg-[#F5F2EC] flex items-center justify-center text-[#163B65] group-hover:bg-[#163B65] group-hover:text-[#FFFFFF] transition-colors duration-300">
                    {isExpanded ? (
                      <Minus className="w-4 h-4 shrink-0" />
                    ) : (
                      <Plus className="w-4 h-4 shrink-0" />
                    )}
                  </div>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
