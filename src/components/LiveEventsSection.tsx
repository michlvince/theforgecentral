"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Radio, Calendar, MapPin, Ticket, Clock, Check } from "lucide-react";

export default function LiveEventsSection() {
  const [reservedEventId, setReservedEventId] = useState<string | null>(null);

  const events = [
    {
      id: "ev-1",
      name: "THE FORGE GLOBAL GALA & RUNWAY 2026",
      date: "OCTOBER 14, 2026",
      location: "PALAIS DE TOKYO, PARIS",
      type: "Haute Couture & Live Orchestra",
      status: "VIP ACCESS ONLY",
      attendees: "1,200 Invited Guests",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "ev-2",
      name: "AFRO-FUTURISM SOUNDSTAGE ACTIVATION",
      date: "DECEMBER 04, 2026",
      location: "EKO HOTEL ARENA, LAGOS",
      type: "Live Music & Spatial Lighting",
      status: "PASSES OPEN",
      attendees: "8,500 Capacity",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "ev-3",
      name: "OBSIDIAN 3D DIGITAL INSTALLATION",
      date: "JANUARY 22, 2027",
      location: "SHINJUKU MEDIA HUB, TOKYO",
      type: "Immersive VR & Sonic Experience",
      status: "REGISTRATION OPEN",
      attendees: "3,000 Daily Capacity",
      image: "https://images.unsplash.com/photo-1508997449629-303059a039c0?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <section id="events" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
        <span className="text-emerald-400 font-mono text-xs tracking-widest uppercase px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
          REAL-TIME BRAND EXPERIENCES
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
          EVENTS & <span className="purple-text-gradient">LIVE EXPERIENCES</span>
        </h2>
        <p className="text-zinc-400 mt-3 text-base">
          We plan and execute live experiences that bring brand & talent identities to life in real time.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {events.map((event) => (
          <div
            key={event.id}
            className="glass-card glass-card-hover rounded-3xl overflow-hidden border border-white/5 flex flex-col justify-between"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
              <img
                src={event.image}
                alt={event.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-black/40" />

              <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-mono text-[10px]">
                {event.status}
              </span>
            </div>

            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{event.date}</span>
                </div>

                <h3 className="text-xl font-extrabold text-white tracking-tight">{event.name}</h3>

                <div className="space-y-1 text-xs text-zinc-400 font-mono">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Radio className="w-3.5 h-3.5 text-zinc-500" />
                    <span>{event.type}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
                <span className="text-[11px] font-mono text-zinc-500">{event.attendees}</span>

                <button
                  onClick={() => setReservedEventId(event.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-1.5 ${
                    reservedEventId === event.id
                      ? "bg-emerald-500 text-black shadow-lg shadow-emerald-500/30"
                      : "bg-zinc-900 border border-zinc-800 text-zinc-200 hover:text-white hover:border-zinc-700"
                  }`}
                >
                  {reservedEventId === event.id ? (
                    <>
                      <Check className="w-3.5 h-3.5" /> Reserved
                    </>
                  ) : (
                    <>
                      <Ticket className="w-3.5 h-3.5 text-emerald-400" /> Reserve Pass
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
