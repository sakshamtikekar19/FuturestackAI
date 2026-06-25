"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BarChart, Globe, Zap, Check } from "lucide-react";
import { LiveScanner } from "./LiveScanner";
import { SignUpButton, SignInButton } from "@clerk/nextjs";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useStoryStore } from "@/store/useStoryStore";

export function ScrollStory() {
  const { scrollYProgress } = useScroll();
  const setScrollProgress = useStoryStore((state) => state.setScrollProgress);
  const [domain, setDomain] = useState("");
  const router = useRouter();

  const handleStartAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (domain.trim()) {
      router.push(`/dashboard?domain=${encodeURIComponent(domain.trim())}`);
    } else {
      router.push("/dashboard");
    }
  };

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollProgress(latest);
  });
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="relative z-10 pointer-events-auto">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20">
        <div className="max-w-4xl mx-auto p-8 rounded-3xl">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium tracking-wide">
            Introducing the future of Brand Intelligence
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-white/90 to-white/40 mb-6 drop-shadow-sm">
            Own Your AI Infrastructure.
          </h1>
          <p className="text-xl md:text-2xl text-white/60 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Stop Renting Your Intelligence.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/dashboard"
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start Scanning <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Story Section */}
      <section className="min-h-screen py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">The New SEO is AIO</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">Traditional SEO is losing ground. If your brand isn't recommended by AI, you are practically invisible to the next generation of consumers.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              delay={0.1}
              icon={<Globe className="w-8 h-8 text-blue-400" />}
              title="Multi-Model Scanning"
              desc="Simultaneously query the world's most powerful LLMs (GPT-4o, Gemini 2.5, Claude 3.5) to map out your brand's global presence."
            />
            <FeatureCard 
              delay={0.3}
              icon={<Zap className="w-8 h-8 text-purple-400" />}
              title="Deterministic Scoring"
              desc="No more guessing. We process raw AI output into exact, quantifiable Share of Voice metrics and ranked positions."
            />
            <FeatureCard 
              delay={0.5}
              icon={<BarChart className="w-8 h-8 text-emerald-400" />}
              title="Actionable Analytics"
              desc="Track your visibility score over time across different prompt categories to measure the impact of your marketing efforts."
            />
          </div>
        </div>
      </section>
      
      <LiveScanner />
      
      {/* Pricing Section */}
      <section className="py-32 px-4 border-t border-white/5 bg-black/60 relative z-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Simple, transparent pricing</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Start tracking your AI Share of Voice today. Upgrade when you need automated daily scanning and competitor analysis.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Starter Tier */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 flex flex-col relative overflow-hidden backdrop-blur-sm">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-bold text-white">$0</span>
                  <span className="text-white/50">/month</span>
                </div>
                <p className="text-white/60 text-sm">Perfect for individuals wanting to check their baseline visibility.</p>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3 text-white/80">
                  <Check className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <span>1 Domain Scan per week</span>
                </li>
                <li className="flex items-start gap-3 text-white/80">
                  <Check className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <span>Top 3 AI Models (GPT-4o, Claude, Gemini)</span>
                </li>
                <li className="flex items-start gap-3 text-white/80">
                  <Check className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <span>Basic Visibility Score</span>
                </li>
              </ul>
              <SignUpButton mode="modal">
                <button className="w-full py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium transition-colors border border-white/10">
                  Create Free Account
                </button>
              </SignUpButton>
              <div className="mt-4 text-center text-sm text-white/50">
                Already have an account? <SignInButton mode="modal"><button className="text-blue-400 hover:text-blue-300">Log in</button></SignInButton>
              </div>
            </div>

            {/* Pro Tier */}
            <div className="rounded-3xl border border-blue-500/50 bg-blue-950/20 p-8 flex flex-col relative overflow-hidden backdrop-blur-sm shadow-[0_0_40px_-15px_rgba(59,130,246,0.3)]">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600" />
              <div className="absolute top-6 right-6 px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider rounded-full border border-blue-500/30">
                Recommended
              </div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-bold text-white">$49</span>
                  <span className="text-white/50">/month</span>
                </div>
                <p className="text-white/60 text-sm">For brands that need continuous monitoring and actionable insights.</p>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3 text-white/80">
                  <Check className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <span>Daily Automated Scans</span>
                </li>
                <li className="flex items-start gap-3 text-white/80">
                  <Check className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <span>All 5+ AI Models (inc. Perplexity, Copilot)</span>
                </li>
                <li className="flex items-start gap-3 text-white/80">
                  <Check className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <span>Competitor Benchmarking</span>
                </li>
                <li className="flex items-start gap-3 text-white/80">
                  <Check className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <span>Historical Trend Tracking</span>
                </li>
              </ul>
              <SignUpButton mode="modal">
                <button className="w-full py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors shadow-[0_0_20px_-5px_rgba(37,99,235,0.5)]">
                  Upgrade to Pro
                </button>
              </SignUpButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ title, desc, icon, delay }: { title: string, desc: string, icon: React.ReactNode, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className="p-8 rounded-3xl transition-colors text-center md:text-left"
    >
      <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 shadow-inner mx-auto md:mx-0">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-white/60 leading-relaxed">
        {desc}
      </p>
    </motion.div>
  )
}
