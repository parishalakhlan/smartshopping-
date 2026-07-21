// app/careers/components/schema.ts
import {
  FormData,
  FormErrors,
} from "@/features/careers/job Application/data/types";

export const validateForm = (data: FormData): FormErrors => {
  const errors: FormErrors = {};

  if (!data.fullName.trim()) errors.fullName = "Full name is required.";

  if (!data.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!data.phone.trim()) {
    errors.phone = "Phone number is required.";
  } else if (
    !/^(?:\+91[\-\s]?)?[6-9]\d{9}$/.test(data.phone.replace(/[\s\-]/g, ""))
  ) {
    errors.phone = "Please enter a valid Indian phone number.";
  }

  if (!data.currentCity.trim())
    errors.currentCity = "Current city is required.";
  if (!data.yearsOfExperience.trim())
    errors.yearsOfExperience = "Experience level is required.";

  if (!data.resume) {
    errors.resume = "A PDF copy of your resume is required.";
  } else {
    if (data.resume.type !== "application/pdf") {
      errors.resume = "Only PDF files are accepted.";
    }
    if (data.resume.size > 5 * 1024 * 1024) {
      errors.resume = "File size exceeds the 5 MB threshold.";
    }
  }

  return errors;
};
