"use client";

import { useEffect, useRef } from "react";

export default function CTA() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 120);
            });
          }
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="apply"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #ff7d11 0%, #e85d04 30%, #d4a843 60%, #ff7d11 100%)",
        backgroundSize: "300% 300%",
        animation: "gradientShift 8s ease infinite",
      }}
    >
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      {/* Overlays */}
      <div className="absolute inset-0 bg-ink-950/10" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Floating shapes */}
      <div className="absolute top-8 left-8 w-32 h-32 rounded-full border-2 border-white/20 animate-spin-slow" />
      <div className="absolute bottom-8 right-8 w-20 h-20 rounded-full border-2 border-white/15 animate-spin-slow" style={{ animationDirection: "reverse" }} />
      <div className="absolute top-1/2 left-12 w-3 h-3 bg-white/30 rounded-full animate-float" />
      <div className="absolute top-1/3 right-16 w-2 h-2 bg-white/40 rounded-full animate-float-slow" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div className="reveal">
          <p className="text-white/70 font-mono text-xs uppercase tracking-[0.3em] mb-6">
            The time is now
          </p>
          <h2 className="font-display font-black text-5xl lg:text-7xl text-white leading-[1.02] mb-6">
            Ready to Pitch
            <br />
            <span className="italic">Your Startup?</span>
          </h2>
          <p className="text-white/80 text-xl font-light max-w-xl mx-auto mb-10 leading-relaxed">
            Join thousands of founders who've taken the first step toward funding. 
            Applications are open — and it's completely free.
          </p>
        </div>

        <div className="reveal flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#"
            className="btn-press group inline-flex items-center justify-center gap-2 bg-white text-ink-950 font-bold text-base px-8 py-4 rounded-2xl hover:bg-cream shadow-2xl shadow-ink-950/20 transition-all duration-300"
          >
            Apply Now
            <span className="group-hover:translate-x-1 transition-transform text-saffron-500">→</span>
          </a>
          <a
            href="#"
            className="btn-press inline-flex items-center justify-center gap-2 bg-white/15 backdrop-blur-sm text-white font-semibold text-base px-8 py-4 rounded-2xl border border-white/30 hover:bg-white/25 transition-all duration-300"
          >
            Partner With Us ↗
          </a>
        </div>

        <div className="reveal mt-10 flex items-center justify-center gap-6 text-white/60 text-sm">
          <span className="flex items-center gap-1.5">
            <span>✓</span> Free to apply
          </span>
          <span className="w-px h-4 bg-white/20" />
          <span className="flex items-center gap-1.5">
            <span>✓</span> No middlemen
          </span>
          <span className="w-px h-4 bg-white/20" />
          <span className="flex items-center gap-1.5">
            <span>✓</span> 100+ investors
          </span>
        </div>
      </div>
    </section>
  );
}
