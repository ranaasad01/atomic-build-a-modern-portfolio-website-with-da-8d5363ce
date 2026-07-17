"use client";
import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Mail, MapPin, Clock, CheckCircle, AlertCircle, Code2 as Github, Briefcase as Linkedin, MessageCircle as Twitter, Send, ChevronDown } from 'lucide-react';
import { BRAND_EMAIL, BRAND_NAME } from "@/lib/data";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/motion";
import { Reveal } from "@/components/Reveal";
import { useTranslations } from "next-intl";

const subjectOptions = [
  "Freelance Project",
  "Full-Time Opportunity",
  "Open Source Collaboration",
  "Speaking / Workshop",
  "Just Saying Hi",
];

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: BRAND_EMAIL,
    href: `mailto:${BRAND_EMAIL}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "San Francisco, CA (Remote-friendly)",
    href: null,
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Usually within 24 hours",
    href: null,
  },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/alexrivera",
    icon: Github,
    username: "@alexrivera",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/alexrivera",
    icon: Linkedin,
    username: "in/alexrivera",
  },
  {
    label: "Twitter",
    href: "https://twitter.com/alexrivera_dev",
    icon: Twitter,
    username: "@alexrivera_dev",
  },
  {
    label: "Email",
    href: `mailto:${BRAND_EMAIL}`,
    icon: Mail,
    username: BRAND_EMAIL,
  },
];

const inputClass =
  "w-full bg-[var(--surface)] border border-[var(--border)] rounded-xl px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted)] text-sm focus:outline-none focus:border-[var(--primary)]/60 focus:ring-2 focus:ring-[var(--primary)]/20 transition-all duration-200";

const labelClass = "block text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-2";

const buttonVariants: Variants = {
  idle: { scale: 1 },
  hover: { scale: 1.02 },
  tap: { scale: 0.98 },
};

type FormState = "idle" | "submitting" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Name is required.";
  if (!data.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!data.subject) errors.subject = "Please select a subject.";
  if (!data.message.trim()) {
    errors.message = "Message is required.";
  } else if (data.message.trim().length < 20) {
    errors.message = "Message must be at least 20 characters.";
  }
  return errors;
}

function ContactForm() {
  const t = useTranslations();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [formState, setFormState] = useState<FormState>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setFormState("submitting");
    await new Promise((resolve) => setTimeout(resolve, 1800));
    const success = Math.random() > 0.1;
    if (success) {
      setFormState("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});
    } else {
      setFormState("error");
    }
  };

  const resetForm = () => {
    setFormState("idle");
    setErrors({});
  };

  if (formState === "success") {
    return (
      <motion.div
        variants={scaleIn}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center justify-center text-center py-16 px-8 h-full min-h-[480px]"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
          className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-6"
        >
          <CheckCircle size={36} className="text-emerald-400" />
        </motion.div>
        <h3 className="text-2xl font-bold text-[var(--foreground)] mb-3">
          {t("contact.form.success.title")}
        </h3>
        <p className="text-[var(--muted)] leading-relaxed mb-8 max-w-xs">
          {t("contact.form.success.body")}
        </p>
        <button
          onClick={resetForm}
          className="px-6 py-2.5 text-sm font-semibold rounded-xl border border-[var(--border)] text-[var(--muted)] hover:text-[var(--foreground)] hover:border-[var(--primary)]/40 transition-all duration-200"
        >
          {t("contact.form.success.cta")}
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelClass}>
            {t("contact.form.name.label")}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder={t("contact.form.name.placeholder")}
            className={`${inputClass} ${errors.name ? "border-red-500/60 focus:border-red-500/60 focus:ring-red-500/20" : ""}`}
            autoComplete="name"
          />
          {errors.name && (
            <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
              <AlertCircle size={12} />
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            {t("contact.form.email.label")}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={t("contact.form.email.placeholder")}
            className={`${inputClass} ${errors.email ? "border-red-500/60 focus:border-red-500/60 focus:ring-red-500/20" : ""}`}
            autoComplete="email"
          />
          {errors.email && (
            <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
              <AlertCircle size={12} />
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="subject" className={labelClass}>
          {t("contact.form.subject.label")}
        </label>
        <div className="relative">
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={`${inputClass} appearance-none pr-10 ${errors.subject ? "border-red-500/60 focus:border-red-500/60 focus:ring-red-500/20" : ""}`}
          >
            <option value="">{t("contact.form.subject.placeholder")}</option>
            {subjectOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          <ChevronDown
            size={16}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--muted)] pointer-events-none"
          />
        </div>
        {errors.subject && (
          <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
            <AlertCircle size={12} />
            {errors.subject}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          {t("contact.form.message.label")}
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={formData.message}
          onChange={handleChange}
          placeholder={t("contact.form.message.placeholder")}
          className={`${inputClass} resize-none ${errors.message ? "border-red-500/60 focus:border-red-500/60 focus:ring-red-500/20" : ""}`}
        />
        <div className="flex items-center justify-between mt-1.5">
          {errors.message ? (
            <p className="text-xs text-red-400 flex items-center gap-1">
              <AlertCircle size={12} />
              {errors.message}
            </p>
          ) : (
            <span />
          )}
          <span className="text-xs text-[var(--muted)] ml-auto">
            {formData.message.length} {t("contact.form.message.chars")}
          </span>
        </div>
      </div>

      {formState === "error" && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm"
        >
          <AlertCircle size={16} className="shrink-0" />
          <span>{t("contact.form.error.body")}</span>
          <button
            type="button"
            onClick={resetForm}
            className="ml-auto text-xs underline underline-offset-2 hover:no-underline"
          >
            {t("contact.form.error.retry")}
          </button>
        </motion.div>
      )}

      <motion.button
        type="submit"
        disabled={formState === "submitting"}
        variants={buttonVariants}
        initial="idle"
        whileHover={formState !== "submitting" ? "hover" : "idle"}
        whileTap={formState !== "submitting" ? "tap" : "idle"}
        className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[var(--primary)] text-white font-semibold text-sm shadow-[0_0_24px_rgba(168,85,247,0.35)] hover:shadow-[0_0_36px_rgba(168,85,247,0.5)] disabled:opacity-60 disabled:cursor-not-allowed transition-shadow duration-300"
      >
        <AnimatePresence mode="wait">
          {formState === "submitting" ? (
            <motion.span
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2"
            >
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full inline-block"
              />
              {t("contact.form.submit.sending")}
            </motion.span>
          ) : (
            <motion.span
              key="idle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2"
            >
              <Send size={15} />
              {t("contact.form.submit.label")}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </form>
  );
}

function ContactInfoBlock() {
  const t = useTranslations();
  return (
    <div className="flex flex-col gap-8 h-full">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 w-fit">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-xs font-semibold text-emerald-400 tracking-wide">
          {t("contact.info.availability")}
        </span>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-[var(--foreground)] mb-2 tracking-tight">
          {t("contact.info.heading")}
        </h2>
        <p className="text-[var(--muted)] leading-relaxed text-sm">
          {t("contact.info.body")}
        </p>
      </div>

      <div className="space-y-4">
        {contactInfo.map((item) => {
          const Icon = item.icon;
          const content = (
            <div className="flex items-start gap-4 p-4 rounded-xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--primary)]/30 transition-colors duration-200 group">
              <div className="w-9 h-9 rounded-lg bg-[var(--primary)]/10 border border-[var(--primary)]/20 flex items-center justify-center shrink-0 group-hover:bg-[var(--primary)]/15 transition-colors duration-200">
                <Icon size={16} className="text-[var(--primary)]" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-0.5">
                  {item.label}
                </p>
                <p className="text-sm text-[var(--foreground)] font-medium">
                  {item.value}
                </p>
              </div>
            </div>
          );
          return item.href ? (
            <a key={item.label} href={item.href} className="block">
              {content}
            </a>
          ) : (
            <div key={item.label}>{content}</div>
          );
        })}
      </div>

      <div className="mt-auto pt-4 border-t border-[var(--border)]">
        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] mb-4">
          {t("contact.info.social.title")}
        </p>
        <div className="flex flex-wrap gap-3">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={social.label}
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[var(--background)] border border-[var(--border)] text-[var(--muted)] hover:text-[var(--primary)] hover:border-[var(--primary)]/30 transition-colors duration-200 text-xs font-medium"
              >
                <Icon size={14} />
                {social.username}
              </motion.a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  const t = useTranslations();

  return (
    <main className="min-h-screen bg-[var(--background)] pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="mb-16">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="max-w-2xl"
            >
              <motion.p
                variants={fadeInUp}
                className="text-xs font-semibold uppercase tracking-widest text-[var(--primary)] mb-4"
              >
                {t("contact.eyebrow")}
              </motion.p>
              <motion.h1
                variants={fadeInUp}
                className="text-5xl md:text-6xl font-bold text-[var(--foreground)] tracking-tight text-balance leading-[1.05] mb-6"
              >
                {t("contact.heading")}
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-lg text-[var(--muted)] leading-relaxed text-pretty"
              >
                {t("contact.subheading")}
              </motion.p>
            </motion.div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          <Reveal className="lg:col-span-3">
            <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-8 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-8px_rgba(0,0,0,0.3)]">
              <h2 className="text-lg font-bold text-[var(--foreground)] mb-1">
                {t("contact.form.heading")}
              </h2>
              <p className="text-sm text-[var(--muted)] mb-8">
                {t("contact.form.subheading")}
              </p>
              <ContactForm />
            </div>
          </Reveal>

          <Reveal className="lg:col-span-2" delay={0.1}>
            <ContactInfoBlock />
          </Reveal>
        </div>

        <Reveal className="mt-20">
          <div className="border-t border-[var(--border)] pt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[var(--muted)]">
              {t("contact.footer.note", { name: BRAND_NAME })}
            </p>
            <p className="text-xs text-[var(--muted)]/60">
              {t("contact.footer.privacy")}
            </p>
          </div>
        </Reveal>
      </div>
    </main>
  );
}