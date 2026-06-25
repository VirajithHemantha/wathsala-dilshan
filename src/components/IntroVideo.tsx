import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface IntroVideoProps {
  onComplete: () => void;
  onStart?: () => void;
}

export const IntroVideo: React.FC<IntroVideoProps> = ({ onComplete, onStart }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const videos = [
    "/open.mp4",
    "/Wedding_invitation_intro_video_202606200348.mp4"
  ];

  const handleVideoEnded = () => {
    if (currentVideoIndex < videos.length - 1) {
      setCurrentVideoIndex(prev => prev + 1);
    } else {
      onComplete();
    }
  };

  useEffect(() => {
    if (hasStarted && videoRef.current) {
      videoRef.current.play().catch(err => {
        console.error("Video autoplay failed:", err);
        // Do not immediately skip here on the first try, let it be. 
        // Sometimes play() fails initially but works on interaction.
      });
    }
  }, [currentVideoIndex, hasStarted]);

  const handleStart = () => {
    setHasStarted(true);
    if (onStart) onStart();
  };

  return (
    <div className="fixed inset-0 z-[200] bg-black flex items-center justify-center overflow-hidden">
      <motion.div
        key="video"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="relative w-full h-full bg-black"
      >
        <video
          ref={videoRef}
          src={videos[currentVideoIndex]}
          className={`w-full h-full object-cover transition-all duration-1000 ${!hasStarted ? 'blur-xl scale-110' : 'blur-0 scale-100'}`}
          playsInline
          muted
          preload="auto"
          onEnded={handleVideoEnded}
          onError={(e) => {
            console.error("Video error event:", e);
            handleVideoEnded();
          }}
        />

        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 via-transparent to-black/40" />
      </motion.div>

      {/* Landing Overlay */}
      {!hasStarted && (
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/40 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center text-center px-6"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display text-white mb-8 drop-shadow-xl font-bold">
              Dilshan <span className="text-brand-primary-light italic mx-2">&</span> Wathsala
            </h1>
            <p className="text-white/80 font-serif mb-12 text-lg sm:text-xl max-w-md">
              We invite you to celebrate our special day with us.
            </p>
            <button
              onClick={handleStart}
              className="px-10 py-5 bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/50 text-white rounded-full tracking-[0.2em] uppercase text-xs sm:text-sm transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_10px_30px_rgba(0,0,0,0.3)] font-bold flex items-center gap-3"
            >
              View Invitation
            </button>
          </motion.div>
        </div>
      )}

      {/* Text Overlay for the second video */}
      {currentVideoIndex === 1 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute inset-0 z-30 flex flex-col items-end sm:items-center justify-start pt-24 sm:pt-32 pr-6 sm:pr-0 text-right sm:text-center pointer-events-none"
        >
          <span className="text-black uppercase tracking-[0.4em] sm:tracking-[0.6em] text-xs sm:text-sm font-medium mb-4 sm:mb-6 drop-shadow-md">
            Wedding Invitation
          </span>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display text-brand-primary-light drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] font-bold leading-tight">
            <span className="block">Dilshan</span>
            <span className="text-black italic block text-4xl sm:text-6xl my-1 sm:my-2">&</span>
            <span className="block">Wathsala</span>
          </h1>
        </motion.div>
      )}

      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent opacity-60" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent opacity-60" />
      </div>

    </div>
  );
};

