"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getLocalizedProducts } from "../lib/site-data";
import { PageSection, SiteFooter, SiteHeader } from "../components/site-shell";
import { useLanguage } from "../context/LanguageContext";

export default function ProductsPage() {
  const { t, lang } = useLanguage();
  const localProducts = getLocalizedProducts(lang);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <SiteHeader />
      <main>
        <PageSection
          eyebrow="Products"
          title={t.products.page_title}
          description={t.products.page_desc}
        >
          <div className="grid gap-4 lg:grid-cols-2">
            {localProducts.map((product) => {
              const Icon = product.icon;
              return (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  className="group rounded-[28px] border border-[var(--border-default)] bg-[var(--bg-panel)] p-6 transition-transform duration-300 hover:-translate-y-1 hover:border-[var(--accent-indigo)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--border-default)] bg-black/20">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <span className="rounded-full border border-[var(--border-default)] px-3 py-1 text-[11px] text-[var(--text-secondary)]">
                      {product.status}
                    </span>
                  </div>
                  <h2 className="mt-6 text-3xl font-semibold text-white">{product.name}</h2>
                  <p className="mt-3 text-base leading-7 text-[var(--text-secondary)]">{product.positioning}</p>
                  <div className="mt-8 inline-flex items-center gap-2 text-sm text-white">
                    {t.products.view_detail}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </PageSection>
      </main>
      <SiteFooter />
    </div>
  );
}
