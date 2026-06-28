import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Heart } from 'lucide-react';
import { CornerFlowers } from './CornerFlowers';

export const HeroContent: React.FC = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const prefix = searchParams.get('prefix');
  const name = searchParams.get('name');
  
  const invitationText = (prefix && name)
    ? `We cordially invite ${prefix} ${name}`
    : `Together with our families, we joyfully invite you to join us`;

  return (
    <section className="relative min-h-[100dvh] pt-16 pb-12 sm:py-32 flex items-start sm:items-center justify-center overflow-hidden">
      <CornerFlowers position="all" opacity={0.8} scale={1.8} />
      {/* Background Image with Elegant Overlays */}
      <div className="absolute inset-0 z-0 bg-brand-ivory overflow-hidden">
        <img
          src="/ChatGPT Image Jun 20, 2026, 03_42_23 AM.png"
          alt="Wedding Background"
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-white/20" />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 via-transparent to-brand-primary/5" />
        <div className="absolute inset-0 bg-black/5 mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center"
        >
          {/* Subtle top decoration */}
          <div className="flex items-center gap-3 mb-8">
            <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-brand-primary/60 to-transparent" />
            <Heart className="w-5 h-5 text-brand-pink fill-brand-pink/40 drop-shadow-sm" />
            <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-brand-primary/60 to-transparent" />
          </div>

          <div className="flex flex-col items-center justify-center mb-10 text-center space-y-2">
            <span className="text-brand-primary uppercase tracking-[0.6em] text-xs sm:text-sm font-bold drop-shadow-md font-sans">
              The Celebration of Love
            </span>
          </div>

          <div className="relative mb-12 w-full flex justify-center text-center">
            <h1 className="relative text-6xl sm:text-8xl lg:text-9xl font-display text-stone-900 leading-tight drop-shadow-xl font-bold flex flex-col items-center">
              <div>
                Dilshan <br className="sm:hidden" />
                <span className="text-brand-primary italic font-semibold mx-4 sm:mx-8 text-5xl sm:text-7xl lg:text-8xl inline-block -translate-y-2 sm:-translate-y-4">&</span>
                <br className="sm:hidden" />
                Wathsala
              </div>
            </h1>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <div className="hidden sm:block h-[1px] w-24 bg-gradient-to-r from-transparent to-brand-primary/60" />
            <div className="flex flex-col items-center gap-4 max-w-2xl text-center px-4">
              <p className="text-xl sm:text-3xl font-serif italic text-stone-900 tracking-wide leading-relaxed drop-shadow-sm font-medium">
                {invitationText}
              </p>
            </div>
            <div className="hidden sm:block h-[1px] w-24 bg-gradient-to-l from-transparent to-brand-primary/60" />
          </div>

          {/* Enhanced Date pill with premium glass effect */}
          <div className="inline-block relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary/40 via-brand-primary-light/40 to-brand-primary/40 rounded-full blur-[8px] opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-300 transform group-hover:scale-105" />
            <div className="relative px-4 sm:px-16 py-4 sm:py-6 bg-white/70 backdrop-blur-lg border border-brand-primary/50 rounded-full shadow-[0_8px_30px_rgba(70,130,180,0.1)] flex items-center justify-center">
              <span className="relative text-xl sm:text-4xl font-serif text-brand-primary tracking-[0.1em] sm:tracking-[0.3em] font-medium drop-shadow-sm flex items-center gap-2 sm:gap-4 whitespace-nowrap">
                <Sparkles className="w-4 h-4 text-brand-primary-light" />
                31 . 07 . 2026
                <Sparkles className="w-4 h-4 text-brand-primary-light" />
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
