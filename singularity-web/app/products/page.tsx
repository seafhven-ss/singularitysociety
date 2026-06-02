import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  CheckCircle2,
  FileText,
  FlaskConical,
  Layers3,
  SearchCheck,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { SiteFooter, SiteHeader } from "../components/site-shell";
import { FadeInUp } from "../components/shared/FadeInUp";

export const metadata: Metadata = {
  title: "工具与实验室 | Singularity Society",
  description:
    "Singularity Society Tools & Lab 展示用于 AI 搜索可见性诊断、GEO 增长、内容资产建设和企业知识库搭建的工具能力。",
};

const gradientBrand = "linear-gradient(135deg, #7b7fff, #4dd9d5, #a78bfa)";

const tools = [
  {
    name: "GEO Growth Lab",
    description: "用于生成企业 AI 搜索问题库、分析 AI 回答、输出可见性评分和诊断报告。",
    icon: SearchCheck,
  },
  {
    name: "AI 回答评分器",
    description: "判断 AI 回答中是否提及企业、是否出现同类企业、是否存在错误描述和推荐倾向。",
    icon: BarChart3,
  },
  {
    name: "企业内容资产生成器",
    description: "围绕用户问题库生成官网 FAQ、公众号选题、小红书笔记、知乎回答和短视频脚本。",
    icon: FileText,
  },
  {
    name: "企业知识库 / 智能体原型",
    description: "把企业资料、销售话术、案例和客户问题整理为可调用的 AI 知识资产。",
    icon: BrainCircuit,
  },
];

const workflow = ["诊断", "内容资产", "知识库", "持续优化"];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <SiteHeader />
      <main>
        <section className="border-b border-[var(--border-default)]">
          <div className="mx-auto max-w-6xl px-6 pb-20 pt-28 sm:pb-24 sm:pt-36 lg:pt-40">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_390px] lg:items-center">
              <FadeInUp>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.32em] text-[var(--text-tertiary)]">
                    Singularity Society Tools & Lab
                  </p>
                  <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl">
                    工具与实验室
                  </h1>
                  <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--text-secondary)]">
                    我们通过内部工具和实验项目，帮助企业更高效地完成 AI 搜索可见性诊断、内容资产建设和知识库搭建。
                  </p>
                  <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href="/demo"
                      className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-black transition-transform hover:scale-[1.02]"
                      style={{ backgroundImage: gradientBrand }}
                    >
                      查看工具演示
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border-default)] px-6 py-3 text-sm font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--border-hover)]"
                    >
                      预约诊断
                    </Link>
                  </div>
                </div>
              </FadeInUp>

              <FadeInUp delay={0.12}>
                <div className="rounded-[28px] border border-[var(--border-default)] bg-[var(--bg-panel)] p-6 shadow-[var(--shadow-elevated)]">
                  <FlaskConical className="h-6 w-6 text-[var(--accent-teal)]" />
                  <p className="mt-5 text-sm font-medium text-white">从旧产品入口转为交付工具入口</p>
                  <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                    这里不再作为旧产品主入口，而是承载 AI 搜索增长、GEO 诊断和企业知识库建设相关的工具能力展示。
                  </p>
                </div>
              </FadeInUp>
            </div>
          </div>
        </section>

        <section className="border-b border-[var(--border-default)] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeInUp>
              <div className="max-w-3xl">
                <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--text-tertiary)]">
                  Current Tools
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  当前核心工具
                </h2>
              </div>
            </FadeInUp>
            <div className="mt-10 grid gap-4 lg:grid-cols-2">
              {tools.map((tool, index) => {
                const Icon = tool.icon;
                return (
                  <FadeInUp key={tool.name} delay={index * 0.05}>
                    <article className="h-full rounded-[24px] border border-[var(--border-default)] bg-[var(--bg-panel)] p-6">
                      <div className="flex items-start justify-between gap-5">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[var(--border-default)] bg-black/20">
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                        <span className="font-mono text-xs text-[var(--text-tertiary)]">
                          Lab {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h3 className="mt-6 text-xl font-semibold text-white">{tool.name}</h3>
                      <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">{tool.description}</p>
                    </article>
                  </FadeInUp>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-b border-[var(--border-default)] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
              <FadeInUp>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--text-tertiary)]">
                    Delivery Flow
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                    工具如何服务企业
                  </h2>
                  <p className="mt-4 text-base leading-8 text-[var(--text-secondary)]">
                    工具不是独立炫技，而是服务于诊断、内容资产建设、知识库搭建和持续优化的交付流程。
                  </p>
                </div>
              </FadeInUp>
              <div className="grid gap-3 sm:grid-cols-2">
                {workflow.map((step, index) => (
                  <FadeInUp key={step} delay={index * 0.05}>
                    <div className="flex min-h-16 items-center justify-between gap-4 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-panel)] px-5 py-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-[var(--accent-teal)]" />
                        <span className="text-sm font-medium text-[var(--text-secondary)]">{step}</span>
                      </div>
                      <span className="font-mono text-xs text-[var(--text-tertiary)]">{index + 1}</span>
                    </div>
                  </FadeInUp>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[var(--border-default)] py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-6">
            <FadeInUp>
              <div className="rounded-[28px] border border-[var(--border-default)] bg-[var(--bg-panel)] p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <Sparkles className="mt-1 h-6 w-6 shrink-0 text-[var(--accent-indigo)]" />
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-white">与服务页的关系</h2>
                    <p className="mt-4 text-base leading-8 text-[var(--text-secondary)]">
                      这些工具目前主要用于我们的顾问交付、诊断报告和客户演示，后续会逐步开放为在线 Demo 或客户工作台。正式服务方案仍以 `/services` 和 `/geo-diagnosis` 为主入口。
                    </p>
                    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                      <Link
                        href="/services"
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border-default)] px-5 py-3 text-sm font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--border-hover)]"
                      >
                        查看服务方案
                      </Link>
                      <Link
                        href="/geo-diagnosis"
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border-default)] px-5 py-3 text-sm font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--border-hover)]"
                      >
                        查看诊断服务
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInUp>
          </div>
        </section>

        <section className="border-b border-[var(--border-default)] py-12">
          <div className="mx-auto max-w-5xl px-6">
            <div className="rounded-[24px] border border-[var(--border-default)] bg-[rgba(255,255,255,0.03)] p-6">
              <div className="flex items-start gap-4">
                <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-[var(--accent-teal)]" />
                <p className="text-sm leading-7 text-[var(--text-secondary)]">
                  本服务用于提升企业被 AI 理解、引用和推荐的概率，实际展示结果取决于平台模型、数据来源和用户提问方式。工具分析结果用于辅助企业建设长期内容资产和知识资产。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <FadeInUp>
              <Layers3 className="mx-auto h-7 w-7 text-[var(--accent-teal)]" />
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                想看看工具如何辅助一次真实诊断？
              </h2>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/demo"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-black transition-transform hover:scale-[1.02]"
                  style={{ backgroundImage: gradientBrand }}
                >
                  查看工具演示
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border-default)] px-6 py-3 text-sm font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--border-hover)]"
                >
                  预约诊断
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
