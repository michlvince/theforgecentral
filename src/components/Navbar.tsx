"use client";

import React, { useState, useEffect } from "react";
import { Flame, Menu, X, Sparkles, Share2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  onOpenBriefModal?: () => void;
}

export default function Navbar({ onOpenBriefModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Talent", href: "#talent" },
    { name: "Work", href: "#work" },
    { name: "Live", href: "#events" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-800"
      style={{
        backgroundColor: scrolled ? "rgba(5, 5, 7, 0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(212, 175, 55, 0.2)" : "none",
        boxShadow: scrolled
          ? "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
          : "none",
      }}
    >
      {/* Increased height wrapper */}
      <div className="min-h-[80px] max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo - Increased size and breathing room */}
        <a href="#" className="group flex items-center gap-4 ml-2">
          <div className="relative flex items-center justify-center w-14 h-14 rounded-2xl bg-[#121217] border border-[#d4af37]/20 group-hover:scale-105 transition-transform duration-300">
            <Flame
              className="w-7 h-7 text-[#d4af37] group-hover:text-[#e6c14d] transition-colors duration-300"
              style={{ filter: scrolled ? "drop-shadow(0 0 6px rgba(212, 175, 55, 0.3))" : "none" }}
            />
          </div>
          <div className="flex flex-col">
            {/* Removed the overlapping agency tagline */}
            <span className="font-extrabold text-xl tracking-wider text-white font-mono flex items-center gap-1">
              THE FORGE{" "}
              <span className="text-[#d4af37] text-xs px-1.5 py-0.5 rounded bg-[#d4af37]/10 border border-[#d4af37]/20 group-hover:bg-[#d4af37]/20 transition-colors">
                CENTRAL
              </span>
            </span>
          </div>
        </a>

        {/* Desktop Navigation - Prevents wrapping */}
        <nav className="hidden md:flex flex-nowrap items-center gap-12">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="text-base font-medium text-zinc-300 hover:text-[#d4af37] transition-colors duration-300 relative whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#d4af37]/30 to-[#d4af37]/30 transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="hidden md:flex items-center gap-6">
          {/* CTA Brief Generator button - Primary (Solid Gold) */}
          <motion.a
            href="#brief"
            onClick={onOpenBriefModal}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden px-6 py-3 rounded-xl bg-[#d4af37] text-white font-semibold text-sm uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-[#d4af37]/30 hover:shadow-[#d4af37]/40 transition-all"
          >
            <Sparkles className="w-4 h-4" />
            <span>Launch Brief</span>
          </motion.a>

          {/* Portfolio Link - Secondary (Ghost/Text) */}
          <motion.a
            href="/portfolio"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="relative overflow-hidden px-4 py-2 rounded-xl border border-[#d4af37]/20 text-[#d4af37] font-semibold text-sm uppercase tracking-wider flex items-center gap-2 hover:text-[#e6c14d] transition-all"
          >
            <Share2 className="w-3 h-3" />
            <span>Portfolio</span>
          </motion.a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center">
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-xl bg-[#121217]/60 border border-[#d4af37]/15 text-[#d4af37] hover:bg-[#121217]/90 hover:border-[#d4af37]/30 transition-all"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-[#050507]/95 backdrop-blur-xl border-b border-[#d4af37]/20 px-6 py-4"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-base font-medium text-zinc-200 hover:text-[#d4af37] transition-colors duration-300 py-2 border-b border-[#d4af37]/50"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#brief"
                onClick={() => setMobileMenuOpen(false)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="mt-4 w-full py-3 rounded-xl bg-[#d4af37] text-white font-bold text-center text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#d4af37]/30"
              >
                <Sparkles className="w-4 h-4" />
                Launch Brief
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
