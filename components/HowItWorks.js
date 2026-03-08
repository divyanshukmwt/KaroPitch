"use client";

import { useEffect, useRef } from "react";
import { ClipboardList, Search, Mic, Rocket } from "lucide-react";

export default function HowItWorks() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      step: "01",
      icon: ClipboardList,
      title: "Apply with your pitch deck",
      description:
        "Submit your startup details, pitch deck, and a 2-minute founder video. No fancy formatting required — just authentic storytelling.",
      color: "from-saffron-50 to-orange-50",
      border: "border-saffron-200",
      accent: "#ff7d11",
    },
    {
      step: "02",
      icon: Search,
      title: "Get shortlisted by KaroStartup",
      description:
        "Our curation team reviews every application. Top startups are selected based on idea quality, traction, and founder passion.",
      color: "from-amber-50 to-yellow-50",
      border: "border-amber-200",
      accent: "#d4a843",
    },
    {
      step: "03",
      icon: Mic,
      title: "Pitch live to investors",
      description:
        "Selected founders present to a panel of active investors in a structured 10-minute pitch session with live Q&A.",
      color: "from-emerald-50 to-green-50",
      border: "border-emerald-200",
      accent: "#059669",
    },
    {
      step: "04",
      icon: Rocket,
      title: "Raise funding and scale",
      description:
        "Post-pitch, get warm introductions, due diligence support, and ongoing mentorship through the KaroStartup network.",
      color: "from-blue-50 to-indigo-50",
      border: "border-blue-200",
      accent: "#2563eb",
    },
  ];

  return (
    <section id="how-it-works" ref={sectionRef} className="py-28 bg-ink-950 relative overflow-hidden">
      {/* Decorative background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#faf8f4 1px, transparent 1px), linear-gradient(90deg, #faf8f4 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, #ff7d11, transparent)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="reveal text-center mb-20">
          <p className="text-xs font-mono text-saffron-400 uppercase tracking-[0.3em] mb-4">
            The Process
          </p>
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-cream leading-tight">
            Four Steps to{" "}
            <span className="italic gradient-text">Your Investor</span>
          </h2>
          <p className="mt-4 text-ink-400 text-lg font-light max-w-xl mx-auto">
            A clear, transparent process designed to give every founder a fair shot at funding.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`reveal overflow-hidden card-lift group relative bg-gradient-to-br ${step.color} border ${step.border} rounded-3xl p-7 cursor-default`}
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute -right-3 top-1/3 w-6 h-px z-10"
                  style={{ background: `linear-gradient(90deg, ${step.accent}, transparent)` }}
                />
              )}

              {/* Step number */}
              <div className="font-mono text-5xl font-black opacity-10 text-ink-950 leading-none mb-4 select-none">
                {step.step}
              </div>

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 shadow-md"
                style={{ background: `${step.accent}18`, border: `1px solid ${step.accent}30` }}
              >
                <step.icon size={24} color={step.accent} />
              </div>

              {/* Content */}
              <h3 className="font-display font-bold text-xl text-ink-950 mb-3 leading-snug">
                {step.title}
              </h3>
              <p className="text-sm text-ink-600 leading-relaxed font-light">
                {step.description}
              </p>

              {/* Hover accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, ${step.accent}, transparent)` }}
              />
            </div>
          ))}
        </div>

        {/* Apply nudge */}
        <div className="reveal text-center mt-14">
          <a
            href="#apply"
            className="btn-press inline-flex items-center gap-2 bg-saffron-500 text-white font-semibold px-8 py-4 rounded-2xl shadow-xl shadow-saffron-500/30 hover:bg-saffron-600 transition-all duration-300"
          >
            Start Your Application
            <span>→</span>
          </a>
          <p className="mt-3 text-ink-500 text-sm">Free to apply. No middlemen.</p>
        </div>
      </div>
    </section>
  );
}