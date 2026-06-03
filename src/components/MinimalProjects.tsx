"use client";

import React from "react";
import { ExternalLink } from "lucide-react";

interface ProjectCase {
  title: string;
  category: string;
  problem: string;
  solution: string;
  tech: string[];
  metric: string;
  metricLabel: string;
}

export default function MinimalProjects() {
  const cases: ProjectCase[] = [
    {
      title: "Twitter Sentiment Analysis Platform",
      category: "Natural Language Processing",
      problem: "Brands lack real-time signals for customer sentiment and toxicity on social media.",
      solution: "Engineered a Python pipeline using RoBERTa transformers and VADER heuristics to score sentiment and toxic profanities, serving outputs to a Flask/Streamlit dashboard.",
      tech: ["Python", "Flask", "Streamlit", "RoBERTa", "VADER", "Detoxify"],
      metric: "95.7%",
      metricLabel: "Accuracy Score",
    },
    {
      title: "Jarvis AI Assistant",
      category: "AI & Automation",
      problem: "Toggling between search tabs, terminals, and editor tasks interrupts developer flow.",
      solution: "Built a local voice-activated terminal operating assistant that runs command flows (STT/TTS signals), scheduling tasks, and executing OS operations.",
      tech: ["SpeechRecognition", "Pyttsx3", "Python API", "OS Hooks"],
      metric: "120ms",
      metricLabel: "Command Latency",
    },
    {
      title: "Customer Churn Prediction",
      category: "Machine Learning & Analytics",
      problem: "High subscriber churn levels decrease company lifetime value metrics.",
      solution: "Analyzed relational user databases, resolved class imbalances using SMOTE algorithms, and trained an XGBoost classifier to isolate high-risk customer profiles.",
      tech: ["Python", "Scikit-Learn", "XGBoost", "SMOTE", "Power BI"],
      metric: "0.923",
      metricLabel: "AUC-ROC Metric",
    },
    {
      title: "Sales Intelligence Dashboard",
      category: "Business Intelligence",
      problem: "Spreadsheet reports delay identifying rolling average targets and local sales drops.",
      solution: "Designed SQL transactional schemas and built Power BI dashboards using custom DAX query measures to track daily variance limits.",
      tech: ["Power BI", "SQL Queries", "DAX Formulas", "Data Modeling"],
      metric: "60%",
      metricLabel: "Load Latency Drop",
    },
  ];

  return (
    <section id="projects" className="relative py-20 px-4">
      <div className="max-w-4xl w-full mx-auto space-y-16">
        {/* Section Title */}
        <div className="text-center">
          <h2 className="text-xs font-mono tracking-widest text-primary font-bold uppercase mb-2">
            03 / Projects
          </h2>
          <h3 className="text-3xl font-extrabold tracking-tight">Case Studies</h3>
        </div>

        {/* Projects Cards List */}
        <div className="space-y-8">
          {cases.map((c, i) => (
            <div
              key={i}
              className="glass-panel border-surface-border/50 rounded-2xl p-6 md:p-8 hover:border-primary/30 transition-all duration-300 grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
            >
              {/* Text info */}
              <div className="md:col-span-9 space-y-4">
                <div>
                  <span className="text-[10px] font-mono text-primary bg-primary/10 border border-primary/20 px-2.5 py-0.5 rounded">
                    {c.category}
                  </span>
                  <h4 className="text-xl font-bold mt-2 text-foreground">{c.title}</h4>
                </div>

                <div className="space-y-2">
                  <div className="text-xs">
                    <strong className="text-foreground/90 uppercase font-mono text-[9px] tracking-wider block">Problem</strong>
                    <span className="text-muted leading-relaxed">{c.problem}</span>
                  </div>
                  <div className="text-xs">
                    <strong className="text-foreground/90 uppercase font-mono text-[9px] tracking-wider block">Solution</strong>
                    <span className="text-muted leading-relaxed">{c.solution}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {c.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="bg-surface-secondary/40 text-[9px] text-muted font-mono px-2 py-0.5 rounded border border-surface-border/30"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bold stats card */}
              <div className="md:col-span-3 bg-surface-secondary/30 border border-surface-border/40 rounded-xl p-4 text-center space-y-1">
                <div className="text-2xl font-extrabold font-mono text-gradient-primary">{c.metric}</div>
                <div className="text-[9px] text-muted uppercase font-mono tracking-wider">{c.metricLabel}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
