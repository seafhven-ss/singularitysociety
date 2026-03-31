import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteFooter, SiteHeader } from "./components/site-shell";
import { cases, products, type ProductRecord } from "./lib/site-data";
import {
  FadeInUp,
  StaggerContainer,
  StaggerItem,
} from "./components/shared/FadeInUp";

function ProductCard({ product }: { product: ProductRecord }) {
  const isDev = product.slug === "tebot";
  return (
    <Link
      href={`/products/${product.slug}`}
      className={`group flex items-center justify-between gap-4 rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent-indigo)] ${
        isDev
          ? "border-dashed border-[var(--border-default)] opacity-85"
          : "border-[var(--border-default)] bg-[var(--bg-panel)]"
      }`}
    >
      <div className="flex items-center gap-4">
        <product.icon className="h-5 w-5 shrink-0 text-[var(--accent-indigo)]" />
        <div>
          <div className="flex items-center gap-2">
            <p className="text-sm font-medium text-white">{product.name}</p>
            {isDev && (
              <span className="rounded-full border border-[var(--accent-violet)]/40 px-2 py-0.5 text-[10px] text-[var(--accent-violet)]">
                开发中
              </span>
            )}
          </div>
          <p className="mt-1 text-xs text-[var(--text-tertiary)]">
            {product.shortName}
          </p>
        </div>
      </div>
      <ArrowRight className="h-4 w-4 shrink-0 text-[var(--text-tertiary)] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white" />
    </Link>
  );
}

function ProductSection({
  product,
  reverse,
}: {
  product: ProductRecord;
  reverse: boolean;
}) {
  const isDev = product.slug === "tebot";
  return (
    <section className="border-b border-[var(--border-default)] py-20 sm:py-24">
      <div
        className={`mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-2 lg:items-center lg:gap-16 ${
          reverse ? "lg:[direction:rtl]" : ""
        }`}
      >
        {/* Text */}
        <FadeInUp className={reverse ? "lg:[direction:ltr]" : ""}>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--text-tertiary)]">
            {product.heroEyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {product.name}
          </h2>
          {isDev && (
            <span className="mt-3 inline-block rounded-md border border-[var(--accent-violet)]/40 px-2.5 py-1 text-xs text-[var(--accent-violet)]">
              {product.status}
            </span>
          )}
          <p className="mt-4 text-base leading-relaxed text-[var(--text-secondary)]">
            {product.positioning}
          </p>
          <ul className="mt-6 space-y-3">
            {product.features.slice(0, 3).map((f) => (
              <li key={f.title} className="flex items-start gap-3">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-indigo)]" />
                <div>
                  <p className="text-sm font-medium text-white">{f.title}</p>
                  <p className="mt-0.5 text-sm text-[var(--text-tertiary)]">
                    {f.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <Link
            href={`/products/${product.slug}`}
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-[var(--accent-indigo)]"
          >
            查看详情
            <ArrowRight className="h-4 w-4" />
          </Link>
        </FadeInUp>

        {/* Visual — terminal-style status panel */}
        <FadeInUp
          delay={0.15}
          className={reverse ? "lg:[direction:ltr]" : ""}
        >
          <div className="overflow-hidden rounded-2xl border border-[var(--border-default)] bg-[var(--bg-panel)] shadow-[var(--shadow-card)]">
            <div className="flex items-center gap-2 border-b border-[var(--border-default)] px-5 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-3 text-xs text-[var(--text-tertiary)]">
                {product.visual.title}
              </span>
            </div>
            <div className="space-y-2 p-5 font-mono text-sm">
              {product.visual.lines.map((line, i) => (
                <p key={i} className="text-[var(--text-secondary)]">
                  <span className="text-[var(--accent-teal)]">▸</span> {line}
                </p>
              ))}
            </div>
            <div className="border-t border-[var(--border-default)] px-5 py-3">
              <div className="flex items-center justify-between text-xs text-[var(--text-tertiary)]">
                <span>{product.heroLabel}</span>
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-teal)]" />
                  {product.status}
                </span>
              </div>
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}

// Product display order per spec: Nexus, Prism, ProBrief, TEBOT
const productOrder = ["nexus", "prism", "probrief", "tebot"] as const;
const orderedProducts = productOrder
  .map((slug) => products.find((p) => p.slug === slug)!)
  .filter(Boolean);

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <SiteHeader />
      <main>
        {/* ── Hero ── */}
        <section className="border-b border-[var(--border-default)]">
          <div className="mx-auto max-w-4xl px-6 pb-20 pt-32 text-center sm:pb-28 sm:pt-40">
            <FadeInUp>
              <p className="text-xs font-medium uppercase tracking-[0.35em] text-[var(--text-tertiary)]">
                Singularity Society / Built in Public
              </p>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <h1 className="mt-8 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[4rem]">
                <span className="bg-[var(--gradient-brand)] bg-clip-text text-transparent">
                  真实业务问题 × 轻量 AI 产品 × 公开构建
                </span>
              </h1>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[var(--text-secondary)]">
                一个人的 AI 产品实验室，公开构建中
              </p>
            </FadeInUp>
            <FadeInUp delay={0.3}>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--gradient-brand)] px-6 py-3 text-sm font-medium text-black transition-transform hover:scale-[1.02]"
                >
                  了解更多
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="mailto:seafhven@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--border-default)] px-6 py-3 text-sm font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--border-hover)]"
                >
                  联系咨询
                </Link>
              </div>
            </FadeInUp>

            {/* Product entry cards */}
            <StaggerContainer className="mx-auto mt-16 grid max-w-2xl gap-3 sm:grid-cols-2">
              {orderedProducts.map((product) => (
                <StaggerItem key={product.slug}>
                  <ProductCard product={product} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ── Product Sections (alternating layout) ── */}
        {orderedProducts.map((product, i) => (
          <ProductSection
            key={product.slug}
            product={product}
            reverse={i % 2 === 1}
          />
        ))}

        {/* ── Case Section ── */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <FadeInUp>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--text-tertiary)]">
                Case Studies
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                实践案例
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--text-secondary)]">
                案例结构固定为背景、挑战、方案、结果，强调叙事推进而不是数据墙。
              </p>
            </FadeInUp>

            <div className="mt-12 grid gap-4">
              {cases.map((item) => (
                <FadeInUp key={item.slug}>
                  <Link
                    href={`/cases/${item.slug}`}
                    className="group block rounded-2xl border border-[var(--border-default)] bg-[var(--bg-panel)] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent-indigo)]"
                  >
                    <p className="text-xs uppercase tracking-[0.25em] text-[var(--text-tertiary)]">
                      {item.category}
                    </p>
                    <h3 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
                      {item.name}
                    </h3>
                    <p className="mt-4 max-w-3xl text-base leading-relaxed text-[var(--text-secondary)]">
                      {item.summary}
                    </p>
                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white transition-colors group-hover:text-[var(--accent-indigo)]">
                      打开案例
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </Link>
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
