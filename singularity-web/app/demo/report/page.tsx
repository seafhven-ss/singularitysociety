import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, FileText, ShieldCheck } from "lucide-react";
import { SiteFooter, SiteHeader } from "../../components/site-shell";
import { PrintReportButton } from "./PrintReportButton";

export const metadata: Metadata = {
  title: "江南小馆 AI 搜索增长诊断报告 | Singularity Society",
  description:
    "GEO Growth Lab 演示样例报告，展示 AI 搜索可见性评分、转化承接诊断、内容资产缺口、数字化承接缺口和增长优化建议。",
};

const reportMeta = [
  { label: "报告编号", value: "DEMO-JNXG-2026" },
  { label: "诊断日期", value: "2026-06-04" },
  { label: "企业名称", value: "江南小馆" },
  { label: "行业", value: "区域连锁餐饮品牌" },
  { label: "城市", value: "苏州" },
  { label: "诊断类型", value: "AI 搜索可见性 + 数字化转化承接" },
];

const coreScores = [
  { label: "AI 可见性总分", value: "62 / 100" },
  { label: "转化承接分", value: "46 / 100" },
  { label: "内容资产完整度", value: "58 / 100" },
  { label: "同类企业竞争风险", value: "中" },
  { label: "建议优先级", value: "内容资产建设 + 小程序承接系统", wide: true },
];

const geoScores = [
  { label: "品牌可见性", value: "68" },
  { label: "品类关联度", value: "64" },
  { label: "AI 推荐倾向", value: "52" },
  { label: "内容资产完整度", value: "58" },
  { label: "信源覆盖度", value: "55" },
  { label: "同类企业竞争风险", value: "中" },
];

const conversionScores = [
  { label: "官网承接", value: "58" },
  { label: "小程序承接", value: "30" },
  { label: "私域入口", value: "42" },
  { label: "预约 / 询盘", value: "50" },
  { label: "案例与评价", value: "48" },
  { label: "会员 / 复购", value: "35" },
  { label: "数据追踪", value: "40" },
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

const contentGaps = [
  "缺少结构化品牌介绍页",
  "缺少团餐服务 FAQ",
  "缺少加盟政策说明页",
  "缺少真实门店案例",
  "缺少客户评价整理",
  "缺少主理人观点内容",
  "缺少小红书 / 公众号 / 抖音协同内容",
  "缺少 AI 可引用的标准化问题回答",
];

const conversionGaps = [
  "缺少团餐询盘表单",
  "缺少加盟资料下载入口",
  "缺少小程序服务承接",
  "缺少会员券包",
  "缺少企业微信私域入口",
  "缺少数据看板",
  "缺少客户评价与案例聚合页",
];

const thirtyDayPlan = [
  { period: "第 1 周", action: "品牌语义地图、官网服务页、基础 FAQ。" },
  { period: "第 2 周", action: "团餐服务内容、加盟 FAQ、门店案例。" },
  { period: "第 3 周", action: "公众号、小红书、抖音、问答平台内容发布。" },
  { period: "第 4 周", action: "AI 可见性复测，规划小程序承接系统。" },
];

const ninetyDayRoadmap = [
  { period: "第 1 阶段", action: "GEO 诊断和内容资产基础建设。" },
  { period: "第 2 阶段", action: "小程序 / 私域承接系统上线。" },
  { period: "第 3 阶段", action: "内容运营、复测和会员复购。" },
];

const serviceSuggestions = ["GEO 基础建设包", "小程序增长版", "月度运营陪跑"];

function ReportSection({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="report-section border-t border-slate-200 px-8 py-8 first:border-t-0 sm:px-10">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">{eyebrow}</p>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">{title}</h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

function ScoreGrid({ items }: { items: Array<{ label: string; value: string; wide?: boolean }> }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <div key={item.label} className={`rounded-2xl border border-slate-200 bg-slate-50 p-4 ${item.wide ? "sm:col-span-2" : ""}`}>
          <p className="text-xs font-medium text-slate-500">{item.label}</p>
          <p className="mt-2 text-xl font-semibold text-slate-950">{item.value}</p>
        </div>
      ))}
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <div key={item} className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-4">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-700" />
          <p className="text-sm leading-6 text-slate-700">{item}</p>
        </div>
      ))}
    </div>
  );
}

export default function DemoReportPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] print:bg-white">
      <div className="print:hidden">
        <SiteHeader />
      </div>

      <main className="px-4 py-10 sm:px-6 lg:px-8 print:px-0 print:py-0">
        <div className="mx-auto mb-6 flex max-w-5xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between print:hidden">
          <Link href="/demo" className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            返回工具演示
          </Link>
          <PrintReportButton />
        </div>

        <article className="mx-auto max-w-5xl overflow-hidden rounded-[28px] bg-white text-slate-950 shadow-[0_28px_90px_rgba(0,0,0,0.42)] print:max-w-none print:rounded-none print:shadow-none">
          <section className="relative overflow-hidden bg-slate-950 px-8 py-10 text-white sm:px-10 sm:py-12 print:bg-slate-950 print:text-white">
            <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(135deg,#7b7fff,#4dd9d5,#a78bfa)]" />
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="inline-flex rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-xs font-medium text-amber-100">
                  本报告为演示样例，不代表真实平台测试结果
                </p>
                <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                  江南小馆 AI 搜索增长诊断报告
                </h1>
                <p className="mt-4 text-sm leading-7 text-slate-300">电子诊断报告单 / AI 搜索可见性 + 数字化转化承接</p>
              </div>
              <FileText className="hidden h-16 w-16 text-cyan-300 lg:block" />
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {reportMeta.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs text-slate-400">{item.label}</p>
                  <p className="mt-2 text-sm font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </section>

          <ReportSection eyebrow="Executive Summary" title="执行摘要">
            <p className="text-base leading-8 text-slate-700">
              在本演示样例中，江南小馆具备一定品牌识别基础，但在“苏州餐饮加盟品牌推荐”“苏州团餐服务怎么选”“区域连锁餐饮品牌推荐”等场景下，仍需要通过内容资产、FAQ、案例、加盟资料和小程序承接系统增强 AI 可理解性与客户转化路径。
            </p>
          </ReportSection>

          <ReportSection eyebrow="Core Score" title="核心评分">
            <ScoreGrid items={coreScores} />
          </ReportSection>

          <ReportSection eyebrow="GEO Dimensions" title="6 维 GEO 评分">
            <ScoreGrid items={geoScores} />
          </ReportSection>

          <ReportSection eyebrow="Conversion Diagnosis" title="转化承接诊断">
            <ScoreGrid items={conversionScores} />
          </ReportSection>

          <ReportSection eyebrow="Question Library" title="问题库样例">
            <ol className="grid gap-3">
              {sampleQuestions.map((question, index) => (
                <li key={question} className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-700">
                  <span className="font-mono text-xs font-semibold text-cyan-700">{String(index + 1).padStart(2, "0")}</span>
                  <span>{question}</span>
                </li>
              ))}
            </ol>
          </ReportSection>

          <ReportSection eyebrow="Content Gaps" title="内容资产缺口">
            <BulletList items={contentGaps} />
          </ReportSection>

          <ReportSection eyebrow="Conversion Gaps" title="数字化承接缺口">
            <BulletList items={conversionGaps} />
          </ReportSection>

          <ReportSection eyebrow="30-Day Plan" title="30 天优化建议">
            <div className="grid gap-3 md:grid-cols-2">
              {thirtyDayPlan.map((item) => (
                <div key={item.period} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-950">{item.period}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{item.action}</p>
                </div>
              ))}
            </div>
          </ReportSection>

          <ReportSection eyebrow="90-Day Roadmap" title="90 天增长路线">
            <div className="grid gap-3 md:grid-cols-3">
              {ninetyDayRoadmap.map((item) => (
                <div key={item.period} className="rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold text-slate-950">{item.period}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{item.action}</p>
                </div>
              ))}
            </div>
          </ReportSection>

          <ReportSection eyebrow="Recommended Service" title="推荐服务方案">
            <div className="grid gap-3 md:grid-cols-3">
              {serviceSuggestions.map((item) => (
                <div key={item} className="rounded-2xl border border-cyan-200 bg-cyan-50 p-4 text-sm font-semibold text-slate-950">
                  {item}
                </div>
              ))}
            </div>
          </ReportSection>

          <ReportSection eyebrow="Statement" title="报告声明">
            <div className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-cyan-700" />
              <p className="text-sm leading-7 text-slate-700">
                本报告为演示样例，不代表真实平台测试结果。实际诊断结果会根据企业资料、测试平台、测试问题、平台模型、数据来源和用户提问方式发生变化。本服务用于提升企业被 AI 理解、引用和推荐的概率，并辅助企业建设长期可积累的内容资产与数字化转化系统。
              </p>
            </div>
          </ReportSection>

          <section className="report-section border-t border-slate-200 px-8 py-8 sm:px-10 print:hidden">
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-black transition-transform hover:scale-[1.02]"
                style={{ backgroundImage: "linear-gradient(135deg, #7b7fff, #4dd9d5, #a78bfa)" }}
              >
                预约一次真实诊断
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/demo"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-slate-500"
              >
                返回工具演示
              </Link>
            </div>
          </section>
        </article>
      </main>

      <div className="print:hidden">
        <SiteFooter />
      </div>
    </div>
  );
}
