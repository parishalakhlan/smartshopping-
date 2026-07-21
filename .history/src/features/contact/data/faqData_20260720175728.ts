export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
export const faqData: FAQItem[] = [
  {
    id: "faq-1",
    question: "How can I connect with the Smart Shopping team?",
    answer:
      "Whether you're a customer, brand partner, or job seeker, you can reach us through phone, email, or WhatsApp. We believe every conversation matters, and our team is always happy to help.",
  },
  {
    id: "faq-2",
    question:
      "I'm interested in partnering with Smart Shopping. Who should I contact?",
    answer:
      "For brand collaborations, retail partnerships, or business opportunities, simply contact us using our business email or phone number. Our partnership team will guide you through the next steps.",
  },
  {
    id: "faq-3",
    question:
      "Can I visit your stores before making a purchase or partnership decision?",
    answer:
      "Of course. We encourage you to experience Smart Shopping in person. Visit your nearest store, explore our retail environment, or contact us beforehand if you need any assistance planning your visit.",
  },
];
