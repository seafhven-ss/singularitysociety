import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import type { ProductAction } from "../lib/site-data";

function actionClasses(variant: ProductAction["variant"]) {
  if (variant === "secondary") {
    return "border border-[var(--border-default)] bg-transparent text-[var(--text-primary)] hover:border-[var(--border-hover)]";
  }

  return "bg-[var(--gradient-brand)] text-black";
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border-default)] bg-[rgba(10,10,10,0.88)] backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:h-16 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-default)] bg-[var(--bg-panel)] text-xs font-semibold text-white">
            SS
          </div>
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-200">Singularity Society</p>
            <p className="text-xs text-[var(--text-tertiary)]">Quiet workbench, public build.</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          <Link href="/products" className="text-sm text-[var(--text-secondary)] transition-colors hover:text-white">
            Products
          </Link>
          <Link href="/cases" className="text-sm text-[var(--text-secondary)] transition-colors hover:text-white">
            Cases
          </Link>
          <Link href="/about" className="text-sm text-[var(--text-secondary)] transition-colors hover:text-white">
            About
          </Link>
          <Link href="mailto:seafhven@gmail.com" className="inline-flex items-center gap-2 rounded-full bg-[var(--gradient-brand)] px-4 py-2 text-sm font-medium text-black transition-transform hover:scale-[1.02]">
            Contact
            <ArrowRight className="h-4 w-4" />
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border-default)] bg-[var(--bg-primary)]">
      <div className="h-px w-full bg-[var(--gradient-brand)] opacity-70" />
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 text-sm text-[var(--text-secondary)] sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <p className="text-base font-medium text-white">Singularity Society</p>
          <p className="mt-3 max-w-xs leading-7">真实业务问题 × 轻量 AI 产品 × 公开构建</p>
        </div>
        <div className="space-y-2">
          <Link href="/products" className="block hover:text-white">
            Products
          </Link>
          <Link href="/cases" className="block hover:text-white">
            Cases
          </Link>
        </div>
        <div className="space-y-2">
          <a href="mailto:seafhven@gmail.com" className="block hover:text-white">
            seafhven@gmail.com
          </a>
          <a href="https://x.com/Seafhven" className="inline-flex items-center gap-2 hover:text-white">
            @Seafhven
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
          <p>中国（江苏）自由贸易试验区苏州片区 苏州工业园区独墅湖数字经济产业园</p>
        </div>
      </div>
    </footer>
  );
}

export function PageSection({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-b border-[var(--border-default)] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--text-tertiary)]">{eyebrow}</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
          <p className="mt-4 text-base leading-8 text-[var(--text-secondary)]">{description}</p>
        </div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

export function ActionButtons({ actions }: { actions: ProductAction[] }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      {actions.map((action) => {
        const isExternal = action.href.startsWith("http") || action.href.startsWith("mailto:");

        return (
          <a
            key={action.label}
            href={action.href}
            className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-transform hover:scale-[1.02] ${actionClasses(action.variant)}`}
            {...(isExternal ? { target: action.href.startsWith("http") ? "_blank" : undefined, rel: action.href.startsWith("http") ? "noreferrer" : undefined } : {})}
          >
            {action.label}
            <ArrowRight className="h-4 w-4" />
          </a>
        );
      })}
    </div>
  );
}
