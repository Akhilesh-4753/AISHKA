import React from 'react';
import { MessageCircle, Mail, MapPin, Clock, ArrowUp } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { CONTENT } from '../../data/contentData';
import { THEME } from '../../styles/theme';

export default function Footer({ setActivePage }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'gallery', label: 'Lookbook & Gallery' },
    { id: 'contact', label: 'Contact & Atelier' },
  ];

  return (
    <footer className="bg-[#1F1B18] text-[#FAF7F2] pt-16 pb-12 border-t border-[#FAF7F2]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#FAF7F2]/15">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div>
              <span className="block font-serif text-2xl sm:text-3xl tracking-[0.22em] text-[#FAF7F2] font-medium">
                AISHKA
              </span>
              <span className="block text-[9px] tracking-[0.45em] text-[#C8B6A6] uppercase font-sans -mt-0.5">
                CLOTHING
              </span>
            </div>
            <p className="text-xs uppercase tracking-[0.18em] text-[#C5A059] font-medium">
              {CONTENT.brand.tagline}
            </p>
            <p className="text-xs text-[#C8B6A6] leading-relaxed pr-4 font-sans font-light">
              {CONTENT.brand.subCopy}
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a
                href={THEME.brand.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[#FAF7F2]/20 flex items-center justify-center text-[#FAF7F2] hover:text-[#C5A059] hover:border-[#C5A059] transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href={`https://wa.me/${THEME.brand.whatsapp.replace('+', '')}?text=${encodeURIComponent('Hello Aishka Clothing, I would like to inquire about your collections.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[#FAF7F2]/20 flex items-center justify-center text-[#FAF7F2] hover:text-[#25D366] hover:border-[#25D366] transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={16} />
              </a>
              <a
                href={`mailto:${THEME.brand.email}`}
                className="w-9 h-9 rounded-full border border-[#FAF7F2]/20 flex items-center justify-center text-[#FAF7F2] hover:text-[#C5A059] hover:border-[#C5A059] transition-colors"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Navigation Col */}
          <div>
            <h4 className="font-serif text-sm tracking-[0.15em] uppercase text-[#FAF7F2] mb-4 pb-2 border-b border-[#FAF7F2]/10 inline-block">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      setActivePage(link.id);
                      scrollToTop();
                    }}
                    className="text-xs tracking-[0.12em] uppercase text-[#C8B6A6] hover:text-[#C5A059] transition-colors focus:outline-none"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Atelier Hours Col */}
          <div>
            <h4 className="font-serif text-sm tracking-[0.15em] uppercase text-[#FAF7F2] mb-4 pb-2 border-b border-[#FAF7F2]/10 inline-block">
              Studio & Hours
            </h4>
            <div className="space-y-3 text-xs text-[#C8B6A6] font-light">
              <div className="flex items-start space-x-2.5">
                <Clock size={15} className="text-[#C5A059] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#FAF7F2] font-normal">Monday – Saturday</p>
                  <p>10:30 AM – 7:30 PM</p>
                  <p className="mt-1 text-[#FAF7F2] font-normal">Sunday</p>
                  <p>By Prior Appointment</p>
                </div>
              </div>
              <div className="flex items-start space-x-2.5 pt-1">
                <MapPin size={15} className="text-[#C5A059] flex-shrink-0 mt-0.5" />
                <p>Private Studio Consultations across Delhi NCR & Worldwide Online</p>
              </div>
            </div>
          </div>

          {/* Newsletter / Bespoke Inquiry Col */}
          <div>
            <h4 className="font-serif text-sm tracking-[0.15em] uppercase text-[#FAF7F2] mb-4 pb-2 border-b border-[#FAF7F2]/10 inline-block">
              The Atelier Journal
            </h4>
            <p className="text-xs text-[#C8B6A6] font-light mb-3 leading-relaxed">
              Receive private drop notifications, seasonal lookbooks, and textile previews.
            </p>
            <form onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing to the Aishka Atelier Journal.'); }} className="space-y-2">
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full bg-[#2E2824] border border-[#FAF7F2]/20 px-3 py-2 text-xs text-[#FAF7F2] placeholder-[#C8B6A6]/60 focus:outline-none focus:border-[#C5A059] transition-colors"
              />
              <button
                type="submit"
                className="w-full py-2.5 bg-[#C5A059] text-[#1F1B18] text-[11px] font-medium tracking-[0.2em] uppercase hover:bg-[#FAF7F2] transition-colors"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#C8B6A6]/70 tracking-wider">
          <p>© {new Date().getFullYear()} AISHKA CLOTHING. All rights reserved. Timeless Modesty & Handcrafted Luxury.</p>
          <button
            onClick={scrollToTop}
            className="mt-4 sm:mt-0 flex items-center space-x-2 text-[#FAF7F2] hover:text-[#C5A059] transition-colors uppercase text-[10px] tracking-widest"
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
}
