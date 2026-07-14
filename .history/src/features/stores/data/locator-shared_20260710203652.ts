// src/features/locator/data/locator-shared.ts

import { type Store, NORTH_INDIA_STORES } from "@/features/stores/data/stores";

// Re-export Store type
export type { Store };

export interface City {
  name: string;
  storeCount: number;
  stores: Store[];
}

export interface StateRegion {
  id: string;
  name: string;
  cities: City[];
}

// Build locator data from NORTH_INDIA_STORES
const buildLocatorData = (): StateRegion[] => {
  const stateMap = new Map<string, StateRegion>();

  NORTH_INDIA_STORES.forEach((store: Store) => {
    if (!stateMap.has(store.state)) {
      stateMap.set(store.state, {
        id: store.state.toLowerCase().replace(/\s+/g, "-"),
        name: store.state,
        cities: [],
      });
    }

    const stateRegion = stateMap.get(store.state)!;
    let cityEntry = stateRegion.cities.find((c: City) => c.name === store.city);

    if (!cityEntry) {
      cityEntry = {
        name: store.city,
        storeCount: 0,
        stores: [],
      };
      stateRegion.cities.push(cityEntry);
    }

    cityEntry.stores.push(store);
    cityEntry.storeCount++;
  });

  return Array.from(stateMap.values());
};

export const LOCATOR_DATA = {
  sectionLabel: "Our Network",
  headline: "Find Your Nearest Store",
  supportingText:
    "Experience premium craftsmanship and tailored luxury across our exclusive North India physical spaces.",
  heroImage:
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
  regions: buildLocatorData(),
};
