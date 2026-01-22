'use client';

import { motion } from 'motion/react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer
      className="relative bg-gradient-to-b from-[#000000] to-[#2C1810] border-t border-white/10 overflow-hidden"
      style={{ fontFamily: 'var(--font-inter)' }}
    >
      {/* Background Effect */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              radial-gradient(at 20% 50%, rgba(139, 69, 19, 0.2) 0px, transparent 50%),
              radial-gradient(at 80% 50%, rgba(210, 105, 30, 0.15) 0px, transparent 50%)
            `,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <Image src="/logo.png" alt="Logo" width={50} height={50} />
                <div className="absolute -inset-1 bg-gradient-to-br from-[#8B4513] to-[#D2691E] rounded-xl blur opacity-30 -z-10" />
              </div>
              <span className="text-xl font-bold text-[#F5F5DC]" style={{ fontFamily: 'var(--font-playfair)' }}>
                Mamedov Furniture
              </span>
            </div>
            <p className="text-[#F5F5DC]/70 mb-8 leading-relaxed">
              {t('brand_desc')}
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 backdrop-blur-xl bg-white/5 hover:bg-gradient-to-br hover:from-[#8B4513] hover:to-[#D2691E] border border-white/10 rounded-xl flex items-center justify-center text-[#F5F5DC] transition-all duration-300 group"
                >
                  <Icon className="w-5 h-5 group-hover:text-white transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Collections */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-[#F5F5DC] font-semibold mb-6 text-lg" style={{ fontFamily: 'var(--font-playfair)' }}>
              {t('headers.collections')}
            </h4>
            <ul className="space-y-4">
              {[
                t('collections.living'),
                t('collections.dining'),
                t('collections.bedroom'),
                t('collections.workspace'),
                t('collections.outdoor')
              ].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a href="#" className="text-[#F5F5DC]/70 hover:text-[#D2691E] transition-colors flex items-center gap-2 group">
                    <span>{item}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-[#F5F5DC] font-semibold mb-6 text-lg" style={{ fontFamily: 'var(--font-playfair)' }}>
              {t('headers.company')}
            </h4>
            <ul className="space-y-4">
              {[
                t('company.about'),
                t('company.process'),
                t('company.sustainability'),
                t('company.careers'),
                t('company.press')
              ].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a href="#" className="text-[#F5F5DC]/70 hover:text-[#D2691E] transition-colors flex items-center gap-2 group">
                    <span>{item}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-[#F5F5DC] font-semibold mb-6 text-lg" style={{ fontFamily: 'var(--font-playfair)' }}>
              {t('headers.contact')}
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 text-[#F5F5DC]/70 group cursor-pointer">
                <div className="w-10 h-10 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-br group-hover:from-[#8B4513] group-hover:to-[#D2691E] transition-all">
                  <MapPin className="w-4 h-4 text-[#D2691E] group-hover:text-white transition-colors" />
                </div>
                <span className="leading-relaxed pt-1.5">
                  123 Artisan Avenue<br />Design District, NY 10001
                </span>
              </li>
              <li className="flex items-center gap-3 text-[#F5F5DC]/70 group cursor-pointer">
                <div className="w-10 h-10 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-br group-hover:from-[#8B4513] group-hover:to-[#D2691E] transition-all">
                  <Phone className="w-4 h-4 text-[#D2691E] group-hover:text-white transition-colors" />
                </div>
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-[#F5F5DC]/70 group cursor-pointer">
                <div className="w-10 h-10 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-br group-hover:from-[#8B4513] group-hover:to-[#D2691E] transition-all">
                  <Mail className="w-4 h-4 text-[#D2691E] group-hover:text-white transition-colors" />
                </div>
                <span>hello@mamedovfurniture.com</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-[#F5F5DC]/60 text-sm">
            {t('rights')}
          </p>
          <div className="flex gap-8 text-sm">
            {[t('links.privacy'), t('links.terms'), t('links.cookie')].map((item, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ y: -2 }}
                className="text-[#F5F5DC]/60 hover:text-[#D2691E] transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}