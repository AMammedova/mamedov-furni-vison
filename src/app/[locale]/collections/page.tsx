import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';
import { GlobalStyles } from '@/app/components/GlobalStyles';
import { CollectionsGrid } from '@/app/components/CollectionsGrid';

export const metadata = {
  title: 'Collections — Mamedov Furniture',
  description: 'Browse our handcrafted furniture collections.'
};

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-[#000000] overflow-x-hidden" style={{ fontFamily: 'var(--font-inter)' }}>
      <GlobalStyles />
      <Header />
      <main className="pt-24">
        <CollectionsGrid />
      </main>
      <Footer />
    </div>
  );
}
