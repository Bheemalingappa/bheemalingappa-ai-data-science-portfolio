"use client";

import React, { useState } from "react";
import { Mail, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

export default function MinimalContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const WEB3FORMS_ACCESS_KEY = "YOUR_ACCESS_KEY_HERE";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setStatus("error");
      setErrorMessage("Please fill out all fields.");
      return;
    }

    setStatus("submitting");

    try {
      if (WEB3FORMS_ACCESS_KEY === "YOUR_ACCESS_KEY_HERE") {
        setTimeout(() => {
          setStatus("success");
          setName("");
          setEmail("");
          setMessage("");
        }, 1000);
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
        setErrorMessage(result.message || "Failed to submit.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage("Network error occurred.");
    }
  };

  return (
    <section id="contact" className="relative py-20 px-4">
      <div className="max-w-4xl w-full mx-auto space-y-16">
        {/* Section Title */}
        <div className="text-center">
          <h2 className="text-xs font-mono tracking-widest text-primary font-bold uppercase mb-2">
            04 / Connection
          </h2>
          <h3 className="text-3xl font-extrabold tracking-tight">Get In Touch</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          {/* Quick info */}
          <div className="md:col-span-5 flex flex-col justify-between gap-4">
            <div className="glass-panel border-surface-border/50 rounded-2xl p-5 flex items-center space-x-3">
              <Mail className="w-5 h-5 text-primary" />
              <div>
                <div className="text-[9px] font-mono text-muted uppercase">Email</div>
                <a href="mailto:bhimubhimu2000@gmail.com" className="text-sm font-bold hover:text-primary transition-colors font-mono">
                  bhimubhimu2000@gmail.com
                </a>
              </div>
            </div>

            <div className="glass-panel border-surface-border/50 rounded-2xl p-5 flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-secondary" />
              <div>
                <div className="text-[9px] font-mono text-muted uppercase">Location</div>
                <div className="text-sm font-bold">Bengaluru, India</div>
              </div>
            </div>

            <div className="glass-panel border-surface-border/50 rounded-2xl p-5 flex-1 flex flex-col justify-between space-y-3">
              <div>
                <div className="text-[9px] font-mono text-muted uppercase">Social Channels</div>
                <p className="text-[11px] text-muted leading-relaxed mt-1">Check my latest codes and updates.</p>
              </div>
              <div className="flex gap-3">
                <a
                  href="https://github.com/Bheemalingappa"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center space-x-2 bg-surface hover:bg-surface-secondary border border-surface-border/60 p-2.5 rounded-xl text-xs font-semibold transition-all duration-300"
                >
                  <GithubIcon className="w-4 h-4 text-muted" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/bheema-boler-a7a6241b6"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center space-x-2 bg-surface hover:bg-surface-secondary border border-surface-border/60 p-2.5 rounded-xl text-xs font-semibold transition-all duration-300"
                >
                  <LinkedinIcon className="w-4 h-4 text-primary" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-7 glass-panel border-surface-border/50 rounded-2xl p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-muted font-bold block">NAME</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    className="w-full bg-surface-secondary/40 text-xs text-foreground/90 p-3 rounded-lg border border-surface-border/60 focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-muted font-bold block">EMAIL</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="w-full bg-surface-secondary/40 text-xs text-foreground/90 p-3 rounded-lg border border-surface-border/60 focus:border-primary focus:outline-none transition-colors font-mono"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono text-muted font-bold block">MESSAGE</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Details..."
                  className="w-full bg-surface-secondary/40 text-xs text-foreground/90 p-3 rounded-lg border border-surface-border/60 focus:border-primary focus:outline-none transition-colors"
                  rows={3}
                />
              </div>

              {status === "success" && (
                <div className="bg-success/10 border border-success/30 p-3 rounded-lg text-success flex items-center space-x-2 text-[11px] leading-tight">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>Message delivered successfully.</span>
                </div>
              )}

              {status === "error" && (
                <div className="bg-red-500/10 border border-red-500/30 p-3 rounded-lg text-red-400 flex items-center space-x-2 text-[11px] leading-tight">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "submitting" || status === "success"}
                className="w-full inline-flex items-center justify-center space-x-2 bg-primary hover:bg-primary-hover disabled:bg-surface-secondary text-white text-xs font-semibold py-3.5 rounded-xl shadow-md transition-colors"
              >
                <span>Send Message</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
