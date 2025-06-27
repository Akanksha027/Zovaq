"use client";
import React from "react";
import {
  Search,
  Users,
  Megaphone,
  BarChart3,
  ArrowRight,
  CheckCircle,
  Star,
  Target,
  Heart,
  Zap,
} from "lucide-react";
import CAT from "@/components/CAT";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

const HowItWorksPage = () => {
  const processSteps = [
    {
      id: 1,
      icon: Search,
      title: "Discover the Right Voices",
      description:
        "We carefully select influencers—from elite athletes and top celebrities to leading social media stars—who genuinely align with your brand's values and goals.",
      highlights: [
        "Elite athletes & celebrities",
        "Social media stars",
        "Brand value alignment",
        "Goal-oriented selection",
      ],
      color: "from-orange-500 to-red-500",
    },
    {
      id: 2,
      icon: Users,
      title: "Creative Collaboration",
      description:
        "Our team works hand-in-hand with you and your chosen voices to craft unique, compelling campaigns that resonate with your target audience.",
      highlights: [
        "Hand-in-hand teamwork",
        "Unique campaign crafting",
        "Compelling content creation",
        "Target audience focus",
      ],
      color: "from-orange-500 to-yellow-500",
    },
    {
      id: 3,
      icon: Heart,
      title: "Authentic Storytelling",
      description:
        "We empower influencers to share your brand's story in their own authentic way, ensuring every campaign feels real, relatable, and engaging.",
      highlights: [
        "Authentic voice preservation",
        "Brand story integration",
        "Real & relatable content",
        "Engaging narratives",
      ],
      color: "from-orange-500 to-pink-500",
    },
    {
      id: 4,
      icon: Megaphone,
      title: "Amplify Your Reach",
      description:
        "With our expertise, your campaigns reach millions across digital platforms, maximizing visibility and driving meaningful results.",
      highlights: [
        "Multi-platform reach",
        "Millions of impressions",
        "Maximum visibility",
        "Meaningful results",
      ],
      color: "from-orange-500 to-purple-500",
    },
    {
      id: 5,
      icon: BarChart3,
      title: "Measure Success",
      description:
        "We track performance, analyze results, and provide transparent reporting so you can see the real impact of every partnership.",
      highlights: [
        "Performance tracking",
        "Results analysis",
        "Transparent reporting",
        "Impact measurement",
      ],
      color: "from-orange-500 to-blue-500",
    },
  ];

  return (
    <div className="relative z-10">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="flex-1 space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-orange-500 leading-tight">
                How It Works
              </h1>
            </div>

            <div className="space-y-4 text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              <p>
                Let&apos;s be real: Social media marketing isn&apos;t about just posting
                pretty pictures and waiting for the likes to roll in. It&apos;s about
                strategy, creativity, and — oh yeah — results. That&apos;s where we
                come in.
              </p>

              <p>
                We&apos;re AdLift. A social media marketing agency in India that blends
                strategy, creativity, and data to help your brand stand out and
                grow. Whether you&apos;re a small business, a startup, or an
                enterprise, we&apos;ve got the tools, the know-how, and the passion to
                make your social presence work harder than ever.
              </p>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex-1 flex justify-center items-center max-w-md lg:max-w-lg">
            <div className="relative w-full">
              <Image
                src="/service1.png"
                alt="Thumb up illustration"
                width={500}
                height={400}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Process Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 sm:mb-16 lg:mb-20">
        <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-orange-500/20 rounded-full text-orange-400 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
          <Zap className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
          Our Proven Process
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-orange-400 to-orange-600 bg-clip-text text-transparent">
          How It Works
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
          From discovering the perfect voices to measuring campaign success, our systematic approach ensures maximum impact for your brand.
        </p>
      </div>

      {/* Process Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24 lg:mb-32">
        <div className="relative">
          {/* Desktop connecting line */}
          <div className="hidden xl:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8 lg:gap-6">
            {processSteps.map((step, index) => (
              <div key={step.id} className="relative group">
                {/* Mobile connecting arrow */}
                {index < processSteps.length - 1 && (
                  <div className="xl:hidden absolute -bottom-3 sm:-bottom-4 left-1/2 transform -translate-x-1/2 z-10">
                    <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500 rotate-90 sm:rotate-0 lg:rotate-90 xl:rotate-0" />
                  </div>
                )}
                
                {/* Card */}
                <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4 sm:p-6 h-full transition-all duration-500 hover:transform hover:-translate-y-2 hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/10 group-hover:bg-gradient-to-br group-hover:from-gray-900/90 group-hover:to-gray-800/70">
                  
                  {/* Step Number */}
                  <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-lg">
                    {step.id}
                  </div>
                  
                  {/* Icon */}
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-3 sm:space-y-4">
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                      {step.description}
                    </p>
                    
                    {/* Highlights */}
                    <div className="space-y-1.5 sm:space-y-2 pt-2">
                      {step.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-orange-500 rounded-full flex-shrink-0"></div>
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24 lg:mb-32">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white to-orange-400 bg-clip-text text-transparent">
            Why Our Process Works
          </h2>
          <p className="text-sm sm:text-base lg:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Our systematic approach delivers consistent results across all campaign types and industries.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 sm:p-8 text-center hover:border-orange-500/50 transition-all duration-300">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Target className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 text-white">Precision Targeting</h3>
            <p className="text-gray-300 text-sm sm:text-base">Every influencer is hand-selected to match your exact brand requirements and audience demographics.</p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 sm:p-8 text-center hover:border-orange-500/50 transition-all duration-300">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Star className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 text-white">Premium Quality</h3>
            <p className="text-gray-300 text-sm sm:text-base">We work exclusively with top-tier influencers who maintain the highest standards of content quality.</p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 sm:p-8 text-center hover:border-orange-500/50 transition-all duration-300 md:col-span-2 lg:col-span-1">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 text-white">Proven Results</h3>
            <p className="text-gray-300 text-sm sm:text-base">Our data-driven approach ensures measurable outcomes and transparent reporting for every campaign.</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <CAT/>
      <Footer/>
    </div>
  );
};

export default HowItWorksPage;