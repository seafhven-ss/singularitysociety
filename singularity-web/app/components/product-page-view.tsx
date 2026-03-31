import { ArrowRight } from "lucide-react";
import type { ProductRecord } from "../lib/site-data";
import { ActionButtons, PageSection, SiteFooter, SiteHeader } from "./site-shell";

export function ProductPageView({ product }: { product: ProductRecord }) {
  const Icon = product.icon;

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <SiteHeader />
      <main>
        <section className="border-b border-[var(--border-default)]">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.95fr)] lg:items-center lg:gap-16 lg:px-8 lg:py-24">
            <div className="max-w-3xl">
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--text-tertiary)]">{product.heroEyebrow}</p>
              <div className="mt-5 inline-flex items-center gap-3 rounded-full border border-[var(--border-default)] bg-[var(--bg-panel)] px-4 py-2 text-sm text-[var(--text-secondary)]">
                <Icon className="h-4 w-4 text-white" />
                {product.heroLabel}
              </div>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">{product.name}</h1>
              <p className="mt-4 text-xl leading-8 text-white/90 sm:text-2xl">{product.positioning}</p>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--text-secondary)]">{product.summary}</p>
              <div className="mt-8">
                <ActionButtons actions={product.actions} />
              </div>
              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {product.metrics.map((metric) => (
                  <div key={metric.label} className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-panel)] p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-tertiary)]">{metric.label}</p>
                    <p className="mt-3 text-sm leading-6 text-white">{metric.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-[var(--border-default)] bg-[var(--bg-panel)] p-5 shadow-[var(--shadow-elevated)] sm:p-6">
              <div className="rounded-[24px] border border-[var(--border-default)] bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0))] p-5">
                <div className="flex items-center justify-between border-b border-[var(--border-default)] pb-4">
                  <div>
                    <p className="text-sm font-medium text-white">{product.visual.title}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[var(--text-tertiary)]">{product.status}</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent-indigo)]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent-teal)]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent-violet)]" />
                  </div>
                </div>
                <div className="mt-5 space-y-3">
                  {product.visual.lines.map((line, index) => (
                    <div key={line} className="flex items-center justify-between rounded-2xl border border-[var(--border-default)] bg-black/20 px-4 py-4 text-sm text-[var(--text-secondary)]">
                      <span>{line}</span>
                      <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[var(--text-tertiary)]">
                        0{index + 1}
                        <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <PageSection eyebrow="Features" title="功能亮点" description="用 Linear 式的信息层级展开重点能力。每一项都对应一个真实的使用场景，而不是泛化卖点。">
          <div className="grid gap-4 lg:grid-cols-2">
            {product.features.map((feature) => (
              <article key={feature.title} className="rounded-[24px] border border-[var(--border-default)] bg-[var(--bg-panel)] p-6">
                <p className="text-xs uppercase tracking-[0.22em] text-[var(--text-tertiary)]">Feature</p>
                <h3 className="mt-4 text-2xl font-semibold text-white">{feature.title}</h3>
                <p className="mt-4 text-base leading-8 text-[var(--text-secondary)]">{feature.description}</p>
                <div className="mt-6 rounded-2xl border border-[var(--border-default)] bg-black/20 p-4 text-sm leading-7 text-[var(--text-secondary)]">
                  {feature.detail}
                </div>
              </article>
            ))}
          </div>
        </PageSection>

        <PageSection eyebrow="Architecture" title={product.architectureTitle} description={product.architectureDescription}>
          <div className="grid gap-4 lg:grid-cols-4">
            {product.architectureNodes.map((node, index) => (
              <div key={node.label} className="relative rounded-[24px] border border-[var(--border-default)] bg-[var(--bg-panel)] p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-[var(--text-tertiary)]">0{index + 1}</p>
                <h3 className="mt-4 text-lg font-semibold text-white">{node.label}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">{node.note}</p>
                {index < product.architectureNodes.length - 1 ? (
                  <div className="pointer-events-none absolute -right-2 top-1/2 hidden h-px w-4 bg-[var(--accent-indigo)] lg:block" />
                ) : null}
              </div>
            ))}
          </div>
        </PageSection>

        <PageSection eyebrow="CTA" title="下一步" description="如果这个产品方向与你当前的问题对得上，直接进入体验、代码或联系入口。">
          <div className="rounded-[28px] border border-[var(--border-default)] bg-[var(--bg-panel)] p-6 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end">
              <div>
                <p className="text-sm font-medium text-white">{product.shortName}</p>
                <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--text-secondary)]">
                  当前状态：{product.status}。页面内容按真实进度组织，没有把概念图包装成已完成产品。
                </p>
              </div>
              <ActionButtons actions={product.actions} />
            </div>
          </div>
        </PageSection>
      </main>
      <SiteFooter />
    </div>
  );
}
