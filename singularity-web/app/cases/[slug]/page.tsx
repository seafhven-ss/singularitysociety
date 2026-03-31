import { notFound } from "next/navigation";
import { CasePageView } from "../../components/case-page-view";
import { cases, getCase } from "../../lib/site-data";

export function generateStaticParams() {
  return cases.map((item) => ({ slug: item.slug }));
}

export default async function CaseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getCase(slug);

  if (!item) {
    notFound();
  }

  return <CasePageView item={item} />;
}
