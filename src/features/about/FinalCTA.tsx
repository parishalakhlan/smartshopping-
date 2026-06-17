"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-32 lg:py-44 bg-[#111111] text-white px-4 sm:px-8 lg:px-16 text-center relative overflow-hidden">
      {/* High impact structural color wash overlay matrix */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(31,77,69,0.25)_0%,transparent_65%)] pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#E65100] to-transparent" />

      <div className="max-w-4xl mx-auto relative z-10 space-y-10">
        <div className="space-y-4">
          <span className="text-xs font-luxury-meta tracking-[0.3em] text-[#E65100] font-bold block">
            HUMAN CAPITAL CALL
          </span>
          <h2 className="text-4xl sm:text-6xl font-luxury-heading font-light tracking-tight text-white leading-tight">
            Want to be part of <br />
            our{" "}
            <span className="font-normal italic text-[#1F4D45]">
              Expansion?
            </span>
          </h2>
        </div>

        <p className="text-sm sm:text-base text-white/60 font-light max-w-xl mx-auto leading-relaxed tracking-wide">
          Connect with our talent acquisition team to explore leadership
          positions across corporate management or flagship retail operations.
        </p>

        <motion.div
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          className="inline-block pt-4"
        >
          <Button className="h-14 bg-white hover:bg-[#EAEAEA] text-[#111111] font-luxury-nav tracking-widest px-12 rounded-none border-0 flex items-center gap-3 transition-all duration-300 shadow-xl font-bold cursor-pointer">
            <span>JOIN THE TALENT NETWORK</span>
            <ArrowUpRight className="w-4 h-4 text-[#E65100] stroke-[2]" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
