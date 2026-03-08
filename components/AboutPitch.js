"use client";

import { useEffect, useRef } from "react";
import {
  AlertTriangle,
  Sparkles,
  Target,
  Globe,
  ClipboardList,
  Handshake,
} from "lucide-react";

export default function AboutPitch() {
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
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const problems = [
    "No warm investor introductions",
    "Invisible outside metro cities",
    "No structured pitch process",
    "Limited funding networks",
  ];

  const solutions = [
    { icon: Target, text: "Direct access to 100+ active investors" },
    { icon: Globe, text: "Open to founders from all 28 states" },
    { icon: ClipboardList, text: "Structured pitching format & feedback" },
    { icon: Handshake, text: "KaroStartup-curated deal network" },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-28 bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="reveal text-center mb-20">
          <p className="text-xs font-mono text-saffron-500 uppercase tracking-[0.3em] mb-4">
            The Problem & Solution
          </p>
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-ink-950 leading-tight">
            Why Karo Pitch{" "}
            <span className="italic text-saffron-500">Exists</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Problem side */}
          <div className="reveal">
            <div className="relative">
              <div className="absolute -top-4 -left-4 text-8xl font-display font-black text-saffron-100 select-none leading-none">
                01
              </div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-red-50 border border-red-200 rounded-xl flex items-center justify-center">
                    <AlertTriangle size={20} className="text-red-500" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-ink-950">The Problem</h3>
                </div>
                <p className="text-ink-500 leading-relaxed text-lg mb-8 font-light">
                  Thousands of brilliant founders in{" "}
                  <strong className="text-ink-700 font-semibold">Tier-2 and Tier-3 cities</strong>{" "}
                  are building exceptional startups — yet they remain invisible to investors
                  simply because they lack the right connections.
                </p>
                <ul className="space-y-3">
                  {problems.map((p, i) => (
                    <li key={i} className="flex items-center gap-3 text-ink-500">
                      <span className="w-5 h-5 rounded-full border border-red-300 bg-red-50 flex items-center justify-center flex-shrink-0">
                        <span className="w-1.5 h-1.5 bg-red-400 rounded-full" />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Solution side */}
          <div className="reveal">
            <div className="relative">
              <div className="absolute -top-4 -left-4 text-8xl font-display font-black text-saffron-100 select-none leading-none">
                02
              </div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-green-50 border border-green-200 rounded-xl flex items-center justify-center">
                    <Sparkles size={20} className="text-green-500" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-ink-950">Our Solution</h3>
                </div>
                <p className="text-ink-500 leading-relaxed text-lg mb-8 font-light">
                  Karo Pitch provides a{" "}
                  <strong className="text-ink-700 font-semibold">structured, merit-based platform</strong>{" "}
                  where startups from every corner of India can present their ideas directly
                  to investors — based on potential, not pedigree.
                </p>
                <div className="space-y-4">
                  {solutions.map((s, i) => (
                    <div
                      key={i}
                      className="group flex items-start gap-4 bg-white rounded-xl p-4 border border-ink-100 hover:border-saffron-200 hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex-shrink-0 mt-0.5 text-saffron-500">
                        <s.icon size={20} />
                      </div>
                      <p className="text-ink-700 font-medium text-sm leading-relaxed">{s.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quote pull */}
        <div className="reveal mt-20 relative">
          <div
            className="rounded-3xl p-10 lg:p-14 text-center relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #1a1714 0%, #2d2521 100%)",
            }}
          >
            <div className="absolute top-6 left-10 font-display text-9xl text-saffron-500/20 leading-none select-none">
              "
            </div>
            <div className="absolute bottom-0 right-10 font-display text-9xl text-saffron-500/10 leading-none select-none rotate-180">
              "
            </div>
            <p className="relative font-display italic text-2xl lg:text-3xl text-cream leading-relaxed max-w-3xl mx-auto">
              Every great startup began with an idea and a pitch. We exist to make sure
              geography never stands between a great founder and their first investor.
            </p>
            <p className="relative mt-6 text-saffron-400 font-medium text-sm font-mono tracking-wider">
              — KaroStartup Team
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}