"use client";

import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import React, { useState, useEffect, useRef } from "react";
import Footer from "@/components/Footer";

import CAT from "@/components/CAT";
import { TrendingUp, Lightbulb, Shield, Rocket } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
}

interface Reason {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const BrandAwarenessPage: React.FC = () => {
  const [impression, setImpression] = useState<number>(0);
  const [recall, setRecall] = useState<number>(0);
  const [reach, setReach] = useState<number>(0);

  const targetImpressions = 2300000; // 2.3M Impressions
  const targetBrandRecall = 75; // 75% Brand Recall
  const targetAudienceReach = 1500000; // 1.5M Audience Reach

  // Refs for scroll animations
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const whyImportantRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const whatWeDoRef = useRef<HTMLDivElement>(null);
  const whyChooseRef = useRef<HTMLDivElement>(null);

  // State to track if stats are in view
  const [statsInView, setStatsInView] = useState<boolean>(false);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp');
          
          // Special handling for stats section
          if (entry.target === statsRef.current && !statsInView) {
            setStatsInView(true);
          }
        }
      });
    }, observerOptions);

    const elements = [heroRef, aboutRef, whyImportantRef, statsRef, whatWeDoRef, whyChooseRef];
    elements.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      elements.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [statsInView]);

  // Counter animation - only starts when stats are in view
  useEffect(() => {
    if (!statsInView) return;

    const totalDuration = 3000; // Total duration in milliseconds for all counters to complete
    const startTime = Date.now();

    const updateCounters = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / totalDuration, 1);

      setImpression(Math.round(targetImpressions * progress));
      setRecall(Math.round(targetBrandRecall * progress));
      setReach(parseFloat((targetAudienceReach * progress).toFixed(1)));

      if (progress < 1) {
        requestAnimationFrame(updateCounters);
      }
    };

    requestAnimationFrame(updateCounters);

    return () => {
      // Cleanup function if needed
    };
  }, [statsInView, targetImpressions, targetBrandRecall, targetAudienceReach]);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const reasons: Reason[] = [
    {
      icon: TrendingUp,
      title: "Tech-Driven Growth",
      description:
        "We&apos;re not stuck in old-school marketing tactics. Our founders and team come from the tech world, bringing cutting-edge tools, analytics, and automation to every campaign. We help you stay ahead in the fast-evolving digital landscape.",
    },
    {
      icon: Lightbulb,
      title: "Fresh Perspectives, Proven Results",
      description:
        "As a new agency, we bring a breath of fresh air to influencer marketing. Our fresh ideas and agile approach mean we&apos;re always ready to adapt and make changes that matter. We&apos;re not weighed down by outdated strategies—we&apos;re here to shake things up and get you noticed.",
    },
    {
      icon: Shield,
      title: "Trustworthy & Intelligent",
      description:
        "Being new doesn&apos;t mean we&apos;re inexperienced. We&apos;re selective with our partnerships, focusing on building long-term relationships based on trust, transparency, and smart strategies. Our intelligent solutions are designed to deliver measurable impact.",
    },
    {
      icon: Rocket,
      title: "We&apos;re Here to Help You Grow",
      description:
        "We don&apos;t just manage campaigns—we help you grow. Whether you&apos;re an influencer looking to expand your reach or a brand seeking authentic connections, we&apos;re your go-to partners for growth.",
    },
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .opacity-0 {
          opacity: 0;
        }
      `}</style>
      
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)
          `,
          backgroundSize: "90px 90px", // making the boxes larger
          maskImage: `
            radial-gradient(ellipse 80% 60% at center, black 40%, transparent 80%),
            linear-gradient(to bottom, black 60%, transparent 100%)
          `,
          WebkitMaskImage: `
            radial-gradient(ellipse 80% 60% at center, black 40%, transparent 80%),
            linear-gradient(to bottom, black 60%, transparent 100%)
          `,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />
      
      <div className="relative z-10">
        <Navbar />

        {/* Hero Section */}
        <div ref={heroRef} className="opacity-0 relative z-10 container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24 flex flex-col items-center justify-center text-center">
          <div className="space-y-4 max-w-6xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
              Creating a Strong Identity So Your Brand Doesn&apos;t Just Exist{" "}
              <span className="bg-orange-500 text-white px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-lg inline-block mt-2 sm:mt-0">
                — It Dominates
              </span>
            </h1>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl pt-6 sm:pt-8 md:pt-10 px-4">
            At ZOVAQ, we craft compelling brand awareness strategies that put your
            business in the spotlight. From captivating campaigns to memorable
            storytelling, we help your brand stand out, connect with the right
            audience, and build trust that lasts.
          </p>
          <button className="border border-gray-600 hover:border-gray-400 text-white px-4 sm:px-6 py-2 sm:py-3 my-4 sm:my-6 md:my-7 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 hover:shadow-lg group text-sm sm:text-base">
            Start Growing Now <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* About Section */}
        <section ref={aboutRef} className="opacity-0 container mx-auto px-4 sm:px-6 py-8 sm:py-12 flex flex-col md:flex-row items-center text-white">
          <div className="w-full md:w-1/2 p-4 sm:p-6 md:p-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-orange-600">
              What is Brand Awareness?
            </h2>
            <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed">
              Brand awareness is about making sure your target audience knows who
              you are, what you stand for, and why you matter. It&apos;s the foundation
              of every successful marketing campaign, helping your brand stay
              top‑of‑mind when customers make their buying decisions.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0 px-4">
            <img
              src="/marketing.jpg"
              alt="YT Pre Roll Video"
              className="w-full max-w-md md:max-w-full h-auto object-cover rounded-lg"
            />
          </div>
        </section>

        {/* Why Important Section */}
        <div ref={whyImportantRef} className="opacity-0 container mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2 p-4 sm:p-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-orange-500 mb-4">
                Why is brand awareness important?
              </h2>
              <p className="text-sm sm:text-base md:text-lg mb-6 text-white">
                Are you looking to build trust, gain more customers, and stand out
                from your competitors?
              </p>
              <div className="flex justify-center pt-8 sm:pt-12 md:pt-20">
                <img
                  src="/brand-awareness.png"
                  alt="Team Brainstorming"
                  className="w-full max-w-md h-auto"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="mt-8 lg:mt-28 rounded-lg p-4 sm:p-6 space-y-4">
                <div className="bg-gray-700 p-3 sm:p-4 rounded">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">
                    Brand Awareness Gives You a Competitive Edge
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300">
                    People are drawn to things they recognize and understand. In a
                    sales environment, this means customers stick to brands
                    they&apos;re already aware of. For example, when searching for a
                    &apos;smartphone&apos;, people are more likely to pick brands like Apple
                    or Samsung over an unknown one. The same applies to your
                    brand. Greater recognition leads to greater trust — and more
                    sales.
                  </p>
                </div>
                <div className="bg-gray-700 p-3 sm:p-4 rounded">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">
                    Brand Awareness Builds Brand Loyalty and Trust
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300">
                    People are more willing to pay a premium for trusted brands.
                    Strong brand awareness ensures that when a customer chooses
                    your product, they&apos;re confident it will deliver. Trust breeds
                    loyalty — making people return to your brand and recommend it
                    to others, knowing you&apos;ll meet their expectations every time.
                  </p>
                </div>
                <div className="bg-gray-700 p-3 sm:p-4 rounded">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">
                    Brand Awareness Attracts Strong Talent
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300">
                    People don&apos;t just buy from strong brands — they also want to
                    work for them. According to LinkedIn, strong branding leads to
                    50% more job applicants. More people applying means a stronger
                    team, a better company culture, and ultimately a stronger
                    brand.
                  </p>
                </div>
                <div className="bg-gray-700 p-3 sm:p-4 rounded">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">
                    Brand Awareness Shows What&apos;s Working
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300">
                    Awareness is more than a campaign metric — it&apos;s a measure of
                    overall success. If your brand&apos;s visibility is increasing, it
                    means every part of your business — from digital presence to
                    customer support — is resonating well. When it doesn&apos;t,
                    analytics and tracking help you pinpoint and fix the issue.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div ref={statsRef} className="opacity-0 container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-20">
          <div className="flex flex-col items-center justify-center">
            {/* Stats Cards - Single row layout */}
            <div className="flex flex-row justify-center items-stretch gap-2 sm:gap-4 mb-8 w-full max-w-6xl overflow-x-auto">
              <div className="bg-orange-600 px-3 py-6 sm:px-4 sm:py-8 md:px-6 md:py-10 rounded-lg text-center min-w-0 flex-1 max-w-xs">
                <p className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-white mb-2">Impressions</p>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{impression.toLocaleString()}</p>
              
              </div>
              <div className="bg-orange-600 px-3 py-6 sm:px-4 sm:py-8 md:px-6 md:py-10 rounded-lg text-center min-w-0 flex-1 max-w-xs">
                <p className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-white mb-2">Brand Recall</p>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{recall}%</p>
                <div className="h-4 sm:h-6 md:h-8"></div>
              </div>
              <div className="bg-orange-600 px-3 py-6 sm:px-4 sm:py-8 md:px-6 md:py-10 rounded-lg text-center min-w-0 flex-1 max-w-xs">
                <p className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-white mb-2">Audience Reach</p>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{reach.toLocaleString()}</p>
               
              </div>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl pt-4 sm:pt-8 font-bold text-orange-500 mb-4 text-center">
              What We Will Do for You
            </h2>
            <p className="text-sm sm:text-base md:text-lg pt-4 sm:pt-6 text-center max-w-2xl text-white px-4">
              At ZOVAQ, we don&apos;t just run campaigns — we build brands. Our
              approach is tailored to your needs, making sure your voice is heard,
              your message is seen, and your brand becomes a trusted name in your
              industry. Here&apos;s how we make it happen:
            </p>
          </div>

          {/* What We Do Section */}
          <div ref={whatWeDoRef} className="opacity-0 flex flex-col lg:flex-row items-center justify-center mt-8 sm:mt-10 space-y-8 lg:space-y-0 lg:space-x-8 xl:space-x-12">
            <div className="p-4 sm:p-6 rounded-lg w-full lg:w-1/2 max-w-2xl">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-orange-500 text-center lg:text-left">
                Did You Know?
              </h3>
              <ul className="space-y-4 text-lg sm:text-xl md:text-2xl lg:text-3xl">
                <li className="flex items-start p-3 sm:p-4 bg-gray-700 rounded">
                  <p className="text-white">👁️ Tailored Brand Strategy</p>
                </li>
                <li className="flex items-start p-3 sm:p-4 bg-gray-700 rounded">
                  <p className="text-white">🔒 Build Trust & Authority</p>
                </li>
                <li className="flex items-start p-3 sm:p-4 bg-gray-700 rounded">
                  <p className="text-white">💬 Engage Target Audience</p>
                </li>
                <li className="flex items-start p-3 sm:p-4 bg-gray-700 rounded">
                  <p className="text-white">📈 Optimize for Impact</p>
                </li>
                <li className="flex items-start p-3 sm:p-4 bg-gray-700 rounded">
                  <p className="text-white">🛠️ End‑to‑End Support</p>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-1/2 max-w-lg px-4">
              <img
                src="/brand.png"
                alt="Paid Media Expert"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-gradient-to-tl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-gradient-to-r from-orange-500/5 to-transparent rounded-full blur-3xl"></div>

        {/* Why Choose Us Section */}
        <div ref={whyChooseRef} className="opacity-0 container mx-auto max-w-7xl relative z-10 px-4 sm:px-6 py-8 sm:py-12 md:py-16">
          {/* Header Section */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 leading-tight">
              Why Only{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                ZOVAQ
              </span>
              ?
            </h2>
            <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed px-4">
                Because We&apos;re Not Just Another Agency—
                <span className="text-orange-400 font-semibold">
                  We&apos;re Growth Partners
                </span>
              </p>
              <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full"></div>
              <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed px-4">
                At ZOVAQ, we don&apos;t just follow trends—we create them. We&apos;re a team
                of tech-savvy, forward-thinking experts who believe in the power
                of innovation to drive real results for influencers and brands
                alike.
              </p>
            </div>
          </div>

          {/* Subtitle */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Here&apos;s Why You Should Choose Us
            </h3>
          </div>

          {/* Reasons Grid */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {reasons.map((reason, index) => {
              const IconComponent = reason.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 sm:p-8 transition-all duration-500 hover:border-orange-500/50 hover:bg-gradient-to-br hover:from-gray-800/90 hover:to-gray-700/90 hover:transform hover:scale-105"
                >
                  {/* Number Badge */}
                  <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center font-bold text-white text-base sm:text-lg shadow-lg">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="mb-4 sm:mb-6 relative">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-orange-400/20 to-orange-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-orange-400 group-hover:text-orange-300 transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3 sm:space-y-4">
                    <h4 className="text-xl sm:text-2xl font-bold text-white group-hover:text-orange-100 transition-colors duration-300">
                      {reason.title}
                    </h4>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      {reason.description}
                    </p>
                  </div>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/0 to-orange-600/0 group-hover:from-orange-500/5 group-hover:to-orange-600/5 transition-all duration-500 pointer-events-none"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      <CAT />
      <Footer />
    </div>
  );
};

export default BrandAwarenessPage;