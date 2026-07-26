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
  const { stores } = data;
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [expandedState, setExpandedState] = useState<string | null>(null);
  const [expandedStoreId, setExpandedStoreId] = useState<
    string | number | null
  >(null);

  const regionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // 1. Group Stores by State/Region dynamically
  const groupedStores = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    const filtered = stores.filter((store: Store) => {
      if (!query) return true;
      return (
        store.name.toLowerCase().includes(query) ||
        store.city.toLowerCase().includes(query) ||
        store.address.toLowerCase().includes(query) ||
        store.state.toLowerCase().includes(query)
      );
    });

    const groups: Record<string, Store[]> = {};
    filtered.forEach((store) => {
      const stateKey = store.state || "Other";
      if (!groups[stateKey]) {
        groups[stateKey] = [];
      }
      groups[stateKey].push(store);
    });

    return groups;
  }, [stores, searchQuery]);

  // List of active states available in current results
  const availableStates = useMemo(() => {
    return Object.keys(groupedStores).sort();
  }, [groupedStores]);

  // Handle Quick Scroll to State Group
  const scrollToRegion = (stateName: string) => {
    setExpandedState(stateName);
    const targetEl = regionRefs.current[stateName];
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Helper function to format phone number
  const formatPhoneNumber = (phone: string | null | undefined) => {
    if (!phone) return "#";
    return phone.replace(/\s+/g, "");
  };

  return (
    <div className="w-full max-w-full box-border bg-background-main min-h-screen text-text-primary overflow-x-hidden md:hidden font-sans">
      {/* STICKY TOP HEADER & SEARCH BAR */}
      <header className="sticky top-0 z-30 w-full max-w-full box-border bg-background-main/95 backdrop-blur-md border-b border-border-main/50 px-3.5 sm:px-4 pt-5 pb-3 space-y-3">
        <div className="flex items-center justify-between gap-2 w-full">
          <div className="flex items-center gap-2 min-w-0">
            <span className="p-1.5 rounded-lg bg-accent/10 text-accent shrink-0">
              <StoreIcon className="w-4 h-4" />
            </span>
            <h1 className="font-serif text-lg sm:text-xl font-bold text-text-primary tracking-tight truncate">
              Showroom Locator
            </h1>
          </div>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-background-secondary text-text-secondary border border-border-main/40 shrink-0 whitespace-nowrap">
            {stores.length} Stores
          </span>
        </div>

        {/* SEARCH INPUT */}
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-text-secondary/60 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setExpandedState(null); // Reset grouping expansion on search
            }}
            placeholder="Search state, city, or showroom..."
            className="w-full box-border pl-9 pr-8 py-2 text-xs bg-background-secondary/60 border border-border-main/60 rounded-xl focus:outline-none focus:border-accent transition-colors shadow-xs"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-text-secondary hover:text-text-primary"
              aria-label="Clear search"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* HORIZONTAL JUMP BAR (FAST STATE ACCESS) */}
        {!searchQuery && (
          <div className="w-full overflow-hidden">
            <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none snap-x w-full">
              {availableStates.map((state) => {
                const count = groupedStores[state].length;
                const isExpanded = expandedState === state;
                return (
                  <button
                    key={state}
                    onClick={() => scrollToRegion(state)}
                    className={`snap-start shrink-0 px-2.5 py-1 rounded-lg text-[10px] font-semibold tracking-wider uppercase transition-all duration-200 border whitespace-nowrap ${
                      isExpanded
                        ? "bg-accent text-white border-accent shadow-xs"
                        : "bg-background-main text-text-secondary border-border-main/60 active:bg-background-secondary"
                    }`}
                  >
                    {state} ({count})
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </header>

      {/* MAIN CONTAINER */}
      <main className="w-full max-w-full box-border px-3.5 sm:px-4 py-4 space-y-3 pb-24">
        {availableStates.length === 0 ? (
          <div className="py-20 text-center space-y-3 px-4">
            <MapPin className="w-8 h-8 text-text-secondary/40 mx-auto" />
            <p className="text-xs font-medium text-text-secondary break-words">
              No showrooms match "{searchQuery}"
            </p>
            <button
              onClick={() => setSearchQuery("")}
              className="text-xs font-bold text-accent uppercase tracking-wider underline pt-1"
            >
              Clear Search Query
            </button>
          </div>
        ) : (
          availableStates.map((stateName) => {
            const stateStores = groupedStores[stateName];
            const isStateExpanded =
              Boolean(searchQuery) || expandedState === stateName;

            return (
              <div
                key={stateName}
                ref={(el) => {
                  regionRefs.current[stateName] = el;
                }}
                className="scroll-mt-36 w-full max-w-full box-border rounded-2xl border border-border-main/60 bg-background-main overflow-hidden shadow-xs"
              >
                {/* STATE GROUP HEADER */}
                <button
                  onClick={() =>
                    setExpandedState((prev) =>
                      prev === stateName ? null : stateName,
                    )
                  }
                  className="w-full px-3.5 py-3 bg-background-secondary/40 flex items-center justify-between border-b border-border-main/30 select-none text-left gap-2"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                    <h2 className="font-serif text-sm font-bold text-text-primary tracking-wide truncate">
                      {stateName}
                    </h2>
                    <span className="text-[10px] font-bold text-text-secondary/70 bg-background-main px-2 py-0.5 rounded-full border border-border-main/40 shrink-0">
                      {stateStores.length}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-text-secondary text-[11px] shrink-0">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-accent">
                      {isStateExpanded ? "Hide" : "View"}
                    </span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${
                        isStateExpanded ? "rotate-180 text-accent" : ""
                      }`}
                    />
                  </div>
                </button>

                {/* SHOWROOM LIST FOR STATE */}
                <AnimatePresence initial={false}>
                  {isStateExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="divide-y divide-border-main/30 w-full"
                    >
                      {stateStores.map((store) => {
                        const isStoreExpanded = expandedStoreId === store.id;

                        return (
                          <div
                            key={store.id}
                            className="bg-background-main transition-colors w-full box-border"
                          >
                            {/* COMPACT SHOWROOM ROW */}
                            <div className="p-3 flex items-center justify-between gap-2.5 w-full box-border">
                              <div
                                onClick={() =>
                                  setExpandedStoreId((prev) =>
                                    prev === store.id ? null : store.id,
                                  )
                                }
                                className="flex-1 min-w-0 cursor-pointer space-y-0.5 pr-1"
                              >
                                <div className="flex items-center gap-1.5 text-[10px] font-bold text-accent uppercase tracking-wider">
                                  <span className="truncate">{store.city}</span>
                                </div>
                                <h3 className="font-sans text-xs font-bold text-text-primary truncate">
                                  {store.name}
                                </h3>
                                <p className="text-[11px] text-text-secondary truncate">
                                  {store.address}
                                </p>
                              </div>

                              {/* DIRECT ACTION ICONS */}
                              <div className="flex items-center gap-1.5 shrink-0">
                                {store.phone && (
                                  <a
                                    href={`tel:${formatPhoneNumber(store.phone)}`}
                                    className="p-2 rounded-xl bg-background-secondary border border-border-main/50 text-text-primary active:scale-95 transition-transform"
                                    title="Call Store"
                                  >
                                    <Phone className="w-3.5 h-3.5 text-accent" />
                                  </a>
                                )}

                                {store.googleMapsUrl && (
                                  <a
                                    href={store.googleMapsUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="p-2 rounded-xl bg-accent text-white active:scale-95 transition-transform shadow-xs"
                                    title="Get Directions"
                                  >
                                    <Compass className="w-3.5 h-3.5" />
                                  </a>
                                )}

                                <button
                                  onClick={() =>
                                    setExpandedStoreId((prev) =>
                                      prev === store.id ? null : store.id,
                                    )
                                  }
                                  className="p-1 text-text-secondary"
                                  aria-label="Expand store details"
                                >
                                  <ChevronDown
                                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                                      isStoreExpanded ? "rotate-180" : ""
                                    }`}
                                  />
                                </button>
                              </div>
                            </div>

                            {/* INLINE IMAGE & DETAILS ON DEMAND */}
                            <AnimatePresence>
                              {isStoreExpanded && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  className="px-3 pb-3 pt-1 bg-background-secondary/30 space-y-2.5 w-full box-border"
                                >
                                  {store.image?.src && (
                                    <div className="relative w-full h-32 rounded-xl overflow-hidden bg-background-secondary">
                                      <Image
                                        src={store.image.src}
                                        alt={store.image.alt || store.name}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                      />
                                    </div>
                                  )}

                                  <div className="text-[11px] text-text-secondary space-y-1 break-words">
                                    <p className="font-semibold text-text-primary">
                                      Full Address:
                                    </p>
                                    <p className="leading-relaxed">
                                      {store.address}
                                    </p>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })
        )}
      </main>
    </div>
  );
}
