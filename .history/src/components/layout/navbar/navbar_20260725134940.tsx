"use client";

import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { NavbarLogo } from "./navbar-logo";
import { NavbarLinks } from "./navbar-links";
import { NavbarActions } from "./navbar-actions";
import { MobileMenu } from "./mobile-menu";
import { navbarConfig } from "./types";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const { announcement } = navbarConfig;

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 40) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <>
      {/* TOP ANNOUNCEMENT BAR */}
      <div
        className="w-full bg-primary text-text-inverse h-9 flex items-center justify-center font-sans text-xs sm:text-sm font-extrabold tracking-wide z-50 relative select-none px-4"
        role="status"
        aria-label={announcement.ariaLabel}
      >
        <span>{announcement.text}</span>
      </div>

      {/* MAIN NAVBAR */}
      <motion.header
        initial={{ height: "88px" }}
        animate={{
          height: isScrolled ? "72px" : "88px",
        }}
        transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
        className={`sticky top-0 left-0 right-0 z-50 w-full border-b border-border-main bg-surface/95 backdrop-blur-md transition-shadow duration-300 ${
          isScrolled ? "shadow-md bg-surface/90" : "shadow-none"
        }`}
      >
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
