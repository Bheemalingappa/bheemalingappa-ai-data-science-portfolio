"use client";

import React from "react";
import { Code2, Library, BarChart3, Brain, Languages, PieChart, Database, Terminal } from "lucide-react";

interface SkillSet {
  category: string;
  icon: React.ReactNode;
  tools: string[];
}

export default function MinimalSkills() {
  const skills: SkillSet[] = [
    {
      category: "Programming Languages",
      icon: <Code2 className="w-4 h-4 text-primary" />,
      tools: ["Python", "SQL"],
    },
    {
      category: "Python Libraries",
      icon: <Library className="w-4 h-4 text-secondary" />,
      tools: ["Pandas", "NumPy", "Scikit-Learn", "Matplotlib", "Seaborn", "Plotly", "NLTK", "Transformers"],
    },
    {
      category: "Data Analytics",
      icon: <BarChart3 className="w-4 h-4 text-accent" />,
      tools: ["Data Cleaning", "Data Wrangling", "Exploratory Data Analysis (EDA)", "Statistical Analysis", "KPI Analysis"],
    },
    {
      category: "Machine Learning",
      icon: <Brain className="w-4 h-4 text-primary" />,
      tools: ["Regression", "Classification", "Clustering", "Feature Engineering", "Model Evaluation"],
    },
    {
      category: "Natural Language Processing",
      icon: <Languages className="w-4 h-4 text-secondary" />,
      tools: ["Sentiment Analysis", "Text Preprocessing", "Tokenization", "Transformer Models"],
    },
    {
      category: "Visualization Tools",
      icon: <PieChart className="w-4 h-4 text-accent" />,
      tools: ["Power BI", "Tableau", "Plotly", "Matplotlib", "Seaborn"],
    },
    {
      category: "Databases",
      icon: <Database className="w-4 h-4 text-primary" />,
      tools: ["MySQL", "NoSQL"],
    },
    {
      category: "Tools & Platforms",
      icon: <Terminal className="w-4 h-4 text-secondary" />,
      tools: ["Git", "GitHub", "Streamlit", "Flask", "Jupyter Notebook", "VS Code", "Google Colab"],
    },
  ];

  return (
    <section id="skills" className="relative py-20 bg-surface/10">
      <div className="max-w-4xl w-full mx-auto space-y-16">
        {/* Section Title */}
        <div className="text-center">
          <h2 className="text-xs font-mono tracking-widest text-primary font-bold uppercase mb-2">
            02 / Skills
          </h2>
          <h3 className="text-3xl font-extrabold tracking-tight">Core Competencies</h3>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="glass-panel border-surface-border/50 rounded-2xl p-5 hover:border-primary/30 transition-all duration-300 space-y-3"
            >
              <div className="flex items-center space-x-2 pb-2 border-b border-surface-border/20">
                {skill.icon}
                <h4 className="text-sm font-bold text-foreground">{skill.category}</h4>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {skill.tools.map((tool, tIdx) => (
                  <span
                    key={tIdx}
                    className="bg-surface-secondary/40 text-[10px] text-muted font-mono px-2 py-1 rounded border border-surface-border/35"
                  >
                    {tool}
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
