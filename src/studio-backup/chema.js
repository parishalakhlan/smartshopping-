// studio/schemas/schema.js

// Import all your schemas
import hero from "./hero";
import brands from "./brands";
import discoverStore from "./discoverStore";
import network from "./network";
import trustSection from "./trustSection";
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
