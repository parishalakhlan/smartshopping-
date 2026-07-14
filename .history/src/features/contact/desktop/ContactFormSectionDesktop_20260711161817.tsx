"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, ArrowLeft, ArrowRight, Loader2 } from "lucide-react";
import { identityRoles, formMetadata } from "@/features/contact/data/formData";
import { FloatingSectionLabel } from "@/features/contact/FloatingSectionLabel";

interface ContactFormSectionDesktopProps {
  initialRole?: string;
}

export const ContactFormSectionDesktop: React.FC<
  ContactFormSectionDesktopProps
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
    if (!formMessage.trim()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSuccess(true);
    }, 1200);
  };

  return (
    <section
      id="form-desktop"
      className="py-20 bg-background-secondary/30 border-b border-border-main hidden lg:block"
    >
      <div className="max-w-3xl mx-auto px-8 text-left">
        <FloatingSectionLabel num="05" text="Contact Form" />

        <div className="space-y-2 mb-12">
          <h2 className="font-serif text-4xl font-bold tracking-tight text-text-primary">
            {formMetadata.heading}
          </h2>
          <p className="text-text-secondary text-sm max-w-md leading-relaxed">
            {formMetadata.subheading}
          </p>
        </div>

        <div className="bg-background-main border border-border-main p-8 min-h-[380px] flex flex-col justify-between">
          {formSuccess ? (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12 space-y-4 my-auto"
            >
              <CheckCircle2 className="w-12 h-12 text-accent mx-auto" />
              <h3 className="font-serif text-2xl font-bold text-text-primary">
                Inquiry Submitted Successfully
              </h3>
              <p className="text-text-secondary text-xs max-w-sm mx-auto leading-relaxed">
                Thank you for providing details. Our corporate administration
                room will respond parameters within 24 standard business hours.
              </p>
            </motion.div>
          ) : (
            <>
              {/* Stepper Timeline Header Layout */}
              <div className="flex items-center space-x-2 mb-8">
                {[1, 2, 3].map((s) => (
                  <div
                    key={s}
                    className="flex items-center space-x-2 flex-grow"
                  >
                    <div
                      className={`h-1 flex-grow transition-all duration-300 ${
                        formStep >= s ? "bg-text-primary" : "bg-border-main"
                      }`}
                    />
                    <span
                      className={`font-mono text-[10px] font-bold ${formStep === s ? "text-accent" : "text-text-primary/40"}`}
                    >
                      0{s}
                    </span>
                  </div>
                ))}
              </div>

              <form
                onSubmit={handleFormSubmit}
                className="space-y-6 flex-grow flex flex-col justify-between"
              >
                <AnimatePresence mode="wait">
                  {/* STEP 1 */}
                  {formStep === 1 && (
                    <motion.div
                      key="desktop-step-1"
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -12 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      <label className="text-xs font-bold text-text-primary uppercase tracking-wider block">
                        Step 1: Who are you?
                      </label>
                      <div className="grid grid-cols-3 gap-3">
                        {identityRoles.map((role) => (
                          <button
                            type="button"
                            key={role.value}
                            onClick={() => {
                              setRoleType(role.value);
                              setFormStep(2);
                            }}
                            className={`p-4 border text-center font-serif text-xs font-bold rounded-none transition-all duration-200 ${
                              roleType === role.value
                                ? "bg-text-primary border-text-primary text-white"
                                : "bg-background-main border-border-main text-text-primary hover:border-border-hover"
                            }`}
                          >
                            {role.label}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 2 */}
                  {formStep === 2 && (
                    <motion.div
                      key="desktop-step-2"
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -12 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      <div className="flex items-center justify-between">
                        <label className="text-xs font-bold text-text-primary uppercase tracking-wider block">
                          Step 2: Your Details
                        </label>
                        <span className="text-[10px] bg-background-secondary text-accent px-2 py-0.5 font-mono font-bold">
                          {roleType}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <span className="text-[11px] text-text-secondary font-medium block">
                            Full Name
                          </span>
                          <input
                            type="text"
                            required
                            value={formName}
                            onChange={(e) => setFormName(e.target.value)}
                            placeholder="e.g. Alexandra Sterling"
                            className="w-full text-xs p-3 border border-border-main rounded-none focus:outline-none focus:border-text-primary"
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
                            placeholder="partnership@domain.com"
                            className="w-full text-xs p-3 border border-border-main rounded-none focus:outline-none focus:border-text-primary"
                          />
                        </div>
                      </div>

                      <div className="flex justify-between items-center pt-4 border-t border-border-main/5">
                        <button
                          type="button"
                          onClick={() => setFormStep(1)}
                          className="text-[10px] font-bold text-text-primary/60 uppercase tracking-wider flex items-center gap-1 hover:text-text-primary"
                        >
                          <ArrowLeft className="w-3.5 h-3.5" /> Back
                        </button>
                        <button
                          type="button"
                          disabled={!formName.trim() || !formEmail.trim()}
                          onClick={() => setFormStep(3)}
                          className="px-6 py-3 bg-button-primary-bg text-button-primary-text text-[10px] font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-primary-hover disabled:opacity-30"
                        >
                          Next Step <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 3 */}
                  {formStep === 3 && (
                    <motion.div
                      key="desktop-step-3"
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -12 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      <div className="flex items-center justify-between">
                        <label className="text-xs font-bold text-text-primary uppercase tracking-wider block">
                          Step 3: Message Formulation
                        </label>
                        <span className="text-[10px] bg-background-secondary text-accent px-2 py-0.5 font-mono font-bold">
                          {formName} ({roleType})
                        </span>
                      </div>

                      <div className="space-y-1">
                        <span className="text-[11px] text-text-secondary font-medium block">
                          Inquiry Specification
                        </span>
                        <textarea
                          rows={4}
                          required
                          value={formMessage}
                          onChange={(e) => setFormMessage(e.target.value)}
                          placeholder="Provide the granular scope parameters of your proposed dynamic engagement..."
                          className="w-full text-xs p-3 border border-border-main rounded-none focus:outline-none focus:border-text-primary resize-none"
                        />
                      </div>

                      <div className="flex justify-between items-center pt-4 border-t border-border-main/5">
                        <button
                          type="button"
                          disabled={isSubmitting}
                          onClick={() => setFormStep(2)}
                          className="text-[10px] font-bold text-text-primary/60 uppercase tracking-wider flex items-center gap-1 hover:text-text-primary disabled:opacity-30"
                        >
                          <ArrowLeft className="w-3.5 h-3.5" /> Back
                        </button>
                        <button
                          type="submit"
                          disabled={isSubmitting || !formMessage.trim()}
                          className="px-8 py-3.5 bg-button-secondary-bg text-button-secondary-text text-[10px] font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-accent-hover disabled:opacity-30"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-3.5 h-3.5 animate-spin" />{" "}
                              Transmission In Progress
                            </>
                          ) : (
                            <>
                              Transmit System Data{" "}
                              <ArrowRight className="w-3.5 h-3.5" />
                            </>
                          )}
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
