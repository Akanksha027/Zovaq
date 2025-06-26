"use client";

import React, { useState } from "react";
import { Mail } from "lucide-react";

const CAT: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // IMPORTANT:
        body: JSON.stringify({
          fullName: formData.name,
          email: formData.email,
          number: formData.phone,
          city: "N/A",
          userType: "Business Owner",
          subject: "Business Inquiry from CAT",
          message: `Name: ${formData.name}\nBusiness Email: ${formData.email}\nPhone: ${formData.phone}`
        }),
      });
      if (response.ok) {
        alert("Thank you! We will be in touch soon.");
        setFormData({ name: "", email: "", phone: "" }); // reset
      } else {
        alert("Something went wrong. Try again later.");
      }
    } catch (error) {
      alert("Error submitting the form.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="bg-black relative overflow-hidden">
      <div className="py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left Side - Title */}
            <div className="lg:w-1/3">
              <h2 className="text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-tight">
                Get
                <br />
                in Touch
              </h2>
            </div>

            {/* Right Side - Form and Description */}
            <div className="lg:w-2/3 space-y-8">
              {/* Description */}
              <div className="text-right">
                <p className="text-sm text-gray-300 leading-relaxed mb-6">
                  <span className="text-orange-400 font-semibold">Choose ZOVAQ</span>—where technology meets creativity, and growth is always the goal.
                </p>
                <div className="w-full h-px bg-white/30 mt-4"></div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-4">
                {/* Name Input */}
                <div className="flex-1">
                  <input
                    type="text"
                    name="name"
                    placeholder="YOUR NAME"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 rounded-full border-0 outline-none text-gray-600 placeholder-gray-500 font-medium text-sm tracking-wide bg-white/95 backdrop-blur-sm focus:bg-white focus:ring-2 focus:ring-white/50 transition-all duration-300"
                    required
                  />
                </div>

                {/* Email Input */}
                <div className="flex-1">
                  <input
                    type="email"
                    name="email"
                    placeholder="YOUR BUSINESS EMAIL"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 rounded-full border-0 outline-none text-gray-600 placeholder-gray-500 font-medium text-sm tracking-wide bg-white/95 backdrop-blur-sm focus:bg-white focus:ring-2 focus:ring-white/50 transition-all duration-300"
                    required
                  />
                </div>

                {/* Phone Input */}
                <div className="flex-1">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="YOUR PHONE"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 rounded-full border-0 outline-none text-gray-600 placeholder-gray-500 font-medium text-sm tracking-wide bg-white/95 backdrop-blur-sm focus:bg-white focus:ring-2 focus:ring-white/50 transition-all duration-300"
                    required
                  />
                </div>

                {/* Submit Button */}
                <div className="flex-shrink-0">
                  <button
                    type="submit"
                    disabled={loading}
                    className={`bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full font-semibold text-sm tracking-wide flex items-center gap-3 transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-gray-700 ${
                      loading ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    {loading ? "SENDING..." : "GET STARTED"}
                    <Mail className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
            {/* End of Right Side */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CAT;
