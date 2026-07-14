// studio/schemas/schema.js

// Import all your schemas
import hero from "@/features/hero/hero.data";
import brands from "@/features/brands/brands.data";
import discoverStore from "@/features/discoverStore/discoverStore.data";
import network from "@/features/network/network.data";
import trustSection from "@/features/trustSection/trustSection.data";
import pillars from "./pillars";
import partners from "./partners";
import stores from "./stores";
import verticals from "./verticals";
import navbar from "./navbar";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    // Document types
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
  ]),
});
