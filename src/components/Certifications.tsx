"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, ShieldCheck, CheckCircle2, Bookmark } from "lucide-react";

interface Certificate {
  title: string;
  issuer: string;
  category: string;
  skills: string[];
  date: string;
}

export default function Certifications() {
  const list: Certificate[] = [
    {
      title: "Data Science & Data Analytics Internship Certificate",
      issuer: "Cognifyz Technologies",
      category: "Internship",
      skills: ["Python", "Pandas & NumPy", "SQL Queries", "Exploratory Data Analysis", "Dashboard Reports"],
      date: "2025",
    },
    {
      title: "Data Science & Analytics Training Program",
      issuer: "Simplilearn",
      category: "Professional Training",
      skills: ["Data Analytics", "Machine Learning Core", "SQL", "Power BI & Tableau", "Clustering & Regression"],
      date: "2025",
    },
  ];

  return (
    <section id="certifications" className="relative py-20 md:py-28 px-4 bg-surface/5">
      <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-accent/5 rounded-full blur-3xl glow-blur" />
      <div className="absolute inset-0 grid-dots opacity-20 pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-xs font-mono tracking-widest text-primary font-bold uppercase mb-3">
            07 / Credentials
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Verified Certifications
          </h3>
          <p className="text-muted mt-4 text-base md:text-lg">
            A listing of my specialized courses, internships, and structured data credentials.
          </p>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-6">
          {list.map((cert, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -3 }}
              className="glass-panel border-surface-border/60 rounded-2xl p-5 hover:border-primary/40 transition-all duration-300 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <span className="text-[9px] font-mono bg-primary/10 text-primary border border-primary/20 px-2 py-0.5 rounded-full font-bold">
                    {cert.category}
                  </span>
                  <span className="text-[9px] font-mono text-muted flex items-center space-x-1">
                    <Bookmark className="w-3 h-3 text-muted" />
                    <span>{cert.date}</span>
                  </span>
                </div>

                <h4 className="text-sm font-bold text-foreground leading-snug group-hover:text-primary transition-colors">
                  {cert.title}
                </h4>

                <div className="flex items-center space-x-2 text-[10px] text-muted">
                  <Award className="w-3.5 h-3.5 text-secondary" />
                  <span>Issued by: {cert.issuer}</span>
                </div>
              </div>

              {/* Skills gained tags */}
              <div className="border-t border-surface-border/20 pt-3 mt-2">
                <div className="flex flex-wrap gap-1">
                  {cert.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="bg-surface-secondary/50 text-[9px] text-muted font-mono px-2 py-0.5 rounded border border-surface-border/25"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center space-x-1.5 text-[9px] font-mono text-success font-semibold border-t border-surface-border/20 pt-2.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>VERIFIED CREDENTIAL SECURE</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
