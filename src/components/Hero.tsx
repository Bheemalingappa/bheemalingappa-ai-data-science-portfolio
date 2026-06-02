"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronRight, Database, Brain, Sparkles, TrendingUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import NeuralNetworkCanvas from "./NeuralNetworkCanvas";

const roles = [
  "Data Scientist",
  "Machine Learning Engineer",
  "AI Developer",
  "NLP Practitioner",
  "Analytics Engineer",
];

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = roles[currentRoleIndex];
      if (!isDeleting) {
        // Typing
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === fullText) {
          // Pause at full text
          setTypingSpeed(2000);
          setIsDeleting(true);
        }
      } else {
        // Deleting
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(50);

        if (currentText === "") {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(500);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, typingSpeed]);

  const stats = [
    { value: "2+", label: "Professional Trainings" },
    { value: "10+", label: "Technologies Mastered" },
    { value: "5+", label: "End-to-End Projects" },
    { value: "1000+", label: "Hours of ML Learning" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center px-4 overflow-hidden pt-20"
    >
      {/* Dynamic Backgrounds */}
      <NeuralNetworkCanvas />
      
      {/* Light Theme Background Radial Light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl glow-blur dark:opacity-40" />
      <div className="absolute bottom-1/4 right-10 w-[300px] h-[300px] bg-secondary/15 rounded-full blur-3xl glow-blur dark:opacity-30" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 grid-dots opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-12 md:py-20">
        
        {/* Left Intro Text Column */}
        <div className="lg:col-span-7 flex flex-col space-y-6 text-center lg:text-left">
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center self-center lg:self-start space-x-2 bg-surface/50 border border-surface-border/50 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-secondary animate-pulse" />
            <span className="text-muted">Personal AI & Data Brand Platform</span>
          </motion.div>

          <div className="space-y-4">
            <motion.h4
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-base md:text-lg font-mono text-primary font-semibold tracking-wider uppercase"
            >
              Hello, I&apos;m
            </motion.h4>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-extrabold tracking-tight"
            >
              <span className="text-gradient">Bheemalingappa</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="h-10 md:h-12 flex items-center justify-center lg:justify-start"
            >
              <h2 className="text-xl md:text-3xl font-bold font-mono tracking-tight text-foreground/90">
                <span>[ </span>
                <span className="text-gradient-primary">{currentText}</span>
                <span className="animate-pulse">_</span>
                <span> ]</span>
              </h2>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base md:text-lg text-muted max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            Transforming raw data into intelligent products. I design and build production-ready analytics systems, machine learning pipelines, and generative AI solutions that drive real business insights.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
          >
            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-primary text-white hover:bg-primary-hover px-6 py-3.5 rounded-xl font-medium shadow-glow-primary hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>Explore Case Studies</span>
              <ChevronRight className="w-4 h-4" />
            </a>

            <a
              href="/resume.pdf"
              download="Bheemalingappa_Resume.pdf"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-surface hover:bg-surface-secondary border border-surface-border text-foreground px-6 py-3.5 rounded-xl font-medium transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>Download CV</span>
              <ArrowUpRight className="w-4 h-4 text-muted" />
            </a>

            <div className="flex space-x-3 mt-2 sm:mt-0">
              <a
                href="https://github.com/Bheemalingappa"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-surface hover:bg-surface-secondary border border-surface-border rounded-xl text-muted hover:text-foreground transition-all duration-300"
                title="GitHub"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/bheema-boler-a7a6241b6"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-surface hover:bg-surface-secondary border border-surface-border rounded-xl text-muted hover:text-foreground transition-all duration-300"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Floating Startup Visual Column */}
        <div className="lg:col-span-5 relative flex justify-center items-center h-[350px] md:h-[450px] w-full">
          
          {/* Main Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-[280px] md:w-[340px] glass-panel rounded-2xl p-6 border border-surface-border/60 relative shadow-glass-md"
          >
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-[10px] font-mono text-muted tracking-widest uppercase">
                nlp-inference.log
              </span>
            </div>

            <div className="space-y-4 font-mono text-xs text-foreground/80">
              <div className="text-secondary flex items-center space-x-2">
                <Brain className="w-3.5 h-3.5" />
                <span>&gt; pipeline = load_sentiment_model()</span>
              </div>
              <div className="text-muted pl-4">Loading RoBERTa sentiment layers... Done.</div>
              
              <div className="text-primary flex items-center space-x-2">
                <Database className="w-3.5 h-3.5" />
                <span>&gt; pipeline.analyze(&quot;live_tweets&quot;)</span>
              </div>
              
              <div className="bg-surface-secondary/40 border border-surface-border/30 rounded p-2.5 space-y-1">
                <div className="text-accent text-[11px] font-semibold flex justify-between">
                  <span>Sentiment Score</span>
                  <span>94.8% Positive</span>
                </div>
                <div className="w-full bg-surface-secondary h-1.5 rounded overflow-hidden">
                  <div className="bg-gradient-to-r from-primary to-accent h-full rounded" style={{ width: "94.8%" }} />
                </div>
              </div>

              <div className="text-green-400 flex items-center space-x-1.5 text-[10px]">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>Model evaluation: F1=0.963 | Acc=95.7%</span>
              </div>
            </div>
          </motion.div>

          {/* Secondary Floating Card */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: -40 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 60 }}
            className="absolute top-10 right-4 md:right-10 bg-surface/85 backdrop-blur-md rounded-xl p-3 border border-surface-border shadow-md flex items-center space-x-3 w-[160px]"
          >
            <div className="p-2 bg-primary/10 rounded-lg text-primary">
              <Database className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] text-muted font-mono uppercase font-bold">SQL Queries</div>
              <div className="text-sm font-bold font-mono">1.2ms Avg Lat</div>
            </div>
          </motion.div>

          {/* Tertiary Floating Card */}
          <motion.div
            initial={{ opacity: 0, x: -30, y: 40 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, type: "spring", stiffness: 60 }}
            className="absolute bottom-10 left-4 md:left-10 bg-surface/85 backdrop-blur-md rounded-xl p-3 border border-surface-border shadow-md flex items-center space-x-3 w-[170px]"
          >
            <div className="p-2 bg-secondary/10 rounded-lg text-secondary">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] text-muted font-mono uppercase font-bold">Inference Speed</div>
              <div className="text-sm font-bold font-mono">34ms (LLM Core)</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Section with Grid Cards */}
      <div className="relative z-10 max-w-7xl w-full mx-auto border-t border-surface-border/40 py-8 mt-12 md:mt-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center md:text-left flex flex-col space-y-1 p-4 rounded-xl hover:bg-surface/30 transition-all duration-300"
            >
              <span className="text-3xl md:text-4xl font-extrabold font-mono text-gradient-primary">
                {stat.value}
              </span>
              <span className="text-xs md:text-sm text-muted font-medium font-sans">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
