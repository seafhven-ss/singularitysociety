import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  ClipboardList,
  DatabaseZap,
  FileText,
  Gauge,
  Grid3X3,
  Layers3,
  Megaphone,
  MousePointerClick,
  Radar,
  Repeat2,
  SearchCheck,
  ShieldCheck,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { SiteFooter, SiteHeader } from "../components/site-shell";
import { FadeInUp } from "../components/shared/FadeInUp";

export const metadata: Metadata = {
  title: "GEO Growth Lab Demo | Singularity Society",
  description:
    "GEO Growth Lab 与 AI 搜索增长中台演示，展示企业 AI 可见性诊断、内容资产、数字化转化承接、小程序、私域增长和月度复测能力。",
};

const gradientBrand = "linear-gradient(135deg, #7b7fff, #4dd9d5, #a78bfa)";
const geoConsoleUrl = process.env.NEXT_PUBLIC_GEO_CONSOLE_URL?.trim();
const consoleDemoHref = geoConsoleUrl || "/contact";
const consoleDemoIsExternal = Boolean(geoConsoleUrl?.startsWith("http"));

const toolCapabilities = [
  {
    title: "GEO 问题库生成器",
    description: "输入企业行业、城市、客户和服务，生成客户可能会问 AI 的真实问题。",
    icon: ClipboardList,
  },
  {
    title: "AI 回答评分器",
    description: "分析 AI 回答中是否提到企业、是否出现同类企业、是否存在错误描述，以及回答是否具备推荐倾向。",
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

const consoleCapabilities = [
  {
    title: "客户项目中心",
    description: "管理从线索、诊断、方案、成交、交付到复测的完整客户阶段。",
    icon: BriefcaseBusiness,
  },
  {
    title: "结构化资料录入",
    description: "将企业产品、服务、案例、客户问题和专业经验整理为 AI 更容易理解的品牌语义资产。",
    icon: DatabaseZap,
  },
  {
    title: "6 维 GEO 评分",
    description: "评估品牌可见性、品类关联度、AI 推荐倾向、内容资产完整度、信源覆盖度和同类企业竞争风险。",
    icon: Gauge,
  },
  {
    title: "内容资产工作台",
    description: "围绕客户真实问题生成 FAQ、案例、对比、避坑、行业知识和创始人观点等内容任务。",
    icon: Grid3X3,
  },
  {
    title: "媒体矩阵与预算测算",
    description: "管理权威媒体、行业媒体、内容平台和搜索问答平台的发布计划与预算消耗。",
    icon: Megaphone,
  },
  {
    title: "转化承接诊断",
    description: "评估企业官网、小程序、私域入口、预约 / 询盘、案例评价、会员复购和数据追踪能力。",
    icon: MousePointerClick,
  },
  {
    title: "小程序 / APP / 私域建议",
    description: "根据企业类型，给出官网落地页、小程序、APP、会员系统、企业微信私域和运营后台建设建议。",
    icon: Smartphone,
  },
  {
    title: "月度增长报告",
    description: "把 AI 可见性、内容进度、媒体计划、转化承接和下一步运营动作整合成客户可读的增长报告。",
    icon: Repeat2,
  },
];

const growthLoop = ["AI 搜索可见", "内容信任资产", "官网 / 小程序 / APP 承接", "表单 / 咨询 / 下单", "私域运营", "复测优化"];

const consoleDemoPath = [
  "从客户项目中心查看企业阶段和评分",
  "查看 6 维 GEO 评分与内容资产缺口",
  "进入内容任务和媒体发布计划",
  "查看转化承接诊断",
  "生成小程序 / APP / 私域系统建议",
  "输出月度 AI 搜索增长报告",
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

const reportPreview = ["AI 可见性评分", "客户问题库", "回答分析", "同类企业竞争风险", "内容缺口", "30 天优化建议"];

const heroStats = [
  { label: "核心工具", value: "3 个" },
  { label: "诊断链路", value: "6 步" },
  { label: "中台能力", value: "8 类" },
];

function ConsoleDemoButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={consoleDemoHref}
      className={className}
      style={{ backgroundImage: gradientBrand }}
      {...(consoleDemoIsExternal ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      查看中台演示
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}

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
                  <p className="text-xs font-medium uppercase tracking-[0.32em] text-[var(--text-tertiary)]">GEO Growth Lab</p>
                  <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl">
                    GEO Growth Lab：企业 AI 可见性诊断工具
                  </h1>
                  <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--text-secondary)]">
                    通过问题库生成、AI 回答评分和诊断报告生成，帮助企业了解自己在 AI 搜索场景中的可见性表现。
                  </p>
                  <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href="/demo/report"
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
                    工具已具备本地演示和交付初稿能力。主站第一版展示工具能力、样例报告入口和预约诊断引导，后续可接入独立中台地址。
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
                <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--text-tertiary)]">Capabilities</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">工具能力</h2>
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
                <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--text-tertiary)]">Workflow</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">工具如何辅助诊断？</h2>
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
                        <span className="font-mono text-xs text-[var(--text-tertiary)]">{String(index + 1).padStart(2, "0")}</span>
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
            <div className="rounded-[32px] border border-[rgba(125,211,252,0.25)] bg-[linear-gradient(135deg,rgba(16,24,39,0.96),rgba(15,23,42,0.88))] p-6 shadow-[var(--shadow-elevated)] sm:p-8 lg:p-10">
              <FadeInUp>
                <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_440px] lg:items-start">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--text-tertiary)]">AI Growth Console</p>
                    <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Singularity AI Growth Console</h2>
                    <p className="mt-2 text-lg font-medium text-[var(--accent-teal)]">奇点 AI 搜索增长中台</p>
                    <p className="mt-5 text-base leading-8 text-[var(--text-secondary)]">
                      除了单次 AI 可见性诊断，我们还通过增长中台管理客户项目、结构化资料、6 维 GEO 评分、内容任务、媒体矩阵、积分 / 预算测算、转化承接诊断、小程序 / APP / 私域系统建议和月度增长报告。
                    </p>
                    <p className="mt-4 text-sm leading-7 text-[var(--text-tertiary)]">
                      目前 Singularity AI Growth Console 仍是内部演示和交付工具，暂不开放客户自助登录。客户可以通过预约演示了解完整流程。
                    </p>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                      <ConsoleDemoButton
                        className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-black transition-transform hover:scale-[1.02]"
                      />
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border-default)] px-6 py-3 text-sm font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--border-hover)]"
                      >
                        预约中台演示
                      </Link>
                    </div>
                  </div>
                  <div className="rounded-[24px] border border-[var(--border-default)] bg-black/20 p-5">
                    <p className="text-sm font-semibold text-white">增长闭环</p>
                    <div className="mt-5 space-y-3">
                      {growthLoop.map((item, index) => (
                        <div key={item} className="flex items-center gap-3 rounded-2xl border border-[var(--border-default)] bg-white/[0.03] px-4 py-3">
                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold text-black" style={{ backgroundImage: gradientBrand }}>
                            {index + 1}
                          </span>
                          <span className="text-sm font-medium text-[var(--text-secondary)]">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeInUp>

              <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {consoleCapabilities.map((capability, index) => {
                  const Icon = capability.icon;
                  return (
                    <FadeInUp key={capability.title} delay={index * 0.03}>
                      <article className="h-full rounded-[22px] border border-[var(--border-default)] bg-black/20 p-5">
                        <Icon className="h-5 w-5 text-[var(--accent-teal)]" />
                        <h3 className="mt-5 text-base font-semibold text-white">{capability.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">{capability.description}</p>
                      </article>
                    </FadeInUp>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[var(--border-default)] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <FadeInUp>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--text-tertiary)]">Console Path</p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">中台演示路径</h2>
                  <p className="mt-4 text-base leading-8 text-[var(--text-secondary)]">
                    销售演示时，可以从客户项目进入，逐步展示 AI 可见性、内容任务、媒体计划、转化承接和月度报告。
                  </p>
                </div>
              </FadeInUp>
              <div className="grid gap-3">
                {consoleDemoPath.map((step, index) => (
                  <FadeInUp key={step} delay={index * 0.03}>
                    <div className="flex gap-4 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-panel)] p-5">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold text-black" style={{ backgroundImage: gradientBrand }}>
                        {index + 1}
                      </span>
                      <p className="text-sm font-medium leading-7 text-[var(--text-secondary)]">{step}</p>
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
                <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--text-tertiary)]">Positioning</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">为什么它不是普通发稿工具？</h2>
                <div className="mt-5 space-y-4 text-base leading-8 text-[var(--text-secondary)]">
                  <p>普通 GEO 发稿服务通常解决的是“内容是否发布出去”。</p>
                  <p>
                    Singularity AI Growth Console 关注的是“客户通过 AI 和内容平台认识企业之后，是否能被官网、小程序、APP、私域和运营系统有效承接”。
                  </p>
                  <p>因此，它不是单纯的发布系统，而是面向中小型成长企业的 AI 搜索增长与数字化转化中台。</p>
                </div>
              </div>
            </FadeInUp>
          </div>
        </section>

        <section className="border-b border-[var(--border-default)] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
              <FadeInUp>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--text-tertiary)]">Industries</p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">支持全品类中小型成长企业</h2>
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
                  <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--text-tertiary)]">Sample Report</p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">查看一份样例诊断报告</h2>
                  <p className="mt-4 text-base leading-8 text-[var(--text-secondary)]">
                    我们会用一个虚拟企业样例展示 AI 可见性评分、问题库、回答分析、内容缺口和优化建议。
                  </p>
                  <Link
                    href="/demo/report"
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
                  本服务用于提升企业被 AI 理解、引用和推荐的概率，实际展示结果取决于平台模型、数据来源、内容质量和用户提问方式。GEO Growth Lab 与增长中台用于辅助判断企业在 AI 搜索场景中的可见性表现，不代表任何平台官方排名结果。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <FadeInUp>
              <SearchCheck className="mx-auto h-7 w-7 text-[var(--accent-teal)]" />
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">想看一遍完整中台演示？</h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[var(--text-secondary)]">
                我们可以基于你的企业信息，演示从 AI 可见性诊断、内容资产规划到小程序 / 私域承接建议的完整流程。
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-black transition-transform hover:scale-[1.02]"
                  style={{ backgroundImage: gradientBrand }}
                >
                  预约中台演示
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/demo/report"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border-default)] px-6 py-3 text-sm font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--border-hover)]"
                >
                  查看样例报告
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
