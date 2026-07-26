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
    <section className="relative w-full max-w-full box-border min-h-[75vh] bg-background-main flex flex-col justify-between overflow-hidden px-5 sm:px-6 py-6 font-sans lg:hidden border-b-2 border-border-main">
      {/* Background Photography (Full Full-Bleed Frame) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/employees/employee1.webp"
          alt="Store Operations"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />

        {/* Dynamic High-Contrast Token Mask: Darkens/solidifies behind text without washing out photo top */}
        <div className="absolute inset-0 bg-gradient-to-t from-background-main via-background-main/90 via-60% to-transparent" />
      </div>

      {/* Top Meta Identifier */}
      <div className="relative z-10 w-full text-left pt-2">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-card-bg border border-border-main shadow-xs backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-accent shrink-0" />
          <span className="text-[10px] text-accent font-extrabold tracking-[0.25em] uppercase block">
            The Foundation
          </span>
        </div>
      </div>

      {/* Editorial Content Block (High Contrast Typography Stack) */}
      <div className="relative z-10 w-full text-left space-y-4 my-auto py-6">
        <h1 className="font-serif text-3xl sm:text-4xl font-extrabold tracking-tight text-text-primary leading-[1.15] drop-shadow-sm">
          Grow With <br />
          <span className="italic font-normal text-accent">Smart Shopping</span>
        </h1>

        <div className="pl-3 border-l-2 border-accent max-w-xs">
          <p className="text-text-primary text-xs sm:text-sm font-semibold leading-relaxed">
            Step into a career built around tactile exploration, master
            mentoring tracks, and premium retail workspace engineering.
          </p>
        </div>
      </div>

      {/* Bottom Action Button Anchor */}
    </section>
  );
};
