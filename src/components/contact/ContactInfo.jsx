import React from 'react';
import { Mail, Clock, MapPin, ExternalLink } from 'lucide-react';
import { InstagramIcon, WhatsAppIcon } from '../common/Icons';
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
        className="group block p-5 sm:p-6 bg-[#F2F7EE] border border-[#5A664D]/25 shadow-subtle hover:border-[#25D366] hover:shadow-luxury transition-all duration-300"
      >
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] flex-shrink-0 group-hover:scale-110 transition-transform">
            <WhatsAppIcon size={24} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <h4 className="text-xs uppercase tracking-[0.2em] text-[#1F1B18] font-medium font-sans">
                CHAT ON WHATSAPP
              </h4>
              <ExternalLink size={14} className="text-[#5A664D] group-hover:text-[#25D366] transition-colors" />
            </div>
            <p className="text-xs text-[#5A664D] font-light mt-1 font-sans">
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
        className="group block p-5 sm:p-6 bg-[#F2F7EE] border border-[#5A664D]/25 shadow-subtle hover:border-[#E1306C] hover:shadow-luxury transition-all duration-300"
      >
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-full bg-[#E1306C]/10 flex items-center justify-center text-[#E1306C] flex-shrink-0 group-hover:scale-110 transition-transform">
            <InstagramIcon size={24} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <h4 className="text-xs uppercase tracking-[0.2em] text-[#1F1B18] font-medium font-sans">
                FOLLOW ON INSTAGRAM
              </h4>
              <ExternalLink size={14} className="text-[#5A664D] group-hover:text-[#E1306C] transition-colors" />
            </div>
            <p className="text-xs text-[#5A664D] font-light mt-1 font-sans">
              @aishkaclothing · Daily updates & runway stories
            </p>
          </div>
        </div>
      </a>

      {/* Direct Email Card */}
      <a
        href={`mailto:${studioInfo.email}`}
        className="group block p-5 sm:p-6 bg-[#F2F7EE] border border-[#5A664D]/25 shadow-subtle hover:border-[#5A664D] hover:shadow-luxury transition-all duration-300"
      >
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-full bg-[#5A664D]/10 flex items-center justify-center text-[#5A664D] flex-shrink-0 group-hover:scale-110 transition-transform">
            <Mail size={22} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <h4 className="text-xs uppercase tracking-[0.2em] text-[#1F1B18] font-medium font-sans">
                DIRECT EMAIL
              </h4>
              <ExternalLink size={14} className="text-[#5A664D] group-hover:text-[#5A664D] transition-colors" />
            </div>
            <p className="text-xs text-[#5A664D] font-light mt-1 font-sans">
              {studioInfo.email}
            </p>
          </div>
        </div>
      </a>

      {/* Studio Hours & Appointments Card */}
      <div className="p-6 sm:p-7 bg-[#F2F7EE] border border-[#5A664D]/25 shadow-subtle space-y-4">
        <h4 className="font-serif text-xl sm:text-2xl text-[#1F1B18] font-normal">
          Studio Hours & Appointments
        </h4>
        
        <div className="space-y-3 text-xs text-[#5A664D] font-light font-sans">
          <div className="flex items-start space-x-3">
            <Clock size={16} className="text-[#5A664D] flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-[#1F1B18] font-medium">{studioInfo.hoursWeekdays}</p>
              <p className="text-[#5A664D]/80">{studioInfo.hoursSunday}</p>
            </div>
          </div>

          <div className="flex items-start space-x-3 pt-2 border-t border-[#5A664D]/15">
            <MapPin size={16} className="text-[#5A664D] flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-[#1F1B18] font-medium">{studioInfo.address}</p>
              <p className="text-[#5A664D]/80 mt-0.5">{studioInfo.locationDetails}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
