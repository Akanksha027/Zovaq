"use client";

import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from "next/navigation";
import Image from 'next/image';

// Animation variants for better organization and type safety
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const }
};

const fadeInUpDelayed = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" as const, delay: 0.2 }
};

const buttonVariants = {
  hover: { scale: 1.05 },
  tap: { scale: 0.95 }
};

// Viewport configuration for intersection observer
const viewportConfig = {
  once: false,
  amount: 0.3 as const
};

const Info: React.FC = () => {
  const router = useRouter();

  // Memoized navigation handler with proper typing
  const handleContactClick = useCallback((): void => {
    try {
      router.push("/Contact");
    } catch (error) {
      console.error("Navigation error:", error);
    }
  }, [router]);

  return (
    <div className="text-white py-8 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-center gap-8">
      {/* Text Content Section */}
      <motion.div
        className="w-full lg:w-lvh space-y-4 p-4 sm:p-6 lg:p-8"
        initial={fadeInUp.initial}
        whileInView={fadeInUp.animate}
        viewport={viewportConfig}
        transition={fadeInUp.transition}
      >
        <motion.h2 
          className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          WANT TO KNOW MORE?
        </motion.h2>
        
        <motion.h3 
          className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          THERE&apos;S A CHTRBOX IN ALL OF US.
        </motion.h3>
        
        <motion.p 
          className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          We&apos;re a bunch of experienced entrepreneurs, marketeers & tech geeks who believe that we can better the way marketing is done on the biggest social media platforms. We believe the power (including a chunk of monetization) of social media must lie with the people. We believe that the future lies in the beautiful blend of technology & people, and we&apos;re here to make it happen with you.
        </motion.p>
        
        <motion.p 
          className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Just drop us a line, and one of our friendly neighbourhood superheroes out of Mumbai, Delhi or Bangalore will give you a call.
        </motion.p>
        
        <motion.button
          className="bg-white text-red-500 font-bold py-3 px-6 sm:py-3 sm:px-7 lg:py-4 lg:px-8 rounded-lg mt-6 hover:bg-gray-100 active:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-red-200 disabled:opacity-50 disabled:cursor-not-allowed"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          onClick={handleContactClick}
          type="button"
          aria-label="Navigate to contact page"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          CONTACT US
        </motion.button>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="w-full lg:w-1/3 flex justify-center"
        initial={fadeInUpDelayed.initial}
        whileInView={fadeInUpDelayed.animate}
        viewport={viewportConfig}
        transition={fadeInUpDelayed.transition}
      >
        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
          <Image
            src="/girl.png"
            alt="Girl with phone representing our digital marketing services"
            width={400}
            height={500}
            className="w-full h-auto object-cover rounded-lg shadow-2xl"
            priority={false}
            loading="lazy"
            quality={85}
            sizes="(max-width: 640px) 320px, (max-width: 768px) 384px, (max-width: 1024px) 448px, 512px"
            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
              console.error("Image failed to load:", e);
              // Fallback could be implemented here
            }}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Info;