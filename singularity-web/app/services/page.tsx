import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  Layers3,
  LineChart,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Workflow,
} from "lucide-react";
import { SiteFooter, SiteHeader } from "../components/site-shell";
import { FadeInUp } from "../components/shared/FadeInUp";

export const metadata: Metadata = {
  title: "AI 搜索增长与 GEO 赋能服务 | Singularity Society",
  description:
    "Singularity Society 面向全品类中小型成长型企业提供 AI 可见性诊断、GEO 基础建设、内容资产建设、企业知识库智能体和月度陪跑服务。",
};

const gradientBrand = "linear-gradient(135deg, #7b7fff, #4dd9d5, #a78bfa)";

const serviceProducts = [
  {
    name: "企业 AI 可见性诊断",
    summary:
      "判断企业在 AI 搜索场景中是否被提及、被理解、被推荐，以及是否存在同类企业竞争风险和错误描述。",
    icon: SearchCheck,
    deliverables: [
      "企业基础资料梳理",
      "30-100 个用户 AI 提问场景",
      "多平台 AI 回答测试",
      "同类企业提及分析",
      "AI 错误描述分析",
      "内容资产缺口建议",
      "诊断报告",
    ],
  },
  {
    name: "GEO 基础建设",
    summary: "帮助企业建立 AI 搜索时代的品牌语义结构和内容资产基础。",
    icon: Target,
    deliverables: [
      "企业语义地图",
      "品牌 / 产品 / 服务结构梳理",
      "官网结构建议",
      "FAQ 知识库",
      "案例库结构",
      "平台内容分发建议",
      "复测报告",
    ],
  },
  {
    name: "内容资产建设",
    summary: "围绕客户真实问题、行业决策场景和搜索意图，建设可被 AI 理解和引用的内容资产。",
    icon: Layers3,
    deliverables: [
      "官网服务页",
      "FAQ 页面",
      "案例文章",
      "公众号深度文",
      "小红书笔记",
      "知乎回答",
      "百家号文章",
      "短视频脚本",
      "白皮书 / 指南",
    ],
  },
  {
    name: "企业知识库 / 智能体",
    summary: "把企业资料、销售话术、案例、产品说明和客户问题整理成可调用的 AI 知识资产。",
    icon: BrainCircuit,
    deliverables: [
      "企业资料整理",
      "知识库结构设计",
      "RAG 问答系统",
      "销售助手",
      "客服助手",
      "招商助手",
      "内容生成助手",
      "员工培训助手",
    ],
  },
  {
    name: "月度 GEO 陪跑",
    summary: "持续监测企业在 AI 搜索场景中的可见性表现，并根据结果优化内容资产。",
    icon: LineChart,
    deliverables: [
      "月度 AI 可见性监测",
      "同类企业共现分析",
      "内容计划",
      "内容审核优化",
      "官网 FAQ 更新",
      "月度复测报告",
      "转化路径建议",
    ],
  },
  {
    name: "AI 搜索增长工作坊",
    summary: "面向企业老板、市场团队和新媒体团队，培训 AI 搜索时代的内容资产建设方法。",
    icon: Users,
    deliverables: [
      "GEO 基础认知",
      "企业问题库训练",
      "内容资产结构方法",
      "AI 工具协作流程",
      "团队落地清单",
    ],
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

const priceRanges = [
  { service: "AI 可见性诊断", price: "999-6800 元" },
  { service: "GEO 基础建设", price: "9800-29800 元" },
  { service: "月度 GEO 陪跑", price: "5000-30000 元 / 月" },
  { service: "企业知识库 / 智能体", price: "19800 元起" },
  { service: "AI 搜索增长工作坊", price: "9800 元起" },
];

const heroHighlights = [
  { label: "诊断", value: "AI 可见性" },
  { label: "建设", value: "内容资产" },
  { label: "沉淀", value: "知识资产" },
  { label: "复测", value: "持续优化" },
];

export default function ServicesPage() {
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
                    Services
                  </p>
                  <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl">
                    企业 AI 搜索增长与 GEO 赋能服务
                  </h1>
                  <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--text-secondary)]">
                    从 AI 可见性诊断到内容资产建设，从企业语义地图到知识库智能体，我们帮助中小型成长企业建立 AI 搜索时代的新获客基础设施。
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
                      href="/geo-diagnosis"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border-default)] px-6 py-3 text-sm font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--border-hover)]"
                    >
                      查看诊断服务
                    </Link>
                  </div>
                </div>
              </FadeInUp>

              <FadeInUp delay={0.12}>
                <div className="rounded-[28px] border border-[var(--border-default)] bg-[var(--bg-panel)] p-6 shadow-[var(--shadow-elevated)]">
                  <Sparkles className="h-6 w-6 text-[var(--accent-teal)]" />
                  <p className="mt-5 text-sm font-medium text-white">服务主线</p>
                  <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                    以客户真实提问为起点，把企业品牌、产品、服务、案例和专业知识整理成 AI 更容易理解和引用的搜索资产。
                  </p>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    {heroHighlights.map((item) => (
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
                  Service Portfolio
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  服务总览
                </h2>
                <p className="mt-4 text-base leading-8 text-[var(--text-secondary)]">
                  每项服务都围绕一个共同目标：让企业信息、专业能力和客户价值更容易在 AI 搜索场景中被准确理解和有效引用。
                </p>
              </div>
            </FadeInUp>

            <div className="mt-10 grid gap-4 lg:grid-cols-2">
              {serviceProducts.map((service, index) => {
                const Icon = service.icon;
                return (
                  <FadeInUp key={service.name} delay={index * 0.04}>
                    <article className="h-full rounded-[24px] border border-[var(--border-default)] bg-[var(--bg-panel)] p-6 transition-colors hover:border-[var(--border-hover)]">
                      <div className="flex items-start justify-between gap-5">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[var(--border-default)] bg-black/20">
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                        <span className="font-mono text-xs text-[var(--text-tertiary)]">
                          服务 {index + 1}
                        </span>
                      </div>
                      <h3 className="mt-6 text-xl font-semibold text-white">{service.name}</h3>
                      <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">{service.summary}</p>
                      <div className="mt-6">
                        <p className="text-xs font-medium uppercase tracking-[0.22em] text-[var(--text-tertiary)]">
                          交付内容
                        </p>
                        <div className="mt-4 grid gap-2 sm:grid-cols-2">
                          {service.deliverables.map((item) => (
                            <div key={item} className="flex items-start gap-2 text-sm leading-6 text-[var(--text-secondary)]">
                              <CheckCircle2 className="mt-1 h-3.5 w-3.5 shrink-0 text-[var(--accent-teal)]" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
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
                    Fit
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                    适合哪些企业？
                  </h2>
                  <p className="mt-4 text-base leading-8 text-[var(--text-secondary)]">
                    适合需要被客户搜索、比较、验证和长期信任的全品类中小型成长企业，尤其适合客单价较高、决策链路较长、需要解释专业价值的业务。
                  </p>
                </div>
              </FadeInUp>
              <div className="grid gap-3 sm:grid-cols-2">
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
                    Pricing Reference
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                    参考服务区间
                  </h2>
                  <p className="mt-4 text-base leading-8 text-[var(--text-secondary)]">
                    具体报价会根据企业行业复杂度、平台数量、问题数量、内容资产基础和交付深度调整。
                  </p>
                </div>
              </FadeInUp>
              <FadeInUp delay={0.08}>
                <div className="overflow-hidden rounded-[24px] border border-[var(--border-default)] bg-[var(--bg-panel)]">
                  {priceRanges.map((item, index) => (
                    <div
                      key={item.service}
                      className={`grid gap-2 px-5 py-5 sm:grid-cols-[minmax(0,1fr)_220px] sm:items-center ${
                        index === priceRanges.length - 1 ? "" : "border-b border-[var(--border-default)]"
                      }`}
                    >
                      <p className="text-sm font-medium text-white">{item.service}</p>
                      <p className="text-sm text-[var(--text-secondary)] sm:text-right">{item.price}</p>
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
                  本服务用于提升企业被 AI 理解、引用和推荐的概率，实际展示结果取决于平台模型、数据来源和用户提问方式。诊断和优化结果用于辅助企业建设长期搜索内容资产，不代表任何平台官方排名结果。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <FadeInUp>
              <Workflow className="mx-auto h-7 w-7 text-[var(--accent-teal)]" />
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                不知道从哪里开始？
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[var(--text-secondary)]">
                先做一次 AI 可见性诊断，了解你的企业在 AI 搜索中的当前表现、同类企业竞争风险和内容资产缺口。
              </p>
              <Link
                href="/geo-diagnosis"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-black transition-transform hover:scale-[1.02]"
                style={{ backgroundImage: gradientBrand }}
              >
                预约 AI 可见性诊断
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
