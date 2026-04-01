"use client";

import { notFound } from "next/navigation";
import { use } from "react";
import { ProductPageView } from "../../components/product-page-view";
import { getProduct } from "../../lib/site-data";
import { useLanguage } from "../../context/LanguageContext";

export default function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const { lang } = useLanguage();
  const product = getProduct(slug, lang);

  if (!product) {
    notFound();
  }

  return <ProductPageView product={product} />;
}
