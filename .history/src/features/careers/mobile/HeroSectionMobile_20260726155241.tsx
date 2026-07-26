"use client";

import React from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";

export const HeroSectionMobile: React.FC = () => {
  return (
    <section className="relative isolate flex min-h-[75vh] w-full overflow-hidden border-b-2 border-border-main lg:hidden">
      {/* Background Image */}
      <Image
        src="/employees/employee1.webp"
        alt="Store Operations"
        fill
        priority
        sizes="100vw"
        className="object-cover object-top"
      />

      {/* Main readable overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(
              to top,
              var(--color-hero-overlay) 0%,
              rgba(10,20,30,.72) 35%,
              rgba(10,20,30,.40) 62%,
              rgba(10,20,30,.08) 100%
            )
          `,
        }}
      />

      {/* Bottom emphasis for text readability */}
      <div
        className="absolute inset-x-0 bottom-0 h-[42%]"
        style={{
          background:
            "linear-gradient(to top, var(--color-primary) 0%, transparent 100%)",
          opacity: 0.65,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex w-full flex-col justify-between px-5 py-7 sm:px-6">
        {/* Meta */}

        {/* Editorial Copy */}
        <div className="pb-4">
          <h1 className="font-serif text-[2.15rem] font-extrabold leading-[1.05] tracking-tight text-text-inverse">
            Grow With
            <br />
            <span className="font-normal italic text-accent">
              Smart Shopping
            </span>
          </h1>

          <div className="mt-6 max-w-[18rem]">
            <div className="mb-4 h-px w-12 bg-accent" />

            <p className="text-sm leading-7 text-text-inverse/90">
              Step into a career built around tactile exploration, master
              mentoring tracks, and premium retail workspace engineering.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
