"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Eye, Music, Shirt, Layers, Tv, Sparkles, ArrowRight, Share2 } from "lucide-react";

export default function HeroSection() {
  const [activePillar, setActivePillar] = useState<string | null>(null);

  const pillars = [
    { label: "Visual Storytelling", icon: Eye },
    { label: "Music", icon: Music },
    { label: "Fashion", icon: Shirt },
    { label: "Branding", icon: Layers },
    { label: "Media", icon: Tv },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative min-h-screen flex items-center justify-center pt-0 pb-0"
    >
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-6">
            <h1 className="text-4xl font-extrabold tracking-tight text-white mb-2">
              CRAFTING <br className="hidden sm:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#d4af37] to-[#e6c14d]">
                NARRATIVE
              </span>
            </h1>
            <p className="text-lg text-zinc-300 max-w-2xl">
              We are <strong className="text-white font-semibold">The Forge Central</strong> — a 360 Creative Agency shaping culture through unmatched precision in Visual Storytelling, Music, Fashion, Branding, and Media.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <a
                href="#brief"
                className="inline-flex items-center px-5 py-3 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#e6c14d] to-[#d4af37] text-white font-semibold text-sm uppercase tracking-wider shadow-lg shadow-[#d4af37]/30 hover:shadow-[#d4af37]/50 transition-all duration-300"
              >
                <Sparkles className="w-4 h-4" />
                <span>Launch Brief</span>
              </a>
              <a
                href="/portfolio"
                className="inline-flex items-center px-4 py-2 rounded-xl border border-[#d4af37]/20 text-[#d4af37] font-semibold text-sm uppercase tracking-wider hover:bg-[#d4af37]/10 transition-all duration-300"
              >
                <Share2 className="w-3 h-3" />
                <span>View Portfolio</span>
              </a>
            </div>
            {/* Service chips as subtle secondary navigation */}
            <div className="flex flex-wrap gap-2 mt-6 text-sm">
              {pillars.map((pillar) => (
                <motion.button
                  key={pillar.label}
                  onClick={() => setActivePillar(pillar.label)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl border text-[#d4af37]/50 hover:text-[#d4af37] hover:border-[#d4af37]/20 transition-all duration-300 ${
                    activePillar === pillar.label
                      ? "text-[#d4af37] font-medium"
                      : ""
                  }`}
                >
                  <pillar.icon className="w-4 h-4" />
                  <span>{pillar.label}</span>
                </motion.button>
              ))}
            </div>
          </div>
          {/* Right Column: Cinematic Visual Area */}
          <div className="relative h-64 w-full lg:w-80 rounded-xl overflow-hidden hidden lg:block">
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#050507]/20 to-[#050507]/10" />
            {/* Background image */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-center bg-cover bg-no-repeat" />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050507]/0 via-transparent to-[#050507]/60" />
            {/* Grain texture */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] bg-repeat opacity-10" />
            {/* Subtle glow */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526401140319-721a4c24d296?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFfY2h8Mnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80')] bg-center bg-contain bg-repeat opacity-15" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}