"use client";

import React, { useCallback } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { MagneticButtonDesktop } from "@/features/careers/desktop/MagneticButtonDesktop";

export const HeroSectionDesktop: React.FC = () => {
  // ✅ Define scroll function inside the component
  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <section className="relative w-full h-[80vh] min-h-[600px] bg-primary flex items-center overflow-hidden border-b border-border-strong hidden lg:flex">
      {/* Dark Overlay Layer over Background Image */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <Image
          src="/interior/interior9.jpeg"
          alt="Smart Shopping Editorial Workspace Environment"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30 scale-105"
        />
        {/* High contrast dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary/20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-left">
            <div className="space-y-4">
              <span className="text-[10px] text-accent font-bold tracking-[0.3em] uppercase block">
                The Smart Shopping Ecosystem
              </span>

              <h1 className="font-serif text-5xl lg:text-6xl font-bold tracking-tight text-text-inverse leading-[1.05]">
                Build More Than A Career. <br />
                <span className="italic font-normal text-accent">
                  Build Your Story.
                </span>
              </h1>

              <p className="text-text-inverse/80 text-sm font-normal max-w-xl leading-relaxed">
                Step onto active multi-brand floors, work alongside global
                fashion labels, learn from experienced mentors, and cultivate
                real business intelligence within one of North India&apos;s
                fastest-growing retail groups.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <MagneticButtonDesktop
                onClick={() => scrollToSection("openings")}
                className="px-8 py-4 bg-accent text-text-inverse hover:bg-accent-hover border border-accent shadow-sm flex items-center gap-2"
              >
                Explore Opportunities{" "}
                <ArrowUpRight className="w-3.5 h-3.5 text-text-inverse" />
              </MagneticButtonDesktop>
              <MagneticButtonDesktop
                onClick={() => scrollToSection("journey")}
                className="px-8 py-4 bg-transparent text-text-inverse border border-border-strong hover:border-accent hover:text-accent transition-all"
              >
                View Career Path
              </MagneticButtonDesktop>
            </div>
          </div>

          <div className="relative h-[400px] w-full">
            <div className="absolute right-0 top-0 w-[80%] h-[350px] bg-primary overflow-hidden border border-border-strong shadow-2xl">
              <Image
                src="/employees/employee1.webp"
                alt="Store Operations"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <div className="absolute left-0 bottom-0 w-[50%] h-[200px] bg-primary overflow-hidden border border-border-strong shadow-2xl p-2">
              <div className="relative w-full h-full bg-primary overflow-hidden">
                <Image
                  src="/employees/employee4.webp"
                  alt="Visual Merchandising"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
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
