import {
  storesConfig,
  type Store,
  type StateRegion,
} from "@/features/stores/data/stores";

// Re-export types
export type { Store, StateRegion };

export interface City {
  name: string;
  storeCount: number;
  stores: Store[];
}

export interface LocatorConfig {
  section: {
    id: string;
    label: string;
    headline: string;
    supportingText: string;
  };
  hero: {
    image: {
      src: string;
      alt: string;
      sizes: {
        desktop: string;
        mobile: string;
      };
      objectFit: string;
      objectPosition: string;
    };
  };
  regions: StateRegion[];
  metadata: {
    sectionTitle: string;
  };
}

// Build locator data from stores
const buildLocatorData = (): StateRegion[] => {
  const stateMap = new Map<string, StateRegion>();

  storesConfig.stores.forEach((store: Store) => {
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

export const locatorConfig: LocatorConfig = {
  section: {
    id: "locator",
    label: "Our Network",
    headline: "Find Your Nearest Store",
    supportingText:
      "Experience premium craftsmanship and tailored luxury across our exclusive North India physical spaces.",
  },
  hero: {
    image: {
      src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
      alt: "Smart Shopping Store Network",
      sizes: {
        desktop: "1200px",
        mobile: "800px",
      },
      objectFit: "object-cover",
      objectPosition: "object-center",
    },
  },
  regions: buildLocatorData(),
  metadata: {
    sectionTitle: "Store Locator",
  },
};

// Legacy export for backward compatibility
export const LOCATOR_DATA = {
  sectionLabel: locatorConfig.section.label,
  headline: locatorConfig.section.headline,
  supportingText: locatorConfig.section.supportingText,
  heroImage: locatorConfig.hero.image.src,
  regions: locatorConfig.regions,
};
