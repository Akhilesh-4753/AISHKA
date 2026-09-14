import React from 'react';
import { CONTENT } from '../../data/contentData';

export default function Hero({ onExplore, onDiscoverStory }) {
  const { hero } = CONTENT.home;

  const scrollToNext = () => {
    const nextSection = document.getElementById('aishka-aesthetic');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] sm:min-h-[92vh] flex items-center justify-center bg-[#1F1B18] text-[#FAF7F2] overflow-hidden">
      {/* Background Image with Cinematic Editorial Grade */}
      <div className="absolute inset-0 z-0">
        <img
          src={hero.bgImage}
          alt="Aishka Clothing luxury editorial fashion silhouette"
          className="w-full h-full object-cover object-center brightness-75 scale-105 transform motion-safe:animate-pulse-slow"
        />
        {/* Editorial Gradients & Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1F1B18] via-[#1F1B18]/50 to-[#1F1B18]/40" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#1F1B18]/30 to-[#1F1B18]/80" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center py-20 flex flex-col items-center">
        
        {/* Pill Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#1F1B18]/60 backdrop-blur-md border border-[#FAF7F2]/25 text-[10px] sm:text-xs tracking-[0.25em] uppercase text-[#E6DDD4] mb-8 animate-fade-in shadow-luxury">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
          <span>{hero.badge}</span>
        </div>

        {/* Brand Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.14em] sm:tracking-[0.18em] font-normal uppercase text-[#FAF7F2] leading-tight sm:leading-none mb-6 max-w-4xl drop-shadow-sm">
          AISHKA
          <span className="block font-light text-2xl sm:text-4xl md:text-5xl tracking-[0.3em] text-[#C8B6A6] mt-2 sm:mt-3">
            CLOTHING
          </span>
        </h1>

        {/* Subtitle */}
        <p className="font-sans text-sm sm:text-base md:text-lg text-[#FAF7F2]/85 font-light tracking-wide max-w-2xl mx-auto mb-10 leading-relaxed">
          {hero.subtitle}
        </p>

        {/* Dual Luxury Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md">
          <button
            onClick={onExplore}
            className="w-full sm:w-auto px-8 py-4 bg-[#FAF7F2] text-[#1F1B18] text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#C5A059] hover:text-[#FAF7F2] transition-all duration-300 shadow-luxury border border-[#FAF7F2]"
          >
            {hero.primaryCta}
          </button>
          
          <button
            onClick={onDiscoverStory}
            className="w-full sm:w-auto px-8 py-4 bg-transparent text-[#FAF7F2] text-xs uppercase tracking-[0.25em] font-medium border border-[#FAF7F2]/60 hover:bg-[#FAF7F2]/15 hover:border-[#FAF7F2] transition-all duration-300 backdrop-blur-sm"
          >
            {hero.secondaryCta}
          </button>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center text-[#C8B6A6] hover:text-[#FAF7F2] transition-colors group cursor-pointer focus:outline-none"
        aria-label="Scroll to Aishka Aesthetic Section"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] font-sans mb-1 group-hover:text-[#C5A059] transition-colors">
          SCROLL
        </span>
        <div className="w-[1px] h-6 bg-[#C8B6A6]/40 relative overflow-hidden">
          <div className="w-full h-1/2 bg-[#C5A059] animate-bounce" />
        </div>
      </button>
    </section>
  );
}
