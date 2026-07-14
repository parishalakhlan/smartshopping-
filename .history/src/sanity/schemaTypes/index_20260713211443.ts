import { type SchemaTypeDefinition } from "sanity";
import { siteSettings } from "./documents/siteSettings";
import { home } from "./documents/home";
import { founder } from "./objects/team/founder";
import { teamMember } from "./objects/team/teamMember";
import { operationalWing } from "./objects/team/operationalWing";
import { trustSection } from "./objects/home/trustSection";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    siteSettings,
    home,
    trustSection,
    founder,
    teamMember,
    operationalWing,
  ],
};
