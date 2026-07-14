// studio/schemas/schema.js

import { createSchema } from "sanity";

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

// Import reusable objects
import imageWithAlt from "./objects/imageWithAlt";
import cta from "./objects/cta";
import sectionHeader from "./objects/sectionHeader";

// Import about section schemas
import aboutShared from "./about/about-shared";
import aboutCta from "./about/cta-shared";
import aboutCulture from "./about/culture-shared";
import aboutFounders from "./about/founders-shared";
import aboutImpact from "./about/impact-shared";
import aboutJourney from "./about/journey-shared";

// Import careers schemas
import careers from "./careers/data";
import careersTypes from "./careers/types";

// Import contact schemas
import contactConnect from "./contact/connectData";
import contactCta from "./contact/ctaData";
import contactData from "./contact/data";
import contactFaq from "./contact/faqData";
import contactFloating from "./contact/floatingData";
import contactForm from "./contact/formData";
import contactHero from "./contact/heroData";
import contactPartnerships from "./contact/partnershipsData";
import contactPaths from "./contact/pathsData";
import contactVisit from "./contact/visitData";

// Import team schemas
import teamFounders from "./team/foundersData";
import teamLeadership from "./team/leadershipData";
import teamWings from "./team/wingsData";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: "default",
  types: [
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

    // About section
    aboutShared,
    aboutCta,
    aboutCulture,
    aboutFounders,
    aboutImpact,
    aboutJourney,

    // Careers
    careers,
    careersTypes,

    // Contact
    contactConnect,
    contactCta,
    contactData,
    contactFaq,
    contactFloating,
    contactForm,
    contactHero,
    contactPartnerships,
    contactPaths,
    contactVisit,

    // Team
    teamFounders,
    teamLeadership,
    teamWings,

    // Objects
    imageWithAlt,
    cta,
    sectionHeader,
  ],
});
