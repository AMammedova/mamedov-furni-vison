import { Header } from '@/app/components/Header';
import { Hero } from '@/app/components/Hero';
import { ProductGallery } from '@/app/components/ProductGallery';
import { AIAssistant } from '@/app/components/AIAssistant';
import { Features } from '@/app/components/Features';
import { Footer } from '@/app/components/Footer';

export default function Home() {
    return (
        <div className="min-h-screen bg-[#1A1A1A]">
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
