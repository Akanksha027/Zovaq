"use client";
import React from 'react';
import Image from 'next/image';
const AboutUsSection: React.FC = () => {
  return (
    <section className="relative text-white p-8 lg:p-16 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top left plane */}
        
  {/* SVG Image in the top right corner */}
  <Image
        src="/plane2.svg"
        alt="Plane"
        className="absolute bottom-0 right-4 w-38 h-38"
        style={{ zIndex: 50, filter: 'brightness(0) invert(1)' }} // Change color to white and ensure it's on top
      />

        {/* Chat bubble */}
        <div className="absolute top-32 right-72 text-gray-600">
          <svg width="48" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
            <text x="12" y="14" textAnchor="middle" className="text-xs font-mono fill-gray-400">Hi, AI!</text>
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <p className="text-orange-400 font-medium mb-4 tracking-wide">About us</p>
              <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
                Know <span className="text-orange-400">more</span> about our{' '}
                <span className="relative">
                  superiority
                  <svg
                    className="absolute -top-4 -right-8 text-orange-400 opacity-70"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="m9 10 2 2 4-4"/>
                    <path d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20z"/>
                  </svg>
                </span>
              </h2>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
              We have a proven record of successful influencer marketing campaigns and we know how to make any influencer campaign work. Our process is simple and effective and our team is passionate and looking to bring your company to the next level.
            </p>

            <button className="group flex items-center gap-3 bg-transparent border border-orange-400 text-orange-400 px-6 py-3 rounded-lg hover:bg-orange-400 hover:text-white transition-all duration-300">
              <span className="font-medium">Know more</span>
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* Right Content - Image Grid */}
          <div className="relative">
            {/* Decorative border elements */}
            <div className="absolute -top-8 -left-8 w-32 h-32 border-2 border-orange-400 rounded-3xl opacity-50"></div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 border-2 border-orange-400 rounded-3xl opacity-30"></div>

            <div className="grid grid-cols-12 grid-rows-8 gap-4 h-96">
              {/* Top left image */}
              <div className="col-span-7 col-start-1 row-span-4 row-start-1 rounded-2xl overflow-hidden">
                <Image src="/i5.jpg" alt="Team Collaboration" className="w-full h-full object-cover" />
              </div>

              {/* Top right image */}
              <div className="col-span-5 col-start-8 row-span-4 row-start-1 rounded-2xl overflow-hidden">
                <Image src="/i6.jpg" alt="Team Collaboration" className="w-full h-full object-cover" />
              </div>

              {/* Bottom image */}
              <div className="col-span-12 col-start-1 row-span-4 row-start-5 rounded-2xl overflow-hidden">
                <Image src="/i7.jpg" alt="Innovation & Growth" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
