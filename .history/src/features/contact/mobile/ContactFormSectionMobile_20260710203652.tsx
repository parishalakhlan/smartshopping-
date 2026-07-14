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
      <section className="py-12 bg-[#F5F2EC]/30 border-b border-[#163B65]/10 lg:hidden">
        <div className="px-4 text-left">
          <div className="bg-[#FFFFFF] border border-[#163B65]/10 p-6 text-center space-y-4">
            <CheckCircle2 className="w-10 h-10 text-[#F97316] mx-auto" />
            <h3 className="font-serif text-xl font-bold text-[#163B65]">
              Message Sent
            </h3>
            <p className="text-[#475569] text-xs leading-relaxed">
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
      className="py-12 bg-[#F5F2EC]/30 border-b border-[#163B65]/10 lg:hidden"
    >
      <div className="px-4 text-left space-y-6">
        <FloatingSectionLabel num="05" text="Contact Form" />

        <div className="space-y-1">
          <h2 className="font-serif text-2xl font-bold tracking-tight text-[#163B65]">
            {formMetadata.heading}
          </h2>
          <p className="text-[#475569] text-xs leading-relaxed">
            {formMetadata.subheading}
          </p>
        </div>

        <div className="bg-[#FFFFFF] border border-[#163B65]/10 p-5">
          {/* Progress Indicator */}
          <div className="flex items-center space-x-2 mb-6">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center space-x-1.5 flex-grow">
                <div
                  className={`h-1 flex-grow transition-all duration-200 ${
                    formStep >= s ? "bg-[#163B65]" : "bg-[#163B65]/10"
                  }`}
                />
                <span
                  className={`font-mono text-[9px] font-bold ${formStep === s ? "text-[#F97316]" : "text-[#163B65]/30"}`}
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
                <label className="text-[10px] font-bold text-[#163B65] uppercase tracking-wider block">
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
                          ? "bg-[#163B65] border-[#163B65] text-[#FFFFFF]"
                          : "bg-[#FFFFFF] border-[#163B65]/10 text-[#163B65] active:border-[#163B65]/40"
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
                  <label className="text-[10px] font-bold text-[#163B65] uppercase tracking-wider block">
                    Step 2: Your Details
                  </label>
                  <span className="text-[9px] bg-[#F5F2EC] text-[#F97316] px-2 py-0.5 font-mono font-bold">
                    {roleType || "Not Selected"}
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="space-y-1">
                    <span className="text-[11px] text-[#475569] font-medium block">
                      Full Name
                    </span>
                    <input
                      type="text"
                      required
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="e.g. John Doe"
                      className="w-full text-xs p-3 border border-[#163B65]/10 rounded-none focus:outline-none focus:border-[#163B65] bg-[#FFFFFF] text-[#163B65]"
                    />
                  </div>

                  <div className="space-y-1">
                    <span className="text-[11px] text-[#475569] font-medium block">
                      Email Address
                    </span>
                    <input
                      type="email"
                      required
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      placeholder="name@company.com"
                      className="w-full text-xs p-3 border border-[#163B65]/10 rounded-none focus:outline-none focus:border-[#163B65] bg-[#FFFFFF] text-[#163B65]"
                    />
                  </div>
                </div>

                <div className="flex justify-between items-center pt-2">
                  <button
                    type="button"
                    onClick={() => setFormStep(1)}
                    className="text-[11px] font-bold text-[#163B65]/60 uppercase tracking-wider flex items-center gap-1.5"
                  >
                    <ArrowLeft className="w-3 h-3" /> Back
                  </button>
                  <button
                    type="button"
                    disabled={!formName.trim() || !formEmail.trim()}
                    onClick={() => setFormStep(3)}
                    className="px-5 py-2.5 bg-[#163B65] text-[#FFFFFF] text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5 disabled:opacity-40"
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
                  <label className="text-[10px] font-bold text-[#163B65] uppercase tracking-wider block">
                    Step 3: Message
                  </label>
                  <span className="text-[9px] bg-[#F5F2EC] text-[#F97316] px-2 py-0.5 font-mono font-bold">
                    {formName}
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] text-[#475569] font-medium block">
                    Inquiry Content
                  </span>
                  <textarea
                    rows={4}
                    required
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    placeholder="Describe your design specifications or brand targets..."
                    className="w-full text-xs p-3 border border-[#163B65]/10 rounded-none focus:outline-none focus:border-[#163B65] bg-[#FFFFFF] text-[#163B65] resize-none"
                  />
                </div>

                <div className="flex justify-between items-center pt-2">
                  <button
                    type="button"
                    disabled={isSubmitting}
                    onClick={() => setFormStep(2)}
                    className="text-[11px] font-bold text-[#163B65]/60 uppercase tracking-wider flex items-center gap-1.5 disabled:opacity-40"
                  >
                    <ArrowLeft className="w-3 h-3" /> Back
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting || !formMessage.trim()}
                    className="px-6 py-3 bg-[#F97316] text-[#FFFFFF] text-[11px] font-bold uppercase tracking-wider flex items-center gap-2 disabled:opacity-40"
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
