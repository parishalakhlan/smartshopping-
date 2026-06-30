export interface ActionChip {
  id: "call" | "whatsapp" | "email" | "directions" | "stores";
  label: string;
  angle: number;
}

export interface DaySchedule {
  day: string;
  hours: string;
  isToday: boolean;
}

export interface PartnershipItem {
  id: string;
  title: string;
  desc: string;
  email: string;
}

export const actionChips: ActionChip[] = [
  { id: "call", label: "Call", angle: 0 },
  { id: "whatsapp", label: "WhatsApp", angle: 72 },
  { id: "email", label: "Email", angle: 144 },
  { id: "directions", label: "Directions", angle: 216 },
  { id: "stores", label: "Stores", angle: 288 },
];

export const weeklyHours: DaySchedule[] = [
  { day: "Monday", hours: "10:00 AM - 8:30 PM", isToday: false },
  { day: "Tuesday", hours: "10:00 AM - 8:30 PM", isToday: false },
  { day: "Wednesday", hours: "10:00 AM - 8:30 PM", isToday: false },
  { day: "Thursday", hours: "10:00 AM - 8:30 PM", isToday: false },
  { day: "Friday", hours: "10:00 AM - 9:30 PM", isToday: false },
  { day: "Saturday", hours: "10:00 AM - 9:30 PM", isToday: false },
  { day: "Sunday", hours: "11:00 AM - 7:00 PM", isToday: false },
];

export const partnerships: PartnershipItem[] = [
  {
    id: "biz",
    title: "Business Partnerships",
    desc: "Collaborate on structural luxury retail expansions and multi-brand placements.",
    email: "partners@smartshopping.com",
  },
  {
    id: "fran",
    title: "Franchise Enquiries",
    desc: "Scale premium fashion footprints with bespoke operational support frameworks.",
    email: "franchise@smartshopping.com",
  },
  {
    id: "vend",
    title: "Vendor Communication",
    desc: "Introduce new high-end lines or supply premium materials directly.",
    email: "vendors@smartshopping.com",
  },
  {
    id: "media",
    title: "Media & PR Enquiries",
    desc: "Inquire regarding seasonal editorial looks, lookbooks, or corporate features.",
    email: "press@smartshopping.com",
  },
];
