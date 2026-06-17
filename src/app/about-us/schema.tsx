import React from "react";
import { Organization, WithContext } from "schema-dts";

export function CorporateWholeLetterSchema() {
  const schemaJson: WithContext<Organization> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Smart Shopping",
    url: "https://fashionfranchise.com",
    foundingDate: "2009",
    founders: [
      { "@type": "Person", name: "Vikram Singh" },
      { "@type": "Person", name: "Vinod Kumar" },
    ],
    description:
      "North India's premier fashion retail group managing 27+ experiential store assets across 7 states.",
    knowsAbout: [
      "Fashion Retail",
      "Luxury Curation",
      "Sub-metro Supply Logistics",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
    />
  );
}
