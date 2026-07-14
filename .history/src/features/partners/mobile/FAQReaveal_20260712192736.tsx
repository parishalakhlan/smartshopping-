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
    <section className="py-20 px-6 bg-black border-b border-white/5 space-y-6">
      <div>
        <span className="text-[10px] uppercase tracking-widest text-[#E25822] block font-semibold">
          Inquiries
        </span>
        <h2 className="text-2xl font-light text-white tracking-tight mt-1">
          Core Intelligence
        </h2>
      </div>

      <div className="space-y-3">
        {faqs.map((f) => {
          const isOpen = openFaq === f.id;
          return (
            <div
              key={f.id}
              onClick={() => setOpenFaq(isOpen ? null : f.id)}
              className="bg-[#0D0D0E] border border-white/5 p-4"
            >
              <div className="flex justify-between items-center gap-2">
                <span className="text-xs text-stone-300 font-light tracking-wide">
                  {f.question}
                </span>
                <span className="text-stone-500 text-xs">
                  {isOpen ? "▼" : "▲"}
                </span>
              </div>
              {isOpen && (
                <div className="text-xs text-stone-400 font-light leading-relaxed pt-3 mt-3 border-t border-white/5">
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
