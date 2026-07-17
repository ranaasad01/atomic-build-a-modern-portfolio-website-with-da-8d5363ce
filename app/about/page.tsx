"use client";
import { motion, type Variants } from "framer-motion";
import { Code2 as Github, Briefcase as Linkedin, MessageCircle as Twitter, Download, ExternalLink, CheckCircle } from 'lucide-react';
import { BRAND_NAME, BRAND_TAGLINE, BRAND_EMAIL, skillGroups } from "@/lib/data";
import { fadeInUp, staggerContainer, slideInLeft, slideInRight, scaleIn } from "@/lib/motion";
import { Reveal } from "@/components/Reveal";
import { useTranslations } from "next-intl";

// ─── Inline data ────────────────────────────────────────────────────────────

const timelineItems = [
  {
    year: "2024",
    title: "Senior Full-Stack Engineer",
    org: "Vercel",
    desc: "Leading the developer-experience team, shipping features used by 1M+ developers. Architected a new edge-first deployment pipeline that cut cold-start latency by 40%.",
    side: "right",
  },
  {
    year: "2022",
    title: "Lead Product Engineer",
    org: "Linear",
    desc: "Owned the real-time collaboration layer and redesigned the keyboard-shortcut system. Grew the design-engineering practice from 2 to 8 people.",
    side: "left",
  },
  {
    year: "2020",
    title: "Full-Stack Developer",
    org: "Shopify",
    desc: "Built merchant-facing analytics tools processing 50M+ events per day. Introduced component-driven development across three product squads.",
    side: "right",
  },
  {
    year: "2018",
    title: "UI Engineer",
    org: "Figma",
    desc: "Contributed to the canvas rendering engine and shipped the first iteration of the component properties panel. Fell in love with the intersection of design tools and developer workflows.",
    side: "left",
  },
  {
    year: "2016",
    title: "Computer Science, B.Sc.",
    org: "University of Toronto",
    desc: "Graduated with distinction. Thesis on adaptive UI rendering for low-bandwidth environments. Founded the university's first design-engineering club.",
    side: "right",
  },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/alexrivera", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/in/alexrivera", icon: Linkedin },
  { label: "Twitter", href: "https://twitter.com/alexrivera_dev", icon: Twitter },
  {
    label: "Read.cv",
    href: "https://read.cv/alexrivera",
    icon: ExternalLink,
  },
];

const proficiencyMap: Record<string, number> = {
  "React": 97,
  "Next.js 14": 95,
  "TypeScript": 94,
  "Tailwind CSS": 93,
  "Framer Motion": 88,
  "WebGL / Three.js": 75,
  "Node.js": 90,
  "PostgreSQL": 85,
  "Redis": 80,
  "GraphQL": 82,
  "tRPC": 88,
  "Prisma": 86,
  "Figma": 92,
  "Design Systems": 91,
  "Prototyping": 89,
  "User Research": 78,
  "Docker": 80,
  "Vercel / Edge": 90,
  "CI/CD": 83,
  "AWS": 75,
  "Agile / Scrum": 90,
  "Code Review": 93,
  "Technical Writing": 85,
  "Mentorship": 88,
};

// ─── Sub-components ──────────────────────────────────────────────────────────

function GlowButton({
  href,
  children,
  download,
}: {
  href: string;
  children: React.ReactNode;
  download?: boolean;
}) {
  return (
    <motion.a
      href={href}
      download={download}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--primary)] text-white font-semibold text-sm shadow-[0_0_24px_rgba(168,85,247,0.35)] hover:shadow-[0_0_36px_rgba(168,85,247,0.55)] transition-shadow duration-300"
    >
      {children}
    </motion.a>
  );
}

function SkillBar({ name, pct }: { name: string; pct: number }) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between items-center">
        <span className="text-xs font-medium text-[var(--foreground)]">{name}</span>
        <span className="text-xs text-[var(--muted)]">{pct}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-[var(--border)] overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-[var(--primary)] to-purple-400"
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
        />
      </div>
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  const t = useTranslations();

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* ── 1. Split Intro ─────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(ellipse at center, var(--primary) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1"
          >
            <motion.p
              variants={fadeInUp}
              className="text-[var(--primary)] text-sm font-semibold uppercase tracking-widest mb-4"
            >
              {t("about.eyebrow")}
            </motion.p>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tight text-balance leading-[1.1] mb-6"
            >
              {t("about.heading")}
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-[var(--muted)] text-lg leading-relaxed mb-8 text-pretty max-w-lg"
            >
              {t("about.intro")}
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
              <GlowButton href="/contact">{t("about.cta.contact")}</GlowButton>
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[var(--border)] text-[var(--foreground)] font-semibold text-sm hover:border-[var(--primary)]/40 hover:text-[var(--primary)] transition-all duration-200"
              >
                <Download size={15} />
                {t("about.cta.resume")}
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right — avatar */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate="visible"
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Gradient border ring */}
              <div
                className="absolute -inset-[3px] rounded-3xl"
                style={{
                  background:
                    "linear-gradient(135deg, var(--primary), #7c3aed, #a855f7, transparent 60%)",
                }}
              />
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden bg-[var(--surface)] border border-[var(--border)]">
                <img
                  src="https://www.essaydone.ai/images/author/dr-alex-rivera.png"
                  alt={BRAND_NAME}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const el = e.currentTarget as HTMLImageElement;
                    el.style.display = "none";
                  }}
                />
                {/* Fallback monogram */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[var(--primary)]/20 to-purple-900/40">
                  <span className="text-7xl font-black text-[var(--primary)] select-none">
                    AR
                  </span>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -bottom-5 -left-5 bg-[var(--surface)] border border-[var(--border)] rounded-2xl px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.4)] flex items-center gap-3"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.7)]" />
                <span className="text-sm font-medium text-[var(--foreground)]">
                  {t("about.badge")}
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. Timeline Bio ────────────────────────────────────────────────── */}
      <Reveal>
        <section className="py-24 border-t border-[var(--border)]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-2xl mb-16">
              <p className="text-[var(--primary)] text-sm font-semibold uppercase tracking-widest mb-3">
                {t("about.timeline.eyebrow")}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                {t("about.timeline.heading")}
              </h2>
              <p className="text-[var(--muted)] leading-relaxed">
                {t("about.timeline.subheading")}
              </p>
            </div>

            {/* Pull quote */}
            <Reveal delay={0.1}>
              <blockquote className="relative mb-16 pl-6 border-l-2 border-[var(--primary)]">
                <p className="text-xl md:text-2xl font-semibold italic text-[var(--foreground)] leading-snug text-pretty">
                  {t("about.pullquote")}
                </p>
                <footer className="mt-3 text-sm text-[var(--muted)]">
                  {t("about.pullquote.attribution")}
                </footer>
              </blockquote>
            </Reveal>

            {/* Timeline */}
            <div className="relative">
              {/* Center line (desktop) */}
              <div className="hidden lg:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-[var(--border)]" />

              <div className="space-y-12">
                {timelineItems.map((item, i) => (
                  <Reveal key={item.year + item.org} delay={i * 0.07}>
                    <div
                      className={`relative grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-start ${
                        item.side === "left" ? "" : "lg:direction-rtl"
                      }`}
                    >
                      {/* Dot */}
                      <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-5 w-3 h-3 rounded-full bg-[var(--primary)] shadow-[0_0_10px_rgba(168,85,247,0.6)] z-10" />

                      {item.side === "right" ? (
                        <>
                          <div className="lg:text-right">
                            <span className="inline-block text-xs font-bold text-[var(--primary)] bg-[var(--primary)]/10 px-3 py-1 rounded-full mb-2">
                              {item.year}
                            </span>
                          </div>
                          <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6 hover:border-[var(--primary)]/30 transition-colors duration-200 shadow-[0_2px_12px_rgba(0,0,0,0.2)]">
                            <p className="font-bold text-[var(--foreground)] mb-0.5">
                              {item.title}
                            </p>
                            <p className="text-[var(--primary)] text-sm font-medium mb-3">
                              {item.org}
                            </p>
                            <p className="text-[var(--muted)] text-sm leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6 hover:border-[var(--primary)]/30 transition-colors duration-200 shadow-[0_2px_12px_rgba(0,0,0,0.2)] lg:col-start-1">
                            <p className="font-bold text-[var(--foreground)] mb-0.5">
                              {item.title}
                            </p>
                            <p className="text-[var(--primary)] text-sm font-medium mb-3">
                              {item.org}
                            </p>
                            <p className="text-[var(--muted)] text-sm leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                          <div className="lg:text-left hidden lg:block">
                            <span className="inline-block text-xs font-bold text-[var(--primary)] bg-[var(--primary)]/10 px-3 py-1 rounded-full">
                              {item.year}
                            </span>
                          </div>
                        </>
                      )}
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ── 3. Skills & Technologies ───────────────────────────────────────── */}
      <Reveal>
        <section className="py-24 border-t border-[var(--border)] bg-[var(--surface)]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-2xl mb-16">
              <p className="text-[var(--primary)] text-sm font-semibold uppercase tracking-widest mb-3">
                {t("about.skills.eyebrow")}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                {t("about.skills.heading")}
              </h2>
              <p className="text-[var(--muted)] leading-relaxed">
                {t("about.skills.subheading")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {skillGroups.map((group, gi) => (
                <Reveal key={group.category} delay={gi * 0.08}>
                  <div className="bg-[var(--background)] border border-[var(--border)] rounded-2xl p-6 hover:border-[var(--primary)]/30 transition-all duration-200 shadow-[0_1px_4px_rgba(0,0,0,0.15),0_8px_24px_-8px_rgba(0,0,0,0.25)]">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-8 h-8 rounded-lg bg-[var(--primary)]/15 flex items-center justify-center">
                        <CheckCircle size={16} className="text-[var(--primary)]" />
                      </div>
                      <h3 className="font-bold text-[var(--foreground)] text-sm uppercase tracking-widest">
                        {group.category}
                      </h3>
                    </div>

                    <div className="space-y-4">
                      {group.skills.map((skill) => (
                        <SkillBar
                          key={skill}
                          name={skill}
                          pct={proficiencyMap[skill] ?? 80}
                        />
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* ── 4. Social Links Row ────────────────────────────────────────────── */}
      <Reveal>
        <section className="py-24 border-t border-[var(--border)]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="text-center md:text-left">
                <p className="text-[var(--primary)] text-sm font-semibold uppercase tracking-widest mb-3">
                  {t("about.connect.eyebrow")}
                </p>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
                  {t("about.connect.heading")}
                </h2>
                <p className="text-[var(--muted)] leading-relaxed max-w-md">
                  {t("about.connect.subheading")}
                </p>
              </div>

              <div className="flex flex-col items-center md:items-end gap-6">
                {/* Social icon row */}
                <div className="flex items-center gap-3">
                  {socialLinks.map((s) => {
                    const Icon = s.icon;
                    return (
                      <motion.a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        whileHover={{ scale: 1.12, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-11 h-11 rounded-xl bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center text-[var(--muted)] hover:text-[var(--primary)] hover:border-[var(--primary)]/40 transition-colors duration-200 shadow-[0_2px_8px_rgba(0,0,0,0.2)]"
                      >
                        <Icon size={18} />
                      </motion.a>
                    );
                  })}
                </div>

                {/* Download résumé */}
                <GlowButton href="/resume.pdf" download>
                  <Download size={15} />
                  {t("about.cta.resume")}
                </GlowButton>
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </main>
  );
}