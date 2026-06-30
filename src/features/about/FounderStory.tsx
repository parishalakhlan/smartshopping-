// components/FoundersStory.tsx
"use client";

import React, { useState, useEffect } from "react";
import { FoundersStoryDesktop } from "@/features/about/desktop/FoundersStoryDesktop";
import { FoundersStoryMobile } from "@/features/about/mobile/FoundersStoryMobile";
import { FoundersStoryProps } from "@/features/about/data/founders-shared";

export function FoundersStory(props: FoundersStoryProps) {
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

  if (isMobile === null) {
    return <div className="py-24 bg-[#F5F2EC]" />;
  }

  return isMobile ? (
    <FoundersStoryMobile {...props} />
  ) : (
    <FoundersStoryDesktop {...props} />
  );
}
