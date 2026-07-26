"use client";

import React, { useState, useMemo, useRef } from "react";
import Image from "next/image";
import {
  Phone,
  Compass,
  MapPin,
  Search,
  ChevronDown,
  X,
  Store as StoreIcon,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { type Store, type StateFootprint } from "@/features/stores/data/stores";

interface MobileStoreLocatorProps {
  data: {
    stores: Store[];
    regionalFootprints?: StateFootprint[];
  };
}

export function MobileStoreLocator({ data }: MobileStoreLocatorProps) {
  const { stores, regionalFootprints = [] } = data;
  const [selectedState, setSelectedState] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [expandedStoreId, setExpandedStoreId] = useState<
    string | number | null
  >(null);

  const explorationCanvasRef = useRef<HTMLDivElement>(null);

  // Generate regional footprints from stores if not provided
  const computedRegionalFootprints = useMemo(() => {
    if (regionalFootprints.length > 0) {
      return regionalFootprints;
    }

    const stateMap = new Map<string, number>();
    stores.forEach((store: Store) => {
      const state = store.state;
      stateMap.set(state, (stateMap.get(state) || 0) + 1);
    });

    return Array.from(stateMap.entries()).map(([name, count], index) => ({
      id: `region-${index}`,
      name,
      count,
    }));
  }, [stores, regionalFootprints]);

  // Combined Region & Search Filter
  const filteredStores = useMemo(() => {
    return stores.filter((store: Store) => {
      const matchesState =
        selectedState === "All" ||
        store.state.toLowerCase() === selectedState.toLowerCase();

      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        store.name.toLowerCase().includes(query) ||
        store.city.toLowerCase().includes(query) ||
        store.address.toLowerCase().includes(query) ||
        store.state.toLowerCase().includes(query);

      return matchesState && matchesSearch;
    });
  }, [selectedState, searchQuery, stores]);

  // Toggle Accordion Item
  const toggleStoreExpand = (id: string | number) => {
    setExpandedStoreId((prev) => (prev === id ? null : id));
  };

  // Helper function to format phone number
  const formatPhoneNumber = (phone: string | null | undefined) => {
    if (!phone) return "#";
    return phone.replace(/\s+/g, "");
  };

  return (
    <div className="w-full bg-background-main min-h-screen text-text-primary overflow-hidden md:hidden font-sans">
      {/* COMPACT & MODERN MOBILE HEADER */}
      <section className="px-5 pt-8 pb-6 bg-linear-to-b from-background-secondary/80 via-background-main to-background-main border-b border-border-main/40 relative">
        <div className="flex items-center gap-2 mb-2">
          <span className="p-1.5 rounded-lg bg-accent/10 text-accent">
            <StoreIcon className="w-4 h-4" />
          </span>
          <span className="text-[10px] font-bold tracking-[0.25em] text-accent uppercase">
            Atelier Directories
          </span>
        </div>

        <h1 className="font-serif text-3xl font-extrabold text-text-primary tracking-tight leading-tight mb-2">
          Find a Showroom
        </h1>
        <p className="text-xs text-text-secondary leading-relaxed font-normal mb-5 max-w-xs">
          Explore our {stores.length} physical boutique environments across the
          country.
        </p>

        {/* SEARCH INPUT FIELD */}
        <div className="relative w-full mb-4">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary/60" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search city, state, or showroom name..."
            className="w-full pl-10 pr-9 py-3 text-xs bg-background-main border border-border-main/60 rounded-xl focus:outline-none focus:border-accent transition-colors shadow-xs"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-text-secondary hover:text-text-primary"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* SWIPEABLE REGION FILTER CHIPS */}
        <div ref={explorationCanvasRef} className="scroll-mt-4">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none snap-x -mx-5 px-5">
            <button
              onClick={() => setSelectedState("All")}
              className={`snap-start shrink-0 px-4 py-2 rounded-full text-[11px] font-semibold uppercase tracking-wider transition-all duration-200 border ${
                selectedState === "All"
                  ? "bg-accent text-white border-accent shadow-xs"
                  : "bg-background-secondary text-text-secondary border-border-main/60"
              }`}
            >
              All Regions ({stores.length})
            </button>

            {computedRegionalFootprints.map((region: StateFootprint) => {
              const isSelected =
                selectedState.toLowerCase() === region.name.toLowerCase();
              return (
                <button
                  key={region.id}
                  onClick={() => setSelectedState(region.name)}
                  className={`snap-start shrink-0 px-4 py-2 rounded-full text-[11px] font-semibold uppercase tracking-wider transition-all duration-200 border ${
                    isSelected
                      ? "bg-accent text-white border-accent shadow-xs"
                      : "bg-background-secondary text-text-secondary border-border-main/60"
                  }`}
                >
                  {region.name} ({region.count})
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* FILTER RESULTS STATS */}
      <div className="px-5 py-3 flex items-center justify-between text-xs text-text-secondary bg-background-secondary/30 border-b border-border-main/30">
        <span>
          Showing{" "}
          <strong className="text-text-primary">{filteredStores.length}</strong>{" "}
          {filteredStores.length === 1 ? "location" : "locations"}
        </span>
        {(selectedState !== "All" || searchQuery) && (
          <button
            onClick={() => {
              setSelectedState("All");
              setSearchQuery("");
            }}
            className="text-[10px] font-bold uppercase tracking-wider text-accent underline"
          >
            Clear Filters
          </button>
        )}
      </div>

      {/* COMPACT ACCORDION STACK FOR FAST SCROLLING */}
      <div className="px-4 py-4 space-y-2.5 pb-20">
        {filteredStores.length === 0 ? (
          <div className="py-16 text-center space-y-3">
            <MapPin className="w-8 h-8 text-text-secondary/40 mx-auto" />
            <p className="text-sm font-medium text-text-secondary">
              No showrooms found matching your query.
            </p>
            <button
              onClick={() => {
                setSelectedState("All");
                setSearchQuery("");
              }}
              className="text-xs font-bold text-accent uppercase tracking-wider pt-2"
            >
              Reset Search Filter
            </button>
          </div>
        ) : (
          filteredStores.map((store: Store) => {
            const isExpanded = expandedStoreId === store.id;

            return (
              <div
                key={store.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? "bg-background-main border-accent/40 shadow-md ring-1 ring-accent/20"
                    : "bg-background-secondary/50 border-border-main/60 hover:border-border-main"
                }`}
              >
                {/* COMPACT TRIGGER HEADER */}
                <div
                  onClick={() => toggleStoreExpand(store.id)}
                  className="p-4 flex items-center justify-between cursor-pointer select-none"
                >
                  <div className="space-y-1 pr-3">
                    <div className="flex items-center gap-1.5 text-accent text-[10px] font-bold uppercase tracking-wider">
                      <MapPin className="w-3 h-3 shrink-0" /> {store.city},{" "}
                      {store.state}
                    </div>
                    <h3 className="font-serif text-base font-bold text-text-primary leading-tight">
                      {store.name}
                    </h3>
                    <p className="text-[11px] text-text-secondary line-clamp-1 font-normal">
                      {store.address}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-300 ${
                        isExpanded
                          ? "bg-accent/10 text-accent rotate-180"
                          : "bg-background-secondary text-text-secondary"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* EXPANDABLE ACCORDION CONTENT */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden border-t border-border-main/40 bg-background-main"
                    >
                      {/* Image Preview */}
                      {store.image?.src && (
                        <div className="relative w-full h-[180px] bg-background-secondary overflow-hidden">
                          <Image
                            src={store.image.src}
                            alt={store.image.alt || store.name}
                            fill
                            className="object-cover object-center"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                      )}

                      <div className="p-4 space-y-4">
                        <div className="space-y-1">
                          <span className="text-[9px] font-bold uppercase tracking-wider text-text-secondary/70">
                            Full Address
                          </span>
                          <p className="text-xs text-text-primary leading-relaxed">
                            {store.address}
                          </p>
                        </div>

                        {/* DIRECT TAP ACTION BUTTONS */}
                        <div className="pt-2 flex gap-2">
                          <a
                            href={
                              store.phone
                                ? `tel:${formatPhoneNumber(store.phone)}`
                                : "#"
                            }
                            onClick={(e) => e.stopPropagation()}
                            className={`flex-1 py-3 px-3 rounded-xl border border-border-main bg-background-secondary text-text-primary text-[10px] font-bold uppercase tracking-wider text-center flex items-center justify-center gap-2 active:scale-[0.98] transition-transform ${
                              !store.phone
                                ? "opacity-40 pointer-events-none"
                                : ""
                            }`}
                          >
                            <Phone className="w-3.5 h-3.5 text-accent" />
                            <span>Call Store</span>
                          </a>

                          <a
                            href={store.googleMapsUrl || "#"}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className={`flex-1 py-3 px-3 rounded-xl bg-accent text-white text-[10px] font-bold uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-xs active:scale-[0.98] transition-transform ${
                              !store.googleMapsUrl
                                ? "opacity-40 pointer-events-none"
                                : ""
                            }`}
                          >
                            <Compass className="w-3.5 h-3.5" />
                            <span>Directions</span>
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
