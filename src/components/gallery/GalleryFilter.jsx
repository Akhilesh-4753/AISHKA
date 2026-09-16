import React from 'react';
import { GALLERY_CATEGORIES } from '../../data/galleryData';

export default function GalleryFilter({ activeCategory, onSelectCategory, itemCounts }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 my-8 sm:my-12">
      {GALLERY_CATEGORIES.map((category) => {
        const isActive = activeCategory === category;
        const count = itemCounts ? itemCounts[category] : null;

        return (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`px-5 py-2.5 text-xs uppercase tracking-[0.2em] font-sans transition-all duration-300 focus:outline-none ${
              isActive
                ? 'bg-[#5A664D] text-[#FAF7F2] border border-[#5A664D] shadow-sm'
                : 'bg-[#F2F7EE] text-[#1F1B18]/80 border border-[#5A664D]/25 hover:border-[#5A664D] hover:text-[#1F1B18]'
            }`}
          >
            <span>{category}</span>
            {count !== undefined && (
              <span className={`ml-2 text-[10px] ${isActive ? 'text-[#FAF7F2]/90' : 'text-[#5A664D]'}`}>
                ({count})
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
