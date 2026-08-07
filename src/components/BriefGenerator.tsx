"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, CheckCircle, ArrowRight, ArrowLeft, Send, Flame, Shield, DollarSign } from "lucide-react";
import confetti from "canvas-confetti";

export default function BriefGenerator() {
  const [step, setStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState<string[]>(["Visual Storytelling"]);
  const [selectedVibe, setSelectedVibe] = useState("High-Fashion & Luxe");
  const [budget, setBudget] = useState("$25k - $50k");
  const [timeline, setTimeline] = useState("Immediate (1-3 weeks)");
  const [formData, setFormData] = useState({ name: "", email: "", company: "", notes: "" });
  const [submitted, setSubmitted] = useState(false);

  const availableServices = [
    "Creative Direction and Design",
    "Visual Storytelling",
    "Talent Accelerator and Branding",
    "Marketing and PR",
    "Events and Live",
  ];

  const vibes = [
    "High-Fashion & Luxe",
    "Underground & Avant-Garde",
    "Afro-Futurism & Sound",
    "Minimalist & Architectural",
    "Mass Global Virality",
  ];

  const toggleService = (s: string) => {
    if (selectedServices.includes(s)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((item) => item !== s));
      }
    } else {
      setSelectedServices([...selectedServices, s]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Trigger confetti explosion
    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#ff4500", "#ffb703", "#9d4edd", "#ffffff"],
      });
    } catch {
      // fallback
    }
  };

  return (
    <section id="brief" className="py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/10 via-amber-500/5 to-purple-600/10 blur-3xl pointer-events-none" />

      <div className="text-center max-w-3xl mx-auto mb-12 relative z-10">
        <span className="text-orange-500 font-mono text-xs tracking-widest uppercase px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20">
          INTERACTIVE CAMPAIGN BUILDER
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
          FORGE YOUR <span className="forge-text-gradient">BRIEF</span>
        </h2>
        <p className="text-zinc-400 mt-3 text-base">
          Configure your creative vision in 4 interactive steps to generate an instant campaign scope.
        </p>
      </div>

      <div className="glass-card rounded-3xl p-6 sm:p-10 border border-orange-500/30 relative z-10 shadow-2xl">
        {/* Progress Bar */}
        {!submitted && (
          <div className="mb-8">
            <div className="flex justify-between items-center text-xs font-mono text-zinc-400 mb-2">
              <span>STEP {step} OF 4</span>
              <span>
                {step === 1 && "Select Service Pillars"}
                {step === 2 && "Aesthetic & Vibe"}
                {step === 3 && "Scale & Timeline"}
                {step === 4 && "Contact Details"}
              </span>
            </div>
            <div className="w-full bg-zinc-900 h-2 rounded-full overflow-hidden border border-zinc-800">
              <div
                style={{ width: `${(step / 4) * 100}%` }}
                className="bg-gradient-to-r from-orange-600 via-amber-500 to-orange-400 h-full transition-all duration-500"
              />
            </div>
          </div>
        )}

        <AnimatePresence mode="wait">
          {/* STEP 1: SERVICES */}
          {step === 1 && !submitted && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-xl font-bold text-white">Which services does your narrative require?</h3>
                <p className="text-xs text-zinc-400 mt-1">Select all that apply to your brand vision.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {availableServices.map((service) => {
                  const isSelected = selectedServices.includes(service);
                  return (
                    <button
                      key={service}
                      type="button"
                      onClick={() => toggleService(service)}
                      className={`p-4 rounded-xl border text-left text-sm font-medium transition-all flex items-center justify-between ${
                        isSelected
                          ? "bg-orange-500/15 border-orange-500 text-white shadow-md shadow-orange-500/10"
                          : "bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                      }`}
                    >
                      <span>{service}</span>
                      {isSelected && <CheckCircle className="w-4 h-4 text-orange-500 shrink-0" />}
                    </button>
                  );
                })}
              </div>

              <div className="pt-6 flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-orange-600/30"
                >
                  <span>Next: Aesthetic</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 2: VIBE */}
          {step === 2 && !submitted && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-xl font-bold text-white">Define your Brand Aesthetic & Mood</h3>
                <p className="text-xs text-zinc-400 mt-1">Select the core creative tone for campaign execution.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {vibes.map((vibe) => (
                  <button
                    key={vibe}
                    type="button"
                    onClick={() => setSelectedVibe(vibe)}
                    className={`p-4 rounded-xl border text-left text-sm font-medium transition-all flex items-center justify-between ${
                      selectedVibe === vibe
                        ? "bg-amber-500/15 border-amber-500 text-white shadow-md"
                        : "bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                    }`}
                  >
                    <span>{vibe}</span>
                    {selectedVibe === vibe && <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />}
                  </button>
                ))}
              </div>

              <div className="pt-6 flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-2.5 rounded-xl bg-zinc-900 text-zinc-300 font-semibold text-xs flex items-center gap-2 border border-zinc-800"
                >
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-orange-600/30"
                >
                  <span>Next: Scale & Timeline</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 3: BUDGET & TIMELINE */}
          {step === 3 && !submitted && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-xl font-bold text-white">Project Scale & Budget Bracket</h3>
                <p className="text-xs text-zinc-400 mt-1">Helps us allocate appropriate creative directors & resources.</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-xs font-mono text-zinc-400 uppercase block mb-2">Estimated Budget Scope</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {["$15k - $30k", "$30k - $75k", "$75k - $150k", "$150k+"].map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setBudget(b)}
                        className={`p-3 rounded-xl border text-xs font-mono transition-all ${
                          budget === b
                            ? "bg-orange-500 text-white font-bold border-orange-500"
                            : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white"
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-zinc-400 uppercase block mb-2">Target Execution Timeline</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {["Immediate (1-3 weeks)", "Quarterly Launch (1-2 mos)", "Global Long-term retainer"].map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setTimeline(t)}
                        className={`p-3 rounded-xl border text-xs font-mono transition-all ${
                          timeline === t
                            ? "bg-amber-500 text-black font-bold border-amber-500"
                            : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-4 py-2.5 rounded-xl bg-zinc-900 text-zinc-300 font-semibold text-xs flex items-center gap-2 border border-zinc-800"
                >
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(4)}
                  className="px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-orange-600/30"
                >
                  <span>Next: Contact Info</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 4: CONTACT & SUBMIT */}
          {step === 4 && !submitted && (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white">Finalize & Submit Campaign Brief</h3>
                <p className="text-xs text-zinc-400 mt-1">Our executive creative director will respond within 24 hours.</p>
              </div>

              {/* Instant Brief Scope Card Summary */}
              <div className="bg-zinc-950 p-4 rounded-2xl border border-orange-500/30 text-xs font-mono space-y-2">
                <div className="text-orange-400 font-bold uppercase tracking-wider border-b border-zinc-800 pb-2 flex justify-between">
                  <span>BRIEF SCOPE SUMMARY</span>
                  <span>THE FORGE CENTRAL</span>
                </div>
                <div><span className="text-zinc-500">Pillars:</span> <span className="text-white">{selectedServices.join(", ")}</span></div>
                <div><span className="text-zinc-500">Aesthetic:</span> <span className="text-white">{selectedVibe}</span></div>
                <div><span className="text-zinc-500">Budget Bracket:</span> <span className="text-amber-400 font-bold">{budget}</span></div>
                <div><span className="text-zinc-500">Timeline:</span> <span className="text-white">{timeline}</span></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  required
                  placeholder="Your Full Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm focus:border-orange-500 focus:outline-none"
                />
                <input
                  type="email"
                  required
                  placeholder="Work Email Address *"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm focus:border-orange-500 focus:outline-none"
                />
              </div>

              <input
                type="text"
                placeholder="Brand / Organization Name"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm focus:border-orange-500 focus:outline-none"
              />

              <textarea
                rows={3}
                placeholder="Project notes or narrative vision details..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm focus:border-orange-500 focus:outline-none"
              />

              <div className="pt-4 flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="px-4 py-2.5 rounded-xl bg-zinc-900 text-zinc-300 font-semibold text-xs flex items-center gap-2 border border-zinc-800"
                >
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
                <button
                  type="submit"
                  className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-xl shadow-orange-600/40 hover:scale-105 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Brief</span>
                </button>
              </div>
            </form>
          )}

          {/* CONFIRMATION SCREEN */}
          {submitted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12 space-y-6"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-orange-500 to-amber-500 mx-auto flex items-center justify-center text-white shadow-xl shadow-orange-500/30">
                <Flame className="w-10 h-10 animate-bounce" />
              </div>

              <h3 className="text-3xl font-extrabold text-white font-mono">NARRATIVE BRIEF TRANSMITTED!</h3>
              <p className="text-zinc-300 max-w-lg mx-auto text-sm">
                Thank you, <strong className="text-orange-400">{formData.name}</strong>. Your custom campaign brief for{" "}
                <span className="text-white font-mono font-semibold">{formData.company || "your brand"}</span> has been assigned to our senior creative partner.
              </p>

              <div className="bg-zinc-950 p-6 rounded-2xl border border-zinc-800 max-w-md mx-auto text-left text-xs font-mono space-y-2">
                <div className="text-orange-400 font-bold">CONFIRMATION REF: #TFC-{Math.floor(100000 + Math.random() * 900000)}</div>
                <div className="text-zinc-400">Response SLA: Within 24 Hours</div>
                <div className="text-zinc-400">Assigned Hub: London / New York Hub</div>
              </div>

              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setStep(1);
                }}
                className="px-6 py-2.5 rounded-xl bg-zinc-900 text-zinc-300 border border-zinc-800 text-xs font-mono hover:text-white"
              >
                Create Another Brief
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
