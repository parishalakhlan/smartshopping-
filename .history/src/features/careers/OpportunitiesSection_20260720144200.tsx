"use client";

import React, { useEffect, useState, useMemo } from "react";
import type { JobOpportunity } from "@/features/careers/data/types";
import { OpportunitiesSectionDesktop } from "@/features/careers/desktop/OpportunitiesSectionDesktop";
import { OpportunitiesSectionMobile } from "@/features/careers/mobile/OpportunitiesSectionMobile";
import { CareerApplicationModal } from "@/features/careers/job/CareerApplicationModal"; // Adjust import path
import type { ModalJobDetails } from "@/features/careers/job/schema"; // Adjust import path

interface Props {
  data?: JobOpportunity[];
}

export const OpportunitiesSection: React.FC<Props> = ({ data = [] }) => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<ModalJobDetails | null>(null);

  const safeData = useMemo(() => {
    return Array.isArray(data) ? data : [];
  }, [data]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handler to open the modal for a specific job
  const handleApplyClick = (job: JobOpportunity) => {
    // Map your JobOpportunity to ModalJobDetails
    const modalDetails: ModalJobDetails = {
      vacancyId: job.id, // Use _key from Sanity
      positionTitle: job.role,
      department: job.department,
      location: job.location,
      jobType: job.type,
      metaTags: [job.department, job.location, job.type],
    };
    setSelectedJob(modalDetails);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
  };

  if (isMobile === null) {
    return <section className="w-full h-[500px] bg-[#F5F2EC]/30 opacity-0" />;
  }

  return (
    <>
      {isMobile ? (
        <OpportunitiesSectionMobile
          data={safeData}
          onApplyClick={handleApplyClick}
        />
      ) : (
        <OpportunitiesSectionDesktop
          data={safeData}
          onApplyClick={handleApplyClick} // Pass down the handler
        />
      )}

      {/* Render the modal globally */}
      {selectedJob && (
        <CareerApplicationModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          jobDetails={selectedJob}
        />
      )}
    </>
  );
};
