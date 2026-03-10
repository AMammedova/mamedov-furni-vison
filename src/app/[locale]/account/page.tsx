import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';
import { GlobalStyles } from '@/app/components/GlobalStyles';
import { AccountView } from '@/app/components/AccountView';

export const metadata = {
  title: 'Account — Mamedov Furniture',
  description: 'Your account and orders.'
};

export default function AccountPage() {
  return (
    <div className="min-h-screen bg-[#000000] overflow-x-hidden" style={{ fontFamily: 'var(--font-inter)' }}>
      <GlobalStyles />
      <Header />
      <main className="pt-24">
        <AccountView />
      </main>
      <Footer />
    </div>
  );
}
