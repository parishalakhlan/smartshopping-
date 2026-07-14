"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { faqData } from "@/features/contact/data/faqData";

export const FAQSectionDesktop: React.FC = () => {
  const [activeFaqId, setActiveFaqId] = useState<string | null>(null);

  return (
    <section
      id="faq-desktop"
      className="py-20 bg-background-main border-b border-border-main hidden lg:block"
    >
      <div className="max-w-4xl mx-auto px-8 text-center space-y-12">
        <div className="space-y-2">
          <span className="text-[10px] text-accent font-bold tracking-widest uppercase block">
            FAQ
          </span>
          <h2 className="font-serif text-4xl font-bold text-text-primary tracking-tight">
            Common Questions
          </h2>
        </div>

        <div className="space-y-4 text-left">
          {faqData.map((faq) => {
            const isOpen = activeFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className={`border transition-all duration-300 rounded-none bg-background-main ${
                  isOpen ? "border-text-primary" : "border-border-main"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setActiveFaqId(isOpen ? null : faq.id)}
                  className="w-full p-5 flex items-center justify-between text-left font-serif text-base font-bold text-text-primary focus:outline-none select-none"
                >
                  <span className="pr-4 break-words">{faq.question}</span>
                  <span
                    className={`text-xs font-mono font-bold transition-transform duration-300 ${
                      isOpen ? "text-accent rotate-45" : "text-text-primary/40"
                    }`}
                  >
                    [ + ]
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden border-t border-border-main/5 bg-background-secondary/20"
                    >
                      <p className="p-5 text-sm text-text-secondary font-normal leading-relaxed">
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
