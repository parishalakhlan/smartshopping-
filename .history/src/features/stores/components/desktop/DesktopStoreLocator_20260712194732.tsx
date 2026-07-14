"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { Phone, Compass, Clock, Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { storesConfig } from "@/features/stores/data/stores";

export function DesktopStoreLocator() {
  const { stores, regionalFootprints } = storesConfig;
  const [selectedState, setSelectedState] = useState<string>("All Cities");
  const [activeStoreId, setActiveStoreId] = useState<string>(
    stores[0]?.id || "",
  );
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  const filteredStores = useMemo(() => {
    if (selectedState === "All Cities") return stores;
    return stores.filter(
      (store) => store.state.toLowerCase() === selectedState.toLowerCase(),
    );
  }, [selectedState, stores]);

  const getChoroplethFill = (count: number, isSelected: boolean) => {
    if (isSelected)
      return "fill-accent stroke-button-primary-bg stroke-[1.5px] drop-shadow-sm";
    if (count >= 12)
      return "fill-button-primary-bg/20 hover:fill-button-primary-bg/30 stroke-button-primary-bg/10 stroke-[1px]";
    if (count >= 8)
      return "fill-button-primary-bg/15 hover:fill-button-primary-bg/25 stroke-button-primary-bg/10 stroke-[1px]";
    return "fill-button-primary-bg/5 hover:fill-button-primary-bg/15 stroke-button-primary-bg/10 stroke-[1px]";
  };

  return (
    <section
      id="locator-workspace-desktop"
      className="hidden md:block w-full bg-background-main py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-sans"
    >
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch min-h-[720px]">
        {/* MAP PANEL (60%) */}
        <div className="w-full lg:w-[60%] flex flex-col justify-between relative bg-background-secondary overflow-hidden border border-border-main p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 z-20 w-full bg-background-main/95 backdrop-blur-md p-5 border border-border-main">
            <div className="text-left">
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-accent block mb-0.5">
                GEO-SPATIAL COVERAGE
              </span>
              <h3 className="font-serif text-xl text-button-primary-bg font-bold tracking-tight">
                Select Operating Region
              </h3>
            </div>
            <button
              onClick={() => setSelectedState("All Cities")}
              className={`px-4 py-2 text-xs font-semibold border rounded-none uppercase tracking-wider transition-colors duration-300 ${
                selectedState === "All Cities"
                  ? "bg-button-primary-bg text-button-primary-text border-button-primary-bg"
                  : "bg-background-main text-button-primary-bg border-border-main hover:border-button-primary-bg"
              }`}
            >
              Show All Showrooms ({stores.length})
            </button>
          </div>

          <div className="relative flex-1 w-full min-h-[500px] flex items-center justify-center p-4">
            <div className="absolute bottom-6 left-6 z-20 flex flex-col bg-background-main border border-border-main p-1">
              <button
                onClick={() => setZoomLevel((p) => Math.min(p + 0.2, 1.6))}
                className="p-2 hover:bg-background-secondary text-button-primary-bg"
                aria-label="Zoom In"
              >
                <Plus className="w-4 h-4" />
              </button>
              <div className="h-[1px] bg-border-main mx-1" />
              <button
                onClick={() => setZoomLevel((p) => Math.max(p - 0.2, 0.8))}
                className="p-2 hover:bg-background-secondary text-button-primary-bg"
                aria-label="Zoom Out"
              >
                <Minus className="w-4 h-4" />
              </button>
            </div>

            <motion.div
              animate={{ scale: zoomLevel }}
              transition={{ type: "spring", stiffness: 220, damping: 26 }}
              className="w-full max-w-[460px] h-auto relative"
            >
              <svg
                viewBox="0 0 100 100"
                className="w-full h-auto drop-shadow-md"
              >
                <g>
                  {regionalFootprints.map((footprint) => {
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
                          const match = stores.find(
                            (s) =>
                              s.state.toLowerCase() ===
                              footprint.name.toLowerCase(),
                          );
                          if (match) setActiveStoreId(match.id);
                        }}
                      />
                    );
                  })}
                </g>
              </svg>

              {regionalFootprints.map((footprint) => {
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
                        const match = stores.find(
                          (s) =>
                            s.state.toLowerCase() ===
                            footprint.name.toLowerCase(),
                        );
                        if (match) setActiveStoreId(match.id);
                      }}
                      className="flex flex-col items-center group focus:outline-none"
                    >
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center font-semibold text-xs transition-all duration-300 ${
                          isSelected
                            ? "bg-accent text-button-primary-text ring-4 ring-accent/20"
                            : "bg-button-primary-bg text-button-primary-text group-hover:bg-accent"
                        }`}
                      >
                        {footprint.count}
                      </div>
                      <span
                        className={`text-[9px] font-bold uppercase tracking-wider mt-1.5 bg-background-main/95 px-1.5 py-0.5 border ${
                          isSelected ? "text-accent" : "text-button-primary-bg"
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
        </div>

        {/* LIST PANEL (40%) */}
        <div className="w-full lg:w-[40%] flex flex-col space-y-6">
          <div className="space-y-2 text-left">
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-accent block">
              Quick State Catalogs
            </span>
            <div className="flex flex-wrap gap-1.5">
              {["All Cities", ...regionalFootprints.map((r) => r.name)].map(
                (stateName) => {
                  const isCurrent = selectedState === stateName;
                  return (
                    <button
                      key={stateName}
                      onClick={() => {
                        setSelectedState(stateName);
                        const match = stores.find(
                          (s) =>
                            stateName === "All Cities" ||
                            s.state.toLowerCase() === stateName.toLowerCase(),
                        );
                        if (match) setActiveStoreId(match.id);
                      }}
                      className={`px-3 py-1.5 text-xs font-semibold border rounded-none uppercase tracking-wider transition-colors duration-300 ${
                        isCurrent
                          ? "bg-button-primary-bg text-button-primary-text border-button-primary-bg"
                          : "bg-background-main text-button-primary-bg border-border-main hover:border-button-primary-bg"
                      }`}
                    >
                      {stateName}
                    </button>
                  );
                },
              )}
            </div>
          </div>

          <div className="flex-1 overflow-y-auto space-y-4 max-h-[600px] pr-2 border-t border-border-main pt-2">
            <AnimatePresence mode="popLayout">
              {filteredStores.map((store) => {
                const isCurrent = activeStoreId === store.id;
                return (
                  <motion.div
                    key={store.id}
                    layout
                    onClick={() => setActiveStoreId(store.id)}
                    className={`bg-background-main rounded-none border p-5 transition-all duration-400 cursor-pointer relative overflow-hidden text-left ${
                      isCurrent
                        ? "border-button-primary-bg bg-background-secondary/20"
                        : "border-border-main hover:border-accent/40"
                    }`}
                  >
                    <div className="flex justify-between items-center pb-3 border-b border-border-main">
                      <div className="text-[10px] font-bold text-text-secondary/70 tracking-widest uppercase">
                        {store.brands.join("  //  ")}
                      </div>
                      <span className="text-success text-[9px] font-bold uppercase tracking-widest flex items-center gap-1">
                        <Clock className="w-2.5 h-2.5" /> Open
                      </span>
                    </div>

                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                      <div className="sm:col-span-8 space-y-1.5">
                        <h4 className="font-serif text-lg font-bold text-button-primary-bg tracking-tight">
                          {store.name}
                        </h4>
                        <p className="text-xs text-text-secondary leading-relaxed">
                          {store.address}, {store.city}, {store.state}
                        </p>
                      </div>
                      <div className="sm:col-span-4 h-16 relative border border-border-main bg-background-secondary hidden sm:block">
                        <Image
                          src={store.image.src}
                          alt={store.image.alt}
                          fill
                          className={`${store.image.objectFit} grayscale`}
                        />
                      </div>
                    </div>

                    <div className="mt-5 pt-3 border-t border-border-main flex items-center justify-between">
                      <a
                        href={`tel:${store.phone}`}
                        className="text-xs font-bold text-text-secondary hover:text-accent uppercase tracking-wider inline-flex items-center gap-1.5"
                      >
                        <Phone className="w-3.5 h-3.5 text-button-primary-bg" />{" "}
                        Call Store
                      </a>
                      <a
                        href={store.googleMapsUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-bold text-button-primary-text bg-button-primary-bg hover:bg-accent px-3 py-2 rounded-none uppercase tracking-wider inline-flex items-center gap-1.5"
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
