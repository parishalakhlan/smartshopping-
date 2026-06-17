"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { corporateConfig } from "@/config/navigation";

export function FinalCTA() {
  return (
    <section className="py-28 lg:py-40 bg-[#111111] text-white px-4 sm:px-8 lg:px-16 text-center relative overflow-hidden select-none">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(31,77,69,0.15)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 space-y-8 sm:space-y-10">
        <div className="space-y-3">
          <span className="text-xs font-luxury-meta tracking-[0.3em] text-[#E65100]">
            JOIN THE ARCHITECTURE
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-luxury-heading font-light tracking-wide text-white leading-tight">
            Want to be part of <br />
            our{" "}
            <span className="font-normal italic text-[#1F4D45]">Story?</span>
          </h2>
        </div>

        <p className="text-sm sm:text-base text-[#999999] font-light max-w-lg mx-auto leading-relaxed tracking-wide">
          Join our ecosystem as we continue to map out and deploy premium
          lifestyle arrays into every crucial corner of North India.
        </p>

        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-block pt-4"
        >
          <Button
            onClick={() => {
              window.location.href = corporateConfig.connectHref;
            }}
            className="h-14 bg-white hover:bg-[#EAEAEA] text-[#111111] font-luxury-nav tracking-widest px-10 rounded-none border-0 flex items-center gap-3 group transition-all duration-300 cursor-pointer shadow-none"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300 stroke-[1.5]" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
