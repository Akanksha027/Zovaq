"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';

import { useRouter, usePathname } from 'next/navigation';

// Types
interface Service {
  name: string;
  href: string;
}

interface NavItem {
  name: string;
  href: string;
  hasDropdown?: boolean;
}

type ActiveItem = 'Home' | 'About us' | 'Services' | 'Contact us' | '';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isServicesOpen, setIsServicesOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  
  const router = useRouter();
  const pathname: string = usePathname() || '';

  // Check screen size
  useEffect(() => {
    const checkScreenSize = (): void => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Close mobile menu when screen size changes
  useEffect(() => {
    if (!isMobile) {
      setIsOpen(false);
    }
  }, [isMobile]);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  const handleContactClick = (): void => {
    setIsOpen(false);
    router.push("/Contact");
  };

  const handleItemClick = (href: string): void => {
    if (href !== '#') {
      setIsOpen(false);
      setIsServicesOpen(false);
      router.push(href);
    }
  };

  // Determine active item based on current pathname
  const getActiveItem = (): ActiveItem => {
    if (pathname === '/') return 'Home';
    if (pathname === '/AboutUs') return 'About us';
    if (pathname && pathname.startsWith('/services/')) return 'Services';
    if (pathname === '/Contact') return 'Contact us';
    return '';
  };

  const services: Service[] = [
    { name: 'Influencer Marketing', href: '/services/InfluencerMarketing' },
    { name: 'Social Media Marketing', href: '/services/SocialMediaMarketing' },
    { name: 'Brand Awareness', href: '/services/BrandAwareness' },
  ];

  const navItems: NavItem[] = [
    { name: 'Home', href: '/' },
    { name: 'About us', href: '/AboutUs' },
    { name: 'Services', href: '#', hasDropdown: true },
  ];

  const activeItem: ActiveItem = getActiveItem();

  return (
    <nav className="flex items-center justify-between px-4 sm:px-6 lg:px-12 py-4 lg:py-6 relative z-50">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <motion.span
          className="text-2xl sm:text-3xl font-bold text-white cursor-pointer"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => handleItemClick('/')}
        >
          ZOVAQ
        </motion.span>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
        {navItems.map((item) => (
          <div key={item.name} className="relative">
            {item.hasDropdown ? (
              <div
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <motion.button
                  className={`flex items-center space-x-1 transition-all duration-300 relative pb-2 px-2 ${
                    activeItem === item.name
                      ? 'text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <span className="text-sm lg:text-base">{item.name}</span>
                  <motion.div
                    animate={{ rotate: isServicesOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                  
                  {/* Active indicator */}
                  {activeItem === item.name && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500"
                      layoutId="activeIndicator"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
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
                        {services.map((service: Service) => (
                          <button
                            key={service.name}
                            onClick={() => handleItemClick(service.href)}
                            className={`w-full text-left block px-4 py-3 text-gray-300 hover:text-white hover:bg-orange-500/10 transition-all duration-200 border-l-2 border-transparent hover:border-orange-500 ${
                              pathname === service.href ? 'text-orange-500 bg-orange-500/10 border-orange-500' : ''
                            }`}
                          >
                            {service.name}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <motion.button
                onClick={() => handleItemClick(item.href)}
                className={`transition-all duration-300 relative pb-2 px-2 text-sm lg:text-base ${
                  activeItem === item.name
                    ? 'text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {item.name}
                
                {/* Active indicator */}
                {activeItem === item.name && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500"
                    layoutId="activeIndicator"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.button>
            )}
          </div>
        ))}
      </div>

      {/* Contact Button - Desktop */}
      <motion.button
        className="hidden md:block bg-orange-500 hover:bg-orange-600 px-4 lg:px-6 py-2 lg:py-3 rounded-lg font-medium transition-all duration-300 text-sm lg:text-base hover:shadow-lg hover:shadow-orange-500/25"
        onClick={handleContactClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Contact us
      </motion.button>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button 
          onClick={toggleMenu} 
          className="text-white focus:outline-none p-2"
          aria-label="Toggle menu"
        >
          <motion.div
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </motion.div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 bg-gray-900/98 backdrop-blur-md text-white shadow-2xl border-t border-gray-700/50"
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="py-4 px-4 space-y-1">
              {navItems.map((item: NavItem, index: number) => (
                <div key={item.name}>
                  <motion.button
                    onClick={() => {
                      if (item.hasDropdown) {
                        setIsServicesOpen(!isServicesOpen);
                      } else {
                        handleItemClick(item.href);
                      }
                    }}
                    className={`w-full text-left block px-4 py-3 rounded-lg transition-all duration-200 ${
                      activeItem === item.name
                        ? 'text-orange-500 bg-orange-500/10 border-l-4 border-orange-500'
                        : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{item.name}</span>
                      {item.hasDropdown && (
                        <motion.div
                          animate={{ rotate: isServicesOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </motion.div>
                      )}
                    </div>
                  </motion.button>

                  {/* Mobile Services Dropdown */}
                  <AnimatePresence>
                    {item.hasDropdown && isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="bg-gray-800/30 rounded-lg mx-4 mt-2 mb-2">
                          {services.map((service: Service) => (
                            <button
                              key={service.name}
                              onClick={() => handleItemClick(service.href)}
                              className={`w-full text-left block px-6 py-3 text-gray-400 hover:text-white hover:bg-orange-500/10 transition-all duration-200 first:rounded-t-lg last:rounded-b-lg ${
                                pathname === service.href ? 'text-orange-500 bg-orange-500/10' : ''
                              }`}
                            >
                              {service.name}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* Mobile Contact Button */}
              <motion.button
                className="w-full bg-orange-500 hover:bg-orange-600 px-4 py-3 rounded-lg font-medium transition-all duration-300 mt-4 mx-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                onClick={handleContactClick}
                whileTap={{ scale: 0.95 }}
              >
                Contact us
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;