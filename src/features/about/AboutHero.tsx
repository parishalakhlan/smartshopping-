// components/AboutHero.tsx
"use client";

import React, { useState, useEffect } from "react";
import { AboutHeroDesktop } from "@/features/about/desktop/AboutHeroDesktop";
import { AboutHeroMobile } from "@/features/about/mobile/AboutHeroMobile";

export function AboutHero() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    // Event listener tracking live resizing adjustments
    const mql = window.matchMedia("(max-width: 768px)");

    // Set initial state via the event listener callback
    const handleViewportChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    // Trigger the handler immediately to set initial state
    handleViewportChange({ matches: mql.matches } as MediaQueryListEvent);

    mql.addEventListener("change", handleViewportChange);
    return () => mql.removeEventListener("change", handleViewportChange);
  }, []);

  // Structural placeholder state to prevent server layout flash during shell paint
  if (isMobile === null) {
    return <div className="min-h-screen bg-[#F5F2EC]" />;
  }

  return isMobile ? <AboutHeroMobile /> : <AboutHeroDesktop />;
}
