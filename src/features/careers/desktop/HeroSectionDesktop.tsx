"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { MagneticButtonDesktop } from "./MagneticButtonDesktop";

interface DesktopProps {
  scrollToSection: (id: string) => void;
}

export const HeroSectionDesktop: React.FC<DesktopProps> = ({
  scrollToSection,
}) => {
  return (
    <section className="relative w-full h-[80vh] min-h-[600px] bg-[#F5F2EC]/30 flex items-center overflow-hidden border-b border-[#163B65]/10 hidden lg:flex">
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <Image
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1800"
          alt="Smart Shopping Editorial Workspace Environment"
          fill
          priority
          className="object-cover opacity-15 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFFFFF] via-[#FFFFFF]/80 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-left">
            <div className="space-y-4">
              <span className="text-[10px] text-[#F97316] font-bold tracking-[0.3em] uppercase block">
                The Smart Shopping Ecosystem
              </span>

              <h1 className="font-serif text-5xl lg:text-6xl font-bold tracking-tight text-[#163B65] leading-[1.05]">
                Build More Than A Career. <br />
                <span className="italic font-normal text-[#F97316]">
                  Build Your Story.
                </span>
              </h1>

              <p className="text-[#475569] text-sm font-normal max-w-xl leading-relaxed">
                Step onto active multi-brand floors, work alongside global
                fashion labels, learn from experienced mentors, and cultivate
                real business intelligence within one of North India&apos;s
                fastest-growing retail groups.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <MagneticButtonDesktop
                onClick={() => scrollToSection("openings")}
                className="px-8 py-4 bg-[#163B65] text-[#FFFFFF] hover:bg-[#112F52] border border-[#163B65] shadow-sm flex items-center gap-2"
              >
                Explore Opportunities{" "}
                <ArrowUpRight className="w-3.5 h-3.5 text-[#F97316]" />
              </MagneticButtonDesktop>
              <MagneticButtonDesktop
                onClick={() => scrollToSection("journey")}
                className="px-8 py-4 bg-transparent text-[#163B65] border border-[#163B65]/20 hover:border-[#163B65] transition-all"
              >
                View Career Path
              </MagneticButtonDesktop>
            </div>
          </div>

          <div className="relative h-[400px] w-full">
            <div className="absolute right-0 top-0 w-[80%] h-[350px] bg-[#F5F2EC] overflow-hidden border border-[#163B65]/10">
              <Image
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800"
                alt="Store Operations"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute left-0 bottom-0 w-[50%] h-[200px] bg-[#FFFFFF] overflow-hidden border border-[#163B65]/10 shadow-md p-2">
              <div className="relative w-full h-full bg-[#F5F2EC] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
                  alt="Visual Merchandising"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
