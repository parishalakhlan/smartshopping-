// app/careers/components/types.ts
export interface JobDetails {
  title: string;
  department: string;
  location: string;
}

export interface FormData {
  fullName: string;
  email: string;
  phone: string;
  currentCity: string;
  yearsOfExperience: string;
  coverLetter: string;
  resume: File | null;
}

export interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  currentCity?: string;
  yearsOfExperience?: string;
  resume?: string;
  server?: string;
}
