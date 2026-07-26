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
    <section className="w-full max-w-full box-border min-h-[85vh] bg-background-main flex flex-col justify-between overflow-hidden px-4 sm:px-6 py-6 font-sans lg:hidden border-b-2 border-border-main space-y-6">
      {/* Top Meta Header */}
      <div className="w-full text-left pt-2">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-card-bg border-2 border-border-main shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-accent shrink-0" />
          <span className="text-[10px] text-accent font-extrabold tracking-[0.25em] uppercase block">
            The Foundation
          </span>
        </div>
      </div>

      {/* Frame 1: Isolated Image Container (No text overlay collision) */}
      <div className="relative w-full h-48 sm:h-56 border-2 border-border-main bg-card-bg overflow-hidden shadow-xs shrink-0">
        <Image
          src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1200"
          alt="Young team inside showroom floor"
          fill
          priority
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>

      {/* Frame 2: Solid High-Contrast Editorial Content Card */}
      <div className="bg-card-bg border-2 border-border-main p-5 space-y-4 shadow-sm w-full box-border">
        <h1 className="font-serif text-2xl sm:text-3xl font-extrabold tracking-tight text-text-primary leading-tight">
          Grow With <br />
          <span className="italic font-normal text-accent">Smart Shopping</span>
        </h1>

        <div className="pt-3 border-t-2 border-border-main/40">
          <p className="text-text-primary text-xs sm:text-sm font-medium leading-relaxed">
            Step into a career built around tactile exploration, master
            mentoring tracks, and premium retail workspace engineering.
          </p>
        </div>
      </div>

      {/* Frame 3: Action Button Anchor */}
    </section>
  );
};
