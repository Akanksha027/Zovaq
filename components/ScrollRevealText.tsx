"use client";
import React, { useEffect, useRef, useState } from 'react';
import { Great_Vibes } from 'next/font/google';
import Image from 'next/image';

// Load the Great Vibes font
const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
});

const ScrollRevealText: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const element = containerRef.current;
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const startReveal = windowHeight * 0.9;
      const endReveal = windowHeight * 0.1;

      let progress = 0;

      if (rect.top <= startReveal && rect.top >= endReveal - rect.height) {
        const scrolled = startReveal - rect.top;
        const maxScroll = startReveal - endReveal + rect.height;
        progress = Math.min(Math.max(scrolled / maxScroll, 0), 1);
      } else if (rect.top < endReveal - rect.height) {
        progress = 1;
      }

      setScrollProgress(progress);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const profileImages = [
    "/i2.jpg",
    "/i3.jpg",
    "/i4.jpg"
  ];

  const getTextStyle = (triggerPoint: number, delay: number = 0) => {
    const adjustedProgress = Math.max(0, scrollProgress - delay);
    const elementProgress = Math.min(adjustedProgress * 4, 1);

    return {
      color: adjustedProgress > triggerPoint ? '#ffffff' : '#404040',
      textShadow: adjustedProgress > triggerPoint
        ? `0 0 30px rgba(255,255,255,0.3), 0 0 60px rgba(255,255,255,0.1)`
        : 'none',
      transform: `translateY(${(1 - elementProgress) * 40}px)`,
      opacity: 0.3 + (elementProgress * 0.7),
      filter: `brightness(${0.5 + (elementProgress * 0.7)})`,
      transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    };
  };

  const getImageStyle = (triggerPoint: number, delay: number = 0) => {
    const adjustedProgress = Math.max(0, scrollProgress - delay);
    const elementProgress = Math.min(adjustedProgress * 4, 1);

    return {
      transform: `translateY(${(1 - elementProgress) * 30}px) scale(${0.9 + (elementProgress * 0.1)})`,
      opacity: 0.4 + (elementProgress * 0.6),
      filter: `brightness(${0.5 + (elementProgress * 0.7)}) contrast(${0.8 + (elementProgress * 0.4)})`,
      boxShadow: elementProgress > 0.3
        ? `0 15px 40px rgba(0,0,0,0.3), 0 0 30px rgba(255,255,255,0.1)`
        : '0 5px 20px rgba(0,0,0,0.2)',
      transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    };
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="flex items-center justify-center"></div>

      <div ref={containerRef} className="min-h-screen flex items-center justify-center px-4 py-10 md:py-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="space-y-4 md:space-y-6 lg:space-y-8">
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 lg:gap-4">
              <span className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black tracking-tight" style={getTextStyle(0.02, 0)}>FROM</span>
              <div className="relative w-12 h-16 md:w-16 md:h-20 lg:w-20 lg:h-24 xl:w-24 xl:h-28 rounded-xl overflow-hidden mx-1" style={getImageStyle(0.02, 0.01)}>
                <Image src={profileImages[0]} alt="Athlete" width={200} height={250} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 mix-blend-overlay"></div>
              </div>
              <span className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black tracking-tight" style={getTextStyle(0.04, 0.02)}>ATHLETES</span>
              <span className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black tracking-tight" style={getTextStyle(0.04, 0.02)}>+</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 lg:gap-4">
              <span className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black tracking-tight" style={getTextStyle(0.08, 0.04)}>CELEBRITIES</span>
              <div className="relative w-12 h-16 md:w-16 md:h-20 lg:w-20 lg:h-24 xl:w-24 xl:h-28 rounded-xl overflow-hidden mx-1" style={getImageStyle(0.08, 0.05)}>
                <Image src={profileImages[1]} alt="Celebrity" width={200} height={250} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/30 to-yellow-500/30 mix-blend-overlay"></div>
              </div>
              <span className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black tracking-tight" style={getTextStyle(0.12, 0.06)}>TO</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 lg:gap-4">
              <span className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black tracking-tight" style={getTextStyle(0.16, 0.08)}>SOCIAL</span>
              <div className="relative w-12 h-16 md:w-16 md:h-20 lg:w-20 lg:h-24 xl:w-24 xl:h-28 rounded-xl overflow-hidden mx-1" style={getImageStyle(0.16, 0.09)}>
                <Image src={profileImages[2]} alt="Social Media Star" width={200} height={250} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 to-red-500/30 mix-blend-overlay"></div>
              </div>
              <span className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black tracking-tight" style={getTextStyle(0.20, 0.10)}>MEDIA</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 lg:gap-4">
              <span className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black tracking-tight" style={getTextStyle(0.24, 0.12)}>STARS,</span>
              <span className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black tracking-tight" style={getTextStyle(0.28, 0.14)}>WE</span>
              <span className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black tracking-tight" style={getTextStyle(0.32, 0.16)}>SELECT</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 lg:gap-4">
              <span className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black tracking-tight" style={getTextStyle(0.36, 0.18)}>THE</span>
              <span className={`text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black tracking-tight italic decoration-white/40 ${greatVibes.className}`} style={{ ...getTextStyle(0.40, 0.20), backgroundClip: 'text' }}>MOST</span>
              <span className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black tracking-tight" style={getTextStyle(0.44, 0.22)}>AUTHENTIC</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 lg:gap-4">
              <span className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black tracking-tight" style={getTextStyle(0.46, 0.24)}>VOICES</span>
              <span className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black tracking-tight" style={getTextStyle(0.48, 0.26)}>TO</span>
              <span className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black tracking-tight" style={getTextStyle(0.50, 0.28)}>PARTNER</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 lg:gap-4">
              <span className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black tracking-tight" style={getTextStyle(0.52, 0.30)}>WITH</span>
              <span className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black tracking-tight" style={getTextStyle(0.52, 0.30)}>YOUR</span>
              <span className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black tracking-tight" style={getTextStyle(0.54, 0.30)}>BRAND</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </div>
  );
};

export default ScrollRevealText;
