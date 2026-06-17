"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Compass,
  ShieldAlert,
  Coins,
  Smile,
  Flame,
} from "lucide-react";

const culturalPillars = [
  {
    icon: Flame,
    title: "SKILL UP Initiative",
    desc: "Rigorous corporate professional education paths, external masterclasses, and specialized trade coaching.",
  },
  {
    icon: Sparkles,
    title: "Monthly Rewards Matrix",
    desc: "Direct baseline retail floor bonuses and executive recognition programs honoring performance speed.",
  },
  {
    icon: Compass,
    title: "Annual Corporate Galas",
    desc: "High-end calendar celebrations bringing multi-state operations team members under one umbrella.",
  },
  {
    icon: Coins,
    title: "Diwali Performance Shared",
    desc: "Direct profit-linked operational bonuses tracking overall baseline group yields.",
  },
  {
    icon: Smile,
    title: "Work-Life Integrity",
    desc: "Predictable shift planning matrices giving teams balanced restoration cycles.",
  },
  {
    icon: ShieldAlert,
    title: "Sovereign Ownership",
    desc: "Every branch team operates with micro-venture autonomy, guiding targets independently.",
  },
];

export function CultureSection() {
  return (
    <section className="py-24 lg:py-32 bg-background-main px-4 sm:px-8 lg:px-16 border-t border-b border-border-main relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
        {/* Left Side Minimalist Branding Anchor */}
        <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
          <div className="space-y-2 border-l border-accent pl-4">
            <span className="text-[10px] font-mono tracking-[0.3em] text-accent font-semibold block uppercase">
              HUMAN INFRASTRUCTURE
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-light tracking-tight text-text-primary uppercase leading-tight">
              Workplace <br />
              <span className="font-normal italic text-primary">
                Experience
              </span>
            </h2>
          </div>
          <p className="text-xs text-text-secondary font-light tracking-wide leading-relaxed max-w-sm">
            With an average workforce age parameter of 26, our workspace runs on
            high execution speed and low corporate hierarchy. We operate
            workspace frameworks that nurture creative thinkers into retail
            leaders.
          </p>
        </div>

        {/* Right Side Editorial Lookbook List (Completely Box-Free) */}
        <div className="lg:col-span-8 divide-y divide-border-main/60">
          {culturalPillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;

            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: Math.min(idx * 0.05, 0.25),
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="py-8 first:pt-0 last:pb-0 group flex flex-col sm:flex-row gap-6 sm:gap-12 items-start justify-between select-none"
              >
                {/* Structural Layout Typography Marker */}
                <div className="flex items-center gap-4 shrink-0 sm:w-1/4">
                  <span className="text-xs font-mono text-text-muted group-hover:text-accent transition-colors duration-300">
                    [ 0{idx + 1} ]
                  </span>
                  <div className="text-text-secondary group-hover:text-primary transition-colors duration-300">
                    <IconComponent className="w-4 h-4 stroke-[1.25]" />
                  </div>
                </div>

                {/* Concept and Content Columns */}
                <div className="space-y-1 sm:w-3/4 transition-transform duration-300 group-hover:translate-x-1">
                  <h4 className="text-sm font-mono font-bold tracking-widest text-text-primary group-hover:text-accent transition-colors duration-300 uppercase">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-text-secondary font-light leading-relaxed tracking-wide max-w-xl">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
