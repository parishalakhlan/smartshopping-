"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Search,
  Clock,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

import {
  actionChips,
  weeklyHours,
  partnerships,
} from "@/features/contact/data/data";

export const ContactSectionMobile: React.FC = () => {
  const [activeSection, setActiveSection] = useState<
    "hub" | "visit" | "hours" | "partners" | "message" | null
  >("hub");
  const [selectedChip, setSelectedChip] = useState<string>("call");
  const [formStep, setFormStep] = useState<number>(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const todayName = new Date().toLocaleDateString("en-US", { weekday: "long" });
  const scheduleWithToday = weeklyHours.map((h) => ({
    ...h,
    isToday: h.day === todayName,
  }));
  const activeTodayHours =
    scheduleWithToday.find((h) => h.isToday)?.hours || "10:00 AM - 8:30 PM";

  const handleToggle = (
    section: "hub" | "visit" | "hours" | "partners" | "message",
  ) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <section className="w-full bg-background-main text-text-primary font-sans overflow-x-hidden pb-12 lg:hidden">
      {/* SECTION 1 — HERO */}
      <div className="relative w-full h-[55vh] bg-navbar-active flex flex-col justify-end p-6 overflow-hidden">
        <div className="absolute inset-0 w-full h-full opacity-60">
          <div className="w-full h-full bg-gradient-to-t from-navbar-active via-navbar-active/30 to-transparent absolute inset-0 z-10" />
          <Image
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
            alt="Store Entrance"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="relative z-20 space-y-3 max-w-sm">
          <h1 className="font-serif text-3xl font-bold tracking-tight text-white leading-none">
            Let&apos;s Connect
          </h1>
          <p className="text-white/80 text-xs font-normal">
            We&apos;re always happy to help you discover premium fashion closer
            to home.
          </p>
          <div className="flex gap-2 pt-1">
            <a
              href="tel:+18005557467"
              className="px-4 py-2.5 bg-button-secondary-bg text-button-secondary-text font-bold text-[10px] uppercase tracking-widest"
            >
              Call Now
            </a>
            <button
              onClick={() => {
                handleToggle("visit");
                document
                  .getElementById("visit-node")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-4 py-2.5 bg-transparent text-white border border-white/30 font-bold text-[10px] uppercase tracking-widest"
            >
              Find a Store
            </button>
          </div>
        </div>
      </div>

      <div className="px-4 pt-10 space-y-10">
        {/* SECTION 2 — QUICK ACTIONS */}
        <div>
          <div className="flex flex-col items-center">
            <div className="relative w-56 h-56 flex items-center justify-center bg-background-secondary/20 rounded-full border border-border-main/5">
              <motion.div
                animate={{
                  rotate: -(
                    actionChips.find((c) => c.id === selectedChip)?.angle || 0
                  ),
                }}
                transition={{ duration: 0.4 }}
                className="w-40 h-40 rounded-full border border-border-main relative flex items-center justify-center"
              >
                {actionChips.map((chip) => {
                  const rad = (chip.angle * Math.PI) / 180;
                  const x = Math.sin(rad) * 70;
                  const y = -Math.cos(rad) * 70;
                  const isSelected = selectedChip === chip.id;
                  return (
                    <motion.button
                      key={chip.id}
                      onClick={() => {
                        setSelectedChip(chip.id);
                        setActiveSection("hub");
                      }}
                      animate={{
                        rotate:
                          actionChips.find((c) => c.id === selectedChip)
                            ?.angle || 0,
                        scale: isSelected ? 1.1 : 1,
                      }}
                      style={{ x, y, position: "absolute" }}
                      className={`w-9 h-9 rounded-full flex items-center justify-center text-xs ${isSelected ? "bg-text-primary text-white ring-2 ring-accent" : "bg-background-main text-text-primary border border-border-main shadow-sm"}`}
                    >
                      {chip.id === "call" && <Phone size={13} />}
                      {chip.id === "whatsapp" && <MessageCircle size={13} />}
                      {chip.id === "email" && <Mail size={13} />}
                      {chip.id === "directions" && <MapPin size={13} />}
                      {chip.id === "stores" && <Search size={13} />}
                    </motion.button>
                  );
                })}
              </motion.div>
            </div>
            <div className="w-full text-center mt-4 min-h-[40px]">
              <AnimatePresence mode="wait">
                {selectedChip === "call" && (
                  <motion.a
                    href="tel:+18005557467"
                    key="c"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="font-serif text-base font-bold text-text-primary border-b border-accent inline-flex items-center gap-1"
                  >
                    +1 (800) 555-7467 <ArrowUpRight size={12} />
                  </motion.a>
                )}
                {selectedChip === "whatsapp" && (
                  <motion.a
                    href="https://wa.me/18005557467"
                    target="_blank"
                    key="w"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="font-serif text-base font-bold text-text-primary border-b border-accent inline-flex items-center gap-1"
                  >
                    WhatsApp Concierge <MessageCircle size={12} />
                  </motion.a>
                )}
                {selectedChip === "email" && (
                  <motion.a
                    href="mailto:concierge@smartshopping.com"
                    key="e"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="font-serif text-base font-bold text-text-primary border-b border-accent inline-flex items-center gap-1"
                  >
                    concierge@smartshopping.com <ArrowUpRight size={12} />
                  </motion.a>
                )}
                {selectedChip === "directions" && (
                  <motion.a
                    href="https://maps.google.com"
                    target="_blank"
                    key="d"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="font-serif text-base font-bold text-text-primary border-b border-accent inline-flex items-center gap-1"
                  >
                    Open Directions <MapPin size={12} />
                  </motion.a>
                )}
                {selectedChip === "stores" && (
                  <motion.span
                    key="s"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="font-serif text-base font-bold text-text-primary border-b border-accent"
                  >
                    Explore Locations
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* SECTION 3 — VISIT US */}
        <div id="visit-node">
          <div
            onClick={() => handleToggle("visit")}
            className="p-4 bg-background-secondary/40 border-l-2 border-text-primary flex justify-between items-center cursor-pointer"
          >
            <div className="flex items-center space-x-3">
              <MapPin size={15} className="text-accent" />
              <div>
                <h4 className="font-serif text-xs font-bold">
                  Visit Our Flagship Stores
                </h4>
                <p className="text-[10px] text-text-primary/60">
                  New York, London, Paris
                </p>
              </div>
            </div>
            <motion.span
              animate={{ rotate: activeSection === "visit" ? 180 : 0 }}
              className="text-[10px]"
            >
              ▼
            </motion.span>
          </div>
          <AnimatePresence>
            {activeSection === "visit" && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="pt-3 space-y-3">
                  <div className="relative w-full h-32 bg-text-primary/5 overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=600&q=80"
                      alt="Map Preview"
                      fill
                      className="object-cover grayscale opacity-60"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-text-primary/10">
                      <a
                        href="https://maps.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 bg-text-primary text-white font-mono text-[9px] uppercase tracking-wider flex items-center gap-1"
                      >
                        Launch Maps <ArrowUpRight size={10} />
                      </a>
                    </div>
                  </div>
                  <div className="text-[11px] space-y-0.5 text-text-primary/80">
                    <p className="font-bold text-text-primary">
                      Fifth Avenue Flagship
                    </p>
                    <p>711 5th Ave, New York, NY 10022</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* SECTION 4 — BUSINESS HOURS */}
        <div>
          <div
            onClick={() => handleToggle("hours")}
            className="p-4 bg-background-secondary/40 border-l-2 border-accent flex justify-between items-center cursor-pointer"
          >
            <div className="flex items-center space-x-3">
              <Clock size={15} className="text-text-primary" />
              <div>
                <h4 className="font-serif text-xs font-bold">Open Today</h4>
                <p className="text-[10px] text-accent font-bold">
                  {activeTodayHours}
                </p>
              </div>
            </div>
            <motion.span
              animate={{ rotate: activeSection === "hours" ? 180 : 0 }}
              className="text-[10px]"
            >
              ▼
            </motion.span>
          </div>
          <AnimatePresence>
            {activeSection === "hours" && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="pt-3 grid grid-cols-1 gap-1 font-mono text-[10px]">
                  {scheduleWithToday.map((item) => (
                    <div
                      key={item.day}
                      className={`flex justify-between p-2 ${item.isToday ? "bg-accent/10 text-accent font-bold border-l border-accent" : "text-text-primary/60"}`}
                    >
                      <span>{item.day}</span>
                      <span>{item.hours}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* SECTION 5 — PARTNERSHIPS */}
        <div>
          <div
            onClick={() => handleToggle("partners")}
            className="p-4 border border-border-main flex justify-between items-center cursor-pointer"
          >
            <span className="font-serif text-xs font-bold">
              Interested in Working Together?
            </span>
            <motion.span
              animate={{ rotate: activeSection === "partners" ? 180 : 0 }}
              className="text-[10px]"
            >
              ▼
            </motion.span>
          </div>
          <AnimatePresence>
            {activeSection === "partners" && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="pt-3 space-y-3 border-t border-border-main mt-2">
                  {partnerships.map((p) => (
                    <div
                      key={p.id}
                      className="space-y-0.5 pb-2 border-b border-border-main/5 last:border-0"
                    >
                      <h5 className="font-serif text-xs font-bold">
                        {p.title}
                      </h5>
                      <p className="text-[10px] text-text-primary/70 leading-relaxed">
                        {p.desc}
                      </p>
                      <a
                        href={`mailto:${p.email}`}
                        className="inline-flex items-center gap-0.5 font-mono text-[9px] text-accent font-bold uppercase"
                      >
                        Contact Office <ArrowUpRight size={9} />
                      </a>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* SECTION 6 — PROGRESSIVE FORM REVEAL */}
        <div>
          <div
            onClick={() => handleToggle("message")}
            className="p-4 bg-text-primary text-white flex justify-between items-center cursor-pointer"
          >
            <span className="font-serif text-xs font-bold tracking-wide">
              Send Us a Message
            </span>
            <motion.span
              animate={{ rotate: activeSection === "message" ? 180 : 0 }}
              className="text-[10px] text-white/70"
            >
              ▼
            </motion.span>
          </div>
          <AnimatePresence>
            {activeSection === "message" && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="pt-3 px-0.5">
                  {formSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="py-4 text-center space-y-1"
                    >
                      <CheckCircle2 className="mx-auto text-accent" size={24} />
                      <h4 className="font-serif text-xs font-bold">
                        Transmission Sent
                      </h4>
                      <p className="text-[10px] text-text-primary/60">
                        Bespoke concierge teams will respond within 3 structural
                        business hours.
                      </p>
                    </motion.div>
                  ) : (
                    <div className="space-y-3">
                      <div>
                        <label className="block font-mono text-[9px] uppercase tracking-wider text-text-primary/60 mb-0.5">
                          Your Name
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          aria-label="name"
                          onChange={(e) => {
                            setFormData({ ...formData, name: e.target.value });
                            if (formStep === 0) setFormStep(1);
                          }}
                          className="w-full bg-background-secondary/20 border-b border-border-main/30 focus:border-accent outline-none py-1 text-xs text-text-primary"
                        />
                      </div>
                      {formStep >= 1 && (
                        <motion.div
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          <label className="block font-mono text-[9px] uppercase tracking-wider text-text-primary/60 mb-0.5">
                            Email Address
                          </label>
                          <input
                            aria-label="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => {
                              setFormData({
                                ...formData,
                                email: e.target.value,
                              });
                              if (formStep === 1) setFormStep(2);
                            }}
                            className="w-full bg-background-secondary/20 border-b border-border-main/30 focus:border-accent outline-none py-1 text-xs text-text-primary"
                          />
                        </motion.div>
                      )}
                      {formStep >= 2 && (
                        <motion.div
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          <label className="block font-mono text-[9px] uppercase tracking-wider text-text-primary/60 mb-0.5">
                            Message
                          </label>
                          <textarea
                            aria-label="enter message"
                            rows={2}
                            value={formData.message}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                message: e.target.value,
                              })
                            }
                            className="w-full bg-background-secondary/20 border-b border-border-main/30 focus:border-accent outline-none py-1 text-xs text-text-primary resize-none"
                          />
                          <button
                            onClick={() => setFormSubmitted(true)}
                            className="w-full mt-3 py-2.5 bg-button-secondary-bg text-button-secondary-text font-mono text-[9px] font-bold uppercase tracking-widest"
                          >
                            Submit Inquiry
                          </button>
                        </motion.div>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* SECTION 7 — CLOSING CTA */}
        <div className="pt-4 pb-2 text-center space-y-3 max-w-xs mx-auto">
          <div className="space-y-1">
            <h3 className="font-serif text-lg font-bold tracking-tight">
              We&apos;re Closer Than You Think.
            </h3>
            <p className="text-[10px] text-text-primary/60 leading-relaxed">
              Experience our curated seasonal drops live in physical spaces
              global architectures.
            </p>
          </div>
          <div className="flex flex-col gap-1.5 pt-1">
            <button className="w-full py-2.5 bg-text-primary text-white font-mono text-[9px] font-bold uppercase tracking-widest">
              Find Your Nearest Store
            </button>
            <button className="w-full py-2.5 bg-transparent text-text-primary border border-border-main font-mono text-[9px] font-bold uppercase tracking-widest">
              Explore Our Brands
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
