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
      title: "McDonald's Menu Analytics Dashboard — Power BI",
      category: "Business Intelligence & Nutrition Analytics",
      description: [
        "Designed an interactive Power BI dashboard analyzing McDonald's menu and nutrition dataset across 260+ products, covering category-wise breakdowns and product-level nutrition values.",
        "Engineered Power Query (ETL) transformations and DAX measures to clean, model, and calculate 5 key nutrition KPIs — calories, protein, sodium, sugar, and fat — across menu categories.",
        "Published a two-page dashboard (Overview and Menu & Nutrition pages) enabling category-wise and product-wise comparisons, along with dataset, .pbix file, and recorded demo."
      ],
      tech: ["Power BI", "Power Query", "DAX", "Data Cleaning", "Data Visualization", "GitHub"],
      metric: "260+",
      metricLabel: "Products Analyzed",
      links: [
        { label: "Repository", url: "https://github.com/Bheemalingappa/mcdonalds-menu-analytics-powerbi" }
      ],
      image: "/projects/mcdonalds-dashboard.jpg",
    },
    {
      title: "DataVision — End-to-End Data Analytics Workflow Platform",
      category: "Full-Stack Data Engineering & Analytics",
      description: [
        "Architected a full-stack analytics platform automating a 5-stage ETL and analytics workflow — data collection, data cleansing, data integration, analysis, visualization, and AI-generated insights — across 13 data sources, with a PostgreSQL backend.",
        "Automated an ETL pipeline and data flows for outlier detection and missing-value imputation to improve data quality and data integrity, paired with a dashboarding frontend for business reporting.",
        "Deployed role-based dashboards with process automation for report scheduling, reducing weekly reporting turnaround time for analysts."
      ],
      tech: ["FastAPI", "PostgreSQL", "React", "TypeScript", "Pandas", "Scikit-learn"],
      metric: "5-Stage",
      metricLabel: "ETL & Analytics Workflow",
      links: [
        { label: "Repository", url: "https://github.com/Bheemalingappa/DataVision" }
      ],
    },
    {
      title: "Twitter Sentiment Analysis Web Application",
      category: "Natural Language Processing & Analytics",
      description: [
        "Created a real-time sentiment-analysis dashboard on live social data, visualizing trends for faster business response."
      ],
      tech: ["Python", "NLP", "Streamlit", "Twitter API"],
      metric: "Real-time",
      metricLabel: "Social Sentiment Monitoring",
      links: [
        { label: "Repository", url: "https://github.com/Bheemalingappa" }
      ],
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
          <h3 className="text-3xl font-extrabold tracking-tight">Case Studies &amp; Projects</h3>
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
