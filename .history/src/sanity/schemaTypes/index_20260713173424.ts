import { type SchemaTypeDefinition } from "sanity";
import { siteSettings } from "./documents/siteSettings";
import { home } from "./documents/home";

import { trustSection } from "./objects/home/trustSection";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [siteSettings, home, trustSection],
};
