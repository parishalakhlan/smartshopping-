"use client";

import React, { useEffect, useState } from "react";
import { PartnershipSectionDesktop } from "@/features/contact/desktop/PartnershipSectionDesktop";
import { PartnershipSectionMobile } from "@/features/contact/mobile/PartnershipSectionMobile";

interface PartnershipSectionProps {
  onStartPartnership: () => void;
}

export const PartnershipSection: React.FC<PartnershipSectionProps> = ({
  onStartPartnership,
}) => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkViewport();
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  if (isMobile === null) {
    return <div className="w-full h-[320px] bg-[#FFFFFF] opacity-0" />;
  }

  return isMobile ? (
    <PartnershipSectionMobile onStartPartnership={onStartPartnership} />
  ) : (
    <PartnershipSectionDesktop onStartPartnership={onStartPartnership} />
  );
};
