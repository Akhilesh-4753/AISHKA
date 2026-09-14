import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { THEME } from '../../styles/theme';

export default function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);

  const defaultMessage = encodeURIComponent(
    'Hello Aishka Clothing! I am browsing your collections and would like to inquire about sizes & custom appointments.'
  );
  const whatsappUrl = `https://wa.me/${THEME.brand.whatsapp.replace('+', '')}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center group">
      {/* Tooltip */}
      <div
        className={`hidden sm:flex items-center mr-3 px-3.5 py-1.5 bg-[#1F1B18] text-[#FAF7F2] text-[11px] uppercase tracking-wider rounded shadow-luxury border border-[#C5A059]/40 transition-all duration-300 pointer-events-none ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-[#25D366] mr-2 inline-block animate-ping" />
        <span>Chat with Stylist</span>
      </div>

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-luxury-hover hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none"
        aria-label="Chat on WhatsApp with Aishka Clothing"
      >
        <MessageCircle size={28} className="fill-white/10 stroke-[2.2]" />
        
        {/* Subtle Pulse Ring */}
        <span className="absolute -inset-1 rounded-full border-2 border-[#25D366]/40 animate-ping pointer-events-none" />
      </a>
    </div>
  );
}
