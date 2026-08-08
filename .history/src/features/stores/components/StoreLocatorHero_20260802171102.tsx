"use client";

import React from "react";
import Image from "next/image";
import { Award, ArrowUpRight } from "lucide-react";

export function StoreLocatorHero() {
  return (
    <section className="relative w-full min-h-[70vh] flex items-center bg-primary overflow-hidden border-b border-border-strong font-sans py-16 lg:py-24 px-6 lg:px-8">
      {/* Visual Canvas Backdrop Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/showrooms/showroom4.webp"
          alt="Smart Shopping Store"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-30 scale-105"
        />

        {/* High-Contrast Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/70 to-primary/20" />

        {/* Subtle Background Grid Texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* High-Contrast Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/80 border border-border-strong px-3 py-1.5 rounded-none text-xs font-bold uppercase tracking-widest text-text-inverse backdrop-blur-md">
              <Award className="w-4 h-4 text-accent shrink-0" />
              <span>8+ Premium Fashion Brands</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-text-inverse leading-[1.05]">
              Premium Fashion. <br />
              <span className="font-serif italic font-normal text-accent">
                Closer To You.
              </span>
            </h1>

            {/* Description */}
            <p className="text-text-inverse/80 text-base font-medium max-w-xl leading-relaxed">
              Discover Smart Shopping stores across North India and explore
              leading fashion brands—all under one roof.
            </p>

            {/* Action CTA Button */}
            <div className="pt-2">
              <a
                href="#locator-workspace"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-text-inverse hover:bg-accent-hover border border-accent rounded-none font-bold text-xs tracking-[0.18em] uppercase transition-all duration-300 shadow-sm"
              >
                Find My Store
                <ArrowUpRight className="w-4 h-4 text-text-inverse" />
              </a>
            </div>

            {/* Statistics Strip */}
            <div className="pt-8 border-t border-border-strong grid grid-cols-3 gap-4 sm:gap-8 max-w-xl">
              <div>
                <span className="block text-2xl sm:text-4xl font-bold text-accent font-serif tracking-tight">
                  35+
                </span>
                <span className="text-[10px] sm:text-xs text-text-inverse/80 font-bold uppercase tracking-wider block mt-1">
                  Stores
                </span>
              </div>

              <div>
                <span className="block text-2xl sm:text-4xl font-bold text-text-inverse font-serif tracking-tight">
                  15+
                </span>
                <span className="text-[10px] sm:text-xs text-text-inverse/80 font-bold uppercase tracking-wider block mt-1">
                  Years Exp.
                </span>
              </div>

              <div>
                <span className="block text-2xl sm:text-4xl font-bold text-text-inverse font-serif tracking-tight">
                  7
                </span>
                <span className="text-[10px] sm:text-xs text-text-inverse/80 font-bold uppercase tracking-wider block mt-1">
                  States
                </span>
              </div>
            </div>
          </div>

          {/* Right Floating Feature Graphic (Desktop Only) */}
          <div className="hidden lg:block lg:col-span-5 relative h-[420px] w-full">
            <div className="absolute right-0 top-0 w-full h-full bg-primary overflow-hidden border border-border-strong p-2 shadow-2xl">
              <div className="relative w-full h-full">
                <Image
                  src="/showrooms/showroom4.webp"
                  alt="Smart Shopping Store Retail Display"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* High-Contrast Floating Accent Badge */}
            <div className="absolute bottom-4 -left-6 bg-primary/95 backdrop-blur-md border border-border-strong border-l-4 border-l-accent p-4 max-w-[220px] shadow-2xl">
              <span className="text-[10px] uppercase tracking-wider font-bold text-accent block mb-1">
                Explore In Person
              </span>
              <p className="text-xs font-bold text-text-inverse leading-snug">
                Experience world-class luxury environments near you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
