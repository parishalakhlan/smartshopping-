"use client";

import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { NavbarLogo } from "./navbar-logo";
import { NavbarLinks } from "./navbar-links";
import { NavbarActions } from "./navbar-actions";
import { MobileMenu } from "./mobile-menu";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 40) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <>
      {/* 
        TOP ANNOUNCEMENT BAR 
        Height: 36px | Background: Primary Blue (#163B65) | Text: White | Font: Inter 14px Medium
      */}
      <div
        className="w-full bg-[#163B65] text-white h-9 flex items-center justify-center font-sans text-[14px] font-medium tracking-wide z-50 relative select-none"
        role="status"
      >
        <span>Premium Fashion • 27+ Stores • 7 States Across North India</span>
      </div>

      {/* 
        MAIN NAVBAR
        Sticky Top | Desktop Height: 88px -> 72px | Mobile Height: 72px
        Background: Semi-transparent white 85% opacity with 16px Backdrop Blur | Border: #E2E8F0
      */}
      <motion.header
        initial={{
          height: "88px",
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(16px)",
          borderBottomColor: "#E2E8F0",
        }}
        animate={{
          height: isScrolled ? "72px" : "88px",
          backgroundColor: isScrolled
            ? "rgba(255, 255, 255, 0.85)"
            : "rgba(255, 255, 255, 0.95)",
          boxShadow: isScrolled
            ? "0 4px 20px -4px rgba(15, 23, 42, 0.04)"
            : "0 4px 20px -4px rgba(15, 23, 42, 0)",
        }}
        transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
        className="sticky top-0 left-0 right-0 z-50 w-full border-b backdrop-blur-md transition-all md:block"
      >
        {/* Max Width Grid Boundary: 1400px | Container Padding: 24px (px-6) */}
        <div className="mx-auto max-w-[1400px] px-6 h-full flex items-center justify-between">
          {/* LEFT: Logo Branding Zone */}
          <div className="flex-1 flex justify-start items-center">
            <NavbarLogo />
          </div>

          {/* CENTER: Inline Premium Navigation Zone */}
          <div className="flex-initial h-full flex items-center">
            <NavbarLinks />
          </div>

          {/* RIGHT: Action & Mobile Controls Zone */}
          <div className="flex-1 flex justify-end items-center gap-x-4">
            <NavbarActions />
            <MobileMenu />
          </div>
        </div>
      </motion.header>
    </>
  );
}
