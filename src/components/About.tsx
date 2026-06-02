"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, BookOpen, BrainCircuit, Code, Compass, Play, Target } from "lucide-react";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  skills: string[];
  icon: React.ReactNode;
}

export default function About() {
  const timeline: TimelineItem[] = [
    {
      year: "2022",
      title: "Started Engineering Journey",
      description:
        "Began building core engineering foundations, studying data structures, database design, and algorithmic thinking. Explored Java, Python, and SQL.",
      skills: ["Data Structures", "Algorithms", "Java", "SQL Fundamentals"],
      icon: <Code className="w-5 h-5" />,
    },
    {
      year: "2024",
      title: "Data Science Exploration",
      description:
        "Discovered the power of statistical modeling and analytics. Mastered Pandas, NumPy, Scikit-Learn, and Power BI. Started transforming raw data into actionable dashboards.",
      skills: ["Pandas / NumPy", "Scikit-Learn", "EDA", "Power BI / Tableau"],
      icon: <Compass className="w-5 h-5" />,
    },
    {
      year: "2025",
      title: "Built AI and NLP Projects",
      description:
        "Engineered intelligent real-world systems. Developed real-time sentiment extraction engines using RoBERTa and Toxicity filters, and designed Jarvis, a personal voice AI operating system.",
      skills: ["Generative AI", "NLP Pipelines", "RoBERTa / VADER", "Flask / Streamlit"],
      icon: <BrainCircuit className="w-5 h-5" />,
    },
    {
      year: "2026",
      title: "Pursuing Data Science & AI Career",
      description:
        "Actively seeking opportunities to build enterprise AI and analytics solutions. Focused on solving complex business puzzles with advanced modeling, automation, and data pipelines.",
      skills: ["ML Pipelines", "Deep Learning", "Data Product Thinking", "System Integration"],
      icon: <Target className="w-5 h-5" />,
    },
  ];

  return (
    <section id="about" className="relative py-20 md:py-32 px-4 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl glow-blur" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-primary/5 rounded-full blur-3xl glow-blur" />

      <div className="max-w-6xl w-full mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-xs font-mono tracking-widest text-primary font-bold uppercase mb-3">
            01 / Narrative
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Engineering Intelligence From Raw Data
          </h3>
          <p className="text-muted mt-4 text-base md:text-lg">
            I don&apos;t just analyze data—I build products, deploy models, and configure pipelines that make data useful for businesses and user decisions.
          </p>
        </div>

        {/* Narrative & Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Narrative Column */}
          <div className="lg:col-span-5 space-y-6">
            <h4 className="text-xl md:text-2xl font-bold text-foreground/95 flex items-center space-x-2">
              <BookOpen className="w-5 h-5 text-secondary" />
              <span>The Story</span>
            </h4>
            
            <div className="space-y-4 text-muted text-sm md:text-base leading-relaxed">
              <p>
                My path has always been driven by deep curiosity: **how do we take chaotic, unstructured streams of information and turn them into highly predictable, intelligent action?**
              </p>
              <p>
                This curiosity led me from backend software foundations straight into the heart of Data Science and Machine Learning. I quickly realized that modeling is only one half of the equation; building and integrating models into responsive, clean systems is where the magic happens.
              </p>
              <p>
                Whether it is parsing hundreds of real-time tweets to identify critical sentiment signals and toxic behavior using deep NLP classifiers, or creating an interactive voice assistant powered by intelligent command layers, my approach is centered on **product quality, clean software design, and absolute mathematical clarity.**
              </p>
              <p>
                I thrive on working across the entire data engineering and modeling lifecycle: starting with robust data collection and exploratory analysis, transitioning through model building and pipeline validation, and concluding with responsive front-end dashboards and production endpoints.
              </p>
            </div>

            {/* Core Values Cards */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-surface/50 border border-surface-border/40 space-y-2">
                <BrainCircuit className="w-5 h-5 text-primary" />
                <div className="text-xs font-bold uppercase tracking-wider text-foreground">AI + Engineering</div>
                <p className="text-[11px] text-muted leading-tight">Constructing clean, scalable code for machine learning pipelines.</p>
              </div>

              <div className="p-4 rounded-xl bg-surface/50 border border-surface-border/40 space-y-2">
                <Award className="w-5 h-5 text-secondary" />
                <div className="text-xs font-bold uppercase tracking-wider text-foreground">Analytics Focus</div>
                <p className="text-[11px] text-muted leading-tight">Leveraging rigorous statistics to inform critical business decisions.</p>
              </div>
            </div>
          </div>

          {/* Timeline Column */}
          <div className="lg:col-span-7 space-y-6">
            <h4 className="text-xl md:text-2xl font-bold text-foreground/95 flex items-center space-x-2">
              <Play className="w-5 h-5 text-accent rotate-90" />
              <span>Data Science Journey</span>
            </h4>

            {/* Timeline wrapper */}
            <div className="relative pl-6 md:pl-8 border-l border-surface-border/60 ml-3 space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  {/* Circle Indicator on the line */}
                  <span className="absolute -left-[39px] md:-left-[47px] top-1.5 w-7 h-7 rounded-full bg-surface border border-surface-border group-hover:border-primary transition-all duration-300 flex items-center justify-center text-muted group-hover:text-primary shadow-sm z-10">
                    {item.icon}
                  </span>

                  <div className="space-y-2">
                    {/* Year Label */}
                    <span className="inline-block bg-primary/10 text-primary border border-primary/20 text-xs font-mono px-2 py-0.5 rounded-full font-bold">
                      {item.year}
                    </span>

                    {/* Milestone Title */}
                    <h5 className="text-base md:text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h5>

                    {/* Milestone Description */}
                    <p className="text-xs md:text-sm text-muted leading-relaxed max-w-2xl">
                      {item.description}
                    </p>

                    {/* Unlocked Skills Tags */}
                    <div className="flex flex-wrap gap-2 pt-1.5">
                      {item.skills.map((skill, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-surface-secondary/60 text-[10px] text-muted font-mono px-2.5 py-1 rounded border border-surface-border/50 hover:border-muted/30 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
