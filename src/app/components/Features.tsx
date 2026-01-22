'use client';

import { motion, useInView } from 'motion/react';
import { Hammer, Cpu, Award, Leaf } from 'lucide-react';
import { useRef } from 'react';

export function Features() {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const features = [
    {
      icon: Hammer,
      title: 'Artisan Craftsmanship',
      description: 'Every piece is handcrafted by master artisans with decades of experience, ensuring unparalleled quality and attention to detail.'
    },
    {
      icon: Cpu,
      title: 'AI-Enhanced Design',
      description: 'Our proprietary AI technology optimizes ergonomics, proportions, and structural integrity for perfect balance of form and function.'
    },
    {
      icon: Award,
      title: 'Premium Materials',
      description: 'We source only the finest sustainable hardwoods, premium fabrics, and eco-friendly finishes from around the world.'
    },
    {
      icon: Leaf,
      title: 'Sustainable Practice',
      description: 'Committed to environmental responsibility, we use certified sustainable materials and carbon-neutral production methods.'
    }
  ];

  return (
    <section
      id="craftsmanship"
      ref={ref}
      className="py-32 relative overflow-hidden"
      style={{ fontFamily: 'var(--font-inter)' }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2C1810] via-[#1A1A1A] to-[#000000]">
        <div className="absolute inset-0 opacity-20">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                radial-gradient(at 40% 30%, rgba(139, 69, 19, 0.15) 0px, transparent 50%),
                radial-gradient(at 60% 70%, rgba(210, 105, 30, 0.1) 0px, transparent 50%)
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
            Our Philosophy
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold text-[#F5F5DC] mb-6 tracking-tight"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Where Tradition Meets Innovation
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-[#F5F5DC]/70 max-w-3xl mx-auto leading-relaxed font-light"
          >
            We believe the future of furniture lies in harmonizing time-honored craftsmanship
            with cutting-edge technology.
          </motion.p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Glassmorphism Card */}
              <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition-all duration-500">
                {/* Icon */}
                <div className="relative w-20 h-20 mb-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#8B4513]/30 to-[#D2691E]/30 rounded-2xl" />
                  <div className="relative w-full h-full bg-gradient-to-br from-[#8B4513]/20 to-[#D2691E]/20 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/10">
                    <feature.icon className="w-10 h-10 text-[#D2691E]" />
                  </div>
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0, 0.3]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute inset-0 bg-gradient-to-br from-[#8B4513] to-[#D2691E] rounded-2xl blur-xl"
                  />
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-[#F5F5DC] mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
                  {feature.title}
                </h3>
                <p className="text-[#F5F5DC]/70 leading-relaxed text-lg">
                  {feature.description}
                </p>

                {/* Hover Glow */}
                <motion.div
                  animate={{
                    opacity: 0
                  }}
                  whileHover={{
                    opacity: 0.3
                  }}
                  transition={{ duration: 0.4 }}
                  className="absolute -inset-1 bg-gradient-to-r from-[#8B4513] to-[#D2691E] rounded-3xl blur-2xl -z-10"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {/* Outer Glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-[#8B4513]/10 via-[#D2691E]/20 to-[#8B4513]/10 rounded-[3rem] blur-3xl opacity-60" />

          {/* Timeline Container */}
          <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-white/10 border border-white/20 rounded-[2.5rem] p-12 md:p-16">
            <h3 className="text-4xl md:text-5xl font-bold text-[#F5F5DC] mb-16 text-center" style={{ fontFamily: 'var(--font-playfair)' }}>
              Our Creation Process
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'AI Analysis', desc: 'Design optimization & planning' },
                { step: '02', title: 'Material Selection', desc: 'Premium sustainable sourcing' },
                { step: '03', title: 'Handcrafting', desc: 'Artisan construction' },
                { step: '04', title: 'Quality Assurance', desc: 'Rigorous testing & finishing' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.15 }}
                  className="relative group"
                >
                  {/* Step Number */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="relative mb-6"
                  >
                    <div className="text-8xl font-bold bg-gradient-to-br from-[#D2691E]/30 to-[#8B4513]/30 bg-clip-text text-transparent" style={{ fontFamily: 'var(--font-playfair)' }}>
                      {item.step}
                    </div>
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.2, 0, 0.2]
                      }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
                      className="absolute inset-0 bg-[#D2691E] rounded-full blur-2xl"
                    />
                  </motion.div>

                  {/* Content */}
                  <h4 className="text-xl md:text-2xl font-semibold text-[#F5F5DC] mb-3" style={{ fontFamily: 'var(--font-playfair)' }}>
                    {item.title}
                  </h4>
                  <p className="text-[#F5F5DC]/70 leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Connector Line */}
                  {index < 3 && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={isInView ? { scaleX: 1 } : {}}
                      transition={{ duration: 0.8, delay: 1.5 + index * 0.15 }}
                      className="hidden md:block absolute top-16 left-full w-full h-px bg-gradient-to-r from-[#D2691E]/50 to-transparent origin-left"
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}