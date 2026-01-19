import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] border-t border-[#8B4513]/20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
                <Image src='/logo.png' alt="logo" width={50} height={50} />
              <span className="text-xl font-bold text-[#F5F5DC]">Mamedov FurniVision</span>
            </div>
            <p className="text-[#F5F5DC]/60 mb-6">
              Redefining luxury living through artisan craftsmanship and AI innovation.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-[#8B4513]/20 hover:bg-[#8B4513] rounded-lg flex items-center justify-center text-[#F5F5DC] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#8B4513]/20 hover:bg-[#8B4513] rounded-lg flex items-center justify-center text-[#F5F5DC] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#8B4513]/20 hover:bg-[#8B4513] rounded-lg flex items-center justify-center text-[#F5F5DC] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Collections */}
          <div>
            <h4 className="text-[#F5F5DC] font-semibold mb-4">Collections</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-[#F5F5DC]/60 hover:text-[#8B4513] transition-colors">Living Room</a></li>
              <li><a href="#" className="text-[#F5F5DC]/60 hover:text-[#8B4513] transition-colors">Dining Room</a></li>
              <li><a href="#" className="text-[#F5F5DC]/60 hover:text-[#8B4513] transition-colors">Bedroom</a></li>
              <li><a href="#" className="text-[#F5F5DC]/60 hover:text-[#8B4513] transition-colors">Workspace</a></li>
              <li><a href="#" className="text-[#F5F5DC]/60 hover:text-[#8B4513] transition-colors">Outdoor</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[#F5F5DC] font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-[#F5F5DC]/60 hover:text-[#8B4513] transition-colors">About Us</a></li>
              <li><a href="#" className="text-[#F5F5DC]/60 hover:text-[#8B4513] transition-colors">Our Process</a></li>
              <li><a href="#" className="text-[#F5F5DC]/60 hover:text-[#8B4513] transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-[#F5F5DC]/60 hover:text-[#8B4513] transition-colors">Careers</a></li>
              <li><a href="#" className="text-[#F5F5DC]/60 hover:text-[#8B4513] transition-colors">Press</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#F5F5DC] font-semibold mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-[#F5F5DC]/60">
                <MapPin className="w-5 h-5 text-[#8B4513] mt-0.5 flex-shrink-0" />
                <span>123 Artisan Avenue<br />Design District, NY 10001</span>
              </li>
              <li className="flex items-center gap-3 text-[#F5F5DC]/60">
                <Phone className="w-5 h-5 text-[#8B4513] flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-[#F5F5DC]/60">
                <Mail className="w-5 h-5 text-[#8B4513] flex-shrink-0" />
                <span>hello@furnivision.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#8B4513]/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#F5F5DC]/60 text-sm">
            © 2026 FurniVision. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-[#F5F5DC]/60 hover:text-[#8B4513] transition-colors">Privacy Policy</a>
            <a href="#" className="text-[#F5F5DC]/60 hover:text-[#8B4513] transition-colors">Terms of Service</a>
            <a href="#" className="text-[#F5F5DC]/60 hover:text-[#8B4513] transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
