"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen, Clock, Calendar } from "lucide-react";

interface BlogPost {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  url: string;
}

export default function Blog() {
  const posts: BlogPost[] = [
    {
      title: "Fine-tuning Small Transformers for Real-time Edge Sentiment Scoring",
      excerpt: "An exploration into making transformer layers like RoBERTa light enough to perform inference in less than 50ms inside containers using ONNX runtimes.",
      category: "NLP & Generative AI",
      readTime: "6 min read",
      date: "May 24, 2026",
      url: "#",
    },
    {
      title: "Bridging Business Intuition with Rigorous XGBoost Churn Analytics",
      excerpt: "How modeling risk bands (Low, Mid, Critical) instead of single-threshold classifiers helps customer relations teams prevent subscriber attrition effectively.",
      category: "Machine Learning",
      readTime: "5 min read",
      date: "April 18, 2026",
      url: "#",
    },
    {
      title: "Constructing Jarvis: Key Engineering Lessons in TTS/STT Voice Systems",
      excerpt: "A deep dive into noise threshold calibrations, signal baseline calculations, and mapping NLP command layers for high-performance localized OS automation.",
      category: "AI & Automation",
      readTime: "8 min read",
      date: "March 02, 2026",
      url: "#",
    },
    {
      title: "SQL Window Functions: The Secret to High-Performance ETL Runs",
      excerpt: "Moving beyond basic subqueries. Why mapping partitions and window analytics directly inside database tables increases Power BI query speeds.",
      category: "Data Engineering",
      readTime: "4 min read",
      date: "January 15, 2026",
      url: "#",
    },
  ];

  return (
    <section id="blog" className="relative py-20 md:py-32 px-4">
      <div className="absolute top-1/4 left-1/3 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl glow-blur" />
      <div className="absolute inset-0 grid-dots opacity-20 pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-xs font-mono tracking-widest text-primary font-bold uppercase mb-3">
            08 / Technical Insights
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            The Data Science Blog
          </h3>
          <p className="text-muted mt-4 text-base md:text-lg">
            Writing about transformer engineering, model analytics, MLOps latency challenges, and data architecture patterns.
          </p>
        </div>

        {/* Blog Post Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -3 }}
              className="glass-panel border-surface-border/60 rounded-2xl p-6 md:p-8 hover:border-primary/40 transition-all duration-300 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center text-[10px] font-mono text-muted">
                  <span className="bg-primary/10 text-primary border border-primary/20 px-2.5 py-1 rounded">
                    {post.category}
                  </span>
                  <div className="flex items-center space-x-3">
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-3.5 h-3.5 text-muted" />
                      <span>{post.date}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5 text-muted" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>
                </div>

                <h4 className="text-lg md:text-xl font-extrabold text-foreground leading-snug group-hover:text-primary transition-colors">
                  {post.title}
                </h4>

                <p className="text-xs md:text-sm text-muted leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="flex justify-between items-center border-t border-surface-border/20 pt-4 mt-2">
                <span className="text-xs font-mono text-primary font-bold flex items-center space-x-1.5 hover:text-primary-hover cursor-pointer">
                  <BookOpen className="w-4 h-4" />
                  <span>Read Article</span>
                </span>
                
                <span className="p-2.5 bg-surface-secondary border border-surface-border/40 rounded-xl text-muted hover:text-foreground cursor-pointer transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
