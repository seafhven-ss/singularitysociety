import type { Metadata } from "next";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "预约 AI 可见性诊断 | Singularity Society",
  description:
    "提交企业信息，预约一次 AI 搜索可见性诊断，了解企业在 AI 搜索中的品牌可见性、同类企业竞争风险和内容资产缺口。",
};

export default function ContactPage() {
  return <ContactForm />;
}
