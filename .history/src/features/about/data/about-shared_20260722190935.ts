// constants/about-shared.ts
export const HERO_DATA = {
  label: "ABOUT SMART SHOPPING",
  headlineFirstLine: "Great Fashion Should",
  headlineSecondLine: "Never Depend On",
  headlineThirdLine: "Where You Live.",
  supportingParagraph:
    "For years, premium fashion experiences were concentrated in major cities. We believed communities beyond metros deserved the same access, the same confidence, and the same opportunities to express themselves through fashion.",
  backdropImage: "/showrooms/showroom3.webp",
  footerMeta: "The Belief Infrastructure // 2026",
  ctaText: "Continue Journey",
};

export const titleContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

export const textRevealVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.95 },
  },
};
