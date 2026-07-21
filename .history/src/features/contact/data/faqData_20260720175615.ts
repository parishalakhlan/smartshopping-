export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
export const faqData: FAQItem[] = [
  {
    id: "faq-1",
    question: "How can my brand collaborate with Smart Shopping?",
    answer:
      "We're always looking to partner with brands that share our vision for delivering exceptional shopping experiences. Contact our business team to discuss expansion opportunities and partnership possibilities.",
  },
  {
    id: "faq-2",
    question: "Do you offer retail expansion support for brands?",
    answer:
      "Yes. From identifying the right locations to creating premium in-store experiences, we work closely with our partners to support successful retail growth across emerging markets.",
  },
  {
    id: "faq-3",
    question: "Who should I contact for business or franchise inquiries?",
    answer:
      "Simply send us your details through our contact form, and the appropriate team will reach out to discuss your requirements, answer your questions, and guide you through the process.",
  },
];
