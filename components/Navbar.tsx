"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleItemClick = (item: string) => {
    setActiveItem(item);
    setIsOpen(false);
    setIsServicesOpen(false);
  };
  const services = [
    { name: 'Influencer & Brand Matchmaking', href: '/services/InfluencerMarketing' },
    { name: 'Social Media Management', href: '/services/SocialMediaMarketing' },
    { name: 'Campaign Strategy & Execution', href: '#' },
    { name: 'Brand Partnerships', href: '#' },
  ];
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About us', href: '/AboutUs' },
    { name: 'Services', href: '#', hasDropdown: true },
    { name: 'Influencers', href: '#' },
    { name: 'Brands', href: '#' }
  ];

  return (
    <nav className="flex items-center justify-between px-6 lg:px-12 py-6 relative z-50">
      <div className="flex items-center space-x-2">
        <motion.span
          className="text-3xl font-bold"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          ZOVAQ
        </motion.span>
      </div>

      <div className="hidden md:flex items-center space-x-8">
        {navItems.map((item) => (
          <div key={item.name} className="relative">
            {item.hasDropdown ? (
              <div
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <motion.button
                  className={`flex items-center space-x-1 transition-colors relative pb-1 ${activeItem === item.name
                    ? 'text-white border-b-2 border-orange-500'
                    : 'text-gray-300 hover:text-white'
                    }`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  onClick={() => handleItemClick(item.name)}
                >
                  <span>{item.name}</span>
                  <motion.div
                    animate={{ rotate: isServicesOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full left-0 mt-2 w-64 bg-gray-900/95 backdrop-blur-sm rounded-lg shadow-xl border border-gray-700/50 overflow-hidden"
                    >
                      <div className="py-2">
                        {services.map((service, index) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-orange-500/10 transition-all duration-200 border-l-2 border-transparent hover:border-orange-500"
                            onClick={() => handleItemClick('Services')}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <motion.a
                href={item.href}
                className={`transition-colors relative pb-1 ${activeItem === item.name
                  ? 'text-white border-b-2 border-orange-500'
                  : 'text-gray-300 hover:text-white'
                  }`}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                onClick={(e) => {
                  if (!item.hasDropdown && item.href) {
                    return;
                  }
                  e.preventDefault();
                  handleItemClick(item.name);
                }}
              >
                {item.name}
              </motion.a>
            )}
          </div>
        ))}
      </div>

      <motion.button
        className="hidden md:block bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-medium transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => handleItemClick('Contact')}
      >
        Contact us
      </motion.button>

      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <motion.svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </motion.svg>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden absolute top-16 left-0 right-0 bg-gray-900/95 backdrop-blur-sm text-white flex flex-col space-y-1 py-4 rounded-b-lg shadow-xl border-t border-gray-700/50"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item, index) => (
              <div key={item.name}>
                <motion.a
                  href={item.href}
                  className={`block px-6 py-3 transition-colors ${activeItem === item.name
                    ? 'text-orange-500 bg-orange-500/10'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                    }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={(e) => {
                    e.preventDefault();
                    if (item.hasDropdown) {
                      setIsServicesOpen(!isServicesOpen);
                    } else {
                      handleItemClick(item.name);
                    }
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span>{item.name}</span>
                    {item.hasDropdown && (
                      <motion.div
                        animate={{ rotate: isServicesOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.div>
                    )}
                  </div>
                </motion.a>

                <AnimatePresence>
                  {item.hasDropdown && isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-gray-800/50"
                    >
                      {services.map((service, serviceIndex) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="block px-12 py-2 text-gray-400 hover:text-white hover:bg-orange-500/10 transition-colors"
                          onClick={() => handleItemClick('Services')}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <motion.button
              className="mx-6 mt-4 bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-medium transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              onClick={() => handleItemClick('Contact')}
            >
              Contact us
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
