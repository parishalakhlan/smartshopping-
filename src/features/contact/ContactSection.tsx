"use client";

import React, { useEffect, useState } from "react";
import { ContactSectionDesktop } from "@/features/contact/desktop/ContactSectionDesktop";
import { ContactSectionMobile } from "@/features/contact/mobile/ContactSectionMobile";

export const ContactSection: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const handleLayoutCheck = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleLayoutCheck();
    window.addEventListener("resize", handleLayoutCheck);
    return () => window.removeEventListener("resize", handleLayoutCheck);
  }, []);

  if (isMobile === null) {
    return <div className="w-full h-[400px] bg-[#FFFFFF] opacity-0" />;
  }

  return isMobile ? <ContactSectionMobile /> : <ContactSectionDesktop />;
};
