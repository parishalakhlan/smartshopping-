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
      <VerticalExplorer />
      <CapabilityCanvas />
      <OperationalFlow />
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
    <section className="relative h-screen flex items-center justify-start pl-24 pr-12 overflow-hidden bg-black">
      <div className="absolute inset-0 z-0 opacity-40 scale-100 transform transition-transform duration-1000">
        <Image
          src={hero.image.src}
          alt={hero.image.alt}
          fill
          priority
          className={`${hero.image.objectFit} ${hero.image.objectPosition}`}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl space-y-8">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: bezierEasing }}
          className="text-xs uppercase tracking-[0.3em] text-accent font-semibold block"
        >
          {hero.tagline}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: bezierEasing }}
          className="text-6xl lg:text-7xl font-light tracking-tight leading-[1.05] text-white max-w-3xl"
        >
          {hero.headingLines.map((line, index) => (
            <span key={index}>
              {line}
              {index < hero.headingLines.length - 1 && <br />}
            </span>
          ))}
          <span className="font-serif italic font-normal text-stone-400">
            {hero.italicText}
          </span>
          .
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: bezierEasing }}
          className="text-lg text-stone-400 font-light max-w-xl leading-relaxed"
        >
          {hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: bezierEasing }}
          className="flex items-center gap-8 pt-4"
        >
          <a
            href={hero.ctaPrimary.href}
            className="group relative px-8 py-4 bg-accent text-white text-sm tracking-wider font-medium overflow-hidden transition-transform duration-300 active:scale-[0.985]"
          >
            <span className="relative z-10 flex items-center gap-2">
              {hero.ctaPrimary.label}{" "}
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </span>
          </a>
          <a
            href={hero.ctaSecondary.href}
            className="group text-sm tracking-wider font-medium text-white/70 hover:text-white transition-colors duration-300 relative py-2"
          >
            {hero.ctaSecondary.label}
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
          </a>
        </motion.div>
      </div>
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
          <h2 className="text-4xl font-light tracking-tight text-text-primary mt-2">
            The Orbit Of Control
          </h2>
        </div>

        <p className="text-text-secondary font-light text-sm leading-relaxed">
          Hover or select any operating cluster within our synchronized systemic
          orbit to evaluate operational focus points, volumetric scale indices,
          and long-term deployment strategies.
        </p>

        <div className="min-h-[380px] bg-background-secondary border border-border-main p-8 flex flex-col justify-between relative overflow-hidden">
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
                  <h3 className="text-2xl font-light text-text-primary tracking-wide border-b border-border-main pb-3">
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
                      : "bg-background-secondary border-border-main group-hover:border-border-hover"
                  }`}
                >
                  {isSelected && (
                    <span className="w-1.5 h-1.5 bg-white rounded-full" />
                  )}
                </div>

                <span
                  className={`absolute top-6 whitespace-nowrap text-[10px] tracking-widest uppercase px-2.5 py-1 bg-background-secondary border transition-colors duration-300 ${
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

// SECTION 3: VERTICAL EXPLORER (SCULPTED EDITORIAL PILLARS)
function VerticalExplorer() {
  const { editorialPillars, metadata } = verticalsConfig;
  const [expandedPillar, setExpandedPillar] = useState<string | null>(
    editorialPillars[0]?.id || null,
  );

  return (
    <section className="py-32 px-24 bg-black border-b border-border-main">
      <div className="mb-20 text-center max-w-xl mx-auto">
        <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">
          {metadata.sectionTitles.pillars}
        </span>
        <h2 className="text-4xl font-light tracking-tight text-text-primary mt-2">
          Ecosystem Pillars
        </h2>
      </div>

      <div className="flex h-[550px] gap-4 items-stretch">
        {editorialPillars.map((pillar) => {
          const isExpanded = expandedPillar === pillar.id;
          return (
            <motion.div
              key={pillar.id}
              layout
              onClick={() => setExpandedPillar(pillar.id)}
              className={`relative overflow-hidden cursor-pointer border p-8 flex flex-col justify-between transition-all duration-500 bg-background-secondary ${
                isExpanded
                  ? "flex-[3.5] border-accent ring-1 ring-accent/15"
                  : "flex-[1] border-border-main hover:border-border-hover"
              }`}
              style={{ transformOrigin: "left center" }}
            >
              {/* Pillar Image Background Cover */}
              <div
                className={`absolute inset-0 z-0 transition-opacity duration-700 ${isExpanded ? "opacity-15" : "opacity-0 pointer-events-none"}`}
              >
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
              </div>

              <div className="relative z-10">
                <div className="flex justify-between items-baseline border-b border-border-main pb-4 mb-6">
                  <h3 className="text-2xl font-light text-text-primary tracking-wide">
                    {pillar.title}
                  </h3>
                  {!isExpanded && (
                    <span className="text-xs text-text-muted font-mono">➔</span>
                  )}
                </div>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ delay: 0.2 }}
                      className="grid grid-cols-2 gap-12 mt-6"
                    >
                      <div className="space-y-4">
                        <div>
                          <span className="text-[10px] uppercase tracking-widest text-text-muted block">
                            Mission Profile
                          </span>
                          <p className="text-sm text-text-secondary font-light leading-relaxed mt-1">
                            {pillar.mission}
                          </p>
                        </div>
                        <div>
                          <span className="text-[10px] uppercase tracking-widest text-text-muted block">
                            Operational Vector Layers
                          </span>
                          <ul className="space-y-1.5 mt-2">
                            {pillar.operations.map((op, idx) => (
                              <li
                                key={idx}
                                className="text-xs text-text-muted flex items-center gap-2"
                              >
                                <span className="w-1 h-1 bg-accent rounded-full" />{" "}
                                {op}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <span className="text-[10px] uppercase tracking-widest text-text-muted block">
                            Human Capital Oversight
                          </span>
                          <p className="text-xs text-text-muted font-light leading-relaxed mt-1">
                            {pillar.team}
                          </p>
                        </div>
                        <div className="p-4 bg-black border border-border-main">
                          <span className="text-[10px] uppercase tracking-widest text-accent block">
                            Verified Milestone Metrics
                          </span>
                          <ul className="space-y-1.5 mt-2">
                            {pillar.achievements.map((ach, idx) => (
                              <li
                                key={idx}
                                className="text-xs text-text-secondary font-light"
                              >
                                ✓ {ach}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="relative z-10 pt-4 border-t border-border-main flex justify-between items-center"
                >
                  <div>
                    <span className="text-[10px] uppercase text-text-muted block">
                      Integration Window
                    </span>
                    <p className="text-xs text-text-secondary font-light mt-0.5">
                      {pillar.opportunities[0] || ""}
                    </p>
                  </div>
                  <button className="text-xs font-mono text-accent hover:underline flex items-center gap-1">
                    Audit Blueprint <Minimize2 size={12} className="ml-1" />
                  </button>
                </motion.div>
              )}
            </motion.div>
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
          <h2 className="text-4xl font-light tracking-tight text-text-primary mt-2">
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
                <h3 className="text-xl text-text-primary font-light mt-1">
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

// SECTION 5: OPERATIONAL FLOW (BLUEPRINT JOURNEY INTERACTION)
function OperationalFlow() {
  const { journeyStages, metadata } = verticalsConfig;
  const [activeStage, setActiveStage] = useState<number>(0);
  const currentStageData = journeyStages[activeStage];

  if (!currentStageData) {
    return null;
  }

  return (
    <section className="py-32 px-24 bg-black border-b border-border-main">
      <div className="mb-20">
        <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">
          {metadata.sectionTitles.journey}
        </span>
        <h2 className="text-4xl font-light tracking-tight text-text-primary mt-2">
          The Operational Pipeline
        </h2>
      </div>

      {/* Blueprint Navigation Header Map */}
      <div className="grid grid-cols-4 border-b border-border-main pb-6 mb-12 relative">
        {journeyStages.map((stage, idx) => {
          const isSelected = activeStage === idx;
          return (
            <button
              key={stage.id}
              onClick={() => setActiveStage(idx)}
              className="text-left relative group focus:outline-none"
            >
              <span className="text-xs font-mono text-text-muted block mb-1">
                0{idx + 1}
              </span>
              <span
                className={`text-base tracking-wide transition-colors ${isSelected ? "text-accent font-normal" : "text-text-muted group-hover:text-text-secondary"}`}
              >
                {stage.stageName}
              </span>
              {isSelected && (
                <motion.div
                  layoutId="blueprintLine"
                  className="absolute -bottom-[26px] inset-x-0 h-[2px] bg-accent"
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Blueprint Unfolding Panel Sheet */}
      <div className="bg-background-secondary border border-border-main p-10 min-h-[350px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: bezierEasing }}
            className="grid grid-cols-3 gap-12"
          >
            <div className="space-y-3">
              <span className="text-[10px] text-text-muted uppercase tracking-widest block">
                Operational Responsibility Pipeline
              </span>
              <ul className="space-y-2">
                {currentStageData.responsibilities.map((resp, i) => (
                  <li
                    key={i}
                    className="text-xs text-text-secondary font-light flex items-start gap-2 leading-relaxed"
                  >
                    <span className="w-1 h-1 bg-border-main rounded-full mt-1.5 flex-shrink-0" />{" "}
                    {resp}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <div>
                <span className="text-[10px] text-text-muted uppercase tracking-widest block">
                  Underlying Telemetry Tech Stack
                </span>
                <p className="text-xs text-text-muted font-light mt-1.5 leading-relaxed">
                  {currentStageData.technology}
                </p>
              </div>
              <div>
                <span className="text-[10px] text-text-muted uppercase tracking-widest block">
                  Human Capital Involvement
                </span>
                <p className="text-xs text-text-muted font-light mt-1.5 leading-relaxed">
                  {currentStageData.people}
                </p>
              </div>
            </div>

            <div className="border-l border-border-main pl-8 flex flex-col justify-between h-full bg-gradient-to-r from-white/[0.01] to-transparent p-4">
              <div>
                <span className="text-[10px] text-accent uppercase tracking-widest block font-semibold">
                  Validated System Outcome
                </span>
                <p className="text-lg text-text-primary font-light mt-3 leading-snug">
                  {currentStageData.outcome}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
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
          <h2 className="text-4xl font-light tracking-tight text-text-primary mt-2">
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
    <section className="py-32 px-24 bg-black border-b border-border-main grid grid-cols-12 gap-16 items-start">
      <div className="col-span-4 sticky top-32">
        <span className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">
          {metadata.sectionTitles.faq}
        </span>
        <h2 className="text-4xl font-light tracking-tight text-text-primary mt-2">
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
              className="cursor-pointer bg-background-main border border-border-main p-6 transition-all duration-300 hover:border-border-hover"
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
                    className="overflow-hidden border-t border-border-main pt-4"
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
    <section className="py-44 px-24 bg-black text-center relative overflow-hidden">
      <div className="max-w-3xl mx-auto space-y-8 relative z-10">
        <h2 className="text-4xl lg:text-5xl font-light tracking-tight text-text-secondary">
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
            className="px-8 py-4 bg-accent text-white text-xs uppercase tracking-widest font-semibold transition-transform active:scale-[0.985] inline-block"
          >
            {closingCTA.ctaPrimary.label}
          </a>
          <a
            href={closingCTA.ctaSecondary.href}
            className="px-8 py-4 bg-transparent text-white border border-border-main text-xs uppercase tracking-widest font-semibold hover:border-white transition-colors inline-block"
          >
            {closingCTA.ctaSecondary.label}
          </a>
        </div>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(#111112_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none opacity-30" />
    </section>
  );
}
