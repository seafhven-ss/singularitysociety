import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { SiteHeader, SiteFooter } from "../components/site-shell";
import { FadeInUp } from "../components/shared/FadeInUp";

const milestones = [
  { year: "2011", text: "空间设计行业入行，开始 15 年的甲方乙方经验积累" },
  { year: "2024", text: "创立奇点社，把 AI 从辅助工具变成核心生产力" },
  { year: "2025", text: "Prism、Nexus、ProBrief 相继完成可用版本" },
  { year: "2026", text: "TEBOT 桌面手办立项，开启 IP × AI × 硬件的新方向" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="border-b border-[var(--border-default)]">
          <div className="mx-auto max-w-4xl px-6 pb-16 pt-28 sm:pb-20 sm:pt-36">
            <FadeInUp>
              <p className="text-xs font-medium uppercase tracking-[0.35em] text-[var(--text-tertiary)]">
                About / Singularity Society
              </p>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                一个人的 AI 产品实验室
              </h1>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
                奇点社由 Seaf 创立，用真实业务问题驱动产品，公开构建过程，不做Demo，只做能交付的东西。
              </p>
            </FadeInUp>
          </div>
        </section>

        {/* Story */}
        <section className="border-b border-[var(--border-default)] py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-6">
            <FadeInUp>
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--text-tertiary)]">Background</p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">为什么做这件事</h2>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <div className="mt-8 space-y-5 text-base leading-relaxed text-[var(--text-secondary)]">
                <p>
                  15 年空间设计经验教会我一件事：好的交付不是堆功能，是在约束条件下找到最简方案。
                </p>
                <p>
                  AI 改变了什么？不是替代设计师，而是让一个人能同时推进产品、工程和内容。奇点社就是这个实验——验证一个人加 AI 能走多远。
                </p>
                <p>
                  不融资、不招大团队、不做 PPT 产品。每一个产品都从真实需求出发，公开构建，接受检验。
                </p>
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* Timeline */}
        <section className="border-b border-[var(--border-default)] py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-6">
            <FadeInUp>
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--text-tertiary)]">Timeline</p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">关键节点</h2>
            </FadeInUp>
            <div className="mt-10 space-y-6">
              {milestones.map((m, i) => (
                <FadeInUp key={m.year} delay={i * 0.08}>
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
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--text-tertiary)]">Method</p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">工作方式</h2>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <div className="mt-8 grid gap-6 sm:grid-cols-3">
                {[
                  { title: "问题驱动", desc: "不追技术热点，从真实业务痛点出发。能解决问题的方案才值得做。" },
                  { title: "公开构建", desc: "进度、决策、失败都公开。不靠Demo讲故事，靠可运行的产品说话。" },
                  { title: "轻量交付", desc: "最小依赖、最少配置、最快上手。交付物是能用的工具，不是需要培训的系统。" },
                ].map((item) => (
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
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">有想法？聊聊看</h2>
              <p className="mt-4 text-base text-[var(--text-secondary)]">
                无论是产品合作、技术咨询，还是单纯交流想法，都欢迎联系。
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="mailto:seafhven@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-black transition-transform hover:scale-[1.02]"
                  style={{ backgroundImage: "linear-gradient(135deg, #7b7fff, #4dd9d5, #a78bfa)" }}
                >
                  联系我
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--border-default)] px-6 py-3 text-sm font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--border-hover)]"
                >
                  查看产品
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
