"use client";

import { useState, useEffect } from "react";
import { Space_Grotesk } from "next/font/google"

const space = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500","600","700"]
})


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Startups", href: "#startups" },
    { label: "Investors", href: "#investors" },
    { label: "About", href: "#about" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-xl border-b border-ink-200/40 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-18 py-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center overflow-hidden">
            <img
              src="/Logo.png"
              alt="KaroPitch Logo"
              className="w-6 h-6 object-contain"
            />
          </div>
          <span className="font-display  font-bold text-xl text-ink-950">
            Karo<span className="text-saffron-500">Pitch</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm font-medium text-ink-600 hover:text-ink-950 transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-saffron-500 group-hover:w-full transition-all duration-300 rounded-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#apply"
            className="btn-press bg-ink-950 text-cream text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-ink-900 transition-colors shadow-lg shadow-ink-950/20"
          >
            Apply to Pitch
            <span className="ml-1.5 text-saffron-400">→</span>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span className={`w-6 h-0.5 bg-ink-950 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-6 h-0.5 bg-ink-950 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`w-6 h-0.5 bg-ink-950 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-cream/95 backdrop-blur-xl border-t border-ink-200/40 transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col px-6 gap-4">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-base font-medium text-ink-700 hover:text-saffron-500 transition-colors block py-1"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#apply"
              className="btn-press block text-center bg-ink-950 text-cream text-sm font-semibold px-5 py-3 rounded-xl"
            >
              Apply to Pitch →
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
