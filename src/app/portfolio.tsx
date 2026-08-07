"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Portfolio() {
  const projects = [
    {
      title: "OBSIDIAN & FLAME: TOKYO TAKEOVER",
      description: "360 Runway production, spatial 3D lighting design, and global PR takeover.",
      category: "Fashion & Events",
      image: "assets/portfolio1.jpg",
      live: true,
      metrics: "12.4M Views • Vogue Feature"
    },
    {
      title: "AFRO-FUTURISM VISUAL ALBUM",
      description: "Full album visual direction and cinematic short film.",
      category: "Visual Storytelling & Music",
      image: "assets/portfolio2.jpg",
      live: false,
      metrics: "85M Streams • Cannes Finalist"
    },
    {
      title: "NEXT-GEN AUTOMOTIVE REBRAND",
      description: "Complete brand architecture, 3D launch video, and tier-1 global press placement.",
      category: "Branding & Media",
      image: "assets/portfolio3.jpg",
      live: true,
      metrics: "$320M Pre-orders • 400+ Press Outlets"
    },
    {
      title: "LAGOS CREATIVE FESTIVAL EXPERIENCE",
      description: "Immersive live stage direction, sound engineering, and talent curation.",
      category: "Events & Live",
      image: "assets/portfolio4.jpg",
      live: false,
      metrics: "12,000 Attendees • 3.4M Livestream"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-10">
        GLOBAL <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#d4af37] to-[#e6c14d]">
          CREATIVE PORTFOLIO
        </span>
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="relative bg-[#121217] border border-[#d4af37]/20 rounded-xl overflow-hidden"
          >
            {/* Image with enhanced hover effect */}
            <div className="relative aspect-[16/9] overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-black/30" />
              
              {/* Live badge */}
              {project.live && (
                <div className="absolute top-3 left-3 bg-[#d4af37]/30 rounded-full px-2 py-1">
                  <span className="text-xs font-bold text-white">LIVE</span>
                </div>
              )}
              
              {/* Overlay content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-transparent to-[#09090b]/80">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="text-zinc-300 text-sm">{project.description}</p>
                <div className="mt-2 flex items-center justify-between text-xs font-mono">
                  <span className="text-[#d4af37]">{project.metrics}</span>
                  <a href="#brief" className="text-white font-semibold hover:underline">Build Brief →</a>
                </div>
              </div>
            </div>
            
            {/* Floating accent - subtle animation */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-[#d4af37]/10 rounded-full blur-[20px] -rotate-30 animate-[float_6s_ease-in-out_infinite]" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}