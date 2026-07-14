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
    <section className="py-20 px-8 bg-background-main flex flex-col space-y-10">
      {/* Editorial Header Block */}
      <div className="space-y-2">
        <span className="text-[10px] uppercase tracking-[0.3em] text-accent block font-medium">
          Inquiries
        </span>
        <h2 className="text-3xl font-extralight text-text-primary tracking-tight leading-tight">
          Core Intelligence
        </h2>
      </div>

      {/* Luxury Minimal Accordion Interface */}
      <div className="flex flex-col border-t border-text-primary/5">
        {faqs.map((f) => {
          const isOpen = openFaq === f.id;
          return (
            <div
              key={f.id}
              onClick={() => setOpenFaq(isOpen ? null : f.id)}
              className="bg-transparent border-b border-text-primary/5 py-5 transition-all duration-300 group select-none cursor-pointer"
            >
              <div className="flex justify-between items-center gap-4">
                <span className="text-sm text-text-primary font-light tracking-tight transition-colors duration-300 group-hover:text-text-primary/80">
                  {f.question}
                </span>
                <span
                  className={`text-text-muted text-[10px] tracking-widest font-light transition-transform duration-300 ease-out ${
                    isOpen
                      ? "rotate-180 text-accent"
                      : "group-hover:text-text-secondary"
                  }`}
                >
                  {isOpen ? "✕" : "＋"}
                </span>
              </div>

              {isOpen && (
                <div className="text-sm text-text-secondary font-light leading-relaxed pt-4 pr-4 transition-all duration-300 animate-fadeIn">
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
