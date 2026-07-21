"use client";

import React, { useEffect, useState } from "react";
import type { JobOpportunity } from "@/features/careers/data/types";
import { OpportunitiesSectionDesktop } from "@/features/careers/desktop/OpportunitiesSectionDesktop";
import { OpportunitiesSectionMobile } from "@/features/careers/mobile/OpportunitiesSectionMobile";

interface Props {
  data: JobOpportunity[];
}

export const OpportunitiesSection: React.FC<Props> = ({ data }) => {
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
    <OpportunitiesSectionMobile data={data} />
  ) : (
    <OpportunitiesSectionDesktop data={data} />
  );
};
