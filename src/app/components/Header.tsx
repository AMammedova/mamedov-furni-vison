'use client';

import { Menu, ShoppingCart, User } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Header() {
  const t = useTranslations('Header');

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/5 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
          <Image src="/logo.png" alt="Mamedov Furniture" width={45} height={45} className="opacity-95" />
          <h1 className="text-xl md:text-2xl font-bold font-serif text-white tracking-wide">{t('title')}</h1>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {[
            { key: 'collections', href: '#collections', label: t('collections') },
            { key: 'assistant', href: '#ai-assistant', label: t('assistant') },
            { key: 'craftsmanship', href: '#craftsmanship', label: t('craftsmanship') },
            { key: 'about', href: '#about', label: t('about') }
          ].map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-white/70 hover:text-primary transition-all duration-300 text-sm uppercase tracking-widest font-medium relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 hover:text-primary rounded-full transition-all duration-300" asChild>
            <Link href="/account" aria-label="Account">
              <User className="w-5 h-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 hover:text-primary rounded-full transition-all duration-300 relative" asChild>
            <Link href="/cart" aria-label="Cart">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-white/10 hover:text-primary rounded-full">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
