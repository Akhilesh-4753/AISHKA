import React from 'react';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import FaqAccordion from '../components/contact/FaqAccordion';
import { CONTENT } from '../data/contentData';

export default function Contact() {
  const { hero } = CONTENT.contact;

  return (
    <div className="animate-fade-in bg-[#E8EFE3] pb-24">
      {/* Header */}
      <section className="pt-16 pb-12 sm:pt-24 sm:pb-16 text-center border-b border-[#5A664D]/20 bg-[#E8EFE3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#5A664D] font-medium block mb-3">
            {hero.tag}
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#1F1B18] font-normal leading-tight max-w-3xl mx-auto">
            {hero.title}
          </h1>
          <p className="text-xs sm:text-sm text-[#5A664D]/90 font-light mt-4 max-w-xl mx-auto font-sans">
            {hero.subtitle}
          </p>
          <div className="w-12 h-[1px] bg-[#5A664D] mx-auto mt-6" />
        </div>
      </section>

      {/* Main Two-Column Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Quick Connect & Studio Details */}
          <div className="lg:col-span-5">
            <ContactInfo />
          </div>

          {/* Right Column: Interactive Luxury Inquiry Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>

        {/* Quick FAQ Section */}
        <FaqAccordion />
      </div>
    </div>
  );
}
