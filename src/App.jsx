import React, { useState, useEffect } from 'react';
import AnnouncementBar from './components/common/AnnouncementBar';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import FloatingWhatsApp from './components/common/FloatingWhatsApp';
import AppointmentModal from './components/common/AppointmentModal';

import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);

  // Handle URL hash changes or back/forward
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['home', 'about', 'gallery', 'contact'].includes(hash)) {
        setActivePage(hash);
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handlePageChange = (pageId) => {
    setActivePage(pageId);
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#1F1B18] font-sans antialiased selection:bg-[#C8B6A6]/40 selection:text-[#1F1B18]">
      {/* Top Announcement Bar */}
      <AnnouncementBar />

      {/* Main Luxury Navbar (Strictly 4 links: Home, About, Gallery, Contact) */}
      <Navbar
        activePage={activePage}
        setActivePage={handlePageChange}
        onOpenAppointment={() => setIsAppointmentOpen(true)}
      />

      {/* Editorial Section View Indicator Bar (Matching Reference) */}
      <div className="bg-[#EFECE6]/70 border-b border-[#C8B6A6]/30 py-1.5 px-4 text-[11px] font-sans text-[#8E7B6C] flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-[#C5A059] inline-block animate-pulse" />
          <span className="uppercase tracking-wider">Viewing Section:</span>
          <span className="font-serif italic text-sm text-[#1F1B18] font-medium capitalize">
            {activePage}
          </span>
        </div>
        <div className="hidden sm:flex items-center space-x-3 text-[10px] uppercase tracking-widest text-[#8E7B6C]">
          <span>Switch View:</span>
          {['home', 'about', 'gallery', 'contact'].map((p) => (
            <button
              key={p}
              onClick={() => handlePageChange(p)}
              className={`hover:text-[#1F1B18] capitalize transition-colors ${
                activePage === p ? 'text-[#C5A059] font-medium underline underline-offset-4' : ''
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* Page Content */}
      <main className="flex-grow">
        {activePage === 'home' && (
          <Home
            setActivePage={handlePageChange}
            setSelectedCategory={setSelectedCategory}
            onOpenAppointment={() => setIsAppointmentOpen(true)}
          />
        )}
        {activePage === 'about' && (
          <About
            setActivePage={handlePageChange}
            onOpenAppointment={() => setIsAppointmentOpen(true)}
          />
        )}
        {activePage === 'gallery' && (
          <Gallery
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            onOpenAppointment={() => setIsAppointmentOpen(true)}
          />
        )}
        {activePage === 'contact' && (
          <Contact />
        )}
      </main>

      {/* Footer */}
      <Footer setActivePage={handlePageChange} />

      {/* Floating WhatsApp Quick Action Badge */}
      <FloatingWhatsApp />

      {/* Luxury Book Appointment Modal */}
      <AppointmentModal
        isOpen={isAppointmentOpen}
        onClose={() => setIsAppointmentOpen(false)}
      />
    </div>
  );
}
