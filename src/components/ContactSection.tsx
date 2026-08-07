"use client";

import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Globe, Clock, Send, CheckCircle } from "lucide-react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", topic: "General Narrative Inquiry", message: "" });

  const hubs = [
    { city: "London", country: "UK / Europe", timeZone: "Europe/London" },
    { city: "New York", country: "USA / Americas", timeZone: "America/New_York" },
    { city: "Tokyo", country: "Japan / Asia-Pacific", timeZone: "Asia/Tokyo" },
    { city: "Lagos", country: "Nigeria / W. Africa", timeZone: "Africa/Lagos" },
    { city: "Paris", country: "France / Couture", timeZone: "Europe/Paris" },
  ];

  const [times, setTimes] = useState<Record<string, string>>({});

  useEffect(() => {
    const updateClocks = () => {
      const newTimes: Record<string, string> = {};
      hubs.forEach((hub) => {
        try {
          const formatted = new Intl.DateTimeFormat("en-US", {
            timeZone: hub.timeZone,
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          }).format(new Date());
          newTimes[hub.city] = formatted;
        } catch {
          newTimes[hub.city] = "12:00 PM";
        }
      });
      setTimes(newTimes);
    };

    updateClocks();
    const interval = setInterval(updateClocks, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Info Column */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <span className="text-orange-500 font-mono text-xs tracking-widest uppercase px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20">
              GLOBAL CREATIVE DIRECTORY
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
              LET'S FORGE <br />
              <span className="forge-text-gradient">YOUR NARRATIVE</span>
            </h2>
            <p className="text-zinc-400 mt-4 text-sm sm:text-base">
              Ready to elevate your brand, visual storytelling, talent positioning, or live experience? Connect with our global partner network.
            </p>
          </div>

          {/* Global Timezones Widget */}
          <div className="bg-zinc-950 p-6 rounded-2xl border border-zinc-800 space-y-4">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
              <span className="text-xs font-mono text-orange-400 uppercase tracking-wider flex items-center gap-2">
                <Globe className="w-4 h-4" /> Global Hub Timezones
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            </div>

            <div className="space-y-2.5">
              {hubs.map((hub) => (
                <div key={hub.city} className="flex justify-between items-center text-xs font-mono">
                  <div>
                    <span className="text-white font-bold">{hub.city}</span>
                    <span className="text-zinc-500 text-[10px] ml-2">{hub.country}</span>
                  </div>
                  <span className="text-orange-400 font-bold bg-zinc-900 px-2 py-1 rounded border border-zinc-800">
                    {times[hub.city] || "--:--"}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3 text-xs font-mono text-zinc-400">
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-orange-500" />
              <span>narrative@theforgecentral.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-orange-500" />
              <span>+44 (0) 20 7946 0912</span>
            </div>
          </div>
        </div>

        {/* Right Form Column */}
        <div className="lg:col-span-7">
          <div className="glass-card rounded-3xl p-8 border border-zinc-800 shadow-2xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
                <h3 className="text-2xl font-bold text-white">Inquiry Received</h3>
                <p className="text-zinc-300 text-sm max-w-md mx-auto">
                  Our agency representative will connect with you shorty to begin crafting your creative direction.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold text-white">Direct Inquiry Form</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Full Name *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm focus:border-orange-500 focus:outline-none"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm focus:border-orange-500 focus:outline-none"
                  />
                </div>

                <select
                  value={formData.topic}
                  onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm focus:border-orange-500 focus:outline-none"
                >
                  <option>Creative Direction & Design</option>
                  <option>Visual Storytelling & Cinema</option>
                  <option>Talent Accelerator & Branding</option>
                  <option>Marketing and PR Strategy</option>
                  <option>Events and Live Experience</option>
                </select>

                <textarea
                  rows={4}
                  required
                  placeholder="Tell us about your brand or vision..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm focus:border-orange-500 focus:outline-none"
                />

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-orange-600/30 flex items-center justify-center gap-2 hover:scale-[1.01] transition-transform"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
