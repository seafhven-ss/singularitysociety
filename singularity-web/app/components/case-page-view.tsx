import Link from "next/link";
import type { CaseRecord } from "../lib/site-data";
import { ActionButtons, PageSection, SiteFooter, SiteHeader } from "./site-shell";

function CaseNarrativeBlock({ title, body }: { title: string; body: string[] }) {
  return (
    <article className="rounded-[28px] border border-[var(--border-default)] bg-[var(--bg-panel)] p-6 sm:p-8">
      <p className="text-xs uppercase tracking-[0.24em] text-[var(--text-tertiary)]">{title}</p>
      <div className="mt-5 space-y-4">
        {body.map((paragraph) => (
          <p key={paragraph} className="text-base leading-8 text-[var(--text-secondary)]">
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
}

export function CasePageView({ item }: { item: CaseRecord }) {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <SiteHeader />
      <main>
        <section className="border-b border-[var(--border-default)]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
            <div className="rounded-[32px] border border-[var(--border-default)] bg-[var(--bg-panel)] p-6 sm:p-8 lg:p-10">
              <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-center">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-[var(--text-tertiary)]">{item.category}</p>
                  <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">{item.name}</h1>
                  <p className="mt-4 text-lg leading-8 text-[var(--text-secondary)]">{item.summary}</p>
                  <div className="mt-8 grid gap-3 sm:grid-cols-3">
                    {item.stats.map((stat) => (
                      <div key={stat.label} className="rounded-2xl border border-[var(--border-default)] bg-black/20 p-4">
                        <p className="text-xs uppercase tracking-[0.18em] text-[var(--text-tertiary)]">{stat.label}</p>
                        <p className="mt-3 text-sm leading-6 text-white">{stat.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-[28px] border border-[var(--border-default)] bg-black/20 p-5">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-white">{item.coverTitle}</p>
                    <span className="rounded-full border border-[var(--border-default)] px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-[var(--text-tertiary)]">{item.year}</span>
                  </div>
                  <div className="mt-5 space-y-3">
                    {item.coverLines.map((line) => (
                      <div key={line} className="rounded-2xl border border-[var(--border-default)] px-4 py-4 text-sm text-[var(--text-secondary)]">
                        {line}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <PageSection eyebrow="Narrative" title="案例叙事" description="用接近 Metalab / Suno 的滚动叙事方式拆开问题与解法，每一段只承载一个信息焦点。">
          <div className="grid gap-4">
            <CaseNarrativeBlock title={item.background.title} body={item.background.body} />
            <CaseNarrativeBlock title={item.challenge.title} body={item.challenge.body} />
            <CaseNarrativeBlock title={item.approach.title} body={item.approach.body} />
            <CaseNarrativeBlock title={item.results.title} body={item.results.body} />
          </div>
        </PageSection>

        <PageSection eyebrow="CTA" title="继续查看" description="案例页不是终点。可以继续进入产品页，或者直接发起沟通。">
          <div className="flex flex-col gap-6 rounded-[28px] border border-[var(--border-default)] bg-[var(--bg-panel)] p-6 sm:p-8">
            <ActionButtons actions={item.cta} />
            <Link href="/cases" className="text-sm text-[var(--text-secondary)] underline-offset-4 hover:text-white hover:underline">
              返回案例列表
            </Link>
          </div>
        </PageSection>
      </main>
      <SiteFooter />
    </div>
  );
}
