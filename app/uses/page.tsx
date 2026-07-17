"use client";
import { motion } from "framer-motion";
import { Monitor, Keyboard, Headphones, Code2, Layers, Zap, Settings } from 'lucide-react';
import { Reveal } from "@/components/Reveal";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/motion";

// ─── Types ───────────────────────────────────────────────────────────────────

interface GearItem {
  name: string;
  description: string;
  badge: string | null;
}

interface GearCategory {
  id: string;
  title: string;
  icon: string;
  items: GearItem[];
}

// ─── Data ────────────────────────────────────────────────────────────────────

const gearCategories: GearCategory[] = [
  {
    id: "hardware",
    title: "Hardware Setup",
    icon: "Monitor",
    items: [
      {
        name: 'MacBook Pro 16" M3 Max',
        description:
          "The workhorse. 48GB unified memory handles everything from video editing to running multiple Docker containers without breaking a sweat.",
        badge: "Primary Machine",
      },
      {
        name: 'LG UltraFine 5K 27"',
        description:
          "Retina-quality display that makes design work a joy. The P3 wide color gamut is essential for accurate color grading.",
        badge: null,
      },
      {
        name: "Apple Studio Display",
        description:
          "Secondary monitor for reference, documentation, and communication. The built-in webcam is surprisingly good.",
        badge: null,
      },
      {
        name: "Ergotron LX Dual Monitor Arm",
        description:
          "Frees up desk space and lets me position both monitors at the perfect height and angle.",
        badge: null,
      },
    ],
  },
  {
    id: "input",
    title: "Input Devices",
    icon: "Keyboard",
    items: [
      {
        name: "Keychron Q1 Pro (Gateron G Pro Red)",
        description:
          "My daily driver keyboard. The aluminum build and linear switches make long coding sessions comfortable. Fully programmable via QMK.",
        badge: "Favorite",
      },
      {
        name: "Logitech MX Master 3S",
        description:
          "The scroll wheel alone is worth the price. Seamless switching between three devices and excellent ergonomics for all-day use.",
        badge: null,
      },
      {
        name: "Apple Magic Trackpad",
        description:
          "Kept on the left side for gesture-heavy workflows in Figma and browser navigation.",
        badge: null,
      },
    ],
  },
  {
    id: "audio",
    title: "Audio & Video",
    icon: "Headphones",
    items: [
      {
        name: "Sony WH-1000XM5",
        description:
          "Best-in-class noise cancellation for deep focus sessions. The 30-hour battery means I rarely think about charging.",
        badge: null,
      },
      {
        name: "Shure MV7 USB Microphone",
        description:
          "Broadcast-quality audio for calls, recordings, and the occasional podcast appearance. The built-in headphone jack is a nice touch.",
        badge: null,
      },
      {
        name: "Elgato Key Light Air",
        description:
          "Consistent, adjustable lighting for video calls. Controlled via the Elgato app or Stream Deck.",
        badge: null,
      },
    ],
  },
  {
    id: "editor",
    title: "Editor & Terminal",
    icon: "Code2",
    items: [
      {
        name: "VS Code",
        description:
          "Still the best all-around editor. My config is minimal — I rely on a handful of well-chosen extensions rather than a bloated setup.",
        badge: "Daily Driver",
      },
      {
        name: "Warp Terminal",
        description:
          "The AI-assisted command completion and block-based output make it a massive upgrade over iTerm2. The team collaboration features are underrated.",
        badge: null,
      },
      {
        name: "Catppuccin Mocha Theme",
        description:
          "Easy on the eyes for long sessions. Consistent across VS Code, Warp, and even my browser DevTools.",
        badge: null,
      },
      {
        name: "JetBrains Mono",
        description:
          "Ligature support and excellent readability at small sizes. I use it at 14px with 1.6 line height.",
        badge: null,
      },
    ],
  },
  {
    id: "software",
    title: "Software & Apps",
    icon: "Layers",
    items: [
      {
        name: "Figma",
        description:
          "My design tool of choice. The developer handoff, component system, and plugin ecosystem are unmatched. I live in Figma for UI work.",
        badge: null,
      },
      {
        name: "Linear",
        description:
          "Project management that doesn\u2019t get in the way. The keyboard-first design and GitHub integration make it the best issue tracker I\u2019ve used.",
        badge: null,
      },
      {
        name: "Raycast",
        description:
          "Replaced Spotlight entirely. The extension ecosystem, clipboard history, and window management make it indispensable.",
        badge: "Must Have",
      },
      {
        name: "Notion",
        description:
          "Personal knowledge base, project notes, and client documentation. I keep it simple \u2014 no elaborate systems.",
        badge: null,
      },
      {
        name: "CleanShot X",
        description:
          "The best screenshot and screen recording tool on macOS. Annotation, scrolling capture, and cloud upload in one app.",
        badge: null,
      },
    ],
  },
  {
    id: "productivity",
    title: "Productivity Stack",
    icon: "Zap",
    items: [
      {
        name: "Elgato Stream Deck MK.2",
        description:
          "Mapped to my most common actions: mute/unmute, switch audio sources, trigger Raycast, and launch apps. Saves dozens of keystrokes per hour.",
        badge: null,
      },
      {
        name: "1Password",
        description:
          "Password manager, SSH key storage, and secure notes. The developer tools integration with the CLI is excellent.",
        badge: null,
      },
      {
        name: "Bartender 4",
        description:
          "Keeps the menu bar clean. I have 20+ menu bar apps and Bartender makes them manageable.",
        badge: null,
      },
    ],
  },
];

// ─── Icon resolver ────────────────────────────────────────────────────────────

const ICON_MAP: Record<string, React.ReactNode> = {
  Monitor: <Monitor size={20} />,
  Keyboard: <Keyboard size={20} />,
  Headphones: <Headphones size={20} />,
  Code2: <Code2 size={20} />,
  Layers: <Layers size={20} />,
  Zap: <Zap size={20} />,
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function ItemCard({ item }: { item: GearItem }) {
  return (
    <motion.div
      variants={scaleIn}
      className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-5 hover:border-[var(--primary)]/30 transition-all duration-300"
    >
      <div className="flex items-start justify-between gap-3 mb-1">
        <span className="font-semibold text-[var(--foreground)] text-sm leading-snug">
          {item.name}
        </span>
        {item.badge && (
          <span className="shrink-0 bg-[var(--primary)]/10 text-[var(--primary)] text-xs px-2 py-0.5 rounded-full font-medium">
            {item.badge}
          </span>
        )}
      </div>
      <p className="text-[var(--muted)] text-sm leading-relaxed mt-1">
        {item.description}
      </p>
    </motion.div>
  );
}

function CategorySection({
  category,
  delay,
}: {
  category: GearCategory;
  delay: number;
}) {
  const icon = ICON_MAP[category.icon] ?? <Settings size={20} />;

  return (
    <Reveal delay={delay}>
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-[var(--primary)]/10 text-[var(--primary)]">
            {icon}
          </span>
          <h2 className="text-xl font-bold text-[var(--foreground)] tracking-tight">
            {category.title}
          </h2>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {category.items.map((item) => (
            <ItemCard key={item.name} item={item} />
          ))}
        </motion.div>
      </div>
    </Reveal>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function UsesPage() {
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
            {/* Eyebrow badge */}
            <motion.div variants={fadeInUp}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--surface)] border border-[var(--border)] text-[var(--muted)] text-xs font-semibold uppercase tracking-widest">
                <Settings size={13} className="text-[var(--primary)]" />
                Setup
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-6xl font-extrabold tracking-tight leading-none"
            >
              <span className="gradient-text">My Gear &amp; Tooling</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeInUp}
              className="text-[var(--muted)] text-lg leading-relaxed max-w-2xl"
            >
              A curated list of the hardware, software, and tools I use daily to
              design and build products. Updated December 2024.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 2: Quick Stats ──────────────────────────────────────── */}
      <section className="pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                { label: "6 Categories" },
                { label: "21 Items" },
                { label: "Updated Dec 2024" },
              ].map((stat) => (
                <span
                  key={stat.label}
                  className="bg-[var(--surface)] border border-[var(--border)] rounded-full px-6 py-3 flex items-center gap-2 text-sm font-medium text-[var(--foreground)]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] shrink-0" />
                  {stat.label}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── SECTION 3: Gear Categories ──────────────────────────────────── */}
      <section className="pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          {gearCategories.map((category, index) => (
            <CategorySection
              key={category.id}
              category={category}
              delay={index * 0.05}
            />
          ))}
        </div>
      </section>

      {/* ── SECTION 4: Disclaimer ───────────────────────────────────────── */}
      <section className="pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <p className="text-center text-[var(--muted)] text-xs">
              Some links may be affiliate links. I only recommend tools I
              genuinely use and love.
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
