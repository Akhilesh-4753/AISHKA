import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, MessageSquare } from 'lucide-react';
import { THEME } from '../../styles/theme';

export default function AppointmentModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Bridal & Festive Couture Consultation',
    date: '',
    timeSlot: 'Morning (11:00 AM - 1:00 PM)',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = `*New Atelier Appointment Request - Aishka Clothing*%0A` +
      `*Name:* ${formData.name || 'Not provided'}%0A` +
      `*Phone:* ${formData.phone || 'Not provided'}%0A` +
      `*Service:* ${formData.service}%0A` +
      `*Preferred Date:* ${formData.date || 'TBD'}%0A` +
      `*Slot:* ${formData.timeSlot}%0A` +
      `*Notes:* ${formData.notes || 'None'}`;
    window.open(`https://wa.me/${THEME.brand.whatsapp.replace('+', '')}?text=${text}`, '_blank');
    onClose();
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#1F1B18]/75 backdrop-blur-sm transition-opacity"
        onClick={resetAndClose}
      />

      {/* Modal Container */}
      <div className="relative bg-[#FAF7F2] w-full max-w-xl border border-[#C8B6A6]/40 shadow-2xl z-10 my-8 overflow-hidden">
        {/* Top Gold Border Accent */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#FAF7F2] via-[#C5A059] to-[#FAF7F2]" />

        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-4 right-4 p-2 text-[#1F1B18]/70 hover:text-[#1F1B18] transition-colors focus:outline-none"
          aria-label="Close Appointment Modal"
        >
          <X size={20} />
        </button>

        <div className="p-6 sm:p-8">
          {!submitted ? (
            <>
              <div className="text-center mb-6">
                <div className="inline-flex items-center space-x-2 text-[10px] tracking-[0.25em] uppercase text-[#C5A059] font-medium mb-1">
                  <Sparkles size={12} />
                  <span>Private Atelier Fitting</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#1F1B18] font-normal tracking-wide">
                  Book an Appointment
                </h3>
                <p className="text-xs text-[#8E7B6C] mt-1 font-light max-w-md mx-auto">
                  Experience personal draping, custom bespoke sizing, and private consultations with our creative team.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.18em] text-[#1F1B18] mb-1 font-medium">
                    Service of Interest *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#FAF7F2] border border-[#C8B6A6]/60 px-3.5 py-2.5 text-xs text-[#1F1B18] focus:border-[#C5A059] focus:outline-none transition-colors"
                  >
                    <option value="Bridal & Festive Couture Consultation">Bespoke Bridal & Festive Couture Consultation</option>
                    <option value="Everyday Casual Wear Custom Sizing">Everyday Casual Wear Made-to-Measure</option>
                    <option value="Virtual Styling Video Consultation">Virtual Styling Video Call (Worldwide)</option>
                    <option value="Atelier Visit & Fabric Touch">Atelier Visit & Fabric Exploration</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.18em] text-[#1F1B18] mb-1 font-medium">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Ayesha Sharma"
                      className="w-full bg-white/70 border border-[#C8B6A6]/60 px-3.5 py-2.5 text-xs text-[#1F1B18] placeholder-[#8E7B6C]/50 focus:border-[#C5A059] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.18em] text-[#1F1B18] mb-1 font-medium">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 98765 43210"
                      className="w-full bg-white/70 border border-[#C8B6A6]/60 px-3.5 py-2.5 text-xs text-[#1F1B18] placeholder-[#8E7B6C]/50 focus:border-[#C5A059] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.18em] text-[#1F1B18] mb-1 font-medium">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/70 border border-[#C8B6A6]/60 px-3.5 py-2.5 text-xs text-[#1F1B18] focus:border-[#C5A059] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.18em] text-[#1F1B18] mb-1 font-medium">
                      Preferred Time Slot *
                    </label>
                    <select
                      name="timeSlot"
                      value={formData.timeSlot}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#FAF7F2] border border-[#C8B6A6]/60 px-3.5 py-2.5 text-xs text-[#1F1B18] focus:border-[#C5A059] focus:outline-none transition-colors"
                    >
                      <option value="Morning (11:00 AM - 1:00 PM)">Morning (11:00 AM - 1:00 PM)</option>
                      <option value="Afternoon (2:00 PM - 4:30 PM)">Afternoon (2:00 PM - 4:30 PM)</option>
                      <option value="Evening (5:00 PM - 7:30 PM)">Evening (5:00 PM - 7:30 PM)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.18em] text-[#1F1B18] mb-1 font-medium">
                    Notes or Specific Requirements (Optional)
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows="2"
                    placeholder="Occasion date, preferred fabrics, or silhouette queries..."
                    className="w-full bg-white/70 border border-[#C8B6A6]/60 px-3.5 py-2 text-xs text-[#1F1B18] placeholder-[#8E7B6C]/50 focus:border-[#C5A059] focus:outline-none transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 py-3 bg-[#1F1B18] text-[#FAF7F2] text-xs uppercase tracking-[0.2em] font-sans font-medium hover:bg-[#FAF7F2] hover:text-[#1F1B18] border border-[#1F1B18] transition-all"
                  >
                    SUBMIT REQUEST
                  </button>
                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="flex-1 py-3 bg-[#25D366] text-white text-xs uppercase tracking-[0.18em] font-sans font-medium hover:bg-[#20ba59] transition-all flex items-center justify-center space-x-2"
                  >
                    <MessageSquare size={15} />
                    <span>BOOK VIA WHATSAPP</span>
                  </button>
                </div>
              </form>
            </>
          ) : (
            <div className="py-8 text-center space-y-4 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-[#FAF7F2] border-2 border-[#C5A059] flex items-center justify-center mx-auto text-[#C5A059]">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="font-serif text-3xl text-[#1F1B18]">Request Received</h3>
              <p className="text-xs text-[#8E7B6C] font-light max-w-sm mx-auto leading-relaxed">
                Thank you, <span className="font-medium text-[#1F1B18]">{formData.name}</span>. Our atelier concierge will contact you via WhatsApp/Phone within 24 hours to confirm your slot for <span className="font-medium text-[#1F1B18]">{formData.service}</span>.
              </p>
              <div className="pt-4 flex justify-center space-x-3">
                <button
                  onClick={handleWhatsAppDirect}
                  className="px-5 py-2.5 bg-[#25D366] text-white text-xs uppercase tracking-wider font-sans font-medium"
                >
                  Message Us on WhatsApp Now
                </button>
                <button
                  onClick={resetAndClose}
                  className="px-5 py-2.5 border border-[#1F1B18] text-[#1F1B18] text-xs uppercase tracking-wider font-sans"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
