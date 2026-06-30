// components/JourneyTimeline.tsx
"use client";

import React, { useState, useEffect } from "react";
import { JourneyTimelineDesktop } from "@/features/about/desktop/JourneyTimelineDesktop";
import { JourneyTimelineMobile } from "@/features/about/mobile/JourneyTimelineMobile";

export function JourneyTimeline() {
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

  // Safe client rendering fallback shield to protect server shells
  if (isMobile === null) {
    return <div className="py-24 bg-[#FFFFFF]" />;
  }

  return isMobile ? <JourneyTimelineMobile /> : <JourneyTimelineDesktop />;
}
