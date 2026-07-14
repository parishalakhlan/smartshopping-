"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Minimize2 } from "lucide-react";
import { verticalsConfig } from "@/features/verticals/verticals.data";

const bezierEasing = [0.25, 1, 0.5, 1];

export default function VerticalsDesktop() {
  return (
    <div className="bg-background-main text-text-primary font-sans antialiased selection:bg-accent selection:text-white overflow-hidden">
      <VerticalsHero />
      <BusinessUniverse />

      <CapabilityCanvas />

      <GrowthEngine />
      <FAQReveal />
      <ClosingCTA />
    </div>
  );
}

// SECTION 1: EDITORIAL HERO
function VerticalsHero() {
  const { hero } = verticalsConfig;

  return (
    <section className="relative h-screen overflow-hidden bg-background-main flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={hero.image.src}
          alt={hero.image.alt}
          fill
          priority
          className={`${hero.image.objectFit} ${hero.image.objectPosition}`}
        />

        {/* Theme Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, var(--color-hero-overlay) 0%, rgba(22,59,101,.58) 38%, rgba(22,59,101,.18) 72%, rgba(22,59,101,.04) 100%)",
          }}
        />

        {/* Soft texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-24">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: bezierEasing }}
            className="inline-flex items-center gap-3 font-luxury-meta text-button-primary-text"
          >
            <span className="w-8 h-px bg-accent" />
            {hero.tagline}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: bezierEasing }}
            className="mt-8 text-6xl xl:text-7xl leading-[1.02] tracking-tight text-button-primary-text font-light"
          >
            {hero.headingLines.map((line, index) => (
              <span key={index}>
                {line}
                {index !== hero.headingLines.length - 1 && <br />}
              </span>
            ))}
            <span className="font-serif italic font-normal text-accent">
              {" "}
              {hero.italicText}
            </span>
            .
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: bezierEasing }}
            className="mt-8 max-w-xl text-lg leading-8 text-white/90 font-light"
          >
            {hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="flex items-center gap-5 mt-12"
          >
            <a
              href={hero.ctaPrimary.href}
              className="group inline-flex items-center gap-2 rounded-lg bg-button-primary-bg text-button-primary-text px-8 py-4 text-sm tracking-[0.18em] uppercase transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              {hero.ctaPrimary.label}

              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href={hero.ctaSecondary.href}
              className="group inline-flex items-center gap-2 text-button-primary-text/90 tracking-[0.16em] uppercase text-sm"
            >
              {hero.ctaSecondary.label}

              <span className="w-8 h-px bg-accent transition-all duration-300 group-hover:w-12" />
            </a>
          </motion.div>

          {/* Editorial stats strip */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-20 flex gap-10"
          >
            {["Retail", "Distribution", "Franchise", "Consulting"].map(
              (item) => (
                <div key={item}>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-white/60">
                    {item}
                  </p>

                  <div className="mt-2 w-14 h-px bg-accent" />
                </div>
              ),
            )}
          </motion.div>
        </div>
      </div>

      {/* Floating Accent */}
      <motion.div
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: "easeInOut",
        }}
        className="absolute right-20 bottom-20 w-32 h-32 rounded-full border border-white/20 backdrop-blur-md"
      />
    </section>
  );
}
// SECTION 2: BUSINESS UNIVERSE (CIRCULAR ORBIT INTERACTION)
function BusinessUniverse() {
  const { universeNodes, metadata } = verticalsConfig;
  const [activeNode, setActiveNode] = useState<string | null>(
    universeNodes[0]?.id || null,
  );
  const currentNodeData = universeNodes.find((n) => n.id === activeNode);

  return (
    <section
      id="universe"
      className="py-32 px-24 bg-background-main border-b border-border-main grid grid-cols-12 gap-16 items-center min-h-screen relative"
    >
      <div className="absolute inset-0 bg-[radial-gradient(#161618_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />

      {/* Editorial Content Display Canvas */}
      <div className="col-span-5 space-y-8 relative z-10">
        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">
            {metadata.sectionTitles.universe}
          </span>
          <h2 className="text-4xl font-light tracking-tight text-text-primary mt-2 font-luxury-heading">
            The Orbit Of Control
          </h2>
        </div>

        <p className="text-text-secondary font-light text-sm leading-relaxed">
          Hover or select any operating cluster within our synchronized systemic
          orbit to evaluate operational focus points, volumetric scale indices,
          and long-term deployment strategies.
        </p>

        <div className="min-h-[380px] bg-card-bg border border-card-border p-8 flex flex-col justify-between relative overflow-hidden">
          <AnimatePresence mode="wait">
            {currentNodeData && (
              <motion.div
                key={currentNodeData.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: bezierEasing }}
                className="space-y-6 flex flex-col justify-between h-full"
              >
                <div className="space-y-4">
                  <h3 className="text-2xl font-light text-text-primary tracking-wide border-b border-border-main pb-3 font-luxury-heading">
                    {currentNodeData.title}
                  </h3>
                  <p className="text-sm text-text-secondary font-light leading-relaxed">
                    {currentNodeData.overview}
                  </p>
                  <div className="text-xs text-text-muted italic bg-black/40 p-4 border-l border-border-main">
                    <span className="block text-[10px] uppercase text-text-muted font-semibold tracking-wider mb-1">
                      Core Objectives
                    </span>
                    {currentNodeData.purpose}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border-main">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-text-muted block">
                      Current Volumetric Scale
                    </span>
                    <span className="text-xs text-accent font-medium block mt-0.5">
                      {currentNodeData.impact}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-text-muted block">
                      Target Horizon
                    </span>
                    <span className="text-xs text-text-primary font-light block mt-0.5">
                      {currentNodeData.vision}
                    </span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Graphical Space Architecture Orbit */}
      <div className="col-span-7 relative h-[650px] flex items-center justify-center">
        {/* Core Group Nucleus */}
        <div className="w-36 h-36 rounded-full border border-border-main bg-black flex flex-col items-center justify-center text-center relative z-20 shadow-2xl">
          <span className="text-[10px] text-text-muted uppercase tracking-widest">
            Master Network
          </span>
          <span className="text-xs text-text-primary font-medium mt-0.5 tracking-tight">
            SMART SHOPPING
          </span>
          <div className="absolute inset-0 rounded-full border border-accent/20 animate-ping opacity-25 pointer-events-none" />
        </div>

        {/* Orbit Path Contours */}
        <div className="absolute w-[440px] h-[440px] rounded-full border border-border-main pointer-events-none" />
        <div className="absolute w-[560px] h-[560px] rounded-full border border-border-main border-dashed pointer-events-none opacity-45" />

        {/* Orbit Node Triggers */}
        {universeNodes.map((node) => {
          const isSelected = activeNode === node.id;
          const radius = 240;
          const xPos = Math.cos((node.angle * Math.PI) / 180) * radius;
          const yPos = Math.sin((node.angle * Math.PI) / 180) * radius;

          return (
            <motion.button
              key={node.id}
              onClick={() => setActiveNode(node.id)}
              className="absolute focus:outline-none group z-30"
              style={{ x: xPos, y: yPos }}
              whileHover={{ scale: isSelected ? 1 : 1.08 }}
              transition={{ duration: 0.3, ease: bezierEasing }}
            >
              <div className="relative flex items-center justify-center">
                <div
                  className={`w-4 h-4 rounded-full border transition-all duration-300 relative flex items-center justify-center ${
                    isSelected
                      ? "bg-accent border-accent scale-125"
                      : "bg-card-bg border-border-main group-hover:border-border-hover"
                  }`}
                >
                  {isSelected && (
                    <span className="w-1.5 h-1.5 bg-white rounded-full" />
                  )}
                </div>

                <span
                  className={`absolute top-6 whitespace-nowrap text-[10px] tracking-widest uppercase px-2.5 py-1 bg-card-bg border transition-colors duration-300 ${
                    isSelected
                      ? "border-accent text-text-primary"
                      : "border-border-main text-text-muted group-hover:text-text-secondary"
                  }`}
                >
                  {node.title}
                </span>
              </div>
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}

// SECTION 4: CAPABILITY CANVAS (INTERACTIVE MATRIX MAP)
function CapabilityCanvas() {
  const { capabilityItems, metadata } = verticalsConfig;
  const [selectedCap, setSelectedCap] = useState<string>(
    capabilityItems[0]?.id || "",
  );
  const activeCapData = capabilityItems.find((c) => c.id === selectedCap);

  if (!activeCapData) {
    return null;
  }

  return (
    <section
      id="capabilities"
      className="py-32 px-24 bg-background-main border-b border-border-main grid grid-cols-12 gap-16 items-center"
    >
      <div className="col-span-5 space-y-6">
        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">
            {metadata.sectionTitles.capabilities}
          </span>
          <h2 className="text-4xl font-light tracking-tight text-text-primary mt-2 font-luxury-heading">
            Functional Matrix
          </h2>
        </div>
        <p className="text-text-secondary font-light text-sm leading-relaxed">
          We construct specialized, systemic operating capacities designed to
          sustain premium brand positions across complex global consumer
          environments.
        </p>

        {/* Matrix Grid Triggers */}
        <div className="grid grid-cols-2 gap-4 pt-4">
          {capabilityItems.map((item) => {
            const isSelected = selectedCap === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedCap(item.id)}
                className={`text-left p-4 border transition-all duration-300 relative group ${
                  isSelected
                    ? "border-accent bg-background-secondary"
                    : "border-border-main bg-black/40 hover:border-border-hover"
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeCapBorder"
                    className="absolute top-0 right-0 w-1.5 h-1.5 bg-accent"
                  />
                )}
                <span
                  className={`text-xs uppercase tracking-wider block transition-colors ${isSelected ? "text-text-primary font-normal" : "text-text-muted group-hover:text-text-secondary"}`}
                >
                  {item.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Dynamic Display Canvas panels */}
      <div className="col-span-7 bg-background-secondary border border-border-main grid grid-cols-12 h-[400px] overflow-hidden relative">
        <div className="col-span-5 relative h-full bg-black">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCapData.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0"
            >
              <Image
                src={activeCapData.image}
                alt={activeCapData.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="col-span-7 p-8 flex flex-col justify-between space-y-6 h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCapData.id}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-6 flex flex-col justify-between h-full"
            >
              <div>
                <span className="text-[10px] text-text-muted uppercase tracking-widest block">
                  Operational Capacity
                </span>
                <h3 className="text-xl text-text-primary font-light mt-1 font-luxury-heading">
                  {activeCapData.title}
                </h3>
                <p className="text-sm text-text-secondary font-light leading-relaxed mt-4">
                  {activeCapData.description}
                </p>
              </div>

              <div className="pt-6 border-t border-border-main">
                <span className="text-[10px] text-text-muted uppercase tracking-widest block">
                  Structural Yield Outcome
                </span>
                <span className="text-lg text-accent font-light block mt-1">
                  {activeCapData.outcome}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

// SECTION 6: GROWTH ENGINE (ANIMATED LAYERED ABSTRACTED COMPOSITION)
function GrowthEngine() {
  const { growthLayers, metadata } = verticalsConfig;
  const [activeLayer, setActiveLayer] = useState<number>(0);

  return (
    <section className="py-32 px-24 bg-background-main border-b border-border-main grid grid-cols-12 gap-16 items-center">
      <div className="col-span-5 space-y-6">
        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">
            {metadata.sectionTitles.growth}
          </span>
          <h2 className="text-4xl font-light tracking-tight text-text-primary mt-2 font-luxury-heading">
            The Multi-Layered Growth Engine
          </h2>
        </div>
        <p className="text-text-secondary font-light text-sm leading-relaxed">
          Growth within our ecosystem is structured across interconnected
          operational dimensions rather than standard metrics. Click any layer
          array to inspect depth frameworks.
        </p>

        <div className="space-y-3 pt-4">
          {growthLayers.map((layer, index) => {
            const isSelected = activeLayer === index;
            return (
              <button
                key={index}
                onClick={() => setActiveLayer(index)}
                className={`w-full text-left p-4 border transition-all duration-300 ${isSelected ? "border-accent bg-background-secondary" : "border-border-main bg-black/30 hover:border-border-hover"}`}
              >
                <span
                  className={`text-xs tracking-wider uppercase block ${isSelected ? "text-text-primary" : "text-text-muted"}`}
                >
                  {layer.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Abstracted Graphic Visualizer Panels */}
      <div className="col-span-7 bg-black border border-border-main h-[420px] p-8 flex flex-col justify-between relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:100%_40px]" />

        <div className="relative z-10 flex space-x-2 items-end justify-start h-44 border-b border-border-main pb-6">
          {growthLayers.map((_, i) => (
            <motion.div
              key={i}
              className={`w-12 transition-all duration-500 ${activeLayer === i ? "bg-accent" : "bg-border-main"}`}
              animate={{ height: activeLayer === i ? "140px" : "40px" }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            />
          ))}
        </div>

        <div className="relative z-10 pt-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeLayer}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-2"
            >
              <span className="text-[10px] uppercase text-accent tracking-wider block font-semibold">
                Strategic Directive
              </span>
              <p className="text-sm text-text-secondary font-light leading-relaxed max-w-xl">
                {growthLayers[activeLayer]?.desc || ""}
              </p>
              <span className="text-xs text-text-primary font-mono block pt-2">
                Index Target: {growthLayers[activeLayer]?.keyMetric || ""}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

// SECTION 7: FAQ (FLOATING REVEALS)
function FAQReveal() {
  const { faqs, metadata } = verticalsConfig;
  const [activeFaq, setActiveFaq] = useState<string | null>(null);

  return (
    <section className="py-32 px-24 bg-background-secondary border-b border-border-main grid grid-cols-12 gap-16 items-start">
      <div className="col-span-4 sticky top-32">
        <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">
          {metadata.sectionTitles.faq}
        </span>
        <h2 className="text-4xl font-light tracking-tight text-text-primary mt-2 font-luxury-heading">
          Governance Frameworks
        </h2>
        <p className="text-text-secondary font-light text-xs leading-relaxed mt-4">
          Key documentation detailing technical cross-vertical connectivity
          pipelines, information protection policies, and ecosystem development
          models.
        </p>
      </div>

      <div className="col-span-8 space-y-4">
        {faqs.map((faq) => {
          const isOpen = activeFaq === faq.id;
          return (
            <div
              key={faq.id}
              onClick={() => setActiveFaq(isOpen ? null : faq.id)}
              className="cursor-pointer bg-card-bg border border-card-border p-6 transition-all duration-300 hover:border-border-hover"
            >
              <div className="flex justify-between items-center gap-4">
                <h3 className="text-base text-text-secondary font-light tracking-wide">
                  {faq.question}
                </h3>
                <span
                  className={`text-text-muted transition-transform duration-300 transform ${isOpen ? "rotate-45 text-accent" : ""}`}
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
                    className="overflow-hidden border-t border-card-border pt-4"
                  >
                    <p className="text-xs text-text-muted font-light leading-relaxed">
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

// SECTION 8: CLOSING EDITORIAL CTA
function ClosingCTA() {
  const { closingCTA } = verticalsConfig;

  return (
    <section className="py-44 px-24 bg-background-secondary text-center relative overflow-hidden">
      <div className="max-w-3xl mx-auto space-y-8 relative z-10">
        <h2 className="text-4xl lg:text-5xl font-light tracking-tight text-text-primary font-luxury-heading">
          {closingCTA.headingLines.map((line, index) => (
            <span key={index}>
              {line}
              {index < closingCTA.headingLines.length - 1 && <br />}
            </span>
          ))}
        </h2>

        <div className="flex items-center justify-center gap-6 pt-4">
          <a
            href={closingCTA.ctaPrimary.href}
            className="px-8 py-4 bg-button-primary-bg text-button-primary-text text-xs uppercase tracking-widest font-semibold transition-transform active:scale-[0.985] inline-block"
          >
            {closingCTA.ctaPrimary.label}
          </a>
          <a
            href={closingCTA.ctaSecondary.href}
            className="px-8 py-4 bg-transparent text-text-primary border border-border-main text-xs uppercase tracking-widest font-semibold hover:border-border-hover transition-colors inline-block"
          >
            {closingCTA.ctaSecondary.label}
          </a>
        </div>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(#111112_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none opacity-30" />
    </section>
  );
}
