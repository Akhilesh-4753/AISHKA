import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CONTENT } from '../../data/contentData';

export default function BrandQuote({ onReadMore }) {
  const { aesthetic } = CONTENT.home;

  return (
    <section id="aishka-aesthetic" className="py-20 sm:py-28 bg-[#E8EFE3] text-[#1F1B18] border-b border-[#5A664D]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Showcase (Left Column) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              {/* Outer decorative frame */}
              <div className="absolute -inset-3 sm:-inset-4 border border-[#5A664D]/25 pointer-events-none" />
              
              <div className="relative overflow-hidden bg-[#DDE5D6] shadow-luxury aspect-[4/5]">
                <img
                  src={aesthetic.image}
                  alt="Aishka Clothing editorial piece in neutral champagne tone"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              {/* Small floating craft badge */}
              <div className="absolute -bottom-5 -right-4 sm:-right-6 bg-[#1F1B18] text-[#FAF7F2] px-4 sm:px-5 py-3 shadow-luxury border border-[#5A664D]/30">
                <p className="text-[9px] uppercase tracking-[0.25em] text-[#C5A059]">Purity of Form</p>
                <p className="font-serif text-sm italic text-[#E6DDD4]">Slow & Mindful Tailoring</p>
              </div>
            </div>
          </div>

          {/* Copy Manifesto (Right Column) */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 lg:pl-6">
            <div className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-[0.25em] text-[#5A664D] font-medium">
              <span className="w-6 h-[1px] bg-[#5A664D]" />
              <span>{aesthetic.tag}</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1F1B18] font-normal leading-[1.15]">
              {aesthetic.headline}
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-[#5A664D]/90 font-light leading-relaxed font-sans max-w-xl">
              <p>{aesthetic.p1}</p>
              <p>{aesthetic.p2}</p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <button
                onClick={onReadMore}
                className="inline-flex items-center space-x-3 text-xs uppercase tracking-[0.2em] font-sans text-[#1F1B18] border-b border-[#1F1B18] pb-1 hover:text-[#5A664D] hover:border-[#5A664D] transition-colors focus:outline-none"
              >
                <span>Read The Full Story</span>
                <ArrowRight size={14} />
              </button>
              
              <span className="text-[11px] text-[#8E7B6C] italic font-serif">
                — {aesthetic.quoteAuthor}
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
