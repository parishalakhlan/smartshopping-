// src/sanity/schemas/index.js

// Object schemas
import imageWithAlt from "./objects/imageWithAlt";
import cta from "./objects/cta";
import sectionHeader from "./objects/sectionHeader";

// Page schemas
import hero from "@/objects/hero";
import brands from "./brands";
import discoverStore from "./discoverStore";
import network from "./network";
import trustSection from "./trustSection";
import pillars from "./pillars";
import partners from "./partners";
import stores from "./stores";
import verticals from "./verticals";
import navbar from "./navbar";
import about from "./about";
import careers from "./careers";
import contact from "./contact";
import team from "./team";

export const schemaTypes = [
  // Objects
  imageWithAlt,
  cta,
  sectionHeader,

  // Pages
  hero,
  brands,
  discoverStore,
  network,
  trustSection,
  pillars,
  partners,
  stores,
  verticals,
  navbar,
  about,
  careers,
  contact,
  team,
];
