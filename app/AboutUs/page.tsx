"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

interface BeliefCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  index: number;
}

const HorizontalLine = () => (
  <div
    className="
      h-[1.1px] 
      w-full 
      my-4 
      bg-gradient-to-r 
      from-transparent 
      via-gray-100 
      to-transparent
      animate-pulse
    "
  />
);

const BeliefCard: React.FC<BeliefCardProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
  index,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    // Fallback: show cards after 2 seconds if intersection observer doesn't work
    const fallbackTimer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-700 hover:scale-105 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{
        transitionDelay: `${index * 150}ms`,
        backgroundColor: "black", // Ensure background color
      }}
    >
      <div className="relative h-48 sm:h-56 md:h-64 w-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-700 hover:scale-110"
        />
      </div>
      <div className="p-4 sm:p-6">
        <div className="flex items-center justify-center mb-4">
          <div className="text-xl sm:text-2xl font-bold text-white animate-pulse">
            {"</>"}
          </div>
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-orange-500 mb-3 text-center transition-colors duration-300 hover:text-orange-400">
          {title}
        </h3>
        <p className="text-white text-xs sm:text-sm leading-relaxed">
          {description}
        </p>
        <div className="mt-6 flex justify-center">
  <button className="border border-gray-600 hover:border-gray-400 px-3 py-2 sm:px-4 sm:py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 hover:shadow-lg group">
    See Details →
  </button>
</div>

      </div>
    </div>
  );
};

const WhatWeBelieveIn: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Hero animation
    if (heroRef.current) {
      heroRef.current.classList.add("animate-fade-in");
    }

    // Section animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-in-left");
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const beliefs: BeliefCardProps[] = [
    {
      imageSrc: "/i4.jpg",
      imageAlt: "Modern workspace with laptop and coffee",
      title: "Innovation Through Technology",
      description:
        "Over the years at ZOVAQ, we've put a lot of thought into what it is that makes us who we are. The qualities that unite us, that make us such an effective team, and drive our passion for connecting brands with authentic voices in the digital landscape.",
      index: 0,
    },
    {
      imageSrc: "/i3.jpg",
      imageAlt: "Professional business meeting and collaboration",
      title: "Collaborative Excellence",
      description:
        "We believe in the power of meaningful partnerships. Our approach focuses on bringing together brands and influencers in ways that create genuine value, foster long-term relationships, and deliver measurable results that exceed expectations.",
      index: 1,
    },
    {
      imageSrc: "/i2.jpg",
      imageAlt: "Creative professional working in modern office",
      title: "Authentic Storytelling",
      description:
        "At our core, we understand that every brand has a unique story to tell. We're dedicated to helping you find the right voice, the right audience, and the right moment to share your message in a way that resonates and creates lasting impact.",
      index: 2,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out forwards;
        }
      `}</style>

      <Navbar />

      {/* Hero Section */}
      <div className="flex flex-1 px-4 sm:px-6 lg:px-0">
        <div className="hidden lg:block lg:w-1/12"></div>
        <div
          ref={heroRef}
          className="w-full lg:w-11/12 flex items-start p-4 sm:p-6 lg:p-10 pt-8 sm:pt-12 lg:pt-20 opacity-0"
        >
          <div className="max-w-full lg:max-w-3xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white leading-tight">
              Building Genuine Connections Between Brands and Influencers
              <br className="hidden sm:block" />
              <span className="block mt-2">
                Turning Collaboration Into Impactful Stories
              </span>
              <br className="hidden sm:block" />
              <span className="block mt-2">
                Driven by Passion, Guided by Trust
              </span>
            </h1>
            <div className="flex flex-col sm:flex-row items-start pt-8 sm:pt-12 lg:pt-20 mb-4">
              <div className="border-t-4 border-gray-500 w-16 sm:w-24 mb-4 sm:mb-0 sm:mr-6 sm:mt-3"></div>
              <p className="text-base sm:text-lg lg:text-2xl text-white leading-relaxed">
                At ZOVAQ, we are passionate about connecting brands and
                influencers to create meaningful stories and impactful
                collaborations. Our mission is to help brands find the right
                voice and influencers build long‑lasting connections with their
                audience. We believe in the power of authentic marketing —
                making sure every campaign is tailored, every partnership is
                genuine, and every result delivers value. Together, we're
                shaping the future of digital influence, one collaboration at a
                time.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* What We Believe In Section */}
      <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div
            ref={(el) => (sectionRefs.current[0] = el)}
            className="text-center mb-12 sm:mb-16 opacity-0"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-500 mb-4 transition-colors duration-300 hover:text-orange-400">
              What we believe in
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-white max-w-3xl mx-auto">
              Over the years at ZOVAQ, we've put a lot of thought into what it
              is that makes us who we are. The qualities that unite us, that
              make us such an effective team, and drive our success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-white">
            {beliefs.map((belief, index) => (
              <BeliefCard
                key={index}
                imageSrc={belief.imageSrc}
                imageAlt={belief.imageAlt}
                title={belief.title}
                description={belief.description}
                index={belief.index}
              />
            ))}
          </div>
        </div>

        {/* Powerful Ideas & Sales Acceleration Section */}
        <div className="py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <HorizontalLine />
            <div
              ref={(el) => (sectionRefs.current[1] = el)}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center opacity-0"
            >
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8 leading-tight">
                  Powerful ideas &<br />
                  sales acceleration
                </h2>
              </div>
              <div>
                <p className="text-base sm:text-lg text-white leading-relaxed">
                  We are a software development firm specializing in digital
                  products. We build beautiful, functional and cross-platform
                  solutions that are accessible to all.
                </p>
              </div>
            </div>
            <HorizontalLine />
          </div>
        </div>

        {/* Meet Our Team Section */}
        <div className="py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div
              ref={(el) => (sectionRefs.current[2] = el)}
              className="mb-12 sm:mb-16 opacity-0"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight max-w-full lg:max-w-2xl">
                Meet our team of creators, designers, and world-class problem
                solvers
              </h2>
              <p className="text-base sm:text-lg text-white max-w-full lg:max-w-xl">
                "To become the company that customers want, it takes a group of
                passionate people. Get to know the people who lead"
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
              {/* Team Member 1 */}
              <div className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 rounded-lg hover:scale-105 transform">
                <div
                  className="relative h-64 sm:h-80 lg:h-96"
                  style={{
                    backgroundImage: "url(/profile.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
                        Akanksha Singh
                      </h3>
                      <p className="text-white text-sm sm:text-base">
                        Founder CEO
                      </p>
                    </div>
                    <div className="flex space-x-3 sm:space-x-4 text-lg sm:text-xl text-white">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center hover:bg-gray-900 cursor-pointer transition-all duration-300 hover:scale-110">
                        <FaInstagram />
                      </div>
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center hover:bg-gray-900 cursor-pointer transition-all duration-300 hover:scale-110">
                        <FaLinkedin />
                      </div>
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center hover:bg-gray-900 cursor-pointer transition-all duration-300 hover:scale-110">
                        <FaEnvelope />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Team Member 2 */}
              <div className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 rounded-lg hover:scale-105 transform">
                <div
                  className="relative h-64 sm:h-80 lg:h-96"
                  style={{
                    backgroundImage: "url(/i7.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        Roger Dzawin
                      </h3>
                      <p className="text-white text-xs sm:text-sm">
                        Chief Technology Officer
                      </p>
                    </div>
                    <div className="flex space-x-3 sm:space-x-4 text-lg sm:text-xl text-white">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center hover:bg-gray-900 cursor-pointer transition-all duration-300 hover:scale-110">
                        <FaInstagram />
                      </div>
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center hover:bg-gray-900 cursor-pointer transition-all duration-300 hover:scale-110">
                        <FaLinkedin />
                      </div>
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center hover:bg-gray-900 cursor-pointer transition-all duration-300 hover:scale-110">
                        <FaEnvelope />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Team Member 3 */}
              <div className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 rounded-lg hover:scale-105 transform">
                <div
                  className="relative h-64 sm:h-80 lg:h-96"
                  style={{
                    backgroundImage: "url(/i7.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        Roger Dzawin
                      </h3>
                      <p className="text-white text-xs sm:text-sm">
                        Chief Technology Officer
                      </p>
                    </div>
                    <div className="flex space-x-3 sm:space-x-4 text-lg sm:text-xl text-white">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center hover:bg-gray-900 cursor-pointer transition-all duration-300 hover:scale-110">
                        <FaInstagram />
                      </div>
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center hover:bg-gray-900 cursor-pointer transition-all duration-300 hover:scale-110">
                        <FaLinkedin />
                      </div>
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center hover:bg-gray-900 cursor-pointer transition-all duration-300 hover:scale-110">
                        <FaEnvelope />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <HorizontalLine />

        {/* Join Our Team Section */}
        <div className="py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div
              ref={(el) => (sectionRefs.current[3] = el)}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center opacity-0"
            >
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8 leading-tight">
                  Join our team, The one with the master touch
                </h2>
              </div>
              <div>
                <p className="text-base sm:text-lg text-white mb-6 sm:mb-8 leading-relaxed">
                  We believe it takes great people to make a great product.
                  That's why we hire not only the perfect professional fits, but
                  people who embody our company values.
                </p>
                <button className="inline-flex items-center bg-gray-900 text-white px-6 sm:px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
                  See Open Position
                  <svg
                    className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default WhatWeBelieveIn;
