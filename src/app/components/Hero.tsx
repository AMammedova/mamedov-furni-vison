'use client';

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#1A1A1A] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, #8B4513 0px, #8B4513 1px, transparent 1px, transparent 40px),
                           repeating-linear-gradient(90deg, #8B4513 0px, #8B4513 1px, transparent 1px, transparent 40px)`
        }} />
      </div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1581784878214-8d5596b98a01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwxfHx8fDE3Njg3MzUwNzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Luxury Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/70 via-[#1A1A1A]/80 to-[#1A1A1A]" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-[#8B4513]/20 border border-[#8B4513] rounded-full text-[#F5F5DC] text-sm tracking-wide">
              Where Artisan Meets AI
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#F5F5DC] mb-6 tracking-tight">
            Redefining
            <br />
            <span className="text-[#8B4513]">Luxury Living</span>
          </h1>

          <p className="text-xl text-[#F5F5DC]/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            Experience the perfect fusion of traditional craftsmanship and cutting-edge AI technology.
            Each piece is a masterpiece, tailored to your vision.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#8B4513] hover:bg-[#8B4513]/90 text-[#F5F5DC] px-8 py-6 text-lg group"
            >
              Explore Collections
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#F5F5DC] text-[#000] bg-[#F5F5DC] hover:bg-[#F5F5DC]/85 px-8 py-6 text-lg"
            >
              AI Design Assistant
            </Button>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-3 gap-8 mt-24 max-w-3xl mx-auto"
        >
          <div>
            <div className="text-4xl font-bold text-[#8B4513] mb-2">15+</div>
            <div className="text-[#F5F5DC]/60 text-sm">Years of Excellence</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-[#8B4513] mb-2">500+</div>
            <div className="text-[#F5F5DC]/60 text-sm">Unique Designs</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-[#8B4513] mb-2">98%</div>
            <div className="text-[#F5F5DC]/60 text-sm">Client Satisfaction</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-[#F5F5DC]/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-[#8B4513] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
