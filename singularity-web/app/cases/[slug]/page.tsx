"use client";

import { notFound } from "next/navigation";
import { use } from "react";
import { CasePageView } from "../../components/case-page-view";
import { getCase } from "../../lib/site-data";
import { useLanguage } from "../../context/LanguageContext";

export default function CaseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const { lang } = useLanguage();
  const item = getCase(slug, lang);

  if (!item) {
    notFound();
  }

  return <CasePageView item={item} />;
}
