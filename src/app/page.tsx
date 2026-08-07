"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroCanvas from "@/components/HeroCanvas";
import HeroSection from "@/components/HeroSection";
import ServicesHorizontal from "@/components/ServicesHorizontal";
import TalentSpotlight from "@/components/TalentSpotlight";
import InteractiveCaseStudies from "@/components/InteractiveCaseStudies";
import BriefGenerator from "@/components/BriefGenerator";
import LiveEventsSection from "@/components/LiveEventsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Portfolio from "@/app/portfolio";

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    // Transition to landing page after a brief moment
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 500); // 500ms delay for welcome screen
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Welcome Screen */}
      {showWelcome && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          <div className="text-center">
            <h1 className="text-5xl font-extrabold text-white tracking-tight">
              WELCOME TO THE FORGE
            </h1>
          </div>
        </div>
      )}

      {/* Landing Page Content */}
      <main className="min-h-screen bg-[#050507] text-zinc-100 relative overflow-hidden selection:bg-orange-500 selection:text-white">
        {/* Interactive WebGL/Canvas Particle Hero Background */}
        <HeroCanvas />

        {/* Navigation Bar */}
        <Navbar />

        {/* Hero Section */}
        <HeroSection />

        {/* Services Showcase (All 6 Pillars - Horizontal Interactive Section) */}
        <ServicesHorizontal />

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
    </>
  );
}
