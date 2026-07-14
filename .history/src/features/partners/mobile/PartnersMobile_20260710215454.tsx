"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  ChevronRight,
  CheckCircle,
  Globe,
  Award,
  HelpCircle,
} from "lucide-react";
import {
  pillars,
  partnershipModels,
  regionalRegions,
  journeyStations,
  successStories,
  faqs,
} from "@/data/partners.data";

const bezierEasing = [0.25, 1, 0.5, 1];

export default function PartnersMobile() {
  return (
    <div className="bg-[#0D0D0E] text-[#F3F4F6] font-sans antialiased overflow-x-hidden selection:bg-[#E25822]">
      <PartnersHeroMobile />
      <OpportunityWheel />
      <ModelsStack />
      <GrowthMapReveal />
      <JourneySteps />
      <StoriesCarousel />
      <FAQReveal />
      <ClosingCTA />
      <PartnerFormDrawer />
    </div>
  );
}

// MOBILE HERO
function PartnersHeroMobile() {
  return (
    <section className="relative h-[85vh] flex flex-col justify-end px-6 pb-12 bg-black overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-40">
        <Image
          src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1000&auto=format&fit=crop"
          alt="Retail Design"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
      </div>

      <div className="relative z-10 space-y-5">
        <span className="text-[10px] uppercase tracking-[0.25em] text-[#E25822] font-semibold block">
          Commercial Integration
        </span>
        <h1 className="text-4xl font-light tracking-tight text-white leading-[1.1]">
          Shape Retail <br />
          <span className="font-serif italic text-stone-300">Together</span>.
        </h1>
        <p className="text-sm text-stone-400 font-light max-w-sm leading-relaxed">
          Align with an enterprise operational canvas built exclusively for
          luxury boutique deployment and regional market control.
        </p>
        <div className="pt-2">
          <a
            href="#apply-drawer"
            className="inline-block px-6 py-3.5 bg-[#E25822] text-white text-xs font-semibold uppercase tracking-widest"
          >
            Become A Partner
          </a>
        </div>
      </div>
    </section>
  );
}

// OPPORTUNITY WHEEL (CIRCULAR DISCOVERY PARADIGM)
function OpportunityWheel() {
  const [selectedSeg, setSelectedSeg] = useState(0);
  const activeData = pillars[selectedSeg];

  return (
    <section className="py-20 px-6 bg-[#0D0D0E] border-b border-white/5 space-y-8">
      <div>
        <span className="text-[10px] uppercase tracking-widest text-[#E25822] block font-semibold">
          Discovery Vectors
        </span>
        <h2 className="text-2xl font-light text-white tracking-tight mt-1">
          Foundational Vectors
        </h2>
      </div>

      {/* Selector Line Elements */}
      <div className="flex space-x-2 overflow-x-auto pb-4 scrollbar-none border-b border-white/5">
        {pillars.map((p, idx) => (
          <button
            key={p.id}
            onClick={() => setSelectedSeg(idx)}
            className={`text-xs uppercase tracking-widest px-4 py-2 flex-shrink-0 border transition-all ${
              selectedSeg === idx
                ? "border-[#E25822] bg-[#E25822]/10 text-white"
                : "border-white/5 text-stone-500"
            }`}
          >
            {p.title.split(" ")[0]}
          </button>
        ))}
      </div>

      {/* Interactive Reveal Area */}
      <div className="bg-black p-6 border border-white/5 space-y-4">
        <p className="text-sm text-stone-300 font-light leading-relaxed">
          {activeData.description}
        </p>

        <div className="pt-4 border-t border-white/10 flex justify-between items-baseline">
          <span className="text-[10px] uppercase text-stone-500">
            Metric Target
          </span>
          <span className="text-sm font-semibold text-[#E25822]">
            {activeData.impact}
          </span>
        </div>
      </div>
    </section>
  );
}

// PARTNERSHIP MODELS (SCULPTED VERTICAL MILESTONES)
function ModelsStack() {
  const [activeModel, setActiveModel] = useState<string | null>(
    partnershipModels[0].id,
  );

  return (
    <section className="py-20 px-6 bg-black border-b border-white/5 space-y-8">
      <div>
        <span className="text-[10px] uppercase tracking-widest text-[#E25822] block font-semibold">
          Strategic Arrays
        </span>
        <h2 className="text-2xl font-light text-white tracking-tight mt-1">
          Partnership Formats
        </h2>
      </div>

      <div className="space-y-4">
        {partnershipModels.map((model) => {
          const isOpen = activeModel === model.id;
          return (
            <div
              key={model.id}
              className={`border transition-all duration-300 p-5 ${isOpen ? "border-[#E25822] bg-[#0E0E0F]" : "border-white/5 bg-[#0D0D0E]"}`}
              onClick={() => setActiveModel(isOpen ? null : model.id)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-light text-white tracking-wide">
                  {model.title}
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
                    className="overflow-hidden pt-4 mt-4 border-t border-white/10 space-y-4"
                  >
                    <p className="text-xs text-stone-400 font-light leading-relaxed">
                      {model.suitability}
                    </p>

                    <div className="space-y-1">
                      <span className="text-[9px] uppercase text-stone-500 tracking-wider block">
                        Allocations
                      </span>
                      {model.benefits.slice(0, 2).map((b, i) => (
                        <div
                          key={i}
                          className="text-xs text-stone-300 flex items-center gap-2"
                        >
                          <CheckCircle size={10} className="text-[#E25822]" />{" "}
                          {b}
                        </div>
                      ))}
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

// REGIONAL REVEAL MODULE
function GrowthMapReveal() {
  const [activeZone, setActiveZone] = useState<string | null>(
    regionalRegions[0].id,
  );
  const currentZone = regionalRegions.find((r) => r.id === activeZone);

  return (
    <section className="py-20 px-6 bg-[#0D0D0E] border-b border-white/5 space-y-6">
      <div>
        <span className="text-[10px] uppercase tracking-widest text-[#E25822] block font-semibold">
          Spatial Allocations
        </span>
        <h2 className="text-2xl font-light text-white tracking-tight mt-1">
          Growth Footprint
        </h2>
      </div>

      <div className="grid grid-cols-4 gap-2">
        {regionalRegions.map((r) => (
          <button
            key={r.id}
            onClick={() => setActiveZone(r.id)}
            className={`py-2 text-[10px] uppercase tracking-widest font-mono border ${activeZone === r.id ? "border-[#E25822] bg-black text-white" : "border-white/5 text-stone-500"}`}
          >
            {r.name.split(" ")[0]}
          </button>
        ))}
      </div>

      <div className="bg-black p-5 border border-white/5 min-h-[180px] flex flex-col justify-between">
        {currentZone ? (
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-white border-b border-white/5 pb-2">
              <Globe size={14} className="text-[#E25822]" />
              <span className="text-xs uppercase tracking-wider">
                {currentZone.name} Matrix
              </span>
            </div>
            <p className="text-xs text-stone-300 font-light leading-relaxed">
              <span className="text-stone-500 block text-[9px] uppercase tracking-widest mb-0.5">
                Presence
              </span>
              {currentZone.presence}
            </p>
            <p className="text-xs text-[#E25822] font-light leading-relaxed">
              <span className="text-stone-500 block text-[9px] uppercase tracking-widest mb-0.5">
                Pipeline Corridor
              </span>
              {currentZone.opportunities}
            </p>
          </div>
        ) : (
          <p className="text-xs text-stone-500 italic">
            Select deployment tier grid above...
          </p>
        )}
      </div>
    </section>
  );
}

// JOURNEY PATH ACCORDION STRUCTURE
function JourneySteps() {
  const [openStep, setOpenStep] = useState<string | null>(
    journeyStations[0].id,
  );

  return (
    <section className="py-20 px-6 bg-black border-b border-white/5 space-y-8">
      <div>
        <span className="text-[10px] uppercase tracking-widest text-[#E25822] block font-semibold">
          Onboarding Pipelines
        </span>
        <h2 className="text-2xl font-light text-white tracking-tight mt-1">
          Sequential Stations
        </h2>
      </div>

      <div className="space-y-2">
        {journeyStations.map((station) => {
          const isOpen = openStep === station.id;
          return (
            <div
              key={station.id}
              onClick={() => setOpenStep(isOpen ? null : station.id)}
              className="bg-[#0D0D0E] border border-white/5 p-4 flex flex-col justify-between"
            >
              <div className="flex justify-between items-baseline">
                <span className="text-xs font-mono text-stone-600">
                  {station.step}
                </span>
                <span className="text-xs text-stone-200 font-light tracking-wide">
                  {station.phase}
                </span>
                <ChevronRight
                  size={14}
                  className={`text-[#E25822] transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}
                />
              </div>

              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="pt-4 mt-3 border-t border-white/5 space-y-2"
                >
                  <p className="text-xs text-stone-400 font-light leading-relaxed">
                    {station.process}
                  </p>
                  <div className="text-[10px] font-mono text-[#E25822] pt-1">
                    Window: {station.timeline}
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

// SUCCESS CAROUSEL SWIPER MOCK (VERTICAL COMPACT NARRATIVE)
function StoriesCarousel() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="py-20 px-6 bg-[#0D0D0E] border-b border-white/5 space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <span className="text-[10px] uppercase tracking-widest text-[#E25822] block font-semibold">
            Case Portfolios
          </span>
          <h2 className="text-2xl font-light text-white tracking-tight mt-1">
            Proven Results
          </h2>
        </div>
        <button
          onClick={() => setActiveIdx((activeIdx + 1) % successStories.length)}
          className="text-[10px] uppercase tracking-widest text-stone-400 font-medium border border-white/10 px-3 py-1"
        >
          Cycle Case
        </button>
      </div>

      <div className="bg-black border border-white/5 p-5 space-y-4">
        <div>
          <h3 className="text-base text-white font-light">
            {successStories[activeIdx].partner}
          </h3>
          <span className="text-[10px] text-[#E25822] uppercase tracking-wider font-mono block mt-0.5">
            {successStories[activeIdx].role}
          </span>
        </div>
        <p className="text-xs text-stone-400 font-light leading-relaxed italic">
          "{successStories[activeIdx].challenge}"
        </p>
        <div className="pt-3 border-t border-white/10 text-xs text-stone-200 font-light bg-[#131315] p-3 border-l-2 border-[#E25822]">
          {successStories[activeIdx].outcome}
        </div>
      </div>
    </section>
  );
}

// FLOATING CHIPS CHANNELS FOR FAQ
function FAQReveal() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

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

// CLOSING CALL TO ACTION
function ClosingCTA() {
  return (
    <section className="py-24 px-6 bg-black text-center space-y-4">
      <h2 className="text-2xl font-light text-stone-200 tracking-tight">
        Curate the Next Epoch <br />
        <span className="font-serif italic text-stone-400">
          of Luxury Commerce
        </span>
        .
      </h2>
      <p className="text-[10px] text-stone-500 uppercase tracking-widest">
        Rigorous Executive Alignment Required.
      </p>
    </section>
  );
}

// OVERLAY STICKY DISCOVERY TRIGGER LAYER
function PartnerFormDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="sticky bottom-0 inset-x-0 z-40 p-4 bg-gradient-to-t from-black to-transparent border-t border-white/5">
        <button
          onClick={() => setIsOpen(true)}
          id="apply-drawer"
          className="w-full bg-white text-black text-xs font-semibold uppercase tracking-widest py-4 text-center block"
        >
          Initialize Underwriting Form
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex flex-col justify-end">
            {/* Backdrop layer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black"
            />
            {/* Context Canvas Drawer Sheet */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative bg-[#0D0D0E] border-t border-white/10 p-6 space-y-6 max-h-[85vh] overflow-y-auto z-10"
            >
              <div className="flex justify-between items-center border-b border-white/10 pb-3">
                <span className="text-xs uppercase text-stone-400 tracking-widest font-mono">
                  Intent Assessment
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-xs text-[#E25822] font-semibold"
                >
                  Close
                </button>
              </div>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[9px] uppercase tracking-wider text-stone-500">
                    Legal Entity Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-black border border-white/10 p-3 text-xs text-white focus:outline-none focus:border-[#E25822]"
                    placeholder="e.g. Sterling Holdings"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[9px] uppercase tracking-wider text-stone-500">
                    Target Segment Corridor
                  </label>
                  <input
                    type="text"
                    className="w-full bg-black border border-white/10 p-3 text-xs text-white focus:outline-none focus:border-[#E25822]"
                    placeholder="e.g. West Zone Core Cities"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[9px] uppercase tracking-wider text-stone-500">
                    Secure Contact Email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-black border border-white/10 p-3 text-xs text-white focus:outline-none focus:border-[#E25822]"
                    placeholder="e.g. contact@sterling.com"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[9px] uppercase tracking-wider text-stone-500">
                    Commercial Footprint / Narrative
                  </label>
                  <textarea
                    rows={3}
                    className="w-full bg-black border border-white/10 p-3 text-xs text-white focus:outline-none focus:border-[#E25822] resize-none"
                    placeholder="Brief outline of operations..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#E25822] text-white text-xs uppercase tracking-widest font-semibold py-3.5 mt-2"
                >
                  Transmit Intent Profile
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
