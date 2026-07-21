"use client";

import React, { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  SlidersHorizontal,
  MapPin,
  Clock,
  Plus,
  Minus,
  ArrowUpRight,
} from "lucide-react";
import type { JobOpportunity } from "@/features/careers/data/types";
import { MagneticButton } from "@/features/careers/MagneticButton";

interface OpportunitiesSectionDesktopProps {
  data?: JobOpportunity[]; // ✅ Made optional
  onApplyClick?: (job: JobOpportunity) => void;
}

export const OpportunitiesSectionDesktop: React.FC<
  OpportunitiesSectionDesktopProps
> = ({ data = [], onApplyClick }) => {
  // ✅ Default to empty array
  const [expandedJobId, setExpandedJobId] = useState<string | null>(null);
  const [deptFilter, setDeptFilter] = useState<string>("All");
  const [locFilter, setLocFilter] = useState<string>("All");
  const [expFilter, setExpFilter] = useState<string>("All");

  // ✅ Ensure data is always an array
  const safeData = useMemo(() => {
    return Array.isArray(data) ? data : [];
  }, [data]);

  const filteredJobs = useMemo(() => {
    return safeData.filter((job) => {
      const matchDept = deptFilter === "All" || job.department === deptFilter;
      const matchLoc = locFilter === "All" || job.location === locFilter;
      const matchExp = expFilter === "All" || job.experience === expFilter;
      return matchDept && matchLoc && matchExp;
    });
  }, [deptFilter, locFilter, expFilter, safeData]);

  return (
    <section
      id="openings"
      className="py-20 bg-background-secondary/30 border-b border-border-main hidden lg:block"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-border-main pb-8 mb-12">
          <div className="space-y-3 text-left">
            <span className="text-[10px] text-accent font-bold tracking-widest uppercase block">
              Current Openings
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
              Join Our Team
            </h2>
          </div>
          <p className="text-text-secondary text-xs font-normal max-w-sm lg:text-right leading-relaxed">
            Find your entry point. Filter across departments, locations, and
            experience levels.
          </p>
        </div>

        <div className="bg-background-main border border-border-main p-4 rounded-none mb-8 flex flex-wrap gap-4 items-center justify-between">
          <div className="flex items-center space-x-2 text-text-primary/60 text-xs font-bold uppercase tracking-wider">
            <SlidersHorizontal className="w-3.5 h-3.5 text-accent" />
            <span>Filter:</span>
          </div>

          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center space-x-1.5 text-xs">
              <span className="text-text-secondary font-medium">
                Department:
              </span>
              <select
                aria-label="Filter by department"
                value={deptFilter}
                onChange={(e) => setDeptFilter(e.target.value)}
                className="bg-background-secondary/50 border border-border-main p-1.5 font-medium text-text-primary focus:outline-none rounded-none text-xs"
              >
                <option value="All">All</option>
                <option value="Retail Operations">Retail Operations</option>
                <option value="Creative & Design">Creative & Design</option>
              </select>
            </div>

            <div className="flex items-center space-x-1.5 text-xs">
              <span className="text-text-secondary font-medium">Location:</span>
              <select
                aria-label="Filter by location"
                value={locFilter}
                onChange={(e) => setLocFilter(e.target.value)}
                className="bg-background-secondary/50 border border-border-main p-1.5 font-medium text-text-primary focus:outline-none rounded-none text-xs"
              >
                <option value="All">All</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="New Delhi">New Delhi</option>
                <option value="Ludhiana">Ludhiana</option>
              </select>
            </div>

            <div className="flex items-center space-x-1.5 text-xs">
              <span className="text-text-secondary font-medium">
                Experience:
              </span>
              <select
                aria-label="Filter by experience level"
                value={expFilter}
                onChange={(e) => setExpFilter(e.target.value)}
                className="bg-background-secondary/50 border border-border-main p-1.5 font-medium text-text-primary focus:outline-none rounded-none text-xs"
              >
                <option value="All">All</option>
                <option value="Entry Level">Entry Level</option>
                <option value="Mid Level">Mid Level</option>
              </select>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredJobs.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="bg-background-main border border-border-main p-12 text-center"
              >
                <p className="font-serif text-base text-text-secondary">
                  No positions match your filters.
                </p>
                <button
                  onClick={() => {
                    setDeptFilter("All");
                    setLocFilter("All");
                    setExpFilter("All");
                  }}
                  className="mt-2 text-xs font-bold text-accent underline uppercase tracking-wider"
                >
                  Reset Filters
                </button>
              </motion.div>
            ) : (
              filteredJobs.map((job) => {
                const isExpanded = expandedJobId === job.id;
                return (
                  <motion.div
                    key={job.id}
                    layout="position"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                    className={`bg-background-main border transition-all rounded-none overflow-hidden text-left ${
                      isExpanded
                        ? "border-text-primary shadow-sm"
                        : "border-border-main hover:border-border-hover"
                    }`}
                  >
                    <div
                      onClick={() =>
                        setExpandedJobId(isExpanded ? null : job.id)
                      }
                      className="p-6 flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-[9px] uppercase tracking-wider font-bold bg-background-secondary text-text-primary px-2 py-0.5">
                            {job.department}
                          </span>
                          <span className="text-[9px] uppercase tracking-wider font-bold bg-text-primary/5 text-text-secondary px-2 py-0.5">
                            {job.experience}
                          </span>
                        </div>
                        <h3 className="font-serif text-xl font-bold text-text-primary">
                          {job.role}
                        </h3>
                      </div>

                      <div className="flex items-center justify-end gap-6">
                        <div className="flex items-center space-x-4 font-medium text-xs text-text-secondary">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-text-primary/40" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-accent" />
                            {job.type}
                          </span>
                        </div>
                        <div className="w-8 h-8 rounded-none border border-border-main flex items-center justify-center text-text-primary">
                          {isExpanded ? (
                            <Minus className="w-4 h-4" />
                          ) : (
                            <Plus className="w-4 h-4" />
                          )}
                        </div>
                      </div>
                    </div>

                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: "auto" }}
                          exit={{ height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden bg-background-secondary/10 border-t border-border-main"
                        >
                          <div className="p-6 space-y-6">
                            <div className="space-y-1.5">
                              <span className="text-[10px] font-bold text-accent uppercase tracking-wider block">
                                Overview:
                              </span>
                              <p className="text-xs text-text-secondary font-normal leading-relaxed max-w-2xl">
                                {job.overview}
                              </p>
                            </div>

                            <div className="space-y-2">
                              <span className="text-[10px] font-bold text-text-primary uppercase tracking-wider block">
                                Requirements:
                              </span>
                              <ul className="list-disc list-inside space-y-1 text-xs text-text-secondary font-normal pl-1">
                                {job.requirements.map((req, i) => (
                                  <li key={i} className="leading-relaxed">
                                    {req}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="pt-4 border-t border-border-main">
                              <MagneticButton
                                onClick={(e) => onApplyClick?.(job)}
                                className="px-6 py-3 bg-button-primary-bg text-button-primary-text hover:bg-primary-hover flex items-center gap-2"
                              >
                                Apply Now{" "}
                                <ArrowUpRight className="w-3 h-3 text-accent" />
                              </MagneticButton>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
