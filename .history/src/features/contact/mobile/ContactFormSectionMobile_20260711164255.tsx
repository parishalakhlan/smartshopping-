"use client";

import React, { useState } from "react";
import { CheckCircle2, ArrowLeft, ArrowRight, Loader2 } from "lucide-react";
import { identityRoles, formMetadata } from "@/features/contact/data/formData";
import { FloatingSectionLabel } from "@/features/contact/FloatingSectionLabel";

interface ContactFormSectionMobileProps {
  initialRole?: string;
}

export const ContactFormSectionMobile: React.FC<
  ContactFormSectionMobileProps
> = ({ initialRole = "" }) => {
  const [formStep, setFormStep] = useState<number>(1);
  const [roleType, setRoleType] = useState<string>(initialRole);
  const [formName, setFormName] = useState<string>("");
  const [formEmail, setFormEmail] = useState<string>("");
  const [formMessage, setFormMessage] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [formSuccess, setFormSuccess] = useState<boolean>(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formMessage.trim() || !formEmail.trim() || !formName.trim()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSuccess(true);
    }, 1200);
  };

  if (formSuccess) {
    return (
      <section className="py-12 bg-background-secondary/30 border-b border-border-main lg:hidden">
        <div className="px-4 text-left">
          <div className="bg-background-main border border-border-main p-6 text-center space-y-4">
            <CheckCircle2 className="w-10 h-10 text-accent mx-auto" />
            <h3 className="font-serif text-xl font-bold text-text-primary">
              Message Sent
            </h3>
            <p className="text-text-secondary text-xs leading-relaxed">
              Thank you for reaching out. A platform representative will contact
              you shortly.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="form-mobile"
      className="py-12 bg-background-secondary/30 border-b border-border-main lg:hidden"
    >
      <div className="px-4 text-left space-y-6">
        <FloatingSectionLabel num="05" text="Contact Form" />

        <div className="space-y-1">
          <h2 className="font-serif text-2xl font-bold tracking-tight text-text-primary">
            {formMetadata.heading}
          </h2>
          <p className="text-text-secondary text-xs leading-relaxed">
            {formMetadata.subheading}
          </p>
        </div>

        <div className="bg-background-main border border-border-main p-5">
          {/* Progress Indicator */}
          <div className="flex items-center space-x-2 mb-6">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center space-x-1.5 flex-grow">
                <div
                  className={`h-1 flex-grow transition-all duration-200 ${
                    formStep >= s ? "bg-text-primary" : "bg-border-main"
                  }`}
                />
                <span
                  className={`font-mono text-[9px] font-bold ${formStep === s ? "text-accent" : "text-text-primary/30"}`}
                >
                  0{s}
                </span>
              </div>
            ))}
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-5">
            {/* STEP 1: ROLE SELECTION */}
            {formStep === 1 && (
              <div className="space-y-3.5">
                <label className="text-[10px] font-bold text-text-primary uppercase tracking-wider block">
                  Step 1: Who are you?
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {identityRoles.map((role) => (
                    <button
                      type="button"
                      key={role.value}
                      onClick={() => {
                        setRoleType(role.value);
                        setFormStep(2);
                      }}
                      className={`p-3.5 border text-center font-serif text-xs font-bold transition-all ${
                        roleType === role.value
                          ? "bg-text-primary border-text-primary text-white"
                          : "bg-background-main border-border-main text-text-primary active:border-border-hover"
                      }`}
                    >
                      {role.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 2: PERSONAL METRICS */}
            {formStep === 2 && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-[10px] font-bold text-text-primary uppercase tracking-wider block">
                    Step 2: Your Details
                  </label>
                  <span className="text-[9px] bg-background-secondary text-accent px-2 py-0.5 font-mono font-bold">
                    {roleType || "Not Selected"}
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="space-y-1">
                    <span className="text-[11px] text-text-secondary font-medium block">
                      Full Name
                    </span>
                    <input
                      type="text"
                      required
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="e.g. John Doe"
                      className="w-full text-xs p-3 border border-border-main rounded-none focus:outline-none focus:border-text-primary bg-background-main text-text-primary"
                    />
                  </div>

                  <div className="space-y-1">
                    <span className="text-[11px] text-text-secondary font-medium block">
                      Email Address
                    </span>
                    <input
                      type="email"
                      required
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      placeholder="name@company.com"
                      className="w-full text-xs p-3 border border-border-main rounded-none focus:outline-none focus:border-text-primary bg-background-main text-text-primary"
                    />
                  </div>
                </div>

                <div className="flex justify-between items-center pt-2">
                  <button
                    type="button"
                    onClick={() => setFormStep(1)}
                    className="text-[11px] font-bold text-text-primary/60 uppercase tracking-wider flex items-center gap-1.5"
                  >
                    <ArrowLeft className="w-3 h-3" /> Back
                  </button>
                  <button
                    type="button"
                    disabled={!formName.trim() || !formEmail.trim()}
                    onClick={() => setFormStep(3)}
                    className="px-5 py-2.5 bg-button-primary-bg text-button-primary-text text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5 disabled:opacity-40"
                  >
                    Next <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: MESSAGE CORE */}
            {formStep === 3 && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-[10px] font-bold text-text-primary uppercase tracking-wider block">
                    Step 3: Message
                  </label>
                  <span className="text-[9px] bg-background-secondary text-accent px-2 py-0.5 font-mono font-bold">
                    {formName}
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] text-text-secondary font-medium block">
                    Inquiry Content
                  </span>
                  <textarea
                    rows={4}
                    required
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    placeholder="Describe your design specifications or brand targets..."
                    className="w-full text-xs p-3 border border-border-main rounded-none focus:outline-none focus:border-text-primary bg-background-main text-text-primary resize-none"
                  />
                </div>

                <div className="flex justify-between items-center pt-2">
                  <button
                    type="button"
                    disabled={isSubmitting}
                    onClick={() => setFormStep(2)}
                    className="text-[11px] font-bold text-text-primary/60 uppercase tracking-wider flex items-center gap-1.5 disabled:opacity-40"
                  >
                    <ArrowLeft className="w-3 h-3" /> Back
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting || !formMessage.trim()}
                    className="px-6 py-3 bg-button-secondary-bg text-button-secondary-text text-[11px] font-bold uppercase tracking-wider flex items-center gap-2 disabled:opacity-40"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />{" "}
                        Processing
                      </>
                    ) : (
                      <>
                        Submit Inquiry <ArrowRight className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
