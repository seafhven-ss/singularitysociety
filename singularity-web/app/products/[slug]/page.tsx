import { notFound } from "next/navigation";
import { ProductPageView } from "../../components/product-page-view";
import { getProduct, products } from "../../lib/site-data";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  return <ProductPageView product={product} />;
}
