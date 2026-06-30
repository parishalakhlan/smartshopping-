"use client";

import React, { useEffect, useState } from "react";
import { FloatingSectionLabelDesktop } from "@/features/contact/desktop/FloatingSectionLabelDesktop";
import { FloatingSectionLabelMobile } from "@/features/contact/mobile/FloatingSectionLabelMobile";

interface FloatingSectionLabelProps {
  num: string;
  text: string;
}

export const FloatingSectionLabel: React.FC<FloatingSectionLabelProps> = ({
  num,
  text,
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
    return null;
  }

  return isMobile ? (
    <FloatingSectionLabelMobile />
  ) : (
    <FloatingSectionLabelDesktop num={num} text={text} />
  );
};
