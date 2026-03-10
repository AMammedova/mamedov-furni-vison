'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'motion/react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { PRODUCTS } from '@/app/data/products';

export function CollectionsGrid() {
  const t = useTranslations('Collections');
  const tGallery = useTranslations('ProductGallery');

  return (
    <section className="py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#000000] via-[#1A1A1A] to-[#2C1810]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h1
            className="text-4xl md:text-6xl font-bold text-[#F5F5DC] mb-4 tracking-tight"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            {t('title')}
          </h1>
          <p className="text-[#F5F5DC]/70 text-lg max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {PRODUCTS.map((product, index) => {
            const name = tGallery(`products.${product.nameKey}`);
            const category = tGallery(`categories.${product.categoryKey}`);
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Link href={`/products/${product.slug}`} className="group block">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white/5 border border-white/10 mb-4">
                    <Image
                      src={product.image}
                      alt={name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="px-3 py-1.5 rounded-full bg-white/20 text-white text-sm font-medium">
                        {category}
                      </span>
                      <span className="w-10 h-10 rounded-xl bg-primary/90 flex items-center justify-center text-white">
                        <ArrowUpRight className="w-5 h-5" />
                      </span>
                    </div>
                  </div>
                  <h2 className="text-xl font-semibold text-[#F5F5DC] mb-1 group-hover:text-primary transition-colors" style={{ fontFamily: 'var(--font-playfair)' }}>
                    {name}
                  </h2>
                  <p className="text-lg font-bold bg-gradient-to-r from-[#D2691E] to-[#8B4513] bg-clip-text text-transparent">
                    {product.price}
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
