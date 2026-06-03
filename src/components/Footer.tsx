"use client";

import { Terminal, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-surface-border/40 bg-surface/5 py-12 md:py-16 px-4">
      <div className="absolute inset-0 grid-dots opacity-10 pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Left Side branding */}
        <div className="flex flex-col space-y-3 text-center md:text-left max-w-sm">
          <a href="#hero" className="inline-flex items-center justify-center md:justify-start space-x-2 font-mono font-bold text-base text-foreground">
            <Terminal className="w-5 h-5 text-primary" />
            <span className="text-gradient">Bheemalingappa</span>
          </a>
          <p className="text-xs text-muted leading-relaxed">
            Transforming raw data into intelligent products through predictive analytics, NLP models, and machine learning software solutions.
          </p>
        </div>

        {/* Right Side Social Connects */}
        <div className="flex flex-col items-center md:items-end space-y-4">
          <div className="flex space-x-4">
            <a
              href="https://github.com/Bheemalingappa"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 bg-surface hover:bg-surface-secondary border border-surface-border text-muted hover:text-foreground rounded-xl transition-all duration-300"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/bheema-boler-a7af3b1b6"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 bg-surface hover:bg-surface-secondary border border-surface-border text-muted hover:text-foreground rounded-xl transition-all duration-300"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4 text-primary" />
            </a>
            <a
              href="mailto:baimabhima2000@gmail.com"
              className="p-2.5 bg-surface hover:bg-surface-secondary border border-surface-border text-muted hover:text-foreground rounded-xl transition-all duration-300"
              title="Email"
            >
              <Mail className="w-4 h-4 text-secondary" />
            </a>
          </div>

          <div className="text-[10px] font-mono text-muted text-center md:text-right">
            <div>© {currentYear} Bheemalingappa. All rights reserved.</div>
            <div className="mt-0.5 opacity-80">Built with Next.js 15 & React 19.</div>
          </div>
        </div>

      </div>
    </footer>
  );
}
