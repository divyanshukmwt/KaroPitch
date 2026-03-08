"use client";

import {
  BookOpen, Users, Handshake, TrendingUp, Trophy,
  Rocket,
  Globe,
  Lightbulb,
  Target,
} from "lucide-react";
import { Space_Grotesk } from "next/font/google"

const space = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500","600","700"]
})
export default function SocialProof() {

  const stats = [
    { value: "10,000+", label: "Startup Stories", icon: BookOpen },
    { value: "1M+", label: "Founder Community", icon: Users },
    { value: "100+", label: "Investor Connections", icon: Handshake },
    { value: "₹50 Cr+", label: "Funding Facilitated", icon: TrendingUp },
  ];

  const marqueeItems = [
    { text: "Powered by KaroStartup", icon: null },
    { text: "India's #1 Founder Platform", icon: Trophy },
    { text: "Featured in YourStory", icon: null },
    { text: "10,000+ Startup Stories", icon: Rocket },
    { text: "Featured in Economic Times", icon: null },
    { text: "Tier-2 & Tier-3 Champions", icon: Globe },
    { text: "Featured in Inc42", icon: null },
    { text: "1 Million+ Founders", icon: Lightbulb },
    { text: "Featured in Entrepreneur India", icon: null },
    { text: "100+ Investor Network", icon: Target },
  ];

  return (
    <section className="py-20 bg-ink-950 relative overflow-hidden">
      {/* Subtle texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, #ff7d11 0%, transparent 50%), radial-gradient(circle at 80% 50%, #d4a843 0%, transparent 50%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section label */}
        <div className="text-center mb-14">
          <p className="text-xs font-mono text-ink-400 uppercase tracking-[0.3em] mb-4">
            Trusted by India's builder community
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-ink-600" />
            <div className="w-1.5 h-1.5 bg-saffron-500 rounded-full" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-ink-600" />
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="group relative bg-ink-900 border border-ink-800 rounded-2xl p-6 text-center hover:border-saffron-500/40 transition-all duration-300 hover:bg-ink-900/80"
            >
              <div className="flex justify-center mb-3 text-saffron-400">
                <stat.icon size={32} strokeWidth={2} />
              </div>
              <div className={`${space.className} font-heading font-semibold text-4xl lg:text-5xl tracking-tight bg-gradient-to-r from-white to-saffron-300 bg-clip-text text-transparent mb-1`}>
                {stat.value}
              </div>
              <div className="text-sm text-ink-400">{stat.label}</div>
              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-saffron-500/0 group-hover:bg-saffron-500/5 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Marquee ticker */}
      <div className="border-t border-b border-ink-800 py-4 overflow-hidden">
        <div className="marquee-inner">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-2">

              {item.icon && (
                <item.icon
                  size={16}
                  className="text-saffron-400"
                />
              )}

              <span className="text-sm font-medium text-ink-300 px-4 whitespace-nowrap">
                {item.text}
              </span>
              {/* <span className="text-saffron-600">·</span> */}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
