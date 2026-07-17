"use client";

import { motion, type Variants } from "framer-motion";

import Link from "next/link";

import { ArrowRight, Star, Sparkles, Code2 as Github, Briefcase as Linkedin, MessageCircle as Twitter, ExternalLink, CheckCircle, Users, Zap, Award } from 'lucide-react';

import { BRAND_NAME, BRAND_TAGLINE, BRAND_EMAIL, projects, skillGroups } from "@/lib/data";

import { fadeInUp, fadeIn, staggerContainer, scaleIn, slideInLeft, slideInRight } from "@/lib/motion";

import { Reveal } from "@/components/Reveal";

import { useTranslations } from "next-intl";

const stats = [

  { value: "5+", label: "Years of Experience" },

  { value: "40+", label: "Projects Shipped" },

  { value: "12", label: "Happy Clients" },

  { value: "1.4k", label: "GitHub Stars" },

];

const testimonials = [

  {

    id: "t1",

    name: "Sarah Chen",

    role: "CTO at Luminary",

    avatar: "https://images.ctfassets.net/vztl6s0hp3ro/26BxtJGxXUMSWAQfPZfbVC/3838688bab3369fc3e6ee9bf9629a427/The-entry-level-listing-asking-for_-3-plus-years-of-experience.jpg",

    quote:

      "Alex delivered a dashboard that cut our report load time by 68%. The attention to both performance and visual polish is rare. We shipped faster than expected.",

    rating: 5,

  },

  {

    id: "t2",

    name: "Marcus Webb",

    role: "Product Lead at Orbit",

    avatar: "https://static.www.nfl.com/image/private/t_headshot_desktop/league/aewahyauhdstskbbuq43",

    quote:

      "The design system Alex built became the foundation for three product teams. Accessible, well-documented, and genuinely beautiful. It raised our entire bar.",

    rating: 5,

  },

  {

    id: "t3",

    name: "Priya Nair",

    role: "Founder at Folio",

    avatar: "https://media.licdn.com/dms/image/v2/D5622AQE3NpM1FP01Yg/feedshare-shrink_800/B56Zf4pvKcGUAg-/0/1752223383746?e=2147483647&v=beta&t=C11dC6M36dpAKpcbBRMtusPrnkgE-cNJfHc93ZNpFoQ",

    quote:

      "From concept to launch in six weeks. Alex understood our users better than we did and translated that into an interface that photographers actually love.",

    rating: 5,

  },

];

const values = [

  {

    id: "v1",

    icon: Zap,

    title: "Performance First",

    description:

      "Every millisecond matters. I optimize for Core Web Vitals, edge caching, and bundle size from day one, not as an afterthought.",

  },

  {

    id: "v2",

    icon: CheckCircle,

    title: "Accessible by Default",

    description:

      "WCAG 2.1 AA compliance, keyboard navigation, and screen-reader support are built in, not bolted on. Good design works for everyone.",

  },

  {

    id: "v3",

    icon: Users,

    title: "User-Centered Design",

    description:

      "I start with user research and end with usability testing. Beautiful interfaces that confuse people are not beautiful interfaces.",

  },

  {

    id: "v4",

    icon: Award,

    title: "Production Quality",

    description:

      "Type-safe, tested, and documented. Code I ship is code I am proud to maintain. No shortcuts that become tomorrow's technical debt.",

  },

];

const heroVariants: Variants = {

  hidden: {},

  visible: {

    transition: { staggerChildren: 0.12, delayChildren: 0.2 },

  },

};

const heroItem: Variants = {

  hidden: { opacity: 0, y: 28 },

  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },

};

const glowVariants: Variants = {

  hidden: { opacity: 0, scale: 0.8 },

  visible: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: "easeOut" } },

};

export default function HomePage() {

  const t = useTranslations();

  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] overflow-x-hidden">
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-16">

        {/* Background glow */}

        <motion.div variants={glowVariants} initial="hidden" animate="visible" className="absolute inset-0 pointer-events-none" aria-hidden="true">

          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[var(--primary)]/10 blur-[120px]" />

          <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full bg-[var(--primary)]/5 blur-[80px]" />

        </motion.div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: text */}

          <motion.div variants={heroVariants} initial="hidden" animate="visible">

            <motion.div variants={heroItem} className="mb-6">

              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/10 text-[var(--primary)] text-sm font-medium">

                <Sparkles size={14} />

                {t("hero.badge")}

              </span>

            </motion.div>

            <motion.h1 variants={heroItem} className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-balance mb-6">

              {t("hero.greeting")}{" "}

              <span className="text-[var(--primary)]">{BRAND_NAME}</span>

            </motion.h1>

            <motion.p variants={heroItem} className="text-xl text-[var(--muted)] leading-relaxed mb-4 text-pretty max-w-lg">

              {BRAND_TAGLINE}

            </motion.p>

            <motion.p variants={heroItem} className="text-base text-[var(--muted)] leading-relaxed mb-10 text-pretty max-w-lg">

              {t("hero.description")}

            </motion.p>

            <motion.div variants={heroItem} className="flex flex-wrap gap-4">

              <Link href="/projects" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--primary)] text-white font-semibold text-sm hover:bg-[var(--primary)]/90 transition-all duration-300 shadow-[0_0_24px_rgba(168,85,247,0.35)] hover:shadow-[0_0_36px_rgba(168,85,247,0.55)] hover:-translate-y-0.5">

                {t("hero.cta.primary")}

                <ArrowRight size={16} />

              </Link>

              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[var(--border)] text-[var(--foreground)] font-semibold text-sm hover:border-[var(--primary)]/40 hover:text-[var(--primary)] transition-all duration-300 hover:-translate-y-0.5">

                {t("hero.cta.secondary")}

              </Link>

            </motion.div>

            <motion.div variants={heroItem} className="flex items-center gap-6 mt-12">

              {[

                { icon: Github, href: "https://github.com/alexrivera", label: "GitHub" },

                { icon: Linkedin, href: "https://linkedin.com/in/alexrivera", label: "LinkedIn" },

                { icon: Twitter, href: "https://twitter.com/alexrivera_dev", label: "Twitter" },

              ].map(({ icon: Icon, href, label }) => (<motion.a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} whileHover={{ scale: 1.15, y: -2 }} whileTap={{ scale: 0.95 }} className="w-10 h-10 rounded-xl bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center text-[var(--muted)] hover:text-[var(--primary)] hover:border-[var(--primary)]/30 transition-colors duration-200">
                <Icon size={18} />
              </motion.a>))}

            </motion.div>

          </motion.div>

          {/* Right: stats card cluster */}

          <motion.div variants={slideInRight} initial="hidden" animate="visible" className="hidden lg:grid grid-cols-2 gap-4">

            {stats.map((stat, i) => (

              <motion.div key={stat.label} whileHover={{ scale: 1.03, y: -4 }} transition={{ duration: 0.25, ease: "easeOut" }} className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6 flex flex-col gap-1 shadow-[0_1px_2px_rgba(0,0,0,0.2),0_8px_24px_-8px_rgba(0,0,0,0.4)] hover:border-[var(--primary)]/30 transition-colors duration-300" style={{ transitionDelay: `${i * 0.08}s` }}>

                <span
                  className="text-4xl font-bold text-[var(--primary)] tracking-tight"
                  style={i === 2 ? {
                    color: "#f59e0b"
                  } : i === 0 ? {

                    backgroundColor: "#f97316"

                  } : undefined}>

                  {stat.value}

                </span>

                <span className="text-sm text-[var(--muted)] leading-snug">

                  {stat.label}

                </span>

              </motion.div>

            ))}

          </motion.div>

        </div>

        {/* Scroll indicator */}

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8, duration: 0.6 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" aria-hidden="true">

          <span className="text-xs text-[var(--muted)] tracking-widest uppercase">

            {t("hero.scroll")}

          </span>

          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }} className="w-px h-8 bg-gradient-to-b from-[var(--primary)]/60 to-transparent" />

        </motion.div>

      </section>
      {/* ── FEATURED PROJECTS ────────────────────────────────────────────── */}
      <section id="projects" className="py-24 md:py-32">

        <div className="max-w-6xl mx-auto px-6">

          <Reveal>

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">

              <div>

                <span className="text-[var(--primary)] text-sm font-semibold uppercase tracking-widest mb-3 block">

                  {t("projects.eyebrow")}

                </span>

                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">

                  {t("projects.heading")}

                </h2>

              </div>

              <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-medium text-[var(--muted)] hover:text-[var(--primary)] transition-colors duration-200 group shrink-0">

                {t("projects.viewAll")}

                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />

              </Link>

            </div>

          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Large featured card */}

            <Reveal delay={0.05}>

              <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.3, ease: "easeOut" }} className="lg:row-span-2 group relative bg-[var(--surface)] border border-[var(--border)] rounded-2xl overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.2),0_8px_32px_-8px_rgba(0,0,0,0.5)] hover:border-[var(--primary)]/30 transition-colors duration-300 flex flex-col">

                <div className="relative h-64 overflow-hidden">

                  <img src={featuredProjects[0]?.imageUrl ?? "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1648360/0abbbcbaab56312991b84901742be9c3ae607e5a/capsule_616x353.jpg?t=1784132007"} alt={featuredProjects[0]?.title ?? "Project"} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />

                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)] via-transparent to-transparent" />

                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[var(--primary)]/20 border border-[var(--primary)]/30 text-[var(--primary)] text-xs font-semibold">

                    {featuredProjects[0]?.category ?? "Web App"}

                  </span>

                </div>

                <div className="p-8 flex flex-col flex-1">

                  <h3 className="text-2xl font-bold mb-3 text-[var(--foreground)]">

                    {featuredProjects[0]?.title ?? "Luminary"}

                  </h3>

                  <p className="text-[var(--muted)] leading-relaxed mb-6 flex-1">

                    {featuredProjects[0]?.description ?? ""}

                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">

                    {(featuredProjects[0]?.tags ?? []).map((tag) => (<span key={tag} className="px-3 py-1 rounded-full bg-[var(--background)] border border-[var(--border)] text-[var(--muted)] text-xs font-medium">
                      {tag}
                    </span>))}

                  </div>

                  <div className="flex items-center gap-3">

                    <a href={featuredProjects[0]?.liveUrl ?? "#"} className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--primary)] hover:underline">

                      <ExternalLink size={14} />

                      {t("projects.liveLink")}

                    </a>

                    <a href={featuredProjects[0]?.repoUrl ?? "#"} className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">

                      <Github size={14} />

                      {t("projects.repoLink")}

                    </a>

                  </div>

                </div>

              </motion.div>

            </Reveal>

            {/* Two smaller cards stacked */}

            {featuredProjects.slice(1, 3).map((project, i) => (

              <Reveal key={project.id} delay={0.1 + i * 0.08}>

                <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3, ease: "easeOut" }} className="group relative bg-[var(--surface)] border border-[var(--border)] rounded-2xl overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.2),0_8px_24px_-8px_rgba(0,0,0,0.4)] hover:border-[var(--primary)]/30 transition-colors duration-300 flex flex-row">

                  <div className="relative w-36 shrink-0 overflow-hidden">

                    <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />

                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[var(--surface)]/20" />

                  </div>

                  <div className="p-6 flex flex-col justify-between flex-1">

                    <div>

                      <span className="text-[var(--primary)] text-xs font-semibold uppercase tracking-wider mb-2 block">

                        {project.category}

                      </span>

                      <h3 className="text-lg font-bold mb-2 text-[var(--foreground)]">

                        {project.title}

                      </h3>

                      <p className="text-[var(--muted)] text-sm leading-relaxed line-clamp-2">

                        {project.description}

                      </p>

                    </div>

                    <div className="flex items-center gap-3 mt-4">

                      <a href={project.liveUrl ?? "#"} className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--primary)] hover:underline">

                        <ExternalLink size={12} />

                        {t("projects.liveLink")}

                      </a>

                      <a href={project.repoUrl ?? "#"} className="inline-flex items-center gap-1 text-xs font-medium text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">

                        <Github size={12} />

                        {t("projects.repoLink")}

                      </a>

                    </div>

                  </div>

                </motion.div>

              </Reveal>

            ))}

          </div>

        </div>

      </section>
      {/* ── VALUE PROPS ──────────────────────────────────────────────────── */}
      <section id="about" className="py-24 md:py-32 bg-[var(--surface)]">

        <div className="max-w-6xl mx-auto px-6">

          <Reveal>

            <div className="max-w-2xl mb-16">

              <span className="text-[var(--primary)] text-sm font-semibold uppercase tracking-widest mb-3 block">

                {t("values.eyebrow")}

              </span>

              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance mb-4">

                {t("values.heading")}

              </h2>

              <p className="text-[var(--muted)] text-lg leading-relaxed text-pretty">

                {t("values.subheading")}

              </p>

            </div>

          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {values.map((v, i) => (

              <Reveal key={v.id} delay={i * 0.08}>

                <motion.div whileHover={{ y: -4, borderColor: "rgba(168,85,247,0.3)" }} transition={{ duration: 0.25, ease: "easeOut" }} className="bg-[var(--background)] border border-[var(--border)] rounded-2xl p-8 shadow-[0_1px_2px_rgba(0,0,0,0.15),0_4px_16px_-4px_rgba(0,0,0,0.3)] transition-colors duration-300">

                  <div className="w-12 h-12 rounded-xl bg-[var(--primary)]/10 border border-[var(--primary)]/20 flex items-center justify-center mb-5">

                    <v.icon size={22} className="text-[var(--primary)]" />

                  </div>

                  <h3 className="text-xl font-bold mb-3 text-[var(--foreground)]">

                    {v.title}

                  </h3>

                  <p className="text-[var(--muted)] leading-relaxed text-sm">

                    {v.description}

                  </p>

                </motion.div>

              </Reveal>

            ))}

          </div>

          {/* Skills strip */}

          <Reveal delay={0.2}>

            <div className="mt-16 pt-16 border-t border-[var(--border)]">

              <p className="text-[var(--muted)] text-sm font-semibold uppercase tracking-widest mb-8">

                {t("values.skillsLabel")}

              </p>

              <div className="flex flex-wrap gap-3">

                {skillGroups.flatMap((g) => g.skills).slice(0, 20).map((skill) => (<motion.span key={skill} whileHover={{ scale: 1.05 }} className="px-4 py-2 rounded-full bg-[var(--surface)] border border-[var(--border)] text-[var(--foreground)] text-sm font-medium hover:border-[var(--primary)]/40 hover:text-[var(--primary)] transition-colors duration-200 cursor-default">
                  {skill}
                </motion.span>))}

              </div>

            </div>

          </Reveal>

        </div>

      </section>
      {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section id="testimonials" className="py-24 md:py-32">

        <div className="max-w-6xl mx-auto px-6">

          <Reveal>

            <div className="text-center max-w-2xl mx-auto mb-16">

              <span className="text-[var(--primary)] text-sm font-semibold uppercase tracking-widest mb-3 block">

                {t("testimonials.eyebrow")}

              </span>

              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance mb-4">

                {t("testimonials.heading")}

              </h2>

              <p className="text-[var(--muted)] text-lg leading-relaxed text-pretty">

                {t("testimonials.subheading")}

              </p>

            </div>

          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {testimonials.map((testimonial, i) => (

              <Reveal key={testimonial.id} delay={i * 0.1}>

                <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.3, ease: "easeOut" }} className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-8 shadow-[0_1px_2px_rgba(0,0,0,0.2),0_8px_24px_-8px_rgba(0,0,0,0.4)] hover:border-[var(--primary)]/20 transition-colors duration-300 flex flex-col">

                  <div className="flex items-center gap-1 mb-5">

                    {Array.from({ length: testimonial.rating }).map((_, si) => (

                      <Star key={si} size={14} className="text-[var(--primary)] fill-[var(--primary)]" />

                    ))}

                  </div>

                  <blockquote className="text-[var(--foreground)] text-sm leading-relaxed flex-1 mb-6">

                    &ldquo;{testimonial.quote}&rdquo;

                  </blockquote>

                  <div className="flex items-center gap-3 pt-6 border-t border-[var(--border)]">

                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full object-cover ring-2 ring-[var(--primary)]/20"
                      onError={(e) => {

                        (e.currentTarget as HTMLImageElement).src =

                          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' rx='20' fill='%23a855f7' opacity='0.2'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23a855f7' font-size='16' font-family='sans-serif'%3E" +

                          testimonial.name.charAt(0) +

                          "%3C/text%3E%3C/svg%3E";

                      }} />

                    <div>

                      <p className="text-[var(--foreground)] text-sm font-semibold">

                        {testimonial.name}

                      </p>

                      <p className="text-[var(--muted)] text-xs">{testimonial.role}</p>

                    </div>

                  </div>

                </motion.div>

              </Reveal>

            ))}

          </div>

        </div>

      </section>
      {/* ── CTA BANNER ───────────────────────────────────────────────────── */}
      <section id="contact" className="py-24 md:py-32 bg-[var(--surface)]">

        <div className="max-w-6xl mx-auto px-6">

          <Reveal>

            <div className="relative rounded-3xl overflow-hidden border border-[var(--primary)]/20 bg-gradient-to-br from-[var(--primary)]/10 via-[var(--surface)] to-[var(--background)] p-12 md:p-20 text-center shadow-[0_0_80px_rgba(168,85,247,0.12)]">

              {/* Glow orb */}

              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[var(--primary)]/15 blur-[80px] pointer-events-none" aria-hidden="true" />

              <div className="relative z-10">

                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/10 text-[var(--primary)] text-sm font-medium mb-6">

                  <Sparkles size={14} />

                  {t("cta.badge")}

                </span>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-6">

                  {t("cta.heading")}

                </h2>

                <p className="text-[var(--muted)] text-lg leading-relaxed text-pretty max-w-xl mx-auto mb-10">

                  {t("cta.description")}

                </p>

                <div className="flex flex-wrap items-center justify-center gap-4">

                  <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[var(--primary)] text-white font-semibold hover:bg-[var(--primary)]/90 transition-all duration-300 shadow-[0_0_32px_rgba(168,85,247,0.4)] hover:shadow-[0_0_48px_rgba(168,85,247,0.6)] hover:-translate-y-0.5">

                    {t("cta.button")}

                    <ArrowRight size={16} />

                  </Link>

                  <a href={`mailto:${BRAND_EMAIL}`} className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-[var(--border)] text-[var(--foreground)] font-semibold hover:border-[var(--primary)]/40 hover:text-[var(--primary)] transition-all duration-300 hover:-translate-y-0.5">

                    {BRAND_EMAIL}

                  </a>

                </div>

              </div>

            </div>

          </Reveal>

        </div>

      </section>
    </main>
  );

}