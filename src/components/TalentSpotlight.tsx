"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UserCheck, Sparkles, Music, Award, ArrowUpRight, Globe, Check } from "lucide-react";

export default function TalentSpotlight() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedTalent, setSelectedTalent] = useState<Talent | null>(null);

  interface Talent {
    id: string;
    name: string;
    role: string;
    category: "music" | "fashion" | "visual" | "media";
    image: string;
    bio: string;
    stats: { label: string; value: string }[];
    highlights: string[];
    handle: string;
  }

  const talentList: Talent[] = [
    {
      id: "1",
      name: "MALIK VANCE",
      role: "Afro-Fusion Producer & Sound Architect",
      category: "music",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
      bio: "Crafted multi-platinum records across West Africa & UK charts. Positioned by The Forge Central for global sync deals with Nike and HBO.",
      stats: [
        { label: "Global Streams", value: "320M+" },
        { label: "Brand Partnerships", value: "$1.8M" },
      ],
      highlights: ["Billboard #1 Production Credit", "Sync Deal: HBO Euphoria S3", "Co-sign: Universal Music Group"],
      handle: "@malikvance_sound",
    },
    {
      id: "2",
      name: "SOLENE DUPONT",
      role: "Haute Couture Visual Designer",
      category: "fashion",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
      bio: "Redefining Parisian sustainable luxury. Scaled from underground atelier to Paris Fashion Week headliner via Forge Creative Direction.",
      stats: [
        { label: "Vogue Features", value: "8 Covers" },
        { label: "Runway Audience", value: "4.2M" },
      ],
      highlights: ["Paris Fashion Week 2025 Spotlight", "Capsule with Balenciaga", "LVMH Prize Nominee"],
      handle: "@solene.dupont",
    },
    {
      id: "3",
      name: "TAREK AL-MANSOR",
      role: "3D Spatial Storyteller & Director",
      category: "visual",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
      bio: "Pioneer in hyper-realistic CGI installations & IMAX visual narratives. Represented exclusively by The Forge Central Talent Division.",
      stats: [
        { label: "CGI Installations", value: "14 Global" },
        { label: "Directorial Awards", value: "11 Wins" },
      ],
      highlights: ["Cannes Lions Gold Trophy", "Venice Biennale Interactive Installation", "Directorial debut on Apple TV+"],
      handle: "@tarek_cg",
    },
    {
      id: "4",
      name: "AMARA OKONKWO",
      role: "Culture Journalist & Podcast Host",
      category: "media",
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=600&auto=format&fit=crop",
      bio: "Host of 'The Narrative Pulse' podcast. Engineered brand positioning & media authority reaching 5M monthly cultural innovators.",
      stats: [
        { label: "Monthly Listeners", value: "5.4M" },
        { label: "Cultural Impact Rank", value: "#3 Global" },
      ],
      highlights: ["Top 10 Culture Podcasts 2025", "Keynote Speaker at SXSW", "Book Deal with Penguin Random House"],
      handle: "@amara.pulse",
    },
  ];

  const filteredTalent = activeCategory === "all"
    ? talentList
    : talentList.filter((t) => t.category === activeCategory);

  return (
    <section id="talent" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <span className="text-purple-400 font-mono text-xs tracking-widest uppercase px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
            TALENT ACCELERATOR & BRANDING
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
            GLOBAL <span className="purple-text-gradient">ROSTER</span> SPOTLIGHT
          </h2>
          <p className="text-zinc-400 mt-2 max-w-xl text-sm sm:text-base">
            We position visionary creators, musicians, designers, and cultural leaders to command global presence.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {[
            { id: "all", label: "All Talent" },
            { id: "music", label: "Music & Sound" },
            { id: "fashion", label: "Fashion & Couture" },
            { id: "visual", label: "Visual Art & 3D" },
            { id: "media", label: "Media & Culture" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                activeCategory === cat.id
                  ? "bg-purple-600 text-white font-bold shadow-lg shadow-purple-600/30"
                  : "bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Talent Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredTalent.map((talent) => (
          <motion.div
            key={talent.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            onClick={() => setSelectedTalent(talent)}
            className="glass-card glass-card-hover rounded-2xl overflow-hidden cursor-pointer group border border-white/5 relative"
          >
            {/* Talent Image container */}
            <div className="relative aspect-[3/4] overflow-hidden bg-zinc-900">
              <img
                src={talent.image}
                alt={talent.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/30 to-transparent" />

              <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono text-purple-300 border border-purple-500/30">
                {talent.category.toUpperCase()} ACCELERATOR
              </span>
            </div>

            {/* Content overlay */}
            <div className="p-5 space-y-2">
              <h3 className="text-xl font-bold text-white tracking-tight flex items-center justify-between">
                <span>{talent.name}</span>
                <ArrowUpRight className="w-4 h-4 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-xs text-purple-400 font-mono">{talent.role}</p>

              {/* Mini stats preview */}
              <div className="pt-3 border-t border-zinc-800/80 flex justify-between text-xs font-mono">
                <div>
                  <span className="text-zinc-500 text-[10px] block">{talent.stats[0].label}</span>
                  <span className="text-white font-bold">{talent.stats[0].value}</span>
                </div>
                <div className="text-right">
                  <span className="text-zinc-500 text-[10px] block">{talent.stats[1].label}</span>
                  <span className="text-purple-400 font-bold">{talent.stats[1].value}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Talent Detail Modal */}
      <AnimatePresence>
        {selectedTalent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-[#121217] border border-purple-500/30 rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 relative overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setSelectedTalent(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white"
              >
                ✕
              </button>

              <div className="flex flex-col sm:flex-row gap-6 items-center">
                <img
                  src={selectedTalent.image}
                  alt={selectedTalent.name}
                  className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl object-cover border-2 border-purple-500/40"
                />
                <div className="space-y-2 text-center sm:text-left">
                  <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono">
                    {selectedTalent.category.toUpperCase()} ROSTER
                  </span>
                  <h3 className="text-3xl font-extrabold text-white">{selectedTalent.name}</h3>
                  <p className="text-sm text-purple-400 font-mono">{selectedTalent.role}</p>
                  <p className="text-xs text-zinc-400">{selectedTalent.handle}</p>
                </div>
              </div>

              <p className="text-zinc-300 text-sm bg-zinc-950 p-4 rounded-xl border border-zinc-800 leading-relaxed">
                "{selectedTalent.bio}"
              </p>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-purple-400 mb-3">Key Accelerator Milestones</h4>
                <div className="space-y-2">
                  {selectedTalent.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-zinc-300">
                      <Check className="w-4 h-4 text-purple-400 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex justify-between items-center border-t border-zinc-800">
                <span className="text-xs text-zinc-500 font-mono">MANAGED BY THE FORGE CENTRAL</span>
                <a
                  href="#brief"
                  onClick={() => setSelectedTalent(null)}
                  className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-purple-600/30"
                >
                  Book Talent / Collaborate
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
