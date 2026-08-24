"use client";

import React from "react";
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
      year: "2022 - 2026",
      title: "Bachelor of Engineering (B.E.)",
      description: "Computer Science and Data Science specialization at AMC Engineering College, Bengaluru (CGPA: 7.23 / 10).",
      icon: <Code className="w-4 h-4" />,
    },
    {
      year: "2025",
      title: "Data Science & Analytics Trainee",
      description: "Simplilearn — Completed structured training across 5 core BI/ETL domains and developed 4 applied mini-projects.",
      icon: <Compass className="w-4 h-4" />,
    },
    {
      year: "2025",
      title: "Data Science & Analytics Intern",
      description: "Cognifyz Technologies — Built automated SQL ETL pipelines, root cause analysis, and cross-functional BI reports.",
      icon: <BrainCircuit className="w-4 h-4" />,
    },
    {
      year: "2026",
      title: "Graduation & Career Launch",
      description: "Graduated with B.E. degree and actively deploying end-to-end Business Intelligence & Data Analytics solutions.",
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
              Early-career Business Intelligence / Data Analytics professional with hands-on experience in Power BI, DAX, Power Query, SQL, Python, ETL pipelines, data pipelines, KPI dashboards, dashboard development, data visualization, predictive analytics, and reporting & analytics.
            </p>
            <p>
              Skilled in end-to-end BI workflows — from SQL-based data extraction, data transformation, and data preparation to data modeling and interactive dashboards — with project experience in retail and nutrition analytics, forecasting, and cross-functional stakeholder reporting.
            </p>
            <p>
              I hold a Bachelor of Engineering (B.E.) in Computer Science and Data Science from AMC Engineering College, Bengaluru (Graduated 2026, CGPA: 7.23 / 10).
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
