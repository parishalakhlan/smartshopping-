import React from "react";

export interface ConnectTileItem {
  id: string;
  channel: string;
  value: string;
  purpose: string;
  responseTime: string;
  availability: string;
  actionUrl: string;
}

export const connectTiles: ConnectTileItem[] = [
  {
    id: "telephone",
    channel: "Voice Desk",
    value: "+91 9138810037 ",
    purpose: "Immediate styling queries and real-time order configurations.",
    responseTime: "Instant",
    availability: "Mon-Sat 10am - 8:30pm",
    actionUrl: "tel:+18005557467",
  },
  {
    id: "whatsapp",
    channel: "WhatsApp Lounge",
    value: "chat.smartshopping",
    purpose: "Drop active reference imagery or share live locations.",
    responseTime: "< 5 Mins",
    availability: "24/7 Monitored",
    actionUrl: "https://wa.me/+919138810037",
  },
  {
    id: "email",
    channel: "Digital Inbox",
    value: "concierge@smartshopping.com",
    purpose: "For complex issues, lookbook submissions, or archival tracking.",
    responseTime: "1-2 Hours",
    availability: "Every Day",
    actionUrl: "mailto:concierge@smartshopping.com",
  },
];
