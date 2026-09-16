import React from 'react';
import { CONTENT } from '../../data/contentData';

export default function ValuesGrid() {
  const { pillars } = CONTENT.about;

  return (
    <section className="py-20 sm:py-24 bg-[#E8EFE3] text-[#1F1B18] border-b border-[#5A664D]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#5A664D] font-medium block mb-2">
            CORE PHILOSOPHY
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1F1B18] font-normal">
            Our Three Design Pillars
          </h2>
          <div className="w-12 h-[1px] bg-[#5A664D] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((item) => (
            <div
              key={item.number}
              className="bg-[#F2F7EE] p-8 sm:p-10 border border-[#5A664D]/25 shadow-subtle hover:shadow-luxury hover:border-[#5A664D] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="font-serif text-4xl text-[#5A664D] font-light block mb-6">
                  {item.number}
                </span>
                <h3 className="font-serif text-2xl text-[#1F1B18] font-normal mb-4">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5A664D]/90 font-light leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#5A664D]/15">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#5A664D] font-sans font-medium">
                  Aishka Standard
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
