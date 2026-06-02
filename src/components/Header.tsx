"use client";

import React, { useState, useEffect } from "react";
import { Moon, Sun, Menu, X, Terminal } from "lucide-react";

export default function Header() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Determine theme from document element class
    const isLight = document.documentElement.classList.contains("light");
    setTheme(isLight ? "light" : "dark");

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      document.documentElement.classList.add("light");
      localStorage.setItem("portfolio-theme", "light");
      setTheme("light");
    } else {
      document.documentElement.classList.remove("light");
      localStorage.setItem("portfolio-theme", "dark");
      setTheme("dark");
    }
  };

  const navLinks = [
    { label: "Story", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Value", href: "#why-hire-me" },
    { label: "Case Studies", href: "#projects" },
    { label: "Lab", href: "#data-science-lab" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-surface-border/40 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl w-full mx-auto px-4 flex justify-between items-center">
        
        {/* Brand Identity */}
        <a href="#hero" className="flex items-center space-x-2 font-mono font-bold text-base md:text-lg">
          <Terminal className="w-5 h-5 text-primary" />
          <span className="text-gradient">Bheemalingappa</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-semibold text-muted hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Quick actions controls (Theme + Mobile Menu toggles) */}
        <div className="flex items-center space-x-4">
          
          {/* Theme switch button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-surface/50 border border-surface-border/40 text-muted hover:text-foreground transition-all duration-200"
            title="Toggle Visual Mode"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Contact me CTA button */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white text-xs font-semibold px-4 py-2 rounded-xl shadow-glow-primary hover:shadow-lg transition-all duration-300"
          >
            Hire Me
          </a>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-surface/50 border border-surface-border/40 text-muted hover:text-foreground"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>

        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-[100%] inset-x-0 bg-background/95 backdrop-blur-lg border-b border-surface-border/60 py-6 px-4 space-y-4">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold text-muted hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white text-xs font-semibold py-3 rounded-xl transition-all"
          >
            Hire Me
          </a>
        </div>
      )}

    </header>
  );
}
