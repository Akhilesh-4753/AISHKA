import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CONTENT } from '../../data/contentData';

export default function FeaturedGrid({ onSelectCategory }) {
  const { featuredCollections } = CONTENT.home;

  return (
    <section className="py-20 sm:py-28 bg-[#E8EFE3] text-[#1F1B18] border-b border-[#5A664D]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#5A664D] font-medium block mb-2">
            CURATED PIECES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1F1B18] font-normal">
            Core Offerings
          </h2>
          <div className="w-12 h-[1px] bg-[#5A664D] mx-auto mt-4" />
        </div>

        {/* 3-Column Preview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {featuredCollections.map((item) => (
            <div
              key={item.id}
              className="group bg-[#F2F7EE] border border-[#5A664D]/25 overflow-hidden shadow-subtle hover:shadow-luxury transition-all duration-500 flex flex-col cursor-pointer"
              onClick={() => onSelectCategory(item.category)}
            >
              {/* Image Container with Elegant Zoom */}
              <div className="relative aspect-[3/4] overflow-hidden bg-[#DDE5D6]">
                <img
                  src={item.image}
                  alt={`${item.title} - ${item.badge}`}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F1B18]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Floating Category Tag */}
                <div className="absolute top-4 left-4 bg-[#F2F7EE]/90 backdrop-blur-sm px-3 py-1 text-[9px] uppercase tracking-[0.2em] text-[#1F1B18] font-medium border border-[#5A664D]/25">
                  {item.badge}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 text-center flex flex-col flex-grow justify-between bg-[#F2F7EE]">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#5A664D] font-medium block mb-1">
                    {item.badge}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-2xl text-[#1F1B18] font-normal mb-3 group-hover:text-[#5A664D] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#5A664D]/90 font-light leading-relaxed mb-6 font-sans">
                    {item.description}
                  </p>
                </div>

                {/* Subtle Action Link */}
                <div className="pt-2 border-t border-[#5A664D]/15 inline-flex items-center justify-center space-x-1 text-[11px] uppercase tracking-[0.2em] text-[#1F1B18] font-medium group-hover:text-[#5A664D] transition-colors">
                  <span>Explore Pieces</span>
                  <ArrowUpRight size={13} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
