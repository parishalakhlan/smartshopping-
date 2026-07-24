"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { partnersConfig } from "@/features/partners/partners.data";

interface FAQInteractiveProps {
  config?: typeof partnersConfig;
}

export default function FAQInteractive({
  config = partnersConfig,
}: FAQInteractiveProps) {
  const [activeFaq, setActiveFaq] = useState<string | null>(null);
  const { faqs } = config;

  return (
    <section className="py-24 md:py-32 px-8 md:px-16 lg:px-24 bg-surface grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start border-t-2 border-border-main transition-colors duration-300">
      {/* Editorial Sticky Sidebar Header */}
      <div className="lg:col-span-4 lg:sticky lg:top-32 flex flex-col space-y-6">
        <span className="text-xs uppercase tracking-[0.3em] text-accent font-extrabold block">
          Regulatory Clarifications
        </span>
        <h2 className="text-4xl font-bold tracking-tight text-text-primary leading-[1.12]">
          Governance &amp; Intelligence
        </h2>
        <p className="text-text-primary font-medium text-base leading-relaxed max-w-sm">
          Transparent alignment vectors concerning investment architecture,
          asset protections, and structural design system integration criteria.
        </p>
      </div>

      {/* Clean, High-Contrast Accordion List */}
      <div className="lg:col-span-8 flex flex-col border-t-2 border-border-main">
        {faqs.map((faq) => {
          const isOpen = activeFaq === faq.id;
          return (
            <div
              key={faq.id}
              onClick={() => setActiveFaq(isOpen ? null : faq.id)}
              className={`cursor-pointer border-b-2 border-border-main py-6 px-4 transition-all duration-300 group select-none ${
                isOpen
                  ? "bg-card-bg border-l-4 border-l-accent shadow-sm"
                  : "bg-transparent hover:bg-card-bg/50"
              }`}
            >
              <div className="flex justify-between items-center gap-6">
                <h3 className="text-base md:text-lg text-text-primary font-bold tracking-tight">
                  {faq.question}
                </h3>
                <span
                  className={`text-2xl font-bold transition-transform duration-300 select-none flex items-center justify-center shrink-0 ${
                    isOpen
                      ? "rotate-45 text-accent"
                      : "text-text-primary group-hover:text-accent"
                  }`}
                >
                  ＋
                </span>
              </div>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0, marginTop: 0 }}
                    animate={{ height: "auto", opacity: 1, marginTop: 14 }}
                    exit={{ height: 0, opacity: 0, marginTop: 0 }}
                    transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="text-sm md:text-base text-text-primary font-medium leading-relaxed max-w-3xl pr-4 pt-2 border-t border-border-main">
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
}
