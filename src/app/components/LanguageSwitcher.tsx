'use client';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import { Button } from './ui/button';

export function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const toggleLocale = () => {
        const nextLocale = locale === 'en' ? 'az' : 'en';
        router.replace(pathname, { locale: nextLocale });
    };

    return (
        <Button
            variant="ghost"
            onClick={toggleLocale}
            className="text-white hover:bg-white/10 hover:text-primary transition-all duration-300 font-medium"
        >
            {locale === 'en' ? 'AZ' : 'EN'}
        </Button>
    );
}
