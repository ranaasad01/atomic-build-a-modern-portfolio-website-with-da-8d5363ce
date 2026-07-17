"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Download, Briefcase, GraduationCap, Award, Code2, MapPin, CheckCircle, Calendar } from 'lucide-react';
import { Reveal } from "@/components/Reveal";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/motion";

// ─── Inline data ─────────────────────────────────────────────────────────────

const workExperience = [
  {
    id: "w1",
    title: "Senior Full-Stack Engineer",
    company: "Vercel",
    location: "San Francisco, CA (Remote)",
    period: "Jan 2024 — Present",
    description:
      "Leading the developer-experience team, shipping features used by 1M+ developers. Architected a new edge-first deployment pipeline that cut cold-start latency by 40%.",
    achievements: [
      "Reduced cold-start latency by 40% via edge-first pipeline redesign",
      "Led a team of 6 engineers across 3 time zones",
      "Shipped 12 major DX features in 2024",
      "Improved Core Web Vitals scores across 500k+ deployments",
    ],
    tags: ["Next.js", "TypeScript", "Edge Runtime", "Go"],
  },
  {
    id: "w2",
    title: "Lead Product Engineer",
    company: "Linear",
    location: "San Francisco, CA",
    period: "Mar 2022 — Dec 2023",
    description:
      "Owned the real-time collaboration layer and redesigned the keyboard-shortcut system. Grew the design-engineering practice from 2 to 8 people.",
    achievements: [
      "Built real-time collaboration for 200k+ daily users",
      "Redesigned keyboard shortcut system — 94% user satisfaction",
      "Grew design-engineering team from 2 to 8",
      "Introduced component-driven development across 4 squads",
    ],
    tags: ["React", "TypeScript", "WebSockets", "Figma"],
  },
  {
    id: "w3",
    title: "Full-Stack Developer",
    company: "Shopify",
    location: "Toronto, ON (Hybrid)",
    period: "Jun 2020 — Feb 2022",
    description:
      "Built merchant-facing analytics tools processing 50M+ events per day. Introduced component-driven development across three product squads.",
    achievements: [
      "Analytics pipeline handling 50M+ events/day",
      "Reduced dashboard load time by 55%",
      "Mentored 4 junior developers",
      "Open-sourced 2 internal tools with 800+ GitHub stars",
    ],
    tags: ["React", "Ruby on Rails", "PostgreSQL", "Redis"],
  },
  {
    id: "w4",
    title: "UI Engineer",
    company: "Figma",
    location: "San Francisco, CA",
    period: "Aug 2018 — May 2020",
    description:
      "Contributed to the canvas rendering engine and shipped the first iteration of the component properties panel.",
    achievements: [
      "Contributed to canvas rendering engine (WebGL)",
      "Shipped component properties panel — used by 4M+ designers",
      "Improved rendering performance by 30% on complex documents",
      "Co-authored internal design system documentation",
    ],
    tags: ["TypeScript", "WebGL", "React", "C++"],
  },
];

const education = [
  {
    id: "e1",
    degree: "B.Sc. Computer Science",
    institution: "University of Toronto",
    period: "2014 — 2018",
    description:
      "Graduated with distinction. Thesis on adaptive UI rendering for low-bandwidth environments. Founded the university's first design-engineering club.",
    gpa: "3.9 / 4.0",
  },
  {
    id: "e2",
    degree: "UX Design Certificate",
    institution: "Google / Coursera",
    period: "2019",
    description:
      "Completed the Google UX Design Professional Certificate with a focus on user research methodologies and prototyping.",
    gpa: null,
  },
];

const certifications = [
  {
    id: "c1",
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    year: "2023",
    badge: "AWS",
  },
  {
    id: "c2",
    name: "Professional Scrum Master I (PSM I)",
    issuer: "Scrum.org",
    year: "2022",
    badge: "PSM",
  },
  {
    id: "c3",
    name: "Google UX Design Certificate",
    issuer: "Google",
    year: "2019",
    badge: "GUX",
  },
  {
    id: "c4",
    name: "MongoDB Certified Developer",
    issuer: "MongoDB University",
    year: "2021",
    badge: "MDB",
  },
];

const skillGroups = [
  {
    category: "Frontend",
    skills: ["React", "Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "WebGL"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "PostgreSQL", "Redis", "GraphQL", "tRPC", "Prisma"],
  },
  {
    category: "Design & Tools",
    skills: ["Figma", "Design Systems", "User Research", "Docker", "AWS", "CI/CD"],
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ResumePage(): React.ReactElement {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] overflow-x-hidden">
      {/* ── SECTION 1: Hero ──────────────────────────────────────────────── */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center text-center gap-6"
          >
            {/* Eyebrow badge */}
            <motion.div variants={fadeInUp}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 text-[var(--primary)] text-sm font-medium">
                <Briefcase size={14} />
                Résumé
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-extrabold tracking-tight gradient-text"
            >
              Alex Rivera
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-[var(--muted)] font-medium"
            >
              Full-Stack Developer &amp; UI/UX Designer
            </motion.p>

            {/* Location pill */}
            <motion.div variants={fadeInUp}>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--surface)] border border-[var(--border)] text-[var(--muted)] text-sm">
                <MapPin size={13} />
                San Francisco, CA
              </span>
            </motion.div>

            {/* CTA buttons */}
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-4 mt-2">
              <motion.a
                href="#"
                download
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white font-semibold text-sm shadow-[0_0_24px_rgba(168,85,247,0.35)] hover:shadow-[0_0_36px_rgba(168,85,247,0.55)] transition-shadow duration-300"
              >
                <Download size={16} />
                Download PDF
              </motion.a>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[var(--border)] text-[var(--foreground)] font-semibold text-sm hover:border-[var(--primary)]/50 hover:text-[var(--primary)] transition-all duration-200"
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 2: Work Experience ───────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="flex items-center gap-3 mb-12">
              <Briefcase size={22} className="text-[var(--primary)]" />
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Work Experience</h2>
            </div>
          </Reveal>

          <ol className="relative space-y-10">
            {workExperience.map((job, index) => (
              <li key={job.id} className="relative flex gap-6">
                {/* Vertical connector line (all but last) */}
                {index < workExperience.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute left-6 top-12 bottom-0 w-px bg-[var(--border)]"
                    style={{ transform: "translateX(-50%)" }}
                  />
                )}

                {/* Company initial circle */}
                <div className="w-12 h-12 rounded-full bg-[var(--surface)] border-2 border-[var(--primary)]/40 flex items-center justify-center font-bold text-[var(--primary)] text-sm shrink-0 z-10">
                  {job.company.charAt(0)}
                </div>

                {/* Card */}
                <Reveal delay={index * 0.1} className="flex-1">
                  <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6 hover:border-[var(--primary)]/30 transition-all duration-300 w-full">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="font-bold text-lg text-[var(--foreground)]">{job.title}</h3>
                        <p className="text-[var(--primary)] font-semibold text-sm">{job.company}</p>
                      </div>
                      <div className="flex flex-col sm:items-end gap-1 shrink-0">
                        <span className="inline-flex items-center gap-1 text-[var(--muted)] text-xs">
                          <Calendar size={11} />
                          {job.period}
                        </span>
                        <span className="inline-flex items-center gap-1 text-[var(--muted)] text-xs">
                          <MapPin size={11} />
                          {job.location}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-[var(--muted)] text-sm leading-relaxed mb-4">
                      {job.description}
                    </p>

                    {/* Achievements */}
                    <ul className="space-y-1.5 mb-4">
                      {job.achievements.map((achievement) => (
                        <li key={achievement} className="flex items-start gap-2">
                          <CheckCircle size={13} className="text-[var(--accent)] mt-0.5 shrink-0" />
                          <span className="text-sm text-[var(--muted)]">{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {job.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-[var(--primary)]/10 text-[var(--primary)] text-xs px-2 py-0.5 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── SECTION 3: Education ─────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-[var(--surface)]/30">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="flex items-center gap-3 mb-12">
              <GraduationCap size={22} className="text-[var(--primary)]" />
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Education</h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <Reveal key={edu.id} delay={index * 0.1}>
                <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6 h-full">
                  <h3 className="font-bold text-lg text-[var(--foreground)] mb-1">{edu.degree}</h3>
                  <p className="text-[var(--primary)] font-semibold text-sm mb-1">{edu.institution}</p>
                  <p className="text-[var(--muted)] text-xs mb-3 flex items-center gap-1">
                    <Calendar size={11} />
                    {edu.period}
                  </p>
                  <p className="text-[var(--muted)] text-sm leading-relaxed">{edu.description}</p>
                  {edu.gpa && (
                    <span className="inline-flex items-center mt-4 px-3 py-1 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 text-[var(--primary)] text-xs font-semibold">
                      GPA: {edu.gpa}
                    </span>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: Certifications ────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="flex items-center gap-3 mb-12">
              <Award size={22} className="text-[var(--primary)]" />
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Certifications</h2>
            </div>
          </Reveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {certifications.map((cert, index) => (
              <Reveal key={cert.id} delay={index * 0.08}>
                <motion.div
                  variants={scaleIn}
                  className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-5 text-center hover:border-[var(--primary)]/30 transition-all duration-300 h-full flex flex-col items-center"
                >
                  {/* Badge circle */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] flex items-center justify-center text-white font-bold text-sm mx-auto mb-3">
                    {cert.badge}
                  </div>
                  <p className="font-semibold text-sm text-[var(--foreground)] mb-1 leading-snug">
                    {cert.name}
                  </p>
                  <p className="text-[var(--muted)] text-xs mb-2">{cert.issuer}</p>
                  <span className="mt-auto inline-flex items-center px-2 py-0.5 rounded-full bg-[var(--background)] border border-[var(--border)] text-[var(--muted)] text-xs">
                    {cert.year}
                  </span>
                </motion.div>
              </Reveal>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 5: Skills Summary ────────────────────────────────────── */}
      <section className="py-20 px-6 bg-[var(--surface)]/30">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="flex items-center gap-3 mb-12">
              <Code2 size={22} className="text-[var(--primary)]" />
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Core Skills</h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillGroups.map((group, index) => (
              <Reveal key={group.category} delay={index * 0.1}>
                <div>
                  <p className="text-[var(--primary)] font-semibold text-sm uppercase tracking-widest mb-3">
                    {group.category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-[var(--surface)] border border-[var(--border)] text-[var(--foreground)] text-xs px-3 py-1.5 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: Download CTA ──────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="gradient-border rounded-2xl">
              <div className="bg-[var(--surface)] rounded-2xl p-10 md:p-14 text-center">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
                  Want the full PDF?
                </h2>
                <p className="text-[var(--muted)] text-base mb-8 max-w-md mx-auto">
                  Download a print-ready version of my résumé — formatted for recruiters and hiring managers.
                </p>
                <motion.a
                  href="#"
                  download
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white font-semibold text-sm shadow-[0_0_32px_rgba(168,85,247,0.4)] hover:shadow-[0_0_48px_rgba(168,85,247,0.6)] transition-shadow duration-300"
                >
                  <Download size={16} />
                  Download PDF Résumé
                </motion.a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
