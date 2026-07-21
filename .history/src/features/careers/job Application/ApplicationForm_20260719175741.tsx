// app/careers/components/ApplicationForm.tsx
"use client";

import React, { useState, useTransition } from "react";
import {
  JobDetails,
  FormData,
  FormErrors,
} from "@/features/careers/job Application/data/types";
import { validateForm } from "@/features/careers/job Application/data/schema";
import { ResumeUploader } from "./ResumeUploader";
import { submitApplication } from "@/features/careers/job Application/data/actions";

interface ApplicationFormProps {
  job: JobDetails;
  onSuccess: () => void;
}

export const ApplicationForm: React.FC<ApplicationFormProps> = ({
  job,
  onSuccess,
}) => {
  const [isPending, startTransition] = useTransition();
  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    currentCity: "",
    yearsOfExperience: "",
    coverLetter: "",
    resume: null,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleFileChange = (file: File | null) => {
    setFormData((prev) => ({ ...prev, resume: file }));
    if (errors.resume) {
      setErrors((prev) => ({ ...prev, resume: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    startTransition(async () => {
      const submitData = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (value !== null) submitData.append(key, value);
      });
      submitData.append("jobTitle", job.title);
      submitData.append("department", job.department);
      submitData.append("location", job.location);

      const result = await submitApplication(null, submitData);

      if (result.success) {
        onSuccess();
      } else {
        setErrors((prev) => ({ ...prev, server: result.error }));
      }
    });
  };

  const textInputClassName = (fieldName: keyof FormErrors) => `
    w-full border-b bg-transparent py-2.5 text-sm font-light text-neutral-900 focus:outline-none transition-colors duration-200 focus:border-neutral-900 placeholder:text-neutral-300
    ${errors[fieldName] ? "border-red-400" : "border-neutral-200"}
  `;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {errors.server && (
        <div className="p-3 border border-red-200 bg-red-50/30 text-xs text-red-600 font-light tracking-wide">
          {errors.server}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        <div>
          <label className="block text-xs uppercase tracking-widest text-neutral-500 font-medium">
            Full Name *
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            disabled={isPending}
            className={textInputClassName("fullName")}
            placeholder="E.g., Ananya Sharma"
          />
          {errors.fullName && (
            <p className="mt-1 text-xs text-red-600 font-light">
              {errors.fullName}
            </p>
          )}
        </div>

        <div>
          <label className="block text-xs uppercase tracking-widest text-neutral-500 font-medium">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            disabled={isPending}
            className={textInputClassName("email")}
            placeholder="name@domain.com"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-600 font-light">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label className="block text-xs uppercase tracking-widest text-neutral-500 font-medium">
            Phone Number *
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            disabled={isPending}
            className={textInputClassName("phone")}
            placeholder="+91 98765 43210"
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-600 font-light">
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label className="block text-xs uppercase tracking-widest text-neutral-500 font-medium">
            Current City *
          </label>
          <input
            type="text"
            name="currentCity"
            value={formData.currentCity}
            onChange={handleInputChange}
            disabled={isPending}
            className={textInputClassName("currentCity")}
            placeholder="E.g., Mumbai"
          />
          {errors.currentCity && (
            <p className="mt-1 text-xs text-red-600 font-light">
              {errors.currentCity}
            </p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-xs uppercase tracking-widest text-neutral-500 font-medium mb-1">
          Years of Experience *
        </label>
        <div className="flex gap-4 pt-1">
          {["0-2", "3-5", "5-8", "8+"].map((exp) => (
            <label
              key={exp}
              className="flex items-center cursor-pointer group select-none"
            >
              <input
                type="radio"
                name="yearsOfExperience"
                value={exp}
                checked={formData.yearsOfExperience === exp}
                onChange={handleInputChange}
                disabled={isPending}
                className="sr-only"
              />
              <span
                className={`px-4 py-1.5 border text-xs tracking-wider transition-colors duration-200 
                ${formData.yearsOfExperience === exp ? "bg-neutral-900 border-neutral-900 text-white" : "border-neutral-200 text-neutral-600 hover:border-neutral-400"}`}
              >
                {exp}
              </span>
            </label>
          ))}
        </div>
        {errors.yearsOfExperience && (
          <p className="mt-1.5 text-xs text-red-600 font-light">
            {errors.yearsOfExperience}
          </p>
        )}
      </div>

      <ResumeUploader
        file={formData.resume}
        onChange={handleFileChange}
        error={errors.resume}
      />

      <div>
        <label className="block text-xs uppercase tracking-widest text-neutral-500 font-medium mb-2">
          Cover Letter / Structural Note (Optional)
        </label>
        <textarea
          name="coverLetter"
          value={formData.coverLetter}
          onChange={handleInputChange}
          disabled={isPending}
          rows={3}
          className="w-full border border-neutral-200 bg-transparent p-3 text-sm font-light text-neutral-900 focus:outline-none transition-colors duration-200 focus:border-neutral-900 placeholder:text-neutral-300 resize-none"
          placeholder="Share anything specific about your background..."
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-neutral-900 text-white font-medium text-xs uppercase tracking-widest py-3.5 hover:bg-neutral-800 transition-colors duration-300 disabled:bg-neutral-200 disabled:text-neutral-400 flex items-center justify-center space-x-2"
        >
          {isPending ? (
            <>
              <svg
                className="animate-spin h-4 w-4 text-neutral-400"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              <span>Submitting...</span>
            </>
          ) : (
            <span>Submit Application</span>
          )}
        </button>
      </div>
    </form>
  );
};
