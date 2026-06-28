import React from 'react';
import { motion } from 'motion/react';
import { Clock, Calendar, Heart, Sparkles, MapPin } from 'lucide-react';

export const PoruwaEvent: React.FC = () => {
  return (
    <div className="pt-0 pb-16 sm:py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[70%] h-[70%] bg-gradient-radial from-poruwa-light/30 to-transparent rounded-full blur-[100px] pointer-events-none" />

        <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24">
          <div className="lg:w-1/2 relative z-10 w-full">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative bg-[url('/mobile-bg.jpeg')] sm:bg-none bg-[length:100%_100%] bg-center bg-no-repeat -mx-4 sm:mx-0 rounded-none sm:rounded-none pt-48 pb-20 px-8 sm:p-0 shadow-lg sm:shadow-none overflow-hidden"
            >
              <div className="relative z-10">
                <div className="inline-flex items-center gap-4 mb-6 ml-6 sm:ml-0">
                  <div className="w-12 sm:w-20 h-[1px] bg-gradient-to-l from-poruwa-primary/60 to-transparent" />
                  <div className="flex flex-col items-center">
                    <span className="text-poruwa-primary uppercase tracking-[0.4em] sm:tracking-[0.5em] text-[10px] sm:text-[11px] font-bold drop-shadow-sm mb-1">
                      The Celebration
                    </span>
                    <span className="text-poruwa-primary font-sinhala tracking-wide text-[12px] sm:text-[13px] font-bold drop-shadow-sm">
                      සැමරුම
                    </span>
                  </div>
                </div>

                <h2 className="text-3xl sm:text-6xl lg:text-7xl font-display font-bold text-black mb-4 sm:mb-8 leading-[1.1] drop-shadow-sm flex flex-col gap-1 sm:gap-3 ml-10 sm:ml-0">
                  <span className="font-sinhala font-bold text-2xl sm:text-5xl lg:text-6xl">පෝරුව සහ <span className="italic font-bold text-poruwa-primary">විවාහ මංගල්‍යය</span></span>
                  <span className="font-bold">Poruwa & <span className="italic font-bold text-poruwa-primary">Reception</span></span>
                </h2>

                <div className="flex flex-col gap-4 mb-6 sm:mb-16 max-w-lg">
                  <p className="text-stone-800/90 font-serif text-sm sm:text-xl leading-relaxed px-12 sm:px-0">
                    A celebration of tradition and love. Join us for a beautiful afternoon ceremony followed by an evening of dining and dancing.
                  </p>
                </div>

                <div className="relative space-y-4 sm:space-y-10 ml-10 sm:ml-12 border-l-[1.5px] border-poruwa-primary/40 pl-10 sm:pl-12 py-2 sm:py-4">

                  {/* Event Location & Date */}
                  <div className="relative group">
                    <div className="absolute top-1/2 -translate-y-1/2 -left-[64px] sm:-left-[74px] w-12 h-12 bg-white rounded-full border border-poruwa-primary/30 shadow-sm flex items-center justify-center group-hover:border-poruwa-primary transition-all duration-500">
                      <Calendar className="w-5 h-5 text-poruwa-primary" />
                    </div>
                    <div>
                      <h4 className="font-serif text-2xl sm:text-3xl text-stone-800 mb-1 group-hover:text-poruwa-primary transition-colors duration-500 flex items-center gap-3">
                        <span>Friday, July 31, 2026</span>
                      </h4>
                      <h5 className="font-sinhala text-lg text-stone-700/90 mb-2">2026 ජූලි 31 සිකුරාදා</h5>
                    </div>
                  </div>

                  {/* Timeline Items */}
                  <div className="relative group">
                    <div className="absolute top-1/2 -translate-y-1/2 -left-[64px] sm:-left-[74px] w-12 h-12 bg-white rounded-full border border-poruwa-primary/30 shadow-sm flex items-center justify-center group-hover:border-poruwa-primary transition-all duration-500">
                      <Clock className="w-5 h-5 text-poruwa-light" />
                    </div>
                    <div>
                      <h4 className="font-serif text-xl sm:text-2xl text-stone-800 mb-1 group-hover:text-poruwa-primary transition-colors duration-500 flex items-center gap-2">
                        <span>09:30 AM - 04:00 PM</span>
                        <span className="font-sinhala text-base text-stone-900/90 hidden sm:inline">(පෙ.ව. 09:30 - ප.ව. 04:00)</span>
                      </h4>
                      <p className="text-stone-700/90 text-xs sm:text-sm uppercase tracking-[0.2em] font-bold">Function</p>
                      <p className="text-stone-700/90 font-sinhala text-sm sm:text-base mt-1">මංගල උත්සවය</p>
                    </div>
                  </div>

                  <div className="relative group">
                    <div className="absolute top-1/2 -translate-y-1/2 -left-[64px] sm:-left-[74px] w-12 h-12 bg-poruwa-primary rounded-full border border-poruwa-primary shadow-md flex items-center justify-center transform group-hover:scale-110 transition-all duration-500">
                      <Heart className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-serif text-xl sm:text-2xl text-stone-800 mb-1 group-hover:text-poruwa-primary transition-colors duration-500 flex items-center gap-2">
                        <span>10:00 AM</span>
                        <span className="font-sinhala text-base text-stone-900/90 hidden sm:inline">(පෙ.ව. 10:00)</span>
                      </h4>
                      <p className="text-stone-700/90 text-xs sm:text-sm uppercase tracking-[0.2em] font-bold">Poruwa Ceremony</p>
                      <p className="text-stone-700/90 font-sinhala text-sm sm:text-base mt-1">පෝරුවේ චාරිත්‍ර</p>
                    </div>
                  </div>


                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2 w-full relative mt-16 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative"
            >
              <div className="absolute -inset-4 sm:-inset-6 border-[2px] border-poruwa-light/60 rounded-[3rem] -z-10 -translate-x-4 sm:-translate-x-8 translate-y-4 sm:translate-y-8" />

              <div className="relative aspect-[3/4] sm:aspect-[4/5] rounded-[3rem] overflow-hidden border-[6px] sm:border-[8px] border-white shadow-xl bg-poruwa-bg group flex items-center justify-center">
                <img
                  src="/8.jpg"
                  alt="Poruwa Ceremony"
                  className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-poruwa-primary/20 to-transparent mix-blend-overlay opacity-60 group-hover:opacity-30 transition-opacity duration-1000" />
              </div>


            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
