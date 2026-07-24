"use client";

import React from "react";
import Image from "next/image";
import { Compass, MapPin, Award } from "lucide-react";
import { storesConfig } from "@/features/stores/data/stores";

export function StoreLocatorHero() {
  const { stores } = storesConfig;

  return (
    <section className="bg-surface border-b-2 border-border-main py-16 lg:py-24 px-4 sm:px-6 lg:px-8 font-sans transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Content */}
        <div className="lg:col-span-6 space-y-8 text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-card-bg border-2 border-border-main text-text-primary px-3 py-1.5 rounded-none text-xs font-extrabold tracking-widest uppercase shadow-sm">
            <Award className="w-4 h-4 text-accent" />
            8+ Premium Fashion Brands
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-text-primary font-extrabold tracking-tight leading-[1.08]">
              Premium Fashion. <br />
              <span className="text-accent">Closer To You.</span>
            </h1>

            <p className="text-sm sm:text-base text-text-primary font-medium max-w-xl leading-relaxed">
              Discover Smart Shopping stores across North India and explore
              leading fashion brands—all under one roof. Great style shouldn't
              depend on where you live.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#locator-workspace"
              className="px-8 py-4 bg-button-primary-bg hover:bg-button-primary-hover text-button-primary-text border-2 border-border-main text-xs font-extrabold uppercase tracking-widest rounded-none shadow-sm transition-all duration-300 active:scale-95 hover:border-accent"
            >
              Find My Store
            </a>

            <a
              href="#state-expansion"
              className="px-8 py-4 bg-card-bg border-2 border-border-main text-text-primary text-xs font-extrabold uppercase tracking-widest rounded-none hover:bg-surface hover:border-accent transition-all duration-300 shadow-sm active:scale-95"
            >
              Browse All Locations
            </a>
          </div>

          {/* Statistics */}
          <div className="pt-8 border-t-2 border-border-main grid grid-cols-3 gap-6">
            <div className="p-3 bg-card-bg border-2 border-border-main shadow-sm">
              <span className="block text-2xl sm:text-3xl font-extrabold text-accent font-serif tracking-tight">
                35+
              </span>
              <span className="text-[10px] text-text-primary font-extrabold uppercase tracking-wider block mt-0.5">
                Stores
              </span>
            </div>

            <div className="p-3 bg-card-bg border-2 border-border-main shadow-sm">
              <span className="block text-2xl sm:text-3xl font-extrabold text-text-primary font-serif tracking-tight">
                15+
              </span>
              <span className="text-[10px] text-text-primary font-extrabold uppercase tracking-wider block mt-0.5">
                Years Experience
              </span>
            </div>

            <div className="p-3 bg-card-bg border-2 border-border-main shadow-sm">
              <span className="block text-2xl sm:text-3xl font-extrabold text-text-primary font-serif tracking-tight">
                7
              </span>
              <span className="text-[10px] text-text-primary font-extrabold uppercase tracking-wider block mt-0.5">
                States
              </span>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:col-span-6 relative rounded-none overflow-hidden shadow-md h-[380px] sm:h-[480px] group border-2 border-border-main bg-card-bg">
          <Image
            src="/showrooms/showroom4.webp"
            alt="Smart Shopping Store"
            fill
            sizes="(max-width: 1280px) 50vw, 100vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            priority
          />

          <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between z-10 text-left pointer-events-none">
            <div className="flex justify-between items-start gap-4 bg-surface/90 backdrop-blur-sm p-4 border-2 border-border-main shadow-md">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-accent font-extrabold">
                  SMART SHOPPING NETWORK
                </p>

                <h3 className="text-lg sm:text-xl font-serif font-bold tracking-tight mt-0.5 text-text-primary">
                  Fashion Across North India
                </h3>
              </div>

              <Compass className="w-6 h-6 text-accent shrink-0" />
            </div>

            <div className="space-y-2 max-w-sm">
              <div className="bg-surface/95 backdrop-blur-sm p-4 border-2 border-border-main border-l-4 border-l-accent shadow-md flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />

                <div className="space-y-0.5">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-text-primary">
                    Visit. Explore. Shop.
                  </p>

                  <p className="text-xs text-text-primary font-medium leading-relaxed">
                    Every Smart Shopping store brings together trusted fashion
                    brands in one destination, making premium shopping easier,
                    closer, and more enjoyable.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute top-0 left-0 right-0 h-[4px] bg-accent z-20" />
        </div>
      </div>
    </section>
  );
}
