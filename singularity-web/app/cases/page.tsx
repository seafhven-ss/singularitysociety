import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { PageSection, SiteFooter, SiteHeader } from "../components/site-shell";

export const metadata: Metadata = {
  title: "案例与场景化解决方案 | Singularity Society",
  description:
    "匿名化场景案例展示，说明 AI 搜索可见性诊断、内容资产建设、企业知识库、小程序、APP、私域承接、智能客服和运营增长的服务方法与交付路径。",
};

const cases = [
  {
    slug: "oxygen-equipment",
    category: "制氧设备 / 医疗设备 / 工业设备",
    name: "某制氧设备上市公司",
    summary: "小程序 + 企业知识库搭建服务，用于降低售前重复解释成本，提升资料调用和客户自助了解效率。",
    positioning: "小程序 + 企业知识库搭建服务",
    background:
      "该企业产品线复杂，既有面向医院、经销商、工程客户的专业设备，也有面向普通用户和服务商的咨询需求。销售过程中存在大量重复解释、资料分散、客户问题复杂、售前响应成本高的问题。",
    problems: [
      "产品资料分散，销售和客户难以快速查询",
      "不同客户角色关注点不同",
      "官网和资料页难以承接复杂咨询",
      "售前客服重复回答大量基础问题",
      "经销商 / 工程客户需要更结构化的产品资料入口",
      "AI 搜索时代，企业专业资料需要更容易被理解和引用",
    ],
    services: [
      "企业知识库结构设计",
      "产品资料梳理",
      "售前 FAQ 搭建",
      "小程序资料查询入口",
      "经销商 / 客户咨询表单",
      "智能客服问答原型",
      "内容资产结构化建议",
    ],
    modules: ["产品知识库", "小程序资料中心", "询盘 / 咨询表单", "智能客服问答", "销售辅助话术", "后续 GEO 内容优化建议"],
    values: [
      "降低售前重复解释成本",
      "提升销售资料调用效率",
      "提升客户自助了解能力",
      "为 AI 搜索和智能客服提供结构化知识资产",
      "为后续小程序 / APP / CRM 集成打基础",
    ],
    placeholders: ["小程序首页占位截图", "产品知识库结构占位", "智能客服问答占位", "询盘表单占位"],
    recommended: ["企业知识库 / 智能客服", "小程序增长系统", "B2B GEO 内容资产建设", "月度运营陪跑"],
  },
  {
    slug: "suzhou-furniture",
    category: "家具制造 / 定制家具 / 本地工厂",
    name: "苏州本地家具制造企业",
    summary: "智能客服 + GEO 搜索优化，用于统一 FAQ、内容资产和客服问答，提升本地搜索与 AI 问答场景下的内容可见性。",
    positioning: "智能客服 + GEO 搜索优化",
    background:
      "该企业具备生产制造能力和本地交付经验，但线上内容分散，客户搜索时难以形成明确品牌认知。客户经常询问材质、定制周期、环保标准、价格区间、安装服务和售后问题，人工客服重复沟通成本较高。",
    problems: [
      "品牌和产品信息缺少结构化表达",
      "搜索场景下缺少 AI 可引用内容",
      "客户常见问题没有统一 FAQ",
      "小红书、公众号、官网内容没有形成协同",
      "客户咨询集中在材质、报价、周期、环保和售后",
      "缺少智能客服承接初步咨询",
    ],
    services: [
      "GEO 可见性诊断",
      "企业语义地图",
      "官网 FAQ 结构优化",
      "产品 / 工艺 / 材质知识库",
      "智能客服问答库",
      "小红书 / 公众号内容选题",
      "案例内容结构化",
      "本地搜索场景优化建议",
    ],
    modules: ["AI 搜索问题库", "FAQ 知识库", "智能客服原型", "内容资产计划", "案例页模板", "30 天 GEO 优化方案"],
    values: [
      "提升客户对品牌、工艺和服务的理解",
      "降低客服重复沟通",
      "提升本地搜索和 AI 问答场景下的内容可见性",
      "让官网、公众号、小红书和客服问答形成统一知识资产",
      "为后续小程序预约、门店导览、客户案例系统打基础",
    ],
    placeholders: ["智能客服对话占位", "GEO 问题库占位", "FAQ 知识库占位", "案例页占位"],
    recommended: ["GEO 可见性诊断", "内容资产建设包", "智能客服问答库", "本地搜索优化", "小程序预约 / 案例展示系统"],
  },
];

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-[24px] border border-[var(--border-default)] bg-[var(--bg-panel)] p-6">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <div className="mt-5 grid gap-3">
        {items.map((item) => (
          <div key={item} className="flex gap-3 text-sm leading-6 text-[var(--text-secondary)]">
            <CheckCircle2 className="mt-1 h-3.5 w-3.5 shrink-0 text-[var(--accent-teal)]" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PlaceholderGrid({ items }: { items: string[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {items.map((item, index) => (
        <div key={item} className="min-h-36 rounded-[22px] border border-dashed border-[var(--border-hover)] bg-black/20 p-5">
          <p className="font-mono text-xs text-[var(--text-tertiary)]">示意图 / 占位图 {String(index + 1).padStart(2, "0")}</p>
          <div className="mt-5 space-y-3">
            <div className="h-3 w-2/3 rounded-full bg-white/12" />
            <div className="h-3 w-5/6 rounded-full bg-white/8" />
            <div className="h-16 rounded-2xl border border-[var(--border-default)] bg-white/[0.03]" />
          </div>
          <p className="mt-4 text-sm font-medium text-white">{item}</p>
        </div>
      ))}
    </div>
  );
}

export default function CasesPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <SiteHeader />
      <main>
        <PageSection
          eyebrow="Cases"
          title="案例与场景化解决方案"
          description="我们通过 AI 搜索可见性诊断、内容资产建设、企业知识库、小程序 / APP / 私域系统，帮助不同类型企业搭建从被看见到被转化的增长闭环。以下案例为匿名化 / 场景化案例展示，用于说明服务方法、交付路径和可实现的业务价值。"
        >
          <div className="mb-8 rounded-[24px] border border-[var(--border-default)] bg-[rgba(255,255,255,0.03)] p-6">
            <div className="flex items-start gap-4">
              <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-[var(--accent-teal)]" />
              <p className="text-sm leading-7 text-[var(--text-secondary)]">
                以下案例为匿名化 / 场景化案例展示，用于说明服务方法、交付路径和可实现的业务价值。不展示真实客户名称，也不代表任何可被查证的具体合作关系。
              </p>
            </div>
          </div>
          <div className="grid gap-4">
            {cases.map((item) => (
              <a
                key={item.slug}
                href={`#${item.slug}`}
                className="group rounded-[28px] border border-[var(--border-default)] bg-[var(--bg-panel)] p-6 transition-transform duration-300 hover:-translate-y-1 hover:border-[var(--accent-indigo)]"
              >
                <p className="text-xs uppercase tracking-[0.22em] text-[var(--text-tertiary)]">{item.category}</p>
                <h2 className="mt-4 text-3xl font-semibold text-white">{item.name}</h2>
                <p className="mt-3 text-sm font-medium text-[var(--accent-teal)]">{item.positioning}</p>
                <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--text-secondary)]">{item.summary}</p>
                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--text-tertiary)]">核心问题</p>
                    <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">{item.problems.slice(0, 2).join("；")}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--text-tertiary)]">交付模块</p>
                    <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">{item.modules.slice(0, 3).join(" / ")}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--text-tertiary)]">项目价值</p>
                    <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">{item.values.slice(0, 2).join("；")}</p>
                  </div>
                </div>
                <div className="mt-8 inline-flex items-center gap-2 text-sm text-white">
                  查看详情
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </a>
            ))}
          </div>
        </PageSection>

        {cases.map((item, index) => (
          <section key={item.slug} id={item.slug} className="border-b border-[var(--border-default)] py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--text-tertiary)]">
                    Case {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{item.name}</h2>
                  <p className="mt-3 text-base font-medium text-[var(--accent-teal)]">{item.positioning}</p>
                  <p className="mt-4 text-base leading-8 text-[var(--text-secondary)]">{item.background}</p>
                </div>
                <div className="rounded-[28px] border border-[var(--border-default)] bg-[var(--bg-panel)] p-6">
                  <p className="text-xs uppercase tracking-[0.22em] text-[var(--text-tertiary)]">行业</p>
                  <p className="mt-3 text-lg font-semibold text-white">{item.category}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.recommended.map((service) => (
                      <span key={service} className="rounded-full border border-[var(--border-default)] bg-black/20 px-3 py-2 text-xs text-[var(--text-secondary)]">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-10 grid gap-4 lg:grid-cols-3">
                <ListBlock title="核心问题" items={item.problems} />
                <ListBlock title="解决方案" items={item.services} />
                <ListBlock title="交付模块" items={item.modules} />
              </div>

              <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_1fr]">
                <ListBlock title="价值结果" items={item.values} />
                <div className="rounded-[24px] border border-[var(--border-default)] bg-[var(--bg-panel)] p-6">
                  <h3 className="text-lg font-semibold text-white">可展示占位</h3>
                  <div className="mt-5">
                    <PlaceholderGrid items={item.placeholders} />
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-[24px] border border-[var(--border-default)] bg-[rgba(255,255,255,0.03)] p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white">推荐服务组合</h3>
                    <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">{item.recommended.join(" / ")}</p>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-black transition-transform hover:scale-[1.02]"
                    style={{ backgroundImage: "linear-gradient(135deg, #7b7fff, #4dd9d5, #a78bfa)" }}
                  >
                    预约方案沟通
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        ))}

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--text-tertiary)]">Next Step</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">想知道你的企业适合哪种增长路径？</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[var(--text-secondary)]">
              可以先做一次 AI 可见性诊断，判断当前内容资产、知识库、官网、小程序和私域承接能力，再确定合适的交付路径。
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-black transition-transform hover:scale-[1.02]"
              style={{ backgroundImage: "linear-gradient(135deg, #7b7fff, #4dd9d5, #a78bfa)" }}
            >
              预约 AI 可见性诊断
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
