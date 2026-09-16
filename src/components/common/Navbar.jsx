import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';
import { THEME } from '../../styles/theme';

export default function Navbar({ activePage, setActivePage, onOpenAppointment }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#E8EFE3]/95 backdrop-blur-md shadow-luxury py-2.5 border-b border-[#5A664D]/25'
          : 'bg-[#E8EFE3] py-3 sm:py-4 border-b border-[#5A664D]/15'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo - Changed from text to uploaded Logo Image */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-3 group focus:outline-none"
            aria-label="AISHKA CLOTHING Home"
          >
            <img
              src="/logo-transparent.png"
              alt="AISHKA CLOTHING"
              className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
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
                      ? 'text-[#5A664D] font-semibold'
                      : 'text-[#1F1B18]/80 hover:text-[#5A664D]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#5A664D] animate-fade-in" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action: Book Appointment CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={onOpenAppointment}
              className="px-5 py-2.5 text-[11px] uppercase tracking-[0.2em] font-sans text-[#FAF7F2] bg-[#5A664D] hover:bg-[#434D39] transition-all duration-300 shadow-sm rounded-none focus:outline-none border border-[#5A664D]"
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
        <div className="md:hidden bg-[#E8EFE3] border-b border-[#5A664D]/30 px-6 pt-4 pb-6 transition-all duration-300 shadow-luxury">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left py-2 text-sm uppercase tracking-[0.2em] transition-colors ${
                    isActive
                      ? 'text-[#5A664D] font-semibold pl-2 border-l-2 border-[#5A664D]'
                      : 'text-[#1F1B18]/80 hover:text-[#5A664D]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
            <div className="pt-4 border-t border-[#5A664D]/25">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAppointment();
                }}
                className="w-full py-3 text-xs uppercase tracking-[0.2em] font-sans text-[#FAF7F2] bg-[#5A664D] hover:bg-[#434D39] transition-all flex items-center justify-center space-x-2 shadow-sm"
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
