'use client';

import { motion } from 'motion/react';
import { Hammer, Cpu, Award, Leaf } from 'lucide-react';

export function Features() {
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
    <section id="craftsmanship" className="py-24 bg-[#F5F5DC]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#8B4513] tracking-widest text-sm uppercase mb-4 block">
            Our Philosophy
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
            Where Tradition Meets Innovation
          </h2>
          <p className="text-[#1A1A1A]/70 max-w-2xl mx-auto text-lg">
            We believe the future of furniture lies in harmonizing time-honored craftsmanship
            with cutting-edge technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-[#8B4513]/10 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-[#8B4513]" />
              </div>
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3">{feature.title}</h3>
              <p className="text-[#1A1A1A]/70 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Process Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#1A1A1A] rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-3xl font-bold text-[#F5F5DC] mb-8 text-center">
            Our Creation Process
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'AI Analysis', desc: 'Design optimization & planning' },
              { step: '02', title: 'Material Selection', desc: 'Premium sustainable sourcing' },
              { step: '03', title: 'Handcrafting', desc: 'Artisan construction' },
              { step: '04', title: 'Quality Assurance', desc: 'Rigorous testing & finishing' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                <div className="text-6xl font-bold text-[#8B4513]/20 mb-4">{item.step}</div>
                <h4 className="text-xl font-semibold text-[#F5F5DC] mb-2">{item.title}</h4>
                <p className="text-[#F5F5DC]/70">{item.desc}</p>

                {index < 3 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-[#8B4513]/30" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
