"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Share2 } from "lucide-react";

const premiumAssets = [
  {
    id: "branding",
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277784c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Premium branding identity"
  },
  {
    id: "fashion",
    src: "https://images.unsplash.com/photo-1526402940394-7b9c12d46c6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Fashion editorial"
  },
  {
    id: "music",
    src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Music performance"
  },
  {
    id: "cinematic",
    src: "https://images.unsplash.com/photo-1522199710521-306718fb2866?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Cinematic campaign"
  },
  {
    id: "event",
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Event experience"
  },
  {
    id: "motion",
    src: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Motion graphics preview"
  }
];

const cardInitial = { opacity: 0, y: 30, scale: 0.95 };
const cardAnimate = { opacity: 1, y: 0, scale: 1 };
const cardTransition = { duration: 0.6 };

export default function HeroSection() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative min-h-[calc(100vh-4rem)] bg-[#050507] overflow-hidden"
      >
        <div className="absolute inset-0 -z-20">
          <div className="absolute inset-0 bg-gradient-radial from-[#121217]/8 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-radial from-[#d4af37]/12 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-5" />
        </div>

        <div className="relative w-full max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-24 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-start lg:gap-16">
            {/* Left Column */}
            <div className="flex flex-col items-start space-y-8 lg:space-y-12">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider text-[#d4af37] bg-[#d4af37]/15 border border-[#d4af37]/25">
                Award-Winning Creative Agency
              </span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-[2.5rem] lg:text-[4rem] font-extrabold text-white leading-none tracking-tight"
              >
                <span className="block lg:inline">CRAFTING</span>{" "}
                <span className="block lg:inline text-[#d4af37]">CULTURAL</span>{" "}
                <span className="block lg:inline">NARRATIVES</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-zinc-300 max-w-md leading-relaxed"
              >
                We transform brands through award-winning storytelling across film, fashion, music, and live experiences.
                <span className="block mt-2 text-[#d4af37] font-medium">
                  Your narrative deserves masterpiece treatment.
                </span>
              </motion.p>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <motion.a
                  href="#brief"
                  whileHover={{ scale: 1.03, boxShadow: "0 20px 40px -8px rgba(212, 175, 55, 0.4)" }}
                  whileTap={{ scale: 0.97 }}
                  className="relative px-7 py-3 rounded-2xl bg-[#d4af37]/90 border border-[#d4af37]/40 text-[#d4af37] font-semibold text-sm uppercase tracking-wider flex items-center gap-2 shadow-lg transition-all duration-300"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Launch Brief</span>
                </motion.a>

                <motion.a
                  href="/portfolio"
                  whileHover={{ scale: 1.02, boxShadow: "0 8px 20px -4px rgba(212, 175, 55, 0.2)" }}
                  whileTap={{ scale: 0.98 }}
                  className="relative flex items-center px-5 py-2.5 rounded-2xl text-[#d4af37] hover:text-[#e6c14d] font-semibold text-sm uppercase tracking-wider border border-[#d4af37]/30 hover:bg-[#d4af37]/10 transition-all duration-300"
                >
                  <Share2 className="w-4 h-4" />
                  <span>View Portfolio</span>
                </motion.a>
              </div>
            </div>

            {/* Right Column - Curated Editorial Collage */}
            <div className="relative mt-12 lg:mt-0">
              <div className="flex flex-col gap-5">
                {/* Featured largest card */}
                <motion.div
                  whileHover={{ scale: 1.02, rotate: 0.5 }}
                  whileTap={{ scale: 0.98 }}
                  initial={cardInitial}
                  animate={cardAnimate}
                  transition={cardTransition}
                  className="relative rounded-2xl overflow-hidden border border-[#d4af37]/20 shadow-lg shadow-black/30"
                  style={{
                    height: "280px",
                    borderRadius: "2.5rem",
                    boxShadow: "0 15px 40px -8px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.05)"
                  }}
                >
                  <img
                    src={premiumAssets[0].src}
                    alt={premiumAssets[0].alt}
                    className="w-full h-full object-cover"
                    style={{
                      filter: "brightness(0.97) contrast(1.02) saturate(1.1)"
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </motion.div>

                {/* Two smaller cards stacked */}
                <div className="flex gap-5">
                  <motion.div
                    whileHover={{ scale: 1.015, rotate: -0.3 }}
                    whileTap={{ scale: 0.98 }}
                    initial={cardInitial}
                    animate={cardAnimate}
                    transition={cardTransition}
                    className="relative rounded-2xl overflow-hidden border border-[#d4af37]/15 shadow-md shadow-black/20 flex-1"
                    style={{
                      height: "180px",
                      borderRadius: "1.5rem",
                      boxShadow: "0 6px 20px -4px rgba(0,0,0,0.25)"
                    }}
                  >
                    <img
                      src={premiumAssets[1].src}
                      alt={premiumAssets[1].alt}
                      className="w-full h-full object-cover"
                      style={{ filter: "brightness(1.01)" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent" />
                  </motion.div>

                  <div className="flex flex-col gap-5 flex-1">
                    <motion.div
                      whileHover={{ scale: 1.015, rotate: 0.3 }}
                      whileTap={{ scale: 0.98 }}
                      initial={cardInitial}
                      animate={cardAnimate}
                      transition={cardTransition}
                      className="relative rounded-2xl overflow-hidden border border-[#d4af37]/15 shadow-md shadow-black/20"
                      style={{
                        height: "120px",
                        borderRadius: "1.5rem",
                        boxShadow: "0 4px 12px -2px rgba(0,0,0,0.2)"
                      }}
                    >
                      <img
                        src={premiumAssets[2].src}
                        alt={premiumAssets[2].alt}
                        className="w-full h-full object-cover"
                        style={{ filter: "brightness(1.02)" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-transparent" />
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.015, rotate: -0.2 }}
                      whileTap={{ scale: 0.98 }}
                      initial={cardInitial}
                      animate={cardAnimate}
                      transition={cardTransition}
                      className="relative rounded-2xl overflow-hidden border border-[#d4af37]/15 shadow-md shadow-black/20"
                      style={{
                        height: "120px",
                        borderRadius: "1.5rem",
                        boxShadow: "0 4px 12px -2px rgba(0,0,0,0.2)"
                      }}
                    >
                      <img
                        src={premiumAssets[3].src}
                        alt={premiumAssets[3].alt}
                        className="w-full h-full object-cover"
                        style={{ filter: "brightness(1.0)" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-transparent" />
                    </motion.div>
                  </div>
                </div>

                {/* Two more cards */}
                <div className="flex gap-5">
                  <motion.div
                    whileHover={{ scale: 1.015, rotate: 0.4 }}
                    whileTap={{ scale: 0.98 }}
                    initial={cardInitial}
                    animate={cardAnimate}
                    transition={cardTransition}
                    className="relative rounded-2xl overflow-hidden border border-[#d4af37]/15 shadow-md shadow-black/20 flex-1"
                    style={{
                      height: "140px",
                      borderRadius: "1.5rem",
                      boxShadow: "0 5px 15px -3px rgba(0,0,0,0.22)"
                    }}
                  >
                    <img
                      src={premiumAssets[4].src}
                      alt={premiumAssets[4].alt}
                      className="w-full h-full object-cover"
                      style={{ filter: "brightness(1.01)" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-transparent" />
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.015, rotate: -0.3 }}
                    whileTap={{ scale: 0.98 }}
                    initial={cardInitial}
                    animate={cardAnimate}
                    transition={cardTransition}
                    className="relative rounded-2xl overflow-hidden border border-[#d4af37]/15 shadow-md shadow-black/20 flex-1"
                    style={{
                      height: "140px",
                      borderRadius: "1.5rem",
                      boxShadow: "0 5px 15px -3px rgba(0,0,0,0.22)"
                    }}
                  >
                    <img
                      src={premiumAssets[5].src}
                      alt={premiumAssets[5].alt}
                      className="w-full h-full object-cover"
                      style={{ filter: "brightness(1.03)" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-transparent" />
                  </motion.div>
                </div>
              </div>

              {/* Floating gold accent */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute -top-6 -right-6 w-12 h-12 rounded-full bg-[#d4af37]/20 blur-md"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}