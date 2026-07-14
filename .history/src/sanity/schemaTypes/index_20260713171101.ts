import { type SchemaTypeDefinition } from "sanity";
import { siteSettings } from "./documents/siteSettings";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [siteSettings],
};
