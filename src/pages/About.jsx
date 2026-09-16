import React from 'react';
import StorySection from '../components/about/StorySection';
import ValuesGrid from '../components/about/ValuesGrid';
import AtelierShowcase from '../components/about/AtelierShowcase';
import { CONTENT } from '../data/contentData';

export default function About({ setActivePage, onOpenAppointment }) {
  const { hero } = CONTENT.about;

  return (
    <div className="animate-fade-in bg-[#E8EFE3]">
      {/* Editorial Page Header */}
      <section className="pt-16 pb-12 sm:pt-24 sm:pb-16 text-center border-b border-[#5A664D]/20 bg-[#E8EFE3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#5A664D] font-medium block mb-3">
            {hero.tag}
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#1F1B18] font-normal leading-tight max-w-3xl mx-auto">
            {hero.title}
          </h1>
          <p className="text-xs sm:text-sm text-[#5A664D]/90 font-light mt-4 max-w-xl mx-auto font-sans">
            {hero.subtitle}
          </p>
          <div className="w-12 h-[1px] bg-[#5A664D] mx-auto mt-6" />
        </div>
      </section>

      {/* Brand Story 2-Column Section */}
      <StorySection />

      {/* 3 Values Grid */}
      <ValuesGrid />

      {/* Atelier Craftsmanship Showcase */}
      <AtelierShowcase
        onOpenAppointment={onOpenAppointment}
        onContact={() => {
          setActivePage('contact');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    </div>
  );
}
