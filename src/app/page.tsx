"use client";

import React from "react";
import Header from "@/components/Header";
import MinimalHero from "@/components/MinimalHero";
import MinimalAbout from "@/components/MinimalAbout";
import MinimalSkills from "@/components/MinimalSkills";
import MinimalExperience from "@/components/MinimalExperience";
import MinimalProjects from "@/components/MinimalProjects";
import Certifications from "@/components/Certifications";
import MinimalContact from "@/components/MinimalContact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative text-foreground bg-background transition-colors duration-500 selection:bg-primary selection:text-white">
      {/* Premium background griddots overlay */}
      <div className="fixed inset-0 grid-dots opacity-[0.15] pointer-events-none z-0" />
      <div className="fixed top-0 inset-x-0 h-40 bg-gradient-to-b from-background via-background/40 to-transparent pointer-events-none z-10" />

      {/* Floating Header */}
      <Header />

      {/* Sections layout */}
      <div className="relative z-10 space-y-4">
        <MinimalHero />
        <MinimalAbout />
        <MinimalSkills />
        <MinimalExperience />
        <MinimalProjects />
        <Certifications />
        <MinimalContact />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
