"use client";

import React from "react";
import { Briefcase, Calendar } from "lucide-react";

interface Job {
  company: string;
  role: string;
  duration: string;
  description: string[];
  skills: string[];
}

export default function MinimalExperience() {
  const experiences: Job[] = [
    {
      company: "Cognifyz Technologies",
      role: "Data Science Intern",
      duration: "2025",
      description: [
        "Performed data extraction, data profiling, and statistical cleaning of raw database tables.",
        "Created correlation heatmaps and predictive analytics models using Python.",
        "Designed data visualization reports mapping key performance metrics for brand auditing.",
      ],
      skills: ["Python", "Exploratory Data Analysis", "Data Cleaning", "Statistical Modeling"],
    },
    {
      company: "Simplilearn",
      role: "Data Science Certification Training",
      duration: "2024",
      description: [
        "Underwent rigorous training in statistical computing, database modeling, and predictive modeling.",
        "Mastered complex SQL database queries, joins, and indexing structures.",
        "Engineered business intelligence reporting dashboards in Power BI and Tableau using advanced DAX.",
      ],
      skills: ["SQL", "Machine Learning Core", "Power BI / DAX", "Data Storytelling"],
    },
  ];

  return (
    <section id="experience" className="relative py-20 bg-surface/5">
      <div className="max-w-4xl w-full mx-auto space-y-16">
        {/* Section Title */}
        <div className="text-center">
          <h2 className="text-xs font-mono tracking-widest text-primary font-bold uppercase mb-2">
            05 / Career
          </h2>
          <h3 className="text-3xl font-extrabold tracking-tight">Work Experience</h3>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="glass-panel border-surface-border/50 rounded-2xl p-6 md:p-8 hover:border-primary/30 transition-all duration-300 space-y-4"
            >
              <div className="flex flex-col sm:flex-row justify-between sm:items-center border-b border-surface-border/20 pb-3 gap-2">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 bg-primary/10 rounded-xl text-primary">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-foreground">{exp.role}</h4>
                    <p className="text-xs text-muted font-mono">{exp.company}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-1.5 text-xs text-muted font-mono self-start sm:self-auto bg-surface-secondary/40 border border-surface-border/30 px-3 py-1 rounded-full">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{exp.duration}</span>
                </div>
              </div>

              <ul className="space-y-2.5 list-disc pl-5 text-xs md:text-sm text-muted leading-relaxed">
                {exp.description.map((desc, idx) => (
                  <li key={idx} className="marker:text-primary">
                    {desc}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {exp.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-surface-secondary/40 text-[9px] text-muted font-mono px-2 py-0.5 rounded border border-surface-border/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
