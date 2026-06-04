"use client";

import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ClipboardList,
  LinkIcon,
  MapPin,
  MessageSquareText,
  Phone,
  ShieldCheck,
  Sparkles,
  UserRound,
} from "lucide-react";
import { SiteFooter, SiteHeader } from "../components/site-shell";
import { FadeInUp } from "../components/shared/FadeInUp";

const gradientBrand = "linear-gradient(135deg, #7b7fff, #4dd9d5, #a78bfa)";

type DiagnosisInterest = "yes" | "learn_first" | "not_sure";

type FormState = {
  companyName: string;
  industry: string;
  city: string;
  contactName: string;
  phoneOrWechat: string;
  website: string;
  wechatOfficial: string;
  xiaohongshu: string;
  douyin: string;
  services: string;
  challenge: string;
  diagnosisInterest: DiagnosisInterest;
};

type LeadPayload = FormState & {
  id: string;
  createdAt: string;
  sourcePage: string;
};

type LeadResponse = {
  success: boolean;
  delivered: boolean;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialForm: FormState = {
  companyName: "",
  industry: "",
  city: "",
  contactName: "",
  phoneOrWechat: "",
  website: "",
  wechatOfficial: "",
  xiaohongshu: "",
  douyin: "",
  services: "",
  challenge: "",
  diagnosisInterest: "yes",
};

const requiredFields: Array<keyof FormState> = [
  "companyName",
  "industry",
  "city",
  "contactName",
  "phoneOrWechat",
];

const fieldLabels: Record<keyof FormState, string> = {
  companyName: "企业名称",
  industry: "所在行业",
  city: "所在城市",
  contactName: "联系人",
  phoneOrWechat: "手机 / 微信",
  website: "官网链接",
  wechatOfficial: "公众号链接",
  xiaohongshu: "小红书链接",
  douyin: "抖音链接",
  services: "主要产品 / 服务",
  challenge: "主要想解决的问题",
  diagnosisInterest: "是否愿意接受一次 AI 可见性诊断",
};

const interestOptions: Array<{ value: DiagnosisInterest; label: string }> = [
  { value: "yes", label: "是" },
  { value: "learn_first", label: "想先了解一下" },
  { value: "not_sure", label: "暂时不确定" },
];

const nextSteps = [
  "我们会先了解你的企业基础信息",
  "判断是否适合做 AI 可见性诊断",
  "如适合，会进一步确认测试平台和问题数量",
  "我们会人工评估企业情况和诊断需求，确认测试范围后再安排正式诊断，不会自动生成报告",
  "诊断结果会用于辅助你了解 AI 搜索中的品牌可见性和内容资产缺口",
];

const inputBaseClass =
  "mt-2 w-full rounded-2xl border border-[var(--border-default)] bg-black/20 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-[var(--text-tertiary)] focus:border-[var(--accent-indigo)]";

function saveLeadToLocalStorage(payload: LeadPayload) {
  const storageKey = "singularity-ai-diagnosis-leads";
  const current = window.localStorage.getItem(storageKey);
  const leads = current ? (JSON.parse(current) as LeadPayload[]) : [];
  window.localStorage.setItem(storageKey, JSON.stringify([payload, ...leads]));
}

async function submitLead(payload: LeadPayload) {
  const response = await fetch("/api/leads", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = (await response.json()) as LeadResponse;

  if (!response.ok || !data.success) {
    throw new Error(data.message || "Lead submission failed");
  }

  return data;
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setSubmitted(false);
  }

  function validateForm() {
    const nextErrors: FormErrors = {};

    for (const field of requiredFields) {
      if (!form[field].trim()) {
        nextErrors[field] = `请填写${fieldLabels[field]}`;
      }
    }

    return nextErrors;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateForm();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    const payload: LeadPayload = {
      ...form,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      sourcePage: window.location.pathname,
    };

    console.info("AI visibility diagnosis request", payload);

    try {
      saveLeadToLocalStorage(payload);
    } catch (error) {
      console.warn("Unable to save diagnosis request locally", error);
    }

    setSubmitting(true);

    try {
      await submitLead(payload);
    } catch (error) {
      console.warn("Lead API request failed; local backup has been retained", error);
    } finally {
      setSubmitting(false);
      setSubmitted(true);
      setForm(initialForm);
    }
  }

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <SiteHeader />
      <main>
        <section className="border-b border-[var(--border-default)]">
          <div className="mx-auto max-w-6xl px-6 pb-16 pt-28 sm:pb-20 sm:pt-36 lg:pt-40">
            <FadeInUp>
              <p className="text-xs font-medium uppercase tracking-[0.35em] text-[var(--text-tertiary)]">
                Book Diagnosis
              </p>
              <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl">
                预约一次 AI 可见性诊断
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--text-secondary)]">
                提交你的企业信息，我们会根据你的行业、城市、服务和现有内容资产，评估适合的 AI 搜索可见性诊断方式。
              </p>
            </FadeInUp>
          </div>
        </section>

        <section className="border-b border-[var(--border-default)] py-16 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_380px] lg:px-8">
            <FadeInUp>
              <form
                onSubmit={handleSubmit}
                className="rounded-[28px] border border-[var(--border-default)] bg-[var(--bg-panel)] p-5 shadow-[var(--shadow-elevated)] sm:p-7"
                noValidate
              >
                <div className="flex items-center gap-3 border-b border-[var(--border-default)] pb-5">
                  <ClipboardList className="h-5 w-5 text-[var(--accent-teal)]" />
                  <div>
                    <h2 className="text-xl font-semibold text-white">企业诊断申请表</h2>
                    <p className="mt-1 text-sm text-[var(--text-tertiary)]">带 * 的字段为必填项</p>
                  </div>
                </div>

                {submitted && (
                  <div className="mt-5 rounded-2xl border border-[var(--accent-teal)]/40 bg-[rgba(77,217,213,0.08)] p-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--accent-teal)]" />
                      <p className="text-sm leading-7 text-[var(--text-secondary)]">
                        已收到你的诊断申请。我们会根据你提供的企业信息，人工评估适合的 AI 可见性诊断方式，并在确认测试范围后再安排正式诊断。
                      </p>
                    </div>
                  </div>
                )}

                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="flex items-center gap-2 text-sm font-medium text-white">
                      <Building2 className="h-4 w-4 text-[var(--accent-indigo)]" />
                      企业名称 *
                    </span>
                    <input
                      value={form.companyName}
                      onChange={(event) => updateField("companyName", event.target.value)}
                      className={inputBaseClass}
                      maxLength={120}
                      placeholder="例如：某某科技有限公司"
                    />
                    {errors.companyName && <p className="mt-2 text-xs text-red-300">{errors.companyName}</p>}
                  </label>

                  <label className="block">
                    <span className="text-sm font-medium text-white">所在行业 *</span>
                    <input
                      value={form.industry}
                      onChange={(event) => updateField("industry", event.target.value)}
                      className={inputBaseClass}
                      maxLength={80}
                      placeholder="例如：B2B 企业服务 / 本地口腔 / 工业设备"
                    />
                    {errors.industry && <p className="mt-2 text-xs text-red-300">{errors.industry}</p>}
                  </label>

                  <label className="block">
                    <span className="flex items-center gap-2 text-sm font-medium text-white">
                      <MapPin className="h-4 w-4 text-[var(--accent-indigo)]" />
                      所在城市 *
                    </span>
                    <input
                      value={form.city}
                      onChange={(event) => updateField("city", event.target.value)}
                      className={inputBaseClass}
                      maxLength={80}
                      placeholder="例如：苏州 / 上海 / 全国"
                    />
                    {errors.city && <p className="mt-2 text-xs text-red-300">{errors.city}</p>}
                  </label>

                  <label className="block">
                    <span className="flex items-center gap-2 text-sm font-medium text-white">
                      <UserRound className="h-4 w-4 text-[var(--accent-indigo)]" />
                      联系人 *
                    </span>
                    <input
                      value={form.contactName}
                      onChange={(event) => updateField("contactName", event.target.value)}
                      className={inputBaseClass}
                      maxLength={80}
                      placeholder="请输入联系人姓名"
                    />
                    {errors.contactName && <p className="mt-2 text-xs text-red-300">{errors.contactName}</p>}
                  </label>

                  <label className="block sm:col-span-2">
                    <span className="flex items-center gap-2 text-sm font-medium text-white">
                      <Phone className="h-4 w-4 text-[var(--accent-indigo)]" />
                      手机 / 微信 *
                    </span>
                    <input
                      value={form.phoneOrWechat}
                      onChange={(event) => updateField("phoneOrWechat", event.target.value)}
                      className={inputBaseClass}
                      maxLength={120}
                      placeholder="请输入手机号或微信号"
                    />
                    {errors.phoneOrWechat && <p className="mt-2 text-xs text-red-300">{errors.phoneOrWechat}</p>}
                  </label>

                  <label className="block">
                    <span className="flex items-center gap-2 text-sm font-medium text-white">
                      <LinkIcon className="h-4 w-4 text-[var(--accent-indigo)]" />
                      官网链接
                    </span>
                    <input
                      value={form.website}
                      onChange={(event) => updateField("website", event.target.value)}
                      className={inputBaseClass}
                      maxLength={240}
                      placeholder="https://"
                    />
                  </label>

                  <label className="block">
                    <span className="text-sm font-medium text-white">公众号链接</span>
                    <input
                      value={form.wechatOfficial}
                      onChange={(event) => updateField("wechatOfficial", event.target.value)}
                      className={inputBaseClass}
                      maxLength={240}
                      placeholder="可填写文章或主页链接"
                    />
                  </label>

                  <label className="block">
                    <span className="text-sm font-medium text-white">小红书链接</span>
                    <input
                      value={form.xiaohongshu}
                      onChange={(event) => updateField("xiaohongshu", event.target.value)}
                      className={inputBaseClass}
                      maxLength={240}
                      placeholder="可填写账号或笔记链接"
                    />
                  </label>

                  <label className="block">
                    <span className="text-sm font-medium text-white">抖音链接</span>
                    <input
                      value={form.douyin}
                      onChange={(event) => updateField("douyin", event.target.value)}
                      className={inputBaseClass}
                      maxLength={240}
                      placeholder="可填写账号或视频链接"
                    />
                  </label>

                  <label className="block sm:col-span-2">
                    <span className="flex items-center gap-2 text-sm font-medium text-white">
                      <Sparkles className="h-4 w-4 text-[var(--accent-indigo)]" />
                      主要产品 / 服务
                    </span>
                    <textarea
                      value={form.services}
                      onChange={(event) => updateField("services", event.target.value)}
                      className={`${inputBaseClass} min-h-28 resize-y`}
                      maxLength={1200}
                      placeholder="例如：企业财税服务、工业设备、区域连锁餐饮、口腔种植和矫正等"
                    />
                  </label>

                  <label className="block sm:col-span-2">
                    <span className="flex items-center gap-2 text-sm font-medium text-white">
                      <MessageSquareText className="h-4 w-4 text-[var(--accent-indigo)]" />
                      主要想解决的问题
                    </span>
                    <textarea
                      value={form.challenge}
                      onChange={(event) => updateField("challenge", event.target.value)}
                      className={`${inputBaseClass} min-h-32 resize-y`}
                      maxLength={1200}
                      placeholder="例如：AI 不知道我们是谁、客户搜推荐时经常出现竞品、官网内容无法承接咨询等"
                    />
                  </label>
                </div>

                <fieldset className="mt-6">
                  <legend className="text-sm font-medium text-white">是否愿意接受一次 AI 可见性诊断？</legend>
                  <div className="mt-3 grid gap-3 sm:grid-cols-3">
                    {interestOptions.map((option) => (
                      <label
                        key={option.value}
                        className={`cursor-pointer rounded-2xl border px-4 py-3 text-sm transition-colors ${
                          form.diagnosisInterest === option.value
                            ? "border-[var(--accent-teal)] bg-[rgba(77,217,213,0.08)] text-white"
                            : "border-[var(--border-default)] bg-black/20 text-[var(--text-secondary)] hover:border-[var(--border-hover)]"
                        }`}
                      >
                        <input
                          type="radio"
                          name="diagnosisInterest"
                          value={option.value}
                          checked={form.diagnosisInterest === option.value}
                          onChange={(event) => updateField("diagnosisInterest", event.target.value)}
                          className="sr-only"
                        />
                        {option.label}
                      </label>
                    ))}
                  </div>
                </fieldset>

                <button
                  type="submit"
                  disabled={submitting}
                  className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-black transition-transform hover:scale-[1.01] disabled:cursor-wait disabled:opacity-70 sm:w-auto"
                  style={{ backgroundImage: gradientBrand }}
                >
                  {submitting ? "提交中..." : "提交诊断申请"}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </FadeInUp>

            <aside className="space-y-5">
              <FadeInUp delay={0.08}>
                <div className="rounded-[28px] border border-[var(--border-default)] bg-[var(--bg-panel)] p-6">
                  <h2 className="text-xl font-semibold text-white">提交后会发生什么？</h2>
                  <div className="mt-6 space-y-4">
                    {nextSteps.map((step, index) => (
                      <div key={step} className="flex gap-3">
                        <span className="mt-1 font-mono text-xs text-[var(--text-tertiary)]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <p className="text-sm leading-7 text-[var(--text-secondary)]">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeInUp>

              <FadeInUp delay={0.14}>
                <div className="rounded-[24px] border border-[var(--border-default)] bg-[rgba(255,255,255,0.03)] p-6">
                  <div className="flex items-start gap-4">
                    <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-[var(--accent-teal)]" />
                    <p className="text-sm leading-7 text-[var(--text-secondary)]">
                      诊断结果用于辅助判断企业在 AI 搜索场景中的可见性表现，不代表任何平台官方排名结果。实际展示结果取决于平台模型、数据来源和用户提问方式。
                    </p>
                  </div>
                </div>
              </FadeInUp>
            </aside>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
