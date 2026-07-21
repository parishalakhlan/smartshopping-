"use client";

import React, { useEffect, useState, useMemo } from "react";
import type { JobOpportunity } from "@/features/careers/data/types";
import { OpportunitiesSectionDesktop } from "@/features/careers/desktop/OpportunitiesSectionDesktop";
import { OpportunitiesSectionMobile } from "@/features/careers/mobile/OpportunitiesSectionMobile";

interface Props {
  data?: JobOpportunity[]; // ✅ Made optional
}

export const OpportunitiesSection: React.FC<Props> = ({ data = [] }) => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  // ✅ Use useMemo for better performance
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

  // ✅ Show loading state
  if (isMobile === null) {
    return <section className="w-full h-[500px] bg-[#F5F2EC]/30 opacity-0" />;
  }

  return isMobile ? (
    <OpportunitiesSectionMobile data={safeData} />
  ) : (
    <OpportunitiesSectionDesktop data={safeData} />
  );
};
