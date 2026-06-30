// @/components/team/FoundersSection.tsx
"use client";

import React, { useEffect, useState } from "react";
import { SHARED_FOUNDERS_DATA } from "@/features/team/data/foundersData";
import FoundersSectionDesktop from "@/features/team/desktop/FoundersSectionDesktop";
import FoundersSectionMobile from "@/features/team/mobile/FoundersSectionMobile";

export default function FoundersSection() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // Breaks accurately on tailwind lg boundary matrix
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile === null) {
    return <div className="min-h-[300px] opacity-0" />; // Prevent client structural paint snapping
  }

  return isMobile ? (
    <FoundersSectionMobile founders={SHARED_FOUNDERS_DATA} />
  ) : (
    <FoundersSectionDesktop founders={SHARED_FOUNDERS_DATA} />
  );
}
