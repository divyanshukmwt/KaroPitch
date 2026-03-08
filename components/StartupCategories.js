"use client";

import { useEffect, useRef } from "react";
import { categories } from "@/data/startups";
import { Space_Grotesk } from "next/font/google"

const space = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500","600","700"]
})

export default function StartupCategories() {
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

  return (
    <section ref={sectionRef} className="py-28 bg-cream relative overflow-hidden">
      {/* Decorative circle */}
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full border border-saffron-200/40" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full border border-saffron-200/40" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="reveal text-center mb-16">
          <p className="text-xs font-mono text-saffron-500 uppercase tracking-[0.3em] mb-4">
            Startup Categories
          </p>
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-ink-950 leading-tight">
            Every Kind of{" "}
            <span className="italic text-saffron-500">Builder</span>{" "}
            Welcome
          </h2>
          <p className="mt-4 text-ink-500 text-lg font-light max-w-xl mx-auto">
            From deep tech to D2C, from rural innovation to SaaS — Karo Pitch is open to all.
          </p>
        </div>

        {/* Category grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="reveal card-lift group relative bg-white border border-ink-100 rounded-3xl p-7 cursor-pointer hover:border-saffron-200 overflow-hidden"
            >
              {/* Hover bg effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-saffron-50/0 to-orange-50/0 group-hover:from-saffron-50/80 group-hover:to-orange-50/60 transition-all duration-500 rounded-3xl" />

              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  
                  {/* Icon */}
                  <div className="text-saffron-500 group-hover:scale-110 transition-transform duration-300">
                    <cat.icon size={34} strokeWidth={2} />
                  </div>

                  <span className="font-mono text-xs text-ink-400 bg-ink-50 border border-ink-100 rounded-full px-3 py-1.5">
                    {cat.count}
                  </span>
                </div>

                <h3 className={space.className + " font-bold text-xl text-ink-950 mb-2 group-hover:text-saffron-700 transition-colors"}>
                  {cat.name}
                </h3>

                <p className="text-sm text-ink-500 leading-relaxed font-light">
                  {cat.description}
                </p>

                <div className="mt-5 flex items-center gap-1.5 text-saffron-500 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Apply in this category
                  <span>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}