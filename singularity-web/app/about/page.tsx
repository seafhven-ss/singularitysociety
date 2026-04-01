"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { SiteHeader, SiteFooter } from "../components/site-shell";
import { FadeInUp } from "../components/shared/FadeInUp";
import { useLanguage } from "../context/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="border-b border-[var(--border-default)]">
          <div className="mx-auto max-w-4xl px-6 pb-16 pt-28 sm:pb-20 sm:pt-36">
            <FadeInUp>
              <p className="text-xs font-medium uppercase tracking-[0.35em] text-[var(--text-tertiary)]">
                {t.about.hero_eyebrow}
              </p>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                {t.about.hero_title}
              </h1>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
                {t.about.hero_desc}
              </p>
            </FadeInUp>
          </div>
        </section>

        {/* Story */}
        <section className="border-b border-[var(--border-default)] py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-6">
            <FadeInUp>
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--text-tertiary)]">{t.about.story_eyebrow}</p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">{t.about.story_title}</h2>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <div className="mt-8 space-y-5 text-base leading-relaxed text-[var(--text-secondary)]">
                <p>{t.about.story_p1}</p>
                <p>{t.about.story_p2}</p>
                <p>{t.about.story_p3}</p>
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* Timeline */}
        <section className="border-b border-[var(--border-default)] py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-6">
            <FadeInUp>
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--text-tertiary)]">{t.about.timeline_eyebrow}</p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">{t.about.timeline_title}</h2>
            </FadeInUp>
            <div className="mt-10 space-y-6">
              {t.about.milestones.map((m, i) => (
                <FadeInUp key={`${m.year}-${i}`} delay={i * 0.08}>
                  <div className="flex gap-6">
                    <span className="w-16 shrink-0 font-mono text-sm text-[var(--accent-indigo)]">{m.year}</span>
                    <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{m.text}</p>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>

        {/* Method */}
        <section className="border-b border-[var(--border-default)] py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-6">
            <FadeInUp>
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--text-tertiary)]">{t.about.method_eyebrow}</p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">{t.about.method_title}</h2>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <div className="mt-8 grid gap-6 sm:grid-cols-3">
                {t.about.methods.map((item) => (
                  <div key={item.title} className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-panel)] p-6">
                    <p className="text-sm font-medium text-white">{item.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--text-tertiary)]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <FadeInUp>
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">{t.about.cta_title}</h2>
              <p className="mt-4 text-base text-[var(--text-secondary)]">
                {t.about.cta_desc}
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-black transition-transform hover:scale-[1.02]"
                  style={{ backgroundImage: "linear-gradient(135deg, #7b7fff, #4dd9d5, #a78bfa)" }}
                >
                  {t.about.cta_contact}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--border-default)] px-6 py-3 text-sm font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--border-hover)]"
                >
                  {t.about.cta_products}
                </Link>
              </div>
            </FadeInUp>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
