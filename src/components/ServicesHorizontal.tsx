"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Eye,
  Music,
  Shirt,
  Layers,
  Tv,
  Film,
} from "lucide-react";

const services = [
  {
    id: "visual-storytelling",
    title: "Visual Storytelling",
    short: "Imagery, Film & Emotional Resonance",
    icon: Eye,
  },
  {
    id: "branding",
    title: "Branding",
    short: "Visual Identity & Concept Execution",
    icon: Layers,
  },
  {
    id: "fashion",
    title: "Fashion",
    short: "Style, Trend & Cultural Expression",
    icon: Shirt,
  },
  {
    id: "music",
    title: "Music",
    short: "Sound, Rhythm & Sonic Branding",
    icon: Music,
  },
  {
    id: "media",
    title: "Media",
    short: "Strategic Promotion & Reputation",
    icon: Tv,
  },
  {
    id: "campaigns",
    title: "Campaigns",
    short: "Integrated Global Campaigns",
    icon: Film,
  },
];

export default function ServicesHorizontal() {
  return (
    <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-[#d4af37] font-mono text-xs tracking-widest uppercase px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/20">
            360 CREATIVE CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
            OUR SERVICES & <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#d4af37] to-[#e6c14d]">CAPABILITIES</span>
          </h2>
          <p className="text-zinc-400 mt-4 text-base sm:text-lg">
            From high-concept visual identity to global live activations, we forge narratives that dominate culture.
          </p>
        </div>
        
        {/* Horizontal Service Cards */}
        <div className="overflow-x-auto space-x-6">
          <div className="flex flex-wrap lg:nowrap gap-6">
            {services.map((service) => (
              <motion.div
                key={service.id}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex-shrink-0 w-[220px] lg:w-[260px] rounded-2xl bg-[#121217]/40 border border-[#d4af37]/20 p-6 backdrop-blur-sm transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <service.icon className="w-6 h-6 text-[#d4af37]" />
                  <h3 className="font-semibold text-white text-lg">{service.title}</h3>
                </div>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  {service.short}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}