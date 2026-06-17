"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Award,
  Briefcase,
  Calendar,
  Sparkles,
  GraduationCap,
  Heart,
} from "lucide-react";

const perks = [
  {
    icon: GraduationCap,
    title: "SKILL UP Initiative",
    desc: "Structured continuous learning frameworks and dynamic mentorship pathways.",
  },
  {
    icon: Award,
    title: "Monthly Rewards",
    desc: "Honoring operational floor excellence and creative breakthroughs metrics.",
  },
  {
    icon: Sparkles,
    title: "Annual Recognition",
    desc: "High-tier collective galas highlighting long-standing team achievements.",
  },
  {
    icon: Calendar,
    title: "Diwali Festivities",
    desc: "Seasonal corporate profit shared milestones and cultural engagement packages.",
  },
  {
    icon: Heart,
    title: "Work-Life Balance",
    desc: "Asynchronous tasking pipelines paired with mental decompression cycles.",
  },
];

export function CultureSection() {
  return (
    <section className="py-24 lg:py-32 bg-[#F8F8F8] px-4 sm:px-8 lg:px-16 border-t border-[#EAEAEA]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Intentional Sticky Sidebar Context Block */}
        <div className="lg:col-span-4 lg:sticky lg:top-28 h-fit space-y-4">
          <span className="text-xs font-luxury-meta tracking-[0.3em] text-[#E65100] block">
            HUMAN EXPERIENCE
          </span>
          <h2 className="text-3xl sm:text-4xl font-luxury-heading tracking-wide text-[#111111] leading-tight">
            Workplace <br />
            Philosophy
          </h2>
          <p className="text-sm text-[#555555] font-light tracking-wide leading-relaxed max-w-sm">
            We are built on an average workforce age framework of 26. A
            hyper-collaborative incubator model empowering agile thinkers to
            reinvent how regions browse high-fashion products.
          </p>
        </div>

        {/* Dynamic Feature Grid Deck */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {perks.map((perk, idx) => {
            const Icon = perk.icon;
            return (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <Card className="rounded-none border border-[#EAEAEA] bg-white p-6 shadow-none hover:shadow-sm hover:border-[#1F4D45]/30 transition-all duration-300 group h-full">
                  <CardContent className="p-0 space-y-4">
                    <div className="w-10 h-10 flex items-center justify-center bg-[#F8F8F8] group-hover:bg-[#1F4D45]/5 text-[#1F4D45] transition-colors duration-300 rounded-none">
                      <Icon className="w-5 h-5 stroke-[1.2]" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-sm font-luxury-nav tracking-widest text-[#111111] font-semibold">
                        {perk.title}
                      </h3>
                      <p className="text-xs text-[#555555] font-light leading-relaxed tracking-wide">
                        {perk.desc}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
