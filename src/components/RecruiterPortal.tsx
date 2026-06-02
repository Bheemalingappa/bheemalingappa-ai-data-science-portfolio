"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, HelpCircle, ArrowUpRight, Zap, Target, Star, Layers, Settings } from "lucide-react";

interface BenefitCard {
  title: string;
  subtitle: string;
  description: string;
  points: string[];
  icon: React.ReactNode;
}

interface RoadmapStep {
  phase: string;
  title: string;
  skills: string[];
  status: "completed" | "in-progress" | "planned";
}

export default function RecruiterPortal() {
  const benefits: BenefitCard[] = [
    {
      title: "Strong Analytics Foundation",
      subtitle: "Rigorous statistical calculations & aggregation logic",
      description: "My programming foundation translates to clean ETL operations, exploratory analysis, and rigorous hypothesis testing. I query databases, run feature correlations, and clean datasets with mathematical precision.",
      points: [
        "Skilled in complex SQL syntax, aggregation windows, and subqueries.",
        "Proficient in numerical compute packages (NumPy, Pandas).",
        "Capable of translating complex statistics into visual executive dashboards.",
      ],
      icon: <Layers className="w-5 h-5 text-primary" />,
    },
    {
      title: "Machine Learning & NLP Pipelines",
      subtitle: "Model classification, regression, and sequence parsing",
      description: "I build end-to-end ML workflows. I engineer features, train models, audit cross-validation scores, and evaluate final classifiers using precision-recall models. In NLP, I implement transformer layers, sentiment filters, and toxic comment detectors.",
      points: [
        "Practical experience implementing RoBERTa, VADER, and toxicity classifiers.",
        "Experienced in scikit-learn pipeline structures and feature scaling.",
        "Proficient in model assessment (F1, ROC, precision-recall curve, validation).",
      ],
      icon: <Zap className="w-5 h-5 text-secondary" />,
    },
    {
      title: "AI Development & Product Integration",
      subtitle: "Connecting advanced LLMs with responsive UI shells",
      description: "I bridge the gap between AI modeling and full-stack software. I design prompt templates, integrate REST API calls to LLM layers, configure voice interfaces, and set up interactive endpoints using Flask and Streamlit.",
      points: [
        "Knowledge of Prompt Engineering architectures.",
        "Voice-activated assistant creation (Speech-To-Text/TTS, commands).",
        "API creation to serve model inferences to frontend environments.",
      ],
      icon: <Star className="w-5 h-5 text-accent" />,
    },
    {
      title: "Product-focused Engineering Mindset",
      subtitle: "Solving real-world business challenges, not mock code",
      description: "I do not write code in isolation. I design software with the user in mind—focusing on visual hierarchy, latency optimization, modular code organization, version control standards, and simple deployment flows.",
      points: [
        "Active GitHub presence mapping clean repositories.",
        "Product layout inspired by premium designs (Apple, Linear).",
        "Fast-loading web architectures built on React and Next.js.",
      ],
      icon: <ShieldCheck className="w-5 h-5 text-green-400" />,
    },
  ];

  const roadmap: RoadmapStep[] = [
    {
      phase: "Phase 1",
      title: "Core Analytics & Statistical Modeling",
      skills: ["Python", "SQL Data Audits", "Pandas & EDA", "Power BI Dashboards"],
      status: "completed",
    },
    {
      phase: "Phase 2",
      title: "AI Product Architecture & Deep NLP",
      skills: ["RoBERTa Classification", "Toxicity Moderation Engine", "Jarvis Voice Pipeline", "API Deployments"],
      status: "completed",
    },
    {
      phase: "Phase 3",
      title: "Enterprise MLOps & Distributed Computing",
      skills: ["Docker Containers", "Model Registry Setup", "CI/CD ML Automations", "PySpark Big Data"],
      status: "in-progress",
    },
    {
      phase: "Phase 4",
      title: "Large Scale Generative AI Deployments",
      skills: ["Agentic Frameworks", "Vector Databases & RAG", "Model Distillation", "GPU Latency Triage"],
      status: "planned",
    },
  ];

  return (
    <section id="why-hire-me" className="relative py-20 md:py-32 px-4">
      {/* Lights & Shadows */}
      <div className="absolute top-1/4 left-1/3 w-[450px] h-[450px] bg-primary/5 rounded-full blur-3xl glow-blur" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-accent/5 rounded-full blur-3xl glow-blur" />

      <div className="max-w-6xl w-full mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-xs font-mono tracking-widest text-primary font-bold uppercase mb-3">
            03 / Recruiter Evaluation
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Why Hire Me & Career Roadmap
          </h3>
          <p className="text-muted mt-4 text-base md:text-lg">
            A comprehensive overview for hiring managers, technical recruiters, and team leaders mapping my technical credentials and long-term trajectory.
          </p>
        </div>

        {/* Double Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Why Hire Me Card Grid */}
          <div className="lg:col-span-8 space-y-6">
            <h4 className="text-lg font-bold font-mono tracking-wider text-foreground flex items-center space-x-2">
              <HelpCircle className="w-5 h-5 text-primary" />
              <span>THE VALUE ADDITION</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, i) => (
                <div
                  key={i}
                  className="glass-panel rounded-2xl p-6 border-surface-border/60 hover:border-primary/40 transition-all duration-300 space-y-4 hover:shadow-md flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="p-2.5 bg-surface-secondary border border-surface-border/40 rounded-xl">
                        {benefit.icon}
                      </div>
                      <div>
                        <h5 className="text-sm font-bold text-foreground">{benefit.title}</h5>
                        <p className="text-[10px] text-muted font-mono">{benefit.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-xs text-muted leading-relaxed">{benefit.description}</p>
                  </div>
                  
                  <ul className="space-y-2 border-t border-surface-border/30 pt-3">
                    {benefit.points.map((pt, index) => (
                      <li key={index} className="text-[10px] text-muted flex items-start space-x-1.5">
                        <span className="text-primary mt-0.5">•</span>
                        <span className="leading-tight">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Roadmap Widget */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-lg font-bold font-mono tracking-wider text-foreground flex items-center space-x-2">
              <Target className="w-5 h-5 text-secondary" />
              <span>ROADMAP & VISION</span>
            </h4>

            <div className="glass-panel rounded-2xl p-6 border-surface-border/60 space-y-6 relative">
              <span className="absolute top-4 right-4 text-[9px] font-mono text-muted tracking-widest uppercase">
                Vector Target
              </span>

              <div className="space-y-6">
                {roadmap.map((step, idx) => {
                  const isCompleted = step.status === "completed";
                  const isInProgress = step.status === "in-progress";
                  return (
                    <div key={idx} className="relative pl-6 border-l border-surface-border/50 last:border-0 pb-1">
                      
                      {/* Timeline status indicator node */}
                      <span
                        className={`absolute -left-[7px] top-1 w-3 h-3 rounded-full border ${
                          isCompleted
                            ? "bg-success border-success"
                            : isInProgress
                            ? "bg-primary border-primary animate-pulse"
                            : "bg-surface border-surface-border"
                        }`}
                      />

                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <span className="text-[9px] font-mono text-muted uppercase font-bold">{step.phase}</span>
                          <span
                            className={`text-[8px] font-bold px-1.5 py-0.5 rounded font-mono uppercase ${
                              isCompleted
                                ? "bg-success/10 text-success border border-success/20"
                                : isInProgress
                                ? "bg-primary/10 text-primary border border-primary/20"
                                : "bg-surface-secondary text-muted border border-surface-border/40"
                            }`}
                          >
                            {step.status}
                          </span>
                        </div>

                        <h5 className="text-xs font-bold text-foreground/95">{step.title}</h5>

                        <div className="flex flex-wrap gap-1 pt-1">
                          {step.skills.map((s, sIdx) => (
                            <span
                              key={sIdx}
                              className="text-[9px] font-mono bg-surface-secondary/40 text-muted px-1.5 py-0.5 rounded border border-surface-border/20"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Recruitment Pitch CTA Block */}
              <div className="bg-surface-secondary/50 rounded-xl p-4 border border-surface-border/40 space-y-3 mt-4 text-center">
                <div className="text-xs font-bold text-foreground">Interested in scheduling an interview?</div>
                <p className="text-[10px] text-muted leading-tight">Review my case studies below and submit your details in the contact form or send a message directly.</p>
                <a
                  href="#contact"
                  className="w-full inline-flex items-center justify-center space-x-1.5 bg-primary hover:bg-primary-hover text-white text-[11px] font-medium py-2 rounded-lg transition-colors"
                >
                  <span>Get In Touch</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
