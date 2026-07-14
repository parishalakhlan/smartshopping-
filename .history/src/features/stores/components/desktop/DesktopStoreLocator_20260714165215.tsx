"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { Phone, Compass, Clock, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { Store, StateFootprint } from "@/features/stores/data/stores";
interface DesktopStoreLocatorProps {
  data: {
    stores: Store[];
    regionalFootprints: StateFootprint[];
  };
}

export function DesktopStoreLocator({ data }: DesktopStoreLocatorProps) {
  const { stores, regionalFootprints } = data;
  const [selectedState, setSelectedState] = useState<string>("All");

  const filteredStores = useMemo(() => {
    if (selectedState === "All") return stores;
    return stores.filter(
      (store: Store) =>
        store.state.toLowerCase() === selectedState.toLowerCase(),
    );
  }, [selectedState, stores]);

  return (
    <section
      id="locator-workspace-desktop"
      className="hidden md:block w-full bg-background-main py-20 lg:py-28 px-6 lg:px-12 max-w-7xl mx-auto font-sans"
    >
      {/* EDITORIAL HEADER */}
      <div className="border-b border-border-main pb-10 mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div className="text-left space-y-3">
          <span className="text-[10px] uppercase tracking-[0.3em] font-extrabold text-accent block">
            Exclusive Spaces
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl text-button-primary-bg font-light tracking-tight leading-none">
            Our Flagship <span className="italic font-normal">Showrooms</span>
          </h2>
          <p className="text-sm text-text-secondary max-w-md font-light leading-relaxed">
            Experience our collections in beautifully curated architectural
            spaces designed to inspire. Find a showroom close to you.
          </p>
        </div>

        {/* Global Stats Grid */}
        <div className="flex gap-8 border-l border-border-main pl-8 py-2">
          <div className="text-left">
            <span className="block text-3xl font-serif text-button-primary-bg font-semibold">
              {stores.length}
            </span>
            <span className="text-[9px] uppercase tracking-wider text-text-secondary font-bold">
              Total Spaces
            </span>
          </div>
          <div className="text-left">
            <span className="block text-3xl font-serif text-button-primary-bg font-semibold">
              {regionalFootprints.length}
            </span>
            <span className="text-[9px] uppercase tracking-wider text-text-secondary font-bold">
              Regions Covered
            </span>
          </div>
        </div>
      </div>

      {/* REGION FILTER BAR */}
      <div className="mb-12 flex flex-wrap items-center gap-2 border-b border-border-main/40 pb-4">
        <button
          onClick={() => setSelectedState("All")}
          className={`px-5 py-2.5 text-xs font-bold uppercase tracking-widest transition-all duration-300 relative ${
            selectedState === "All"
              ? "text-accent"
              : "text-button-primary-bg/60 hover:text-button-primary-bg"
          }`}
        >
          All Locations
          {selectedState === "All" && (
            <motion.div
              layoutId="activeUnderline"
              className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent"
            />
          )}
        </button>
        {regionalFootprints.map((region: StateFootprint) => {
          const isSelected =
            selectedState.toLowerCase() === region.name.toLowerCase();
          return (
            <button
              key={region.id}
              onClick={() => setSelectedState(region.name)}
              className={`px-5 py-2.5 text-xs font-bold uppercase tracking-widest transition-all duration-300 relative ${
                isSelected
                  ? "text-accent"
                  : "text-button-primary-bg/60 hover:text-button-primary-bg"
              }`}
            >
              {region.name} ({region.count})
              {isSelected && (
                <motion.div
                  layoutId="activeUnderline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent"
                />
              )}
            </button>
          );
        })}
      </div>

      {/* ASYMMETRICAL EDITORIAL GALLERY */}
      <div className="min-h-[600px]">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start"
        >
          <AnimatePresence mode="popLayout">
            {filteredStores.map((store: Store, index: number) => {
              // Create an asymmetrical layout weight by changing grid spans
              const isFeatureCard = index % 4 === 0;

              return (
                <motion.div
                  key={store.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className={`group bg-background-secondary border border-border-main overflow-hidden flex flex-col justify-between h-[520px] transition-all duration-500 hover:shadow-xl hover:border-accent/30 ${
                    isFeatureCard ? "lg:col-span-2" : "lg:col-span-1"
                  }`}
                >
                  {/* Visual Top Area */}
                  <div className="relative w-full h-[60%] overflow-hidden bg-background-secondary">
                    <Image
                      src={store.image.src}
                      alt={store.image.alt || store.name}
                      fill
                      className={`object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
                        store.image.objectFit || "cover"
                      }`}
                      sizes="(max-width: 1200px) 100vw, 40vw"
                    />
                    {/* Glassmorphic Brand Tag */}
                    <div className="absolute top-4 left-4 bg-background-main/80 backdrop-blur-md px-3 py-1 border border-border-main">
                      <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-button-primary-bg">
                        {store.brands.join("  //  ")}
                      </span>
                    </div>

                    {/* Status Indicator */}
                    <div className="absolute top-4 right-4 bg-success/90 text-white backdrop-blur-md px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest flex items-center gap-1.5 shadow-sm">
                      <Clock className="w-2.5 h-2.5" /> Open
                    </div>
                  </div>

                  {/* Editorial Content Bottom Area */}
                  <div className="p-6 flex-1 flex flex-col justify-between text-left">
                    <div className="space-y-3">
                      <div className="flex items-center gap-1.5 text-accent text-[10px] font-bold uppercase tracking-wider">
                        <MapPin className="w-3 h-3" /> {store.city},{" "}
                        {store.state}
                      </div>
                      <h3 className="font-serif text-2xl font-normal text-button-primary-bg tracking-tight leading-tight group-hover:text-accent transition-colors duration-300">
                        {store.name}
                      </h3>
                      <p className="text-xs text-text-secondary leading-relaxed max-w-md font-light line-clamp-2">
                        {store.address}
                      </p>
                    </div>

                    {/* Dynamic Action Panel */}
                    <div className="pt-5 border-t border-border-main/50 flex items-center justify-between">
                      <a
                        href={`tel:${store.phone}`}
                        className="text-[10px] font-extrabold text-button-primary-bg/70 hover:text-accent uppercase tracking-widest inline-flex items-center gap-2 transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5" /> Call Store
                      </a>
                      <a
                        href={store.googleMapsUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[10px] font-extrabold text-button-primary-text bg-button-primary-bg hover:bg-accent px-4 py-3 uppercase tracking-widest inline-flex items-center gap-2 transition-colors duration-300"
                      >
                        Get Directions
                        <Compass className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
