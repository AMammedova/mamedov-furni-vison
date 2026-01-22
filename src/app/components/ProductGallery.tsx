'use client';

import { useTranslations } from 'next-intl';
import { useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Eye, Heart, ArrowUpRight } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  size: 'small' | 'medium' | 'large' | 'wide';
}

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

  const products: Product[] = [
    {
      id: 1,
      name: t('products.Milano Lounge Chair'),
      category: t('categories.Seating'),
      price: '$4,299',
      image: 'https://images.unsplash.com/photo-1767507006149-befd852965d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBjaGFpcnxlbnwxfHx8fDE3Njg4MDc2Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      size: 'large'
    },
    {
      id: 2,
      name: t('products.Heritage Dining Table'),
      category: t('categories.Tables'),
      price: '$8,499',
      image: 'https://images.unsplash.com/photo-1765766638341-0beb9eb9926c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwd29vZCUyMHRhYmxlfGVufDF8fHx8MTc2ODgwNzYzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      size: 'medium'
    },
    {
      id: 3,
      name: t('products.Artisan Sofa'),
      category: t('categories.Seating'),
      price: '$12,999',
      image: 'https://images.unsplash.com/photo-1763565909003-46e9dfb68a00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMHNvZmF8ZW58MXx8fHwxNzY4ODA3NjM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      size: 'wide'
    },
    {
      id: 4,
      name: t('products.Signature Collection'),
      category: t('categories.Workspace'),
      price: '$6,799',
      image: 'https://images.unsplash.com/photo-1682592318170-d6618b240285?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwZnVybml0dXJlfGVufDF8fHx8MTc2ODgwNzY0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      size: 'medium'
    },
    {
      id: 5,
      name: t('products.Zen Minimalist Chair'),
      category: t('categories.Seating'),
      price: '$3,499',
      image: 'https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZnVybml0dXJlfGVufDF8fHx8MTc2ODc0MDQxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      size: 'small'
    },
    {
      id: 6,
      name: t('products.Executive Desk'),
      category: t('categories.Workspace'),
      price: '$9,299',
      image: 'https://images.unsplash.com/photo-1765766638341-0beb9eb9926c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwd29vZCUyMHRhYmxlfGVufDF8fHx8MTc2ODgwNzYzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      size: 'small'
    }
  ];

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
          {products.map((product, index) => (
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
                    alt={product.name}
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
                    className="absolute top-6 right-6 flex gap-2"
                  >
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                    >
                      <Eye className="w-5 h-5" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
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
                      {product.category}
                    </span>
                  </motion.div>

                  {/* Product Info */}
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>
                      {product.name}
                    </h3>

                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold bg-gradient-to-r from-[#D2691E] to-[#8B4513] bg-clip-text text-transparent" style={{ fontFamily: 'var(--font-playfair)' }}>
                        {product.price}
                      </span>

                      <motion.button
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 rounded-xl backdrop-blur-xl bg-gradient-to-r from-[#8B4513] to-[#D2691E] flex items-center justify-center text-white shadow-lg shadow-[#8B4513]/50"
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </motion.button>
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
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 backdrop-blur-xl bg-white/5 border border-white/20 rounded-2xl text-[#F5F5DC] hover:bg-white/10 transition-all duration-300 font-semibold text-lg group"
          >
            {t('view_all')}
            <ArrowUpRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
