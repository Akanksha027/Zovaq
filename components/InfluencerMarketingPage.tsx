"use client";
import React, { useState, useEffect } from 'react';

const InfluencerMarketingPage: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const steps = [
    {
      id: 1,
      title: "Selecting the Right Influencers",
      content: "Just give us a call on +919899537363 OR reach out through our contact form, and our influencer marketing experts will discuss your requirements within 1-2 hours. Together, we'll explore your brand's goals and what exactly you want to achieve with our influencer marketing services to align with your vision. Our approach involves a careful selection of platforms and influencers in marketing, ensuring customized influencer marketing campaigns are perfectly aligned with your goals for unparalleled engagement and better ROI."
    },
    {
      id: 2,
      title: "Crafting Engaging Campaigns",
      content: "Collaboratively, we embark on an Influencer Campaign that not only engages but also subtly outshines your competition. Through personalized influencer marketing strategy, we generate content that resonates, encouraging deeper interaction with your brand and steering your campaign towards its objectives with precision."
    },
    {
      id: 3,
      title: "Achieving Brand Success",
      content: "Our powerful influencer marketing platform serves as the launchpad for stories that inspire and convert. This strategic deployment of influencer marketing techniques boosts awareness, leads, and sales, driving tangible results in ROI, sales, and ultimately, profit. Experience the transformative power of collaboration with India’s top influencers."
    }
  ];

  return (
    <div className="text-white min-h-screen overflow-hidden">
      {/* Hero Section - How We Strategize */}
      <section className="relative py-20 px-8">
        {/* Background decorative elements */}
        {/* <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 text-orange-400 opacity-30 animate-pulse">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <div className="absolute bottom-20 right-10 text-orange-400 opacity-20 animate-bounce">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
            </svg>
          </div>
        </div> */}

        <div className={`max-w-6xl mx-auto transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Main heading */}
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              How We Strategize the{' '}
              <span className="text-transparent bg-clip-text bg-orange-400">
                Influencer Marketing
              </span>{' '}
              Campaigns
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We help brands unlock the potential of effective Influencer Marketing in just 3 steps:-
            </p>
          </div>

          {/* Steps Section */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`bg-gray-800/50 rounded-3xl p-8 border border-gray-700/50 backdrop-blur-sm transition-all duration-700 transform ${
                  activeStep === step.id ? 'scale-[1.02] border-orange-400' : 'hover:scale-[1.01]'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex flex-col lg:flex-row items-start gap-8">
                  {/* Step Content */}
                  <div className="flex-1">
                    <button
                      onClick={() => setActiveStep(activeStep === step.id ? 0 : step.id)}
                      className="flex items-center gap-4 text-left w-full group"
                    >
                      <div className="flex items-center gap-4">
                        <span className={`text-2xl font-bold transition-colors ${
                          activeStep === step.id ? 'text-orange-400' : 'text-gray-500'
                        }`}>
                          {activeStep === step.id ? '−' : '+'}
                        </span>
                        <h3 className="text-2xl lg:text-3xl font-bold group-hover:text-orange-400 transition-colors">
                          {step.id}. {step.title}
                        </h3>
                      </div>
                    </button>

                    <div className={`overflow-hidden transition-all duration-500 ${
                      activeStep === step.id ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'
                    }`}>
                      <p className="text-gray-300 text-lg leading-relaxed ml-12">
                        {step.content}
                      </p>
                    </div>
                  </div>

                  {/* Influencer Image for Step 2 and 3 */}
                  {step.id === 2 && activeStep === 2 && (
                    <div className="relative w-80 h-60 rounded-2xl overflow-hidden bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 p-1">
                      <img src="https://via.placeholder.com/320x240" alt="Crafting Campaigns" className="w-full h-full object-cover" />
                    </div>
                  )}

                  {step.id === 3 && activeStep === 3 && (
                    <div className="relative w-80 h-60 rounded-2xl overflow-hidden bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 p-1">
                      <img src="https://via.placeholder.com/320x240" alt="Achieving Success" className="w-full h-full object-cover" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes float {
          0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
          50% { transform: translate(-50%, -50%) translateY(-10px); }
        }
      `}</style>
    </div>
  );
};

export default InfluencerMarketingPage;
