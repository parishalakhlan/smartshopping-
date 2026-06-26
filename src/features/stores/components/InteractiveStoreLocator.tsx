// src/features/stores/components/InteractiveStoreLocator.tsx
"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { NORTH_INDIA_STORES, REGIONAL_FOOTPRINTS } from "../data/stores";
import { Phone, Compass, Clock, Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function InteractiveStoreLocator() {
  const [selectedState, setSelectedState] = useState<string>("All Cities");
  const [activeStoreId, setActiveStoreId] = useState<string>(
    NORTH_INDIA_STORES[0]?.id || "",
  );
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  const filteredStores = useMemo(() => {
    if (selectedState === "All Cities") return NORTH_INDIA_STORES;
    return NORTH_INDIA_STORES.filter(
      (store) => store.state.toLowerCase() === selectedState.toLowerCase(),
    );
  }, [selectedState]);

  const getChoroplethFill = (count: number, isSelected: boolean) => {
    if (isSelected)
      return "fill-[#F97316] stroke-[#163B65] stroke-[1.5px] drop-shadow-sm";
    if (count >= 12)
      return "fill-[#163B65]/20 hover:fill-[#163B65]/30 stroke-[#163B65]/10 stroke-[1px]";
    if (count >= 8)
      return "fill-[#163B65]/15 hover:fill-[#163B65]/25 stroke-[#163B65]/10 stroke-[1px]";
    if (count >= 5)
      return "fill-[#163B65]/10 hover:fill-[#163B65]/20 stroke-[#163B65]/10 stroke-[1px]";
    return "fill-[#163B65]/5 hover:fill-[#163B65]/15 stroke-[#163B65]/10 stroke-[1px]";
  };

  return (
    <section
      id="locator-workspace"
      className="w-full bg-[#FFFFFF] py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-6 font-sans"
    >
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch min-h-[720px]">
        {/* MAP PANEL (60%): Premium Spatial Interactive Base Canvas */}
        <div className="w-full lg:w-[60%] flex flex-col justify-between relative bg-[#F5F2EC] overflow-hidden border border-[#163B65]/10 p-6 shadow-sm">
          {/* Map Curation Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 z-20 w-full bg-[#FFFFFF]/95 backdrop-blur-md p-5 border border-[#163B65]/5 shadow-sm">
            <div className="text-left">
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#F97316] block mb-0.5">
                GEO-SPATIAL COVERAGE
              </span>
              <h3 className="font-serif text-xl text-[#163B65] font-bold tracking-tight">
                Select Operating Region
              </h3>
            </div>
            <button
              onClick={() => setSelectedState("All Cities")}
              className={`px-4 py-2 text-xs font-semibold transition-all duration-300 border rounded-none uppercase tracking-wider ${
                selectedState === "All Cities"
                  ? "bg-[#163B65] text-[#FFFFFF] border-[#163B65]"
                  : "bg-[#FFFFFF] text-[#163B65] border-[#163B65]/10 hover:border-[#163B65]"
              }`}
            >
              Show All Showrooms ({NORTH_INDIA_STORES.length})
            </button>
          </div>

          {/* Interactive Core SVG Canvas Space */}
          <div className="relative flex-1 w-full min-h-[500px] flex items-center justify-center p-4">
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#163B65_1px,transparent_1px)] [background-size:20px_20px]" />
            <div className="absolute inset-0 opacity-[0.015] bg-[linear-gradient(to_right,#163B65_1px,transparent_1px)] [background-size:100px_100px]" />

            {/* Premium Topology Abstract Underlay */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.04] grayscale filter contrast-125">
              <Image
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1000&q=80"
                alt="Topology Grid Reference Plate"
                fill
                sizes="(max-w-7xl) 60vw, 100vw"
                className="object-cover object-center scale-105"
                priority
              />
            </div>

            {/* Standard Luxury Linear Elevation Zoom Controls */}
            <div className="absolute bottom-6 left-6 z-20 flex flex-col bg-[#FFFFFF] border border-[#163B65]/10 p-1 shadow-md rounded-none">
              <button
                onClick={() => setZoomLevel((p) => Math.min(p + 0.2, 1.6))}
                className="p-2 hover:bg-[#F5F2EC] text-[#163B65] transition-colors duration-200"
                aria-label="Zoom In"
              >
                <Plus className="w-4 h-4" />
              </button>
              <div className="h-[1px] bg-[#163B65]/10 mx-1" />
              <button
                onClick={() => setZoomLevel((p) => Math.max(p - 0.2, 0.8))}
                className="p-2 hover:bg-[#F5F2EC] text-[#163B65] transition-colors duration-200"
                aria-label="Zoom Out"
              >
                <Minus className="w-4 h-4" />
              </button>
            </div>

            {/* Dynamic Vector Space View Wrapper Container */}
            <motion.div
              animate={{ scale: zoomLevel }}
              transition={{ type: "spring", stiffness: 220, damping: 26 }}
              className="w-full max-w-[460px] h-auto relative"
            >
              <svg
                viewBox="0 0 100 100"
                className="w-full h-auto drop-shadow-md"
              >
                <g className="transition-all duration-300">
                  {REGIONAL_FOOTPRINTS.map((footprint) => {
                    const isSelected =
                      selectedState.toLowerCase() ===
                      footprint.name.toLowerCase();
                    return (
                      <path
                        key={footprint.id}
                        d={footprint.svgPath}
                        className={`cursor-pointer transition-all duration-400 ease-out ${getChoroplethFill(footprint.count, isSelected)}`}
                        onClick={() => {
                          setSelectedState(footprint.name);
                          const matchingStore = NORTH_INDIA_STORES.find(
                            (s) =>
                              s.state.toLowerCase() ===
                              footprint.name.toLowerCase(),
                          );
                          if (matchingStore) setActiveStoreId(matchingStore.id);
                        }}
                      />
                    );
                  })}
                </g>
              </svg>

              {/* Precise Absolute Grid Coordinated Overlay Badges */}
              {REGIONAL_FOOTPRINTS.map((footprint) => {
                const isSelected =
                  selectedState.toLowerCase() === footprint.name.toLowerCase();
                return (
                  <div
                    key={`badge-${footprint.id}`}
                    style={{
                      top: `${footprint.labelY}%`,
                      left: `${footprint.labelX}%`,
                    }}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 pointer-events-auto z-10"
                  >
                    <button
                      onClick={() => {
                        setSelectedState(footprint.name);
                        const matchingStore = NORTH_INDIA_STORES.find(
                          (s) =>
                            s.state.toLowerCase() ===
                            footprint.name.toLowerCase(),
                        );
                        if (matchingStore) setActiveStoreId(matchingStore.id);
                      }}
                      className="flex flex-col items-center group focus:outline-none"
                    >
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center font-semibold text-xs transition-all duration-300 shadow-md ${
                          isSelected
                            ? "bg-[#F97316] text-[#FFFFFF] ring-4 ring-[#F97316]/20 scale-110"
                            : "bg-[#163B65] text-[#FFFFFF] group-hover:bg-[#F97316]"
                        }`}
                      >
                        {footprint.count}
                      </div>
                      <span
                        className={`text-[9px] font-bold uppercase tracking-wider mt-1.5 bg-[#FFFFFF]/95 px-1.5 py-0.5 shadow-sm border border-[#163B65]/5 ${
                          isSelected ? "text-[#F97316]" : "text-[#163B65]"
                        }`}
                      >
                        {footprint.name}
                      </span>
                    </button>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Infrastructure Verification Metadata Bar */}
          <div className="w-full text-right pt-3 border-t border-[#163B65]/10 text-[9px] text-[#475569]/60 font-medium uppercase tracking-widest">
            Spatial Network Registry Architecture Framework // 2026
          </div>
        </div>

        {/* LIST PANEL (40%): Balanced Magazine Card Interface Column */}
        <div className="w-full lg:w-[40%] flex flex-col space-y-6">
          {/* Quick Pill Filter System */}
          <div className="space-y-2 text-left">
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#F97316] block">
              Quick State Catalogs
            </span>
            <div className="flex flex-wrap gap-1.5">
              {["All Cities", ...REGIONAL_FOOTPRINTS.map((r) => r.name)].map(
                (stateName) => {
                  const isCurrent = selectedState === stateName;
                  return (
                    <button
                      key={stateName}
                      onClick={() => {
                        setSelectedState(stateName);
                        const matchingStore = NORTH_INDIA_STORES.find(
                          (s) =>
                            stateName === "All Cities" ||
                            s.state.toLowerCase() === stateName.toLowerCase(),
                        );
                        if (matchingStore) setActiveStoreId(matchingStore.id);
                      }}
                      className={`px-3 py-1.5 text-xs font-semibold transition-all duration-300 border rounded-none uppercase tracking-wider ${
                        isCurrent
                          ? "bg-[#163B65] text-[#FFFFFF] border-[#163B65] shadow-sm"
                          : "bg-[#FFFFFF] text-[#163B65] border-[#163B65]/10 hover:border-[#163B65]"
                      }`}
                    >
                      {stateName}
                    </button>
                  );
                },
              )}
            </div>
          </div>

          {/* High-Performance Smooth Dynamic Cards Scroller */}
          <div className="flex-1 overflow-y-auto space-y-4 max-h-[600px] pr-2 scrollbar-thin border-t border-[#163B65]/5 pt-2">
            <AnimatePresence mode="popLayout">
              {filteredStores.map((store) => {
                const isCurrent = activeStoreId === store.id;
                return (
                  <motion.div
                    key={store.id}
                    layout
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    onClick={() => setActiveStoreId(store.id)}
                    className={`bg-[#FFFFFF] rounded-none border p-5 transition-all duration-400 cursor-pointer relative group overflow-hidden ${
                      isCurrent
                        ? "border-[#163B65] shadow-md bg-[#F5F2EC]/20"
                        : "border-[#163B65]/10 hover:border-[#F97316]/40 hover:shadow-sm"
                    }`}
                  >
                    {/* Interaction Top Accent Track Overlay */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-[2px] bg-[#F97316] transition-transform duration-400 scale-x-0 origin-left ${
                        isCurrent ? "scale-x-100" : "group-hover:scale-x-50"
                      }`}
                    />

                    {/* Showroom Brand Sub-Header Ribbon */}
                    <div className="flex justify-between items-center gap-4 pb-3 border-b border-[#163B65]/5">
                      <div className="text-[10px] font-bold text-[#475569]/70 tracking-widest uppercase">
                        {store.brands.join("  //  ")}
                      </div>
                      <span className="bg-[#FFFFFF] text-[#10B981] text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 border border-[#10B981]/20 flex items-center gap-1 shrink-0">
                        <Clock className="w-2.5 h-2.5 text-[#10B981]" /> Open
                      </span>
                    </div>

                    {/* Core Grid Showroom Identity Parameters */}
                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center text-left">
                      <div className="sm:col-span-8 space-y-1.5">
                        <h4 className="font-serif text-lg font-bold text-[#163B65] tracking-tight group-hover:text-[#F97316] transition-colors duration-300">
                          {store.name}
                        </h4>
                        <p className="text-xs text-[#475569] font-normal leading-relaxed">
                          {store.address}, {store.city}, {store.state}
                        </p>
                      </div>

                      {/* Micro Embedded Photographic Location Framing Block */}
                      <div className="sm:col-span-4 h-16 rounded-none overflow-hidden relative border border-[#163B65]/10 bg-[#F5F2EC] hidden sm:block">
                        <Image
                          src={store.image}
                          alt={`${store.name} location context plate`}
                          fill
                          sizes="(max-w-7xl) 10vw, 15vw"
                          className="object-cover grayscale contrast-[1.02] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500 ease-out"
                        />
                      </div>
                    </div>

                    {/* Structural Execution Action Footer Triggers */}
                    <div className="mt-5 pt-3 border-t border-[#163B65]/5 flex items-center justify-between flex-wrap gap-3">
                      <a
                        href={`tel:${store.phone.replace(/\s+/g, "")}`}
                        onClick={(e) => e.stopPropagation()}
                        className="text-xs font-bold text-[#475569] hover:text-[#F97316] transition-colors uppercase tracking-wider inline-flex items-center gap-1.5"
                      >
                        <Phone className="w-3.5 h-3.5 text-[#163B65]" /> Call
                        Store
                      </a>

                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                          store.name + " " + store.address,
                        )}`}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-xs font-bold text-[#FFFFFF] bg-[#163B65] hover:bg-[#F97316] px-3 py-2 rounded-none transition-all duration-300 inline-flex items-center gap-1.5 uppercase tracking-wider shadow-sm"
                      >
                        Directions <Compass className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
