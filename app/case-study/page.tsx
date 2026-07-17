"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Code2, Clock, Users, TrendingUp, Zap, CheckCircle, ArrowRight, BarChart2, Layers, Target } from 'lucide-react';
import { Reveal } from "@/components/Reveal";
import { fadeInUp, staggerContainer, scaleIn, slideInLeft, slideInRight } from "@/lib/motion";

// ─── Inline data ─────────────────────────────────────────────────────────────

const projectMeta = {
  title: "Luminary",
  subtitle: "Real-time analytics for e-commerce brands",
  role: "Lead Engineer & Designer",
  timeline: "14 weeks",
  team: "4 people",
  status: "Shipped — Live in Production",
};

const outcomeMetrics = [
  { value: "68%", label: "Faster Report Load" },
  { value: "2.1s", label: "Avg. Load Time" },
  { value: "40k+", label: "Daily Active Users" },
  { value: "99.9%", label: "Uptime SLA" },
];

const processSteps = [
  {
    phase: "01",
    title: "Discovery & Research",
    duration: "Weeks 1–2",
    description:
      "Conducted 12 user interviews with e-commerce operators. Mapped pain points around existing analytics tools — primarily slow load times, confusing data hierarchies, and lack of real-time feedback. Defined success metrics with stakeholders.",
  },
  {
    phase: "02",
    title: "Information Architecture",
    duration: "Weeks 3–4",
    description:
      "Designed the data model and dashboard information hierarchy. Created user flows for the three primary personas: store owner, marketing manager, and operations lead. Validated with card-sorting sessions.",
  },
  {
    phase: "03",
    title: "Design & Prototyping",
    duration: "Weeks 5–7",
    description:
      "Built a high-fidelity Figma prototype with 60+ screens. Established a token-based design system with dark/light modes. Ran two rounds of usability testing with 8 participants each, iterating on the chart interaction model.",
  },
  {
    phase: "04",
    title: "Engineering & Build",
    duration: "Weeks 8–12",
    description:
      "Implemented with Next.js 14 App Router, tRPC for type-safe APIs, and Recharts for visualizations. Introduced edge caching via Vercel KV for frequently-accessed report queries. Built a WebSocket layer for real-time metric streaming.",
  },
  {
    phase: "05",
    title: "Launch & Iteration",
    duration: "Weeks 13–14",
    description:
      "Staged rollout to 10% of users, monitored Core Web Vitals and error rates. Addressed three critical UX issues surfaced in post-launch feedback. Full rollout achieved 68% improvement in report load time vs. the legacy system.",
  },
];

const designDecisions = [
  {
    icon: Layers,
    title: "Edge Caching Strategy",
    description:
      "Most dashboard queries are read-heavy and time-windowed. By caching at the edge with a 60-second TTL and stale-while-revalidate, we eliminated 80% of database round-trips for the most common report views.",
  },
  {
    icon: Target,
    title: "Chart Interaction Model",
    description:
      "Early prototypes used hover tooltips, but testing revealed users wanted persistent comparison. We switched to a click-to-pin model that lets users anchor up to 3 data points simultaneously.",
  },
  {
    icon: Zap,
    title: "Progressive Data Loading",
    description:
      "Instead of blocking the entire dashboard on data fetch, we load skeleton states per-widget and stream data as it resolves. This reduced perceived load time by 45% even before the caching improvements.",
  },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function CaseStudyPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] overflow-x-hidden">

      {/* ── SECTION 1: Hero ─────────────────────────────────────────────── */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {/* Back link */}
            <motion.div variants={fadeInUp}>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-[var(--muted)] hover:text-[var(--primary)] text-sm font-medium transition-colors duration-200 group"
              >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-200" />
                All Projects
              </Link>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-black tracking-tight leading-none"
            >
              <span className="gradient-text">{projectMeta.title}</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-[var(--muted)] leading-relaxed max-w-2xl"
            >
              {projectMeta.subtitle}
            </motion.p>

            {/* Meta pills */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
              {[
                { icon: Users, label: "Role", value: projectMeta.role },
                { icon: Clock, label: "Timeline", value: projectMeta.timeline },
                { icon: TrendingUp, label: "Team", value: projectMeta.team },
              ].map((pill) => (
                <div
                  key={pill.label}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--surface)] border border-[var(--border)] text-sm"
                >
                  <pill.icon size={14} className="text-[var(--primary)]" />
                  <span className="text-[var(--muted)]">{pill.label}:</span>
                  <span className="text-[var(--foreground)] font-medium">{pill.value}</span>
                </div>
              ))}
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/30 text-sm">
                <CheckCircle size={14} className="text-[var(--primary)]" />
                <span className="text-[var(--primary)] font-medium">{projectMeta.status}</span>
              </div>
            </motion.div>

            {/* CTA buttons */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-2">
              <motion.a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] shadow-[0_0_24px_rgba(168,85,247,0.35)] hover:shadow-[0_0_36px_rgba(168,85,247,0.55)] transition-shadow duration-300"
              >
                <ExternalLink size={16} />
                View Live Site
              </motion.a>
              <motion.a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-[var(--foreground)] border border-[var(--border)] hover:border-[var(--primary)]/50 hover:text-[var(--primary)] transition-all duration-200"
              >
                <Code2 size={16} />
                View Source
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 2: Outcome Metrics ──────────────────────────────────── */}
      <section className="bg-[var(--surface)] border-y border-[var(--border)] py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {outcomeMetrics.map((metric) => (
                <div key={metric.label} className="text-center space-y-2">
                  <p className="text-4xl md:text-5xl font-black gradient-text">{metric.value}</p>
                  <p className="text-sm text-[var(--muted)] font-medium">{metric.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── SECTION 3: Problem Statement ────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left: problem copy */}
            <Reveal delay={0}>
              <div className="space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 text-[var(--primary)] text-xs font-semibold uppercase tracking-widest">
                  <BarChart2 size={12} />
                  The Problem
                </div>
                <h2 className="text-3xl md:text-4xl font-black tracking-tight">
                  The Problem
                </h2>
                <p className="text-[var(--muted)] leading-relaxed">
                  E-commerce operators were drowning in data but starving for insight. Existing analytics platforms suffered from three critical failures: dashboards that took 8–12 seconds to load, data that was often 15+ minutes stale, and interfaces so complex that store owners needed dedicated analysts to interpret them.
                </p>
                <p className="text-[var(--muted)] leading-relaxed">
                  On mobile — where 60% of operators checked their metrics — the experience was effectively broken. Horizontal scroll tables, tiny tap targets, and no offline support meant that real-time decisions were being made on outdated, hard-to-read data.
                </p>
                <p className="text-[var(--muted)] leading-relaxed">
                  The opportunity was clear: build a fast, intuitive, mobile-first analytics layer that surfaces the right metric at the right moment — without requiring a data science degree to operate.
                </p>
              </div>
            </Reveal>

            {/* Right: user quote card */}
            <Reveal delay={0.15}>
              <div className="bg-[var(--surface)] border-l-4 border-[var(--primary)] p-6 rounded-r-xl space-y-4">
                <p className="text-[var(--foreground)] text-lg leading-relaxed italic">
                  &ldquo;I check my dashboard every morning, but half the time the numbers are still from yesterday. By the time the charts load, I've already made decisions based on gut feel. There has to be a better way.&rdquo;
                </p>
                <div className="pt-2 border-t border-[var(--border)]">
                  <p className="text-[var(--foreground)] font-semibold text-sm">— Participant #7</p>
                  <p className="text-[var(--muted)] text-xs mt-0.5">Store owner, $2M ARR Shopify brand · User Interview, Week 1</p>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {["Slow load times", "Stale data", "Poor mobile UX"].map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-[var(--background)] border border-[var(--border)] text-[var(--muted)] text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: Process Timeline ─────────────────────────────────── */}
      <section className="py-24 px-6 bg-[var(--surface)]">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="mb-14 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 text-[var(--accent)] text-xs font-semibold uppercase tracking-widest">
                <Clock size={12} />
                14 Weeks
              </div>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight">The Process</h2>
              <p className="text-[var(--muted)] max-w-xl leading-relaxed">
                A structured, research-led approach from discovery through to a staged production rollout.
              </p>
            </div>
          </Reveal>

          <div className="space-y-0">
            {processSteps.map((step, index) => (
              <Reveal key={step.phase} delay={index * 0.08}>
                <div className="relative flex gap-6 pb-10 last:pb-0">
                  {/* Left column: phase circle + connector line */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] flex items-center justify-center font-bold text-sm text-white z-10 flex-shrink-0">
                      {step.phase}
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="w-px flex-1 mt-2 bg-gradient-to-b from-[var(--primary)]/40 to-[var(--border)]" />
                    )}
                  </div>

                  {/* Right column: content */}
                  <div className="pt-1.5 pb-2 space-y-2">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-[var(--foreground)] font-bold text-lg">{step.title}</h3>
                      <span className="px-2.5 py-0.5 rounded-full bg-[var(--background)] border border-[var(--border)] text-[var(--muted)] text-xs font-medium">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-[var(--muted)] leading-relaxed text-sm">{step.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: Design Decisions ─────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="mb-14 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 text-[var(--primary)] text-xs font-semibold uppercase tracking-widest">
                <Layers size={12} />
                Architecture
              </div>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight">Key Design Decisions</h2>
              <p className="text-[var(--muted)] max-w-xl leading-relaxed">
                The choices that had the biggest impact on performance, usability, and developer experience.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid md:grid-cols-3 gap-6">
              {designDecisions.map((decision) => (
                <div
                  key={decision.title}
                  className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6 hover:border-[var(--primary)]/30 transition-all duration-300 space-y-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-[var(--primary)]/10 border border-[var(--primary)]/20 flex items-center justify-center">
                    <decision.icon size={18} className="text-[var(--primary)]" />
                  </div>
                  <h3 className="text-[var(--foreground)] font-bold text-base leading-snug">{decision.title}</h3>
                  <p className="text-[var(--muted)] text-sm leading-relaxed">{decision.description}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── SECTION 6: CTA ──────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[var(--surface)] border-t border-[var(--border)]">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <Reveal>
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-black tracking-tight">
                Interested in{" "}
                <span className="gradient-text">working together?</span>
              </h2>
              <p className="text-[var(--muted)] leading-relaxed">
                I'm currently open to new projects and collaborations. Whether you have a product idea, a design challenge, or just want to talk shop — I'd love to hear from you.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <motion.span
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] shadow-[0_0_24px_rgba(168,85,247,0.35)] hover:shadow-[0_0_36px_rgba(168,85,247,0.55)] transition-shadow duration-300 cursor-pointer"
                >
                  Get in Touch
                  <ArrowRight size={16} />
                </motion.span>
              </Link>
              <Link href="/projects">
                <motion.span
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm text-[var(--foreground)] border border-[var(--border)] hover:border-[var(--primary)]/50 hover:text-[var(--primary)] transition-all duration-200 cursor-pointer"
                >
                  View All Projects
                </motion.span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

    </main>
  );
}
