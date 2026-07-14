"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { verticalsConfig } from "@/features/verticals/verticals.data";

export default function VerticalsMobile() {
  return (
    <div className="bg-background-main text-text-primary font-sans antialiased overflow-x-hidden selection:bg-accent">
      <VerticalsHeroMobile />
      <UniverseOrbit />
      <VerticalRevealStrips />
      <CapabilityWheelMobile />

      <FAQRevealMobile />
      <ClosingCTAMobile />
    </div>
  );
}

// MOBILE HERO
function VerticalsHeroMobile() {
  const { hero } = verticalsConfig;

  return (
    <section className="relative h-[80vh] flex flex-col justify-end px-6 pb-12 bg-background-main overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-35">
        <Image
          src={hero.image.src}
          alt={hero.image.alt}
          fill
          priority
          className={hero.image.objectFit}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-main via-background-main/80 to-transparent" />
      </div>

      <div className="relative z-10 space-y-6">
        <span className="text-[11px] uppercase tracking-[0.3em] text-accent font-medium block">
          {hero.tagline}
        </span>
        <h1 className="text-4xl font-light tracking-tight text-text-primary leading-[1.15] font-luxury-heading">
          {hero.headingLines.map((line, index) => (
            <span key={index}>
              {line}
              {index < hero.headingLines.length - 1 && <br />}
            </span>
          ))}
          <span className="font-serif italic text-text-secondary">
            {hero.italicText}
          </span>
          .
        </h1>
        <p className="text-sm text-text-secondary font-light max-w-xs leading-relaxed">
          {hero.description}
        </p>
        <div className="pt-4">
          <a
            href={hero.ctaPrimary.href}
            className="inline-block px-8 py-4 bg-button-primary-bg text-button-primary-text text-xs font-medium uppercase tracking-[0.2em] transition-all duration-300 hover:shadow-lg active:scale-[0.97]"
          >
            {hero.ctaPrimary.label}
          </a>
        </div>
      </div>
    </section>
  );
}

// BUSINESS UNIVERSE (INTERACTIVE STRIP SELECTION TO MIMIC ROTATION FLOW)
function UniverseOrbit() {
  const { universeNodes, metadata } = verticalsConfig;
  const [activeSeg, setActiveSeg] = useState(0);
  const activeData = universeNodes[activeSeg];

  return (
    <section
      id="universe-mobile"
      className="py-24 px-6 bg-background-main border-b border-border-main space-y-8"
    >
      <div className="space-y-3">
        <span className="text-[11px] uppercase tracking-[0.3em] text-accent block font-medium">
          {metadata.sectionTitles.universe}
        </span>
        <h2 className="text-3xl font-light text-text-primary tracking-tight font-luxury-heading">
          Unified Clusters
        </h2>
      </div>

      <div className="flex space-x-2 overflow-x-auto pb-4 scrollbar-none border-b border-border-main">
        {universeNodes.map((node, idx) => (
          <button
            key={node.id}
            onClick={() => setActiveSeg(idx)}
            className={`text-[10px] uppercase tracking-[0.2em] px-5 py-3 flex-shrink-0 border transition-all duration-300 ${
              activeSeg === idx
                ? "border-accent bg-background-main text-text-primary"
                : "border-border-main text-text-muted hover:border-border-hover"
            }`}
          >
            {node.title}
          </button>
        ))}
      </div>

      <div className="bg-card-bg p-6 border border-card-border space-y-5 shadow-sm">
        <h3 className="text-lg font-light text-text-primary tracking-wide font-luxury-heading">
          {activeData.title}
        </h3>
        <p className="text-sm text-text-secondary font-light leading-relaxed">
          {activeData.overview}
        </p>

        <div className="pt-5 border-t border-border-main grid grid-cols-2 gap-4">
          <div>
            <span className="text-[9px] text-text-muted uppercase tracking-[0.15em] block font-medium">
              Scale Reach
            </span>
            <span className="text-sm text-accent font-medium block mt-1">
              {activeData.impact}
            </span>
          </div>
          <div>
            <span className="text-[9px] text-text-muted uppercase tracking-[0.15em] block font-medium">
              Horizon Target
            </span>
            <span className="text-sm text-text-primary font-light block mt-1">
              {activeData.vision}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

// VERTICAL REVEAL (SLIM EDITORIAL STRIPS ACCORDION-FOLD)
function VerticalRevealStrips() {
  const { editorialPillars, metadata } = verticalsConfig;
  const [expandedStrip, setExpandedStrip] = useState<string | null>(
    editorialPillars[0]?.id || null,
  );

  return (
    <section className="py-24 px-6 bg-background-secondary border-b border-border-main space-y-8">
      <div className="space-y-3">
        <span className="text-[11px] uppercase tracking-[0.3em] text-accent block font-medium">
          {metadata.sectionTitles.pillars}
        </span>
        <h2 className="text-3xl font-light text-text-primary tracking-tight font-luxury-heading">
          Ecosystem Pillars
        </h2>
      </div>

      <div className="space-y-3">
        {editorialPillars.map((pillar) => {
          const isOpen = expandedStrip === pillar.id;
          return (
            <div
              key={pillar.id}
              onClick={() => setExpandedStrip(isOpen ? null : pillar.id)}
              className={`border transition-all duration-500 p-5 bg-card-bg ${
                isOpen ? "border-accent" : "border-card-border"
              }`}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-sm uppercase tracking-wider text-text-primary font-light">
                  {pillar.title}
                </h3>
                <span
                  className={`text-accent text-base transition-all duration-500 ${
                    isOpen ? "rotate-90" : ""
                  }`}
                >
                  ➔
                </span>
              </div>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                    className="overflow-hidden pt-5 mt-5 border-t border-border-main space-y-5"
                  >
                    <div>
                      <span className="text-[9px] uppercase text-text-muted tracking-[0.15em] block font-medium">
                        Mission Objective
                      </span>
                      <p className="text-sm text-text-secondary font-light mt-1 leading-relaxed">
                        {pillar.mission}
                      </p>
                    </div>

                    <div>
                      <span className="text-[9px] uppercase text-text-muted tracking-[0.15em] block font-medium">
                        Vector Operations
                      </span>
                      <ul className="space-y-2 mt-2">
                        {pillar.operations.slice(0, 2).map((op, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-text-muted flex items-center gap-2"
                          >
                            <span className="w-1.5 h-1.5 bg-accent rounded-full" />{" "}
                            {op}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-4 bg-background-secondary border border-border-main text-sm text-text-secondary italic font-light">
                      Metric Target: {pillar.achievements[0] || ""}
                    </div>
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

// CAPABILITY WHEEL MOBILE REVEAL SELECTOR
function CapabilityWheelMobile() {
  const { capabilityItems, metadata } = verticalsConfig;
  const [activeCap, setActiveCap] = useState(0);
  const currentCap = capabilityItems[activeCap];

  return (
    <section className="py-24 px-6 bg-background-main border-b border-border-main space-y-8">
      <div className="space-y-3">
        <span className="text-[11px] uppercase tracking-[0.3em] text-accent block font-medium">
          {metadata.sectionTitles.capabilities}
        </span>
        <h2 className="text-3xl font-light text-text-primary tracking-tight font-luxury-heading">
          Capabilities Wheel
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {capabilityItems.map((cap, index) => (
          <button
            key={cap.id}
            onClick={() => setActiveCap(index)}
            className={`p-4 text-left border text-xs uppercase tracking-wider transition-all duration-300 ${
              activeCap === index
                ? "border-accent bg-background-main text-text-primary"
                : "border-border-main text-text-muted hover:border-border-hover"
            }`}
          >
            {cap.title.split(" ")[0]}
          </button>
        ))}
      </div>

      <div className="bg-card-bg border border-card-border p-6 min-h-[180px] flex flex-col justify-between shadow-sm">
        <div className="space-y-3">
          <span className="text-[9px] uppercase text-text-muted tracking-[0.15em] block font-medium">
            Operational Yield Capacity
          </span>
          <h4 className="text-base text-text-primary font-light">
            {currentCap.title}
          </h4>
          <p className="text-sm text-text-secondary font-light leading-relaxed">
            {currentCap.description}
          </p>
        </div>
        <div className="text-sm text-accent font-light border-t border-border-main pt-4 mt-3">
          Yield Matrix: {currentCap.outcome}
        </div>
      </div>
    </section>
  );
}

// FAQ MOBILE CHIPS ARCHITECTURE
function FAQRevealMobile() {
  const { faqs, metadata } = verticalsConfig;
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  return (
    <section className="py-24 px-6 bg-background-secondary border-b border-border-main space-y-8">
      <div className="space-y-3">
        <span className="text-[11px] uppercase tracking-[0.3em] text-accent block font-medium">
          {metadata.sectionTitles.faq}
        </span>
        <h2 className="text-3xl font-light text-text-primary tracking-tight font-luxury-heading">
          Ecosystem Intelligence
        </h2>
      </div>

      <div className="space-y-3">
        {faqs.map((f) => {
          const isOpen = expandedFaq === f.id;
          return (
            <div
              key={f.id}
              onClick={() => setExpandedFaq(isOpen ? null : f.id)}
              className="bg-card-bg border border-card-border p-5 text-left transition-all duration-300 hover:border-border-hover"
            >
              <div className="flex justify-between items-center gap-3">
                <span className="text-sm text-text-primary font-light tracking-wide">
                  {f.question}
                </span>
                <span
                  className={`text-text-muted text-lg font-light transition-all duration-500 ${
                    isOpen ? "rotate-45 text-accent" : ""
                  }`}
                >
                  ＋
                </span>
              </div>
              {isOpen && (
                <div className="text-sm text-text-secondary font-light leading-relaxed pt-4 mt-4 border-t border-border-main">
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

// CLOSING CALL TO ACTION
function ClosingCTAMobile() {
  const { closingCTA } = verticalsConfig;

  return (
    <section className="py-32 px-6 bg-background-main text-center space-y-8">
      <h2 className="text-3xl font-light text-text-primary tracking-tight leading-snug font-luxury-heading">
        {closingCTA.headingLines.map((line, index) => (
          <span key={index}>
            {line}
            {index < closingCTA.headingLines.length - 1 && <br />}
          </span>
        ))}
      </h2>
      <p className="text-[10px] text-text-muted uppercase tracking-[0.2em] font-medium">
        Rigorous Structural Evaluation Channels Apply.
      </p>

      <div className="flex flex-col gap-3 pt-4 max-w-xs mx-auto">
        <a
          href={closingCTA.ctaPrimary.href}
          className="w-full bg-button-primary-bg text-button-primary-text text-xs font-medium uppercase tracking-[0.2em] py-4 text-center block transition-all duration-300 hover:shadow-lg active:scale-[0.97]"
        >
          {closingCTA.ctaPrimary.label}
        </a>
        <a
          href={closingCTA.ctaSecondary.href}
          className="w-full bg-transparent text-text-primary border border-border-main text-xs font-medium uppercase tracking-[0.2em] py-4 text-center block transition-all duration-300 hover:border-text-primary hover:bg-background-secondary"
        >
          {closingCTA.ctaSecondary.label}
        </a>
      </div>
    </section>
  );
}
