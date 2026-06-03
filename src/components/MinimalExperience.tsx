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
      company: "Cognifyz Technologies (Remote)",
      role: "Data Science & Data Analytics Intern",
      duration: "2025",
      description: [
        "Performed data cleaning, preprocessing, and exploratory data analysis using Python, Pandas, and NumPy.",
        "Created visualizations using Matplotlib and Seaborn to identify business trends and insights.",
        "Worked with SQL queries for data extraction, transformation, and reporting.",
        "Applied machine learning techniques for predictive analytics and model evaluation.",
        "Generated dashboard-ready reports for business intelligence applications."
      ],
      skills: ["Python", "Pandas", "NumPy", "EDA", "SQL Queries", "Machine Learning", "Dashboard Reporting"],
    },
    {
      company: "Simplilearn (Remote)",
      role: "Data Science & Analytics Trainee",
      duration: "2025",
      description: [
        "Completed practical training in Data Analytics, Machine Learning, and Business Intelligence.",
        "Developed mini-projects using Python, SQL, Power BI, and Tableau.",
        "Implemented regression, classification, and clustering algorithms on real-world datasets.",
        "Strengthened analytical and reporting skills through hands-on case studies."
      ],
      skills: ["Data Analytics", "Machine Learning", "Business Intelligence", "Python", "SQL", "Power BI", "Tableau"],
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
