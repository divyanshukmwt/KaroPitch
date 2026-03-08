"use client";

import { useEffect, useRef } from "react";
import { Space_Grotesk } from "next/font/google"

const space = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"]
})

export default function AboutKaroStartup() {
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
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const numbers = [
    { value: "10,000+", label: "Startup Stories Published" },
    { value: "1M+", label: "Monthly Readers" },
    { value: "28", label: "States Represented" },
    { value: "5+", label: "Years of Building" },
  ];

  return (
    <section ref={sectionRef} className="py-28 bg-ink-950 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#faf8f4 1px, transparent 1px), linear-gradient(90deg, #faf8f4 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-5"
        style={{ background: "radial-gradient(circle, #ff7d11 0%, transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="reveal">
              <p className="text-xs font-mono text-saffron-400 uppercase tracking-[0.3em] mb-4">
                Our Parent Platform
              </p>
              <h2 className={space.className + " text-4xl lg:text-5xl text-cream leading-tight mb-6"}>
                Powered by{" "}
                <span className="text-saffron-400">KaroStartup</span>
              </h2>
              <p className="text-ink-400 text-lg leading-relaxed font-light mb-6">
                KaroStartup is India's largest startup storytelling platform, dedicated to
                documenting and celebrating the journeys of founders from every corner of Bharat.
              </p>
              <p className="text-ink-500 leading-relaxed font-light">
                From garages in Guwahati to co-working spaces in Coimbatore — we've told their stories.
                Now with Karo Pitch, we're helping them write their next chapter: getting funded.
              </p>
            </div>

            <div className="reveal mt-8 flex items-center gap-4">
              <a
                href="#"
                className="btn-press inline-flex items-center gap-2 bg-saffron-500 text-white font-semibold text-sm px-5 py-3 rounded-xl hover:bg-saffron-600 transition-colors shadow-lg shadow-saffron-500/30"
              >
                Visit KaroStartup →
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm text-ink-400 hover:text-cream transition-colors font-medium"
              >
                Read founder stories ↗
              </a>
            </div>
          </div>

          {/* Right: Number grid */}
          <div className="reveal grid grid-cols-2 gap-4">
            {numbers.map((n, i) => (
              <div
                key={i}
                className="group bg-ink-900 border border-ink-800 hover:border-saffron-500/30 rounded-2xl p-6 transition-all duration-300"
              >
                <div className={space.className + " font-black text-3xl lg:text-4xl text-cream mb-1 group-hover:text-saffron-400 transition-colors"}>
                  {n.value}
                </div>
                <div className="text-sm text-ink-500">{n.label}</div>
              </div>
            ))}

            {/* Quote card spanning 2 cols */}
            <div className="col-span-2 bg-gradient-to-br from-saffron-500/10 to-orange-500/5 border border-saffron-500/20 rounded-2xl p-6">
              <p className="text-ink-300 text-sm leading-relaxed italic font-light">
                "We've spent 5 years telling stories. Now it's time to fund them. Karo Pitch
                is our commitment to the Indian founder — wherever you are, your story matters
                and so does your startup."
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-8 h-8 bg-saffron-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  K
                </div>
                <p className="text-saffron-400 text-sm font-medium font-mono">KaroStartup Founders</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
