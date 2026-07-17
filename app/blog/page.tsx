"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, Tag, ArrowRight, Rss } from 'lucide-react';
import { Reveal } from "@/components/Reveal";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/motion";

interface BlogPost {
  id: string;
  title: string;
  date: string;
  readTime: string;
  tags: string[];
  excerpt: string;
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: "b1",
    title: "Building a Design System from Scratch",
    date: "December 12, 2024",
    readTime: "8 min read",
    tags: ["Design Systems", "React", "Tailwind CSS"],
    excerpt:
      "How I built a token-driven, accessible component library used across three product teams — and what I learned along the way.",
    featured: true,
  },
  {
    id: "b2",
    title: "The Case for Edge-First Architecture",
    date: "November 28, 2024",
    readTime: "6 min read",
    tags: ["Performance", "Next.js", "Edge"],
    excerpt:
      "Why moving compute to the edge cut our cold-start latency by 40% and what trade-offs you should know before making the switch.",
  },
  {
    id: "b3",
    title: "Framer Motion Patterns I Use Every Day",
    date: "November 5, 2024",
    readTime: "5 min read",
    tags: ["Animation", "Framer Motion", "UX"],
    excerpt:
      "A practical guide to the animation patterns that make interfaces feel alive — without sacrificing performance or accessibility.",
  },
  {
    id: "b4",
    title: "TypeScript Generics: A Visual Guide",
    date: "October 18, 2024",
    readTime: "10 min read",
    tags: ["TypeScript", "Developer Experience"],
    excerpt:
      "Generics demystified with real-world examples from production codebases. If you've been avoiding them, this is your entry point.",
  },
  {
    id: "b5",
    title: "Designing for Reduced Motion",
    date: "September 30, 2024",
    readTime: "4 min read",
    tags: ["Accessibility", "Animation", "CSS"],
    excerpt:
      "Respecting prefers-reduced-motion isn't just an accessibility checkbox — it's an opportunity to write better animation code.",
  },
  {
    id: "b6",
    title: "My 2024 Developer Tooling Stack",
    date: "September 10, 2024",
    readTime: "7 min read",
    tags: ["Tooling", "Productivity", "Setup"],
    excerpt:
      "Every tool in my daily workflow — from editor extensions to terminal aliases — and why each one earns its place.",
  },
];

const featuredPost = blogPosts.find((p) => p.featured)!;
const remainingPosts = blogPosts.filter((p) => !p.featured);

function TagBadge({ tag }: { tag: string }) {
  return (
    <span className="inline-flex items-center gap-1 bg-[var(--primary)]/10 text-[var(--primary)] text-xs px-2 py-0.5 rounded-full font-medium">
      {tag}
    </span>
  );
}

function ArticleCard({ post }: { post: BlogPost }) {
  return (
    <motion.article
      variants={scaleIn}
      whileHover={{ y: -4, transition: { duration: 0.2, ease: "easeOut" } }}
      className="group flex flex-col bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6 hover:border-[var(--primary)]/30 transition-all duration-300 cursor-pointer"
    >
      <div className="flex flex-wrap gap-1.5 mb-3">
        {post.tags.map((tag) => (
          <TagBadge key={tag} tag={tag} />
        ))}
      </div>

      <h3 className="font-bold text-lg text-[var(--foreground)] mb-2 group-hover:text-[var(--primary)] transition-colors duration-200 leading-snug">
        {post.title}
      </h3>

      <p className="text-[var(--muted)] text-sm leading-relaxed mb-4 flex-1">
        {post.excerpt}
      </p>

      <div className="flex items-center gap-4 text-xs text-[var(--muted)] pt-4 border-t border-[var(--border)]">
        <span className="flex items-center gap-1.5">
          <Calendar size={12} />
          {post.date}
        </span>
        <span className="flex items-center gap-1.5">
          <Clock size={12} />
          {post.readTime}
        </span>
      </div>
    </motion.article>
  );
}

export default function BlogPage() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* ── SECTION 1: Hero ─────────────────────────────────────────────── */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 text-[var(--primary)] text-sm font-medium">
              <Rss size={14} />
              Writing
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
              <span className="gradient-text">Thoughts on Code,</span>
              <br />
              <span className="gradient-text">Design &amp; Craft</span>
            </h1>

            {/* Subtitle */}
            <p className="text-[var(--muted)] text-lg leading-relaxed max-w-2xl">
              Essays, tutorials, and opinions on building great software — from design systems and
              performance to developer experience and creative coding.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 2: Featured Article ─────────────────────────────────── */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <article className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl overflow-hidden hover:border-[var(--primary)]/30 transition-all duration-300 cursor-pointer group">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Left: decorative gradient placeholder */}
                <div className="bg-gradient-to-br from-[var(--primary)]/20 to-[var(--accent)]/20 h-64 md:h-auto flex items-center justify-center">
                  <div className="text-center space-y-3">
                    <div className="w-20 h-20 rounded-2xl bg-[var(--primary)]/20 border border-[var(--primary)]/30 flex items-center justify-center mx-auto">
                      <Tag size={36} className="text-[var(--primary)]" />
                    </div>
                    <p className="text-[var(--muted)] text-xs font-medium uppercase tracking-widest">
                      Featured Article
                    </p>
                  </div>
                </div>

                {/* Right: content */}
                <div className="p-8 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 text-[var(--primary)] text-xs font-semibold mb-4 w-fit">
                    ✦ Featured Post
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {featuredPost.tags.map((tag) => (
                      <TagBadge key={tag} tag={tag} />
                    ))}
                  </div>

                  <h2 className="text-2xl font-bold text-[var(--foreground)] mb-3 leading-snug group-hover:text-[var(--primary)] transition-colors duration-200">
                    {featuredPost.title}
                  </h2>

                  <p className="text-[var(--muted)] text-sm leading-relaxed mb-5">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-[var(--muted)] mb-6">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={12} />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={12} />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white text-sm font-semibold w-fit hover:opacity-90 transition-opacity duration-200">
                    Read Article
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* ── SECTION 3: Article Grid ──────────────────────────────────────── */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <h2 className="text-2xl font-bold text-[var(--foreground)] mb-8">All Articles</h2>
          </Reveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {remainingPosts.map((post) => (
              <ArticleCard key={post.id} post={post} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 4: Newsletter CTA ────────────────────────────────────── */}
      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="gradient-border rounded-2xl">
              <div className="bg-[var(--surface)] rounded-2xl p-10 text-center">
                <h2 className="text-2xl font-bold text-[var(--foreground)] mb-3">
                  Stay in the Loop
                </h2>
                <p className="text-[var(--muted)] text-sm leading-relaxed mb-8 max-w-md mx-auto">
                  Get new articles delivered straight to your inbox — no spam, no noise. Just
                  thoughtful writing on code, design, and the craft of building software.
                </p>

                {subscribed ? (
                  <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--primary)]/10 border border-[var(--primary)]/20 text-[var(--primary)] font-semibold text-sm">
                    ✓ You're subscribed — thanks!
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubscribe}
                    className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto"
                  >
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="flex-1 w-full bg-[var(--background)] border border-[var(--border)] rounded-xl px-4 py-3 text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--primary)]/60 focus:ring-2 focus:ring-[var(--primary)]/20 transition-all duration-200"
                    />
                    <button
                      type="submit"
                      className="w-full sm:w-auto bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white px-6 py-3 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity duration-200 whitespace-nowrap"
                    >
                      Subscribe
                    </button>
                  </form>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
