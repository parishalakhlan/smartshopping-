// components/CompanyStats.tsx
"use client";

import React, { useState, useEffect } from "react";
import { CompanyStatsDesktop } from "@/features/about/desktop/CompanyStatsDesktop";
import { CompanyStatsMobile } from "@/features/about/mobile/CompanyStatsMobile";

export function CompanyStats() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const mediaQueryList = window.matchMedia("(max-width: 768px)");

    const checkViewportSize = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    // Set initial state through the handler
    checkViewportSize({
      matches: mediaQueryList.matches,
    } as MediaQueryListEvent);

    mediaQueryList.addEventListener("change", checkViewportSize);
    return () =>
      mediaQueryList.removeEventListener("change", checkViewportSize);
  }, []);

  // Safe client rendering shell block
  if (isMobile === null) {
    return <div className="py-24 bg-[#F5F2EC]" />;
  }

  return isMobile ? <CompanyStatsMobile /> : <CompanyStatsDesktop />;
}
