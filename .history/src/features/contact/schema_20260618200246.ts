import * as zod from "zod";
// Define enum object

export const contactFormSchema = zod.object({
  name: zod
    .string()
    .min(2, { message: "Please provide your full name or entity title." }),
  email: zod
    .string()
    .email({ message: "A valid corporate or personal email is required." }),
  phone: zod.string().regex(/^[6-9]\d{9}$/, {
    message: "Provide a valid 10-digit Indian mobile number.",
  }),
  inquiryType: zod
    .enum([
      "Customer Support",
      "Partnership",
      "Expansion",
      "Careers",
      "General Inquiry",
    ] as const)
    .describe("Please select a specific operational division."),
  message: zod.string().min(10, {
    message: "Inquiry summary must contain structural context (min 10 chars).",
  }),
});

export type ContactFormValues = zod.infer<typeof contactFormSchema>;
