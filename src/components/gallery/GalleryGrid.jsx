import React from 'react';
import { Eye, ArrowUpRight } from 'lucide-react';

export default function GalleryGrid({ items, onSelectImage }) {
  if (!items || items.length === 0) {
    return (
      <div className="py-20 text-center text-[#8E7B6C] font-serif text-lg">
        No pieces found in this category.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {items.map((item) => (
        <div
          key={item.id}
          onClick={() => onSelectImage(item)}
          className="group relative cursor-pointer bg-[#F2F7EE] border border-[#5A664D]/25 overflow-hidden shadow-subtle hover:shadow-luxury transition-all duration-500"
        >
          {/* Image Container */}
          <div className="relative aspect-[3/4] overflow-hidden bg-[#DDE5D6]">
            <img
              src={item.image}
              alt={item.alt}
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            
            {/* Elegant Hover Overlay */}
            <div className="absolute inset-0 bg-[#1F1B18]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
              <div className="flex justify-end">
                <div className="w-10 h-10 rounded-full bg-[#FAF7F2]/90 backdrop-blur-sm flex items-center justify-center text-[#1F1B18] shadow-sm transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <Eye size={18} />
                </div>
              </div>
              
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-2.5 py-1 text-[9px] uppercase tracking-[0.2em] bg-[#5A664D] text-[#FAF7F2] font-medium mb-2">
                  {item.category}
                </span>
                <h4 className="font-serif text-xl sm:text-2xl text-[#FAF7F2] font-normal">
                  {item.title}
                </h4>
                <p className="text-xs text-[#E6DDD4] font-light mt-1 font-sans line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          </div>

          {/* Under-Card Minimal Label */}
          <div className="p-4 sm:p-5 flex items-center justify-between bg-[#F2F7EE] border-t border-[#5A664D]/15">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#5A664D] font-medium">
                {item.tag}
              </p>
              <h5 className="font-serif text-base sm:text-lg text-[#1F1B18] font-normal group-hover:text-[#5A664D] transition-colors">
                {item.title}
              </h5>
            </div>
            <ArrowUpRight size={16} className="text-[#8E7B6C] group-hover:text-[#C5A059] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>
      ))}
    </div>
  );
}
