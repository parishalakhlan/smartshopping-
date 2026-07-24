// @/components/team/LeadershipGridMobile.tsx
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Heart, Sparkles, ChevronDown } from "lucide-react";
import { TeamMember } from "@/types/team";

interface MobileProps {
  team: TeamMember[];
}

export default function LeadershipGridMobile({ team }: MobileProps) {
  // Exclusivity anchor: Only one profile unfolds dynamically on mobile touchpoints
  const [expandedId, setExpandedId] = useState<string | null>(
    team[0]?.id || null,
  );

  return (
    <div className="w-full font-sans bg-transparent lg:hidden space-y-8">
      {/* Editorial Title Block */}
      <div className="text-left space-y-2 border-b-2 border-border-main pb-6 px-1">
        <span className="text-xs text-accent font-bold tracking-widest uppercase block">
          The Hearts Behind the Vision
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-text-primary tracking-tight">
          The Minds Shaping Our Culture
        </h2>
        <p className="text-text-secondary text-sm font-normal leading-relaxed">
          Select any of our creative leaders to explore their unique design
          vision, style philosophies, and individual pathways.
        </p>
      </div>

      {/* Accordion Card System */}
      <div className="space-y-4">
        {team.map((member) => {
          const isExpanded = expandedId === member.id;
          const panelId = `lead-panel-${member.id}`;

          return (
            <div
              key={member.id}
              className={`border-2 transition-colors duration-300 ${
                isExpanded
                  ? "border-primary bg-card-bg shadow-sm"
                  : "border-border-main bg-card-bg"
              }`}
            >
              {/* Trigger Interactive Target Frame */}
              <button
                onClick={() => setExpandedId(isExpanded ? null : member.id)}
                aria-expanded={isExpanded}
                aria-controls={panelId}
                className="w-full p-4 flex items-center justify-between text-left focus:outline-none min-h-[52px]"
              >
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-none overflow-hidden border-2 border-border-main bg-background-secondary flex-shrink-0">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="96px"
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-text-primary leading-tight">
                      {member.name}
                    </h3>
                    <p className="text-xs font-bold tracking-wider text-accent uppercase mt-0.5">
                      {member.designation}
                    </p>
                  </div>
                </div>

                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-text-primary p-1"
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </button>

              {/* Seamless Inline Dropdown Sheet */}
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    id={panelId}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden border-t-2 border-border-main"
                  >
                    <div className="p-5 space-y-5 text-left text-sm bg-background-secondary">
                      {/* Philosophy Quote */}
                      <blockquote className="border-l-4 border-accent pl-4 font-serif italic text-sm sm:text-base font-medium text-text-primary py-1 leading-relaxed bg-surface/50">
                        &ldquo;{member.philosophy}&rdquo;
                      </blockquote>

                      {/* Descriptive Tracks */}
                      <div className="space-y-4">
                        <div className="flex gap-3 items-start">
                          <Heart className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                          <div className="space-y-1">
                            <h4 className="text-xs font-bold text-text-primary tracking-wider uppercase">
                              The Journey So Far
                            </h4>
                            <p className="text-text-secondary text-sm leading-relaxed font-normal">
                              {member.experience}
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-3 items-start">
                          <Sparkles className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                          <div className="space-y-1">
                            <h4 className="text-xs font-bold text-text-primary tracking-wider uppercase">
                              Style & Form Foundation
                            </h4>
                            <p className="text-text-secondary text-sm leading-relaxed font-normal">
                              {member.education}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Commitments List */}
                      <div className="pt-4 border-t border-border-main space-y-3">
                        <h4 className="text-xs font-bold text-text-primary tracking-widest uppercase">
                          Daily Commitments
                        </h4>
                        <ul className="space-y-2.5">
                          {member.responsibilities.map((resp, index) => (
                            <li
                              key={index}
                              className="text-text-secondary flex items-start gap-3 text-sm leading-relaxed font-normal"
                            >
                              <span className="w-1.5 h-1.5 bg-accent rounded-none mt-2 flex-shrink-0" />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
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
