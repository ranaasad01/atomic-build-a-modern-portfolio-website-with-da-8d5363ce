"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Code2 as Github, Briefcase as Linkedin, MessageCircle as Twitter, Mail, ArrowUp } from 'lucide-react';
import { navLinks, BRAND_EMAIL } from "@/lib/data";
import { useTranslations } from "next-intl";

// Static lookup — avoids dynamic key construction which breaks i18n resolution
const NAV_LABEL_KEYS: Record<string, string> = {
  Home: "nav.home",
  About: "nav.about",
  Projects: "nav.projects",
  Contact: "nav.contact",
};

function getNavKey(label: string): string {
  return NAV_LABEL_KEYS[label] || "nav.home";
}

const iconMap: Record<string, React.ReactNode> = {
  Github: <Github size={18} />,
  Linkedin: <Linkedin size={18} />,
  Twitter: <Twitter size={18} />,
  Mail: <Mail size={18} />,
};

export default function Footer() {
  const t = useTranslations();
  const pathname = usePathname();

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    type: string
  ) => {
    if (type === "anchor" && pathname === "/") {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getLinkHref = (href: string, type: string): string => {
    if (type === "anchor" && pathname !== "/") {
      return "/" + href;
    }
    return href;
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="md:col-span-1">
            <Link
              href="/"
              className="text-[var(--foreground)] font-bold text-xl tracking-tight hover:text-[var(--primary)] transition-colors duration-200 block mb-3"
            >
              {t("footer.brand")}
            </Link>
            <p className="text-[var(--muted)] text-sm leading-relaxed mb-6">
              {t("footer.tagline")}
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: "Github", href: "https://github.com/alexrivera", labelKey: "footer.social.github" },
                { icon: "Linkedin", href: "https://linkedin.com/in/alexrivera", labelKey: "footer.social.linkedin" },
                { icon: "Twitter", href: "https://twitter.com/alexrivera_dev", labelKey: "footer.social.twitter" },
                { icon: "Mail", href: "mailto:" + BRAND_EMAIL, labelKey: "footer.social.email" },
              ].map((social) => (
                <motion.a
                  key={social.icon}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={t(social.labelKey)}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-lg bg-[var(--background)] border border-[var(--border)] flex items-center justify-center text-[var(--muted)] hover:text-[var(--primary)] hover:border-[var(--primary)]/30 transition-colors duration-200"
                >
                  {iconMap[social.icon]}
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[var(--foreground)] font-semibold text-sm mb-4 uppercase tracking-widest">
              {t("footer.nav.title")}
            </p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={getLinkHref(link.href, link.type)}
                    onClick={(e) => handleLinkClick(e, link.href, link.type)}
                    className="text-[var(--muted)] hover:text-[var(--foreground)] text-sm transition-colors duration-200"
                  >
                    {t(getNavKey(link.label))}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[var(--foreground)] font-semibold text-sm mb-4 uppercase tracking-widest">
              {t("footer.contact.title")}
            </p>
            <p className="text-[var(--muted)] text-sm mb-2">{t("footer.contact.available")}</p>
            <a
              href={"mailto:" + BRAND_EMAIL}
              className="text-[var(--primary)] text-sm hover:text-[var(--primary)]/80 transition-colors duration-200 block mb-4"
            >
              {BRAND_EMAIL}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-[var(--primary)] text-white hover:bg-[var(--primary)]/90 transition-all duration-200 shadow-[0_0_20px_rgba(168,85,247,0.2)]"
            >
              {t("footer.contact.cta")}
            </Link>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-[var(--border)] gap-4">
          <p className="text-[var(--muted)] text-xs">
            {t("footer.copyright")}
          </p>
          <p className="text-[var(--muted)] text-xs">
            {t("footer.builtWith")}
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label={t("footer.scrollTop")}
            className="w-8 h-8 rounded-lg bg-[var(--background)] border border-[var(--border)] flex items-center justify-center text-[var(--muted)] hover:text-[var(--primary)] hover:border-[var(--primary)]/30 transition-colors duration-200"
          >
            <ArrowUp size={14} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
