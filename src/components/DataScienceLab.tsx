"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";
import { Brain, Sliders, Play, Award, RotateCcw, LineChart } from "lucide-react";

export default function DataScienceLab() {
  const [activeTab, setActiveTab] = useState("correlation");
  const [threshold, setThreshold] = useState(0.4);
  const [heatmapCell, setHeatmapCell] = useState<{ x: string; y: string; val: number } | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Correlation matrix features and values
  const features = ["Age", "Income", "Active usage", "Support calls", "Churn"];
  const matrixData: { [key: string]: { [key: string]: number } } = {
    "Age": { "Age": 1.0, "Income": 0.65, "Active usage": -0.15, "Support calls": 0.08, "Churn": 0.12 },
    "Income": { "Age": 0.65, "Income": 1.0, "Active usage": 0.02, "Support calls": -0.05, "Churn": -0.08 },
    "Active usage": { "Age": -0.15, "Income": 0.02, "Active usage": 1.0, "Support calls": -0.45, "Churn": -0.58 },
    "Support calls": { "Age": 0.08, "Income": -0.05, "Active usage": -0.45, "Support calls": 1.0, "Churn": 0.68 },
    "Churn": { "Age": 0.12, "Income": -0.08, "Active usage": -0.58, "Support calls": 0.68, "Churn": 1.0 }
  };

  const getHeatmapColor = (val: number) => {
    if (val === 1) return "bg-primary/90 text-white";
    if (val > 0.5) return "bg-primary/60 text-foreground";
    if (val > 0) return "bg-primary/20 text-foreground";
    if (val > -0.2) return "bg-surface-secondary/60 text-muted";
    if (val > -0.5) return "bg-red-500/20 text-foreground border border-red-500/10";
    return "bg-red-500/40 text-foreground border border-red-500/25";
  };

  // ROC threshold calculations
  // Simulate 100 positive cases and 100 negative cases
  const totalPos = 100;
  const totalNeg = 100;

  // Let TPR (Recall) decrease as threshold increases. A realistic curve.
  const tpr = Math.max(0, Math.min(100, Math.round(100 * (1 - Math.pow(threshold, 2)))));
  // Let FPR decrease faster as threshold increases
  const fpr = Math.max(0, Math.min(100, Math.round(100 * Math.pow(1 - threshold, 3.2))));

  const tp = tpr;
  const fn = totalPos - tp;
  const fp = fpr;
  const tn = totalNeg - fp;

  const precision = tp + fp > 0 ? ((tp / (tp + fp)) * 100).toFixed(1) : "0.0";
  const f1 = parseFloat(precision) + tpr > 0 
    ? ((2 * (parseFloat(precision) * tpr)) / (parseFloat(precision) + tpr)).toFixed(1)
    : "0.0";

  // Model comparison benchmark data
  const modelComparison = [
    { name: "Logistic Reg", Precision: 78, Recall: 72, F1: 75 },
    { name: "Random Forest", Precision: 88, Recall: 84, F1: 86 },
    { name: "XGBoost Core", Precision: 94, Recall: 92, F1: 93 },
  ];

  return (
    <section id="data-science-lab" className="relative py-20 md:py-32 px-4 bg-surface/5">
      
      {/* Background radial blurs */}
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-accent/5 rounded-full blur-3xl glow-blur" />
      <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] bg-primary/5 rounded-full blur-3xl glow-blur" />
      <div className="absolute inset-0 grid-dots opacity-20 pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono tracking-widest text-primary font-bold uppercase mb-3">
            05 / Simulation
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            The Data Science Lab
          </h3>
          <p className="text-muted mt-4 text-base md:text-lg">
            Interact with live model artifacts. Adjust threshold parameters to see how confusion metrics, ROC boundaries, and model evaluations update in real time.
          </p>
        </div>

        {/* Tab Selector Controls */}
        <div className="flex justify-center border-b border-surface-border/50 mb-12 max-w-lg mx-auto">
          <button
            onClick={() => setActiveTab("correlation")}
            className={`flex-1 pb-3 text-sm font-semibold border-b-2 transition-all duration-300 ${
              activeTab === "correlation"
                ? "border-primary text-foreground"
                : "border-transparent text-muted hover:text-foreground"
            }`}
          >
            Correlation Heatmap
          </button>
          <button
            onClick={() => setActiveTab("roc-matrix")}
            className={`flex-1 pb-3 text-sm font-semibold border-b-2 transition-all duration-300 ${
              activeTab === "roc-matrix"
                ? "border-primary text-foreground"
                : "border-transparent text-muted hover:text-foreground"
            }`}
          >
            ROC & Confusion Matrix
          </button>
          <button
            onClick={() => setActiveTab("benchmarks")}
            className={`flex-1 pb-3 text-sm font-semibold border-b-2 transition-all duration-300 ${
              activeTab === "benchmarks"
                ? "border-primary text-foreground"
                : "border-transparent text-muted hover:text-foreground"
            }`}
          >
            Model Benchmarks
          </button>
        </div>

        {/* Dynamic Display Panels */}
        <div className="glass-panel rounded-2xl p-6 md:p-8 border-surface-border/60 min-h-[400px] flex flex-col justify-between">
          
          {/* TAB 1: Heatmap */}
          {activeTab === "correlation" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left explanation block */}
              <div className="lg:col-span-4 space-y-4">
                <div className="flex items-center space-x-2 text-primary">
                  <Brain className="w-5 h-5" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider">Pearson Correlation</span>
                </div>
                <h4 className="text-xl font-bold">Feature Interactions</h4>
                <p className="text-xs text-muted leading-relaxed">
                  In machine learning, target variables correlate strongly with user behavior. Hover or click any box in the matrix to view the numeric coefficient and its semantic interpretation.
                </p>
                <div className="bg-surface-secondary/40 border border-surface-border/30 rounded p-3 text-xs space-y-2 mt-2">
                  {heatmapCell ? (
                    <>
                      <div className="font-bold text-foreground">
                        {heatmapCell.x} vs {heatmapCell.y}
                      </div>
                      <div className="font-mono text-primary font-bold">
                        Coefficient: {heatmapCell.val.toFixed(2)}
                      </div>
                      <p className="text-[10px] text-muted leading-tight">
                        {heatmapCell.val === 1.0 && "Perfect positive correlation. Identical features."}
                        {heatmapCell.val > 0.5 && heatmapCell.val < 1.0 && "Strong positive correlation. When one variable increases, the other increases significantly."}
                        {heatmapCell.val > 0 && heatmapCell.val <= 0.5 && "Weak positive correlation. Minor directional coupling."}
                        {heatmapCell.val < 0 && heatmapCell.val >= -0.2 && "Very weak negative correlation. Almost zero coupling."}
                        {heatmapCell.val < -0.2 && "Strong negative correlation. When usage increases, user churn drops significantly."}
                      </p>
                    </>
                  ) : (
                    <div className="text-muted italic">Hover or click a matrix cell block.</div>
                  )}
                </div>
              </div>

              {/* Right Matrix Blocks Grid */}
              <div className="lg:col-span-8 flex flex-col items-center justify-center">
                <div className="overflow-x-auto w-full flex justify-center pb-2">
                  <div className="grid gap-1.5" style={{ gridTemplateColumns: `repeat(${features.length + 1}, minmax(65px, 1fr))` }}>
                    
                    {/* Top corner empty block */}
                    <div />
                    
                    {/* Columns headers */}
                    {features.map((f, i) => (
                      <div key={i} className="text-[9px] font-mono font-bold text-muted text-center flex items-center justify-center p-1.5 bg-surface-secondary/40 rounded border border-surface-border/10 select-none">
                        {f}
                      </div>
                    ))}

                    {/* Rows */}
                    {features.map((rowFeature, rowIdx) => (
                      <React.Fragment key={rowIdx}>
                        {/* Row header */}
                        <div className="text-[9px] font-mono font-bold text-muted flex items-center justify-start p-1.5 bg-surface-secondary/40 rounded border border-surface-border/10 select-none">
                          {rowFeature}
                        </div>
                        {/* Heatmap Cell Values */}
                        {features.map((colFeature, colIdx) => {
                          const val = matrixData[rowFeature][colFeature];
                          return (
                            <button
                              key={colIdx}
                              onMouseEnter={() => setHeatmapCell({ x: rowFeature, y: colFeature, val })}
                              onClick={() => setHeatmapCell({ x: rowFeature, y: colFeature, val })}
                              className={`h-11 md:h-12 w-full rounded flex flex-col items-center justify-center text-xs font-mono font-bold transition-all duration-200 transform hover:scale-[1.05] border border-surface-border/20 ${getHeatmapColor(val)}`}
                            >
                              <span>{val > 0 && val !== 1 ? `+${val.toFixed(2)}` : val.toFixed(2)}</span>
                            </button>
                          );
                        })}
                      </React.Fragment>
                    ))}

                  </div>
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: ROC & Confusion Matrix */}
          {activeTab === "roc-matrix" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Left ROC controls & Math summary */}
              <div className="lg:col-span-4 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-secondary">
                    <Sliders className="w-5 h-5 animate-pulse" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider">Classification Threshold</span>
                  </div>
                  <h4 className="text-xl font-bold">Predictive Risk Tuning</h4>
                  <p className="text-xs text-muted leading-relaxed">
                    Adjusting the prediction probability cutoff determines when a user is flagged as a churn threat. Slide this threshold to recalculate model trade-offs dynamically.
                  </p>
                </div>

                {/* Slider */}
                <div className="space-y-2 pt-2 bg-surface-secondary/30 p-4 rounded-xl border border-surface-border/20">
                  <div className="flex justify-between text-xs font-mono font-bold">
                    <span>Cutoff Threshold:</span>
                    <span className="text-primary">{threshold.toFixed(2)}</span>
                  </div>
                  <input
                    type="range"
                    min="0.0"
                    max="1.0"
                    step="0.05"
                    value={threshold}
                    onChange={(e) => setThreshold(parseFloat(e.target.value))}
                    className="w-full h-1.5 bg-surface-secondary rounded-lg appearance-none cursor-pointer accent-primary border border-surface-border/30"
                  />
                  <div className="flex justify-between text-[9px] font-mono text-muted">
                    <span>0.00 (Flags All Churn)</span>
                    <span>1.00 (Flags Zero Churn)</span>
                  </div>
                </div>

                {/* Dynamic Calculated Stats */}
                <div className="grid grid-cols-2 gap-3 mt-2">
                  <div className="p-3 bg-surface-secondary/40 border border-surface-border/20 rounded-xl text-center">
                    <div className="text-muted text-[8px] uppercase font-bold tracking-wider">Precision Score</div>
                    <div className="text-base font-bold font-mono text-foreground mt-0.5">{precision}%</div>
                  </div>
                  <div className="p-3 bg-surface-secondary/40 border border-surface-border/20 rounded-xl text-center">
                    <div className="text-muted text-[8px] uppercase font-bold tracking-wider">F1 Performance</div>
                    <div className="text-base font-bold font-mono text-secondary mt-0.5">{f1}%</div>
                  </div>
                </div>
              </div>

              {/* Middle Confusion Matrix Block (Col Span 4) */}
              <div className="lg:col-span-4 flex flex-col justify-center items-center">
                <span className="text-[10px] font-mono text-muted uppercase tracking-widest mb-4">
                  RECALCULATED CONFUSION MATRIX
                </span>
                
                <div className="grid grid-cols-2 gap-2 w-full max-w-[280px]">
                  
                  {/* True Positive */}
                  <div className="bg-success/10 border border-success/30 rounded-xl p-4 text-center space-y-1 relative">
                    <span className="absolute top-1.5 left-2 text-[8px] font-mono text-success uppercase font-semibold">True Pos (TP)</span>
                    <div className="text-2xl font-bold font-mono text-success pt-2">{tp}</div>
                    <p className="text-[8px] text-muted leading-tight">Correctly predicted as risk.</p>
                  </div>

                  {/* False Positive */}
                  <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-center space-y-1 relative">
                    <span className="absolute top-1.5 left-2 text-[8px] font-mono text-red-400 uppercase font-semibold">False Pos (FP)</span>
                    <div className="text-2xl font-bold font-mono text-red-400 pt-2">{fp}</div>
                    <p className="text-[8px] text-muted leading-tight">False alarms (normal users).</p>
                  </div>

                  {/* False Negative */}
                  <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-center space-y-1 relative">
                    <span className="absolute top-1.5 left-2 text-[8px] font-mono text-red-400 uppercase font-semibold">False Neg (FN)</span>
                    <div className="text-2xl font-bold font-mono text-red-400 pt-2">{fn}</div>
                    <p className="text-[8px] text-muted leading-tight">Missed risks leaving.</p>
                  </div>

                  {/* True Negative */}
                  <div className="bg-success/10 border border-success/30 rounded-xl p-4 text-center space-y-1 relative">
                    <span className="absolute top-1.5 left-2 text-[8px] font-mono text-success uppercase font-semibold">True Neg (TN)</span>
                    <div className="text-2xl font-bold font-mono text-success pt-2">{tn}</div>
                    <p className="text-[8px] text-muted leading-tight">Correctly flagged normal.</p>
                  </div>

                </div>
              </div>

              {/* Right ROC Curve Diagram block (Col Span 4) */}
              <div className="lg:col-span-4 flex flex-col justify-center items-center border-t lg:border-t-0 lg:border-l border-surface-border/30 pt-6 lg:pt-0 lg:pl-6">
                <span className="text-[10px] font-mono text-muted uppercase tracking-widest mb-4 flex items-center space-x-1">
                  <LineChart className="w-3.5 h-3.5" />
                  <span>ROC CURVE VECTOR</span>
                </span>

                {/* SVG representing a nice curve */}
                <div className="relative w-[200px] h-[200px] border-b-2 border-l-2 border-surface-border">
                  <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                    {/* Helper diagonal line */}
                    <line x1="0" y1="100" x2="100" y2="0" stroke="rgba(var(--surface-border), 0.4)" strokeDasharray="3,3" strokeWidth="1" />
                    {/* ROC Curve boundary (high performance AUC=0.92) */}
                    <path d="M 0 100 Q 10 20 100 0" stroke="rgb(var(--primary))" strokeWidth="2.5" />
                    {/* Dynamic point representing current threshold */}
                    {/* Since SVG y=0 is top, y is calculated as 100 - TPR, and x as FPR */}
                    <circle cx={fpr} cy={100 - tpr} r="5.5" fill="rgb(var(--secondary))" stroke="white" strokeWidth="1.5" className="animate-pulse" />
                  </svg>

                  {/* Label Y Axis */}
                  <div className="absolute -left-7 top-1/2 -rotate-90 -translate-y-1/2 text-[8px] font-mono text-muted select-none">
                    TPR (Recall)
                  </div>
                  {/* Label X Axis */}
                  <div className="absolute left-1/2 -bottom-5 -translate-x-1/2 text-[8px] font-mono text-muted select-none">
                    FPR (1-Spec)
                  </div>
                </div>

                <div className="text-center font-mono text-[9px] text-muted mt-6">
                  <div>Current rates: TPR={tpr}% | FPR={fpr}%</div>
                  <div className="text-primary font-bold mt-0.5">Approx. Area Under Curve (AUC) = 0.923</div>
                </div>
              </div>

            </div>
          )}

          {/* TAB 3: Model benchmarks */}
          {activeTab === "benchmarks" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left textual explanation block */}
              <div className="lg:col-span-4 space-y-4">
                <div className="flex items-center space-x-2 text-accent">
                  <Award className="w-5 h-5" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider">Metrics Benchmark</span>
                </div>
                <h4 className="text-xl font-bold">Classifier Evaluation</h4>
                <p className="text-xs text-muted leading-relaxed">
                  Choosing the right classifier model involves evaluating precision-recall trade-offs. XGBoost demonstrates high accuracy and F1 scores on our processed evaluation matrix, making it our primary deployment choice.
                </p>
                <div className="border border-surface-border/40 bg-surface-secondary/20 rounded p-3 text-[10px] text-muted leading-relaxed">
                  <strong>Validation Strategy:</strong> 5-fold stratified cross-validation on 12k records ensures zero model over-fitting.
                </div>
              </div>

              {/* Right bar chart comparison (using Recharts) */}
              <div className="lg:col-span-8 w-full h-[280px] flex items-center justify-center">
                {mounted ? (
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={modelComparison} margin={{ top: 20, right: 20, left: -10, bottom: 5 }}>
                      <XAxis dataKey="name" stroke="rgba(var(--foreground), 0.6)" tick={{ fontSize: 10, fontFamily: "Geist Mono" }} />
                      <YAxis domain={[0, 100]} stroke="rgba(var(--foreground), 0.6)" tick={{ fontSize: 10, fontFamily: "Geist Mono" }} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "rgba(17, 24, 39, 0.9)",
                          borderColor: "rgba(55, 65, 81, 0.8)",
                          borderRadius: "8px",
                          fontFamily: "Geist Mono",
                          fontSize: "11px",
                        }}
                      />
                      <Legend wrapperStyle={{ fontSize: "10px", fontFamily: "sans-serif" }} />
                      <Bar dataKey="Precision" fill="rgb(var(--primary))" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="Recall" fill="rgb(var(--secondary))" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="F1" fill="rgb(var(--accent))" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                ) : (
                  <div className="text-muted font-mono text-xs">Loading Model Space...</div>
                )}
              </div>

            </div>
          )}

        </div>
      </div>
    </section>
  );
}
