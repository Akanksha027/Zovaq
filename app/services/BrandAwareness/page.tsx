"use client";

import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import React, { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import { Mail } from "lucide-react";
import CAT from "@/components/CAT";
import { TrendingUp, Lightbulb, Shield, Rocket } from "lucide-react";

const BrandAwarenessPage: React.FC = () => {
  const [Impression, setImpression] = useState(0);
  const [Recall, setRecall] = useState(0);
  const [Reach, setReach] = useState(0);

  const targetImpressions = 2300000; // 2.3M Impressions
  const targetBrandRecall = 75; // 75% Brand Recall
  const targetAudienceReach = 1500000; // 1.5M Audience Reach

  useEffect(() => {
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
  }, []);

  const [formData, setFormData] = useState({
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const reasons = [
    {
      icon: TrendingUp,
      title: "Tech-Driven Growth",
      description:
        "We're not stuck in old-school marketing tactics. Our founders and team come from the tech world, bringing cutting-edge tools, analytics, and automation to every campaign. We help you stay ahead in the fast-evolving digital landscape.",
    },
    {
      icon: Lightbulb,
      title: "Fresh Perspectives, Proven Results",
      description:
        "As a new agency, we bring a breath of fresh air to influencer marketing. Our fresh ideas and agile approach mean we're always ready to adapt and make changes that matter. We're not weighed down by outdated strategies—we're here to shake things up and get you noticed.",
    },
    {
      icon: Shield,
      title: "Trustworthy & Intelligent",
      description:
        "Being new doesn't mean we're inexperienced. We're selective with our partnerships, focusing on building long-term relationships based on trust, transparency, and smart strategies. Our intelligent solutions are designed to deliver measurable impact.",
    },
    {
      icon: Rocket,
      title: "We're Here to Help You Grow",
      description:
        "We don't just manage campaigns—we help you grow. Whether you're an influencer looking to expand your reach or a brand seeking authentic connections, we're your go-to partners for growth.",
    },
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
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
      {/* Grid Background with Vanishing Effect */}
     

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-24 flex flex-col items-center justify-center text-center">
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
            Creating a Strong Identity So Your Brand Doesn’t Just Exist{" "}
            <span className="bg-orange-500 text-white px-3 sm:px-4 py-2 rounded-lg inline-block">
              — It Dominates
            </span>
          </h1>
        </div>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl pt-10">
          At ZOVAQ, we craft compelling brand awareness strategies that put your
          business in the spotlight. From captivating campaigns to memorable
          storytelling, we help your brand stand out, connect with the right
          audience, and build trust that lasts.
        </p>
        <button className="border border-gray-600 hover:border-gray-400 px-6 py-3 my-7 sm:px-8 sm:py-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 hover:shadow-lg group">
          Start Growing Now <ArrowRight className="ml-2" />
        </button>
      </div>

      <section className="container mx-auto p-6 flex flex-col md:flex-row items-center  text-white">
        <div className="md:w-1/2 p-10">
          <h2 className="text-4xl font-bold mb-4 text-orange-600">
            {" "}
            What is Brand Awareness?
          </h2>
          <p className="text-white text-lg leading-relaxed">
            Brand awareness is about making sure your target audience knows who
            you are, what you stand for, and why you matter. It's the foundation
            of every successful marketing campaign, helping your brand stay
            top‑of‑mind when customers make their buying decisions.
          </p>
        </div>
        <div className="md:w-lg ml-15 flex justify-center">
          <img
            src="/marketing.jpg" // Replace with your image path
            alt="YT Pre Roll Video"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-6">
            <h2 className="text-3xl font-bold text-orange-500 mb-4">
              Why is brand awareness important?
            </h2>
            <p className="text-lg mb-6">
              Are you looking to build trust, gain more customers, and stand out
              from your competitors?
            </p>
            <div className="flex justify-center pt-20">
              <img
                src="/brand-awareness.png"
                alt="Team Brainstorming"
                className="w-full max-w-full"
              />
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className=" mt-28 rounded-lg p-6 space-y-4">
              <div className="bg-gray-700 p-4 rounded">
                <h3 className="text-xl font-bold mb-2">
                  Brand Awareness Gives You a Competitive Edge
                </h3>
                <p>
                  People are drawn to things they recognize and understand. In a
                  sales environment, this means customers stick to brands
                  they're already aware of. For example, when searching for a
                  ‘smartphone’, people are more likely to pick brands like Apple
                  or Samsung over an unknown one. The same applies to your
                  brand. Greater recognition leads to greater trust — and more
                  sales.
                </p>
              </div>
              <div className="bg-gray-700 p-4 rounded">
                <h3 className="text-xl font-bold mb-2">
                  Brand Awareness Builds Brand Loyalty and Trust
                </h3>
                <p>
                  People are more willing to pay a premium for trusted brands.
                  Strong brand awareness ensures that when a customer chooses
                  your product, they're confident it will deliver. Trust breeds
                  loyalty — making people return to your brand and recommend it
                  to others, knowing you’ll meet their expectations every time.
                </p>
              </div>
              <div className="bg-gray-700 p-4 rounded">
                <h3 className="text-xl font-bold mb-2">
                  Brand Awareness Attracts Strong Talent
                </h3>
                <p>
                  People don’t just buy from strong brands — they also want to
                  work for them. According to LinkedIn, strong branding leads to
                  50% more job applicants. More people applying means a stronger
                  team, a better company culture, and ultimately a stronger
                  brand.
                </p>
              </div>
              <div className="bg-gray-700 p-4 rounded">
                <h3 className="text-xl font-bold mb-2">
                  Brand Awareness Shows What’s Working
                </h3>
                <p>
                  Awareness is more than a campaign metric — it's a measure of
                  overall success. If your brand’s visibility is increasing, it
                  means every part of your business — from digital presence to
                  customer support — is resonating well. When it doesn’t,
                  analytics and tracking help you pinpoint and fix the issue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-20">
        <div className="flex flex-col items-center justify-center ">
          <div className="flex justify-center gap-4 mb-8">
            <div className="bg-orange-600 p-10 rounded-lg text-center">
              <p className="text-lg font-semibold">Impressions</p>
              <p className="text-2xl font-bold">${Impression}</p>
              <img
                src="/meta-logo.png"
                alt="Meta Business Partner"
                className="mx-auto mt-2 h-8"
              />
            </div>
            <div className="bg-orange-600 p-10 rounded-lg text-center">
              <p className="text-lg font-semibold"> Brand Recall</p>
              <p className="text-2xl font-bold">${Recall}</p>
            </div>
            <div className="bg-orange-600 p-10 rounded-lg text-center">
              <p className="text-lg font-semibold">Audience Reach</p>
              <p className="text-2xl font-bold">{Reach}</p>
              <img
                src="/google-logo.png"
                alt="Google Partner"
                className="mx-auto mt-2 h-8"
              />
            </div>
          </div>
          <h2 className="text-5xl pt-8 font-bold text-orange-500 mb-4 text-center">
            What We Will Do for You
          </h2>
          <p className="text-lg pt-6 text-center max-w-2xl">
            At ZOVAQ, we don’t just run campaigns — we build brands. Our
            approach is tailored to your needs, making sure your voice is heard,
            your message is seen, and your brand becomes a trusted name in your
            industry. Here’s how we make it happen:
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center mt-10 space-y-8 lg:space-y-0 lg:space-x-12">
          <div className=" p-6 rounded-lg w-full max-w-1/2">
            <h3 className="text-4xl font-bold mb-4 text-orange-500">
              Did You Know?
            </h3>
            <ul className="space-y-4 text-3xl">
              <li className="flex items-start p-4 bg-gray-700 rounded">
                <p>👁️ Tailored Brand Strategy</p>
              </li>
              <li className="flex items-start p-4 bg-gray-700 rounded">
                <p> 🔒 Build Trust & Authority</p>
              </li>
              <li className="flex items-start p-4 bg-gray-700 rounded">
                <p>💬 Engage Target Audience</p>
              </li>
              <li className="flex items-start p-4 bg-gray-700 rounded">
                <p>📈 Optimize for Impact</p>
              </li>
              <li className="flex items-start p-4 bg-gray-700 rounded">
                <p>🛠️ End‑to‑End Support</p>
              </li>
            </ul>
          </div>
          <div className="w-full max-w-lg">
            <img
              src="/brand.png"
              alt="Paid Media Expert"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-orange-500/5 to-transparent rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Why Only{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              ZOVAQ
            </span>
            ?
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-xl text-gray-300 leading-relaxed">
              Because We're Not Just Another Agency—
              <span className="text-orange-400 font-semibold">
                We're Growth Partners
              </span>
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full"></div>
            <p className="text-lg text-gray-400 leading-relaxed">
              At ZOVAQ, we don't just follow trends—we create them. We're a team
              of tech-savvy, forward-thinking experts who believe in the power
              of innovation to drive real results for influencers and brands
              alike.
            </p>
          </div>
        </div>

        {/* Subtitle */}
        <div className="text-center mb-16">
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Here's Why You Should Choose Us
          </h3>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 transition-all duration-500 hover:border-orange-500/50 hover:bg-gradient-to-br hover:from-gray-800/90 hover:to-gray-700/90 hover:transform hover:scale-105"
              >
                {/* Number Badge */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center font-bold text-white text-lg shadow-lg">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="mb-6 relative">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-400/20 to-orange-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-orange-400 group-hover:text-orange-300 transition-colors duration-300" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h4 className="text-2xl font-bold text-white group-hover:text-orange-100 transition-colors duration-300">
                    {reason.title}
                  </h4>
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
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
