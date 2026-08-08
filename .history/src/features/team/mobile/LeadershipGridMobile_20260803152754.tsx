// @/components/team/LeadershipGridMobile.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Info, X } from "lucide-react";
import { TeamMember } from "@/types/team";

interface MobileProps {
  team: TeamMember[];
}

export default function LeadershipGridMobile({ team }: MobileProps) {
  // State to track which member's detail overlay is open
  const [activeMemberId, setActiveMemberId] = useState<string | null>(null);

  const handleCardClick = (id: string) => {
    setActiveMemberId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-full font-sans bg-transparent lg:hidden space-y-6 py-6">
      {/* Editorial Title Block */}
      <div className="text-left space-y-1.5 px-4 border-b border-border-main/20 pb-4">
        <span className="text-[10px] text-accent font-bold tracking-[0.2em] uppercase block">
          The Hearts Behind the Vision
        </span>
        <h2 className="font-serif text-2xl font-bold text-text-primary tracking-tight">
          The Minds Shaping Our Culture
        </h2>
        <p className="text-text-secondary text-xs leading-relaxed max-w-xs">
          Swipe through our leadership gallery. Tap any photo to uncover their
          vision and journey.
        </p>
      </div>

      {/* Horizontal Photo Deck Carousel */}
      <div className="w-full flex gap-4 overflow-x-auto px-4 pb-6 scrollbar-none snap-x snap-mandatory">
        {team.map((member) => {
          const isOverlayOpen = activeMemberId === member.id;

          return (
            <div
              key={member.id}
              onClick={() => handleCardClick(member.id)}
              className="relative shrink-0 w-[82vw] aspect-[3/4] rounded-2xl overflow-hidden snap-center shadow-lg border border-border-main/20 bg-background-secondary cursor-pointer group select-none"
            >
              {/* Full-bleed Leader Image */}
              <Image
                src={member.image}
                alt={member.name}
                fill
                priority
                sizes="(max-width: 768px) 85vw, 400px"
                className="object-cover object-top transition-transform duration-500 group-active:scale-105"
              />

              {/* High-Contrast Gradient Base for Text Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

              {/* Card Base Header (Always Visible on Image) */}
              <div className="absolute bottom-0 inset-x-0 p-5 text-white flex justify-between items-end z-10">
                <div className="space-y-0.5">
                  <span className="text-[10px] font-bold tracking-widest text-accent uppercase block">
                    {member.designation}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white tracking-tight leading-tight">
                    {member.name}
                  </h3>
                  <p className="text-[11px] text-white/70 font-medium">
                    Tap to read story
                  </p>
                </div>

                {/* Info Trigger Indicator */}
                <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shrink-0">
                  <Info className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* High-Contrast Interactive Overlay (Inside Card Frame) */}
              <AnimatePresence>
                {isOverlayOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.25 }}
                    className="absolute inset-0 bg-black/90 backdrop-blur-md p-6 flex flex-col justify-between text-white z-20 overflow-y-auto"
                  >
                    {/* Overlay Top Bar */}
                    <div className="flex justify-between items-start border-b border-white/15 pb-3">
                      <div>
                        <h3 className="font-serif text-xl font-bold text-white leading-tight">
                          {member.name}
                        </h3>
                        <p className="text-[11px] text-accent font-bold tracking-wider uppercase mt-0.5">
                          {member.designation}
                        </p>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveMemberId(null);
                        }}
                        className="p-1.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                        aria-label="Close details"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Overlay Scrollable Story Content */}
                    <div className="space-y-4 my-auto py-3">
                      {/* Philosophy Quote */}
                      <blockquote className="border-l-2 border-accent pl-3 text-xs italic font-serif text-white/90 leading-relaxed bg-white/5 py-2 pr-2 rounded-r-lg">
                        &ldquo;{member.philosophy}&rdquo;
                      </blockquote>

                      {/* Journey & Education */}
                      <div className="space-y-2 text-xs">
                        {member.experience && (
                          <div>
                            <span className="text-[10px] font-bold text-white/50 tracking-wider uppercase block mb-0.5">
                              The Journey
                            </span>
                            <p className="text-white/80 leading-relaxed">
                              {member.experience}
                            </p>
                          </div>
                        )}
                        {member.education && (
                          <div>
                            <span className="text-[10px] font-bold text-white/50 tracking-wider uppercase block mb-0.5">
                              Foundation
                            </span>
                            <p className="text-white/80 leading-relaxed">
                              {member.education}
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Responsibilities / Commitments */}
                      {member.responsibilities &&
                        member.responsibilities.length > 0 && (
                          <div className="pt-2 border-t border-white/10 space-y-1.5">
                            <span className="text-[10px] font-bold text-accent tracking-widest uppercase block">
                              Key Commitments
                            </span>
                            <ul className="space-y-1 text-xs text-white/80">
                              {member.responsibilities.map((resp, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-2 leading-tight"
                                >
                                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-1 shrink-0" />
                                  <span>{resp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                    </div>

                    {/* Footer Close Prompt */}
                    <div className="pt-2 border-t border-white/15 text-center">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-white/60">
                        Tap anywhere to close
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
