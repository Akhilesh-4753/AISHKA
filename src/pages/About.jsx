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
      <section className="pt-16 pb-16 sm:pt-24 sm:pb-20 text-center border-b border-[#5A664D]/20 bg-[#E8EFE3]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Title Block */}
          <div className="max-w-3xl mx-auto">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#5A664D] font-medium block mb-3">
              {hero.tag}
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#1F1B18] font-normal leading-tight">
              {hero.title}
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-[#5A664D] font-medium mt-4 font-serif italic">
              {hero.subtitle}
            </p>
            <p className="text-xs sm:text-sm text-[#1F1B18]/85 font-light mt-4 leading-relaxed font-sans max-w-2xl mx-auto">
              {hero.narrative}
            </p>
          </div>

          {/* Editorial Creed Quote */}
          {hero.creed && (
            <div className="my-8 py-4 px-6 sm:px-10 border-y border-[#5A664D]/25 bg-[#F2F7EE]/70 max-w-2xl mx-auto">
              <p className="italic font-serif text-sm sm:text-base text-[#1F1B18]/90 leading-relaxed">
                {hero.creed}
              </p>
            </div>
          )}

          {/* 4 Foundational Commitments Cards */}
          {hero.commitments && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 text-left">
              {hero.commitments.map((item) => (
                <div
                  key={item.num}
                  className="p-5 bg-[#F2F7EE] border border-[#5A664D]/15 shadow-subtle hover:border-[#5A664D]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="w-6 h-6 rounded-full bg-[#E8EFE3] border border-[#5A664D]/30 flex items-center justify-center font-serif text-[11px] text-[#5A664D] font-medium">
                        {item.num}
                      </span>
                      <span className="text-[9px] uppercase tracking-[0.2em] text-[#5A664D] font-medium font-sans">
                        {item.tag}
                      </span>
                    </div>
                    <h3 className="font-serif text-base text-[#1F1B18] font-normal mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#5A664D]/90 font-light font-sans leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Artisanal Heritage Badges */}
          {hero.badges && (
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-10 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#5A664D] font-medium">
              {hero.badges.map((badge, idx) => (
                <React.Fragment key={badge}>
                  <span className="px-3.5 py-1.5 rounded-full bg-[#F2F7EE] border border-[#5A664D]/20 shadow-subtle">
                    {badge}
                  </span>
                  {idx < hero.badges.length - 1 && (
                    <span className="hidden sm:inline text-[#5A664D]/40">•</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          )}

          <div className="w-12 h-[1px] bg-[#5A664D] mx-auto mt-8" />
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
