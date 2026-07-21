"use client";

import React, { useEffect, useState, useMemo } from "react";
import type { JobOpportunity } from "@/features/careers/data/types";
import { OpportunitiesSectionDesktop } from "@/features/careers/desktop/OpportunitiesSectionDesktop";
import { OpportunitiesSectionMobile } from "@/features/careers/mobile/OpportunitiesSectionMobile";

// Import your saved modular components directly

interface Props {
  data?: JobOpportunity[];
}

export const OpportunitiesSection: React.FC<Props> = ({ data = [] }) => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  // 1. Maintain local state for the active selection tracking

  const safeData = useMemo(() => {
    return Array.isArray(data) ? data : [];
  }, [data]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 2. Central callback function mapping incoming job data structure to your modal schema

  if (isMobile === null) {
    return <section className="w-full h-[500px] bg-[#F5F2EC]/30 opacity-0" />;
  }

  return (
    <>
      {/* 3. Pass the activation handler prop to your sub-sections */}
      {isMobile ? (
        <OpportunitiesSectionMobile data={safeData} />
      ) : (
        <OpportunitiesSectionDesktop data={safeData} />
      )}

      {/* 4. Global application layout layer portal mount point */}
    </>
  );
};
