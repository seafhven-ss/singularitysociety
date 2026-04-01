"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getLocalizedCases } from "../lib/site-data";
import { PageSection, SiteFooter, SiteHeader } from "../components/site-shell";
import { useLanguage } from "../context/LanguageContext";

export default function CasesPage() {
  const { t, lang } = useLanguage();
  const localCases = getLocalizedCases(lang);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <SiteHeader />
      <main>
        <PageSection
          eyebrow="Cases"
          title={t.cases_page.title}
          description={t.cases_page.desc}
        >
          <div className="grid gap-4">
            {localCases.map((item) => (
              <Link
                key={item.slug}
                href={`/cases/${item.slug}`}
                className="group rounded-[28px] border border-[var(--border-default)] bg-[var(--bg-panel)] p-6 transition-transform duration-300 hover:-translate-y-1 hover:border-[var(--accent-indigo)]"
              >
                <p className="text-xs uppercase tracking-[0.22em] text-[var(--text-tertiary)]">{item.category}</p>
                <h2 className="mt-4 text-3xl font-semibold text-white">{item.name}</h2>
                <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--text-secondary)]">{item.summary}</p>
                <div className="mt-8 inline-flex items-center gap-2 text-sm text-white">
                  {t.cases_page.enter_case}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </PageSection>
      </main>
      <SiteFooter />
    </div>
  );
}
