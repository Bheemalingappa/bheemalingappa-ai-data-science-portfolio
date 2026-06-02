"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import { Code2, BarChart3, Brain, Sparkles, Languages, GitBranch, Database, ShieldAlert } from "lucide-react";

interface SkillItem {
  name: string;
  level: number; // 0 to 100
  desc: string;
}

interface SkillCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  skills: SkillItem[];
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("ml");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const categories: SkillCategory[] = [
    {
      id: "programming",
      name: "Programming",
      icon: <Code2 className="w-5 h-5" />,
      description: "Writing clean, efficient, and well-structured code for data engineering and mathematical execution.",
      skills: [
        { name: "Python", level: 95, desc: "Primary language for pipeline architecture, data wrangling, and model development." },
        { name: "SQL", level: 90, desc: "Complex join logic, subqueries, indexing, and general database structure." },
        { name: "Java", level: 80, desc: "Object-oriented structures, background logic, and architectural designs." },
        { name: "JavaScript", level: 75, desc: "Full-stack integration, DOM manipulations, and client dashboard scripting." },
      ],
    },
    {
      id: "analytics",
      name: "Analytics",
      icon: <BarChart3 className="w-5 h-5" />,
      description: "Extracting insights from raw business metrics using advanced tools and visual systems.",
      skills: [
        { name: "Pandas", level: 95, desc: "Primary tool for data clean-up, correlation analysis, and aggregation mapping." },
        { name: "NumPy", level: 90, desc: "Fast multi-dimensional arrays, vector algebra, and math calculations." },
        { name: "Power BI", level: 92, desc: "Designing enterprise executive dashboards with detailed DAX queries." },
        { name: "Tableau", level: 85, desc: "Rich dashboards, storytelling with data, and cloud reporting." },
        { name: "Excel", level: 90, desc: "Data organization, pivot tables, lookup operations, and quick analytics." },
      ],
    },
    {
      id: "ml",
      name: "Machine Learning",
      icon: <Brain className="w-5 h-5" />,
      description: "Building predictive systems from regression analysis to unsupervised cluster identification.",
      skills: [
        { name: "Scikit-Learn", level: 95, desc: "Industry-standard library for modeling and workflow architecture." },
        { name: "Regression", level: 92, desc: "Continuous target modeling (Linear, Lasso, Random Forests)." },
        { name: "Classification", level: 95, desc: "Categorical labeling (XGBoost, SVM, Decision Trees)." },
        { name: "Clustering", level: 88, desc: "Unsupervised cluster extraction (K-Means, PCA, DBSCAN)." },
        { name: "Feature Eng.", level: 92, desc: "Scaling, encoding, normalization, and dimensional reduction." },
        { name: "Model Eval.", level: 90, desc: "Precision, recall, F1, ROC/AUC, confusion matrices, cross-validation." },
      ],
    },
    {
      id: "ai",
      name: "Artificial Intelligence",
      icon: <Sparkles className="w-5 h-5" />,
      description: "Harnessing the power of Large Language Models and prompt engineering layers.",
      skills: [
        { name: "Generative AI", level: 90, desc: "Fine-tuning prompt layouts, custom agents, and automated generation." },
        { name: "Prompt Eng.", level: 92, desc: "Few-shot templates, chain-of-thought instructions, and API inputs." },
        { name: "LLM Integration", level: 88, desc: "Connecting model interfaces (OpenAI, Anthropic, Gemini) with local systems." },
        { name: "AI Applications", level: 90, desc: "Building full-stack conversational interfaces and pipeline automations." },
      ],
    },
    {
      id: "nlp",
      name: "Natural Language Processing",
      icon: <Languages className="w-5 h-5" />,
      description: "Processing text sequences for semantic parsing, classification, and toxicity filters.",
      skills: [
        { name: "Sentiment Analysis", level: 95, desc: "Determining mood, subjective tone, and text stance labels." },
        { name: "Text Classification", level: 92, desc: "Labeling text files based on semantic clustering patterns." },
        { name: "RoBERTa", level: 90, desc: "Deep transformer layers for contextual token embeddings." },
        { name: "VADER", level: 95, desc: "Rule-based model tuned specifically for social media sentiment text." },
        { name: "Detoxify", level: 90, desc: "Filtering text toxicity, profanity, and aggressive comments." },
      ],
    },
    {
      id: "databases",
      name: "Databases & Dev",
      icon: <Database className="w-5 h-5" />,
      description: "Managing data storage layers and project setups.",
      skills: [
        { name: "MySQL", level: 88, desc: "Relational database structuring, indexing, and analytics SQL query execution." },
        { name: "NoSQL", level: 80, desc: "Document-oriented databases (MongoDB) for unstructured payload streams." },
        { name: "Git & GitHub", level: 90, desc: "Version control, branching setups, pull requests, and automation flows." },
        { name: "Streamlit / Flask", level: 92, desc: "Deploying interactive models and APIs with minimal latency." },
      ],
    },
  ];

  const currentCategoryObj = categories.find((c) => c.id === activeCategory) || categories[2];

  // Map data for charts
  const radarData = currentCategoryObj.skills.map((s) => ({
    subject: s.name,
    A: s.level,
    fullMark: 100,
  }));

  return (
    <section id="skills" className="relative py-20 md:py-32 px-4 bg-surface/10">
      
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-10 w-[350px] h-[350px] bg-secondary/5 rounded-full blur-3xl glow-blur" />
      <div className="absolute bottom-0 right-10 w-[300px] h-[300px] bg-accent/5 rounded-full blur-3xl glow-blur" />
      <div className="absolute inset-0 grid-dots opacity-20 pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-xs font-mono tracking-widest text-primary font-bold uppercase mb-3">
            02 / Skill Intelligence
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            The Technology Ecosystem
          </h3>
          <p className="text-muted mt-4 text-base md:text-lg">
            An overview of my mathematical, analytics, and software engineering capabilities. Interactive controls allow you to filter categories.
          </p>
        </div>

        {/* Dashboard Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Side: Category Selectors */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex-shrink-0 flex items-center space-x-3 text-left px-5 py-4 rounded-xl border transition-all duration-300 w-[200px] lg:w-full ${
                    isActive
                      ? "bg-surface border-primary text-foreground shadow-glow-primary"
                      : "bg-surface/40 hover:bg-surface border-surface-border/50 text-muted hover:text-foreground"
                  }`}
                >
                  <span className={`${isActive ? "text-primary" : "text-muted"}`}>{cat.icon}</span>
                  <div>
                    <div className="font-bold text-sm">{cat.name}</div>
                    <div className="text-[10px] text-muted line-clamp-1 mt-0.5">{cat.description}</div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Middle: Detailed Skill List */}
          <div className="lg:col-span-5 glass-panel rounded-2xl p-6 md:p-8 flex flex-col justify-between border-surface-border/60">
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-mono text-primary font-bold tracking-widest uppercase">
                  Category Profile
                </span>
                <h4 className="text-xl font-bold mt-1">{currentCategoryObj.name}</h4>
                <p className="text-xs text-muted mt-1 leading-relaxed">{currentCategoryObj.description}</p>
              </div>

              {/* Skill Bars */}
              <div className="space-y-5">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCategory}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    {currentCategoryObj.skills.map((skill, index) => (
                      <div key={index} className="space-y-1">
                        <div className="flex justify-between text-xs font-semibold">
                          <span className="text-foreground/90">{skill.name}</span>
                          <span className="font-mono text-primary">{skill.level}%</span>
                        </div>
                        
                        {/* Custom Animated Progress Bar */}
                        <div className="w-full bg-surface-secondary/70 h-1.5 rounded-full overflow-hidden border border-surface-border/20">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="bg-gradient-to-r from-primary to-secondary h-full rounded-full"
                          />
                        </div>
                        
                        <p className="text-[10px] text-muted leading-relaxed pl-1">{skill.desc}</p>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Right Side: Recharts Radar Visualizer */}
          <div className="lg:col-span-3 glass-panel rounded-2xl p-6 border-surface-border/60 flex flex-col items-center justify-center min-h-[300px] md:min-h-0 relative">
            <span className="absolute top-4 left-4 text-[9px] font-mono text-muted tracking-widest uppercase">
              Distribution Engine
            </span>
            
            <div className="w-full h-[240px] mt-4 flex items-center justify-center">
              {mounted ? (
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="75%" data={radarData}>
                    <PolarGrid stroke="rgba(var(--surface-border), 0.6)" />
                    <PolarAngleAxis
                      dataKey="subject"
                      tick={{ fill: "rgba(var(--foreground), 0.7)", fontSize: 10, fontFamily: "Geist Mono" }}
                    />
                    <PolarRadiusAxis
                      angle={30}
                      domain={[0, 100]}
                      tick={{ fill: "rgba(var(--muted), 0.6)", fontSize: 8 }}
                      axisLine={false}
                    />
                    <Radar
                      name={currentCategoryObj.name}
                      dataKey="A"
                      stroke="rgb(var(--primary))"
                      fill="rgb(var(--primary))"
                      fillOpacity={0.25}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              ) : (
                <div className="text-muted font-mono text-xs">Loading Vector Space...</div>
              )}
            </div>

            <div className="mt-4 flex items-center space-x-2 text-[10px] font-mono text-muted bg-surface-secondary/40 px-3 py-1.5 rounded border border-surface-border/20">
              <ShieldAlert className="w-3.5 h-3.5 text-secondary animate-pulse" />
              <span>Optimized metric mapping</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
