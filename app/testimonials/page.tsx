"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Star, Quote, Users, Award, Heart, ArrowRight } from 'lucide-react';
import { Reveal } from "@/components/Reveal";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/motion";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  avatar: string;
  highlight: boolean;
}

const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Sarah Chen",
    role: "CTO",
    company: "Luminary",
    quote:
      "Alex delivered a dashboard that cut our report load time by 68%. The attention to both performance and visual polish is rare. We shipped faster than expected and the codebase is something our team is proud to maintain.",
    rating: 5,
    avatar: "SC",
    highlight: true,
  },
  {
    id: "t2",
    name: "Marcus Webb",
    role: "Product Lead",
    company: "Orbit",
    quote:
      "The design system Alex built became the foundation for three product teams. Accessible, well-documented, and genuinely beautiful. It raised our entire engineering and design bar.",
    rating: 5,
    avatar: "MW",
    highlight: false,
  },
  {
    id: "t3",
    name: "Priya Nair",
    role: "Founder",
    company: "Folio",
    quote:
      "From concept to launch in six weeks. Alex understood our users better than we did and translated that into an interface that photographers actually love. The attention to detail is extraordinary.",
    rating: 5,
    avatar: "PN",
    highlight: false,
  },
  {
    id: "t4",
    name: "James Okafor",
    role: "Engineering Manager",
    company: "Stripe",
    quote:
      "Alex joined as a contractor and immediately elevated the team. The code reviews were insightful, the PRs were clean, and the features shipped on time. Would hire again without hesitation.",
    rating: 5,
    avatar: "JO",
    highlight: false,
  },
  {
    id: "t5",
    name: "Elena Vasquez",
    role: "Head of Design",
    company: "Vercel",
    quote:
      "Rare to find someone who can move fluidly between Figma and production code. Alex bridges the design-engineering gap better than anyone I\u2019ve worked with. A true full-stack designer.",
    rating: 5,
    avatar: "EV",
    highlight: true,
  },
  {
    id: "t6",
    name: "Tom Lindqvist",
    role: "CEO",
    company: "Pulse",
    quote:
      "We went from a rough prototype to a polished SaaS product in three months. Alex\u2019s ability to prioritize ruthlessly and ship quality work under pressure is exactly what an early-stage startup needs.",
    rating: 5,
    avatar: "TL",
    highlight: false,
  },
  {
    id: "t7",
    name: "Aisha Kamara",
    role: "Senior Designer",
    company: "Linear",
    quote:
      "Working alongside Alex was a masterclass in design systems thinking. The component architecture was elegant, the documentation thorough, and the Figma-to-code handoff was seamless.",
    rating: 5,
    avatar: "AK",
    highlight: false,
  },
  {
    id: "t8",
    name: "David Park",
    role: "VP Engineering",
    company: "Shopify",
    quote:
      "Alex\u2019s analytics tooling handled 50M+ events per day without a hiccup. The architecture decisions were sound, the performance was excellent, and the team learned a lot from the collaboration.",
    rating: 5,
    avatar: "DP",
    highlight: false,
  },
  {
    id: "t9",
    name: "Nina Rossi",
    role: "Product Designer",
    company: "Figma",
    quote:
      "The canvas rendering contributions Alex made were technically impressive and shipped with zero regressions. A developer who truly understands design constraints is invaluable.",
    rating: 5,
    avatar: "NR",
    highlight: false,
  },
];

const featuredTestimonials = testimonials.filter((t) => t.highlight);
const gridTestimonials = testimonials.filter((t) => !t.highlight);

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className="text-yellow-400 fill-yellow-400"
        />
      ))}
    </div>
  );
}

function AvatarCircle({ initials }: { initials: string }) {
  return (
    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
      {initials}
    </div>
  );
}

function FeaturedCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="relative bg-[var(--surface)] border border-[var(--primary)]/30 rounded-2xl p-8 flex flex-col h-full">
      <Quote
        className="absolute top-6 right-6 text-[var(--primary)]/20"
        style={{ width: 48, height: 48 }}
      />
      <StarRating count={testimonial.rating} />
      <p className="text-lg italic text-[var(--foreground)] leading-relaxed flex-1 mb-6">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="flex items-center gap-4">
        <AvatarCircle initials={testimonial.avatar} />
        <div>
          <p className="font-semibold text-[var(--foreground)]">{testimonial.name}</p>
          <p className="text-sm text-[var(--muted)]">
            {testimonial.role} &middot; {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
}

function GridCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <motion.div
      variants={scaleIn}
      className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6 mb-6 break-inside-avoid hover:border-[var(--primary)]/30 transition-all duration-300"
    >
      <Quote
        size={20}
        className="mb-3"
        style={{ color: "rgba(168, 85, 247, 0.3)" }}
      />
      <StarRating count={testimonial.rating} />
      <p className="text-sm text-[var(--foreground)] italic leading-relaxed mb-4">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <AvatarCircle initials={testimonial.avatar} />
        <div>
          <p className="font-semibold text-[var(--foreground)] text-sm">{testimonial.name}</p>
          <p className="text-xs text-[var(--muted)]">
            {testimonial.role} &middot; {testimonial.company}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] overflow-x-hidden">
      {/* ── SECTION 1: HERO ─────────────────────────────────────────────── */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center gap-6"
          >
            {/* Eyebrow badge */}
            <motion.div variants={fadeInUp}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--primary)]/10 border border-[var(--primary)]/20 text-[var(--primary)] text-sm font-medium">
                <Users size={14} />
                Social Proof
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
            >
              Kind Words from{"\n"}
              <span className="gradient-text">Amazing People</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeInUp}
              className="text-lg text-[var(--muted)] max-w-2xl leading-relaxed"
            >
              Over the years I&apos;ve had the privilege of working with talented
              clients and colleagues who&apos;ve trusted me with their most
              important projects. Here&apos;s what they have to say.
            </motion.p>

            {/* Stat pills */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center justify-center gap-3 mt-2"
            >
              {[
                { icon: Users, label: "9 Testimonials" },
                { icon: Award, label: "5 Companies" },
                { icon: Heart, label: "100% 5-Star" },
              ].map((stat) => (
                <span
                  key={stat.label}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--surface)] border border-[var(--border)] text-sm font-medium text-[var(--foreground)]"
                >
                  <stat.icon size={14} className="text-[var(--primary)]" />
                  {stat.label}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 2: FEATURED TESTIMONIALS ────────────────────────────── */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="text-2xl font-bold text-[var(--foreground)] mb-8">
              Featured
            </h2>
          </Reveal>
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredTestimonials.map((testimonial) => (
                <FeaturedCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── SECTION 3: MASONRY QUOTE GRID ───────────────────────────────── */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="text-2xl font-bold text-[var(--foreground)] mb-8">
              All Testimonials
            </h2>
          </Reveal>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="columns-1 md:columns-2 lg:columns-3 gap-6"
          >
            {gridTestimonials.map((testimonial) => (
              <GridCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 4: CTA ──────────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <Reveal>
            <div className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-12 flex flex-col items-center gap-6">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)]">
                Want to work together?
              </h2>
              <p className="text-[var(--muted)] text-lg leading-relaxed">
                I&apos;m currently open to new projects and collaborations.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white font-semibold text-sm shadow-[0_0_24px_rgba(168,85,247,0.35)] hover:shadow-[0_0_40px_rgba(168,85,247,0.55)] transition-shadow duration-300"
              >
                Get in touch
                <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
