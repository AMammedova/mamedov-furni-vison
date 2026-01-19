import { Menu, ShoppingCart, User } from 'lucide-react';
import { Button } from './ui/button';
import Image from 'next/image';


export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1A1A1A]/90 backdrop-blur-md border-b border-[#8B4513]/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src='/logo.png' alt="logo" width={50} height={50} />
          <h1 className="text-2xl font-bold text-[#F5F5DC]">Mamedov FurniVision</h1>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#collections" className="text-[#F5F5DC]/80 hover:text-[#F5F5DC] transition-colors">
            Collections
          </a>
          <a href="#ai-assistant" className="text-[#F5F5DC]/80 hover:text-[#F5F5DC] transition-colors">
            AI Assistant
          </a>
          <a href="#craftsmanship" className="text-[#F5F5DC]/80 hover:text-[#F5F5DC] transition-colors">
            Craftsmanship
          </a>
          <a href="#about" className="text-[#F5F5DC]/80 hover:text-[#F5F5DC] transition-colors">
            About
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-[#F5F5DC] hover:bg-[#8B4513]/20">
            <User className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-[#F5F5DC] hover:bg-[#8B4513]/20">
            <ShoppingCart className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden text-[#F5F5DC] hover:bg-[#8B4513]/20">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
