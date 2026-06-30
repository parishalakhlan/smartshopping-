"use client";

import React, { useEffect, useState } from "react";
import { ContactFormSectionDesktop } from "@/features/contact/desktop/ContactFormSectionDesktop";
import { ContactFormSectionMobile } from "@/features/contact/mobile/ContactFormSectionMobile";

interface ContactFormSectionProps {
  initialRole?: string;
}

export const ContactFormSection: React.FC<ContactFormSectionProps> = ({
  initialRole = "",
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
    return <div className="w-full h-[400px] bg-[#F5F2EC]/30 opacity-0" />;
  }

  return isMobile ? (
    <ContactFormSectionMobile initialRole={initialRole} />
  ) : (
    <ContactFormSectionDesktop initialRole={initialRole} />
  );
};
