"use client";
import { ArrowRight } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CAT from "@/components/CAT";

const SocialMediaPage: React.FC = () => {
  const services = [
    {
      title: "Custom Strategy Development",
      description:
        "Generic plans? Hard pass. Every brand is unique, and so is our approach. We dig deep into your goals, audience, and market to craft strategies that deliver impact.",
    },
    {
      title: "Content Creation & Management",
      description:
        "Creative, engaging, and always on-brand. As a creative social media agency, we craft posts that don't just get scrolled past but resonate with your audience.",
    },
    {
      title: "Paid Social Campaigns",
      description:
        "Need to amplify your reach? We're a paid social media agency that knows how to stretch every rupee for maximum ROI. Facebook, Instagram, LinkedIn, YouTube — we do it all.",
    },
    {
      title: "Social Media Optimization (SMO)",
      description:
        "If your profiles aren't optimized, you're leaving money on the table. As a social media optimization agency, we ensure every detail works in your favor.",
    },
    {
      title: "Community Management",
      description:
        "Engagement isn't about follower counts; it's about relationships. We help you build communities that trust your brand, champion your mission, and stick around for the long haul.",
    },
    {
      title: "Performance Analytics & Reporting",
      description:
        "We're not a social media marketing firm that throws numbers at you. We deliver real, actionable insights that help you understand what's working, what's not.",
    },
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Grid Overlay */}
      <div
  className="absolute inset-0"
  style={{
    backgroundImage: `
      linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
    `,
    backgroundSize: "90px 90px",
    maskImage: `
      radial-gradient(ellipse 80% 60% at center, black 40%, transparent 80%),
      linear-gradient(to bottom, black 80%, transparent 100%)
    `,
    WebkitMaskImage: `
      radial-gradient(ellipse 80% 60% at center, black 40%, transparent 80%),
      linear-gradient(to bottom, black 80%, transparent 100%)
    `,
    maskComposite: "intersect",
    WebkitMaskComposite: "source-in",
  }}
/>
 <div className="relative z-10">
      <Navbar />
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-12 flex items-center min-h-screen">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center w-full">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 lg:ml-4">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-5xl font-bold text-white leading-tight">
                Looking for a{" "}
                <span className="bg-orange-500 text-white px-2   sm:px-4 py-2 rounded-lg inline-block">
                  Social Media Marketing
                </span>{" "}
                Agency That Actually Delivers?
              </h1>
            </div>

            <div className="space-y-4 text-gray-300 text-base sm:text-lg leading-relaxed">
              <p>
                Let's be real: Social media marketing isn't about just posting
                pretty pictures and waiting for the likes to roll in. It's about
                strategy, creativity, and — oh yeah — results. That's where we
                come in.
              </p>

              <p>
                We're AdLift. A social media marketing agency in India that
                blends strategy, creativity, and data to help your brand stand
                out and grow. Whether you're a small business, a startup, or an
                enterprise, we've got the tools, the know-how, and the passion
                to make your social presence work harder than ever.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg flex items-center justify-center gap-2 sm:gap-3 transition-all duration-300 transform hover:scale-105">
                Start Growing Now
                <div className="bg-orange-600 p-1 sm:p-2 rounded-full">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </button>

              <button className="bg-white text-gray-800 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-gray-100 transition-all duration-300">
                GET IN TOUCH
              </button>
            </div>
          </div>

          {/* Right Side - SVG Image */}
          <div className="relative flex justify-center items-center">
            <div className="relative max-w-full flex items-center justify-center">
              <img
                src="/thumb.svg"
                alt="Thumb up illustration"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-black relative overflow-hidden py-12 sm:py-16">
        <div className="relative z-10 container mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
              What Our Social Media Marketing Services
            </h2>
            <div className="flex items-center justify-center gap-2">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                in India Include
              </span>
              <div className="relative w-8 h-8 sm:w-12 sm:h-12 ml-2">
                <div className="w-8 h-6 sm:w-12 sm:h-10 bg-white rounded-t-full rounded-b-lg flex items-center justify-center">
                  <div className="text-xl sm:text-2xl">❤️</div>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-2 sm:w-6 sm:h-4 bg-gradient-to-r from-orange-500 via-white to-green-500 rounded-sm border border-gray-300"></div>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-14 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="relative">
                <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-4 sm:p-6 h-full transition-all duration-300 hover:bg-gray-800/80 hover:border-gray-600 hover:transform hover:scale-105">
                  <div className="flex justify-center -mt-16 sm:-mt-20 mb-3">
                    <img
                      src={`/cartoon${index + 1}.svg`}
                      alt={`Cartoon ${index + 1}`}
                      className="w-20 h-20 sm:w-28 sm:h-28"
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6 sm:p-10">
        <section className="flex flex-col md:flex-row items-center text-white">
          {/* Text Section */}
          <div className="md:w-1/2 p-4 sm:pl-8">
            <h2 className="text-3xl sm:text-5xl font-bold mb-3 sm:mb-4 text-orange-400">
              Social Media Marketing for Small Businesses and Enterprises
            </h2>
            <p className="text-base sm:text-lg mb-6">
              Whether you're a neighborhood café or a national brand, our social
              media marketing agency for small business and enterprise-level
              solutions are designed for your goals and your budget. And yes,
              we're transparent about our social media marketing agency pricing
              — because surprises are for birthdays, not invoices.
            </p>
            <button className="text-white text-base sm:text-xl bg-orange-500 rounded-2xl px-3 sm:px-4 py-3 sm:py-4">
              Start Growing Now <span>&rarr;</span>
            </button>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 flex justify-end pr-4 sm:pr-10">
            <img
              src="/social-media.jpg"
              alt="YT Shorts Video"
              className="w-full sm:w-4/5 h-auto object-cover"
            />
          </div>
        </section>
      </div>

      <div className="text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Image Section */}
            <div className="lg:w-1/2 p-4">
              <img
                src="/trust.png"
                alt="Social Media Illustration"
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* Text Section */}
            <div className="lg:w-1/2 p-4 sm:p-8">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">
                Why Choose ZOVAQ As Your Social Media Advertising Agency?
              </h2>

              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-orange-500 mr-2 text-lg sm:text-xl">
                    +
                  </span>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold mb-1 sm:mb-2">
                      We're Obsessed with Results
                    </h3>
                    <p className="text-gray-300">
                      We're not here to rack up vanity metrics. As a top social
                      media agency, we care about what actually grows your
                      business.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-orange-500 mr-2 text-lg sm:text-xl">
                    +
                  </span>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold mb-1 sm:mb-2">
                      Creative Meets Strategy
                    </h3>
                    <p className="text-gray-300">
                      We're a creative social media agency that backs every idea
                      with data.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-orange-500 mr-2 text-lg sm:text-xl">
                    +
                  </span>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold mb-1 sm:mb-2">
                      No Jargon, Just Clarity
                    </h3>
                    <p className="text-gray-300">
                      We communicate clearly and effectively, ensuring you
                      understand every step of the process.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-orange-500 mr-2 text-lg sm:text-xl">
                    +
                  </span>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold mb-1 sm:mb-2">
                      Flexible Pricing
                    </h3>
                    <p className="text-gray-300">
                      Our pricing is flexible to meet the needs and budgets of
                      businesses of all sizes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      <CAT />
      <Footer />

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default SocialMediaPage;