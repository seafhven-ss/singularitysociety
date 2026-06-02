import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  ClipboardList,
  FileText,
  Layers3,
  Radar,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { SiteFooter, SiteHeader } from "../components/site-shell";
import { FadeInUp } from "../components/shared/FadeInUp";

export const metadata: Metadata = {
  title: "关于我们 | Singularity Society",
  description:
    "Singularity Society 面向中小型成长企业，提供 AI 搜索可见性诊断、GEO 基础建设、内容资产建设和企业知识库 / 智能体服务。",
};

const gradientBrand = "linear-gradient(135deg, #7b7fff, #4dd9d5, #a78bfa)";

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
  "内容驱动型企业",
];

const methodology = [
  { title: "企业诊断", icon: SearchCheck },
  { title: "用户问题库", icon: ClipboardList },
  { title: "多平台 AI 测试", icon: Radar },
  { title: "可见性评分", icon: Target },
  { title: "内容资产建设", icon: FileText },
  { title: "企业知识库", icon: BrainCircuit },
  { title: "持续复测优化", icon: Sparkles },
];

const services = [
  "企业 AI 可见性诊断",
  "GEO 基础建设",
  "企业语义地图",
  "内容资产建设",
  "企业知识库 / 智能体",
  "月度 GEO 陪跑",
  "AI 搜索增长工作坊",
];

export default function AboutPage() {
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
                    About Singularity Society
                  </p>
                  <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl">
                    我们帮助企业进入 AI 搜索时代
                  </h1>
                  <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--text-secondary)]">
                    Singularity Society 面向中小型成长企业，提供 AI 搜索可见性诊断、GEO 基础建设、内容资产建设和企业知识库 / 智能体服务。
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
                </div>
              </FadeInUp>

              <FadeInUp delay={0.12}>
                <div className="rounded-[28px] border border-[var(--border-default)] bg-[var(--bg-panel)] p-6 shadow-[var(--shadow-elevated)]">
                  <Layers3 className="h-6 w-6 text-[var(--accent-teal)]" />
                  <p className="mt-5 text-sm font-medium text-white">我们的工作重点</p>
                  <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                    把企业的品牌、产品、服务、案例和专业知识，整理成 AI 更容易理解、引用和推荐的内容资产与知识资产。
                  </p>
                  <div className="mt-6 grid gap-3">
                    {["品牌可见性", "内容资产", "知识资产", "询盘转化"].map((item) => (
                      <div key={item} className="rounded-2xl border border-[var(--border-default)] bg-black/20 px-4 py-3">
                        <p className="text-sm font-medium text-white">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeInUp>
            </div>
          </div>
        </section>

        <section className="border-b border-[var(--border-default)] py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-6">
            <FadeInUp>
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--text-tertiary)]">
                Why GEO
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                为什么做 AI 搜索增长 / GEO
              </h2>
              <div className="mt-6 space-y-5 text-base leading-8 text-[var(--text-secondary)]">
                <p>
                  客户获取正在从传统搜索、内容平台和广告投放，逐渐进入“AI 问答式决策”阶段。越来越多用户会直接问 AI：哪家公司靠谱？某类服务怎么选？这个品牌怎么样？
                </p>
                <p>
                  企业需要建立新的搜索内容资产，让 AI 更容易理解企业是谁、提供什么、适合哪些客户、有哪些案例和证据，从而提升被理解、引用和推荐的概率。
                </p>
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
                    Who We Serve
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                    我们服务谁
                  </h2>
                  <p className="mt-4 text-base leading-8 text-[var(--text-secondary)]">
                    我们面向全品类中小型成长型企业，尤其适合需要被客户搜索、比较、验证和长期信任的业务。
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
            <FadeInUp>
              <div className="max-w-3xl">
                <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--text-tertiary)]">
                  Method
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  我们的方法论
                </h2>
                <p className="mt-4 text-base leading-8 text-[var(--text-secondary)]">
                  从诊断开始，先确认 AI 搜索场景中的当前表现，再把问题、评分、内容缺口和复测计划转化为可执行的建设路径。
                </p>
              </div>
            </FadeInUp>
            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-7">
              {methodology.map((step, index) => {
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
                    Services
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                    我们提供什么
                  </h2>
                </div>
              </FadeInUp>
              <div className="grid gap-3 sm:grid-cols-2">
                {services.map((service, index) => (
                  <FadeInUp key={service} delay={index * 0.035}>
                    <div className="flex min-h-16 items-center gap-3 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-panel)] px-5 py-4">
                      <Users className="h-5 w-5 shrink-0 text-[var(--accent-indigo)]" />
                      <span className="text-sm font-medium text-[var(--text-secondary)]">{service}</span>
                    </div>
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
                <div>
                  <h2 className="text-xl font-semibold text-white">我们不承诺什么</h2>
                  <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                    我们不把 GEO 理解为操控平台答案，也不做关键词堆砌。本服务用于提升企业被 AI 理解、引用和推荐的概率，实际展示结果取决于平台模型、数据来源和用户提问方式。
                  </p>
                </div>
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
