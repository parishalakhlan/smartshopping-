// components/CultureSection.tsx
"use client";

import React, { useState, useEffect } from "react";
import { CultureSectionDesktop } from "@/features/about/desktop/CultureSectionDesktop";
import { CultureSectionMobile } from "@/features/about/mobile/CultureSectionMobile";

export function CultureSection() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const onResize = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    // Set initial state via the handler
    onResize({ matches: mediaQuery.matches } as MediaQueryListEvent);

    mediaQuery.addEventListener("change", onResize);
    return () => mediaQuery.removeEventListener("change", onResize);
  }, []);

  // Structural hydration shell shield
  if (isMobile === null) {
    return <div className="py-24 bg-[#FFFFFF]" />;
  }

  return isMobile ? <CultureSectionMobile /> : <CultureSectionDesktop />;
}
