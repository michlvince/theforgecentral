"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Eye, Music, Shirt, Layers, Tv, Sparkles, ArrowRight, Compass, Flame } from "lucide-react";

export default function HeroSection() {
  const [activePillarIndex, setActivePillarIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const pillarColors = [
    "from-[#050507]/20 to-[#d4af37]/30",
    "from-[#d4af37]/20 to-[#d4af37]/30",
    "from-purple-500 to-pink-500",
    "from-blue-500 to-cyan-500",
    "from-green-500 to-teal-500"
  ];

  const pillars = [
    { name: "Visual Storytelling", icon: Eye, desc: "Cinematic narratives, imagery & film that resonate across continents." },
    { name: "Music", icon: Music, desc: "Original soundscapes, global distribution, sonic identity & sync scoring." },
    { name: "Fashion", icon: Shirt, desc: "High-fashion direction, runway experiences, capsules & brand styling." },
    { name: "Branding", icon: Layers, desc: "360 brand architecture, visual identity & cultural positioning." },
    { name: "Media", icon: Tv, desc: "Global PR, digital distribution, press authority & audience acquisition." },
  ];

  // Add some subtle animation states
  useEffect(() => {
    // Add subtle periodic animation to background elements
    const animateBackground = () => {
      // This could trigger subtle background animations
    };

    const interval = setInterval(animateBackground, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-[#d4af37]/8 via-[#d4af37]/8 to-[#050507]/20 rounded-full blur-[120px] pointer-events-none animate-[float_6s_ease-in-out_infinite] delay-0" />
      <div className="absolute bottom-1/3 right-1/3 w-[400px] h-[400px] bg-gradient-to-tr from-[#050507]/10 via-[#d4af37]/10 to-[#050507]/5 rounded-full blur-[100px] pointer-events-none animate-[float_8s_ease-in-out_infinite] delay-2000" />
      <div className="absolute top-1/5 right-1/5 w-[200px] h-[200px] bg-[#d4af37]/10 rounded-full blur-[80px] pointer-events-none animate-[pulse_4s_ease-in-out_infinite] delay-4000" />

       <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Animated Header */}
        <motion.div
          initial={{ opacity: 0, y: -30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-3 mb-6"
        >
          <motion.div
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="w-8 h-8 rounded-full bg-[#121217] border border-[#d4af37]/20 flex items-center justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 h-6 rounded-full bg-[#d4af37]/20 flex items-center justify-center"
            >
              <Flame 
                className="w-5 h-5 text-[#d4af37] group-hover:text-[#e6c14d] transition-colors duration-300"
                style={{ filter: "drop-shadow(0 0 4px rgba(212, 175, 55, 0.3))" }}
              />
            </motion.div>
          </motion.div>
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-2 leading-[1.05]">
              CRAFTING <br className="hidden sm:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#d4af37] to-[#e6c14d]">
                NARRATIVE
              </span>
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-zinc-300 max-w-3xl">
              VIA BOLD IDEAS
            </p>
          </div>
        </motion.div>

        {/* Animated Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-2 max-w-3xl mx-auto text-base sm:text-lg text-zinc-300"
        >
          We are <strong className="text-white font-semibold">The Forge Central</strong> — a 360 Creative Agency shaping culture through unmatched precision in:
        </motion.p>

        {/* Animated Pillar Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 flex flex-wrap justify-center gap-3 max-w-5xl mx-auto"
        >
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isActive = activePillarIndex === idx;
            return (
              <motion.button
                key={pillar.name}
                onClick={() => setActivePillarIndex(idx)}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.94 }}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl border text-sm font-medium transition-all duration-400 ${
                  isActive
                    ? "bg-[#050507]/35 border-[#d4af37]/30 text-[#d4af37] shadow-lg shadow-[#d4af37]/20"
                    : "bg-[#050507]/30 border-[#050507]/50 text-[#d4af37] hover:text-[#d4af37] hover:border-[#d4af37]/30"
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-6 h-6"
                >
                  <Icon className="w-5 h-5" />
                </motion.div>
                <span>{pillar.name}</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Animated Selected Pillar Preview */}
        <motion.div
          key={activePillarIndex}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-6 max-w-xl mx-auto p-6 rounded-xl bg-[#050507]/40 border border-[#d4af37]/20 backdrop-blur-md text-sm text-[#d4af37] flex items-center justify-between gap-4"
        >
          <div className="flex items-center gap-4 text-left">
            <div className={`p-3 rounded-xl bg-gradient-to-r ${pillarColors[activePillarIndex]} text-white shadow-xl`}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-6 h-6"
              >
                {React.createElement(pillars[activePillarIndex].icon, { className: "w-6 h-6" })}
              </motion.div>
            </div>
            <div>
              <h3 className="font-semibold text-white text-base">{pillars[activePillarIndex].name} Focus</h3>
              <p className="text-[#d4af37] text-sm mt-1">{pillars[activePillarIndex].desc}</p>
            </div>
          </div>
          <a href="#services" className="text-[#d4af37] text-sm font-semibold hover:underline flex items-center gap-1">
            Details <ArrowRight className="w-3 h-3" />
          </a>
        </motion.div>

        {/* Animated Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <motion.a
            href="#brief"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#d4af37]/60 via-[#d4af37]/60 to-[#d4af37]/60 text-white font-bold text-sm uppercase tracking-wider shadow-xl shadow-[#d4af37]/30 hover:shadow-[#d4af37]/50 transition-all duration-300 flex items-center justify-center gap-3"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              <span>Build Your Narrative</span>
            </motion.div>
          </motion.a>

          <motion.a
            href="#campaigns"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#050507]/30 via-[#050507]/30 to-[#050507]/30 text-white font-semibold text-sm tracking-wider hover:bg-[#050507]/40 hover:border-[#d4af37]/30 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-md"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2"
            >
              <Compass className="w-4 h-4 text-[#d4af37]" />
              <span>Explore Global Work</span>
            </motion.div>
          </motion.a>
        </motion.div>

        {/* Animated Global Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto"
        >
{[
    { label: "Global Hubs", value: "5", suffix: "Cities" },
    { label: "Campaigns", value: "140+", sub: "" },
    { label: "Reach", value: "1.2B+", sub: "Impressions" },
    { label: "Value", value: "$45M+", sub: "Generated" },
  ].map((stat, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-card glass-card-hover p-4 rounded-xl text-left border border-[#d4af37]/15 relative overflow-hidden group"
    >
      <div className="absolute top-0 right-0 w-12 h-12 bg-[#d4af37]/15 rounded-full blur-[6px] group-hover:bg-[#d4af37]/25 transition-all" />
      <div className="text-2xl font-extrabold text-[#d4af37] font-mono flex items-baseline gap-1">
        {stat.value}
        <span className="text-[#d4af37] text-lg">{stat.suffix}</span>
      </div>
      <div className="text-sm font-semibold text-[#d4af37] mt-1">{stat.label}</div>
      {stat.sub && <div className="text-[10px] text-zinc-500 mt-1">{stat.sub}</div>}
    </motion.div>
  ))}
        </motion.div>
      </div>
    </section>
  );
}