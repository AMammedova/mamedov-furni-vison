'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'motion/react';
import { User } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { Button } from '@/app/components/ui/button';

export function AccountView() {
  const t = useTranslations('Account');

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6"
        >
          <User className="w-10 h-10 text-white/50" />
        </motion.div>
        <h1 className="text-3xl md:text-4xl font-bold text-[#F5F5DC] mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
          {t('title')}
        </h1>
        <p className="text-[#F5F5DC]/70 mb-8">{t('placeholder')}</p>
        <Button asChild variant="outline" size="lg" className="rounded-full border-white/20 text-white hover:bg-white/10">
          <Link href="/">{t('sign_in')}</Link>
        </Button>
      </div>
    </section>
  );
}
