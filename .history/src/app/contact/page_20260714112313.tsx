// pages/contact.tsx or app/contact/page.tsx

"use client";

import React, { useRef } from "react";
import { HeroSection } from "@/features/contact/HeroSection";

import { QuickConnectSection } from "@/features/contact/QuickConnectSection";
import { VisitSection } from "@/features/contact/VisitSection";
import { PartnershipSection } from "@/features/contact/PartnershipSection";
import { ContactFormSection } from "@/features/contact/ContactFormSection";
import { FAQSection } from "@/features/contact/FAQSection";
import { FinalCTASection } from "@/features/contact/FinalCTASection";

export default function ContactPage() {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToForm = () => {
    const el = document.getElementById("form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#FFFFFF] text-[#163B65] font-sans antialiased selection:bg-[#F97316]/10 selection:text-[#F97316] overflow-x-hidden">
      <HeroSection scrollToSection={scrollToSection} />

      <QuickConnectSection />
      <VisitSection />
      <PartnershipSection onStartPartnership={scrollToForm} />
      <ContactFormSection />
      <FAQSection />
      <FinalCTASection scrollToSection={scrollToSection} />
    </div>
  );
}
