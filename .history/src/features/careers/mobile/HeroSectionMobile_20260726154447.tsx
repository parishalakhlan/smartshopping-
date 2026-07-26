"use client";

import React from "react";
import Image from "next/image";
import { ArrowDown, Sparkles } from "lucide-react";
import { MagneticButtonMobile } from "@/features/careers/mobile/MagneticButtonMobile";

export const HeroSectionMobile: React.FC = () => {
  const handleScroll = () => {
    const element = document.getElementById("journey");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative w-full max-w-full box-border min-h-[85vh] bg-background-main flex flex-col justify-between overflow-hidden px-5 sm:px-6 py-6 font-sans lg:hidden border-b-2 border-border-main">
      {/* Background Graphic Framework: Full-Viewport Cover Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1200"
          alt="Young team inside showroom floor"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Dynamic Multi-Stage Token Gradient (Guarantees contrast over image) */}
        <div className="absolute inset-0 bg-gradient-to-t from-background-main via-background-main/80 to-background-main/30" />
      </div>

      {/* Top Meta Identifier */}

      {/* Editorial Content Block (Integrated Floating Layout) */}
      <div className="relative z-10 w-full text-left space-y-4 my-auto py-6">
        <h1 className="font-serif text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary leading-[1.15]">
          Grow With <br />
          <span className="italic font-normal text-accent">Smart Shopping</span>
        </h1>

        <div className="pl-3 border-l-2 border-accent max-w-xs">
          <p className="text-text-primary text-xs sm:text-sm font-medium leading-relaxed">
            Step into a career built around tactile exploration, master
            mentoring tracks, and premium retail workspace engineering.
          </p>
        </div>
      </div>

      {/* Bottom Action Button Anchor */}
    </section>
  );
};
