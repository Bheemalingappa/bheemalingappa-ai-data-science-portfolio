"use client";

import React from "react";

interface ProjectCase {
  title: string;
  category: string;
  description: string[];
  tech: string[];
  metric: string;
  metricLabel: string;
}

export default function MinimalProjects() {
  const cases: ProjectCase[] = [
    {
      title: "Twitter Sentiment Analysis Web Application",
      category: "Natural Language Processing",
      description: [
        "Developed a real-time Twitter sentiment analysis platform.",
        "Implemented RoBERTa Transformer, VADER sentiment analysis, emotion classification, and toxicity detection.",
        "Integrated Twitter APIs for real-time tweet collection and processing.",
        "Built interactive dashboards to visualize sentiment trends and insights."
      ],
      tech: ["Python", "NLP", "Streamlit", "Flask", "Twitter API", "RoBERTa", "VADER", "Detoxify"],
      metric: "95.7%",
      metricLabel: "Accuracy Score",
    },
    {
      title: "Jarvis AI Assistant",
      category: "AI & Automation",
      description: [
        "Developed a voice-controlled AI assistant for automation tasks.",
        "Integrated speech recognition and text-to-speech technologies.",
        "Enabled web search, application launching, and voice command execution.",
        "Improved user interaction through natural language communication."
      ],
      tech: ["Python", "NLP", "Speech Recognition", "TTS", "OS Automation"],
      metric: "120ms",
      metricLabel: "Command Latency",
    },
    {
      title: "Customer Churn Prediction Pipeline",
      category: "Machine Learning & Analytics",
      description: [
        "Analyzed transactional customer behavior and isolated key attrition drivers.",
        "Resolved class imbalance using SMOTE oversampling to improve model sensitivity.",
        "Trained and tuned an XGBoost classifier to predict high-risk churn profiles.",
        "Created risk segmentation files to support targeted retention outreach."
      ],
      tech: ["Python", "Scikit-Learn", "XGBoost", "SMOTE", "Exploratory Data Analysis"],
      metric: "0.923",
      metricLabel: "AUC-ROC Score",
    },
    {
      title: "Sales Intelligence BI Dashboard",
      category: "Business Intelligence & Visualization",
      description: [
        "Designed clean SQL database schemas to combine regional transactions.",
        "Formulated complex DAX query measures for rolling averages and year-over-year growth.",
        "Developed interactive reports in Power BI and Tableau to track core sales KPIs.",
        "Improved cross-team sales forecasting latency and visualization clarity."
      ],
      tech: ["Power BI", "Tableau", "SQL Queries", "DAX Formulas", "Data Modeling"],
      metric: "60%",
      metricLabel: "Data Load Speedup",
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

                <ul className="space-y-1.5 list-disc pl-4 text-xs text-muted leading-relaxed">
                  {c.description.map((desc, idx) => (
                    <li key={idx} className="marker:text-primary">
                      {desc}
                    </li>
                  ))}
                </ul>

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
