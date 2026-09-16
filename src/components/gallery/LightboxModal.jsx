import React, { useEffect } from 'react';
import { X, MessageSquare, Sparkles } from 'lucide-react';
import { THEME } from '../../styles/theme';

export default function LightboxModal({ item, isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !item) return null;

  const handleInquireWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Aishka Clothing, I am admiring "${item.title}" (${item.category}) from your lookbook and would like details regarding sizing and availability.`
    );
    window.open(`https://wa.me/${THEME.brand.whatsapp.replace('+', '')}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#1F1B18]/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative bg-[#F2F7EE] w-full max-w-4xl border border-[#5A664D]/30 shadow-2xl z-10 my-auto overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#1F1B18]/70 text-[#FAF7F2] hover:bg-[#1F1B18] flex items-center justify-center transition-colors focus:outline-none"
          aria-label="Close Lightbox"
        >
          <X size={20} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
          {/* Image Display */}
          <div className="md:col-span-7 bg-[#1F1B18] flex items-center justify-center overflow-hidden min-h-[350px] sm:min-h-[480px]">
            <img
              src={item.image}
              alt={item.alt}
              className="w-full h-full object-cover object-center max-h-[85vh]"
            />
          </div>

          {/* Details Column */}
          <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-[#F2F7EE]">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-1.5 text-[10px] uppercase tracking-[0.25em] text-[#5A664D] font-medium">
                <Sparkles size={12} />
                <span>{item.category}</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-[#1F1B18] font-normal leading-tight">
                {item.title}
              </h3>

              <div className="w-10 h-[1px] bg-[#5A664D]" />

              <p className="text-xs sm:text-sm text-[#5A664D]/90 font-light leading-relaxed font-sans">
                {item.description}
              </p>

              {item.details && (
                <div className="pt-3 border-t border-[#5A664D]/20">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#5A664D] block mb-1.5 font-medium">
                    Textile & Craft Details
                  </span>
                  <p className="text-xs text-[#1F1B18] font-light font-sans bg-[#E8EFE3] p-3 border border-[#5A664D]/20">
                    {item.details}
                  </p>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="pt-6 mt-6 border-t border-[#5A664D]/20 space-y-3">
              <button
                onClick={handleInquireWhatsApp}
                className="w-full py-3.5 bg-[#25D366] text-white text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#20ba59] transition-colors flex items-center justify-center space-x-2 shadow-sm"
              >
                <MessageSquare size={16} />
                <span>Inquire on WhatsApp</span>
              </button>

              <button
                onClick={onClose}
                className="w-full py-2.5 text-center text-xs uppercase tracking-[0.2em] text-[#5A664D] hover:text-[#1F1B18] transition-colors font-sans"
              >
                Back to Lookbook
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
