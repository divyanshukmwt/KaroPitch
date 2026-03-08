"use client";

import { useEffect, useRef } from "react";
import { startups } from "@/data/startups";
import { MapPin } from "lucide-react";
import { Space_Grotesk } from "next/font/google"

const space = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500","600","700"]
})

export default function FeaturedStartups() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 80);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const stageColors = {
    "Pre-Seed": { bg: "#fef3c7", text: "#92400e" },
    "Seed": { bg: "#d1fae5", text: "#065f46" },
    "Pre-Series A": { bg: "#dbeafe", text: "#1e40af" },
    "Series A": { bg: "#ede9fe", text: "#6d28d9" },
  };

  return (
    <section id="startups" ref={sectionRef} className="py-28 bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="reveal flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <p className="text-xs font-mono text-saffron-500 uppercase tracking-[0.3em] mb-4">
              Featured Startups
            </p>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-ink-950 leading-tight">
              Meet India's{" "}
              <span className="italic text-saffron-500">Next Unicorns</span>
            </h2>
          </div>
          <a
            href="#"
            className="btn-press self-start lg:self-auto inline-flex items-center gap-2 border border-ink-200 text-ink-700 font-medium text-sm px-5 py-2.5 rounded-xl hover:bg-ink-50 transition-colors"
          >
            View all startups →
          </a>
        </div>

        {/* Startup cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {startups.map((startup, i) => (
            <div
              key={startup.id}
              className="reveal card-lift group bg-white rounded-3xl border border-ink-100 overflow-hidden cursor-pointer hover:border-ink-200"
            >
              {/* Card header with color accent */}
              <div
                className="h-28 relative overflow-hidden flex items-center px-7"
                style={{
                  background: `linear-gradient(135deg, ${startup.color}20 0%, ${startup.accent}20 100%)`,
                }}
              >
                <div className="text-saffron-500">
                  <startup.icon size={40} strokeWidth={2} />
                </div>

                <div className="absolute top-4 right-4">
                  <span
                    className="text-xs font-semibold px-3 py-1.5 rounded-full"
                    style={{
                      background: stageColors[startup.stage]?.bg || "#f3f4f6",
                      color: stageColors[startup.stage]?.text || "#374151",
                    }}
                  >
                    {startup.stage}
                  </span>
                </div>

                {/* Pattern overlay */}
                <div
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage: `radial-gradient(circle at 80% 50%, ${startup.color} 0%, transparent 60%)`,
                  }}
                />
              </div>

              <div className="p-7">
                {/* Category pill */}
                <span className="inline-block text-xs font-mono text-ink-400 bg-ink-50 rounded-full px-3 py-1 mb-3 border border-ink-100">
                  {startup.category}
                </span>

                <h3 className={space.className + " font-bold text-xl text-ink-950 mb-1"}>
                  {startup.name}
                </h3>

                <p className="text-sm text-ink-400 italic mb-3">{startup.tagline}</p>

                <p className="text-sm text-ink-600 leading-relaxed font-light">
                  {startup.description}
                </p>

                {/* Meta info */}
                <div className="mt-5 pt-5 border-t border-ink-100 flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs text-ink-400">

                    <span className="flex items-center gap-1">
                      <MapPin size={14} className="text-ink-400" />
                      {startup.location}
                    </span>

                    <span>·</span>

                    <span>Est. {startup.founded}</span>

                  </div>

                  <div className="text-right">
                    <p className="text-xs text-ink-400 font-mono">Raising</p>
                    <p className="font-bold text-sm text-ink-950">{startup.raised}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}