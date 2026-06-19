import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface IntroVideoProps {
  onComplete: () => void;
}

export const IntroVideo: React.FC<IntroVideoProps> = ({ onComplete }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
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
    if (videoRef.current) {
      videoRef.current.play().catch(err => {
        console.error("Video autoplay failed:", err);
        // Do not immediately skip here on the first try, let it be. 
        // Sometimes play() fails initially but works on interaction.
      });
    }
  }, [currentVideoIndex]);

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
          className="w-full h-full object-cover"
          playsInline
          autoPlay
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

      {/* Text Overlay for the second video */}
      {currentVideoIndex === 1 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute inset-0 z-30 flex flex-col items-center justify-start pt-24 sm:pt-32 text-center pointer-events-none"
        >
          <span className="text-[#D4AF37] uppercase tracking-[0.4em] sm:tracking-[0.6em] text-xs sm:text-sm font-medium mb-4 sm:mb-6 drop-shadow-md">
            Wedding Invitation
          </span>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display text-brand-primary-light drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] font-bold">
            Dilshan <span className="text-[#D4AF37] mx-2 sm:mx-4 italic">&</span> Wathsala
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

