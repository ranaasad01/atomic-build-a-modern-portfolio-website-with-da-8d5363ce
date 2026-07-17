export interface NavLink {
  label: string;
  href: string;
  type: "route" | "anchor";
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
  category: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export const BRAND_NAME = "Alex Rivera";
export const BRAND_TAGLINE = "Full-Stack Developer & UI/UX Designer";
export const BRAND_EMAIL = "hello@alexrivera.dev";

export const navLinks: NavLink[] = [
  { label: "Home", href: "/", type: "route" },
  { label: "About", href: "/about", type: "route" },
  { label: "Projects", href: "/projects", type: "route" },
  { label: "Blog", href: "/blog", type: "route" },
  { label: "Testimonials", href: "/testimonials", type: "route" },
  { label: "Resume", href: "/resume", type: "route" },
  { label: "Contact", href: "/contact", type: "route" },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/alexrivera", icon: "Github" },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/alexrivera",
    icon: "Linkedin",
  },
  {
    label: "Twitter",
    href: "https://twitter.com/alexrivera_dev",
    icon: "Twitter",
  },
];

export const projects: Project[] = [
  {
    id: "luminary",
    title: "Luminary",
    description:
      "A real-time analytics platform for e-commerce brands. Built with Next.js, tRPC, and Recharts. Reduced average report load time by 68% through edge caching and query optimization.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "UI/UX"],
    imageUrl:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1648360/0abbbcbaab56312991b84901742be9c3ae607e5a/capsule_616x353.jpg?t=1784132007",
    liveUrl: "#",
    repoUrl: "#",
    featured: true,
    category: "Web App",
  },
  {
    id: "orbit",
    title: "Orbit Design System",
    description:
      "A fully accessible, token-driven component library used across three product teams. 80+ components, dark/light mode, Storybook docs, and a Figma kit.",
    tags: ["React", "Tailwind CSS", "Storybook", "Figma"],
    imageUrl:
      "https://s3-alpha.figma.com/hub/file/2243587999456758553/75e4372a-8462-487a-9eef-232cbcde11ad-cover.png",
    liveUrl: "#",
    repoUrl: "#",
    featured: true,
    category: "Open Source",
  },
  {
    id: "folio",
    title: "Folio",
    description:
      "A headless CMS and portfolio builder tailored for visual artists. Drag-and-drop gallery management, EXIF data parsing, and print-on-demand integration.",
    tags: ["Next.js", "Sanity CMS", "Stripe", "UI/UX"],
    imageUrl:
      "https://folio.org/wp-content/uploads/2023/08/folio-site-general-Illustration-social-image-1200.jpg",
    liveUrl: "#",
    repoUrl: "#",
    featured: true,
    category: "UI/UX Design",
  },
  {
    id: "pulse",
    title: "Pulse",
    description:
      "An internal tool turned SaaS product that helps remote engineering teams surface burnout signals early. Anonymous mood check-ins, trend charts, and Slack integration.",
    tags: ["React", "Node.js", "PostgreSQL", "Slack API"],
    imageUrl: "https://www.tabers.com/tabersonline/repview?type=539-163&name=P46",
    liveUrl: "#",
    repoUrl: "#",
    featured: false,
    category: "Web App",
  },
  {
    id: "neon-type",
    title: "Neon Type",
    description:
      "An interactive browser canvas where users generate animated neon typographic art. Built with Three.js and WebGL shaders. Featured on Awwwards.",
    tags: ["Three.js", "WebGL", "Creative Coding"],
    imageUrl:
      "https://t4.ftcdn.net/jpg/01/75/92/69/360_F_175926981_eV69cobFMHsmJCFAgglRugZkJgmkN3Ts.jpg",
    liveUrl: "#",
    repoUrl: "#",
    featured: false,
    category: "Experiment",
  },
  {
    id: "shipfast",
    title: "ShipFast",
    description:
      "An open-source starter kit with auth, billing, email, and a full design system wired up out of the box. Used by 200+ developers to launch their first SaaS.",
    tags: ["Next.js", "Prisma", "Stripe", "Open Source"],
    imageUrl:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    liveUrl: "#",
    repoUrl: "#",
    featured: false,
    category: "Open Source",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    skills: [
      "React",
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "WebGL / Three.js",
    ],
  },
  {
    category: "Backend",
    skills: ["Node.js", "PostgreSQL", "Redis", "GraphQL", "tRPC", "Prisma"],
  },
  {
    category: "Design",
    skills: [
      "Figma",
      "Design Systems",
      "Prototyping",
      "User Research",
    ],
  },
  {
    category: "DevOps & Tools",
    skills: ["Docker", "Vercel / Edge", "CI/CD", "AWS"],
  },
  {
    category: "Soft Skills",
    skills: ["Agile / Scrum", "Code Review", "Technical Writing", "Mentorship"],
  },
];
