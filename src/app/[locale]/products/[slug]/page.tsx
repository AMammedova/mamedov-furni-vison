import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getProductBySlug, getAllProductSlugs } from '@/app/data/products';
import { ProductDetailView } from '@/app/components/ProductDetailView';
import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';
import { GlobalStyles } from '@/app/components/GlobalStyles';

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: 'Product — Mamedov Furniture' };
  return {
    title: `${product.nameKey} — Mamedov Furniture`,
    description: `Handcrafted ${product.nameKey}. ${product.price}. Mamedov Furniture.`
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <div className="min-h-screen bg-[#000000] overflow-x-hidden" style={{ fontFamily: 'var(--font-inter)' }}>
      <GlobalStyles />
      <Header />
      <main className="pt-24">
        <ProductDetailView product={product} />
      </main>
      <Footer />
    </div>
  );
}
