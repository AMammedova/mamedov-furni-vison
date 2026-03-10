'use client';

import { useTranslations } from 'next-intl';
import { useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Eye, Heart, ArrowUpRight } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { PRODUCTS } from '@/app/data/products';

const sizeClasses = {
  small: 'col-span-1 row-span-1',
  medium: 'col-span-1 md:col-span-1 row-span-1',
  large: 'col-span-1 md:col-span-2 row-span-2',
  wide: 'col-span-1 md:col-span-2 row-span-1'
};

export function ProductGallery() {
  const t = useTranslations('ProductGallery');
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="collections"
      ref={ref}
      className="py-32 relative overflow-hidden"
      style={{ fontFamily: 'var(--font-inter)' }}
    >
      {/* Background with mesh gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#000000] via-[#1A1A1A] to-[#2C1810]">
        <div className="absolute inset-0 opacity-20">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                radial-gradient(at 30% 20%, rgba(139, 69, 19, 0.15) 0px, transparent 50%),
                radial-gradient(at 70% 80%, rgba(210, 105, 30, 0.1) 0px, transparent 50%)
              `,
            }}
          />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#D2691E] tracking-[0.3em] text-sm uppercase mb-6 block font-medium"
          >
            {t('collection_tag')}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold text-[#F5F5DC] mb-6 tracking-tight"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            {t('collection_title')}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-[#F5F5DC]/70 max-w-3xl mx-auto leading-relaxed font-light"
          >
            {t('collection_desc')}
          </motion.p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[280px] gap-4 md:gap-6">
          {PRODUCTS.map((product, index) => {
            const name = t(`products.${product.nameKey}`);
            const category = t(`categories.${product.categoryKey}`);
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.5 + index * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                onMouseEnter={() => setHoveredId(product.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`group relative ${sizeClasses[product.size]}`}
              >
                <Link href={`/products/${product.slug}`} className="block h-full">
                  {/* Glass Card */}
                  <div className="relative w-full h-full overflow-hidden rounded-3xl">
                    {/* Glassmorphism background */}
                    <div className="absolute inset-0 backdrop-blur-xl bg-white/5 border border-white/10" />

                    {/* Image */}
                    <motion.div
                      animate={{
                        scale: hoveredId === product.id ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-0"
                    >
                      <img
                        src={product.image}
                        alt={name}
                        className="w-full h-full object-cover"
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/90 via-[#000000]/40 to-transparent" />
                    </motion.div>

                    {/* Content */}
                    <div className="relative h-full flex flex-col justify-end p-6 md:p-8">
                      {/* Hover Actions */}
                      <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{
                          opacity: hoveredId === product.id ? 1 : 0,
                          y: hoveredId === product.id ? 0 : -20
                        }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-6 right-6 flex gap-2 z-10"
                      >
                        <motion.span
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-12 h-12 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors inline-flex"
                        >
                          <Eye className="w-5 h-5" />
                        </motion.span>
                        <motion.button
                          type="button"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
                          className="w-12 h-12 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                        >
                          <Heart className="w-5 h-5" />
                        </motion.button>
                      </motion.div>

                      {/* Category Badge */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{
                          opacity: hoveredId === product.id ? 1 : 0,
                          x: hoveredId === product.id ? 0 : -20
                        }}
                        transition={{ duration: 0.3 }}
                        className="mb-3"
                      >
                        <span className="inline-block px-4 py-1.5 backdrop-blur-xl bg-white/10 border border-white/20 rounded-full text-[#D2691E] text-xs font-medium tracking-wider">
                          {category}
                        </span>
                      </motion.div>

                      {/* Product Info */}
                      <div>
                        <h3 className="text-xl md:text-2xl font-semibold text-white mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>
                          {name}
                        </h3>

                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold bg-gradient-to-r from-[#D2691E] to-[#8B4513] bg-clip-text text-transparent" style={{ fontFamily: 'var(--font-playfair)' }}>
                            {product.price}
                          </span>

                          <span className="w-10 h-10 rounded-xl backdrop-blur-xl bg-gradient-to-r from-[#8B4513] to-[#D2691E] flex items-center justify-center text-white shadow-lg shadow-[#8B4513]/50">
                            <ArrowUpRight className="w-5 h-5" />
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Glow Effect on Hover */}
                    <motion.div
                      animate={{
                        opacity: hoveredId === product.id ? 0.6 : 0,
                      }}
                      transition={{ duration: 0.4 }}
                      className="absolute -inset-1 bg-gradient-to-r from-[#8B4513] to-[#D2691E] rounded-3xl blur-2xl -z-10"
                    />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <Link href="/collections">
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-12 py-5 backdrop-blur-xl bg-white/5 border border-white/20 rounded-2xl text-[#F5F5DC] hover:bg-white/10 transition-all duration-300 font-semibold text-lg group"
            >
              {t('view_all')}
              <ArrowUpRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
