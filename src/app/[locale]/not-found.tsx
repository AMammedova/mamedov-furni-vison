import { Button } from '@/app/components/ui/button';
import { Link } from '@/i18n/routing';
import { getTranslations } from 'next-intl/server';

export default async function NotFound() {
    const t = await getTranslations('NotFound');

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#000000] text-white" style={{ fontFamily: 'var(--font-inter)' }}>
            <div className="text-center space-y-6 px-6 max-w-md">
                <h1 className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-[#D2691E] to-[#8B4513] bg-clip-text text-transparent" style={{ fontFamily: 'var(--font-playfair)' }}>
                    404
                </h1>
                <h2 className="text-2xl font-semibold text-[#F5F5DC]">{t('title')}</h2>
                <p className="text-white/70 leading-relaxed">
                    {t('description')}
                </p>
                <Link href="/">
                    <Button className="mt-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
                        {t('goHome')}
                    </Button>
                </Link>
            </div>
        </div>
    );
}

