import React from 'react';
import { CONTENT } from '../../data/contentData';

export default function AnnouncementBar() {
  return (
    <aside aria-label="Announcement" className="bg-[#1F1B18] text-[#FAF7F2] py-2 px-4 text-center border-b border-[#FAF7F2]/10 overflow-hidden relative z-50">
      <div className="flex items-center justify-center space-x-6 text-[11px] tracking-[0.2em] font-sans uppercase text-[#E6DDD4]">
        <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
        <span>{CONTENT.brand.announcement}</span>
        <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
      </div>
    </aside>
  );
}
