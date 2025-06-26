"use client";
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Search, Lightbulb, BarChart3, Target, Users, TrendingUp } from 'lucide-react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Footer from '@/components/Footer';
const InfluencerMarketingPage: React.FC = () => {

  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "What is influencer marketing and how does it work?",
      answer: "Influencer marketing is a form of social media marketing that involves partnerships between brands and individuals who have a dedicated social following. At ZOVAQ, we connect your brand with the right influencers who create authentic content that resonates with their audience. The process works by leveraging the trust and relationship influencers have built with their followers to promote your products or services in a natural, engaging way. This approach typically generates higher engagement rates and better ROI compared to traditional advertising methods."
    },
    {
      id: 2,
      question: "Who is an influencer?",
      answer: "An influencer is someone who has built a significant following on social media platforms and has the power to affect the purchasing decisions of others because of their authority, knowledge, position, or relationship with their audience. At ZOVAQ, we work with various types of influencers including nano-influencers (1K-10K followers), micro-influencers (10K-100K followers), macro-influencers (100K-1M followers), and mega-influencers (1M+ followers). Each category offers unique benefits depending on your campaign goals and target audience."
    },
    {
      id: 3,
      question: "What does an influencer marketing agency do?",
      answer: "ZOVAQ, as a full-service influencer marketing agency, handles every aspect of your influencer campaigns. We identify and vet the perfect influencers for your brand, negotiate partnerships, manage campaign logistics, create content strategies, ensure brand compliance, track performance metrics, and provide detailed analytics reports. Our tech-driven approach uses advanced algorithms to match brands with influencers based on audience demographics, engagement rates, and brand alignment. We also handle contract negotiations, content approval processes, and campaign optimization to maximize your ROI."
    },
    {
      id: 4,
      question: "Why are social media influencer marketing campaigns important?",
      answer: "Social media influencer marketing campaigns are crucial in today's digital landscape because they offer authentic, trust-based promotion that traditional advertising can't match. With consumers increasingly skeptical of traditional ads, influencer content provides a more genuine recommendation from someone they follow and trust. At ZOVAQ, we've seen that influencer campaigns typically achieve 11x higher ROI than traditional digital marketing. They also help increase brand awareness, drive engagement, build credibility, reach targeted demographics, and create user-generated content that can be repurposed across multiple marketing channels."
    },
    {
      id: 5,
      question: "Why is influencer marketing the next big thing?",
      answer: "Influencer marketing is rapidly becoming the dominant force in digital marketing because it addresses the modern consumer's preference for authentic, personalized content. The global influencer marketing industry is projected to reach $24 billion by 2025. At ZOVAQ, we leverage cutting-edge technology and data analytics to stay ahead of this trend. The rise of new platforms like TikTok, Instagram Reels, and YouTube Shorts, combined with the declining effectiveness of traditional advertising and the increasing importance of social proof in purchasing decisions, makes influencer marketing not just relevant but essential for brands looking to connect with their target audience in meaningful ways."
    }
  ];

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  interface FAQItem {
    id: number;
    question: string;
    answer: string;
  }

  const services = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Finding the Perfect Influencer – Powered by Technology",
      description: "Our advanced tech platform doesn't just connect you with influencers—it finds the right match for your brand using smart algorithms and real-time data. We analyze audience insights, engagement patterns, and industry trends to ensure every collaboration is authentic and high-impact.",
      subDescription: "We help you choose not only the ideal influencer but also the best platform for your goals, so you maximize your ROI. Every campaign is backed by research, relevance, and a commitment to organic growth."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Intelligent Content Management – Fresh Minds, Creative Energy",
      description: "At ZOVAQ, our team of digital natives and creative strategists crafts content that stands out. We use data-driven insights and automation tools to deliver unique, engaging campaigns tailored to your audience. Our approach blends creativity with intelligence, ensuring your brand's story is told in the most compelling way.",
      subDescription: "We believe in authentic, sustained growth—so every piece of content is designed for real engagement and long-term impact."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Transparent Reporting & Analytics – Trust Built on Clarity",
      description: "We make every result visible. Our real-time analytics dashboard tracks every KPI that matters: conversions, engagement, reach, and ROI. With ZOVAQ, you get clear, actionable insights at every stage—so you always know how your investment is performing.",
      subDescription: "Our tech-driven reporting tools ensure you see the full picture, from influencer code usage to campaign impact. Trust us to keep you informed and empowered."
    }
  ];

  return (

    <div className="min-h-screen  text-white">
      <Navbar/>
      <div className="flex ">

        {/* Left Content Section */}
        <div className="flex-1 p-12 lg:p-16">
          <div className="max-w-10xl">
            <h1 className="text-5xl lg:text-6xl font-light leading-tight mb-8">
              Data-driven influencer<br />
              marketing
              services
            </h1>
            
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              AdLift delivers credible influencer marketing services with data-driven
              campaigns that are viral, captivating, and ROI-focused.
            </p>
            
            <p className="text-lg text-gray-300 mb-12 leading-relaxed">
              Influencer Marketing is no longer the 'next' big trend in marketing. It is
              here, and its big.
            </p>

            {/* Statistics */}
            <div className="space-y-8 mb-12">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <div className="w-4 h-4 border-2 border-white rounded"></div>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Globally Influencer marketing is expected to grow<br />
                  to be worth $22.3 Billion in 2024
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <div className="w-4 h-4 bg-white rounded"></div>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed">
                  The majority of brands (59%) have a standalone<br />
                  budget for content marketing, and 75% of them<br />
                  intend to dedicate a budget to influencer<br />
                  marketing in 2021.
                </p>
              </div>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed">
              Today, businesses invest in influencers and influencer marketing services rather than traditional marketing methods to promote their products.
              Influencer marketing is shaking up the industry like never before and maybe it's time for you to jump on to the bandwagon?
            </p>
          </div>
        </div>

        {/* Right Video Section */}
        <div className="flex-1 relative">
          <video 
            className="w-md h-md pt-30  rounded-2xl object-cover"
            autoPlay 
            loop 
            muted 
            playsInline
          >
            <source src="/influencer.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>


      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-8">
            <span className="text-red-500 italic font-serif">Why Should You Go with </span>
            <span className="text-white">ZOVAQ?</span>
          </h1>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              We are <span className="text-red-500 font-semibold">ZOVAQ</span>—a new-age 
              <span className="text-blue-400 font-semibold"> Influencer Marketing Agency</span> built by tech enthusiasts and creative minds. 
              We combine the power of technology, fresh thinking, and genuine partnership to help your brand grow faster, smarter, and with complete trust. 
              Here's how we do it:
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-900 rounded-xl p-8 hover:bg-gray-800 transition-all duration-300 hover:scale-105 border border-gray-800">
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center text-white">
                  {service.icon}
                </div>
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-red-500 mb-4 leading-tight">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-300 leading-relaxed mb-4 text-sm">
                {service.description}
              </p>
              
              {/* Sub Description */}
              <p className="text-gray-400 leading-relaxed text-sm">
                {service.subDescription}
              </p>
            </div>
          ))}
        </div>


        <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Image on the left */}
        <div className="lg:w-1/2 flex justify-center items-center">
          <img
            src="/faq.png"
            alt="FAQ Illustration"
            className="w-full"
          />
        </div>

        {/* FAQ on the right */}
        <div className="lg:w-1/2">
          <div className="mb-12">
            <h1 className="text-4xl lg:text-5xl font-light text-white mb-4">
              FAQs
            </h1>
            <p className="text-lg text-gray-300">
              Everything you need to know about ZOVAQ and influencer marketing
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((item) => (
              <div
                key={item.id}
                className="bg-slate-700 rounded-lg border border-slate-600 overflow-hidden transition-all duration-300 hover:border-slate-500"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                  aria-expanded={openItems.includes(item.id)}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-white pr-4">
                      {item.id}. {item.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {openItems.includes(item.id) ? (
                        <ChevronUp className="w-5 h-5 text-gray-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                  </div>
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openItems.includes(item.id)
                      ? 'max-h-96 opacity-100'
                      : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="px-6 pb-6">
                    <div className="border-t border-slate-600 pt-4">
                      <p className="text-gray-300 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>



        {/* Call to Action Section */}
        <div className="text-center ">
          <div className="  rounded-2xl p-8 lg:p-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-white rounded-full translate-x-12 translate-y-12"></div>
              <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full"></div>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white mr-3" />
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Choose ZOVAQ
              </h2>
              
              <p className="text-xl text-white/90 mb-6 max-w-3xl mx-auto leading-relaxed">
                Where technology, creativity, and trust come together to deliver next-level influencer marketing.
              </p>
              
              <div className="inline-flex items-center bg-white text-red-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 cursor-pointer">
                Let's shape the future, together
                <TrendingUp className="w-5 h-5 ml-2" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Decorative Elements */}
        <div className="mt-16 flex justify-center space-x-8 opacity-20">
          <div className="w-2 h-2 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-75"></div>
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse delay-150"></div>
          <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse delay-225"></div>
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-300"></div>
        </div>
      </div>

<Footer/>

    </div>
  );
};

export default InfluencerMarketingPage;