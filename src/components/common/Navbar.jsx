import React, { useState } from 'react';
import { Menu, X, Calendar } from 'lucide-react';
import { useScrollPosition } from '../../hooks/useScrollPosition';

export default function Navbar({ activePage, setActivePage, onOpenAppointment }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isScrolled } = useScrollPosition();

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-luxury py-3 border-b border-[#C8B6A6]/30'
          : 'bg-[#FAF7F2] py-4 sm:py-5 border-b border-[#C8B6A6]/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="text-left group focus:outline-none"
            aria-label="AISHKA CLOTHING Home"
          >
            <span className="block font-serif text-2xl sm:text-3xl tracking-[0.22em] text-[#1F1B18] font-medium transition-colors group-hover:text-[#C5A059]">
              AISHKA
            </span>
            <span className="block text-[9px] sm:text-[10px] tracking-[0.45em] text-[#8E7B6C] uppercase font-sans -mt-0.5">
              CLOTHING
            </span>
          </button>

          {/* Desktop Navigation Links (Strictly 4 links) */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-12" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative py-1 text-xs lg:text-sm uppercase tracking-[0.18em] transition-colors duration-200 focus:outline-none ${
                    isActive
                      ? 'text-[#C5A059] font-medium'
                      : 'text-[#1F1B18]/80 hover:text-[#1F1B18]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C5A059] animate-fade-in" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action: Book Appointment CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={onOpenAppointment}
              className="px-5 py-2.5 text-[11px] uppercase tracking-[0.2em] font-sans text-[#1F1B18] border border-[#1F1B18] hover:bg-[#1F1B18] hover:text-[#FAF7F2] transition-all duration-300 shadow-sm rounded-none focus:outline-none"
            >
              BOOK APPOINTMENT
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#1F1B18] focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF7F2] border-b border-[#C8B6A6]/40 px-6 pt-4 pb-6 transition-all duration-300 shadow-luxury">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left py-2 text-sm uppercase tracking-[0.2em] transition-colors ${
                    isActive
                      ? 'text-[#C5A059] font-semibold pl-2 border-l-2 border-[#C5A059]'
                      : 'text-[#1F1B18]/80 hover:text-[#1F1B18]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
            <div className="pt-4 border-t border-[#C8B6A6]/30">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAppointment();
                }}
                className="w-full py-3 text-xs uppercase tracking-[0.2em] font-sans text-[#FAF7F2] bg-[#1F1B18] border border-[#1F1B18] hover:bg-[#FAF7F2] hover:text-[#1F1B18] transition-all flex items-center justify-center space-x-2"
              >
                <Calendar size={14} />
                <span>BOOK APPOINTMENT</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
