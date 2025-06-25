"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import { InView } from "react-intersection-observer";
import Link from "next/link";

const Main = () => {
  return (
    <div className="min-h-screen text-white overflow-hidden relative">
      {/* SVG Image in the top right corner */}
      <img
        src="/plane.svg"
        alt="Plane"
        className="absolute top-4 right-4 w-20 h-20 sm:w-28 sm:h-28 md:w-48 md:h-48 lg:w-38 lg:h-38 animate-pulse"
        style={{ zIndex: 50, filter: "brightness(0) invert(1)" }}
      />

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-12 py-8 relative">
        {/* Left Content */}
        <div className="flex-1 max-w-2xl px-4">
          <InView threshold={0.3} triggerOnce>
            {({ inView, ref }) => (
              <h1
                ref={ref}
                className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 transition-all duration-500 ease-out ${
                  inView
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-8 scale-95"
                }`}
              >
                The leading <span className="text-orange-500">influencer</span>
                <br />
                marketing agency
              </h1>
            )}
          </InView>

          <InView threshold={0.3} triggerOnce>
            {({ inView, ref }) => (
              <p
                ref={ref}
                className={`text-gray-300 text-base sm:text-lg mb-6 leading-relaxed transition-all duration-500 ease-out delay-100 ${
                  inView
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-6"
                }`}
              >
                Influencer marketing is the best way to grow your business. We
                work directly with a massive network of TikTok, Instagram, and
                YouTube creators.
              </p>
            )}
          </InView>

          <InView threshold={0.3} triggerOnce>
            {({ inView, ref }) => (
              <div
                ref={ref}
                className={`flex flex-col sm:flex-row gap-4 mb-8 transition-all duration-500 ease-out delay-200 ${
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
              >
                <Link href="/Contact">
                  <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    Get started
                  </button>
                </Link>
                <button className="border border-gray-600 hover:border-gray-400 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 hover:shadow-lg group">
                  See how it works 
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            )}
          </InView>

          <InView threshold={0.3} triggerOnce>
            {({ inView, ref }) => (
              <p
                ref={ref}
                className={`text-gray-400 mb-6 transition-all duration-500 ease-out delay-300 ${
                  inView
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-6"
                }`}
              >
                Trusted by more than 50,000+ users.
              </p>
            )}
          </InView>

          <InView threshold={0.3} triggerOnce>
            {({ inView, ref }) => (
              <div
                ref={ref}
                className={`flex flex-row gap-8 justify-start transition-all duration-500 ease-out delay-400 ${
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                {[
                  { number: "60k+", label: "Clients" },
                  { number: "40k+", label: "Satisfied" },
                  { number: "20k+", label: "Influencers" }
                ].map((stat, index) => (
                  <div 
                    key={stat.label}
                    className={`transition-all duration-300 hover:scale-110 ${
                      inView ? `animate-fade-in-up` : ""
                    }`}
                    style={{ animationDelay: `${500 + index * 100}ms` }}
                  >
                    <div className="text-2xl sm:text-3xl font-bold text-orange-500">
                      {stat.number}
                    </div>
                    <div className="text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}
          </InView>
        </div>

        {/* Right Content - Image Grid */}
        <div className="flex-1 px-4 max-w-2xl">
          <div className="grid grid-cols-3 grid-rows-3 gap-1 h-full w-full max-w-[600px] mx-auto">
            {[...Array(9)].map((_, index) => (
              <InView key={index} threshold={0.2} triggerOnce>
                {({ inView, ref }) => (
                  <div
                    ref={ref}
                    className={`rounded-${
                      index % 3 === 0 ? "full" : "lg"
                    } overflow-hidden h-48 w-48 transition-all duration-500 ease-out hover:scale-105 hover:shadow-xl cursor-pointer ${
                      inView
                        ? "opacity-100 translate-y-0 rotate-0"
                        : "opacity-0 translate-y-6 -rotate-3"
                    }`}
                    style={{ 
                      transitionDelay: `${index * 100}ms`,
                      transformOrigin: "center"
                    }}
                  >
                    <img
                      src={`/i${index + 2}.jpg`}
                      alt={`Influencer ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                )}
              </InView>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default Main;