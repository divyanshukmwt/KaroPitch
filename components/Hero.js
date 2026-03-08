"use client";

import { useEffect, useRef } from "react";
import { Space_Grotesk } from "next/font/google"

const space = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500","600","700"]
})

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const reveals = heroRef.current?.querySelectorAll(".reveal");
    reveals?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #faf8f4 0%, #fff3e8 40%, #faf8f4 100%)",
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large saffron circle top-right */}
        <div
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #ff7d11 0%, transparent 70%)",
          }}
        />
        {/* Gold accent bottom-left */}
        <div
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full opacity-8"
          style={{
            background: "radial-gradient(circle, #d4a843 0%, transparent 70%)",
          }}
        />
        {/* Floating orbs */}
        <div className="animate-float absolute top-1/4 right-1/4 w-4 h-4 bg-saffron-400/40 rounded-full" />
        <div className="animate-float-slow absolute top-1/3 right-1/3 w-2 h-2 bg-gold/60 rounded-full" />
        <div className="animate-float absolute bottom-1/3 left-1/4 w-3 h-3 bg-saffron-300/50 rounded-full" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#1a1714 1px, transparent 1px), linear-gradient(90deg, #1a1714 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="reveal inline-flex items-center gap-2 bg-saffron-50 border border-saffron-200 text-saffron-700 text-sm font-medium px-4 py-2 rounded-full">
              <span className="w-1.5 h-1.5 bg-saffron-500 rounded-full animate-pulse" />
              Now accepting applications · Cohort 2025
            </div>

            {/* Main headline */}
            <div className="reveal">
              <h1 className="font-display text-5xl lg:text-6xl xl:text-7xl leading-[1.05] font-bold text-ink-950">
                Pitch Your Startup to{" "}
                <em className="not-italic relative">
                  <span className="gradient-text">India's Top</span>
                </em>{" "}
                Investors
              </h1>
            </div>

            {/* Subtext */}
            <p className="reveal text-lg lg:text-xl text-ink-500 leading-relaxed max-w-lg font-light">
              Karo Pitch helps founders from across India present their startups
              to investors and unlock funding opportunities — no warm introductions
              needed.
            </p>

            {/* CTA Buttons */}
            <div className="reveal flex flex-col sm:flex-row gap-4">
              <a
                href="#apply"
                className="btn-press group inline-flex items-center justify-center gap-2 bg-saffron-500 text-white font-semibold text-base px-7 py-4 rounded-2xl shadow-xl shadow-saffron-500/30 hover:bg-saffron-600 hover:shadow-saffron-500/40 transition-all duration-300"
              >
                Apply to Pitch
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a
                href="#startups"
                className="btn-press group inline-flex items-center justify-center gap-2 bg-white text-ink-800 font-semibold text-base px-7 py-4 rounded-2xl border border-ink-200 hover:border-ink-300 hover:bg-ink-50 transition-all duration-300 shadow-sm"
              >
                Explore Startups
                <span className="text-ink-400 group-hover:translate-x-1 transition-transform">↗</span>
              </a>
            </div>

            {/* Social trust */}
            <div className="reveal flex items-center gap-4 pt-2">
              <div className="flex -space-x-2">
                {[
                  "https://i.pravatar.cc/150?img=12",
                  "https://i.pravatar.cc/150?img=32",
                  "https://i.pravatar.cc/150?img=15",
                  "https://i.pravatar.cc/150?img=44",
                  "https://i.pravatar.cc/150?img=68",
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="Founder"
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                    style={{ zIndex: 5 - i }}
                  />
                ))}
              </div>
              <p className="text-sm text-ink-500">
                <span className="font-semibold text-ink-800">2,400+</span> founders applied this year
              </p>
            </div>
          </div>

          {/* Right: Visual illustration */}
          <div className="reveal relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              {/* Main pitch card */}
              <div className="bg-white rounded-3xl shadow-2xl shadow-ink-950/10 p-8 border border-ink-100/80">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <p className="text-xs font-mono text-ink-400 uppercase tracking-widest mb-1">Live Pitch Session</p>
                    <h3 className="font-display font-bold text-2xl text-ink-950">EcoCart</h3>
                    <p className="text-sm text-ink-500 mt-1">Sustainable Packaging · Seed Stage</p>
                  </div>
                  <div className="flex items-center gap-1.5 bg-green-50 border border-green-200 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    LIVE
                  </div>
                </div>

                {/* Fake pitch metrics */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[
                    { label: "Ask", value: "₹1.5 Cr" },
                    { label: "Traction", value: "₹42L MRR" },
                    { label: "Growth", value: "+340%" },
                  ].map((m) => (
                    <div key={m.label} className="bg-ink-50 rounded-xl p-3 text-center">
                      <p className={`${space.className} text-ink-950 text-sm`}>{m.value}</p>
                      <p className="text-xs text-ink-400 mt-0.5">{m.label}</p>
                    </div>
                  ))}
                </div>

                {/* Investor avatars watching */}
                <div className="flex items-center justify-between bg-saffron-50 rounded-xl p-3.5 border border-saffron-100">
                  <div className="flex -space-x-2">
                    {[
                      "https://i.pravatar.cc/150?img=23",
                      "https://i.pravatar.cc/150?img=54",
                      "https://i.pravatar.cc/150?img=11",
                    ].map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt="Investor"
                        className="w-7 h-7 rounded-full border-2 border-white object-cover"
                      />
                    ))}
                  </div>
                  <p className="text-xs text-saffron-700 font-medium">3 investors watching</p>
                </div>
              </div>

              {/* Floating badges */}
              <div className="animate-float absolute -top-6 -left-6 bg-white rounded-2xl shadow-lg shadow-ink-950/8 px-4 py-3 border border-ink-100">
                <p className="text-xs text-ink-400 font-mono">Funding Raised</p>
                <p className={`${space.className} font-bold text-lg text-ink-950`}>₹12.4 Cr</p>
                <p className="text-xs text-green-600 font-medium mt-0.5">↑ this cohort</p>
              </div>

              <div className="animate-float-slow absolute -bottom-4 -right-4 bg-ink-950 rounded-2xl shadow-lg px-4 py-3">
                <p className="text-xs text-ink-400 font-mono">Active Investors</p>
                <p className={`${space.className} font-bold text-lg text-cream`}>100+</p>
                <p className="text-xs text-saffron-400 font-medium mt-0.5">across India</p>
              </div>

              {/* Decorative ring */}
              <div className="absolute -inset-6 rounded-3xl border border-saffron-200/40 -z-10" />
              <div className="absolute -inset-12 rounded-3xl border border-saffron-100/30 -z-10" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink-300">
        <p className="text-xs font-mono tracking-widest uppercase">Scroll</p>
        <div className="w-px h-8 bg-gradient-to-b from-ink-300 to-transparent" />
      </div>
    </section>
  );
}
