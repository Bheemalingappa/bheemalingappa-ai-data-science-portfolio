"use client";

import React, { useState } from "react";
import { Eye, X, Image as ImageIcon } from "lucide-react";
import { GithubIcon } from "./icons";

interface ProjectLink {
  label: string;
  url: string;
}

interface ProjectCase {
  title: string;
  category: string;
  description: string[];
  tech: string[];
  metric: string;
  metricLabel: string;
  links: ProjectLink[];
  image?: string;
}

export default function MinimalProjects() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const cases: ProjectCase[] = [
    {
      title: "DataVision — InsightFlow AI Platform",
      category: "AI & Data Analytics Platform",
      description: [
        "Automated complete data analytics lifecycle: Data Collection, ETL Data Cleaning, Business Analytics, and AI Insights.",
        "Architected backend REST APIs and WebSockets using FastAPI, PostgreSQL, and Pandas.",
        "Engineered responsive frontend dashboard in React, TypeScript, and Tailwind CSS for real-time data exploration.",
        "Integrated AI-driven statistical insights engine for automated business intelligence reporting."
      ],
      tech: ["FastAPI", "React", "TypeScript", "PostgreSQL", "Pandas", "WebSockets", "Python", "Tailwind CSS"],
      metric: "ETL + AI",
      metricLabel: "Full Lifecycle Platform",
      links: [
        { label: "Repository", url: "https://github.com/Bheemalingappa/DataVision" }
      ],
    },
    {
      title: "McDonald's Menu Analytics Dashboard",
      category: "Business Intelligence & Nutrition Analytics",
      description: [
        "Designed dynamic Executive Overview & Menu & Nutrition Performance dashboards in Power BI analyzing 42 McDonald's menu items.",
        "Tracked core nutritional metrics including Calories (327.5 Kcal Avg, 832.7 Kcal Max), Sodium (474.3 mg Avg), Sugar (13.3 g Avg), Fat, and Protein (10.25 g Avg).",
        "Built Top-10 ranking visualizations for highest and lowest calorie, sugar, sodium, and fat items (e.g. Veg & Chicken Maharaja Mac).",
        "Engineered multi-variable scatter plots (Calories vs Protein, Sugar vs Calories, Fat vs Sodium) with Category and Serving Unit dynamic slicers."
      ],
      tech: ["Power BI", "DAX", "Data Analytics", "Nutrition Insights", "Data Visualization"],
      metric: "42",
      metricLabel: "Menu Items Analyzed",
      links: [
        { label: "Repository", url: "https://github.com/Bheemalingappa/mcdonalds-menu-analytics-powerbi" }
      ],
      image: "/projects/mcdonalds-dashboard.jpg",
    },
    {
      title: "Superstore Sales Analysis (Python)",
      category: "Data Analytics & EDA",
      description: [
        "Performed end-to-end analysis on 9,800+ retail sales records using Python and Pandas.",
        "Conducted data cleaning, preprocessing, and exploratory data analysis (EDA).",
        "Analyzed regional performance, customer segments, category-wise sales, and monthly sales trends.",
        "Created visualizations using Matplotlib and Seaborn to generate business insights.",
        "Published project documentation and analysis workflow on GitHub."
      ],
      tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter Notebook"],
      metric: "9.8K+",
      metricLabel: "Records Analyzed",
      links: [
        { label: "Repository", url: "https://github.com/Bheemalingappa/Superstore-Sales-Analysis" }
      ],
    },
    {
      title: "Superstore Sales Analysis (Power BI)",
      category: "Business Intelligence & Visualization",
      description: [
        "Designed and developed an interactive sales analytics dashboard using Power BI.",
        "Built KPI cards for Total Sales, Total Orders, and Total Customers.",
        "Created regional sales analysis, category performance reports, and customer segmentation dashboards.",
        "Implemented dynamic filtering using Region and State slicers.",
        "Enabled data-driven decision-making through business intelligence visualizations."
      ],
      tech: ["Power BI", "DAX", "Business Intelligence", "Data Visualization"],
      metric: "KPIs",
      metricLabel: "Dynamic Cards",
      links: [
        { label: "Repository", url: "https://github.com/Bheemalingappa/Superstore-PowerBI-Dashboard" }
      ],
    },
    {
      title: "Twitter Sentiment Analysis Web Application",
      category: "Natural Language Processing",
      description: [
        "Developed a real-time Twitter sentiment analysis platform for social media analytics.",
        "Implemented RoBERTa Transformer, VADER Sentiment Analysis, Emotion Classification, and Toxicity Detection.",
        "Integrated Twitter APIs for real-time tweet collection and sentiment monitoring.",
        "Built interactive dashboards to visualize sentiment trends and business insights."
      ],
      tech: ["Python", "NLP", "Streamlit", "Flask", "Twitter API", "RoBERTa", "VADER", "Detoxify"],
      metric: "95.7%",
      metricLabel: "Accuracy Score",
      links: [],
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

                {/* GitHub Links & Image Preview Button */}
                <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-surface-border/10">
                  {c.links && c.links.length > 0 && c.links.map((link, lIdx) => (
                    <a
                      key={lIdx}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center space-x-1.5 text-xs text-primary hover:text-primary-hover font-semibold transition-all duration-300"
                    >
                      <GithubIcon className="w-4 h-4 text-muted hover:text-primary transition-colors" />
                      <span>{link.label}</span>
                    </a>
                  ))}

                  {c.image && (
                    <button
                      onClick={() => setSelectedImage(c.image || null)}
                      className="inline-flex items-center space-x-1.5 text-xs text-secondary hover:text-secondary-hover font-semibold transition-all duration-300"
                    >
                      <Eye className="w-4 h-4 text-secondary" />
                      <span>View Dashboard Preview</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Bold stats card & thumbnail */}
              <div className="md:col-span-3 flex flex-col items-center justify-center space-y-3">
                {c.image && (
                  <button
                    onClick={() => setSelectedImage(c.image || null)}
                    className="w-full relative group overflow-hidden rounded-xl border border-surface-border/50 aspect-video bg-surface-secondary/40"
                  >
                    <img
                      src={c.image}
                      alt={`${c.title} Preview`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-1.5 text-xs font-semibold text-white">
                      <ImageIcon className="w-4 h-4" />
                      <span>Preview</span>
                    </div>
                  </button>
                )}

                <div className="w-full bg-surface-secondary/30 border border-surface-border/40 rounded-xl p-4 text-center space-y-1">
                  <div className="text-2xl font-extrabold font-mono text-gradient-primary">{c.metric}</div>
                  <div className="text-[9px] text-muted uppercase font-mono tracking-wider">{c.metricLabel}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-background/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-5xl w-full bg-surface border border-surface-border rounded-2xl p-4 space-y-4 shadow-2xl">
            <div className="flex justify-between items-center pb-2 border-b border-surface-border/40">
              <span className="text-xs font-mono text-muted uppercase font-semibold">Dashboard Preview</span>
              <button
                onClick={() => setSelectedImage(null)}
                className="p-1.5 rounded-lg bg-surface-secondary hover:bg-surface-border text-muted hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="overflow-hidden rounded-xl border border-surface-border/40 max-h-[75vh]">
              <img
                src={selectedImage}
                alt="Dashboard Full Preview"
                className="w-full h-full object-contain max-h-[70vh] mx-auto"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
