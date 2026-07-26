"use client";

import React from "react";
import Image from "next/image";
import { ArrowDown, Sparkles } from "lucide-react";
import { MagneticButtonMobile } from "@/features/careers/mobile/MagneticButtonMobile";

export const HeroSectionMobile: React.FC = () => {
  // Simple smooth scroll handler
  const handleScroll = () => {
    const element = document.getElementById("journey");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative w-full max-w-full box-border min-h-[85vh] bg-background-main flex flex-col justify-between overflow-hidden px-5 sm:px-6 py-8 font-sans lg:hidden border-b-2 border-border-main">
      {/* Background Graphic Layer with High-Contrast Token Scrim */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1200"
          alt="Young team inside showroom floor"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Token-Based Scrim Gradient for Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-background-main via-background-main/90 to-background-main/40" />
      </div>

      {/* Top Meta Identifier */}
      <div className="relative z-10 w-full text-left pt-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-card-bg border-2 border-border-main shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-accent shrink-0" />
          <span className="text-[10px] text-accent font-extrabold tracking-[0.25em] uppercase block">
            The Foundation
          </span>
        </div>
      </div>

      {/* Center Editorial Typography Frame */}
      <div className="relative z-10 w-full text-left space-y-3.5 my-auto py-6">
        <h1 className="font-serif text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary leading-[1.15]">
          Grow With <br />
          <span className="italic font-normal text-accent">Smart Shopping</span>
        </h1>

        <div className="p-3 bg-card-bg/80 border-l-4 border-accent border-2 border-border-main shadow-xs backdrop-blur-xs max-w-xs">
          <p className="text-text-primary text-xs sm:text-sm font-medium leading-relaxed">
            Step into a career built around tactile exploration, master
            mentoring tracks, and premium retail workspace engineering.
          </p>
        </div>
      </div>

      {/* Bottom Spatial Interaction Layer */}
      <div className="relative z-10 w-full space-y-4 pb-2">
        <MagneticButtonMobile
          onClick={handleScroll}
          className="w-full py-4 bg-button-primary-bg hover:bg-button-primary-hover text-button-primary-text border-2 border-border-main font-extrabold uppercase text-xs tracking-[0.2em] shadow-sm transition-all active:scale-[0.98] flex items-center justify-center gap-2"
        >
          <span>Start Your Journey</span>
          <ArrowDown className="w-4 h-4 text-accent shrink-0" />
        </MagneticButtonMobile>
      </div>
    </section>
  );
};
