"use client";

import React, { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { ApplicationForm } from "@/features/careers/job/ApplicationForm";
import { ApplicationSuccess } from "@/features/careers/job/ApplicationSuccess";
import type { ModalJobDetails } from "@/features/careers/job/schema";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobDetails: ModalJobDetails;
}

export const CareerApplicationModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  jobDetails,
}) => {
  const [mounted] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const mountedRef = useRef(false);
  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  // Sync scroll locking to protect layout flow positions
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Trap Escape keystrokes
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleSuccessTrigger = () => {
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 3000);
  };

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-end lg:items-center justify-center font-sans">
          {/* Backdrop Layer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-text-primary/40 backdrop-blur-[3px]"
          />

          {/* Dialog View Box Component Layer */}
          <motion.div
            initial={{ y: "100%", lg: { y: 0, scale: 0.96, opacity: 0 } }}
            animate={{ y: 0, lg: { scale: 1, opacity: 1 } }}
            exit={{ y: "100%", lg: { scale: 0.96, opacity: 0 } }}
            transition={{ type: "spring", damping: 25, stiffness: 220 }}
            role="dialog"
            aria-modal="true"
            aria-label={`Apply for ${jobDetails.positionTitle}`}
            className="relative w-full lg:max-w-3xl bg-background-main border-t lg:border border-border-main p-5 md:p-8 max-h-[92vh] lg:max-h-[88vh] overflow-y-auto z-10 shadow-xl"
          >
            {/* Inline Header Area */}
            <div className="flex items-start justify-between border-b border-border-main pb-4 mb-6">
              <div className="text-left space-y-1 pr-6">
                <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-accent block">
                  Applying For
                </span>
                <h2 className="font-serif text-xl md:text-2xl font-bold text-text-primary tracking-tight">
                  {jobDetails.positionTitle}
                </h2>
                <div className="flex flex-wrap items-center gap-x-3 text-[10px] font-medium text-text-secondary/70 pt-0.5">
                  {jobDetails.metaTags.map((tag, i) => (
                    <span key={i} className="flex items-center gap-1">
                      {i > 0 && <span className="opacity-30">•</span>}
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-1 border border-border-main hover:border-text-primary text-text-primary transition-colors focus:outline-none mt-1"
                aria-label="Close form view modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Inner Content State Swap Window */}
            <div className="min-h-[320px]">
              {!isSuccess ? (
                <ApplicationForm
                  jobDetails={jobDetails}
                  onSuccess={handleSuccessTrigger}
                />
              ) : (
                <ApplicationSuccess />
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body,
  );
};
