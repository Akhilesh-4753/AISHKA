import React from 'react';
import { MessageCircle, Mail, Clock, MapPin, ExternalLink } from 'lucide-react';
import { InstagramIcon } from '../common/Icons';
import { THEME } from '../../styles/theme';
import { CONTENT } from '../../data/contentData';

export default function ContactInfo() {
  const { studioInfo } = CONTENT.contact;

  const directMessage = encodeURIComponent(
    'Hello Aishka Clothing, I am interested in inquiring about your collections.'
  );

  return (
    <div className="space-y-6">
      
      {/* WhatsApp Card */}
      <a
        href={`https://wa.me/${studioInfo.whatsapp.replace('+', '')}?text=${directMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group block p-5 sm:p-6 bg-[#FAF7F2] border border-[#C8B6A6]/40 shadow-subtle hover:border-[#25D366] hover:shadow-luxury transition-all duration-300"
      >
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-full bg-[#E7F9EE] flex items-center justify-center text-[#25D366] flex-shrink-0 group-hover:scale-110 transition-transform">
            <MessageCircle size={24} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <h4 className="text-xs uppercase tracking-[0.2em] text-[#1F1B18] font-medium font-sans">
                CHAT ON WHATSAPP
              </h4>
              <ExternalLink size={14} className="text-[#8E7B6C] group-hover:text-[#25D366] transition-colors" />
            </div>
            <p className="text-xs text-[#6E665F] font-light mt-1 font-sans">
              Instant responses for sizing and custom consultations
            </p>
          </div>
        </div>
      </a>

      {/* Instagram Card */}
      <a
        href={THEME.brand.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group block p-5 sm:p-6 bg-[#FAF7F2] border border-[#C8B6A6]/40 shadow-subtle hover:border-[#E1306C] hover:shadow-luxury transition-all duration-300"
      >
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-full bg-[#FDF0F5] flex items-center justify-center text-[#E1306C] flex-shrink-0 group-hover:scale-110 transition-transform">
            <InstagramIcon size={24} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <h4 className="text-xs uppercase tracking-[0.2em] text-[#1F1B18] font-medium font-sans">
                FOLLOW ON INSTAGRAM
              </h4>
              <ExternalLink size={14} className="text-[#8E7B6C] group-hover:text-[#E1306C] transition-colors" />
            </div>
            <p className="text-xs text-[#6E665F] font-light mt-1 font-sans">
              @aishkaclothing · Daily updates & runway stories
            </p>
          </div>
        </div>
      </a>

      {/* Direct Email Card */}
      <a
        href={`mailto:${studioInfo.email}`}
        className="group block p-5 sm:p-6 bg-[#FAF7F2] border border-[#C8B6A6]/40 shadow-subtle hover:border-[#C5A059] hover:shadow-luxury transition-all duration-300"
      >
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-full bg-[#F7F4EE] flex items-center justify-center text-[#C5A059] flex-shrink-0 group-hover:scale-110 transition-transform">
            <Mail size={22} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <h4 className="text-xs uppercase tracking-[0.2em] text-[#1F1B18] font-medium font-sans">
                DIRECT EMAIL
              </h4>
              <ExternalLink size={14} className="text-[#8E7B6C] group-hover:text-[#C5A059] transition-colors" />
            </div>
            <p className="text-xs text-[#6E665F] font-light mt-1 font-sans">
              {studioInfo.email}
            </p>
          </div>
        </div>
      </a>

      {/* Studio Hours & Appointments Card */}
      <div className="p-6 sm:p-7 bg-[#FAF7F2] border border-[#C8B6A6]/40 shadow-subtle space-y-4">
        <h4 className="font-serif text-xl sm:text-2xl text-[#1F1B18] font-normal">
          Studio Hours & Appointments
        </h4>
        
        <div className="space-y-3 text-xs text-[#6E665F] font-light font-sans">
          <div className="flex items-start space-x-3">
            <Clock size={16} className="text-[#C5A059] flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-[#1F1B18] font-medium">{studioInfo.hoursWeekdays}</p>
              <p className="text-[#8E7B6C]">{studioInfo.hoursSunday}</p>
            </div>
          </div>

          <div className="flex items-start space-x-3 pt-2 border-t border-[#C8B6A6]/20">
            <MapPin size={16} className="text-[#C5A059] flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-[#1F1B18] font-medium">{studioInfo.address}</p>
              <p className="text-[#8E7B6C] mt-0.5">{studioInfo.locationDetails}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
