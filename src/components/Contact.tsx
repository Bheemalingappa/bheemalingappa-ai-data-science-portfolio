"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const WEB3FORMS_ACCESS_KEY = "YOUR_ACCESS_KEY_HERE"; // User can replace this with their Web3Forms key

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setStatus("error");
      setErrorMessage("Please fill out all fields before submitting.");
      return;
    }

    setStatus("submitting");

    try {
      // If access key is placeholder, simulate success so the portfolio works out of the box
      if (WEB3FORMS_ACCESS_KEY === "YOUR_ACCESS_KEY_HERE") {
        setTimeout(() => {
          setStatus("success");
          setName("");
          setEmail("");
          setMessage("");
        }, 1200);
        return;
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name,
          email,
          message,
          subject: `New Portfolio Message from ${name}`,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
        setErrorMessage(result.message || "Failed to submit message. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage("An unexpected network error occurred. Please try again.");
    }
  };

  return (
    <section id="contact" className="relative py-20 md:py-32 px-4 bg-surface/5">
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-primary/5 rounded-full blur-3xl glow-blur" />
      <div className="absolute inset-0 grid-dots opacity-20 pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-xs font-mono tracking-widest text-primary font-bold uppercase mb-3">
            09 / Communication
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Let&apos;s Build Intelligent Solutions Together
          </h3>
          <p className="text-muted mt-4 text-base md:text-lg">
            Looking for a Data Scientist, NLP specialist, or Machine Learning Developer? Fill out the contact sheet below or send a message directly.
          </p>
        </div>

        {/* Form and Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Side: Contact Cards (Col Span 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* Direct Email Card */}
            <div className="glass-panel border-surface-border/60 rounded-2xl p-6 flex items-center space-x-4">
              <div className="p-3.5 bg-primary/10 rounded-xl text-primary">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h5 className="text-xs font-mono text-muted uppercase font-bold">Email Address</h5>
                <a
                  href="mailto:bhimubhimu2000@gmail.com"
                  className="text-base font-bold text-foreground hover:text-primary transition-colors font-mono"
                >
                  bhimubhimu2000@gmail.com
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="glass-panel border-surface-border/60 rounded-2xl p-6 flex items-center space-x-4">
              <div className="p-3.5 bg-secondary/10 rounded-xl text-secondary">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h5 className="text-xs font-mono text-muted uppercase font-bold">Location</h5>
                <div className="text-base font-bold text-foreground">
                  Bengaluru, India
                </div>
              </div>
            </div>

            {/* Social Connect links card */}
            <div className="glass-panel border-surface-border/60 rounded-2xl p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h5 className="text-xs font-mono text-muted uppercase font-bold">Professional Networks</h5>
                <p className="text-xs text-muted leading-relaxed mt-1">
                  Connect on LinkedIn or check my latest code repositories directly on GitHub.
                </p>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://github.com/Bheemalingappa"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center space-x-2 bg-surface hover:bg-surface-secondary border border-surface-border p-3.5 rounded-xl text-sm font-semibold transition-all duration-300"
                >
                  <GithubIcon className="w-4 h-4 text-muted" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/bheema-boler-a7a6241b6"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center space-x-2 bg-surface hover:bg-surface-secondary border border-surface-border p-3.5 rounded-xl text-sm font-semibold transition-all duration-300"
                >
                  <LinkedinIcon className="w-4 h-4 text-primary" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Side: Message Form Sheet (Col Span 7) */}
          <div className="lg:col-span-7 glass-panel border-surface-border/60 rounded-2xl p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <span className="text-[10px] font-mono text-primary font-bold tracking-widest uppercase">
                Contact Gateway
              </span>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="form-name" className="text-xs font-mono text-muted font-bold">YOUR NAME</label>
                  <input
                    type="text"
                    id="form-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Hiring Manager"
                    className="w-full bg-surface-secondary/40 text-sm text-foreground/90 p-3.5 rounded-xl border border-surface-border/60 focus:border-primary focus:outline-none transition-colors"
                    disabled={status === "submitting" || status === "success"}
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="form-email" className="text-xs font-mono text-muted font-bold">YOUR EMAIL</label>
                  <input
                    type="email"
                    id="form-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. manager@company.com"
                    className="w-full bg-surface-secondary/40 text-sm text-foreground/90 p-3.5 rounded-xl border border-surface-border/60 focus:border-primary focus:outline-none transition-colors font-mono"
                    disabled={status === "submitting" || status === "success"}
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="form-message" className="text-xs font-mono text-muted font-bold">YOUR MESSAGE</label>
                <textarea
                  id="form-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Details about your project scope or position requirements..."
                  className="w-full bg-surface-secondary/40 text-sm text-foreground/90 p-3.5 rounded-xl border border-surface-border/60 focus:border-primary focus:outline-none transition-colors"
                  rows={4}
                  disabled={status === "submitting" || status === "success"}
                />
              </div>

              {/* Status Alert Panels */}
              {status === "success" && (
                <div className="bg-success/15 border border-success/30 p-4 rounded-xl text-success flex items-center space-x-3 text-xs leading-normal">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <div>
                    <strong className="font-bold">Message Delivered!</strong>
                    <p className="mt-0.5 text-[11px] opacity-90">Thank you for reaching out. I will respond to your email shortly.</p>
                  </div>
                </div>
              )}

              {status === "error" && (
                <div className="bg-red-500/15 border border-red-500/30 p-4 rounded-xl text-red-400 flex items-center space-x-3 text-xs leading-normal">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <div>
                    <strong className="font-bold">Submission Issue</strong>
                    <p className="mt-0.5 text-[11px] opacity-90">{errorMessage}</p>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "submitting" || status === "success"}
                className="w-full inline-flex items-center justify-center space-x-2 bg-primary hover:bg-primary-hover disabled:bg-surface-secondary disabled:text-muted text-white text-sm font-semibold py-4 rounded-xl shadow-glow-primary hover:shadow-lg transition-all duration-300"
              >
                {status === "submitting" ? (
                  <span>Delivering Transmission...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
