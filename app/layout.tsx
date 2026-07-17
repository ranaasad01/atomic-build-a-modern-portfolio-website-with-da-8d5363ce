import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LocaleProvider from "@/components/LocaleProvider";
import LanguageToggle from "@/components/LanguageToggle";

export const metadata: Metadata = {
  formatDetection: { telephone: false, date: false, email: false, address: false },
  title: "Alex Rivera — Full-Stack Developer & UI/UX Designer",
  description:
    "Portfolio of Alex Rivera, a Full-Stack Developer and UI/UX Designer crafting digital experiences that move people.",
  keywords: ["portfolio", "developer", "designer", "full-stack", "UI/UX"],
  authors: [{ name: "Alex Rivera" }],
  openGraph: {
    title: "Alex Rivera — Full-Stack Developer & UI/UX Designer",
    description:
      "Crafting digital experiences that move people. From pixel-perfect interfaces to scalable backend systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=DM+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[var(--background)] text-[var(--foreground)] antialiased">
        <LocaleProvider>
          <LanguageToggle />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  );
}