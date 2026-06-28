import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation, Compass, Map } from 'lucide-react';

export const AddressesSection: React.FC = () => {
  return (
    <div className="max-w-[85rem] mx-auto px-6 relative py-12">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-brand-champagne/20 to-transparent blur-3xl pointer-events-none -z-10"></div>

      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-0 mt-10">

        <div className="w-full lg:w-[45%] z-20" style={{ opacity: 1, transform: 'none' }}>
          <div className="bg-white/90 backdrop-blur-2xl p-10 sm:p-14 lg:p-16 rounded-[2.5rem] shadow-[0_30px_60px_rgba(176,137,104,0.15)] border border-brand-champagne/30 lg:translate-x-12 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-champagne via-brand-champagne to-brand-primary"></div>

            <div className="mb-10 relative z-10">
              <div className="inline-flex items-center gap-4 mb-6">
                <span className="text-brand-primary uppercase tracking-[0.5em] text-[10px] sm:text-[11px] font-bold drop-shadow-sm">
                  The Venue
                </span>
                <div className="w-16 h-[1px] bg-gradient-to-r from-brand-primary/60 to-transparent"></div>
              </div>

              <h2 className="text-5xl sm:text-6xl font-display text-stone-800 mb-6 leading-tight drop-shadow-sm">
                Where We <br />
                <span className="italic font-light text-brand-primary">Celebrate</span>
              </h2>

              <div className="flex items-start gap-5 mt-10">
                <div className="w-12 h-12 bg-stone-50 rounded-full border border-brand-champagne/40 shadow-inner flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                  <MapPin className="text-brand-primary w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-2xl font-serif text-stone-800 mb-1">Seethawaka Regency</p>
                  <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-black leading-relaxed">(Diamond Hall), Awissawella</p>
                  <p className="text-stone-800/90 italic font-serif text-lg leading-relaxed max-w-sm mb-10 pl-4 border-l-[1.5px] border-brand-champagne/40">
                    "A serene and elegant setting where we will begin our new chapter together."
                  </p>
                  <a href="https://maps.app.goo.gl/hjooGiuAzNGGos427" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-stone-800 text-brand-champagne px-8 py-4 rounded-full font-sans tracking-[0.2em] text-xs uppercase hover:bg-stone-900 hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)] transition-all duration-300 active:scale-95 group/btn">
                    <Navigation className="w-4 h-4 text-brand-gold group-hover/btn:rotate-45 transition-transform duration-300" aria-hidden="true" />
                    Open Live Location
                  </a>
                </div>
              </div>
            </div>

            <Compass className="absolute -bottom-16 -right-16 w-64 h-64 text-brand-champagne/10 rotate-12 group-hover:rotate-45 transition-transform duration-[3s]" aria-hidden="true" />
          </div>
        </div>

        <div className="w-full lg:w-[65%] h-[500px] sm:h-[600px] lg:h-[700px] relative z-10" style={{ opacity: 1, transform: 'none' }}>
          <div className="absolute -inset-4 sm:-inset-6 border-[2px] border-brand-champagne/30 rounded-[3rem] -z-10 translate-x-2 sm:translate-x-4 translate-y-2 sm:translate-y-4"></div>
          <div className="w-full h-full rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-[8px] sm:border-[12px] border-white relative group/map">
            <div className="absolute inset-0 bg-brand-champagne/10 mix-blend-multiply pointer-events-none z-20 group-hover/map:opacity-0 transition-opacity duration-1000"></div>
            <iframe
              title="Seethawaka Regency Location"
              src="https://maps.google.com/maps?q=Seethawaka%20Regency,%20Awissawella&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full object-cover grayscale-[30%] group-hover/map:grayscale-0 transition-all duration-1000 ease-in-out"
              style={{ border: 0, filter: 'contrast(1.1) saturate(1.2)' }}>
            </iframe>

            <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-brand-champagne/30 shadow-lg flex items-center gap-2 pointer-events-none z-30">
              <Map className="w-4 h-4 text-brand-primary animate-pulse" aria-hidden="true" />
              <span className="text-[9px] uppercase tracking-widest font-bold text-stone-900">Live Map</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
