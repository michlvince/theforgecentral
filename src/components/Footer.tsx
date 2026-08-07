"use client";

import React from "react";
import { Flame, ArrowUpRight, Globe, Share2, Compass, Mail, Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050507] border-t border-[#d4af37]/20 pt-24 pb-16 text-zinc-300 font-mono text-sm relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-xl bg-[#121217] border border-[#d4af37]/20 group-hover:scale-105 transition-transform duration-300">
                <Flame className="w-5 h-5 text-[#d4af37] group-hover:text-[#e6c14d] transition-colors duration-300" />
                <div className="absolute inset-0 bg-[#d4af37]/10 rounded-xl" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-base tracking-wider text-white font-mono flex items-center gap-1">
                  THE FORGE <span className="text-[#d4af37] text-xs px-1 py-0.5 rounded bg-[#d4af37]/10 border border-[#d4af37]/20">CENTRAL</span>
                </span>
                <span className="text-[9px] text-zinc-300 tracking-widest uppercase">360 Creative Agency</span>
              </div>
            </div>
            <p className="text-zinc-300 text-sm leading-relaxed max-w-sm">
              We are a 360 Creative Agency crafting global narrative via bold ideas in Visual Storytelling, Music, Fashion, Branding, and Media.
            </p>
          </div>

          {/* Service Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-white font-bold uppercase tracking-wider text-xs">OUR CAPABILITIES</h4>
            <div className="space-y-3">
              <a href="#services" className="block text-sm font-medium text-zinc-300 hover:text-[#d4af37] transition-colors duration-300 flex items-center gap-2">
                Creative Direction <ArrowUpRight className="w-3 h-3" />
              </a>
              <a href="#services" className="block text-sm font-medium text-zinc-300 hover:text-[#d4af37] transition-colors duration-300 flex items-center gap-2">
                Visual Storytelling <ArrowUpRight className="w-3 h-3" />
              </a>
              <a href="#talent" className="block text-sm font-medium text-zinc-300 hover:text-[#d4af37] transition-colors duration-300 flex items-center gap-2">
                Talent Accelerator <ArrowUpRight className="w-3 h-3" />
              </a>
              <a href="#services" className="block text-sm font-medium text-zinc-300 hover:text-[#d4af37] transition-colors duration-300 flex items-center gap-2">
                Marketing & PR <ArrowUpRight className="w-3 h-3" />
              </a>
              <a href="#events" className="block text-sm font-medium text-zinc-300 hover:text-[#d4af37] transition-colors duration-300 flex items-center gap-2">
                Events & Live <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Social & Hubs */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-white font-bold uppercase tracking-wider text-xs">CULTURAL DISPATCH</h4>
            <p className="text-zinc-300 text-sm font-sans">Subscribe for quarterly cultural narrative playbooks & roster releases.</p>
            <div className="mt-4 flex items-center gap-4">
              <input
                type="email"
                placeholder="Enter work email..."
                className="flex-1 px-4 py-3 rounded-xl bg-[#121217] border border-[#d4af37]/15 text-white font-sans focus:outline-none focus:border-[#d4af37]/30"
              />
              <button
                className="px-5 py-3 rounded-xl bg-[#121217]/60 border border-[#d4af37]/20 text-[#d4af37] font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-[#121217]/80 hover:border-[#d4af37]/30 transition-all duration-300"
              >
                Join Dispatch <ArrowUpRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>

        {/* Cultural Feed */}
        <div className="border-t border-[#d4af37]/10 pt-8">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <div className="text-[10px] text-zinc-400">
              © {new Date().getFullYear()} THE FORGE CENTRAL. ALL RIGHTS RESERVED.
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-zinc-300 hover:text-[#d4af37] transition-colors duration-300">PRIVACY POLICY</a>
              <a href="#" className="text-zinc-300 hover:text-[#d4af37] transition-colors duration-300">TERMS OF NARRATIVE</a>
              <a href="#" className="text-zinc-300 hover:text-[#d4af37] transition-colors duration-300">GLOBAL DIRECTORY</a>
              <a href="#" className="text-zinc-300 hover:text-[#d4af37] transition-colors duration-300">ACCESSIBILITY</a>
            </div>
          </div>
          
          {/* Cultural ticker - subtle animation */}
          <div className="mt-4 h-6 overflow-hidden relative">
            <div className="flex items-center space-x-6 animate-[marquee_10s_linear_infinite]">
              <span className="text-xs font-mono text-[#d4af37]/60">•</span>
              <span className="text-xs font-mono text-[#d4af37]/60">PARIS • MILAN • TOKYO • LAGOS • LONDON • NEW YORK</span>
              <span className="text-xs font-mono text-[#d4af37]/60">•</span>
              <span className="text-xs font-mono text-[#d4af37]/60">Q3 2026 • CULTURAL PLAYBOOK VOL. IV • TALENT ROSTER UPDATE</span>
              <span className="text-xs font-mono text-[#d4af37]/60">•</span>
              <span className="text-xs font-mono text-[#d4af37]/60">PARIS • MILAN • TOKYO • LAGOS • LONDON • NEW YORK</span>
              <span className="text-xs font-mono text-[#d4af37]/60">•</span>
              <span className="text-xs font-mono text-[#d4af37]/60">Q3 2026 • CULTURAL PLAYBOOK VOL. IV • TALENT ROSTER UPDATE</span>
              <span className="text-xs font-mono text-[#d4af37]/60">•</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}