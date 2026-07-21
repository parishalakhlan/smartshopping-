"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { verticalsConfig } from "@/features/verticals/verticals.data";

const bezierEasing: [number, number, number, number] = [0.25, 1, 0.5, 1];

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
    </section>
  );
}
// SECTION 2: BUSINESS UNIVERSE (CIRCULAR ORBIT INTERACTION)
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
      className="py-40 px-24 bg-background-main border-b border-border-main grid grid-cols-12 gap-20 items-center min-h-screen relative"
    >
      <div className="absolute inset-0 bg-[radial-gradient(#161618_1px,transparent_1px)] [background-size:32px_32px] opacity-20" />

      {/* Editorial Content Display Canvas */}
      <div className="col-span-5 space-y-10 relative z-10">
        <div className="space-y-4">
          <span className="text-[11px] uppercase tracking-[0.3em] text-accent font-medium block">
            {metadata.sectionTitles.universe}
          </span>
          <h2 className="text-5xl font-light tracking-tight text-text-primary leading-[1.1] font-luxury-heading">
            The Orbit Of
            <br />
            Control
          </h2>
        </div>

        <p className="text-text-secondary font-light text-base leading-relaxed max-w-md">
          Hover or select any operating cluster within our synchronized systemic
          orbit to evaluate operational focus points, volumetric scale indices,
          and long-term deployment strategies.
        </p>

        <div className="min-h-[400px] bg-card-bg border border-card-border p-10 flex flex-col justify-between relative overflow-hidden shadow-sm">
          <AnimatePresence mode="wait">
            {currentNodeData && (
              <motion.div
                key={currentNodeData.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                className="space-y-8 flex flex-col justify-between h-full"
              >
                <div className="space-y-6">
                  <h3 className="text-3xl font-light text-text-primary tracking-wide border-b border-border-main pb-4 font-luxury-heading">
                    {currentNodeData.title}
                  </h3>
                  <p className="text-base text-text-secondary font-light leading-relaxed">
                    {currentNodeData.overview}
                  </p>
                  <div className="text-sm text-text-muted italic bg-background-secondary p-6 border-l-2 border-accent">
                    <span className="block text-[10px] uppercase text-text-muted font-medium tracking-wider mb-2">
                      Core Objectives
                    </span>
                    {currentNodeData.purpose}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 pt-8 border-t border-border-main">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-text-muted block font-medium">
                      Current Volumetric Scale
                    </span>
                    <span className="text-sm text-accent font-medium block mt-1">
                      {currentNodeData.impact}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-text-muted block font-medium">
                      Target Horizon
                    </span>
                    <span className="text-sm text-text-primary font-light block mt-1">
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
      <div className="col-span-7 relative h-[700px] flex items-center justify-center">
        {/* Core Group Nucleus */}
        <div className="w-40 h-40 rounded-full border border-border-main bg-background-main flex flex-col items-center justify-center text-center relative z-20 shadow-lg">
          <span className="text-[10px] text-text-muted uppercase tracking-[0.2em] font-medium">
            Master Network
          </span>
          <span className="text-sm text-text-primary font-light mt-1 tracking-tight">
            SMART SHOPPING
          </span>
          <div className="absolute inset-0 rounded-full border border-accent/10 animate-ping opacity-20 pointer-events-none" />
        </div>

        {/* Orbit Path Contours */}
        <div className="absolute w-[460px] h-[460px] rounded-full border border-border-main pointer-events-none" />
        <div className="absolute w-[580px] h-[580px] rounded-full border border-border-main border-dashed pointer-events-none opacity-30" />

        {/* Orbit Node Triggers */}
        {universeNodes.map((node) => {
          const isSelected = activeNode === node.id;
          const radius = 250;
          const xPos = Math.cos((node.angle * Math.PI) / 180) * radius;
          const yPos = Math.sin((node.angle * Math.PI) / 180) * radius;

          return (
            <motion.button
              key={node.id}
              onClick={() => setActiveNode(node.id)}
              className="absolute focus:outline-none group z-30"
              style={{ x: xPos, y: yPos }}
              whileHover={{ scale: isSelected ? 1 : 1.05 }}
              transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
            >
              <div className="relative flex items-center justify-center">
                <div
                  className={`w-5 h-5 rounded-full border-2 transition-all duration-500 relative flex items-center justify-center ${
                    isSelected
                      ? "bg-accent border-accent scale-110"
                      : "bg-background-main border-border-main group-hover:border-accent"
                  }`}
                >
                  {isSelected && (
                    <span className="w-2 h-2 bg-white rounded-full" />
                  )}
                </div>

                <span
                  className={`absolute top-7 whitespace-nowrap text-[11px] tracking-[0.2em] uppercase px-4 py-2 bg-background-main border transition-all duration-500 ${
                    isSelected
                      ? "border-accent text-text-primary shadow-sm"
                      : "border-border-main text-text-muted group-hover:text-text-primary group-hover:border-border-hover"
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
      className="py-40 px-24 bg-background-secondary border-b border-border-main grid grid-cols-12 gap-20 items-center"
    >
      <div className="col-span-5 space-y-8">
        <div className="space-y-4">
          <span className="text-[11px] uppercase tracking-[0.3em] text-accent font-medium block">
            {metadata.sectionTitles.capabilities}
          </span>
          <h2 className="text-5xl font-light tracking-tight text-text-primary leading-[1.1] font-luxury-heading">
            Functional
            <br />
            Matrix
          </h2>
        </div>
        <p className="text-text-secondary font-light text-base leading-relaxed max-w-md">
          We construct specialized, systemic operating capacities designed to
          sustain premium brand positions across complex global consumer
          environments.
        </p>

        {/* Matrix Grid Triggers */}
        <div className="grid grid-cols-2 gap-3 pt-6">
          {capabilityItems.map((item) => {
            const isSelected = selectedCap === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedCap(item.id)}
                className={`text-left p-5 border transition-all duration-500 relative group ${
                  isSelected
                    ? "border-accent bg-background-main"
                    : "border-border-main bg-background-main/60 hover:border-border-hover"
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeCapBorder"
                    className="absolute top-0 right-0 w-1 h-full bg-accent"
                  />
                )}
                <span
                  className={`text-xs uppercase tracking-wider block transition-colors ${
                    isSelected
                      ? "text-text-primary font-medium"
                      : "text-text-muted group-hover:text-text-secondary"
                  }`}
                >
                  {item.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Dynamic Display Canvas panels */}
      <div className="col-span-7 bg-background-main border border-border-main grid grid-cols-12 h-[480px] overflow-hidden relative shadow-sm">
        <div className="col-span-5 relative h-full bg-background-secondary">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCapData.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={activeCapData.image}
                alt={activeCapData.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 " />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="col-span-7 p-10 flex flex-col justify-between h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCapData.id}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
              className="space-y-6 flex flex-col justify-between h-full"
            >
              <div className="space-y-4">
                <span className="text-[10px] text-text-muted uppercase tracking-[0.2em] block font-medium">
                  Operational Capacity
                </span>
                <h3 className="text-2xl font-light text-text-primary tracking-wide font-luxury-heading">
                  {activeCapData.title}
                </h3>
                <p className="text-base text-text-secondary font-light leading-relaxed">
                  {activeCapData.description}
                </p>
              </div>

              <div className="pt-8 border-t border-border-main">
                <span className="text-[10px] text-text-muted uppercase tracking-[0.2em] block font-medium">
                  Structural Yield Outcome
                </span>
                <span className="text-xl text-accent font-light block mt-1">
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
    <section className="py-40 px-24 bg-background-main border-b border-border-main grid grid-cols-12 gap-20 items-center">
      <div className="col-span-5 space-y-8">
        <div className="space-y-4">
          <span className="text-[11px] uppercase tracking-[0.3em] text-accent font-medium block">
            {metadata.sectionTitles.growth}
          </span>
          <h2 className="text-5xl font-light tracking-tight text-text-primary leading-[1.1] font-luxury-heading">
            The Multi-Layered
            <br />
            Growth Engine
          </h2>
        </div>
        <p className="text-text-secondary font-light text-base leading-relaxed max-w-md">
          Growth within our ecosystem is structured across interconnected
          operational dimensions rather than standard metrics. Click any layer
          array to inspect depth frameworks.
        </p>

        <div className="space-y-3 pt-6">
          {growthLayers.map((layer, index) => {
            const isSelected = activeLayer === index;
            return (
              <button
                key={index}
                onClick={() => setActiveLayer(index)}
                className={`w-full text-left p-5 border transition-all duration-500 ${
                  isSelected
                    ? "border-accent bg-background-main"
                    : "border-border-main bg-background-main/40 hover:border-border-hover"
                }`}
              >
                <span
                  className={`text-xs tracking-wider uppercase block ${
                    isSelected
                      ? "text-text-primary font-medium"
                      : "text-text-muted"
                  }`}
                >
                  {layer.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Abstracted Graphic Visualizer Panels */}
      <div className="col-span-7 bg-background-main border border-border-main h-[460px] p-10 flex flex-col justify-between relative overflow-hidden shadow-sm">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100%_40px]" />

        <div className="relative z-10 flex space-x-3 items-end justify-start h-48 border-b border-border-main pb-8">
          {growthLayers.map((_, i) => (
            <motion.div
              key={i}
              className={`w-14 transition-all duration-700 ${
                activeLayer === i ? "bg-accent" : "bg-border-main"
              }`}
              animate={{ height: activeLayer === i ? "160px" : "48px" }}
              transition={{ type: "spring", stiffness: 80, damping: 25 }}
            />
          ))}
        </div>

        <div className="relative z-10 pt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeLayer}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
              className="space-y-3"
            >
              <span className="text-[10px] uppercase text-accent tracking-[0.2em] block font-medium">
                Strategic Directive
              </span>
              <p className="text-base text-text-secondary font-light leading-relaxed max-w-xl">
                {growthLayers[activeLayer]?.desc || ""}
              </p>
              <span className="text-sm text-text-primary font-light block pt-1">
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
    <section className="py-40 px-24 bg-background-secondary border-b border-border-main grid grid-cols-12 gap-20 items-start">
      <div className="col-span-4 sticky top-32 space-y-6">
        <div className="space-y-4">
          <span className="text-[11px] uppercase tracking-[0.3em] text-accent font-medium block">
            {metadata.sectionTitles.faq}
          </span>
          <h2 className="text-5xl font-light tracking-tight text-text-primary leading-[1.1] font-luxury-heading">
            Governance
            <br />
            Frameworks
          </h2>
        </div>
        <p className="text-text-secondary font-light text-sm leading-relaxed max-w-sm">
          Key documentation detailing technical cross-vertical connectivity
          pipelines, information protection policies, and ecosystem development
          models.
        </p>
      </div>

      <div className="col-span-8 space-y-3">
        {faqs.map((faq) => {
          const isOpen = activeFaq === faq.id;
          return (
            <div
              key={faq.id}
              onClick={() => setActiveFaq(isOpen ? null : faq.id)}
              className="cursor-pointer bg-card-bg border border-card-border p-8 transition-all duration-500 hover:border-border-hover shadow-sm"
            >
              <div className="flex justify-between items-center gap-6">
                <h3 className="text-base text-text-primary font-light tracking-wide">
                  {faq.question}
                </h3>
                <span
                  className={`text-text-muted transition-all duration-500 text-xl font-light ${
                    isOpen ? "rotate-45 text-accent" : ""
                  }`}
                >
                  ＋
                </span>
              </div>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0, marginTop: 0 }}
                    animate={{ height: "auto", opacity: 1, marginTop: 20 }}
                    exit={{ height: 0, opacity: 0, marginTop: 0 }}
                    transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                    className="overflow-hidden border-t border-card-border pt-6"
                  >
                    <p className="text-sm text-text-secondary font-light leading-relaxed">
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
    <section className="py-48 px-24 bg-background-main text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-10 relative z-10">
        <h2 className="text-5xl lg:text-6xl font-light tracking-tight text-text-primary leading-[1.1] font-luxury-heading">
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
            className="px-10 py-5 bg-button-primary-bg text-button-primary-text text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 hover:shadow-lg active:scale-[0.97] inline-block"
          >
            {closingCTA.ctaPrimary.label}
          </a>
          <a
            href={closingCTA.ctaSecondary.href}
            className="px-10 py-5 bg-transparent text-text-primary border border-border-main text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 hover:border-text-primary hover:bg-background-secondary inline-block"
          >
            {closingCTA.ctaSecondary.label}
          </a>
        </div>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(#161618_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none opacity-20" />
    </section>
  );
}
