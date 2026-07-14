// src/features/stores/data/stores-data.ts

// Re-export everything from the main stores file
export {
  type Store,
  type CityData,
  type StateRegion,
  type StateFootprint,
  REGIONAL_FOOTPRINTS,
  NORTH_INDIA_STORES,
  getStoresByState,
  getStoresByCity,
  getHierarchicalNetwork,
} from "@/features/stores/data/stores";
