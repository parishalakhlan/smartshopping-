"use client";

import React, { useEffect, useState } from "react";
import { MagneticButtonDesktop } from "@/features/careers/desktop/MagneticButtonDesktop";
import { MagneticButtonMobile } from "@/features/careers/mobile/MagneticButtonMobile";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const MagneticButton: React.FC<MagneticButtonProps> = (props) => {
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
    return (
      <button
        className={`opacity-0 rounded-none uppercase text-xs tracking-widest ${props.className}`}
        style={{ minHeight: "48px" }}
      >
        {props.children}
      </button>
    );
  }

  return isMobile ? (
    <MagneticButtonMobile {...props} />
  ) : (
    <MagneticButtonDesktop {...props} />
  );
};
