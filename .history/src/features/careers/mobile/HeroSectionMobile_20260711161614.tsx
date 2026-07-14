"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { MagneticButtonMobile } from "./MagneticButtonMobile";

interface MobileProps {
  scrollToSection: (id: string) => void;
}

export const HeroSectionMobile: React.FC<MobileProps> = ({
  scrollToSection,
}) => {
  return (
    <section className="relative w-full h-[90vh] bg-background-main flex flex-col justify-between overflow-hidden px-4 py-8 font-sans lg:hidden">
      {/* Background Graphic Framework Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1200"
          alt="Young team inside showroom floor"
          fill
          priority
          className="object-cover opacity-15 grayscale brightness-95 scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-main via-background-main/60 to-transparent" />
      </div>

      {/* Top Meta Identifier */}
      <div className="relative z-10 w-full text-left pt-4">
        <span className="text-[9px] text-accent font-bold tracking-[0.35em] uppercase block">
          The Foundation
        </span>
      </div>

      {/* Center Editorial Typography Frame */}
      <div className="relative z-10 w-full text-left space-y-4 my-auto">
        <h1 className="font-serif text-4xl font-bold tracking-tight text-text-primary leading-[1.1]">
          Grow With <br />
          <span className="italic font-normal text-accent">Smart Shopping</span>
        </h1>
        <p className="text-text-secondary text-xs font-normal max-w-xs leading-relaxed">
          Step into a career built around tactile exploration, master mentoring
          tracks, and premium retail workspace engineering.
        </p>
      </div>

      {/* Bottom Spatial Interaction Layer */}
      <div className="relative z-10 w-full space-y-4 pb-4">
        <MagneticButtonMobile
          onClick={() => scrollToSection("journey")}
          className="bg-button-primary-bg text-button-primary-text border-button-primary-bg font-bold"
        >
          Start Your Journey
          <ArrowDown className="w-3.5 h-3.5 text-accent" />
        </MagneticButtonMobile>
      </div>
    </section>
  );
};
