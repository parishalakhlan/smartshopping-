"use client";

import React from "react";
import Image from "next/image";
import { Award } from "lucide-react";

export function StoreLocatorHero() {
  return (
    <section className="bg-surface border-b-2 border-border-main py-6 sm:py-12 lg:py-24 px-4 sm:px-6 lg:px-8 font-sans transition-colors duration-300 w-full max-w-full box-border overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-center">
        {/* Left Content Container */}
        <div className="lg:col-span-6 space-y-4 sm:space-y-6 lg:space-y-8 text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 bg-card-bg border-2 border-border-main text-text-primary px-2.5 py-1 rounded-none text-[10px] sm:text-xs font-extrabold tracking-widest uppercase shadow-xs">
            <Award className="w-3.5 h-3.5 text-accent shrink-0" />
            <span>8+ Premium Fashion Brands</span>
          </div>

          {/* Heading & Subtitle */}
          <div className="space-y-2 sm:space-y-4">
            <h1 className="text-2xl sm:text-4xl lg:text-6xl font-serif text-text-primary font-extrabold tracking-tight leading-tight">
              Premium Fashion. <br />
              <span className="text-accent">Closer To You.</span>
            </h1>

            <p className="text-xs sm:text-base text-text-primary font-medium max-w-xl leading-relaxed">
              Discover Smart Shopping stores across North India and explore
              leading fashion brands—all under one roof.
            </p>
          </div>

          {/* Compact Buttons */}
          <div className="grid grid-cols-2 gap-2.5 sm:flex sm:flex-wrap pt-1 sm:pt-2">
            <a
              href="#locator-workspace"
              className="px-4 py-3 sm:px-8 sm:py-4 bg-button-primary-bg hover:bg-button-primary-hover text-button-primary-text border-2 border-border-main text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-center rounded-none shadow-xs transition-all duration-300 active:scale-95 hover:border-accent"
            >
              Find My Store
            </a>
          </div>

          {/* Compact Statistics Grid */}
          <div className="pt-4 sm:pt-8 border-t-2 border-border-main grid grid-cols-3 gap-2 sm:gap-6">
            <div className="p-2 sm:p-3 bg-card-bg border-2 border-border-main shadow-xs text-center sm:text-left">
              <span className="block text-xl sm:text-3xl font-extrabold text-accent font-serif tracking-tight">
                35+
              </span>
              <span className="text-[9px] sm:text-[10px] text-text-primary font-extrabold uppercase tracking-wider block mt-0.5">
                Stores
              </span>
            </div>

            <div className="p-2 sm:p-3 bg-card-bg border-2 border-border-main shadow-xs text-center sm:text-left">
              <span className="block text-xl sm:text-3xl font-extrabold text-text-primary font-serif tracking-tight">
                15+
              </span>
              <span className="text-[9px] sm:text-[10px] text-text-primary font-extrabold uppercase tracking-wider block mt-0.5 truncate">
                Years Exp.
              </span>
            </div>

            <div className="p-2 sm:p-3 bg-card-bg border-2 border-border-main shadow-xs text-center sm:text-left">
              <span className="block text-xl sm:text-3xl font-extrabold text-text-primary font-serif tracking-tight">
                7
              </span>
              <span className="text-[9px] sm:text-[10px] text-text-primary font-extrabold uppercase tracking-wider block mt-0.5">
                States
              </span>
            </div>
          </div>
        </div>

        {/* Right Image (Visible on Large Screens, Hidden on Mobile to prevent tall scroll) */}
        <div className="hidden lg:block lg:col-span-6 relative rounded-none overflow-hidden shadow-md h-[480px] group border-2 border-border-main bg-card-bg">
          <Image
            src="/showrooms/showroom4.webp"
            alt="Smart Shopping Store"
            fill
            sizes="(max-width: 1280px) 50vw, 100vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            priority
          />

          <div className="absolute top-0 left-0 right-0 h-[4px] bg-accent z-20" />
        </div>
      </div>
    </section>
  );
}
