"use client";

import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BookOpenCheck,
  BrainCircuit,
  Building2,
  CheckCircle2,
  ClipboardList,
  Database,
  FileText,
  Layers3,
  MessageSquareWarning,
  Radar,
  RefreshCw,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow,
} from "lucide-react";
import { SiteFooter, SiteHeader } from "./components/site-shell";
import { FadeInUp } from "./components/shared/FadeInUp";

const gradientBrand = "linear-gradient(135deg, #7b7fff, #4dd9d5, #a78bfa)";

const painPoints = [
  {
    title: "客户不再只搜索关键词",
    description: "越来越多客户会直接问 AI：哪家公司靠谱、哪类服务适合我、有哪些避坑点。",
    icon: SearchCheck,
  },
  {
    title: "AI 可能不知道你是谁",
    description: "如果公开内容缺少清晰结构，AI 很难准确理解企业名称、服务边界和适配客户。",
    icon: Radar,
  },
  {
    title: "AI 可能推荐了同类企业",
    description: "当竞品的案例、FAQ、评价和行业内容更完整时，它们更容易在回答中被提到。",
    icon: MessageSquareWarning,
  },
  {
    title: "AI 可能错误理解你的业务",
    description: "官网、公众号、短视频和第三方内容信息不一致，会放大 AI 对企业能力的误解。",
    icon: BrainCircuit,
  },
  {
    title: "内容没有形成统一资产",
    description: "官网、公众号、小红书、视频号和案例内容分散存在，缺少围绕客户问题的系统组织。",
    icon: Layers3,
  },
  {
    title: "知识没有被结构化引用",
    description: "企业内容很多，但没有沉淀成 AI 可理解、可引用、可复测的知识资产。",
    icon: BookOpenCheck,
  },
];

const methodSteps = [
  { title: "企业诊断", description: "梳理品牌、服务、客户、竞品、内容资产和当前搜索基础。", icon: Building2 },
  { title: "用户问题库", description: "生成客户真实可能会问 AI 的品牌、品类、地域、推荐、避坑和对比问题。", icon: ClipboardList },
  { title: "多平台 AI 测试", description: "围绕百度 AI 搜索、Kimi、DeepSeek、豆包、小红书、抖音等场景做样本测试。", icon: SearchCheck },
  { title: "可见性评分", description: "评估企业是否被提及、如何被描述、是否被竞品压制，以及内容缺口在哪里。", icon: BarChart3 },
  { title: "内容资产建设", description: "补齐 FAQ、案例、服务页、行业知识、对比内容和可信信源。", icon: FileText },
  { title: "企业知识库", description: "把企业能力、案例、流程和问答沉淀为可复用的知识资产与智能体基础。", icon: Database },
  { title: "持续复测优化", description: "按月复测重点问题，跟踪 AI 搜索可见性变化和内容资产效果。", icon: RefreshCw },
];

const services = [
  {
    title: "企业 AI 可见性诊断",
    description: "用问题库和多平台样本测试，判断企业当前在 AI 搜索场景中的可见性表现。",
    icon: Radar,
  },
  {
    title: "GEO 基础建设",
    description: "重构官网、服务页、FAQ 和内容入口，让企业信息更容易被理解和引用。",
    icon: Target,
  },
  {
    title: "企业语义地图",
    description: "梳理品牌词、品类词、地域词、场景词、竞品词和转化问题的覆盖关系。",
    icon: Workflow,
  },
  {
    title: "内容资产建设",
    description: "围绕客户问题补齐案例、观点、知识文章、小红书笔记和短视频脚本。",
    icon: Layers3,
  },
  {
    title: "企业知识库 / 智能体",
    description: "沉淀销售、客服、招商、培训和老板 IP 内容所需的企业知识资产。",
    icon: BrainCircuit,
  },
  {
    title: "月度 GEO 陪跑",
    description: "按月复测重点问题，持续优化内容资产、平台内容和询盘转化路径。",
    icon: RefreshCw,
  },
];

const companyTypes = [
  "本地服务企业",
  "B2B 企业",
  "品牌型企业",
  "区域连锁企业",
  "招商加盟企业",
  "工厂型企业",
  "专业服务机构",
  "传统行业转型企业",
  "高客单服务企业",
  "内容驱动型企业",
];

const demoStats = [
  { label: "问题库", value: "80-120" },
  { label: "测试平台", value: "多平台" },
  { label: "评分维度", value: "6 项" },
  { label: "行动周期", value: "30 天" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <SiteHeader />
      <main>
        <section className="border-b border-[var(--border-default)]">
          <div className="mx-auto max-w-6xl px-6 pb-20 pt-28 sm:pb-24 sm:pt-36 lg:pb-28 lg:pt-40">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-center">
              <FadeInUp>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.32em] text-[var(--text-tertiary)]">
                    Singularity Society / AI Search Growth
                  </p>
                  <h1 className="mt-6 max-w-[780px] text-[2.65rem] font-semibold leading-[1.08] tracking-[-0.01em] text-white sm:text-5xl sm:leading-[1.06] lg:text-[4.35rem] lg:leading-[1.04]">
                    <span className="block">客户开始问 AI</span>
                    <span className="block">“哪家公司靠谱”时，</span>
                    <span className="block">你的企业会出现吗？</span>
                  </h1>
                  <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--text-secondary)]">
                    Singularity Society 帮助中小型成长企业建立 AI 搜索时代的品牌可见性、内容资产和询盘转化系统，让企业更容易被 AI 理解、引用和推荐。
                  </p>
                  <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href="/geo-diagnosis"
                      className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-black transition-transform hover:scale-[1.02]"
                      style={{ backgroundImage: gradientBrand }}
                    >
                      预约 AI 可见性诊断
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                      href="/services"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border-default)] px-6 py-3 text-sm font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--border-hover)]"
                    >
                      查看服务方案
                    </Link>
                  </div>
                  <p className="mt-6 max-w-2xl text-sm leading-7 text-[var(--text-tertiary)]">
                    我们不做传统意义上的关键词堆砌，而是帮助企业把品牌、产品、服务、案例和专业知识，转化为 AI 更容易理解和引用的搜索资产。
                  </p>
                </div>
              </FadeInUp>

              <FadeInUp delay={0.12}>
                <div className="rounded-[28px] border border-[var(--border-default)] bg-[var(--bg-panel)] p-5 shadow-[var(--shadow-elevated)]">
                  <div className="flex items-center justify-between border-b border-[var(--border-default)] pb-4">
                    <div>
                      <p className="text-sm font-medium text-white">GEO Visibility Snapshot</p>
                      <p className="mt-1 text-xs text-[var(--text-tertiary)]">诊断样本 / 可见性 / 内容缺口</p>
                    </div>
                    <Sparkles className="h-5 w-5 text-[var(--accent-teal)]" />
                  </div>
                  <div className="mt-5 space-y-3">
                    {["品牌是否被 AI 提及", "业务描述是否准确", "竞品是否形成压制", "内容资产是否可引用"].map((item, index) => (
                      <div key={item} className="flex items-center justify-between rounded-2xl border border-[var(--border-default)] bg-black/20 px-4 py-4">
                        <span className="text-sm text-[var(--text-secondary)]">{item}</span>
                        <span className="font-mono text-xs text-[var(--text-tertiary)]">0{index + 1}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 rounded-2xl border border-[var(--accent-indigo)]/30 bg-[rgba(123,127,255,0.08)] p-4">
                    <p className="text-sm leading-6 text-[var(--text-secondary)]">
                      从客户问题出发，反推企业应该建设哪些可被 AI 理解、引用和验证的内容资产。
                    </p>
                  </div>
                </div>
              </FadeInUp>
            </div>
          </div>
        </section>

        <section id="geo-diagnosis" className="border-b border-[var(--border-default)] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeInUp>
              <div className="max-w-3xl">
                <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--text-tertiary)]">Why GEO</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  AI 搜索正在改变客户决策路径
                </h2>
                <p className="mt-4 text-base leading-8 text-[var(--text-secondary)]">
                  企业过去关注搜索排名和信息流曝光，现在还需要关注 AI 是否真正理解企业、是否正确引用企业、是否在关键问题里把企业作为可选项呈现。
                </p>
              </div>
            </FadeInUp>
            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {painPoints.map((item, index) => {
                const Icon = item.icon;
                return (
                  <FadeInUp key={item.title} delay={index * 0.04}>
                    <div className="h-full rounded-[24px] border border-[var(--border-default)] bg-[var(--bg-panel)] p-6">
                      <Icon className="h-5 w-5 text-[var(--accent-indigo)]" />
                      <h3 className="mt-5 text-lg font-semibold text-white">{item.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">{item.description}</p>
                    </div>
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
                <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--text-tertiary)]">Method</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  我们如何帮助企业提升 AI 搜索可见性
                </h2>
                <p className="mt-4 text-base leading-8 text-[var(--text-secondary)]">
                  从企业信息诊断开始，用真实用户问题测试 AI 回答，再把诊断结果转化为官网、内容平台和企业知识库的建设任务。
                </p>
              </div>
            </FadeInUp>
            <div className="mt-10 grid gap-4 lg:grid-cols-7">
              {methodSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <FadeInUp key={step.title} delay={index * 0.04}>
                    <div className="h-full rounded-[22px] border border-[var(--border-default)] bg-[var(--bg-panel)] p-5">
                      <div className="flex items-center justify-between gap-4">
                        <Icon className="h-5 w-5 text-[var(--accent-teal)]" />
                        <span className="font-mono text-xs text-[var(--text-tertiary)]">{String(index + 1).padStart(2, "0")}</span>
                      </div>
                      <h3 className="mt-5 text-sm font-semibold text-white">{step.title}</h3>
                      <p className="mt-3 text-xs leading-6 text-[var(--text-secondary)]">{step.description}</p>
                    </div>
                  </FadeInUp>
                );
              })}
            </div>
          </div>
        </section>

        <section id="services" className="border-b border-[var(--border-default)] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeInUp>
              <div className="max-w-3xl">
                <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--text-tertiary)]">Services</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  从诊断到资产建设，再到持续复测
                </h2>
                <p className="mt-4 text-base leading-8 text-[var(--text-secondary)]">
                  不是一次性做几篇内容，而是帮助企业围绕客户决策问题，建立可复用、可验证、可持续迭代的 AI 搜索增长系统。
                </p>
              </div>
            </FadeInUp>
            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <FadeInUp key={service.title} delay={index * 0.04}>
                    <div className="h-full rounded-[24px] border border-[var(--border-default)] bg-[var(--bg-panel)] p-6 transition-colors hover:border-[var(--border-hover)]">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--border-default)] bg-black/20">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="mt-6 text-lg font-semibold text-white">{service.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">{service.description}</p>
                    </div>
                  </FadeInUp>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-b border-[var(--border-default)] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <FadeInUp>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--text-tertiary)]">Fit</p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                    适合哪些企业？
                  </h2>
                  <p className="mt-4 text-base leading-8 text-[var(--text-secondary)]">
                    适用于需要被客户反复比较、需要建立信任、需要通过内容解释价值的中小型成长企业。设计、装修、商业空间可以作为适用行业之一，但不是唯一方向。
                  </p>
                </div>
              </FadeInUp>
              <div className="grid gap-3 sm:grid-cols-2">
                {companyTypes.map((type, index) => (
                  <FadeInUp key={type} delay={index * 0.03}>
                    <div className="flex items-center gap-3 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-panel)] px-5 py-4">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-[var(--accent-teal)]" />
                      <span className="text-sm font-medium text-[var(--text-secondary)]">{type}</span>
                    </div>
                  </FadeInUp>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="demo" className="border-b border-[var(--border-default)] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 rounded-[32px] border border-[var(--border-default)] bg-[var(--bg-panel)] p-6 sm:p-8 lg:grid-cols-[minmax(0,1fr)_420px] lg:p-10">
              <FadeInUp>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--text-tertiary)]">GEO Growth Lab</p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                    先测一测，AI 是否真的认识你的企业
                  </h2>
                  <p className="mt-4 text-base leading-8 text-[var(--text-secondary)]">
                    通过 GEO Growth Lab，我们可以生成客户可能会问 AI 的问题，评估企业在多个 AI 搜索场景中的可见性表现，并输出诊断报告。
                  </p>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <a
                      href="/demo"
                      aria-label="演示报告入口暂未正式上线"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border-default)] px-6 py-3 text-sm font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--border-hover)]"
                    >
                      查看演示报告
                    </a>
                    <Link
                      href="/geo-diagnosis"
                      className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-black transition-transform hover:scale-[1.02]"
                      style={{ backgroundImage: gradientBrand }}
                    >
                      申请一次诊断
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                  <p className="mt-4 text-xs leading-6 text-[var(--text-tertiary)]">
                    工具 Demo 正在准备接入主站。当前入口先用于说明诊断流程和预约真实样本测试。
                  </p>
                </div>
              </FadeInUp>

              <FadeInUp delay={0.12}>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  {demoStats.map((item) => (
                    <div key={item.label} className="rounded-2xl border border-[var(--border-default)] bg-black/20 p-5">
                      <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-tertiary)]">{item.label}</p>
                      <p className="mt-2 text-2xl font-semibold text-white">{item.value}</p>
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
                  本服务用于提升企业被 AI 理解、引用和推荐的概率，实际展示结果取决于平台模型、数据来源和用户提问方式。诊断结果用于辅助判断企业在 AI 搜索场景中的可见性表现，不代表任何平台官方排名结果。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <FadeInUp>
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--text-tertiary)]">Next Step</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                想知道 AI 是如何评价你的企业的吗？
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[var(--text-secondary)]">
                预约一次 AI 可见性诊断，了解你的企业在 AI 搜索中的当前表现、同类企业竞争风险和内容资产缺口。
              </p>
              <Link
                href="/geo-diagnosis"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-black transition-transform hover:scale-[1.02]"
                style={{ backgroundImage: gradientBrand }}
              >
                预约诊断
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
