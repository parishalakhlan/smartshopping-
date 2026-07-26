"use client";

import React from "react";
import Image from "next/image";

export const HeroSectionMobile: React.FC = () => {
  return (
    <section className="relative isolate h-[78svh] w-full overflow-hidden border-b-2 border-border-main lg:hidden">
      {/* Background */}
      <Image
        src="/interior/interiro4.webp"
        alt="Smart Shopping Editorial Workspace Environment"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-15 scale-105"
      />

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(
              to bottom,
              rgba(10,20,30,.12) 0%,
              rgba(10,20,30,.25) 28%,
              rgba(10,20,30,.55) 60%,
              var(--color-hero-overlay) 100%
            )
          `,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex h-full items-end px-5 pb-10 sm:px-6 sm:pb-12">
        <div className="max-w-[18rem]">
          <h1 className="font-serif text-[2.2rem] font-extrabold leading-[1.08] tracking-tight text-text-inverse">
            Grow With
            <br />
            <span className="font-normal italic text-accent">
              Smart Shopping
            </span>
          </h1>

          <div className="mt-6">
            <div className="mb-5 h-px w-14 bg-accent" />

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
