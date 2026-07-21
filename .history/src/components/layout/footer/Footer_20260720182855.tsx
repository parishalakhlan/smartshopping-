"use client";

import React from "react";
import FooterDesktop from "@/components/layout/footer/FooterDesktop";
import FooterMobile from "@/components/layout/footer/FooterMobile";

export default function Footer() {
  return (
    <>
      {/* Renders Desktop view on lg (1024px) screens and above */}
      <div className="hidden lg:block">
        <FooterDesktop />
      </div>

      {/* Renders Mobile view below lg (1024px) screens */}
      <div className="block lg:hidden">
        <FooterMobile />
      </div>
    </>
  );
}
