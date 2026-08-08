// ===== TYPE DEFINITIONS =====
export interface StoreImage {
  src: string;
  alt: string;
  sizes: {
    desktop: string;
    mobile: string;
  };
  objectFit: string;
  objectPosition: string;
}

export interface StoreCoordinates {
  lat: number;
  lng: number;
}

export interface Store {
  _key: string;
  name: string;
  brands: string[];
  isOpen: boolean;
  address: string;
  city: string;
  state: string;
  phone: string;
  coordinates: StoreCoordinates;
  image: StoreImage;
  googleMapsUrl: string;
  hours: string;
  metadata: {
    storeType: string;
    features: string[];
  };
}

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

export interface StateFootprint {
  id: string;
  name: string;
  count: number;
}

export interface StoresConfig {
  section: {
    id: string;
    title: string;
    subtitle: string;
  };
  regionalFootprints: StateFootprint[];
  stores: Store[];
  metadata: {
    sectionTitles: {
      network: string;
      locator: string;
    };
  };
}

// Helper functions
export const getStoresByState = (
  stores: Store[],
  stateName: string,
): Store[] => {
  return stores.filter((store) => store.state === stateName);
};

export const getStoresByCity = (stores: Store[], cityName: string): Store[] => {
  return stores.filter((store) => store.city === cityName);
};

export interface StoreLocatorData {
  section: {
    id: string;
    title: string;
    subtitle: string;
  };

  hero: {
    label: string;
    headline: string;
    supportingText: string;
    image: StoreImage;
  };

  metadata: {
    networkTitle: string;
    locatorTitle: string;
  };

  regionalFootprints: StateFootprint[];

  stores: Store[];
}
