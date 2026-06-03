"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Compass, Code, BrainCircuit, Target } from "lucide-react";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function MinimalAbout() {
  const timeline: TimelineItem[] = [
    {
      year: "2022",
      title: "Started Engineering Journey",
      description: "Focused on core programming principles, databases, Java, and SQL.",
      icon: <Code className="w-4 h-4" />,
    },
    {
      year: "2024",
      title: "Data Science Exploration",
      description: "Mastered statistical analysis, exploratory data tools, and Power BI dashboards.",
      icon: <Compass className="w-4 h-4" />,
    },
    {
      year: "2025",
      title: "Built AI and NLP Projects",
      description: "Engineered real-time sentiment platforms and voice automated assistant models.",
      icon: <BrainCircuit className="w-4 h-4" />,
    },
    {
      year: "2026",
      title: "Pursuing Data Science & AI Career",
      description: "Focusing on enterprise integrations, data products, and business insights.",
      icon: <Target className="w-4 h-4" />,
    },
  ];

  return (
    <section id="about" className="relative py-20 px-4">
      <div className="max-w-4xl w-full mx-auto space-y-16">
        {/* Section Title */}
        <div className="text-center">
          <h2 className="text-xs font-mono tracking-widest text-primary font-bold uppercase mb-2">
            01 / Narrative
          </h2>
          <h3 className="text-3xl font-extrabold tracking-tight">The Story & Journey</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Narrative */}
          <div className="space-y-4 text-muted text-sm leading-relaxed">
            <h4 className="text-base font-bold text-foreground flex items-center space-x-2 mb-2">
              <BookOpen className="w-4 h-4 text-secondary" />
              <span>Professional Summary</span>
            </h4>
            <p>
              I am a highly motivated Data Scientist and Machine Learning Engineer who builds end-to-end intelligent systems. I enjoy bridging the gap between numbers, algorithms, and actual software tools.
            </p>
            <p>
              My work spans data analytics (writing complex SQL and aggregating datasets), machine learning (training predictive classification pipelines), and generative AI (deploying NLP models and voice-activated OS automation scripts).
            </p>
            <p>
              Throughout my journey, my focus has been on translating raw data vectors into visual dashboard interfaces and server endpoints that deliver immediate, measurable business impact.
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-6">
            <h4 className="text-base font-bold text-foreground flex items-center space-x-2 mb-4">
              <Target className="w-4 h-4 text-primary" />
              <span>Key Milestones</span>
            </h4>

            <div className="relative pl-6 border-l border-surface-border/60 ml-2.5 space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="relative group">
                  <span className="absolute -left-[35px] top-0.5 w-6 h-6 rounded-full bg-surface border border-surface-border flex items-center justify-center text-muted group-hover:text-primary transition-colors">
                    {item.icon}
                  </span>
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded-full font-bold">
                      {item.year}
                    </span>
                    <h5 className="text-sm font-bold text-foreground mt-1">{item.title}</h5>
                    <p className="text-xs text-muted leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
