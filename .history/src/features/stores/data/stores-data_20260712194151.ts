// Re-export everything from the main stores file
export {
  type Store,
  type CityData,
  type StateRegion,
  type StateFootprint,
  type StoresConfig,
  REGIONAL_FOOTPRINTS,
  NORTH_INDIA_STORES,
  storesConfig,
  getStoresByState,
  getStoresByCity,
  getHierarchicalNetwork,
} from "@/features/stores/data/stores";
