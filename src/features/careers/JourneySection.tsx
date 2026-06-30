"use client";

import React, { useEffect, useState } from "react";
import { JourneySectionDesktop } from "@/features/careers/desktop/JourneySectionDesktop";
import { JourneySectionMobile } from "@/features/careers/mobile/JourneySectionMobile";

export const JourneySection: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile === null) {
    return <section className="w-full h-[400px] bg-[#F5F2EC]/30 opacity-0" />;
  }

  return isMobile ? <JourneySectionMobile /> : <JourneySectionDesktop />;
};
