import React, { useState, useEffect } from 'react';
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
    <div className="min-h-screen flex flex-col bg-[#E8EFE3] text-[#1F1B18] font-sans antialiased selection:bg-[#5A664D]/30 selection:text-[#1F1B18]">
      {/* Main Luxury Navbar (Strictly 4 links: Home, About, Gallery, Contact) */}
      <Navbar
        activePage={activePage}
        setActivePage={handlePageChange}
        onOpenAppointment={() => setIsAppointmentOpen(true)}
      />

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
