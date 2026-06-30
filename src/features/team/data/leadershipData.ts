// @/data/leadershipData.ts
import { TeamMember } from "@/types/team";

export const SHARED_LEADERSHIP_DATA: TeamMember[] = [
  {
    id: "lead-1",
    name: "Elena Rostova",
    designation: "Director of Textile Design",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600",
    philosophy:
      "The tactile response of a material dictates its emotional value before the eye even processes color.",
    experience:
      "Spent 12 years collaborating with generational mills across Northern Italy, standardizing low-impact organic washing metrics.",
    education:
      "Master of Fine Arts in Fiber Science — Kyoto University of the Arts",
    responsibilities: [
      "Overseeing raw yarn sourcing pipelines and tactile quality audit baselines.",
      "Directing zero-waste biological dyeing research protocols.",
      "Formulating structural stress tolerances for high-wear everyday staples.",
    ],
  },
  {
    id: "lead-2",
    name: "Marcus Vance",
    designation: "Head of Retail Architecture",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600",
    philosophy:
      "A retail space must operate like a beautifully timed silence; it frames what matters without requesting attention.",
    experience:
      "Designed commercial cultural centers and modular exhibition pop-ups in Copenhagen, Tokyo, and Berlin.",
    education:
      "Bachelor of Architecture — Architectural Association School (AA London)",
    responsibilities: [
      "Managing space-planning blueprints for physical retail locations.",
      "Optimizing atmospheric variables including low-frequency sound dampening and natural lighting indexes.",
      "Ensuring regional sustainable material alignment across structural builds.",
    ],
  },
];
