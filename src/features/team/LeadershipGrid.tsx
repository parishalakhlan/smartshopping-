"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Heart, Sparkles, ArrowRight, Compass } from "lucide-react";
import { TeamMember } from "@/types/team";

interface GridProps {
  team: TeamMember[];
}

export default function LeadershipGrid({ team }: GridProps) {
  const [activeLead, setActiveLead] = useState<TeamMember | null>(null);

  return (
    <div className="space-y-12 font-sans">
      {/* Header element within grid section boundaries */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#163B65]/10 pb-8">
        <div className="space-y-3 text-left">
          <span className="text-[10px] text-[#F97316] font-bold tracking-widest uppercase">
            The Hearts Behind the Vision
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#163B65] tracking-tight">
            The Minds Shaping Our Culture
          </h2>
        </div>
        <p className="text-[#475569] text-xs font-normal max-w-sm md:text-right leading-relaxed">
          Select any of our creative leaders to explore their unique design
          vision, style philosophies, and individual pathways to bringing
          premium clothing spaces closer to your home.
        </p>
      </div>

      {/* Core Layout Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {team.map((member) => (
          <div
            key={member.id}
            onClick={() => setActiveLead(member)}
            className="group cursor-pointer bg-[#FFFFFF] border border-[#163B65]/10 hover:border-[#163B65] transition-all duration-300 rounded-none flex flex-col justify-between"
          >
            {/* Elegant Portrait Frame */}
            <div className="relative aspect-[10/12] w-full overflow-hidden bg-[#F5F2EC] rounded-none">
              <Image
                src={member.image}
                alt={member.name}
                fill
                sizes="(max-w-7xl) 25vw, 50vw"
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-500 ease-out"
              />
              {/* Absolute Visual Subtle Overlay Line */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#163B65]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute bottom-3 right-3 bg-[#FFFFFF] p-2 rounded-none shadow-sm opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                <ArrowRight className="w-4 h-4 text-[#163B65]" />
              </div>
            </div>

            {/* Content Identity Box */}
            <div className="p-5 space-y-2 text-left bg-[#FFFFFF]">
              <h3 className="font-serif text-lg font-bold text-[#163B65] group-hover:text-[#F97316] transition-colors line-clamp-1">
                {member.name}
              </h3>
              <p className="text-[10px] font-bold tracking-widest text-[#475569]/80 uppercase">
                {member.designation}
              </p>
              <div className="w-6 h-[1px] bg-[#163B65]/20 group-hover:w-12 transition-all duration-300" />
              <p className="text-[#475569] text-xs font-normal italic tracking-tight line-clamp-1 pt-1">
                &ldquo;{member.philosophy}&rdquo;
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Animated Detailed Sidebar Drawer Panel */}
      <AnimatePresence>
        {activeLead && (
          <div className="fixed inset-0 z-50 flex justify-end">
            {/* Backdrop Layer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveLead(null)}
              className="absolute inset-0 bg-[#163B65]/30 backdrop-blur-sm"
            />

            {/* Panel Body */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 240 }}
              className="relative w-full max-w-xl bg-[#FFFFFF] h-full shadow-2xl z-10 flex flex-col justify-between overflow-y-auto rounded-none border-l border-[#163B65]/10"
            >
              <div>
                {/* Header Action Row */}
                <div className="p-6 border-b border-[#163B65]/10 flex items-center justify-between bg-[#F5F2EC]/30">
                  <div className="flex items-center gap-2 text-[10px] text-[#163B65] font-bold tracking-widest uppercase">
                    <Compass className="w-3.5 h-3.5 text-[#F97316]" />
                    Creative Vision & Philosophy
                  </div>
                  <button
                    onClick={() => setActiveLead(null)}
                    className="p-2 hover:bg-[#F5F2EC] transition-colors text-[#163B65] rounded-none"
                    aria-label="Close Profile"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Editorial Body Content */}
                <div className="p-8 space-y-8 text-left">
                  <div className="flex items-center gap-6">
                    <div className="w-24 h-24 rounded-none overflow-hidden border border-[#163B65]/10 bg-[#F5F2EC] relative flex-shrink-0">
                      <Image
                        src={activeLead.image}
                        alt={activeLead.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-serif text-2xl font-bold text-[#163B65]">
                        {activeLead.name}
                      </h3>
                      <p className="text-xs font-bold text-[#F97316] tracking-widest uppercase">
                        {activeLead.designation}
                      </p>
                    </div>
                  </div>

                  {/* Philosophy Direct Quote Box */}
                  <blockquote className="border-l border-[#F97316] pl-4 font-serif text-base italic text-[#475569] py-1 leading-relaxed">
                    &ldquo;{activeLead.philosophy}&rdquo;
                  </blockquote>

                  {/* Narrative Experience Sections */}
                  <div className="space-y-5 pt-2">
                    <div className="flex gap-3.5 items-start">
                      <Heart className="w-4 h-4 text-[#163B65] mt-1 flex-shrink-0" />
                      <div className="space-y-1">
                        <h4 className="text-xs font-bold text-[#163B65] tracking-wider uppercase">
                          The Journey So Far
                        </h4>
                        <p className="text-xs text-[#475569] font-normal leading-relaxed">
                          {activeLead.experience}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3.5 items-start">
                      <Sparkles className="w-4 h-4 text-[#163B65] mt-1 flex-shrink-0" />
                      <div className="space-y-1">
                        <h4 className="text-xs font-bold text-[#163B65] tracking-wider uppercase">
                          Style & Form Foundation
                        </h4>
                        <p className="text-xs text-[#475569] font-normal leading-relaxed">
                          {activeLead.education}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Core Commitments Section */}
                  <div className="space-y-3 pt-6 border-t border-[#163B65]/10">
                    <h4 className="text-xs font-bold text-[#163B65] tracking-widest uppercase">
                      Daily Commitments to the Experience
                    </h4>
                    <ul className="space-y-3.5">
                      {activeLead.responsibilities.map((resp, index) => (
                        <li
                          key={index}
                          className="text-xs text-[#475569] font-normal flex items-start gap-3 leading-relaxed"
                        >
                          <span className="w-1 h-1 bg-[#F97316] rounded-none mt-2 flex-shrink-0" />
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Bottom Editorial Footer Tab */}
              <div className="p-6 bg-[#163B65] text-[#FFFFFF]/70 text-[9px] font-bold text-center tracking-widest uppercase rounded-none border-t border-[#163B65]/10">
                Smart Shopping People Collective // Editorial Feature Row
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
