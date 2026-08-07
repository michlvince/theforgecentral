"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass,
  Film,
  UserCheck,
  TrendingUp,
  Radio,
  Sparkles,
  Palette,
  Play,
  Sliders,
  CheckCircle2,
  Share2,
  Zap,
  Globe,
  Award,
  ChevronRight
} from "lucide-react";

export default function ServicesMatrix() {
  const [selectedServiceId, setSelectedServiceId] = useState("creative-direction");

  // Interactive state for Creative Direction Simulator
  const [brandMood, setBrandMood] = useState<"luxe" | "cyber" | "organic">("luxe");
  const [palette, setPalette] = useState({ primary: "#ff4500", accent: "#ffb703", bg: "#09090b" });

  // Interactive state for PR reach calculator
  const [reachBudget, setReachBudget] = useState(50); // 50k

  // Interactive state for Event Stage
  const [stageLight, setStageLight] = useState<"ember" | "neon" | "monochrome">("ember");

  const services = [
    {
      id: "creative-direction",
      title: "Creative Direction and Design",
      short: "Visual Identity & Concept Execution",
      icon: Palette,
      gradient: "from-orange-500 to-amber-500",
      description:
        "We shape the visual identity and creative vision behind a brand, from concept to execution ensuring consistency across every touchpoint.",
      deliverables: ["Brand Architecture & Design Systems", "3D & Graphic Motion Systems", "Packaging & Spatial Direction", "Creative Playbooks & Brand Bibles"],
    },
    {
      id: "visual-storytelling",
      title: "Visual Storytelling",
      short: "Imagery, Film & Emotional Resonance",
      icon: Film,
      gradient: "from-amber-500 to-yellow-500",
      description:
        "We communicate ideas and emotion through imagery, video, and design, turning concepts into narratives that resonate.",
      deliverables: ["Cinematic Commercial & Docu-Films", "Fashion & Music Video Direction", "Editorial Photography & Covers", "3D Digital Narrative Art"],
    },
    {
      id: "talent-accelerator",
      title: "Talent Accelerator and Branding",
      short: "Personal Identity & Market Position",
      icon: UserCheck,
      gradient: "from-purple-500 to-pink-500",
      description:
        "We develop and position individual talent, building personal brand identity, visibility, and market presence.",
      deliverables: ["Personal Brand Identity & Strategy", "Commercial Endorsements & Deals", "Media Training & Public Persona", "Creative Portfolio Scaling"],
    },
    {
      id: "marketing-pr",
      title: "Marketing and PR",
      short: "Strategic Promotion & Reputation",
      icon: TrendingUp,
      gradient: "from-blue-500 to-cyan-500",
      description:
        "We build strategic promotion and reputation management to grow awareness, influence perception, and drive audience engagement.",
      deliverables: ["Global Press & Media Placement", "Culture-Led Influencer Strategy", "Crisis & Reputation Management", "Digital Growth & Virality"],
    },
    {
      id: "events-live",
      title: "Events and Live",
      short: "Experiential & Real-Time Identity",
      icon: Radio,
      gradient: "from-emerald-500 to-teal-500",
      description:
        "We plan and execute live experiences and events that brings a brand or talent's identity to life in real time.",
      deliverables: ["Runway & Fashion Show Production", "Immersive Brand Pop-ups & Activations", "Concert & Music Stage Curation", "VIP & Global Launch Galas"],
    },
  ];

  const currentService = services.find((s) => s.id === selectedServiceId) || services[0];

  return (
    <section id="services" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
        <span className="text-orange-500 font-mono text-xs tracking-widest uppercase px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20">
          360 CREATIVE CAPABILITIES
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
          OUR SERVICES & <span className="forge-text-gradient">CAPABILITIES</span>
        </h2>
        <p className="text-zinc-400 mt-4 text-base sm:text-lg">
          From high-concept visual identity to global live activations, we forge narratives that dominate culture.
        </p>
      </div>

      {/* Services Grid Navigation */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative z-10 mb-12">
        {services.map((service) => {
          const Icon = service.icon;
          const isSelected = service.id === selectedServiceId;
          return (
            <button
              key={service.id}
              onClick={() => setSelectedServiceId(service.id)}
              className={`p-5 rounded-2xl text-left transition-all duration-300 relative overflow-hidden flex flex-col justify-between min-h-[160px] ${
                isSelected
                  ? "bg-zinc-900 border-2 border-orange-500 shadow-xl shadow-orange-500/15"
                  : "bg-zinc-900/40 border border-zinc-800/80 hover:bg-zinc-900/80 hover:border-zinc-700"
              }`}
            >
              <div>
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white mb-3 shadow-md`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white text-sm leading-snug">{service.title}</h3>
              </div>
              <p className="text-xs text-zinc-400 mt-2 font-mono">{service.short}</p>

              {isSelected && (
                <div className="absolute bottom-2 right-2">
                  <Sparkles className="w-4 h-4 text-orange-400 animate-pulse" />
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Detailed Interactive Showcase Display */}
      <div className="glass-card rounded-3xl p-6 sm:p-10 border border-zinc-800 relative z-10 overflow-hidden shadow-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentService.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
          >
            {/* Left Description Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-mono">
                <currentService.icon className="w-4 h-4" />
                <span>{currentService.short}</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold text-white">{currentService.title}</h3>

              <p className="text-zinc-300 text-base sm:text-lg leading-relaxed bg-zinc-900/50 p-4 rounded-xl border border-zinc-800/80">
                "{currentService.description}"
              </p>

              {/* Deliverables checklist */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-orange-400">Core Deliverables & Outputs</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentService.deliverables.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <a
                  href="#brief"
                  className="px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-orange-600/30 flex items-center gap-2 transition-all"
                >
                  <span>Request Strategy</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Interactive Simulator / Visual Preview Column */}
            <div className="lg:col-span-6">
              <div className="bg-zinc-950/90 rounded-2xl p-6 border border-zinc-800 shadow-inner relative overflow-hidden">
                {/* 1. Creative Direction Simulator */}
                {currentService.id === "creative-direction" && (
                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-orange-400 flex items-center gap-2">
                        <Sliders className="w-4 h-4" /> Interactive Brand Identity Simulator
                      </span>
                      <span className="text-[10px] text-zinc-500 font-mono">Real-time Render</span>
                    </div>

                    {/* Mood switch */}
                    <div className="flex gap-2">
                      {(["luxe", "cyber", "organic"] as const).map((m) => (
                        <button
                          key={m}
                          onClick={() => {
                            setBrandMood(m);
                            if (m === "luxe") setPalette({ primary: "#ffb703", accent: "#ff4500", bg: "#09090b" });
                            if (m === "cyber") setPalette({ primary: "#00f0ff", accent: "#ff007f", bg: "#050014" });
                            if (m === "organic") setPalette({ primary: "#10b981", accent: "#f59e0b", bg: "#06120e" });
                          }}
                          className={`px-3 py-1.5 rounded-lg text-xs font-mono capitalize transition-all ${
                            brandMood === m ? "bg-orange-500 text-white font-bold" : "bg-zinc-900 text-zinc-400 hover:text-white"
                          }`}
                        >
                          {m} Mood
                        </button>
                      ))}
                    </div>

                    {/* Dynamic Brand Mockup Canvas */}
                    <div
                      style={{ backgroundColor: palette.bg }}
                      className="p-6 rounded-xl border border-white/10 transition-colors duration-500 space-y-4"
                    >
                      <div className="flex items-center justify-between border-b border-white/10 pb-3">
                        <span className="font-extrabold font-mono text-sm tracking-widest text-white">
                          FORGE // <span style={{ color: palette.primary }}>NARRATIVE</span>
                        </span>
                        <div className="flex gap-1.5">
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: palette.primary }} />
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: palette.accent }} />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h4 className="text-2xl font-bold text-white tracking-tight">Bold Identity System</h4>
                        <p className="text-xs text-zinc-400">Concept to execution across every physical & digital touchpoint.</p>
                      </div>

                      <div className="pt-2 flex gap-3">
                        <div
                          style={{ backgroundColor: palette.primary }}
                          className="px-4 py-2 rounded-lg text-black font-extrabold text-xs tracking-wider"
                        >
                          PRIMARY ASSET
                        </div>
                        <div
                          style={{ borderColor: palette.accent, color: palette.accent }}
                          className="px-4 py-2 rounded-lg border text-xs font-mono"
                        >
                          SPECS v4.0
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. Visual Storytelling Storyboard */}
                {currentService.id === "visual-storytelling" && (
                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-amber-400 flex items-center gap-2">
                        <Film className="w-4 h-4" /> Cinema Storyboard & Director Notes
                      </span>
                      <span className="text-[10px] text-emerald-400 font-mono">● LIVE SCRUBBER</span>
                    </div>

                    <div className="relative aspect-video rounded-xl bg-zinc-900 border border-zinc-800 overflow-hidden flex items-center justify-center group">
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 z-10" />

                      <img
                        src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop"
                        alt="Visual Storytelling Preview"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                      />

                      <div className="absolute z-20 inset-0 flex flex-col justify-between p-4">
                        <div className="flex justify-between items-start">
                          <span className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-mono text-orange-400 border border-orange-500/30">
                            CAM 01 // SCENE 04 - TOKYO NIGHTS
                          </span>
                          <span className="text-xs text-white font-mono bg-orange-600 px-2 py-0.5 rounded">4K RAW</span>
                        </div>

                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-white font-bold text-sm">
                            <Play className="w-4 h-4 text-orange-500 fill-orange-500" />
                            <span>"Global Narrative Cinematic Scene"</span>
                          </div>
                          <p className="text-[11px] text-zinc-300 font-mono">Color Grading: High-Contrast Obsidian & Ember Anamorphic</p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
                      <div className="p-2 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">Frame 01: Hook</div>
                      <div className="p-2 rounded bg-orange-500/20 border border-orange-500/50 text-orange-300">Frame 02: Climax</div>
                      <div className="p-2 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">Frame 03: Resolve</div>
                    </div>
                  </div>
                )}

                {/* 3. Talent Accelerator */}
                {currentService.id === "talent-accelerator" && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-purple-400 flex items-center gap-2">
                        <UserCheck className="w-4 h-4" /> Talent Velocity & Brand Deck
                      </span>
                      <span className="text-[10px] text-purple-400 font-mono">+420% Growth</span>
                    </div>

                    <div className="bg-zinc-900 p-4 rounded-xl border border-purple-500/30 space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 p-0.5">
                          <img
                            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
                            alt="Talent Profile"
                            className="w-full h-full rounded-full object-cover"
                          />
                        </div>
                        <div>
                          <h5 className="font-bold text-white text-base">KIRA VANCE</h5>
                          <p className="text-xs text-purple-400 font-mono">Visual Artist & Fashion Icon</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="bg-zinc-950 p-2.5 rounded border border-zinc-800">
                          <span className="text-zinc-400 block text-[10px]">Brand Deals Secured</span>
                          <span className="font-bold text-white font-mono">$1.4M ARR</span>
                        </div>
                        <div className="bg-zinc-950 p-2.5 rounded border border-zinc-800">
                          <span className="text-zinc-400 block text-[10px]">Global Press Coverage</span>
                          <span className="font-bold text-white font-mono">Vogue, Dazed, Billboard</span>
                        </div>
                      </div>

                      <div className="w-full bg-zinc-950 h-2 rounded-full overflow-hidden">
                        <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-full w-[85%]" />
                      </div>
                    </div>
                  </div>
                )}

                {/* 4. PR & Marketing virality simulator */}
                {currentService.id === "marketing-pr" && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-blue-400 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4" /> Global Reach & PR Virality Estimator
                      </span>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-zinc-400">Campaign PR Intensity:</span>
                        <span className="text-blue-400 font-bold">${reachBudget}k Budget Scale</span>
                      </div>
                      <input
                        type="range"
                        min="10"
                        max="200"
                        value={reachBudget}
                        onChange={(e) => setReachBudget(Number(e.target.value))}
                        className="w-full accent-blue-500 cursor-pointer"
                      />

                      <div className="grid grid-cols-2 gap-3 pt-2">
                        <div className="bg-zinc-900 p-3 rounded-xl border border-blue-500/20 text-center">
                          <span className="text-[10px] text-zinc-400 font-mono uppercase block">Est. Impressions</span>
                          <span className="text-xl font-extrabold text-white font-mono">{(reachBudget * 140).toLocaleString()}k</span>
                        </div>
                        <div className="bg-zinc-900 p-3 rounded-xl border border-blue-500/20 text-center">
                          <span className="text-[10px] text-zinc-400 font-mono uppercase block">Press Publications</span>
                          <span className="text-xl font-extrabold text-blue-400 font-mono">{Math.floor(reachBudget * 0.85)} Tier-1 Outlets</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 5. Live Events Stage */}
                {currentService.id === "events-live" && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-emerald-400 flex items-center gap-2">
                        <Radio className="w-4 h-4" /> Live Experience Stage Lighting Simulator
                      </span>
                    </div>

                    {/* Stage lighting simulator box */}
                    <div
                      className={`relative h-44 rounded-xl border transition-all duration-500 flex flex-col justify-end p-4 overflow-hidden ${
                        stageLight === "ember"
                          ? "bg-gradient-to-t from-orange-950 via-zinc-950 to-black border-orange-500/40"
                          : stageLight === "neon"
                          ? "bg-gradient-to-t from-purple-950 via-cyan-950 to-black border-cyan-500/40"
                          : "bg-gradient-to-t from-zinc-900 via-zinc-950 to-black border-white/20"
                      }`}
                    >
                      {/* Animated beams */}
                      <div className="absolute top-0 left-1/4 w-12 h-full bg-orange-500/20 blur-xl -rotate-12 animate-pulse" />
                      <div className="absolute top-0 right-1/4 w-12 h-full bg-amber-500/20 blur-xl rotate-12 animate-pulse" />

                      <div className="relative z-10 space-y-1">
                        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                          LIVE EVENT // RUNWAY SHOW & SOUNDSTAGE
                        </span>
                        <h5 className="text-lg font-extrabold text-white">THE FORGE LIVE GALA - PARIS</h5>
                        <p className="text-xs text-zinc-300 font-mono">Stage Preset: {stageLight.toUpperCase()} ATMOSPHERE</p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      {(["ember", "neon", "monochrome"] as const).map((mode) => (
                        <button
                          key={mode}
                          onClick={() => setStageLight(mode)}
                          className={`flex-1 py-1.5 rounded text-xs font-mono capitalize transition-all ${
                            stageLight === mode ? "bg-emerald-500 text-black font-bold" : "bg-zinc-900 text-zinc-400 hover:text-white"
                          }`}
                        >
                          {mode} Light
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
