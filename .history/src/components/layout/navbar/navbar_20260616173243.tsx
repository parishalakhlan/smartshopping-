"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { NavbarLogo } from "./navbar-logo";
import { NavbarLinks } from "./navbar-links";
import { NavbarActions } from "./navbar-actions";
import { MobileMenu } from "./mobile-menu";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 20) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <motion.header
      initial={{
        backgroundColor: "rgba(255, 255, 255, 0)",
        borderBottomColor: "rgba(234, 234, 234, 0)",
      }}
      animate={{
        backgroundColor: isScrolled ? "#FFFFFF" : "rgba(255, 255, 255, 0)",
        borderBottomColor: isScrolled ? "#EAEAEA" : "rgba(234, 234, 234, 0)",
        boxShadow: isScrolled
          ? "0 4px 20px -2px rgba(0, 0, 0, 0.02)"
          : "0 4px 20px -2px rgba(0, 0, 0, 0)",
      }}
      transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
      className="sticky top-0 left-0 right-0 z-50 w-full border-b"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Left Side Branding Zone */}
        <div className="flex-1 flex justify-start">
          <NavbarLogo type="text" text="ARCHETYPE" />
        </div>

        {/* Center Inline Navigation Zone */}
        <div className="flex-initial">
          <NavbarLinks />
        </div>

        {/* Right Action Call Zone */}
        <div className="flex-1 flex justify-end items-center gap-x-4">
          <NavbarActions />
          <MobileMenu />
        </div>
      </div>
    </motion.header>
  );
}
