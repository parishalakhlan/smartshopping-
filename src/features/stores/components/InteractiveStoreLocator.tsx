// src/features/stores/components/InteractiveStoreLocator.tsx
"use client";

import React, { useState, useMemo } from "react";
import { NORTH_INDIA_STORES, REGIONAL_FOOTPRINTS, Store } from "../data/stores";
import {
  MapPin,
  Phone,
  Compass,
  ArrowRight,
  Clock,
  Map as MapIcon,
  Plus,
  Minus,
  Layers,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function InteractiveStoreLocator() {
  const [selectedState, setSelectedState] = useState<string>("All Cities");
  const [activeStoreId, setActiveStoreId] = useState<string>(
    NORTH_INDIA_STORES[0].id,
  );
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  const filteredStores = useMemo(() => {
    if (selectedState === "All Cities") return NORTH_INDIA_STORES;
    return NORTH_INDIA_STORES.filter(
      (store) => store.state.toLowerCase() === selectedState.toLowerCase(),
    );
  }, [selectedState]);

  const activeStore = useMemo(() => {
    return (
      NORTH_INDIA_STORES.find((s) => s.id === activeStoreId) ||
      filteredStores[0] ||
      NORTH_INDIA_STORES[0]
    );
  }, [activeStoreId, filteredStores]);

  const getChoroplethFill = (count: number, isSelected: boolean) => {
    if (isSelected)
      return "fill-[var(--color-accent)] stroke-[var(--color-primary)] stroke-2 drop-shadow-md";
    if (count >= 12)
      return "fill-amber-600/90 hover:fill-amber-700 stroke-slate-300 stroke-[1px]";
    if (count >= 8)
      return "fill-amber-500/85 hover:fill-amber-600 stroke-slate-300 stroke-[1px]";
    if (count >= 5)
      return "fill-amber-400/80 hover:fill-amber-500 stroke-slate-300 stroke-[1px]";
    return "fill-amber-100/90 hover:fill-amber-200 stroke-slate-300 stroke-[1px]";
  };

  return (
    <section
      id="locator-workspace"
      className="w-full bg-white py-12 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto scroll-mt-6"
    >
      <div className="flex flex-col lg:flex-row gap-8 items-stretch min-h-[720px]">
        {/* MAP PANEL (60%): Dominant Retail Network Interface View */}
        <div className="w-full lg:w-[60%] flex flex-col justify-between relative bg-slate-50 rounded-xl overflow-hidden border border-[var(--color-border-main)] p-4 sm:p-6 shadow-sm">
          {/* Map Controls Header */}
          <div className="flex items-center justify-between z-20 w-full bg-white/95 backdrop-blur-sm p-4 rounded-lg border border-slate-200/80 shadow-sm">
            <div>
              <span className="text-[10px] uppercase tracking-widest font-bold text-[var(--color-text-secondary)]">
                Live Coverage Map
              </span>
              <h3 className="font-serif text-xl text-[var(--color-text-primary)] font-bold">
                Select Region
              </h3>
            </div>
            <button
              onClick={() => setSelectedState("All Cities")}
              className={`px-4 py-2 text-xs font-semibold rounded-md transition-all border ${
                selectedState === "All Cities"
                  ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)]"
                  : "bg-white text-[var(--color-text-primary)] border-slate-200 hover:border-slate-400"
              }`}
            >
              Show All Network (30)
            </button>
          </div>

          {/* High-Fidelity Geographic Vector Base Layer Map */}
          <div className="relative flex-1 w-full min-h-[480px] flex items-center justify-center p-4">
            {/* Real Satellite Hybrid Grid Pattern Underlay */}
            <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:20px_20px]" />
            <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px)] [background-size:100px_100px]" />

            {/* Simulated Real Map Background Layer via Low Opacity Photo Projections */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1000&q=80"
                alt="Topology Grid Reference Plate"
                className="w-full h-full object-cover object-center scale-110"
              />
            </div>

            {/* Standard Map UX Controls (Zoom Bar Layer) */}
            <div className="absolute bottom-6 left-6 z-20 flex flex-col gap-1 bg-white border border-slate-200 p-1 rounded-md shadow-sm">
              <button
                onClick={() => setZoomLevel((p) => Math.min(p + 0.2, 1.6))}
                className="p-2 hover:bg-slate-100 rounded text-slate-700 transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
              <div className="h-[1px] bg-slate-200 mx-1" />
              <button
                onClick={() => setZoomLevel((p) => Math.max(p - 0.2, 0.8))}
                className="p-2 hover:bg-slate-100 rounded text-slate-700 transition-colors"
              >
                <Minus className="w-4 h-4" />
              </button>
            </div>

            {/* Interactive Vector Space View Wrapper Container */}
            <motion.div
              animate={{ scale: zoomLevel }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              className="w-full max-w-[500px] h-auto relative"
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
                        className={`cursor-pointer transition-all duration-300 ease-in-out ${getChoroplethFill(footprint.count, isSelected)}`}
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

              {/* Exact Coordinate Placement Overlay Badges */}
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
                      className={`flex flex-col items-center group focus:outline-none`}
                    >
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center font-sans text-xs font-bold transition-all shadow-sm ${
                          isSelected
                            ? "bg-[var(--color-primary)] text-white ring-4 ring-orange-200 scale-110"
                            : "bg-slate-900 text-white group-hover:bg-[var(--color-accent)]"
                        }`}
                      >
                        {footprint.count}
                      </div>
                      <span
                        className={`text-[9px] font-bold uppercase tracking-wider mt-1 bg-white/90 px-1 rounded shadow-sm border border-slate-100 ${
                          isSelected
                            ? "text-[var(--color-primary)]"
                            : "text-slate-700"
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

          {/* Legal Meta Credits bar */}
          <div className="w-full text-right pt-2 border-t border-slate-200/40 text-[9px] text-slate-400 font-sans tracking-wide">
            Interactive Node Engine © Enterprise Retail Group Mapping Inc.
          </div>
        </div>

        {/* LIST PANEL (40%): High Performance Filterable Store Cards List */}
        <div className="w-full lg:w-[40%] flex flex-col space-y-4">
          {/* Top Pill State Selectors */}
          <div className="space-y-1.5">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[var(--color-text-secondary)]">
              Quick State Filters
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
                      className={`px-3 py-1.5 text-xs font-semibold rounded transition-all border ${
                        isCurrent
                          ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)] shadow-sm"
                          : "bg-white text-[var(--color-text-primary)] border-slate-200 hover:border-slate-400"
                      }`}
                    >
                      {stateName}
                    </button>
                  );
                },
              )}
            </div>
          </div>

          {/* Scrollable Cards Listing */}
          <div className="flex-1 overflow-y-auto space-y-4 max-h-[600px] pr-1 scrollbar-thin">
            <AnimatePresence mode="popLayout">
              {filteredStores.map((store) => {
                const isCurrent = activeStoreId === store.id;
                return (
                  <motion.div
                    key={store.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    onClick={() => setActiveStoreId(store.id)}
                    className={`bg-white rounded-lg border p-5 transition-all duration-300 cursor-pointer relative group overflow-hidden ${
                      isCurrent
                        ? "border-[var(--color-primary)] ring-1 ring-[var(--color-primary)] shadow-md"
                        : "border-[var(--color-border-main)] hover:border-slate-400 hover:shadow-sm"
                    }`}
                  >
                    {/* Top Orange Decorative Bar Accent */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-[3px] bg-[var(--color-accent)] transition-transform duration-300 scale-x-0 ${isCurrent ? "scale-x-100" : "group-hover:scale-x-50"}`}
                    />

                    {/* Brand Banner Strip */}
                    <div className="flex justify-between items-start gap-4 pb-3 border-b border-slate-100">
                      <div className="text-[11px] font-bold text-slate-500 tracking-wide font-sans">
                        {store.brands.join(" • ")}
                      </div>
                      <span className="bg-emerald-50 text-[var(--color-success)] text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border border-emerald-200 flex items-center gap-1 shrink-0">
                        <Clock className="w-2.5 h-2.5" /> Open
                      </span>
                    </div>

                    {/* Showroom Details Grid Info */}
                    <div className="mt-3 grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                      <div className="sm:col-span-8 space-y-1">
                        <h4 className="font-serif text-lg font-bold text-[var(--color-text-primary)] tracking-wide group-hover:text-[var(--color-primary)] transition-colors">
                          {store.name}
                        </h4>
                        <p className="text-xs text-[var(--color-text-secondary)] font-normal leading-relaxed">
                          {store.address}, {store.city}, {store.state}
                        </p>
                      </div>

                      {/* Embedded Micro Map Photo Component */}
                      <div className="sm:col-span-4 h-14 rounded overflow-hidden relative border border-slate-200 bg-slate-100 hidden sm:block">
                        <img
                          src={store.image}
                          alt="Showroom micro location snapshot"
                          className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>

                    {/* Action Panel Triggers */}
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between flex-wrap gap-2">
                      <a
                        href={`tel:${store.phone.replace(/\s+/g, "")}`}
                        onClick={(e) => e.stopPropagation()}
                        className="text-xs font-semibold text-slate-600 hover:text-[var(--color-primary)] transition-colors inline-flex items-center gap-1.5"
                      >
                        <Phone className="w-3.5 h-3.5" /> Call Store
                      </a>

                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(store.name + " " + store.address)}`}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-xs font-bold text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] px-3 py-1.5 rounded transition-all inline-flex items-center gap-1 shadow-sm"
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
