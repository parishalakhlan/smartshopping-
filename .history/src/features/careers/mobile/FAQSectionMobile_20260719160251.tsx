"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqData } from "@/features/careers/data/data";

export const FAQSectionMobile: React.FC = () => {
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq-mobile"
      className="w-full bg-background-main py-12 px-4 border-b border-border-main font-sans lg:hidden"
    >
      {/* Left-aligned Title Block for Mobile Scannability */}
      <div className="text-left space-y-2 pb-6 border-b border-border-main mb-6">
        <span className="text-[10px] text-accent font-bold tracking-[0.25em] uppercase block">
          FAQ
        </span>
        <h2 className="font-serif text-2xl font-bold text-text-primary tracking-tight">
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
              className={`border transition-all duration-300 rounded-none bg-background-main ${
                isOpen ? "border-text-primary shadow-sm" : "border-border-main"
              }`}
            >
              <button
                onClick={() => setFaqOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="w-full p-4 flex items-start justify-between text-left font-serif text-sm font-bold text-text-primary gap-4"
              >
                <span className="leading-snug">{faq.question}</span>
                <ChevronDown
                  className={`w-4 h-4 text-accent transition-transform duration-300 shrink-0 mt-0.5 ${
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
                    className="overflow-hidden border-t border-border-main/5 bg-background-secondary/10"
                  >
                    <p className="p-4 text-xs text-text-secondary font-normal leading-relaxed">
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
