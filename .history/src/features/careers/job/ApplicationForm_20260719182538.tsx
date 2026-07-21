"use client";

import React, { useState, useTransition } from "react";
import { ArrowUpRight } from "lucide-react";
import { ResumeUploader } from "./ResumeUploader";
import {
  validateForm,
  type ApplicationFormData,
  type FormErrors,
  type ModalJobDetails,
} from "./schema";
import { submitApplication } from "../actions/submitApplication";

interface FormProps {
  jobDetails: ModalJobDetails;
  onSuccess: () => void;
}

export const ApplicationForm: React.FC<FormProps> = ({
  jobDetails,
  onSuccess,
}) => {
  const [isPending, startTransition] = useTransition();
  const [errors, setErrors] = useState<FormErrors>({});
  const [resume, setResume] = useState<File | null>(null);

  const [formData, setFormData] = useState<ApplicationFormData>({
    fullName: "",
    email: "",
    phone: "",
    currentCity: "",
    experience: "",
    coverLetter: "",
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

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const localValidationErrors = validateForm(formData, resume);

    if (Object.keys(localValidationErrors).length > 0) {
      setErrors(localValidationErrors);
      return;
    }

    startTransition(async () => {
      const payload = new FormData();
      Object.entries(formData).forEach(([key, val]) =>
        payload.append(key, val),
      );
      if (resume) payload.append("resume", resume);
      payload.append("positionTitle", jobDetails.positionTitle);
      payload.append("vacancyId", jobDetails.vacancyId);

      const result = await submitApplication(payload);
      if (result.success) {
        onSuccess();
      } else {
        setErrors({
          global: result.error || "Something went wrong. Please try again.",
        });
      }
    });
  };

  const inputClass = (fieldError?: string) => `
    w-full bg-background-secondary/50 border p-2.5 font-medium text-text-primary 
    text-xs focus:outline-none rounded-none placeholder:text-text-secondary/40 transition-colors
    ${fieldError ? "border-accent focus:border-accent" : "border-border-main focus:border-text-primary"}
  `;

  return (
    <form onSubmit={handleFormSubmit} className="space-y-5 text-left font-sans">
      {errors.global && (
        <div className="p-3 border border-accent bg-accent/5 text-[11px] font-medium text-accent">
          {errors.global}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-[11px] text-text-secondary font-medium block">
            Full Name <span className="text-accent">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            disabled={isPending}
            placeholder="E.g., Rohan Sharma"
            className={inputClass(errors.fullName)}
          />
          {errors.fullName && (
            <span className="text-[10px] text-accent font-medium block">
              {errors.fullName}
            </span>
          )}
        </div>

        <div className="space-y-1">
          <label className="text-[11px] text-text-secondary font-medium block">
            Email Address <span className="text-accent">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            disabled={isPending}
            placeholder="name@domain.com"
            className={inputClass(errors.email)}
          />
          {errors.email && (
            <span className="text-[10px] text-accent font-medium block">
              {errors.email}
            </span>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-[11px] text-text-secondary font-medium block">
            Phone Number <span className="text-accent">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            disabled={isPending}
            placeholder="+91 XXXXX XXXXX"
            className={inputClass(errors.phone)}
          />
          {errors.phone && (
            <span className="text-[10px] text-accent font-medium block">
              {errors.phone}
            </span>
          )}
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1">
            <label className="text-[11px] text-text-secondary font-medium block">
              Current City <span className="text-accent">*</span>
            </label>
            <input
              type="text"
              name="currentCity"
              value={formData.currentCity}
              onChange={handleInputChange}
              disabled={isPending}
              placeholder="Mumbai"
              className={inputClass(errors.currentCity)}
            />
            {errors.currentCity && (
              <span className="text-[10px] text-accent font-medium block">
                {errors.currentCity}
              </span>
            )}
          </div>

          <div className="space-y-1">
            <label className="text-[11px] text-text-secondary font-medium block">
              Experience (Years) <span className="text-accent">*</span>
            </label>
            <input
              type="number"
              min="0"
              max="50"
              name="experience"
              value={formData.experience}
              onChange={handleInputChange}
              disabled={isPending}
              placeholder="3"
              className={inputClass(errors.experience)}
            />
            {errors.experience && (
              <span className="text-[10px] text-accent font-medium block">
                {errors.experience}
              </span>
            )}
          </div>
        </div>
      </div>

      <ResumeUploader
        file={resume}
        onChange={(f) => {
          setResume(f);
          setErrors((prev) => ({ ...prev, resume: undefined }));
        }}
        error={errors.resume}
      />

      <div className="space-y-1">
        <label className="text-[11px] text-text-secondary font-medium block">
          Cover Letter (Optional)
        </label>
        <textarea
          name="coverLetter"
          rows={4}
          value={formData.coverLetter}
          onChange={handleInputChange}
          disabled={isPending}
          placeholder="Write a brief statement on what makes you a good fit..."
          className={`${inputClass()} resize-none`}
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={isPending}
          className="w-full py-3.5 bg-button-primary-bg text-button-primary-text font-medium text-xs uppercase tracking-widest flex items-center justify-center gap-2 rounded-none hover:bg-primary-hover active:bg-primary-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isPending ? "Submitting..." : "Submit Application"}
          {!isPending && <ArrowUpRight className="w-3.5 h-3.5 text-accent" />}
        </button>
      </div>
    </form>
  );
};
