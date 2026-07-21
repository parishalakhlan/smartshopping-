export interface ModalJobDetails {
  vacancyId: string;
  positionTitle: string;
  department: string;
  location: string;
  jobType: string;
  metaTags?: string[]; // [Department, Location, Type]
}

export interface ApplicationFormData {
  fullName: string;
  email: string;
  phone: string;
  currentCity: string;
  experience: string;
  coverLetter: string;
}

export interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  currentCity?: string;
  experience?: string;
  resume?: string;
  global?: string;
}

export const validateForm = (
  data: ApplicationFormData,
  file: File | null,
): FormErrors => {
  const errors: FormErrors = {};

  if (!data.fullName.trim()) errors.fullName = "Full name is required";

  if (!data.email.trim()) {
    errors.email = "Email address is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address";
  }

  if (!data.phone.trim()) {
    errors.phone = "Phone number is required";
  } else if (
    !/^(?:\+91[\-\s]?)?[6-9]\d{9}$/.test(data.phone.replace(/\s/g, ""))
  ) {
    errors.phone = "Please enter a valid Indian phone number";
  }

  if (!data.currentCity.trim()) errors.currentCity = "Current city is required";
  if (!data.experience.trim())
    errors.experience = "Years of experience is required";

  if (!file) {
    errors.resume = "Please upload your resume";
  } else {
    if (file.type !== "application/pdf") {
      errors.resume = "Only PDF format is accepted";
    }
    if (file.size > 5 * 1024 * 1024) {
      errors.resume = "File size must not exceed 5 MB";
    }
  }

  return errors;
};
