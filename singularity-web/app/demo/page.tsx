import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ClipboardList,
  FileText,
  Layers3,
  Radar,
  SearchCheck,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { SiteFooter, SiteHeader } from "../components/site-shell";
import { FadeInUp } from "../components/shared/FadeInUp";

export const metadata: Metadata = {
  title: "GEO Growth Lab Demo | Singularity Society",
  description:
    "GEO Growth Lab 是企业 AI 可见性诊断工具，用于问题库生成、AI 回答评分和诊断报告生成，辅助判断企业在 AI 搜索场景中的可见性表现。",
};

const gradientBrand = "linear-gradient(135deg, #7b7fff, #4dd9d5, #a78bfa)";

const toolCapabilities = [
  {
    title: "GEO 问题库生成器",
    description: "输入企业行业、城市、客户和服务，生成客户可能会问 AI 的真实问题。",
    icon: ClipboardList,
  },
  {
    title: "AI 回答评分器",
    description:
      "分析 AI 回答中是否提到企业、是否出现同类企业、是否存在错误描述，以及回答是否具备推荐倾向。",
    icon: BarChart3,
  },
  {
    title: "GEO 诊断报告生成器",
    description: "输出企业 AI 可见性评分、同类企业竞争风险、内容缺口和 30 天优化建议。",
    icon: FileText,
  },
];

const workflow = [
  { title: "企业信息录入", icon: ClipboardList },
  { title: "生成问题库", icon: SearchCheck },
  { title: "多平台测试", icon: Radar },
  { title: "粘贴 AI 回答", icon: Layers3 },
  { title: "自动评分", icon: BarChart3 },
  { title: "生成诊断报告", icon: FileText },
];

const industryExamples = [
  "本地服务",
  "B2B 企业",
  "口腔医美",
  "教育培训",
  "餐饮连锁",
  "工业设备",
  "财税法务",
  "农产品食品",
  "招商加盟",
  "专业服务",
];

const reportPreview = [
  "AI 可见性评分",
  "客户问题库",
  "回答分析",
  "同类企业竞争风险",
  "内容缺口",
  "30 天优化建议",
];

const heroStats = [
  { label: "核心工具", value: "3 个" },
  { label: "诊断链路", value: "6 步" },
  { label: "报告输出", value: "可演示" },
];

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <SiteHeader />
      <main>
        <section className="border-b border-[var(--border-default)]">
          <div className="mx-auto max-w-6xl px-6 pb-20 pt-28 sm:pb-24 sm:pt-36 lg:pt-40">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_410px] lg:items-center">
              <FadeInUp>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.32em] text-[var(--text-tertiary)]">
                    GEO Growth Lab
                  </p>
                  <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl">
                    GEO Growth Lab：企业 AI 可见性诊断工具
                  </h1>
                  <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--text-secondary)]">
                    通过问题库生成、AI 回答评分和诊断报告生成，帮助企业了解自己在 AI 搜索场景中的可见性表现。
                  </p>
                  <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href="/geo-diagnosis"
                      className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-black transition-transform hover:scale-[1.02]"
                      style={{ backgroundImage: gradientBrand }}
                    >
                      查看演示报告
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border-default)] px-6 py-3 text-sm font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--border-hover)]"
                    >
                      预约一次诊断
                    </Link>
                  </div>
                </div>
              </FadeInUp>

              <FadeInUp delay={0.12}>
                <div className="rounded-[28px] border border-[var(--border-default)] bg-[var(--bg-panel)] p-6 shadow-[var(--shadow-elevated)]">
                  <Sparkles className="h-6 w-6 text-[var(--accent-teal)]" />
                  <p className="mt-5 text-sm font-medium text-white">当前状态</p>
                  <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                    工具已具备本地演示和交付初稿能力。主站第一版先展示工具能力、样例报告入口和预约诊断引导，后续可接入独立工具地址。
                  </p>
                  <div className="mt-6 grid grid-cols-3 gap-3">
                    {heroStats.map((item) => (
                      <div key={item.label} className="rounded-2xl border border-[var(--border-default)] bg-black/20 p-4">
                        <p className="text-xs text-[var(--text-tertiary)]">{item.label}</p>
                        <p className="mt-1 text-base font-semibold text-white">{item.value}</p>
                      </div>
                    ))}
                  </div>
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
                  Capabilities
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  工具能力
                </h2>
                <p className="mt-4 text-base leading-8 text-[var(--text-secondary)]">
                  GEO Growth Lab 把企业 AI 可见性诊断拆成可展示、可复测、可交付的三个核心环节。
                </p>
              </div>
            </FadeInUp>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {toolCapabilities.map((capability, index) => {
                const Icon = capability.icon;
                return (
                  <FadeInUp key={capability.title} delay={index * 0.04}>
                    <article className="h-full rounded-[24px] border border-[var(--border-default)] bg-[var(--bg-panel)] p-6">
                      <Icon className="h-6 w-6 text-[var(--accent-indigo)]" />
                      <h3 className="mt-6 text-xl font-semibold text-white">{capability.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">{capability.description}</p>
                    </article>
                  </FadeInUp>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-b border-[var(--border-default)] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeInUp>
              <div className="max-w-3xl">
                <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--text-tertiary)]">
                  Workflow
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  工具如何辅助诊断？
                </h2>
              </div>
            </FadeInUp>
            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-6">
              {workflow.map((step, index) => {
                const Icon = step.icon;
                return (
                  <FadeInUp key={step.title} delay={index * 0.04}>
                    <article className="h-full rounded-[22px] border border-[var(--border-default)] bg-[var(--bg-panel)] p-5">
                      <div className="flex items-center justify-between gap-4">
                        <Icon className="h-5 w-5 text-[var(--accent-teal)]" />
                        <span className="font-mono text-xs text-[var(--text-tertiary)]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h3 className="mt-5 text-sm font-semibold leading-6 text-white">{step.title}</h3>
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
                    Industries
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                    支持全品类中小型成长企业
                  </h2>
                  <p className="mt-4 text-base leading-8 text-[var(--text-secondary)]">
                    工具的问题库和诊断逻辑围绕真实客户决策语言设计，可以根据不同行业的客户问题、平台内容和转化路径进行调整。
                  </p>
                </div>
              </FadeInUp>
              <div className="grid gap-3 sm:grid-cols-2">
                {industryExamples.map((industry, index) => (
                  <FadeInUp key={industry} delay={index * 0.03}>
                    <div className="flex min-h-16 items-center gap-3 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-panel)] px-5 py-4">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-[var(--accent-teal)]" />
                      <span className="text-sm font-medium text-[var(--text-secondary)]">{industry}</span>
                    </div>
                  </FadeInUp>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[var(--border-default)] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 rounded-[32px] border border-[var(--border-default)] bg-[var(--bg-panel)] p-6 sm:p-8 lg:grid-cols-[minmax(0,1fr)_410px] lg:p-10">
              <FadeInUp>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--text-tertiary)]">
                    Sample Report
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                    查看一份样例诊断报告
                  </h2>
                  <p className="mt-4 text-base leading-8 text-[var(--text-secondary)]">
                    我们会用一个虚拟企业样例展示 AI 可见性评分、问题库、回答分析、内容缺口和优化建议。
                  </p>
                  <Link
                    href="/geo-diagnosis"
                    className="mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-black transition-transform hover:scale-[1.02]"
                    style={{ backgroundImage: gradientBrand }}
                  >
                    查看样例报告
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </FadeInUp>
              <FadeInUp delay={0.12}>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  {reportPreview.map((item) => (
                    <div key={item} className="rounded-2xl border border-[var(--border-default)] bg-black/20 px-5 py-4">
                      <p className="text-sm font-medium text-[var(--text-secondary)]">{item}</p>
                    </div>
                  ))}
                </div>
              </FadeInUp>
            </div>
          </div>
        </section>

        <section className="border-b border-[var(--border-default)] py-12">
          <div className="mx-auto max-w-5xl px-6">
            <div className="rounded-[24px] border border-[var(--border-default)] bg-[rgba(255,255,255,0.03)] p-6">
              <div className="flex items-start gap-4">
                <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-[var(--accent-teal)]" />
                <p className="text-sm leading-7 text-[var(--text-secondary)]">
                  GEO Growth Lab 用于辅助判断企业在 AI 搜索场景中的可见性表现，不代表任何平台官方排名结果。工具分析结果用于帮助企业建设更容易被 AI 理解、引用和推荐的内容资产。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <FadeInUp>
              <SearchCheck className="mx-auto h-7 w-7 text-[var(--accent-teal)]" />
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                想用你的企业做一次真实测试？
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[var(--text-secondary)]">
                预约一次 AI 可见性诊断，我们会根据你的行业、城市、服务和内容资产，设计一组真实客户可能会问 AI 的问题。
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-black transition-transform hover:scale-[1.02]"
                style={{ backgroundImage: gradientBrand }}
              >
                申请 AI 可见性诊断
                <ArrowRight className="h-4 w-4" />
              </Link>
            </FadeInUp>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
