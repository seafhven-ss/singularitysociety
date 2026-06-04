import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  Code2,
  Layers3,
  LineChart,
  MessageCircle,
  MousePointerClick,
  SearchCheck,
  ShieldCheck,
  Smartphone,
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
    "Singularity Society 面向中小型成长企业提供 AI 可见性诊断、GEO 基础建设、内容资产建设、小程序、APP、网站开发、私域承接、智能客服、企业知识库和月度陪跑服务。",
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

const conversionServices = [
  {
    name: "官网 / 落地页建设",
    description: "用于承接 AI 搜索、内容平台和广告流量，展示品牌、服务、案例、FAQ 和预约入口。",
    suitable: "本地服务企业、B2B 企业、专业服务机构、招商加盟企业。",
    price: "19800 - 39800 元起",
    icon: Code2,
  },
  {
    name: "小程序增长系统",
    description: "适用于需要预约、下单、团购、加盟、会员、优惠券、门店展示和私域运营的企业。",
    suitable: "餐饮、本地服务、教育培训、农产品、区域连锁、门店型企业。",
    price: "39800 - 98000 元",
    icon: Smartphone,
  },
  {
    name: "APP / H5 / 会员系统",
    description: "适用于长期用户运营、会员复购、服务流程复杂或平台型业务。",
    suitable: "平台型业务、会员型业务、长期运营型项目。",
    price: "10 万元起",
    icon: MousePointerClick,
  },
  {
    name: "企业知识库 / 智能客服",
    description: "把产品资料、销售话术、常见问题、案例和服务流程整理成 AI 可调用知识库，用于客服、销售、招商和员工培训。",
    suitable: "B2B 企业、工厂型企业、专业服务机构、招商加盟企业。",
    price: "19800 元起",
    icon: BrainCircuit,
  },
  {
    name: "私域线索承接系统",
    description: "将官网、小程序、表单、企业微信、飞书、社群和客服入口打通，提升线索跟进效率。",
    suitable: "高客单服务、本地服务、招商加盟、咨询服务。",
    price: "9800 元起",
    icon: MessageCircle,
  },
  {
    name: "月度增长运营陪跑",
    description: "围绕 AI 可见性复测、内容计划、小程序活动、私域转化和线索分析进行持续优化。",
    suitable: "希望长期运营增长资产的企业。",
    price: "5000 - 30000 元 / 月",
    icon: LineChart,
  },
];

const productLadder = [
  {
    level: "01",
    name: "AI 可见性简版诊断",
    problem: "先判断企业是否被 AI 知道、理解和提及。",
    stage: "适合刚开始关注 AI 搜索的企业。",
    deliverable: "基础企业信息梳理、少量高频问题测试、简版可见性判断。",
  },
  {
    level: "02",
    name: "GEO 深度诊断报告",
    problem: "系统评估品牌、品类、竞品、内容缺口和平台表现。",
    stage: "适合需要做预算、立项或老板汇报的企业。",
    deliverable: "问题库、多平台测试、评分模型、竞品共现、内容缺口和 30 天建议。",
  },
  {
    level: "03",
    name: "内容资产建设包",
    problem: "补齐 AI 和客户都能理解的品牌、服务、FAQ、案例和观点内容。",
    stage: "适合已有官网或内容平台，但信息分散、不系统的企业。",
    deliverable: "官网服务页、FAQ、案例文章、公众号深度文、小红书笔记、问答内容和短视频脚本。",
  },
  {
    level: "04",
    name: "官网 / 小程序 / 私域承接系统",
    problem: "让从 AI 搜索和内容平台来的客户可以留下、咨询、预约、下单或提交加盟意向。",
    stage: "适合已经有咨询需求，需要提升线索承接效率的企业。",
    deliverable: "落地页、小程序、预约表单、团餐询盘、加盟资料、企业微信入口和飞书 / 企业微信通知。",
  },
  {
    level: "05",
    name: "APP / 企业知识库 / 业务中台",
    problem: "把长期用户运营、会员复购、客服销售问答和内部流程沉淀成系统。",
    stage: "适合业务复杂、需要长期运营和团队协作的企业。",
    deliverable: "APP / H5 / 小程序组合、会员系统、企业知识库、智能客服、销售助手和运营后台。",
  },
  {
    level: "06",
    name: "月度运营陪跑 / 年度增长顾问",
    problem: "持续复测 AI 可见性、优化内容资产、分析线索和转化路径。",
    stage: "适合把 AI 搜索增长作为长期获客基础设施的企业。",
    deliverable: "月度复测、内容计划、私域活动、线索分析、转化优化、月报和年度增长建议。",
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
            <FadeInUp>
              <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--text-tertiary)]">
                    Conversion System
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                    数字化转化承接系统
                  </h2>
                </div>
                <p className="text-base leading-8 text-[var(--text-secondary)]">
                  AI 搜索带来的是入口，官网、小程序、APP、私域和智能客服负责把客户真正承接下来。GEO 负责让企业更容易被 AI 和客户发现，数字化转化系统负责让客户留下、咨询、预约、下单、加盟和复购。
                </p>
              </div>
            </FadeInUp>

            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {conversionServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <FadeInUp key={service.name} delay={index * 0.04}>
                    <article className="h-full rounded-[24px] border border-[var(--border-default)] bg-[var(--bg-panel)] p-6 transition-colors hover:border-[var(--border-hover)]">
                      <div className="flex items-start justify-between gap-5">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[var(--border-default)] bg-black/20">
                          <Icon className="h-5 w-5 text-[var(--accent-teal)]" />
                        </div>
                        <span className="rounded-full border border-[var(--border-default)] px-3 py-1 text-xs text-[var(--text-tertiary)]">
                          升阶服务
                        </span>
                      </div>
                      <h3 className="mt-6 text-xl font-semibold text-white">{service.name}</h3>
                      <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">{service.description}</p>
                      <div className="mt-5 space-y-3 rounded-2xl border border-[var(--border-default)] bg-black/20 p-4">
                        <div>
                          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--text-tertiary)]">适合</p>
                          <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">{service.suitable}</p>
                        </div>
                        <div className="border-t border-[var(--border-default)] pt-3">
                          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--text-tertiary)]">价格区间</p>
                          <p className="mt-2 text-sm font-semibold text-white">{service.price}</p>
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
            <FadeInUp>
              <div className="max-w-3xl">
                <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--text-tertiary)]">
                  Product Ladder
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  从 AI 可见，到数字化成交的产品阶梯
                </h2>
                <p className="mt-4 text-base leading-8 text-[var(--text-secondary)]">
                  企业可以先从一次诊断开始，再根据内容资产基础、线索承接能力和运营复杂度，逐步升级到官网、小程序、APP、知识库和月度增长顾问。
                </p>
              </div>
            </FadeInUp>

            <div className="mt-10 space-y-4">
              {productLadder.map((item, index) => (
                <FadeInUp key={item.name} delay={index * 0.04}>
                  <article className="grid gap-5 rounded-[24px] border border-[var(--border-default)] bg-[var(--bg-panel)] p-5 transition-colors hover:border-[var(--border-hover)] lg:grid-cols-[110px_minmax(0,0.9fr)_minmax(0,1.25fr)] lg:items-start lg:p-6">
                    <div className="flex items-center gap-3 lg:block">
                      <span className="font-mono text-2xl font-semibold text-[var(--accent-teal)]">{item.level}</span>
                      <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-tertiary)] lg:mt-2">Stage</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{item.name}</h3>
                      <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">{item.problem}</p>
                    </div>
                    <div className="grid gap-3 md:grid-cols-2">
                      <div className="rounded-2xl border border-[var(--border-default)] bg-black/20 p-4">
                        <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--text-tertiary)]">适合阶段</p>
                        <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">{item.stage}</p>
                      </div>
                      <div className="rounded-2xl border border-[var(--border-default)] bg-black/20 p-4">
                        <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--text-tertiary)]">典型交付</p>
                        <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">{item.deliverable}</p>
                      </div>
                    </div>
                  </article>
                </FadeInUp>
              ))}
            </div>

            <FadeInUp delay={0.12}>
              <div className="mt-10 flex flex-col gap-3 rounded-[28px] border border-[var(--border-default)] bg-[rgba(255,255,255,0.03)] p-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-2xl text-sm leading-7 text-[var(--text-secondary)]">
                  不确定从哪一层开始，可以先做 AI 可见性诊断，再根据企业现有内容和转化承接能力确定下一步。
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-black transition-transform hover:scale-[1.02]"
                    style={{ backgroundImage: gradientBrand }}
                  >
                    预约 AI 可见性诊断
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border-default)] px-5 py-3 text-sm font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--border-hover)]"
                  >
                    预约增长系统方案沟通
                  </Link>
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
