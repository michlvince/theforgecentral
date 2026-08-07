"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import HeroCanvas from "@/components/HeroCanvas";
import HeroSection from "@/components/HeroSection";
import ServicesMatrix from "@/components/ServicesMatrix";
import TalentSpotlight from "@/components/TalentSpotlight";
import InteractiveCaseStudies from "@/components/InteractiveCaseStudies";
import BriefGenerator from "@/components/BriefGenerator";
import LiveEventsSection from "@/components/LiveEventsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Portfolio from "@/app/portfolio";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050507] text-zinc-100 relative overflow-hidden selection:bg-orange-500 selection:text-white">
      {/* Interactive WebGL/Canvas Particle Hero Background */}
      <HeroCanvas />

      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Services Showcase (All 5 Pillars with Simulators) */}
      <ServicesMatrix />

      {/* Talent Accelerator Spotlight */}
      <TalentSpotlight />

      {/* Featured Global Narrative Campaigns */}
      <InteractiveCaseStudies />

       {/* Live Events & Experiences */}
       <LiveEventsSection />

       {/* Portfolio Gallery */}
       <Portfolio />

       {/* Interactive Campaign Brief Generator */}
      <BriefGenerator />

      {/* Global Directory & Contact Section */}
      <ContactSection />

      {/* Agency Footer */}
      <Footer />
    </main>
  );
}
