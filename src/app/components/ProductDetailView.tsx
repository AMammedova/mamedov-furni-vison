'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { ArrowLeft, ShoppingBag } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import type { ProductData } from '@/app/data/products';

export function ProductDetailView({ product }: { product: ProductData }) {
  const t = useTranslations('ProductDetail');
  const tGallery = useTranslations('ProductGallery');

  const name = tGallery(`products.${product.nameKey}`);
  const category = tGallery(`categories.${product.categoryKey}`);
  const description = t(product.descriptionKey as any);
  const dimensions = t(product.dimensionsKey as any);
  const material = t(product.materialKey as any);

  return (
    <section className="py-12 md:py-20 relative" style={{ fontFamily: 'var(--font-inter)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/collections"
            className="inline-flex items-center gap-2 text-white/70 hover:text-primary transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            {t('back')}
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-white/5 border border-white/10"
          >
            <Image
              src={product.image}
              alt={name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#D2691E] text-xs font-medium tracking-wider mb-4">
              {category}
            </span>
            <h1
              className="text-4xl md:text-5xl font-bold text-[#F5F5DC] mb-4 tracking-tight"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              {name}
            </h1>
            <p className="text-3xl font-bold bg-gradient-to-r from-[#D2691E] to-[#8B4513] bg-clip-text text-transparent mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
              {product.price}
            </p>
            <p className="text-[#F5F5DC]/80 leading-relaxed text-lg mb-8">
              {description}
            </p>

            <div className="space-y-4 mb-8">
              <div>
                <span className="text-white/50 text-sm uppercase tracking-wider block mb-1">{t('dimensions')}</span>
                <span className="text-[#F5F5DC]">{dimensions}</span>
              </div>
              <div>
                <span className="text-white/50 text-sm uppercase tracking-wider block mb-1">{t('material')}</span>
                <span className="text-[#F5F5DC]">{material}</span>
              </div>
            </div>

            <Button
              size="lg"
              className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 rounded-full text-lg font-semibold gap-2"
              asChild
            >
              <Link href="/cart">
                <ShoppingBag className="w-5 h-5" />
                {t('add_to_cart')}
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
