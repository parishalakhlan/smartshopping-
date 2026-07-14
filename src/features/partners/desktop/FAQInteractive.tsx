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
    <section className="py-24 md:py-32 px-8 md:px-16 lg:px-24 bg-background-main grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
      {/* Editorial Sticky Sidebar Header */}
      <div className="lg:col-span-4 lg:sticky lg:top-32 flex flex-col space-y-6">
        <span className="text-xs uppercase tracking-[0.4em] text-accent font-medium block">
          Regulatory Clarifications
        </span>
        <h2 className="text-4xl font-extralight tracking-tight text-text-primary leading-[1.15]">
          Governance &amp; Intelligence
        </h2>
        <p className="text-text-secondary font-light text-base leading-relaxed max-w-sm">
          Transparent alignment vectors concerning investment architecture,
          asset protections, and structural design system integration criteria.
        </p>
      </div>

      {/* Clean, Asymmetric Accordion List */}
      <div className="lg:col-span-8 flex flex-col border-t border-text-primary/5">
        {faqs.map((faq) => {
          const isOpen = activeFaq === faq.id;
          return (
            <div
              key={faq.id}
              onClick={() => setActiveFaq(isOpen ? null : faq.id)}
              className="cursor-pointer bg-transparent border-b border-text-primary/5 py-7 transition-all duration-300 group select-none"
            >
              <div className="flex justify-between items-center gap-6">
                <h3 className="text-base md:text-lg text-text-primary font-light tracking-tight transition-colors duration-300 group-hover:text-text-primary/80">
                  {faq.question}
                </h3>
                <span
                  className={`text-xl font-light text-text-muted transition-transform duration-500 ease-out select-none block w-6 h-6 flex items-center justify-center ${
                    isOpen
                      ? "rotate-45 text-accent"
                      : "group-hover:text-text-secondary"
                  }`}
                >
                  ＋
                </span>
              </div>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0, marginTop: 0 }}
                    animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                    exit={{ height: 0, opacity: 0, marginTop: 0 }}
                    transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="text-sm md:text-base text-text-secondary font-light leading-relaxed max-w-3xl pr-6">
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
