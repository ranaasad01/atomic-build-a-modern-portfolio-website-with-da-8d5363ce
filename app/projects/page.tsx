"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Code2 as Github, Eye, Star } from 'lucide-react';
import { projects, BRAND_EMAIL, type Project } from "@/lib/data";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/motion";
import { Reveal } from "@/components/Reveal";
import { useTranslations } from "next-intl";

const CATEGORIES = ["All", "Web App", "UI/UX Design", "Open Source", "Experiment"] as const;
type Category = (typeof CATEGORIES)[number];

const categoryColors: Record<string, string> = {
  "Web App": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "UI/UX Design": "bg-purple-500/10 text-purple-400 border-purple-500/20",
  "Open Source": "bg-green-500/10 text-green-400 border-green-500/20",
  "Experiment": "bg-amber-500/10 text-amber-400 border-amber-500/20",
};

// Map each category value to its index in the projects.filters array in messages/en.json
const CATEGORY_INDEX: Record<Category, number> = {
  All: 0,
  "Web App": 1,
  "UI/UX Design": 2,
  "Open Source": 3,
  Experiment: 4,
};

function ProjectCard({ project }: { project: Project }) {
  const t = useTranslations();
  return (
    <motion.article
      variants={scaleIn}
      whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
      className="group relative flex flex-col rounded-2xl bg-[var(--surface)] border border-[var(--border)] overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.2),0_8px_24px_-8px_rgba(0,0,0,0.4)] hover:border-[var(--primary)]/30 hover:shadow-[0_1px_2px_rgba(0,0,0,0.2),0_16px_40px_-8px_rgba(168,85,247,0.15)] transition-all duration-300"
    >
      {project.featured && (
        <div className="absolute top-3 right-3 z-10 flex items-center gap-1 px-2 py-1 rounded-full bg-[var(--primary)]/20 border border-[var(--primary)]/30 text-[var(--primary)] text-xs font-semibold">
          <Star size={10} className="fill-current" />
          {t("projects.featured")}
        </div>
      )}

      <div className="relative h-48 overflow-hidden bg-[var(--background)]">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)] via-transparent to-transparent opacity-60" />
        <div className="absolute top-3 left-3">
          <span
            className={
              "inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border " +
              (categoryColors[project.category] ?? "bg-white/10 text-white/70 border-white/10")
            }
          >
            {project.category}
          </span>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-[var(--foreground)] font-bold text-xl tracking-tight mb-2 group-hover:text-[var(--primary)] transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-[var(--muted)] text-sm leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {(project.tags ?? []).map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-md bg-[var(--background)] border border-[var(--border)] text-[var(--muted)] text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 pt-4 border-t border-[var(--border)]">
          {project.liveUrl && project.liveUrl !== "#" ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-[var(--primary)] hover:text-[var(--primary)]/80 transition-colors duration-200"
            >
              <Eye size={14} />
              {t("projects.card.live")}
            </a>
          ) : (
            <span className="flex items-center gap-1.5 text-sm font-medium text-[var(--primary)] cursor-default">
              <Eye size={14} />
              {t("projects.card.live")}
            </span>
          )}
          {project.repoUrl && project.repoUrl !== "#" ? (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-[var(--muted)] hover:text-[var(--foreground)] transition-colors duration-200"
            >
              <Github size={14} />
              {t("projects.card.repo")}
            </a>
          ) : (
            <span className="flex items-center gap-1.5 text-sm font-medium text-[var(--muted)] cursor-default">
              <Github size={14} />
              {t("projects.card.repo")}
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function ProjectsPage() {
  const t = useTranslations();
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  // t.raw returns the array from messages/en.json — no dynamic key construction
  const filterLabels = t.raw("projects.filters") as string[];

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <main className="min-h-screen bg-[var(--background)] pt-24 pb-32">
      {/* Page Header */}
      <Reveal>
        <section className="max-w-6xl mx-auto px-6 mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 text-[var(--primary)] text-xs font-semibold uppercase tracking-widest mb-6"
          >
            {t("projects.eyebrow")}
          </motion.div>
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-6xl font-extrabold tracking-tight text-[var(--foreground)] text-balance mb-5"
          >
            {t("projects.heading")}
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
            className="text-[var(--muted)] text-lg leading-relaxed max-w-2xl mx-auto text-pretty"
          >
            {t("projects.subheading")}
          </motion.p>
        </section>
      </Reveal>

      {/* Sticky Filter Bar */}
      <Reveal delay={0.1}>
        <div className="sticky top-16 z-30 bg-[var(--background)]/80 backdrop-blur-xl border-b border-[var(--border)] mb-12">
          <div className="max-w-6xl mx-auto px-6 py-3 flex items-center gap-2 overflow-x-auto">
            {CATEGORIES.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className={
                  "relative flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 border " +
                  (activeCategory === cat
                    ? "bg-[var(--primary)] text-white border-[var(--primary)] shadow-[0_0_16px_rgba(168,85,247,0.35)]"
                    : "bg-transparent text-[var(--muted)] border-[var(--border)] hover:text-[var(--foreground)] hover:border-[var(--primary)]/30")
                }
              >
                {filterLabels[CATEGORY_INDEX[cat]] ?? cat}
                {activeCategory === cat && (
                  <motion.span
                    layoutId="filter-active"
                    className="absolute inset-0 rounded-full bg-[var(--primary)]"
                    style={{ zIndex: -1 }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                  />
                )}
              </motion.button>
            ))}
            <span className="ml-auto flex-shrink-0 text-xs text-[var(--muted)] font-medium">
              {t("projects.count", { count: filtered.length })}
            </span>
          </div>
        </div>
      </Reveal>

      {/* Projects Grid */}
      <section className="max-w-6xl mx-auto px-6">
        <motion.div
          key={activeCategory}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-24"
          >
            <p className="text-[var(--muted)] text-lg">{t("projects.empty")}</p>
          </motion.div>
        )}
      </section>

      {/* CTA Contact Banner */}
      <Reveal delay={0.1}>
        <section className="max-w-6xl mx-auto px-6 mt-24">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[var(--primary)]/20 via-[var(--surface)] to-[var(--surface)] border border-[var(--primary)]/20 p-12 md:p-16 text-center shadow-[0_1px_2px_rgba(0,0,0,0.2),0_24px_64px_-16px_rgba(168,85,247,0.2)]">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(168,85,247,0.15)_0%,transparent_70%)]"
            />
            <div className="relative z-10">
              <p className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 text-[var(--primary)] text-xs font-semibold uppercase tracking-widest mb-6">
                {t("projects.cta.eyebrow")}
              </p>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--foreground)] text-balance mb-4">
                {t("projects.cta.heading")}
              </h2>
              <p className="text-[var(--muted)] text-lg leading-relaxed max-w-xl mx-auto mb-8 text-pretty">
                {t("projects.cta.body")}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[var(--primary)] text-white font-semibold text-sm hover:bg-[var(--primary)]/90 transition-all duration-200 shadow-[0_0_24px_rgba(168,85,247,0.4)] hover:shadow-[0_0_36px_rgba(168,85,247,0.6)]"
                >
                  {t("projects.cta.button")}
                  <ArrowRight size={16} />
                </Link>
                <a
                  href={"mailto:" + BRAND_EMAIL}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-transparent border border-[var(--border)] text-[var(--foreground)] font-semibold text-sm hover:border-[var(--primary)]/40 hover:text-[var(--primary)] transition-all duration-200"
                >
                  {t("projects.cta.email")}
                </a>
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </main>
  );
}
