import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';
import { GlobalStyles } from '@/app/components/GlobalStyles';
import { CartView } from '@/app/components/CartView';

export const metadata = {
  title: 'Cart — Mamedov Furniture',
  description: 'Your shopping cart.'
};

export default function CartPage() {
  return (
    <div className="min-h-screen bg-[#000000] overflow-x-hidden" style={{ fontFamily: 'var(--font-inter)' }}>
      <GlobalStyles />
      <Header />
      <main className="pt-24">
        <CartView />
      </main>
      <Footer />
    </div>
  );
}
