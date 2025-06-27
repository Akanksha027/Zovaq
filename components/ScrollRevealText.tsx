"use client";

import React, { useEffect, useRef, useState } from 'react';

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

  return (
    <div className="bg-black text-white overflow-hidden">
      <div className="flex items-center justify-center"></div>

      <div ref={containerRef} className=" flex items-center justify-center px-4 py-10 md:py-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="space-y-4 md:space-y-6 lg:space-y-8">
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 lg:gap-4">
              <span className="text-2xl md:text-2xl lg:text-4xl xl:text-5xl font-bold tracking-tight" style={getTextStyle(0.02, 0)}>FROM</span>
              <span className="text-2xl md:text-2xl lg:text-4xl xl:text-5xl font-bold tracking-tight" style={getTextStyle(0.04, 0.02)}>EMERGING</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 lg:gap-4">
              <span className="text-2xl md:text-2xl lg:text-4xl xl:text-5xl font-bold tracking-tight" style={getTextStyle(0.08, 0.04)}>CREATORS</span>
              <span className="text-2xl md:text-2xl lg:text-4xl xl:text-5xl font-bold tracking-tight" style={getTextStyle(0.12, 0.06)}>TO</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 lg:gap-4">
              <span className="text-2xl md:text-2xl lg:text-4xl xl:text-5xl font-bold tracking-tight" style={getTextStyle(0.16, 0.08)}>TRUSTED</span>
              <span className="text-2xl md:text-2xl lg:text-4xl xl:text-5xl font-bold tracking-tight" style={getTextStyle(0.20, 0.10)}>INFLUENCERS</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 lg:gap-4">
              <span className="text-2xl md:text-2xl lg:text-4xl xl:text-5xl font-bold tracking-tight" style={getTextStyle(0.24, 0.12)}>WE</span>
              <span className="text-2xl md:text-2xl lg:text-4xl xl:text-5xl font-bold tracking-tight" style={getTextStyle(0.28, 0.14)}>PARTNER</span>
              <span className="text-2xl md:text-2xl lg:text-4xl xl:text-5xl font-bold tracking-tight" style={getTextStyle(0.32, 0.16)}>WITH</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 lg:gap-4">
              <span className="text-2xl md:text-2xl lg:text-4xl xl:text-5xl font-bold tracking-tight" style={getTextStyle(0.36, 0.18)}>THE</span>
              <span className="text-2xl md:text-2xl lg:text-4xl xl:text-5xl font-bold tracking-tight italic" style={getTextStyle(0.40, 0.20)}>RIGHT</span>
              <span className="text-2xl md:text-2xl lg:text-4xl xl:text-5xl font-bold tracking-tight" style={getTextStyle(0.44, 0.22)}>VOICES</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 lg:gap-4">
              <span className="text-2xl md:text-2xl lg:text-4xl xl:text-5xl font-bold tracking-tight" style={getTextStyle(0.46, 0.24)}>TO</span>
              <span className="text-2xl md:text-2xl lg:text-4xl xl:text-5xl font-bold tracking-tight" style={getTextStyle(0.48, 0.26)}>HELP</span>
              <span className="text-2xl md:text-2xl lg:text-4xl xl:text-5xl font-bold tracking-tight" style={getTextStyle(0.50, 0.28)}>YOUR</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 lg:gap-4">
              <span className="text-2xl md:text-2xl lg:text-4xl xl:text-5xl font-bold tracking-tight" style={getTextStyle(0.52, 0.30)}>BRAND</span>
              <span className="text-2xl md:text-2xl lg:text-4xl xl:text-5xl font-bold tracking-tight" style={getTextStyle(0.52, 0.30)}>GROW</span>
              <span className="text-2xl md:text-2xl lg:text-4xl xl:text-5xl font-bold tracking-tight" style={getTextStyle(0.54, 0.30)}>.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollRevealText;
