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
  id: string;
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

export interface CityData {
  name: string;
  storeCount: number;
  stores: Store[];
}

export interface StateRegion {
  id: string;
  name: string;
  cities: CityData[];
}

export interface StateFootprint {
  id: string;
  name: string;
  count: number;
  svgPath: string;
  labelX: number;
  labelY: number;
  cities: string[];
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

// Build hierarchical network data
export const getHierarchicalNetwork = (stores: Store[]): StateRegion[] => {
  const stateMap = new Map<string, StateRegion>();

  stores.forEach((store: Store) => {
    if (!stateMap.has(store.state)) {
      stateMap.set(store.state, {
        id: store.state.toLowerCase().replace(/\s+/g, "-"),
        name: store.state,
        cities: [],
      });
    }

    const stateRegion = stateMap.get(store.state)!;
    let cityEntry = stateRegion.cities.find(
      (c: CityData) => c.name === store.city,
    );

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

export const REGIONAL_FOOTPRINTS: StateFootprint[] = [
  {
    id: "punjab",
    name: "Punjab",
    count: 4,
    labelX: 35,
    labelY: 30,
    svgPath: "M20,20 L50,20 L45,45 L15,40 Z",
    cities: ["Ludhiana", "Amritsar", "Jalandhar", "Patiala"],
  },
  {
    id: "haryana",
    name: "Haryana",
    count: 3,
    labelX: 45,
    labelY: 55,
    svgPath: "M45,45 L70,35 L65,70 L35,65 Z",
    cities: ["Hisar", "Gurugram", "Faridabad"],
  },
  {
    id: "delhi",
    name: "Delhi NCR",
    count: 2,
    labelX: 62,
    labelY: 48,
    svgPath: "M60,45 L68,43 L66,52 L58,50 Z",
    cities: ["New Delhi", "Connaught Place"],
  },
  {
    id: "rajasthan",
    name: "Rajasthan",
    count: 1,
    labelX: 22,
    labelY: 70,
    svgPath: "M15,40 L35,65 L25,95 L5,75 Z",
    cities: ["Jaipur"],
  },
  {
    id: "uttar-pradesh",
    name: "Uttar Pradesh",
    count: 2,
    labelX: 78,
    labelY: 65,
    svgPath: "M65,70 L95,55 L90,90 L60,85 Z",
    cities: ["Lucknow", "Kanpur"],
  },
];

export const NORTH_INDIA_STORES: Store[] = [
  {
    id: "str-hisar",
    name: "The Fashion Pavilion - Model Town",
    brands: [
      "Jack & Jones",
      "Vero Moda",
      "Only",
      "Selected HOMME",
      "JJ Junior",
    ],
    isOpen: true,
    address: "52 N, Gurudwara Road, Model Town",
    city: "Hisar",
    state: "Haryana",
    phone: "+91 1662 234891",
    coordinates: { lat: 29.1492, lng: 75.7217 },
    image: {
      src: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=600&q=80",
      alt: "The Fashion Pavilion - Model Town Hisar",
      sizes: {
        desktop: "600px",
        mobile: "400px",
      },
      objectFit: "object-cover",
      objectPosition: "object-center",
    },
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=52+N+Gurudwara+Road+Model+Town+Hisar+Haryana",
    hours: "10:00 AM - 9:00 PM",
    metadata: {
      storeType: "Flagship",
      features: ["Premium Brands", "Personal Shopping", "Alterations"],
    },
  },
  {
    id: "str-gurugram",
    name: "The Flagship Atelier - Elante Galleria",
    brands: ["Jack & Jones", "Vero Moda", "Only", "Selected HOMME"],
    isOpen: true,
    address: "Ambience Island, NH-8, DLF Phase 3",
    city: "Gurugram",
    state: "Haryana",
    phone: "+91 124 4665555",
    coordinates: { lat: 28.5042, lng: 77.0989 },
    image: {
      src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80",
      alt: "The Flagship Atelier - Gurugram",
      sizes: {
        desktop: "600px",
        mobile: "400px",
      },
      objectFit: "object-cover",
      objectPosition: "object-center",
    },
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Ambience+Island+NH-8+DLF+Phase+3+Gurugram+Haryana",
    hours: "10:00 AM - 9:00 PM",
    metadata: {
      storeType: "Flagship",
      features: ["Premium Brands", "Personal Shopping", "Cafe"],
    },
  },
  {
    id: "str-chandigarh",
    name: "The Grand Avant-Garde Hub",
    brands: ["Vero Moda", "Selected HOMME", "Only", "Jack & Jones"],
    isOpen: true,
    address: "Elante Mall, Phase 1, Business District",
    city: "Chandigarh",
    state: "Chandigarh",
    phone: "+91 172 4659000",
    coordinates: { lat: 30.7061, lng: 76.8013 },
    image: {
      src: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=600&q=80",
      alt: "The Grand Avant-Garde Hub - Chandigarh",
      sizes: {
        desktop: "600px",
        mobile: "400px",
      },
      objectFit: "object-cover",
      objectPosition: "object-center",
    },
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Elante+Mall+Phase+1+Chandigarh",
    hours: "10:00 AM - 9:00 PM",
    metadata: {
      storeType: "Flagship",
      features: ["Premium Brands", "Personal Shopping", "Valet Parking"],
    },
  },
  {
    id: "str-ludhiana",
    name: "The Haute Couture Showroom",
    brands: ["Jack & Jones", "Selected HOMME", "Vero Moda"],
    isOpen: true,
    address: "Ferozepur Road, Near Kipps Market",
    city: "Ludhiana",
    state: "Punjab",
    phone: "+91 161 5021122",
    coordinates: { lat: 30.901, lng: 75.8573 },
    image: {
      src: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=600&q=80",
      alt: "The Haute Couture Showroom - Ludhiana",
      sizes: {
        desktop: "600px",
        mobile: "400px",
      },
      objectFit: "object-cover",
      objectPosition: "object-center",
    },
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Ferozepur+Road+Near+Kipps+Market+Ludhiana+Punjab",
    hours: "10:00 AM - 9:00 PM",
    metadata: {
      storeType: "Premium",
      features: ["Premium Brands", "Personal Shopping"],
    },
  },
  {
    id: "str-jaipur",
    name: "The Royal Fashion Arcade",
    brands: ["Selected HOMME", "Vero Moda", "Only"],
    isOpen: true,
    address: "Malviya Nagar, Near Gaurav Tower",
    city: "Jaipur",
    state: "Rajasthan",
    phone: "+91 141 2720021",
    coordinates: { lat: 26.8549, lng: 75.8058 },
    image: {
      src: "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=600&q=80",
      alt: "The Royal Fashion Arcade - Jaipur",
      sizes: {
        desktop: "600px",
        mobile: "400px",
      },
      objectFit: "object-cover",
      objectPosition: "object-center",
    },
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Malviya+Nagar+Near+Gaurav+Tower+Jaipur+Rajasthan",
    hours: "10:00 AM - 9:00 PM",
    metadata: {
      storeType: "Premium",
      features: ["Premium Brands", "Personal Shopping"],
    },
  },
  {
    id: "str-delhi",
    name: "The Connaught Plaza Emporium",
    brands: [
      "Jack & Jones",
      "Vero Moda",
      "Only",
      "Selected HOMME",
      "JJ Junior",
    ],
    isOpen: true,
    address: "Radial Road 3, E-Block, Connaught Place",
    city: "New Delhi",
    state: "Delhi",
    phone: "+91 11 43513344",
    coordinates: { lat: 28.6304, lng: 77.2177 },
    image: {
      src: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?auto=format&fit=crop&w=600&q=80",
      alt: "The Connaught Plaza Emporium - New Delhi",
      sizes: {
        desktop: "600px",
        mobile: "400px",
      },
      objectFit: "object-cover",
      objectPosition: "object-center",
    },
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Radial+Road+3+E-Block+Connaught+Place+New+Delhi",
    hours: "10:00 AM - 9:00 PM",
    metadata: {
      storeType: "Flagship",
      features: [
        "Premium Brands",
        "Personal Shopping",
        "Cafe",
        "Valet Parking",
      ],
    },
  },
];

// Main config object
export const storesConfig: StoresConfig = {
  section: {
    id: "stores",
    title: "Store Network",
    subtitle: "Premium Retail Destinations Across North India",
  },
  regionalFootprints: REGIONAL_FOOTPRINTS,
  stores: NORTH_INDIA_STORES,
  metadata: {
    sectionTitles: {
      network: "Our Network",
      locator: "Store Locator",
    },
  },
};
