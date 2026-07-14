"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqData } from "@/features/careers/data/data";

const ACCORDION_EASE = [0.25, 1, 0.5, 1];

export const FAQSectionMobile: React.FC = () => {
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq-mobile"
      className="w-full bg-[#FFFFFF] py-12 px-4 border-b border-[#163B65]/10 font-sans lg:hidden"
    >
      {/* Left-aligned Title Block for Mobile Scannability */}
      <div className="text-left space-y-2 pb-6 border-b border-[#163B65]/10 mb-6">
        <span className="text-[10px] text-[#F97316] font-bold tracking-[0.25em] uppercase block">
          FAQ
        </span>
        <h2 className="font-serif text-2xl font-bold text-[#163B65] tracking-tight">
          Common Questions
        </h2>
      </div>

      {/* Accordion Container */}
      <div className="space-y-3 text-left">
        {faqData.map((faq, index) => {
          const isOpen = faqOpenIndex === index;
          const panelId = `faq-panel-${index}`;

          return (
            <div
              key={index}
              className={`border transition-all duration-300 rounded-none bg-[#FFFFFF] ${
                isOpen ? "border-[#163B65] shadow-sm" : "border-[#163B65]/10"
              }`}
            >
              <button
                onClick={() => setFaqOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="w-full p-4 flex items-start justify-between text-left font-serif text-sm font-bold text-[#163B65] gap-4"
              >
                <span className="leading-snug">{faq.question}</span>
                <ChevronDown
                  className={`w-4 h-4 text-[#F97316] transition-transform duration-300 shrink-0 mt-0.5 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={panelId}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden border-t border-[#163B65]/5 bg-[#F5F2EC]/10"
                  >
                    <p className="p-4 text-xs text-[#475569] font-normal leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};
