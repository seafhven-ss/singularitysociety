import { createHmac } from "crypto";
import { NextResponse } from "next/server";

type DiagnosisInterest = "yes" | "learn_first" | "not_sure";

type LeadPayload = {
  companyName?: unknown;
  industry?: unknown;
  city?: unknown;
  contactName?: unknown;
  phoneOrWechat?: unknown;
  website?: unknown;
  wechatOfficial?: unknown;
  xiaohongshu?: unknown;
  douyin?: unknown;
  services?: unknown;
  challenge?: unknown;
  diagnosisInterest?: unknown;
  sourcePage?: unknown;
  createdAt?: unknown;
};

type SanitizedLead = {
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
  sourcePage: string;
  createdAt: string;
};

const requiredFields: Array<keyof SanitizedLead> = [
  "companyName",
  "industry",
  "city",
  "contactName",
  "phoneOrWechat",
];

const fieldLabels: Record<keyof SanitizedLead, string> = {
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
  diagnosisInterest: "是否愿意接受 AI 可见性诊断",
  sourcePage: "来源页面",
  createdAt: "提交时间",
};

const maxLengths: Record<keyof SanitizedLead, number> = {
  companyName: 120,
  industry: 80,
  city: 80,
  contactName: 80,
  phoneOrWechat: 120,
  website: 240,
  wechatOfficial: 240,
  xiaohongshu: 240,
  douyin: 240,
  services: 1200,
  challenge: 1200,
  diagnosisInterest: 20,
  sourcePage: 120,
  createdAt: 80,
};

const interestLabels: Record<DiagnosisInterest, string> = {
  yes: "是",
  learn_first: "想先了解一下",
  not_sure: "暂时不确定",
};

function asString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isDiagnosisInterest(value: string): value is DiagnosisInterest {
  return value === "yes" || value === "learn_first" || value === "not_sure";
}

function sanitizeLead(payload: LeadPayload) {
  const diagnosisInterest = asString(payload.diagnosisInterest);

  const lead: SanitizedLead = {
    companyName: asString(payload.companyName),
    industry: asString(payload.industry),
    city: asString(payload.city),
    contactName: asString(payload.contactName),
    phoneOrWechat: asString(payload.phoneOrWechat),
    website: asString(payload.website),
    wechatOfficial: asString(payload.wechatOfficial),
    xiaohongshu: asString(payload.xiaohongshu),
    douyin: asString(payload.douyin),
    services: asString(payload.services),
    challenge: asString(payload.challenge),
    diagnosisInterest: isDiagnosisInterest(diagnosisInterest) ? diagnosisInterest : "not_sure",
    sourcePage: asString(payload.sourcePage) || "/contact",
    createdAt: asString(payload.createdAt) || new Date().toISOString(),
  };

  const missingFields = requiredFields.filter((field) => !lead[field]);
  if (missingFields.length > 0) {
    return {
      lead,
      error: `缺少必填字段：${missingFields.map((field) => fieldLabels[field]).join("、")}`,
    };
  }

  const overlongFields = (Object.keys(maxLengths) as Array<keyof SanitizedLead>).filter(
    (field) => lead[field].length > maxLengths[field]
  );

  if (overlongFields.length > 0) {
    return {
      lead,
      error: `字段内容过长：${overlongFields.map((field) => fieldLabels[field]).join("、")}`,
    };
  }

  return { lead, error: null };
}

function optionalValue(value: string) {
  return value || "未填写";
}

function formatLeadMessage(lead: SanitizedLead) {
  return [
    "新的 AI 可见性诊断申请",
    "",
    `企业名称：${lead.companyName}`,
    `所在行业：${lead.industry}`,
    `所在城市：${lead.city}`,
    `联系人：${lead.contactName}`,
    `手机 / 微信：${lead.phoneOrWechat}`,
    `官网链接：${optionalValue(lead.website)}`,
    `公众号链接：${optionalValue(lead.wechatOfficial)}`,
    `小红书链接：${optionalValue(lead.xiaohongshu)}`,
    `抖音链接：${optionalValue(lead.douyin)}`,
    `主要产品 / 服务：${optionalValue(lead.services)}`,
    `主要想解决的问题：${optionalValue(lead.challenge)}`,
    `是否愿意接受 AI 可见性诊断：${interestLabels[lead.diagnosisInterest]}`,
    `来源页面：${lead.sourcePage}`,
    `提交时间：${lead.createdAt}`,
  ].join("\n");
}

function createFeishuMessageBody(text: string) {
  const baseBody = {
    msg_type: "text",
    content: {
      text,
    },
  };
  const secret = process.env.FEISHU_WEBHOOK_SECRET;

  if (!secret) {
    return baseBody;
  }

  const timestamp = Math.floor(Date.now() / 1000).toString();
  const stringToSign = `${timestamp}\n${secret}`;
  const sign = createHmac("sha256", stringToSign).update("").digest("base64");

  return {
    timestamp,
    sign,
    ...baseBody,
  };
}

async function deliverToFeishu(lead: SanitizedLead) {
  const webhookUrl = process.env.FEISHU_WEBHOOK_URL;

  if (!webhookUrl) {
    console.info("Feishu webhook not configured", lead);
    return false;
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(createFeishuMessageBody(formatLeadMessage(lead))),
  });

  if (!response.ok) {
    const responseText = await response.text().catch(() => "");
    throw new Error(`Feishu webhook failed: ${response.status} ${responseText}`);
  }

  return true;
}

export async function POST(request: Request) {
  let payload: LeadPayload;

  try {
    payload = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json(
      {
        success: false,
        delivered: false,
        message: "请求体不是有效 JSON。",
      },
      { status: 400 }
    );
  }

  const { lead, error } = sanitizeLead(payload);

  if (error) {
    return NextResponse.json(
      {
        success: false,
        delivered: false,
        message: error,
      },
      { status: 400 }
    );
  }

  try {
    const delivered = await deliverToFeishu(lead);
    return NextResponse.json({
      success: true,
      delivered,
      message: delivered ? "Lead accepted and delivered." : "Lead accepted. Feishu webhook not configured.",
    });
  } catch (error) {
    console.error("Failed to deliver lead to Feishu", error, lead);
    return NextResponse.json({
      success: true,
      delivered: false,
      message: "Lead accepted. Feishu delivery failed.",
    });
  }
}
