import { Header } from '@/app/components/Header';
import { Hero } from '@/app/components/Hero';
import { ProductGallery } from '@/app/components/ProductGallery';
import { AIAssistant } from '@/app/components/AIAssistant';
import { Features } from '@/app/components/Features';
import { Footer } from '@/app/components/Footer';
import { GlobalStyles } from '@/app/components/GlobalStyles';

export default function Home() {
    return (
        <div className="min-h-screen bg-[#000000] overflow-x-hidden" style={{ fontFamily: 'var(--font-inter)' }}>
            <GlobalStyles />

            <Header />
            <main>
                <Hero />
                <ProductGallery />
                <AIAssistant />
                <Features />
            </main>
            <Footer />
        </div>
    );
}
