import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "@/features/partners/partners.data";

export default function FAQInteractive() {
  const [activeFaq, setActiveFaq] = useState<string | null>(null);

  return (
    <section className="py-32 px-24 bg-black border-b border-white/5 grid grid-cols-12 gap-16 items-start">
      <div className="col-span-4 sticky top-32">
        <span className="text-xs uppercase tracking-[0.2em] text-[#E25822] font-semibold">
          Regulatory Clarifications
        </span>
        <h2 className="text-4xl font-light tracking-tight text-white mt-2">
          Governance &amp; Intelligence
        </h2>
        <p className="text-stone-400 font-light text-xs leading-relaxed mt-4">
          Transparent alignment vectors concerning investment architecture,
          asset protections, and structural design system integration criteria.
        </p>
      </div>

      <div className="col-span-8 space-y-4">
        {faqs.map((faq) => {
          const isOpen = activeFaq === faq.id;
          return (
            <div
              key={faq.id}
              onClick={() => setActiveFaq(isOpen ? null : faq.id)}
              className="cursor-pointer bg-[#0D0D0E] border border-white/5 p-6 transition-all duration-300 hover:border-white/15"
            >
              <div className="flex justify-between items-center gap-4">
                <h3 className="text-base text-stone-200 font-light tracking-wide">
                  {faq.question}
                </h3>
                <span
                  className={`text-stone-500 transition-transform duration-300 transform ${
                    isOpen ? "rotate-45 text-[#E25822]" : ""
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
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden border-t border-white/5 pt-4"
                  >
                    <p className="text-xs text-stone-400 font-light leading-relaxed">
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
