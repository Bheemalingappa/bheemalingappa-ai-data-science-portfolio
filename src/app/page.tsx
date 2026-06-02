"use client";

import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import RecruiterPortal from "@/components/RecruiterPortal";
import Projects from "@/components/Projects";
import DataScienceLab from "@/components/DataScienceLab";
import GithubIntelligence from "@/components/GithubIntelligence";
import Certifications from "@/components/Certifications";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative text-foreground bg-background transition-colors duration-500 selection:bg-primary selection:text-white">
      {/* Premium background grid & overlays */}
      <div className="fixed inset-0 grid-dots opacity-[0.15] pointer-events-none z-0" />
      <div className="fixed top-0 inset-x-0 h-40 bg-gradient-to-b from-background via-background/40 to-transparent pointer-events-none z-10" />

      {/* Floating Header Navigation */}
      <Header />

      {/* Brand Sections */}
      <div className="relative z-10 space-y-4 md:space-y-8">
        <Hero />
        <About />
        <Skills />
        <RecruiterPortal />
        <Projects />
        <DataScienceLab />
        <GithubIntelligence />
        <Certifications />
        <Blog />
        <Contact />
      </div>

      {/* Layout Footer */}
      <Footer />
    </main>
  );
}
