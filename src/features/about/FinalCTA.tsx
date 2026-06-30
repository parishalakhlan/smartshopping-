// components/FinalCTA.tsx
"use client";

import React, { useState, useEffect } from "react";
import { FinalCTADesktop } from "@/features/about/desktop/FinalCTADesktop";
import { FinalCTAMobile } from "@/features/about/mobile/FinalCTAMobile";

export function FinalCTA() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const mediaQueryList = window.matchMedia("(max-width: 768px)");

    const checkViewportSize = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    // Set initial state via the handler
    checkViewportSize({
      matches: mediaQueryList.matches,
    } as MediaQueryListEvent);

    mediaQueryList.addEventListener("change", checkViewportSize);
    return () =>
      mediaQueryList.removeEventListener("change", checkViewportSize);
  }, []);

  // Structural placeholder preventing flash of layout changes during hydration shell mount
  if (isMobile === null) {
    return <div className="py-28 bg-[#163B65]" />;
  }

  return isMobile ? <FinalCTAMobile /> : <FinalCTADesktop />;
}
