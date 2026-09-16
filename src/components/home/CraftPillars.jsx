import React from 'react';
import { CONTENT } from '../../data/contentData';

export default function CraftPillars({ onOpenAppointment }) {
  const { craftPillars, editorialBanner } = CONTENT.home;

  return (
    <section className="py-20 sm:py-28 bg-[#E8EFE3] text-[#1F1B18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#5A664D] font-medium block mb-2">
            OUR PROMISE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1F1B18] font-normal">
            Signature Standards
          </h2>
          <div className="w-12 h-[1px] bg-[#5A664D] mx-auto mt-4" />
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {craftPillars.map((pillar) => (
            <div
              key={pillar.number}
              className="p-6 sm:p-8 bg-[#F2F7EE] border border-[#5A664D]/25 shadow-subtle hover:border-[#5A664D] transition-all duration-300"
            >
              <span className="font-serif text-3xl text-[#5A664D] font-light block mb-4">
                {pillar.number}
              </span>
              <h3 className="font-serif text-xl text-[#1F1B18] font-normal mb-3">
                {pillar.title}
              </h3>
              <p className="text-xs text-[#5A664D]/90 font-light leading-relaxed font-sans">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Editorial Full-width Quote Banner */}
        <div className="mt-20 relative overflow-hidden bg-[#1F1B18] text-[#FAF7F2] p-8 sm:p-14 lg:p-20 text-center border border-[#FAF7F2]/10 shadow-luxury">
          <div className="absolute inset-0 opacity-15">
            <img
              src={editorialBanner.bgImage}
              alt="Aishka philosophy background"
              className="w-full h-full object-cover object-center"
            />
          </div>
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.35em] text-[#C5A059] font-medium block">
              {editorialBanner.author}
            </span>
            <p className="font-serif text-xl sm:text-2xl md:text-3xl italic text-[#E6DDD4] leading-snug">
              {editorialBanner.quote}
            </p>
            <div className="pt-4">
              <button
                onClick={onOpenAppointment}
                className="px-8 py-3.5 bg-[#5A664D] text-[#FAF7F2] text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#434D39] transition-colors border border-[#5A664D] shadow-sm"
              >
                REQUEST A PRIVATE CONSULTATION
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
