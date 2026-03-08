"use client";

import { useEffect, useRef } from "react";
import { investors } from "@/data/startups";

export default function InvestorSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="investors"
      ref={sectionRef}
      className="py-28 relative overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #1a1714 0%, #2d1f0f 50%, #1a1714 100%)",
      }}
    >
      {/* Decorative elements */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #d4a843, transparent)" }}
      />
      <div
        className="absolute bottom-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #ff7d11, transparent)" }}
      />
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "radial-gradient(circle at 50% 50%, #d4a843 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="reveal text-center mb-16">
          <p className="text-xs font-mono text-gold uppercase tracking-[0.3em] mb-4">
            The Network
          </p>

          <h2 className="font-display font-bold text-4xl lg:text-5xl text-cream leading-tight">
            Meet Investors Looking for{" "}
            <span className="italic text-gold">the Next Big Startup</span>
          </h2>

          <p className="mt-4 text-ink-400 text-lg font-light max-w-xl mx-auto">
            Our curated network of active investors is here to discover and back
            India's most ambitious founders.
          </p>
        </div>

        {/* Investor grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {investors.map((inv, i) => (
            <div
              key={i}
              className="reveal card-lift group relative rounded-3xl p-6 border cursor-default overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${inv.color}15 0%, transparent 100%)`,
                borderColor: `${inv.color}30`,
              }}
            >
              <div className="absolute inset-0 rounded-3xl bg-ink-900/60 backdrop-blur-sm" />

              <div className="relative flex items-start gap-4">
                {/* Avatar */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${inv.color} 0%, ${inv.color}80 100%)`,
                  }}
                >
                  <img
                    src={inv.avatar}
                    alt={inv.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-cream text-base leading-tight">
                    {inv.name}
                  </h3>

                  <p className="text-sm text-ink-400 mt-0.5">{inv.firm}</p>

                  <div className="flex items-center gap-2 mt-3 flex-wrap">
                    <span
                      className="text-xs font-medium px-2.5 py-1 rounded-full border"
                      style={{
                        color: inv.color,
                        borderColor: `${inv.color}40`,
                        background: `${inv.color}15`,
                      }}
                    >
                      {inv.focus}
                    </span>

                    <span className="text-xs text-ink-500 font-mono">
                      {inv.deals}
                    </span>
                  </div>
                </div>
              </div>

              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ boxShadow: `inset 0 0 60px ${inv.color}10` }}
              />
            </div>
          ))}
        </div>

        {/* Partner CTA */}
        <div className="reveal text-center">
          <div className="inline-flex items-center gap-4 bg-ink-900/80 border border-ink-700 rounded-2xl px-8 py-5">
            <div className="text-left">
              <p className="text-cream font-semibold">Are you an investor?</p>
              <p className="text-ink-400 text-sm">
                Join our exclusive deal-flow network
              </p>
            </div>

            <a
              href="#"
              className="btn-press flex-shrink-0 bg-gold text-ink-950 font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-yellow-400 transition-colors shadow-lg"
            >
              Partner With Us →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}