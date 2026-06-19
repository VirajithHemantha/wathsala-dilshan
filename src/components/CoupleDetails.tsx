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
          <div className="mb-4 flex flex-col items-center">
            <span className="text-brand-primary uppercase tracking-[0.4em] text-xs sm:text-sm font-bold mb-4 block flex flex-col items-center gap-1">
              <span>The Groom</span>
              <span className="font-sinhala tracking-wide text-[14px]">මනාලයා</span>
            </span>
            <h3 className="text-6xl sm:text-7xl lg:text-8xl font-display text-stone-800 drop-shadow-sm mb-3 flex flex-col items-center gap-2">
              <span className="font-sinhala text-4xl sm:text-5xl font-normal">දිල්ෂාන්</span>
              <span>Dilshan</span>
            </h3>
            <div className="flex flex-col items-center gap-2 mt-2">
              <p className="text-stone-500/90 font-serif italic text-lg sm:text-xl">Son of Mr & Mrs Jayarathna</p>
              <p className="text-stone-500/90 font-sinhala text-base">ජයරත්න යුවළගේ පුත්</p>
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
          <div className="mb-4 flex flex-col items-center">
            <span className="text-brand-primary uppercase tracking-[0.4em] text-xs sm:text-sm font-bold mb-4 block flex flex-col items-center gap-1">
              <span>The Bride</span>
              <span className="font-sinhala tracking-wide text-[14px]">මනාලිය</span>
            </span>
            <h3 className="text-6xl sm:text-7xl lg:text-8xl font-display text-stone-800 drop-shadow-sm mb-3 flex flex-col items-center gap-2">
              <span className="font-sinhala text-4xl sm:text-5xl font-normal">වත්සලා</span>
              <span>Wathsala</span>
            </h3>
            <div className="flex flex-col items-center gap-2 mt-2">
              <p className="text-stone-500/90 font-serif italic text-lg sm:text-xl">Daughter of Mr & Mrs Kelum</p>
              <p className="text-stone-500/90 font-sinhala text-base">කැළුම් යුවළගේ දියණිය</p>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};
