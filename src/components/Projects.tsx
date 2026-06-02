"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Sparkles, TrendingUp, Cpu, Server, LineChart, Code2, Play, CheckCircle, Database } from "lucide-react";

interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  status: string;
  overview: string;
  problem: string;
  approach: string;
  techStack: string[];
  metrics: { label: string; value: string }[];
  lessons: string;
  future: string;
  architecture: React.ReactNode;
}

export default function Projects() {
  const [activeProject, setActiveProject] = useState("twitter-nlp");
  const [inputText, setInputText] = useState("Exploring machine learning models for predictive analytics.");
  const [simulatedSentiment, setSimulatedSentiment] = useState({ score: 84.5, label: "POSITIVE", toxicity: "0.2%" });

  const runSimulatedNLP = (text: string) => {
    setInputText(text);
    // Simple mock NLP processing based on word hints
    const lower = text.toLowerCase();
    let score = 50 + Math.random() * 20;
    let label = "NEUTRAL";
    let toxicity = "0.5%";

    if (lower.includes("love") || lower.includes("great") || lower.includes("awesome") || lower.includes("intelligent") || lower.includes("predictive")) {
      score = 80 + Math.random() * 18;
      label = "POSITIVE";
    } else if (lower.includes("bad") || lower.includes("toxic") || lower.includes("slow") || lower.includes("fail") || lower.includes("hate")) {
      score = 10 + Math.random() * 20;
      label = "NEGATIVE";
      toxicity = "65.4%";
    }
    
    setSimulatedSentiment({
      score: Math.min(100, Math.max(0, parseFloat(score.toFixed(1)))),
      label,
      toxicity,
    });
  };

  const caseStudies: CaseStudy[] = [
    {
      id: "twitter-nlp",
      title: "Twitter Sentiment Analysis Platform",
      subtitle: "NLP-powered real-time tweet evaluation system",
      category: "Natural Language Processing",
      status: "Featured Product",
      overview: "An advanced, end-to-end NLP classifier collecting, cleaning, and analyzing tweets to detect sentiment polarity, fine-grained emotions, and profanity toxicity.",
      problem: "Brand managers struggle to monitor negative sentiment spikes, toxic content, and customer dissatisfaction on social media in real time. Standard APIs do not catch semantic tone or toxicity.",
      approach: "Built a double-tiered NLP pipeline. First, VADER extracts raw sentiment scores. Next, a fine-tuned RoBERTa transformer layer maps deep contextual syntax. A Detoxify model flags aggressive profanities.",
      techStack: ["Python", "Flask", "Streamlit", "RoBERTa", "VADER", "Detoxify", "Twitter API"],
      metrics: [
        { label: "Classification Accuracy", value: "95.7%" },
        { label: "Inference Latency", value: "48ms" },
        { label: "Toxicity Catch Rate", value: "98.2%" },
      ],
      lessons: "Transformer models have high computational needs. To solve this, we decoupled the preprocessing pipelines and cached results using redis blocks.",
      future: "Transition model layers into compact ONNX files to reduce cloud server costs and lower container cold-start delay.",
      architecture: (
        <div className="border border-surface-border/40 bg-surface-secondary/20 rounded-xl p-4 font-mono text-[10px] text-muted space-y-3">
          <div className="flex items-center space-x-2 text-primary font-bold">
            <Server className="w-3.5 h-3.5" />
            <span>PIPELINE FLOW</span>
          </div>
          <div className="flex flex-col space-y-1.5 pl-2 border-l border-surface-border">
            <div>1. Stream API -&gt; Extract unstructured JSON text fields.</div>
            <div>2. Tokenizer -&gt; Preprocess emojis, handles, and special symbols.</div>
            <div>3. Sentiment Core (RoBERTa + VADER) -&gt; Score polarity vectors.</div>
            <div>4. Toxicity Shield (Detoxify) -&gt; Extract severe toxicity scores.</div>
            <div>5. Flask Gateway -&gt; Deliver stats to React UI graphs.</div>
          </div>
        </div>
      ),
    },
    {
      id: "jarvis-ai",
      title: "Jarvis AI Assistant",
      subtitle: "Voice-activated AI interface & personal operating system",
      category: "Artificial Intelligence & Automation",
      status: "Production Ready",
      overview: "A custom voice-activated personal developer assistant that automates workspace tasks, schedules triggers, and answers contextual tech queries.",
      problem: "Constantly toggling between browser windows, terminals, and API docks degrades development flow. Existing virtual assistants lack code awareness and localized custom hooks.",
      approach: "Engineered a Python-based audio listener running continuous Speech-To-Text processing. A customized NLP layer translates commands to actions (run build, search stackoverflow, read email) and triggers TTS vocal responses.",
      techStack: ["SpeechRecognition", "Pyttsx3", "Python API", "OS Hooks", "GPT-4 Integrations"],
      metrics: [
        { label: "Speech Translation Accuracy", value: "97.4%" },
        { label: "Command Processing Latency", value: "120ms" },
        { label: "Automated Workflows", value: "15+ Hooks" },
      ],
      lessons: "Ambient room echoes disrupt wake-word patterns. Implementing a dynamic signal noise baseline calculation before triggering audio captures greatly improved command reliability.",
      future: "Deploy a lightweight LLM locally on device to handle basic scheduling commands offline without requiring cloud API connections.",
      architecture: (
        <div className="border border-surface-border/40 bg-surface-secondary/20 rounded-xl p-4 font-mono text-[10px] text-muted space-y-3">
          <div className="flex items-center space-x-2 text-secondary font-bold">
            <Cpu className="w-3.5 h-3.5" />
            <span>AI SYSTEM ARCHITECTURE</span>
          </div>
          <div className="flex flex-col space-y-1.5 pl-2 border-l border-surface-border">
            <div>1. Audio Input -&gt; Calibrate noise threshold -&gt; STT Engine.</div>
            <div>2. Intent Router -&gt; Parse text semantics via local keyword map.</div>
            <div>3. Action Layer -&gt; If local, trigger OS script. If query, route to LLM API.</div>
            <div>4. Response Loop -&gt; Pipe text payload to Pyttsx3 speech interface.</div>
          </div>
        </div>
      ),
    },
    {
      id: "churn-prediction",
      title: "Customer Churn Prediction",
      subtitle: "Enterprise analytics forecasting and customer risk profiling",
      category: "Machine Learning & Analytics",
      status: "Enterprise Case Study",
      overview: "An enterprise-grade classification model that predicts subscriber churn probability based on historical usage metrics and contract details.",
      problem: "High attrition rates diminish customer lifetime value. Sales teams require proactive alerts detailing *why* specific subscribers are at risk of leaving.",
      approach: "Analyzed telecommunication databases using Pandas. Performed robust feature scaling, managed target imbalances using SMOTE, and trained an XGBoost classifier with custom hyperparameter search.",
      techStack: ["Python", "Scikit-Learn", "XGBoost", "SMOTE", "Power BI", "Pandas"],
      metrics: [
        { label: "AUC-ROC Score", value: "0.923" },
        { label: "Recall / Sensitivity", value: "89.4%" },
        { label: "Preventable Churn Drop", value: "14.2%" },
      ],
      lessons: "Simple classification thresholds produce too many false alarms. Creating customer risk bands (Low, Mid, Critical) allowed account reps to target retention actions effectively.",
      future: "Integrate SHAP values directly into the account rep interface to explain the key features driving the churn score for each individual customer.",
      architecture: (
        <div className="border border-surface-border/40 bg-surface-secondary/20 rounded-xl p-4 font-mono text-[10px] text-muted space-y-3">
          <div className="flex items-center space-x-2 text-accent font-bold">
            <LineChart className="w-3.5 h-3.5" />
            <span>ANALYTICS PIPELINE</span>
          </div>
          <div className="flex flex-col space-y-1.5 pl-2 border-l border-surface-border">
            <div>1. Raw Data Extraction &gt; Clean missing fields &gt; Scale numeric inputs.</div>
            <div>2. Imbalance Correction &gt; Over-sample minority target rows using SMOTE.</div>
            <div>3. Classifier Training &gt; Hyperparameter tune XGBoost via Grid Search.</div>
            <div>4. Evaluation &gt; Plot confusion matrix &gt; Export probability scores.</div>
          </div>
        </div>
      ),
    },
    {
      id: "sales-intelligence",
      title: "Sales Intelligence Dashboard",
      subtitle: "Executive forecasting and business trend monitoring",
      category: "Analytics & Business Intelligence",
      status: "Completed Project",
      overview: "An interactive sales metrics platform delivering detailed insights on revenue trends, customer lifetime value, and visual KPIs.",
      problem: "Executive teams rely on unstructured spreadsheets, causing delays in discovering product category revenue trends and localized market drops.",
      approach: "Engineered star-schema SQL databases, connected visual reporting tables via Power BI, and constructed custom measures using DAX queries to chart cumulative sales goals.",
      techStack: ["Power BI", "SQL", "Excel", "Data Modeling", "DAX Formulas"],
      metrics: [
        { label: "Data Load Latency Drop", value: "60%" },
        { label: "Report Load Speed", value: "1.4s" },
        { label: "Target Variance Accuracy", value: "96.5%" },
      ],
      lessons: "Unstructured tables slow down Power BI dashboards. Organizing data into facts and dimension tables reduced system load times significantly.",
      future: "Integrate automated email distribution tasks to send weekly metric PDFs directly to executives.",
      architecture: (
        <div className="border border-surface-border/40 bg-surface-secondary/20 rounded-xl p-4 font-mono text-[10px] text-muted space-y-3">
          <div className="flex items-center space-x-2 text-green-400 font-bold">
            <Database className="w-3.5 h-3.5" />
            <span>BI DATA FLOW</span>
          </div>
          <div className="flex flex-col space-y-1.5 pl-2 border-l border-surface-border">
            <div>1. SQL Server &gt; Extract daily sales records.</div>
            <div>2. Power Query &gt; Format dates, filter tests, set schema types.</div>
            <div>3. DAX Engine &gt; Calculate rolling averages and metrics.</div>
            <div>4. UI Dashboard &gt; Render responsive bar charts and maps.</div>
          </div>
        </div>
      ),
    },
  ];

  const currentProject = caseStudies.find((p) => p.id === activeProject) || caseStudies[0];

  return (
    <section id="projects" className="relative py-20 md:py-32 px-4">
      {/* Background gradients */}
      <div className="absolute top-1/4 right-10 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl glow-blur" />
      <div className="absolute bottom-1/4 left-10 w-[350px] h-[350px] bg-secondary/5 rounded-full blur-3xl glow-blur" />

      <div className="max-w-6xl w-full mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-xs font-mono tracking-widest text-primary font-bold uppercase mb-3">
            04 / CASE STUDIES
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Production Products & ML Systems
          </h3>
          <p className="text-muted mt-4 text-base md:text-lg">
            I don&apos;t just build simple layouts. Below are full engineering case studies detailing actual problems, system workflows, and metric outcomes.
          </p>
        </div>

        {/* Project Selector Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {caseStudies.map((p) => (
            <button
              key={p.id}
              onClick={() => setActiveProject(p.id)}
              className={`px-5 py-2.5 rounded-xl border text-xs md:text-sm font-semibold transition-all duration-300 ${
                activeProject === p.id
                  ? "bg-primary border-primary text-white shadow-glow-primary"
                  : "bg-surface hover:bg-surface-secondary border-surface-border text-muted hover:text-foreground"
              }`}
            >
              {p.title}
            </button>
          ))}
        </div>

        {/* Selected Project Case Study Layout */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
          >
            {/* Left Case Study Info Column (Col Span 7) */}
            <div className="lg:col-span-7 glass-panel rounded-2xl p-6 md:p-8 border-surface-border/60 flex flex-col justify-between space-y-6">
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono bg-primary/10 text-primary border border-primary/20 px-2.5 py-1 rounded">
                    {currentProject.category}
                  </span>
                  <span className="text-[10px] font-mono text-green-400 flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse inline-block" />
                    <span>{currentProject.status}</span>
                  </span>
                </div>

                <h4 className="text-2xl md:text-3xl font-extrabold text-foreground">{currentProject.title}</h4>
                <p className="text-sm text-foreground/90 font-medium leading-relaxed">{currentProject.overview}</p>
                
                {/* Accordion Style Breakdown */}
                <div className="space-y-4 pt-2">
                  <div className="space-y-1.5">
                    <div className="text-xs font-bold uppercase tracking-wider text-foreground flex items-center space-x-1.5">
                      <span className="w-1 h-3 bg-red-500 rounded" />
                      <span>THE BUSINESS PROBLEM</span>
                    </div>
                    <p className="text-xs text-muted leading-relaxed pl-2.5">{currentProject.problem}</p>
                  </div>

                  <div className="space-y-1.5">
                    <div className="text-xs font-bold uppercase tracking-wider text-foreground flex items-center space-x-1.5">
                      <span className="w-1 h-3 bg-primary rounded" />
                      <span>THE TECHNICAL APPROACH</span>
                    </div>
                    <p className="text-xs text-muted leading-relaxed pl-2.5">{currentProject.approach}</p>
                  </div>
                </div>
              </div>

              {/* Technologies Applied */}
              <div className="border-t border-surface-border/30 pt-4 mt-6">
                <div className="text-[10px] font-mono text-muted tracking-widest uppercase mb-2">Technologies Applied</div>
                <div className="flex flex-wrap gap-1.5">
                  {currentProject.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-surface-secondary text-[10px] text-foreground/90 font-mono px-2.5 py-1 rounded border border-surface-border/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Architecture & Interactive Sandbox Column (Col Span 5) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              {/* Core System Architecture Visualizer */}
              <div className="glass-panel rounded-2xl p-6 border-surface-border/60 flex-1 space-y-4">
                <span className="text-[9px] font-mono text-muted tracking-widest uppercase">System Topology</span>
                {currentProject.architecture}
              </div>

              {/* Live Sandbox Interactive Playground */}
              <div className="glass-panel rounded-2xl p-6 border-surface-border/60 space-y-4 relative overflow-hidden">
                <span className="text-[9px] font-mono text-muted tracking-widest uppercase block">
                  Model Sandbox / Live Simulation
                </span>

                {/* Twitter Sentiment playground */}
                {currentProject.id === "twitter-nlp" && (
                  <div className="space-y-3 pt-1">
                    <div className="text-[10px] text-muted">Enter social media text to run inference parsing:</div>
                    <textarea
                      value={inputText}
                      onChange={(e) => runSimulatedNLP(e.target.value)}
                      className="w-full bg-surface-secondary text-xs text-foreground/90 p-2.5 rounded-lg border border-surface-border focus:border-primary focus:outline-none font-sans"
                      rows={2}
                    />
                    <div className="bg-surface-secondary/40 border border-surface-border/30 rounded p-2.5 space-y-2">
                      <div className="flex justify-between items-center text-[10px] font-mono">
                        <span className="text-muted">Detected Polarity:</span>
                        <span className={`font-bold ${simulatedSentiment.label === "POSITIVE" ? "text-green-400" : simulatedSentiment.label === "NEGATIVE" ? "text-red-400" : "text-muted"}`}>
                          {simulatedSentiment.label}
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-[10px] font-mono">
                        <span className="text-muted">Confidence Score:</span>
                        <span className="text-primary font-bold">{simulatedSentiment.score}%</span>
                      </div>
                      <div className="flex justify-between items-center text-[10px] font-mono">
                        <span className="text-muted">Toxicity Hazard Level:</span>
                        <span className="text-accent font-bold">{simulatedSentiment.toxicity}</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Jarvis Audio wave playground */}
                {currentProject.id === "jarvis-ai" && (
                  <div className="flex flex-col items-center justify-center py-6 space-y-4">
                    {/* Animated waveform bars */}
                    <div className="flex items-center space-x-1.5 h-10">
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((bar) => (
                        <motion.span
                          key={bar}
                          animate={{ height: [12, 32, 12] }}
                          transition={{
                            duration: 0.8,
                            repeat: Infinity,
                            delay: bar * 0.08,
                            ease: "easeInOut",
                          }}
                          className="w-1.5 bg-gradient-to-t from-primary to-secondary rounded-full"
                          style={{ height: "16px" }}
                        />
                      ))}
                    </div>
                    <div className="text-center font-mono text-[10px] text-muted">
                      <div>Active voice trigger listener: [&quot;Jarvis&quot;]</div>
                      <div className="text-secondary font-bold mt-1">Status: Listening to inputs...</div>
                    </div>
                  </div>
                )}

                {/* Customer Churn predictive stats */}
                {currentProject.id === "churn-prediction" && (
                  <div className="space-y-3 font-mono text-[10px]">
                    <div className="text-muted mb-2">Simulated User profile risks:</div>
                    <div className="space-y-2">
                      <div className="bg-surface-secondary/40 border border-surface-border/20 p-2 rounded">
                        <div className="flex justify-between text-[11px] font-bold">
                          <span>User #984 (Contract Expired)</span>
                          <span className="text-red-400">Churn Risk: 92.4%</span>
                        </div>
                        <p className="text-[9px] text-muted mt-0.5">Top causes: No auto-renew set, zero usage drops.</p>
                      </div>

                      <div className="bg-surface-secondary/40 border border-surface-border/20 p-2 rounded">
                        <div className="flex justify-between text-[11px] font-bold">
                          <span>User #124 (AutoPay set)</span>
                          <span className="text-green-400">Churn Risk: 4.8%</span>
                        </div>
                        <p className="text-[9px] text-muted mt-0.5">Top causes: Support tick resolves, active mobile count.</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Sales forecast Power BI placeholder dashboard */}
                {currentProject.id === "sales-intelligence" && (
                  <div className="space-y-3 text-[10px]">
                    <div className="text-muted">Simulated Revenue forecasting model outputs:</div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="bg-surface-secondary border border-surface-border/30 p-2 rounded text-center">
                        <div className="text-muted text-[8px] uppercase">Q3 Target</div>
                        <div className="font-bold text-foreground text-xs font-mono">$1.45M</div>
                      </div>
                      <div className="bg-surface-secondary border border-surface-border/30 p-2 rounded text-center">
                        <div className="text-muted text-[8px] uppercase">Forecast</div>
                        <div className="font-bold text-primary text-xs font-mono">$1.52M</div>
                      </div>
                      <div className="bg-surface-secondary border border-surface-border/30 p-2 rounded text-center">
                        <div className="text-muted text-[8px] uppercase">Variance</div>
                        <div className="font-bold text-green-400 text-xs font-mono">+4.8%</div>
                      </div>
                    </div>
                    <div className="w-full bg-surface-secondary/50 h-[60px] rounded border border-surface-border/20 flex flex-col justify-end p-2 overflow-hidden relative">
                      <div className="absolute inset-0 flex items-center justify-center text-[9px] font-mono text-muted/30">
                        Trendline Matrix
                      </div>
                      <div className="flex justify-between items-end h-full">
                        <span className="bg-primary/20 w-3.5 h-[30%]" />
                        <span className="bg-primary/30 w-3.5 h-[45%]" />
                        <span className="bg-primary/45 w-3.5 h-[60%]" />
                        <span className="bg-primary/60 w-3.5 h-[50%]" />
                        <span className="bg-primary/80 w-3.5 h-[75%]" />
                        <span className="bg-secondary/90 w-3.5 h-[90%]" />
                      </div>
                    </div>
                  </div>
                )}

              </div>

              {/* Performance Metrics Cards */}
              <div className="grid grid-cols-3 gap-4">
                {currentProject.metrics.map((metric, i) => (
                  <div
                    key={i}
                    className="glass-panel border-surface-border/60 rounded-xl p-3 text-center space-y-1"
                  >
                    <div className="text-xs font-bold text-gradient-primary font-mono">{metric.value}</div>
                    <div className="text-[8px] text-muted leading-tight uppercase tracking-wider">{metric.label}</div>
                  </div>
                ))}
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
