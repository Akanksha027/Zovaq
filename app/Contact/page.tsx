"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Footer from '@/components/Footer';

interface FormData {
  fullName: string;
  city: string;
  userType: string;
  email: string;
  subject: string;
  number: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    city: '',
    userType: "I&apos;m a",
    email: '',
    subject: '',
    number: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error("Error sending message");
      }
  
      const result = await response.json();
      alert(result.message || "Your message has been sent successfully!");
      // Reset form
      setFormData({
        fullName: "",
        city: "",
        userType: "I&apos;m a",
        email: "",
        subject: "",
        number: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again later.");
    }
  };
  

  return (
    <div className="min-h-screen flex">
      {/* Left Section - Fixed Image */}
      <div className="w-1/2 fixed left-0 top-0 h-screen">
        <div className="relative w-full h-full">
          <Image
            src="/contact.jpg"
            alt="People Powered Marketing"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center">
            
          </div>
        </div>
      </div>

      {/* Right Section - Scrollable Content */}
      <div className="w-1/2 ml-auto">
        <div className="min-h-screen  text-white">
          {/* Contact Form Section */}
          <div className="px-16 py-16">
            <h2 className="text-4xl font-bold mb-12 text-center">CONTACT US</h2>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Full Name */}
              <div className="relative">
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                  className="w-full bg-transparent border-b-2 border-white/30 pb-3 pl-10 text-white placeholder-white/70 focus:border-white focus:outline-none text-lg"
                />
              </div>

              {/* City and User Type Row */}
              <div className="grid grid-cols-2 gap-8">
                <div className="relative">
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="City"
                    className="w-full bg-transparent border-b-2 border-white/30 pb-3 pl-10 text-white placeholder-white/70 focus:border-white focus:outline-none text-lg"
                  />
                </div>
                
                <div className="relative">
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <select
                    name="userType"
                    value={formData.userType}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b-2 border-white/30 pb-3 pl-10 text-white focus:border-white focus:outline-none text-lg appearance-none cursor-pointer"
                  >
                    <option value="I&apos;m a" className="bg-black">I&apos;m a</option>
                    <option value="Business Owner" className="bg-black">Business Owner</option>
                    <option value="Marketing Manager" className="bg-black">Marketing Manager</option>
                    
                    <option value="Marketing Manager" className="bg-black">Influencer</option>
                    
                   
                    <option value="Other" className="bg-black">Other</option>
                  </select>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Email and Subject Row */}
              <div className="grid grid-cols-2 gap-8">
                <div className="relative">
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="E-mail"
                    className="w-full bg-transparent border-b-2 border-white/30 pb-3 pl-10 text-white placeholder-white/70 focus:border-white focus:outline-none text-lg"
                  />
                </div>
                
                <div className="relative">
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="MKS kH m-2 4h12a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h12zM5 12a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm0 3a1 1 0 011-1h3a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Subject"
                    className="w-full bg-transparent border-b-2 border-white/30 pb-3 pl-10 text-white placeholder-white/70 focus:border-white focus:outline-none text-lg"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div className="relative">
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <input
                  type="tel"
                  name="number"
                  value={formData.number}
                  onChange={handleInputChange}
                  placeholder="Number"
                  className="w-full bg-transparent border-b-2 border-white/30 pb-3 pl-10 text-white placeholder-white/70 focus:border-white focus:outline-none text-lg"
                />
              </div>

              {/* Message */}
              <div className="relative">
                <div className="absolute left-0 top-6">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                  </svg>
                </div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Message"
                  rows={4}
                  className="w-full bg-transparent border-b-2 border-white/30 pb-3 pl-10 pt-2 text-white placeholder-white/70 focus:border-white focus:outline-none text-lg resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-8">
              <button type='submit' className="border border-gray-600 hover:border-gray-400 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                  SUBMIT
                </button> 
              </div>
            </form>
          </div>

          {/* Footer Section */}
        <Footer/>
        </div>
      </div>
    </div>
  );
};

export default Contact;