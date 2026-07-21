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

interface OpportunitiesSectionMobileProps {
  data?: JobOpportunity[];
  // ✅ Made optional
}

export const OpportunitiesSectionMobile: React.FC<
  OpportunitiesSectionMobileProps
> = ({ data = [] }) => {
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
      id="openings-mobile"
      className="w-full bg-background-secondary/30 py-12 px-4 border-b border-border-main font-sans lg:hidden"
    >
      {/* Title Block */}
      <div className="text-left space-y-2 pb-6 border-b border-border-main mb-6">
        <span className="text-[10px] text-accent font-bold tracking-[0.25em] uppercase block">
          Current Openings
        </span>
        <h2 className="font-serif text-2xl font-bold text-text-primary tracking-tight">
          Join Our Team
        </h2>
        <p className="text-text-secondary text-xs font-normal leading-relaxed">
          Filter across open vacancies to find your entry point.
        </p>
      </div>

      {/* Stacked Mobile Filter Shelf */}
      <div className="bg-background-main border border-border-main p-4 rounded-none mb-6 space-y-4">
        <div className="flex items-center space-x-2 text-text-primary/60 text-[10px] font-bold uppercase tracking-wider border-b border-border-main/5 pb-2">
          <SlidersHorizontal className="w-3.5 h-3.5 text-accent" />
          <span>Filter Roles</span>
        </div>

        <div className="grid grid-cols-1 gap-3">
          <div className="flex flex-col space-y-1 text-xs">
            <span className="text-text-secondary font-medium">Department</span>
            <select
              aria-label="department filter"
              value={deptFilter}
              onChange={(e) => setDeptFilter(e.target.value)}
              className="bg-background-secondary/50 border border-border-main p-2.5 font-medium text-text-primary focus:outline-none rounded-none w-full text-xs"
            >
              <option value="All">All</option>
              <option value="Retail Operations">Retail Operations</option>
              <option value="Creative & Design">Creative & Design</option>
            </select>
          </div>

          <div className="flex flex-col space-y-1 text-xs">
            <span className="text-text-secondary font-medium">Location</span>
            <select
              aria-label="location filter"
              value={locFilter}
              onChange={(e) => setLocFilter(e.target.value)}
              className="bg-background-secondary/50 border border-border-main p-2.5 font-medium text-text-primary focus:outline-none rounded-none w-full text-xs"
            >
              <option value="All">All</option>
              <option value="Chandigarh">Chandigarh</option>
              <option value="New Delhi">New Delhi</option>
              <option value="Ludhiana">Ludhiana</option>
            </select>
          </div>

          <div className="flex flex-col space-y-1 text-xs">
            <span className="text-text-secondary font-medium">
              Experience Level
            </span>
            <select
              aria-label="experience filter"
              value={expFilter}
              onChange={(e) => setExpFilter(e.target.value)}
              className="bg-background-secondary/50 border border-border-main p-2.5 font-medium text-text-primary focus:outline-none rounded-none w-full text-xs"
            >
              <option value="All">All</option>
              <option value="Entry Level">Entry Level</option>
              <option value="Mid Level">Mid Level</option>
            </select>
          </div>
        </div>
      </div>

      {/* Accordion List Container */}
      <div className="space-y-4">
        <AnimatePresence mode="popLayout">
          {filteredJobs.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-background-main border border-border-main p-8 text-center"
            >
              <p className="font-serif text-sm text-text-secondary">
                No open roles match your specific filters.
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
              const panelId = `job-panel-${job.id}`;

              return (
                <motion.div
                  key={job.id}
                  layout="position"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35 }}
                  className={`bg-background-main border rounded-none overflow-hidden text-left transition-all ${
                    isExpanded
                      ? "border-text-primary shadow-sm"
                      : "border-border-main"
                  }`}
                >
                  {/* Interactive Header Block */}
                  <div
                    onClick={() => setExpandedJobId(isExpanded ? null : job.id)}
                    className="p-4 space-y-3 cursor-pointer"
                  >
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="text-[8px] uppercase tracking-wider font-bold bg-background-secondary text-text-primary px-2 py-0.5">
                        {job.department}
                      </span>
                      <span className="text-[8px] uppercase tracking-wider font-bold bg-text-primary/5 text-text-secondary px-2 py-0.5">
                        {job.experience}
                      </span>
                    </div>

                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-serif text-base font-bold text-text-primary leading-snug">
                        {job.role}
                      </h3>
                      <div className="w-7 h-7 border border-border-main flex items-center justify-center text-text-primary flex-shrink-0 mt-0.5">
                        {isExpanded ? (
                          <Minus className="w-3.5 h-3.5" />
                        ) : (
                          <Plus className="w-3.5 h-3.5" />
                        )}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-medium text-[11px] text-text-secondary pt-2 border-t border-border-main/5">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-text-primary/40" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-accent" />
                        {job.type}
                      </span>
                    </div>
                  </div>

                  {/* Expansion Content panel */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        id={panelId}
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden bg-background-secondary/10 border-t border-border-main"
                      >
                        <div className="p-4 space-y-5 text-xs">
                          <div className="space-y-1">
                            <span className="text-[9px] font-bold text-accent uppercase tracking-wider block">
                              Overview
                            </span>
                            <p className="text-text-secondary font-normal leading-relaxed">
                              {job.overview}
                            </p>
                          </div>

                          <div className="space-y-1.5">
                            <span className="text-[9px] font-bold text-text-primary uppercase tracking-wider block">
                              Requirements
                            </span>
                            <ul className="list-disc list-inside space-y-1 text-text-secondary font-normal pl-0.5 leading-relaxed">
                              {job.requirements.map((req, i) => (
                                <li key={i}>{req}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="pt-2">
                            <button className="w-full py-3 bg-button-primary-bg text-button-primary-text font-medium text-xs flex items-center justify-center gap-2 rounded-none active:bg-primary-hover transition-colors">
                              Apply Now
                              <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
                            </button>
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
    </section>
  );
};
