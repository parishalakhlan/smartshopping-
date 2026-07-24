// @/components/team/LeadershipGridDesktop.tsx
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Heart, Sparkles, ArrowRight, Compass } from "lucide-react";
import { TeamMember } from "@/types/team";

interface DesktopProps {
  team: TeamMember[];
}

export default function LeadershipGridDesktop({ team }: DesktopProps) {
  const [activeLead, setActiveLead] = useState<TeamMember | null>(null);

  return (
    <div className="space-y-12 font-sans hidden lg:block">
      {/* Editorial Title Block */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-border-main pb-8">
        <div className="space-y-3 text-left">
          <span className="text-xs text-accent font-bold tracking-widest uppercase block">
            The Hearts Behind the Vision
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
            The Minds Shaping Our Culture
          </h2>
        </div>
        <p className="text-text-secondary text-sm font-medium max-w-md md:text-right leading-relaxed">
          Select any of our creative leaders to explore their unique design
          vision, style philosophies, and individual pathways to bringing
          premium clothing spaces closer to your home.
        </p>
      </div>

      {/* Leadership Grid */}
      <div className="grid grid-cols-4 gap-6">
        {team.map((member) => (
          <div
            key={member.id}
            onClick={() => setActiveLead(member)}
            className="group cursor-pointer bg-card-bg border-2 border-border-main hover:border-primary transition-all duration-300 rounded-none flex flex-col justify-between shadow-sm hover:shadow-lg"
          >
            <div className="relative aspect-[10/12] w-full overflow-hidden bg-surface rounded-none border-b-2 border-border-main">
              <Image
                src={member.image}
                alt={member.name}
                fill
                sizes="25vw"
                className="object-cover group-hover:scale-105 transition-all duration-500 ease-out"
              />
              <div className="absolute bottom-3 right-3 bg-primary text-button-primary-text border border-border-main p-2 rounded-none shadow-md transform translate-y-1 group-hover:translate-y-0 transition-transform">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            <div className="p-5 space-y-2.5 text-left bg-card-bg">
              <h3 className="font-serif text-lg font-bold text-text-primary group-hover:text-accent transition-colors line-clamp-1">
                {member.name}
              </h3>
              <p className="text-xs font-bold tracking-wider text-accent uppercase">
                {member.designation}
              </p>
              <div className="w-8 h-[2px] bg-accent group-hover:w-16 transition-all duration-300" />
              <p className="text-text-secondary text-xs font-medium italic tracking-tight line-clamp-2 pt-1 leading-relaxed">
                &ldquo;{member.philosophy}&rdquo;
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Slide-over Profile Drawer */}
      <AnimatePresence>
        {activeLead && (
          <div className="fixed inset-0 z-50 flex justify-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveLead(null)}
              className="absolute inset-0 bg-overlay backdrop-blur-sm"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 240 }}
              className="relative w-full max-w-xl bg-card-bg h-full shadow-2xl z-10 flex flex-col justify-between overflow-y-auto rounded-none border-l-4 border-primary"
            >
              <div>
                <div className="p-6 border-b-2 border-border-main flex items-center justify-between bg-surface">
                  <div className="flex items-center gap-2.5 text-xs text-text-primary font-bold tracking-widest uppercase">
                    <Compass className="w-4 h-4 text-accent" />
                    Creative Vision & Philosophy
                  </div>
                  <button
                    onClick={() => setActiveLead(null)}
                    className="p-2 bg-card-bg hover:bg-primary hover:text-button-primary-text transition-colors text-text-primary rounded-none border-2 border-border-main"
                    aria-label="Close Profile"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="p-8 space-y-8 text-left">
                  {/* Header Profile Section */}
                  <div className="flex items-center gap-6">
                    <div className="w-24 h-24 rounded-none overflow-hidden border-2 border-border-main bg-surface relative flex-shrink-0 shadow-md">
                      <Image
                        src={activeLead.image}
                        alt={activeLead.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-text-primary">
                        {activeLead.name}
                      </h3>
                      <p className="text-xs font-bold text-accent tracking-widest uppercase">
                        {activeLead.designation}
                      </p>
                    </div>
                  </div>

                  {/* Philosophy Quote */}
                  <blockquote className="border-l-4 border-accent pl-4 font-serif text-base sm:text-lg italic font-semibold text-text-primary py-2 leading-relaxed bg-surface border-y border-r border-border-main">
                    &ldquo;{activeLead.philosophy}&rdquo;
                  </blockquote>

                  {/* Experience & Education */}
                  <div className="space-y-6 pt-2">
                    <div className="flex gap-4 items-start">
                      <div className="p-2 bg-accent/10 border border-accent/20 flex-shrink-0">
                        <Heart className="w-5 h-5 text-accent" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-xs font-bold text-text-primary tracking-wider uppercase">
                          The Journey So Far
                        </h4>
                        <p className="text-sm text-text-secondary font-medium leading-relaxed">
                          {activeLead.experience}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="p-2 bg-accent/10 border border-accent/20 flex-shrink-0">
                        <Sparkles className="w-5 h-5 text-accent" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-xs font-bold text-text-primary tracking-wider uppercase">
                          Style & Form Foundation
                        </h4>
                        <p className="text-sm text-text-secondary font-medium leading-relaxed">
                          {activeLead.education}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div className="space-y-4 pt-6 border-t-2 border-border-main">
                    <h4 className="text-xs font-bold text-text-primary tracking-widest uppercase">
                      Daily Commitments to the Experience
                    </h4>
                    <ul className="space-y-3">
                      {activeLead.responsibilities.map((resp, index) => (
                        <li
                          key={index}
                          className="text-sm text-text-secondary font-medium flex items-start gap-3 leading-relaxed"
                        >
                          <span className="w-2 h-2 bg-accent rounded-none mt-1.5 flex-shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Drawer Footer Banner */}
              <div className="p-4 bg-primary text-button-primary-text text-xs font-bold text-center tracking-widest uppercase rounded-none border-t-2 border-border-main">
                Smart Shopping People Collective // Editorial Feature Row
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
