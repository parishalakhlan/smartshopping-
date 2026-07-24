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
  address: "4PMV+VR6, Gurudwara Rd, Model Town, Hisar, Haryana 125005, India",
  landmark: "Model Town Hisar Haryana.",
  mapLabel: "HQ HISAR",
  mapLink:
    "https://www.google.com/maps/place/Smart+Shopping/@29.1346621,75.7419293,17z/data=!3m1!4b1!4m6!3m5!1s0x3912336ceb407dff:0xc6e4b64bfaa60d6c!8m2!3d29.1346574!4d75.7445042!16s%2Fg%2F11y2b2k_w2?entry=ttu&g_ep=EgoyMDI2MDcxNS4wIKXMDSoASAFQAw%3D%3D",
  featureImage: "/showrooms/showroom3.webp",
};
