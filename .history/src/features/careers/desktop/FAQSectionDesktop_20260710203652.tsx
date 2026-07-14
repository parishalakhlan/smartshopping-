"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqData } from "@/features/careers/data/data";

export const FAQSectionDesktop: React.FC = () => {
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq-desktop"
      className="py-20 bg-[#FFFFFF] border-b border-[#163B65]/10 hidden lg:block"
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center space-y-12">
        <div className="space-y-2">
          <span className="text-[10px] text-[#F97316] font-bold tracking-widest uppercase block">
            FAQ
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#163B65] tracking-tight">
            Common Questions
          </h2>
        </div>

        <div className="space-y-4 text-left">
          {faqData.map((faq, index) => {
            const isOpen = faqOpenIndex === index;
            const panelId = `faq-desktop-panel-${index}`;

            return (
              <div
                key={index}
                className={`border transition-all duration-300 rounded-none bg-[#FFFFFF] ${
                  isOpen
                    ? "border-[#163B65]"
                    : "border-[#163B65]/10 hover:border-[#163B65]/30"
                }`}
              >
                <button
                  onClick={() => setFaqOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={isOpen ? panelId : undefined}
                  className="w-full p-5 flex items-center justify-between text-left font-serif text-base font-bold text-[#163B65] gap-6"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#F97316] transition-transform duration-300 shrink-0 ${
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
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden border-t border-[#163B65]/5 bg-[#F5F2EC]/10"
                    >
                      <p className="p-5 text-sm text-[#475569] font-normal leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
