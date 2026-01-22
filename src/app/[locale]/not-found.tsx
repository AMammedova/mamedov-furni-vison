import { Button } from '@/app/components/ui/button';
import { Link } from '@/i18n/routing';
import { getTranslations } from 'next-intl/server';

export default async function NotFound() {
    const t = await getTranslations('NotFound');
    
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#000000] text-white">
            <div className="text-center space-y-6 px-6">
                <h1 className="text-6xl font-bold">404</h1>
                <h2 className="text-2xl font-semibold">{t('title')}</h2>
                <p className="text-white/70 max-w-md">
                    {t('description')}
                </p>
                <Link href="/">
                    <Button className="mt-4">
                        {t('goHome')}
                    </Button>
                </Link>
            </div>
        </div>
    );
}

