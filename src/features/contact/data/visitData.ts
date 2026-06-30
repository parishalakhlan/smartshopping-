export interface LocationDetails {
  tag: string;
  title: string;
  description: string;
  address: string;
  landmark: string;
  mapLabel: string;
  mapLink: string;
  featureImage: string;
}

export const flagshipLocation: LocationDetails = {
  tag: "Corporate Hub",
  title: "Our Flagship Studio",
  description:
    "Our head office serves as the central design room where collection trajectories are audited and spatial innovations are developed.",
  address: "Plot 42, Industrial & Business Park, Phase 1, Chandigarh",
  landmark: "Adjacent to Elante Premium Retail Hub. Ample parking available.",
  mapLabel: "HQ CHANDIGARH",
  mapLink:
    "https://maps.google.com/?q=Plot+42,+Industrial+&+Business+Park,+Phase+1,+Chandigarh",
  featureImage:
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
};
