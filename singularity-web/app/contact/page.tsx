"use client";

import { ArrowRight, ExternalLink, Mail, MapPin, Twitter, Github, MessageCircle, BookOpen } from "lucide-react";
import { SiteHeader, SiteFooter } from "../components/site-shell";
import { FadeInUp } from "../components/shared/FadeInUp";
import { useLanguage } from "../context/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();

  const socialLinks = [
    { label: "X / Twitter", handle: "@Seafhven", href: "https://x.com/Seafhven", icon: Twitter },
    { label: "GitHub", handle: "seafhven-ss", href: "https://github.com/seafhven-ss", icon: Github },
    { label: t.contact.social_wechat, handle: "拾海笔记", href: "#", icon: MessageCircle },
    { label: t.contact.social_xiaohongshu, handle: "拾海Seaf", href: "#", icon: BookOpen },
  ];

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="border-b border-[var(--border-default)]">
          <div className="mx-auto max-w-4xl px-6 pb-16 pt-28 sm:pb-20 sm:pt-36">
            <FadeInUp>
              <p className="text-xs font-medium uppercase tracking-[0.35em] text-[var(--text-tertiary)]">
                {t.contact.hero_eyebrow}
              </p>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                {t.contact.title}
              </h1>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
                {t.contact.subtitle}
              </p>
            </FadeInUp>
          </div>
        </section>

        {/* Contact Info */}
        <section className="border-b border-[var(--border-default)] py-16 sm:py-20">
          <div className="mx-auto grid max-w-4xl gap-10 px-6 sm:grid-cols-2">
            {/* Email */}
            <FadeInUp>
              <div className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-panel)] p-6">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-[var(--accent-indigo)]" />
                  <p className="text-sm font-medium text-white">{t.contact.email_label}</p>
                </div>
                <p className="mt-3 text-sm text-[var(--text-tertiary)]">{t.contact.email_desc}</p>
                <a
                  href="mailto:seafhven@gmail.com"
                  className="mt-4 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-black transition-transform hover:scale-[1.02]"
                  style={{ backgroundImage: "linear-gradient(135deg, #7b7fff, #4dd9d5, #a78bfa)" }}
                >
                  seafhven@gmail.com
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </FadeInUp>

            {/* Location */}
            <FadeInUp delay={0.1}>
              <div className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-panel)] p-6">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-[var(--accent-teal)]" />
                  <p className="text-sm font-medium text-white">{t.contact.location_label}</p>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-tertiary)]">
                  {t.contact.location_line1}
                </p>
                <p className="text-sm leading-relaxed text-[var(--text-tertiary)]">
                  {t.contact.location_line2}
                </p>
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* Social */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-6">
            <FadeInUp>
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--text-tertiary)]">{t.contact.social_eyebrow}</p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">{t.contact.social_title}</h2>
            </FadeInUp>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {socialLinks.map((link, i) => (
                <FadeInUp key={link.label} delay={i * 0.06}>
                  <a
                    href={link.href}
                    {...(link.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                    className="flex items-center justify-between rounded-xl border border-[var(--border-default)] bg-[var(--bg-panel)] p-5 transition-all hover:border-[var(--accent-indigo)]"
                  >
                    <div className="flex items-center gap-3">
                      <link.icon className="h-5 w-5 text-[var(--accent-indigo)] shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-white">{link.label}</p>
                        <p className="mt-1 text-sm text-[var(--text-tertiary)]">{link.handle}</p>
                      </div>
                    </div>
                    {link.href.startsWith("http") && (
                      <ExternalLink className="h-4 w-4 text-[var(--text-tertiary)]" />
                    )}
                  </a>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
