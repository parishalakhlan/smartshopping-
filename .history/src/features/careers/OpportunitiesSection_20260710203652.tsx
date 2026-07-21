"use client";

import React, { useEffect, useState } from "react";
import { OpportunitiesSectionDesktop } from "@/features/careers/desktop/OpportunitiesSectionDesktop";
import { OpportunitiesSectionMobile } from "@/features/careers/mobile/OpportunitiesSectionMobile";

export const OpportunitiesSection: React.FC = () => {
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
    return <section className="w-full h-[500px] bg-[#F5F2EC]/30 opacity-0" />;
  }

  return isMobile ? (
    <OpportunitiesSectionMobile />
  ) : (
    <OpportunitiesSectionDesktop />
  );
};
