// app/careers/components/JobApplicationModal.tsx
"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { JobDetails } from "./types";
import { ApplicationForm } from "./ApplicationForm";
import { ApplicationSuccess } from "./ApplicationSuccess";

interface JobApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  job: JobDetails | null;
}

export const JobApplicationModal: React.FC<JobApplicationModalProps> = ({
  isOpen,
  onClose,
  job,
}) => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Dynamic breakpoint analysis
  useEffect(() => {
    const checkViewport = () => setIsMobile(window.innerWidth < 768);
    checkViewport();
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  // Structural Lock on Underlying Scroll Layers
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Escape key sequence callback
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen && !showSuccess) onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, showSuccess]);

  const handleSuccessTrigger = () => {
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      onClose();
    }, 2500);
  };

  if (!isOpen || !job) return null;

  // Premium Header Info Plate
  const InfoHeaderPlate = () => (
    <div className="border-b border-neutral-100 pb-6 mb-6">
      <span className="text-[10px] uppercase tracking-widest text-neutral-400 block font-medium mb-1.5">
        Applying for
      </span>
      <h2 className="font-serif text-xl lg:text-2xl font-light text-neutral-900 tracking-wide mb-2">
        {job.title}
      </h2>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs tracking-wider text-neutral-500 uppercase font-light">
        <span>{job.department}</span>
        <span className="text-neutral-300">•</span>
        <span>{job.location}</span>
      </div>
    </div>
  );

  // Framework Structural Rendering Matrices
  const modalMarkup = (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center overflow-hidden">
        {/* Dark Screen Overlay Cover */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => !showSuccess && onClose()}
          className="absolute inset-0 bg-neutral-950/40 backdrop-blur-[2px]"
        />

        {/* Desktop Interface Variant */}
        {!isMobile ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ type: "spring", duration: 0.45, bounce: 0 }}
            className="relative bg-white w-full max-w-[720px] h-[90vh] max-h-[750px] shadow-2xl z-10 flex flex-col overflow-hidden border border-neutral-100"
            role="dialog"
            aria-modal="true"
          >
            {/* Close Button Top-Right Corner */}
            <button
              onClick={onClose}
              disabled={showSuccess}
              className="absolute top-6 right-6 text-neutral-400 hover:text-neutral-900 p-1 group z-20 transition-colors duration-200"
              aria-label="Close modal"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="flex-1 overflow-y-auto p-10 custom-scrollbar relative">
              <AnimatePresence>
                {showSuccess && <ApplicationSuccess />}
              </AnimatePresence>
              <InfoHeaderPlate />
              <ApplicationForm job={job} onSuccess={handleSuccessTrigger} />
            </div>
          </motion.div>
        ) : (
          /* Mobile Custom Dynamic Drawer Sheet */
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 260 }}
            className="relative bg-white w-full rounded-t-xl h-[88vh] shadow-2xl z-10 flex flex-col overflow-hidden"
            role="dialog"
            aria-modal="true"
          >
            {/* Mobile Visual Drag Handle Accent */}
            <div className="w-full flex justify-center py-3 shrink-0">
              <div className="w-8 h-1 bg-neutral-200 rounded-full" />
            </div>

            <button
              onClick={onClose}
              disabled={showSuccess}
              className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-900 p-2 z-20"
              aria-label="Close form"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="flex-1 overflow-y-auto px-5 pb-8 relative">
              <AnimatePresence>
                {showSuccess && <ApplicationSuccess />}
              </AnimatePresence>
              <InfoHeaderPlate />
              <ApplicationForm job={job} onSuccess={handleSuccessTrigger} />
            </div>
          </motion.div>
        )}
      </div>
    </AnimatePresence>
  );

  return createPortal(modalMarkup, document.body);
};
