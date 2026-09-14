import React from 'react';
import { CONTENT } from '../../data/contentData';

export default function StorySection() {
  const { story } = CONTENT.about;

  return (
    <section className="py-16 sm:py-24 bg-[#FAF7F2] text-[#1F1B18] border-b border-[#C8B6A6]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Two-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: High-Fashion Imagery */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="relative overflow-hidden bg-[#EFECE6] shadow-luxury aspect-[3/4]">
                <img
                  src={story.image}
                  alt="Aishka Clothing atelier creation worn with modest poise"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Secondary Inset Visual */}
              <div className="hidden sm:block absolute -bottom-10 -right-8 w-44 aspect-square border-4 border-[#FAF7F2] shadow-luxury overflow-hidden">
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

            {/* Quick First Pillar Teaser as seen in screenshot */}
            <div className="pt-6 border-t border-[#C8B6A6]/30">
              <div className="flex items-start space-x-4">
                <span className="w-8 h-8 rounded-full bg-[#EFECE6] border border-[#C8B6A6]/50 flex items-center justify-center font-serif text-xs text-[#8E7B6C] flex-shrink-0">
                  01
                </span>
                <div>
                  <h4 className="font-serif text-lg text-[#1F1B18] font-normal">
                    Modest & Thoughtful Draping
                  </h4>
                  <p className="text-xs text-[#8E7B6C] font-light mt-1 font-sans">
                    Cut generously to offer dignified coverage without losing sculptural silhouette.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
