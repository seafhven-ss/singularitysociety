import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ClipboardList,
  FileText,
  HelpCircle,
  LineChart,
  Radar,
  SearchCheck,
  ShieldCheck,
  Target,
} from "lucide-react";
import { SiteFooter, SiteHeader } from "../components/site-shell";
import { FadeInUp } from "../components/shared/FadeInUp";

export const metadata: Metadata = {
  title: "企业 AI 可见性诊断 | Singularity Society",
  description:
    "测一测 AI 搜索里有没有你的企业，判断企业是否被提及、被理解、被推荐，以及是否存在同类企业竞争风险和内容资产缺口。",
};

const gradientBrand = "linear-gradient(135deg, #7b7fff, #4dd9d5, #a78bfa)";

const diagnosticQuestions = [
  "AI 是否知道你的企业？",
  "AI 如何描述你的产品或服务？",
  "客户问推荐时，AI 是否提到你？",
  "AI 是否更容易提到同类企业？",
  "AI 对你的企业是否存在错误理解？",
  "你的官网和内容是否足够被 AI 引用？",
  "你缺少哪些 FAQ、案例和行业内容？",
  "接下来 30 天应该优先补什么？",
];

const workflow = [
  { title: "企业资料收集", icon: ClipboardList },
  { title: "用户问题库生成", icon: HelpCircle },
  { title: "多平台 AI 测试", icon: SearchCheck },
  { title: "回答评分", icon: BarChart3 },
  { title: "同类企业分析", icon: Radar },
  { title: "内容缺口诊断", icon: Target },
  { title: "输出报告", icon: FileText },
];

const deliverables = [
  "企业 AI 可见性诊断报告",
  "30-100 个 AI 提问场景",
  "多平台测试结果",
  "同类企业共现分析",
  "AI 错误描述分析",
  "内容资产缺口",
  "30 天优化建议",
  "一次线上报告解读",
];

const companyTypes = [
  "中小型成长企业",
  "本地服务企业",
  "B2B 企业",
  "品牌型企业",
  "区域连锁企业",
  "招商加盟企业",
  "工厂型企业",
  "专业服务机构",
  "传统行业转型企业",
];

const pricePlans = [
  {
    name: "体验诊断",
    price: "999 元起",
    description: "适合先快速了解 AI 是否知道企业，以及关键问题里是否出现明显风险。",
  },
  {
    name: "标准诊断",
    price: "2999 元",
    description: "适合正式评估企业在多个 AI 搜索场景中的可见性表现和内容缺口。",
  },
  {
    name: "深度诊断",
    price: "6800 元",
    description: "适合行业竞争更强、平台覆盖更多、需要更完整报告和线上解读的企业。",
  },
];

const heroMetrics = [
  { label: "问题场景", value: "30-100" },
  { label: "核心输出", value: "诊断报告" },
  { label: "行动建议", value: "30 天" },
];

export default function GeoDiagnosisPage() {
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
                    AI Visibility Diagnosis
                  </p>
                  <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl">
                    测一测：AI 搜索里有没有你的企业？
                  </h1>
                  <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--text-secondary)]">
                    当客户向 AI 询问“哪家公司靠谱”“某类服务怎么选”“这个行业推荐谁”时，我们帮助你判断企业是否被提及、被理解、被推荐，以及是否存在同类企业竞争风险和内容资产缺口。
                  </p>
                  <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-black transition-transform hover:scale-[1.02]"
                      style={{ backgroundImage: gradientBrand }}
                    >
                      申请 AI 可见性诊断
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </FadeInUp>

              <FadeInUp delay={0.12}>
                <div className="rounded-[28px] border border-[var(--border-default)] bg-[var(--bg-panel)] p-6 shadow-[var(--shadow-elevated)]">
                  <LineChart className="h-6 w-6 text-[var(--accent-teal)]" />
                  <p className="mt-5 text-sm font-medium text-white">诊断关注的不是单一排名</p>
                  <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                    我们更关注 AI 是否理解企业、如何描述企业、是否提到同类企业，以及企业内容资产能否支撑准确回答。
                  </p>
                  <div className="mt-6 grid grid-cols-3 gap-3">
                    {heroMetrics.map((item) => (
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
                  Key Questions
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  一次诊断，回答企业最关心的 8 个问题
                </h2>
              </div>
            </FadeInUp>
            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {diagnosticQuestions.map((question, index) => (
                <FadeInUp key={question} delay={index * 0.035}>
                  <article className="h-full rounded-[22px] border border-[var(--border-default)] bg-[var(--bg-panel)] p-5">
                    <div className="flex items-center justify-between gap-4">
                      <HelpCircle className="h-5 w-5 text-[var(--accent-indigo)]" />
                      <span className="font-mono text-xs text-[var(--text-tertiary)]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <p className="mt-5 text-base font-medium leading-7 text-white">{question}</p>
                  </article>
                </FadeInUp>
              ))}
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
                  诊断流程
                </h2>
              </div>
            </FadeInUp>
            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-7">
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
                    Deliverables
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                    你会得到什么？
                  </h2>
                  <p className="mt-4 text-base leading-8 text-[var(--text-secondary)]">
                    诊断结果会转化为一份便于企业老板、市场负责人和内容团队共同讨论的报告，帮助明确下一步内容资产建设重点。
                  </p>
                </div>
              </FadeInUp>
              <div className="grid gap-3 sm:grid-cols-2">
                {deliverables.map((item, index) => (
                  <FadeInUp key={item} delay={index * 0.035}>
                    <div className="flex min-h-16 items-center gap-3 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-panel)] px-5 py-4">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-[var(--accent-teal)]" />
                      <span className="text-sm font-medium text-[var(--text-secondary)]">{item}</span>
                    </div>
                  </FadeInUp>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[var(--border-default)] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
              <FadeInUp>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--text-tertiary)]">
                    Fit
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                    适合哪些企业先做诊断？
                  </h2>
                  <p className="mt-4 text-base leading-8 text-[var(--text-secondary)]">
                    如果你的客户会搜索、比较、咨询、验证和反复决策，AI 可见性诊断可以帮助你先看清当前的搜索资产基础。
                  </p>
                </div>
              </FadeInUp>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {companyTypes.map((type, index) => (
                  <FadeInUp key={type} delay={index * 0.03}>
                    <div className="flex min-h-16 items-center gap-3 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-panel)] px-5 py-4">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-[var(--accent-teal)]" />
                      <span className="text-sm font-medium text-[var(--text-secondary)]">{type}</span>
                    </div>
                  </FadeInUp>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[var(--border-default)] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.74fr_1.26fr] lg:items-start">
              <FadeInUp>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--text-tertiary)]">
                    Pricing
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                    诊断服务参考价格
                  </h2>
                  <p className="mt-4 text-base leading-8 text-[var(--text-secondary)]">
                    价格会根据行业复杂度、测试平台数量、问题数量和报告深度调整。
                  </p>
                </div>
              </FadeInUp>
              <div className="grid gap-4 md:grid-cols-3">
                {pricePlans.map((plan, index) => (
                  <FadeInUp key={plan.name} delay={index * 0.04}>
                    <article className="h-full rounded-[24px] border border-[var(--border-default)] bg-[var(--bg-panel)] p-6">
                      <p className="text-sm font-medium text-[var(--text-secondary)]">{plan.name}</p>
                      <p className="mt-3 text-3xl font-semibold text-white">{plan.price}</p>
                      <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">{plan.description}</p>
                    </article>
                  </FadeInUp>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[var(--border-default)] py-12">
          <div className="mx-auto max-w-5xl px-6">
            <div className="rounded-[24px] border border-[var(--border-default)] bg-[rgba(255,255,255,0.03)] p-6">
              <div className="flex items-start gap-4">
                <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-[var(--accent-teal)]" />
                <p className="text-sm leading-7 text-[var(--text-secondary)]">
                  诊断结果用于辅助判断企业在 AI 搜索场景中的可见性表现，不代表任何平台官方排名结果。本服务用于提升企业被 AI 理解、引用和推荐的概率，实际展示结果取决于平台模型、数据来源和用户提问方式。
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
                想知道 AI 是如何评价你的企业的吗？
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[var(--text-secondary)]">
                提交企业信息，我们会评估适合你的诊断方式。
              </p>
              <Link
                href="/contact"
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
