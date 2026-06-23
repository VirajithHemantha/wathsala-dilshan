import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Heart } from 'lucide-react';

export const CoupleDetails: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
      {/* Decorative ambient background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-radial from-brand-primary/15 to-transparent rounded-full blur-[100px] pointer-events-none" />



      <div className="flex flex-col items-center justify-center gap-16 sm:gap-24 relative z-10">



        {/* Groom Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="text-center w-full max-w-xl mx-auto"
        >
          <div className="flex flex-col items-center">
            <span className="text-brand-primary uppercase tracking-[0.5em] text-sm sm:text-base font-bold mb-3">
              The Groom
            </span>

            <div className="flex items-center justify-center w-full max-w-[240px] mb-4 opacity-70">
              <div className="w-1 h-1 rounded-full bg-brand-primary mr-2"></div>
              <div className="h-[1px] flex-1 bg-brand-primary"></div>
              <div className="w-2 h-2 rotate-45 bg-brand-primary mx-2"></div>
              <div className="h-[1px] flex-1 bg-brand-primary"></div>
              <div className="w-1 h-1 rounded-full bg-brand-primary ml-2"></div>
            </div>

            <span className="text-brand-primary font-sinhala tracking-wider text-xl sm:text-2xl mb-4">
              මනාලයා
            </span>

            <h3 className="flex flex-col items-center gap-1 mb-6">
              <span className="text-stone-500 font-sinhala text-4xl sm:text-5xl font-normal mb-2">දිල්ෂාන්</span>
              <span className="text-7xl sm:text-8xl lg:text-9xl font-display text-brand-primary drop-shadow-sm leading-none">Dilshan</span>
            </h3>

            <div className="flex items-center justify-center w-full max-w-[240px] mb-6 opacity-70">
              <div className="w-1 h-1 rounded-full bg-brand-primary mr-2"></div>
              <div className="h-[1px] flex-1 bg-brand-primary"></div>
              <div className="w-2 h-2 rotate-45 bg-brand-primary mx-2"></div>
              <div className="h-[1px] flex-1 bg-brand-primary"></div>
              <div className="w-1 h-1 rounded-full bg-brand-primary ml-2"></div>
            </div>

            <div className="flex flex-col items-center gap-2">
              <p className="text-stone-600 font-serif italic text-xl sm:text-2xl">Son of Mr & Mrs Jayarathna</p>
              <p className="text-stone-500 font-sinhala text-lg sm:text-xl">ජයරත්න යුවළගේ පුත්</p>
            </div>
          </div>
        </motion.div>

        {/* Bride Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="text-center w-full max-w-xl mx-auto"
        >
          <div className="flex flex-col items-center">
            <span className="text-brand-primary uppercase tracking-[0.5em] text-sm sm:text-base font-bold mb-3">
              The Bride
            </span>

            <div className="flex items-center justify-center w-full max-w-[240px] mb-4 opacity-70">
              <div className="w-1 h-1 rounded-full bg-brand-primary mr-2"></div>
              <div className="h-[1px] flex-1 bg-brand-primary"></div>
              <div className="w-2 h-2 rotate-45 bg-brand-primary mx-2"></div>
              <div className="h-[1px] flex-1 bg-brand-primary"></div>
              <div className="w-1 h-1 rounded-full bg-brand-primary ml-2"></div>
            </div>

            <span className="text-brand-primary font-sinhala tracking-wider text-xl sm:text-2xl mb-4">
              මනාලිය
            </span>

            <h3 className="flex flex-col items-center gap-1 mb-6">
              <span className="text-stone-500 font-sinhala text-4xl sm:text-5xl font-normal mb-2">වත්සලා</span>
              <span className="text-7xl sm:text-8xl lg:text-9xl font-display text-brand-primary drop-shadow-sm leading-none">Wathsala</span>
            </h3>

            <div className="flex items-center justify-center w-full max-w-[240px] mb-6 opacity-70">
              <div className="w-1 h-1 rounded-full bg-brand-primary mr-2"></div>
              <div className="h-[1px] flex-1 bg-brand-primary"></div>
              <div className="w-2 h-2 rotate-45 bg-brand-primary mx-2"></div>
              <div className="h-[1px] flex-1 bg-brand-primary"></div>
              <div className="w-1 h-1 rounded-full bg-brand-primary ml-2"></div>
            </div>

            <div className="flex flex-col items-center gap-2">
              <p className="text-stone-600 font-serif italic text-xl sm:text-2xl">Daughter of Mr & Mrs Kelum</p>
              <p className="text-stone-500 font-sinhala text-lg sm:text-xl">කැළුම් යුවළගේ දියණිය</p>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};
