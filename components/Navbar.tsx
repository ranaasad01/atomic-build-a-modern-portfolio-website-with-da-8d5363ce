"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from 'lucide-react';
import { navLinks, BRAND_NAME } from "@/lib/data";
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

export default function Navbar() {
  const t = useTranslations();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    type: string
  ) => {
    setMobileOpen(false);
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

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={
        scrolled
          ? "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[var(--surface)]/90 backdrop-blur-xl border-b border-[var(--border)] shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
          : "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent"
      }
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-[var(--foreground)] font-bold text-lg tracking-tight hover:text-[var(--primary)] transition-colors duration-200"
        >
          {t("nav.brand")}
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={getLinkHref(link.href, link.type)}
                  onClick={(e) => handleLinkClick(e, link.href, link.type)}
                  className={
                    isActive
                      ? "relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 text-[var(--primary)]"
                      : "relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 text-[var(--muted)] hover:text-[var(--foreground)]"
                  }
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 bg-[var(--primary)]/10 rounded-lg"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                  <span className="relative z-10">{t(getNavKey(link.label))}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          href="/contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold rounded-lg bg-[var(--primary)] text-white hover:bg-[var(--primary)]/90 transition-all duration-200 shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]"
        >
          {t("nav.cta")}
        </Link>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
          aria-label={t("nav.menuToggle")}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden bg-[var(--surface)]/95 backdrop-blur-xl border-b border-[var(--border)] overflow-hidden"
          >
            <ul className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={getLinkHref(link.href, link.type)}
                      onClick={(e) => handleLinkClick(e, link.href, link.type)}
                      className={
                        isActive
                          ? "block px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 text-[var(--primary)] bg-[var(--primary)]/10"
                          : "block px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-white/5"
                      }
                    >
                      {t(getNavKey(link.label))}
                    </Link>
                  </li>
                );
              })}
              <li className="pt-2">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-sm font-semibold rounded-lg bg-[var(--primary)] text-white text-center"
                >
                  {t("nav.cta")}
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
