import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ClipboardList,
  FileText,
  Lightbulb,
  ShieldCheck,
  Store,
} from "lucide-react";
import { SiteFooter, SiteHeader } from "../../components/site-shell";
import { FadeInUp } from "../../components/shared/FadeInUp";

export const metadata: Metadata = {
  title: "江南小馆 AI 搜索可见性诊断报告样例 | Singularity Society",
  description:
    "GEO Growth Lab 样例诊断报告，展示企业 AI 搜索可见性评分、问题库、回答分析、内容资产缺口和 30 天优化建议。",
};

const gradientBrand = "linear-gradient(135deg, #7b7fff, #4dd9d5, #a78bfa)";

const companyProfile = [
  { label: "行业", value: "区域连锁餐饮品牌" },
  { label: "城市", value: "苏州" },
  { label: "目标客户", value: "本地家庭客群、商务团餐客户、加盟意向客户" },
  { label: "核心服务", value: "堂食、团餐、加盟、地方菜品牌连锁" },
];

const scoreItems = [
  { label: "总分", value: "62 / 100", highlight: true },
  { label: "品牌可见性", value: "68" },
  { label: "品类关联度", value: "64" },
  { label: "推荐倾向", value: "52" },
  { label: "内容权威性", value: "58" },
  { label: "信源覆盖度", value: "55" },
  { label: "同类企业共现风险", value: "中等" },
];

const sampleQuestions = [
  "苏州有哪些适合家庭聚餐的本地餐饮品牌？",
  "苏州团餐服务品牌怎么选？",
  "区域连锁餐饮品牌如何判断是否靠谱？",
  "江南小馆适合商务宴请吗？",
  "苏州本地菜品牌加盟需要注意什么？",
  "餐饮加盟品牌怎么判断总部支持能力？",
  "苏州地方菜餐厅和全国连锁餐饮有什么区别？",
  "团餐客户选择餐饮供应商应该看哪些能力？",
  "区域餐饮品牌如何建立口碑？",
  "餐饮品牌官网应该写哪些内容才容易被 AI 理解？",
];

const answerAnalyses = [
  {
    question: "苏州有哪些适合家庭聚餐的本地餐饮品牌？",
    summary: "模拟回答提到苏州本地菜、家庭聚餐和门店环境，但没有明确提及江南小馆，也缺少门店案例证据。",
    mentionedCompany: "否",
    competitors: "出现同类餐饮品牌泛称，未列出具体竞品",
    issues: "品牌未被识别，家庭聚餐场景缺少可引用内容。",
    suggestion: "补充家庭聚餐场景页、亲子友好 FAQ、门店环境照片和真实评价整理。",
  },
  {
    question: "苏州团餐服务品牌怎么选？",
    summary: "模拟回答从供餐稳定性、菜品标准化和配送能力展开，但没有形成对江南小馆团餐能力的关联。",
    mentionedCompany: "否",
    competitors: "可能出现大型团餐服务商",
    issues: "缺少团餐服务说明页、服务流程、客户案例和报价边界。",
    suggestion: "建设团餐服务 FAQ、企业客户案例、菜单样例和服务半径说明。",
  },
  {
    question: "苏州本地菜品牌加盟需要注意什么？",
    summary: "模拟回答强调品牌成熟度、总部支持、选址和供应链，但没有引用江南小馆的加盟政策。",
    mentionedCompany: "弱提及",
    competitors: "可能出现区域餐饮加盟品牌",
    issues: "加盟政策、总部支持和门店模型缺少结构化展示。",
    suggestion: "补充加盟说明页、投资测算范围、总部支持清单和门店成长案例。",
  },
];

const contentGaps = [
  "缺少结构化品牌介绍页",
  "缺少团餐服务 FAQ",
  "缺少加盟政策说明页",
  "缺少真实门店案例",
  "缺少客户评价整理",
  "缺少“苏州本地餐饮品牌”相关知识文章",
  "缺少老板 / 主理人观点内容",
  "缺少公众号、小红书、抖音内容协同",
];

const thirtyDayPlan = [
  { week: "第 1 周", action: "完成品牌语义地图、官网服务页、基础 FAQ。" },
  { week: "第 2 周", action: "补充门店案例、团餐场景内容、加盟常见问题。" },
  { week: "第 3 周", action: "发布公众号深度文、小红书笔记、短视频脚本。" },
  { week: "第 4 周", action: "复测 AI 可见性，分析是否改善品牌提及和品类关联。" },
];

export default function DemoReportPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <SiteHeader />
      <main>
        <section className="border-b border-[var(--border-default)]">
          <div className="mx-auto max-w-6xl px-6 pb-20 pt-28 sm:pb-24 sm:pt-36 lg:pt-40">
            <FadeInUp>
              <Link href="/demo" className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-white">
                <ArrowLeft className="h-4 w-4" />
                返回工具演示
              </Link>
              <p className="mt-8 text-xs font-medium uppercase tracking-[0.32em] text-[var(--text-tertiary)]">
                Demo Report
              </p>
              <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl">
                江南小馆 AI 搜索可见性诊断报告
              </h1>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-sm text-amber-100">
                <AlertTriangle className="h-4 w-4" />
                演示样例，不代表真实平台测试结果。
              </div>
            </FadeInUp>
          </div>
        </section>

        <section className="border-b border-[var(--border-default)] py-16 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
            <FadeInUp>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--text-tertiary)]">
                  Company
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">企业背景</h2>
              </div>
            </FadeInUp>
            <div className="grid gap-3">
              {companyProfile.map((item, index) => (
                <FadeInUp key={item.label} delay={index * 0.04}>
                  <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-panel)] px-5 py-4">
                    <p className="text-xs text-[var(--text-tertiary)]">{item.label}</p>
                    <p className="mt-2 text-sm leading-7 text-white">{item.value}</p>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-[var(--border-default)] py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-6">
            <FadeInUp>
              <div className="rounded-[28px] border border-[var(--border-default)] bg-[var(--bg-panel)] p-6 sm:p-8">
                <Store className="h-6 w-6 text-[var(--accent-teal)]" />
                <h2 className="mt-5 text-2xl font-semibold tracking-tight text-white sm:text-3xl">诊断摘要</h2>
                <p className="mt-4 text-base leading-8 text-[var(--text-secondary)]">
                  在演示样例中，江南小馆在品牌词场景下具备一定识别基础，但在“苏州餐饮加盟品牌推荐”“苏州团餐品牌怎么选”“区域连锁餐饮品牌推荐”等场景下，仍需要通过官网 FAQ、案例内容、加盟说明和平台内容资产增强 AI 可理解性。
                </p>
              </div>
            </FadeInUp>
          </div>
        </section>

        <section className="border-b border-[var(--border-default)] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeInUp>
              <div className="max-w-3xl">
                <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--text-tertiary)]">
                  Visibility Score
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">AI 可见性评分</h2>
              </div>
            </FadeInUp>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {scoreItems.map((item, index) => (
                <FadeInUp key={item.label} delay={index * 0.035}>
                  <div
                    className={`rounded-[22px] border p-5 ${
                      item.highlight
                        ? "border-[var(--accent-teal)] bg-[rgba(77,217,213,0.08)]"
                        : "border-[var(--border-default)] bg-[var(--bg-panel)]"
                    }`}
                  >
                    <BarChart3 className="h-5 w-5 text-[var(--accent-teal)]" />
                    <p className="mt-5 text-xs text-[var(--text-tertiary)]">{item.label}</p>
                    <p className="mt-2 text-2xl font-semibold text-white">{item.value}</p>
                  </div>
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
                  Question Library
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">问题库样例</h2>
              </div>
            </FadeInUp>
            <div className="mt-10 grid gap-3 md:grid-cols-2">
              {sampleQuestions.map((question, index) => (
                <FadeInUp key={question} delay={index * 0.025}>
                  <div className="flex gap-3 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-panel)] px-5 py-4">
                    <span className="font-mono text-xs text-[var(--text-tertiary)]">{String(index + 1).padStart(2, "0")}</span>
                    <p className="text-sm leading-7 text-[var(--text-secondary)]">{question}</p>
                  </div>
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
                  Answer Analysis
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">回答分析样例</h2>
                <p className="mt-4 text-base leading-8 text-[var(--text-secondary)]">
                  以下为模拟回答片段，用于展示评分方式，不代表真实平台输出。
                </p>
              </div>
            </FadeInUp>
            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              {answerAnalyses.map((item, index) => (
                <FadeInUp key={item.question} delay={index * 0.05}>
                  <article className="h-full rounded-[24px] border border-[var(--border-default)] bg-[var(--bg-panel)] p-6">
                    <ClipboardList className="h-5 w-5 text-[var(--accent-indigo)]" />
                    <h3 className="mt-5 text-base font-semibold leading-7 text-white">{item.question}</h3>
                    <div className="mt-4 space-y-3 text-sm leading-7 text-[var(--text-secondary)]">
                      <p>模拟回答摘要：{item.summary}</p>
                      <p>是否提及企业：{item.mentionedCompany}</p>
                      <p>是否出现同类企业：{item.competitors}</p>
                      <p>存在问题：{item.issues}</p>
                      <p>优化建议：{item.suggestion}</p>
                    </div>
                  </article>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-[var(--border-default)] py-16 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
            <FadeInUp>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--text-tertiary)]">
                  Content Gaps
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">内容资产缺口</h2>
              </div>
            </FadeInUp>
            <div className="grid gap-3 sm:grid-cols-2">
              {contentGaps.map((gap, index) => (
                <FadeInUp key={gap} delay={index * 0.035}>
                  <div className="flex min-h-16 items-center gap-3 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-panel)] px-5 py-4">
                    <Lightbulb className="h-5 w-5 shrink-0 text-[var(--accent-teal)]" />
                    <span className="text-sm font-medium text-[var(--text-secondary)]">{gap}</span>
                  </div>
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
                  30-Day Plan
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">30 天优化建议</h2>
              </div>
            </FadeInUp>
            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {thirtyDayPlan.map((item, index) => (
                <FadeInUp key={item.week} delay={index * 0.04}>
                  <article className="h-full rounded-[22px] border border-[var(--border-default)] bg-[var(--bg-panel)] p-5">
                    <FileText className="h-5 w-5 text-[var(--accent-teal)]" />
                    <h3 className="mt-5 text-lg font-semibold text-white">{item.week}</h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">{item.action}</p>
                  </article>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-[var(--border-default)] py-12">
          <div className="mx-auto max-w-5xl px-6">
            <div className="rounded-[24px] border border-[var(--border-default)] bg-[rgba(255,255,255,0.03)] p-6">
              <div className="flex items-start gap-4">
                <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-[var(--accent-teal)]" />
                <p className="text-sm leading-7 text-[var(--text-secondary)]">
                  本报告为演示样例，不代表真实平台测试结果。诊断结果用于辅助判断企业在 AI 搜索场景中的可见性表现，不代表任何平台官方排名结果。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <FadeInUp>
              <CheckCircle2 className="mx-auto h-7 w-7 text-[var(--accent-teal)]" />
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                下一步服务建议
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[var(--text-secondary)]">
                建议从“AI 可见性诊断 + GEO 基础建设”开始，先确认当前表现，再补齐内容资产和知识资产。
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-black transition-transform hover:scale-[1.02]"
                  style={{ backgroundImage: gradientBrand }}
                >
                  预约一次真实诊断
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/demo"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border-default)] px-6 py-3 text-sm font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--border-hover)]"
                >
                  返回工具演示
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
