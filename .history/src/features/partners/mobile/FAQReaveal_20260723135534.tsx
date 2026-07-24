"use client";

import React, { useState } from "react";
import { partnersConfig } from "@/features/partners/partners.data";

interface FAQRevealProps {
  config?: typeof partnersConfig;
}

export default function FAQReveal({ config = partnersConfig }: FAQRevealProps) {
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const { faqs } = config;

  return (
    <section className="py-20 px-6 sm:px-8 bg-surface flex flex-col space-y-10 border-t-2 border-border-main transition-colors duration-300">
      {/* Editorial Header Block */}
      <div className="space-y-2">
        <span className="text-xs uppercase tracking-[0.3em] text-accent block font-extrabold">
          Inquiries
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight leading-tight">
          Core Intelligence
        </h2>
      </div>

      {/* High-Contrast Accordion Interface */}
      <div className="flex flex-col border-t-2 border-border-main">
        {faqs.map((f) => {
          const isOpen = openFaq === f.id;
          return (
            <div
              key={f.id}
              onClick={() => setOpenFaq(isOpen ? null : f.id)}
              className={`border-b-2 border-border-main py-5 px-4 transition-all duration-300 group select-none cursor-pointer ${
                isOpen
                  ? "bg-card-bg border-l-4 border-l-accent shadow-sm"
                  : "bg-transparent hover:bg-card-bg/50"
              }`}
            >
              <div className="flex justify-between items-center gap-4">
                <span className="text-base text-text-primary font-bold tracking-tight">
                  {f.question}
                </span>
                <span
                  className={`text-lg font-bold transition-transform duration-300 ease-out shrink-0 ${
                    isOpen
                      ? "text-accent"
                      : "text-text-primary group-hover:text-accent"
                  }`}
                >
                  {isOpen ? "✕" : "＋"}
                </span>
              </div>

              {isOpen && (
                <div className="text-sm sm:text-base text-text-primary font-medium leading-relaxed pt-3 mt-3 border-t border-border-main transition-all duration-300 animate-fadeIn">
                  {f.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
