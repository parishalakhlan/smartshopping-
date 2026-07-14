"use client";

import React, { useState } from "react";
import { faqData } from "@/features/contact/data/faqData";

export const FAQSectionMobile: React.FC = () => {
  const [activeFaqId, setActiveFaqId] = useState<string | null>(null);

  return (
    <section
      id="faq-mobile"
      className="py-12 bg-background-main border-b border-border-main lg:hidden"
    >
      <div className="w-full px-4 space-y-8">
        {/* Header Section */}
        <div className="text-left space-y-1">
          <span className="text-[9px] text-accent font-bold tracking-widest uppercase block">
            FAQ
          </span>
          <h2 className="font-serif text-2xl font-bold text-text-primary tracking-tight">
            Common Questions
          </h2>
        </div>

        {/* Accordions Optimized for Instant Mobile Feedback */}
        <div className="space-y-3 text-left">
          {faqData.map((faq) => {
            const isOpen = activeFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className={`border rounded-none bg-background-main transition-colors ${
                  isOpen ? "border-text-primary" : "border-border-main"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setActiveFaqId(isOpen ? null : faq.id)}
                  className="w-full p-4 flex items-start justify-between text-left font-serif text-sm font-bold text-text-primary focus:outline-none select-none gap-3"
                >
                  <span className="leading-snug">{faq.question}</span>
                  <span
                    className={`text-[10px] font-mono font-bold shrink-0 mt-0.5 transition-transform duration-200 ${
                      isOpen ? "text-accent rotate-45" : "text-text-primary/40"
                    }`}
                  >
                    [ + ]
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-border-main/5 bg-background-secondary/20 p-4">
                    <p className="text-[11px] text-text-secondary font-normal leading-relaxed pr-1 break-words">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
