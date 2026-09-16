import React, { useState } from 'react';
import { WhatsAppIcon, InstagramIcon } from './Icons';
import { THEME } from '../../styles/theme';

export default function FloatingWhatsApp() {
  const [hoveredButton, setHoveredButton] = useState(null);

  const defaultMessage = encodeURIComponent(
    'Hello Aishka Clothing! I am browsing your collections and would like to inquire about sizes & custom appointments.'
  );
  const whatsappUrl = `https://wa.me/${THEME.brand.whatsapp.replace('+', '')}?text=${defaultMessage}`;
  const instagramUrl = THEME.brand.instagramUrl;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3 pointer-events-auto">
      {/* Instagram Floating Button */}
      <div className="flex items-center group">
        <div
          className={`hidden sm:flex items-center mr-3 px-3 py-1.5 bg-[#1F1B18]/95 text-[#FAF7F2] text-[11px] uppercase tracking-wider rounded shadow-luxury border border-[#C5A059]/40 transition-all duration-300 pointer-events-none ${
            hoveredButton === 'instagram' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-[#E1306C] mr-2 inline-block animate-ping" />
          <span>Follow on Instagram</span>
        </div>

        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHoveredButton('instagram')}
          onMouseLeave={() => setHoveredButton(null)}
          className="relative w-12 h-12 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center shadow-luxury hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none"
          aria-label="Visit Aishka Clothing on Instagram"
        >
          <InstagramIcon size={22} className="stroke-white text-white drop-shadow-sm" />
          <span className="absolute -inset-1 rounded-full border border-pink-400/40 opacity-0 group-hover:opacity-100 group-hover:animate-ping pointer-events-none transition-opacity" />
        </a>
      </div>

      {/* WhatsApp Floating Button */}
      <div className="flex items-center group">
        <div
          className={`hidden sm:flex items-center mr-3 px-3.5 py-1.5 bg-[#1F1B18]/95 text-[#FAF7F2] text-[11px] uppercase tracking-wider rounded shadow-luxury border border-[#C5A059]/40 transition-all duration-300 pointer-events-none ${
            hoveredButton === 'whatsapp' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-[#25D366] mr-2 inline-block animate-ping" />
          <span>Chat with Stylist</span>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHoveredButton('whatsapp')}
          onMouseLeave={() => setHoveredButton(null)}
          className="relative w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-luxury-hover hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none"
          aria-label="Chat on WhatsApp with Aishka Clothing"
        >
          <WhatsAppIcon size={30} className="text-white drop-shadow-sm" />
          
          {/* Subtle Pulse Ring */}
          <span className="absolute -inset-1 rounded-full border-2 border-[#25D366]/40 animate-ping pointer-events-none" />
        </a>
      </div>
    </div>
  );
}
