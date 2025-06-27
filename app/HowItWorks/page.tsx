"use client";
import React from "react";
import {
  Search,
  Users,
  Lightbulb,
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
const HowItWorksPage = () => {
  const processSteps = [
    {
      id: 1,
      icon: Search,
      title: "Discover the Right Voices",
      description:
        "We carefully select influencers—from elite athletes and top celebrities to leading social media stars—who genuinely align with your brand&apos;s values and goals.",
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
        "We empower influencers to share your brand&apos;s story in their own authentic way, ensuring every campaign feels real, relatable, and engaging.",
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
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-12 flex items-center">
        {/* Left Content */}
        <div className="space-y-6 sm:space-y-8 lg:ml-4">
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-6xl font-bold text-orange-500 leading-tight">
              How It Works
            </h1>
          </div>

          <div className="space-y-4 text-gray-300 text-base sm:text-lg leading-relaxed">
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

        {/* Right Side - SVG Image */}
        <div className="relative flex justify-center items-center">
          <div className="relative max-w-full flex items-center justify-center">
            <img
              src="/service1.png"
              alt="Thumb up illustration"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto text-center mb-20">
        <div className="inline-flex items-center px-4 py-2 bg-orange-500/20 rounded-full text-orange-400 text-sm font-medium mb-6">
          <Zap className="w-4 h-4 mr-2" />
          Our Proven Process
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-orange-400 to-orange-600 bg-clip-text text-transparent">
          How It Works
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
          From discovering the perfect voices to measuring campaign success, our systematic approach ensures maximum impact for your brand.
        </p>
      </div>

      {/* Process Cards */}
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          {/* Desktop connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {processSteps.map((step, index) => (
              <div key={step.id} className="relative group">
                {/* Mobile connecting arrow */}
                {index < processSteps.length - 1 && (
                  <div className="lg:hidden absolute -bottom-4 left-1/2 transform -translate-x-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-orange-500 rotate-90" />
                  </div>
                )}
                
                {/* Card */}
                <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 h-full transition-all duration-500 hover:transform hover:-translate-y-2 hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/10 group-hover:bg-gradient-to-br group-hover:from-gray-900/90 group-hover:to-gray-800/70">
                  
                  {/* Step Number */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    {step.id}
                  </div>
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm leading-relaxed line-clamp-4">
                      {step.description}
                    </p>
                    
                    {/* Highlights */}
                    <div className="space-y-2 pt-2">
                      {step.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full flex-shrink-0"></div>
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
      <div className="max-w-7xl mx-auto mt-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-orange-400 bg-clip-text text-transparent">
            Why Our Process Works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our systematic approach delivers consistent results across all campaign types and industries.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 text-center hover:border-orange-500/50 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-white">Precision Targeting</h3>
            <p className="text-gray-300">Every influencer is hand-selected to match your exact brand requirements and audience demographics.</p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 text-center hover:border-orange-500/50 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-white">Premium Quality</h3>
            <p className="text-gray-300">We work exclusively with top-tier influencers who maintain the highest standards of content quality.</p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 text-center hover:border-orange-500/50 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-white">Proven Results</h3>
            <p className="text-gray-300">Our data-driven approach ensures measurable outcomes and transparent reporting for every campaign.</p>
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
