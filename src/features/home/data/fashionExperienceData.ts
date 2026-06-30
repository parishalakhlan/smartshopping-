// features/home/data/fashionExperienceData.ts

export interface ExperienceMoment {
  title: string;
  subtitle: string;
  image: string;
}

export interface ExperienceData {
  tagline: string;
  headerTitle: string;
  headerDescription: string;
  moments: ExperienceMoment[];
}

export const fashionExperienceData: ExperienceData = {
  tagline: "The Experience",
  headerTitle: "A Space Where Time Slows Down.",
  headerDescription:
    "We believe shopping shouldn't be a frictionless click or a rushed chore. Our stores are warm, tactile destinations where world-class fashion is brought directly to your neighborhood.",
  moments: [
    {
      title: "Curated Spaces",
      subtitle:
        "A physical sanctuary designed to let you disconnect and discover at your own pace.",
      image:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "The Family Wardrobe",
      subtitle:
        "Bringing premium design together for every generation, under one roof.",
      image:
        "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Modern Flagships",
      subtitle:
        "Architectural statements built to celebrate high design within local communities.",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Expert Guidance",
      subtitle:
        "Personal style consultants dedicated to helping you craft your signature look.",
      image:
        "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1200&auto=format&fit=crop",
    },
  ],
};
