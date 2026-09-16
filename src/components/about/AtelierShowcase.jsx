import React from 'react';
import { CONTENT } from '../../data/contentData';

export default function AtelierShowcase({ onOpenAppointment, onContact }) {
  const { atelier } = CONTENT.about;

  return (
    <section className="py-20 sm:py-28 bg-[#E8EFE3] text-[#1F1B18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#1F1B18] text-[#FAF7F2] p-8 sm:p-14 lg:p-16 border border-[#FAF7F2]/10 shadow-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059] font-medium block">
                DELIBERATE SLOW CRAFT
              </span>
              
              <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#FAF7F2]">
                {atelier.title}
              </h3>

              <p className="text-sm font-serif italic text-[#C8B6A6]">
                {atelier.subtitle}
              </p>

              <p className="text-xs sm:text-sm text-[#C8B6A6]/80 font-light leading-relaxed font-sans max-w-xl">
                {atelier.description}
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-[#FAF7F2]/15">
                {atelier.stats.map((stat, idx) => (
                  <div key={idx}>
                    <span className="font-serif text-2xl sm:text-3xl text-[#FAF7F2] font-light block">
                      {stat.value}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-[#C8B6A6] font-sans mt-1 block">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={onOpenAppointment}
                  className="px-6 py-3.5 bg-[#5A664D] text-[#FAF7F2] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#434D39] transition-colors shadow-sm"
                >
                  Schedule an Atelier Visit
                </button>
                <button
                  onClick={onContact}
                  className="px-6 py-3.5 border border-[#FAF7F2]/40 text-[#FAF7F2] text-xs uppercase tracking-[0.2em] hover:bg-[#FAF7F2]/10 transition-colors"
                >
                  Message Our Concierge
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden border border-[#FAF7F2]/20 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1000&auto=format&fit=crop"
                  alt="Aishka Atelier craftsmanship and tailored fabrics"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
