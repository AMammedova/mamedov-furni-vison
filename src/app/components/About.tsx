'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { useTranslations } from 'next-intl';

export function About() {
  const t = useTranslations('About');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 relative overflow-hidden"
      style={{ fontFamily: 'var(--font-inter)' }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A] via-[#0d0d0d] to-[#000000]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="text-[#D2691E] tracking-[0.25em] text-sm uppercase font-medium block mb-4">
            {t('badge')}
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#F5F5DC] mb-6 tracking-tight"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            {t('title')}
          </h2>
          <p className="text-lg text-[#F5F5DC]/70 leading-relaxed">
            {t('description')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
