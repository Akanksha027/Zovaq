import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const AlionedSection: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Welcome Section */}
      <section className="container mx-auto p-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 p-10">
          <h2 className="text-6xl font-bold mb-4">Explore new Horizons with YouTube Influencer Marketing</h2>
          <p className="text-lg mb-8">
            YouTube is the second most used platform with high visibility, even on Google search results. Brands can leverage this to reach their target audience by breaking into YouTube influencer marketing and collaborating with the right creators.
          </p>
          <div className="flex space-x-4">
            <button className="bg-orange-600 text-white px-4 py-2 rounded">
              Contact
            </button>
            <button className="bg-transparent border border-orange-600 text-orange-500 px-4 py-2 rounded">
              See why we worth it
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/service1.png"
            alt="Service Illustration"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* YouTube Influencer Marketing Section */}
      <section className="container mx-auto p-6 flex flex-col md:flex-row items-center text-white">
        <div className="md:w-1/2 p-10">
          <h2 className="text-4xl font-bold mb-4 text-orange-600">AS A YOUTUBE INFLUENCER MARKETING AGENCY WE CREATE CONTENT THAT ACHIEVES RESULTS</h2>
          <p className="text-lg mb-8">
            We believe crafting compelling content is the key to garnering impressions. Highlighting an issue with Relatability generates more leads toward a solution than promoting a product blindly.
          </p>
          <div className="flex flex-col space-y-4">
            <h3 className="text-2xl font-bold">YOUTUBE PROMOTION</h3>
            <p className="text-lg">
              YouTube has a longer-lasting impact than other social media platforms. So it is considered potent for both brand awareness and lead generation.
            </p>
            <h3 className="text-2xl font-bold">YOUTUBE HAS POTENTIAL</h3>
            <p className="text-lg">
              YouTube is growing faster than any other social media platform out there. Also, YouTube has a higher retention rate than any other social media platform.
            </p>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/youtube.png"
            alt="YouTube Influencer"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* Integrated Promotion Section */}
      <section className="container mx-auto p-6  text-white">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 p-10">
            <img
              src="/influencer.jpg"
              alt="Influencer"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2 p-10">
            <h2 className="text-4xl font-bold mb-4">GETTING YOUR BRAND THE SPOTLIGHT ON YOUTUBE</h2>
            <p className="text-lg mb-8">
              We believe YouTube can be a very potent platform for your brand promotion. Integrating your products with the original content and then catering it directly to the intended audience works the way you need it.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <span className="mr-2">✓</span>
                <span>Smooth Integration</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">✓</span>
                <span>Content Planning</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">✓</span>
                <span>End-to-end support</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">✓</span>
                <span>Lead Generation</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">✓</span>
                <span>Brand awareness</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">✓</span>
                <span>Dedicated account manager</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dedicated Video Section */}
      <section className="container mx-auto p-6 flex flex-col md:flex-row items-centertext-white">
        <div className="md:w-1/2 p-10">
          <h2 className="text-4xl font-bold mb-4 text-orange-600">CONCEPT ALIGNED</h2>
          <p className="text-lg mb-8">
            In a Dedicated Video, we leverage the creativity of Influencers and create a concept that resonates and cites the insights of your brand. This focuses on the target group and appeals to them.
          </p>
          <div className="flex flex-col space-y-4">
            <h3 className="text-2xl font-bold">BRAND AWARENESS</h3>
            <p className="text-lg">
              A dedicated video boosts your brand awareness. It effectively communicates the need and importance of the product. It keeps the viewers engaged as good content does.
            </p>
            <h3 className="text-2xl font-bold">LEAD GENERATION</h3>
            <p className="text-lg">
              In a dedicated video, the promotional part does not follow like a Call to Action (CTA) instead it can be put as a recall in the content more than 2 or 3 times, But we ensure the promotional part is slight yet effective.
            </p>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/concept-aligned.png"
            alt="Concept Aligned"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* YT Shorts Video Section */}
      <section className="container mx-auto p-6 flex flex-col md:flex-row items-center  text-white">
      <div className="md:w-1/2 flex justify-center">
          <img
            src="/yt-shorts.png" // Replace with your image path
            alt="YT Shorts Video"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="md:w-1/2 p-10">
          <h2 className="text-4xl font-bold mb-4 text-orange-600">SHORT SPAN, LONG LASTING IMPACT</h2>
          <p className="text-lg mb-8">
            Apart from Instagram reels, YouTube short videos are more potent. These videos don't fade as per the trend; instead, they stay as a comprehensive solution for an issue.
          </p>
          <div className="flex flex-col space-y-4">
            <h3 className="text-2xl font-bold">PROVIDING SOLUTION</h3>
            <p className="text-lg">
              Unlike other social media platforms that are more focused on garnering views and impressions, a YouTube short video is more inclined towards providing solutions.
            </p>
            <h3 className="text-2xl font-bold">SERVES THE PURPOSE</h3>
            <p className="text-lg">
              A YouTube short video is both a cost-effective and result-oriented way of advertising your product on this platform. This promotional tool provides a long-term advertising solution.
            </p>
          </div>
        </div>
       
      </section>

      {/* YT Pre Roll Video Section */}
      <section className="container mx-auto p-6 flex flex-col md:flex-row items-center  text-white">
        <div className="md:w-1/2 p-10">
          <h2 className="text-4xl font-bold mb-4 text-orange-600">FIRST THINGS FIRST, PROMOTIONAL PRIORITY</h2>
          <p className="text-lg mb-8">
            We get it when you say the promotional part should be given more importance. That is why we have this YouTube preroll promotional plan. In this advertising strategy, we ensure that the promotional part is displayed before the video. This ensures that even if a video has low retention, we can generate leads.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center">
              <span className="mr-2">✓</span>
              <span>Prioritizing Promotion</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2">✓</span>
              <span>More Viewership</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2">✓</span>
              <span>To the point</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2">✓</span>
              <span>Focus on Lead Generation</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2">✓</span>
              <span>Strategic Arrangement</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2">✓</span>
              <span>Improved brand recall</span>
            </div>
          </div>
        </div>
        <div className="md:w-lg ml-15 flex justify-center">
          <img
            src="/marketing.jpg" // Replace with your image path
            alt="YT Pre Roll Video"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      <section className="container mx-auto p-6  text-white flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-lg flex justify-center">
          <img
            src="/contact.png" // Replace with your image path
            alt="Contact Illustration"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="md:w-1/2 p-10 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4 text-orange-600">WANT TO KNOW MORE?</h2>
          <h3 className="text-4xl font-bold mb-8">HAVE ANY QUERIES OR WOULD YOU LIKE TO REACH OUT?</h3>
          <p className="text-lg mb-8">
            Connect with us and get quotes. It's our pleasure to help your brand grow.
          </p>
          <button className="bg-orange-600 text-white px-6 py-3 rounded-lg w-fit">
            CONTACT US
          </button>
        </div>
      </section>
      <Footer/>

    </div>
  );
};

export default AlionedSection;
