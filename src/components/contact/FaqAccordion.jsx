import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { CONTENT } from '../../data/contentData';

export default function FaqAccordion() {
  const { faqs } = CONTENT.contact;
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="mt-20 border-t border-[#C8B6A6]/30 pt-16">
      <div className="max-w-3xl mx-auto">
        
        <div className="text-center mb-10">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#8E7B6C] font-medium block mb-2">
            CLIENT ASSISTANCE
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl text-[#1F1B18] font-normal">
            Frequently Asked Questions
          </h3>
          <div className="w-12 h-[1px] bg-[#C5A059] mx-auto mt-4" />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#FAF7F2] border border-[#C8B6A6]/40 transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between space-x-4 focus:outline-none"
                >
                  <span className="font-serif text-lg sm:text-xl text-[#1F1B18] font-normal">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-[#C5A059] flex-shrink-0 transform transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#6E665F] font-light leading-relaxed font-sans border-t border-[#C8B6A6]/20">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
