import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cases } from "../lib/site-data";
import { PageSection, SiteFooter, SiteHeader } from "../components/site-shell";

export default function CasesPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <SiteHeader />
      <main>
        <PageSection
          eyebrow="Cases"
          title="案例页模板"
          description="这轮先把模板和首个 Prism 案例页建立起来，结构固定为背景、挑战、方案、结果。"
        >
          <div className="grid gap-4">
            {cases.map((item) => (
              <Link
                key={item.slug}
                href={`/cases/${item.slug}`}
                className="group rounded-[28px] border border-[var(--border-default)] bg-[var(--bg-panel)] p-6 transition-transform duration-300 hover:-translate-y-1 hover:border-[var(--accent-indigo)]"
              >
                <p className="text-xs uppercase tracking-[0.22em] text-[var(--text-tertiary)]">{item.category}</p>
                <h2 className="mt-4 text-3xl font-semibold text-white">{item.name}</h2>
                <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--text-secondary)]">{item.summary}</p>
                <div className="mt-8 inline-flex items-center gap-2 text-sm text-white">
                  进入案例
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
