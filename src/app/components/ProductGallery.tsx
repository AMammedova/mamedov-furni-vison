'use client';

import { motion } from 'motion/react';
import { useState } from 'react';
import { Eye, Heart } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Milano Lounge Chair',
    category: 'Seating',
    price: '$4,299',
    image: 'https://images.unsplash.com/photo-1767507006149-befd852965d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBjaGFpcnxlbnwxfHx8fDE3Njg4MDc2Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 2,
    name: 'Heritage Dining Table',
    category: 'Tables',
    price: '$8,499',
    image: 'https://images.unsplash.com/photo-1765766638341-0beb9eb9926c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwd29vZCUyMHRhYmxlfGVufDF8fHx8MTc2ODgwNzYzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 3,
    name: 'Artisan Sofa',
    category: 'Seating',
    price: '$12,999',
    image: 'https://images.unsplash.com/photo-1763565909003-46e9dfb68a00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMHNvZmF8ZW58MXx8fHwxNzY4ODA3NjM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 4,
    name: 'Signature Collection',
    category: 'Workspace',
    price: '$6,799',
    image: 'https://images.unsplash.com/photo-1682592318170-d6618b240285?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwZnVybml0dXJlfGVufDF8fHx8MTc2ODgwNzY0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 5,
    name: 'Zen Minimalist Chair',
    category: 'Seating',
    price: '$3,499',
    image: 'https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZnVybml0dXJlfGVufDF8fHx8MTc2ODc0MDQxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 6,
    name: 'Executive Desk',
    category: 'Workspace',
    price: '$9,299',
    image: 'https://images.unsplash.com/photo-1765766638341-0beb9eb9926c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwd29vZCUyMHRhYmxlfGVufDF8fHx8MTc2ODgwNzYzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

export function ProductGallery() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="collections" className="py-24 bg-[#F5F5DC]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#8B4513] tracking-widest text-sm uppercase mb-4 block">
            Curated Collections
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
            Timeless Masterpieces
          </h2>
          <p className="text-[#1A1A1A]/70 max-w-2xl mx-auto text-lg">
            Each piece is handcrafted by master artisans, enhanced by AI precision for perfect proportions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-xl bg-white shadow-lg">
                {/* 3D Transform Effect */}
                <motion.div
                  animate={{
                    rotateX: hoveredId === product.id ? 5 : 0,
                    rotateY: hoveredId === product.id ? 5 : 0,
                    scale: hoveredId === product.id ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ transformStyle: 'preserve-3d' }}
                  className="relative aspect-[4/5]"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />

                  {/* Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredId === product.id ? 1 : 0 }}
                    className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/90 via-[#1A1A1A]/50 to-transparent flex items-end justify-center p-6"
                  >
                    <div className="flex gap-4">
                      <button className="w-12 h-12 rounded-full bg-[#F5F5DC] flex items-center justify-center hover:bg-[#8B4513] hover:text-[#F5F5DC] transition-colors">
                        <Eye className="w-5 h-5" />
                      </button>
                      <button className="w-12 h-12 rounded-full bg-[#F5F5DC] flex items-center justify-center hover:bg-[#8B4513] hover:text-[#F5F5DC] transition-colors">
                        <Heart className="w-5 h-5" />
                      </button>
                    </div>
                  </motion.div>

                  {/* 3D Shadow Effect */}
                  <motion.div
                    animate={{
                      opacity: hoveredId === product.id ? 0.3 : 0,
                      scale: hoveredId === product.id ? 1.1 : 1,
                    }}
                    className="absolute inset-0 bg-[#8B4513] blur-2xl -z-10 translate-z-[-50px]"
                    style={{ transform: 'translateZ(-50px)' }}
                  />
                </motion.div>

                {/* Product Info */}
                <div className="p-6 bg-white">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-semibold text-[#1A1A1A] mb-1">
                        {product.name}
                      </h3>
                      <p className="text-[#8B4513] text-sm">{product.category}</p>
                    </div>
                    <span className="text-xl font-bold text-[#1A1A1A]">
                      {product.price}
                    </span>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full mt-4 py-3 bg-[#1A1A1A] text-[#F5F5DC] rounded-lg hover:bg-[#8B4513] transition-colors"
                  >
                    View Details
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
