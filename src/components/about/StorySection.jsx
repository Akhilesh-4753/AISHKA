import React from 'react';
import { CONTENT } from '../../data/contentData';

export default function StorySection() {
  const { story } = CONTENT.about;

  return (
    <section className="py-16 sm:py-24 bg-[#E8EFE3] text-[#1F1B18] border-b border-[#5A664D]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Two-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: High-Fashion Imagery */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="relative overflow-hidden bg-[#DDE5D6] shadow-luxury aspect-[3/4]">
                <img
                  src={story.image}
                  alt="Aishka Clothing atelier creation worn with modest poise"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Secondary Inset Visual */}
              <div className="hidden sm:block absolute -bottom-10 -right-8 w-44 aspect-square border-4 border-[#E8EFE3] shadow-luxury overflow-hidden">
                <img
                  src={story.detailImage}
                  alt="Textile detail and stitching close up"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-7 space-y-6 lg:pl-4">
            <div className="space-y-4 text-xs sm:text-sm text-[#6E665F] font-light leading-relaxed font-sans">
              <p className="text-sm sm:text-base text-[#1F1B18] font-normal leading-relaxed">
                <strong className="font-serif text-lg tracking-wide font-medium text-[#1F1B18]">Aishka Clothing</strong> was born out of a desire for fashion that respects both poise and ease. In a world crowded with transient, fast-moving aesthetics, we seek quiet longevity.
              </p>
              
              <p>
                {story.p1}
              </p>

              <p>
                {story.p2}
              </p>
            </div>

            {/* The Three Core Design Pillars */}
            <div className="pt-6 border-t border-[#5A664D]/20 space-y-3.5">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#5A664D] font-medium block">
                OUR THREE DESIGN PILLARS
              </span>
              <div className="space-y-3">
                {CONTENT.about.pillars.map((pillar) => (
                  <div
                    key={pillar.number}
                    className="flex items-start space-x-3.5 p-3.5 bg-[#F2F7EE] border border-[#5A664D]/15 shadow-subtle hover:border-[#5A664D]/35 transition-colors"
                  >
                    <span className="w-7 h-7 rounded-full bg-[#E8EFE3] border border-[#5A664D]/30 flex items-center justify-center font-serif text-xs text-[#5A664D] font-medium flex-shrink-0 mt-0.5">
                      {pillar.number}
                    </span>
                    <div>
                      <h4 className="font-serif text-base text-[#1F1B18] font-normal leading-snug">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-[#5A664D]/90 font-light mt-0.5 font-sans leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
