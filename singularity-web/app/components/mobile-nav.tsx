"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const gradientBrand = "linear-gradient(135deg, #7b7fff, #4dd9d5, #a78bfa)";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const { t, lang, toggleLanguage } = useLanguage();

  const navLinks = [
    { href: "/products", label: t.nav.products },
    { href: "/cases", label: t.nav.cases },
    { href: "/about", label: t.nav.about },
  ];

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border-default)] text-[var(--text-secondary)] transition-colors hover:text-white"
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-full border-b border-[var(--border-default)] bg-[rgba(10,10,10,0.96)] backdrop-blur-xl">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-sm text-[var(--text-secondary)] transition-colors hover:bg-[var(--bg-panel)] hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={() => { toggleLanguage(); setOpen(false); }}
              className="rounded-lg px-4 py-3 text-left text-sm text-[var(--text-tertiary)] transition-colors hover:bg-[var(--bg-panel)] hover:text-white"
            >
              {lang === "zh" ? "English" : "中文"}
            </button>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-medium text-black"
              style={{ backgroundImage: gradientBrand }}
            >
              {t.nav.contact}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
