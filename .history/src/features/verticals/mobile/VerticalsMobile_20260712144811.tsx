"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  ChevronRight,
  Globe,
  Layers,
  Activity,
  HelpCircle,
} from "lucide-react";
import {
  universeNodes,
  editorialPillars,
  capabilityItems,
  journeyStages,
  faqs,
} from "@/features/verticals/verticals.data";

const bezierEasing = [0.25, 1, 0.5, 1];

export default function VerticalsMobile() {
  return (
    <div className="bg-[#09090A] text-[#F3F4F6] font-sans antialiased overflow-x-hidden selection:bg-[#E25822]">
      <VerticalsHeroMobile />
      <UniverseOrbit />
      <VerticalRevealStrips />
      <CapabilityWheelMobile />
      <OperationalJourneyMobile />
      <FAQRevealMobile />
      <ClosingCTAMobile />
    </div>
  );
}

// MOBILE HERO
function VerticalsHeroMobile() {
  return (
    <section className="relative h-[80vh] flex flex-col justify-end px-6 pb-12 bg-black overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-35">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop"
          alt="Ecosystem Core"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
      </div>

      <div className="relative z-10 space-y-4">
        <span className="text-[10px] uppercase tracking-[0.25em] text-[#E25822] font-semibold block">
          Business Infrastructure Ecosystem
        </span>
        <h1 className="text-4xl font-light tracking-tight text-white leading-[1.15]">
          Our Business <br />
          <span className="font-serif italic text-stone-300">Ecosystem</span>.
        </h1>
        <p className="text-xs text-stone-400 font-light max-w-xs leading-relaxed">
          Smart Shopping scales and coordinates the vital logistics pipelines,
          deep predictive software layers, and spatial properties behind modern
          global fashion commerce.
        </p>
        <div className="pt-2">
          <a
            href="#universe-mobile"
            className="inline-block px-6 py-3.5 bg-[#E25822] text-white text-xs font-semibold uppercase tracking-widest"
          >
            Explore Ecosystem Orbit
          </a>
        </div>
      </div>
    </section>
  );
}

// BUSINESS UNIVERSE (INTERACTIVE STRIP SELECTION TO MIMIC ROTATION FLOW)
function UniverseOrbit() {
  const [activeSeg, setActiveSeg] = useState(0);
  const activeData = universeNodes[activeSeg];

  return (
    <section
      id="universe-mobile"
      className="py-20 px-6 bg-[#09090A] border-b border-white/5 space-y-6"
    >
      <div>
        <span className="text-[10px] uppercase tracking-widest text-[#E25822] block font-semibold">
          Ecosystem Dimensions
        </span>
        <h2 className="text-2xl font-light text-white tracking-tight mt-1">
          Unified Clusters
        </h2>
      </div>

      <div className="flex space-x-2 overflow-x-auto pb-4 scrollbar-none border-b border-white/5">
        {universeNodes.map((node, idx) => (
          <button
            key={node.id}
            onClick={() => setActiveSeg(idx)}
            className={`text-[10px] uppercase tracking-widest px-4 py-2.5 flex-shrink-0 border transition-all ${
              activeSeg === idx
                ? "border-[#E25822] bg-[#E25822]/10 text-white"
                : "border-white/5 text-stone-500"
            }`}
          >
            {node.title}
          </button>
        ))}
      </div>

      <div className="bg-black p-6 border border-white/5 space-y-4">
        <h3 className="text-base text-white font-light tracking-wide">
          {activeData.title}
        </h3>
        <p className="text-xs text-stone-400 font-light leading-relaxed">
          {activeData.overview}
        </p>

        <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-4">
          <div>
            <span className="text-[9px] text-stone-500 uppercase block">
              Scale Reach
            </span>
            <span className="text-xs text-[#E25822] font-medium block mt-0.5">
              {activeData.impact}
            </span>
          </div>
          <div>
            <span className="text-[9px] text-stone-500 uppercase block">
              Horizon Target
            </span>
            <span className="text-xs text-stone-300 font-light block mt-0.5">
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
  const [expandedStrip, setExpandedStrip] = useState<string | null>(
    editorialPillars[0].id,
  );

  return (
    <section className="py-20 px-6 bg-black border-b border-white/5 space-y-6">
      <div>
        <span className="text-[10px] uppercase tracking-widest text-[#E25822] block font-semibold">
          Structural Anchors
        </span>
        <h2 className="text-2xl font-light text-white tracking-tight mt-1">
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
              className={`border transition-all duration-300 p-4 bg-[#0A0A0B] ${isOpen ? "border-[#E25822]" : "border-white/5"}`}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-sm uppercase tracking-wider text-white">
                  {pillar.title}
                </h3>
                <span
                  className={`text-[#E25822] text-xs transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}
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
                    className="overflow-hidden pt-4 mt-4 border-t border-white/5 space-y-4"
                  >
                    <div>
                      <span className="text-[9px] uppercase text-stone-500 block">
                        Mission Objective
                      </span>
                      <p className="text-xs text-stone-300 font-light mt-0.5 leading-relaxed">
                        {pillar.mission}
                      </p>
                    </div>

                    <div>
                      <span className="text-[9px] uppercase text-stone-500 block">
                        Vector Operations
                      </span>
                      <ul className="space-y-1 mt-1.5">
                        {pillar.operations.slice(0, 2).map((op, idx) => (
                          <li
                            key={idx}
                            className="text-xs text-stone-400 flex items-center gap-1.5"
                          >
                            <span className="w-1 h-1 bg-[#E25822] rounded-full" />{" "}
                            {op}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-3 bg-black border border-white/10 text-[11px] text-stone-300 italic font-light">
                      Metric Target: {pillar.achievements[0]}
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
  const [activeCap, setActiveCap] = useState(0);
  const currentCap = capabilityItems[activeCap];

  return (
    <section className="py-20 px-6 bg-[#09090A] border-b border-white/5 space-y-6">
      <div>
        <span className="text-[10px] uppercase tracking-widest text-[#E25822] block font-semibold">
          Specialized Modules
        </span>
        <h2 className="text-2xl font-light text-white tracking-tight mt-1">
          Capabilities Wheel
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {capabilityItems.map((cap, index) => (
          <button
            key={cap.id}
            onClick={() => setActiveCap(index)}
            className={`p-3 text-left border text-xs uppercase tracking-wider transition-all ${
              activeCap === index
                ? "border-[#E25822] bg-black text-white"
                : "border-white/5 text-stone-500"
            }`}
          >
            {cap.title.split(" ")[0]}
          </button>
        ))}
      </div>

      <div className="bg-black border border-white/5 p-5 min-h-[160px] flex flex-col justify-between">
        <div className="space-y-2">
          <span className="text-[9px] uppercase text-stone-500 tracking-wider block">
            Operational Yield Capacity
          </span>
          <h4 className="text-sm text-stone-100 font-light">
            {currentCap.title}
          </h4>
          <p className="text-xs text-stone-400 font-light leading-relaxed">
            {currentCap.description}
          </p>
        </div>
        <div className="text-xs text-[#E25822] font-mono border-t border-white/10 pt-3 mt-2">
          Yield Matrix: {currentCap.outcome}
        </div>
      </div>
    </section>
  );
}

// OPERATIONAL JOURNEY (EXPANDABLE BLUEPRINT PACKAGE ARCHITECTURE)
function OperationalJourneyMobile() {
  const [openStation, setOpenStation] = useState<string | null>(
    journeyStages[0].id,
  );

  return (
    <section className="py-20 px-6 bg-black border-b border-white/5 space-y-6">
      <div>
        <span className="text-[10px] uppercase tracking-widest text-[#E25822] block font-semibold">
          Execution Blueprint
        </span>
        <h2 className="text-2xl font-light text-white tracking-tight mt-1">
          System Pipelines
        </h2>
      </div>

      <div className="space-y-2">
        {journeyStages.map((stage, idx) => {
          const isOpen = openStation === stage.id;
          return (
            <div
              key={stage.id}
              onClick={() => setOpenStation(isOpen ? null : stage.id)}
              className="bg-[#09090A] border border-white/5 p-4"
            >
              <div className="flex justify-between items-center">
                <div className="flex items-baseline gap-2">
                  <span className="text-xs font-mono text-stone-600">
                    0{idx + 1}
                  </span>
                  <span className="text-xs tracking-wide text-stone-200 font-light">
                    {stage.stageName}
                  </span>
                </div>
                <span className="text-xs text-[#E25822]">
                  {isOpen ? "▼" : "▲"}
                </span>
              </div>

              {isOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="pt-4 mt-3 border-t border-white/5 space-y-3"
                >
                  <p className="text-xs text-stone-400 font-light leading-relaxed">
                    <span className="text-stone-500 block text-[9px] uppercase">
                      Core Platform Tech
                    </span>
                    {stage.technology}
                  </p>
                  <div className="p-2.5 bg-black border border-white/10 text-xs text-stone-300 font-light leading-snug">
                    <span className="text-[9px] uppercase text-[#E25822] block font-semibold mb-0.5">
                      System Yield
                    </span>
                    {stage.outcome}
                  </div>
                </motion.div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

// FAQ MOBILE CHIPS ARCHITECTURE
function FAQRevealMobile() {
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  return (
    <section className="py-20 px-6 bg-[#09090A] border-b border-white/5 space-y-6">
      <div>
        <span className="text-[10px] uppercase tracking-widest text-[#E25822] block font-semibold">
          Governance Docs
        </span>
        <h2 className="text-2xl font-light text-white tracking-tight mt-1">
          Ecosystem Intelligence
        </h2>
      </div>

      <div className="space-y-2">
        {faqs.map((f) => {
          const isOpen = expandedFaq === f.id;
          return (
            <div
              key={f.id}
              onClick={() => setExpandedFaq(isOpen ? null : f.id)}
              className="bg-black border border-white/5 p-4 text-left"
            >
              <div className="flex justify-between items-center gap-2">
                <span className="text-xs text-stone-300 font-light tracking-wide">
                  {f.question}
                </span>
                <span className="text-stone-500 text-xs">
                  {isOpen ? "−" : "＋"}
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

// CLOSING CALL TO ACTION
function ClosingCTAMobile() {
  return (
    <section className="py-24 px-6 bg-black text-center space-y-6">
      <h2 className="text-2xl font-light text-stone-200 tracking-tight leading-snug">
        Partner with a Complete <br />
        <span className="font-serif italic text-stone-400">
          Retail Ecosystem Matrix
        </span>
        .
      </h2>
      <p className="text-[9px] text-stone-500 uppercase tracking-widest">
        Rigorous Structural Evaluation Channels Apply.
      </p>

      <div className="flex flex-col gap-3 pt-2">
        <button className="w-full bg-[#E25822] text-white text-xs font-semibold uppercase tracking-widest py-4 text-center">
          Partner With Us
        </button>
        <button className="w-full bg-transparent text-stone-400 border border-white/10 text-xs font-semibold uppercase tracking-widest py-4 text-center">
          Contact Team
        </button>
      </div>
    </section>
  );
}
export default function VerticalsMobile() {
  return (
    <div className="bg-background-main text-text-primary font-sans antialiased overflow-x-hidden selection:bg-accent">
      <VerticalsHeroMobile />
      <UniverseOrbit />
      <VerticalRevealStrips />
      <CapabilityWheelMobile />
      <OperationalJourneyMobile />
      <FAQRevealMobile />
      <ClosingCTAMobile />
    </div>
  );
}

// MOBILE HERO
function VerticalsHeroMobile() {
  return (
    <section className="relative h-[80vh] flex flex-col justify-end px-6 pb-12 bg-black overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-35">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop"
          alt="Ecosystem Core"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
      </div>

      <div className="relative z-10 space-y-4">
        <span className="text-[10px] uppercase tracking-[0.25em] text-accent font-semibold block">
          Business Infrastructure Ecosystem
        </span>
        <h1 className="text-4xl font-light tracking-tight text-white leading-[1.15]">
          Our Business <br />
          <span className="font-serif italic text-stone-300">Ecosystem</span>.
        </h1>
        <p className="text-xs text-stone-400 font-light max-w-xs leading-relaxed">
          Smart Shopping scales and coordinates the vital logistics pipelines,
          deep predictive software layers, and spatial properties behind modern
          global fashion commerce.
        </p>
        <div className="pt-2">
          <a
            href="#universe-mobile"
            className="inline-block px-6 py-3.5 bg-accent text-white text-xs font-semibold uppercase tracking-widest"
          >
            Explore Ecosystem Orbit
          </a>
        </div>
      </div>
    </section>
  );
}

// BUSINESS UNIVERSE (INTERACTIVE STRIP SELECTION TO MIMIC ROTATION FLOW)
function UniverseOrbit() {
  const [activeSeg, setActiveSeg] = useState(0);
  const activeData = universeNodes[activeSeg];

  return (
    <section
      id="universe-mobile"
      className="py-20 px-6 bg-background-main border-b border-border-main space-y-6"
    >
      <div>
        <span className="text-[10px] uppercase tracking-widest text-accent block font-semibold">
          Ecosystem Dimensions
        </span>
        <h2 className="text-2xl font-light text-text-primary tracking-tight mt-1">
          Unified Clusters
        </h2>
      </div>

      <div className="flex space-x-2 overflow-x-auto pb-4 scrollbar-none border-b border-border-main">
        {universeNodes.map((node, idx) => (
          <button
            key={node.id}
            onClick={() => setActiveSeg(idx)}
            className={`text-[10px] uppercase tracking-widest px-4 py-2.5 flex-shrink-0 border transition-all ${
              activeSeg === idx
                ? "border-accent bg-accent/10 text-text-primary"
                : "border-border-main text-text-muted"
            }`}
          >
            {node.title}
          </button>
        ))}
      </div>

      <div className="bg-black p-6 border border-border-main space-y-4">
        <h3 className="text-base text-text-primary font-light tracking-wide">
          {activeData.title}
        </h3>
        <p className="text-xs text-text-secondary font-light leading-relaxed">
          {activeData.overview}
        </p>

        <div className="pt-4 border-t border-border-main grid grid-cols-2 gap-4">
          <div>
            <span className="text-[9px] text-text-muted uppercase block">
              Scale Reach
            </span>
            <span className="text-xs text-accent font-medium block mt-0.5">
              {activeData.impact}
            </span>
          </div>
          <div>
            <span className="text-[9px] text-text-muted uppercase block">
              Horizon Target
            </span>
            <span className="text-xs text-text-secondary font-light block mt-0.5">
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
  const [expandedStrip, setExpandedStrip] = useState<string | null>(
    editorialPillars[0].id,
  );

  return (
    <section className="py-20 px-6 bg-black border-b border-border-main space-y-6">
      <div>
        <span className="text-[10px] uppercase tracking-widest text-accent block font-semibold">
          Structural Anchors
        </span>
        <h2 className="text-2xl font-light text-text-primary tracking-tight mt-1">
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
              className={`border transition-all duration-300 p-4 bg-background-secondary ${isOpen ? "border-accent" : "border-border-main"}`}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-sm uppercase tracking-wider text-text-primary">
                  {pillar.title}
                </h3>
                <span
                  className={`text-accent text-xs transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}
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
                    className="overflow-hidden pt-4 mt-4 border-t border-border-main space-y-4"
                  >
                    <div>
                      <span className="text-[9px] uppercase text-text-muted block">
                        Mission Objective
                      </span>
                      <p className="text-xs text-text-secondary font-light mt-0.5 leading-relaxed">
                        {pillar.mission}
                      </p>
                    </div>

                    <div>
                      <span className="text-[9px] uppercase text-text-muted block">
                        Vector Operations
                      </span>
                      <ul className="space-y-1 mt-1.5">
                        {pillar.operations.slice(0, 2).map((op, idx) => (
                          <li
                            key={idx}
                            className="text-xs text-text-muted flex items-center gap-1.5"
                          >
                            <span className="w-1 h-1 bg-accent rounded-full" />{" "}
                            {op}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-3 bg-black border border-border-main text-[11px] text-text-secondary italic font-light">
                      Metric Target: {pillar.achievements[0]}
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
  const [activeCap, setActiveCap] = useState(0);
  const currentCap = capabilityItems[activeCap];

  return (
    <section className="py-20 px-6 bg-background-main border-b border-border-main space-y-6">
      <div>
        <span className="text-[10px] uppercase tracking-widest text-accent block font-semibold">
          Specialized Modules
        </span>
        <h2 className="text-2xl font-light text-text-primary tracking-tight mt-1">
          Capabilities Wheel
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {capabilityItems.map((cap, index) => (
          <button
            key={cap.id}
            onClick={() => setActiveCap(index)}
            className={`p-3 text-left border text-xs uppercase tracking-wider transition-all ${
              activeCap === index
                ? "border-accent bg-black text-text-primary"
                : "border-border-main text-text-muted"
            }`}
          >
            {cap.title.split(" ")[0]}
          </button>
        ))}
      </div>

      <div className="bg-black border border-border-main p-5 min-h-[160px] flex flex-col justify-between">
        <div className="space-y-2">
          <span className="text-[9px] uppercase text-text-muted tracking-wider block">
            Operational Yield Capacity
          </span>
          <h4 className="text-sm text-text-secondary font-light">
            {currentCap.title}
          </h4>
          <p className="text-xs text-text-muted font-light leading-relaxed">
            {currentCap.description}
          </p>
        </div>
        <div className="text-xs text-accent font-mono border-t border-border-main pt-3 mt-2">
          Yield Matrix: {currentCap.outcome}
        </div>
      </div>
    </section>
  );
}

// OPERATIONAL JOURNEY (EXPANDABLE BLUEPRINT PACKAGE ARCHITECTURE)
function OperationalJourneyMobile() {
  const [openStation, setOpenStation] = useState<string | null>(
    journeyStages[0].id,
  );

  return (
    <section className="py-20 px-6 bg-black border-b border-border-main space-y-6">
      <div>
        <span className="text-[10px] uppercase tracking-widest text-accent block font-semibold">
          Execution Blueprint
        </span>
        <h2 className="text-2xl font-light text-text-primary tracking-tight mt-1">
          System Pipelines
        </h2>
      </div>

      <div className="space-y-2">
        {journeyStages.map((stage, idx) => {
          const isOpen = openStation === stage.id;
          return (
            <div
              key={stage.id}
              onClick={() => setOpenStation(isOpen ? null : stage.id)}
              className="bg-background-main border border-border-main p-4"
            >
              <div className="flex justify-between items-center">
                <div className="flex items-baseline gap-2">
                  <span className="text-xs font-mono text-text-muted">
                    0{idx + 1}
                  </span>
                  <span className="text-xs tracking-wide text-text-secondary font-light">
                    {stage.stageName}
                  </span>
                </div>
                <span className="text-xs text-accent">
                  {isOpen ? "▼" : "▲"}
                </span>
              </div>

              {isOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="pt-4 mt-3 border-t border-border-main space-y-3"
                >
                  <p className="text-xs text-text-muted font-light leading-relaxed">
                    <span className="text-text-muted block text-[9px] uppercase">
                      Core Platform Tech
                    </span>
                    {stage.technology}
                  </p>
                  <div className="p-2.5 bg-black border border-border-main text-xs text-text-secondary font-light leading-snug">
                    <span className="text-[9px] uppercase text-accent block font-semibold mb-0.5">
                      System Yield
                    </span>
                    {stage.outcome}
                  </div>
                </motion.div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

// FAQ MOBILE CHIPS ARCHITECTURE
function FAQRevealMobile() {
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  return (
    <section className="py-20 px-6 bg-background-main border-b border-border-main space-y-6">
      <div>
        <span className="text-[10px] uppercase tracking-widest text-accent block font-semibold">
          Governance Docs
        </span>
        <h2 className="text-2xl font-light text-text-primary tracking-tight mt-1">
          Ecosystem Intelligence
        </h2>
      </div>

      <div className="space-y-2">
        {faqs.map((f) => {
          const isOpen = expandedFaq === f.id;
          return (
            <div
              key={f.id}
              onClick={() => setExpandedFaq(isOpen ? null : f.id)}
              className="bg-black border border-border-main p-4 text-left"
            >
              <div className="flex justify-between items-center gap-2">
                <span className="text-xs text-text-secondary font-light tracking-wide">
                  {f.question}
                </span>
                <span className="text-text-muted text-xs">
                  {isOpen ? "−" : "＋"}
                </span>
              </div>
              {isOpen && (
                <div className="text-xs text-text-muted font-light leading-relaxed pt-3 mt-3 border-t border-border-main">
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
  return (
    <section className="py-24 px-6 bg-black text-center space-y-6">
      <h2 className="text-2xl font-light text-text-secondary tracking-tight leading-snug">
        Partner with a Complete <br />
        <span className="font-serif italic text-text-muted">
          Retail Ecosystem Matrix
        </span>
        .
      </h2>
      <p className="text-[9px] text-text-muted uppercase tracking-widest">
        Rigorous Structural Evaluation Channels Apply.
      </p>

      <div className="flex flex-col gap-3 pt-2">
        <button className="w-full bg-accent text-white text-xs font-semibold uppercase tracking-widest py-4 text-center">
          Partner With Us
        </button>
        <button className="w-full bg-transparent text-text-muted border border-border-main text-xs font-semibold uppercase tracking-widest py-4 text-center">
          Contact Team
        </button>
      </div>
    </section>
  );
}
