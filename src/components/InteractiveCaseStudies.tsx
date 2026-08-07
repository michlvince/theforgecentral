"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Flame, Eye, Sparkles } from "lucide-react";
import Link from "next/link";
import { campaigns } from "@/lib/campaigns";

const MotionLink = motion.create(Link);

export default function InteractiveCaseStudies() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredCard, setHoveredCard] = useState(null);

  const filteredCampaigns = activeFilter === "all"
    ? campaigns
    : campaigns.filter((c) => c.category.toLowerCase().includes(activeFilter));

  return (
    <section id="campaigns" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Header */}
      <div className="mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div className="space-y-2">
            <span className="text-amber-400 font-mono text-xs tracking-widest uppercase px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
              SELECTED GLOBAL NARRATIVES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 tracking-tight">
              FEATURED <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#d4af37] to-[#e6c14d]">
                CAMPAIGNS
              </span>
            </h2>
          </div>
          
          {/* Filter buttons */}
          <div className="flex flex-wrap gap-3">
            {[
              { id: "all", label: "All Campaigns" },
              { id: "fashion", label: "Fashion & Events" },
              { id: "visual", label: "Visual & Music" },
              { id: "branding", label: "Branding & Media" },
              { id: "events", label: "Events & Live" },
            ].map((f) => (
              <motion.button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-300 ${
                  activeFilter === f.id
                    ? "bg-amber-500 text-black font-bold shadow-lg shadow-amber-500/30"
                    : "bg-transparent border border-amber-500/20 text-amber-400 hover:bg-amber-500/10"
                }`}
              >
                {f.label}
              </motion.button>
            ))}
          </div>
        </div>
        
        <p className="text-zinc-400 mt-4 max-w-xl text-sm sm:text-base">
          A showcase of bold ideas executed across imagery, sound, runway, and global media.
        </p>
      </div>

      {/* Campaign Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredCampaigns.map((campaign) => (
          <motion.div
            key={campaign.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative group"
          >
            {/* Card Container */}
            <div className="glass-card glass-card-hover rounded-2xl overflow-hidden group border border-[#d4af37]/10">
              {/* Image Section */}
              <div className="relative aspect-[16/9]">
                <img
                  src={campaign.image}
                  alt={campaign.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-black/25" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-mono text-amber-300 border border-amber-500/30">
                    {campaign.category}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 space-y-4">
                <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest">{campaign.client}</span>
                <h3 className="text-2xl font-extrabold text-white tracking-tight group-hover:text-amber-400 transition-colors duration-300">
                  {campaign.title}
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed">{campaign.desc}</p>

                {/* Metrics and Case Study Link */}
                <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
                  <span className="text-xs font-mono text-zinc-400">{campaign.metrics}</span>
                  <MotionLink
                    href={`/case-study/${campaign.id}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-sm font-medium text-white group-hover:text-amber-400 transition-colors duration-300"
                  >
                    Case Study <ExternalLink className="w-3 h-3" />
                  </MotionLink>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}