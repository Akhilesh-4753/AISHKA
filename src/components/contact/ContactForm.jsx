import React, { useState } from 'react';
import { CheckCircle2, MessageSquare } from 'lucide-react';
import { THEME } from '../../styles/theme';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    inquiryType: 'Everyday Casual Wear Collection',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleWhatsAppSend = () => {
    const text = `*Inquiry via Website - Aishka Clothing*%0A` +
      `*Name:* ${formData.fullName}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Email:* ${formData.email || 'N/A'}%0A` +
      `*Type:* ${formData.inquiryType}%0A` +
      `*Message:* ${formData.message}`;
    window.open(`https://wa.me/${THEME.brand.whatsapp.replace('+', '')}?text=${text}`, '_blank');
  };

  return (
    <div className="bg-[#FAF7F2] p-6 sm:p-8 lg:p-10 border border-[#C8B6A6]/40 shadow-subtle">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-[10px] uppercase tracking-[0.2em] text-[#1F1B18] mb-1.5 font-medium">
                FULL NAME *
              </label>
              <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Ayesha Sharma"
                className="w-full bg-[#FAF7F2] border border-[#C8B6A6]/60 px-4 py-3 text-xs text-[#1F1B18] placeholder-[#8E7B6C]/50 focus:border-[#C5A059] focus:outline-none transition-colors"
              />
            </div>
            
            <div>
              <label className="block text-[10px] uppercase tracking-[0.2em] text-[#1F1B18] mb-1.5 font-medium">
                PHONE / WHATSAPP *
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className="w-full bg-[#FAF7F2] border border-[#C8B6A6]/60 px-4 py-3 text-xs text-[#1F1B18] placeholder-[#8E7B6C]/50 focus:border-[#C5A059] focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] uppercase tracking-[0.2em] text-[#1F1B18] mb-1.5 font-medium">
              EMAIL ADDRESS
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.name@domain.com"
              className="w-full bg-[#FAF7F2] border border-[#C8B6A6]/60 px-4 py-3 text-xs text-[#1F1B18] placeholder-[#8E7B6C]/50 focus:border-[#C5A059] focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-[10px] uppercase tracking-[0.2em] text-[#1F1B18] mb-1.5 font-medium">
              INQUIRY TYPE
            </label>
            <select
              name="inquiryType"
              value={formData.inquiryType}
              onChange={handleChange}
              className="w-full bg-[#FAF7F2] border border-[#C8B6A6]/60 px-4 py-3 text-xs text-[#1F1B18] focus:border-[#C5A059] focus:outline-none transition-colors"
            >
              <option value="Everyday Casual Wear Collection">Everyday Casual Wear Collection</option>
              <option value="Bespoke Bridal & Festive Couture">Bespoke Bridal & Festive Couture</option>
              <option value="Made-to-Measure Custom Sizing">Made-to-Measure Custom Sizing</option>
              <option value="Virtual Styling Consultation">Virtual Styling Consultation</option>
              <option value="General Studio Inquiries">General Studio Inquiries</option>
            </select>
          </div>

          <div>
            <label className="block text-[10px] uppercase tracking-[0.2em] text-[#1F1B18] mb-1.5 font-medium">
              MESSAGE OR REQUIREMENT DETAILS
            </label>
            <textarea
              name="message"
              required
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about the piece you are looking for, preferred occasion date, or size queries..."
              className="w-full bg-[#FAF7F2] border border-[#C8B6A6]/60 px-4 py-3 text-xs text-[#1F1B18] placeholder-[#8E7B6C]/50 focus:border-[#C5A059] focus:outline-none transition-colors resize-none"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-[#1F1B18] text-[#FAF7F2] text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#C5A059] hover:text-[#FAF7F2] transition-colors border border-[#1F1B18] focus:outline-none disabled:opacity-50"
            >
              {loading ? 'SENDING INQUIRY...' : 'SEND MESSAGE'}
            </button>
          </div>
        </form>
      ) : (
        <div className="py-12 text-center space-y-4 animate-fade-in">
          <div className="w-16 h-16 rounded-full bg-[#EFECE6] border border-[#C5A059] flex items-center justify-center mx-auto text-[#C5A059]">
            <CheckCircle2 size={32} />
          </div>
          <h3 className="font-serif text-3xl text-[#1F1B18] font-normal">Thank You</h3>
          <p className="text-xs text-[#6E665F] font-light max-w-md mx-auto leading-relaxed font-sans">
            We have received your message regarding <span className="font-medium text-[#1F1B18]">{formData.inquiryType}</span>. Our concierge will be in touch shortly.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
            <button
              onClick={handleWhatsAppSend}
              className="px-6 py-3 bg-[#25D366] text-white text-xs uppercase tracking-wider font-sans font-medium flex items-center justify-center space-x-2"
            >
              <MessageSquare size={16} />
              <span>Forward to WhatsApp</span>
            </button>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  fullName: '',
                  phone: '',
                  email: '',
                  inquiryType: 'Everyday Casual Wear Collection',
                  message: '',
                });
              }}
              className="px-6 py-3 border border-[#1F1B18] text-[#1F1B18] text-xs uppercase tracking-wider font-sans"
            >
              Send Another Note
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
