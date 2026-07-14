"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  ChevronRight,
  MapPin,
  CheckCircle,
  FileText,
  Globe,
  Building,
  Target,
} from "lucide-react";
import {
  pillars,
  partnershipModels,
  regionalRegions,
  journeyStations,
  successStories,
  faqs,
} from "@/features/partners/partners.data";

const bezierEasing = [0.25, 1, 0.5, 1];

export default function PartnersDesktop() {
  return (
    <div className="bg-[#0D0D0E] text-[#F3F4F6] font-sans antialiased selection:bg-[#E25822] selection:text-white overflow-hidden">
      <PartnersHero />
      <WhyPartner />
      <OpportunityExplorer />
      <GrowthNetwork />
      <PartnerJourney />
      <SuccessStories />
      <FAQInteractive />
      <PartnerApplication />
      <ClosingCTA />
    </div>
  );
}

// SECTION 1: HERO
function PartnersHero() {
  return (
    <section className="relative h-screen flex items-center justify-start pl-24 pr-12 overflow-hidden bg-black">
      <div className="absolute inset-0 z-0 opacity-45 scale-105 motion-safe:animate-[pulse_8s_ease-in-out_infinite]">
        <Image
          src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2000&auto=format&fit=crop"
          alt="Premium Retail Architecture"
          fill
          priority
          className="object-cover object-center transform transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl space-y-8">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: bezierEasing }}
          className="text-xs uppercase tracking-[0.3em] text-[#E25822] font-semibold block"
        >
          Exclusive Commercial Syndication
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: bezierEasing }}
          className="text-6xl lg:text-7xl font-light tracking-tight leading-[1.05] text-white max-w-3xl"
        >
          Build The Future Of <br />
          <span className="font-serif italic font-normal text-stone-300">
            Fashion Retail
          </span>{" "}
          Together.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: bezierEasing }}
          className="text-lg text-stone-400 font-light max-w-xl leading-relaxed"
        >
          Align with an enterprise omnichannel network engineered for luxury
          retail operators, spatial innovators, and visionaries looking to scale
          global commercial hubs.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: bezierEasing }}
          className="flex items-center gap-8 pt-4"
        >
          <a
            href="#application"
            className="group relative px-8 py-4 bg-[#E25822] text-white text-sm tracking-wider font-medium overflow-hidden transition-transform duration-300 active:scale-[0.98]"
          >
            <span className="relative z-10 flex items-center gap-2">
              Become A Partner{" "}
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </span>
          </a>
          <a
            href="#models"
            className="group text-sm tracking-wider font-medium text-white/80 hover:text-white transition-colors duration-300 relative py-2"
          >
            Explore Partnership Models
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#E25822] transition-all duration-300 group-hover:w-full" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// SECTION 2: WHY PARTNER (INTERACTIVE EDITORIAL CANVAS)
function WhyPartner() {
  const [activePillar, setActivePillar] = useState<string>(pillars[0].id);

  return (
    <section className="py-32 px-24 bg-[#0D0D0E] border-b border-white/5">
      <div className="mb-20">
        <span className="text-xs uppercase tracking-[0.2em] text-[#E25822] font-semibold">
          Strategic Foundations
        </span>
        <h2 className="text-4xl font-light tracking-tight text-white mt-2">
          Why Partner With Us
        </h2>
      </div>

      <div className="grid grid-cols-12 gap-12 items-start">
        {/* Navigation Sidebar */}
        <div className="col-span-5 space-y-2 border-l border-white/10">
          {pillars.map((pillar) => {
            const isActive = activePillar === pillar.id;
            return (
              <button
                key={pillar.id}
                onClick={() => setActivePillar(pillar.id)}
                className="w-full text-left py-6 px-6 relative block group transition-all"
                aria-expanded={isActive}
              >
                {isActive && (
                  <motion.div
                    layoutId="activePillarBar"
                    className="absolute inset-y-0 left-0 w-[2px] bg-[#E25822]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <h3
                  className={`text-xl font-light tracking-wide transition-colors duration-300 ${isActive ? "text-white font-normal" : "text-stone-500 group-hover:text-stone-300"}`}
                >
                  {pillar.title}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Dynamic Canvas Presentation */}
        <div className="col-span-7 bg-[#131315] p-10 relative overflow-hidden min-h-[480px] flex flex-col justify-between border border-white/5">
          <AnimatePresence mode="wait">
            {pillars.map((pillar) => {
              if (pillar.id !== activePillar) return null;
              return (
                <motion.div
                  key={pillar.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: bezierEasing }}
                  className="space-y-8 flex flex-col justify-between h-full"
                >
                  <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <p className="text-stone-300 font-light leading-relaxed text-base">
                        {pillar.description}
                      </p>
                      <div className="pt-4 border-t border-white/10">
                        <span className="text-xs text-stone-500 uppercase tracking-widest block">
                          Measurable Impact
                        </span>
                        <span className="text-xl text-[#E25822] font-medium block mt-1">
                          {pillar.impact}
                        </span>
                      </div>
                    </div>
                    <div className="relative h-48 w-full overflow-hidden border border-white/10">
                      <Image
                        src={pillar.image}
                        alt={pillar.title}
                        fill
                        className="object-cover scale-100 hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>

                  <div className="bg-black/40 p-5 border-l-2 border-stone-600 mt-6">
                    <span className="text-xs uppercase tracking-widest text-stone-400 font-semibold block mb-1">
                      Operational Reality
                    </span>
                    <p className="text-xs text-stone-400 italic font-light leading-relaxed">
                      {pillar.example}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

// SECTION 3: PARTNERSHIP MODELS (ARCHITECTURAL ROTATING PANELS)
function OpportunityExplorer() {
  const [openModel, setOpenModel] = useState<string | null>(
    partnershipModels[0].id,
  );

  return (
    <section
      id="models"
      className="py-32 px-24 bg-black border-b border-white/5"
    >
      <div className="mb-20 text-center max-w-xl mx-auto">
        <span className="text-xs uppercase tracking-[0.2em] text-[#E25822] font-semibold">
          Deployment Matrices
        </span>
        <h2 className="text-4xl font-light tracking-tight text-white mt-2">
          Sculpted Frameworks
        </h2>
      </div>

      <div className="grid grid-cols-3 gap-8">
        {partnershipModels.map((model) => {
          const isOpen = openModel === model.id;
          return (
            <motion.div
              key={model.id}
              layout
              onClick={() => setOpenModel(isOpen ? null : model.id)}
              className={`cursor-pointer border text-left p-8 transition-all duration-500 bg-[#0E0E0F] relative overflow-hidden flex flex-col justify-between group ${
                isOpen
                  ? "border-[#E25822] col-span-1 ring-1 ring-[#E25822]/20"
                  : "border-white/10 hover:border-white/20"
              }`}
              style={{ transformOrigin: "center center" }}
              whileHover={{
                rotateY: isOpen ? 0 : 1.5,
                scale: isOpen ? 1 : 1.01,
              }}
              transition={{ duration: 0.4, ease: bezierEasing }}
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-light tracking-wide text-white">
                    {model.title}
                  </h3>
                  <ChevronRight
                    size={20}
                    className={`text-stone-500 transition-transform duration-300 ${isOpen ? "rotate-90 text-[#E25822]" : ""}`}
                  />
                </div>

                <p className="text-sm text-stone-400 font-light leading-relaxed mb-6">
                  {model.suitability}
                </p>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: bezierEasing }}
                      className="space-y-6 pt-6 border-t border-white/10 overflow-hidden"
                    >
                      <div>
                        <span className="text-[10px] uppercase tracking-widest text-stone-500 block mb-2">
                          Prerequisites
                        </span>
                        <ul className="space-y-1.5">
                          {model.requirements.map((req, idx) => (
                            <li
                              key={idx}
                              className="text-xs text-stone-300 flex items-center gap-2"
                            >
                              <span className="w-1 h-1 bg-[#E25822] rounded-full" />{" "}
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <span className="text-[10px] uppercase tracking-widest text-stone-500 block mb-2">
                          Allocated Benefits
                        </span>
                        <ul className="space-y-1.5">
                          {model.benefits.map((benefit, idx) => (
                            <li
                              key={idx}
                              className="text-xs text-stone-300 flex items-center gap-2"
                            >
                              <CheckCircle
                                size={10}
                                className="text-[#E25822]"
                              />{" "}
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-3 bg-black border border-white/5">
                        <span className="text-[10px] uppercase tracking-widest text-[#E25822] block mb-1">
                          Ecosystem Support
                        </span>
                        <p className="text-xs text-stone-400 font-light leading-relaxed">
                          {model.support}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {isOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-8 pt-4 border-t border-white/5 text-left"
                >
                  <span className="text-[10px] uppercase tracking-widest text-stone-500 block mb-1">
                    Operational Trajectory
                  </span>
                  <p className="text-xs text-[#E25822] font-mono tracking-tight">
                    {model.journey}
                  </p>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

// SECTION 4: GROWTH NETWORK (MAP INTERACTION WITHOUT HEAVY INTERFACES)
function GrowthNetwork() {
  const [selectedRegion, setSelectedRegion] = useState<string>(
    regionalRegions[0].id,
  );
  const activeRegionData = regionalRegions.find(
    (r) => r.id === selectedRegion,
  )!;

  return (
    <section className="py-32 px-24 bg-[#0D0D0E] border-b border-white/5 grid grid-cols-12 gap-16 items-center">
      {/* Editorial Overview Data */}
      <div className="col-span-5 space-y-8">
        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-[#E25822] font-semibold">
            Territorial Presence
          </span>
          <h2 className="text-4xl font-light tracking-tight text-white mt-2">
            The Growth Matrix
          </h2>
        </div>

        <p className="text-stone-400 font-light leading-relaxed text-sm">
          We actively track, map, and secure prime retail nodes across emerging
          high-income luxury sectors globally. Select a corridor to audit
          current footprints and dynamic pipeline allocations.
        </p>

        <div className="p-8 bg-[#131315] border border-white/5 space-y-6">
          <h3 className="text-xl text-white font-light border-b border-white/10 pb-3 flex items-center gap-2">
            <Globe size={18} className="text-[#E25822]" />{" "}
            {activeRegionData.name}
          </h3>

          <div>
            <span className="text-xs text-stone-500 uppercase tracking-wider block">
              Established Footprint
            </span>
            <p className="text-sm text-stone-200 mt-1">
              {activeRegionData.presence}
            </p>
          </div>

          <div>
            <span className="text-xs text-stone-500 uppercase tracking-wider block">
              Targeted Pipeline Opportunities
            </span>
            <p className="text-sm text-[#E25822] font-light mt-1">
              {activeRegionData.opportunities}
            </p>
          </div>

          <div className="pt-4 border-t border-white/10">
            <span className="text-xs text-stone-500 uppercase tracking-wider block">
              Macro Strategic Vision
            </span>
            <p className="text-xs text-stone-400 italic mt-1 leading-relaxed">
              {activeRegionData.vision}
            </p>
          </div>
        </div>
      </div>

      {/* Abstract Map Canvas */}
      <div className="col-span-7 relative h-[500px] bg-black border border-white/5 rounded-none overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(#1e1e21_1px,transparent_1px)] [background-size:24px_24px] opacity-60" />

        {/* Decorative Constellation Vectors */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
          <line
            x1="45%"
            y1="30%"
            x2="30%"
            y2="55%"
            stroke="white"
            strokeWidth="1"
            strokeDasharray="4"
          />
          <line
            x1="30%"
            y1="55%"
            x2="50%"
            y2="80%"
            stroke="white"
            strokeWidth="1"
            strokeDasharray="4"
          />
          <line
            x1="50%"
            y1="80%"
            x2="75%"
            y2="45%"
            stroke="white"
            strokeWidth="1"
            strokeDasharray="4"
          />
          <line
            x1="75%"
            y1="45%"
            x2="45%"
            y2="30%"
            stroke="white"
            strokeWidth="1"
            strokeDasharray="4"
          />
        </svg>

        {regionalRegions.map((region) => {
          const isSelected = selectedRegion === region.id;
          return (
            <button
              key={region.id}
              onClick={() => setSelectedRegion(region.id)}
              className="absolute transform -translate-x-1/12 -translate-y-1/12 group focus:outline-none"
              style={{
                left: `${region.coordinates.x}%`,
                top: `${region.coordinates.y}%`,
              }}
            >
              <span className="relative flex h-5 w-5 items-center justify-center">
                {isSelected && (
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E25822] opacity-40" />
                )}
                <span
                  className={`relative inline-flex rounded-full h-3 w-3 transition-transform duration-300 group-hover:scale-125 ${isSelected ? "bg-[#E25822]" : "bg-stone-600"}`}
                />
              </span>
              <span
                className={`absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] tracking-widest uppercase px-2 py-1 bg-[#131315] border transition-colors duration-300 ${isSelected ? "border-[#E25822] text-white" : "border-white/10 text-stone-400"}`}
              >
                {region.name}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}

// SECTION 5: PARTNER JOURNEY (STATIONS REVEAL)
function PartnerJourney() {
  const [activeStep, setActiveStep] = useState<string | null>(
    journeyStations[0].id,
  );

  return (
    <section className="py-32 px-24 bg-black border-b border-white/5">
      <div className="mb-20">
        <span className="text-xs uppercase tracking-[0.2em] text-[#E25822] font-semibold">
          Deployment Pipelines
        </span>
        <h2 className="text-4xl font-light tracking-tight text-white mt-2">
          The Operational Milestones
        </h2>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {journeyStations.map((station) => {
          const isOpen = activeStep === station.id;
          return (
            <div
              key={station.id}
              onClick={() => setActiveStep(isOpen ? null : station.id)}
              className={`cursor-pointer p-8 border transition-all duration-500 relative flex flex-col justify-between min-h-[300px] ${
                isOpen
                  ? "bg-[#131315] border-[#E25822]"
                  : "bg-[#0A0A0B] border-white/5 hover:border-white/15"
              }`}
            >
              <div>
                <div className="flex justify-between items-baseline mb-6">
                  <span className="text-xs font-mono tracking-wider text-stone-500">
                    {station.step}
                  </span>
                  <span className="text-xs uppercase tracking-widest text-[#E25822] font-medium">
                    {station.phase}
                  </span>
                </div>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-4"
                    >
                      <p className="text-xs text-stone-300 leading-relaxed font-light">
                        {station.process}
                      </p>
                      <div className="pt-3 border-t border-white/10">
                        <span className="text-[10px] uppercase text-stone-500 block">
                          Duration Matrix
                        </span>
                        <span className="text-xs text-white block mt-0.5">
                          {station.timeline}
                        </span>
                      </div>
                    </motion.div>
                  ) : (
                    <p className="text-sm text-stone-400 font-light line-clamp-3">
                      Click to open onboarding sequence and auditing protocols.
                    </p>
                  )}
                </AnimatePresence>
              </div>

              {isOpen && (
                <div className="pt-4 border-t border-white/5 mt-4">
                  <span className="text-[10px] uppercase text-stone-500 block">
                    Support Protocol
                  </span>
                  <p className="text-xs text-stone-400 font-light mt-0.5">
                    {station.supportOffered}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

// SECTION 6: SUCCESS STORIES (EDITORIAL MOTION SLIDES)
function SuccessStories() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextStory = () => {
    setCurrentIndex((prev) => (prev + 1) % successStories.length);
  };

  return (
    <section className="py-32 px-24 bg-[#0D0D0E] border-b border-white/5">
      <div className="mb-20 flex justify-between items-end">
        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-[#E25822] font-semibold">
            Syndicate Case Briefings
          </span>
          <h2 className="text-4xl font-light tracking-tight text-white mt-2">
            Validated Outcomes
          </h2>
        </div>
        <button
          onClick={nextStory}
          className="group flex items-center gap-3 text-xs tracking-widest uppercase font-medium text-stone-400 hover:text-white transition-colors duration-300"
        >
          Next Dossier{" "}
          <ChevronRight
            size={14}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>
      </div>

      <div className="bg-black border border-white/5 min-h-[500px] relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-12 h-full min-h-[500px]"
          >
            {/* Visual Narrative Layout */}
            <div className="col-span-5 relative h-full min-h-[500px]">
              <Image
                src={successStories[currentIndex].image}
                alt={successStories[currentIndex].partner}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <span className="text-xs text-[#E25822] uppercase tracking-widest font-mono font-semibold">
                  Verified Case Study
                </span>
                <h3 className="text-2xl text-white font-light mt-1">
                  {successStories[currentIndex].partner}
                </h3>
                <p className="text-xs text-stone-400 mt-0.5">
                  {successStories[currentIndex].role}
                </p>
              </div>
            </div>

            {/* Editorial breakdown context */}
            <div className="col-span-7 p-12 flex flex-col justify-between space-y-12 bg-black">
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] text-stone-500 uppercase tracking-widest block mb-1">
                    Inherent Impediment
                  </span>
                  <p className="text-sm text-stone-300 font-light leading-relaxed">
                    {successStories[currentIndex].challenge}
                  </p>
                </div>

                <div>
                  <span className="text-[10px] text-stone-500 uppercase tracking-widest block mb-1">
                    The Strategic Vector
                  </span>
                  <p className="text-sm text-stone-300 font-light leading-relaxed">
                    {successStories[currentIndex].journey}
                  </p>
                </div>
              </div>

              <div className="border-t border-white/10 pt-6 bg-gradient-to-r from-[#131315] to-transparent p-6 border-l-2 border-[#E25822]">
                <span className="text-xs text-[#E25822] uppercase tracking-widest block font-medium">
                  Quantified Asset Optimization
                </span>
                <p className="text-xl text-white font-light mt-1 leading-normal">
                  {successStories[currentIndex].outcome}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

// SECTION 7: FAQ (FLOATING STRUCTURAL OBJECTS)
function FAQInteractive() {
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
                  className={`text-stone-500 transition-transform duration-300 transform ${isOpen ? "rotate-45 text-[#E25822]" : ""}`}
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

// SECTION 8: APPLICATION CONCIERGE (PROGRESSIVE REVEAL)
function PartnerApplication() {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <section
      id="application"
      className="py-32 px-24 bg-[#0D0D0E] border-b border-white/5 text-center"
    >
      <div className="max-w-2xl mx-auto">
        {!isRevealed ? (
          <div className="space-y-8 py-12">
            <span className="text-xs uppercase tracking-[0.2em] text-[#E25822] font-semibold">
              Vetting Channels
            </span>
            <h2 className="text-4xl font-light tracking-tight text-white">
              Initiate Structural Onboarding
            </h2>
            <p className="text-stone-400 font-light text-sm max-w-md mx-auto leading-relaxed">
              Access the exclusive underwriting desk. Complete structural
              alignment reviews to establish connectivity.
            </p>
            <button
              onClick={() => setIsRevealed(true)}
              className="px-10 py-4 bg-white text-black text-xs uppercase tracking-widest font-semibold hover:bg-stone-200 transition-colors duration-300"
            >
              Open Partnership Registry
            </button>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: bezierEasing }}
            className="text-left bg-black border border-white/5 p-10 space-y-8"
          >
            <div className="border-b border-white/10 pb-4 flex justify-between items-baseline">
              <h3 className="text-lg text-white font-light tracking-wide">
                Commercial Underwriting Intention Form
              </h3>
              <button
                onClick={() => setIsRevealed(false)}
                className="text-xs text-stone-500 hover:text-white"
              >
                Collapse Form
              </button>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="grid grid-cols-2 gap-6"
            >
              <div className="space-y-1">
                <label className="text-[10px] uppercase text-stone-500 tracking-wider">
                  Legal Entity Principle Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Julian Vance"
                  className="w-full bg-[#0D0D0E] border border-white/10 p-3 text-xs text-white focus:outline-none focus:border-[#E25822] transition-colors"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase text-stone-500 tracking-wider">
                  Corporate Nomenclature
                </label>
                <input
                  type="text"
                  placeholder="e.g. Vanguard Retail Ltd"
                  className="w-full bg-[#0D0D0E] border border-white/10 p-3 text-xs text-white focus:outline-none focus:border-[#E25822] transition-colors"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase text-stone-500 tracking-wider">
                  Targeted Expansion City
                </label>
                <input
                  type="text"
                  placeholder="e.g. New Delhi"
                  className="w-full bg-[#0D0D0E] border border-white/10 p-3 text-xs text-white focus:outline-none focus:border-[#E25822] transition-colors"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase text-stone-500 tracking-wider">
                  Direct Secure Email
                </label>
                <input
                  type="email"
                  placeholder="e.g. vance@vanguard.com"
                  className="w-full bg-[#0D0D0E] border border-white/10 p-3 text-xs text-white focus:outline-none focus:border-[#E25822] transition-colors"
                />
              </div>
              <div className="col-span-2 space-y-1">
                <label className="text-[10px] uppercase text-stone-500 tracking-wider">
                  Luxury Portfolio &amp; Capital Execution Experience
                </label>
                <textarea
                  rows={3}
                  placeholder="Outline high-end operational history and current asset networks..."
                  className="w-full bg-[#0D0D0E] border border-white/10 p-3 text-xs text-white focus:outline-none focus:border-[#E25822] transition-colors resize-none"
                />
              </div>
              <div className="col-span-2 pt-4">
                <button
                  type="submit"
                  className="w-full bg-[#E25822] text-white text-xs uppercase tracking-widest font-semibold py-4 hover:bg-[#c94b1b] transition-colors duration-300"
                >
                  Transmit Intent Profile
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </div>
    </section>
  );
}

// SECTION 9: CLOSING EDITORIAL CTA
function ClosingCTA() {
  return (
    <section className="py-44 px-24 bg-black text-center relative overflow-hidden">
      <div className="max-w-3xl mx-auto space-y-6 relative z-10">
        <h2 className="text-4xl lg:text-5xl font-light tracking-tight text-stone-200">
          Let’s Curate the Next Epoch <br />
          <span className="font-serif italic font-normal text-stone-400">
            of Global Commerce
          </span>
          .
        </h2>
        <p className="text-stone-500 font-light text-xs tracking-widest uppercase pt-2">
          Substantial opportunities require rigorous alignment.
        </p>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(#111112_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none opacity-30" />
    </section>
  );
}
