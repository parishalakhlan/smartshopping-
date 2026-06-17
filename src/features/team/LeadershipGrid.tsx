"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Briefcase,
  GraduationCap,
  ChevronRight,
  UserCheck,
} from "lucide-react";
import { TeamMember } from "@/types/team";

interface GridProps {
  team: TeamMember[];
}

export default function LeadershipGrid({ team }: GridProps) {
  const [activeLead, setActiveLead] = useState<TeamMember | null>(null);

  return (
    <div className="space-y-12">
      {/* Header element within grid section boundaries */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#e2e8f0] pb-8">
        <div className="space-y-3 text-left">
          <span className="text-xs font-luxury-meta text-[#f97316] font-bold tracking-widest">
            EXECUTIVE CORE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#163b65] tracking-tight">
            The Team Driving Our Growth
          </h2>
        </div>
        <p className="text-[#475569] text-xs font-light max-w-sm md:text-right leading-relaxed">
          Click on any management executive profile card to safely explore their
          certified background records, operational focus, and academic
          credentials.
        </p>
      </div>

      {/* Core Layout Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {team.map((member) => (
          <div
            key={member.id}
            onClick={() => setActiveLead(member)}
            className="group cursor-pointer bg-white border border-[#e2e8f0] hover:border-[#163b65] transition-all duration-300 overflow-hidden flex flex-col justify-between"
          >
            {/* Elegant Portrait Frame */}
            <div className="relative aspect-[10/11] w-full overflow-hidden bg-slate-100">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-102 transition-all duration-500 ease-out"
              />
              {/* Absolute Visual Subtle Overlay Line */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm p-1.5 rounded-none shadow-sm opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                <ChevronRight className="w-4 h-4 text-[#163b65]" />
              </div>
            </div>

            {/* Content Identity Box */}
            <div className="p-5 space-y-2 text-left bg-white">
              <h3 className="font-serif text-lg font-bold text-[#0f172a] group-hover:text-[#163b65] transition-colors line-clamp-1">
                {member.name}
              </h3>
              <p className="text-[10px] font-luxury-meta font-bold tracking-widest text-[#f97316]">
                {member.designation}
              </p>
              <div className="w-6 h-[1px] bg-[#cbd5e1] group-hover:w-12 transition-all duration-300" />
              <p className="text-[#475569] text-xs font-light italic tracking-tight line-clamp-1 pt-1">
                "{member.philosophy}"
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ==========================================
          MAGAZINE DRAWER PANEL (ANIMATED DETAILED MODAL)
          ========================================== */}
      <AnimatePresence>
        {activeLead && (
          <div className="fixed inset-0 z-50 flex justify-end">
            {/* Backdrop Layer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveLead(null)}
              className="absolute inset-0 bg-[#0f172a]/40 backdrop-blur-sm"
            />

            {/* Panel Body */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 220 }}
              className="relative w-full max-w-xl bg-white h-full shadow-2xl z-10 flex flex-col justify-between overflow-y-auto"
            >
              <div>
                {/* Header Action Row */}
                <div className="p-6 border-b border-[#e2e8f0] flex items-center justify-between bg-[#f8fafc]">
                  <div className="flex items-center gap-2 text-[10px] font-luxury-meta text-[#163b65] font-bold tracking-widest">
                    <UserCheck className="w-3.5 h-3.5 text-[#f97316]" />
                    VERIFIED CORPORATE DOSSIER
                  </div>
                  <button
                    onClick={() => setActiveLead(null)}
                    className="p-2 hover:bg-slate-200 transition-colors text-[#0f172a] focus-luxury"
                    aria-label="Close Dossier"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Editorial Body Content */}
                <div className="p-8 space-y-8 text-left">
                  <div className="flex items-center gap-6">
                    <div className="w-24 h-24 rounded-none overflow-hidden border border-[#e2e8f0] bg-slate-100 flex-shrink-0">
                      <img
                        src={activeLead.image}
                        alt={activeLead.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-serif text-2xl font-bold text-[#163b65]">
                        {activeLead.name}
                      </h3>
                      <p className="text-xs font-luxury-meta text-[#f97316] font-bold tracking-widest">
                        {activeLead.designation}
                      </p>
                    </div>
                  </div>

                  {/* Core Statement */}
                  <blockquote className="border-l-2 border-[#f97316] pl-4 font-serif text-base italic text-[#475569] py-1">
                    "{activeLead.philosophy}"
                  </blockquote>

                  {/* Operational Background Sections */}
                  <div className="space-y-4 pt-2">
                    <div className="flex gap-3 items-start">
                      <Briefcase className="w-4 h-4 text-[#163b65] mt-1 flex-shrink-0" />
                      <div className="space-y-1">
                        <h4 className="text-xs font-luxury-meta font-bold text-[#0f172a] tracking-wider">
                          TENURE & BACKGROUND EXPERIENCE
                        </h4>
                        <p className="text-xs text-[#475569] font-light">
                          {activeLead.experience}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3 items-start">
                      <GraduationCap className="w-4 h-4 text-[#163b65] mt-1 flex-shrink-0" />
                      <div className="space-y-1">
                        <h4 className="text-xs font-luxury-meta font-bold text-[#0f172a] tracking-wider">
                          ACADEMIC ALIGNMENT
                        </h4>
                        <p className="text-xs text-[#475569] font-light">
                          {activeLead.education}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Core Mandate Directives */}
                  <div className="space-y-3 pt-4 border-t border-[#f1f5f9]">
                    <h4 className="text-xs font-luxury-meta font-bold text-[#163b65] tracking-widest">
                      MANAGEMENT DIRECTIVES & ACCOUNTABILITIES
                    </h4>
                    <ul className="space-y-2">
                      {activeLead.responsibilities.map((resp, index) => (
                        <li
                          key={index}
                          className="text-xs text-[#475569] font-light flex items-start gap-2.5 leading-relaxed"
                        >
                          <span className="w-1.5 h-1.5 bg-[#f97316] rounded-none mt-1.5 flex-shrink-0" />
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Bottom Decorative Closing Banner */}
              <div className="p-6 bg-[#163b65] text-white/70 text-[10px] font-luxury-meta text-center tracking-widest">
                SMART SHOPPING RETAIL NETWORK EXECUTIVE FRAMEWORK // 2026
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
