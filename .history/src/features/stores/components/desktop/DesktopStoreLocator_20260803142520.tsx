"use client";

import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { Phone, Compass, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { Store, StateFootprint } from "@/features/stores/data/stores";

interface DesktopStoreLocatorProps {
  data: {
    stores: Store[];
    regionalFootprints?: StateFootprint[];
  };
}

// Normalize state names by trimming spaces and standardizing format
const normalizeState = (state: string): string => {
  if (!state) return "Unknown";

  // Trim leading/trailing spaces
  const normalized = state.trim();

  // Handle two-letter state codes (convert to uppercase)
  if (normalized.length === 2) {
    return normalized.toUpperCase();
  }

  // Handle full state names - convert to proper case
  return normalized
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export function DesktopStoreLocator({ data }: DesktopStoreLocatorProps) {
  const { stores: rawStores, regionalFootprints = [] } = data;

  // Normalize all store states and deduplicate
  const stores = useMemo(() => {
    // First, normalize all state names
    const normalizedStores = rawStores.map((store) => ({
      ...store,
      state: normalizeState(store.state || "Unknown"),
    }));

    // Remove duplicate stores by ID
    const uniqueStores = Array.from(
      new Map(normalizedStores.map((store) => [store.id, store])).values(),
    );

    return uniqueStores;
  }, [rawStores]);

  const [selectedState, setSelectedState] = useState<string>("All");

  // Debug logs to verify the fix
  useEffect(() => {
    console.log("✅ After normalization:");
    console.log("Total stores:", stores.length);

    const stateCounts = stores.reduce(
      (acc, store) => {
        acc[store.state] = (acc[store.state] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>,
    );
    console.log("State counts (normalized):", stateCounts);
    console.log("Unique states:", Object.keys(stateCounts).length);
  }, [stores]);

  // Generate regional footprints from stores
  const computedRegionalFootprints = useMemo(() => {
    if (regionalFootprints.length > 0) {
      // Normalize provided footprints too
      return regionalFootprints.map((fp) => ({
        ...fp,
        name: normalizeState(fp.name),
      }));
    }

    // Count stores by state (all normalized now)
    const stateMap = new Map<string, number>();

    stores.forEach((store: Store) => {
      const state = store.state || "Unknown";
      stateMap.set(state, (stateMap.get(state) || 0) + 1);
    });

    return Array.from(stateMap.entries())
      .map(([name, count]) => ({
        id: `region-${name}`,
        name,
        count,
      }))
      .sort((a, b) => b.count - a.count);
  }, [stores, regionalFootprints]);

  // Filter stores by selected state (using normalized names)
  const filteredStores = useMemo(() => {
    if (selectedState === "All") return stores;

    // Normalize the selected state for comparison
    const normalizedSelected = normalizeState(selectedState);
    return stores.filter((store: Store) => store.state === normalizedSelected);
  }, [selectedState, stores]);

  // Calculate unique states count
  const uniqueStates = useMemo(() => {
    const states = new Set(stores.map((store: Store) => store.state));
    return states.size;
  }, [stores]);

  // Helper function to format phone number
  const formatPhoneNumber = (phone: string | null | undefined) => {
    if (!phone) return "#";
    return phone.replace(/\s+/g, "");
  };

  return (
    <section
      id="locator-workspace-desktop"
      className="hidden md:block w-full bg-background-main py-20 lg:py-28 px-6 max-w-7xl mx-auto font-sans"
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
              Showrooms Live
            </span>
          </div>
          <div className="text-left">
            <span className="block text-3xl font-serif text-button-primary-bg font-semibold">
              {uniqueStates}
            </span>
            <span className="text-[9px] uppercase tracking-wider text-text-secondary font-bold">
              States Covered
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
          All Locations ({stores.length})
          {selectedState === "All" && (
            <motion.div
              layoutId="activeUnderline"
              className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent"
            />
          )}
        </button>
        {computedRegionalFootprints.map((region: StateFootprint) => {
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
                    <div className="relative w-full h-full flex items-center justify-center bg-black/5">
                      <Image
                        src={store.image?.src || "/placeholder-image.jpg"}
                        alt={store.image?.alt || store.name}
                        fill
                        className="object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                        sizes="(max-width: 1200px) 100vw, 40vw"
                        priority={index < 3}
                        style={{
                          objectFit: "contain",
                          maxWidth: "100%",
                          maxHeight: "100%",
                        }}
                      />
                    </div>
                    {/* Subtle overlay gradient for better visibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background-secondary/20 to-transparent pointer-events-none" />
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
                        href={
                          store.phone
                            ? `tel:${formatPhoneNumber(store.phone)}`
                            : "#"
                        }
                        className={`text-[10px] font-extrabold text-button-primary-bg/70 hover:text-accent uppercase tracking-widest inline-flex items-center gap-2 transition-colors ${
                          !store.phone ? "opacity-50 pointer-events-none" : ""
                        }`}
                      >
                        <Phone className="w-3.5 h-3.5" /> Call Store
                      </a>
                      <a
                        href={store.googleMapsUrl || "#"}
                        target="_blank"
                        rel="noreferrer"
                        className={`text-[10px] font-extrabold text-button-primary-text bg-button-primary-bg hover:bg-accent px-4 py-3 uppercase tracking-widest inline-flex items-center gap-2 transition-colors duration-300 ${
                          !store.googleMapsUrl
                            ? "opacity-50 pointer-events-none"
                            : ""
                        }`}
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
