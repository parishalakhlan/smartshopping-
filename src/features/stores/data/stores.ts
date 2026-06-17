// src/features/stores/data/stores.ts

export interface Store {
  id: string;
  name: string;
  brands: string[];
  isOpen: boolean;
  address: string;
  city: string;
  state: string;
  phone: string;
  coordinates: { lat: number; lng: number };
  image: string;
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
    image:
      "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=600&q=80",
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
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80",
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
    image:
      "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=600&q=80",
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
    image:
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=600&q=80",
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
    image:
      "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=600&q=80",
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
    image:
      "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?auto=format&fit=crop&w=600&q=80",
  },
];

export const REGIONAL_FOOTPRINTS: StateFootprint[] = [
  {
    id: "haccess-haryana",
    name: "Haryana",
    count: 12,
    svgPath:
      "M 42 35 C 46 32, 50 36, 54 33 C 58 35, 60 42, 63 46 C 58 52, 54 58, 48 64 C 42 60, 40 52, 38 48 Z",
    labelX: 49,
    labelY: 45,
    cities: ["Hisar", "Gurugram", "Panipat", "Ambala"],
  },
  {
    id: "haccess-punjab",
    name: "Punjab",
    count: 8,
    svgPath:
      "M 25 22 C 32 18, 42 16, 46 20 C 48 26, 44 32, 42 35 C 36 38, 30 34, 25 22 Z",
    labelX: 36,
    labelY: 26,
    cities: ["Ludhiana", "Amritsar", "Jalandhar", "Patiala"],
  },
  {
    id: "haccess-rajasthan",
    name: "Rajasthan",
    count: 5,
    svgPath:
      "M 12 55 C 22 50, 32 45, 38 48 C 40 56, 44 64, 46 72 C 34 84, 24 88, 15 78 C 10 70, 8 62, 12 55 Z",
    labelX: 28,
    labelY: 66,
    cities: ["Jaipur", "Jodhpur", "Udaipur", "Kota"],
  },
  {
    id: "haccess-delhi",
    name: "Delhi",
    count: 4,
    svgPath: "M 53 47 C 55 46, 57 46, 58 48 C 58 50, 56 52, 54 51 Z",
    labelX: 57,
    labelY: 51,
    cities: ["New Delhi", "South Delhi"],
  },
  {
    id: "haccess-chandigarh",
    name: "Chandigarh",
    count: 2,
    svgPath: "M 46 14 C 49 13, 51 13, 52 15 C 51 17, 48 17, 46 16 Z",
    labelX: 52,
    labelY: 12,
    cities: ["Chandigarh Hub"],
  },
];
