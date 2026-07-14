import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { successStories } from "@/features/partners/partners.data";
import SectionHeader from "../shared/SectionHeader";

export default function SuccessStories() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextStory = () => {
    setCurrentIndex((prev) => (prev + 1) % successStories.length);
  };

  return (
    <section className="py-32 px-24 bg-[#0D0D0E] border-b border-white/5">
      <div className="mb-20 flex justify-between items-end">
        <SectionHeader
          badge="Syndicate Case Briefings"
          title="Validated Outcomes"
        />
        <button
          onClick={nextStory}
          className="group flex items-center gap-3 text-xs tracking-widest uppercase font-medium text-stone-400 hover:text-white transition-colors duration-300"
        >
          Next Dossier{" "}
          <ChevronRight
            size={14}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>
      </div>

      <div className="bg-black border border-white/5 min-h-[500px] relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-12 h-full min-h-[500px]"
          >
            {/* Visual Narrative Layout */}
            <div className="col-span-5 relative h-full min-h-[500px]">
              <Image
                src={successStories[currentIndex].image}
                alt={successStories[currentIndex].partner}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <span className="text-xs text-[#E25822] uppercase tracking-widest font-mono font-semibold">
                  Verified Case Study
                </span>
                <h3 className="text-2xl text-white font-light mt-1">
                  {successStories[currentIndex].partner}
                </h3>
                <p className="text-xs text-stone-400 mt-0.5">
                  {successStories[currentIndex].role}
                </p>
              </div>
            </div>

            {/* Editorial breakdown context */}
            <div className="col-span-7 p-12 flex flex-col justify-between space-y-12 bg-black">
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] text-stone-500 uppercase tracking-widest block mb-1">
                    Inherent Impediment
                  </span>
                  <p className="text-sm text-stone-300 font-light leading-relaxed">
                    {successStories[currentIndex].challenge}
                  </p>
                </div>

                <div>
                  <span className="text-[10px] text-stone-500 uppercase tracking-widest block mb-1">
                    The Strategic Vector
                  </span>
                  <p className="text-sm text-stone-300 font-light leading-relaxed">
                    {successStories[currentIndex].journey}
                  </p>
                </div>
              </div>

              <div className="border-t border-white/10 pt-6 bg-gradient-to-r from-[#131315] to-transparent p-6 border-l-2 border-[#E25822]">
                <span className="text-xs text-[#E25822] uppercase tracking-widest block font-medium">
                  Quantified Asset Optimization
                </span>
                <p className="text-xl text-white font-light mt-1 leading-normal">
                  {successStories[currentIndex].outcome}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
