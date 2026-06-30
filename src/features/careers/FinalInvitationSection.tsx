"use client";

import React, { useEffect, useState } from "react";
import { FinalInvitationSectionDesktop } from "@/features/careers/desktop/FinalInvitationSectionDesktop";
import { FinalInvitationSectionMobile } from "@/features/careers/mobile/FinalInvitationSectionMobile";

export const FinalInvitationSection: React.FC = () => {
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
    return <div className="w-full h-[350px] bg-[#163B65] opacity-0" />;
  }

  return isMobile ? (
    <FinalInvitationSectionMobile />
  ) : (
    <FinalInvitationSectionDesktop />
  );
};
