"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from "next/navigation";

const Info = () => {
  const router = useRouter();
  
  return (
    <div className="text-white py-8 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
      {/* Text Content */}
      <motion.div
        className="w-full lg:w-1/2 space-y-4 p-4 sm:p-6 lg:p-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
          WANT TO KNOW MORE?
        </h2>
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">
          THERE'S A CHTRBOX IN ALL OF US.
        </h3>
        <p className="text-sm sm:text-base lg:text-lg">
          We're a bunch of experienced entrepreneurs, marketeers & tech geeks who believe that we can better the way marketing is done on the biggest social media platforms. We believe the power (including a chunk of monetization) of social media must lie with the people. We believe that the future lies in the beautiful blend of technology & people, and we're here to make it happen with you.
        </p>
        <p className="text-sm sm:text-base lg:text-lg">
          Just drop us a line, and one of our friendly neighbourhood superheroes out of Mumbai, Delhi or Bangalore will give you a call.
        </p>
        <motion.button
          className="bg-white text-red-500 font-bold py-2 px-4 sm:py-2 sm:px-5 rounded-lg mt-4 hover:bg-gray-200 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push("/Contact")}
        >
          CONTACT US
        </motion.button>
      </motion.div>

      {/* Image */}
      <motion.div
        className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-6 lg:mt-0"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      >
        <img
          src="/girl.png"
          alt="Girl with phone"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-cover"
        />
      </motion.div>
    </div>
  );
};

export default Info;