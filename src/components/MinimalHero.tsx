"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronRight, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

export default function MinimalHero() {
  const stats = [
    { value: "2+", label: "Professional Trainings" },
    { value: "10+", label: "Technologies Mastered" },
    { value: "5+", label: "End-to-End Projects" },
    { value: "1000+", label: "Hours of ML Learning" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex flex-col justify-center items-center px-4 overflow-hidden pt-24"
    >
      {/* Subtle background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl glow-blur opacity-50 pointer-events-none" />
      <div className="absolute inset-0 grid-dots opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-4xl w-full mx-auto text-center space-y-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 bg-surface/50 border border-surface-border/40 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md"
        >
          <Sparkles className="w-3.5 h-3.5 text-secondary animate-pulse" />
          <span className="text-muted">Data Scientist | ML Engineer | AI Developer</span>
        </motion.div>

        <div className="space-y-4">
          <motion.h4
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm md:text-base font-mono text-primary font-bold tracking-widest uppercase"
          >
            Hello, I am
          </motion.h4>
          
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight"
          >
            <span className="text-gradient">Bheemalingappa</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-xl md:text-2xl font-bold font-mono tracking-tight text-foreground/80 mt-2"
          >
            Transforming Data Into Intelligent Decisions
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-base md:text-lg text-muted max-w-2xl mx-auto leading-relaxed"
        >
          I build intelligent systems that transform raw data into actionable business insights using Analytics, Machine Learning, Artificial Intelligence, and Natural Language Processing.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-primary text-white hover:bg-primary-hover px-6 py-3.5 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-0.5 shadow-md"
          >
            <span>Explore Projects</span>
            <ChevronRight className="w-4 h-4" />
          </a>

          <a
            href="/resume.pdf"
            download="Bheemalingappa_Resume.pdf"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-surface hover:bg-surface-secondary border border-surface-border text-foreground px-6 py-3.5 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span>Download CV</span>
            <ArrowUpRight className="w-4 h-4 text-muted" />
          </a>

          <div className="flex space-x-3 mt-2 sm:mt-0">
            <a
              href="https://github.com/Bheemalingappa"
              target="_blank"
              rel="noreferrer"
              className="p-3.5 bg-surface hover:bg-surface-secondary border border-surface-border rounded-xl text-muted hover:text-foreground transition-all duration-300"
              title="GitHub"
            >
              <GithubIcon className="w-4.5 h-4.5" />
            </a>
            <a
              href="https://www.linkedin.com/in/bheema-boler-a7a6241b6"
              target="_blank"
              rel="noreferrer"
              className="p-3.5 bg-surface hover:bg-surface-secondary border border-surface-border rounded-xl text-muted hover:text-foreground transition-all duration-300"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4.5 h-4.5" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Stats Counter Section */}
      <div className="relative z-10 max-w-4xl w-full mx-auto border-t border-surface-border/40 py-8 mt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center flex flex-col space-y-1"
            >
              <span className="text-2xl md:text-3xl font-extrabold font-mono text-gradient-primary">
                {stat.value}
              </span>
              <span className="text-xs text-muted font-medium font-sans">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
