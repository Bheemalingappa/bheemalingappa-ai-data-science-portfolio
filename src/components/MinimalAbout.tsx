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
      title: "Academic Foundation",
      description: "Began Bachelor of Engineering (B.E.) at AMC Engineering College, focusing on programming, databases, and core computer science concepts.",
      icon: <Code className="w-4 h-4" />,
    },
    {
      year: "2025",
      title: "Hands-on Industry Practice",
      description: "Completed Data Science & Analytics training with Simplilearn, followed by a Data Science & Data Analytics Internship at Cognifyz Technologies.",
      icon: <Compass className="w-4 h-4" />,
    },
    {
      year: "2025",
      title: "AI & NLP Development",
      description: "Engineered real-time Twitter sentiment analysis systems using RoBERTa and developed the voice-controlled Jarvis AI assistant.",
      icon: <BrainCircuit className="w-4 h-4" />,
    },
    {
      year: "2026",
      title: "Professional Launch",
      description: "Graduating with B.E. degree (CGPA: 7.23/10) and actively stepping into full-time roles in Data Analytics & Data Science.",
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
              I am an aspiring Data Analyst and Data Science professional with hands-on experience in Data Analytics, Machine Learning, Natural Language Processing, and Business Intelligence. I specialize in turning raw complex datasets into actionable business intelligence insights.
            </p>
            <p>
              My expertise covers writing optimized SQL queries, constructing predictive ML model pipelines, training transformer-based NLP models, and building interactive BI reports using Power BI and Tableau.
            </p>
            <p>
              I hold a Bachelor of Engineering (B.E.) degree from AMC Engineering College, Bengaluru (2022 - 2026) with a CGPA of 7.23 / 10, bringing strong academic and practical fundamentals to every technical challenge.
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
